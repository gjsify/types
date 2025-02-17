/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Signon {
    /**
     * Signon-2.0
     */

    /**
     * Possible Signon errors.
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<Error>;

        // Static fields

        /**
         * Catch-all for errors not distinguished by another code.
         */
        static UNKNOWN: number;
        /**
         * Signon daemon internal error.
         */
        static INTERNAL_SERVER: number;
        /**
         * Error communicating with Sigon daemon.
         */
        static INTERNAL_COMMUNICATION: number;
        /**
         * The operation cannot be performed due to
         * insufficient client permissions.
         */
        static PERMISSION_DENIED: number;
        /**
         * The method with this name was not found.
         */
        static METHOD_NOT_KNOWN: number;
        /**
         * The service is temporarily unavailable.
         */
        static SERVICE_NOT_AVAILABLE: number;
        /**
         * Parameters for the query are invalid.
         */
        static INVALID_QUERY: number;
        /**
         * The requested method is not available.
         */
        static METHOD_NOT_AVAILABLE: number;
        /**
         * The identity mathching the #SignonIdentity
         * was not found on the service.
         */
        static IDENTITY_NOT_FOUND: number;
        /**
         * Storing credentials failed.
         */
        static STORE_FAILED: number;
        /**
         * Removing credentials failed.
         */
        static REMOVE_FAILED: number;
        /**
         * Signing out failed.
         */
        static SIGNOUT_FAILED: number;
        /**
         * Identity operation was canceled
         * by the user.
         */
        static IDENTITY_OPERATION_CANCELED: number;
        /**
         * Query failed.
         */
        static CREDENTIALS_NOT_AVAILABLE: number;
        /**
         * Trying to remove non-existent reference.
         */
        static REFERENCE_NOT_FOUND: number;
        /**
         * The requested mechanism in not
         * available.
         */
        static MECHANISM_NOT_AVAILABLE: number;
        /**
         * The #SessionData does not contain the necessary
         * information.
         */
        static MISSING_DATA: number;
        /**
         * The supplied credentials are invalid for
         * the mechanism implementation.
         */
        static INVALID_CREDENTIALS: number;
        /**
         * Authorization failed.
         */
        static NOT_AUTHORIZED: number;
        /**
         * An operation method has been called in an
         * incorrect state.
         */
        static WRONG_STATE: number;
        /**
         * The operation is not supported by the
         * mechanism implementation.
         */
        static OPERATION_NOT_SUPPORTED: number;
        /**
         * No network connection.
         */
        static NO_CONNECTION: number;
        /**
         * Network connection failed.
         */
        static NETWORK: number;
        /**
         * SSL connection failed.
         */
        static SSL: number;
        /**
         * Casting #SessionData into subclass failed.
         */
        static RUNTIME: number;
        /**
         * Challenge was canceled.
         */
        static SESSION_CANCELED: number;
        /**
         * Challenge timed out.
         */
        static TIMED_OUT: number;
        /**
         * User interaction dialog failed.
         */
        static USER_INTERACTION: number;
        /**
         * Temporary failure in authentication.
         */
        static OPERATION_FAILED: number;
        /**
         * `deprecated:` Failure during data
         * encryption/decryption.
         */
        static ENCRYPTION_FAILED: number;
        /**
         * User declined Terms of Service.
         */
        static TOS_NOT_ACCEPTED: number;
        /**
         * User requested password reset sequence.
         */
        static FORGOT_PASSWORD: number;
        /**
         * Method or mechanism not
         * allowed for this identity.
         */
        static METHOD_OR_MECHANISM_NOT_ALLOWED: number;
        /**
         * Date/time incorrect on device.
         */
        static INCORRECT_DATE: number;
        /**
         * Placeholder to rearrange enumeration - userspace
         * specific.
         */
        static USER_ERROR: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * Policy for the signon process, passed to the UI plugin.
     */

    /**
     * Policy for the signon process, passed to the UI plugin.
     */
    export namespace SessionDataUiPolicy {
        export const $gtype: GObject.GType<SessionDataUiPolicy>;
    }

    enum SessionDataUiPolicy {
        /**
         * The plugin can decide when to show UI.
         */
        DEFAULT,
        /**
         * Force the user to enter the password.
         */
        REQUEST_PASSWORD,
        /**
         * No UI elements will be shown to the user.
         */
        NO_USER_INTERACTION,
        /**
         * UI elements can be shown to the user only when
         * CAPTCHA-like security measures are required.
         */
        VALIDATION,
    }
    /**
     * Caption for the UI dialog.
     */
    const SESSION_DATA_CAPTION: string;
    /**
     * Proxy.
     */
    const SESSION_DATA_PROXY: string;
    /**
     * Realm.
     */
    const SESSION_DATA_REALM: string;
    /**
     * Requests the signon plugin to obtain a new token (boolean).
     */
    const SESSION_DATA_RENEW_TOKEN: string;
    /**
     * Secret.
     */
    const SESSION_DATA_SECRET: string;
    /**
     * Network timeout, in milliseconds (uint32).
     */
    const SESSION_DATA_TIMEOUT: string;
    /**
     * Policy for the signon process.
     */
    const SESSION_DATA_UI_POLICY: string;
    /**
     * Username.
     */
    const SESSION_DATA_USERNAME: string;
    /**
     * Platform-specific window id (for dialog transiency) - uint32.
     */
    const SESSION_DATA_WINDOW_ID: string;
    function error_quark(): GLib.Quark;
    /**
     * Types used in #SignonIdentityInfo.
     */

    /**
     * Types used in #SignonIdentityInfo.
     */
    export namespace IdentityType {
        export const $gtype: GObject.GType<IdentityType>;
    }

    enum IdentityType {
        /**
         * an identity that is not an app, web or network
         */
        OTHER,
        /**
         * an application identity
         */
        APP,
        /**
         * a web identity
         */
        WEB,
        /**
         * a network server identity
         */
        NETWORK,
    }
    namespace AuthService {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Opaque struct. Use the accessor functions below.
     */
    class AuthService extends GObject.Object {
        static $gtype: GObject.GType<AuthService>;

        // Constructors

        constructor(properties?: Partial<AuthService.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): AuthService;

        // Methods

        /**
         * Lists all the available mechanisms.
         * @param method the name of the method whose mechanisms must be retrieved.
         * @param cancellable a #GCancellable or %NULL
         */
        get_mechanisms(method: string, cancellable?: Gio.Cancellable | null): Promise<string[]>;
        /**
         * Lists all the available mechanisms.
         * @param method the name of the method whose mechanisms must be retrieved.
         * @param cancellable a #GCancellable or %NULL
         * @param callback a callback to execute upon completion
         */
        get_mechanisms(
            method: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Lists all the available mechanisms.
         * @param method the name of the method whose mechanisms must be retrieved.
         * @param cancellable a #GCancellable or %NULL
         * @param callback a callback to execute upon completion
         */
        get_mechanisms(
            method: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<string[]> | void;
        /**
         * Completes an asynchronous request to signon_auth_service_get_mechanisms().
         * @param result a #GAsyncResult
         * @returns A list of available mechanisms.
         */
        get_mechanisms_finish(result: Gio.AsyncResult): string[];
        /**
         * Lists all the available mechanisms.
         * This is a blocking version of signon_auth_service_get_mechanisms().
         * @param method the name of the method whose mechanisms must be retrieved.
         * @param cancellable a #GCancellable or %NULL
         * @returns A list of available mechanisms.
         */
        get_mechanisms_sync(method: string, cancellable?: Gio.Cancellable | null): string[];
        /**
         * Lists all the available methods.
         * @param cancellable a #GCancellable or %NULL
         */
        get_methods(cancellable?: Gio.Cancellable | null): Promise<string[]>;
        /**
         * Lists all the available methods.
         * @param cancellable a #GCancellable or %NULL
         * @param callback a callback to execute upon completion
         */
        get_methods(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Lists all the available methods.
         * @param cancellable a #GCancellable or %NULL
         * @param callback a callback to execute upon completion
         */
        get_methods(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<string[]> | void;
        /**
         * Completes an asynchronous request to signon_auth_service_get_methods().
         * @param result a #GAsyncResult
         * @returns A list of available methods.
         */
        get_methods_finish(result: Gio.AsyncResult): string[];
        /**
         * Lists all the available methods.
         * This is a blocking version of signon_auth_service_get_methods().
         * @param cancellable a #GCancellable or %NULL
         * @returns A list of available methods.
         */
        get_methods_sync(cancellable?: Gio.Cancellable | null): string[];
    }

    namespace AuthSession {
        // Signal callback interfaces

        interface StateChanged {
            (state: number, message: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Opaque struct. Use the accessor functions below.
     */
    class AuthSession extends GObject.Object {
        static $gtype: GObject.GType<AuthSession>;

        // Constructors

        constructor(properties?: Partial<AuthSession.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: number, method_name: string): AuthSession;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'state-changed', callback: (_source: this, state: number, message: string) => void): number;
        connect_after(
            signal: 'state-changed',
            callback: (_source: this, state: number, message: string) => void,
        ): number;
        emit(signal: 'state-changed', state: number, message: string): void;

        // Methods

        /**
         * Cancel the authentication session.
         */
        cancel(): void;
        /**
         * Get the current authentication method.
         * @returns the authentication method being used, or %NULL on failure.
         */
        get_method(): string;
        /**
         * Performs one step of the authentication process. If the #SignonAuthSession
         * object is bound to an existing identity, the identity properties such as
         * username and password will be also passed to the authentication plugin, so
         * there's no need to fill them into `session_data`.
         * `session_data` can be used to add additional authentication parameters to the
         * session, or to override the parameters otherwise taken from the identity.
         * @param session_data a dictionary of parameters.
         * @param mechanism the authentication mechanism to be used.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        process(
            session_data: GLib.Variant,
            mechanism: string,
            cancellable?: Gio.Cancellable | null,
        ): Promise<GLib.Variant>;
        /**
         * Performs one step of the authentication process. If the #SignonAuthSession
         * object is bound to an existing identity, the identity properties such as
         * username and password will be also passed to the authentication plugin, so
         * there's no need to fill them into `session_data`.
         * `session_data` can be used to add additional authentication parameters to the
         * session, or to override the parameters otherwise taken from the identity.
         * @param session_data a dictionary of parameters.
         * @param mechanism the authentication mechanism to be used.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a callback which will be called when the authentication reply is available.
         */
        process(
            session_data: GLib.Variant,
            mechanism: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Performs one step of the authentication process. If the #SignonAuthSession
         * object is bound to an existing identity, the identity properties such as
         * username and password will be also passed to the authentication plugin, so
         * there's no need to fill them into `session_data`.
         * `session_data` can be used to add additional authentication parameters to the
         * session, or to override the parameters otherwise taken from the identity.
         * @param session_data a dictionary of parameters.
         * @param mechanism the authentication mechanism to be used.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a callback which will be called when the authentication reply is available.
         */
        process(
            session_data: GLib.Variant,
            mechanism: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<GLib.Variant> | void;
        /**
         * Collect the result of the signon_auth_session_process() operation.
         * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to signon_auth_session_process().
         * @returns a #GVariant of type %G_VARIANT_TYPE_VARDICT containing the authentication reply.
         */
        process_finish(res: Gio.AsyncResult): GLib.Variant;
    }

    namespace Identity {
        // Signal callback interfaces

        interface SignedOut {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: number;
        }
    }

    /**
     * Opaque struct. Use the accessor functions below.
     */
    class Identity extends GObject.Object {
        static $gtype: GObject.GType<Identity>;

        // Properties

        get id(): number;

        // Constructors

        constructor(properties?: Partial<Identity.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Identity;

        static new_from_db(id: number): Identity;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'signed-out', callback: (_source: this) => void): number;
        connect_after(signal: 'signed-out', callback: (_source: this) => void): number;
        emit(signal: 'signed-out'): void;

        // Methods

        /**
         * Creates an authentication session for this identity.
         * @param method method.
         * @returns a new #SignonAuthSession.
         */
        create_session(method: string): AuthSession;
        /**
         * Get the id of the `identity`.
         * @returns the id of the #SignonIdentity, or 0 if the identity has not being registered.
         */
        get_id(): number;
        /**
         * Get the most recent error that occurred on `identity`.
         * @returns a #GError containing the most recent error, or %NULL on failure.
         */
        get_last_error(): GLib.Error;
        /**
         * Fetches the #SignonIdentityInfo associated with this identity.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        query_info(cancellable?: Gio.Cancellable | null): Promise<IdentityInfo>;
        /**
         * Fetches the #SignonIdentityInfo associated with this identity.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a callback which will be called when the #SignonIdentityInfo is available.
         */
        query_info(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Fetches the #SignonIdentityInfo associated with this identity.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a callback which will be called when the #SignonIdentityInfo is available.
         */
        query_info(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<IdentityInfo> | void;
        /**
         * Collect the result of the signon_identity_query_info() operation.
         * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to signon_identity_query_info().
         * @returns the #SignonIdentityInfo associated with this identity.
         */
        query_info_finish(res: Gio.AsyncResult): IdentityInfo;
        /**
         * Removes the corresponding credentials record from the database.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        remove(cancellable?: Gio.Cancellable | null): Promise<boolean>;
        /**
         * Removes the corresponding credentials record from the database.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a callback which will be called when the operation has completed.
         */
        remove(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Removes the corresponding credentials record from the database.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a callback which will be called when the operation has completed.
         */
        remove(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        remove_finish(res: Gio.AsyncResult): boolean;
        /**
         * Asks signond to close all authentication sessions for this
         * identity, and to remove any stored secrets associated with it (password and
         * authentication tokens).
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        sign_out(cancellable?: Gio.Cancellable | null): Promise<boolean>;
        /**
         * Asks signond to close all authentication sessions for this
         * identity, and to remove any stored secrets associated with it (password and
         * authentication tokens).
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a callback which will be called when the operation has completed.
         */
        sign_out(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asks signond to close all authentication sessions for this
         * identity, and to remove any stored secrets associated with it (password and
         * authentication tokens).
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a callback which will be called when the operation has completed.
         */
        sign_out(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        sign_out_finish(res: Gio.AsyncResult): boolean;
        /**
         * Stores the data from `info` into the identity.
         * @param info the #SignonIdentityInfo data to store.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        store_info(info: IdentityInfo, cancellable?: Gio.Cancellable | null): Promise<boolean>;
        /**
         * Stores the data from `info` into the identity.
         * @param info the #SignonIdentityInfo data to store.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a callback which will be called when the authentication reply is available.
         */
        store_info(
            info: IdentityInfo,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Stores the data from `info` into the identity.
         * @param info the #SignonIdentityInfo data to store.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a callback which will be called when the authentication reply is available.
         */
        store_info(
            info: IdentityInfo,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Collect the result of the signon_identity_store_info() operation.
         * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to signon_identity_store_info().
         * @returns %TRUE if the info has been stored, %FALSE otherwise.
         */
        store_info_finish(res: Gio.AsyncResult): boolean;
        /**
         * Verifies the given secret.
         * @param secret the secret (password) to be verified.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        verify_secret(secret: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
        /**
         * Verifies the given secret.
         * @param secret the secret (password) to be verified.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a callback which will be called when the verification is done.
         */
        verify_secret(
            secret: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Verifies the given secret.
         * @param secret the secret (password) to be verified.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a callback which will be called when the verification is done.
         */
        verify_secret(
            secret: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Collect the result of the signon_identity_verify_secret() operation.
         * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to signon_identity_verify_secret().
         * @returns %TRUE if the secret is valid, %FALSE otherwise.
         */
        verify_secret_finish(res: Gio.AsyncResult): boolean;
    }

    type AuthServiceClass = typeof AuthService;
    type AuthSessionClass = typeof AuthSession;
    type IdentityClass = typeof Identity;
    /**
     * Opaque struct. Use the accessor functions below.
     */
    class IdentityInfo {
        static $gtype: GObject.GType<IdentityInfo>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): IdentityInfo;

        // Methods

        /**
         * Add an ACL to this identity. This is an helper function.
         * @param system_context the system context to add.
         * @param application_context the application context to add.
         */
        add_access_control(system_context: string, application_context: string): void;
        /**
         * Get a newly-allocated copy of `info`.
         * @returns a copy of the given #SignonIdentityInfo, or %NULL on failure.
         */
        copy(): IdentityInfo;
        /**
         * Destroys the given #SignonIdentityInfo item.
         */
        free(): void;
        /**
         * Get an array of ACL statements of the identity.
         * @returns a #GList of #SignonSecurityContext representing ACL statements. Each element should be freed with signon_security_context_copy() after use.
         */
        get_access_control_list(): SecurityContext[];
        /**
         * Get the display name of `info`.
         * @returns the display name for the identity.
         */
        get_caption(): string;
        /**
         * Get the numeric ID of `info`.
         * @returns the numeric ID of the identity.
         */
        get_id(): number;
        /**
         * Get the type of the identity.
         * @returns the type of the identity.
         */
        get_identity_type(): IdentityType;
        /**
         * Get a hash table of the methods and mechanisms of `info`.
         * @returns the table of allowed methods and mechanisms.
         */
        get_methods(): GLib.HashTable;
        /**
         * Get an array of the realms of `info`.
         * @returns a %NULL terminated array of realms.
         */
        get_realms(): string[];
        /**
         * Get whether the secret of `info` should be stored.
         * @returns %TRUE if Signon must store the secret, %FALSE otherwise.
         */
        get_storing_secret(): boolean;
        /**
         * Get the username of `info`.
         * @returns the username, or %NULL.
         */
        get_username(): string;
        /**
         * Remove `method` from the list of allowed authentication methods. If all
         * methods are removed, then all methods are allowed.
         * @param method an authentication method.
         */
        remove_method(method: string): void;
        /**
         * Specifies the ACL for this identity. The actual meaning of the ACL depends
         * on the security framework used by signond.
         * @param access_control_list a #GList of #SignonSecurityContext representing ACL security domains.
         */
        set_access_control_list(access_control_list: SecurityContext[]): void;
        /**
         * Sets the caption (display name) for the identity.
         * @param caption the caption.
         */
        set_caption(caption: string): void;
        /**
         * Specifies the type of this identity.
         * @param type the type of the identity.
         */
        set_identity_type(type: IdentityType | null): void;
        /**
         * Adds a method to the list of allowed methods. If this method is not called
         * even once, then all methods are allowed.
         * Mechanisms are method-specific variants of authentication.
         * @param method an authentication method.
         * @param mechanisms a %NULL-termianted list of mechanisms.
         */
        set_method(method: string, mechanisms: string[]): void;
        /**
         * Specify what realms this identity can be used in.
         * @param realms a %NULL-terminated list of realms.
         */
        set_realms(realms: string[]): void;
        /**
         * Sets the secret (password) for the identity, and whether the signon daemon
         * should remember it.
         * @param secret the secret.
         * @param store_secret whether signond should store the secret in its DB.
         */
        set_secret(secret: string, store_secret: boolean): void;
        /**
         * Sets the username for the identity.
         * @param username the username.
         */
        set_username(username: string): void;
    }

    /**
     * Opaque struct. Use the accessor functions below.
     */
    class SecurityContext {
        static $gtype: GObject.GType<SecurityContext>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): SecurityContext;

        static new_from_values(system_context: string, application_context: string): SecurityContext;

        // Methods

        /**
         * Get a newly-allocated copy of `info`.
         * @returns a copy of the given #SignonIdentityInfo, or %NULL on failure.
         */
        copy(): SecurityContext;
        /**
         * Destroys the given #SignonSecurityContext item.
         */
        free(): void;
        /**
         * Get the application context of `ctx`.
         * @returns the application context.
         */
        get_application_context(): string;
        /**
         * Get the system context of `ctx`.
         * @returns the system context.
         */
        get_system_context(): string;
        /**
         * Sets the application context.
         * @param application_context the application context.
         */
        set_application_context(application_context: string): void;
        /**
         * Sets the system context.
         * @param system_context the system context.
         */
        set_system_context(system_context: string): void;
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

export default Signon;

// END
