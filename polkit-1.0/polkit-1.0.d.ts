/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './polkit-1.0-ambient.d.ts';
import './polkit-1.0-import.d.ts';
/**
 * Polkit-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Polkit {
    /**
     * Possible error when using PolicyKit.
     */
    class Error extends GLib.Error {
        // Own fields of Polkit-1.0.Error

        /**
         * The operation failed.
         */
        FAILED: number;
        /**
         * The operation was cancelled.
         */
        CANCELLED: number;
        /**
         * Operation is not supported.
         */
        NOT_SUPPORTED: number;
        /**
         * Not authorized to perform operation.
         */
        NOT_AUTHORIZED: number;

        // Constructors of Polkit-1.0.Error

        constructor(options: { message: string; code: number });

        // Owm methods of Polkit-1.0.Error

        static quark(): GLib.Quark;
    }

    /**
     * Possible implicit authorizations.
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
     * Creates an object from `str` that implements the #PolkitIdentity
     * interface.
     * @param str A string obtained from polkit_identity_to_string().
     * @returns A #PolkitIdentity or %NULL if @error is set. Free with g_object_unref().
     */
    function identity_from_string(str: string): Identity | null;
    function implicit_authorization_from_string(string: string): boolean;
    function implicit_authorization_to_string(implicit_authorization: ImplicitAuthorization): string;
    /**
     * Creates an object from `str` that implements the #PolkitSubject
     * interface.
     * @param str A string obtained from polkit_subject_to_string().
     * @returns A #PolkitSubject or %NULL if @error is set. Free with g_object_unref().
     */
    function subject_from_string(str: string): Subject;
    /**
     * Flags describing features supported by the Authority implementation.
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
     * Possible flags when checking authorizations.
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
    module ActionDescription {
        // Constructor properties interface
    }

    /**
     * Object used to encapsulate a registered action.
     */
    class ActionDescription extends GObject.Object {
        // Owm methods of Polkit-1.0.ActionDescription

        /**
         * Gets the action id for `action_description`.
         * @returns A string owned by @action_description. Do not free.
         */
        get_action_id(): string;
        /**
         * Get the value of the annotation with `key`.
         * @param key An annotation key.
         * @returns %NULL if there is no annoation with @key, otherwise the annotation value owned by @action_description. Do not free.
         */
        get_annotation(key: string): string | null;
        /**
         * Gets the keys of annotations defined in `action_description`.
         * @returns The annotation keys owned by @action_description. Do not free.
         */
        get_annotation_keys(): string[];
        /**
         * Gets the description used for `action_description`.
         * @returns A string owned by @action_description. Do not free.
         */
        get_description(): string;
        /**
         * Gets the icon name for `action_description,` if any.
         * @returns A string owned by @action_description. Do not free.
         */
        get_icon_name(): string;
        /**
         * Gets the implicit authorization for `action_description` used for
         * subjects in active sessions on a local console.
         * @returns A value from the #PolkitImplicitAuthorization enumeration.
         */
        get_implicit_active(): ImplicitAuthorization;
        /**
         * Gets the implicit authorization for `action_description` used for
         * any subject.
         * @returns A value from the #PolkitImplicitAuthorization enumeration.
         */
        get_implicit_any(): ImplicitAuthorization;
        /**
         * Gets the implicit authorization for `action_description` used for
         * subjects in inactive sessions on a local console.
         * @returns A value from the #PolkitImplicitAuthorization enumeration.
         */
        get_implicit_inactive(): ImplicitAuthorization;
        /**
         * Gets the message used for `action_description`.
         * @returns A string owned by @action_description. Do not free.
         */
        get_message(): string;
        /**
         * Gets the vendor name for `action_description,` if any.
         * @returns A string owned by @action_description. Do not free.
         */
        get_vendor_name(): string;
        /**
         * Gets the vendor URL for `action_description,` if any.
         * @returns A string owned by @action_description. Do not free.
         */
        get_vendor_url(): string;
    }

    module Authority {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * #PolkitAuthority is used for checking whether a given subject is
     * authorized to perform a given action. Typically privileged system
     * daemons or suid helpers will use this when handling requests from
     * untrusted clients.
     *
     * User sessions can register an authentication agent with the
     * authority. This is used for requests from untrusted clients where
     * system policy requires that the user needs to acknowledge (through
     * proving he is the user or the administrator) a given action. See
     * #PolkitAgentListener and #PolkitAgentSession for details.
     */
    class Authority extends GObject.Object {
        // Own properties of Polkit-1.0.Authority

        /**
         * The features of the currently used Authority backend.
         */
        readonly backend_features: AuthorityFeatures;
        /**
         * The features of the currently used Authority backend.
         */
        readonly backendFeatures: AuthorityFeatures;
        /**
         * The name of the currently used Authority backend.
         */
        readonly backend_name: string;
        /**
         * The name of the currently used Authority backend.
         */
        readonly backendName: string;
        readonly backend_version: string;
        readonly backendVersion: string;
        /**
         * The unique name of the owner of the org.freedesktop.PolicyKit1
         * D-Bus service or %NULL if there is no owner. Connect to the
         * #GObject::notify signal to track changes to this property.
         */
        readonly owner: string;

        // Owm methods of Polkit-1.0.Authority

        /**
         * (deprecated)
         */
        static get(): Authority;
        /**
         * Asynchronously gets a reference to the authority.
         *
         * This is an asynchronous failable function. When the result is
         * ready, `callback` will be invoked in the &lt;link
         * linkend="g-main-context-push-thread-default"&gt;thread-default main
         * loop&lt;/link&gt; of the thread you are calling this method from and you
         * can use polkit_authority_get_finish() to get the result. See
         * polkit_authority_get_sync() for the synchronous version.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static get_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Authority> | null,
        ): void;
        /**
         * Finishes an operation started with polkit_authority_get_async().
         * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to polkit_authority_get_async().
         */
        static get_finish(res: Gio.AsyncResult): Authority;
        /**
         * Synchronously gets a reference to the authority.
         *
         * This is a synchronous failable function - the calling thread is
         * blocked until a reply is received. See polkit_authority_get_async()
         * for the asynchronous version.
         * @param cancellable A #GCancellable or %NULL.
         */
        static get_sync(cancellable?: Gio.Cancellable | null): Authority;

        // Owm methods of Polkit-1.0.Authority

        /**
         * Asynchronously provide response that `identity` successfully authenticated
         * for the authentication request identified by `cookie`.
         *
         * This function is only used by the privileged bits of an authentication agent.
         * It will fail if the caller is not sufficiently privileged (typically uid 0).
         *
         * When the operation is finished, `callback` will be invoked in the
         * &lt;link linkend="g-main-context-push-thread-default"&gt;thread-default
         * main loop&lt;/link&gt; of the thread you are calling this method
         * from. You can then call
         * polkit_authority_authentication_agent_response_finish() to get the
         * result of the operation.
         * @param cookie The cookie passed to the authentication agent from the authority.
         * @param identity The identity that was authenticated.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        authentication_agent_response(
            cookie: string,
            identity: Identity,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes providing response from an authentication agent.
         * @param res A #GAsyncResult obtained from the callback.
         * @returns %TRUE if @authority acknowledged the call, %FALSE if @error is set.
         */
        authentication_agent_response_finish(res: Gio.AsyncResult): boolean;
        /**
         * Provide response that `identity` successfully authenticated for the
         * authentication request identified by `cookie`. See polkit_authority_authentication_agent_response()
         * for limitations on who is allowed is to call this method.
         *
         * The calling thread is blocked until a reply is received. See
         * polkit_authority_authentication_agent_response() for the
         * asynchronous version.
         * @param cookie The cookie passed to the authentication agent from the authority.
         * @param identity The identity that was authenticated.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if @authority acknowledged the call, %FALSE if @error is set.
         */
        authentication_agent_response_sync(
            cookie: string,
            identity: Identity,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously checks if `subject` is authorized to perform the action represented
         * by `action_id`.
         *
         * Note that %POLKIT_CHECK_AUTHORIZATION_FLAGS_ALLOW_USER_INTERACTION
         * &lt;emphasis&gt;SHOULD&lt;/emphasis&gt; be passed &lt;emphasis&gt;ONLY&lt;/emphasis&gt; if
         * the event that triggered the authorization check is stemming from
         * an user action, e.g. the user pressing a button or attaching a
         * device.
         *
         * When the operation is finished, `callback` will be invoked in the
         * &lt;link linkend="g-main-context-push-thread-default"&gt;thread-default
         * main loop&lt;/link&gt; of the thread you are calling this method
         * from. You can then call
         * polkit_authority_check_authorization_finish() to get the result of
         * the operation.
         *
         * Known keys in `details` include &lt;literal&gt;polkit.message&lt;/literal&gt;
         * and &lt;literal&gt;polkit.gettext_domain&lt;/literal&gt; that can be used to
         * override the message shown to the user. See the documentation for
         * the &lt;link linkend="eggdbus-method-org.freedesktop.PolicyKit1.Authority.CheckAuthorization"&gt;D-Bus method&lt;/link&gt; for more details.
         *
         * If `details` is non-empty then the request will fail with
         * #POLKIT_ERROR_FAILED unless the process doing the check itsef is
         * sufficiently authorized (e.g. running as uid 0).
         * @param subject A #PolkitSubject.
         * @param action_id The action to check for.
         * @param details Details about the action or %NULL.
         * @param flags A set of #PolkitCheckAuthorizationFlags.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        check_authorization(
            subject: Subject,
            action_id: string,
            details: Details | null,
            flags: CheckAuthorizationFlags,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes checking if a subject is authorized for an action.
         * @param res A #GAsyncResult obtained from the callback.
         * @returns A #PolkitAuthorizationResult or %NULL if @error is set. Free with g_object_unref().
         */
        check_authorization_finish(res: Gio.AsyncResult): AuthorizationResult;
        /**
         * Checks if `subject` is authorized to perform the action represented
         * by `action_id`.
         *
         * Note that %POLKIT_CHECK_AUTHORIZATION_FLAGS_ALLOW_USER_INTERACTION
         * &lt;emphasis&gt;SHOULD&lt;/emphasis&gt; be passed &lt;emphasis&gt;ONLY&lt;/emphasis&gt; if
         * the event that triggered the authorization check is stemming from
         * an user action, e.g. the user pressing a button or attaching a
         * device.
         *
         * Note the calling thread is blocked until a reply is received. You
         * should therefore &lt;emphasis&gt;NEVER&lt;/emphasis&gt; do this from a GUI
         * thread or a daemon service thread when using the
         * %POLKIT_CHECK_AUTHORIZATION_FLAGS_ALLOW_USER_INTERACTION flag. This
         * is because it may potentially take minutes (or even hours) for the
         * operation to complete because it involves waiting for the user to
         * authenticate.
         *
         * Known keys in `details` include &lt;literal&gt;polkit.message&lt;/literal&gt;
         * and &lt;literal&gt;polkit.gettext_domain&lt;/literal&gt; that can be used to
         * override the message shown to the user. See the documentation for
         * the &lt;link linkend="eggdbus-method-org.freedesktop.PolicyKit1.Authority.CheckAuthorization"&gt;D-Bus method&lt;/link&gt; for more details.
         * @param subject A #PolkitSubject.
         * @param action_id The action to check for.
         * @param details Details about the action or %NULL.
         * @param flags A set of #PolkitCheckAuthorizationFlags.
         * @param cancellable A #GCancellable or %NULL.
         * @returns A #PolkitAuthorizationResult or %NULL if @error is set. Free with g_object_unref().
         */
        check_authorization_sync(
            subject: Subject,
            action_id: string,
            details: Details | null,
            flags: CheckAuthorizationFlags,
            cancellable?: Gio.Cancellable | null,
        ): AuthorizationResult;
        /**
         * Asynchronously retrieves all registered actions.
         *
         * When the operation is finished, `callback` will be invoked in the
         * &lt;link linkend="g-main-context-push-thread-default"&gt;thread-default
         * main loop&lt;/link&gt; of the thread you are calling this method
         * from. You can then call polkit_authority_enumerate_actions_finish()
         * to get the result of the operation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        enumerate_actions(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes retrieving all registered actions.
         * @param res A #GAsyncResult obtained from the callback.
         * @returns A list of #PolkitActionDescription objects or %NULL if @error is set. The returned list should be freed with g_list_free() after each element have been freed with g_object_unref().
         */
        enumerate_actions_finish(res: Gio.AsyncResult): ActionDescription[];
        /**
         * Synchronously retrieves all registered actions - the calling thread
         * is blocked until a reply is received. See
         * polkit_authority_enumerate_actions() for the asynchronous version.
         * @param cancellable A #GCancellable or %NULL.
         * @returns A list of #PolkitActionDescription or %NULL if @error is set. The returned list should be freed with g_list_free() after each element have been freed with g_object_unref().
         */
        enumerate_actions_sync(cancellable?: Gio.Cancellable | null): ActionDescription[];
        /**
         * Asynchronously gets all temporary authorizations for `subject`.
         *
         * When the operation is finished, `callback` will be invoked in the
         * &lt;link linkend="g-main-context-push-thread-default"&gt;thread-default
         * main loop&lt;/link&gt; of the thread you are calling this method
         * from. You can then call
         * polkit_authority_enumerate_temporary_authorizations_finish() to get
         * the result of the operation.
         * @param subject A #PolkitSubject, typically a #PolkitUnixSession.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        enumerate_temporary_authorizations(
            subject: Subject,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes retrieving all registered actions.
         * @param res A #GAsyncResult obtained from the callback.
         * @returns A list of #PolkitTemporaryAuthorization objects or %NULL if @error is set. The returned list should be freed with g_list_free() after each element have been freed with g_object_unref().
         */
        enumerate_temporary_authorizations_finish(res: Gio.AsyncResult): TemporaryAuthorization[];
        /**
         * Synchronousky gets all temporary authorizations for `subject`.
         *
         * The calling thread is blocked until a reply is received. See
         * polkit_authority_enumerate_temporary_authorizations() for the
         * asynchronous version.
         * @param subject A #PolkitSubject, typically a #PolkitUnixSession.
         * @param cancellable A #GCancellable or %NULL.
         * @returns A list of #PolkitTemporaryAuthorization objects or %NULL if @error is set. The returned list should be freed with g_list_free() after each element have been freed with g_object_unref().
         */
        enumerate_temporary_authorizations_sync(
            subject: Subject,
            cancellable?: Gio.Cancellable | null,
        ): TemporaryAuthorization[];
        /**
         * Gets the features supported by the authority backend.
         * @returns Flags from #PolkitAuthorityFeatures.
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
         * &lt;literal&gt;org.freedesktop.PolicyKit1&lt;/literal&gt; or %NULL if no-one
         * currently owns the name. You may connect to the #GObject::notify
         * signal to track changes to the #PolkitAuthority:owner property.
         * @returns %NULL or a string that should be freed with g_free().
         */
        get_owner(): string | null;
        /**
         * Asynchronously registers an authentication agent.
         *
         * Note that this should be called by the same effective UID which will be
         * the real UID using the #PolkitAgentSession API or otherwise calling
         * polkit_authority_authentication_agent_response().
         *
         * When the operation is finished, `callback` will be invoked in the
         * &lt;link linkend="g-main-context-push-thread-default"&gt;thread-default
         * main loop&lt;/link&gt; of the thread you are calling this method
         * from. You can then call
         * polkit_authority_register_authentication_agent_finish() to get the
         * result of the operation.
         * @param subject The subject the authentication agent is for, typically a #PolkitUnixSession object.
         * @param locale The locale of the authentication agent.
         * @param object_path The object path for the authentication agent.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        register_authentication_agent(
            subject: Subject,
            locale: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes registering an authentication agent.
         * @param res A #GAsyncResult obtained from the callback.
         * @returns %TRUE if the authentication agent was successfully registered, %FALSE if @error is set.
         */
        register_authentication_agent_finish(res: Gio.AsyncResult): boolean;
        /**
         * Registers an authentication agent.
         *
         * Note that this should be called by the same effective UID which will be
         * the real UID using the #PolkitAgentSession API or otherwise calling
         * polkit_authority_authentication_agent_response().
         *
         * The calling thread is blocked
         * until a reply is received. See
         * polkit_authority_register_authentication_agent() for the
         * asynchronous version.
         * @param subject The subject the authentication agent is for, typically a #PolkitUnixSession object.
         * @param locale The locale of the authentication agent.
         * @param object_path The object path for the authentication agent.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the authentication agent was successfully registered, %FALSE if @error is set.
         */
        register_authentication_agent_sync(
            subject: Subject,
            locale: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously registers an authentication agent.
         *
         * Note that this should be called by the same effective UID which will be
         * the real UID using the #PolkitAgentSession API or otherwise calling
         * polkit_authority_authentication_agent_response().
         *
         * When the operation is finished, `callback` will be invoked in the
         * &lt;link linkend="g-main-context-push-thread-default"&gt;thread-default
         * main loop&lt;/link&gt; of the thread you are calling this method
         * from. You can then call
         * polkit_authority_register_authentication_agent_with_options_finish() to get the
         * result of the operation.
         * @param subject The subject the authentication agent is for, typically a #PolkitUnixSession object.
         * @param locale The locale of the authentication agent.
         * @param object_path The object path for the authentication agent.
         * @param options A #GVariant with options or %NULL.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        register_authentication_agent_with_options(
            subject: Subject,
            locale: string,
            object_path: string,
            options?: GLib.Variant | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes registering an authentication agent.
         * @param res A #GAsyncResult obtained from the callback.
         * @returns %TRUE if the authentication agent was successfully registered, %FALSE if @error is set.
         */
        register_authentication_agent_with_options_finish(res: Gio.AsyncResult): boolean;
        /**
         * Registers an authentication agent.
         *
         * Note that this should be called by the same effective UID which will be
         * the real UID using the #PolkitAgentSession API or otherwise calling
         * polkit_authority_authentication_agent_response().
         *
         * The calling thread is blocked
         * until a reply is received. See
         * polkit_authority_register_authentication_agent_with_options() for the
         * asynchronous version.
         * @param subject The subject the authentication agent is for, typically a #PolkitUnixSession object.
         * @param locale The locale of the authentication agent.
         * @param object_path The object path for the authentication agent.
         * @param options A #GVariant with options or %NULL.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the authentication agent was successfully registered, %FALSE if @error is set.
         */
        register_authentication_agent_with_options_sync(
            subject: Subject,
            locale: string,
            object_path: string,
            options?: GLib.Variant | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously revoke a temporary authorization.
         *
         * When the operation is finished, `callback` will be invoked in the
         * &lt;link linkend="g-main-context-push-thread-default"&gt;thread-default
         * main loop&lt;/link&gt; of the thread you are calling this method
         * from. You can then call
         * polkit_authority_revoke_temporary_authorization_by_id_finish() to
         * get the result of the operation.
         * @param id The opaque identifier for the temporary authorization.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        revoke_temporary_authorization_by_id(
            id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes revoking a temporary authorization by id.
         * @param res A #GAsyncResult obtained from the callback.
         * @returns %TRUE if the temporary authorization was revoked, %FALSE if error is set.
         */
        revoke_temporary_authorization_by_id_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously revokes a temporary authorization.
         *
         * The calling thread is blocked until a reply is received. See
         * polkit_authority_revoke_temporary_authorization_by_id() for the
         * asynchronous version.
         * @param id The opaque identifier for the temporary authorization.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the temporary authorization was revoked, %FALSE if error is set.
         */
        revoke_temporary_authorization_by_id_sync(id: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously revokes all temporary authorizations for `subject`.
         *
         * When the operation is finished, `callback` will be invoked in the
         * &lt;link linkend="g-main-context-push-thread-default"&gt;thread-default
         * main loop&lt;/link&gt; of the thread you are calling this method
         * from. You can then call
         * polkit_authority_revoke_temporary_authorizations_finish() to get
         * the result of the operation.
         * @param subject The subject to revoke authorizations from, typically a #PolkitUnixSession.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        revoke_temporary_authorizations(
            subject: Subject,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes revoking temporary authorizations.
         * @param res A #GAsyncResult obtained from the callback.
         * @returns %TRUE if all the temporary authorizations was revoked, %FALSE if error is set.
         */
        revoke_temporary_authorizations_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously revokes all temporary authorization from `subject`.
         *
         * The calling thread is blocked until a reply is received. See
         * polkit_authority_revoke_temporary_authorizations() for the
         * asynchronous version.
         * @param subject The subject to revoke authorizations from, typically a #PolkitUnixSession.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the temporary authorization was revoked, %FALSE if error is set.
         */
        revoke_temporary_authorizations_sync(subject: Subject, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously unregisters an authentication agent.
         *
         * When the operation is finished, `callback` will be invoked in the
         * &lt;link linkend="g-main-context-push-thread-default"&gt;thread-default
         * main loop&lt;/link&gt; of the thread you are calling this method
         * from. You can then call
         * polkit_authority_unregister_authentication_agent_finish() to get
         * the result of the operation.
         * @param subject The subject the authentication agent is for, typically a #PolkitUnixSession object.
         * @param object_path The object path for the authentication agent.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        unregister_authentication_agent(
            subject: Subject,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes unregistering an authentication agent.
         * @param res A #GAsyncResult obtained from the callback.
         * @returns %TRUE if the authentication agent was successfully unregistered, %FALSE if @error is set.
         */
        unregister_authentication_agent_finish(res: Gio.AsyncResult): boolean;
        /**
         * Unregisters an authentication agent. The calling thread is blocked
         * until a reply is received. See
         * polkit_authority_unregister_authentication_agent() for the
         * asynchronous version.
         * @param subject The subject the authentication agent is for, typically a #PolkitUnixSession object.
         * @param object_path The object path for the authentication agent.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the authentication agent was successfully unregistered, %FALSE if @error is set.
         */
        unregister_authentication_agent_sync(
            subject: Subject,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
    }

    module AuthorizationResult {
        // Constructor properties interface
    }

    /**
     * This class represents the result you get when checking for an authorization.
     */
    class AuthorizationResult extends GObject.Object {
        // Constructors of Polkit-1.0.AuthorizationResult

        static ['new'](is_authorized: boolean, is_challenge: boolean, details?: Details | null): AuthorizationResult;

        // Owm methods of Polkit-1.0.AuthorizationResult

        /**
         * Gets the details about the result.
         * @returns A #PolkitDetails object or %NULL if there are no details. This object is owned by @result and should not be freed by the caller.
         */
        get_details(): Details | null;
        /**
         * Gets whether the authentication request was dismissed / canceled by the user.
         *
         * This method simply reads the value of the key/value pair in `details` with the
         * key &lt;literal&gt;polkit.dismissed&lt;/literal&gt;.
         * @returns %TRUE if the authentication request was dismissed, %FALSE otherwise.
         */
        get_dismissed(): boolean;
        /**
         * Gets whether the subject is authorized.
         *
         * If the authorization is temporary, use polkit_authorization_result_get_temporary_authorization_id()
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
         * polkit_authorization_result_get_is_challenge()), e.g. when the subject is not already authorized (cf.
         * polkit_authorization_result_get_is_authorized()).
         *
         * If the subject is already authorized, use polkit_authorization_result_get_temporary_authorization_id()
         * to check if the authorization is temporary.
         *
         * This method simply reads the value of the key/value pair in `details` with the
         * key &lt;literal&gt;polkit.retains_authorization_after_challenge&lt;/literal&gt;.
         * @returns %TRUE if the authorization is or will be temporary.
         */
        get_retains_authorization(): boolean;
        /**
         * Gets the opaque temporary authorization id for `result` if `result` indicates the
         * subject is authorized and the authorization is temporary rather than one-shot or
         * permanent.
         *
         * You can use this string together with the result from
         * polkit_authority_enumerate_temporary_authorizations() to get more details
         * about the temporary authorization or polkit_authority_revoke_temporary_authorization_by_id()
         * to revoke the temporary authorization.
         *
         * If the subject is not authorized, use polkit_authorization_result_get_retains_authorization()
         * to check if the authorization will be retained if obtained via authentication.
         *
         * This method simply reads the value of the key/value pair in `details` with the
         * key &lt;literal&gt;polkit.temporary_authorization_id&lt;/literal&gt;.
         * @returns The opaque temporary authorization id for    @result or %NULL if not available. Do not free this string, it    is owned by @result.
         */
        get_temporary_authorization_id(): string | null;
    }

    module Details {
        // Constructor properties interface
    }

    /**
     * An object used for passing details around.
     */
    class Details extends GObject.Object {
        // Constructors of Polkit-1.0.Details

        static ['new'](): Details;

        // Owm methods of Polkit-1.0.Details

        /**
         * Gets a list of all keys on `details`.
         * @returns %NULL if there are no keys otherwise an array of strings that should be freed with g_strfreev().
         */
        get_keys(): string[] | null;
        /**
         * Inserts a copy of `key` and `value` on `details`.
         *
         * If `value` is %NULL, the key will be removed.
         * @param key A key.
         * @param value A value.
         */
        insert(key: string, value?: string | null): void;
        /**
         * Gets the value for `key` on `details`.
         * @param key A key.
         * @returns %NULL if there is no value for @key, otherwise a string owned by @details.
         */
        lookup(key: string): string | null;
    }

    module Permission {
        // Constructor properties interface
    }

    /**
     * #PolkitPermission is a #GPermission implementation. It can be used
     * with e.g. #GtkLockButton. See the #GPermission documentation for
     * more information.
     */
    class Permission extends Gio.Permission {
        // Own properties of Polkit-1.0.Permission

        /**
         * The action identifier to use for the permission.
         */
        action_id: string;
        /**
         * The action identifier to use for the permission.
         */
        actionId: string;
        /**
         * The #PolkitSubject to use for the permission. If not set during
         * construction, it will be set to match the current process.
         */
        subject: Subject;

        // Constructors of Polkit-1.0.Permission

        static new_finish(res: Gio.AsyncResult): Permission;

        static new_sync(action_id: string, subject?: Subject | null, cancellable?: Gio.Cancellable | null): Permission;

        // Owm methods of Polkit-1.0.Permission

        /**
         * Creates a #GPermission instance for the PolicyKit action
         * `action_id`.
         *
         * When the operation is finished, `callback` will be invoked. You can
         * then call polkit_permission_new_finish() to get the result of the
         * operation.
         *
         * This is a asynchronous failable constructor. See
         * polkit_permission_new_sync() for the synchronous version.
         * @param action_id The PolicyKit action identifier.
         * @param subject A #PolkitSubject or %NULL for the current process.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            action_id: string,
            subject?: Subject | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Permission> | null,
        ): void;

        // Owm methods of Polkit-1.0.Permission

        /**
         * Gets the PolicyKit action identifier used for `permission`.
         * @returns A string owned by @permission. Do not free.
         */
        get_action_id(): string;
        /**
         * Gets the subject used for `permission`.
         * @returns An object owned by @permission. Do not free.
         */
        get_subject(): Subject;
    }

    module SystemBusName {
        // Constructor properties interface
    }

    /**
     * An object that represents a process owning a unique name on the system bus.
     */
    class SystemBusName extends GObject.Object {
        // Own properties of Polkit-1.0.SystemBusName

        /**
         * The unique name on the system message bus.
         */
        name: string;

        // Owm methods of Polkit-1.0.SystemBusName

        /**
         * Creates a new #PolkitSystemBusName for `name`.
         * @param name A unique system bus name.
         */
        static new(name: string): Subject;

        // Owm methods of Polkit-1.0.SystemBusName

        /**
         * Gets the unique system bus name for `system_bus_name`.
         * @returns The unique system bus name for @system_bus_name. Do not free, this string is owned by @system_bus_name.
         */
        get_name(): string;
        /**
         * Synchronously gets a #PolkitUnixProcess object for `system_bus_name`
         * - the calling thread is blocked until a reply is received.
         * @param cancellable A #GCancellable or %NULL.
         * @returns A #PolkitUnixProcess object or %NULL if @error is set.
         */
        get_process_sync(cancellable?: Gio.Cancellable | null): Subject | null;
        /**
         * Synchronously gets a #PolkitUnixUser object for `system_bus_name;`
         * the calling thread is blocked until a reply is received.
         * @param cancellable A #GCancellable or %NULL.
         * @returns A #PolkitUnixUser object or %NULL if @error is set.
         */
        get_user_sync(cancellable?: Gio.Cancellable | null): UnixUser | null;
        /**
         * Sets the unique system bus name for `system_bus_name`.
         * @param name A unique system bus name.
         */
        set_name(name: string): void;
    }

    module TemporaryAuthorization {
        // Constructor properties interface
    }

    /**
     * Object used to describe a temporary authorization.
     */
    class TemporaryAuthorization extends GObject.Object {
        // Owm methods of Polkit-1.0.TemporaryAuthorization

        /**
         * Gets the action that `authorization` is for.
         * @returns A string owned by @authorization. Do not free.
         */
        get_action_id(): string;
        /**
         * Gets the opaque identifier for `authorization`.
         * @returns A string owned by @authorization. Do not free.
         */
        get_id(): string;
        /**
         * Gets the subject that `authorization` is for.
         * @returns A #PolkitSubject, free with g_object_unref().
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

    module UnixGroup {
        // Constructor properties interface
    }

    /**
     * An object representing a group identity on a UNIX system.
     */
    class UnixGroup extends GObject.Object {
        // Own properties of Polkit-1.0.UnixGroup

        /**
         * The UNIX group id.
         */
        gid: number;

        // Owm methods of Polkit-1.0.UnixGroup

        /**
         * Creates a new #PolkitUnixGroup object for `gid`.
         * @param gid A UNIX group id.
         */
        static new(gid: number): Identity;
        /**
         * Creates a new #PolkitUnixGroup object for a group with the group name
         * `name`.
         * @param name A UNIX group name.
         */
        static new_for_name(name: string): Identity | null;

        // Owm methods of Polkit-1.0.UnixGroup

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
    }

    module UnixNetgroup {
        // Constructor properties interface
    }

    /**
     * An object representing a netgroup identity on a UNIX system.
     */
    class UnixNetgroup extends GObject.Object {
        // Own properties of Polkit-1.0.UnixNetgroup

        /**
         * The NIS netgroup name.
         */
        name: string;

        // Owm methods of Polkit-1.0.UnixNetgroup

        /**
         * Creates a new #PolkitUnixNetgroup object for `name`.
         * @param name A netgroup name.
         */
        static new(name: string): Identity;

        // Owm methods of Polkit-1.0.UnixNetgroup

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
    }

    module UnixProcess {
        // Constructor properties interface
    }

    /**
     * An object for representing a UNIX process.  NOTE: This object as
     * designed is now known broken; a mechanism to exploit a delay in
     * start time in the Linux kernel was identified.  Avoid
     * calling polkit_subject_equal() to compare two processes.
     *
     * To uniquely identify processes, both the process id and the start
     * time of the process (a monotonic increasing value representing the
     * time since the kernel was started) is used.
     *
     * NOTE: This object stores, and provides access to, the real UID of the
     * process.  That value can change over time (with set*uid*(2) and exec*(2)).
     * Checks whether an operation is allowed need to take care to use the UID
     * value as of the time when the operation was made (or, following the open()
     * privilege check model, when the connection making the operation possible
     * was initiated).  That is usually done by initializing this with
     * polkit_unix_process_new_for_owner() with trusted data.
     */
    class UnixProcess extends GObject.Object {
        // Own properties of Polkit-1.0.UnixProcess

        /**
         * The UNIX process id.
         */
        pid: number;
        /**
         * The start time of the process.
         */
        start_time: number;
        /**
         * The start time of the process.
         */
        startTime: number;
        /**
         * The UNIX user id of the process or -1 if unknown.
         *
         * Note that this is the real user-id, not the effective user-id.
         */
        uid: number;

        // Owm methods of Polkit-1.0.UnixProcess

        /**
         * Creates a new #PolkitUnixProcess for `pid`.
         *
         * The uid and start time of the process will be looked up in using
         * e.g. the &lt;filename&gt;/proc&lt;/filename&gt; filesystem depending on the
         * platform in use.
         * @param pid The process id.
         */
        static new(pid: number): Subject;
        /**
         * Creates a new #PolkitUnixProcess object for `pid,` `start_time` and `uid`.
         * @param pid The process id.
         * @param start_time The start time for @pid or 0 to look it up in e.g. &lt;filename&gt;/proc&lt;/filename&gt;.
         * @param uid The (real, not effective) uid of the owner of @pid or -1 to look it up in e.g. &lt;filename&gt;/proc&lt;/filename&gt;.
         */
        static new_for_owner(pid: number, start_time: number, uid: number): Subject;
        /**
         * Creates a new #PolkitUnixProcess object for `pid` and `start_time`.
         *
         * The uid of the process will be looked up in using e.g. the
         * &lt;filename&gt;/proc&lt;/filename&gt; filesystem depending on the platform in
         * use.
         * @param pid The process id.
         * @param start_time The start time for @pid.
         */
        static new_full(pid: number, start_time: number): Subject;

        // Owm methods of Polkit-1.0.UnixProcess

        /**
         * (deprecated)
         */
        get_owner(): number;
        /**
         * Gets the process id for `process`.
         * @returns The process id for @process.
         */
        get_pid(): number;
        /**
         * Gets the start time of `process`.
         * @returns The start time of @process.
         */
        get_start_time(): number;
        /**
         * Gets the user id for `process`. Note that this is the real user-id,
         * not the effective user-id.
         *
         * NOTE: The UID may change over time, so the returned value may not match the
         * current state of the underlying process; or the UID may have been set by
         * polkit_unix_process_new_for_owner() or polkit_unix_process_set_uid(),
         * in which case it may not correspond to the actual UID of the referenced
         * process at all (at any point in time).
         * @returns The user id for @process or -1 if unknown.
         */
        get_uid(): number;
        /**
         * Sets `pid` for `process`.
         * @param pid A process id.
         */
        set_pid(pid: number): void;
        /**
         * Set the start time of `process`.
         * @param start_time The start time for @pid.
         */
        set_start_time(start_time: number): void;
        /**
         * Sets the (real, not effective) user id for `process`.
         * @param uid The user id to set for @process or -1 to unset it.
         */
        set_uid(uid: number): void;
    }

    module UnixSession {
        // Constructor properties interface
    }

    /**
     * An object that represents an user session.
     *
     * The session id is an opaque string obtained from ConsoleKit.
     */
    class UnixSession extends GObject.Object {
        // Own properties of Polkit-1.0.UnixSession

        /**
         * The UNIX process id to look up the session.
         */
        pid: number;
        /**
         * The UNIX session id.
         */
        session_id: string;
        /**
         * The UNIX session id.
         */
        sessionId: string;

        // Owm methods of Polkit-1.0.UnixSession

        /**
         * Creates a new #PolkitUnixSession for `session_id`.
         * @param session_id The session id.
         */
        static new(session_id: string): Subject;
        /**
         * Asynchronously creates a new #PolkitUnixSession object for the
         * process with process id `pid`.
         *
         * When the operation is finished, `callback` will be invoked in the
         * &lt;link linkend="g-main-context-push-thread-default"&gt;thread-default
         * main loop&lt;/link&gt; of the thread you are calling this method
         * from. You can then call
         * polkit_unix_session_new_for_process_finish() to get the result of
         * the operation.
         *
         * This method constructs the object asynchronously, for the synchronous and blocking version
         * use polkit_unix_session_new_for_process_sync().
         * @param pid The process id of the process to get the session for.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied
         */
        static new_for_process(
            pid: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<UnixSession> | null,
        ): void;
        /**
         * Finishes constructing a #PolkitSubject for a process id.
         * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to polkit_unix_session_new_for_process().
         */
        static new_for_process_finish(res: Gio.AsyncResult): Subject | null;
        /**
         * Creates a new #PolkitUnixSession for the process with process id `pid`.
         *
         * This is a synchronous call - the calling thread is blocked until a
         * reply is received. For the asynchronous version, see
         * polkit_unix_session_new_for_process().
         * @param pid The process id of the process to get the session for.
         * @param cancellable A #GCancellable or %NULL.
         */
        static new_for_process_sync(pid: number, cancellable?: Gio.Cancellable | null): Subject | null;

        // Owm methods of Polkit-1.0.UnixSession

        /**
         * Gets the session id for `session`.
         * @returns The session id for @session. Do not free this string, it is owned by @session.
         */
        get_session_id(): string;
        /**
         * Sets the session id for `session` to `session_id`.
         * @param session_id The session id.
         */
        set_session_id(session_id: string): void;
    }

    module UnixUser {
        // Constructor properties interface
    }

    /**
     * An object representing a user identity on a UNIX system.
     */
    class UnixUser extends GObject.Object {
        // Own properties of Polkit-1.0.UnixUser

        /**
         * The UNIX user id.
         */
        uid: number;

        // Owm methods of Polkit-1.0.UnixUser

        /**
         * Creates a new #PolkitUnixUser object for `uid`.
         * @param uid A UNIX user id.
         */
        static new(uid: number): Identity;
        /**
         * Creates a new #PolkitUnixUser object for a user with the user name
         * `name`.
         * @param name A UNIX user name.
         */
        static new_for_name(name: string): Identity | null;

        // Owm methods of Polkit-1.0.UnixUser

        /**
         * Get the user's name.
         * @returns User name string or %NULL if user uid not found.
         */
        get_name(): string | null;
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
    }

    class ActionDescriptionClass {}

    class AuthorityClass {}

    class AuthorizationResultClass {}

    class DetailsClass {}

    /**
     * An interface for identities.
     */
    class IdentityIface {}

    /**
     * An interface for subjects.
     */
    class SubjectIface {}

    class SystemBusNameClass {}

    class TemporaryAuthorizationClass {}

    class UnixGroupClass {}

    class UnixNetgroupClass {}

    class UnixProcessClass {}

    class UnixSessionClass {}

    class UnixUserClass {}

    interface Identity {
        // Owm methods of Polkit-1.0.Identity

        /**
         * Checks if `a` and `b` are equal, ie. represent the same identity.
         *
         * This function can be used in e.g. g_hash_table_new().
         * @param b A #PolkitIdentity.
         * @returns %TRUE if @a and @b are equal, %FALSE otherwise.
         */
        equal(b: Identity): boolean;
        /**
         * Gets a hash code for `identity` that can be used with e.g. g_hash_table_new().
         * @returns A hash code.
         */
        hash(): number;
        /**
         * Serializes `identity` to a string that can be used in
         * polkit_identity_from_string().
         * @returns A string representing @identity. Free with g_free().
         */
        to_string(): string;

        // Own virtual methods of Polkit-1.0.Identity

        /**
         * Checks if `a` and `b` are equal, ie. represent the same identity.
         *
         * This function can be used in e.g. g_hash_table_new().
         * @param b A #PolkitIdentity.
         */
        vfunc_equal(b: Identity): boolean;
        /**
         * Gets a hash code for `identity` that can be used with e.g. g_hash_table_new().
         */
        vfunc_hash(): number;
        /**
         * Serializes `identity` to a string that can be used in
         * polkit_identity_from_string().
         */
        vfunc_to_string(): string;
    }

    interface Subject {
        // Owm methods of Polkit-1.0.Subject

        /**
         * Checks if `a` and `b` are equal, ie. represent the same subject.
         * However, avoid calling polkit_subject_equal() to compare two processes;
         * for more information see the `PolkitUnixProcess` documentation.
         *
         * This function can be used in e.g. g_hash_table_new().
         * @param b A #PolkitSubject.
         * @returns %TRUE if @a and @b are equal, %FALSE otherwise.
         */
        equal(b: Subject): boolean;
        /**
         * Asynchronously checks if `subject` exists.
         *
         * When the operation is finished, `callback` will be invoked in the
         * &lt;link linkend="g-main-context-push-thread-default"&gt;thread-default
         * main loop&lt;/link&gt; of the thread you are calling this method
         * from. You can then call polkit_subject_exists_finish() to get the
         * result of the operation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied
         */
        exists(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes checking whether a subject exists.
         * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to polkit_subject_exists().
         * @returns %TRUE if the subject exists, %FALSE if not or @error is set.
         */
        exists_finish(res: Gio.AsyncResult): boolean;
        /**
         * Checks if `subject` exists.
         *
         * This is a synchronous blocking call - the calling thread is blocked
         * until a reply is received. See polkit_subject_exists() for the
         * asynchronous version.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the subject exists, %FALSE if not or @error is set.
         */
        exists_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Gets a hash code for `subject` that can be used with e.g. g_hash_table_new().
         * @returns A hash code.
         */
        hash(): number;
        /**
         * Serializes `subject` to a string that can be used in
         * polkit_subject_from_string().
         * @returns A string representing @subject. Free with g_free().
         */
        to_string(): string;

        // Own virtual methods of Polkit-1.0.Subject

        /**
         * Checks if `a` and `b` are equal, ie. represent the same subject.
         * However, avoid calling polkit_subject_equal() to compare two processes;
         * for more information see the `PolkitUnixProcess` documentation.
         *
         * This function can be used in e.g. g_hash_table_new().
         * @param b A #PolkitSubject.
         */
        vfunc_equal(b: Subject): boolean;
        /**
         * Asynchronously checks if `subject` exists.
         *
         * When the operation is finished, `callback` will be invoked in the
         * &lt;link linkend="g-main-context-push-thread-default"&gt;thread-default
         * main loop&lt;/link&gt; of the thread you are calling this method
         * from. You can then call polkit_subject_exists_finish() to get the
         * result of the operation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied
         */
        vfunc_exists(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes checking whether a subject exists.
         * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to polkit_subject_exists().
         */
        vfunc_exists_finish(res: Gio.AsyncResult): boolean;
        /**
         * Checks if `subject` exists.
         *
         * This is a synchronous blocking call - the calling thread is blocked
         * until a reply is received. See polkit_subject_exists() for the
         * asynchronous version.
         * @param cancellable A #GCancellable or %NULL.
         */
        vfunc_exists_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Gets a hash code for `subject` that can be used with e.g. g_hash_table_new().
         */
        vfunc_hash(): number;
        /**
         * Serializes `subject` to a string that can be used in
         * polkit_subject_from_string().
         */
        vfunc_to_string(): string;
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

export default Polkit;
// END
