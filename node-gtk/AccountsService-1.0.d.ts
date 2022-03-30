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
class User {
    /* Properties of AccountsService-1.0.AccountsService.User */
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
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AccountsService-1.0.AccountsService.User */
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
    getPasswordExpirationPolicy(): [ /* expirationTime */ number | null, /* lastChangeTime */ number | null, /* minDaysBetweenChanges */ number | null, /* maxDaysBetweenChanges */ number | null, /* daysToWarn */ number | null, /* daysAfterExpirationUntilLock */ number | null ]
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
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of AccountsService-1.0.AccountsService.User */
    /**
     * Emitted when the user accounts changes in some way.
     */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /**
     * Emitted when the list of sessions for this user changes.
     */
    connect(sigName: "sessions-changed", callback: (() => void)): number
    on(sigName: "sessions-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sessions-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sessions-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sessions-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::account-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::account-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::account-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::account-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::automatic-login", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-login", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::home-directory", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-directory", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::home-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::home-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::home-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-loaded", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-loaded", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::language", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-account", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-account", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locked", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::login-frequency", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::login-frequency", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::login-frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::login-frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::login-frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::login-history", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::login-history", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::login-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::login-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::login-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::login-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::login-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::login-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::login-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::login-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nonexistent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nonexistent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nonexistent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nonexistent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nonexistent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-hint", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-hint", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shell", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shell", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shell", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shell", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shell", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::system-account", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-account", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::system-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::system-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::system-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-session", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-session", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: User_ConstructProps)
    _init (config?: User_ConstructProps): void
    static $gtype: GObject.Type
}
interface UserManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of AccountsService-1.0.AccountsService.UserManager */
    excludeUsernamesList?: object
    hasMultipleUsers?: boolean
    includeUsernamesList?: object
}
class UserManager {
    /* Properties of AccountsService-1.0.AccountsService.UserManager */
    excludeUsernamesList: object
    hasMultipleUsers: boolean
    includeUsernamesList: object
    readonly isLoaded: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of AccountsService-1.0.AccountsService.UserManager */
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
    cacheUserAsync(username: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    createUserAsync(username: string, fullname: string, accounttype: UserAccountType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    deleteUserAsync(user: User, removeFiles: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    uncacheUserAsync(username: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous user uncaching.
     * 
     * See act_user_manager_uncache_user_async().
     * @param result a #GAsyncResult
     */
    uncacheUserFinish(result: Gio.AsyncResult): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of AccountsService-1.0.AccountsService.UserManager */
    /**
     * Emitted when a user is added to the user manager.
     * @param user the #ActUser that was added
     */
    connect(sigName: "user-added", callback: ((user: User) => void)): number
    on(sigName: "user-added", callback: (user: User) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-added", callback: (user: User) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-added", callback: (user: User) => void): NodeJS.EventEmitter
    emit(sigName: "user-added", user: User): void
    /**
     * One of the users has changed
     * @param user the #ActUser that changed
     */
    connect(sigName: "user-changed", callback: ((user: User) => void)): number
    on(sigName: "user-changed", callback: (user: User) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-changed", callback: (user: User) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-changed", callback: (user: User) => void): NodeJS.EventEmitter
    emit(sigName: "user-changed", user: User): void
    /**
     * One of the users has logged in or out.
     * @param user the #ActUser that changed login status
     */
    connect(sigName: "user-is-logged-in-changed", callback: ((user: User) => void)): number
    on(sigName: "user-is-logged-in-changed", callback: (user: User) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-is-logged-in-changed", callback: (user: User) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-is-logged-in-changed", callback: (user: User) => void): NodeJS.EventEmitter
    emit(sigName: "user-is-logged-in-changed", user: User): void
    /**
     * Emitted when a user is removed from the user manager.
     * @param user the #ActUser that was removed
     */
    connect(sigName: "user-removed", callback: ((user: User) => void)): number
    on(sigName: "user-removed", callback: (user: User) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-removed", callback: (user: User) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-removed", callback: (user: User) => void): NodeJS.EventEmitter
    emit(sigName: "user-removed", user: User): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::exclude-usernames-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exclude-usernames-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::exclude-usernames-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::exclude-usernames-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::exclude-usernames-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-multiple-users", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-multiple-users", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-multiple-users", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-multiple-users", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-multiple-users", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::include-usernames-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::include-usernames-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::include-usernames-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::include-usernames-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::include-usernames-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-loaded", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-loaded", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UserManager_ConstructProps)
    _init (config?: UserManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Returns the user manager singleton instance.  Calling this function will
     * automatically being loading the user list if it isn't loaded already.
     * The #ActUserManager:is-loaded property will be set to %TRUE when the users
     * are finished loading and then act_user_manager_list_users() can be called.
     */
    static getDefault(): UserManager
    static $gtype: GObject.Type
}
abstract class UserClass {
    /* Fields of AccountsService-1.0.AccountsService.UserClass */
    parentClass: GObject.ObjectClass
    static name: string
}
abstract class UserManagerClass {
    /* Fields of AccountsService-1.0.AccountsService.UserManagerClass */
    parentClass: GObject.ObjectClass
    userAdded: (userManager: UserManager, user: User) => void
    userRemoved: (userManager: UserManager, user: User) => void
    userIsLoggedInChanged: (userManager: UserManager, user: User) => void
    userChanged: (userManager: UserManager, user: User) => void
    static name: string
}
}
export default AccountsService;