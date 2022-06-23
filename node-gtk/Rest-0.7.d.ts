// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Rest-0.7
 */

import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Rest {

enum MemoryUse {
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
/**
 * The signature method to use when signing method calls.  `PLAINTEXT` is only
 * recommended for testing, in general `HMAC_SHA1` is well supported and more
 * secure.
 */
enum OAuthSignatureMethod {
    /**
     * plain text signatures (not recommended)
     */
    PLAINTEXT,
    /**
     * HMAC-SHA1 signatures (recommended)
     */
    HMAC_SHA1,
}
/**
 * Error domain used when returning errors from #RestProxyCall.
 */
enum ProxyCallError {
    /**
     * the method call failed
     */
    FAILED,
}
/**
 * Error domain used when returning errors from a #RestProxy.
 */
enum ProxyError {
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
function hmacSha1(key: string, message: string): string
function proxyCallErrorQuark(): GLib.Quark
function proxyErrorQuark(): GLib.Quark
/**
 * Callback from oauth_proxy_request_token_async() and
 * oauth_proxy_access_token_async().
 * @callback 
 * @param proxy the #OAuthProxy
 * @param error a #GError if the authentication failed, otherwise %NULL
 * @param weakObject the weak object passed to the caller
 * @param userdata the user data passed to the caller
 */
interface OAuthProxyAuthCallback {
    (proxy: OAuthProxy, error: GLib.Error, weakObject: GObject.Object, userdata: object | null): void
}
interface ProxyCallAsyncCallback {
    (call: ProxyCall, error: GLib.Error, weakObject: GObject.Object, userdata: object | null): void
}
interface ProxyCallContinuousCallback {
    (call: ProxyCall, buf: string, len: number, error: GLib.Error, weakObject: GObject.Object, userdata: object | null): void
}
interface ProxyCallUploadCallback {
    (call: ProxyCall, total: number, uploaded: number, error: GLib.Error, weakObject: GObject.Object, userdata: object | null): void
}
interface OAuth2Proxy_ConstructProps extends Proxy_ConstructProps {

    // Own constructor properties of Rest-0.7.Rest.OAuth2Proxy

    accessToken?: string | null
    authEndpoint?: string | null
    clientId?: string | null
}

interface OAuth2Proxy {

    // Own properties of Rest-0.7.Rest.OAuth2Proxy

    accessToken: string
    readonly authEndpoint: string
    readonly clientId: string

    // Own fields of Rest-0.7.Rest.OAuth2Proxy

    parent: Proxy
    priv: OAuth2ProxyPrivate

    // Owm methods of Rest-0.7.Rest.OAuth2Proxy

    /**
     * Builds a url at which the user can log in to the specified OAuth2-based web
     * service.  See the documentation for oauth2_proxy_build_login_url_full() for
     * detailed information.
     * @param redirectUri the uri to redirect to after the user authenticates
     */
    buildLoginUrl(redirectUri: string): string
    /**
     * Builds a url at which the user can log in to the specified OAuth2-based web
     * service.  In general, this url should be displayed in an embedded browser
     * widget, and you should then intercept the browser's redirect to `redirect_uri`
     * and extract the access token from the url fragment. After the access token
     * has been retrieved, call oauth2_proxy_set_access_token().  This must be done
     * before making any API calls to the service.
     * 
     * See the oauth2 spec for more details about the "user-agent" authentication
     * flow.
     * 
     * The `extra_params` and `redirect_uri` should not be uri-encoded, that will be
     * done automatically
     * @param redirectUri the uri to redirect to after the user authenticates
     * @param extraParams any extra parameters to add to the login url (e.g. facebook uses 'scope=foo,bar' to request extended permissions).
     */
    buildLoginUrlFull(redirectUri: string, extraParams: GLib.HashTable): string
    /**
     * Get the current request or access token.
     */
    getAccessToken(): string
    /**
     * Set the access token.
     * @param accessToken the access token
     */
    setAccessToken(accessToken: string): void

    // Class property signals of Rest-0.7.Rest.OAuth2Proxy

    connect(sigName: "notify::access-token", callback: (...args: any[]) => void): number
    on(sigName: "notify::access-token", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::access-token", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::access-token", ...args: any[]): void
    connect(sigName: "notify::auth-endpoint", callback: (...args: any[]) => void): number
    on(sigName: "notify::auth-endpoint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auth-endpoint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auth-endpoint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auth-endpoint", ...args: any[]): void
    connect(sigName: "notify::client-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::client-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::client-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::client-id", ...args: any[]): void
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

/**
 * #OAuth2Proxy has no publicly available members.
 * @class 
 */
class OAuth2Proxy extends Proxy {

    // Own properties of Rest-0.7.Rest.OAuth2Proxy

    static name: string
    static $gtype: GObject.GType<OAuth2Proxy>

    // Constructors of Rest-0.7.Rest.OAuth2Proxy

    constructor(config?: OAuth2Proxy_ConstructProps) 
    /**
     * Create a new #OAuth2Proxy for the specified endpoint `url_format,` using the
     * specified API key and secret.
     * 
     * This proxy won't have the Token set so will be unauthorised.  If the token is
     * unknown then the following steps should be taken to acquire an access token:
     * - Get the authentication url with oauth2_proxy_build_login_url()
     * - Display this url in an embedded browser widget
     * - wait for the browser widget to be redirected to the specified redirect_uri
     * - extract the token from the fragment of the redirected uri (using
     * convenience function oauth2_proxy_extract_access_token())
     * - set the token with oauth2_proxy_set_access_token()
     * 
     * Set `binding_required` to %TRUE if the URL contains string formatting
     * operations (for example "http://foo.com/%<!-- -->s".  These must be expanded
     * using rest_proxy_bind() before invoking the proxy.
     * @constructor 
     * @param clientId the client (application) id
     * @param authEndpoint the authentication endpoint URL
     * @param urlFormat the endpoint URL
     * @param bindingRequired whether the URL needs to be bound before calling
     */
    constructor(clientId: string, authEndpoint: string, urlFormat: string, bindingRequired: boolean) 
    /**
     * Create a new #OAuth2Proxy for the specified endpoint `url_format,` using the
     * specified API key and secret.
     * 
     * This proxy won't have the Token set so will be unauthorised.  If the token is
     * unknown then the following steps should be taken to acquire an access token:
     * - Get the authentication url with oauth2_proxy_build_login_url()
     * - Display this url in an embedded browser widget
     * - wait for the browser widget to be redirected to the specified redirect_uri
     * - extract the token from the fragment of the redirected uri (using
     * convenience function oauth2_proxy_extract_access_token())
     * - set the token with oauth2_proxy_set_access_token()
     * 
     * Set `binding_required` to %TRUE if the URL contains string formatting
     * operations (for example "http://foo.com/%<!-- -->s".  These must be expanded
     * using rest_proxy_bind() before invoking the proxy.
     * @constructor 
     * @param clientId the client (application) id
     * @param authEndpoint the authentication endpoint URL
     * @param urlFormat the endpoint URL
     * @param bindingRequired whether the URL needs to be bound before calling
     */
    static new(clientId: string, authEndpoint: string, urlFormat: string, bindingRequired: boolean): OAuth2Proxy

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
     */
    static new(urlFormat: string, bindingRequired: boolean): Proxy
    /**
     * Create a new #OAuth2Proxy for the specified endpoint `url_format,` using the
     * specified client id
     * 
     * `access_token` is used for the Access Token, so if they are still valid then
     * this proxy is authorised.
     * 
     * Set `binding_required` to %TRUE if the URL contains string formatting
     * operations (for example "http://foo.com/%<!-- -->s".  These must be expanded
     * using rest_proxy_bind() before invoking the proxy.
     * @constructor 
     * @param clientId the client (application) id
     * @param accessToken the Access Token
     * @param authEndpoint the authentication endpoint URL
     * @param urlFormat the endpoint URL
     * @param bindingRequired whether the URL needs to be bound before calling
     */
    static newWithToken(clientId: string, accessToken: string, authEndpoint: string, urlFormat: string, bindingRequired: boolean): OAuth2Proxy
    _init(config?: OAuth2Proxy_ConstructProps): void
    /**
     * A utility function to extract the access token from the url that results from
     * the redirection after the user authenticates
     * @param url the url which contains an access token in its fragment
     */
    static extractAccessToken(url: string): string
}

interface OAuth2ProxyCall_ConstructProps extends ProxyCall_ConstructProps {
}

interface OAuth2ProxyCall {

    // Own fields of Rest-0.7.Rest.OAuth2ProxyCall

    parent: ProxyCall

    // Class property signals of Rest-0.7.Rest.OAuth2ProxyCall

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
 * #OAuth2ProxyCall has no publicly available members.
 * @class 
 */
class OAuth2ProxyCall extends ProxyCall {

    // Own properties of Rest-0.7.Rest.OAuth2ProxyCall

    static name: string
    static $gtype: GObject.GType<OAuth2ProxyCall>

    // Constructors of Rest-0.7.Rest.OAuth2ProxyCall

    constructor(config?: OAuth2ProxyCall_ConstructProps) 
    _init(config?: OAuth2ProxyCall_ConstructProps): void
}

interface OAuthProxy_ConstructProps extends Proxy_ConstructProps {

    // Own constructor properties of Rest-0.7.Rest.OAuthProxy

    consumerKey?: string | null
    consumerSecret?: string | null
    signatureHost?: string | null
    signatureMethod?: OAuthSignatureMethod | null
    token?: string | null
    tokenSecret?: string | null
}

interface OAuthProxy {

    // Own properties of Rest-0.7.Rest.OAuthProxy

    readonly consumerKey: string
    readonly consumerSecret: string
    signatureHost: string
    signatureMethod: OAuthSignatureMethod
    token: string
    tokenSecret: string

    // Own fields of Rest-0.7.Rest.OAuthProxy

    parent: Proxy

    // Owm methods of Rest-0.7.Rest.OAuthProxy

    /**
     * Perform the Access Token phase of OAuth, invoking `function` (defaulting to
     * "access_token" if `function` is NULL).
     * 
     * `verifier` is only used if you are using OAuth 1.0a.  This is either the
     * "oauth_verifier" parameter that was passed to your callback URI, or a string
     * that the user enters in some other manner (for example in a popup dialog) if
     * "oob" was passed to oauth_proxy_request_token().  For OAuth 1.0, pass %NULL.
     * @param function_ the function name to invoke
     * @param verifier the verifier
     */
    accessToken(function_: string, verifier: string): boolean
    /**
     * Perform the Access Token phase of OAuth, invoking `function` (defaulting to
     * "access_token" if `function` is NULL).
     * 
     * `verifier` is only used if you are using OAuth 1.0a.  This is either the
     * "oauth_verifier" parameter that was passed to your callback URI, or a string
     * that the user enters in some other manner (for example in a popup dialog) if
     * "oob" was passed to oauth_proxy_request_token().  For OAuth 1.0, pass %NULL.
     * 
     * This method will return once the method has been queued, `callback` will be
     * invoked when it has completed.
     * @param function_ the function name to invoke
     * @param verifier the verifier
     * @param callback a #OAuthProxyAuthCallback to invoke on completion
     * @param weakObject #GObject to weakly reference and tie the lifecycle of the method call too
     */
    accessTokenAsync(function_: string, verifier: string, callback: OAuthProxyAuthCallback, weakObject: GObject.Object): boolean
    /**
     * Perform an OAuth authorisation step.  This calls `function` and then updates
     * the token and token secret in the proxy.
     * 
     * `proxy` must not require binding, the function will be invoked using
     * rest_proxy_call_set_function().
     * @param function_ the function to invoke on the proxy
     */
    authStep(function_: string): boolean
    /**
     * Perform an OAuth authorisation step.  This calls `function` and then updates
     * the token and token secret in the proxy.
     * 
     * `proxy` must not require binding, the function will be invoked using
     * rest_proxy_call_set_function().
     * @param function_ the function to invoke on the proxy
     * @param callback the callback to invoke when authorisation is complete
     * @param weakObject the #GObject to weakly reference and tie the lifecycle too
     */
    authStepAsync(function_: string, callback: OAuthProxyAuthCallback, weakObject: GObject.Object): boolean
    /**
     * Get the signature hostname used when creating a signature base string.
     */
    getSignatureHost(): string
    /**
     * Get the current request or access token.
     */
    getToken(): string
    /**
     * Get the current request or access token secret.
     */
    getTokenSecret(): string
    /**
     * Determines if the server supports OAuth 1.0a with this proxy. This is only
     * valid after oauth_proxy_request_token() or oauth_proxy_request_token_async()
     * has been called.
     */
    isOauth10a(): boolean
    /**
     * Create a new <ulink
     * url="http://www.scribd.com/doc/26707268/OAuth-Echo-Identity-Veri%EF%AC%81cation-Delegation-Draft">OAuth
     * Echo</ulink> proxy.
     * @param serviceUrl the service URL
     * @param urlFormat the URL format
     * @param bindingRequired whether a binding is required
     */
    newEchoProxy(serviceUrl: string, urlFormat: string, bindingRequired: boolean): Proxy
    /**
     * Perform the Request Token phase of OAuth, invoking `function` (defaulting to
     * "request_token" if `function` is NULL).
     * 
     * The value of `callback` depends on whether you wish to use OAuth 1.0 or 1.0a.
     * If you wish to use 1.0 then callback must be NULL.  To use 1.0a then
     * `callback` should either be your callback URI, or "oob" (out-of-band).
     * @param function_ the function name to invoke
     * @param callbackUri the callback URI
     */
    requestToken(function_: string, callbackUri: string): boolean
    /**
     * Perform the Request Token phase of OAuth, invoking `function` (defaulting to
     * "request_token" if `function` is NULL).
     * 
     * The value of `callback` depends on whether you wish to use OAuth 1.0 or 1.0a.
     * If you wish to use 1.0 then callback must be NULL.  To use 1.0a then
     * `callback` should either be your callback URI, or "oob" (out-of-band).
     * 
     * This method will return once the method has been queued, `callback` will be
     * invoked when it has completed.
     * @param function_ the function name to invoke
     * @param callbackUri the callback URI
     * @param callback a #OAuthProxyAuthCallback to invoke on completion
     * @param weakObject #GObject to weakly reference and tie the lifecycle of the method call too
     */
    requestTokenAsync(function_: string, callbackUri: string, callback: OAuthProxyAuthCallback, weakObject: GObject.Object): boolean
    /**
     * Set the signature hostname used when creating a signature base string.
     * @param signatureHost the signature host
     */
    setSignatureHost(signatureHost: string): void
    /**
     * Set the access token.
     * @param token the access token
     */
    setToken(token: string): void
    /**
     * Set the access token secret.
     * @param tokenSecret the access token secret
     */
    setTokenSecret(tokenSecret: string): void

    // Class property signals of Rest-0.7.Rest.OAuthProxy

    connect(sigName: "notify::consumer-key", callback: (...args: any[]) => void): number
    on(sigName: "notify::consumer-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::consumer-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::consumer-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::consumer-key", ...args: any[]): void
    connect(sigName: "notify::consumer-secret", callback: (...args: any[]) => void): number
    on(sigName: "notify::consumer-secret", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::consumer-secret", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::consumer-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::consumer-secret", ...args: any[]): void
    connect(sigName: "notify::signature-host", callback: (...args: any[]) => void): number
    on(sigName: "notify::signature-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::signature-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::signature-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::signature-host", ...args: any[]): void
    connect(sigName: "notify::signature-method", callback: (...args: any[]) => void): number
    on(sigName: "notify::signature-method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::signature-method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::signature-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::signature-method", ...args: any[]): void
    connect(sigName: "notify::token", callback: (...args: any[]) => void): number
    on(sigName: "notify::token", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::token", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::token", ...args: any[]): void
    connect(sigName: "notify::token-secret", callback: (...args: any[]) => void): number
    on(sigName: "notify::token-secret", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::token-secret", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::token-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::token-secret", ...args: any[]): void
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

/**
 * #OAuthProxy has no publicly available members.
 * @class 
 */
class OAuthProxy extends Proxy {

    // Own properties of Rest-0.7.Rest.OAuthProxy

    static name: string
    static $gtype: GObject.GType<OAuthProxy>

    // Constructors of Rest-0.7.Rest.OAuthProxy

    constructor(config?: OAuthProxy_ConstructProps) 
    /**
     * Create a new #OAuthProxy for the specified endpoint `url_format,` using the
     * specified API key and secret.
     * 
     * This proxy won't have the Token or Token Secret set so as such will be
     * unauthorised.  If the tokens are unknown then oauth_proxy_request_token() and
     * oauth_proxy_access_token() should be called to do the OAuth authorisation, or
     * the tokens should be set using oauth_proxy_set_token() and
     * oauth_proxy_set_token_secret().
     * 
     * Set `binding_required` to %TRUE if the URL contains string formatting
     * operations (for example "http://foo.com/%<!-- -->s".  These must be expanded
     * using rest_proxy_bind() before invoking the proxy.
     * @constructor 
     * @param consumerKey the Consumer Key
     * @param consumerSecret the Consumer Secret
     * @param urlFormat the endpoint URL
     * @param bindingRequired whether the URL needs to be bound before calling
     */
    constructor(consumerKey: string, consumerSecret: string, urlFormat: string, bindingRequired: boolean) 
    /**
     * Create a new #OAuthProxy for the specified endpoint `url_format,` using the
     * specified API key and secret.
     * 
     * This proxy won't have the Token or Token Secret set so as such will be
     * unauthorised.  If the tokens are unknown then oauth_proxy_request_token() and
     * oauth_proxy_access_token() should be called to do the OAuth authorisation, or
     * the tokens should be set using oauth_proxy_set_token() and
     * oauth_proxy_set_token_secret().
     * 
     * Set `binding_required` to %TRUE if the URL contains string formatting
     * operations (for example "http://foo.com/%<!-- -->s".  These must be expanded
     * using rest_proxy_bind() before invoking the proxy.
     * @constructor 
     * @param consumerKey the Consumer Key
     * @param consumerSecret the Consumer Secret
     * @param urlFormat the endpoint URL
     * @param bindingRequired whether the URL needs to be bound before calling
     */
    static new(consumerKey: string, consumerSecret: string, urlFormat: string, bindingRequired: boolean): OAuthProxy

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
     */
    static new(urlFormat: string, bindingRequired: boolean): Proxy
    /**
     * Create a new #OAuthProxy for the specified endpoint `url_format,` using the
     * specified API key and secret.
     * 
     * `token` and `token_secret` are used for the Access Token and Token Secret, so
     * if they are still valid then this proxy is authorised.
     * 
     * Set `binding_required` to %TRUE if the URL contains string formatting
     * operations (for example "http://foo.com/%<!-- -->s".  These must be expanded
     * using rest_proxy_bind() before invoking the proxy.
     * @constructor 
     * @param consumerKey the Consumer Key
     * @param consumerSecret the Consumer Secret
     * @param token the Access Token
     * @param tokenSecret the Token Secret
     * @param urlFormat the endpoint URL
     * @param bindingRequired whether the URL needs to be bound before calling
     */
    static newWithToken(consumerKey: string, consumerSecret: string, token: string, tokenSecret: string, urlFormat: string, bindingRequired: boolean): OAuthProxy
    _init(config?: OAuthProxy_ConstructProps): void
}

interface OAuthProxyCall_ConstructProps extends ProxyCall_ConstructProps {
}

interface OAuthProxyCall {

    // Own fields of Rest-0.7.Rest.OAuthProxyCall

    parent: ProxyCall

    // Owm methods of Rest-0.7.Rest.OAuthProxyCall

    parseTokenReponse(): void
    parseTokenResponse(): void

    // Class property signals of Rest-0.7.Rest.OAuthProxyCall

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
 * #OAuthProxyCall has no publicly available members.
 * @class 
 */
class OAuthProxyCall extends ProxyCall {

    // Own properties of Rest-0.7.Rest.OAuthProxyCall

    static name: string
    static $gtype: GObject.GType<OAuthProxyCall>

    // Constructors of Rest-0.7.Rest.OAuthProxyCall

    constructor(config?: OAuthProxyCall_ConstructProps) 
    _init(config?: OAuthProxyCall_ConstructProps): void
}

interface Proxy_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Rest-0.7.Rest.Proxy

    bindingRequired?: boolean | null
    disableCookies?: boolean | null
    password?: string | null
    sslCaFile?: string | null
    sslStrict?: boolean | null
    urlFormat?: string | null
    userAgent?: string | null
    username?: string | null
}

/**
 * Signal callback interface for `authenticate`
 */
interface Proxy_AuthenticateSignalCallback {
    (auth: ProxyAuth, retrying: boolean): boolean
}

interface Proxy {

    // Own properties of Rest-0.7.Rest.Proxy

    bindingRequired: boolean
    readonly disableCookies: boolean
    password: string
    sslCaFile: string
    sslStrict: boolean
    urlFormat: string
    userAgent: string
    username: string

    // Own fields of Rest-0.7.Rest.Proxy

    parent: GObject.Object

    // Owm methods of Rest-0.7.Rest.Proxy

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
    addSoupFeature(feature: Soup.SessionFeature): void
    getUserAgent(): string
    /**
     * Create a new #RestProxyCall for making a call to the web service.  This call
     * is one-shot and should not be re-used for making multiple calls.
     */
    newCall(): ProxyCall
    setUserAgent(userAgent: string): void

    // Own signals of Rest-0.7.Rest.Proxy

    connect(sigName: "authenticate", callback: Proxy_AuthenticateSignalCallback): number
    on(sigName: "authenticate", callback: Proxy_AuthenticateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: Proxy_AuthenticateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: Proxy_AuthenticateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "authenticate", retrying: boolean, ...args: any[]): void

    // Class property signals of Rest-0.7.Rest.Proxy

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

/**
 * #RestProxy has no publicly available members.
 * @class 
 */
class Proxy extends GObject.Object {

    // Own properties of Rest-0.7.Rest.Proxy

    static name: string
    static $gtype: GObject.GType<Proxy>

    // Constructors of Rest-0.7.Rest.Proxy

    constructor(config?: Proxy_ConstructProps) 
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
     */
    constructor(urlFormat: string, bindingRequired: boolean) 
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
     */
    static new(urlFormat: string, bindingRequired: boolean): Proxy
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
     * @param username the username provided by the user or client
     * @param password the password provided by the user or client
     */
    static newWithAuthentication(urlFormat: string, bindingRequired: boolean, username: string, password: string): Proxy
    _init(config?: Proxy_ConstructProps): void
}

interface ProxyAuth_ConstructProps extends GObject.Object_ConstructProps {
}

interface ProxyAuth {

    // Own fields of Rest-0.7.Rest.ProxyAuth

    parent: GObject.Object
    priv: ProxyAuthPrivate

    // Owm methods of Rest-0.7.Rest.ProxyAuth

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

    // Class property signals of Rest-0.7.Rest.ProxyAuth

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #RestProxyAuth has no publicly available members.
 * @class 
 */
class ProxyAuth extends GObject.Object {

    // Own properties of Rest-0.7.Rest.ProxyAuth

    static name: string
    static $gtype: GObject.GType<ProxyAuth>

    // Constructors of Rest-0.7.Rest.ProxyAuth

    constructor(config?: ProxyAuth_ConstructProps) 
    _init(config?: ProxyAuth_ConstructProps): void
}

interface ProxyCall_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Rest-0.7.Rest.ProxyCall

    proxy?: Proxy | null
}

interface ProxyCall {

    // Own properties of Rest-0.7.Rest.ProxyCall

    readonly proxy: Proxy

    // Own fields of Rest-0.7.Rest.ProxyCall

    parent: GObject.Object
    priv: ProxyCallPrivate

    // Owm methods of Rest-0.7.Rest.ProxyCall

    /**
     * Add a header called `header` with the value `value` to the call.  If a
     * header with this name already exists, the new value will replace the old.
     * @param header The name of the header to set
     * @param value The value of the header
     */
    addHeader(header: string, value: string): void
    /**
     * Add a query parameter called `param` with the string value `value` to the call.
     * If a parameter with this name already exists, the new value will replace the
     * old.
     * @param name The name of the parameter to set
     * @param value The value of the parameter
     */
    addParam(name: string, value: string): void
    addParamFull(param: Param): void
    /**
     * Get the REST function that is going to be called on the proxy.
     */
    getFunction(): string
    /**
     * Get the HTTP method to use when making the call, for example GET or POST.
     */
    getMethod(): string
    /**
     * Get the parameters as a #RestParams of parameter names to values.  The
     * returned value is owned by the RestProxyCall instance and should not
     * be freed by the caller.
     */
    getParams(): Params
    /**
     * Get the return payload.
     */
    getPayload(): string
    /**
     * Get the length of the return payload.
     */
    getPayloadLength(): number
    getResponseHeaders(): GLib.HashTable
    /**
     * Get the HTTP status code for the call.
     */
    getStatusCode(): number
    /**
     * Get the human-readable HTTP status message for the call.
     */
    getStatusMessage(): string
    /**
     * A GIO-style version of rest_proxy_call_async().
     * @param cancellable an optional #GCancellable that can be used to   cancel the call, or %NULL
     * @param callback callback to call when the async call is finished
     */
    invokeAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    invokeFinish(result: Gio.AsyncResult): boolean
    /**
     * Get the value of the header called `header`.
     * @param header The header name
     */
    lookupHeader(header: string): string
    /**
     * Get the value of the parameter called `name`.
     * @param name The paramter name
     */
    lookupParam(name: string): Param
    /**
     * Get the string value of the header `header` or %NULL if that header is not
     * present or there are no headers.
     * @param header The name of the header to lookup.
     */
    lookupResponseHeader(header: string): string
    /**
     * Remove the header named `header` from the call.
     * @param header The header name
     */
    removeHeader(header: string): void
    /**
     * Remove the parameter named `name` from the call.
     * @param name The paramter name
     */
    removeParam(name: string): void
    run(loop: GLib.MainLoop): boolean
    /**
     * Invoker for a virtual method to serialize the parameters for this
     * #RestProxyCall.
     */
    serializeParams(): [ /* returnType */ boolean, /* contentType */ string, /* content */ string, /* contentLen */ number ]
    /**
     * Set the REST "function" to call on the proxy.  This is appended to the URL,
     * so that for example a proxy with the URL
     * <literal>http://www.example.com/</literal> and the function
     * <literal>test</literal> would actually access the URL
     * <literal>http://www.example.com/test</literal>
     * @param function_ The function to call
     */
    setFunction(function_: string): void
    /**
     * Set the HTTP method to use when making the call, for example GET or POST.
     * @param method The HTTP method to use
     */
    setMethod(method: string): void
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
     * @param weakObject The #GObject to weakly reference and tie the lifecycle to
     */
    upload(callback: ProxyCallUploadCallback, weakObject: GObject.Object): boolean

    // Class property signals of Rest-0.7.Rest.ProxyCall

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
 * #RestProxyCall has no publicly available members.
 * @class 
 */
class ProxyCall extends GObject.Object {

    // Own properties of Rest-0.7.Rest.ProxyCall

    static name: string
    static $gtype: GObject.GType<ProxyCall>

    // Constructors of Rest-0.7.Rest.ProxyCall

    constructor(config?: ProxyCall_ConstructProps) 
    _init(config?: ProxyCall_ConstructProps): void
}

interface XmlParser_ConstructProps extends GObject.Object_ConstructProps {
}

interface XmlParser {

    // Own fields of Rest-0.7.Rest.XmlParser

    parent: GObject.Object

    // Owm methods of Rest-0.7.Rest.XmlParser

    /**
     * Parse the XML in `data,` and return a new #RestXmlNode.  If `data` is invalid
     * XML, %NULL is returned.
     * @param data the XML content to parse
     * @param len the length of `data,` or -1 if `data` is a nul-terminated string
     */
    parseFromData(data: string, len: number): XmlNode

    // Class property signals of Rest-0.7.Rest.XmlParser

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class XmlParser extends GObject.Object {

    // Own properties of Rest-0.7.Rest.XmlParser

    static name: string
    static $gtype: GObject.GType<XmlParser>

    // Constructors of Rest-0.7.Rest.XmlParser

    constructor(config?: XmlParser_ConstructProps) 
    /**
     * Create a new #RestXmlParser, for parsing XML documents.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #RestXmlParser, for parsing XML documents.
     * @constructor 
     */
    static new(): XmlParser
    _init(config?: XmlParser_ConstructProps): void
}

interface OAuth2ProxyCallClass {

    // Own fields of Rest-0.7.Rest.OAuth2ProxyCallClass

    parentClass: ProxyCallClass
}

abstract class OAuth2ProxyCallClass {

    // Own properties of Rest-0.7.Rest.OAuth2ProxyCallClass

    static name: string
}

interface OAuth2ProxyClass {

    // Own fields of Rest-0.7.Rest.OAuth2ProxyClass

    parentClass: ProxyClass
}

abstract class OAuth2ProxyClass {

    // Own properties of Rest-0.7.Rest.OAuth2ProxyClass

    static name: string
}

interface OAuth2ProxyPrivate {
}

class OAuth2ProxyPrivate {

    // Own properties of Rest-0.7.Rest.OAuth2ProxyPrivate

    static name: string
}

interface OAuthProxyCallClass {

    // Own fields of Rest-0.7.Rest.OAuthProxyCallClass

    parentClass: ProxyCallClass
}

abstract class OAuthProxyCallClass {

    // Own properties of Rest-0.7.Rest.OAuthProxyCallClass

    static name: string
}

interface OAuthProxyClass {

    // Own fields of Rest-0.7.Rest.OAuthProxyClass

    parentClass: ProxyClass
}

abstract class OAuthProxyClass {

    // Own properties of Rest-0.7.Rest.OAuthProxyClass

    static name: string
}

interface Param {

    // Owm methods of Rest-0.7.Rest.Param

    /**
     * Get the content of `param`.  The content should be treated as read-only and
     * not modified in any way.
     */
    getContent(): object | null
    /**
     * Get the length of the content of `param`.
     */
    getContentLength(): number
    /**
     * Get the MIME type of the parameter.  For example, basic strings have the MIME
     * type "text/plain".
     */
    getContentType(): string
    /**
     * Get the original file name of the parameter, if one is available.
     */
    getFileName(): string
    /**
     * Get the name of the parameter.
     */
    getName(): string
    /**
     * Determine if the parameter is a string value, i.e. the content type is "text/plain".
     */
    isString(): boolean
    /**
     * Increase the reference count on `param`.
     */
    ref(): Param
    /**
     * Decrease the reference count on `param,` destroying it if the reference count
     * reaches 0.
     */
    unref(): void
}

class Param {

    // Own properties of Rest-0.7.Rest.Param

    static name: string

    // Constructors of Rest-0.7.Rest.Param

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
     * @param contentType the content type of the data
     * @param filename the original filename, or %NULL
     */
    static newFull(name: string, use: MemoryUse, data: Uint8Array, contentType: string, filename: string): Param
    /**
     * A convience constructor to create a #RestParam from a given UTF-8 string.
     * The resulting #RestParam will have a content type of "text/plain".
     * @constructor 
     * @param name the parameter name
     * @param use the #RestMemoryUse describing how the memory can be used
     * @param string the parameter value
     */
    static newString(name: string, use: MemoryUse, string: string): Param
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
     * |[
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
     * @param contentType the content type of the data
     * @param filename the original filename, or %NULL
     * @param owner pointer to an object that owns `data`
     * @param ownerDnotify a function to free/unref `owner` when   the buffer is freed
     */
    static newWithOwner(name: string, data: Uint8Array, contentType: string, filename: string | null, owner: object | null, ownerDnotify: GLib.DestroyNotify | null): Param
}

interface Params {

    // Owm methods of Rest-0.7.Rest.Params

    /**
     * Add `param` to `params`.
     * @param param a valid #RestParam
     */
    add(param: Param): void
    /**
     * Checks if the parameters are all simple strings (have a content type of
     * "text/plain").
     */
    areStrings(): boolean
    /**
     * Create a new #GHashTable which contains the name and value of all string
     * (content type of text/plain) parameters.
     * 
     * The values are owned by the #RestParams, so don't destroy the #RestParams
     * before the hash table.
     */
    asStringHashTable(): GLib.HashTable
    /**
     * Destroy the #RestParams and the #RestParam objects that it contains.
     */
    free(): void
    /**
     * Return the #RestParam called `name,` or %NULL if it doesn't exist.
     * @param name a parameter name
     */
    get(name: string): Param
    /**
     * Remove the #RestParam called `name`.
     * @param name a parameter name
     */
    remove(name: string): void
}

class Params {

    // Own properties of Rest-0.7.Rest.Params

    static name: string
}

interface ParamsIter {

    // Owm methods of Rest-0.7.Rest.ParamsIter

    /**
     * Initialize a parameter iterator over `params`. Modifying `params` after calling
     * this function invalidates the returned iterator.
     * |[
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
     * at as a result of this advancement.  If FALSE is returned, `name` and `param`
     * are not set and the iterator becomes invalid.
     * @param name a location to store the name, or %NULL
     * @param param a location to store the #RestParam, or %NULL
     */
    next(name: string, param: Param): boolean
}

class ParamsIter {

    // Own properties of Rest-0.7.Rest.ParamsIter

    static name: string
}

interface ProxyAuthClass {

    // Own fields of Rest-0.7.Rest.ProxyAuthClass

    parentClass: GObject.ObjectClass
}

abstract class ProxyAuthClass {

    // Own properties of Rest-0.7.Rest.ProxyAuthClass

    static name: string
}

interface ProxyAuthPrivate {
}

class ProxyAuthPrivate {

    // Own properties of Rest-0.7.Rest.ProxyAuthPrivate

    static name: string
}

interface ProxyCallClass {

    // Own fields of Rest-0.7.Rest.ProxyCallClass

    prepare: (call: ProxyCall) => boolean
    serializeParams: (call: ProxyCall) => [ /* returnType */ boolean, /* contentType */ string, /* content */ string, /* contentLen */ number ]
}

/**
 * Class structure for #RestProxyCall for subclasses to implement specialised
 * behaviour.
 * @record 
 */
abstract class ProxyCallClass {

    // Own properties of Rest-0.7.Rest.ProxyCallClass

    static name: string
}

interface ProxyCallPrivate {
}

class ProxyCallPrivate {

    // Own properties of Rest-0.7.Rest.ProxyCallPrivate

    static name: string
}

interface ProxyClass {

    // Own fields of Rest-0.7.Rest.ProxyClass

    newCall: (proxy: Proxy) => ProxyCall
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
abstract class ProxyClass {

    // Own properties of Rest-0.7.Rest.ProxyClass

    static name: string
}

interface XmlNode {

    // Own fields of Rest-0.7.Rest.XmlNode

    /**
     * the name of the element
     * @field 
     */
    name: string
    /**
     * the textual content of the element
     * @field 
     */
    content: string
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

    // Owm methods of Rest-0.7.Rest.XmlNode

    /**
     * Adds attribute to the given node.
     * @param attribute name of the attribute
     * @param value value to set attribute to
     */
    addAttr(attribute: string, value: string): void
    /**
     * Adds a new node to the given parent node; to create the top-level node,
     * parent should be %NULL.
     * @param tag name of the child node
     */
    addChild(tag: string): XmlNode
    /**
     * Searches for the first child node of `start` named `tag`.
     * @param tag the name of a node
     */
    find(tag: string): XmlNode
    free(): void
    /**
     * Get the value of the attribute named `attr_name,` or %NULL if it doesn't
     * exist.
     * @param attrName the name of an attribute
     */
    getAttr(attrName: string): string
    /**
     * Recursively outputs given node and it's children.
     */
    print(): string
    /**
     * Sets content for the given node.
     * @param value the content
     */
    setContent(value: string): void
}

class XmlNode {

    // Own properties of Rest-0.7.Rest.XmlNode

    static name: string
}

interface XmlParserClass {

    // Own fields of Rest-0.7.Rest.XmlParserClass

    parentClass: GObject.ObjectClass
}

abstract class XmlParserClass {

    // Own properties of Rest-0.7.Rest.XmlParserClass

    static name: string
}

}
export default Rest;