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

export namespace Malcontent {
    /**
     * Malcontent-0
     */

    /**
     * Different semantics for interpreting an application list.
     * @gir-type Enum
     * @since 0.2.0
     */
    enum AppFilterListType {
        /**
         * Any program in the list is not allowed to
         *    be run.
         */
        BLOCKLIST,
        /**
         * Any program not in the list is not allowed
         *    to be run.
         */
        ALLOWLIST,
    }

    /**
     * @gir-type Enum
     */
    export namespace AppFilterOarsValue {
        export const $gtype: GObject.GType<AppFilterOarsValue>;
    }

    /**
     * Rating values of the intensity of a given section in an app or game.
     * These are directly equivalent to the values in the `AsContentRatingValue`
     * enumeration in libappstream.
     * @gir-type Enum
     * @since 0.2.0
     */
    enum AppFilterOarsValue {
        /**
         * Unknown value for the given
         *    section.
         */
        UNKNOWN,
        /**
         * No rating for the given section.
         */
        NONE,
        /**
         * Mild rating for the given section.
         */
        MILD,
        /**
         * Moderate rating for the given
         *    section.
         */
        MODERATE,
        /**
         * Intense rating for the given
         *    section.
         */
        INTENSE,
    }

    /**
     * Errors relating to get/set operations on an {@link Malcontent.Manager} instance.
     * @gir-type Struct
     */
    class ManagerError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * Given user ID doesn’t exist
         */
        static INVALID_USER: number;
        /**
         * Not authorized to query properties of
         *     the given user
         */
        static PERMISSION_DENIED: number;
        /**
         * The data stored in a property of the given
         *     user is inconsistent or invalid
         */
        static INVALID_DATA: number;
        /**
         * Parental controls are disabled for all users
         */
        static DISABLED: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * Types of session limit which can be imposed on an account. Additional types
     * may be added in future.
     * @gir-type Enum
     * @since 0.5.0
     */
    enum SessionLimitsType {
        /**
         * No session limits are imposed.
         */
        NONE,
        /**
         * Sessions are limited to between a
         *     pair of given times each day.
         */
        DAILY_SCHEDULE,
    }

    /**
     * Deserialize an app filter previously serialized with
     * `mct_app_filter_serialize()`. This function guarantees to be able to
     * deserialize any serialized form from this version or older versions of
     * libmalcontent.
     *
     * If deserialization fails, {@link Malcontent.ManagerError.INVALID_DATA} will be returned.
     * @param variant a serialized app filter variant
     * @param user_id the ID of the user the app filter relates to
     * @returns deserialized app filter
     * @since 0.7.0
     */
    function app_filter_deserialize(variant: GLib.Variant, user_id: number): AppFilter;
    function app_filter_error_quark(): GLib.Quark;
    function manager_error_quark(): GLib.Quark;
    /**
     * Deserialize a set of session limits previously serialized with
     * `mct_session_limits_serialize()`. This function guarantees to be able to
     * deserialize any serialized form from this version or older versions of
     * libmalcontent.
     *
     * If deserialization fails, {@link Malcontent.ManagerError.INVALID_DATA} will be returned.
     * @param variant a serialized session limits variant
     * @param user_id the ID of the user the session limits relate to
     * @returns deserialized session limits
     * @since 0.7.0
     */
    function session_limits_deserialize(variant: GLib.Variant, user_id: number): SessionLimits;
    /**
     * @gir-type Flags
     */
    export namespace ManagerGetValueFlags {
        export const $gtype: GObject.GType<ManagerGetValueFlags>;
    }

    /**
     * Flags to control the behaviour of getter functions like
     * `mct_manager_get_app_filter()` and `mct_manager_get_app_filter_async()`.
     * @gir-type Flags
     * @since 0.5.0
     */
    enum ManagerGetValueFlags {
        /**
         * No flags set.
         */
        NONE,
        /**
         * Allow interactive polkit dialogs
         *    when requesting authorization.
         */
        INTERACTIVE,
    }

    /**
     * @gir-type Flags
     */
    export namespace ManagerSetValueFlags {
        export const $gtype: GObject.GType<ManagerSetValueFlags>;
    }

    /**
     * Flags to control the behaviour of setter functions like
     * `mct_manager_set_app_filter()` and `mct_manager_set_app_filter_async()`.
     * @gir-type Flags
     * @since 0.5.0
     */
    enum ManagerSetValueFlags {
        /**
         * No flags set.
         */
        NONE,
        /**
         * Allow interactive polkit dialogs
         *    when requesting authorization.
         */
        INTERACTIVE,
    }

    namespace Manager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the app filter stored for a user changes.
             * The new app filter for the user should be requested again from
             * the {@link Malcontent.Manager} instance.
             * @signal
             * @since 0.3.0
             * @run-last
             */
            'app-filter-changed': (arg0: number) => void;
            'notify::connection': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            connection: Gio.DBusConnection;
        }
    }

    /**
     * {@link Malcontent.Manager} is a top-level management object which is used to query and
     * monitor `MctAppFilters` for different users.
     * @gir-type Class
     * @since 0.3.0
     */
    class Manager extends GObject.Object {
        static $gtype: GObject.GType<Manager>;

        // Properties

        /**
         * A connection to the system bus, where accounts-service runs. It’s provided
         * mostly for testing purposes, or to allow an existing connection to be
         * re-used.
         * @since 0.3.0
         * @construct-only
         */
        get connection(): Gio.DBusConnection;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Manager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Manager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](connection: Gio.DBusConnection): Manager;

        // Signals

        /** @signal */
        connect<K extends keyof Manager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Manager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Manager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Manager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Manager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Manager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Synchronous version of `mct_manager_get_app_filter_async()`.
         * @param user_id ID of the user to query, typically coming from `getuid()`
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns app filter for the queried user
         */
        get_app_filter(
            user_id: number,
            flags: ManagerGetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): AppFilter;
        /**
         * Asynchronously get a snapshot of the app filter settings for the given
         * `user_id`.
         *
         * On failure, an {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a {@link GLib.IOError} will be
         * returned.
         * @param user_id ID of the user to query, typically coming from `getuid()`
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        get_app_filter_async(
            user_id: number,
            flags: ManagerGetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<AppFilter>;
        /**
         * Asynchronously get a snapshot of the app filter settings for the given
         * `user_id`.
         *
         * On failure, an {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a {@link GLib.IOError} will be
         * returned.
         * @param user_id ID of the user to query, typically coming from `getuid()`
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback}
         */
        get_app_filter_async(
            user_id: number,
            flags: ManagerGetValueFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get a snapshot of the app filter settings for the given
         * `user_id`.
         *
         * On failure, an {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a {@link GLib.IOError} will be
         * returned.
         * @param user_id ID of the user to query, typically coming from `getuid()`
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback}
         */
        get_app_filter_async(
            user_id: number,
            flags: ManagerGetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<AppFilter> | void;
        /**
         * Finish an asynchronous operation to get the app filter for a user, started
         * with `mct_manager_get_app_filter_async()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns app filter for the queried user
         */
        get_app_filter_finish(result: Gio.AsyncResult): AppFilter;
        /**
         * Synchronous version of `mct_manager_get_session_limits_async()`.
         * @param user_id ID of the user to query, typically coming from `getuid()`
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns session limits for the queried user
         */
        get_session_limits(
            user_id: number,
            flags: ManagerGetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): SessionLimits;
        /**
         * Asynchronously get a snapshot of the session limit settings for the given
         * `user_id`.
         *
         * On failure, an {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a {@link GLib.IOError} will be
         * returned via `mct_manager_get_session_limits_finish()`.
         * @param user_id ID of the user to query, typically coming from `getuid()`
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        get_session_limits_async(
            user_id: number,
            flags: ManagerGetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<SessionLimits>;
        /**
         * Asynchronously get a snapshot of the session limit settings for the given
         * `user_id`.
         *
         * On failure, an {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a {@link GLib.IOError} will be
         * returned via `mct_manager_get_session_limits_finish()`.
         * @param user_id ID of the user to query, typically coming from `getuid()`
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback}
         */
        get_session_limits_async(
            user_id: number,
            flags: ManagerGetValueFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get a snapshot of the session limit settings for the given
         * `user_id`.
         *
         * On failure, an {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a {@link GLib.IOError} will be
         * returned via `mct_manager_get_session_limits_finish()`.
         * @param user_id ID of the user to query, typically coming from `getuid()`
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback}
         */
        get_session_limits_async(
            user_id: number,
            flags: ManagerGetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<SessionLimits> | void;
        /**
         * Finish an asynchronous operation to get the session limits for a user,
         * started with `mct_manager_get_session_limits_async()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns session limits for the queried user
         */
        get_session_limits_finish(result: Gio.AsyncResult): SessionLimits;
        /**
         * Synchronous version of `mct_manager_set_app_filter_async()`.
         * @param user_id ID of the user to set the filter for, typically coming from `getuid()`
         * @param app_filter the app filter to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns `true` on success, `false` otherwise
         */
        set_app_filter(
            user_id: number,
            app_filter: AppFilter,
            flags: ManagerSetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously set the app filter settings for the given `user_id` to the
         * given `app_filter` instance. This will set all fields of the app filter.
         *
         * On failure, an {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a {@link GLib.IOError} will be
         * returned. The user’s app filter settings will be left in an undefined state.
         * @param user_id ID of the user to set the filter for, typically coming from `getuid()`
         * @param app_filter the app filter to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        set_app_filter_async(
            user_id: number,
            app_filter: AppFilter,
            flags: ManagerSetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously set the app filter settings for the given `user_id` to the
         * given `app_filter` instance. This will set all fields of the app filter.
         *
         * On failure, an {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a {@link GLib.IOError} will be
         * returned. The user’s app filter settings will be left in an undefined state.
         * @param user_id ID of the user to set the filter for, typically coming from `getuid()`
         * @param app_filter the app filter to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback}
         */
        set_app_filter_async(
            user_id: number,
            app_filter: AppFilter,
            flags: ManagerSetValueFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously set the app filter settings for the given `user_id` to the
         * given `app_filter` instance. This will set all fields of the app filter.
         *
         * On failure, an {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a {@link GLib.IOError} will be
         * returned. The user’s app filter settings will be left in an undefined state.
         * @param user_id ID of the user to set the filter for, typically coming from `getuid()`
         * @param app_filter the app filter to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback}
         */
        set_app_filter_async(
            user_id: number,
            app_filter: AppFilter,
            flags: ManagerSetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finish an asynchronous operation to set the app filter for a user, started
         * with `mct_manager_set_app_filter_async()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` on success, `false` otherwise
         */
        set_app_filter_finish(result: Gio.AsyncResult): boolean;
        /**
         * Synchronous version of `mct_manager_set_session_limits_async()`.
         * @param user_id ID of the user to set the limits for, typically coming from `getuid()`
         * @param session_limits the session limits to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns `true` on success, `false` otherwise
         */
        set_session_limits(
            user_id: number,
            session_limits: SessionLimits,
            flags: ManagerSetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously set the session limits settings for the given `user_id` to the
         * given `session_limits` instance.
         *
         * On failure, an {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a {@link GLib.IOError} will be
         * returned via `mct_manager_set_session_limits_finish()`. The user’s session
         * limits settings will be left in an undefined state.
         * @param user_id ID of the user to set the limits for, typically coming from `getuid()`
         * @param session_limits the session limits to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        set_session_limits_async(
            user_id: number,
            session_limits: SessionLimits,
            flags: ManagerSetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously set the session limits settings for the given `user_id` to the
         * given `session_limits` instance.
         *
         * On failure, an {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a {@link GLib.IOError} will be
         * returned via `mct_manager_set_session_limits_finish()`. The user’s session
         * limits settings will be left in an undefined state.
         * @param user_id ID of the user to set the limits for, typically coming from `getuid()`
         * @param session_limits the session limits to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback}
         */
        set_session_limits_async(
            user_id: number,
            session_limits: SessionLimits,
            flags: ManagerSetValueFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously set the session limits settings for the given `user_id` to the
         * given `session_limits` instance.
         *
         * On failure, an {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a {@link GLib.IOError} will be
         * returned via `mct_manager_set_session_limits_finish()`. The user’s session
         * limits settings will be left in an undefined state.
         * @param user_id ID of the user to set the limits for, typically coming from `getuid()`
         * @param session_limits the session limits to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback}
         */
        set_session_limits_async(
            user_id: number,
            session_limits: SessionLimits,
            flags: ManagerSetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finish an asynchronous operation to set the session limits for a user,
         * started with `mct_manager_set_session_limits_async()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` on success, `false` otherwise
         */
        set_session_limits_finish(result: Gio.AsyncResult): boolean;
    }

    /**
     * {@link Malcontent.AppFilter} is an opaque, immutable structure which contains a snapshot of
     * the app filtering settings for a user at a given time. This includes a list
     * of apps which are explicitly banned or allowed to be run by that user.
     *
     * Typically, app filter settings can only be changed by the administrator, and
     * are read-only for non-administrative users. The precise policy is set using
     * polkit.
     * @gir-type Struct
     * @since 0.2.0
     */
    class AppFilter {
        static $gtype: GObject.GType<AppFilter>;

        // Fields

        ref_count: number;
        user_id: number;
        app_list: string;
        app_list_type: AppFilterListType;
        allow_user_installation: boolean;
        allow_system_installation: boolean;

        // Static methods

        /**
         * Deserialize an app filter previously serialized with
         * `mct_app_filter_serialize()`. This function guarantees to be able to
         * deserialize any serialized form from this version or older versions of
         * libmalcontent.
         *
         * If deserialization fails, {@link Malcontent.ManagerError.INVALID_DATA} will be returned.
         * @param variant a serialized app filter variant
         * @param user_id the ID of the user the app filter relates to
         */
        static deserialize(variant: GLib.Variant, user_id: number): AppFilter;
        static error_quark(): GLib.Quark;

        // Methods

        /**
         * Check whether app filters `a` and `b` are equal.
         * @param b an {@link Malcontent.AppFilter}
         * @returns `true` if `a` and `b` are equal, `false` otherwise
         */
        equal(b: AppFilter): boolean;
        /**
         * List the OARS sections present in this app filter. The sections are returned
         * in lexicographic order. A section will be listed even if its stored value is
         * {@link Malcontent.AppFilterOarsValue.UNKNOWN}. The returned list may be empty.
         * @returns `null`-terminated    array of OARS sections
         */
        get_oars_sections(): string[];
        /**
         * Get the value assigned to the given `oars_section` in the OARS filter stored
         * within `filter`. If that section has no value explicitly defined,
         * {@link Malcontent.AppFilterOarsValue.UNKNOWN} is returned.
         *
         * This value is the most intense value allowed for apps to have in this
         * section, inclusive. Any app with a more intense value for this section must
         * be hidden from the user whose `filter` this is.
         *
         * This does not factor in `mct_app_filter_is_system_installation_allowed()`.
         * @param oars_section name of the OARS section to get the value from
         * @returns an {@link Malcontent.AppFilterOarsValue}
         */
        get_oars_value(oars_section: string): AppFilterOarsValue;
        /**
         * Get the user ID of the user this {@link Malcontent.AppFilter} is for.
         * @returns user ID of the relevant user, or `(uid_t) -1` if unknown
         */
        get_user_id(): number;
        /**
         * Check whether the app with the given `app_info` is allowed to be run
         * according to this app filter. This matches on multiple keys potentially
         * present in the {@link Gio.AppInfo}, including the path of the executable.
         * @param app_info application information
         * @returns `true` if the user this `filter` corresponds to is allowed to run the    app represented by `app_info` according to the `filter` policy; `false`    otherwise
         */
        is_appinfo_allowed(app_info: Gio.AppInfo): boolean;
        /**
         * Check whether apps handling the given `content_type` are allowed to be run
         * according to this app filter.
         *
         * Note that this method doesn’t match content subtypes. For example, if
         * `application/xml` is added to the blocklist but `application/xspf+xml` is not,
         * a check for whether `application/xspf+xml` is blocklisted would return false.
         * @param content_type content type to check
         * @returns `true` if the user this `filter` corresponds to is allowed to run    programs handling `content_type` according to the `filter` policy;    `false` otherwise
         */
        is_content_type_allowed(content_type: string): boolean;
        /**
         * Check whether the app filter is enabled and is going to impose at least one
         * restriction on the user. This gives a high level view of whether app filter
         * parental controls are ‘enabled’ for the given user.
         * @returns `true` if the app filter contains at least one non-default value,    `false` if it’s entirely default
         */
        is_enabled(): boolean;
        /**
         * Check whether the flatpak app with the given `app_id` is allowed to be run
         * according to this app filter. This is a globbing match, matching `app_id`
         * against potentially multiple entries in the blocklist, as the blocklist
         * contains flatpak refs (for example, `app/org.gnome.Builder/x86_64/master`)
         * which contain architecture and branch information. App IDs (for example,
         * `org.gnome.Builder`) do not contain architecture or branch information.
         * @param app_id flatpak ID for the app, for example `org.gnome.Builder`
         * @returns `true` if the user this `filter` corresponds to is allowed to run the    flatpak called `app_id` according to the `filter` policy; `false` otherwise
         */
        is_flatpak_app_allowed(app_id: string): boolean;
        /**
         * Check whether the flatpak app with the given `app_ref` is allowed to be run
         * according to this app filter.
         * @param app_ref flatpak ref for the app, for example `app/org.gnome.Builder/x86_64/master`
         * @returns `true` if the user this `filter` corresponds to is allowed to run the    flatpak called `app_ref` according to the `filter` policy; `false` otherwise
         */
        is_flatpak_ref_allowed(app_ref: string): boolean;
        /**
         * Check whether the program at `path` is allowed to be run according to this
         * app filter. `path` will be canonicalised without doing any I/O.
         * @param path absolute path of a program to check
         * @returns `true` if the user this `filter` corresponds to is allowed to run the    program at `path` according to the `filter` policy; `false` otherwise
         */
        is_path_allowed(path: string): boolean;
        /**
         * Get whether the user is allowed to install to the flatpak system repository.
         * This should be queried in addition to the OARS values
         * (mct_app_filter_get_oars_value()) — if it returns `false`, the OARS values
         * should be ignored and app installation should be unconditionally disallowed.
         * @returns `true` if app installation is allowed to the system repository for    this user; `false` if it is unconditionally disallowed for this user
         */
        is_system_installation_allowed(): boolean;
        /**
         * Get whether the user is allowed to install to their flatpak user repository.
         * This should be queried in addition to the OARS values
         * (mct_app_filter_get_oars_value()) — if it returns `false`, the OARS values
         * should be ignored and app installation should be unconditionally disallowed.
         * @returns `true` if app installation is allowed to the user repository for    this user; `false` if it is unconditionally disallowed for this user
         */
        is_user_installation_allowed(): boolean;
        /**
         * Increment the reference count of `filter`, and return the same pointer to it.
         * @returns the same pointer as `filter`
         */
        ref(): AppFilter;
        /**
         * Build a {@link GLib.Variant} which contains the app filter from `filter`, in an opaque
         * variant format. This format may change in future, but
         * `mct_app_filter_deserialize()` is guaranteed to always be able to load any
         * variant produced by the current or any previous version of
         * `mct_app_filter_serialize()`.
         * @returns a new, floating {@link GLib.Variant} containing the app    filter
         */
        serialize(): GLib.Variant;
        /**
         * Decrement the reference count of `filter`. If the reference count reaches
         * zero, free the `filter` and all its resources.
         */
        unref(): void;
    }

    /**
     * {@link Malcontent.AppFilterBuilder} is a stack-allocated mutable structure used to build an
     * {@link Malcontent.AppFilter} instance. Use `mct_app_filter_builder_init()`, various method
     * calls to set properties of the app filter, and then
     * `mct_app_filter_builder_end()`, to construct an {@link Malcontent.AppFilter}.
     * @gir-type Struct
     * @since 0.2.0
     */
    class AppFilterBuilder {
        static $gtype: GObject.GType<AppFilterBuilder>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): AppFilterBuilder;

        // Methods

        /**
         * Add `content_type` to the blocklist of content types in the filter under
         * construction. The `content_type` will not be added again if it’s already been
         * added.
         *
         * Note that this method doesn’t handle content subtypes. For example, if
         * `application/xml` is added to the blocklist but `application/xspf+xml` is not,
         * a check for whether `application/xspf+xml` is blocklisted would return false.
         * @param content_type a content type to blocklist
         */
        blocklist_content_type(content_type: string): void;
        /**
         * Add `app_ref` to the blocklist of flatpak refs in the filter under
         * construction. The `app_ref` will not be added again if it’s already been
         * added.
         * @param app_ref a flatpak app ref to blocklist
         */
        blocklist_flatpak_ref(app_ref: string): void;
        /**
         * Add `path` to the blocklist of app paths in the filter under construction. It
         * will be canonicalised (without doing any I/O) before being added.
         * The canonicalised `path` will not be added again if it’s already been added.
         * @param path an absolute path to blocklist
         */
        blocklist_path(path: string): void;
        /**
         * Clear `builder`, freeing any internal state in it. This will not free the
         * top-level storage for `builder` itself, which is assumed to be allocated on
         * the stack.
         *
         * If called on an already-cleared {@link Malcontent.AppFilterBuilder}, this function is
         * idempotent.
         */
        clear(): void;
        /**
         * Copy the given `builder` to a newly-allocated {@link Malcontent.AppFilterBuilder} on the
         * heap. This is safe to use with cleared, stack-allocated
         * `MctAppFilterBuilders`.
         * @returns a copy of `builder`
         */
        copy(): AppFilterBuilder;
        /**
         * Finish constructing an {@link Malcontent.AppFilter} with the given `builder`, and return it.
         * The {@link Malcontent.AppFilterBuilder} will be cleared as if `mct_app_filter_builder_clear()`
         * had been called.
         * @returns a newly constructed {@link Malcontent.AppFilter}
         */
        end(): AppFilter;
        /**
         * Free an {@link Malcontent.AppFilterBuilder} originally allocated using
         * `mct_app_filter_builder_new()`. This must not be called on stack-allocated
         * builders initialised using `mct_app_filter_builder_init()`.
         */
        free(): void;
        /**
         * Initialise the given `builder` so it can be used to construct a new
         * {@link Malcontent.AppFilter}. `builder` must have been allocated on the stack, and must not
         * already be initialised.
         *
         * Construct the {@link Malcontent.AppFilter} by calling methods on `builder`, followed by
         * `mct_app_filter_builder_end()`. To abort construction, use
         * `mct_app_filter_builder_clear()`.
         */
        init(): void;
        /**
         * Set whether the user is allowed to install to the flatpak system repository.
         * If this is `true`, app installation is still subject to the OARS values
         * (mct_app_filter_builder_set_oars_value()). If it is `false`, app installation
         * is unconditionally disallowed for this user.
         * @param allow_system_installation `true` to allow app installation; `false` to    unconditionally disallow it
         */
        set_allow_system_installation(allow_system_installation: boolean): void;
        /**
         * Set whether the user is allowed to install to their flatpak user repository.
         * If this is `true`, app installation is still subject to the OARS values
         * (mct_app_filter_builder_set_oars_value()). If it is `false`, app installation
         * is unconditionally disallowed for this user.
         * @param allow_user_installation `true` to allow app installation; `false` to    unconditionally disallow it
         */
        set_allow_user_installation(allow_user_installation: boolean): void;
        /**
         * Set the OARS value for the given `oars_section`, indicating the intensity of
         * content covered by that section which the user is allowed to see (inclusive).
         * Any apps which have more intense content in this section should not be usable
         * by the user.
         * @param oars_section name of the OARS section to set the value for
         * @param value value to set for the `oars_section`
         */
        set_oars_value(oars_section: string, value: AppFilterOarsValue | null): void;
    }

    /**
     * @gir-type Alias
     */
    type ManagerClass = typeof Manager;
    /**
     * {@link Malcontent.SessionLimits} is an opaque, immutable structure which contains a snapshot
     * of the session limits settings for a user at a given time. This includes
     * whether session limits are being enforced, and the limit policy — for
     * example, the times of day when a user is allowed to use the computer.
     *
     * Typically, session limits settings can only be changed by the administrator,
     * and are read-only for non-administrative users. The precise policy is set
     * using polkit.
     * @gir-type Struct
     * @since 0.5.0
     */
    class SessionLimits {
        static $gtype: GObject.GType<SessionLimits>;

        // Fields

        ref_count: number;
        user_id: number;
        limit_type: SessionLimitsType;
        daily_start_time: number;
        daily_end_time: number;

        // Static methods

        /**
         * Deserialize a set of session limits previously serialized with
         * `mct_session_limits_serialize()`. This function guarantees to be able to
         * deserialize any serialized form from this version or older versions of
         * libmalcontent.
         *
         * If deserialization fails, {@link Malcontent.ManagerError.INVALID_DATA} will be returned.
         * @param variant a serialized session limits variant
         * @param user_id the ID of the user the session limits relate to
         */
        static deserialize(variant: GLib.Variant, user_id: number): SessionLimits;

        // Methods

        /**
         * Check whether the user has time remaining in which they are allowed to use
         * the computer, assuming that `now_usecs` is the current time, and applying the
         * session limit policy from `limits` to it.
         *
         * This will return whether the user is allowed to use the computer now; further
         * information about the policy and remaining time is provided in
         * `time_remaining_secs_out` and `time_limit_enabled_out`.
         * @param now_usecs current time as microseconds since the Unix epoch (UTC),     typically queried using `g_get_real_time()`
         * @returns `true` if the user this `limits` corresponds to is allowed to be in     an active session at the given time; `false` otherwise
         */
        check_time_remaining(now_usecs: number): [boolean, number, boolean];
        /**
         * Get the user ID of the user this {@link Malcontent.SessionLimits} is for.
         * @returns user ID of the relevant user, or `(uid_t) -1` if unknown
         */
        get_user_id(): number;
        /**
         * Check whether any session limits are enabled and are going to impose at least
         * one restriction on the user. This gives a high level view of whether session
         * limit parental controls are ‘enabled’ for the given user.
         *
         * This function is equivalent to the value returned by the
         * `time_limit_enabled_out` argument of
         * `mct_session_limits_check_time_remaining()`.
         * @returns `true` if the session limits object contains at least one restrictive    session limit, `false` if there are no limits in place
         */
        is_enabled(): boolean;
        /**
         * Increment the reference count of `limits`, and return the same pointer to it.
         * @returns the same pointer as `limits`
         */
        ref(): SessionLimits;
        /**
         * Build a {@link GLib.Variant} which contains the session limits from `limits`, in an
         * opaque variant format. This format may change in future, but
         * `mct_session_limits_deserialize()` is guaranteed to always be able to load any
         * variant produced by the current or any previous version of
         * `mct_session_limits_serialize()`.
         * @returns a new, floating {@link GLib.Variant} containing the    session limits
         */
        serialize(): GLib.Variant;
        /**
         * Decrement the reference count of `limits`. If the reference count reaches
         * zero, free the `limits` and all its resources.
         */
        unref(): void;
    }

    /**
     * {@link Malcontent.SessionLimitsBuilder} is a stack-allocated mutable structure used to build
     * an {@link Malcontent.SessionLimits} instance. Use `mct_session_limits_builder_init()`, various
     * method calls to set properties of the session limits, and then
     * `mct_session_limits_builder_end()`, to construct an {@link Malcontent.SessionLimits}.
     * @gir-type Struct
     * @since 0.5.0
     */
    class SessionLimitsBuilder {
        static $gtype: GObject.GType<SessionLimitsBuilder>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): SessionLimitsBuilder;

        // Methods

        /**
         * Clear `builder`, freeing any internal state in it. This will not free the
         * top-level storage for `builder` itself, which is assumed to be allocated on
         * the stack.
         *
         * If called on an already-cleared {@link Malcontent.SessionLimitsBuilder}, this function is
         * idempotent.
         */
        clear(): void;
        /**
         * Copy the given `builder` to a newly-allocated {@link Malcontent.SessionLimitsBuilder} on the
         * heap. This is safe to use with cleared, stack-allocated
         * `MctSessionLimitsBuilders`.
         * @returns a copy of `builder`
         */
        copy(): SessionLimitsBuilder;
        /**
         * Finish constructing an {@link Malcontent.SessionLimits} with the given `builder`, and return
         * it. The {@link Malcontent.SessionLimitsBuilder} will be cleared as if
         * `mct_session_limits_builder_clear()` had been called.
         * @returns a newly constructed {@link Malcontent.SessionLimits}
         */
        end(): SessionLimits;
        /**
         * Free an {@link Malcontent.SessionLimitsBuilder} originally allocated using
         * `mct_session_limits_builder_new()`. This must not be called on stack-allocated
         * builders initialised using `mct_session_limits_builder_init()`.
         */
        free(): void;
        /**
         * Initialise the given `builder` so it can be used to construct a new
         * {@link Malcontent.SessionLimits}. `builder` must have been allocated on the stack, and must
         * not already be initialised.
         *
         * Construct the {@link Malcontent.SessionLimits} by calling methods on `builder`, followed by
         * `mct_session_limits_builder_end()`. To abort construction, use
         * `mct_session_limits_builder_clear()`.
         */
        init(): void;
        /**
         * Set the session limits in `builder` to be a daily schedule, where sessions are
         * allowed between `start_time_secs` and `end_time_secs` every day.
         * `start_time_secs` and `end_time_secs` are given as offsets from the start of
         * the day, in seconds. `end_time_secs` must be greater than `start_time_secs`.
         * `end_time_secs` must be at most `24 * 60 * 60`.
         *
         * This will overwrite any other session limits.
         * @param start_time_secs number of seconds since midnight when the user’s session     can first start
         * @param end_time_secs number of seconds since midnight when the user’s session can     last end
         */
        set_daily_schedule(start_time_secs: number, end_time_secs: number): void;
        /**
         * Unset any session limits currently set in the `builder`.
         */
        set_none(): void;
    }

    /**
     * @gir-type Alias
     */
    type AppFilterError = ManagerError;
    /**
     * @gir-type Alias
     */
    type GetAppFilterFlags = ManagerGetValueFlags;
    /**
     * @gir-type Alias
     */
    type SetAppFilterFlags = ManagerSetValueFlags;
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

export default Malcontent;

// END
