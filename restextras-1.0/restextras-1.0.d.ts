
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './restextras-1.0-ambient.d.ts';
import './restextras-1.0-import.d.ts';
/**
 * RestExtras-1.0
 */

import type Soup from '@girs/soup-3.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Rest from '@girs/rest-1.0';

export namespace RestExtras {

interface YoutubeProxyUploadCallback {
    (proxy: YoutubeProxy, payload: string, total: number, uploaded: number, error: GLib.Error, weak_object: GObject.Object): void
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

    // Own fields of RestExtras-1.0.RestExtras.FlickrProxy

    parent_instance: Rest.Proxy & GObject.Object

    // Owm methods of RestExtras-1.0.RestExtras.FlickrProxy

    build_login_url(frob: string, perms: string): string | null
    /**
     * Get the API key.
     * @returns the API key. This string is owned by #FlickrProxy and should not be freed.
     */
    get_api_key(): string
    /**
     * Get the shared secret for authentication.
     * @returns the shared secret. This string is owned by #FlickrProxy and should not be freed.
     */
    get_shared_secret(): string
    /**
     * Get the current token.
     * @returns the token, or %NULL if there is no token yet.  This string is owned by #FlickrProxy and should not be freed.
     */
    get_token(): string
    /**
     * Create a new #RestProxyCall that can be used for uploading.
     * 
     * See http://www.flickr.com/services/api/upload.api.html for details on
     * uploading to Flickr.
     * @returns a new #FlickrProxyCall
     */
    new_upload(): FlickrProxyCall
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
    new_upload_for_file(filename: string): FlickrProxyCall
    /**
     * Set the token.
     * @param token the access token
     */
    set_token(token: string): void
    sign(params: GLib.HashTable): string | null

    // Class property signals of RestExtras-1.0.RestExtras.FlickrProxy

    connect(sigName: "notify::api-key", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::api-key", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::api-key", ...args: any[]): void
    connect(sigName: "notify::shared-secret", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-secret", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shared-secret", ...args: any[]): void
    connect(sigName: "notify::token", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::token", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::token", ...args: any[]): void
    connect(sigName: "notify::binding-required", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::binding-required", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::binding-required", ...args: any[]): void
    connect(sigName: "notify::disable-cookies", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-cookies", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-cookies", ...args: any[]): void
    connect(sigName: "notify::password", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ssl-ca-file", ...args: any[]): void
    connect(sigName: "notify::ssl-strict", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ssl-strict", ...args: any[]): void
    connect(sigName: "notify::url-format", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-format", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url-format", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: "notify::username", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: FlickrProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FlickrProxy extends Rest.Proxy {

    // Own properties of RestExtras-1.0.RestExtras.FlickrProxy

    static name: string
    static $gtype: GObject.GType<FlickrProxy>

    // Constructors of RestExtras-1.0.RestExtras.FlickrProxy

    constructor(config?: FlickrProxy.ConstructorProperties) 
    constructor(api_key: string, shared_secret: string) 
    static new(api_key: string, shared_secret: string): FlickrProxy

    // Overloads of new

    /**
     * Create a new #RestProxy for the specified endpoint `url_format,` using the
     * "GET" method.
     * 
     * Set `binding_required` to %TRUE if the URL contains string formatting
     * operations (for example "http://foo.com/%<!-- -->s".  These must be expanded
     * using rest_proxy_bind() before invoking the proxy.
     * @constructor 
     * @param url_format the endpoint URL
     * @param binding_required whether the URL needs to be bound before calling
     * @returns A new #RestProxy.
     */
    static new(url_format: string, binding_required: boolean): Rest.Proxy
    static new_with_token(api_key: string, shared_secret: string, token: string): FlickrProxy
    _init(config?: FlickrProxy.ConstructorProperties): void
    /**
     * Examines the Flickr response and if it not a successful reply, set `error` and
     * return FALSE.
     * @param root The root node of a parsed Flickr response
     * @returns %TRUE if this response is successful, %FALSE otherwise.
     */
    static is_successful(root: Rest.XmlNode): boolean
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

    // Own fields of RestExtras-1.0.RestExtras.FlickrProxyCall

    parent_instance: Rest.ProxyCall & GObject.Object

    // Class property signals of RestExtras-1.0.RestExtras.FlickrProxyCall

    connect(sigName: "notify::upload", callback: (($obj: FlickrProxyCall, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upload", callback: (($obj: FlickrProxyCall, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upload", ...args: any[]): void
    connect(sigName: "notify::proxy", callback: (($obj: FlickrProxyCall, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: FlickrProxyCall, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FlickrProxyCall extends Rest.ProxyCall {

    // Own properties of RestExtras-1.0.RestExtras.FlickrProxyCall

    static name: string
    static $gtype: GObject.GType<FlickrProxyCall>

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

    // Own fields of RestExtras-1.0.RestExtras.LastfmProxy

    parent_instance: Rest.Proxy & GObject.Object

    // Owm methods of RestExtras-1.0.RestExtras.LastfmProxy

    build_login_url(token: string): string | null
    /**
     * Get the API key.
     * @returns the API key. This string is owned by #LastfmProxy and should not be freed.
     */
    get_api_key(): string
    /**
     * Get the secret for authentication.
     * @returns the secret. This string is owned by #LastfmProxy and should not be freed.
     */
    get_secret(): string
    /**
     * Get the current session key.
     * @returns the session key, or %NULL if there is no session key yet.  This string is owned by #LastfmProxy and should not be freed.
     */
    get_session_key(): string
    /**
     * Set the session key.
     * @param session_key the access session_key
     */
    set_session_key(session_key: string): void
    sign(params: GLib.HashTable): string | null

    // Class property signals of RestExtras-1.0.RestExtras.LastfmProxy

    connect(sigName: "notify::api-key", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::api-key", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::api-key", ...args: any[]): void
    connect(sigName: "notify::secret", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secret", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secret", ...args: any[]): void
    connect(sigName: "notify::session-key", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-key", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::session-key", ...args: any[]): void
    connect(sigName: "notify::binding-required", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::binding-required", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::binding-required", ...args: any[]): void
    connect(sigName: "notify::disable-cookies", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-cookies", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-cookies", ...args: any[]): void
    connect(sigName: "notify::password", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ssl-ca-file", ...args: any[]): void
    connect(sigName: "notify::ssl-strict", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ssl-strict", ...args: any[]): void
    connect(sigName: "notify::url-format", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-format", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url-format", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: "notify::username", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: LastfmProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LastfmProxy extends Rest.Proxy {

    // Own properties of RestExtras-1.0.RestExtras.LastfmProxy

    static name: string
    static $gtype: GObject.GType<LastfmProxy>

    // Constructors of RestExtras-1.0.RestExtras.LastfmProxy

    constructor(config?: LastfmProxy.ConstructorProperties) 
    constructor(api_key: string, secret: string) 
    static new(api_key: string, secret: string): LastfmProxy

    // Overloads of new

    /**
     * Create a new #RestProxy for the specified endpoint `url_format,` using the
     * "GET" method.
     * 
     * Set `binding_required` to %TRUE if the URL contains string formatting
     * operations (for example "http://foo.com/%<!-- -->s".  These must be expanded
     * using rest_proxy_bind() before invoking the proxy.
     * @constructor 
     * @param url_format the endpoint URL
     * @param binding_required whether the URL needs to be bound before calling
     * @returns A new #RestProxy.
     */
    static new(url_format: string, binding_required: boolean): Rest.Proxy
    static new_with_session(api_key: string, secret: string, session_key: string): LastfmProxy
    _init(config?: LastfmProxy.ConstructorProperties): void
    /**
     * Examines the Lastfm response and if it not a successful reply, set `error` and
     * return FALSE.
     * @param root The root node of a parsed Lastfm response
     * @returns %TRUE if this response is successful, %FALSE otherwise.
     */
    static is_successful(root: Rest.XmlNode): boolean
}

module LastfmProxyCall {

    // Constructor properties interface

    interface ConstructorProperties extends Rest.ProxyCall.ConstructorProperties {
    }

}

interface LastfmProxyCall {

    // Own fields of RestExtras-1.0.RestExtras.LastfmProxyCall

    parent_instance: Rest.ProxyCall & GObject.Object

    // Class property signals of RestExtras-1.0.RestExtras.LastfmProxyCall

    connect(sigName: "notify::proxy", callback: (($obj: LastfmProxyCall, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: LastfmProxyCall, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #LastfmProxyCall has no publicly available members.
 * @class 
 */
class LastfmProxyCall extends Rest.ProxyCall {

    // Own properties of RestExtras-1.0.RestExtras.LastfmProxyCall

    static name: string
    static $gtype: GObject.GType<LastfmProxyCall>

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

    // Own fields of RestExtras-1.0.RestExtras.YoutubeProxy

    parent_instance: Rest.Proxy & GObject.Object

    // Owm methods of RestExtras-1.0.RestExtras.YoutubeProxy

    set_user_auth(user_auth: string): void
    /**
     * Upload a file.
     * @param filename filename
     * @param fields fields
     * @param incomplete incomplete
     * @param callback callback to invoke upon completion
     * @param weak_object an object instance used to tie the life cycle of the proxy to
     * @returns %TRUE, or %FALSE if the file could not be opened
     */
    upload_async(filename: string, fields: GLib.HashTable, incomplete: boolean, callback: YoutubeProxyUploadCallback, weak_object: GObject.Object): boolean

    // Class property signals of RestExtras-1.0.RestExtras.YoutubeProxy

    connect(sigName: "notify::developer-key", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::developer-key", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::developer-key", ...args: any[]): void
    connect(sigName: "notify::user-auth", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-auth", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-auth", ...args: any[]): void
    connect(sigName: "notify::binding-required", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::binding-required", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::binding-required", ...args: any[]): void
    connect(sigName: "notify::disable-cookies", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-cookies", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-cookies", ...args: any[]): void
    connect(sigName: "notify::password", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ssl-ca-file", ...args: any[]): void
    connect(sigName: "notify::ssl-strict", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ssl-strict", ...args: any[]): void
    connect(sigName: "notify::url-format", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-format", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url-format", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: "notify::username", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: YoutubeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class YoutubeProxy extends Rest.Proxy {

    // Own properties of RestExtras-1.0.RestExtras.YoutubeProxy

    static name: string
    static $gtype: GObject.GType<YoutubeProxy>

    // Constructors of RestExtras-1.0.RestExtras.YoutubeProxy

    constructor(config?: YoutubeProxy.ConstructorProperties) 
    constructor(developer_key: string) 
    static new(developer_key: string): YoutubeProxy

    // Overloads of new

    /**
     * Create a new #RestProxy for the specified endpoint `url_format,` using the
     * "GET" method.
     * 
     * Set `binding_required` to %TRUE if the URL contains string formatting
     * operations (for example "http://foo.com/%<!-- -->s".  These must be expanded
     * using rest_proxy_bind() before invoking the proxy.
     * @constructor 
     * @param url_format the endpoint URL
     * @param binding_required whether the URL needs to be bound before calling
     * @returns A new #RestProxy.
     */
    static new(url_format: string, binding_required: boolean): Rest.Proxy
    static new_with_auth(developer_key: string, user_auth: string): YoutubeProxy
    _init(config?: YoutubeProxy.ConstructorProperties): void
}

interface FlickrProxyCallClass {

    // Own fields of RestExtras-1.0.RestExtras.FlickrProxyCallClass

    parent_class: Rest.ProxyCallClass
}

abstract class FlickrProxyCallClass {

    // Own properties of RestExtras-1.0.RestExtras.FlickrProxyCallClass

    static name: string
}

interface FlickrProxyClass {

    // Own fields of RestExtras-1.0.RestExtras.FlickrProxyClass

    parent_class: Rest.ProxyClass
}

abstract class FlickrProxyClass {

    // Own properties of RestExtras-1.0.RestExtras.FlickrProxyClass

    static name: string
}

interface LastfmProxyCallClass {

    // Own fields of RestExtras-1.0.RestExtras.LastfmProxyCallClass

    parent_class: Rest.ProxyCallClass
}

abstract class LastfmProxyCallClass {

    // Own properties of RestExtras-1.0.RestExtras.LastfmProxyCallClass

    static name: string
}

interface LastfmProxyClass {

    // Own fields of RestExtras-1.0.RestExtras.LastfmProxyClass

    parent_class: Rest.ProxyClass
}

abstract class LastfmProxyClass {

    // Own properties of RestExtras-1.0.RestExtras.LastfmProxyClass

    static name: string
}

interface YoutubeProxyClass {

    // Own fields of RestExtras-1.0.RestExtras.YoutubeProxyClass

    parent_class: Rest.ProxyClass
}

abstract class YoutubeProxyClass {

    // Own properties of RestExtras-1.0.RestExtras.YoutubeProxyClass

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

export default RestExtras;
// END