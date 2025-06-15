/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace gSignon {
    /**
     * gSignon-1.0
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
         * Error communicating with Signon daemon.
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
         * The SessionData does not contain the necessary
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
         * Casting SessionData into subclass failed.
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

        /**
         * Creates and returns a domain for gSSO errors.
         */
        static quark(): GLib.Quark;
    }

    /**
     * UI policy for the signon process, passed to the UI plugin.
     */

    /**
     * UI policy for the signon process, passed to the UI plugin.
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
    /**
     * Creates and returns a domain for gSSO errors.
     */
    function error_quark(): GLib.Quark;
    /**
     * Builds a #SignonSecurityContext item from a GVariant of type "(ss)".
     * @param variant GVariant item with a #SignonSecurityContext construct.
     * @returns #SignonSecurityContext item.
     */
    function security_context_deconstruct_variant(variant: GLib.Variant): SecurityContext;
    /**
     * Builds a GVariant of type "a(ss)" from a GList of #SignonSecurityContext
     * items.
     * @param list #GList item of #SignonSecurityContext.
     * @returns GVariant construct of a #GList.
     */
    function security_context_list_build_variant(list: SecurityContext[]): GLib.Variant;
    /**
     * Builds a GList of #SignonSecurityContext items from a GVariant of type
     * "a(ss)".
     * @param variant GVariant item with a list of security context tuples.
     * @returns #GList item.
     */
    function security_context_list_deconstruct_variant(variant: GLib.Variant): SecurityContext[];
    interface AuthSessionProcessCb {
        (
            self: AuthSession,
            session_data: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
            error: GLib.Error,
        ): void;
    }
    interface AuthSessionQueryAvailableMechanismsCb {
        (self: AuthSession, mechanisms: string[], error: GLib.Error): void;
    }
    interface ClearCb {
        (auth_service: AuthService, success: boolean, error: GLib.Error): void;
    }
    interface IdentityInfoCb {
        (self: Identity, info: IdentityInfo, error: GLib.Error): void;
    }
    interface IdentitySessionReadyCb {
        (
            self: AuthSession,
            error: GLib.Error,
            connection: Gio.DBusConnection,
            bus_name: string,
            object_path: string,
        ): void;
    }
    interface IdentityStoreCredentialsCb {
        (self: Identity, id: number, error: GLib.Error): void;
    }
    interface IdentityVerifyCb {
        (self: Identity, valid: boolean, error: GLib.Error): void;
    }
    interface IdentityVoidCb {
        (self: Identity, error: GLib.Error): void;
    }
    interface QueryIdentitiesCb {
        (auth_service: AuthService, identities: Identity[], error: GLib.Error): void;
    }
    interface QueryMechanismCb {
        (auth_service: AuthService, method: string, mechanisms: string[], error: GLib.Error): void;
    }
    interface QueryMethodsCb {
        (auth_service: AuthService, methods: string[], error: GLib.Error): void;
    }
    /**
     * Identity types used in #SignonIdentityInfo.
     */

    /**
     * Identity types used in #SignonIdentityInfo.
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
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

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

        // Signals

        connect<K extends keyof AuthService.SignalSignatures>(
            signal: K,
            callback: AuthService.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AuthService.SignalSignatures>(
            signal: K,
            callback: AuthService.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AuthService.SignalSignatures>(
            signal: K,
            ...args: AuthService.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Clears / wipes out all stored data.
         * @param cb callback to be invoked.
         */
        clear(cb: ClearCb): void;
        /**
         * Query available identities, possibly applying a filter.
         *
         * `filter` is a #GHashTable that contains filter conditions in the form of
         * string keys and #GVariant values. Currently the following keys are supported:
         *
         * - "Owner". The value should be a #SignonSecurityContext (use
         * signon_security_context_build_variant() to create a #GVariant).
         * Identites whose owner doesn't match will be filtered out. This key has
         * effect only if the requesting application is a keychain application as determined
         * by #GSignondAccessControlManager.
         * - "Type". The value should be a #SignonIdentityType.
         * - "Caption". The value is a string, and only those identites whose caption
         * begins with the supplied value will be returned.
         *
         * The meaning of `application_context` is explained in #SignonSecurityContext.
         * It is used by #GSignondAccessControlManager to determine if the requesting
         * application is a keychain application. If it is, then all identites will be
         * returned (subject to "Owner" key in `filter)`. If it's not, then only the
         * identites which the application owns will be returned (but "Type" and "Caption"
         * can still be set in the `filter)`.
         * @param filter filter variant dictionary based on #GHashTable.
         * @param application_context application security context, can be %NULL.
         * @param cb callback to be invoked.
         */
        query_identities(
            filter: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
            application_context: string,
            cb: QueryIdentitiesCb,
        ): void;
        /**
         * Lists all the available mechanisms for an authentication method.
         * @param method the name of the method whose mechanisms must be retrieved.
         * @param cb callback to be invoked.
         */
        query_mechanisms(method: string, cb: QueryMechanismCb): void;
        /**
         * Lists all the available authentication methods.
         * @param cb callback to be invoked.
         */
        query_methods(cb: QueryMethodsCb): void;
    }

    namespace AuthSession {
        // Signal callback interfaces

        interface StateChanged {
            (_source: AuthSession, state: number, message: string): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'state-changed': StateChanged;
            'notify::identity': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            identity: Identity;
        }
    }

    /**
     * Opaque struct. Use the accessor functions below.
     */
    class AuthSession extends GObject.Object {
        static $gtype: GObject.GType<AuthSession>;

        // Properties

        get identity(): Identity;

        // Constructors

        constructor(properties?: Partial<AuthSession.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: number, method_name: string): AuthSession;

        static new_for_identity(identity: Identity, method_name: string): AuthSession;

        // Signals

        connect<K extends keyof AuthSession.SignalSignatures>(
            signal: K,
            callback: AuthSession.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AuthSession.SignalSignatures>(
            signal: K,
            callback: AuthSession.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AuthSession.SignalSignatures>(
            signal: K,
            ...args: AuthSession.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

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
         * Performs one step of the authentication process. If the #SignonIdentity that
         * this session belongs to contains a username and a password, they will be also
         * passed to the authentication plugin, otherwise they should be set directly in
         * `session_data`.
         * `session_data` should be used to add additional authentication parameters to the
         * session, or to override the parameters otherwise taken from the identity.
         * @param session_data a dictionary of parameters.
         * @param mechanism the authentication mechanism to be used.
         * @param cb a callback which will be called with the result.
         */
        process(
            session_data: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
            mechanism: string,
            cb: AuthSessionProcessCb,
        ): void;
        /**
         * Performs one step of the authentication process.
         * `session_data` should be used to add additional authentication parameters to the
         * session.
         *
         * What specific parameters should be used can be found from authentication plugins'
         * documentation (look for parameters that are expected in gsignond_plugin_request_initial()
         * for the first step, and parameters that are expected in gsignond_plugin_request() for
         * the subsequent steps). See, for example, #GSignondPasswordPlugin and #GSignondDigestPlugin.
         *
         * If the #SignonIdentity that this session belongs to contains a username and a password,
         * the daemon will pass them to the authentication plugin, otherwise they should be set directly in
         * `session_data`. The daemon also passes a list of identity's allowed realms to the plugin,
         * and they cannot be overriden.
         * @param session_data a dictionary of parameters.
         * @param mechanism the authentication mechanism to be used.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        process_async(
            session_data: GLib.Variant,
            mechanism: string,
            cancellable?: Gio.Cancellable | null,
        ): Promise<GLib.Variant>;
        /**
         * Performs one step of the authentication process.
         * `session_data` should be used to add additional authentication parameters to the
         * session.
         *
         * What specific parameters should be used can be found from authentication plugins'
         * documentation (look for parameters that are expected in gsignond_plugin_request_initial()
         * for the first step, and parameters that are expected in gsignond_plugin_request() for
         * the subsequent steps). See, for example, #GSignondPasswordPlugin and #GSignondDigestPlugin.
         *
         * If the #SignonIdentity that this session belongs to contains a username and a password,
         * the daemon will pass them to the authentication plugin, otherwise they should be set directly in
         * `session_data`. The daemon also passes a list of identity's allowed realms to the plugin,
         * and they cannot be overriden.
         * @param session_data a dictionary of parameters.
         * @param mechanism the authentication mechanism to be used.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a callback which will be called when the authentication reply is available.
         */
        process_async(
            session_data: GLib.Variant,
            mechanism: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Performs one step of the authentication process.
         * `session_data` should be used to add additional authentication parameters to the
         * session.
         *
         * What specific parameters should be used can be found from authentication plugins'
         * documentation (look for parameters that are expected in gsignond_plugin_request_initial()
         * for the first step, and parameters that are expected in gsignond_plugin_request() for
         * the subsequent steps). See, for example, #GSignondPasswordPlugin and #GSignondDigestPlugin.
         *
         * If the #SignonIdentity that this session belongs to contains a username and a password,
         * the daemon will pass them to the authentication plugin, otherwise they should be set directly in
         * `session_data`. The daemon also passes a list of identity's allowed realms to the plugin,
         * and they cannot be overriden.
         * @param session_data a dictionary of parameters.
         * @param mechanism the authentication mechanism to be used.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a callback which will be called when the authentication reply is available.
         */
        process_async(
            session_data: GLib.Variant,
            mechanism: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<GLib.Variant> | void;
        /**
         * Collect the result of the signon_auth_session_process_async() operation.
         * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to signon_auth_session_process_async().
         * @returns a #GVariant of type %G_VARIANT_TYPE_VARDICT containing the authentication reply. As with signon_auth_session_process_async(), specific parameters contained in the #GVariant can be found from plugins' documentation: #GSignondPlugin::response-final for the final response, and #GSignondPlugin::response for the intermediate responses. See, for example, #GSignondPasswordPlugin and #GSignondDigestPlugin.
         */
        process_finish(res: Gio.AsyncResult): GLib.Variant;
        /**
         * Queries the mechanisms available for this authentication session. The result
         * will be the intersection between `wanted_mechanisms` and the mechanisms
         * supported by the authentication plugin (and allowed by the #SignonIdentity that this
         * session belongs to).
         * @param wanted_mechanisms a %NULL-terminated list of mechanisms supported by the client.
         * @param cb a callback which will be called with the result.
         */
        query_available_mechanisms(wanted_mechanisms: string, cb: AuthSessionQueryAvailableMechanismsCb): void;
    }

    namespace Identity {
        // Signal callback interfaces

        interface Removed {
            (_source: Identity): void;
        }

        interface Signout {
            (_source: Identity): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            removed: Removed;
            signout: Signout;
            'notify::app-ctx': GObject.Object.Notify;
            'notify::id': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            app_ctx: string;
            appCtx: string;
            id: number;
        }
    }

    class Identity extends GObject.Object {
        static $gtype: GObject.GType<Identity>;

        // Properties

        get app_ctx(): string;
        set app_ctx(val: string);
        get appCtx(): string;
        set appCtx(val: string);
        get id(): number;
        set id(val: number);

        // Constructors

        constructor(properties?: Partial<Identity.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Identity;

        static new_from_db(id: number): Identity;

        static new_with_context(application_context: string): Identity;

        static new_with_context_from_db(id: number, application_context: string): Identity;

        // Signals

        connect<K extends keyof Identity.SignalSignatures>(signal: K, callback: Identity.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Identity.SignalSignatures>(
            signal: K,
            callback: Identity.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Identity.SignalSignatures>(
            signal: K,
            ...args: Identity.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds named reference to identity. Not currently supported by gSSO.
         * @param reference reference to be added
         * @param cb callback
         */
        add_reference(reference: string, cb: IdentityReferenceAddedCb): void;
        /**
         * Creates an authentication session for this identity. If the identity has been
         * retrieved from the database, the authentication method must be one of those
         * listed in signon_identity_info_get_methods(), otherwise it can be any method
         * supported by gSSO.
         * @param method authentication method.
         * @returns a new #SignonAuthSession.
         */
        create_session(method: string): AuthSession;
        /**
         * Obtain a remote object for a local session object. Should not be used by
         * applications.
         * @param session the #SignonAuthSession object to get the remote object for.
         * @param method method name for the session.
         * @param cb completion callback.
         */
        get_auth_session(session: AuthSession, method: string, cb: IdentitySessionReadyCb): void;
        /**
         * Get the most recent error that occurred on `identity`.
         * @returns a #GError containing the most recent error, or %NULL on failure.
         */
        get_last_error(): GLib.Error;
        /**
         * Fetches the #SignonIdentityInfo data associated with this
         * identity.
         * @param cb callback.
         */
        query_info(cb: IdentityInfoCb): void;
        /**
         * Removes the corresponding credentials record from the database.
         * @param cb callback to be called when the operation has completed.
         */
        remove(cb: IdentityRemovedCb): void;
        /**
         * Removes named reference from identity. Not currently supported by gSSO.
         * @param reference reference to be removed
         * @param cb callback
         */
        remove_reference(reference: string, cb: IdentityReferenceRemovedCb): void;
        /**
         * Requests user to re-enter his credentials.
         * @param message message to be displayed to the user.
         * @param cb callback to be called when the operation has completed.
         */
        request_credentials_update(message: string, cb: IdentityCredentialsUpdatedCb): void;
        /**
         * Asks signond to close all authentication sessions for this
         * identity, and to remove any stored secrets associated with it (password and
         * authentication tokens).
         * @param cb callback.
         */
        signout(cb: IdentitySignedOutCb): void;
        /**
         * Stores the given data into the identity. See above for the meaning
         * of the specific fields.
         * @param username username.
         * @param secret secret.
         * @param store_secret whether gSSO should save the password in secret storage.
         * @param methods allowed methods.
         * @param caption caption.
         * @param realms allowed realms.
         * @param owner owner.
         * @param access_control_list access control list.
         * @param type the type of the identity.
         * @param cb callback.
         */
        store_credentials_with_args(
            username: string | null,
            secret: string | null,
            store_secret: boolean,
            methods: { [key: string]: any } | GLib.HashTable,
            caption: string | null,
            realms: string | null,
            owner: SecurityContext | null,
            access_control_list: SecurityContext[] | null,
            type: IdentityType | null,
            cb: IdentityStoreCredentialsCb,
        ): void;
        /**
         * Stores the data contained in `info` into the identity record in the database.
         * See above for the detailed discussion of the meaning of various fields and
         * their defaults.
         * @param info the #SignonIdentityInfo data to store.
         * @param cb callback.
         */
        store_credentials_with_info(info: IdentityInfo, cb: IdentityStoreCredentialsCb): void;
        /**
         * Asks user to enter his credentials to verify the current user.
         * @param args optional extra arguments (vardict) controlling SignOn UI.
         * @param cb callback.
         */
        verify_user(args: GLib.Variant, cb: IdentityVerifyCb): void;
    }

    type AuthServiceClass = typeof AuthService;
    abstract class AuthServicePrivate {
        static $gtype: GObject.GType<AuthServicePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type AuthSessionClass = typeof AuthSession;
    abstract class AuthSessionPrivate {
        static $gtype: GObject.GType<AuthSessionPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

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
         * Appends a new #SignonSecurityContext item to the access control list.
         * @param security_context a security context to be appended.
         */
        access_control_list_append(security_context: SecurityContext): void;
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
         * Get an access control list associated with an identity.
         * @returns a list of ACL security contexts.
         */
        get_access_control_list(): SecurityContext[];
        /**
         * Get the display name of `info`.
         * @returns the display name for the identity.
         */
        get_caption(): string;
        /**
         * Get the numeric identity ID of `info`.
         * @returns the numeric ID of the identity.
         */
        get_id(): number;
        /**
         * Get the type of the identity.
         * @returns the type of the identity.
         */
        get_identity_type(): IdentityType;
        /**
         * Get a hash table of the methods and mechanisms of `info`. See
         * signon_identity_info_set_methods().
         * @returns the table of allowed methods and mechanisms.
         */
        get_methods(): GLib.HashTable;
        /**
         * Get identity owner's security context.
         * @returns a security context.
         */
        get_owner(): SecurityContext;
        /**
         * Get an array of the allowed realms of `info`.
         * @returns a %NULL terminated array of realms.
         */
        get_realms(): string[];
        /**
         * Get whether the secret of `info` should be stored by gSSO in the secret database.
         * @returns %TRUE if gSSO must store the secret, %FALSE otherwise.
         */
        get_storing_secret(): boolean;
        /**
         * Get the username associated with an identity.
         * @returns the username, or %NULL.
         */
        get_username(): string;
        /**
         * Set authentication methods that are allowed to be used with this identity.
         *
         * This function will just increment reference count of hash table, so
         * it should be constructed with #g_hash_table_new_full.
         * @param methods methods.
         */
        own_methods(methods: { [key: string]: any } | GLib.HashTable): void;
        /**
         * Remove `method` from the list of allowed authentication methods.
         * @param method an authentication method.
         */
        remove_method(method: string): void;
        /**
         * Set an access control list associated with an identity.
         * @param access_control_list a list of ACL security contexts.
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
         * Adds a method to the list of allowed authentication methods.
         * @param method an authentication method.
         * @param mechanisms a %NULL-terminated list of mechanisms.
         */
        set_method(method: string, mechanisms: string[]): void;
        /**
         * Set authentication methods that are allowed to be used with this identity.
         * @param methods methods.
         */
        set_methods(methods: { [key: string]: any } | GLib.HashTable): void;
        /**
         * Set identity owner's security context.
         * @param owner a security context of owner.
         */
        set_owner(owner: SecurityContext): void;
        /**
         * Set identity owner's security context.
         * @param system_context owner's system context.
         * @param application_context owner's application context.
         */
        set_owner_from_values(system_context: string, application_context: string): void;
        /**
         * Specify what realms this identity can be used in.
         * @param realms a %NULL-terminated list of realms.
         */
        set_realms(realms: string[]): void;
        /**
         * Sets the secret (password) for the identity, and whether the gSSO daemon
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

    abstract class IdentityPrivate {
        static $gtype: GObject.GType<IdentityPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Security context descriptor used for access control checks.
     */
    class SecurityContext {
        static $gtype: GObject.GType<SecurityContext>;

        // Fields

        sys_ctx: string;
        app_ctx: string;

        // Constructors

        constructor(
            properties?: Partial<{
                sys_ctx: string;
                app_ctx: string;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](): SecurityContext;

        static new_from_values(system_context: string, application_context: string): SecurityContext;

        // Static methods

        /**
         * Builds a #SignonSecurityContext item from a GVariant of type "(ss)".
         * @param variant GVariant item with a #SignonSecurityContext construct.
         */
        static deconstruct_variant(variant: GLib.Variant): SecurityContext;
        /**
         * Builds a GVariant of type "a(ss)" from a GList of #SignonSecurityContext
         * items.
         * @param list #GList item of #SignonSecurityContext.
         */
        static list_build_variant(list: SecurityContext[]): GLib.Variant;
        /**
         * Builds a GList of #SignonSecurityContext items from a GVariant of type
         * "a(ss)".
         * @param variant GVariant item with a list of security context tuples.
         */
        static list_deconstruct_variant(variant: GLib.Variant): SecurityContext[];

        // Methods

        /**
         * Build a GVariant of type "(ss)" from a #SignonSecurityContext item.
         * @returns GVariant construct of a #SignonSecurityContext.
         */
        build_variant(): GLib.Variant;
        /**
         * Copy a security context item.
         * @returns a copy of the #SignonSecurityContext item.
         */
        copy(): SecurityContext;
        /**
         * Frees a security context item.
         */
        free(): void;
        /**
         * Get the application context part (such as script name or a web page) of
         * the #SignonSecurityContext.
         * @returns application context.
         */
        get_application_context(): string;
        /**
         * Get the system context part (such as SMACK label or MSSF token) of the
         * #SignonSecurityContext.
         * @returns system context.
         */
        get_system_context(): string;
        /**
         * Sets the application context part (such as a script name or a web page) of
         * the #SignonSecurityContext.
         * @param application_context application security context.
         */
        set_application_context(application_context: string): void;
        /**
         * Sets the system context part (such as SMACK label or MSSF token) of the
         * #SignonSecurityContext.
         * @param system_context system security context.
         */
        set_system_context(system_context: string): void;
    }

    abstract class _AuthSession {
        static $gtype: GObject.GType<_AuthSession>;

        // Constructors

        _init(...args: any[]): void;
    }

    type AuthSessionQueryAvailableMethodsCb = AuthSessionQueryAvailableMechanismsCb;
    type IdentityCredentialsUpdatedCb = IdentityVoidCb;
    type IdentityReferenceAddedCb = IdentityVoidCb;
    type IdentityReferenceRemovedCb = IdentityVoidCb;
    type IdentityRemovedCb = IdentityVoidCb;
    type IdentitySignedOutCb = IdentityVoidCb;
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

export default gSignon;

// END
