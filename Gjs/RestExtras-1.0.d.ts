// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * RestExtras-1.0
 */

import type * as Gjs from './Gjs';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Rest from './Rest-1.0';

export namespace RestExtras {

interface YoutubeProxyUploadCallback {
    (proxy: YoutubeProxy, payload: string, total: number, uploaded: number, error: GLib.Error, weak_object: GObject.Object): void
}
interface FlickrProxy_ConstructProps extends Rest.Proxy_ConstructProps {

    // Own constructor properties of RestExtras-1.0.RestExtras.FlickrProxy

    api_key?: string | null
    shared_secret?: string | null
    token?: string | null
}

interface FlickrProxy {

    // Own properties of RestExtras-1.0.RestExtras.FlickrProxy

    readonly api_key: string
    readonly shared_secret: string
    token: string

    // Own fields of RestExtras-1.0.RestExtras.FlickrProxy

    parent_instance: Rest.Proxy

    // Owm methods of RestExtras-1.0.RestExtras.FlickrProxy

    build_login_url(frob: string, perms: string): string
    /**
     * Get the API key.
     */
    get_api_key(): string
    /**
     * Get the shared secret for authentication.
     */
    get_shared_secret(): string
    /**
     * Get the current token.
     */
    get_token(): string
    /**
     * Create a new #RestProxyCall that can be used for uploading.
     * 
     * See http://www.flickr.com/services/api/upload.api.html for details on
     * uploading to Flickr.
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
     */
    new_upload_for_file(filename: string): FlickrProxyCall
    /**
     * Set the token.
     * @param token the access token
     */
    set_token(token: string): void
    sign(params: GLib.HashTable): string

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

    constructor(config?: FlickrProxy_ConstructProps) 
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
     */
    static new(url_format: string, binding_required: boolean): Rest.Proxy
    static new_with_token(api_key: string, shared_secret: string, token: string): FlickrProxy
    _init(config?: FlickrProxy_ConstructProps): void
    /**
     * Examines the Flickr response and if it not a successful reply, set `error` and
     * return FALSE.
     * @param root The root node of a parsed Flickr response
     */
    static is_successful(root: Rest.XmlNode): boolean
}

interface FlickrProxyCall_ConstructProps extends Rest.ProxyCall_ConstructProps {

    // Own constructor properties of RestExtras-1.0.RestExtras.FlickrProxyCall

    /**
     * Set if the call should be sent to the photo upload endpoint and not the
     * general-purpose endpoint.
     */
    upload?: boolean | null
}

interface FlickrProxyCall {

    // Own properties of RestExtras-1.0.RestExtras.FlickrProxyCall

    /**
     * Set if the call should be sent to the photo upload endpoint and not the
     * general-purpose endpoint.
     */
    // TODO fix conflict: readonly upload: boolean

    // Own fields of RestExtras-1.0.RestExtras.FlickrProxyCall

    parent_instance: Rest.ProxyCall

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

    constructor(config?: FlickrProxyCall_ConstructProps) 
    _init(config?: FlickrProxyCall_ConstructProps): void
}

interface LastfmProxy_ConstructProps extends Rest.Proxy_ConstructProps {

    // Own constructor properties of RestExtras-1.0.RestExtras.LastfmProxy

    api_key?: string | null
    secret?: string | null
    session_key?: string | null
}

interface LastfmProxy {

    // Own properties of RestExtras-1.0.RestExtras.LastfmProxy

    readonly api_key: string
    readonly secret: string
    session_key: string

    // Own fields of RestExtras-1.0.RestExtras.LastfmProxy

    parent_instance: Rest.Proxy

    // Owm methods of RestExtras-1.0.RestExtras.LastfmProxy

    build_login_url(token: string): string
    /**
     * Get the API key.
     */
    get_api_key(): string
    /**
     * Get the secret for authentication.
     */
    get_secret(): string
    /**
     * Get the current session key.
     */
    get_session_key(): string
    /**
     * Set the session key.
     * @param session_key the access session_key
     */
    set_session_key(session_key: string): void
    sign(params: GLib.HashTable): string

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

    constructor(config?: LastfmProxy_ConstructProps) 
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
     */
    static new(url_format: string, binding_required: boolean): Rest.Proxy
    static new_with_session(api_key: string, secret: string, session_key: string): LastfmProxy
    _init(config?: LastfmProxy_ConstructProps): void
    /**
     * Examines the Lastfm response and if it not a successful reply, set `error` and
     * return FALSE.
     * @param root The root node of a parsed Lastfm response
     */
    static is_successful(root: Rest.XmlNode): boolean
}

interface LastfmProxyCall_ConstructProps extends Rest.ProxyCall_ConstructProps {
}

interface LastfmProxyCall {

    // Own fields of RestExtras-1.0.RestExtras.LastfmProxyCall

    parent_instance: Rest.ProxyCall

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

    constructor(config?: LastfmProxyCall_ConstructProps) 
    _init(config?: LastfmProxyCall_ConstructProps): void
}

interface YoutubeProxy_ConstructProps extends Rest.Proxy_ConstructProps {

    // Own constructor properties of RestExtras-1.0.RestExtras.YoutubeProxy

    developer_key?: string | null
    user_auth?: string | null
}

interface YoutubeProxy {

    // Own properties of RestExtras-1.0.RestExtras.YoutubeProxy

    readonly developer_key: string
    user_auth: string

    // Own fields of RestExtras-1.0.RestExtras.YoutubeProxy

    parent_instance: Rest.Proxy

    // Owm methods of RestExtras-1.0.RestExtras.YoutubeProxy

    set_user_auth(user_auth: string): void
    /**
     * Upload a file.
     * @param filename filename
     * @param fields fields
     * @param incomplete incomplete
     * @param callback callback to invoke upon completion
     * @param weak_object an object instance used to tie the life cycle of the proxy to
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

    constructor(config?: YoutubeProxy_ConstructProps) 
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
     */
    static new(url_format: string, binding_required: boolean): Rest.Proxy
    static new_with_auth(developer_key: string, user_auth: string): YoutubeProxy
    _init(config?: YoutubeProxy_ConstructProps): void
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

}
export default RestExtras;