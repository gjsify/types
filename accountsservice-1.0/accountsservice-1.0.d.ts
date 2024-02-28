/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './accountsservice-1.0-ambient.d.ts';
import './accountsservice-1.0-import.d.ts';
/**
 * AccountsService-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

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
    class UserManagerError extends GLib.Error {
        // Own fields of AccountsService-1.0.UserManagerError

        /**
         * Generic failure
         */
        FAILED: number;
        /**
         * The user already exists
         */
        USER_EXISTS: number;
        /**
         * The user does not exist
         */
        USER_DOES_NOT_EXIST: number;
        /**
         * Permission denied
         */
        PERMISSION_DENIED: number;
        /**
         * Operation not supported
         */
        NOT_SUPPORTED: number;

        // Constructors of AccountsService-1.0.UserManagerError

        constructor(options: { message: string; code: number });

        // Owm methods of AccountsService-1.0.UserManagerError

        static quark(): GLib.Quark;
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
    function user_manager_error_quark(): GLib.Quark;
    module User {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        interface SessionsChanged {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * Represents a user account on the system.
     */
    class User extends GObject.Object {
        // Own properties of AccountsService-1.0.User

        readonly account_type: number;
        readonly accountType: number;
        readonly automatic_login: boolean;
        readonly automaticLogin: boolean;
        readonly email: string;
        readonly home_directory: string;
        readonly homeDirectory: string;
        readonly icon_file: string;
        readonly iconFile: string;
        readonly is_loaded: boolean;
        readonly isLoaded: boolean;
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
        readonly language: string;
        readonly local_account: boolean;
        readonly localAccount: boolean;
        readonly location: string;
        readonly locked: boolean;
        readonly login_frequency: number;
        readonly loginFrequency: number;
        readonly login_history: GLib.Variant;
        readonly loginHistory: GLib.Variant;
        readonly login_time: number;
        readonly loginTime: number;
        readonly nonexistent: boolean;
        readonly password_hint: string;
        readonly passwordHint: string;
        readonly password_mode: number;
        readonly passwordMode: number;
        readonly real_name: string;
        readonly realName: string;
        readonly shell: string;
        readonly system_account: boolean;
        readonly systemAccount: boolean;
        readonly uid: number;
        readonly user_name: string;
        readonly userName: string;
        readonly x_session: string;
        readonly xSession: string;

        // Owm methods of AccountsService-1.0.User

        /**
         * Organize the user by login frequency and names.
         * @param user2 a user
         * @returns negative if @user1 is before @user2, zero if equal    or positive if @user1 is after @user2
         */
        collate(user2: User): number;
        /**
         * Retrieves the account type of `user`.
         * @returns a #ActUserAccountType
         */
        get_account_type(): UserAccountType;
        /**
         * Returns whether or not #ActUser is automatically logged in at boot time.
         * @returns %TRUE or %FALSE
         */
        get_automatic_login(): boolean;
        /**
         * Retrieves the email address set by `user`.
         * @returns a pointer to an array of characters which must not be modified or  freed, or %NULL.
         */
        get_email(): string;
        /**
         * Retrieves the home directory for `user`.
         * @returns a pointer to an array of characters which must not be modified or  freed, or %NULL.
         */
        get_home_dir(): string;
        /**
         * Returns the path to the account icon belonging to `user`.
         * @returns a path to an icon
         */
        get_icon_file(): string;
        /**
         * Returns the value of #ActUser:language.
         * @returns the user’s language, or the empty string    if they are using the system default language, or %NULL if there is no    connection to the daemon
         */
        get_language(): string | null;
        /**
         * Returns the value of #ActUser:languages.
         * @returns the user’s preferred languages, or the    empty string if they are using the system default language, or %NULL    if there is no connection to the daemon
         */
        get_languages(): string[] | null;
        /**
         * Retrieves the location set by `user`.
         * @returns a pointer to an array of characters which must not be modified or  freed, or %NULL.
         */
        get_location(): string;
        /**
         * Returns whether or not the #ActUser account is locked.
         * @returns %TRUE or %FALSE
         */
        get_locked(): boolean;
        /**
         * Returns the number of times `user` has logged in.
         * @returns the login frequency
         */
        get_login_frequency(): number;
        /**
         * Returns the login history for `user`.
         * @returns a pointer to GVariant of type "a(xxa{sv})" which must not be modified or freed, or %NULL.
         */
        get_login_history(): GLib.Variant;
        /**
         * Returns the last login time for `user`.
         * @returns the login time
         */
        get_login_time(): number;
        /**
         * Get the number of sessions for a user that are graphical and on the
         * same seat as the session of the calling process.
         * @returns the number of sessions
         */
        get_num_sessions(): number;
        /**
         * Get the number of sessions for a user on any seat of any type.
         * See also act_user_get_num_sessions().
         *
         * (Currently, this function is only implemented for systemd-logind.
         * For ConsoleKit, it is equivalent to act_user_get_num_sessions.)
         * @returns the number of sessions
         */
        get_num_sessions_anywhere(): number;
        /**
         * Returns the user accounts service object path of `user,`
         * or %NULL if `user` doesn't have an object path associated
         * with it.
         * @returns the object path of the user
         */
        get_object_path(): string;
        /**
         * Get the password expiration policy for a user.
         *
         * Note this function is synchronous and ignores errors.
         */
        get_password_expiration_policy(): void;
        /**
         * Retrieves the password hint set by `user`.
         * @returns a pointer to an array of characters which must not be modified or  freed, or %NULL.
         */
        get_password_hint(): string;
        /**
         * Retrieves the password mode of `user`.
         * @returns a #ActUserPasswordMode
         */
        get_password_mode(): UserPasswordMode;
        /**
         * Returns the id of the primary session of `user,` or %NULL if `user`
         * has no primary session.  The primary session will always be
         * graphical and will be chosen from the sessions on the same seat as
         * the seat of the session of the calling process.
         * @returns the id of the primary session of the user
         */
        get_primary_session_id(): string;
        /**
         * Retrieves the display name of `user`.
         * @returns a pointer to an array of characters which must not be modified or  freed, or %NULL.
         */
        get_real_name(): string;
        /**
         * Returns whether or not the #ActUser account has retained state in accountsservice.
         * @returns %TRUE or %FALSE
         */
        get_saved(): boolean;
        /**
         * Returns the path to the configured session for `user`.
         * @returns a path to an icon
         */
        get_session(): string;
        /**
         * Returns the type of the configured session for `user`.
         * @returns a path to an icon
         */
        get_session_type(): string;
        /**
         * Retrieves the shell assigned to `user`.
         * @returns a pointer to an array of characters which must not be modified or  freed, or %NULL.
         */
        get_shell(): string;
        /**
         * Retrieves the ID of `user`.
         * @returns a pointer to an array of characters which must not be modified or  freed, or %NULL.
         */
        get_uid(): number;
        /**
         * Retrieves the login name of `user`.
         * @returns a pointer to an array of characters which must not be modified or  freed, or %NULL.
         */
        get_user_name(): string;
        /**
         * Returns the path to the configured X session for `user`.
         * @returns a path to an icon
         */
        get_x_session(): string;
        /**
         * Retrieves whether the user is a local account or not.
         * @returns %TRUE if the user is local
         */
        is_local_account(): boolean;
        /**
         * Returns whether or not #ActUser is currently graphically logged in
         * on the same seat as the seat of the session of the calling process.
         * @returns %TRUE or %FALSE
         */
        is_logged_in(): boolean;
        /**
         * Returns whether or not #ActUser is currently logged in in any way
         * whatsoever.  See also act_user_is_logged_in().
         *
         * (Currently, this function is only implemented for systemd-logind.
         * For ConsoleKit, it is equivalent to act_user_is_logged_in.)
         * @returns %TRUE or %FALSE
         */
        is_logged_in_anywhere(): boolean;
        /**
         * Retrieves whether the user is nonexistent or not.
         * @returns %TRUE if the user is nonexistent
         */
        is_nonexistent(): boolean;
        /**
         * Returns whether or not #ActUser represents a 'system account' like
         * 'root' or 'nobody'.
         * @returns %TRUE or %FALSE
         */
        is_system_account(): boolean;
        /**
         * Changes the account type of `user`.
         *
         * Note this function is synchronous and ignores errors.
         * @param account_type a #ActUserAccountType
         */
        set_account_type(account_type: UserAccountType): void;
        /**
         * If enabled is set to %TRUE then this user will automatically be logged in
         * at boot up time.  Only one user can be configured to auto login at any given
         * time, so subsequent calls to act_user_set_automatic_login() override previous
         * calls.
         *
         * Note this function is synchronous and ignores errors.
         * @param enabled whether or not to autologin for user.
         */
        set_automatic_login(enabled: boolean): void;
        /**
         * Assigns a new email to `user`.
         *
         * Note this function is synchronous and ignores errors.
         * @param email an email address
         */
        set_email(email: string): void;
        /**
         * Assigns a new icon for `user`.
         *
         * Note this function is synchronous and ignores errors.
         * @param icon_file path to an icon
         */
        set_icon_file(icon_file: string): void;
        /**
         * Assigns a new locale for `user,` setting #ActUser:language.
         *
         * Note this function is synchronous and ignores errors.
         * @param language a locale (for example, `en_US.utf8`), or the empty    string to use the system default locale
         */
        set_language(language: string): void;
        /**
         * Assigns preferred languages for `user,` setting #ActUser:languages, and
         * overriding #ActUser:language with the first item in the list if there is one.
         *
         * Note this function is synchronous and ignores errors.
         * @param languages an array of locale (for example, `en_US.utf8`), or    the empty string to use the system default locale
         */
        set_languages(languages: string[]): void;
        /**
         * Assigns a new location for `user`.
         *
         * Note this function is synchronous and ignores errors.
         * @param location a location
         */
        set_location(location: string): void;
        /**
         * Note this function is synchronous and ignores errors.
         * @param locked whether or not the account is locked
         */
        set_locked(locked: boolean): void;
        /**
         * Changes the password of `user` to `password`.
         * `hint` is displayed to the user if they forget the password.
         *
         * Note this function is synchronous and ignores errors.
         * @param password a password
         * @param hint a hint to help user recall password
         */
        set_password(password: string, hint: string): void;
        /**
         * Set the password expiration policy for a user.
         *
         * Note this function is synchronous and ignores errors.
         * @param min_days_between_changes location to write minimum number of days needed between password changes.
         * @param max_days_between_changes location to write maximum number of days password can stay unchanged.
         * @param days_to_warn location to write number of days to warn user password is about to expire.
         * @param days_after_expiration_until_lock location to write number of days account will be locked after password expires.
         */
        set_password_expiration_policy(
            min_days_between_changes: number,
            max_days_between_changes: number,
            days_to_warn: number,
            days_after_expiration_until_lock: number,
        ): void;
        set_password_hint(hint: string): void;
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
        set_password_mode(password_mode: UserPasswordMode): void;
        /**
         * Assigns a new name for `user`.
         *
         * Note this function is synchronous and ignores errors.
         * @param real_name a new name
         */
        set_real_name(real_name: string): void;
        /**
         * Assigns a new session for `user`.
         *
         * Note this function is synchronous and ignores errors.
         * @param session a session (e.g. gnome)
         */
        set_session(session: string): void;
        /**
         * Assigns a type to the session for `user`.
         *
         * Note this function is synchronous and ignores errors.
         * @param session_type a type of session (e.g. "wayland" or "x11")
         */
        set_session_type(session_type: string): void;
        /**
         * Set the user expiration policy for a user.
         *
         * Note this function is synchronous and ignores errors.
         * @param expiration_time location to write users expires timestamp
         */
        set_user_expiration_policy(expiration_time: number): void;
        /**
         * Assigns a new username for `user`.
         *
         * Note this function is synchronous and ignores errors.
         * @param user_name a new user name
         */
        set_user_name(user_name: string): void;
        /**
         * Assigns a new x session for `user`.
         *
         * Note this function is synchronous and ignores errors.
         * @param x_session an x session (e.g. gnome)
         */
        set_x_session(x_session: string): void;
    }

    module UserManager {
        // Signal callback interfaces

        interface UserAdded {
            (user: User): void;
        }

        interface UserChanged {
            (user: User): void;
        }

        interface UserIsLoggedInChanged {
            (user: User): void;
        }

        interface UserRemoved {
            (user: User): void;
        }

        // Constructor properties interface
    }

    /**
     * A user manager object.
     */
    class UserManager extends GObject.Object {
        // Own properties of AccountsService-1.0.UserManager

        exclude_usernames_list: any;
        excludeUsernamesList: any;
        has_multiple_users: boolean;
        hasMultipleUsers: boolean;
        include_usernames_list: any;
        includeUsernamesList: any;
        readonly is_loaded: boolean;
        readonly isLoaded: boolean;

        // Owm methods of AccountsService-1.0.UserManager

        /**
         * Returns the user manager singleton instance.  Calling this function will
         * automatically being loading the user list if it isn't loaded already.
         * The #ActUserManager:is-loaded property will be set to %TRUE when the users
         * are finished loading and then act_user_manager_list_users() can be called.
         */
        static get_default(): UserManager;

        // Owm methods of AccountsService-1.0.UserManager

        /**
         * Activate the session for a given user.
         * @param user the user to activate
         * @returns whether successfully activated
         */
        activate_user_session(user: User): boolean;
        /**
         * Caches a user account so it shows up via act_user_manager_list_users().
         * @param username a user name
         * @returns user object
         */
        cache_user(username: string): User;
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
        cache_user_async(
            username: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous user caching.
         *
         * See act_user_manager_cache_user_async().
         * @param result a #GAsyncResult
         * @returns user object
         */
        cache_user_finish(result: Gio.AsyncResult): User;
        /**
         * Check whether the user can switch to another session.
         * @returns whether we can switch to another session
         */
        can_switch(): boolean;
        /**
         * Creates a user account on the system.
         * @param username a unix user name
         * @param fullname a unix GECOS value
         * @param accounttype a #ActUserAccountType
         * @returns user object
         */
        create_user(username: string, fullname: string, accounttype: UserAccountType): User;
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
        create_user_async(
            username: string,
            fullname: string,
            accounttype: UserAccountType,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous user creation.
         *
         * See act_user_manager_create_user_async().
         * @param result a #GAsyncResult
         * @returns user object
         */
        create_user_finish(result: Gio.AsyncResult): User;
        /**
         * Deletes a user account on the system.
         * @param user an #ActUser object
         * @param remove_files %TRUE to delete the users home directory
         * @returns %TRUE if the user account was successfully deleted
         */
        delete_user(user: User, remove_files: boolean): boolean;
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
        delete_user_async(
            user: User,
            remove_files: boolean,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous user account deletion.
         *
         * See act_user_manager_delete_user_async().
         * @param result a #GAsyncResult
         * @returns %TRUE if the user account was successfully deleted
         */
        delete_user_finish(result: Gio.AsyncResult): boolean;
        /**
         * Retrieves a pointer to the #ActUser object for the login `username`
         * from `manager`. Trying to use this object before its
         * #ActUser:is-loaded property is %TRUE will result in undefined
         * behavior.
         * @param username the login name of the user to get.
         * @returns #ActUser object
         */
        get_user(username: string): User;
        /**
         * Retrieves a pointer to the #ActUser object for the user with the
         * given uid from `manager`. Trying to use this object before its
         * #ActUser:is-loaded property is %TRUE will result in undefined
         * behavior.
         * @param id the uid of the user to get.
         * @returns #ActUser object
         */
        get_user_by_id(id: number): User;
        /**
         * Switch the display to the login manager.
         * @returns whether successful or not
         */
        goto_login_session(): boolean;
        /**
         * Get a list of system user accounts
         * @returns List of #ActUser objects
         */
        list_users(): User[];
        /**
         * Check whether or not the accounts service is running.
         * @returns whether or not accounts service is running
         */
        no_service(): boolean;
        /**
         * Releases all metadata about a user account, including icon,
         * language and session. If the user account is from a remote
         * server and the user has never logged in before, then that
         * account will no longer show up in ListCachedUsers() output.
         * @param username a user name
         * @returns %TRUE if successful, otherwise %FALSE
         */
        uncache_user(username: string): boolean;
        uncache_user_async(
            username: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous user uncaching.
         *
         * See act_user_manager_uncache_user_async().
         * @param result a #GAsyncResult
         * @returns %TRUE if the user account was successfully uncached
         */
        uncache_user_finish(result: Gio.AsyncResult): boolean;
    }

    class UserClass {}

    class UserManagerClass {}

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

export default AccountsService;
// END
