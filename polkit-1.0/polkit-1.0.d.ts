
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

export namespace Polkit {

    /**
     * Polkit-1.0
     */


    /**
     * Possible error when using PolicyKit.
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * The operation failed.
         */
        static FAILED: number;

        /**
         * The operation was cancelled.
         */
        static CANCELLED: number;

        /**
         * Operation is not supported.
         */
        static NOT_SUPPORTED: number;

        /**
         * Not authorized to perform operation.
         */
        static NOT_AUTHORIZED: number;

        // Constructors
        constructor(options: { message: string, code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Enum
     */
    export namespace ImplicitAuthorization {
        export const $gtype: GObject.GType<ImplicitAuthorization>;
    }

    /**
     * Possible implicit authorizations.
     * @gir-type Enum
     */
    enum ImplicitAuthorization {
        /**
         * Unknown whether the subject is authorized, never returned in any public API.
         */
        UNKNOWN,
        /**
         * Subject is not authorized.
         */
        NOT_AUTHORIZED,
        /**
         * Authentication is required.
         */
        AUTHENTICATION_REQUIRED,
        /**
         * Authentication as an administrator is required.
         */
        ADMINISTRATOR_AUTHENTICATION_REQUIRED,
        /**
         * Authentication is required. If the authorization is obtained, it is retained.
         */
        AUTHENTICATION_REQUIRED_RETAINED,
        /**
         * Authentication as an administrator is required. If the authorization is obtained, it is retained.
         */
        ADMINISTRATOR_AUTHENTICATION_REQUIRED_RETAINED,
        /**
         * The subject is authorized
         */
        AUTHORIZED,
    }


    function error_quark(): GLib.Quark;

    /**
     * Creates an object from `str` that implements the {@link Polkit.Identity}
     * interface.
     * @param str A string obtained from `polkit_identity_to_string()`.
     * @returns A {@link Polkit.Identity} or `null` if `error` is set. Free with `g_object_unref()`.
     */
    function identity_from_string(str: string): (Identity | null);

    /**
     * @param string 
     * @param out_implicit_authorization 
     */
    function implicit_authorization_from_string(string: string, out_implicit_authorization: ImplicitAuthorization): boolean;

    /**
     * @param implicit_authorization 
     */
    function implicit_authorization_to_string(implicit_authorization: ImplicitAuthorization): string;

    /**
     * Creates an object from `str` that implements the {@link Polkit.Subject}
     * interface.
     * @param str A string obtained from `polkit_subject_to_string()`.
     * @returns A {@link Polkit.Subject} or `null` if `error` is set. Free with `g_object_unref()`.
     */
    function subject_from_string(str: string): Subject;

    /**
     * @gir-type Flags
     */
    export namespace AuthorityFeatures {
        export const $gtype: GObject.GType<AuthorityFeatures>;
    }

    /**
     * Flags describing features supported by the Authority implementation.
     * @gir-type Flags
     */
    enum AuthorityFeatures {
        /**
         * No flags set.
         */
        NONE,
        /**
         * The authority supports temporary authorizations
         * that can be obtained through authentication.
         */
        TEMPORARY_AUTHORIZATION,
    }


    /**
     * @gir-type Flags
     */
    export namespace CheckAuthorizationFlags {
        export const $gtype: GObject.GType<CheckAuthorizationFlags>;
    }

    /**
     * Possible flags when checking authorizations.
     * @gir-type Flags
     */
    enum CheckAuthorizationFlags {
        /**
         * No flags set.
         */
        NONE,
        /**
         * If the subject can obtain the authorization
         * through authentication, and an authentication agent is available, then attempt to do so. Note, this
         * means that the method used for checking authorization is likely to block for a long time.
         */
        ALLOW_USER_INTERACTION,
    }


    namespace ActionDescription {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * Object used to encapsulate a registered action.
     * @gir-type Class
     */
    class ActionDescription extends GObject.Object {
        static $gtype: GObject.GType<ActionDescription>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ActionDescription.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ActionDescription.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ActionDescription.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ActionDescription.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ActionDescription.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ActionDescription.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ActionDescription.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ActionDescription.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the action id for `action_description`.
         * @returns A string owned by `action_description`. Do not free.
         */
        get_action_id(): string;

        /**
         * Get the value of the annotation with `key`.
         * @param key An annotation key.
         * @returns `null` if there is no annoation with `key`, otherwise the annotation value owned by `action_description`. Do not free.
         */
        get_annotation(key: string): (string | null);

        /**
         * Gets the keys of annotations defined in `action_description`.
         * @returns The annotation keys owned by `action_description`. Do not free.
         */
        get_annotation_keys(): string[];

        /**
         * Gets the description used for `action_description`.
         * @returns A string owned by `action_description`. Do not free.
         */
        get_description(): string;

        /**
         * Gets the icon name for `action_description`, if any.
         * @returns A string owned by `action_description`. Do not free.
         */
        get_icon_name(): string;

        /**
         * Gets the implicit authorization for `action_description` used for
         * subjects in active sessions on a local console.
         * @returns A value from the {@link Polkit.ImplicitAuthorization} enumeration.
         */
        get_implicit_active(): ImplicitAuthorization;

        /**
         * Gets the implicit authorization for `action_description` used for
         * any subject.
         * @returns A value from the {@link Polkit.ImplicitAuthorization} enumeration.
         */
        get_implicit_any(): ImplicitAuthorization;

        /**
         * Gets the implicit authorization for `action_description` used for
         * subjects in inactive sessions on a local console.
         * @returns A value from the {@link Polkit.ImplicitAuthorization} enumeration.
         */
        get_implicit_inactive(): ImplicitAuthorization;

        /**
         * Gets the message used for `action_description`.
         * @returns A string owned by `action_description`. Do not free.
         */
        get_message(): string;

        /**
         * Gets the vendor name for `action_description`, if any.
         * @returns A string owned by `action_description`. Do not free.
         */
        get_vendor_name(): string;

        /**
         * Gets the vendor URL for `action_description`, if any.
         * @returns A string owned by `action_description`. Do not free.
         */
        get_vendor_url(): string;
    }


    namespace Authority {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when actions and/or authorizations change
             * @signal
             * @run-last
             */
            changed: () => void;
            "notify::backend-features": (pspec: GObject.ParamSpec) => void;
            "notify::backend-name": (pspec: GObject.ParamSpec) => void;
            "notify::backend-version": (pspec: GObject.ParamSpec) => void;
            "notify::owner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.Initable.ConstructorProps {
            backend_features: AuthorityFeatures;
            backendFeatures: AuthorityFeatures;
            backend_name: string;
            backendName: string;
            backend_version: string;
            backendVersion: string;
            owner: (string | null);
        }
    }

    /**
     * {@link Polkit.Authority} is used for checking whether a given subject is
     * authorized to perform a given action. Typically privileged system
     * daemons or suid helpers will use this when handling requests from
     * untrusted clients.
     * 
     * User sessions can register an authentication agent with the
     * authority. This is used for requests from untrusted clients where
     * system policy requires that the user needs to acknowledge (through
     * proving he is the user or the administrator) a given action. See
     * `PolkitAgentListener` and `PolkitAgentSession` for details.
     * @gir-type Class
     */
    class Authority extends GObject.Object implements Gio.AsyncInitable<Authority>, Gio.Initable {
        static $gtype: GObject.GType<Authority>;

        // Properties
        /**
         * The features of the currently used Authority backend.
         * @read-only
         */
        get backend_features(): AuthorityFeatures;

        /**
         * The features of the currently used Authority backend.
         * @read-only
         */
        get backendFeatures(): AuthorityFeatures;

        /**
         * The name of the currently used Authority backend.
         * @read-only
         */
        get backend_name(): string;

        /**
         * The name of the currently used Authority backend.
         * @read-only
         */
        get backendName(): string;

        /**
         * @read-only
         */
        get backend_version(): string;

        /**
         * @read-only
         */
        get backendVersion(): string;

        /**
         * The unique name of the owner of the org.freedesktop.PolicyKit1
         * D-Bus service or `null` if there is no owner. Connect to the
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal to track changes to this property.
         * @read-only
         */
        get owner(): (string | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Authority.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Authority.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Authority.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Authority.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Authority.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Authority.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Authority.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Authority.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * (deprecated)
         */
        static get(): Authority;

        /**
         * Asynchronously gets a reference to the authority.
         * 
         * This is an asynchronous failable function. When the result is
         * ready, `callback` will be invoked in the <link
         * linkend="g-main-context-push-thread-default">thread-default main
         * loop</link> of the thread you are calling this method from and you
         * can use `polkit_authority_get_finish()` to get the result. See
         * `polkit_authority_get_sync()` for the synchronous version.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        static get_async(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<Authority> | null)): void;

        /**
         * Finishes an operation started with `polkit_authority_get_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `polkit_authority_get_async()`.
         */
        static get_finish(res: Gio.AsyncResult): Authority;

        /**
         * Synchronously gets a reference to the authority.
         * 
         * This is a synchronous failable function - the calling thread is
         * blocked until a reply is received. See `polkit_authority_get_async()`
         * for the asynchronous version.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        static get_sync(cancellable: (Gio.Cancellable | null)): Authority;

        // Methods
        /**
         * Asynchronously provide response that `identity` successfully authenticated
         * for the authentication request identified by `cookie`.
         * 
         * This function is only used by the privileged bits of an authentication agent.
         * It will fail if the caller is not sufficiently privileged (typically uid 0).
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_authority_authentication_agent_response_finish()` to get the
         * result of the operation.
         * @param cookie The cookie passed to the authentication agent from the authority.
         * @param identity The identity that was authenticated.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        authentication_agent_response(cookie: string, identity: Identity, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Asynchronously provide response that `identity` successfully authenticated
         * for the authentication request identified by `cookie`.
         * 
         * This function is only used by the privileged bits of an authentication agent.
         * It will fail if the caller is not sufficiently privileged (typically uid 0).
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_authority_authentication_agent_response_finish()` to get the
         * result of the operation.
         * @param cookie The cookie passed to the authentication agent from the authority.
         * @param identity The identity that was authenticated.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        authentication_agent_response(cookie: string, identity: Identity, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously provide response that `identity` successfully authenticated
         * for the authentication request identified by `cookie`.
         * 
         * This function is only used by the privileged bits of an authentication agent.
         * It will fail if the caller is not sufficiently privileged (typically uid 0).
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_authority_authentication_agent_response_finish()` to get the
         * result of the operation.
         * @param cookie The cookie passed to the authentication agent from the authority.
         * @param identity The identity that was authenticated.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        authentication_agent_response(cookie: string, identity: Identity, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes providing response from an authentication agent.
         * @param res A {@link Gio.AsyncResult} obtained from the callback.
         * @returns `true` if `authority` acknowledged the call, `false` if `error` is set.
         */
        authentication_agent_response_finish(res: Gio.AsyncResult): boolean;

        /**
         * Provide response that `identity` successfully authenticated for the
         * authentication request identified by `cookie`. See `polkit_authority_authentication_agent_response()`
         * for limitations on who is allowed is to call this method.
         * 
         * The calling thread is blocked until a reply is received. See
         * `polkit_authority_authentication_agent_response()` for the
         * asynchronous version.
         * @param cookie The cookie passed to the authentication agent from the authority.
         * @param identity The identity that was authenticated.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if `authority` acknowledged the call, `false` if `error` is set.
         */
        authentication_agent_response_sync(cookie: string, identity: Identity, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Asynchronously checks if `subject` is authorized to perform the action represented
         * by `action_id`.
         * 
         * Note that {@link Polkit.CheckAuthorizationFlags.ALLOW_USER_INTERACTION}
         * <emphasis>SHOULD</emphasis> be passed <emphasis>ONLY</emphasis> if
         * the event that triggered the authorization check is stemming from
         * an user action, e.g. the user pressing a button or attaching a
         * device.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_authority_check_authorization_finish()` to get the result of
         * the operation.
         * 
         * Known keys in `details` include <literal>polkit.message</literal>
         * and <literal>polkit.gettext_domain</literal> that can be used to
         * override the message shown to the user. See the documentation for
         * the <link linkend="eggdbus-method-org.freedesktop.PolicyKit1.Authority.CheckAuthorization">D-Bus method</link> for more details.
         * 
         * If `details` is non-empty then the request will fail with
         * #POLKIT_ERROR_FAILED unless the process doing the check itsef is
         * sufficiently authorized (e.g. running as uid 0).
         * @param subject A {@link Polkit.Subject}.
         * @param action_id The action to check for.
         * @param details Details about the action or `null`.
         * @param flags A set of {@link Polkit.CheckAuthorizationFlags}.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        check_authorization(subject: Subject, action_id: string, details: (Details | null), flags: CheckAuthorizationFlags, cancellable: (Gio.Cancellable | null)): globalThis.Promise<AuthorizationResult>;

        /**
         * Asynchronously checks if `subject` is authorized to perform the action represented
         * by `action_id`.
         * 
         * Note that {@link Polkit.CheckAuthorizationFlags.ALLOW_USER_INTERACTION}
         * <emphasis>SHOULD</emphasis> be passed <emphasis>ONLY</emphasis> if
         * the event that triggered the authorization check is stemming from
         * an user action, e.g. the user pressing a button or attaching a
         * device.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_authority_check_authorization_finish()` to get the result of
         * the operation.
         * 
         * Known keys in `details` include <literal>polkit.message</literal>
         * and <literal>polkit.gettext_domain</literal> that can be used to
         * override the message shown to the user. See the documentation for
         * the <link linkend="eggdbus-method-org.freedesktop.PolicyKit1.Authority.CheckAuthorization">D-Bus method</link> for more details.
         * 
         * If `details` is non-empty then the request will fail with
         * #POLKIT_ERROR_FAILED unless the process doing the check itsef is
         * sufficiently authorized (e.g. running as uid 0).
         * @param subject A {@link Polkit.Subject}.
         * @param action_id The action to check for.
         * @param details Details about the action or `null`.
         * @param flags A set of {@link Polkit.CheckAuthorizationFlags}.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        check_authorization(subject: Subject, action_id: string, details: (Details | null), flags: CheckAuthorizationFlags, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously checks if `subject` is authorized to perform the action represented
         * by `action_id`.
         * 
         * Note that {@link Polkit.CheckAuthorizationFlags.ALLOW_USER_INTERACTION}
         * <emphasis>SHOULD</emphasis> be passed <emphasis>ONLY</emphasis> if
         * the event that triggered the authorization check is stemming from
         * an user action, e.g. the user pressing a button or attaching a
         * device.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_authority_check_authorization_finish()` to get the result of
         * the operation.
         * 
         * Known keys in `details` include <literal>polkit.message</literal>
         * and <literal>polkit.gettext_domain</literal> that can be used to
         * override the message shown to the user. See the documentation for
         * the <link linkend="eggdbus-method-org.freedesktop.PolicyKit1.Authority.CheckAuthorization">D-Bus method</link> for more details.
         * 
         * If `details` is non-empty then the request will fail with
         * #POLKIT_ERROR_FAILED unless the process doing the check itsef is
         * sufficiently authorized (e.g. running as uid 0).
         * @param subject A {@link Polkit.Subject}.
         * @param action_id The action to check for.
         * @param details Details about the action or `null`.
         * @param flags A set of {@link Polkit.CheckAuthorizationFlags}.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        check_authorization(subject: Subject, action_id: string, details: (Details | null), flags: CheckAuthorizationFlags, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<AuthorizationResult> | void);

        /**
         * Finishes checking if a subject is authorized for an action.
         * @param res A {@link Gio.AsyncResult} obtained from the callback.
         * @returns A {@link Polkit.AuthorizationResult} or `null` if `error` is set. Free with `g_object_unref()`.
         */
        check_authorization_finish(res: Gio.AsyncResult): AuthorizationResult;

        /**
         * Checks if `subject` is authorized to perform the action represented
         * by `action_id`.
         * 
         * Note that {@link Polkit.CheckAuthorizationFlags.ALLOW_USER_INTERACTION}
         * <emphasis>SHOULD</emphasis> be passed <emphasis>ONLY</emphasis> if
         * the event that triggered the authorization check is stemming from
         * an user action, e.g. the user pressing a button or attaching a
         * device.
         * 
         * Note the calling thread is blocked until a reply is received. You
         * should therefore <emphasis>NEVER</emphasis> do this from a GUI
         * thread or a daemon service thread when using the
         * {@link Polkit.CheckAuthorizationFlags.ALLOW_USER_INTERACTION} flag. This
         * is because it may potentially take minutes (or even hours) for the
         * operation to complete because it involves waiting for the user to
         * authenticate.
         * 
         * Known keys in `details` include <literal>polkit.message</literal>
         * and <literal>polkit.gettext_domain</literal> that can be used to
         * override the message shown to the user. See the documentation for
         * the <link linkend="eggdbus-method-org.freedesktop.PolicyKit1.Authority.CheckAuthorization">D-Bus method</link> for more details.
         * @param subject A {@link Polkit.Subject}.
         * @param action_id The action to check for.
         * @param details Details about the action or `null`.
         * @param flags A set of {@link Polkit.CheckAuthorizationFlags}.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns A {@link Polkit.AuthorizationResult} or `null` if `error` is set. Free with `g_object_unref()`.
         */
        check_authorization_sync(subject: Subject, action_id: string, details: (Details | null), flags: CheckAuthorizationFlags, cancellable: (Gio.Cancellable | null)): AuthorizationResult;

        /**
         * Asynchronously retrieves all registered actions.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call `polkit_authority_enumerate_actions_finish()`
         * to get the result of the operation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        enumerate_actions(cancellable: (Gio.Cancellable | null)): globalThis.Promise<ActionDescription[]>;

        /**
         * Asynchronously retrieves all registered actions.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call `polkit_authority_enumerate_actions_finish()`
         * to get the result of the operation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        enumerate_actions(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously retrieves all registered actions.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call `polkit_authority_enumerate_actions_finish()`
         * to get the result of the operation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        enumerate_actions(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<ActionDescription[]> | void);

        /**
         * Finishes retrieving all registered actions.
         * @param res A {@link Gio.AsyncResult} obtained from the callback.
         * @returns A list of {@link Polkit.ActionDescription} objects or `null` if `error` is set. The returned list should be freed with `g_list_free()` after each element have been freed with `g_object_unref()`.
         */
        enumerate_actions_finish(res: Gio.AsyncResult): ActionDescription[];

        /**
         * Synchronously retrieves all registered actions - the calling thread
         * is blocked until a reply is received. See
         * `polkit_authority_enumerate_actions()` for the asynchronous version.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns A list of {@link Polkit.ActionDescription} or `null` if `error` is set. The returned list should be freed with `g_list_free()` after each element have been freed with `g_object_unref()`.
         */
        enumerate_actions_sync(cancellable: (Gio.Cancellable | null)): ActionDescription[];

        /**
         * Asynchronously gets all temporary authorizations for `subject`.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_authority_enumerate_temporary_authorizations_finish()` to get
         * the result of the operation.
         * @param subject A {@link Polkit.Subject}, typically a {@link Polkit.UnixSession}.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        enumerate_temporary_authorizations(subject: Subject, cancellable: (Gio.Cancellable | null)): globalThis.Promise<TemporaryAuthorization[]>;

        /**
         * Asynchronously gets all temporary authorizations for `subject`.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_authority_enumerate_temporary_authorizations_finish()` to get
         * the result of the operation.
         * @param subject A {@link Polkit.Subject}, typically a {@link Polkit.UnixSession}.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        enumerate_temporary_authorizations(subject: Subject, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously gets all temporary authorizations for `subject`.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_authority_enumerate_temporary_authorizations_finish()` to get
         * the result of the operation.
         * @param subject A {@link Polkit.Subject}, typically a {@link Polkit.UnixSession}.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        enumerate_temporary_authorizations(subject: Subject, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<TemporaryAuthorization[]> | void);

        /**
         * Finishes retrieving all registered actions.
         * @param res A {@link Gio.AsyncResult} obtained from the callback.
         * @returns A list of {@link Polkit.TemporaryAuthorization} objects or `null` if `error` is set. The returned list should be freed with `g_list_free()` after each element have been freed with `g_object_unref()`.
         */
        enumerate_temporary_authorizations_finish(res: Gio.AsyncResult): TemporaryAuthorization[];

        /**
         * Synchronousky gets all temporary authorizations for `subject`.
         * 
         * The calling thread is blocked until a reply is received. See
         * `polkit_authority_enumerate_temporary_authorizations()` for the
         * asynchronous version.
         * @param subject A {@link Polkit.Subject}, typically a {@link Polkit.UnixSession}.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns A list of {@link Polkit.TemporaryAuthorization} objects or `null` if `error` is set. The returned list should be freed with `g_list_free()` after each element have been freed with `g_object_unref()`.
         */
        enumerate_temporary_authorizations_sync(subject: Subject, cancellable: (Gio.Cancellable | null)): TemporaryAuthorization[];

        /**
         * Gets the features supported by the authority backend.
         * @returns Flags from {@link Polkit.AuthorityFeatures}.
         */
        get_backend_features(): AuthorityFeatures;

        /**
         * Gets the name of the authority backend.
         * @returns The name of the backend.
         */
        get_backend_name(): string;

        /**
         * Gets the version of the authority backend.
         * @returns The version string for the backend.
         */
        get_backend_version(): string;

        /**
         * The unique name on the system message bus of the owner of the name
         * <literal>org.freedesktop.PolicyKit1</literal> or `null` if no-one
         * currently owns the name. You may connect to the {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify}
         * signal to track changes to the {@link Polkit.Authority.owner} property.
         * @returns `null` or a string that should be freed with `g_free()`.
         */
        get_owner(): (string | null);

        /**
         * Asynchronously registers an authentication agent.
         * 
         * Note that this should be called by the same effective UID which will be
         * the real UID using the `PolkitAgentSession` API or otherwise calling
         * `polkit_authority_authentication_agent_response()`.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_authority_register_authentication_agent_finish()` to get the
         * result of the operation.
         * @param subject The subject the authentication agent is for, typically a {@link Polkit.UnixSession} object.
         * @param locale The locale of the authentication agent.
         * @param object_path The object path for the authentication agent.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        register_authentication_agent(subject: Subject, locale: string, object_path: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Asynchronously registers an authentication agent.
         * 
         * Note that this should be called by the same effective UID which will be
         * the real UID using the `PolkitAgentSession` API or otherwise calling
         * `polkit_authority_authentication_agent_response()`.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_authority_register_authentication_agent_finish()` to get the
         * result of the operation.
         * @param subject The subject the authentication agent is for, typically a {@link Polkit.UnixSession} object.
         * @param locale The locale of the authentication agent.
         * @param object_path The object path for the authentication agent.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        register_authentication_agent(subject: Subject, locale: string, object_path: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously registers an authentication agent.
         * 
         * Note that this should be called by the same effective UID which will be
         * the real UID using the `PolkitAgentSession` API or otherwise calling
         * `polkit_authority_authentication_agent_response()`.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_authority_register_authentication_agent_finish()` to get the
         * result of the operation.
         * @param subject The subject the authentication agent is for, typically a {@link Polkit.UnixSession} object.
         * @param locale The locale of the authentication agent.
         * @param object_path The object path for the authentication agent.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        register_authentication_agent(subject: Subject, locale: string, object_path: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes registering an authentication agent.
         * @param res A {@link Gio.AsyncResult} obtained from the callback.
         * @returns `true` if the authentication agent was successfully registered, `false` if `error` is set.
         */
        register_authentication_agent_finish(res: Gio.AsyncResult): boolean;

        /**
         * Registers an authentication agent.
         * 
         * Note that this should be called by the same effective UID which will be
         * the real UID using the `PolkitAgentSession` API or otherwise calling
         * `polkit_authority_authentication_agent_response()`.
         * 
         * The calling thread is blocked
         * until a reply is received. See
         * `polkit_authority_register_authentication_agent()` for the
         * asynchronous version.
         * @param subject The subject the authentication agent is for, typically a {@link Polkit.UnixSession} object.
         * @param locale The locale of the authentication agent.
         * @param object_path The object path for the authentication agent.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the authentication agent was successfully registered, `false` if `error` is set.
         */
        register_authentication_agent_sync(subject: Subject, locale: string, object_path: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Asynchronously registers an authentication agent.
         * 
         * Note that this should be called by the same effective UID which will be
         * the real UID using the `PolkitAgentSession` API or otherwise calling
         * `polkit_authority_authentication_agent_response()`.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_authority_register_authentication_agent_with_options_finish()` to get the
         * result of the operation.
         * @param subject The subject the authentication agent is for, typically a {@link Polkit.UnixSession} object.
         * @param locale The locale of the authentication agent.
         * @param object_path The object path for the authentication agent.
         * @param options A {@link GLib.Variant} with options or `null`.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        register_authentication_agent_with_options(subject: Subject, locale: string, object_path: string, options: (GLib.Variant | null), cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Asynchronously registers an authentication agent.
         * 
         * Note that this should be called by the same effective UID which will be
         * the real UID using the `PolkitAgentSession` API or otherwise calling
         * `polkit_authority_authentication_agent_response()`.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_authority_register_authentication_agent_with_options_finish()` to get the
         * result of the operation.
         * @param subject The subject the authentication agent is for, typically a {@link Polkit.UnixSession} object.
         * @param locale The locale of the authentication agent.
         * @param object_path The object path for the authentication agent.
         * @param options A {@link GLib.Variant} with options or `null`.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        register_authentication_agent_with_options(subject: Subject, locale: string, object_path: string, options: (GLib.Variant | null), cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously registers an authentication agent.
         * 
         * Note that this should be called by the same effective UID which will be
         * the real UID using the `PolkitAgentSession` API or otherwise calling
         * `polkit_authority_authentication_agent_response()`.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_authority_register_authentication_agent_with_options_finish()` to get the
         * result of the operation.
         * @param subject The subject the authentication agent is for, typically a {@link Polkit.UnixSession} object.
         * @param locale The locale of the authentication agent.
         * @param object_path The object path for the authentication agent.
         * @param options A {@link GLib.Variant} with options or `null`.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        register_authentication_agent_with_options(subject: Subject, locale: string, object_path: string, options: (GLib.Variant | null), cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes registering an authentication agent.
         * @param res A {@link Gio.AsyncResult} obtained from the callback.
         * @returns `true` if the authentication agent was successfully registered, `false` if `error` is set.
         */
        register_authentication_agent_with_options_finish(res: Gio.AsyncResult): boolean;

        /**
         * Registers an authentication agent.
         * 
         * Note that this should be called by the same effective UID which will be
         * the real UID using the `PolkitAgentSession` API or otherwise calling
         * `polkit_authority_authentication_agent_response()`.
         * 
         * The calling thread is blocked
         * until a reply is received. See
         * `polkit_authority_register_authentication_agent_with_options()` for the
         * asynchronous version.
         * @param subject The subject the authentication agent is for, typically a {@link Polkit.UnixSession} object.
         * @param locale The locale of the authentication agent.
         * @param object_path The object path for the authentication agent.
         * @param options A {@link GLib.Variant} with options or `null`.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the authentication agent was successfully registered, `false` if `error` is set.
         */
        register_authentication_agent_with_options_sync(subject: Subject, locale: string, object_path: string, options: (GLib.Variant | null), cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Asynchronously revoke a temporary authorization.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_authority_revoke_temporary_authorization_by_id_finish()` to
         * get the result of the operation.
         * @param id The opaque identifier for the temporary authorization.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        revoke_temporary_authorization_by_id(id: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Asynchronously revoke a temporary authorization.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_authority_revoke_temporary_authorization_by_id_finish()` to
         * get the result of the operation.
         * @param id The opaque identifier for the temporary authorization.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        revoke_temporary_authorization_by_id(id: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously revoke a temporary authorization.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_authority_revoke_temporary_authorization_by_id_finish()` to
         * get the result of the operation.
         * @param id The opaque identifier for the temporary authorization.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        revoke_temporary_authorization_by_id(id: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes revoking a temporary authorization by id.
         * @param res A {@link Gio.AsyncResult} obtained from the callback.
         * @returns `true` if the temporary authorization was revoked, `false` if error is set.
         */
        revoke_temporary_authorization_by_id_finish(res: Gio.AsyncResult): boolean;

        /**
         * Synchronously revokes a temporary authorization.
         * 
         * The calling thread is blocked until a reply is received. See
         * `polkit_authority_revoke_temporary_authorization_by_id()` for the
         * asynchronous version.
         * @param id The opaque identifier for the temporary authorization.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the temporary authorization was revoked, `false` if error is set.
         */
        revoke_temporary_authorization_by_id_sync(id: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Asynchronously revokes all temporary authorizations for `subject`.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_authority_revoke_temporary_authorizations_finish()` to get
         * the result of the operation.
         * @param subject The subject to revoke authorizations from, typically a {@link Polkit.UnixSession}.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        revoke_temporary_authorizations(subject: Subject, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Asynchronously revokes all temporary authorizations for `subject`.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_authority_revoke_temporary_authorizations_finish()` to get
         * the result of the operation.
         * @param subject The subject to revoke authorizations from, typically a {@link Polkit.UnixSession}.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        revoke_temporary_authorizations(subject: Subject, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously revokes all temporary authorizations for `subject`.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_authority_revoke_temporary_authorizations_finish()` to get
         * the result of the operation.
         * @param subject The subject to revoke authorizations from, typically a {@link Polkit.UnixSession}.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        revoke_temporary_authorizations(subject: Subject, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes revoking temporary authorizations.
         * @param res A {@link Gio.AsyncResult} obtained from the callback.
         * @returns `true` if all the temporary authorizations was revoked, `false` if error is set.
         */
        revoke_temporary_authorizations_finish(res: Gio.AsyncResult): boolean;

        /**
         * Synchronously revokes all temporary authorization from `subject`.
         * 
         * The calling thread is blocked until a reply is received. See
         * `polkit_authority_revoke_temporary_authorizations()` for the
         * asynchronous version.
         * @param subject The subject to revoke authorizations from, typically a {@link Polkit.UnixSession}.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the temporary authorization was revoked, `false` if error is set.
         */
        revoke_temporary_authorizations_sync(subject: Subject, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Asynchronously unregisters an authentication agent.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_authority_unregister_authentication_agent_finish()` to get
         * the result of the operation.
         * @param subject The subject the authentication agent is for, typically a {@link Polkit.UnixSession} object.
         * @param object_path The object path for the authentication agent.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        unregister_authentication_agent(subject: Subject, object_path: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Asynchronously unregisters an authentication agent.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_authority_unregister_authentication_agent_finish()` to get
         * the result of the operation.
         * @param subject The subject the authentication agent is for, typically a {@link Polkit.UnixSession} object.
         * @param object_path The object path for the authentication agent.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        unregister_authentication_agent(subject: Subject, object_path: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously unregisters an authentication agent.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_authority_unregister_authentication_agent_finish()` to get
         * the result of the operation.
         * @param subject The subject the authentication agent is for, typically a {@link Polkit.UnixSession} object.
         * @param object_path The object path for the authentication agent.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        unregister_authentication_agent(subject: Subject, object_path: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes unregistering an authentication agent.
         * @param res A {@link Gio.AsyncResult} obtained from the callback.
         * @returns `true` if the authentication agent was successfully unregistered, `false` if `error` is set.
         */
        unregister_authentication_agent_finish(res: Gio.AsyncResult): boolean;

        /**
         * Unregisters an authentication agent. The calling thread is blocked
         * until a reply is received. See
         * `polkit_authority_unregister_authentication_agent()` for the
         * asynchronous version.
         * @param subject The subject the authentication agent is for, typically a {@link Polkit.UnixSession} object.
         * @param object_path The object path for the authentication agent.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the authentication agent was successfully unregistered, `false` if `error` is set.
         */
        unregister_authentication_agent_sync(subject: Subject, object_path: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): Authority;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace AuthorizationResult {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * This class represents the result you get when checking for an authorization.
     * @gir-type Class
     */
    class AuthorizationResult extends GObject.Object {
        static $gtype: GObject.GType<AuthorizationResult>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AuthorizationResult.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AuthorizationResult.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](is_authorized: boolean, is_challenge: boolean, details: (Details | null)): AuthorizationResult;

        // Signals
        /** @signal */
        connect<K extends keyof AuthorizationResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AuthorizationResult.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AuthorizationResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AuthorizationResult.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AuthorizationResult.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AuthorizationResult.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the details about the result.
         * @returns A {@link Polkit.Details} object or `null` if there are no details. This object is owned by `result` and should not be freed by the caller.
         */
        get_details(): (Details | null);

        /**
         * Gets whether the authentication request was dismissed / canceled by the user.
         * 
         * This method simply reads the value of the key/value pair in `details` with the
         * key <literal>polkit.dismissed</literal>.
         * @returns `true` if the authentication request was dismissed, `false` otherwise.
         */
        get_dismissed(): boolean;

        /**
         * Gets whether the subject is authorized.
         * 
         * If the authorization is temporary, use `polkit_authorization_result_get_temporary_authorization_id()`
         * to get the opaque identifier for the temporary authorization.
         * @returns Whether the subject is authorized.
         */
        get_is_authorized(): boolean;

        /**
         * Gets whether the subject is authorized if more information is provided.
         * @returns Whether the subject is authorized if more information is provided.
         */
        get_is_challenge(): boolean;

        /**
         * Gets whether authorization is retained if obtained via authentication. This can only be the case
         * if `result` indicates that the subject can obtain authorization after challenge (cf.
         * `polkit_authorization_result_get_is_challenge()`), e.g. when the subject is not already authorized (cf.
         * `polkit_authorization_result_get_is_authorized()`).
         * 
         * If the subject is already authorized, use `polkit_authorization_result_get_temporary_authorization_id()`
         * to check if the authorization is temporary.
         * 
         * This method simply reads the value of the key/value pair in `details` with the
         * key <literal>polkit.retains_authorization_after_challenge</literal>.
         * @returns `true` if the authorization is or will be temporary.
         */
        get_retains_authorization(): boolean;

        /**
         * Gets the opaque temporary authorization id for `result` if `result` indicates the
         * subject is authorized and the authorization is temporary rather than one-shot or
         * permanent.
         * 
         * You can use this string together with the result from
         * `polkit_authority_enumerate_temporary_authorizations()` to get more details
         * about the temporary authorization or `polkit_authority_revoke_temporary_authorization_by_id()`
         * to revoke the temporary authorization.
         * 
         * If the subject is not authorized, use `polkit_authorization_result_get_retains_authorization()`
         * to check if the authorization will be retained if obtained via authentication.
         * 
         * This method simply reads the value of the key/value pair in `details` with the
         * key <literal>polkit.temporary_authorization_id</literal>.
         * @returns The opaque temporary authorization id for    `result` or `null` if not available. Do not free this string, it    is owned by `result`.
         */
        get_temporary_authorization_id(): (string | null);
    }


    namespace Details {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * An object used for passing details around.
     * @gir-type Class
     */
    class Details extends GObject.Object {
        static $gtype: GObject.GType<Details>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Details.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Details.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Details;

        // Signals
        /** @signal */
        connect<K extends keyof Details.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Details.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Details.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Details.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Details.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Details.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets a list of all keys on `details`.
         * @returns `null` if there are no keys otherwise an array of strings that should be freed with `g_strfreev()`.
         */
        get_keys(): (string[] | null);

        /**
         * Inserts a copy of `key` and `value` on `details`.
         * 
         * If `value` is `null`, the key will be removed.
         * @param key A key.
         * @param value A value.
         */
        insert(key: string, value: (string | null)): void;

        /**
         * Gets the value for `key` on `details`.
         * @param key A key.
         * @returns `null` if there is no value for `key`, otherwise a string owned by `details`.
         */
        lookup(key: string): (string | null);
    }


    namespace Permission {
        // Signal signatures
        interface SignalSignatures extends Gio.Permission.SignalSignatures {
            "notify::action-id": (pspec: GObject.ParamSpec) => void;
            "notify::subject": (pspec: GObject.ParamSpec) => void;
            "notify::allowed": (pspec: GObject.ParamSpec) => void;
            "notify::can-acquire": (pspec: GObject.ParamSpec) => void;
            "notify::can-release": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.Permission.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.Initable.ConstructorProps {
            action_id: string;
            actionId: string;
            subject: Subject;
        }
    }

    /**
     * {@link Polkit.Permission} is a {@link Gio.Permission} implementation. It can be used
     * with e.g. `GtkLockButton`. See the {@link Gio.Permission} documentation for
     * more information.
     * @gir-type Class
     */
    class Permission extends Gio.Permission implements Gio.AsyncInitable<Permission>, Gio.Initable {
        static $gtype: GObject.GType<Permission>;

        // Properties
        /**
         * The action identifier to use for the permission.
         * @construct-only
         */
        get action_id(): string;

        /**
         * The action identifier to use for the permission.
         * @construct-only
         */
        get actionId(): string;

        /**
         * The {@link Polkit.Subject} to use for the permission. If not set during
         * construction, it will be set to match the current process.
         * @construct-only
         */
        get subject(): Subject;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Permission.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Permission.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(res: Gio.AsyncResult): Permission;

        // Conflicted with Gio.AsyncInitable.new_finish
        static new_finish(...args: never[]): any;

        static new_sync(action_id: string, subject: (Subject | null), cancellable: (Gio.Cancellable | null)): Permission;

        // Signals
        /** @signal */
        connect<K extends keyof Permission.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Permission.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Permission.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Permission.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Permission.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Permission.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Creates a {@link Gio.Permission} instance for the PolicyKit action
         * `action_id`.
         * 
         * When the operation is finished, `callback` will be invoked. You can
         * then call `polkit_permission_new_finish()` to get the result of the
         * operation.
         * 
         * This is a asynchronous failable constructor. See
         * `polkit_permission_new_sync()` for the synchronous version.
         * @param action_id The PolicyKit action identifier.
         * @param subject A {@link Polkit.Subject} or `null` for the current process.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        static ["new"](action_id: string, subject: (Subject | null), cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<Permission> | null)): void;

        // Methods
        /**
         * Gets the PolicyKit action identifier used for `permission`.
         * @returns A string owned by `permission`. Do not free.
         */
        get_action_id(): string;

        /**
         * Gets the subject used for `permission`.
         * @returns An object owned by `permission`. Do not free.
         */
        get_subject(): Subject;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): Permission;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace SystemBusName {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Subject.ConstructorProps {
            name: string;
        }
    }

    /**
     * An object that represents a process owning a unique name on the system bus.
     * @gir-type Class
     */
    class SystemBusName extends GObject.Object implements Subject {
        static $gtype: GObject.GType<SystemBusName>;

        // Properties
        /**
         * The unique name on the system message bus.
         */
        get name(): string;
        set name(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SystemBusName.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SystemBusName.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof SystemBusName.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SystemBusName.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SystemBusName.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SystemBusName.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SystemBusName.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SystemBusName.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Creates a new {@link Polkit.SystemBusName} for `name`.
         * @param name A unique system bus name.
         */
        static ["new"](name: string): Subject;

        // Methods
        /**
         * Gets the unique system bus name for `system_bus_name`.
         * @returns The unique system bus name for `system_bus_name`. Do not free, this string is owned by `system_bus_name`.
         */
        get_name(): string;

        /**
         * Synchronously gets a {@link Polkit.UnixProcess} object for `system_bus_name`
         * - the calling thread is blocked until a reply is received.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns A {@link Polkit.UnixProcess} object or `null` if `error` is set.
         */
        get_process_sync(cancellable: (Gio.Cancellable | null)): (Subject | null);

        /**
         * Synchronously gets a {@link Polkit.UnixUser} object for `system_bus_name`;
         * the calling thread is blocked until a reply is received.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns A {@link Polkit.UnixUser} object or `null` if `error` is set.
         */
        get_user_sync(cancellable: (Gio.Cancellable | null)): (UnixUser | null);

        /**
         * Sets the unique system bus name for `system_bus_name`.
         * @param name A unique system bus name.
         */
        set_name(name: string): void;

        /**
         * Checks if `a` and `b` are equal, ie. represent the same subject.
         * However, avoid calling `polkit_subject_equal()` to compare two processes;
         * for more information see the {@link Polkit.UnixProcess} documentation.
         * 
         * This function can be used in e.g. `g_hash_table_new()`.
         * @param b A {@link Polkit.Subject}.
         * @returns `true` if `a` and `b` are equal, `false` otherwise.
         */
        equal(b: Subject): boolean;

        /**
         * Asynchronously checks if `subject` exists.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call `polkit_subject_exists_finish()` to get the
         * result of the operation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        exists(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Asynchronously checks if `subject` exists.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call `polkit_subject_exists_finish()` to get the
         * result of the operation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        exists(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously checks if `subject` exists.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call `polkit_subject_exists_finish()` to get the
         * result of the operation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        exists(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes checking whether a subject exists.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `polkit_subject_exists()`.
         * @returns `true` if the subject exists, `false` if not or `error` is set.
         */
        exists_finish(res: Gio.AsyncResult): boolean;

        /**
         * Checks if `subject` exists.
         * 
         * This is a synchronous blocking call - the calling thread is blocked
         * until a reply is received. See `polkit_subject_exists()` for the
         * asynchronous version.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the subject exists, `false` if not or `error` is set.
         */
        exists_sync(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Gets a hash code for `subject` that can be used with e.g. `g_hash_table_new()`.
         * @returns A hash code.
         */
        hash(): number;

        /**
         * Serializes `subject` to a string that can be used in
         * `polkit_subject_from_string()`.
         * @returns A string representing `subject`. Free with `g_free()`.
         */
        to_string(): string;

        /**
         * Checks if `a` and `b` are equal, ie. represent the same subject.
         * However, avoid calling `polkit_subject_equal()` to compare two processes;
         * for more information see the {@link Polkit.UnixProcess} documentation.
         * 
         * This function can be used in e.g. `g_hash_table_new()`.
         * @param b A {@link Polkit.Subject}.
         * @virtual
         */
        vfunc_equal(b: Subject): boolean;

        /**
         * Asynchronously checks if `subject` exists.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call `polkit_subject_exists_finish()` to get the
         * result of the operation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_exists(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Finishes checking whether a subject exists.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `polkit_subject_exists()`.
         * @virtual
         */
        vfunc_exists_finish(res: Gio.AsyncResult): boolean;

        /**
         * Checks if `subject` exists.
         * 
         * This is a synchronous blocking call - the calling thread is blocked
         * until a reply is received. See `polkit_subject_exists()` for the
         * asynchronous version.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @virtual
         */
        vfunc_exists_sync(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Gets a hash code for `subject` that can be used with e.g. `g_hash_table_new()`.
         * @virtual
         */
        vfunc_hash(): number;

        /**
         * Serializes `subject` to a string that can be used in
         * `polkit_subject_from_string()`.
         * @virtual
         */
        vfunc_to_string(): string;
    }


    namespace TemporaryAuthorization {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * Object used to describe a temporary authorization.
     * @gir-type Class
     */
    class TemporaryAuthorization extends GObject.Object {
        static $gtype: GObject.GType<TemporaryAuthorization>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TemporaryAuthorization.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TemporaryAuthorization.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof TemporaryAuthorization.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TemporaryAuthorization.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TemporaryAuthorization.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TemporaryAuthorization.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TemporaryAuthorization.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TemporaryAuthorization.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the action that `authorization` is for.
         * @returns A string owned by `authorization`. Do not free.
         */
        get_action_id(): string;

        /**
         * Gets the opaque identifier for `authorization`.
         * @returns A string owned by `authorization`. Do not free.
         */
        get_id(): string;

        /**
         * Gets the subject that `authorization` is for.
         * @returns A {@link Polkit.Subject}, free with `g_object_unref()`.
         */
        get_subject(): Subject;

        /**
         * Gets the time when `authorization` will expire.
         * 
         * (Note that the PolicyKit daemon is using monotonic time internally
         * so the returned value may change if system time changes.)
         * @returns Seconds since the Epoch Jan 1. 1970, 0:00 UTC.
         */
        get_time_expires(): number;

        /**
         * Gets the time when `authorization` was obtained.
         * 
         * (Note that the PolicyKit daemon is using monotonic time internally
         * so the returned value may change if system time changes.)
         * @returns Seconds since the Epoch Jan 1. 1970, 0:00 UTC.
         */
        get_time_obtained(): number;
    }


    namespace UnixGroup {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::gid": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Identity.ConstructorProps {
            gid: number;
        }
    }

    /**
     * An object representing a group identity on a UNIX system.
     * @gir-type Class
     */
    class UnixGroup extends GObject.Object implements Identity {
        static $gtype: GObject.GType<UnixGroup>;

        // Properties
        /**
         * The UNIX group id.
         */
        get gid(): number;
        set gid(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UnixGroup.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<UnixGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof UnixGroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnixGroup.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UnixGroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnixGroup.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UnixGroup.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UnixGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Creates a new {@link Polkit.UnixGroup} object for `gid`.
         * @param gid A UNIX group id.
         */
        static ["new"](gid: number): Identity;

        /**
         * Creates a new {@link Polkit.UnixGroup} object for a group with the group name
         * `name`.
         * @param name A UNIX group name.
         */
        static new_for_name(name: string): Identity;

        // Methods
        /**
         * Gets the UNIX group id for `group`.
         * @returns A UNIX group id.
         */
        get_gid(): number;

        /**
         * Sets `gid` for `group`.
         * @param gid A UNIX group id.
         */
        set_gid(gid: number): void;

        /**
         * Checks if `a` and `b` are equal, ie. represent the same identity.
         * 
         * This function can be used in e.g. `g_hash_table_new()`.
         * @param b A {@link Polkit.Identity}.
         * @returns `true` if `a` and `b` are equal, `false` otherwise.
         */
        equal(b: Identity): boolean;

        /**
         * Gets a hash code for `identity` that can be used with e.g. `g_hash_table_new()`.
         * @returns A hash code.
         */
        hash(): number;

        /**
         * Serializes `identity` to a string that can be used in
         * `polkit_identity_from_string()`.
         * @returns A string representing `identity`. Free with `g_free()`.
         */
        to_string(): string;

        /**
         * Checks if `a` and `b` are equal, ie. represent the same identity.
         * 
         * This function can be used in e.g. `g_hash_table_new()`.
         * @param b A {@link Polkit.Identity}.
         * @virtual
         */
        vfunc_equal(b: Identity): boolean;

        /**
         * Gets a hash code for `identity` that can be used with e.g. `g_hash_table_new()`.
         * @virtual
         */
        vfunc_hash(): number;

        /**
         * Serializes `identity` to a string that can be used in
         * `polkit_identity_from_string()`.
         * @virtual
         */
        vfunc_to_string(): string;
    }


    namespace UnixNetgroup {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Identity.ConstructorProps {
            name: string;
        }
    }

    /**
     * An object representing a netgroup identity on a UNIX system.
     * @gir-type Class
     */
    class UnixNetgroup extends GObject.Object implements Identity {
        static $gtype: GObject.GType<UnixNetgroup>;

        // Properties
        /**
         * The NIS netgroup name.
         */
        get name(): string;
        set name(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UnixNetgroup.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<UnixNetgroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof UnixNetgroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnixNetgroup.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UnixNetgroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnixNetgroup.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UnixNetgroup.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UnixNetgroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Creates a new {@link Polkit.UnixNetgroup} object for `name`.
         * @param name A netgroup name.
         */
        static ["new"](name: string): Identity;

        // Methods
        /**
         * Gets the netgroup name for `group`.
         * @returns A netgroup name string.
         */
        get_name(): string;

        /**
         * Sets `name` for `group`.
         * @param name A netgroup name.
         */
        set_name(name: string): void;

        /**
         * Checks if `a` and `b` are equal, ie. represent the same identity.
         * 
         * This function can be used in e.g. `g_hash_table_new()`.
         * @param b A {@link Polkit.Identity}.
         * @returns `true` if `a` and `b` are equal, `false` otherwise.
         */
        equal(b: Identity): boolean;

        /**
         * Gets a hash code for `identity` that can be used with e.g. `g_hash_table_new()`.
         * @returns A hash code.
         */
        hash(): number;

        /**
         * Serializes `identity` to a string that can be used in
         * `polkit_identity_from_string()`.
         * @returns A string representing `identity`. Free with `g_free()`.
         */
        to_string(): string;

        /**
         * Checks if `a` and `b` are equal, ie. represent the same identity.
         * 
         * This function can be used in e.g. `g_hash_table_new()`.
         * @param b A {@link Polkit.Identity}.
         * @virtual
         */
        vfunc_equal(b: Identity): boolean;

        /**
         * Gets a hash code for `identity` that can be used with e.g. `g_hash_table_new()`.
         * @virtual
         */
        vfunc_hash(): number;

        /**
         * Serializes `identity` to a string that can be used in
         * `polkit_identity_from_string()`.
         * @virtual
         */
        vfunc_to_string(): string;
    }


    namespace UnixProcess {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::pid": (pspec: GObject.ParamSpec) => void;
            "notify::start-time": (pspec: GObject.ParamSpec) => void;
            "notify::uid": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Subject.ConstructorProps {
            pid: number;
            start_time: (bigint | number);
            startTime: (bigint | number);
            uid: number;
        }
    }

    /**
     * An object for representing a UNIX process.  NOTE: This object as
     * designed is now known broken; a mechanism to exploit a delay in
     * start time in the Linux kernel was identified.  Avoid
     * calling `polkit_subject_equal()` to compare two processes.
     * 
     * To uniquely identify processes, both the process id and the start
     * time of the process (a monotonic increasing value representing the
     * time since the kernel was started) is used.
     * 
     * NOTE: This object stores, and provides access to, the real UID of the
     * process.  That value can change over time (with set*uid*(2) and exec*(2)).
     * Checks whether an operation is allowed need to take care to use the UID
     * value as of the time when the operation was made (or, following the `open()`
     * privilege check model, when the connection making the operation possible
     * was initiated).  That is usually done by initializing this with
     * `polkit_unix_process_new_for_owner()` with trusted data.
     * @gir-type Class
     */
    class UnixProcess extends GObject.Object implements Subject {
        static $gtype: GObject.GType<UnixProcess>;

        // Properties
        /**
         * The UNIX process id.
         */
        get pid(): number;
        set pid(val: number);

        /**
         * The start time of the process.
         */
        get start_time(): number;
        set start_time(val: (bigint | number));

        /**
         * The start time of the process.
         */
        get startTime(): number;
        set startTime(val: (bigint | number));

        /**
         * The UNIX user id of the process or -1 if unknown.
         * 
         * Note that this is the real user-id, not the effective user-id.
         */
        get uid(): number;
        set uid(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UnixProcess.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<UnixProcess.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof UnixProcess.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnixProcess.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UnixProcess.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnixProcess.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UnixProcess.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UnixProcess.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Creates a new {@link Polkit.UnixProcess} for `pid`.
         * 
         * The uid and start time of the process will be looked up in using
         * e.g. the <filename>/proc</filename> filesystem depending on the
         * platform in use.
         * @param pid The process id.
         */
        static ["new"](pid: number): Subject;

        /**
         * Creates a new {@link Polkit.UnixProcess} object for `pid`, `start_time` and `uid`.
         * @param pid The process id.
         * @param start_time The start time for `pid` or 0 to look it up in e.g. <filename>/proc</filename>.
         * @param uid The (real, not effective) uid of the owner of `pid` or -1 to look it up in e.g. <filename>/proc</filename>.
         */
        static new_for_owner(pid: number, start_time: (bigint | number), uid: number): Subject;

        /**
         * Creates a new {@link Polkit.UnixProcess} object for `pid` and `start_time`.
         * 
         * The uid of the process will be looked up in using e.g. the
         * <filename>/proc</filename> filesystem depending on the platform in
         * use.
         * @param pid The process id.
         * @param start_time The start time for `pid`.
         */
        static new_full(pid: number, start_time: (bigint | number)): Subject;

        // Methods
        /**
         * (deprecated)
         */
        get_owner(): number;

        /**
         * Gets the process id for `process`.
         * @returns The process id for `process`.
         */
        get_pid(): number;

        /**
         * Gets the start time of `process`.
         * @returns The start time of `process`.
         */
        get_start_time(): number;

        /**
         * Gets the user id for `process`. Note that this is the real user-id,
         * not the effective user-id.
         * 
         * NOTE: The UID may change over time, so the returned value may not match the
         * current state of the underlying process; or the UID may have been set by
         * `polkit_unix_process_new_for_owner()` or `polkit_unix_process_set_uid()`,
         * in which case it may not correspond to the actual UID of the referenced
         * process at all (at any point in time).
         * @returns The user id for `process` or -1 if unknown.
         */
        get_uid(): number;

        /**
         * Sets `pid` for `process`.
         * @param pid A process id.
         */
        set_pid(pid: number): void;

        /**
         * Set the start time of `process`.
         * @param start_time The start time for `pid`.
         */
        set_start_time(start_time: (bigint | number)): void;

        /**
         * Sets the (real, not effective) user id for `process`.
         * @param uid The user id to set for `process` or -1 to unset it.
         */
        set_uid(uid: number): void;

        /**
         * Checks if `a` and `b` are equal, ie. represent the same subject.
         * However, avoid calling `polkit_subject_equal()` to compare two processes;
         * for more information see the {@link Polkit.UnixProcess} documentation.
         * 
         * This function can be used in e.g. `g_hash_table_new()`.
         * @param b A {@link Polkit.Subject}.
         * @returns `true` if `a` and `b` are equal, `false` otherwise.
         */
        equal(b: Subject): boolean;

        /**
         * Asynchronously checks if `subject` exists.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call `polkit_subject_exists_finish()` to get the
         * result of the operation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        exists(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Asynchronously checks if `subject` exists.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call `polkit_subject_exists_finish()` to get the
         * result of the operation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        exists(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously checks if `subject` exists.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call `polkit_subject_exists_finish()` to get the
         * result of the operation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        exists(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes checking whether a subject exists.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `polkit_subject_exists()`.
         * @returns `true` if the subject exists, `false` if not or `error` is set.
         */
        exists_finish(res: Gio.AsyncResult): boolean;

        /**
         * Checks if `subject` exists.
         * 
         * This is a synchronous blocking call - the calling thread is blocked
         * until a reply is received. See `polkit_subject_exists()` for the
         * asynchronous version.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the subject exists, `false` if not or `error` is set.
         */
        exists_sync(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Gets a hash code for `subject` that can be used with e.g. `g_hash_table_new()`.
         * @returns A hash code.
         */
        hash(): number;

        /**
         * Serializes `subject` to a string that can be used in
         * `polkit_subject_from_string()`.
         * @returns A string representing `subject`. Free with `g_free()`.
         */
        to_string(): string;

        /**
         * Checks if `a` and `b` are equal, ie. represent the same subject.
         * However, avoid calling `polkit_subject_equal()` to compare two processes;
         * for more information see the {@link Polkit.UnixProcess} documentation.
         * 
         * This function can be used in e.g. `g_hash_table_new()`.
         * @param b A {@link Polkit.Subject}.
         * @virtual
         */
        vfunc_equal(b: Subject): boolean;

        /**
         * Asynchronously checks if `subject` exists.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call `polkit_subject_exists_finish()` to get the
         * result of the operation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_exists(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Finishes checking whether a subject exists.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `polkit_subject_exists()`.
         * @virtual
         */
        vfunc_exists_finish(res: Gio.AsyncResult): boolean;

        /**
         * Checks if `subject` exists.
         * 
         * This is a synchronous blocking call - the calling thread is blocked
         * until a reply is received. See `polkit_subject_exists()` for the
         * asynchronous version.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @virtual
         */
        vfunc_exists_sync(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Gets a hash code for `subject` that can be used with e.g. `g_hash_table_new()`.
         * @virtual
         */
        vfunc_hash(): number;

        /**
         * Serializes `subject` to a string that can be used in
         * `polkit_subject_from_string()`.
         * @virtual
         */
        vfunc_to_string(): string;
    }


    namespace UnixSession {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::pid": (pspec: GObject.ParamSpec) => void;
            "notify::session-id": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.Initable.ConstructorProps, Subject.ConstructorProps {
            pid: number;
            session_id: string;
            sessionId: string;
        }
    }

    /**
     * An object that represents an user session.
     * 
     * The session id is an opaque string obtained from ConsoleKit.
     * @gir-type Class
     */
    class UnixSession extends GObject.Object implements Gio.AsyncInitable<UnixSession>, Gio.Initable, Subject {
        static $gtype: GObject.GType<UnixSession>;

        // Properties
        /**
         * The UNIX process id to look up the session.
         * @construct-only
         */
        set pid(val: number);

        /**
         * The UNIX session id.
         */
        get session_id(): string;
        set session_id(val: string);

        /**
         * The UNIX session id.
         */
        get sessionId(): string;
        set sessionId(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UnixSession.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<UnixSession.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof UnixSession.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnixSession.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UnixSession.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnixSession.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UnixSession.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UnixSession.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Creates a new {@link Polkit.UnixSession} for `session_id`.
         * @param session_id The session id.
         */
        static ["new"](session_id: string): Subject;

        /**
         * Asynchronously creates a new {@link Polkit.UnixSession} object for the
         * process with process id `pid`.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call
         * `polkit_unix_session_new_for_process_finish()` to get the result of
         * the operation.
         * 
         * This method constructs the object asynchronously, for the synchronous and blocking version
         * use `polkit_unix_session_new_for_process_sync()`.
         * @param pid The process id of the process to get the session for.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        static new_for_process(pid: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<UnixSession> | null)): void;

        /**
         * Finishes constructing a {@link Polkit.Subject} for a process id.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `polkit_unix_session_new_for_process()`.
         */
        static new_for_process_finish(res: Gio.AsyncResult): (Subject | null);

        /**
         * Creates a new {@link Polkit.UnixSession} for the process with process id `pid`.
         * 
         * This is a synchronous call - the calling thread is blocked until a
         * reply is received. For the asynchronous version, see
         * `polkit_unix_session_new_for_process()`.
         * @param pid The process id of the process to get the session for.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        static new_for_process_sync(pid: number, cancellable: (Gio.Cancellable | null)): (Subject | null);

        // Methods
        /**
         * Gets the session id for `session`.
         * @returns The session id for `session`. Do not free this string, it is owned by `session`.
         */
        get_session_id(): string;

        /**
         * Sets the session id for `session` to `session_id`.
         * @param session_id The session id.
         */
        set_session_id(session_id: string): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): UnixSession;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Checks if `a` and `b` are equal, ie. represent the same subject.
         * However, avoid calling `polkit_subject_equal()` to compare two processes;
         * for more information see the {@link Polkit.UnixProcess} documentation.
         * 
         * This function can be used in e.g. `g_hash_table_new()`.
         * @param b A {@link Polkit.Subject}.
         * @returns `true` if `a` and `b` are equal, `false` otherwise.
         */
        equal(b: Subject): boolean;

        /**
         * Asynchronously checks if `subject` exists.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call `polkit_subject_exists_finish()` to get the
         * result of the operation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        exists(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Asynchronously checks if `subject` exists.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call `polkit_subject_exists_finish()` to get the
         * result of the operation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        exists(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously checks if `subject` exists.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call `polkit_subject_exists_finish()` to get the
         * result of the operation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        exists(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes checking whether a subject exists.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `polkit_subject_exists()`.
         * @returns `true` if the subject exists, `false` if not or `error` is set.
         */
        exists_finish(res: Gio.AsyncResult): boolean;

        /**
         * Checks if `subject` exists.
         * 
         * This is a synchronous blocking call - the calling thread is blocked
         * until a reply is received. See `polkit_subject_exists()` for the
         * asynchronous version.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the subject exists, `false` if not or `error` is set.
         */
        exists_sync(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Gets a hash code for `subject` that can be used with e.g. `g_hash_table_new()`.
         * @returns A hash code.
         */
        hash(): number;

        /**
         * Serializes `subject` to a string that can be used in
         * `polkit_subject_from_string()`.
         * @returns A string representing `subject`. Free with `g_free()`.
         */
        to_string(): string;

        /**
         * Checks if `a` and `b` are equal, ie. represent the same subject.
         * However, avoid calling `polkit_subject_equal()` to compare two processes;
         * for more information see the {@link Polkit.UnixProcess} documentation.
         * 
         * This function can be used in e.g. `g_hash_table_new()`.
         * @param b A {@link Polkit.Subject}.
         * @virtual
         */
        vfunc_equal(b: Subject): boolean;

        /**
         * Asynchronously checks if `subject` exists.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call `polkit_subject_exists_finish()` to get the
         * result of the operation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_exists(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Finishes checking whether a subject exists.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `polkit_subject_exists()`.
         * @virtual
         */
        vfunc_exists_finish(res: Gio.AsyncResult): boolean;

        /**
         * Checks if `subject` exists.
         * 
         * This is a synchronous blocking call - the calling thread is blocked
         * until a reply is received. See `polkit_subject_exists()` for the
         * asynchronous version.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @virtual
         */
        vfunc_exists_sync(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Gets a hash code for `subject` that can be used with e.g. `g_hash_table_new()`.
         * @virtual
         */
        vfunc_hash(): number;

        /**
         * Serializes `subject` to a string that can be used in
         * `polkit_subject_from_string()`.
         * @virtual
         */
        vfunc_to_string(): string;
    }


    namespace UnixUser {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::uid": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Identity.ConstructorProps {
            uid: number;
        }
    }

    /**
     * An object representing a user identity on a UNIX system.
     * @gir-type Class
     */
    class UnixUser extends GObject.Object implements Identity {
        static $gtype: GObject.GType<UnixUser>;

        // Properties
        /**
         * The UNIX user id.
         */
        get uid(): number;
        set uid(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UnixUser.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<UnixUser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof UnixUser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnixUser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UnixUser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnixUser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UnixUser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UnixUser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Creates a new {@link Polkit.UnixUser} object for `uid`.
         * @param uid A UNIX user id.
         */
        static ["new"](uid: number): Identity;

        /**
         * Creates a new {@link Polkit.UnixUser} object for a user with the user name
         * `name`.
         * @param name A UNIX user name.
         */
        static new_for_name(name: string): (Identity | null);

        // Methods
        /**
         * Get the user's name.
         * @returns User name string or `null` if user uid not found.
         */
        get_name(): (string | null);

        /**
         * Gets the UNIX user id for `user`.
         * @returns A UNIX user id.
         */
        get_uid(): number;

        /**
         * Sets `uid` for `user`.
         * @param uid A UNIX user id.
         */
        set_uid(uid: number): void;

        /**
         * Checks if `a` and `b` are equal, ie. represent the same identity.
         * 
         * This function can be used in e.g. `g_hash_table_new()`.
         * @param b A {@link Polkit.Identity}.
         * @returns `true` if `a` and `b` are equal, `false` otherwise.
         */
        equal(b: Identity): boolean;

        /**
         * Gets a hash code for `identity` that can be used with e.g. `g_hash_table_new()`.
         * @returns A hash code.
         */
        hash(): number;

        /**
         * Serializes `identity` to a string that can be used in
         * `polkit_identity_from_string()`.
         * @returns A string representing `identity`. Free with `g_free()`.
         */
        to_string(): string;

        /**
         * Checks if `a` and `b` are equal, ie. represent the same identity.
         * 
         * This function can be used in e.g. `g_hash_table_new()`.
         * @param b A {@link Polkit.Identity}.
         * @virtual
         */
        vfunc_equal(b: Identity): boolean;

        /**
         * Gets a hash code for `identity` that can be used with e.g. `g_hash_table_new()`.
         * @virtual
         */
        vfunc_hash(): number;

        /**
         * Serializes `identity` to a string that can be used in
         * `polkit_identity_from_string()`.
         * @virtual
         */
        vfunc_to_string(): string;
    }


    /**
     * @gir-type Alias
     */
    type ActionDescriptionClass = typeof ActionDescription;

    /**
     * @gir-type Alias
     */
    type AuthorityClass = typeof Authority;

    /**
     * @gir-type Alias
     */
    type AuthorizationResultClass = typeof AuthorizationResult;

    /**
     * @gir-type Alias
     */
    type DetailsClass = typeof Details;

    /**
     * @gir-type Alias
     */
    type IdentityIface = typeof Identity;

    /**
     * @gir-type Alias
     */
    type SubjectIface = typeof Subject;

    /**
     * @gir-type Alias
     */
    type SystemBusNameClass = typeof SystemBusName;

    /**
     * @gir-type Alias
     */
    type TemporaryAuthorizationClass = typeof TemporaryAuthorization;

    /**
     * @gir-type Alias
     */
    type UnixGroupClass = typeof UnixGroup;

    /**
     * @gir-type Alias
     */
    type UnixNetgroupClass = typeof UnixNetgroup;

    /**
     * @gir-type Alias
     */
    type UnixProcessClass = typeof UnixProcess;

    /**
     * @gir-type Alias
     */
    type UnixSessionClass = typeof UnixSession;

    /**
     * @gir-type Alias
     */
    type UnixUserClass = typeof UnixUser;

    namespace Identity {
        /**
         * Interface for implementing Identity.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Checks if `a` and `b` are equal, ie. represent the same identity.
             * 
             * This function can be used in e.g. `g_hash_table_new()`.
             * @param b A {@link Polkit.Identity}.
             * @virtual
             */
            vfunc_equal(b: Identity): boolean;

            /**
             * Gets a hash code for `identity` that can be used with e.g. `g_hash_table_new()`.
             * @virtual
             */
            vfunc_hash(): number;

            /**
             * Serializes `identity` to a string that can be used in
             * `polkit_identity_from_string()`.
             * @virtual
             */
            vfunc_to_string(): string;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface IdentityNamespace {
        $gtype: GObject.GType<Identity>;
        prototype: Identity;
        /**
        * Creates an object from `str` that implements the {@link Polkit.Identity}
        * interface.
        * @param str A string obtained from `polkit_identity_to_string()`.
        */
        from_string(str: string): (Identity | null);
    }
    /**
     * {@link Polkit.Identity} is an abstract type for representing one or more
     * identities.
     * @gir-type Interface
     */
    interface Identity extends GObject.Object, Identity.Interface {

        // Methods
        /**
         * Checks if `a` and `b` are equal, ie. represent the same identity.
         * 
         * This function can be used in e.g. `g_hash_table_new()`.
         * @param b A {@link Polkit.Identity}.
         * @returns `true` if `a` and `b` are equal, `false` otherwise.
         */
        equal(b: Identity): boolean;

        /**
         * Gets a hash code for `identity` that can be used with e.g. `g_hash_table_new()`.
         * @returns A hash code.
         */
        hash(): number;

        /**
         * Serializes `identity` to a string that can be used in
         * `polkit_identity_from_string()`.
         * @returns A string representing `identity`. Free with `g_free()`.
         */
        to_string(): string;
    }


    export const Identity: IdentityNamespace & {
        new (): Identity; // This allows `obj instanceof Identity`
    };

    namespace Subject {
        /**
         * Interface for implementing Subject.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Checks if `a` and `b` are equal, ie. represent the same subject.
             * However, avoid calling `polkit_subject_equal()` to compare two processes;
             * for more information see the {@link Polkit.UnixProcess} documentation.
             * 
             * This function can be used in e.g. `g_hash_table_new()`.
             * @param b A {@link Polkit.Subject}.
             * @virtual
             */
            vfunc_equal(b: Subject): boolean;

            /**
             * Asynchronously checks if `subject` exists.
             * 
             * When the operation is finished, `callback` will be invoked in the
             * <link linkend="g-main-context-push-thread-default">thread-default
             * main loop</link> of the thread you are calling this method
             * from. You can then call `polkit_subject_exists_finish()` to get the
             * result of the operation.
             * @param cancellable A {@link Gio.Cancellable} or `null`.
             * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied
             * @virtual
             */
            vfunc_exists(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

            /**
             * Finishes checking whether a subject exists.
             * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `polkit_subject_exists()`.
             * @virtual
             */
            vfunc_exists_finish(res: Gio.AsyncResult): boolean;

            /**
             * Checks if `subject` exists.
             * 
             * This is a synchronous blocking call - the calling thread is blocked
             * until a reply is received. See `polkit_subject_exists()` for the
             * asynchronous version.
             * @param cancellable A {@link Gio.Cancellable} or `null`.
             * @virtual
             */
            vfunc_exists_sync(cancellable: (Gio.Cancellable | null)): boolean;

            /**
             * Gets a hash code for `subject` that can be used with e.g. `g_hash_table_new()`.
             * @virtual
             */
            vfunc_hash(): number;

            /**
             * Serializes `subject` to a string that can be used in
             * `polkit_subject_from_string()`.
             * @virtual
             */
            vfunc_to_string(): string;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface SubjectNamespace {
        $gtype: GObject.GType<Subject>;
        prototype: Subject;
        /**
        * Creates an object from `str` that implements the {@link Polkit.Subject}
        * interface.
        * @param str A string obtained from `polkit_subject_to_string()`.
        */
        from_string(str: string): Subject;
    }
    /**
     * {@link Polkit.Subject} is an abstract type for representing one or more
     * processes.
     * @gir-type Interface
     */
    interface Subject extends GObject.Object, Subject.Interface {

        // Methods
        /**
         * Checks if `a` and `b` are equal, ie. represent the same subject.
         * However, avoid calling `polkit_subject_equal()` to compare two processes;
         * for more information see the {@link Polkit.UnixProcess} documentation.
         * 
         * This function can be used in e.g. `g_hash_table_new()`.
         * @param b A {@link Polkit.Subject}.
         * @returns `true` if `a` and `b` are equal, `false` otherwise.
         */
        equal(b: Subject): boolean;

        /**
         * Asynchronously checks if `subject` exists.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call `polkit_subject_exists_finish()` to get the
         * result of the operation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        exists(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Asynchronously checks if `subject` exists.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call `polkit_subject_exists_finish()` to get the
         * result of the operation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        exists(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously checks if `subject` exists.
         * 
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call `polkit_subject_exists_finish()` to get the
         * result of the operation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        exists(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes checking whether a subject exists.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `polkit_subject_exists()`.
         * @returns `true` if the subject exists, `false` if not or `error` is set.
         */
        exists_finish(res: Gio.AsyncResult): boolean;

        /**
         * Checks if `subject` exists.
         * 
         * This is a synchronous blocking call - the calling thread is blocked
         * until a reply is received. See `polkit_subject_exists()` for the
         * asynchronous version.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the subject exists, `false` if not or `error` is set.
         */
        exists_sync(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Gets a hash code for `subject` that can be used with e.g. `g_hash_table_new()`.
         * @returns A hash code.
         */
        hash(): number;

        /**
         * Serializes `subject` to a string that can be used in
         * `polkit_subject_from_string()`.
         * @returns A string representing `subject`. Free with `g_free()`.
         */
        to_string(): string;
    }


    export const Subject: SubjectNamespace & {
        new (): Subject; // This allows `obj instanceof Subject`
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

export default Polkit;

// END
