// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * AccountsService-1.0
 */

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
function userManagerErrorQuark(): GLib.Quark
interface User_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `changed`
 */
interface User_ChangedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `sessions-changed`
 */
interface User_SessionsChangedSignalCallback {
    (): void
}

interface User {

    // Own properties of AccountsService-1.0.AccountsService.User

    readonly accountType: number
    readonly automaticLogin: boolean
    readonly email: string
    readonly homeDirectory: string
    readonly iconFile: string
    readonly isLoaded: boolean
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
    readonly localAccount: boolean
    readonly location: string
    readonly locked: boolean
    readonly loginFrequency: number
    readonly loginHistory: GLib.Variant
    readonly loginTime: number
    readonly nonexistent: boolean
    readonly passwordHint: string
    readonly passwordMode: number
    readonly realName: string
    readonly shell: string
    readonly systemAccount: boolean
    readonly uid: number
    readonly userName: string
    readonly xSession: string

    // Owm methods of AccountsService-1.0.AccountsService.User

    /**
     * Organize the user by login frequency and names.
     * @param user2 a user
     */
    collate(user2: User): number
    /**
     * Retrieves the account type of `user`.
     */
    getAccountType(): UserAccountType
    /**
     * Returns whether or not #ActUser is automatically logged in at boot time.
     */
    getAutomaticLogin(): boolean
    /**
     * Retrieves the email address set by `user`.
     */
    getEmail(): string
    /**
     * Retrieves the home directory for `user`.
     */
    getHomeDir(): string
    /**
     * Returns the path to the account icon belonging to `user`.
     */
    getIconFile(): string
    /**
     * Returns the value of #ActUser:language.
     */
    getLanguage(): string | null
    /**
     * Retrieves the location set by `user`.
     */
    getLocation(): string
    /**
     * Returns whether or not the #ActUser account is locked.
     */
    getLocked(): boolean
    /**
     * Returns the number of times `user` has logged in.
     */
    getLoginFrequency(): number
    /**
     * Returns the login history for `user`.
     */
    getLoginHistory(): GLib.Variant
    /**
     * Returns the last login time for `user`.
     */
    getLoginTime(): number
    /**
     * Get the number of sessions for a user that are graphical and on the
     * same seat as the session of the calling process.
     */
    getNumSessions(): number
    /**
     * Get the number of sessions for a user on any seat of any type.
     * See also act_user_get_num_sessions().
     * 
     * (Currently, this function is only implemented for systemd-logind.
     * For ConsoleKit, it is equivalent to act_user_get_num_sessions.)
     */
    getNumSessionsAnywhere(): number
    /**
     * Returns the user accounts service object path of `user,`
     * or %NULL if `user` doesn't have an object path associated
     * with it.
     */
    getObjectPath(): string
    /**
     * Get the password expiration policy for a user.
     * 
     * Note this function is synchronous and ignores errors.
     */
    getPasswordExpirationPolicy(): [ /* expirationTime */ number, /* lastChangeTime */ number, /* minDaysBetweenChanges */ number, /* maxDaysBetweenChanges */ number, /* daysToWarn */ number, /* daysAfterExpirationUntilLock */ number ]
    /**
     * Retrieves the password hint set by `user`.
     */
    getPasswordHint(): string
    /**
     * Retrieves the password mode of `user`.
     */
    getPasswordMode(): UserPasswordMode
    /**
     * Returns the id of the primary session of `user,` or %NULL if `user`
     * has no primary session.  The primary session will always be
     * graphical and will be chosen from the sessions on the same seat as
     * the seat of the session of the calling process.
     */
    getPrimarySessionId(): string
    /**
     * Retrieves the display name of `user`.
     */
    getRealName(): string
    /**
     * Returns whether or not the #ActUser account has retained state in accountsservice.
     */
    getSaved(): boolean
    /**
     * Returns the path to the configured session for `user`.
     */
    getSession(): string
    /**
     * Returns the type of the configured session for `user`.
     */
    getSessionType(): string
    /**
     * Retrieves the shell assigned to `user`.
     */
    getShell(): string
    /**
     * Retrieves the ID of `user`.
     */
    getUid(): number
    /**
     * Retrieves the login name of `user`.
     */
    getUserName(): string
    /**
     * Returns the path to the configured X session for `user`.
     */
    getXSession(): string
    /**
     * Retrieves whether the user is a local account or not.
     */
    isLocalAccount(): boolean
    /**
     * Returns whether or not #ActUser is currently graphically logged in
     * on the same seat as the seat of the session of the calling process.
     */
    isLoggedIn(): boolean
    /**
     * Returns whether or not #ActUser is currently logged in in any way
     * whatsoever.  See also act_user_is_logged_in().
     * 
     * (Currently, this function is only implemented for systemd-logind.
     * For ConsoleKit, it is equivalent to act_user_is_logged_in.)
     */
    isLoggedInAnywhere(): boolean
    /**
     * Retrieves whether the user is nonexistent or not.
     */
    isNonexistent(): boolean
    /**
     * Returns whether or not #ActUser represents a 'system account' like
     * 'root' or 'nobody'.
     */
    isSystemAccount(): boolean
    /**
     * Changes the account type of `user`.
     * 
     * Note this function is synchronous and ignores errors.
     * @param accountType a #ActUserAccountType
     */
    setAccountType(accountType: UserAccountType): void
    /**
     * If enabled is set to %TRUE then this user will automatically be logged in
     * at boot up time.  Only one user can be configured to auto login at any given
     * time, so subsequent calls to act_user_set_automatic_login() override previous
     * calls.
     * 
     * Note this function is synchronous and ignores errors.
     * @param enabled whether or not to autologin for user.
     */
    setAutomaticLogin(enabled: boolean): void
    /**
     * Assigns a new email to `user`.
     * 
     * Note this function is synchronous and ignores errors.
     * @param email an email address
     */
    setEmail(email: string): void
    /**
     * Assigns a new icon for `user`.
     * 
     * Note this function is synchronous and ignores errors.
     * @param iconFile path to an icon
     */
    setIconFile(iconFile: string): void
    /**
     * Assigns a new locale for `user,` setting #ActUser:language.
     * 
     * Note this function is synchronous and ignores errors.
     * @param language a locale (for example, `en_US.utf8`), or the empty    string to use the system default locale
     */
    setLanguage(language: string): void
    /**
     * Assigns a new location for `user`.
     * 
     * Note this function is synchronous and ignores errors.
     * @param location a location
     */
    setLocation(location: string): void
    /**
     * Note this function is synchronous and ignores errors.
     * @param locked whether or not the account is locked
     */
    setLocked(locked: boolean): void
    /**
     * Changes the password of `user` to `password`.
     * `hint` is displayed to the user if they forget the password.
     * 
     * Note this function is synchronous and ignores errors.
     * @param password a password
     * @param hint a hint to help user recall password
     */
    setPassword(password: string, hint: string): void
    /**
     * Set the password expiration policy for a user.
     * 
     * Note this function is synchronous and ignores errors.
     * @param minDaysBetweenChanges location to write minimum number of days needed between password changes.
     * @param maxDaysBetweenChanges location to write maximum number of days password can stay unchanged.
     * @param daysToWarn location to write number of days to warn user password is about to expire.
     * @param daysAfterExpirationUntilLock location to write number of days account will be locked after password expires.
     */
    setPasswordExpirationPolicy(minDaysBetweenChanges: number, maxDaysBetweenChanges: number, daysToWarn: number, daysAfterExpirationUntilLock: number): void
    setPasswordHint(hint: string): void
    /**
     * Changes the password of `user`.  If `password_mode` is
     * ACT_USER_PASSWORD_MODE_SET_AT_LOGIN then the user will
     * be asked for a new password at the next login.  If `password_mode`
     * is ACT_USER_PASSWORD_MODE_NONE then the user will not require
     * a password to log in.
     * 
     * Note this function is synchronous and ignores errors.
     * @param passwordMode a #ActUserPasswordMode
     */
    setPasswordMode(passwordMode: UserPasswordMode): void
    /**
     * Assigns a new name for `user`.
     * 
     * Note this function is synchronous and ignores errors.
     * @param realName a new name
     */
    setRealName(realName: string): void
    /**
     * Assigns a new session for `user`.
     * 
     * Note this function is synchronous and ignores errors.
     * @param session a session (e.g. gnome)
     */
    setSession(session: string): void
    /**
     * Assigns a type to the session for `user`.
     * 
     * Note this function is synchronous and ignores errors.
     * @param sessionType a type of session (e.g. "wayland" or "x11")
     */
    setSessionType(sessionType: string): void
    /**
     * Set the user expiration policy for a user.
     * 
     * Note this function is synchronous and ignores errors.
     * @param expirationTime location to write users expires timestamp
     */
    setUserExpirationPolicy(expirationTime: number): void
    /**
     * Assigns a new username for `user`.
     * 
     * Note this function is synchronous and ignores errors.
     * @param userName a new user name
     */
    setUserName(userName: string): void
    /**
     * Assigns a new x session for `user`.
     * 
     * Note this function is synchronous and ignores errors.
     * @param xSession an x session (e.g. gnome)
     */
    setXSession(xSession: string): void

    // Own signals of AccountsService-1.0.AccountsService.User

    connect(sigName: "changed", callback: User_ChangedSignalCallback): number
    on(sigName: "changed", callback: User_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: User_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: User_ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "sessions-changed", callback: User_SessionsChangedSignalCallback): number
    on(sigName: "sessions-changed", callback: User_SessionsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sessions-changed", callback: User_SessionsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sessions-changed", callback: User_SessionsChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "sessions-changed", ...args: any[]): void

    // Class property signals of AccountsService-1.0.AccountsService.User

    connect(sigName: "notify::account-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::account-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::account-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::account-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::account-type", ...args: any[]): void
    connect(sigName: "notify::automatic-login", callback: (...args: any[]) => void): number
    on(sigName: "notify::automatic-login", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::automatic-login", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::automatic-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::automatic-login", ...args: any[]): void
    connect(sigName: "notify::email", callback: (...args: any[]) => void): number
    on(sigName: "notify::email", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::email", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::email", ...args: any[]): void
    connect(sigName: "notify::home-directory", callback: (...args: any[]) => void): number
    on(sigName: "notify::home-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::home-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::home-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::home-directory", ...args: any[]): void
    connect(sigName: "notify::icon-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-file", ...args: any[]): void
    connect(sigName: "notify::is-loaded", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-loaded", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-loaded", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-loaded", ...args: any[]): void
    connect(sigName: "notify::language", callback: (...args: any[]) => void): number
    on(sigName: "notify::language", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::language", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::local-account", callback: (...args: any[]) => void): number
    on(sigName: "notify::local-account", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::local-account", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::local-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::local-account", ...args: any[]): void
    connect(sigName: "notify::location", callback: (...args: any[]) => void): number
    on(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::locked", callback: (...args: any[]) => void): number
    on(sigName: "notify::locked", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::locked", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::locked", ...args: any[]): void
    connect(sigName: "notify::login-frequency", callback: (...args: any[]) => void): number
    on(sigName: "notify::login-frequency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::login-frequency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::login-frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::login-frequency", ...args: any[]): void
    connect(sigName: "notify::login-history", callback: (...args: any[]) => void): number
    on(sigName: "notify::login-history", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::login-history", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::login-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::login-history", ...args: any[]): void
    connect(sigName: "notify::login-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::login-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::login-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::login-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::login-time", ...args: any[]): void
    connect(sigName: "notify::nonexistent", callback: (...args: any[]) => void): number
    on(sigName: "notify::nonexistent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::nonexistent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::nonexistent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::nonexistent", ...args: any[]): void
    connect(sigName: "notify::password-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::password-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password-hint", ...args: any[]): void
    connect(sigName: "notify::password-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::password-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password-mode", ...args: any[]): void
    connect(sigName: "notify::real-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::real-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::real-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::real-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::real-name", ...args: any[]): void
    connect(sigName: "notify::shell", callback: (...args: any[]) => void): number
    on(sigName: "notify::shell", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::shell", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::shell", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::shell", ...args: any[]): void
    connect(sigName: "notify::system-account", callback: (...args: any[]) => void): number
    on(sigName: "notify::system-account", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::system-account", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::system-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::system-account", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::user-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-name", ...args: any[]): void
    connect(sigName: "notify::x-session", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-session", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    excludeUsernamesList?: object | null
    hasMultipleUsers?: boolean | null
    includeUsernamesList?: object | null
}

/**
 * Signal callback interface for `user-added`
 */
interface UserManager_UserAddedSignalCallback {
    (user: User): void
}

/**
 * Signal callback interface for `user-changed`
 */
interface UserManager_UserChangedSignalCallback {
    (user: User): void
}

/**
 * Signal callback interface for `user-is-logged-in-changed`
 */
interface UserManager_UserIsLoggedInChangedSignalCallback {
    (user: User): void
}

/**
 * Signal callback interface for `user-removed`
 */
interface UserManager_UserRemovedSignalCallback {
    (user: User): void
}

interface UserManager {

    // Own properties of AccountsService-1.0.AccountsService.UserManager

    excludeUsernamesList: object
    hasMultipleUsers: boolean
    includeUsernamesList: object
    readonly isLoaded: boolean

    // Own fields of AccountsService-1.0.AccountsService.UserManager

    parent: GObject.Object

    // Owm methods of AccountsService-1.0.AccountsService.UserManager

    /**
     * Activate the session for a given user.
     * @param user the user to activate
     */
    activateUserSession(user: User): boolean
    /**
     * Caches a user account so it shows up via act_user_manager_list_users().
     * @param username a user name
     */
    cacheUser(username: string): User
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
    cacheUserAsync(username: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous user caching.
     * 
     * See act_user_manager_cache_user_async().
     * @param result a #GAsyncResult
     */
    cacheUserFinish(result: Gio.AsyncResult): User
    /**
     * Check whether the user can switch to another session.
     */
    canSwitch(): boolean
    /**
     * Creates a user account on the system.
     * @param username a unix user name
     * @param fullname a unix GECOS value
     * @param accounttype a #ActUserAccountType
     */
    createUser(username: string, fullname: string, accounttype: UserAccountType): User
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
    createUserAsync(username: string, fullname: string, accounttype: UserAccountType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous user creation.
     * 
     * See act_user_manager_create_user_async().
     * @param result a #GAsyncResult
     */
    createUserFinish(result: Gio.AsyncResult): User
    /**
     * Deletes a user account on the system.
     * @param user an #ActUser object
     * @param removeFiles %TRUE to delete the users home directory
     */
    deleteUser(user: User, removeFiles: boolean): boolean
    /**
     * Asynchronously deletes a user account from the system.
     * 
     * For more details, see act_user_manager_delete_user(), which
     * is the synchronous version of this call.
     * @param user a #ActUser object
     * @param removeFiles %TRUE to delete the users home directory
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call     when the request is satisfied
     */
    deleteUserAsync(user: User, removeFiles: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous user account deletion.
     * 
     * See act_user_manager_delete_user_async().
     * @param result a #GAsyncResult
     */
    deleteUserFinish(result: Gio.AsyncResult): boolean
    /**
     * Retrieves a pointer to the #ActUser object for the login `username`
     * from `manager`. Trying to use this object before its
     * #ActUser:is-loaded property is %TRUE will result in undefined
     * behavior.
     * @param username the login name of the user to get.
     */
    getUser(username: string): User
    /**
     * Retrieves a pointer to the #ActUser object for the user with the
     * given uid from `manager`. Trying to use this object before its
     * #ActUser:is-loaded property is %TRUE will result in undefined
     * behavior.
     * @param id the uid of the user to get.
     */
    getUserById(id: number): User
    /**
     * Switch the display to the login manager.
     */
    gotoLoginSession(): boolean
    /**
     * Get a list of system user accounts
     */
    listUsers(): User[]
    /**
     * Check whether or not the accounts service is running.
     */
    noService(): boolean
    /**
     * Releases all metadata about a user account, including icon,
     * language and session. If the user account is from a remote
     * server and the user has never logged in before, then that
     * account will no longer show up in ListCachedUsers() output.
     * @param username a user name
     */
    uncacheUser(username: string): boolean
    uncacheUserAsync(username: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous user uncaching.
     * 
     * See act_user_manager_uncache_user_async().
     * @param result a #GAsyncResult
     */
    uncacheUserFinish(result: Gio.AsyncResult): boolean

    // Own signals of AccountsService-1.0.AccountsService.UserManager

    connect(sigName: "user-added", callback: UserManager_UserAddedSignalCallback): number
    on(sigName: "user-added", callback: UserManager_UserAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-added", callback: UserManager_UserAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-added", callback: UserManager_UserAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "user-added", ...args: any[]): void
    connect(sigName: "user-changed", callback: UserManager_UserChangedSignalCallback): number
    on(sigName: "user-changed", callback: UserManager_UserChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-changed", callback: UserManager_UserChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-changed", callback: UserManager_UserChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "user-changed", ...args: any[]): void
    connect(sigName: "user-is-logged-in-changed", callback: UserManager_UserIsLoggedInChangedSignalCallback): number
    on(sigName: "user-is-logged-in-changed", callback: UserManager_UserIsLoggedInChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-is-logged-in-changed", callback: UserManager_UserIsLoggedInChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-is-logged-in-changed", callback: UserManager_UserIsLoggedInChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "user-is-logged-in-changed", ...args: any[]): void
    connect(sigName: "user-removed", callback: UserManager_UserRemovedSignalCallback): number
    on(sigName: "user-removed", callback: UserManager_UserRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-removed", callback: UserManager_UserRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-removed", callback: UserManager_UserRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "user-removed", ...args: any[]): void

    // Class property signals of AccountsService-1.0.AccountsService.UserManager

    connect(sigName: "notify::exclude-usernames-list", callback: (...args: any[]) => void): number
    on(sigName: "notify::exclude-usernames-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::exclude-usernames-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::exclude-usernames-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::exclude-usernames-list", ...args: any[]): void
    connect(sigName: "notify::has-multiple-users", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-multiple-users", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-multiple-users", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-multiple-users", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-multiple-users", ...args: any[]): void
    connect(sigName: "notify::include-usernames-list", callback: (...args: any[]) => void): number
    on(sigName: "notify::include-usernames-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::include-usernames-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::include-usernames-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::include-usernames-list", ...args: any[]): void
    connect(sigName: "notify::is-loaded", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-loaded", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-loaded", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-loaded", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static getDefault(): UserManager
}

interface UserClass {

    // Own fields of AccountsService-1.0.AccountsService.UserClass

    parentClass: GObject.ObjectClass
}

abstract class UserClass {

    // Own properties of AccountsService-1.0.AccountsService.UserClass

    static name: string
}

interface UserManagerClass {

    // Own fields of AccountsService-1.0.AccountsService.UserManagerClass

    parentClass: GObject.ObjectClass
    userAdded: (userManager: UserManager, user: User) => void
    userRemoved: (userManager: UserManager, user: User) => void
    userIsLoggedInChanged: (userManager: UserManager, user: User) => void
    userChanged: (userManager: UserManager, user: User) => void
}

abstract class UserManagerClass {

    // Own properties of AccountsService-1.0.AccountsService.UserManagerClass

    static name: string
}

}
export default AccountsService;