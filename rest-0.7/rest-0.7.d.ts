/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './rest-0.7-ambient.d.ts';

import './rest-0.7-import.d.ts';

/**
 * Rest-0.7
 */

import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

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
    class ProxyCallError extends GLib.Error {
        static $gtype: GObject.GType<ProxyCallError>;

        // Static fields of Rest.ProxyCallError

        /**
         * the method call failed
         */
        static FAILED: number;

        // Constructors of Rest.ProxyCallError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Own static methods of Rest.ProxyCallError

        static quark(): GLib.Quark;
    }

    /**
     * Error domain used when returning errors from a #RestProxy.
     */
    class ProxyError extends GLib.Error {
        static $gtype: GObject.GType<ProxyError>;

        // Static fields of Rest.ProxyError

        /**
         * Cancelled
         */
        static CANCELLED: number;
        /**
         * Resolution
         */
        static RESOLUTION: number;
        /**
         * Connection
         */
        static CONNECTION: number;
        /**
         * SSL
         */
        static SSL: number;
        /**
         * Input/Output
         */
        static IO: number;
        /**
         * Failure
         */
        static FAILED: number;
        /**
         * HTTP/Multiple choices
         */
        static HTTP_MULTIPLE_CHOICES: number;
        /**
         * HTTP/Moved permanently
         */
        static HTTP_MOVED_PERMANENTLY: number;
        /**
         * HTTP/Found
         */
        static HTTP_FOUND: number;
        /**
         * HTTP/See other
         */
        static HTTP_SEE_OTHER: number;
        /**
         * HTTP/Not modified
         */
        static HTTP_NOT_MODIFIED: number;
        /**
         * HTTP/Use proxy
         */
        static HTTP_USE_PROXY: number;
        /**
         * HTTP/306
         */
        static HTTP_THREEOHSIX: number;
        /**
         * HTTP/Temporary redirect
         */
        static HTTP_TEMPORARY_REDIRECT: number;
        /**
         * HTTP/Bad request
         */
        static HTTP_BAD_REQUEST: number;
        /**
         * HTTP/Unauthorized
         */
        static HTTP_UNAUTHORIZED: number;
        /**
         * HTTP/402
         */
        static HTTP_FOUROHTWO: number;
        /**
         * HTTP/Forbidden
         */
        static HTTP_FORBIDDEN: number;
        /**
         * HTTP/Not found
         */
        static HTTP_NOT_FOUND: number;
        /**
         * HTTP/Method not allowed
         */
        static HTTP_METHOD_NOT_ALLOWED: number;
        /**
         * HTTP/Not acceptable
         */
        static HTTP_NOT_ACCEPTABLE: number;
        /**
         * HTTP/Proxy authentication required
         */
        static HTTP_PROXY_AUTHENTICATION_REQUIRED: number;
        /**
         * HTTP/Request timeout
         */
        static HTTP_REQUEST_TIMEOUT: number;
        /**
         * HTTP/Conflict
         */
        static HTTP_CONFLICT: number;
        /**
         * HTTP/Gone
         */
        static HTTP_GONE: number;
        /**
         * HTTP/Length required
         */
        static HTTP_LENGTH_REQUIRED: number;
        /**
         * HTTP/Precondition failed
         */
        static HTTP_PRECONDITION_FAILED: number;
        /**
         * HTTP/Request entity too large
         */
        static HTTP_REQUEST_ENTITY_TOO_LARGE: number;
        /**
         * HTTP/Request URI too long
         */
        static HTTP_REQUEST_URI_TOO_LONG: number;
        /**
         * HTTP/Unsupported media type
         */
        static HTTP_UNSUPPORTED_MEDIA_TYPE: number;
        /**
         * HTTP/Requested range not satisfiable
         */
        static HTTP_REQUESTED_RANGE_NOT_SATISFIABLE: number;
        /**
         * HTTP/Expectation failed
         */
        static HTTP_EXPECTATION_FAILED: number;
        /**
         * HTTP/Internal server error
         */
        static HTTP_INTERNAL_SERVER_ERROR: number;
        /**
         * HTTP/Not implemented
         */
        static HTTP_NOT_IMPLEMENTED: number;
        /**
         * HTTP/Bad gateway
         */
        static HTTP_BAD_GATEWAY: number;
        /**
         * HTTP/Service unavailable
         */
        static HTTP_SERVICE_UNAVAILABLE: number;
        /**
         * HTTP/Gateway timeout
         */
        static HTTP_GATEWAY_TIMEOUT: number;
        /**
         * HTTP/Version not supported
         */
        static HTTP_HTTP_VERSION_NOT_SUPPORTED: number;

        // Constructors of Rest.ProxyError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Own static methods of Rest.ProxyError

        static quark(): GLib.Quark;
    }

    function hmac_sha1(key: string, message: string): string;
    function proxy_call_error_quark(): GLib.Quark;
    function proxy_error_quark(): GLib.Quark;
    interface OAuthProxyAuthCallback<A = GObject.Object> {
        (proxy: OAuthProxy, error: GLib.Error, weak_object: A, userdata?: any | null): void;
    }
    interface ProxyCallAsyncCallback<A = GObject.Object> {
        (call: ProxyCall, error: GLib.Error, weak_object: A, userdata?: any | null): void;
    }
    interface ProxyCallContinuousCallback<A = GObject.Object> {
        (call: ProxyCall, buf: string, len: number, error: GLib.Error, weak_object: A, userdata?: any | null): void;
    }
    interface ProxyCallUploadCallback<A = GObject.Object> {
        (
            call: ProxyCall,
            total: number,
            uploaded: number,
            error: GLib.Error,
            weak_object: A,
            userdata?: any | null,
        ): void;
    }
    module OAuth2Proxy {
        // Constructor properties interface

        interface ConstructorProps extends Proxy.ConstructorProps {
            access_token: string;
            accessToken: string;
            auth_endpoint: string;
            authEndpoint: string;
            client_id: string;
            clientId: string;
        }
    }

    /**
     * #OAuth2Proxy has no publicly available members.
     */
    class OAuth2Proxy extends Proxy {
        static $gtype: GObject.GType<OAuth2Proxy>;

        // Own properties of Rest.OAuth2Proxy

        get access_token(): string;
        set access_token(val: string);
        get accessToken(): string;
        set accessToken(val: string);
        get auth_endpoint(): string;
        get authEndpoint(): string;
        get client_id(): string;
        get clientId(): string;

        // Constructors of Rest.OAuth2Proxy

        constructor(properties?: Partial<OAuth2Proxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            client_id: string,
            auth_endpoint: string,
            url_format: string,
            binding_required: boolean,
        ): OAuth2Proxy;
        // Conflicted with Rest.Proxy.new

        static ['new'](...args: never[]): any;

        static new_with_token(
            client_id: string,
            access_token: string,
            auth_endpoint: string,
            url_format: string,
            binding_required: boolean,
        ): OAuth2Proxy;

        // Own static methods of Rest.OAuth2Proxy

        /**
         * A utility function to extract the access token from the url that results from
         * the redirection after the user authenticates
         * @param url the url which contains an access token in its fragment
         */
        static extract_access_token(url: string): string;

        // Own methods of Rest.OAuth2Proxy

        /**
         * Builds a url at which the user can log in to the specified OAuth2-based web
         * service.  See the documentation for oauth2_proxy_build_login_url_full() for
         * detailed information.
         * @param redirect_uri the uri to redirect to after the user authenticates
         * @returns a newly allocated uri string
         */
        build_login_url(redirect_uri: string): string;
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
         * @param redirect_uri the uri to redirect to after the user authenticates
         * @param extra_params any extra parameters to add to the login url (e.g. facebook uses 'scope=foo,bar' to request extended permissions).
         * @returns a newly allocated uri string
         */
        build_login_url_full(
            redirect_uri: string,
            extra_params: { [key: string]: any } | GLib.HashTable<any, any>,
        ): string;
        /**
         * Get the current request or access token.
         * @returns the token, or %NULL if there is no token yet.  This string is owned by #OAuth2Proxy and should not be freed.
         */
        get_access_token(): string;
        /**
         * Set the access token.
         * @param access_token the access token
         */
        set_access_token(access_token: string): void;
    }

    module OAuth2ProxyCall {
        // Constructor properties interface

        interface ConstructorProps extends ProxyCall.ConstructorProps {}
    }

    /**
     * #OAuth2ProxyCall has no publicly available members.
     */
    class OAuth2ProxyCall extends ProxyCall {
        static $gtype: GObject.GType<OAuth2ProxyCall>;

        // Constructors of Rest.OAuth2ProxyCall

        constructor(properties?: Partial<OAuth2ProxyCall.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module OAuthProxy {
        // Constructor properties interface

        interface ConstructorProps extends Proxy.ConstructorProps {
            consumer_key: string;
            consumerKey: string;
            consumer_secret: string;
            consumerSecret: string;
            signature_host: string;
            signatureHost: string;
            signature_method: OAuthSignatureMethod;
            signatureMethod: OAuthSignatureMethod;
            token: string;
            token_secret: string;
            tokenSecret: string;
        }
    }

    /**
     * #OAuthProxy has no publicly available members.
     */
    class OAuthProxy extends Proxy {
        static $gtype: GObject.GType<OAuthProxy>;

        // Own properties of Rest.OAuthProxy

        get consumer_key(): string;
        get consumerKey(): string;
        get consumer_secret(): string;
        get consumerSecret(): string;
        get signature_host(): string;
        set signature_host(val: string);
        get signatureHost(): string;
        set signatureHost(val: string);
        get signature_method(): OAuthSignatureMethod;
        set signature_method(val: OAuthSignatureMethod);
        get signatureMethod(): OAuthSignatureMethod;
        set signatureMethod(val: OAuthSignatureMethod);
        get token(): string;
        set token(val: string);
        get token_secret(): string;
        set token_secret(val: string);
        get tokenSecret(): string;
        set tokenSecret(val: string);

        // Constructors of Rest.OAuthProxy

        constructor(properties?: Partial<OAuthProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            consumer_key: string,
            consumer_secret: string,
            url_format: string,
            binding_required: boolean,
        ): OAuthProxy;
        // Conflicted with Rest.Proxy.new

        static ['new'](...args: never[]): any;

        static new_with_token(
            consumer_key: string,
            consumer_secret: string,
            token: string,
            token_secret: string,
            url_format: string,
            binding_required: boolean,
        ): OAuthProxy;

        // Own methods of Rest.OAuthProxy

        /**
         * Perform the Access Token phase of OAuth, invoking `function` (defaulting to
         * "access_token" if `function` is NULL).
         *
         * `verifier` is only used if you are using OAuth 1.0a.  This is either the
         * "oauth_verifier" parameter that was passed to your callback URI, or a string
         * that the user enters in some other manner (for example in a popup dialog) if
         * "oob" was passed to oauth_proxy_request_token().  For OAuth 1.0, pass %NULL.
         * @param _function the function name to invoke
         * @param verifier the verifier
         * @returns %TRUE on success, or %FALSE on failure. On failure @error is set.
         */
        access_token(_function: string, verifier: string): boolean;
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
         * @param _function the function name to invoke
         * @param verifier the verifier
         * @param callback a #OAuthProxyAuthCallback to invoke on completion
         * @param weak_object #GObject to weakly reference and tie the lifecycle of the method call too
         * @returns %TRUE if the method was successfully queued, or %FALSE on failure. On failure @error is set.
         */
        access_token_async(
            _function: string,
            verifier: string,
            callback: OAuthProxyAuthCallback,
            weak_object: GObject.Object,
        ): boolean;
        /**
         * Perform an OAuth authorisation step.  This calls `function` and then updates
         * the token and token secret in the proxy.
         *
         * `proxy` must not require binding, the function will be invoked using
         * rest_proxy_call_set_function().
         * @param _function the function to invoke on the proxy
         */
        auth_step(_function: string): boolean;
        /**
         * Perform an OAuth authorisation step.  This calls `function` and then updates
         * the token and token secret in the proxy.
         *
         * `proxy` must not require binding, the function will be invoked using
         * rest_proxy_call_set_function().
         * @param _function the function to invoke on the proxy
         * @param callback the callback to invoke when authorisation is complete
         * @param weak_object the #GObject to weakly reference and tie the lifecycle too
         */
        auth_step_async(_function: string, callback: OAuthProxyAuthCallback, weak_object: GObject.Object): boolean;
        /**
         * Get the signature hostname used when creating a signature base string.
         * @returns the signature hostname, or %NULL if there is none set.  This string is owned by #OAuthProxy and should not be freed.
         */
        get_signature_host(): string;
        /**
         * Get the current request or access token.
         * @returns the token, or %NULL if there is no token yet.  This string is owned by #OAuthProxy and should not be freed.
         */
        get_token(): string;
        /**
         * Get the current request or access token secret.
         * @returns the token secret, or %NULL if there is no token secret yet.  This string is owned by #OAuthProxy and should not be freed.
         */
        get_token_secret(): string;
        /**
         * Determines if the server supports OAuth 1.0a with this proxy. This is only
         * valid after oauth_proxy_request_token() or oauth_proxy_request_token_async()
         * has been called.
         * @returns %TRUE if the server supports OAuth 1.0a, %FALSE otherwise.
         */
        is_oauth10a(): boolean;
        /**
         * Create a new <ulink
         * url="http://www.scribd.com/doc/26707268/OAuth-Echo-Identity-Veri%EF%AC%81cation-Delegation-Draft">OAuth
         * Echo</ulink> proxy.
         * @param service_url the service URL
         * @param url_format the URL format
         * @param binding_required whether a binding is required
         * @returns a new OAuth Echo proxy
         */
        new_echo_proxy(service_url: string, url_format: string, binding_required: boolean): Proxy;
        /**
         * Perform the Request Token phase of OAuth, invoking `function` (defaulting to
         * "request_token" if `function` is NULL).
         *
         * The value of `callback` depends on whether you wish to use OAuth 1.0 or 1.0a.
         * If you wish to use 1.0 then callback must be NULL.  To use 1.0a then
         * `callback` should either be your callback URI, or "oob" (out-of-band).
         * @param _function the function name to invoke
         * @param callback_uri the callback URI
         * @returns %TRUE on success, or %FALSE on failure. On failure @error is set.
         */
        request_token(_function: string, callback_uri: string): boolean;
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
         * @param _function the function name to invoke
         * @param callback_uri the callback URI
         * @param callback a #OAuthProxyAuthCallback to invoke on completion
         * @param weak_object #GObject to weakly reference and tie the lifecycle of the method call too
         * @returns %TRUE if the method was successfully queued, or %FALSE on failure. On failure @error is set.
         */
        request_token_async(
            _function: string,
            callback_uri: string,
            callback: OAuthProxyAuthCallback,
            weak_object: GObject.Object,
        ): boolean;
        /**
         * Set the signature hostname used when creating a signature base string.
         * @param signature_host the signature host
         */
        set_signature_host(signature_host: string): void;
        /**
         * Set the access token.
         * @param token the access token
         */
        set_token(token: string): void;
        /**
         * Set the access token secret.
         * @param token_secret the access token secret
         */
        set_token_secret(token_secret: string): void;
    }

    module OAuthProxyCall {
        // Constructor properties interface

        interface ConstructorProps extends ProxyCall.ConstructorProps {}
    }

    /**
     * #OAuthProxyCall has no publicly available members.
     */
    class OAuthProxyCall extends ProxyCall {
        static $gtype: GObject.GType<OAuthProxyCall>;

        // Constructors of Rest.OAuthProxyCall

        constructor(properties?: Partial<OAuthProxyCall.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Rest.OAuthProxyCall

        parse_token_reponse(): void;
        parse_token_response(): void;
    }

    module Proxy {
        // Signal callback interfaces

        interface Authenticate {
            (auth: ProxyAuth, retrying: boolean): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            binding_required: boolean;
            bindingRequired: boolean;
            disable_cookies: boolean;
            disableCookies: boolean;
            password: string;
            ssl_ca_file: string;
            sslCaFile: string;
            ssl_strict: boolean;
            sslStrict: boolean;
            url_format: string;
            urlFormat: string;
            user_agent: string;
            userAgent: string;
            username: string;
        }
    }

    /**
     * #RestProxy has no publicly available members.
     */
    class Proxy extends GObject.Object {
        static $gtype: GObject.GType<Proxy>;

        // Own properties of Rest.Proxy

        get binding_required(): boolean;
        set binding_required(val: boolean);
        get bindingRequired(): boolean;
        set bindingRequired(val: boolean);
        get disable_cookies(): boolean;
        get disableCookies(): boolean;
        get password(): string;
        set password(val: string);
        get ssl_ca_file(): string;
        set ssl_ca_file(val: string);
        get sslCaFile(): string;
        set sslCaFile(val: string);
        get ssl_strict(): boolean;
        set ssl_strict(val: boolean);
        get sslStrict(): boolean;
        set sslStrict(val: boolean);
        get url_format(): string;
        set url_format(val: string);
        get urlFormat(): string;
        set urlFormat(val: string);
        get user_agent(): string;
        set user_agent(val: string);
        get userAgent(): string;
        set userAgent(val: string);
        get username(): string;
        set username(val: string);

        // Constructors of Rest.Proxy

        constructor(properties?: Partial<Proxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](url_format: string, binding_required: boolean): Proxy;

        static new_with_authentication(
            url_format: string,
            binding_required: boolean,
            username: string,
            password: string,
        ): Proxy;

        // Own signals of Rest.Proxy

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'authenticate',
            callback: (_source: this, auth: ProxyAuth, retrying: boolean) => boolean,
        ): number;
        connect_after(
            signal: 'authenticate',
            callback: (_source: this, auth: ProxyAuth, retrying: boolean) => boolean,
        ): number;
        emit(signal: 'authenticate', auth: ProxyAuth, retrying: boolean): void;

        // Own virtual methods of Rest.Proxy

        vfunc_authenticate(auth: ProxyAuth, retrying: boolean): boolean;
        /**
         * Create a new #RestProxyCall for making a call to the web service.  This call
         * is one-shot and should not be re-used for making multiple calls.
         */
        vfunc_new_call(): ProxyCall;

        // Own methods of Rest.Proxy

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
        add_soup_feature(feature: Soup.SessionFeature): void;
        get_user_agent(): string;
        /**
         * Create a new #RestProxyCall for making a call to the web service.  This call
         * is one-shot and should not be re-used for making multiple calls.
         * @returns a new #RestProxyCall.
         */
        new_call(): ProxyCall;
        set_user_agent(user_agent: string): void;
    }

    module ProxyAuth {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * #RestProxyAuth has no publicly available members.
     */
    class ProxyAuth extends GObject.Object {
        static $gtype: GObject.GType<ProxyAuth>;

        // Constructors of Rest.ProxyAuth

        constructor(properties?: Partial<ProxyAuth.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Rest.ProxyAuth

        /**
         * Cancel the authentication process
         * by cancelling the associated #SoupMessage.
         * It results in returning #GError REST_PROXY_ERROR_CANCELLED
         * to the function that requested the authentication.
         */
        cancel(): void;
        /**
         * Pauses `auth`.
         *
         * If `auth` is already paused, this function does not
         * do anything.
         */
        pause(): void;
        /**
         * Unpauses a paused #RestProxyAuth instance.
         */
        unpause(): void;
    }

    module ProxyCall {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            proxy: Proxy;
        }
    }

    /**
     * #RestProxyCall has no publicly available members.
     */
    class ProxyCall extends GObject.Object {
        static $gtype: GObject.GType<ProxyCall>;

        // Own properties of Rest.ProxyCall

        get proxy(): Proxy;

        // Constructors of Rest.ProxyCall

        constructor(properties?: Partial<ProxyCall.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Rest.ProxyCall

        vfunc_prepare(): boolean;
        /**
         * Invoker for a virtual method to serialize the parameters for this
         * #RestProxyCall.
         */
        vfunc_serialize_params(): [boolean, string, string, number];

        // Own methods of Rest.ProxyCall

        /**
         * Add a header called `header` with the value `value` to the call.  If a
         * header with this name already exists, the new value will replace the old.
         * @param header The name of the header to set
         * @param value The value of the header
         */
        add_header(header: string, value: string): void;
        /**
         * Add a query parameter called `param` with the string value `value` to the call.
         * If a parameter with this name already exists, the new value will replace the
         * old.
         * @param name The name of the parameter to set
         * @param value The value of the parameter
         */
        add_param(name: string, value: string): void;
        add_param_full(param: Param): void;
        /**
         * Get the REST function that is going to be called on the proxy.
         * @returns The REST "function" for the current call, see also rest_proxy_call_set_function(). This string is owned by the #RestProxyCall and should not be freed.
         */
        get_function(): string;
        /**
         * Get the HTTP method to use when making the call, for example GET or POST.
         */
        get_method(): string;
        /**
         * Get the parameters as a #RestParams of parameter names to values.  The
         * returned value is owned by the RestProxyCall instance and should not
         * be freed by the caller.
         * @returns A #RestParams.
         */
        get_params(): Params;
        /**
         * Get the return payload.
         * @returns A pointer to the payload. This is owned by #RestProxyCall and should not be freed.
         */
        get_payload(): string;
        /**
         * Get the length of the return payload.
         * @returns the length of the payload in bytes.
         */
        get_payload_length(): number;
        get_response_headers(): GLib.HashTable<any, any>;
        /**
         * Get the HTTP status code for the call.
         */
        get_status_code(): number;
        /**
         * Get the human-readable HTTP status message for the call.
         * @returns The status message. This string is owned by #RestProxyCall and should not be freed.
         */
        get_status_message(): string;
        /**
         * A GIO-style version of rest_proxy_call_async().
         * @param cancellable an optional #GCancellable that can be used to   cancel the call, or %NULL
         * @param callback callback to call when the async call is finished
         */
        invoke_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        invoke_finish(result: Gio.AsyncResult): boolean;
        /**
         * Get the value of the header called `header`.
         * @param header The header name
         * @returns The header value, or %NULL if it does not exist. This string is owned by the #RestProxyCall and should not be freed.
         */
        lookup_header(header: string): string;
        /**
         * Get the value of the parameter called `name`.
         * @param name The paramter name
         * @returns The parameter value, or %NULL if it does not exist. This string is owned by the #RestProxyCall and should not be freed.
         */
        lookup_param(name: string): Param;
        /**
         * Get the string value of the header `header` or %NULL if that header is not
         * present or there are no headers.
         * @param header The name of the header to lookup.
         */
        lookup_response_header(header: string): string;
        /**
         * Remove the header named `header` from the call.
         * @param header The header name
         */
        remove_header(header: string): void;
        /**
         * Remove the parameter named `name` from the call.
         * @param name The paramter name
         */
        remove_param(name: string): void;
        run(loop: GLib.MainLoop): boolean;
        /**
         * Invoker for a virtual method to serialize the parameters for this
         * #RestProxyCall.
         * @returns TRUE if the serialization was successful, FALSE otherwise.
         */
        serialize_params(): [boolean, string, string, number];
        /**
         * Set the REST "function" to call on the proxy.  This is appended to the URL,
         * so that for example a proxy with the URL
         * <literal>http://www.example.com/</literal> and the function
         * <literal>test</literal> would actually access the URL
         * <literal>http://www.example.com/test</literal>
         * @param _function The function to call
         */
        set_function(_function: string): void;
        /**
         * Set the HTTP method to use when making the call, for example GET or POST.
         * @param method The HTTP method to use
         */
        set_method(method: string): void;
        sync(): boolean;
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
        upload(callback: ProxyCallUploadCallback, weak_object: GObject.Object): boolean;
    }

    module XmlParser {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class XmlParser extends GObject.Object {
        static $gtype: GObject.GType<XmlParser>;

        // Constructors of Rest.XmlParser

        constructor(properties?: Partial<XmlParser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): XmlParser;

        // Own methods of Rest.XmlParser

        /**
         * Parse the XML in `data,` and return a new #RestXmlNode.  If `data` is invalid
         * XML, %NULL is returned.
         * @param data the XML content to parse
         * @param len the length of @data, or -1 if @data is a nul-terminated string
         * @returns a new #RestXmlNode, or %NULL if the XML was invalid.
         */
        parse_from_data(data: string, len: number): XmlNode;
    }

    type OAuth2ProxyCallClass = typeof OAuth2ProxyCall;
    type OAuth2ProxyClass = typeof OAuth2Proxy;
    abstract class OAuth2ProxyPrivate {
        static $gtype: GObject.GType<OAuth2ProxyPrivate>;

        // Constructors of Rest.OAuth2ProxyPrivate

        _init(...args: any[]): void;
    }

    type OAuthProxyCallClass = typeof OAuthProxyCall;
    type OAuthProxyClass = typeof OAuthProxy;
    class Param {
        static $gtype: GObject.GType<Param>;

        // Constructors of Rest.Param

        constructor(name: string, use: MemoryUse, data: Uint8Array | string, content_type: string, filename: string);
        _init(...args: any[]): void;

        static new_full(
            name: string,
            use: MemoryUse,
            data: Uint8Array | string,
            content_type: string,
            filename: string,
        ): Param;

        static new_string(name: string, use: MemoryUse, string: string): Param;

        static new_with_owner(
            name: string,
            data: Uint8Array | string,
            content_type: string,
            filename?: string | null,
            owner?: any | null,
            owner_dnotify?: GLib.DestroyNotify | null,
        ): Param;

        // Own methods of Rest.Param

        /**
         * Get the content of `param`.  The content should be treated as read-only and
         * not modified in any way.
         * @returns the content.
         */
        get_content(): any | null;
        /**
         * Get the length of the content of `param`.
         * @returns the length of the content
         */
        get_content_length(): number;
        /**
         * Get the MIME type of the parameter.  For example, basic strings have the MIME
         * type "text/plain".
         * @returns the MIME type
         */
        get_content_type(): string;
        /**
         * Get the original file name of the parameter, if one is available.
         * @returns the filename if          set, or %NULL.
         */
        get_file_name(): string;
        /**
         * Get the name of the parameter.
         * @returns the parameter name.
         */
        get_name(): string;
        /**
         * Determine if the parameter is a string value, i.e. the content type is "text/plain".
         * @returns %TRUE if the parameter is a string, %FALSE otherwise.
         */
        is_string(): boolean;
        /**
         * Increase the reference count on `param`.
         * @returns the #RestParam
         */
        ref(): Param;
        /**
         * Decrease the reference count on `param,` destroying it if the reference count
         * reaches 0.
         */
        unref(): void;
    }

    abstract class Params {
        static $gtype: GObject.GType<Params>;

        // Constructors of Rest.Params

        _init(...args: any[]): void;

        // Own methods of Rest.Params

        /**
         * Add `param` to `params`.
         * @param param a valid #RestParam
         */
        add(param: Param): void;
        /**
         * Checks if the parameters are all simple strings (have a content type of
         * "text/plain").
         * @returns %TRUE if all of the parameters are simple strings, %FALSE otherwise.
         */
        are_strings(): boolean;
        /**
         * Create a new #GHashTable which contains the name and value of all string
         * (content type of text/plain) parameters.
         *
         * The values are owned by the #RestParams, so don't destroy the #RestParams
         * before the hash table.
         * @returns a new #GHashTable.
         */
        as_string_hash_table(): GLib.HashTable<string, Param>;
        /**
         * Destroy the #RestParams and the #RestParam objects that it contains.
         */
        free(): void;
        /**
         * Return the #RestParam called `name,` or %NULL if it doesn't exist.
         * @param name a parameter name
         * @returns a #RestParam or %NULL if the name doesn't exist
         */
        get(name: string): Param;
        /**
         * Remove the #RestParam called `name`.
         * @param name a parameter name
         */
        remove(name: string): void;
    }

    abstract class ParamsIter {
        static $gtype: GObject.GType<ParamsIter>;

        // Constructors of Rest.ParamsIter

        _init(...args: any[]): void;

        // Own methods of Rest.ParamsIter

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
        init(params: Params): void;
        /**
         * Advances `iter` and retrieves the name and/or parameter that are now pointed
         * at as a result of this advancement.  If FALSE is returned, `name` and `param`
         * are not set and the iterator becomes invalid.
         * @param name a location to store the name, or %NULL
         * @param param a location to store the #RestParam, or %NULL
         * @returns %FALSE if the end of the #RestParams has been reached, %TRUE otherwise.
         */
        next(name: string, param: Param): boolean;
    }

    type ProxyAuthClass = typeof ProxyAuth;
    abstract class ProxyAuthPrivate {
        static $gtype: GObject.GType<ProxyAuthPrivate>;

        // Constructors of Rest.ProxyAuthPrivate

        _init(...args: any[]): void;
    }

    type ProxyCallClass = typeof ProxyCall;
    abstract class ProxyCallPrivate {
        static $gtype: GObject.GType<ProxyCallPrivate>;

        // Constructors of Rest.ProxyCallPrivate

        _init(...args: any[]): void;
    }

    type ProxyClass = typeof Proxy;
    class XmlNode {
        static $gtype: GObject.GType<XmlNode>;

        // Own fields of Rest.XmlNode

        name: string;
        content: string;

        // Constructors of Rest.XmlNode

        _init(...args: any[]): void;

        // Own methods of Rest.XmlNode

        /**
         * Adds attribute to the given node.
         * @param attribute name of the attribute
         * @param value value to set attribute to
         */
        add_attr(attribute: string, value: string): void;
        /**
         * Adds a new node to the given parent node; to create the top-level node,
         * parent should be %NULL.
         * @param tag name of the child node
         * @returns the newly added #RestXmlNode; the node object is owned by, and valid for the life time of, the #RestXmlCreator.
         */
        add_child(tag: string): XmlNode;
        /**
         * Searches for the first child node of `start` named `tag`.
         * @param tag the name of a node
         * @returns the first child node, or %NULL if it doesn't exist.
         */
        find(tag: string): XmlNode;
        free(): void;
        /**
         * Get the value of the attribute named `attr_name,` or %NULL if it doesn't
         * exist.
         * @param attr_name the name of an attribute
         * @returns the attribute value. This string is owned by #RestXmlNode and should not be freed.
         */
        get_attr(attr_name: string): string;
        /**
         * Recursively outputs given node and it's children.
         * @returns xml string representing the node.
         */
        print(): string;
        /**
         * Sets content for the given node.
         * @param value the content
         */
        set_content(value: string): void;
    }

    type XmlParserClass = typeof XmlParser;
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

export default Rest;
// END
