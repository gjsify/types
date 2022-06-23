// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Polkit-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Polkit {

/**
 * Possible error when using PolicyKit.
 */
enum Error {
    /**
     * The operation failed.
     */
    FAILED,
    /**
     * The operation was cancelled.
     */
    CANCELLED,
    /**
     * Operation is not supported.
     */
    NOT_SUPPORTED,
    /**
     * Not authorized to perform operation.
     */
    NOT_AUTHORIZED,
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
/**
 * Flags describing features supported by the Authority implementation.
 * @bitfield 
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
 * @bitfield 
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
function errorQuark(): GLib.Quark
/**
 * Creates an object from `str` that implements the #PolkitIdentity
 * interface.
 * @param str A string obtained from polkit_identity_to_string().
 */
function identityFromString(str: string): Identity | null
function implicitAuthorizationFromString(string: string, outImplicitAuthorization: ImplicitAuthorization): boolean
function implicitAuthorizationToString(implicitAuthorization: ImplicitAuthorization): string
/**
 * Creates an object from `str` that implements the #PolkitSubject
 * interface.
 * @param str A string obtained from polkit_subject_to_string().
 */
function subjectFromString(str: string): Subject
interface Identity_ConstructProps extends GObject.Object_ConstructProps {
}

interface Identity {

    // Owm methods of Polkit-1.0.Polkit.Identity

    /**
     * Checks if `a` and `b` are equal, ie. represent the same identity.
     * 
     * This function can be used in e.g. g_hash_table_new().
     * @param b A #PolkitIdentity.
     */
    equal(b: Identity): boolean
    /**
     * Gets a hash code for `identity` that can be used with e.g. g_hash_table_new().
     */
    hash(): number
    /**
     * Serializes `identity` to a string that can be used in
     * polkit_identity_from_string().
     */
    toString(): string

    // Class property signals of Polkit-1.0.Polkit.Identity

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #PolkitIdentity is an abstract type for representing one or more
 * identities.
 * @interface 
 */
class Identity extends GObject.Object {

    // Own properties of Polkit-1.0.Polkit.Identity

    static name: string
    static $gtype: GObject.GType<Identity>

    // Constructors of Polkit-1.0.Polkit.Identity

    constructor(config?: Identity_ConstructProps) 
    _init(config?: Identity_ConstructProps): void
    /**
     * Creates an object from `str` that implements the #PolkitIdentity
     * interface.
     * @param str A string obtained from polkit_identity_to_string().
     */
    static fromString(str: string): Identity | null
}

interface Subject_ConstructProps extends GObject.Object_ConstructProps {
}

interface Subject {

    // Owm methods of Polkit-1.0.Polkit.Subject

    /**
     * Checks if `a` and `b` are equal, ie. represent the same subject.
     * However, avoid calling polkit_subject_equal() to compare two processes;
     * for more information see the `PolkitUnixProcess` documentation.
     * 
     * This function can be used in e.g. g_hash_table_new().
     * @param b A #PolkitSubject.
     */
    equal(b: Subject): boolean
    /**
     * Asynchronously checks if `subject` exists.
     * 
     * When the operation is finished, `callback` will be invoked in the
     * <link linkend="g-main-context-push-thread-default">thread-default
     * main loop</link> of the thread you are calling this method
     * from. You can then call polkit_subject_exists_finish() to get the
     * result of the operation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied
     */
    exists(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes checking whether a subject exists.
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to polkit_subject_exists().
     */
    existsFinish(res: Gio.AsyncResult): boolean
    /**
     * Checks if `subject` exists.
     * 
     * This is a synchronous blocking call - the calling thread is blocked
     * until a reply is received. See polkit_subject_exists() for the
     * asynchronous version.
     * @param cancellable A #GCancellable or %NULL.
     */
    existsSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Gets a hash code for `subject` that can be used with e.g. g_hash_table_new().
     */
    hash(): number
    /**
     * Serializes `subject` to a string that can be used in
     * polkit_subject_from_string().
     */
    toString(): string

    // Class property signals of Polkit-1.0.Polkit.Subject

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #PolkitSubject is an abstract type for representing one or more
 * processes.
 * @interface 
 */
class Subject extends GObject.Object {

    // Own properties of Polkit-1.0.Polkit.Subject

    static name: string
    static $gtype: GObject.GType<Subject>

    // Constructors of Polkit-1.0.Polkit.Subject

    constructor(config?: Subject_ConstructProps) 
    _init(config?: Subject_ConstructProps): void
    /**
     * Creates an object from `str` that implements the #PolkitSubject
     * interface.
     * @param str A string obtained from polkit_subject_to_string().
     */
    static fromString(str: string): Subject
}

interface ActionDescription_ConstructProps extends GObject.Object_ConstructProps {
}

interface ActionDescription {

    // Owm methods of Polkit-1.0.Polkit.ActionDescription

    /**
     * Gets the action id for `action_description`.
     */
    getActionId(): string
    /**
     * Get the value of the annotation with `key`.
     * @param key An annotation key.
     */
    getAnnotation(key: string): string | null
    /**
     * Gets the keys of annotations defined in `action_description`.
     */
    getAnnotationKeys(): string[]
    /**
     * Gets the description used for `action_description`.
     */
    getDescription(): string
    /**
     * Gets the icon name for `action_description,` if any.
     */
    getIconName(): string
    /**
     * Gets the implicit authorization for `action_description` used for
     * subjects in active sessions on a local console.
     */
    getImplicitActive(): ImplicitAuthorization
    /**
     * Gets the implicit authorization for `action_description` used for
     * any subject.
     */
    getImplicitAny(): ImplicitAuthorization
    /**
     * Gets the implicit authorization for `action_description` used for
     * subjects in inactive sessions on a local console.
     */
    getImplicitInactive(): ImplicitAuthorization
    /**
     * Gets the message used for `action_description`.
     */
    getMessage(): string
    /**
     * Gets the vendor name for `action_description,` if any.
     */
    getVendorName(): string
    /**
     * Gets the vendor URL for `action_description,` if any.
     */
    getVendorUrl(): string

    // Class property signals of Polkit-1.0.Polkit.ActionDescription

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Object used to encapsulate a registered action.
 * @class 
 */
class ActionDescription extends GObject.Object {

    // Own properties of Polkit-1.0.Polkit.ActionDescription

    static name: string
    static $gtype: GObject.GType<ActionDescription>

    // Constructors of Polkit-1.0.Polkit.ActionDescription

    constructor(config?: ActionDescription_ConstructProps) 
    _init(config?: ActionDescription_ConstructProps): void
}

interface Authority_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.Initable_ConstructProps, GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `changed`
 */
interface Authority_ChangedSignalCallback {
    (): void
}

interface Authority extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of Polkit-1.0.Polkit.Authority

    /**
     * The features of the currently used Authority backend.
     */
    readonly backendFeatures: AuthorityFeatures
    /**
     * The name of the currently used Authority backend.
     */
    readonly backendName: string
    readonly backendVersion: string
    /**
     * The unique name of the owner of the org.freedesktop.PolicyKit1
     * D-Bus service or %NULL if there is no owner. Connect to the
     * #GObject::notify signal to track changes to this property.
     */
    readonly owner: string

    // Owm methods of Polkit-1.0.Polkit.Authority

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
     * polkit_authority_authentication_agent_response_finish() to get the
     * result of the operation.
     * @param cookie The cookie passed to the authentication agent from the authority.
     * @param identity The identity that was authenticated.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    authenticationAgentResponse(cookie: string, identity: Identity, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes providing response from an authentication agent.
     * @param res A #GAsyncResult obtained from the callback.
     */
    authenticationAgentResponseFinish(res: Gio.AsyncResult): boolean
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
     */
    authenticationAgentResponseSync(cookie: string, identity: Identity, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously checks if `subject` is authorized to perform the action represented
     * by `action_id`.
     * 
     * Note that %POLKIT_CHECK_AUTHORIZATION_FLAGS_ALLOW_USER_INTERACTION
     * <emphasis>SHOULD</emphasis> be passed <emphasis>ONLY</emphasis> if
     * the event that triggered the authorization check is stemming from
     * an user action, e.g. the user pressing a button or attaching a
     * device.
     * 
     * When the operation is finished, `callback` will be invoked in the
     * <link linkend="g-main-context-push-thread-default">thread-default
     * main loop</link> of the thread you are calling this method
     * from. You can then call
     * polkit_authority_check_authorization_finish() to get the result of
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
     * @param subject A #PolkitSubject.
     * @param actionId The action to check for.
     * @param details Details about the action or %NULL.
     * @param flags A set of #PolkitCheckAuthorizationFlags.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    checkAuthorization(subject: Subject, actionId: string, details: Details | null, flags: CheckAuthorizationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes checking if a subject is authorized for an action.
     * @param res A #GAsyncResult obtained from the callback.
     */
    checkAuthorizationFinish(res: Gio.AsyncResult): AuthorizationResult
    /**
     * Checks if `subject` is authorized to perform the action represented
     * by `action_id`.
     * 
     * Note that %POLKIT_CHECK_AUTHORIZATION_FLAGS_ALLOW_USER_INTERACTION
     * <emphasis>SHOULD</emphasis> be passed <emphasis>ONLY</emphasis> if
     * the event that triggered the authorization check is stemming from
     * an user action, e.g. the user pressing a button or attaching a
     * device.
     * 
     * Note the calling thread is blocked until a reply is received. You
     * should therefore <emphasis>NEVER</emphasis> do this from a GUI
     * thread or a daemon service thread when using the
     * %POLKIT_CHECK_AUTHORIZATION_FLAGS_ALLOW_USER_INTERACTION flag. This
     * is because it may potentially take minutes (or even hours) for the
     * operation to complete because it involves waiting for the user to
     * authenticate.
     * 
     * Known keys in `details` include <literal>polkit.message</literal>
     * and <literal>polkit.gettext_domain</literal> that can be used to
     * override the message shown to the user. See the documentation for
     * the <link linkend="eggdbus-method-org.freedesktop.PolicyKit1.Authority.CheckAuthorization">D-Bus method</link> for more details.
     * @param subject A #PolkitSubject.
     * @param actionId The action to check for.
     * @param details Details about the action or %NULL.
     * @param flags A set of #PolkitCheckAuthorizationFlags.
     * @param cancellable A #GCancellable or %NULL.
     */
    checkAuthorizationSync(subject: Subject, actionId: string, details: Details | null, flags: CheckAuthorizationFlags, cancellable: Gio.Cancellable | null): AuthorizationResult
    /**
     * Asynchronously retrieves all registered actions.
     * 
     * When the operation is finished, `callback` will be invoked in the
     * <link linkend="g-main-context-push-thread-default">thread-default
     * main loop</link> of the thread you are calling this method
     * from. You can then call polkit_authority_enumerate_actions_finish()
     * to get the result of the operation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    enumerateActions(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes retrieving all registered actions.
     * @param res A #GAsyncResult obtained from the callback.
     */
    enumerateActionsFinish(res: Gio.AsyncResult): ActionDescription[]
    /**
     * Synchronously retrieves all registered actions - the calling thread
     * is blocked until a reply is received. See
     * polkit_authority_enumerate_actions() for the asynchronous version.
     * @param cancellable A #GCancellable or %NULL.
     */
    enumerateActionsSync(cancellable: Gio.Cancellable | null): ActionDescription[]
    /**
     * Asynchronously gets all temporary authorizations for `subject`.
     * 
     * When the operation is finished, `callback` will be invoked in the
     * <link linkend="g-main-context-push-thread-default">thread-default
     * main loop</link> of the thread you are calling this method
     * from. You can then call
     * polkit_authority_enumerate_temporary_authorizations_finish() to get
     * the result of the operation.
     * @param subject A #PolkitSubject, typically a #PolkitUnixSession.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    enumerateTemporaryAuthorizations(subject: Subject, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes retrieving all registered actions.
     * @param res A #GAsyncResult obtained from the callback.
     */
    enumerateTemporaryAuthorizationsFinish(res: Gio.AsyncResult): TemporaryAuthorization[]
    /**
     * Synchronousky gets all temporary authorizations for `subject`.
     * 
     * The calling thread is blocked until a reply is received. See
     * polkit_authority_enumerate_temporary_authorizations() for the
     * asynchronous version.
     * @param subject A #PolkitSubject, typically a #PolkitUnixSession.
     * @param cancellable A #GCancellable or %NULL.
     */
    enumerateTemporaryAuthorizationsSync(subject: Subject, cancellable: Gio.Cancellable | null): TemporaryAuthorization[]
    /**
     * Gets the features supported by the authority backend.
     */
    getBackendFeatures(): AuthorityFeatures
    /**
     * Gets the name of the authority backend.
     */
    getBackendName(): string
    /**
     * Gets the version of the authority backend.
     */
    getBackendVersion(): string
    /**
     * The unique name on the system message bus of the owner of the name
     * <literal>org.freedesktop.PolicyKit1</literal> or %NULL if no-one
     * currently owns the name. You may connect to the #GObject::notify
     * signal to track changes to the #PolkitAuthority:owner property.
     */
    getOwner(): string | null
    /**
     * Asynchronously registers an authentication agent.
     * 
     * Note that this should be called by the same effective UID which will be
     * the real UID using the #PolkitAgentSession API or otherwise calling
     * polkit_authority_authentication_agent_response().
     * 
     * When the operation is finished, `callback` will be invoked in the
     * <link linkend="g-main-context-push-thread-default">thread-default
     * main loop</link> of the thread you are calling this method
     * from. You can then call
     * polkit_authority_register_authentication_agent_finish() to get the
     * result of the operation.
     * @param subject The subject the authentication agent is for, typically a #PolkitUnixSession object.
     * @param locale The locale of the authentication agent.
     * @param objectPath The object path for the authentication agent.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    registerAuthenticationAgent(subject: Subject, locale: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes registering an authentication agent.
     * @param res A #GAsyncResult obtained from the callback.
     */
    registerAuthenticationAgentFinish(res: Gio.AsyncResult): boolean
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
     * @param objectPath The object path for the authentication agent.
     * @param cancellable A #GCancellable or %NULL.
     */
    registerAuthenticationAgentSync(subject: Subject, locale: string, objectPath: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously registers an authentication agent.
     * 
     * Note that this should be called by the same effective UID which will be
     * the real UID using the #PolkitAgentSession API or otherwise calling
     * polkit_authority_authentication_agent_response().
     * 
     * When the operation is finished, `callback` will be invoked in the
     * <link linkend="g-main-context-push-thread-default">thread-default
     * main loop</link> of the thread you are calling this method
     * from. You can then call
     * polkit_authority_register_authentication_agent_with_options_finish() to get the
     * result of the operation.
     * @param subject The subject the authentication agent is for, typically a #PolkitUnixSession object.
     * @param locale The locale of the authentication agent.
     * @param objectPath The object path for the authentication agent.
     * @param options A #GVariant with options or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    registerAuthenticationAgentWithOptions(subject: Subject, locale: string, objectPath: string, options: GLib.Variant | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes registering an authentication agent.
     * @param res A #GAsyncResult obtained from the callback.
     */
    registerAuthenticationAgentWithOptionsFinish(res: Gio.AsyncResult): boolean
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
     * @param objectPath The object path for the authentication agent.
     * @param options A #GVariant with options or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     */
    registerAuthenticationAgentWithOptionsSync(subject: Subject, locale: string, objectPath: string, options: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously revoke a temporary authorization.
     * 
     * When the operation is finished, `callback` will be invoked in the
     * <link linkend="g-main-context-push-thread-default">thread-default
     * main loop</link> of the thread you are calling this method
     * from. You can then call
     * polkit_authority_revoke_temporary_authorization_by_id_finish() to
     * get the result of the operation.
     * @param id The opaque identifier for the temporary authorization.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    revokeTemporaryAuthorizationById(id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes revoking a temporary authorization by id.
     * @param res A #GAsyncResult obtained from the callback.
     */
    revokeTemporaryAuthorizationByIdFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously revokes a temporary authorization.
     * 
     * The calling thread is blocked until a reply is received. See
     * polkit_authority_revoke_temporary_authorization_by_id() for the
     * asynchronous version.
     * @param id The opaque identifier for the temporary authorization.
     * @param cancellable A #GCancellable or %NULL.
     */
    revokeTemporaryAuthorizationByIdSync(id: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously revokes all temporary authorizations for `subject`.
     * 
     * When the operation is finished, `callback` will be invoked in the
     * <link linkend="g-main-context-push-thread-default">thread-default
     * main loop</link> of the thread you are calling this method
     * from. You can then call
     * polkit_authority_revoke_temporary_authorizations_finish() to get
     * the result of the operation.
     * @param subject The subject to revoke authorizations from, typically a #PolkitUnixSession.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    revokeTemporaryAuthorizations(subject: Subject, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes revoking temporary authorizations.
     * @param res A #GAsyncResult obtained from the callback.
     */
    revokeTemporaryAuthorizationsFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously revokes all temporary authorization from `subject`.
     * 
     * The calling thread is blocked until a reply is received. See
     * polkit_authority_revoke_temporary_authorizations() for the
     * asynchronous version.
     * @param subject The subject to revoke authorizations from, typically a #PolkitUnixSession.
     * @param cancellable A #GCancellable or %NULL.
     */
    revokeTemporaryAuthorizationsSync(subject: Subject, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously unregisters an authentication agent.
     * 
     * When the operation is finished, `callback` will be invoked in the
     * <link linkend="g-main-context-push-thread-default">thread-default
     * main loop</link> of the thread you are calling this method
     * from. You can then call
     * polkit_authority_unregister_authentication_agent_finish() to get
     * the result of the operation.
     * @param subject The subject the authentication agent is for, typically a #PolkitUnixSession object.
     * @param objectPath The object path for the authentication agent.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    unregisterAuthenticationAgent(subject: Subject, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes unregistering an authentication agent.
     * @param res A #GAsyncResult obtained from the callback.
     */
    unregisterAuthenticationAgentFinish(res: Gio.AsyncResult): boolean
    /**
     * Unregisters an authentication agent. The calling thread is blocked
     * until a reply is received. See
     * polkit_authority_unregister_authentication_agent() for the
     * asynchronous version.
     * @param subject The subject the authentication agent is for, typically a #PolkitUnixSession object.
     * @param objectPath The object path for the authentication agent.
     * @param cancellable A #GCancellable or %NULL.
     */
    unregisterAuthenticationAgentSync(subject: Subject, objectPath: string, cancellable: Gio.Cancellable | null): boolean

    // Own signals of Polkit-1.0.Polkit.Authority

    connect(sigName: "changed", callback: Authority_ChangedSignalCallback): number
    on(sigName: "changed", callback: Authority_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Authority_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Authority_ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Polkit-1.0.Polkit.Authority

    connect(sigName: "notify::backend-features", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend-features", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend-features", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend-features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend-features", ...args: any[]): void
    connect(sigName: "notify::backend-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend-name", ...args: any[]): void
    connect(sigName: "notify::backend-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend-version", ...args: any[]): void
    connect(sigName: "notify::owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
 * @class 
 */
class Authority extends GObject.Object {

    // Own properties of Polkit-1.0.Polkit.Authority

    static name: string
    static $gtype: GObject.GType<Authority>

    // Constructors of Polkit-1.0.Polkit.Authority

    constructor(config?: Authority_ConstructProps) 
    _init(config?: Authority_ConstructProps): void
    /**
     * (deprecated)
     */
    static get(): Authority
    /**
     * Asynchronously gets a reference to the authority.
     * 
     * This is an asynchronous failable function. When the result is
     * ready, `callback` will be invoked in the <link
     * linkend="g-main-context-push-thread-default">thread-default main
     * loop</link> of the thread you are calling this method from and you
     * can use polkit_authority_get_finish() to get the result. See
     * polkit_authority_get_sync() for the synchronous version.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static getAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with polkit_authority_get_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to polkit_authority_get_async().
     */
    static getFinish(res: Gio.AsyncResult): Authority
    /**
     * Synchronously gets a reference to the authority.
     * 
     * This is a synchronous failable function - the calling thread is
     * blocked until a reply is received. See polkit_authority_get_async()
     * for the asynchronous version.
     * @param cancellable A #GCancellable or %NULL.
     */
    static getSync(cancellable: Gio.Cancellable | null): Authority
}

interface AuthorizationResult_ConstructProps extends GObject.Object_ConstructProps {
}

interface AuthorizationResult {

    // Owm methods of Polkit-1.0.Polkit.AuthorizationResult

    /**
     * Gets the details about the result.
     */
    getDetails(): Details | null
    /**
     * Gets whether the authentication request was dismissed / canceled by the user.
     * 
     * This method simply reads the value of the key/value pair in `details` with the
     * key <literal>polkit.dismissed</literal>.
     */
    getDismissed(): boolean
    /**
     * Gets whether the subject is authorized.
     * 
     * If the authorization is temporary, use polkit_authorization_result_get_temporary_authorization_id()
     * to get the opaque identifier for the temporary authorization.
     */
    getIsAuthorized(): boolean
    /**
     * Gets whether the subject is authorized if more information is provided.
     */
    getIsChallenge(): boolean
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
     * key <literal>polkit.retains_authorization_after_challenge</literal>.
     */
    getRetainsAuthorization(): boolean
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
     * key <literal>polkit.temporary_authorization_id</literal>.
     */
    getTemporaryAuthorizationId(): string | null

    // Class property signals of Polkit-1.0.Polkit.AuthorizationResult

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This class represents the result you get when checking for an authorization.
 * @class 
 */
class AuthorizationResult extends GObject.Object {

    // Own properties of Polkit-1.0.Polkit.AuthorizationResult

    static name: string
    static $gtype: GObject.GType<AuthorizationResult>

    // Constructors of Polkit-1.0.Polkit.AuthorizationResult

    constructor(config?: AuthorizationResult_ConstructProps) 
    /**
     * Creates a new #PolkitAuthorizationResult object.
     * @constructor 
     * @param isAuthorized Whether the subject is authorized.
     * @param isChallenge Whether the subject is authorized if more information is provided. Must be %FALSE unless `is_authorized` is %TRUE.
     * @param details Must be %NULL unless `is_authorized` is %TRUE
     */
    constructor(isAuthorized: boolean, isChallenge: boolean, details: Details | null) 
    /**
     * Creates a new #PolkitAuthorizationResult object.
     * @constructor 
     * @param isAuthorized Whether the subject is authorized.
     * @param isChallenge Whether the subject is authorized if more information is provided. Must be %FALSE unless `is_authorized` is %TRUE.
     * @param details Must be %NULL unless `is_authorized` is %TRUE
     */
    static new(isAuthorized: boolean, isChallenge: boolean, details: Details | null): AuthorizationResult
    _init(config?: AuthorizationResult_ConstructProps): void
}

interface Details_ConstructProps extends GObject.Object_ConstructProps {
}

interface Details {

    // Owm methods of Polkit-1.0.Polkit.Details

    /**
     * Gets a list of all keys on `details`.
     */
    getKeys(): string[] | null
    /**
     * Inserts a copy of `key` and `value` on `details`.
     * 
     * If `value` is %NULL, the key will be removed.
     * @param key A key.
     * @param value A value.
     */
    insert(key: string, value: string | null): void
    /**
     * Gets the value for `key` on `details`.
     * @param key A key.
     */
    lookup(key: string): string | null

    // Class property signals of Polkit-1.0.Polkit.Details

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * An object used for passing details around.
 * @class 
 */
class Details extends GObject.Object {

    // Own properties of Polkit-1.0.Polkit.Details

    static name: string
    static $gtype: GObject.GType<Details>

    // Constructors of Polkit-1.0.Polkit.Details

    constructor(config?: Details_ConstructProps) 
    /**
     * Creates a new #PolkitDetails object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #PolkitDetails object.
     * @constructor 
     */
    static new(): Details
    _init(config?: Details_ConstructProps): void
}

interface Permission_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.Initable_ConstructProps, Gio.Permission_ConstructProps {

    // Own constructor properties of Polkit-1.0.Polkit.Permission

    /**
     * The action identifier to use for the permission.
     */
    actionId?: string | null
    /**
     * The #PolkitSubject to use for the permission. If not set during
     * construction, it will be set to match the current process.
     */
    subject?: Subject | null
}

interface Permission extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of Polkit-1.0.Polkit.Permission

    /**
     * The action identifier to use for the permission.
     */
    readonly actionId: string
    /**
     * The #PolkitSubject to use for the permission. If not set during
     * construction, it will be set to match the current process.
     */
    readonly subject: Subject

    // Owm methods of Polkit-1.0.Polkit.Permission

    /**
     * Gets the PolicyKit action identifier used for `permission`.
     */
    getActionId(): string
    /**
     * Gets the subject used for `permission`.
     */
    getSubject(): Subject

    // Class property signals of Polkit-1.0.Polkit.Permission

    connect(sigName: "notify::action-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::action-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::action-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::action-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::action-id", ...args: any[]): void
    connect(sigName: "notify::subject", callback: (...args: any[]) => void): number
    on(sigName: "notify::subject", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subject", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subject", ...args: any[]): void
    connect(sigName: "notify::allowed", callback: (...args: any[]) => void): number
    on(sigName: "notify::allowed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allowed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allowed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allowed", ...args: any[]): void
    connect(sigName: "notify::can-acquire", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-acquire", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-acquire", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-acquire", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-acquire", ...args: any[]): void
    connect(sigName: "notify::can-release", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-release", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-release", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-release", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-release", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #PolkitPermission is a #GPermission implementation. It can be used
 * with e.g. #GtkLockButton. See the #GPermission documentation for
 * more information.
 * @class 
 */
class Permission extends Gio.Permission {

    // Own properties of Polkit-1.0.Polkit.Permission

    static name: string
    static $gtype: GObject.GType<Permission>

    // Constructors of Polkit-1.0.Polkit.Permission

    constructor(config?: Permission_ConstructProps) 
    /**
     * Finishes an operation started with polkit_permission_new().
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to polkit_permission_new().
     */
    static newFinish(res: Gio.AsyncResult): Permission
    /**
     * Creates a #GPermission instance for the PolicyKit action
     * `action_id`.
     * 
     * This is a synchronous failable constructor. See
     * polkit_permission_new() for the asynchronous version.
     * @constructor 
     * @param actionId The PolicyKit action identifier.
     * @param subject A #PolkitSubject or %NULL for the current process.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(actionId: string, subject: Subject | null, cancellable: Gio.Cancellable | null): Permission
    _init(config?: Permission_ConstructProps): void
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
     * @param actionId The PolicyKit action identifier.
     * @param subject A #PolkitSubject or %NULL for the current process.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(actionId: string, subject: Subject | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

interface SystemBusName_ConstructProps extends Subject_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Polkit-1.0.Polkit.SystemBusName

    /**
     * The unique name on the system message bus.
     */
    name?: string | null
}

interface SystemBusName extends Subject {

    // Own properties of Polkit-1.0.Polkit.SystemBusName

    /**
     * The unique name on the system message bus.
     */
    name: string

    // Owm methods of Polkit-1.0.Polkit.SystemBusName

    /**
     * Gets the unique system bus name for `system_bus_name`.
     */
    getName(): string
    /**
     * Synchronously gets a #PolkitUnixProcess object for `system_bus_name`
     * - the calling thread is blocked until a reply is received.
     * @param cancellable A #GCancellable or %NULL.
     */
    getProcessSync(cancellable: Gio.Cancellable | null): Subject | null
    /**
     * Synchronously gets a #PolkitUnixUser object for `system_bus_name;`
     * the calling thread is blocked until a reply is received.
     * @param cancellable A #GCancellable or %NULL.
     */
    getUserSync(cancellable: Gio.Cancellable | null): UnixUser | null
    /**
     * Sets the unique system bus name for `system_bus_name`.
     * @param name A unique system bus name.
     */
    setName(name: string): void

    // Class property signals of Polkit-1.0.Polkit.SystemBusName

    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * An object that represents a process owning a unique name on the system bus.
 * @class 
 */
class SystemBusName extends GObject.Object {

    // Own properties of Polkit-1.0.Polkit.SystemBusName

    static name: string
    static $gtype: GObject.GType<SystemBusName>

    // Constructors of Polkit-1.0.Polkit.SystemBusName

    constructor(config?: SystemBusName_ConstructProps) 
    _init(config?: SystemBusName_ConstructProps): void
    /**
     * Creates a new #PolkitSystemBusName for `name`.
     * @param name A unique system bus name.
     */
    static new(name: string): Subject
}

interface TemporaryAuthorization_ConstructProps extends GObject.Object_ConstructProps {
}

interface TemporaryAuthorization {

    // Owm methods of Polkit-1.0.Polkit.TemporaryAuthorization

    /**
     * Gets the action that `authorization` is for.
     */
    getActionId(): string
    /**
     * Gets the opaque identifier for `authorization`.
     */
    getId(): string
    /**
     * Gets the subject that `authorization` is for.
     */
    getSubject(): Subject
    /**
     * Gets the time when `authorization` will expire.
     * 
     * (Note that the PolicyKit daemon is using monotonic time internally
     * so the returned value may change if system time changes.)
     */
    getTimeExpires(): number
    /**
     * Gets the time when `authorization` was obtained.
     * 
     * (Note that the PolicyKit daemon is using monotonic time internally
     * so the returned value may change if system time changes.)
     */
    getTimeObtained(): number

    // Class property signals of Polkit-1.0.Polkit.TemporaryAuthorization

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Object used to describe a temporary authorization.
 * @class 
 */
class TemporaryAuthorization extends GObject.Object {

    // Own properties of Polkit-1.0.Polkit.TemporaryAuthorization

    static name: string
    static $gtype: GObject.GType<TemporaryAuthorization>

    // Constructors of Polkit-1.0.Polkit.TemporaryAuthorization

    constructor(config?: TemporaryAuthorization_ConstructProps) 
    _init(config?: TemporaryAuthorization_ConstructProps): void
}

interface UnixGroup_ConstructProps extends Identity_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Polkit-1.0.Polkit.UnixGroup

    /**
     * The UNIX group id.
     */
    gid?: number | null
}

interface UnixGroup extends Identity {

    // Own properties of Polkit-1.0.Polkit.UnixGroup

    /**
     * The UNIX group id.
     */
    gid: number

    // Owm methods of Polkit-1.0.Polkit.UnixGroup

    /**
     * Gets the UNIX group id for `group`.
     */
    getGid(): number
    /**
     * Sets `gid` for `group`.
     * @param gid A UNIX group id.
     */
    setGid(gid: number): void

    // Class property signals of Polkit-1.0.Polkit.UnixGroup

    connect(sigName: "notify::gid", callback: (...args: any[]) => void): number
    on(sigName: "notify::gid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * An object representing a group identity on a UNIX system.
 * @class 
 */
class UnixGroup extends GObject.Object {

    // Own properties of Polkit-1.0.Polkit.UnixGroup

    static name: string
    static $gtype: GObject.GType<UnixGroup>

    // Constructors of Polkit-1.0.Polkit.UnixGroup

    constructor(config?: UnixGroup_ConstructProps) 
    _init(config?: UnixGroup_ConstructProps): void
    /**
     * Creates a new #PolkitUnixGroup object for `gid`.
     * @param gid A UNIX group id.
     */
    static new(gid: number): Identity
    /**
     * Creates a new #PolkitUnixGroup object for a group with the group name
     * `name`.
     * @param name A UNIX group name.
     */
    static newForName(name: string): Identity
}

interface UnixNetgroup_ConstructProps extends Identity_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Polkit-1.0.Polkit.UnixNetgroup

    /**
     * The NIS netgroup name.
     */
    name?: string | null
}

interface UnixNetgroup extends Identity {

    // Own properties of Polkit-1.0.Polkit.UnixNetgroup

    /**
     * The NIS netgroup name.
     */
    name: string

    // Owm methods of Polkit-1.0.Polkit.UnixNetgroup

    /**
     * Gets the netgroup name for `group`.
     */
    getName(): string
    /**
     * Sets `name` for `group`.
     * @param name A netgroup name.
     */
    setName(name: string): void

    // Class property signals of Polkit-1.0.Polkit.UnixNetgroup

    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * An object representing a netgroup identity on a UNIX system.
 * @class 
 */
class UnixNetgroup extends GObject.Object {

    // Own properties of Polkit-1.0.Polkit.UnixNetgroup

    static name: string
    static $gtype: GObject.GType<UnixNetgroup>

    // Constructors of Polkit-1.0.Polkit.UnixNetgroup

    constructor(config?: UnixNetgroup_ConstructProps) 
    _init(config?: UnixNetgroup_ConstructProps): void
    /**
     * Creates a new #PolkitUnixNetgroup object for `name`.
     * @param name A netgroup name.
     */
    static new(name: string): Identity
}

interface UnixProcess_ConstructProps extends Subject_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Polkit-1.0.Polkit.UnixProcess

    /**
     * The UNIX process id.
     */
    pid?: number | null
    /**
     * The start time of the process.
     */
    startTime?: number | null
    /**
     * The UNIX user id of the process or -1 if unknown.
     * 
     * Note that this is the real user-id, not the effective user-id.
     */
    uid?: number | null
}

interface UnixProcess extends Subject {

    // Own properties of Polkit-1.0.Polkit.UnixProcess

    /**
     * The UNIX process id.
     */
    pid: number
    /**
     * The start time of the process.
     */
    startTime: number
    /**
     * The UNIX user id of the process or -1 if unknown.
     * 
     * Note that this is the real user-id, not the effective user-id.
     */
    uid: number

    // Owm methods of Polkit-1.0.Polkit.UnixProcess

    /**
     * (deprecated)
     */
    getOwner(): number
    /**
     * Gets the process id for `process`.
     */
    getPid(): number
    /**
     * Gets the start time of `process`.
     */
    getStartTime(): number
    /**
     * Gets the user id for `process`. Note that this is the real user-id,
     * not the effective user-id.
     * 
     * NOTE: The UID may change over time, so the returned value may not match the
     * current state of the underlying process; or the UID may have been set by
     * polkit_unix_process_new_for_owner() or polkit_unix_process_set_uid(),
     * in which case it may not correspond to the actual UID of the referenced
     * process at all (at any point in time).
     */
    getUid(): number
    /**
     * Sets `pid` for `process`.
     * @param pid A process id.
     */
    setPid(pid: number): void
    /**
     * Set the start time of `process`.
     * @param startTime The start time for `pid`.
     */
    setStartTime(startTime: number): void
    /**
     * Sets the (real, not effective) user id for `process`.
     * @param uid The user id to set for `process` or -1 to unset it.
     */
    setUid(uid: number): void

    // Class property signals of Polkit-1.0.Polkit.UnixProcess

    connect(sigName: "notify::pid", callback: (...args: any[]) => void): number
    on(sigName: "notify::pid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pid", ...args: any[]): void
    connect(sigName: "notify::start-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::start-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::start-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::start-time", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
 * @class 
 */
class UnixProcess extends GObject.Object {

    // Own properties of Polkit-1.0.Polkit.UnixProcess

    static name: string
    static $gtype: GObject.GType<UnixProcess>

    // Constructors of Polkit-1.0.Polkit.UnixProcess

    constructor(config?: UnixProcess_ConstructProps) 
    _init(config?: UnixProcess_ConstructProps): void
    /**
     * Creates a new #PolkitUnixProcess for `pid`.
     * 
     * The uid and start time of the process will be looked up in using
     * e.g. the <filename>/proc</filename> filesystem depending on the
     * platform in use.
     * @param pid The process id.
     */
    static new(pid: number): Subject
    /**
     * Creates a new #PolkitUnixProcess object for `pid,` `start_time` and `uid`.
     * @param pid The process id.
     * @param startTime The start time for `pid` or 0 to look it up in e.g. <filename>/proc</filename>.
     * @param uid The (real, not effective) uid of the owner of `pid` or -1 to look it up in e.g. <filename>/proc</filename>.
     */
    static newForOwner(pid: number, startTime: number, uid: number): Subject
    /**
     * Creates a new #PolkitUnixProcess object for `pid` and `start_time`.
     * 
     * The uid of the process will be looked up in using e.g. the
     * <filename>/proc</filename> filesystem depending on the platform in
     * use.
     * @param pid The process id.
     * @param startTime The start time for `pid`.
     */
    static newFull(pid: number, startTime: number): Subject
}

interface UnixSession_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.Initable_ConstructProps, Subject_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Polkit-1.0.Polkit.UnixSession

    /**
     * The UNIX process id to look up the session.
     */
    pid?: number | null
    /**
     * The UNIX session id.
     */
    sessionId?: string | null
}

interface UnixSession extends Gio.AsyncInitable, Gio.Initable, Subject {

    // Own properties of Polkit-1.0.Polkit.UnixSession

    /**
     * The UNIX process id to look up the session.
     */
    readonly pid: number
    /**
     * The UNIX session id.
     */
    sessionId: string

    // Owm methods of Polkit-1.0.Polkit.UnixSession

    /**
     * Gets the session id for `session`.
     */
    getSessionId(): string
    /**
     * Sets the session id for `session` to `session_id`.
     * @param sessionId The session id.
     */
    setSessionId(sessionId: string): void

    // Class property signals of Polkit-1.0.Polkit.UnixSession

    connect(sigName: "notify::pid", callback: (...args: any[]) => void): number
    on(sigName: "notify::pid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pid", ...args: any[]): void
    connect(sigName: "notify::session-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::session-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * An object that represents an user session.
 * 
 * The session id is an opaque string obtained from ConsoleKit.
 * @class 
 */
class UnixSession extends GObject.Object {

    // Own properties of Polkit-1.0.Polkit.UnixSession

    static name: string
    static $gtype: GObject.GType<UnixSession>

    // Constructors of Polkit-1.0.Polkit.UnixSession

    constructor(config?: UnixSession_ConstructProps) 
    _init(config?: UnixSession_ConstructProps): void
    /**
     * Creates a new #PolkitUnixSession for `session_id`.
     * @param sessionId The session id.
     */
    static new(sessionId: string): Subject
    /**
     * Asynchronously creates a new #PolkitUnixSession object for the
     * process with process id `pid`.
     * 
     * When the operation is finished, `callback` will be invoked in the
     * <link linkend="g-main-context-push-thread-default">thread-default
     * main loop</link> of the thread you are calling this method
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
    static newForProcess(pid: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes constructing a #PolkitSubject for a process id.
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to polkit_unix_session_new_for_process().
     */
    static newForProcessFinish(res: Gio.AsyncResult): Subject | null
    /**
     * Creates a new #PolkitUnixSession for the process with process id `pid`.
     * 
     * This is a synchronous call - the calling thread is blocked until a
     * reply is received. For the asynchronous version, see
     * polkit_unix_session_new_for_process().
     * @param pid The process id of the process to get the session for.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForProcessSync(pid: number, cancellable: Gio.Cancellable | null): Subject | null
}

interface UnixUser_ConstructProps extends Identity_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Polkit-1.0.Polkit.UnixUser

    /**
     * The UNIX user id.
     */
    uid?: number | null
}

interface UnixUser extends Identity {

    // Own properties of Polkit-1.0.Polkit.UnixUser

    /**
     * The UNIX user id.
     */
    uid: number

    // Owm methods of Polkit-1.0.Polkit.UnixUser

    /**
     * Get the user's name.
     */
    getName(): string | null
    /**
     * Gets the UNIX user id for `user`.
     */
    getUid(): number
    /**
     * Sets `uid` for `user`.
     * @param uid A UNIX user id.
     */
    setUid(uid: number): void

    // Class property signals of Polkit-1.0.Polkit.UnixUser

    connect(sigName: "notify::uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * An object representing a user identity on a UNIX system.
 * @class 
 */
class UnixUser extends GObject.Object {

    // Own properties of Polkit-1.0.Polkit.UnixUser

    static name: string
    static $gtype: GObject.GType<UnixUser>

    // Constructors of Polkit-1.0.Polkit.UnixUser

    constructor(config?: UnixUser_ConstructProps) 
    _init(config?: UnixUser_ConstructProps): void
    /**
     * Creates a new #PolkitUnixUser object for `uid`.
     * @param uid A UNIX user id.
     */
    static new(uid: number): Identity
    /**
     * Creates a new #PolkitUnixUser object for a user with the user name
     * `name`.
     * @param name A UNIX user name.
     */
    static newForName(name: string): Identity | null
}

interface ActionDescriptionClass {
}

abstract class ActionDescriptionClass {

    // Own properties of Polkit-1.0.Polkit.ActionDescriptionClass

    static name: string
}

interface AuthorityClass {
}

abstract class AuthorityClass {

    // Own properties of Polkit-1.0.Polkit.AuthorityClass

    static name: string
}

interface AuthorizationResultClass {
}

abstract class AuthorizationResultClass {

    // Own properties of Polkit-1.0.Polkit.AuthorizationResultClass

    static name: string
}

interface DetailsClass {
}

abstract class DetailsClass {

    // Own properties of Polkit-1.0.Polkit.DetailsClass

    static name: string
}

interface IdentityIface {

    // Own fields of Polkit-1.0.Polkit.IdentityIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
    hash: (identity: Identity) => number
    equal: (a: Identity, b: Identity) => boolean
    toString: (identity: Identity) => string
}

/**
 * An interface for identities.
 * @record 
 */
abstract class IdentityIface {

    // Own properties of Polkit-1.0.Polkit.IdentityIface

    static name: string
}

interface SubjectIface {

    // Own fields of Polkit-1.0.Polkit.SubjectIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
    hash: (subject: Subject) => number
    equal: (a: Subject, b: Subject) => boolean
    toString: (subject: Subject) => string
    exists: (subject: Subject, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    existsFinish: (subject: Subject, res: Gio.AsyncResult) => boolean
    existsSync: (subject: Subject, cancellable: Gio.Cancellable | null) => boolean
}

/**
 * An interface for subjects.
 * @record 
 */
abstract class SubjectIface {

    // Own properties of Polkit-1.0.Polkit.SubjectIface

    static name: string
}

interface SystemBusNameClass {
}

abstract class SystemBusNameClass {

    // Own properties of Polkit-1.0.Polkit.SystemBusNameClass

    static name: string
}

interface TemporaryAuthorizationClass {
}

abstract class TemporaryAuthorizationClass {

    // Own properties of Polkit-1.0.Polkit.TemporaryAuthorizationClass

    static name: string
}

interface UnixGroupClass {
}

abstract class UnixGroupClass {

    // Own properties of Polkit-1.0.Polkit.UnixGroupClass

    static name: string
}

interface UnixNetgroupClass {
}

abstract class UnixNetgroupClass {

    // Own properties of Polkit-1.0.Polkit.UnixNetgroupClass

    static name: string
}

interface UnixProcessClass {
}

abstract class UnixProcessClass {

    // Own properties of Polkit-1.0.Polkit.UnixProcessClass

    static name: string
}

interface UnixSessionClass {
}

abstract class UnixSessionClass {

    // Own properties of Polkit-1.0.Polkit.UnixSessionClass

    static name: string
}

interface UnixUserClass {
}

abstract class UnixUserClass {

    // Own properties of Polkit-1.0.Polkit.UnixUserClass

    static name: string
}

}
export default Polkit;