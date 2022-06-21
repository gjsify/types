// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * AccountsService-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace AccountsService {

/**
 * Type of user account
 */
enum UserAccountType {
    /**
     * Normal non-administrative user
     */
    STANDARD,
    /**
     * Administrative user
     */
    ADMINISTRATOR,
}
/**
 * Various error codes returned by the accounts service.
 */
enum UserManagerError {
    /**
     * Generic failure
     */
    FAILED,
    /**
     * The user already exists
     */
    USER_EXISTS,
    /**
     * The user does not exist
     */
    USER_DOES_NOT_EXIST,
    /**
     * Permission denied
     */
    PERMISSION_DENIED,
    /**
     * Operation not supported
     */
    NOT_SUPPORTED,
}
/**
 * Mode for setting the user's password.
 */
enum UserPasswordMode {
    /**
     * Password set normally
     */
    REGULAR,
    /**
     * Password will be chosen at next login
     */
    SET_AT_LOGIN,
    /**
     * No password set
     */
    NONE,
}
function user_manager_error_quark(): GLib.Quark
interface User_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `changed`
 */
interface User_ChangedSignalCallback {
    ($obj: User): void
}

/**
 * Signal callback interface for `sessions-changed`
 */
interface User_SessionsChangedSignalCallback {
    ($obj: User): void
}

interface User {

    // Own properties of AccountsService-1.0.AccountsService.User

    readonly account_type: number
    readonly automatic_login: boolean
    readonly email: string
    readonly home_directory: string
    readonly icon_file: string
    readonly is_loaded: boolean
    /**
     * The user’s locale, in the format
     * `language[_territory][.codeset][`modifier]``, where `language` is an
     * ISO 639 language code, `territory` is an ISO 3166 country code, and
     * `codeset` is a character set or encoding identifier like `ISO-8859-1`
     * or `UTF-8`; as specified by [`setlocale(3)`](man:setlocale(3)).
     * 
     * The locale may be the empty string, which means the user is using the
     * system default locale.
     * 
     * The property may be %NULL if it wasn’t possible to load it from the
     * daemon.
     */
    readonly language: string
    readonly local_account: boolean
    readonly location: string
    readonly locked: boolean
    readonly login_frequency: number
    readonly login_history: GLib.Variant
    readonly login_time: number
    readonly nonexistent: boolean
    readonly password_hint: string
    readonly password_mode: number
    readonly real_name: string
    readonly shell: string
    readonly system_account: boolean
    readonly uid: number
    readonly user_name: string
    readonly x_session: string

    // Owm methods of AccountsService-1.0.AccountsService.User

    /**
     * Organize the user by login frequency and names.
     * @param user2 a user
     */
    collate(user2: User): number
    /**
     * Retrieves the account type of `user`.
     */
    get_account_type(): UserAccountType
    /**
     * Returns whether or not #ActUser is automatically logged in at boot time.
     */
    get_automatic_login(): boolean
    /**
     * Retrieves the email address set by `user`.
     */
    get_email(): string
    /**
     * Retrieves the home directory for `user`.
     */
    get_home_dir(): string
    /**
     * Returns the path to the account icon belonging to `user`.
     */
    get_icon_file(): string
    /**
     * Returns the value of #ActUser:language.
     */
    get_language(): string | null
    /**
     * Retrieves the location set by `user`.
     */
    get_location(): string
    /**
     * Returns whether or not the #ActUser account is locked.
     */
    get_locked(): boolean
    /**
     * Returns the number of times `user` has logged in.
     */
    get_login_frequency(): number
    /**
     * Returns the login history for `user`.
     */
    get_login_history(): GLib.Variant
    /**
     * Returns the last login time for `user`.
     */
    get_login_time(): number
    /**
     * Get the number of sessions for a user that are graphical and on the
     * same seat as the session of the calling process.
     */
    get_num_sessions(): number
    /**
     * Get the number of sessions for a user on any seat of any type.
     * See also act_user_get_num_sessions().
     * 
     * (Currently, this function is only implemented for systemd-logind.
     * For ConsoleKit, it is equivalent to act_user_get_num_sessions.)
     */
    get_num_sessions_anywhere(): number
    /**
     * Returns the user accounts service object path of `user,`
     * or %NULL if `user` doesn't have an object path associated
     * with it.
     */
    get_object_path(): string
    /**
     * Get the password expiration policy for a user.
     * 
     * Note this function is synchronous and ignores errors.
     */
    get_password_expiration_policy(): [ /* expiration_time */ number, /* last_change_time */ number, /* min_days_between_changes */ number, /* max_days_between_changes */ number, /* days_to_warn */ number, /* days_after_expiration_until_lock */ number ]
    /**
     * Retrieves the password hint set by `user`.
     */
    get_password_hint(): string
    /**
     * Retrieves the password mode of `user`.
     */
    get_password_mode(): UserPasswordMode
    /**
     * Returns the id of the primary session of `user,` or %NULL if `user`
     * has no primary session.  The primary session will always be
     * graphical and will be chosen from the sessions on the same seat as
     * the seat of the session of the calling process.
     */
    get_primary_session_id(): string
    /**
     * Retrieves the display name of `user`.
     */
    get_real_name(): string
    /**
     * Returns whether or not the #ActUser account has retained state in accountsservice.
     */
    get_saved(): boolean
    /**
     * Returns the path to the configured session for `user`.
     */
    get_session(): string
    /**
     * Returns the type of the configured session for `user`.
     */
    get_session_type(): string
    /**
     * Retrieves the shell assigned to `user`.
     */
    get_shell(): string
    /**
     * Retrieves the ID of `user`.
     */
    get_uid(): number
    /**
     * Retrieves the login name of `user`.
     */
    get_user_name(): string
    /**
     * Returns the path to the configured X session for `user`.
     */
    get_x_session(): string
    /**
     * Retrieves whether the user is a local account or not.
     */
    is_local_account(): boolean
    /**
     * Returns whether or not #ActUser is currently graphically logged in
     * on the same seat as the seat of the session of the calling process.
     */
    is_logged_in(): boolean
    /**
     * Returns whether or not #ActUser is currently logged in in any way
     * whatsoever.  See also act_user_is_logged_in().
     * 
     * (Currently, this function is only implemented for systemd-logind.
     * For ConsoleKit, it is equivalent to act_user_is_logged_in.)
     */
    is_logged_in_anywhere(): boolean
    /**
     * Retrieves whether the user is nonexistent or not.
     */
    is_nonexistent(): boolean
    /**
     * Returns whether or not #ActUser represents a 'system account' like
     * 'root' or 'nobody'.
     */
    is_system_account(): boolean
    /**
     * Changes the account type of `user`.
     * 
     * Note this function is synchronous and ignores errors.
     * @param account_type a #ActUserAccountType
     */
    set_account_type(account_type: UserAccountType): void
    /**
     * If enabled is set to %TRUE then this user will automatically be logged in
     * at boot up time.  Only one user can be configured to auto login at any given
     * time, so subsequent calls to act_user_set_automatic_login() override previous
     * calls.
     * 
     * Note this function is synchronous and ignores errors.
     * @param enabled whether or not to autologin for user.
     */
    set_automatic_login(enabled: boolean): void
    /**
     * Assigns a new email to `user`.
     * 
     * Note this function is synchronous and ignores errors.
     * @param email an email address
     */
    set_email(email: string): void
    /**
     * Assigns a new icon for `user`.
     * 
     * Note this function is synchronous and ignores errors.
     * @param icon_file path to an icon
     */
    set_icon_file(icon_file: string): void
    /**
     * Assigns a new locale for `user,` setting #ActUser:language.
     * 
     * Note this function is synchronous and ignores errors.
     * @param language a locale (for example, `en_US.utf8`), or the empty    string to use the system default locale
     */
    set_language(language: string): void
    /**
     * Assigns a new location for `user`.
     * 
     * Note this function is synchronous and ignores errors.
     * @param location a location
     */
    set_location(location: string): void
    /**
     * Note this function is synchronous and ignores errors.
     * @param locked whether or not the account is locked
     */
    set_locked(locked: boolean): void
    /**
     * Changes the password of `user` to `password`.
     * `hint` is displayed to the user if they forget the password.
     * 
     * Note this function is synchronous and ignores errors.
     * @param password a password
     * @param hint a hint to help user recall password
     */
    set_password(password: string, hint: string): void
    /**
     * Set the password expiration policy for a user.
     * 
     * Note this function is synchronous and ignores errors.
     * @param min_days_between_changes location to write minimum number of days needed between password changes.
     * @param max_days_between_changes location to write maximum number of days password can stay unchanged.
     * @param days_to_warn location to write number of days to warn user password is about to expire.
     * @param days_after_expiration_until_lock location to write number of days account will be locked after password expires.
     */
    set_password_expiration_policy(min_days_between_changes: number, max_days_between_changes: number, days_to_warn: number, days_after_expiration_until_lock: number): void
    set_password_hint(hint: string): void
    /**
     * Changes the password of `user`.  If `password_mode` is
     * ACT_USER_PASSWORD_MODE_SET_AT_LOGIN then the user will
     * be asked for a new password at the next login.  If `password_mode`
     * is ACT_USER_PASSWORD_MODE_NONE then the user will not require
     * a password to log in.
     * 
     * Note this function is synchronous and ignores errors.
     * @param password_mode a #ActUserPasswordMode
     */
    set_password_mode(password_mode: UserPasswordMode): void
    /**
     * Assigns a new name for `user`.
     * 
     * Note this function is synchronous and ignores errors.
     * @param real_name a new name
     */
    set_real_name(real_name: string): void
    /**
     * Assigns a new session for `user`.
     * 
     * Note this function is synchronous and ignores errors.
     * @param session a session (e.g. gnome)
     */
    set_session(session: string): void
    /**
     * Assigns a type to the session for `user`.
     * 
     * Note this function is synchronous and ignores errors.
     * @param session_type a type of session (e.g. "wayland" or "x11")
     */
    set_session_type(session_type: string): void
    /**
     * Set the user expiration policy for a user.
     * 
     * Note this function is synchronous and ignores errors.
     * @param expiration_time location to write users expires timestamp
     */
    set_user_expiration_policy(expiration_time: number): void
    /**
     * Assigns a new username for `user`.
     * 
     * Note this function is synchronous and ignores errors.
     * @param user_name a new user name
     */
    set_user_name(user_name: string): void
    /**
     * Assigns a new x session for `user`.
     * 
     * Note this function is synchronous and ignores errors.
     * @param x_session an x session (e.g. gnome)
     */
    set_x_session(x_session: string): void

    // Own signals of AccountsService-1.0.AccountsService.User

    connect(sigName: "changed", callback: User_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: User_ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "sessions-changed", callback: User_SessionsChangedSignalCallback): number
    connect_after(sigName: "sessions-changed", callback: User_SessionsChangedSignalCallback): number
    emit(sigName: "sessions-changed", ...args: any[]): void

    // Class property signals of AccountsService-1.0.AccountsService.User

    connect(sigName: "notify::account-type", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account-type", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::account-type", ...args: any[]): void
    connect(sigName: "notify::automatic-login", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-login", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::automatic-login", ...args: any[]): void
    connect(sigName: "notify::email", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::email", ...args: any[]): void
    connect(sigName: "notify::home-directory", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-directory", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::home-directory", ...args: any[]): void
    connect(sigName: "notify::icon-file", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-file", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-file", ...args: any[]): void
    connect(sigName: "notify::is-loaded", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-loaded", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-loaded", ...args: any[]): void
    connect(sigName: "notify::language", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::local-account", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-account", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-account", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::locked", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locked", ...args: any[]): void
    connect(sigName: "notify::login-frequency", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::login-frequency", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::login-frequency", ...args: any[]): void
    connect(sigName: "notify::login-history", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::login-history", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::login-history", ...args: any[]): void
    connect(sigName: "notify::login-time", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::login-time", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::login-time", ...args: any[]): void
    connect(sigName: "notify::nonexistent", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nonexistent", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nonexistent", ...args: any[]): void
    connect(sigName: "notify::password-hint", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-hint", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password-hint", ...args: any[]): void
    connect(sigName: "notify::password-mode", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-mode", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password-mode", ...args: any[]): void
    connect(sigName: "notify::real-name", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real-name", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::real-name", ...args: any[]): void
    connect(sigName: "notify::shell", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shell", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shell", ...args: any[]): void
    connect(sigName: "notify::system-account", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-account", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::system-account", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::user-name", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-name", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-name", ...args: any[]): void
    connect(sigName: "notify::x-session", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-session", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-session", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a user account on the system.
 * @class 
 */
class User extends GObject.Object {

    // Own properties of AccountsService-1.0.AccountsService.User

    static name: string
    static $gtype: GObject.GType<User>

    // Constructors of AccountsService-1.0.AccountsService.User

    constructor(config?: User_ConstructProps) 
    _init(config?: User_ConstructProps): void
}

interface UserManager_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of AccountsService-1.0.AccountsService.UserManager

    exclude_usernames_list?: object | null
    has_multiple_users?: boolean | null
    include_usernames_list?: object | null
}

/**
 * Signal callback interface for `user-added`
 */
interface UserManager_UserAddedSignalCallback {
    ($obj: UserManager, user: User): void
}

/**
 * Signal callback interface for `user-changed`
 */
interface UserManager_UserChangedSignalCallback {
    ($obj: UserManager, user: User): void
}

/**
 * Signal callback interface for `user-is-logged-in-changed`
 */
interface UserManager_UserIsLoggedInChangedSignalCallback {
    ($obj: UserManager, user: User): void
}

/**
 * Signal callback interface for `user-removed`
 */
interface UserManager_UserRemovedSignalCallback {
    ($obj: UserManager, user: User): void
}

interface UserManager {

    // Own properties of AccountsService-1.0.AccountsService.UserManager

    exclude_usernames_list: object
    has_multiple_users: boolean
    include_usernames_list: object
    readonly is_loaded: boolean

    // Own fields of AccountsService-1.0.AccountsService.UserManager

    parent: GObject.Object

    // Owm methods of AccountsService-1.0.AccountsService.UserManager

    /**
     * Activate the session for a given user.
     * @param user the user to activate
     */
    activate_user_session(user: User): boolean
    /**
     * Caches a user account so it shows up via act_user_manager_list_users().
     * @param username a user name
     */
    cache_user(username: string): User
    /**
     * Asynchronously caches a user account so it shows up via
     * act_user_manager_list_users().
     * 
     * For more details, see act_user_manager_cache_user(), which
     * is the synchronous version of this call.
     * @param username a unix user name
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call     when the request is satisfied
     */
    cache_user_async(username: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous user caching.
     * 
     * See act_user_manager_cache_user_async().
     * @param result a #GAsyncResult
     */
    cache_user_finish(result: Gio.AsyncResult): User
    /**
     * Check whether the user can switch to another session.
     */
    can_switch(): boolean
    /**
     * Creates a user account on the system.
     * @param username a unix user name
     * @param fullname a unix GECOS value
     * @param accounttype a #ActUserAccountType
     */
    create_user(username: string, fullname: string, accounttype: UserAccountType): User
    /**
     * Asynchronously creates a user account on the system.
     * 
     * For more details, see act_user_manager_create_user(), which
     * is the synchronous version of this call.
     * @param username a unix user name
     * @param fullname a unix GECOS value
     * @param accounttype a #ActUserAccountType
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call     when the request is satisfied
     */
    create_user_async(username: string, fullname: string, accounttype: UserAccountType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous user creation.
     * 
     * See act_user_manager_create_user_async().
     * @param result a #GAsyncResult
     */
    create_user_finish(result: Gio.AsyncResult): User
    /**
     * Deletes a user account on the system.
     * @param user an #ActUser object
     * @param remove_files %TRUE to delete the users home directory
     */
    delete_user(user: User, remove_files: boolean): boolean
    /**
     * Asynchronously deletes a user account from the system.
     * 
     * For more details, see act_user_manager_delete_user(), which
     * is the synchronous version of this call.
     * @param user a #ActUser object
     * @param remove_files %TRUE to delete the users home directory
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call     when the request is satisfied
     */
    delete_user_async(user: User, remove_files: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous user account deletion.
     * 
     * See act_user_manager_delete_user_async().
     * @param result a #GAsyncResult
     */
    delete_user_finish(result: Gio.AsyncResult): boolean
    /**
     * Retrieves a pointer to the #ActUser object for the login `username`
     * from `manager`. Trying to use this object before its
     * #ActUser:is-loaded property is %TRUE will result in undefined
     * behavior.
     * @param username the login name of the user to get.
     */
    get_user(username: string): User
    /**
     * Retrieves a pointer to the #ActUser object for the user with the
     * given uid from `manager`. Trying to use this object before its
     * #ActUser:is-loaded property is %TRUE will result in undefined
     * behavior.
     * @param id the uid of the user to get.
     */
    get_user_by_id(id: number): User
    /**
     * Switch the display to the login manager.
     */
    goto_login_session(): boolean
    /**
     * Get a list of system user accounts
     */
    list_users(): User[]
    /**
     * Check whether or not the accounts service is running.
     */
    no_service(): boolean
    /**
     * Releases all metadata about a user account, including icon,
     * language and session. If the user account is from a remote
     * server and the user has never logged in before, then that
     * account will no longer show up in ListCachedUsers() output.
     * @param username a user name
     */
    uncache_user(username: string): boolean
    uncache_user_async(username: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous user uncaching.
     * 
     * See act_user_manager_uncache_user_async().
     * @param result a #GAsyncResult
     */
    uncache_user_finish(result: Gio.AsyncResult): boolean

    // Own virtual methods of AccountsService-1.0.AccountsService.UserManager

    vfunc_user_added(user: User): void
    vfunc_user_changed(user: User): void
    vfunc_user_is_logged_in_changed(user: User): void
    vfunc_user_removed(user: User): void

    // Own signals of AccountsService-1.0.AccountsService.UserManager

    connect(sigName: "user-added", callback: UserManager_UserAddedSignalCallback): number
    connect_after(sigName: "user-added", callback: UserManager_UserAddedSignalCallback): number
    emit(sigName: "user-added", user: User, ...args: any[]): void
    connect(sigName: "user-changed", callback: UserManager_UserChangedSignalCallback): number
    connect_after(sigName: "user-changed", callback: UserManager_UserChangedSignalCallback): number
    emit(sigName: "user-changed", user: User, ...args: any[]): void
    connect(sigName: "user-is-logged-in-changed", callback: UserManager_UserIsLoggedInChangedSignalCallback): number
    connect_after(sigName: "user-is-logged-in-changed", callback: UserManager_UserIsLoggedInChangedSignalCallback): number
    emit(sigName: "user-is-logged-in-changed", user: User, ...args: any[]): void
    connect(sigName: "user-removed", callback: UserManager_UserRemovedSignalCallback): number
    connect_after(sigName: "user-removed", callback: UserManager_UserRemovedSignalCallback): number
    emit(sigName: "user-removed", user: User, ...args: any[]): void

    // Class property signals of AccountsService-1.0.AccountsService.UserManager

    connect(sigName: "notify::exclude-usernames-list", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exclude-usernames-list", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::exclude-usernames-list", ...args: any[]): void
    connect(sigName: "notify::has-multiple-users", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-multiple-users", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-multiple-users", ...args: any[]): void
    connect(sigName: "notify::include-usernames-list", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::include-usernames-list", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::include-usernames-list", ...args: any[]): void
    connect(sigName: "notify::is-loaded", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-loaded", callback: (($obj: UserManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-loaded", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A user manager object.
 * @class 
 */
class UserManager extends GObject.Object {

    // Own properties of AccountsService-1.0.AccountsService.UserManager

    static name: string
    static $gtype: GObject.GType<UserManager>

    // Constructors of AccountsService-1.0.AccountsService.UserManager

    constructor(config?: UserManager_ConstructProps) 
    _init(config?: UserManager_ConstructProps): void
    /**
     * Returns the user manager singleton instance.  Calling this function will
     * automatically being loading the user list if it isn't loaded already.
     * The #ActUserManager:is-loaded property will be set to %TRUE when the users
     * are finished loading and then act_user_manager_list_users() can be called.
     */
    static get_default(): UserManager
}

interface UserClass {

    // Own fields of AccountsService-1.0.AccountsService.UserClass

    parent_class: GObject.ObjectClass
}

abstract class UserClass {

    // Own properties of AccountsService-1.0.AccountsService.UserClass

    static name: string
}

interface UserManagerClass {

    // Own fields of AccountsService-1.0.AccountsService.UserManagerClass

    parent_class: GObject.ObjectClass
    user_added: (user_manager: UserManager, user: User) => void
    user_removed: (user_manager: UserManager, user: User) => void
    user_is_logged_in_changed: (user_manager: UserManager, user: User) => void
    user_changed: (user_manager: UserManager, user: User) => void
}

abstract class UserManagerClass {

    // Own properties of AccountsService-1.0.AccountsService.UserManagerClass

    static name: string
}

}
export default AccountsService;