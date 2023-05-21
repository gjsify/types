
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-restextras-1.0-import.d.ts';
    
/**
 * RestExtras-1.0
 */

import type Soup from '@girs/node-soup-3.0';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type Rest from '@girs/node-rest-1.0';

export namespace RestExtras {

interface YoutubeProxyUploadCallback {
    (proxy: YoutubeProxy, payload: string | null, total: number, uploaded: number, error: GLib.Error, weakObject: GObject.Object): void
}
module FlickrProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Rest.Proxy.ConstructorProperties {

        // Own constructor properties of RestExtras-1.0.RestExtras.FlickrProxy

        apiKey?: string | null
        sharedSecret?: string | null
        token?: string | null
    }

}

interface FlickrProxy {

    // Own properties of RestExtras-1.0.RestExtras.FlickrProxy

    readonly apiKey: string | null
    readonly sharedSecret: string | null
    token: string | null
    __gtype__: number

    // Own fields of RestExtras-1.0.RestExtras.FlickrProxy

    parentInstance: any

    // Owm methods of RestExtras-1.0.RestExtras.FlickrProxy

    buildLoginUrl(frob: string | null, perms: string | null): string | null
    /**
     * Get the API key.
     * @returns the API key. This string is owned by #FlickrProxy and should not be freed.
     */
    getApiKey(): string | null
    /**
     * Get the shared secret for authentication.
     * @returns the shared secret. This string is owned by #FlickrProxy and should not be freed.
     */
    getSharedSecret(): string | null
    /**
     * Get the current token.
     * @returns the token, or %NULL if there is no token yet.  This string is owned by #FlickrProxy and should not be freed.
     */
    getToken(): string | null
    /**
     * Create a new #RestProxyCall that can be used for uploading.
     * 
     * See http://www.flickr.com/services/api/upload.api.html for details on
     * uploading to Flickr.
     * @returns a new #FlickrProxyCall
     */
    newUpload(): FlickrProxyCall
    /**
     * Create a new #RestProxyCall that can be used for uploading.  `filename` will
     * be set as the "photo" parameter for you, avoiding you from having to open the
     * file and determine the MIME type.
     * 
     * Note that this function can in theory block.
     * 
     * See http://www.flickr.com/services/api/upload.api.html for details on
     * uploading to Flickr.
     * @param filename the file to upload
     * @returns a new #FlickrProxyCall
     */
    newUploadForFile(filename: string | null): FlickrProxyCall
    /**
     * Set the token.
     * @param token the access token
     */
    setToken(token: string | null): void
    sign(params: GLib.HashTable): string | null

    // Class property signals of RestExtras-1.0.RestExtras.FlickrProxy

    connect(sigName: "notify::api-key", callback: (...args: any[]) => void): number
    on(sigName: "notify::api-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::api-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::api-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::api-key", ...args: any[]): void
    connect(sigName: "notify::shared-secret", callback: (...args: any[]) => void): number
    on(sigName: "notify::shared-secret", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::shared-secret", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::shared-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::shared-secret", ...args: any[]): void
    connect(sigName: "notify::token", callback: (...args: any[]) => void): number
    on(sigName: "notify::token", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::token", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::token", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::binding-required", callback: (...args: any[]) => void): number
    on(sigName: "notify::binding-required", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::binding-required", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::binding-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::binding-required", ...args: any[]): void
    connect(sigName: "notify::disable-cookies", callback: (...args: any[]) => void): number
    on(sigName: "notify::disable-cookies", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disable-cookies", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disable-cookies", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disable-cookies", ...args: any[]): void
    connect(sigName: "notify::password", callback: (...args: any[]) => void): number
    on(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-ca-file", ...args: any[]): void
    connect(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-strict", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-strict", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-strict", ...args: any[]): void
    connect(sigName: "notify::url-format", callback: (...args: any[]) => void): number
    on(sigName: "notify::url-format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::url-format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::url-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::url-format", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: "notify::username", callback: (...args: any[]) => void): number
    on(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FlickrProxy extends Rest.Proxy {

    // Own properties of RestExtras-1.0.RestExtras.FlickrProxy

    static name: string

    // Constructors of RestExtras-1.0.RestExtras.FlickrProxy

    constructor(config?: FlickrProxy.ConstructorProperties) 
    constructor(apiKey: string | null, sharedSecret: string | null) 
    static new(apiKey: string | null, sharedSecret: string | null): FlickrProxy

    // Overloads of new

    /**
     * Create a new #RestProxy for the specified endpoint `url_format,` using the
     * "GET" method.
     * 
     * Set `binding_required` to %TRUE if the URL contains string formatting
     * operations (for example "http://foo.com/%<!-- -->s".  These must be expanded
     * using rest_proxy_bind() before invoking the proxy.
     * @constructor 
     * @param urlFormat the endpoint URL
     * @param bindingRequired whether the URL needs to be bound before calling
     * @returns A new #RestProxy.
     */
    static new(urlFormat: string | null, bindingRequired: boolean): Rest.Proxy
    static newWithToken(apiKey: string | null, sharedSecret: string | null, token: string | null): FlickrProxy
    _init(config?: FlickrProxy.ConstructorProperties): void
    /**
     * Examines the Flickr response and if it not a successful reply, set `error` and
     * return FALSE.
     * @param root The root node of a parsed Flickr response
     * @returns %TRUE if this response is successful, %FALSE otherwise.
     */
    static isSuccessful(root: Rest.XmlNode): boolean
}

module FlickrProxyCall {

    // Constructor properties interface

    interface ConstructorProperties extends Rest.ProxyCall.ConstructorProperties {

        // Own constructor properties of RestExtras-1.0.RestExtras.FlickrProxyCall

        /**
         * Set if the call should be sent to the photo upload endpoint and not the
         * general-purpose endpoint.
         */
        upload?: boolean | null
    }

}

interface FlickrProxyCall {

    // Own properties of RestExtras-1.0.RestExtras.FlickrProxyCall

    // Has conflict: readonly upload: boolean
    __gtype__: number

    // Own fields of RestExtras-1.0.RestExtras.FlickrProxyCall

    parentInstance: any

    // Class property signals of RestExtras-1.0.RestExtras.FlickrProxyCall

    connect(sigName: "notify::upload", callback: (...args: any[]) => void): number
    on(sigName: "notify::upload", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::upload", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::upload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::upload", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::proxy", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FlickrProxyCall extends Rest.ProxyCall {

    // Own properties of RestExtras-1.0.RestExtras.FlickrProxyCall

    static name: string

    // Constructors of RestExtras-1.0.RestExtras.FlickrProxyCall

    constructor(config?: FlickrProxyCall.ConstructorProperties) 
    _init(config?: FlickrProxyCall.ConstructorProperties): void
}

module LastfmProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Rest.Proxy.ConstructorProperties {

        // Own constructor properties of RestExtras-1.0.RestExtras.LastfmProxy

        apiKey?: string | null
        secret?: string | null
        sessionKey?: string | null
    }

}

interface LastfmProxy {

    // Own properties of RestExtras-1.0.RestExtras.LastfmProxy

    readonly apiKey: string | null
    readonly secret: string | null
    sessionKey: string | null
    __gtype__: number

    // Own fields of RestExtras-1.0.RestExtras.LastfmProxy

    parentInstance: any

    // Owm methods of RestExtras-1.0.RestExtras.LastfmProxy

    buildLoginUrl(token: string | null): string | null
    /**
     * Get the API key.
     * @returns the API key. This string is owned by #LastfmProxy and should not be freed.
     */
    getApiKey(): string | null
    /**
     * Get the secret for authentication.
     * @returns the secret. This string is owned by #LastfmProxy and should not be freed.
     */
    getSecret(): string | null
    /**
     * Get the current session key.
     * @returns the session key, or %NULL if there is no session key yet.  This string is owned by #LastfmProxy and should not be freed.
     */
    getSessionKey(): string | null
    /**
     * Set the session key.
     * @param sessionKey the access session_key
     */
    setSessionKey(sessionKey: string | null): void
    sign(params: GLib.HashTable): string | null

    // Class property signals of RestExtras-1.0.RestExtras.LastfmProxy

    connect(sigName: "notify::api-key", callback: (...args: any[]) => void): number
    on(sigName: "notify::api-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::api-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::api-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::api-key", ...args: any[]): void
    connect(sigName: "notify::secret", callback: (...args: any[]) => void): number
    on(sigName: "notify::secret", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::secret", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::secret", ...args: any[]): void
    connect(sigName: "notify::session-key", callback: (...args: any[]) => void): number
    on(sigName: "notify::session-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session-key", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::binding-required", callback: (...args: any[]) => void): number
    on(sigName: "notify::binding-required", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::binding-required", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::binding-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::binding-required", ...args: any[]): void
    connect(sigName: "notify::disable-cookies", callback: (...args: any[]) => void): number
    on(sigName: "notify::disable-cookies", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disable-cookies", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disable-cookies", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disable-cookies", ...args: any[]): void
    connect(sigName: "notify::password", callback: (...args: any[]) => void): number
    on(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-ca-file", ...args: any[]): void
    connect(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-strict", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-strict", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-strict", ...args: any[]): void
    connect(sigName: "notify::url-format", callback: (...args: any[]) => void): number
    on(sigName: "notify::url-format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::url-format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::url-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::url-format", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: "notify::username", callback: (...args: any[]) => void): number
    on(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class LastfmProxy extends Rest.Proxy {

    // Own properties of RestExtras-1.0.RestExtras.LastfmProxy

    static name: string

    // Constructors of RestExtras-1.0.RestExtras.LastfmProxy

    constructor(config?: LastfmProxy.ConstructorProperties) 
    constructor(apiKey: string | null, secret: string | null) 
    static new(apiKey: string | null, secret: string | null): LastfmProxy

    // Overloads of new

    /**
     * Create a new #RestProxy for the specified endpoint `url_format,` using the
     * "GET" method.
     * 
     * Set `binding_required` to %TRUE if the URL contains string formatting
     * operations (for example "http://foo.com/%<!-- -->s".  These must be expanded
     * using rest_proxy_bind() before invoking the proxy.
     * @constructor 
     * @param urlFormat the endpoint URL
     * @param bindingRequired whether the URL needs to be bound before calling
     * @returns A new #RestProxy.
     */
    static new(urlFormat: string | null, bindingRequired: boolean): Rest.Proxy
    static newWithSession(apiKey: string | null, secret: string | null, sessionKey: string | null): LastfmProxy
    _init(config?: LastfmProxy.ConstructorProperties): void
    /**
     * Examines the Lastfm response and if it not a successful reply, set `error` and
     * return FALSE.
     * @param root The root node of a parsed Lastfm response
     * @returns %TRUE if this response is successful, %FALSE otherwise.
     */
    static isSuccessful(root: Rest.XmlNode): boolean
}

module LastfmProxyCall {

    // Constructor properties interface

    interface ConstructorProperties extends Rest.ProxyCall.ConstructorProperties {
    }

}

interface LastfmProxyCall {

    // Own properties of RestExtras-1.0.RestExtras.LastfmProxyCall

    __gtype__: number

    // Own fields of RestExtras-1.0.RestExtras.LastfmProxyCall

    parentInstance: any

    // Class property signals of RestExtras-1.0.RestExtras.LastfmProxyCall

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::proxy", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #LastfmProxyCall has no publicly available members.
 * @class 
 */
class LastfmProxyCall extends Rest.ProxyCall {

    // Own properties of RestExtras-1.0.RestExtras.LastfmProxyCall

    static name: string

    // Constructors of RestExtras-1.0.RestExtras.LastfmProxyCall

    constructor(config?: LastfmProxyCall.ConstructorProperties) 
    _init(config?: LastfmProxyCall.ConstructorProperties): void
}

module YoutubeProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Rest.Proxy.ConstructorProperties {

        // Own constructor properties of RestExtras-1.0.RestExtras.YoutubeProxy

        developerKey?: string | null
        userAuth?: string | null
    }

}

interface YoutubeProxy {

    // Own properties of RestExtras-1.0.RestExtras.YoutubeProxy

    readonly developerKey: string | null
    userAuth: string | null
    __gtype__: number

    // Own fields of RestExtras-1.0.RestExtras.YoutubeProxy

    parentInstance: any

    // Owm methods of RestExtras-1.0.RestExtras.YoutubeProxy

    setUserAuth(userAuth: string | null): void
    /**
     * Upload a file.
     * @param filename filename
     * @param fields fields
     * @param incomplete incomplete
     * @param callback callback to invoke upon completion
     * @param weakObject an object instance used to tie the life cycle of the proxy to
     * @returns %TRUE, or %FALSE if the file could not be opened
     */
    uploadAsync(filename: string | null, fields: GLib.HashTable, incomplete: boolean, callback: YoutubeProxyUploadCallback, weakObject: GObject.Object): boolean

    // Class property signals of RestExtras-1.0.RestExtras.YoutubeProxy

    connect(sigName: "notify::developer-key", callback: (...args: any[]) => void): number
    on(sigName: "notify::developer-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::developer-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::developer-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::developer-key", ...args: any[]): void
    connect(sigName: "notify::user-auth", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-auth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-auth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-auth", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::binding-required", callback: (...args: any[]) => void): number
    on(sigName: "notify::binding-required", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::binding-required", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::binding-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::binding-required", ...args: any[]): void
    connect(sigName: "notify::disable-cookies", callback: (...args: any[]) => void): number
    on(sigName: "notify::disable-cookies", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disable-cookies", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disable-cookies", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disable-cookies", ...args: any[]): void
    connect(sigName: "notify::password", callback: (...args: any[]) => void): number
    on(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-ca-file", ...args: any[]): void
    connect(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-strict", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-strict", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-strict", ...args: any[]): void
    connect(sigName: "notify::url-format", callback: (...args: any[]) => void): number
    on(sigName: "notify::url-format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::url-format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::url-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::url-format", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: "notify::username", callback: (...args: any[]) => void): number
    on(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class YoutubeProxy extends Rest.Proxy {

    // Own properties of RestExtras-1.0.RestExtras.YoutubeProxy

    static name: string

    // Constructors of RestExtras-1.0.RestExtras.YoutubeProxy

    constructor(config?: YoutubeProxy.ConstructorProperties) 
    constructor(developerKey: string | null) 
    static new(developerKey: string | null): YoutubeProxy

    // Overloads of new

    /**
     * Create a new #RestProxy for the specified endpoint `url_format,` using the
     * "GET" method.
     * 
     * Set `binding_required` to %TRUE if the URL contains string formatting
     * operations (for example "http://foo.com/%<!-- -->s".  These must be expanded
     * using rest_proxy_bind() before invoking the proxy.
     * @constructor 
     * @param urlFormat the endpoint URL
     * @param bindingRequired whether the URL needs to be bound before calling
     * @returns A new #RestProxy.
     */
    static new(urlFormat: string | null, bindingRequired: boolean): Rest.Proxy
    static newWithAuth(developerKey: string | null, userAuth: string | null): YoutubeProxy
    _init(config?: YoutubeProxy.ConstructorProperties): void
}

interface FlickrProxyCallClass {

    // Own fields of RestExtras-1.0.RestExtras.FlickrProxyCallClass

    parentClass: Rest.ProxyCallClass
}

abstract class FlickrProxyCallClass {

    // Own properties of RestExtras-1.0.RestExtras.FlickrProxyCallClass

    static name: string
}

interface FlickrProxyClass {

    // Own fields of RestExtras-1.0.RestExtras.FlickrProxyClass

    parentClass: Rest.ProxyClass
}

abstract class FlickrProxyClass {

    // Own properties of RestExtras-1.0.RestExtras.FlickrProxyClass

    static name: string
}

interface LastfmProxyCallClass {

    // Own fields of RestExtras-1.0.RestExtras.LastfmProxyCallClass

    parentClass: Rest.ProxyCallClass
}

abstract class LastfmProxyCallClass {

    // Own properties of RestExtras-1.0.RestExtras.LastfmProxyCallClass

    static name: string
}

interface LastfmProxyClass {

    // Own fields of RestExtras-1.0.RestExtras.LastfmProxyClass

    parentClass: Rest.ProxyClass
}

abstract class LastfmProxyClass {

    // Own properties of RestExtras-1.0.RestExtras.LastfmProxyClass

    static name: string
}

interface YoutubeProxyClass {

    // Own fields of RestExtras-1.0.RestExtras.YoutubeProxyClass

    parentClass: Rest.ProxyClass
}

abstract class YoutubeProxyClass {

    // Own properties of RestExtras-1.0.RestExtras.YoutubeProxyClass

    static name: string
}

}

export default RestExtras;
// END