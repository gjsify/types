
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './rest-1.0-ambient.d.ts';
import './rest-1.0-import.d.ts';
/**
 * Rest-1.0
 */

import type Soup from '@girs/soup-3.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export enum MemoryUse {
    /**
     * the memory block can be assumed to always exist for the
     * lifetime of the parameter, #RestParam will use it directly.
     */
    STATIC,
    /**
     * #RestParam will take ownership of the memory block, and
     * g_free() it when it isn't used.
     */
    TAKE,
    /**
     * #RestParam will make a copy of the memory block.
     */
    COPY,
}
export enum OAuth2Error {
    NO_REFRESH_TOKEN,
    ACCESS_TOKEN_EXPIRED,
}
/**
 * Error domain used when returning errors from #RestProxyCall.
 */
export enum ProxyCallError {
    /**
     * the method call failed
     */
    FAILED,
}
/**
 * Error domain used when returning errors from a #RestProxy.
 */
export enum ProxyError {
    /**
     * Cancelled
     */
    CANCELLED,
    /**
     * Resolution
     */
    RESOLUTION,
    /**
     * Connection
     */
    CONNECTION,
    /**
     * SSL
     */
    SSL,
    /**
     * Input/Output
     */
    IO,
    /**
     * Failure
     */
    FAILED,
    /**
     * Invalid URL
     */
    URL_INVALID,
    /**
     * URL requires binding
     */
    BINDING_REQUIRED,
    /**
     * HTTP/Multiple choices
     */
    HTTP_MULTIPLE_CHOICES,
    /**
     * HTTP/Moved permanently
     */
    HTTP_MOVED_PERMANENTLY,
    /**
     * HTTP/Found
     */
    HTTP_FOUND,
    /**
     * HTTP/See other
     */
    HTTP_SEE_OTHER,
    /**
     * HTTP/Not modified
     */
    HTTP_NOT_MODIFIED,
    /**
     * HTTP/Use proxy
     */
    HTTP_USE_PROXY,
    /**
     * HTTP/306
     */
    HTTP_THREEOHSIX,
    /**
     * HTTP/Temporary redirect
     */
    HTTP_TEMPORARY_REDIRECT,
    /**
     * HTTP/Bad request
     */
    HTTP_BAD_REQUEST,
    /**
     * HTTP/Unauthorized
     */
    HTTP_UNAUTHORIZED,
    /**
     * HTTP/402
     */
    HTTP_FOUROHTWO,
    /**
     * HTTP/Forbidden
     */
    HTTP_FORBIDDEN,
    /**
     * HTTP/Not found
     */
    HTTP_NOT_FOUND,
    /**
     * HTTP/Method not allowed
     */
    HTTP_METHOD_NOT_ALLOWED,
    /**
     * HTTP/Not acceptable
     */
    HTTP_NOT_ACCEPTABLE,
    /**
     * HTTP/Proxy authentication required
     */
    HTTP_PROXY_AUTHENTICATION_REQUIRED,
    /**
     * HTTP/Request timeout
     */
    HTTP_REQUEST_TIMEOUT,
    /**
     * HTTP/Conflict
     */
    HTTP_CONFLICT,
    /**
     * HTTP/Gone
     */
    HTTP_GONE,
    /**
     * HTTP/Length required
     */
    HTTP_LENGTH_REQUIRED,
    /**
     * HTTP/Precondition failed
     */
    HTTP_PRECONDITION_FAILED,
    /**
     * HTTP/Request entity too large
     */
    HTTP_REQUEST_ENTITY_TOO_LARGE,
    /**
     * HTTP/Request URI too long
     */
    HTTP_REQUEST_URI_TOO_LONG,
    /**
     * HTTP/Unsupported media type
     */
    HTTP_UNSUPPORTED_MEDIA_TYPE,
    /**
     * HTTP/Requested range not satisfiable
     */
    HTTP_REQUESTED_RANGE_NOT_SATISFIABLE,
    /**
     * HTTP/Expectation failed
     */
    HTTP_EXPECTATION_FAILED,
    /**
     * HTTP/Internal server error
     */
    HTTP_INTERNAL_SERVER_ERROR,
    /**
     * HTTP/Not implemented
     */
    HTTP_NOT_IMPLEMENTED,
    /**
     * HTTP/Bad gateway
     */
    HTTP_BAD_GATEWAY,
    /**
     * HTTP/Service unavailable
     */
    HTTP_SERVICE_UNAVAILABLE,
    /**
     * HTTP/Gateway timeout
     */
    HTTP_GATEWAY_TIMEOUT,
    /**
     * HTTP/Version not supported
     */
    HTTP_HTTP_VERSION_NOT_SUPPORTED,
}
export function oauth2_error_quark(): GLib.Quark
export function proxy_call_error_quark(): GLib.Quark
export function proxy_error_quark(): GLib.Quark
/**
 * Creates a random string from a given alphabeth with length `length`
 * @param length the length of the random string
 * @returns a random string
 */
export function random_string(length: number): string | null
export interface ProxyCallAsyncCallback {
    (call: ProxyCall, error: GLib.Error, weak_object: GObject.Object, userdata: any | null): void
}
export interface ProxyCallContinuousCallback {
    (call: ProxyCall, buf: string, len: number, error: GLib.Error, weak_object: GObject.Object, userdata: any | null): void
}
export interface ProxyCallUploadCallback {
    (call: ProxyCall, total: number, uploaded: number, error: GLib.Error, weak_object: GObject.Object, userdata: any | null): void
}
export module OAuth2Proxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Proxy.ConstructorProperties {

        // Own constructor properties of Rest-1.0.Rest.OAuth2Proxy

        accessToken?: string | null
        authUrl?: string | null
        clientId?: string | null
        clientSecret?: string | null
        expirationDate?: GLib.DateTime | null
        redirectUri?: string | null
        refreshToken?: string | null
        tokenUrl?: string | null
    }

}

export interface OAuth2Proxy {

    // Own properties of Rest-1.0.Rest.OAuth2Proxy

    accessToken: string | null
    authUrl: string | null
    clientId: string | null
    clientSecret: string | null
    expirationDate: GLib.DateTime
    redirectUri: string | null
    refreshToken: string | null
    tokenUrl: string | null

    // Own fields of Rest-1.0.Rest.OAuth2Proxy

    parent_instance: Proxy & GObject.Object

    // Owm methods of Rest-1.0.Rest.OAuth2Proxy

    build_authorization_url(code_challenge: string, scope: string | null): [ /* returnType */ string | null, /* state */ string | null ]
    fetch_access_token_async(authorization_code: string, code_verifier: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of fetch_access_token_async

    /**
     * Promisified version of {@link fetch_access_token_async}
     * 
     * 
     * @param authorization_code 
     * @param code_verifier 
     * @param cancellable 
     * @returns A Promise of the result of {@link fetch_access_token_async}
     */
    fetch_access_token_async(authorization_code: string, code_verifier: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    fetch_access_token_finish(result: Gio.AsyncResult): boolean
    get_access_token(): string
    get_auth_url(): string
    get_client_id(): string
    get_client_secret(): string
    get_expiration_date(): GLib.DateTime
    get_redirect_uri(): string
    get_refresh_token(): string
    get_token_url(): string
    refresh_access_token(): boolean
    refresh_access_token_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of refresh_access_token_async

    /**
     * Promisified version of {@link refresh_access_token_async}
     * 
     * 
     * @param cancellable 
     * @returns A Promise of the result of {@link refresh_access_token_async}
     */
    refresh_access_token_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    refresh_access_token_finish(result: Gio.AsyncResult): boolean
    set_access_token(access_token: string): void
    set_auth_url(tokenurl: string): void
    set_client_id(client_id: string): void
    set_client_secret(client_secret: string): void
    set_expiration_date(expiration_date: GLib.DateTime): void
    set_redirect_uri(redirect_uri: string): void
    set_refresh_token(refresh_token: string): void
    set_token_url(tokenurl: string): void

    // Own virtual methods of Rest-1.0.Rest.OAuth2Proxy

    vfunc_parse_access_token(payload: GLib.Bytes, task: Gio.Task): void

    // Class property signals of Rest-1.0.Rest.OAuth2Proxy

    connect(sigName: "notify::access-token", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::access-token", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::access-token", ...args: any[]): void
    connect(sigName: "notify::auth-url", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-url", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auth-url", ...args: any[]): void
    connect(sigName: "notify::client-id", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-id", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client-id", ...args: any[]): void
    connect(sigName: "notify::client-secret", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-secret", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client-secret", ...args: any[]): void
    connect(sigName: "notify::expiration-date", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expiration-date", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expiration-date", ...args: any[]): void
    connect(sigName: "notify::redirect-uri", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::redirect-uri", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::redirect-uri", ...args: any[]): void
    connect(sigName: "notify::refresh-token", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-token", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::refresh-token", ...args: any[]): void
    connect(sigName: "notify::token-url", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::token-url", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::token-url", ...args: any[]): void
    connect(sigName: "notify::binding-required", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::binding-required", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::binding-required", ...args: any[]): void
    connect(sigName: "notify::disable-cookies", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-cookies", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-cookies", ...args: any[]): void
    connect(sigName: "notify::password", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ssl-ca-file", ...args: any[]): void
    connect(sigName: "notify::ssl-strict", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ssl-strict", ...args: any[]): void
    connect(sigName: "notify::url-format", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-format", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url-format", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: "notify::username", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: OAuth2Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class OAuth2Proxy extends Proxy {

    // Own properties of Rest-1.0.Rest.OAuth2Proxy

    static name: string
    static $gtype: GObject.GType<OAuth2Proxy>

    // Constructors of Rest-1.0.Rest.OAuth2Proxy

    constructor(config?: OAuth2Proxy.ConstructorProperties) 
    /**
     * Create a new #RestOAuth2Proxy.
     * @constructor 
     * @param authurl 
     * @param tokenurl 
     * @param redirecturl 
     * @param client_id 
     * @param client_secret 
     * @param baseurl 
     * @returns a newly created #RestOAuth2Proxy
     */
    constructor(authurl: string, tokenurl: string, redirecturl: string, client_id: string, client_secret: string, baseurl: string) 
    /**
     * Create a new #RestOAuth2Proxy.
     * @constructor 
     * @param authurl 
     * @param tokenurl 
     * @param redirecturl 
     * @param client_id 
     * @param client_secret 
     * @param baseurl 
     * @returns a newly created #RestOAuth2Proxy
     */
    static new(authurl: string, tokenurl: string, redirecturl: string, client_id: string, client_secret: string, baseurl: string): OAuth2Proxy

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
    static new(url_format: string, binding_required: boolean): Proxy
    _init(config?: OAuth2Proxy.ConstructorProperties): void
}

export module OAuth2ProxyCall {

    // Constructor properties interface

    export interface ConstructorProperties extends ProxyCall.ConstructorProperties {
    }

}

export interface OAuth2ProxyCall {

    // Own fields of Rest-1.0.Rest.OAuth2ProxyCall

    parent_instance: ProxyCall & GObject.Object

    // Class property signals of Rest-1.0.Rest.OAuth2ProxyCall

    connect(sigName: "notify::proxy", callback: (($obj: OAuth2ProxyCall, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: OAuth2ProxyCall, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class OAuth2ProxyCall extends ProxyCall {

    // Own properties of Rest-1.0.Rest.OAuth2ProxyCall

    static name: string
    static $gtype: GObject.GType<OAuth2ProxyCall>

    // Constructors of Rest-1.0.Rest.OAuth2ProxyCall

    constructor(config?: OAuth2ProxyCall.ConstructorProperties) 
    _init(config?: OAuth2ProxyCall.ConstructorProperties): void
}

export module Proxy {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Rest-1.0.Rest.Proxy

        bindingRequired?: boolean | null
        disableCookies?: boolean | null
        password?: string | null
        sslCaFile?: string | null
        sslStrict?: boolean | null
        urlFormat?: string | null
        userAgent?: string | null
        username?: string | null
    }

}

export interface Proxy {

    // Own properties of Rest-1.0.Rest.Proxy

    bindingRequired: boolean
    readonly disableCookies: boolean
    password: string | null
    sslCaFile: string | null
    sslStrict: boolean
    urlFormat: string | null
    userAgent: string | null
    username: string | null

    // Own fields of Rest-1.0.Rest.Proxy

    parent_instance: GObject.Object

    // Owm methods of Rest-1.0.Rest.Proxy

    /**
     * This method can be used to add specific features to the #SoupSession objects
     * that are used by librest for its HTTP connections. For example, if one needs
     * extensive control over the cookies which are used for the REST HTTP
     * communication, it's possible to get full access to libsoup cookie API by
     * using
     * 
     *   <programlisting>
     *   RestProxy *proxy = g_object_new(REST_TYPE_PROXY,
     *                                   "url-format", url,
     *                                   "disable-cookies", TRUE,
     *                                   NULL);
     *   SoupSessionFeature *cookie_jar = SOUP_SESSION_FEATURE(soup_cookie_jar_new ());
     *   rest_proxy_add_soup_feature(proxy, cookie_jar);
     *   </programlisting>
     * @param feature A #SoupSessionFeature
     */
    add_soup_feature(feature: Soup.SessionFeature): void
    get_user_agent(): string
    /**
     * Create a new #RestProxyCall for making a call to the web service.  This call
     * is one-shot and should not be re-used for making multiple calls.
     * @returns a new #RestProxyCall.
     */
    new_call(): ProxyCall
    set_user_agent(user_agent: string): void

    // Own virtual methods of Rest-1.0.Rest.Proxy

    vfunc_authenticate(auth: ProxyAuth, retrying: boolean): boolean
    /**
     * Create a new #RestProxyCall for making a call to the web service.  This call
     * is one-shot and should not be re-used for making multiple calls.
     * @virtual 
     * @returns a new #RestProxyCall.
     */
    vfunc_new_call(): ProxyCall

    // Class property signals of Rest-1.0.Rest.Proxy

    connect(sigName: "notify::binding-required", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::binding-required", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::binding-required", ...args: any[]): void
    connect(sigName: "notify::disable-cookies", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-cookies", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-cookies", ...args: any[]): void
    connect(sigName: "notify::password", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ssl-ca-file", ...args: any[]): void
    connect(sigName: "notify::ssl-strict", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ssl-strict", ...args: any[]): void
    connect(sigName: "notify::url-format", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-format", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url-format", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: "notify::username", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #RestProxy has no publicly available members.
 * @class 
 */
export class Proxy extends GObject.Object {

    // Own properties of Rest-1.0.Rest.Proxy

    static name: string
    static $gtype: GObject.GType<Proxy>

    // Constructors of Rest-1.0.Rest.Proxy

    constructor(config?: Proxy.ConstructorProperties) 
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
    constructor(url_format: string, binding_required: boolean) 
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
    static new(url_format: string, binding_required: boolean): Proxy
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
     * @param username the username provided by the user or client
     * @param password the password provided by the user or client
     * @returns A new #RestProxy.
     */
    static new_with_authentication(url_format: string, binding_required: boolean, username: string, password: string): Proxy
    _init(config?: Proxy.ConstructorProperties): void
}

export module ProxyAuth {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ProxyAuth {

    // Own fields of Rest-1.0.Rest.ProxyAuth

    parent: GObject.Object
    priv: ProxyAuthPrivate

    // Owm methods of Rest-1.0.Rest.ProxyAuth

    /**
     * Cancel the authentication process
     * by cancelling the associated #SoupMessage.
     * It results in returning #GError REST_PROXY_ERROR_CANCELLED
     * to the function that requested the authentication.
     */
    cancel(): void
    /**
     * Pauses `auth`.
     * 
     * If `auth` is already paused, this function does not
     * do anything.
     */
    pause(): void
    /**
     * Unpauses a paused #RestProxyAuth instance.
     */
    unpause(): void

    // Class property signals of Rest-1.0.Rest.ProxyAuth

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #RestProxyAuth has no publicly available members.
 * @class 
 */
export class ProxyAuth extends GObject.Object {

    // Own properties of Rest-1.0.Rest.ProxyAuth

    static name: string
    static $gtype: GObject.GType<ProxyAuth>

    // Constructors of Rest-1.0.Rest.ProxyAuth

    constructor(config?: ProxyAuth.ConstructorProperties) 
    _init(config?: ProxyAuth.ConstructorProperties): void
}

export module ProxyCall {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Rest-1.0.Rest.ProxyCall

        proxy?: Proxy | null
    }

}

export interface ProxyCall {

    // Own properties of Rest-1.0.Rest.ProxyCall

    readonly proxy: Proxy

    // Own fields of Rest-1.0.Rest.ProxyCall

    parent_instance: GObject.Object

    // Owm methods of Rest-1.0.Rest.ProxyCall

    /**
     * Add a header called `header` with the value `value` to the call.  If a
     * header with this name already exists, the new value will replace the old.
     * @param header The name of the header to set
     * @param value The value of the header
     */
    add_header(header: string, value: string): void
    /**
     * Add a query parameter called `param` with the string value `value` to the call.
     * If a parameter with this name already exists, the new value will replace the
     * old.
     * @param name The name of the parameter to set
     * @param value The value of the parameter
     */
    add_param(name: string, value: string): void
    /**
     * Add a query parameter `param` to the call.
     * If a parameter with this name already exists, the new value will replace the
     * old.
     * @param param A #RestParam
     */
    add_param_full(param: Param): void
    /**
     * Get the REST function that is going to be called on the proxy.
     * @returns The REST "function" for the current call, see also rest_proxy_call_set_function(). This string is owned by the #RestProxyCall and should not be freed.
     */
    get_function(): string
    /**
     * Get the HTTP method to use when making the call, for example GET or POST.
     * @returns the HTTP method
     */
    get_method(): string
    /**
     * Get the parameters as a #RestParams of parameter names to values.  The
     * returned value is owned by the RestProxyCall instance and should not
     * be freed by the caller.
     * @returns A #RestParams.
     */
    get_params(): Params
    /**
     * Get the return payload.
     * @returns A pointer to the payload. This is owned by #RestProxyCall and should not be freed.
     */
    get_payload(): string
    /**
     * Get the length of the return payload.
     * @returns the length of the payload in bytes.
     */
    get_payload_length(): number
    get_response_headers(): GLib.HashTable
    /**
     * Get the HTTP status code for the call.
     */
    get_status_code(): number
    /**
     * Get the human-readable HTTP status message for the call.
     * @returns The status message. This string is owned by #RestProxyCall and should not be freed.
     */
    get_status_message(): string
    invoke_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of invoke_async

    /**
     * Promisified version of {@link invoke_async}
     * 
     * 
     * @param cancellable an optional #GCancellable that can be used to   cancel the call, or %NULL
     * @returns A Promise of: %TRUE on success
     */
    invoke_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    invoke_finish(result: Gio.AsyncResult): boolean
    /**
     * Get the value of the header called `header`.
     * @param header The header name
     * @returns The header value, or %NULL if it does not exist. This string is owned by the #RestProxyCall and should not be freed.
     */
    lookup_header(header: string): string
    /**
     * Get the value of the parameter called `name`.
     * @param name The paramter name
     * @returns The parameter value, or %NULL if it does not exist. This string is owned by the #RestProxyCall and should not be freed.
     */
    lookup_param(name: string): Param | null
    /**
     * Get the string value of the header `header` or %NULL if that header is not
     * present or there are no headers.
     * @param header The name of the header to lookup.
     */
    lookup_response_header(header: string): string
    /**
     * Remove the header named `header` from the call.
     * @param header The header name
     */
    remove_header(header: string): void
    /**
     * Remove the parameter named `name` from the call.
     * @param name The paramter name
     */
    remove_param(name: string): void
    /**
     * Invoker for a virtual method to serialize the parameters for this
     * #RestProxyCall.
     * @returns TRUE if the serialization was successful, FALSE otherwise.
     */
    serialize_params(): [ /* returnType */ boolean, /* content_type */ string | null, /* content */ string | null, /* content_len */ number ]
    /**
     * Set the REST "function" to call on the proxy.  This is appended to the URL,
     * so that for example a proxy with the URL
     * <literal>http://www.example.com/</literal> and the function
     * <literal>test</literal> would actually access the URL
     * <literal>http://www.example.com/test</literal>
     * @param function_ The function to call
     */
    set_function(function_: string): void
    /**
     * Set the HTTP method to use when making the call, for example GET or POST.
     * @param method The HTTP method to use
     */
    set_method(method: string): void
    /**
     * Synchronously invokes `call`. After this function has returned,
     * rest_proxy_call_get_payload() will return the result of this call.
     * 
     * Note that this will block an undefined amount of time, so
     * rest_proxy_call_invoke_async() is generally recommended.
     * @returns %TRUE on success, %FALSE if a failure occurred,   in which case @error_out will be set.
     */
    sync(): boolean
    /**
     * Asynchronously invoke `call` but expect to have the callback invoked every time a
     * chunk of our request's body is written.
     * 
     * When the callback is invoked with the uploaded byte count equaling the message
     * byte count, the call has completed.
     * 
     * If `weak_object` is disposed during the call then this call will be
     * cancelled. If the call is cancelled then the callback will be invoked with
     * an error state.
     * 
     * You may unref the call after calling this function since there is an
     * internal reference, or you may unref in the callback.
     * @param callback a #RestProxyCallUploadCallback to invoke when a chunk   of data was uploaded
     * @param weak_object The #GObject to weakly reference and tie the lifecycle to
     */
    upload(callback: ProxyCallUploadCallback, weak_object: GObject.Object): boolean

    // Own virtual methods of Rest-1.0.Rest.ProxyCall

    vfunc_prepare(): boolean
    /**
     * Invoker for a virtual method to serialize the parameters for this
     * #RestProxyCall.
     * @virtual 
     * @returns TRUE if the serialization was successful, FALSE otherwise.
     */
    vfunc_serialize_params(): [ /* returnType */ boolean, /* content_type */ string | null, /* content */ string | null, /* content_len */ number ]

    // Class property signals of Rest-1.0.Rest.ProxyCall

    connect(sigName: "notify::proxy", callback: (($obj: ProxyCall, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: ProxyCall, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #RestProxyCall has no publicly available members.
 * @class 
 */
export class ProxyCall extends GObject.Object {

    // Own properties of Rest-1.0.Rest.ProxyCall

    static name: string
    static $gtype: GObject.GType<ProxyCall>

    // Constructors of Rest-1.0.Rest.ProxyCall

    constructor(config?: ProxyCall.ConstructorProperties) 
    _init(config?: ProxyCall.ConstructorProperties): void
}

export module XmlParser {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface XmlParser {

    // Own fields of Rest-1.0.Rest.XmlParser

    parent_instance: GObject.Object

    // Owm methods of Rest-1.0.Rest.XmlParser

    /**
     * Parse the XML in `data,` and return a new #RestXmlNode.  If `data` is invalid
     * XML, %NULL is returned.
     * @param data the XML content to parse
     * @param len the length of `data,` or -1 if `data` is a nul-terminated string
     * @returns a new #RestXmlNode, or %NULL if the XML was invalid.
     */
    parse_from_data(data: string, len: number): XmlNode

    // Class property signals of Rest-1.0.Rest.XmlParser

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A Xml Parser for Rest Responses
 * @class 
 */
export class XmlParser extends GObject.Object {

    // Own properties of Rest-1.0.Rest.XmlParser

    static name: string
    static $gtype: GObject.GType<XmlParser>

    // Constructors of Rest-1.0.Rest.XmlParser

    constructor(config?: XmlParser.ConstructorProperties) 
    /**
     * Create a new #RestXmlParser, for parsing XML documents.
     * @constructor 
     * @returns a new #RestXmlParser.
     */
    constructor() 
    /**
     * Create a new #RestXmlParser, for parsing XML documents.
     * @constructor 
     * @returns a new #RestXmlParser.
     */
    static new(): XmlParser
    _init(config?: XmlParser.ConstructorProperties): void
}

export interface OAuth2ProxyCallClass {

    // Own fields of Rest-1.0.Rest.OAuth2ProxyCallClass

    parent_class: ProxyCallClass
}

export abstract class OAuth2ProxyCallClass {

    // Own properties of Rest-1.0.Rest.OAuth2ProxyCallClass

    static name: string
}

export interface OAuth2ProxyClass {

    // Own fields of Rest-1.0.Rest.OAuth2ProxyClass

    parent_class: ProxyClass
    parse_access_token: (self: OAuth2Proxy, payload: GLib.Bytes, task: Gio.Task) => void
    padding: any[]
}

export abstract class OAuth2ProxyClass {

    // Own properties of Rest-1.0.Rest.OAuth2ProxyClass

    static name: string
}

export interface Param {

    // Owm methods of Rest-1.0.Rest.Param

    /**
     * Get the content of `param`.  The content should be treated as read-only and
     * not modified in any way.
     * @returns the content.
     */
    get_content(): any | null
    /**
     * Get the length of the content of `param`.
     * @returns the length of the content
     */
    get_content_length(): number
    /**
     * Get the MIME type of the parameter.  For example, basic strings have the MIME
     * type "text/plain".
     * @returns the MIME type
     */
    get_content_type(): string
    /**
     * Get the original file name of the parameter, if one is available.
     * @returns the filename if          set, or %NULL.
     */
    get_file_name(): string
    /**
     * Get the name of the parameter.
     * @returns the parameter name.
     */
    get_name(): string
    /**
     * Determine if the parameter is a string value, i.e. the content type is "text/plain".
     * @returns %TRUE if the parameter is a string, %FALSE otherwise.
     */
    is_string(): boolean
    /**
     * Increase the reference count on `param`.
     * @returns the #RestParam
     */
    ref(): Param
    /**
     * Decrease the reference count on `param,` destroying it if the reference count
     * reaches 0.
     */
    unref(): void
}

export class Param {

    // Own properties of Rest-1.0.Rest.Param

    static name: string

    // Constructors of Rest-1.0.Rest.Param

    /**
     * Create a new #RestParam called `name` with `length` bytes of `data` as the
     * value.  `content_type` is the type of the data as a MIME type, for example
     * "text/plain" for simple string parameters.
     * 
     * If the parameter is a file upload it can be passed as `filename`.
     * @constructor 
     * @param name the parameter name
     * @param use the #RestMemoryUse describing how the memory can be used
     * @param data a pointer to   the start of the data
     * @param content_type the content type of the data
     * @param filename the original filename, or %NULL
     * @returns a new #RestParam.
     */
    static new_full(name: string, use: MemoryUse, data: Uint8Array, content_type: string, filename: string | null): Param
    /**
     * A convience constructor to create a #RestParam from a given UTF-8 string.
     * The resulting #RestParam will have a content type of "text/plain".
     * @constructor 
     * @param name the parameter name
     * @param use the #RestMemoryUse describing how the memory can be used
     * @param string the parameter value
     * @returns a new #RestParam.
     */
    static new_string(name: string, use: MemoryUse, string: string): Param
    /**
     * Create a new #RestParam called `name` with `length` bytes of `data` as the
     * value.  `content_type` is the type of the data as a MIME type, for example
     * "text/plain" for simple string parameters.
     * 
     * If the parameter is a file upload it can be passed as `filename`.
     * 
     * When the #RestParam is freed, it will call `owner_dnotify,` passing `owner` to
     * it. This allows you to do something like this:
     * 
     * 
     * ```
     * GMappedFile *map = g_mapped_file_new (filename, FALSE, &error);
     * RestParam *param = rest_param_new_with_owner ("media",
     *                                               g_mapped_file_get_contents (map),
     *                                               g_mapped_file_get_length (map),
     *                                               "image/jpeg",
     *                                               filename,
     *                                               map,
     *                                               (GDestroyNotify)g_mapped_file_unref);
     * ```
     * 
     * @constructor 
     * @param name the parameter name
     * @param data a pointer to   the start of the data
     * @param content_type the content type of the data
     * @param filename the original filename, or %NULL
     * @param owner pointer to an object that owns `data`
     * @param owner_dnotify a function to free/unref `owner` when   the buffer is freed
     * @returns a new #RestParam.
     */
    static new_with_owner(name: string, data: Uint8Array, content_type: string, filename: string | null, owner: any | null, owner_dnotify: GLib.DestroyNotify | null): Param
}

export interface Params {

    // Owm methods of Rest-1.0.Rest.Params

    /**
     * Add `param` to `params`.
     * @param param a valid #RestParam
     */
    add(param: Param): void
    /**
     * Checks if the parameters are all simple strings (have a content type of
     * "text/plain").
     * @returns %TRUE if all of the parameters are simple strings, %FALSE otherwise.
     */
    are_strings(): boolean
    /**
     * Create a new #GHashTable which contains the name and value of all string
     * (content type of text/plain) parameters.
     * 
     * The values are owned by the #RestParams, so don't destroy the #RestParams
     * before the hash table.
     * @returns a new #GHashTable.
     */
    as_string_hash_table(): GLib.HashTable
    /**
     * Makes a deep copy of a #RestParams.
     * @returns A newly created #RestParams with the same   contents as @self
     */
    copy(): Params
    /**
     * Return the #RestParam called `name,` or %NULL if it doesn't exist.
     * @param name a parameter name
     * @returns a #RestParam or %NULL if the name doesn't exist
     */
    get(name: string): Param | null
    /**
     * Increments the reference count of `self` by one.
     * @returns @self
     */
    ref(): Params
    /**
     * Remove the #RestParam called `name`.
     * @param name a parameter name
     */
    remove(name: string): void
    /**
     * Decrements the reference count of `self` by one, freeing the structure when
     * the reference count reaches zero.
     */
    unref(): void
}

export class Params {

    // Own properties of Rest-1.0.Rest.Params

    static name: string

    // Constructors of Rest-1.0.Rest.Params

    /**
     * Create a new #RestParams.
     * @constructor 
     * @returns A empty #RestParams.
     */
    constructor() 
    /**
     * Create a new #RestParams.
     * @constructor 
     * @returns A empty #RestParams.
     */
    static new(): Params
}

export interface ParamsIter {

    // Owm methods of Rest-1.0.Rest.ParamsIter

    /**
     * Initialize a parameter iterator over `params`. Modifying `params` after calling
     * this function invalidates the returned iterator.
     * 
     * ```
     * RestParamsIter iter;
     * const char *name;
     * RestParam *param;
     * 
     * rest_params_iter_init (&iter, params);
     * while (rest_params_iter_next (&iter, &name, &param)) {
     *   /&ast; do something with name and param &ast;/
     * }
     * ```
     * 
     * @param params a valid #RestParams
     */
    init(params: Params): void
    /**
     * Advances `iter` and retrieves the name and/or parameter that are now pointed
     * at as a result of this advancement.  If %FALSE is returned, `name` and `param`
     * are set to %NULL and the iterator becomes invalid.
     * @returns %FALSE if the end of the #RestParams has been reached, %TRUE otherwise.
     */
    next(): [ /* returnType */ boolean, /* name */ string | null, /* param */ Param | null ]
}

export class ParamsIter {

    // Own properties of Rest-1.0.Rest.ParamsIter

    static name: string
}

export interface PkceCodeChallenge {

    // Owm methods of Rest-1.0.Rest.PkceCodeChallenge

    /**
     * Makes a deep copy of a #RestPkceCodeChallenge.
     * @returns A newly created #RestPkceCodeChallenge with the same   contents as @self
     */
    copy(): PkceCodeChallenge
    /**
     * Frees a #RestPkceCodeChallenge allocated using rest_pkce_code_challenge_new()
     * or rest_pkce_code_challenge_copy().
     */
    free(): void
    /**
     * Returns the Code Challenge for the Pkce verification.
     * @returns the code_challenge
     */
    get_challenge(): string
    /**
     * Returns the Code Verifier for the Pkce verification.
     * @returns the code_verifier
     */
    get_verifier(): string
}

/**
 * In order to play a Pkce Code Verification during a OAuth2 authorization
 * you need this structure which handles the algorithmic part.
 * @record 
 */
export class PkceCodeChallenge {

    // Own properties of Rest-1.0.Rest.PkceCodeChallenge

    static name: string

    // Constructors of Rest-1.0.Rest.PkceCodeChallenge

    /**
     * Creates a new #RestPkceCodeChallenge.
     * @constructor 
     * @returns A newly created #RestPkceCodeChallenge
     */
    static new_random(): PkceCodeChallenge
}

export interface ProxyAuthClass {

    // Own fields of Rest-1.0.Rest.ProxyAuthClass

    parent_class: GObject.ObjectClass
}

export abstract class ProxyAuthClass {

    // Own properties of Rest-1.0.Rest.ProxyAuthClass

    static name: string
}

export interface ProxyAuthPrivate {
}

export class ProxyAuthPrivate {

    // Own properties of Rest-1.0.Rest.ProxyAuthPrivate

    static name: string
}

export interface ProxyCallClass {

    // Own fields of Rest-1.0.Rest.ProxyCallClass

    prepare: (call: ProxyCall) => boolean
    serialize_params: (call: ProxyCall) => [ /* returnType */ boolean, /* content_type */ string | null, /* content */ string | null, /* content_len */ number ]
}

/**
 * Class structure for #RestProxyCall for subclasses to implement specialised
 * behaviour.
 * @record 
 */
export abstract class ProxyCallClass {

    // Own properties of Rest-1.0.Rest.ProxyCallClass

    static name: string
}

export interface ProxyClass {

    // Own fields of Rest-1.0.Rest.ProxyClass

    new_call: (proxy: Proxy) => ProxyCall
    authenticate: (proxy: Proxy, auth: ProxyAuth, retrying: boolean) => boolean
}

/**
 * Class structure for #RestProxy for subclasses to implement specialised
 * behaviour.
 * 
 * Typically subclasses will override `new_call` to construct a subclass of
 * #RestProxyCall.
 * @record 
 */
export abstract class ProxyClass {

    // Own properties of Rest-1.0.Rest.ProxyClass

    static name: string
}

export interface XmlNode {

    // Own fields of Rest-1.0.Rest.XmlNode

    /**
     * the name of the element
     * @field 
     */
    name: string | null
    /**
     * the textual content of the element
     * @field 
     */
    content: string | null
    /**
     * a #GHashTable of string name to #RestXmlNode for the children of
     * the element.
     * @field 
     */
    children: GLib.HashTable
    /**
     * a #GHashTable of string name to string values for the attributes of
     * the element.
     * @field 
     */
    attrs: GLib.HashTable
    /**
     * the sibling #RestXmlNode with the same name
     * @field 
     */
    next: XmlNode

    // Owm methods of Rest-1.0.Rest.XmlNode

    /**
     * Adds attribute to the given node.
     * @param attribute name of the attribute
     * @param value value to set attribute to
     */
    add_attr(attribute: string, value: string): void
    /**
     * Adds a new node to the given parent node; to create the top-level node,
     * parent should be %NULL.
     * @param tag name of the child node
     * @returns the newly added #RestXmlNode; the node object is owned by, and valid for the life time of, the #RestXmlCreator.
     */
    add_child(tag: string): XmlNode
    /**
     * Searches for the first child node of `start` named `tag`.
     * @param tag the name of a node
     * @returns the first child node, or %NULL if it doesn't exist.
     */
    find(tag: string): XmlNode
    /**
     * Get the value of the attribute named `attr_name,` or %NULL if it doesn't
     * exist.
     * @param attr_name the name of an attribute
     * @returns the attribute value. This string is owned by #RestXmlNode and should not be freed.
     */
    get_attr(attr_name: string): string
    /**
     * Recursively outputs given node and it's children.
     * @returns xml string representing the node.
     */
    print(): string | null
    /**
     * Sets content for the given node.
     * @param value the content
     */
    set_content(value: string): void
}

/**
 * The #RestXmlNode contains a parsed XmlNode for easy consumption
 * @record 
 */
export class XmlNode {

    // Own properties of Rest-1.0.Rest.XmlNode

    static name: string
}

export interface XmlParserClass {

    // Own fields of Rest-1.0.Rest.XmlParserClass

    parent_class: GObject.ObjectClass
}

export abstract class XmlParserClass {

    // Own properties of Rest-1.0.Rest.XmlParserClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END