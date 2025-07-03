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

export namespace GSignond {
    /**
     * GSignond-1.0
     */

    /**
     * This enum provides a list of errors that plugins and extensions can use.
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<Error>;

        // Static fields

        /**
         * No error
         */
        static NONE: number;
        /**
         * Catch-all for errors not distinguished by another code.
         */
        static UNKNOWN: number;
        /**
         * Signon Daemon internal error.
         */
        static INTERNAL_SERVER: number;
        /**
         * Communication with Signon Daemon error.
         */
        static INTERNAL_COMMUNICATION: number;
        /**
         * The operation cannot be performed due to insufficient client permissions.
         */
        static PERMISSION_DENIED: number;
        /**
         * Failure during data encryption/decryption.
         */
        static ENCRYPTION_FAILURE: number;
        /**
         * Placeholder to rearrange enumeration - AuthService specific
         */
        static AUTH_SERVICE_ERR: number;
        /**
         * The method with this name is not found.
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
         * Placeholder to rearrange enumeration - Identity specific
         */
        static IDENTITY_ERR: number;
        /**
         * The requested method is not available.
         */
        static METHOD_NOT_AVAILABLE: number;
        /**
         * The identity matching this Identity object was not found on the service.
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
         * SignOut failed.
         */
        static SIGN_OUT_FAILED: number;
        /**
         * Identity operation was canceled by user.
         */
        static IDENTITY_OPERATION_CANCELED: number;
        /**
         * Query failed.
         */
        static CREDENTIALS_NOT_AVAILABLE: number;
        /**
         * Trying to remove nonexistent reference.
         */
        static REFERENCE_NOT_FOUND: number;
        /**
         * Placeholder to rearrange enumeration - AuthSession/PluginInterface specific
         */
        static AUTH_SESSION_ERR: number;
        /**
         * The requested mechanism is not available.
         */
        static MECHANISM_NOT_AVAILABLE: number;
        /**
         * The SessionData object does not contain necessary information.
         */
        static MISSING_DATA: number;
        /**
         * The supplied credentials are invalid for the mechanism implementation.
         */
        static INVALID_CREDENTIALS: number;
        /**
         * Authorization failed.
         */
        static NOT_AUTHORIZED: number;
        /**
         * An operation method has been called in a wrong state.
         */
        static WRONG_STATE: number;
        /**
         * The operation is not supported by the mechanism implementation.
         */
        static OPERATION_NOT_SUPPORTED: number;
        /**
         * No Network connetion.
         */
        static NO_CONNECTION: number;
        /**
         * Network connetion failed.
         */
        static NETWORK: number;
        /**
         * Ssl connection failed.
         */
        static SSL: number;
        /**
         * Casting SessionData into subclass failed
         */
        static RUNTIME: number;
        /**
         * Challenge was cancelled.
         */
        static SESSION_CANCELED: number;
        /**
         * Challenge was timed out.
         */
        static TIMED_OUT: number;
        /**
         * User interaction dialog failed
         */
        static USER_INTERACTION: number;
        /**
         * Temporary failure in authentication.
         */
        static OPERATION_FAILED: number;
        /**
         * Failure during data encryption/decryption.
         */
        static ENCRYPTION_FAILED: number;
        /**
         * User declined Terms of Service.
         */
        static TOS_NOT_ACCEPTED: number;
        /**
         * User requested reset password sequence.
         */
        static FORGOT_PASSWORD: number;
        /**
         * Method or mechanism not allowed for this identity.
         */
        static METHOD_OR_MECHANISM_NOT_ALLOWED: number;
        /**
         * Date time incorrect on device.
         */
        static INCORRECT_DATE: number;
        /**
         * Placeholder to rearrange enumeration - User space specific
         */
        static USER_ERR: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    /**
     * The plugin provides state updates by emitting #GSignondPlugin::status-changed
     * signal with this enum and a string describing what happened.
     */

    /**
     * The plugin provides state updates by emitting #GSignondPlugin::status-changed
     * signal with this enum and a string describing what happened.
     */
    export namespace PluginState {
        export const $gtype: GObject.GType<PluginState>;
    }

    enum PluginState {
        /**
         * State unknown
         */
        NONE,
        /**
         * Resolving remote server host name
         */
        RESOLVING,
        /**
         * Connecting to remote server
         */
        CONNECTING,
        /**
         * Sending data to remote server
         */
        SENDING_DATA,
        /**
         * Waiting for reply from remote server
         */
        WAITING,
        /**
         * Waiting for response from user
         */
        USER_PENDING,
        /**
         * Refreshing ui request
         */
        REFRESHING,
        /**
         * Request has been queued
         */
        PROCESS_PENDING,
        /**
         * Request has been dequeued
         */
        STARTED,
        /**
         * Canceling current process
         */
        CANCELING,
        /**
         * Process is finished
         */
        DONE,
        /**
         * Holding long non-expired token
         */
        HOLDING,
    }
    /**
     * This enum defines errors that may happen during user interaction.
     */

    /**
     * This enum defines errors that may happen during user interaction.
     */
    export namespace SignonuiError {
        export const $gtype: GObject.GType<SignonuiError>;
    }

    enum SignonuiError {
        /**
         * No errors
         */
        NONE,
        /**
         * Generic error during interaction
         */
        GENERAL,
        /**
         * Cannot send request to signon-ui
         */
        NO_SIGNONUI,
        /**
         * Signon-Ui cannot create dialog based on the given UiSessionData
         */
        BAD_PARAMETERS,
        /**
         * User canceled action. Plugin should not retry automatically after this
         */
        CANCELED,
        /**
         * Requested ui is not available. For example browser cannot be started
         */
        NOT_AVAILABLE,
        /**
         * Given url was not valid
         */
        BAD_URL,
        /**
         * Given captcha image was not valid
         */
        BAD_CAPTCHA,
        /**
         * Given url for capctha loading was not valid
         */
        BAD_CAPTCHA_URL,
        /**
         * Refresh failed
         */
        REFRESH_FAILED,
        /**
         * Showing ui forbidden by ui policy
         */
        FORBIDDEN,
        /**
         * User pressed forgot password
         */
        FORGOT_PASSWORD,
    }
    /**
     * Policy setting to define how plugins should handle interaction with the user.
     */

    /**
     * Policy setting to define how plugins should handle interaction with the user.
     */
    export namespace UiPolicy {
        export const $gtype: GObject.GType<UiPolicy>;
    }

    enum UiPolicy {
        /**
         * use a default user interaction scenario
         */
        DEFAULT,
        /**
         * force an authorization request from the user;
         * any cached access tokens should be discarded by the plugin.
         */
        REQUEST_PASSWORD,
        /**
         * force no interaction with the user
         */
        NO_USER_INTERACTION,
        /**
         * interaction with the user is only allowed
         * for validation captchas and similar security measures
         */
        VALIDATION,
    }
    /**
     * A prefix for dbus timeout keys. Should be used only when defining new keys.
     */
    const CONFIG_DBUS_TIMEOUTS: string;
    /**
     * A prefix for general keys. Should be used only when defining new keys.
     */
    const CONFIG_GENERAL: string;
    /**
     * Converts the GVariant to GError.
     * @param _var instance of #GVariant
     * @returns #GError object if successful, %NULL otherwise.
     */
    function error_new_from_variant(_var: GLib.Variant): GLib.Error | null;
    /**
     * Creates and returns a domain for GSignond errors.
     */
    function error_quark(): GLib.Quark;
    /**
     * Converts the GError to GVariant.
     * @param error instance of #GError
     * @returns #GVariant object if successful, %NULL otherwise.
     */
    function error_to_variant(error: GLib.Error): GLib.Variant | null;
    /**
     * This function generates a random secure nonce using SHA1 HMAC.
     * @returns the nonce in lowercase hexadecimal format, 40 bytes long.
     */
    function generate_nonce(): string;
    /**
     * Checks if `host` belongs to `domain`.
     * @param host a host name
     * @param domain a domain name
     * @returns the result
     */
    function is_host_in_domain(host: string, domain: string): boolean;
    /**
     * Create a #GIOStream from two file descriptors
     * @param in_fd a UNIX file descriptor
     * @param out_fd a UNIX file descriptor
     * @param close_fds %TRUE to close the file descriptor when done
     * @returns a new #GIOStream
     */
    function new_io_stream_from_fd(in_fd: number, out_fd: number, close_fds: boolean): Gio.IOStream;
    /**
     * Builds a #GSignondSecurityContext item from a GVariant of type "(ss)".
     * @param variant GVariant item with a #GSignondSecurityContext construct.
     * @returns #GSignondSecurityContext item.
     */
    function security_context_from_variant(variant: GLib.Variant): SecurityContext;
    /**
     * Convert sequence of strings to null-terminated string array.
     * @param seq Sequence of strings to convert
     * @returns Null-terminated array of strings
     */
    function sequence_to_array(seq: GLib.Sequence): string[];
    /**
     * This function securely wipes the contents of the directory by calling
     * gsignond_wipe_file() on each file. It also removes links and empty directories but
     * does not recursively wipe them.
     * @param dirname directory to wipe
     * @returns %TRUE if wiping and removal was successful.
     */
    function wipe_directory(dirname: string): boolean;
    /**
     * This function securely wipes the contents of the file, by overwriting it with
     * 0's, then 1's, then random data. The file is then removed.
     * @param filename filename to wipe
     * @returns TRUE if wiping and removal was successful.
     */
    function wipe_file(filename: string): boolean;
    namespace AccessControlManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::config': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            config: Config;
        }
    }

    /**
     * Opaque #GSignondAccessControlManager data structure.
     */
    class AccessControlManager extends GObject.Object {
        static $gtype: GObject.GType<AccessControlManager>;

        // Properties

        get config(): Config;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AccessControlManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AccessControlManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof AccessControlManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AccessControlManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AccessControlManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AccessControlManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AccessControlManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AccessControlManager.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Checks if the specified peer is allowed to set the specified access
         * control list. gsignond_access_control_manager_peer_is_owner_of_identity()
         * is used before calling this method to verify identity ownership.
         *
         * The default implementation always returns %TRUE.
         * @param peer_ctx security context of the peer connection.
         * @param identity_acl access control list for the identity.
         */
        vfunc_acl_is_valid(peer_ctx: SecurityContext, identity_acl: SecurityContext[]): boolean;
        /**
         * Checks if specified peer is allowed to access the specified identity.
         *
         * The default implementation goes over items in `identity_acl,` using
         * gsignond_security_context_check() to check them against `peer_ctx`.
         * @param peer_ctx security context of the peer connection.
         * @param owner_ctx security context of the identity owner.
         * @param identity_acl access control list for the identity in question. Includes the @owner_ctx as well.
         */
        vfunc_peer_is_allowed_to_use_identity(
            peer_ctx: SecurityContext,
            owner_ctx: SecurityContext,
            identity_acl: SecurityContext[],
        ): boolean;
        /**
         * Checks if the peer specified in `peer_ctx` is the owner of the identity.
         *
         * The default implementation is using gsignond_security_context_check()
         * to check `peer_ctx` against `owner_ctx` directly.
         * @param peer_ctx security context of the peer connection.
         * @param owner_ctx security context of the identity owner.
         */
        vfunc_peer_is_owner_of_identity(peer_ctx: SecurityContext, owner_ctx: SecurityContext): boolean;
        /**
         * Retrieves security context of the keychain application. Keychain application
         * has a special management access to all stored identities and is able to
         * perform deletion of all identities from storage.
         *
         * The default implementation returns a context either set in #GSignondConfig,
         * or if not set, a value specified through a configure --enable-keychain
         * option (see
         * <link linkend="gsignond-building">Building gsignond</link>), or if that is not
         * set either then an empty string "" is returned.
         *
         * If gSSO was compiled
         * with --enable-debug and SSO_KEYCHAIN_SYSCTX environment variable is set, then
         * the value of that variable is used to set the returned system context instead.
         */
        vfunc_security_context_of_keychain(): SecurityContext;
        /**
         * Retrieves and sets #GSignondSecurityContext of the specified peer.
         *
         * The default implementation sets the app context as it was passed, and sets
         * the system context to the binary path of the process that is determined from
         * `peer_fd` and `peer_service` parameters.
         * @param peer_ctx instance of security context to be set.
         * @param peer_fd file descriptor of the peer connection if using peer-to-peer dbus, -1 otherwise.
         * @param peer_service g_dbus_method_invocation_get_sender() of the peer connection, if not using peer-to-peer dbus, NULL otherwise
         * @param peer_app_ctx application context of the peer connection.
         */
        vfunc_security_context_of_peer(
            peer_ctx: SecurityContext,
            peer_fd: number,
            peer_service: string,
            peer_app_ctx: string,
        ): void;

        // Methods

        /**
         * Checks if the specified peer is allowed to set the specified access
         * control list. gsignond_access_control_manager_peer_is_owner_of_identity()
         * is used before calling this method to verify identity ownership.
         *
         * The default implementation always returns %TRUE.
         * @param peer_ctx security context of the peer connection.
         * @param identity_acl access control list for the identity.
         * @returns %TRUE if the ACL is valid, %FALSE otherwise.
         */
        acl_is_valid(peer_ctx: SecurityContext, identity_acl: SecurityContext[]): boolean;
        /**
         * Checks if specified peer is allowed to access the specified identity.
         *
         * The default implementation goes over items in `identity_acl,` using
         * gsignond_security_context_check() to check them against `peer_ctx`.
         * @param peer_ctx security context of the peer connection.
         * @param owner_ctx security context of the identity owner.
         * @param identity_acl access control list for the identity in question. Includes the @owner_ctx as well.
         * @returns %TRUE if the peer is allowed to use the identity, %FALSE otherwise.
         */
        peer_is_allowed_to_use_identity(
            peer_ctx: SecurityContext,
            owner_ctx: SecurityContext,
            identity_acl: SecurityContext[],
        ): boolean;
        /**
         * Checks if the peer specified in `peer_ctx` is the owner of the identity.
         *
         * The default implementation is using gsignond_security_context_check()
         * to check `peer_ctx` against `owner_ctx` directly.
         * @param peer_ctx security context of the peer connection.
         * @param owner_ctx security context of the identity owner.
         * @returns %TRUE if the peer is the owner to use the identity, %FALSE otherwise.
         */
        peer_is_owner_of_identity(peer_ctx: SecurityContext, owner_ctx: SecurityContext): boolean;
        /**
         * Retrieves security context of the keychain application. Keychain application
         * has a special management access to all stored identities and is able to
         * perform deletion of all identities from storage.
         *
         * The default implementation returns a context either set in #GSignondConfig,
         * or if not set, a value specified through a configure --enable-keychain
         * option (see
         * <link linkend="gsignond-building">Building gsignond</link>), or if that is not
         * set either then an empty string "" is returned.
         *
         * If gSSO was compiled
         * with --enable-debug and SSO_KEYCHAIN_SYSCTX environment variable is set, then
         * the value of that variable is used to set the returned system context instead.
         * @returns security context of the keychain application.
         */
        security_context_of_keychain(): SecurityContext;
        /**
         * Retrieves and sets #GSignondSecurityContext of the specified peer.
         *
         * The default implementation sets the app context as it was passed, and sets
         * the system context to the binary path of the process that is determined from
         * `peer_fd` and `peer_service` parameters.
         * @param peer_ctx instance of security context to be set.
         * @param peer_fd file descriptor of the peer connection if using peer-to-peer dbus, -1 otherwise.
         * @param peer_service g_dbus_method_invocation_get_sender() of the peer connection, if not using peer-to-peer dbus, NULL otherwise
         * @param peer_app_ctx application context of the peer connection.
         */
        security_context_of_peer(
            peer_ctx: SecurityContext,
            peer_fd: number,
            peer_service: string,
            peer_app_ctx: string,
        ): void;
    }

    namespace Config {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Opaque structure for the object.
     */
    class Config extends GObject.Object {
        static $gtype: GObject.GType<Config>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Config.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Config.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Config;

        // Signals

        connect<K extends keyof Config.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Config.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Config.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Config.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Config.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Config.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get an integer configuration value.
         * @param key the key name
         * @returns the value corresponding to the key as an integer. If the key does not exist or cannot be converted to the integer, 0 is returned.
         */
        get_integer(key: string): number;
        /**
         * Get a string configuration value.
         * @param key the key name
         * @returns the value corresponding to the key as string. If the key does not exist, %NULL is returned.
         */
        get_string(key: string): string | null;
        /**
         * Sets the configuration value to the provided integer.
         * @param key the key name
         * @param value the value
         */
        set_integer(key: string, value: number): void;
        /**
         * Sets the configuration value to the provided string.
         * @param key the key name
         * @param value the value
         */
        set_string(key: string, value: string): void;
    }

    namespace Credentials {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Opaque #GSignondCredentials data structure.
     */
    class Credentials extends GObject.Object {
        static $gtype: GObject.GType<Credentials>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Credentials.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Credentials.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Credentials;

        // Signals

        connect<K extends keyof Credentials.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Credentials.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Credentials.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Credentials.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Credentials.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Credentials.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Compares elements of two GSignondCredentials object for equality.
         * @param two the second credential to be compared.
         * @returns %TRUE if id, username and password are same for both credential objects, %FALSE otherwise.
         */
        equal(two: Credentials): boolean;
        /**
         * Gets the identity id
         * @returns the id
         */
        get_id(): number;
        /**
         * Gets the password from the #GSignondCredentials object
         * @returns the password if the object is valid, %NULL otherwise.
         */
        get_password(): string | null;
        /**
         * Gets the username of the #GSignondCredentials object
         * @returns the username if the object is valid, %NULL otherwise.
         */
        get_username(): string | null;
        /**
         * Sets the data of the #GSignondCredentials.
         * @param id the identity id associated with the credentials.
         * @param username the username.
         * @param password the password.
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        set_data(id: number, username: string, password: string): boolean;
        // Conflicted with GObject.Object.set_data
        set_data(...args: never[]): any;
        /**
         * Sets the identity id of the #GSignondCredentials object
         * @param id the id.
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        set_id(id: number): boolean;
        /**
         * Sets the password of the GSignondCredentials object
         * @param password the password.
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        set_password(password?: string | null): boolean;
        /**
         * Sets the username of the GSignondCredentials object
         * @param username the username.
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        set_username(username?: string | null): boolean;
    }

    namespace Dictionary {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Opaque #GSignondDictionary data structure.
     */
    class Dictionary extends GObject.Object {
        static $gtype: GObject.GType<Dictionary>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Dictionary.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Dictionary.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Dictionary;

        static new_from_variant(variant: GLib.Variant): Dictionary;

        // Signals

        connect<K extends keyof Dictionary.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Dictionary.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Dictionary.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Dictionary.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Dictionary.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Dictionary.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Checks if the `dict` contains `key`.
         * @param key key to check
         * @returns %TRUE if found, %FALSE otherwise.
         */
        contains(key: string): boolean;
        /**
         * Creates a copy of the dictionary.
         * @returns #GSignondDictionary object containing the same keys and values than @other.
         */
        copy(): Dictionary;
        /**
         * Retrieves a #GVariant value from the dictionary. This can be used to retrieve
         * a value of an arbitrary type, and then convert it manually to a specific type
         * using #GVariant methods. For most commonly used types, also getters that
         * return the specific type directly are provided (gsignond_dictionary_get_string()
         * and similar).
         * @param key the key to look up in the dictionary
         * @returns the value; %NULL is returned in case of failure (for example if the entry corresponding to the supplied key doesn't exist).
         */
        get(key: string): GLib.Variant | null;
        /**
         * Retrieves a gboolean value.
         * @param key key to look up
         * @returns %TRUE if the value was retrieved successfully, %FALSE otherwise.
         */
        get_boolean(key: string): [boolean, boolean];
        /**
         * Retrieves a int32 value.
         * @param key key to look up
         * @returns %TRUE if the value was retrieved successfully, %FALSE otherwise.
         */
        get_int32(key: string): [boolean, number];
        /**
         * Retrieves a int64 value.
         * @param key key to look up
         * @returns %TRUE if the value was retrieved successfully, %FALSE otherwise.
         */
        get_int64(key: string): [boolean, number];
        /**
         * Retrieves a string value.
         * @param key key to look up
         * @returns the value if it was retrieved successfully, %NULL otherwise.
         */
        get_string(key: string): string | null;
        /**
         * Get the #GHashTable associated to the #GSignondDictionary.
         *
         * It should not be modified.
         * @returns The #GHashTable contained into the #GSignondDictionary.
         */
        get_table(): GLib.HashTable<string, GLib.Variant>;
        /**
         * Retrieves a uint32 value.
         * @param key key to look up
         * @returns %TRUE if the value was retrieved successfully, %FALSE otherwise.
         */
        get_uint32(key: string): [boolean, number];
        /**
         * Retrieves a uint64 value.
         * @param key key to look up
         * @returns %TRUE if the value was retrieved successfully, %FALSE otherwise.
         */
        get_uint64(key: string): [boolean, number];
        /**
         * Removes key-value pair in the dictionary as per key.
         * @param key key which needs to be removed from the dictionary
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        remove(key: string): boolean;
        /**
         * Adds or replaces key-value pair in the dictionary. This allows to set a value
         * of an arbitrary type: it first needs to be converted to a #GVariant. For most
         * commonly used types also type-specific setters are provided.
         * @param key key to be set
         * @param value value to be set
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        set(key: string, value: GLib.Variant): boolean;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        /**
         * Sets or replaces a gboolean value in the dictionary.
         * @param key key to set
         * @param value value to set
         * @returns %TRUE if the value was set or replaced successfully, %FALSE otherwise.
         */
        set_boolean(key: string, value: boolean): boolean;
        /**
         * Sets or replaces a int32 value in the dictionary.
         * @param key key to set
         * @param value value to set
         * @returns %TRUE if the value was set or replaced successfully, %FALSE otherwise.
         */
        set_int32(key: string, value: number): boolean;
        /**
         * Sets or replaces a int64 value in the dictionary.
         * @param key key to set
         * @param value value to set
         * @returns %TRUE if the value was set or replaced successfully, %FALSE otherwise.
         */
        set_int64(key: string, value: number): boolean;
        /**
         * Sets or replaces a string value in the dictionary.
         * @param key key to set
         * @param value value to set
         * @returns %TRUE if the value was set or replaced successfully, %FALSE otherwise.
         */
        set_string(key: string, value: string): boolean;
        /**
         * Sets or replaces a uint32 value in the dictionary.
         * @param key key to set
         * @param value value to set
         * @returns %TRUE if the value was set or replaced successfully, %FALSE otherwise.
         */
        set_uint32(key: string, value: number): boolean;
        /**
         * Sets or replaces a uint64 value in the dictionary.
         * @param key key to set
         * @param value value to set
         * @returns %TRUE if the value was set or replaced successfully, %FALSE otherwise.
         */
        set_uint64(key: string, value: number): boolean;
        /**
         * Converts the #GSignondDictionary to a #GVariant. The result can be serialized
         * or put into another #GSignondDictionary using gsignond_dictionary_set().
         * @returns #GVariant object if successful, %NULL otherwise.
         */
        to_variant(): GLib.Variant | null;
        /**
         * Converts the #GSignondDictionary to a #GVariantBuilder of type
         * G_VARIANT_TYPE_VARDICT.
         *
         * Caller should use g_variant_builder_unref() on the return value when it is
         * no longer needed.
         * @returns #GVariantBuilder if successful, %NULL otherwise.
         */
        to_variant_builder(): GLib.VariantBuilder | null;
    }

    namespace Extension {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Opaque #GSignondExtension data structure.
     */
    class Extension extends GObject.Object {
        static $gtype: GObject.GType<Extension>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Extension.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Extension.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Extension.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Extension.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Extension.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Extension.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Extension.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Extension.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Factory method to get a singleton access control manager object. See
         * #GSignondAccessControlManager for the description of the default implementation.
         * @param config configuration object instance.
         */
        vfunc_get_access_control_manager(config: Config): AccessControlManager;
        vfunc_get_extension_name(): string;
        vfunc_get_extension_version(): number;
        /**
         * Factory method to get a singleton secret storage object. See
         * #GSignondSecretStorage for the description of the default implementation.
         * @param config configuration object instance.
         */
        vfunc_get_secret_storage(config: Config): SecretStorage;
        /**
         * Factory method to get a singleton storage manager object. See
         * #GSignondStorageManager for the description of the default implementation.
         * @param config configuration object instance.
         */
        vfunc_get_storage_manager(config: Config): StorageManager;

        // Methods

        /**
         * Factory method to get a singleton access control manager object. See
         * #GSignondAccessControlManager for the description of the default implementation.
         * @param config configuration object instance.
         * @returns access control manager object instance.
         */
        get_access_control_manager(config: Config): AccessControlManager;
        /**
         * Get a human readable name of the extension. Default implementation
         * returns "default".
         * @returns name of the extension.
         */
        get_name(): string;
        /**
         * Factory method to get a singleton secret storage object. See
         * #GSignondSecretStorage for the description of the default implementation.
         * @param config configuration object instance.
         * @returns secret storage object instance.
         */
        get_secret_storage(config: Config): SecretStorage;
        /**
         * Factory method to get a singleton storage manager object. See
         * #GSignondStorageManager for the description of the default implementation.
         * @param config configuration object instance.
         * @returns storage manager object instance.
         */
        get_storage_manager(config: Config): StorageManager;
        /**
         * Get version of the extension, split into four bytes in order from MSB to LSB;
         * major, minor, patchlevel, build. Default implementation returns 0.
         */
        get_version(): number;
    }

    namespace SecretStorage {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::config': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            config: Config;
        }
    }

    /**
     * Opaque #GSignondSecretStorage data structure.
     */
    class SecretStorage extends GObject.Object {
        static $gtype: GObject.GType<SecretStorage>;

        // Properties

        get config(): Config;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SecretStorage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SecretStorage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof SecretStorage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SecretStorage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SecretStorage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SecretStorage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SecretStorage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SecretStorage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Checks whether the given credentials match what is stored in the database.
         * @param creds the credentials that are being checked.
         */
        vfunc_check_credentials(creds: Credentials): boolean;
        /**
         * Removes all stored secrets from the database.
         */
        vfunc_clear_db(): boolean;
        /**
         * Closes the database. To reopen it, call gsignond_secret_storage_open_db().
         */
        vfunc_close_db(): boolean;
        /**
         * Retrieves the last occurred error that has occurred
         */
        vfunc_get_last_error(): GLib.Error;
        /**
         * Checks if the database is open or not.
         */
        vfunc_is_open_db(): boolean;
        /**
         * Loads the credentials from the database.
         * @param id the identity id whose credentials are being loaded.
         */
        vfunc_load_credentials(id: number): Credentials | null;
        /**
         * Loads the secret data associated with a given identity and method.
         * @param id the identity id whose data are fetched
         * @param method the authentication method the data is used for.
         */
        vfunc_load_data(id: number, method: number): Dictionary;
        /**
         * Opens (and initializes) the database. The implementation should take
         * care of creating the DB, if it doesn't exist, and it should use
         * #GSIGNOND_CONFIG_GENERAL_SECURE_DIR
         * to determine database location in the filesystem.
         *
         * The default implementation is using SQLite for the storage.
         */
        vfunc_open_db(): boolean;
        /**
         * Remove the credentials for the given identity.
         * @param id the identity whose credentials are being updated.
         */
        vfunc_remove_credentials(id: number): boolean;
        /**
         * Removes secret data associated with a given id/method.
         * @param id the identity whose data are fetched.
         * @param method the authentication method the data is used for.
         */
        vfunc_remove_data(id: number, method: number): boolean;
        /**
         * Stores/updates the credentials for the given identity.
         * @param creds the credentials that are being updated.
         */
        vfunc_update_credentials(creds: Credentials): boolean;
        /**
         * Calling this method updates the secret data
         * associated with the given id/method.
         * @param id the identity whose data are fetched.
         * @param method the authentication method the data is used for.
         * @param data the data to update
         */
        vfunc_update_data(id: number, method: number, data: Dictionary): boolean;

        // Methods

        /**
         * Checks whether the given credentials match what is stored in the database.
         * @param creds the credentials that are being checked.
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        check_credentials(creds: Credentials): boolean;
        /**
         * Removes all stored secrets from the database.
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        clear_db(): boolean;
        /**
         * Closes the database. To reopen it, call gsignond_secret_storage_open_db().
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        close_db(): boolean;
        /**
         * Retrieves the last occurred error that has occurred
         * @returns last occurred #GError
         */
        get_last_error(): GLib.Error;
        /**
         * Checks if the database is open or not.
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        is_open_db(): boolean;
        /**
         * Loads the credentials from the database.
         * @param id the identity id whose credentials are being loaded.
         * @returns #GSignondCredentials if successful, %NULL otherwise.
         */
        load_credentials(id: number): Credentials | null;
        /**
         * Loads the secret data associated with a given identity and method.
         * @param id the identity id whose data are fetched
         * @param method the authentication method the data is used for.
         * @returns the secret data
         */
        load_data(id: number, method: number): Dictionary;
        /**
         * Opens (and initializes) the database. The implementation should take
         * care of creating the DB, if it doesn't exist, and it should use
         * #GSIGNOND_CONFIG_GENERAL_SECURE_DIR
         * to determine database location in the filesystem.
         *
         * The default implementation is using SQLite for the storage.
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        open_db(): boolean;
        /**
         * Remove the credentials for the given identity.
         * @param id the identity whose credentials are being updated.
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        remove_credentials(id: number): boolean;
        /**
         * Removes secret data associated with a given id/method.
         * @param id the identity whose data are fetched.
         * @param method the authentication method the data is used for.
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        remove_data(id: number, method: number): boolean;
        /**
         * Stores/updates the credentials for the given identity.
         * @param creds the credentials that are being updated.
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        update_credentials(creds: Credentials): boolean;
        /**
         * Calling this method updates the secret data
         * associated with the given id/method.
         * @param id the identity whose data are fetched.
         * @param method the authentication method the data is used for.
         * @param data the data to update
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        update_data(id: number, method: number, data: Dictionary): boolean;
    }

    namespace SessionData {
        // Signal signatures
        interface SignalSignatures extends Dictionary.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Dictionary.ConstructorProps {}
    }

    /**
     * Opaque #GSignondSessionData data structure.
     */
    class SessionData extends Dictionary {
        static $gtype: GObject.GType<SessionData>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SessionData.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SessionData.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SessionData;

        static new_from_variant(variant: GLib.Variant): SessionData;

        // Signals

        connect<K extends keyof SessionData.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SessionData.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SessionData.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SessionData.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SessionData.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SessionData.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Creates a copy of the dictionary session data.
         * @returns #GSignondSessionData object if the copy was successful, NULL otherwise.
         */
        copy(): SessionData;
        /**
         * A getter for a caption associated with the authentication session.
         * Caption tells the user which application/credentials/provider is requestion
         * authentication.
         */
        get_caption(): string;
        /**
         * A getter for a network proxy setting associated with the authentication session.
         * If this property is not set, the default system proxy settings should be used.
         */
        get_network_proxy(): string;
        /**
         * A getter for a network timeout setting associated with the authentication session.
         * This can be used to change the default timeout in case of unresponsive servers.
         * @returns whether the key-value pair exists in the @data dictionary or not.
         */
        get_network_timeout(): [boolean, number];
        /**
         * A getter for a realm associated with the authentication session.
         */
        get_realm(): string;
        /**
         * A getter for a renew token property associated with the authentication session.
         * This property tells the plugin to discard any cached tokens and start
         * the authentication process anew.
         * @returns whether the key-value pair exists in the @data dictionary or not.
         */
        get_renew_token(): [boolean, boolean];
        /**
         * A getter for a secret (e.g. a password) associated with the authentication session.
         */
        get_secret(): string;
        /**
         * A getter for UI policy setting associated with the authentication session.
         * The UI policy indicates how the authentication plugin should interact with the user.
         * @returns whether the key-value pair exists in the @data dictionary or not.
         */
        get_ui_policy(): [boolean, UiPolicy];
        /**
         * A getter for a username associated with the authentication session.
         */
        get_username(): string;
        /**
         * A getter for a window id setting associated with the authentication session.
         * This can be used to embed the user interaction window produced by the authentication
         * session into an application window.
         * @returns whether the key-value pair exists in the @data dictionary or not.
         */
        get_window_id(): [boolean, number];
        /**
         * A setter for a list of realms allowed for the identity use.
         * @param realms a #GSequence if allowed realms
         */
        set_allowed_realms(realms: GLib.Sequence): void;
        /**
         * A setter for a caption associated with the authentication session.
         * Caption tells the user which application/credentials/provider is requestion
         * authentication.
         * @param caption a caption to set
         */
        set_caption(caption: string): void;
        /**
         * A setter for a network proxy setting associated with the authentication session.
         * If this property is not set, the default system proxy settings should be used.
         * @param network_proxy network proxy to use
         */
        set_network_proxy(network_proxy: string): void;
        /**
         * A setter for a network timeout setting associated with the authentication session.
         * This can be used to change the default timeout in case of unresponsive servers.
         * @param network_timeout network timeout to use
         */
        set_network_timeout(network_timeout: number): void;
        /**
         * A setter for a realm associated with the authentication session.
         * @param realm a realm to set
         */
        set_realm(realm: string): void;
        /**
         * A setter for a renew token property associated with the authentication session.
         * This property tells the plugin to discard any cached tokens and start
         * the authentication process anew.
         * @param renew_token whether to renew the token set
         */
        set_renew_token(renew_token: boolean): void;
        /**
         * A setter for a secret (e.g. a password) associated with the authentication session.
         * @param secret a secret to set
         */
        set_secret(secret: string): void;
        /**
         * A getter for UI policy setting associated with the authentication session.
         * The UI policy indicates how the authentication plugin should interact with the user.
         * @param ui_policy ui policy to set
         */
        set_ui_policy(ui_policy: UiPolicy | null): void;
        /**
         * A setter for a username associated with the authentication session.
         * @param username username to set
         */
        set_username(username: string): void;
        /**
         * A setter for a window id setting associated with the authentication session.
         * This can be used to embed the user interaction window produced by the authentication
         * session into an application window.
         * @param window_id window id to use
         */
        set_window_id(window_id: number): void;
    }

    namespace SignonuiData {
        // Signal signatures
        interface SignalSignatures extends Dictionary.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Dictionary.ConstructorProps {}
    }

    /**
     * #GSignondSignonuiData is simply a typedef for #GSignondDictionary, which
     * means the developers may also freely use methods associated with that structure,
     * in particular for creating a #GSignondSignonuiData object with
     * gsignond_dictionary_new().
     */
    class SignonuiData extends Dictionary {
        static $gtype: GObject.GType<SignonuiData>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SignonuiData.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SignonuiData.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SignonuiData;

        static new_from_variant(variant: GLib.Variant): SignonuiData;

        // Signals

        connect<K extends keyof SignonuiData.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SignonuiData.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SignonuiData.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SignonuiData.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SignonuiData.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SignonuiData.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Creates a copy of the dictionary session data.
         * @returns a new #GSignondSignonuiData object copied from @other.
         */
        copy(): SignonuiData;
        /**
         * A getter for the user's response to a captcha query.
         * @returns the string entered by the user in response to a captcha query.
         */
        get_captcha_response(): string | null;
        /**
         * A getter for the captcha URL.
         * @returns the URL to the captcha image to be verified by user.
         */
        get_captcha_url(): string | null;
        /**
         * A getter for the caption string. Caption tells the user which
         * application/credentials/provider is requestion authentication.
         */
        get_caption(): string | null;
        /**
         * A getter for the confirm mode. In confirm mode the user is asked to enter
         * an old password (which is compared to the supplied password), and a new password twice
         * (which is returned).
         * @returns whether this property exists in the @data dictionary or not.
         */
        get_confirm(): [boolean, boolean];
        /**
         * A getter for the final URL. When the signon UI detects that the user is at
         * the final URL (possibly with additional query or fragment parameters), it
         * will close the window and return the full URL via url response property.
         * This is used by redirection-based authentication, such as OAuth.
         */
        get_final_url(): string | null;
        /**
         * A getter for the forgot password string which is shown to the user as a link to
         * reset the password or remind him of the password.
         */
        get_forgot_password(): string | null;
        /**
         * A getter for the forgot password URL, where the user can reset or request a
         * reminder of the password.
         */
        get_forgot_password_url(): string | null;
        /**
         * A getter for the message which is show to the user in the signon UI dialog.
         */
        get_message(): string | null;
        /**
         * A getter for the URL that should be opened by signon UI.
         */
        get_open_url(): string | null;
        /**
         * A getter for the password string.
         */
        get_password(): string | null;
        /**
         * A getter for the UI interaction error. Signon UI sets this to `SIGNONUI_ERROR_NONE` if
         * there were no errors.
         * @returns whether this property exists in the @data dictionary or not.
         */
        get_query_error(): [boolean, SignonuiError];
        /**
         * A getter for the query password property. It indicates whether the signon UI
         * should ask the user for a password (and return it in the password property).
         * @returns whether this property exists in the @data dictionary or not.
         */
        get_query_password(): [boolean, boolean];
        /**
         * A getter for the query username property. It indicates whether the signon UI
         * should ask the user for a username (and return it in the username property).
         * @returns whether this property exists in the @data dictionary or not.
         */
        get_query_username(): [boolean, boolean];
        /**
         * A getter for whether the password should be remembered.
         * @returns whether this property exists in the @data dictionary or not.
         */
        get_remember_password(): [boolean, boolean];
        /**
         * A getter for the dialog request id. The id identifies the dialog so that it
         * can be refreshed or updated.
         */
        get_request_id(): string | null;
        /**
         * A getter for the test reply values. It's used only by the signon ui
         * implementations to test themselves.
         */
        get_test_reply(): string | null;
        /**
         * A getter for the UI dialog title.
         */
        get_title(): string | null;
        /**
         * A getter for the response URL. If the final URL was set in the request to the signon UI, and the signon UI
         * detects that it has been reached, then the full final URL is returned using
         * this property. This is used by redirection-based authentication such as OAauth.
         */
        get_url_response(): string | null;
        /**
         * A getter for the username string.
         */
        get_username(): string | null;
        /**
         * A setter for the user's response to a captcha query.
         * @param response the string entered by the user in response to a captcha query.
         */
        set_captcha_response(response: string): void;
        /**
         * A setter for the captcha URL.
         * @param url the URL to the captcha image to be verified by user
         */
        set_captcha_url(url: string): void;
        /**
         * A setter for the caption string. Caption tells the user which
         * application/credentials/provider is requestion authentication.
         * @param caption the caption string
         */
        set_caption(caption: string): void;
        /**
         * A setter for the confirm mode. In confirm mode the user is asked to enter
         * an old password (which is compared to the supplied password), and a new password twice
         * (which is returned).
         * @param confirm the value for the property
         */
        set_confirm(confirm: boolean): void;
        /**
         * A setter for the final URL. When the signon UI detects that the user is at
         * the final URL (possibly with additional query or fragment parameters), it
         * will close the window and return the full URL via url response property.
         * This is used by redirection-based authentication, such as OAuth.
         * @param url the final url
         */
        set_final_url(url: string): void;
        /**
         * A setter for the forgot password string, which is shown to the user as a link to
         * reset the password or remind him of the password.
         * @param forgot the forgot password string
         */
        set_forgot_password(forgot: string): void;
        /**
         * A setter for the forgot password URL, where the user can reset or request a
         * reminder of the password.
         * @param url the forgot password URL
         */
        set_forgot_password_url(url: string): void;
        /**
         * A setter for the message which is show to the user in the signon UI dialog.
         * @param message the message
         */
        set_message(message: string): void;
        /**
         * A setter for the URL that should be opened by signon UI.
         * @param url the url to open
         */
        set_open_url(url: string): void;
        /**
         * A setter for the password string.
         * @param password the password string
         */
        set_password(password: string): void;
        /**
         * A setter for the UI interaction error. Signon UI sets this to `SIGNONUI_ERROR_NONE` if
         * there were no errors.
         * @param error the error
         */
        set_query_error(error: SignonuiError | null): void;
        /**
         * A setter for the query password property. It indicates whether the signon UI
         * should ask the user for a password (and return it in the password property).
         * @param query the property value
         */
        set_query_password(query: boolean): void;
        /**
         * A setter for the query username property. It indicates whether the signon UI
         * should ask the user for a username (and return it in the username property).
         * @param query the property value
         */
        set_query_username(query: boolean): void;
        /**
         * A setter for whether the password should be remembered.
         * @param remember the property value
         */
        set_remember_password(remember: boolean): void;
        /**
         * A setter for the dialog request id. The id identifies the dialog so that it
         * can be refreshed or updated.
         * @param id request id
         */
        set_request_id(id: string): void;
        /**
         * A setter for the test reply values. It's used only by the signon ui
         * implementations to test themselves.
         * @param reply test reply values
         */
        set_test_reply(reply: string): void;
        /**
         * A setter for the UI dialog title.
         * @param title the title
         */
        set_title(title: string): void;
        /**
         * A getter for the response URL. If the final URL was set in the request to the
         * signon UI, and the signon UI
         * detects that it has been reached, then the full final URL is returned using
         * this property. This is used by redirection-based authentication such as OAauth.
         * @param response the response URL
         */
        set_url_response(response: string): void;
        /**
         * A setter for the username string.
         * @param username the username string
         */
        set_username(username: string): void;
    }

    namespace StorageManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::config': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            config: Config;
        }
    }

    /**
     * Opaque #GSignondStorageManager data structure.
     */
    class StorageManager extends GObject.Object {
        static $gtype: GObject.GType<StorageManager>;

        // Properties

        get config(): Config;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StorageManager.SignalSignatures;

        // Fields

        location: string;

        // Constructors

        constructor(properties?: Partial<StorageManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof StorageManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StorageManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StorageManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StorageManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StorageManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StorageManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Destroys all the encryption keys and wipes the storage. gsignond_wipe_directory()
         * is typically used for the latter.
         */
        vfunc_delete_storage(): boolean;
        /**
         * Checks if the encrypted storage filesystem is currently mounted.
         */
        vfunc_filesystem_is_mounted(): boolean;
        /**
         * Initialize encryption storage. This means making sure that the
         * necessary directories under #GSIGNOND_CONFIG_GENERAL_STORAGE_PATH exist and are accessible.
         */
        vfunc_initialize_storage(): boolean;
        /**
         * Mounts an encrypted storage and returns the filesystem path of the storage
         * mount point. This path will be set in #GSignondConfig as
         * #GSIGNOND_CONFIG_GENERAL_SECURE_DIR and used to access the secret database via
         * #GSignondSecretStorage.
         *
         * The default implemenation does nothing, and immediately returns the path for the
         * secret database.
         */
        vfunc_mount_filesystem(): string;
        /**
         * Checks if the storage has been initialized.
         */
        vfunc_storage_is_initialized(): boolean;
        /**
         * Unmounts a previously mounted encrypted storage filesystem.
         */
        vfunc_unmount_filesystem(): boolean;

        // Methods

        /**
         * Destroys all the encryption keys and wipes the storage. gsignond_wipe_directory()
         * is typically used for the latter.
         * @returns %TRUE if the storage has been deleted, %FALSE otherwise.
         */
        delete_storage(): boolean;
        /**
         * Checks if the encrypted storage filesystem is currently mounted.
         * @returns %TRUE if the filesystem is mounted, %FALSE otherwise.
         */
        filesystem_is_mounted(): boolean;
        /**
         * Initialize encryption storage. This means making sure that the
         * necessary directories under #GSIGNOND_CONFIG_GENERAL_STORAGE_PATH exist and are accessible.
         * @returns %TRUE if the storage has been initialized, %FALSE otherwise.
         */
        initialize_storage(): boolean;
        /**
         * Mounts an encrypted storage and returns the filesystem path of the storage
         * mount point. This path will be set in #GSignondConfig as
         * #GSIGNOND_CONFIG_GENERAL_SECURE_DIR and used to access the secret database via
         * #GSignondSecretStorage.
         *
         * The default implemenation does nothing, and immediately returns the path for the
         * secret database.
         * @returns The path of the storage mount point.
         */
        mount_filesystem(): string;
        /**
         * Checks if the storage has been initialized.
         * @returns %TRUE if the storage has been initialized, %FALSE otherwise.
         */
        storage_is_initialized(): boolean;
        /**
         * Unmounts a previously mounted encrypted storage filesystem.
         * @returns %TRUE if the filesystem has been unmounted, %FALSE otherwise.
         */
        unmount_filesystem(): boolean;
    }

    type AccessControlManagerClass = typeof AccessControlManager;
    abstract class AccessControlManagerPrivate {
        static $gtype: GObject.GType<AccessControlManagerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ConfigClass = typeof Config;
    type CredentialsClass = typeof Credentials;
    type DictionaryClass = typeof Dictionary;
    type ExtensionClass = typeof Extension;
    type PluginInterface = typeof Plugin;
    type SecretStorageClass = typeof SecretStorage;
    abstract class SecretStoragePrivate {
        static $gtype: GObject.GType<SecretStoragePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

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
         * Builds a #GSignondSecurityContext item from a GVariant of type "(ss)".
         * @param variant GVariant item with a #GSignondSecurityContext construct.
         */
        static from_variant(variant: GLib.Variant): SecurityContext;

        // Methods

        /**
         * Check if `test` is covered by `reference`.
         * @param test security context item to be checked.
         * @returns TRUE if contexts are equal or the @reference has a wildcard system context, or if system contexts are equal and @reference has a wildcard application context, otherwise FALSE. If either or both contexts are NULL, FALSE is returned.
         */
        check(test: SecurityContext): boolean;
        /**
         * Compare two #GSignondSecurityContext items in a similar way to strcmp().
         * @param ctx2 second item to compare.
         * @returns negative if ctx1 < ctx2, 0 if ctx1 == ctx2 and positive if ctx1 > ctx2.
         */
        compare(ctx2: SecurityContext): number;
        /**
         * Copies a security context item.
         * @returns a copy of the #GSignondSecurityContext item.
         */
        copy(): SecurityContext;
        /**
         * Frees a security context item.
         */
        free(): void;
        /**
         * Get the application context part of
         * the #GSignondSecurityContext.
         * @returns application context.
         */
        get_application_context(): string;
        /**
         * Get the system context partof the
         * #GSignondSecurityContext.
         * @returns system context.
         */
        get_system_context(): string;
        /**
         * Compare two #GSignondSecurityContext items match.
         * @param ctx2 second item to compare.
         * @returns TRUE if contexts are equal or if either side has a wildcard match for system context, or if system contexts are equal and either side has a wildcard match for the app context, otherwise FALSE. Two NULL contexts match.
         */
        match(ctx2: SecurityContext): boolean;
        /**
         * Sets the application context part of
         * the #GSignondSecurityContext.
         * @param application_context application security context.
         */
        set_application_context(application_context: string): void;
        /**
         * Sets the system context part of the
         * #GSignondSecurityContext.
         * @param system_context system security context.
         */
        set_system_context(system_context: string): void;
        /**
         * Build a GVariant of type "(ss)" from a #GSignondSecurityContext item.
         * @returns GVariant construct of a #GSignondSecurityContext.
         */
        to_variant(): GLib.Variant;
    }

    type SessionDataClass = typeof SessionData;
    type SignonuiDataClass = typeof SignonuiData;
    type StorageManagerClass = typeof StorageManager;
    abstract class StorageManagerPrivate {
        static $gtype: GObject.GType<StorageManagerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    namespace Plugin {
        /**
         * Interface for implementing Plugin.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * This method cancels an ongoing authentication session. The plugin implementations
             * should issue a #GSignondPlugin::error signal with #GSIGNOND_ERROR_SESSION_CANCELED
             * error, and prepare for a new authentication session.
             */
            vfunc_cancel(): void;
            /**
             * This method asks the plugin to refresh the UI. The plugin responds with
             * #GSignondPlugin::refreshed signal.
             * @param ui_data UI refresh parameters
             */
            vfunc_refresh(ui_data: SignonuiData): void;
            /**
             * This method provides the plugin with additional parameters for the session
             * after the plugin has asked for it via #GSignondPlugin::response signal.
             * @param session_data additional parameters for the session
             */
            vfunc_request(session_data: SessionData): void;
            /**
             * This method starts a new authentication session.
             * @param session_data parameters for the session
             * @param identity_method_cache data from persistent storage, saved previously via #GSignondPlugin::store signal
             * @param mechanism mechanism to use for the authentication
             */
            vfunc_request_initial(
                session_data: SessionData,
                identity_method_cache: Dictionary,
                mechanism: string,
            ): void;
            /**
             * This method provides the plugin with the results of UI interaction
             * after the plugin has asked for it via #GSignondPlugin::user-action-required signal.
             * @param ui_data results of UI interaction
             */
            vfunc_user_action_finished(ui_data: SignonuiData): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            mechanisms: string[];
            type: string;
        }
    }

    export interface PluginNamespace {
        $gtype: GObject.GType<Plugin>;
        prototype: Plugin;
    }
    interface Plugin extends GObject.Object, Plugin.Interface {
        // Properties

        /**
         * This property holds a list of authentication mechanisms that the plugin
         * implements, all specified within the authentication method. For example,
         * OAuth plugin could implement "oauth1" and "oauth2" mechanisms.
         */
        get mechanisms(): string[];
        /**
         * This property holds a plugin type, or authentication method it implements
         * (for example "oauth" or "sasl").
         */
        get type(): string;

        // Methods

        /**
         * This method cancels an ongoing authentication session. The plugin implementations
         * should issue a #GSignondPlugin::error signal with #GSIGNOND_ERROR_SESSION_CANCELED
         * error, and prepare for a new authentication session.
         */
        cancel(): void;
        /**
         * Plugin implementations should use this to issue #GSignondPlugin::error
         * signal. This method should not be used otherwise.
         * @param error the error
         */
        error(error: GLib.Error): void;
        /**
         * This method asks the plugin to refresh the UI. The plugin responds with
         * #GSignondPlugin::refreshed signal.
         * @param ui_data UI refresh parameters
         */
        refresh(ui_data: SignonuiData): void;
        /**
         * Plugin implementations should use this to issue #GSignondPlugin::refreshed
         * signal. This method should not be used otherwise.
         * @param ui_data UI data
         */
        refreshed(ui_data: SignonuiData): void;
        /**
         * This method provides the plugin with additional parameters for the session
         * after the plugin has asked for it via #GSignondPlugin::response signal.
         * @param session_data additional parameters for the session
         */
        request(session_data: SessionData): void;
        /**
         * This method starts a new authentication session.
         * @param session_data parameters for the session
         * @param identity_method_cache data from persistent storage, saved previously via #GSignondPlugin::store signal
         * @param mechanism mechanism to use for the authentication
         */
        request_initial(session_data: SessionData, identity_method_cache: Dictionary, mechanism: string): void;
        /**
         * Plugin implementations should use this to issue #GSignondPlugin::response
         * signal. This method should not be used otherwise.
         * @param session_data session data
         */
        response(session_data: SessionData): void;
        /**
         * Plugin implementations should use this to issue #GSignondPlugin::response-final
         * signal. This method should not be used otherwise.
         * @param session_data session data
         */
        response_final(session_data: SessionData): void;
        /**
         * Plugin implementations should use this to issue #GSignondPlugin::status-changed
         * signal. This method should not be used otherwise.
         * @param state the new state
         * @param message the message
         */
        status_changed(state: PluginState | null, message: string): void;
        /**
         * Plugin implementations should use this to issue #GSignondPlugin::store
         * signal. This method should not be used otherwise.
         * @param identity_method_cache data to store
         */
        store(identity_method_cache: Dictionary): void;
        /**
         * This method provides the plugin with the results of UI interaction
         * after the plugin has asked for it via #GSignondPlugin::user-action-required signal.
         * @param ui_data results of UI interaction
         */
        user_action_finished(ui_data: SignonuiData): void;
        /**
         * Plugin implementations should use this to issue #GSignondPlugin::user-action-required
         * signal. This method should not be used otherwise.
         * @param ui_data UI data
         */
        user_action_required(ui_data: SignonuiData): void;
    }

    export const Plugin: PluginNamespace & {
        new (): Plugin; // This allows `obj instanceof Plugin`
    };

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

export default GSignond;

// END
