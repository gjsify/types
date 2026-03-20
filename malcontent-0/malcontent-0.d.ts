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
     * @gir-type Enum
     */
    export namespace AppFilterOarsValue {
        export const $gtype: GObject.GType<AppFilterOarsValue>;
    }

    /**
     * Rating values of the intensity of a given section in an app or game.
     *
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
     * Errors relating to get/set operations on a {@link Malcontent.Manager}
     * instance.
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

        /**
         * Error quark for {@link Malcontent.ManagerError}.
         */
        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace UserType {
        export const $gtype: GObject.GType<UserType>;
    }

    /**
     * Type of a user account.
     * @gir-type Enum
     * @since 0.14.0
     */
    enum UserType {
        /**
         * Unknown user account
         */
        UNKNOWN,
        /**
         * System user (such as for running a daemon)
         */
        SYSTEM,
        /**
         * Child user (i.e. a non-administrator)
         */
        CHILD,
        /**
         * Parent user (i.e. an administrator)
         */
        PARENT,
    }

    /**
     * @gir-type Enum
     */
    export namespace WebFilterType {
        export const $gtype: GObject.GType<WebFilterType>;
    }

    /**
     * Types of web filtering which can be imposed on an account.
     *
     * Additional types may be added in future.
     * @gir-type Enum
     * @since 0.14.0
     */
    enum WebFilterType {
        /**
         * The user’s web access is not filtered.
         */
        NONE,
        /**
         * Websites are allowed by default unless
         *   they’re listed in one of the block lists or the custom block list. The
         *   allow lists and custom allow list override the block lists.
         */
        BLOCKLIST,
        /**
         * Websites are blocked by default unless
         *   they’re listed in one of the allow lists or the custom allow list. The
         *   block lists are ignored.
         */
        ALLOWLIST,
    }

    /**
     * Deserialize an app filter previously serialized with
     * {@link Malcontent.AppFilter.serialize}.
     *
     * This function guarantees to be able to deserialize any serialized form from
     * this version or older versions of libmalcontent.
     *
     * If deserialization fails, {@link Malcontent.ManagerError.INVALID_DATA} will
     * be returned.
     * @param variant a serialized app filter variant
     * @param user_id the ID of the user the app filter relates to
     * @returns deserialized app filter
     * @since 0.7.0
     */
    function app_filter_deserialize(variant: GLib.Variant, user_id: never): AppFilter;
    /**
     * Error quark aliased to {@link Malcontent.ManagerError}.
     * @returns identifier for error domain
     * @since 0.2.0
     */
    function app_filter_error_quark(): GLib.Quark;
    /**
     * Error quark for {@link Malcontent.ManagerError}.
     * @returns identifier for error domain
     * @since 0.5.0
     */
    function manager_error_quark(): GLib.Quark;
    /**
     * Deserialize a set of session limits previously serialized with
     * {@link Malcontent.SessionLimits.serialize}.
     *
     * This function guarantees to be able to deserialize any serialized form from
     * this version or older versions of libmalcontent.
     *
     * If deserialization fails, {@link Malcontent.ManagerError.INVALID_DATA} will
     * be returned.
     * @param variant a serialized session limits variant
     * @param user_id the ID of the user the session limits relate to
     * @returns deserialized session limits
     * @since 0.7.0
     */
    function session_limits_deserialize(variant: GLib.Variant, user_id: never): SessionLimits;
    /**
     * Deserialize a set of web filters previously serialized with
     * {@link Malcontent.WebFilter.serialize}.
     *
     * This function guarantees to be able to deserialize any serialized form from
     * this version or older versions of libmalcontent.
     *
     * If deserialization fails, {@link Malcontent.ManagerError.INVALID_DATA} will
     * be returned.
     * @param variant a serialized web filter variant
     * @param user_id the ID of the user the web filter relates to
     * @returns deserialized web filter
     * @since 0.14.0
     */
    function web_filter_deserialize(variant: GLib.Variant, user_id: never): WebFilter;
    /**
     * Validate a potential domain name.
     *
     * This checks against [RFC 2181](https://datatracker.ietf.org/doc/html/rfc2181).
     *
     * See {@link Malcontent.WebFilter.validate_hostname} for validating
     * hostnames instead. Domain names are entries in the DNS database, hostnames
     * are website addresses. Every hostname is a domain name, but not vice-versa.
     * @param domain_name a potential domain name
     * @returns true if `domain_name` is a valid domain name, false otherwise
     * @since 0.14.0
     */
    function web_filter_validate_domain_name(domain_name: string): boolean;
    /**
     * Validate a potential domain name.
     *
     * This checks against [RFC 2181](https://datatracker.ietf.org/doc/html/rfc2181).
     *
     * See {@link Malcontent.WebFilter.validate_hostname_len} for validating
     * hostnames instead. Domain names are entries in the DNS database, hostnames
     * are website addresses. Every hostname is a domain name, but not vice-versa.
     * @param domain_name a potential domain_name
     * @param max_len length (in bytes) to check, or until the first nul byte is reached
     * @returns true if `domain_name` is a valid domain_name, false otherwise
     * @since 0.14.0
     */
    function web_filter_validate_domain_name_len(domain_name: string, max_len: number): boolean;
    /**
     * Validate a potential filter list ID.
     *
     * Filter list IDs must be non-empty UTF-8 strings.
     * @param id a potential filter list ID
     * @returns true if `id` is a valid filter list ID, false otherwise
     * @since 0.14.0
     */
    function web_filter_validate_filter_id(id: string): boolean;
    /**
     * Validate a potential hostname.
     *
     * This checks against [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035).
     *
     * See {@link Malcontent.WebFilter.validate_domain_name} for validating
     * domain names instead. Domain names are entries in the DNS database, hostnames
     * are website addresses. Every hostname is a domain name, but not vice-versa.
     * @param hostname a potential hostname
     * @returns true if `hostname` is a valid hostname, false otherwise
     * @since 0.14.0
     */
    function web_filter_validate_hostname(hostname: string): boolean;
    /**
     * Validate a potential hostname.
     *
     * This checks against [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035).
     *
     * See {@link Malcontent.WebFilter.validate_domain_name_len} for validating
     * domain names instead. Domain names are entries in the DNS database, hostnames
     * are website addresses. Every hostname is a domain name, but not vice-versa.
     * @param hostname a potential hostname
     * @param max_len length (in bytes) to check, or until the first nul byte is reached
     * @returns true if `hostname` is a valid hostname, false otherwise
     * @since 0.14.0
     */
    function web_filter_validate_hostname_len(hostname: string, max_len: number): boolean;
    /**
     * @gir-type Flags
     */
    export namespace ManagerGetValueFlags {
        export const $gtype: GObject.GType<ManagerGetValueFlags>;
    }

    /**
     * Flags to control the behaviour of getter functions like
     * {@link Malcontent.Manager.get_app_filter} and
     * {@link Malcontent.Manager.get_app_filter_async}.
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
         *   when requesting authorization.
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
     * {@link Malcontent.Manager.set_app_filter} and
     * {@link Malcontent.Manager.set_app_filter_async}.
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
         *   when requesting authorization.
         */
        INTERACTIVE,
    }

    namespace Manager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the app filter stored for a user changes.
             *
             * The new app filter for the user should be requested again from
             * the {@link Malcontent.Manager} instance.
             * @signal
             * @since 0.3.0
             * @run-last
             */
            'app-filter-changed': (arg0: number) => void;
            /**
             * Emitted when the session limits stored for a user change.
             *
             * The new session limits for the user should be requested again from
             * the {@link Malcontent.Manager} instance.
             * @signal
             * @since 0.14.0
             * @run-last
             */
            'session-limits-changed': (arg0: number) => void;
            /**
             * Emitted when the web filter stored for a user changes.
             *
             * The new web filter for the user should be requested again from
             * the {@link Malcontent.Manager} instance.
             * @signal
             * @since 0.14.0
             * @run-last
             */
            'web-filter-changed': (arg0: number) => void;
            'notify::connection': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            connection: Gio.DBusConnection;
        }
    }

    /**
     * A top-level policy management object which is used to query, set and monitor
     * parental controls policy for different users.
     * @gir-type Class
     * @since 0.3.0
     */
    class Manager extends GObject.Object {
        static $gtype: GObject.GType<Manager>;

        // Properties

        /**
         * A connection to the system bus, where accounts-service runs.
         *
         * It’s provided mostly for testing purposes, or to allow an existing
         * connection to be re-used.
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
         * Synchronous version of {@link Malcontent.Manager.get_app_filter_async}.
         * @param user_id ID of the user to query, typically coming from `getuid()`
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @returns app filter for the queried user
         */
        get_app_filter(
            user_id: never,
            flags: ManagerGetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): AppFilter;
        /**
         * Asynchronously get a snapshot of the app filter settings for the given
         * `user_id`.
         *
         * On failure, a {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a
         * {@link Gio.IOErrorEnum} will be returned.
         * @param user_id ID of the user to query, typically coming from `getuid()`
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         */
        get_app_filter_async(
            user_id: never,
            flags: ManagerGetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<AppFilter>;
        /**
         * Asynchronously get a snapshot of the app filter settings for the given
         * `user_id`.
         *
         * On failure, a {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a
         * {@link Gio.IOErrorEnum} will be returned.
         * @param user_id ID of the user to query, typically coming from `getuid()`
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @param callback an asynchronous operation result callback
         */
        get_app_filter_async(
            user_id: never,
            flags: ManagerGetValueFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get a snapshot of the app filter settings for the given
         * `user_id`.
         *
         * On failure, a {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a
         * {@link Gio.IOErrorEnum} will be returned.
         * @param user_id ID of the user to query, typically coming from `getuid()`
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @param callback an asynchronous operation result callback
         */
        get_app_filter_async(
            user_id: never,
            flags: ManagerGetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<AppFilter> | void;
        /**
         * Finish an asynchronous operation to get the app filter for a user, started
         * with {@link Malcontent.Manager.get_app_filter_async}.
         * @param result the asynchronous operation result
         * @returns app filter for the queried user
         */
        get_app_filter_finish(result: Gio.AsyncResult): AppFilter;
        /**
         * Synchronous version of {@link Malcontent.Manager.get_session_limits_async}.
         * @param user_id ID of the user to query, typically coming from `getuid()`
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @returns session limits for the queried user
         */
        get_session_limits(
            user_id: never,
            flags: ManagerGetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): SessionLimits;
        /**
         * Asynchronously get a snapshot of the session limit settings for the given
         * `user_id`.
         *
         * On failure, a {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a
         * {@link Gio.IOErrorEnum} will be returned via
         * {@link Malcontent.Manager.get_session_limits_finish}.
         * @param user_id ID of the user to query, typically coming from `getuid()`
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         */
        get_session_limits_async(
            user_id: never,
            flags: ManagerGetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<SessionLimits>;
        /**
         * Asynchronously get a snapshot of the session limit settings for the given
         * `user_id`.
         *
         * On failure, a {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a
         * {@link Gio.IOErrorEnum} will be returned via
         * {@link Malcontent.Manager.get_session_limits_finish}.
         * @param user_id ID of the user to query, typically coming from `getuid()`
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @param callback an asynchronous operation result callback
         */
        get_session_limits_async(
            user_id: never,
            flags: ManagerGetValueFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get a snapshot of the session limit settings for the given
         * `user_id`.
         *
         * On failure, a {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a
         * {@link Gio.IOErrorEnum} will be returned via
         * {@link Malcontent.Manager.get_session_limits_finish}.
         * @param user_id ID of the user to query, typically coming from `getuid()`
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @param callback an asynchronous operation result callback
         */
        get_session_limits_async(
            user_id: never,
            flags: ManagerGetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<SessionLimits> | void;
        /**
         * Finish an asynchronous operation to get the session limits for a user,
         * started with {@link Malcontent.Manager.get_session_limits_async}.
         * @param result the asynchronous operation result
         * @returns session limits for the queried user
         */
        get_session_limits_finish(result: Gio.AsyncResult): SessionLimits;
        /**
         * Synchronous version of {@link Malcontent.Manager.get_web_filter_async}.
         * @param user_id ID of the user to query, typically coming from `getuid()`
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @returns web filter for the queried user
         */
        get_web_filter(
            user_id: never,
            flags: ManagerGetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): WebFilter;
        /**
         * Asynchronously get a snapshot of the web filter settings for the given
         * `user_id`.
         *
         * On failure, a {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a
         * {@link Gio.IOErrorEnum} will be returned via
         * {@link Malcontent.Manager.get_web_filter_finish}.
         * @param user_id ID of the user to query, typically coming from `getuid()`
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         */
        get_web_filter_async(
            user_id: never,
            flags: ManagerGetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<WebFilter>;
        /**
         * Asynchronously get a snapshot of the web filter settings for the given
         * `user_id`.
         *
         * On failure, a {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a
         * {@link Gio.IOErrorEnum} will be returned via
         * {@link Malcontent.Manager.get_web_filter_finish}.
         * @param user_id ID of the user to query, typically coming from `getuid()`
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @param callback an asynchronous operation result callback
         */
        get_web_filter_async(
            user_id: never,
            flags: ManagerGetValueFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get a snapshot of the web filter settings for the given
         * `user_id`.
         *
         * On failure, a {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a
         * {@link Gio.IOErrorEnum} will be returned via
         * {@link Malcontent.Manager.get_web_filter_finish}.
         * @param user_id ID of the user to query, typically coming from `getuid()`
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @param callback an asynchronous operation result callback
         */
        get_web_filter_async(
            user_id: never,
            flags: ManagerGetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<WebFilter> | void;
        /**
         * Finish an asynchronous operation to get the web filter for a user,
         * started with {@link Malcontent.Manager.get_web_filter_async}.
         * @param result the asynchronous operation result
         * @returns web filter for the queried user
         */
        get_web_filter_finish(result: Gio.AsyncResult): WebFilter;
        /**
         * Synchronous version of {@link Malcontent.Manager.set_app_filter_async}.
         * @param user_id ID of the user to set the filter for, typically coming from   `getuid()`
         * @param app_filter the app filter to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @returns true on success, false otherwise
         */
        set_app_filter(
            user_id: never,
            app_filter: AppFilter,
            flags: ManagerSetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously set the app filter settings for the given `user_id` to the
         * given `app_filter` instance.
         *
         * This will set all fields of the app filter.
         *
         * On failure, a {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a
         * {@link Gio.IOErrorEnum} will be returned. The user’s app filter settings will be
         * left in an undefined state.
         * @param user_id ID of the user to set the filter for, typically coming from   `getuid()`
         * @param app_filter the app filter to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         */
        set_app_filter_async(
            user_id: never,
            app_filter: AppFilter,
            flags: ManagerSetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously set the app filter settings for the given `user_id` to the
         * given `app_filter` instance.
         *
         * This will set all fields of the app filter.
         *
         * On failure, a {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a
         * {@link Gio.IOErrorEnum} will be returned. The user’s app filter settings will be
         * left in an undefined state.
         * @param user_id ID of the user to set the filter for, typically coming from   `getuid()`
         * @param app_filter the app filter to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @param callback an asynchronous operation result callback
         */
        set_app_filter_async(
            user_id: never,
            app_filter: AppFilter,
            flags: ManagerSetValueFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously set the app filter settings for the given `user_id` to the
         * given `app_filter` instance.
         *
         * This will set all fields of the app filter.
         *
         * On failure, a {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a
         * {@link Gio.IOErrorEnum} will be returned. The user’s app filter settings will be
         * left in an undefined state.
         * @param user_id ID of the user to set the filter for, typically coming from   `getuid()`
         * @param app_filter the app filter to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @param callback an asynchronous operation result callback
         */
        set_app_filter_async(
            user_id: never,
            app_filter: AppFilter,
            flags: ManagerSetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finish an asynchronous operation to set the app filter for a user, started
         * with {@link Malcontent.Manager.set_app_filter_async}.
         * @param result the asynchronous operation result
         * @returns true on success, false otherwise
         */
        set_app_filter_finish(result: Gio.AsyncResult): boolean;
        /**
         * Synchronous version of {@link Malcontent.Manager.set_session_limits_async}.
         * @param user_id ID of the user to set the limits for, typically coming from   `getuid()`
         * @param session_limits the session limits to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @returns true on success, false otherwise
         */
        set_session_limits(
            user_id: never,
            session_limits: SessionLimits,
            flags: ManagerSetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously set the session limits settings for the given `user_id` to the
         * given `session_limits` instance.
         *
         * On failure, a {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a
         * {@link Gio.IOErrorEnum} will be returned via
         * {@link Malcontent.Manager.set_session_limits_finish}. The user’s session
         * limits settings will be left in an undefined state.
         * @param user_id ID of the user to set the limits for, typically coming from   `getuid()`
         * @param session_limits the session limits to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         */
        set_session_limits_async(
            user_id: never,
            session_limits: SessionLimits,
            flags: ManagerSetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously set the session limits settings for the given `user_id` to the
         * given `session_limits` instance.
         *
         * On failure, a {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a
         * {@link Gio.IOErrorEnum} will be returned via
         * {@link Malcontent.Manager.set_session_limits_finish}. The user’s session
         * limits settings will be left in an undefined state.
         * @param user_id ID of the user to set the limits for, typically coming from   `getuid()`
         * @param session_limits the session limits to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @param callback an asynchronous operation result callback
         */
        set_session_limits_async(
            user_id: never,
            session_limits: SessionLimits,
            flags: ManagerSetValueFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously set the session limits settings for the given `user_id` to the
         * given `session_limits` instance.
         *
         * On failure, a {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a
         * {@link Gio.IOErrorEnum} will be returned via
         * {@link Malcontent.Manager.set_session_limits_finish}. The user’s session
         * limits settings will be left in an undefined state.
         * @param user_id ID of the user to set the limits for, typically coming from   `getuid()`
         * @param session_limits the session limits to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @param callback an asynchronous operation result callback
         */
        set_session_limits_async(
            user_id: never,
            session_limits: SessionLimits,
            flags: ManagerSetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finish an asynchronous operation to set the session limits for a user,
         * started with {@link Malcontent.Manager.set_session_limits_async}.
         * @param result the asynchronous operation result
         * @returns true on success, false otherwise
         */
        set_session_limits_finish(result: Gio.AsyncResult): boolean;
        /**
         * Synchronous version of {@link Malcontent.Manager.set_web_filter_async}.
         * @param user_id ID of the user to set the web_filter for, typically coming from   `getuid()`
         * @param web_filter the web filter to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @returns true on success, false otherwise
         */
        set_web_filter(
            user_id: never,
            web_filter: WebFilter,
            flags: ManagerSetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously set the web filter settings for the given `user_id` to the
         * given `web_filter` instance.
         *
         * On failure, a {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a
         * {@link Gio.IOErrorEnum} will be returned via
         * {@link Malcontent.Manager.set_web_filter_finish}. The user’s web filter
         * settings will be left in an undefined state.
         * @param user_id ID of the user to set the web filter for, typically coming from   `getuid()`
         * @param web_filter the web filter to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         */
        set_web_filter_async(
            user_id: never,
            web_filter: WebFilter,
            flags: ManagerSetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously set the web filter settings for the given `user_id` to the
         * given `web_filter` instance.
         *
         * On failure, a {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a
         * {@link Gio.IOErrorEnum} will be returned via
         * {@link Malcontent.Manager.set_web_filter_finish}. The user’s web filter
         * settings will be left in an undefined state.
         * @param user_id ID of the user to set the web filter for, typically coming from   `getuid()`
         * @param web_filter the web filter to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @param callback an asynchronous operation result callback
         */
        set_web_filter_async(
            user_id: never,
            web_filter: WebFilter,
            flags: ManagerSetValueFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously set the web filter settings for the given `user_id` to the
         * given `web_filter` instance.
         *
         * On failure, a {@link Malcontent.ManagerError}, a {@link Gio.DBusError} or a
         * {@link Gio.IOErrorEnum} will be returned via
         * {@link Malcontent.Manager.set_web_filter_finish}. The user’s web filter
         * settings will be left in an undefined state.
         * @param user_id ID of the user to set the web filter for, typically coming from   `getuid()`
         * @param web_filter the web filter to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @param callback an asynchronous operation result callback
         */
        set_web_filter_async(
            user_id: never,
            web_filter: WebFilter,
            flags: ManagerSetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finish an asynchronous operation to set the web filter for a user,
         * started with {@link Malcontent.Manager.set_web_filter_async}.
         * @param result the asynchronous operation result
         * @returns true on success, false otherwise
         */
        set_web_filter_finish(result: Gio.AsyncResult): boolean;
    }

    namespace User {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::display-name': (pspec: GObject.ParamSpec) => void;
            'notify::icon-path': (pspec: GObject.ParamSpec) => void;
            'notify::locale': (pspec: GObject.ParamSpec) => void;
            'notify::login-time': (pspec: GObject.ParamSpec) => void;
            'notify::real-name': (pspec: GObject.ParamSpec) => void;
            'notify::uid': (pspec: GObject.ParamSpec) => void;
            'notify::user-type': (pspec: GObject.ParamSpec) => void;
            'notify::username': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            display_name: string;
            displayName: string;
            icon_path: string;
            iconPath: string;
            locale: string;
            login_time: number;
            loginTime: number;
            real_name: string;
            realName: string;
            uid: number;
            user_type: UserType;
            userType: UserType;
            username: string;
        }
    }

    /**
     * A user account on the system.
     *
     * Many of the properties on the account may change over time if the user
     * database is edited. If so, `GObject.Object::notify` will be emitted
     * on them. {@link Malcontent.User.uid} and
     * {@link Malcontent.User.username} cannot change after construction.
     * @gir-type Class
     * @since 0.14.0
     */
    class User extends GObject.Object {
        static $gtype: GObject.GType<User>;

        // Properties

        /**
         * The user’s real name or username if the real name is unset.
         *
         * This is guaranteed to not be `NULL`, and should be used in user interfaces
         * when you need a non-`NULl` human readable name for a user.
         * @since 0.14.0
         * @read-only
         */
        get display_name(): string;
        /**
         * The user’s real name or username if the real name is unset.
         *
         * This is guaranteed to not be `NULL`, and should be used in user interfaces
         * when you need a non-`NULl` human readable name for a user.
         * @since 0.14.0
         * @read-only
         */
        get displayName(): string;
        /**
         * Path to the user’s icon/avatar image.
         *
         * This may be `NULL` if not set on the system.
         * @since 0.14.0
         * @read-only
         */
        get icon_path(): string;
        /**
         * Path to the user’s icon/avatar image.
         *
         * This may be `NULL` if not set on the system.
         * @since 0.14.0
         * @read-only
         */
        get iconPath(): string;
        /**
         * The user’s login locale.
         *
         * This is in the format `language[_territory][.codeset][`modifier`]`, where
         * `language` is an ISO 639 language code, `territory` is an ISO 3166 country
         * code, and `codeset` is a character set or encoding identifier like
         * `ISO-8859-1` or `UTF-8`; as specified by
         * [`setlocale(3)`](man:setlocale(3)).
         *
         * This may be `NULL` if not set on the system. If it’s the empty string
         * (`""`) then the user is using the system default locale.
         * @since 0.14.0
         * @read-only
         */
        get locale(): string;
        /**
         * The last login time for this user, in seconds since the Unix epoch.
         *
         * If the user has never logged in, this will be zero.
         * @since 0.14.0
         * @read-only
         */
        get login_time(): number;
        /**
         * The last login time for this user, in seconds since the Unix epoch.
         *
         * If the user has never logged in, this will be zero.
         * @since 0.14.0
         * @read-only
         */
        get loginTime(): number;
        /**
         * The user’s real name.
         *
         * This may be `NULL` if not set on the system. If you need to use a
         * non-`NULL` string for display purposes, see
         * {@link Malcontent.User.display_name}.
         * @since 0.14.0
         * @read-only
         */
        get real_name(): string;
        /**
         * The user’s real name.
         *
         * This may be `NULL` if not set on the system. If you need to use a
         * non-`NULL` string for display purposes, see
         * {@link Malcontent.User.display_name}.
         * @since 0.14.0
         * @read-only
         */
        get realName(): string;
        /**
         * The user’s UID.
         *
         * This will not change after the {@link Malcontent.User} is constructed.
         * @since 0.14.0
         * @read-only
         */
        get uid(): number;
        /**
         * Type of the user.
         * @since 0.14.0
         * @read-only
         */
        get user_type(): UserType;
        /**
         * Type of the user.
         * @since 0.14.0
         * @read-only
         */
        get userType(): UserType;
        /**
         * The user’s username.
         *
         * This will not change after the {@link Malcontent.User} is constructed.
         * @since 0.14.0
         * @read-only
         */
        get username(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: User.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<User.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof User.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, User.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof User.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, User.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof User.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<User.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Check whether two users are equal.
         *
         * This compares their user IDs for equality, and is equivalent to:
         * ```c
         * mct_user_get_uid (a) == mct_user_get_uid (b)
         * ```
         *
         * User IDs are a primary key for users in Unix.
         * @param b another user
         * @returns true if `a` and `b` are the same user, false otherwise
         */
        equal(b: User): boolean;
        /**
         * Get the value of the {@link Malcontent.User.display_name} property.
         * @returns the user’s display name
         */
        get_display_name(): string;
        /**
         * Get the value of the {@link Malcontent.User.icon_path} property.
         * @returns the user’s avatar icon path, or `NULL` if not set
         */
        get_icon_path(): string | null;
        /**
         * Get the value of the {@link Malcontent.User.locale} property.
         * @returns the user’s locale, `""` if the system default, or `NULL`   if not set
         */
        get_locale(): string | null;
        /**
         * Get the value of the {@link Malcontent.User.login_time} property.
         * @returns the login time
         */
        get_login_time(): number;
        /**
         * Get the value of the {@link Malcontent.User.real_name} property.
         * @returns the user’s real name, or `NULL` if not set
         */
        get_real_name(): string | null;
        /**
         * Get the value of the {@link Malcontent.User.uid} property.
         * @returns the user’s ID
         */
        get_uid(): never;
        /**
         * Get the value of the {@link Malcontent.User.user_type} property.
         * @returns the user’s account type
         */
        get_user_type(): UserType;
        /**
         * Get the value of the {@link Malcontent.User.username} property.
         * @returns the user’s username
         */
        get_username(): string;
        /**
         * Calculate whether two users are in the same family.
         *
         * See the documentation for {@link Malcontent.UserManager} for the definition
         * of a family.
         * @param other another user
         * @returns true if `self` and `other` are in the same family, false otherwise
         */
        is_in_same_family(other: User): boolean;
        /**
         * Calculate whether one user is the parent of another user.
         *
         * See the documentation for {@link Malcontent.UserManager} for the definition
         * of a family and family relationships.
         * @param other another user
         * @returns true if `self` is a parent of `other`; false otherwise
         */
        is_parent_of(other: User): boolean;
    }

    namespace UserManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when a new user is added on the system.
             * @signal
             * @since 0.14.0
             * @run-last
             */
            'user-added': (arg0: User) => void;
            /**
             * Emitted when a user is removed from the system.
             * @signal
             * @since 0.14.0
             * @run-last
             */
            'user-removed': (arg0: User) => void;
            'notify::connection': (pspec: GObject.ParamSpec) => void;
            'notify::is-loaded': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            connection: Gio.DBusConnection;
            is_loaded: boolean;
            isLoaded: boolean;
        }
    }

    /**
     * Gives access to the system user database.
     *
     * Before it can be used, the user data needs to be loaded by calling
     * {@link Malcontent.UserManager.load_async}. After then, changes to the user
     * database are signalled using `Malcontent.UserManager::user-added` and
     * `Malcontent.UserManager::user-removed`. Changes to the properties of
     * individual users are signalled using `GObject.Object::notify` on the
     * user objects.
     *
     * As well as exposing the (non-system) users in the database, the user manager
     * can describe family relationships between the users. Currently, there is only
     * one family supported on the system, containing all the normal and
     * administrator user accounts.
     * [In the future](https://gitlab.gnome.org/Teams/Design/app-mockups/-/issues/118),
     * this may extend to supporting more families, with more roles for members
     * within a family.
     * @gir-type Class
     * @since 0.14.0
     */
    class UserManager extends GObject.Object {
        static $gtype: GObject.GType<UserManager>;

        // Properties

        /**
         * A connection to the system bus, where accounts-service runs.
         *
         * It’s provided mostly for testing purposes, or to allow an existing
         * connection to be re-used.
         * @since 0.14.0
         * @construct-only
         */
        get connection(): Gio.DBusConnection;
        /**
         * Whether the user manager has finished loading yet.
         * @since 0.14.0
         * @read-only
         */
        get is_loaded(): boolean;
        /**
         * Whether the user manager has finished loading yet.
         * @since 0.14.0
         * @read-only
         */
        get isLoaded(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UserManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UserManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](connection: Gio.DBusConnection): UserManager;

        // Signals

        /** @signal */
        connect<K extends keyof UserManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UserManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UserManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UserManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get all the non-system users on the system.
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         */
        get_all_users_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<User[]>;
        /**
         * Get all the non-system users on the system.
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @param callback callback for when the operation is complete
         */
        get_all_users_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Get all the non-system users on the system.
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @param callback callback for when the operation is complete
         */
        get_all_users_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<User[]> | void;
        /**
         * Finish an asynchronous query operation started with
         * {@link Malcontent.UserManager.get_all_users_async}.
         * @param result result of the asynchronous operation
         * @returns array of   users in an undefined order, may be empty
         */
        get_all_users_finish(result: Gio.AsyncResult): User[];
        /**
         * Get the members of the family containing `user`.
         *
         * `user` is returned in the result set.
         * @param user user to get the family members for
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         */
        get_family_members_for_user_async(user: User, cancellable?: Gio.Cancellable | null): globalThis.Promise<User[]>;
        /**
         * Get the members of the family containing `user`.
         *
         * `user` is returned in the result set.
         * @param user user to get the family members for
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @param callback callback for when the operation is complete
         */
        get_family_members_for_user_async(
            user: User,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Get the members of the family containing `user`.
         *
         * `user` is returned in the result set.
         * @param user user to get the family members for
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @param callback callback for when the operation is complete
         */
        get_family_members_for_user_async(
            user: User,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<User[]> | void;
        /**
         * Finish an asynchronous query operation started with
         * {@link Malcontent.UserManager.get_family_members_for_user_async}.
         * @param result result of the asynchronous operation
         * @returns array of   family members in an undefined order, may be empty
         */
        get_family_members_for_user_finish(result: Gio.AsyncResult): User[];
        /**
         * Get the value of {@link Malcontent.UserManager.is_loaded}.
         *
         * It is safe to call this before {@link Malcontent.UserManager.load_async} is
         * finished.
         * @returns true if the user manager is loaded, false otherwise
         */
        get_is_loaded(): boolean;
        /**
         * Get the user with the given `uid`.
         *
         * It is not safe to call this before {@link Malcontent.UserManager.load_async}
         * is finished.
         * @param uid user ID to fetch
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         */
        get_user_by_uid_async(uid: never, cancellable?: Gio.Cancellable | null): globalThis.Promise<User | null>;
        /**
         * Get the user with the given `uid`.
         *
         * It is not safe to call this before {@link Malcontent.UserManager.load_async}
         * is finished.
         * @param uid user ID to fetch
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @param callback callback for when the operation is complete
         */
        get_user_by_uid_async(
            uid: never,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Get the user with the given `uid`.
         *
         * It is not safe to call this before {@link Malcontent.UserManager.load_async}
         * is finished.
         * @param uid user ID to fetch
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @param callback callback for when the operation is complete
         */
        get_user_by_uid_async(
            uid: never,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<User | null> | void;
        /**
         * Finish an asynchronous query operation started with
         * {@link Malcontent.UserManager.get_user_by_uid_async}.
         * @param result result of the asynchronous operation
         * @returns the user, or `NULL` if not found
         */
        get_user_by_uid_finish(result: Gio.AsyncResult): User | null;
        /**
         * Get the user with the given `username`.
         *
         * It is not safe to call this before {@link Malcontent.UserManager.load_async}
         * is finished.
         * @param username username to fetch
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         */
        get_user_by_username_async(
            username: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<User | null>;
        /**
         * Get the user with the given `username`.
         *
         * It is not safe to call this before {@link Malcontent.UserManager.load_async}
         * is finished.
         * @param username username to fetch
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @param callback callback for when the operation is complete
         */
        get_user_by_username_async(
            username: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Get the user with the given `username`.
         *
         * It is not safe to call this before {@link Malcontent.UserManager.load_async}
         * is finished.
         * @param username username to fetch
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`
         * @param callback callback for when the operation is complete
         */
        get_user_by_username_async(
            username: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<User | null> | void;
        /**
         * Finish an asynchronous query operation started with
         * {@link Malcontent.UserManager.get_user_by_username_async}.
         * @param result result of the asynchronous operation
         * @returns the user, or `NULL` if not found
         */
        get_user_by_username_finish(result: Gio.AsyncResult): User | null;
        /**
         * Load the user data from the system.
         *
         * This must be called before the {@link Malcontent.UserManager} can be used.
         *
         * It does not currently support being called more than once.
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`,
         */
        load_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Load the user data from the system.
         *
         * This must be called before the {@link Malcontent.UserManager} can be used.
         *
         * It does not currently support being called more than once.
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`,
         * @param callback callback for when the operation is complete
         */
        load_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Load the user data from the system.
         *
         * This must be called before the {@link Malcontent.UserManager} can be used.
         *
         * It does not currently support being called more than once.
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`,
         * @param callback callback for when the operation is complete
         */
        load_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finish an asynchronous load operation started with
         * {@link Malcontent.UserManager.load_async}.
         * @param result result of the asynchronous operation
         * @returns true on success, false otherwise
         */
        load_finish(result: Gio.AsyncResult): boolean;
    }

    /**
     * An opaque, immutable structure which contains a snapshot of the app filtering
     * settings for a user at a given time.
     *
     * This includes a list of apps which are explicitly banned or allowed to be run
     * by that user.
     *
     * Typically, app filter settings can only be changed by the administrator, and
     * are read-only for non-administrative users. The precise policy is set using
     * polkit.
     * @gir-type Struct
     * @since 0.2.0
     */
    abstract class AppFilter {
        static $gtype: GObject.GType<AppFilter>;

        // Static methods

        /**
         * Deserialize an app filter previously serialized with
         * {@link Malcontent.AppFilter.serialize}.
         *
         * This function guarantees to be able to deserialize any serialized form from
         * this version or older versions of libmalcontent.
         *
         * If deserialization fails, {@link Malcontent.ManagerError.INVALID_DATA} will
         * be returned.
         * @param variant a serialized app filter variant
         * @param user_id the ID of the user the app filter relates to
         */
        static deserialize(variant: GLib.Variant, user_id: never): AppFilter;
        /**
         * Error quark aliased to {@link Malcontent.ManagerError}.
         */
        static error_quark(): GLib.Quark;

        // Methods

        /**
         * Check whether app filters `a` and `b` are equal.
         * @param b another app filter
         * @returns true if `a` and `b` are equal, false otherwise
         */
        equal(b: AppFilter): boolean;
        /**
         * List the OARS sections present in this app filter.
         *
         * The sections are returned in lexicographic order. A section will be listed
         * even if its stored value is {@link Malcontent.AppFilterOarsValue.UNKNOWN}. The
         * returned list may be empty.
         * @returns `NULL`-terminated   array of OARS sections
         */
        get_oars_sections(): string[];
        /**
         * Get the value assigned to the given `oars_section` in the OARS filter stored
         * within `filter`.
         *
         * If that section has no value explicitly defined,
         * {@link Malcontent.AppFilterOarsValue.UNKNOWN} is returned.
         *
         * This value is the most intense value allowed for apps to have in this
         * section, inclusive. Any app with a more intense value for this section must
         * be hidden from the user whose `filter` this is.
         *
         * This does not factor in
         * {@link Malcontent.AppFilter.is_system_installation_allowed}.
         * @param oars_section name of the OARS section to get the value from
         * @returns an OARS value
         */
        get_oars_value(oars_section: string): AppFilterOarsValue;
        /**
         * Get the user ID of the user this app filter is for.
         * @returns user ID of the relevant user, or `(uid_t) -1` if unknown
         */
        get_user_id(): never;
        /**
         * Check whether the app with the given `app_info` is allowed to be run
         * according to this app filter.
         *
         * This matches on multiple keys potentially present in the {@link Gio.AppInfo},
         * including the path of the executable.
         *
         * If the app filter is a blocklist, the `app_info` is blocked if any of its
         * keys are blocked. If the app filter is an allowlist, the `app_info` is allowed
         * if any of its keys are allowed.
         * @param app_info application information
         * @returns true if the user this `filter` corresponds to is allowed to run the   app represented by `app_info` according to the `filter` policy; false   otherwise
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
         * @returns true if the user this `filter` corresponds to is allowed to run   programs handling `content_type` according to the `filter` policy; false   otherwise
         */
        is_content_type_allowed(content_type: string): boolean;
        /**
         * Check whether the app filter is enabled and is going to impose at least one
         * restriction on the user.
         *
         * This gives a high level view of whether app filter parental controls are
         * ‘enabled’ for the given user.
         * @returns true if the app filter contains at least one non-default value,   false if it’s entirely default
         */
        is_enabled(): boolean;
        /**
         * Check whether the flatpak app with the given `app_id` is allowed to be run
         * according to this app filter.
         *
         * This is a globbing match, matching `app_id` against potentially multiple
         * entries in the blocklist, as the blocklist contains flatpak refs (for
         * example, `app/org.gnome.Builder/x86_64/master`) which contain architecture
         * and branch information. App IDs (for example, `org.gnome.Builder`) do not
         * contain architecture or branch information.
         * @param app_id flatpak ID for the app, for example `org.gnome.Builder`
         * @returns true if the user this `filter` corresponds to is allowed to run the   flatpak called `app_id` according to the `filter` policy; false otherwise
         */
        is_flatpak_app_allowed(app_id: string): boolean;
        /**
         * Check whether the flatpak app with the given `app_ref` is allowed to be run
         * according to this app filter.
         * @param app_ref flatpak ref for the app, for example   `app/org.gnome.Builder/x86_64/master`
         * @returns true if the user this `filter` corresponds to is allowed to run the   flatpak called `app_ref` according to the `filter` policy; false otherwise
         */
        is_flatpak_ref_allowed(app_ref: string): boolean;
        /**
         * Check whether the program at `path` is allowed to be run according to this
         * app filter.
         *
         * `path` will be canonicalised without doing any I/O.
         * @param path absolute path of a program to check
         * @returns true if the user this `filter` corresponds to is allowed to run the   program at `path` according to the `filter` policy; false otherwise
         */
        is_path_allowed(path: string): boolean;
        /**
         * Get whether the user is allowed to install to the flatpak system repository.
         *
         * This should be queried in addition to the OARS values
         * ({@link Malcontent.AppFilter.get_oars_value}) — if it returns `false`, the
         * OARS values should be ignored and app installation should be unconditionally
         * disallowed.
         * @returns true if app installation is allowed to the system repository for   this user; false if it is unconditionally disallowed for this user
         */
        is_system_installation_allowed(): boolean;
        /**
         * Get whether the user is allowed to install to their flatpak user repository.
         *
         * This should be queried in addition to the OARS values
         * ({@link Malcontent.AppFilter.get_oars_value}) — if it returns false, the
         * OARS values should be ignored and app installation should be unconditionally
         * disallowed.
         * @returns true if app installation is allowed to the user repository for   this user; false if it is unconditionally disallowed for this user
         */
        is_user_installation_allowed(): boolean;
        /**
         * Increment the reference count of `filter`, and return the same pointer to it.
         * @returns the same pointer as `filter`
         */
        ref(): AppFilter;
        /**
         * Build a {@link GLib.Variant} which contains the app filter from `filter`, in
         * an opaque variant format.
         *
         * This format may change in future, but {@link Malcontent.AppFilter.deserialize}
         * is guaranteed to always be able to load any variant produced by the current
         * or any previous version of {@link Malcontent.AppFilter.serialize}.
         * @returns a new, floating {@link GLib.Variant}   containing the app filter
         */
        serialize(): GLib.Variant;
        /**
         * Decrement the reference count of `filter`. If the reference count reaches
         * zero, free the `filter` and all its resources.
         */
        unref(): void;
    }

    /**
     * A stack-allocated mutable structure used to build an
     * {@link Malcontent.AppFilter} instance.
     *
     * Use {@link Malcontent.AppFilterBuilder.init}, various method
     * calls to set properties of the app filter, and then
     * {@link Malcontent.AppFilterBuilder.end}, to construct an
     * {@link Malcontent.AppFilter}.
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
         * construction.
         *
         * The `content_type` will not be added again if it’s already been added.
         *
         * Note that this method doesn’t handle content subtypes. For example, if
         * `application/xml` is added to the blocklist but `application/xspf+xml` is not,
         * a check for whether `application/xspf+xml` is blocklisted would return false.
         * @param content_type a content type to blocklist
         */
        blocklist_content_type(content_type: string): void;
        /**
         * Add `app_ref` to the blocklist of flatpak refs in the filter under
         * construction.
         *
         * The `app_ref` will not be added again if it’s already been added.
         * @param app_ref a flatpak app ref to blocklist
         */
        blocklist_flatpak_ref(app_ref: string): void;
        /**
         * Add `path` to the blocklist of app paths in the filter under construction.
         *
         * It will be canonicalised (without doing any I/O) before being added.
         * The canonicalised `path` will not be added again if it’s already been added.
         * @param path an absolute path to blocklist
         */
        blocklist_path(path: string): void;
        /**
         * Clear `builder`, freeing any internal state in it.
         *
         * This will not free the top-level storage for `builder` itself, which is
         * assumed to be allocated on the stack.
         *
         * If called on an already-cleared {@link Malcontent.AppFilterBuilder}, this
         * function is idempotent.
         */
        clear(): void;
        /**
         * Copy the given `builder` to a newly-allocated
         * {@link Malcontent.AppFilterBuilder} on the heap.
         *
         * This is safe to use with cleared, stack-allocated
         * {@link Malcontent.AppFilterBuilder}s.
         * @returns a copy of `builder`
         */
        copy(): AppFilterBuilder;
        /**
         * Finish constructing an {@link Malcontent.AppFilter} with the given `builder`,
         * and return it.
         *
         * The {@link Malcontent.AppFilterBuilder} will be cleared as if
         * {@link Malcontent.AppFilterBuilder.clear} had been called.
         * @returns a newly constructed {@link Malcontent.AppFilter}
         */
        end(): AppFilter;
        /**
         * Free an {@link Malcontent.AppFilterBuilder} originally allocated using
         * {@link Malcontent.AppFilterBuilder.new}.
         *
         * This must not be called on stack-allocated builders initialised using
         * {@link Malcontent.AppFilterBuilder.init}.
         */
        free(): void;
        /**
         * Initialise the given `builder` so it can be used to construct a new
         * {@link Malcontent.AppFilter}.
         *
         * `builder` must have been allocated on the stack, and must not already be
         * initialised.
         *
         * Construct the {@link Malcontent.AppFilter} by calling methods on `builder`,
         * followed by {@link Malcontent.AppFilterBuilder.end}. To abort construction,
         * use {@link Malcontent.AppFilterBuilder.clear}.
         */
        init(): void;
        /**
         * Set whether the user is allowed to install to the flatpak system repository.
         *
         * If this is true, app installation is still subject to the OARS values
         * ({@link Malcontent.AppFilterBuilder.set_oars_value}). If it is false, app
         * installation is unconditionally disallowed for this user.
         * @param allow_system_installation true to allow app installation; false to   unconditionally disallow it
         */
        set_allow_system_installation(allow_system_installation: boolean): void;
        /**
         * Set whether the user is allowed to install to their flatpak user repository.
         *
         * If this is true, app installation is still subject to the OARS values
         * ({@link Malcontent.AppFilterBuilder.set_oars_value}). If it is false, app
         * installation is unconditionally disallowed for this user.
         * @param allow_user_installation true to allow app installation; false to   unconditionally disallow it
         */
        set_allow_user_installation(allow_user_installation: boolean): void;
        /**
         * Set the OARS value for the given `oars_section`, indicating the intensity of
         * content covered by that section which the user is allowed to see (inclusive).
         *
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
     * An opaque, immutable structure which contains a snapshot
     * of the session limits settings for a user at a given time.
     *
     * This includes whether session limits are being enforced, and the limit
     * policy — for example, the times of day when a user is allowed to use the
     * computer.
     *
     * Typically, session limits settings can only be changed by the administrator,
     * and are read-only for non-administrative users. The precise policy is set
     * using polkit.
     * @gir-type Struct
     * @since 0.5.0
     */
    abstract class SessionLimits {
        static $gtype: GObject.GType<SessionLimits>;

        // Static methods

        /**
         * Deserialize a set of session limits previously serialized with
         * {@link Malcontent.SessionLimits.serialize}.
         *
         * This function guarantees to be able to deserialize any serialized form from
         * this version or older versions of libmalcontent.
         *
         * If deserialization fails, {@link Malcontent.ManagerError.INVALID_DATA} will
         * be returned.
         * @param variant a serialized session limits variant
         * @param user_id the ID of the user the session limits relate to
         */
        static deserialize(variant: GLib.Variant, user_id: never): SessionLimits;

        // Methods

        /**
         * Check whether the user has time remaining in which they are allowed to use
         * the computer.
         *
         * This assumes that `now_dt` is the current time and
         * `active_session_time_today_secs` is the total amount of time the user has
         * spent in an active session up to that point today, and applies the
         * session limit policy from `limits` to them.
         *
         * This will return whether the user is allowed to use the computer now; further
         * information about the policy and remaining time is provided in
         * `time_remaining_secs_out` and `time_limit_enabled_out`.
         * @param now_dt current time in the user’s timezone, typically queried using   `g_date_time_new_now_local()`
         * @param active_session_time_today_secs total time the user has spent in an active   session so far today, in seconds
         * @returns true if the user this `limits` corresponds to is allowed to be in   an active session at the given time; false otherwise
         */
        check_time_remaining(now_dt: GLib.DateTime, active_session_time_today_secs: number): [boolean, number, boolean];
        /**
         * Check whether session limits configurations `a` and `b` are equal.
         * @param b a session limits configuration
         * @returns true if `a` and `b` are equal, false otherwise
         */
        equal(b: SessionLimits): boolean;
        /**
         * Get the daily limit, if set.
         *
         * If set, sessions are allowed to be up to the given limit in length every day.
         *
         * `out_daily_limit_secs` is guaranteed to be at most `24 * 60 * 60` if set.
         * @returns true if a daily limit is set, false otherwise
         */
        get_daily_limit(): [boolean, number];
        /**
         * Get the daily schedule session limits, if set.
         *
         * If set, sessions are allowed between the given start and end time every day.
         * The times are given as offsets from the start of the day, in seconds.
         *
         * `out_end_time_secs` is guaranteed to be greater than `out_start_time_secs`, if
         * they are set. `out_end_time_secs` is guaranteed to be at most `24 * 60 * 60`
         * if set.
         * @returns true if a daily schedule is set, false otherwise
         */
        get_daily_schedule(): [boolean, number, number];
        /**
         * Get the user ID of the user this {@link Malcontent.SessionLimits} is for.
         * @returns user ID of the relevant user, or `(uid_t) -1` if unknown
         */
        get_user_id(): never;
        /**
         * Check whether any session limits are enabled and are going to impose at least
         * one restriction on the user.
         *
         * This gives a high level view of whether session limit parental controls are
         * ‘enabled’ for the given user.
         *
         * This function is equivalent to the value returned by the
         * `time_limit_enabled_out` argument of
         * {@link Malcontent.SessionLimits.check_time_remaining}.
         * @returns true if the session limits object contains at least one restrictive   session limit, false if there are no limits in place
         */
        is_enabled(): boolean;
        /**
         * Increment the reference count of `limits`, and return the same pointer to it.
         * @returns the same pointer as `limits`
         */
        ref(): SessionLimits;
        /**
         * Build a {@link GLib.Variant} which contains the session limits from `limits`,
         * in an opaque variant format.
         *
         * This format may change in future, but
         * {@link Malcontent.SessionLimits.deserialize} is guaranteed to always be able
         * to load any variant produced by the current or any previous version of
         * {@link Malcontent.SessionLimits.serialize}.
         * @returns a new, floating {@link GLib.Variant}   containing the session limits
         */
        serialize(): GLib.Variant;
        /**
         * Decrement the reference count of `limits`. If the reference count reaches
         * zero, free the `limits` and all its resources.
         */
        unref(): void;
    }

    /**
     * A stack-allocated mutable structure used to build an
     * {@link Malcontent.SessionLimits} instance. Use
     * {@link Malcontent.SessionLimitsBuilder.init}, various method calls to set
     * properties of the session limits, and then
     * {@link Malcontent.SessionLimitsBuilder.end}, to construct an
     * {@link Malcontent.SessionLimits}.
     * @gir-type Struct
     * @since 0.14.0
     */
    class SessionLimitsBuilder {
        static $gtype: GObject.GType<SessionLimitsBuilder>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): SessionLimitsBuilder;

        // Methods

        /**
         * Clear `builder`, freeing any internal state in it.
         *
         * This will not free the top-level storage for `builder` itself, which is
         * assumed to be allocated on the stack.
         *
         * If called on an already-cleared {@link Malcontent.SessionLimitsBuilder},
         * this function is idempotent.
         */
        clear(): void;
        /**
         * Copy the given `builder` to a newly-allocated
         * {@link Malcontent.SessionLimitsBuilder} on the heap.
         *
         * This is safe to use with cleared, stack-allocated
         * {@link Malcontent.SessionLimitsBuilder}s.
         * @returns a copy of `builder`
         */
        copy(): SessionLimitsBuilder;
        /**
         * Finish constructing an {@link Malcontent.SessionLimits} with the given
         * `builder`, and return it.
         *
         * The {@link Malcontent.SessionLimitsBuilder} will be cleared as if
         * {@link Malcontent.SessionLimitsBuilder.clear} had been called.
         * @returns a newly constructed   {@link Malcontent.SessionLimits}
         */
        end(): SessionLimits;
        /**
         * Free an {@link Malcontent.SessionLimitsBuilder} originally allocated using
         * {@link Malcontent.SessionLimitsBuilder.new}.
         *
         * This must not be called on stack-allocated builders initialised using
         * {@link Malcontent.SessionLimitsBuilder.init}.
         */
        free(): void;
        /**
         * Initialise the given `builder` so it can be used to construct a new
         * {@link Malcontent.SessionLimits}.
         *
         * `builder` must have been allocated on the stack, and must not already be
         * initialised.
         *
         * Construct the {@link Malcontent.SessionLimits} by calling methods on
         * `builder`, followed by {@link Malcontent.SessionLimitsBuilder.end}. To abort
         * construction, use {@link Malcontent.SessionLimitsBuilder.clear}.
         */
        init(): void;
        /**
         * Set the session limits in `builder` to be a daily limit, where the total
         * active session time for the user has a given limit each day.
         *
         * `daily_limit_secs` must be at most `24 * 60 * 60`.
         *
         * This will act in addition to any other session limits.
         * @param enforced true if the limit type is to be enforced, false if the value is   just being stored for future use without being enforced
         * @param daily_limit_secs maximum length for the user’s active session time each   day, in seconds
         */
        set_daily_limit(enforced: boolean, daily_limit_secs: number): void;
        /**
         * Set the session limits in `builder` to be a daily schedule, where sessions are
         * allowed between `start_time_secs` and `end_time_secs` every day.
         *
         * `start_time_secs` and `end_time_secs` are given as offsets from the start of
         * the day, in seconds. `end_time_secs` must be greater than `start_time_secs`.
         * `end_time_secs` must be at most `24 * 60 * 60`.
         *
         * This will act in addition to any other session limits.
         * @param enforced true if the limit type is to be enforced, false if the value is   just being stored for future use without being enforced
         * @param start_time_secs number of seconds since midnight when the user’s session   can first start
         * @param end_time_secs number of seconds since midnight when the user’s session can   last end
         */
        set_daily_schedule(enforced: boolean, start_time_secs: number, end_time_secs: number): void;
        /**
         * Unset any session limits currently set in the `builder`.
         */
        set_none(): void;
    }

    /**
     * @gir-type Alias
     */
    type UserClass = typeof User;
    /**
     * @gir-type Alias
     */
    type UserManagerClass = typeof UserManager;
    /**
     * {@link Malcontent.WebFilter} is an opaque, immutable structure which
     * contains a snapshot of the web filter settings for a user at a given time.
     *
     * This includes whether web access is being filtered, and the filter lists
     * which are being applied — for example, the domains to block or allow.
     *
     * Typically, web filter settings can only be changed by the administrator,
     * and are read-only for non-administrative users. The precise policy is set
     * using polkit.
     *
     * To construct a new {@link Malcontent.WebFilter}, use
     * {@link Malcontent.WebFilterBuilder}.
     *
     * ## Filter format
     *
     * A web filter contains various high-level options about web filter, such as
     * whether to block domains by default or to allow them by default; and whether
     * to force popular websites to use their ‘safe search’ variants (for example,
     * Google Safe Search or YouTube Restricted Mode).
     *
     * A web filter can contain zero or more filter lists, as well as custom filter
     * entries. Each list or entry will block or allow the hostnames it lists.
     *
     * The intention is that the user uses one or more subject-specific filter lists
     * sourced online, such as those from [EasyList](https://easylist.to/). Custom
     * filter entries can then be used to add a small number of additional filters
     * to customise the generic filter lists.
     *
     * Each filter list is a mapping from an ID to a URI which contains the list.
     * The ID is needed so user interfaces can consistently refer to the same list
     * in the UI even if its URI changes over time. IDs must be non-empty UTF-8
     * strings.
     *
     * The filter list downloaded from the URI must be a list of hostnames,
     * separated by newlines (`\n`). Comments start with `#` and continue to the
     * next newline (`\n`). Each entry in the list must be a plain hostname — globs,
     * wildcards and regexps are not supported. Hostnames do not have to have a
     * trailing dot (`.`) as in DNS records.
     *
     * This is essentially the same format as `/etc/hosts`, as malcontent is
     * designed to consume general purpose filter lists produced for use in
     * `/etc/hosts`.
     *
     * Custom filter entries must follow the same format: they must be a plain
     * hostname — globs, wildcards and regexps are not supported.
     * @gir-type Struct
     * @since 0.14.0
     */
    abstract class WebFilter {
        static $gtype: GObject.GType<WebFilter>;

        // Static methods

        /**
         * Deserialize a set of web filters previously serialized with
         * {@link Malcontent.WebFilter.serialize}.
         *
         * This function guarantees to be able to deserialize any serialized form from
         * this version or older versions of libmalcontent.
         *
         * If deserialization fails, {@link Malcontent.ManagerError.INVALID_DATA} will
         * be returned.
         * @param variant a serialized web filter variant
         * @param user_id the ID of the user the web filter relates to
         */
        static deserialize(variant: GLib.Variant, user_id: never): WebFilter;
        /**
         * Validate a potential domain name.
         *
         * This checks against [RFC 2181](https://datatracker.ietf.org/doc/html/rfc2181).
         *
         * See {@link Malcontent.WebFilter.validate_hostname} for validating
         * hostnames instead. Domain names are entries in the DNS database, hostnames
         * are website addresses. Every hostname is a domain name, but not vice-versa.
         * @param domain_name a potential domain name
         */
        static validate_domain_name(domain_name: string): boolean;
        /**
         * Validate a potential domain name.
         *
         * This checks against [RFC 2181](https://datatracker.ietf.org/doc/html/rfc2181).
         *
         * See {@link Malcontent.WebFilter.validate_hostname_len} for validating
         * hostnames instead. Domain names are entries in the DNS database, hostnames
         * are website addresses. Every hostname is a domain name, but not vice-versa.
         * @param domain_name a potential domain_name
         * @param max_len length (in bytes) to check, or until the first nul byte is reached
         */
        static validate_domain_name_len(domain_name: string, max_len: number): boolean;
        /**
         * Validate a potential filter list ID.
         *
         * Filter list IDs must be non-empty UTF-8 strings.
         * @param id a potential filter list ID
         */
        static validate_filter_id(id: string): boolean;
        /**
         * Validate a potential hostname.
         *
         * This checks against [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035).
         *
         * See {@link Malcontent.WebFilter.validate_domain_name} for validating
         * domain names instead. Domain names are entries in the DNS database, hostnames
         * are website addresses. Every hostname is a domain name, but not vice-versa.
         * @param hostname a potential hostname
         */
        static validate_hostname(hostname: string): boolean;
        /**
         * Validate a potential hostname.
         *
         * This checks against [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035).
         *
         * See {@link Malcontent.WebFilter.validate_domain_name_len} for validating
         * domain names instead. Domain names are entries in the DNS database, hostnames
         * are website addresses. Every hostname is a domain name, but not vice-versa.
         * @param hostname a potential hostname
         * @param max_len length (in bytes) to check, or until the first nul byte is reached
         */
        static validate_hostname_len(hostname: string, max_len: number): boolean;

        // Methods

        /**
         * Check whether web filters `a` and `b` are equal.
         * @param b a web filter
         * @returns true if `a` and `b` are equal, false otherwise
         */
        equal(b: WebFilter): boolean;
        /**
         * Get the allow lists configured on the filter.
         *
         * These are a mapping from ID to the URI of the allow list. See the
         * {@link Malcontent.WebFilter} documentation for allowed ID values.
         *
         * A `NULL` return value is equivalent to an empty mapping.
         * @returns mapping of ID   to URI for allow lists
         */
        get_allow_lists(): GLib.HashTable<string, string> | null;
        /**
         * Gets the block lists configured on the filter.
         *
         * These are a mapping from ID to the URI of the block list. See the
         * {@link Malcontent.WebFilter} documentation for allowed ID values.
         *
         * A `NULL` return value is equivalent to an empty mapping.
         * @returns mapping of ID   to URI for block lists
         */
        get_block_lists(): GLib.HashTable<string, string> | null;
        /**
         * Gets the custom allow list configured on the filter.
         *
         * This is an array of hostnames to allow. Hostnames are plain strings, not
         * globs or regexps.
         *
         * A `NULL` return value is equivalent to an empty array.
         * @returns array of   hostnames to allow
         */
        get_custom_allow_list(): string[] | null;
        /**
         * Gets the custom block list configured on the filter.
         *
         * This is an array of hostnames to block. Hostnames are plain strings, not
         * globs or regexps.
         *
         * A `NULL` return value is equivalent to an empty array.
         * @returns array of   hostnames to block
         */
        get_custom_block_list(): string[] | null;
        /**
         * Gets the type of web filter.
         * @returns the currently active filter type
         */
        get_filter_type(): WebFilterType;
        /**
         * Gets the safe search preference for the filter.
         *
         * If enabled, search engines and other popular websites will be automatically
         * redirected to their ‘safe search’ variant, if supported.
         * @returns true if safe search is force-enabled, false otherwise
         */
        get_force_safe_search(): boolean;
        /**
         * Get the user ID of the user this {@link Malcontent.WebFilter} is for.
         * @returns user ID of the relevant user, or `(uid_t) -1` if unknown
         */
        get_user_id(): never;
        /**
         * Check whether any web filtering is enabled and is going to impose at least
         * one restriction on the user.
         *
         * This gives a high level view of whether web filter parental controls are
         * ‘enabled’ for the given user.
         * @returns true if the web filter object contains at least one restrictive    filter, false if there are no filters in place
         */
        is_enabled(): boolean;
        /**
         * Increment the reference count of `filter`, and return the same pointer to it.
         * @returns the same pointer as `filter`
         */
        ref(): WebFilter;
        /**
         * Build a {@link GLib.Variant} which contains the web filter from `filter`, in
         * an opaque variant format.
         *
         * This format may change in future, but {@link Malcontent.WebFilter.deserialize}
         * is guaranteed to always be able to load any variant produced by the current
         * or any previous version of {@link Malcontent.WebFilter.serialize}.
         * @returns a new, floating {@link GLib.Variant}   containing the web filter
         */
        serialize(): GLib.Variant;
        /**
         * Decrement the reference count of `filter`. If the reference count reaches
         * zero, free the `filter` and all its resources.
         */
        unref(): void;
    }

    /**
     * {@link Malcontent.WebFilterBuilder} is a stack-allocated mutable structure
     * used to build a {@link Malcontent.WebFilter} instance.
     *
     * Use {@link Malcontent.WebFilterBuilder.init}, various method calls to set
     * properties of the web filter, and then
     * {@link Malcontent.WebFilterBuilder.end}, to construct a
     * {@link Malcontent.WebFilter}.
     * @gir-type Struct
     * @since 0.14.0
     */
    class WebFilterBuilder {
        static $gtype: GObject.GType<WebFilterBuilder>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): WebFilterBuilder;

        // Methods

        /**
         * Adds a allow list to the {@link Malcontent.WebFilter}, mapping the given `id`
         * to a filter list downloadable at `filter_uri`.
         *
         * All the entries at `filter_uri` will be allowed. They must all be hostnames;
         * see the top-level documentation for {@link Malcontent.WebFilter} for details
         * of the allowed filter list and ID formats.
         *
         * The filter list will be downloaded when the user’s web filter is compiled,
         * not when this function is called.
         * @param id ID of the filter
         * @param filter_uri URI of the filter to download
         */
        add_allow_list(id: string, filter_uri: string): void;
        /**
         * Adds a block list to the {@link Malcontent.WebFilter}, mapping the given `id`
         * to a filter list downloadable at `filter_uri`.
         *
         * All the entries at `filter_uri` will be blocked. They must all be hostnames;
         * see the top-level documentation for {@link Malcontent.WebFilter} for details
         * of the allowed filter list and ID formats.
         *
         * The filter list will be downloaded when the user’s web filter is compiled,
         * not when this function is called.
         * @param id ID of the filter
         * @param filter_uri URI of the filter to download
         */
        add_block_list(id: string, filter_uri: string): void;
        /**
         * Adds a single hostname to the {@link Malcontent.WebFilter}, to be allowed.
         *
         * See the top-level documentation for {@link Malcontent.WebFilter} for details
         * of the allowed filter list and ID formats.
         * @param hostname hostname to allow
         */
        add_custom_allow_list_entry(hostname: string): void;
        /**
         * Adds a single hostname to the {@link Malcontent.WebFilter}, to be blocked.
         *
         * See the top-level documentation for {@link Malcontent.WebFilter} for details
         * of the allowed filter list and ID formats.
         * @param hostname hostname to block
         */
        add_custom_block_list_entry(hostname: string): void;
        /**
         * Clear `builder`, freeing any internal state in it.
         *
         * This will not free the top-level storage for `builder` itself, which is
         * assumed to be allocated on the stack.
         *
         * If called on an already-cleared {@link Malcontent.WebFilterBuilder}, this
         * function is idempotent.
         */
        clear(): void;
        /**
         * Copy the given `builder` to a newly-allocated
         * {@link Malcontent.WebFilterBuilder} on the heap.
         *
         * This is safe to use with cleared, stack-allocated
         * {@link Malcontent.WebFilterBuilder}s.
         * @returns a copy of `builder`
         */
        copy(): WebFilterBuilder;
        /**
         * Finish constructing an {@link Malcontent.WebFilter} with the given `builder`,
         * and return it.
         *
         * The {@link Malcontent.WebFilterBuilder} will be cleared as if
         * {@link Malcontent.WebFilterBuilder.clear} had been called.
         * @returns a newly constructed {@link Malcontent.WebFilter}
         */
        end(): WebFilter;
        /**
         * Free an {@link Malcontent.WebFilterBuilder} originally allocated using
         * {@link Malcontent.WebFilterBuilder.new}.
         *
         * This must not be called on stack-allocated builders initialised using
         * {@link Malcontent.WebFilterBuilder.init}.
         */
        free(): void;
        /**
         * Initialise the given `builder` so it can be used to construct a new
         * {@link Malcontent.WebFilter}.
         *
         * `builder` must have been allocated on the stack, and must not already be
         * initialised.
         *
         * Construct the {@link Malcontent.WebFilter} by calling methods on `builder`,
         * followed by {@link Malcontent.WebFilterBuilder.end}. To abort construction,
         * use {@link Malcontent.WebFilterBuilder.clear}.
         */
        init(): void;
        /**
         * Set the type of web filter to apply to the user.
         * @param filter_type type of web filter
         */
        set_filter_type(filter_type: WebFilterType | null): void;
        /**
         * Sets the safe search preference for the {@link Malcontent.WebFilter}.
         *
         * If enabled, search engines and other popular websites will be automatically
         * redirected to their ‘safe search’ variant, if supported.
         * @param force_safe_search true to force safe search to be enabled, false otherwise
         */
        set_force_safe_search(force_safe_search: boolean): void;
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
     * Convenience type to allow use of `g_autoptr()` with arrays of
     * {@link Malcontent.User}.
     *
     * Use it as:
     * ```c
     * g_autoptr(MctUserArray) users = mct_user_manager_get_family_members_for_user (…);
     * ```
     * @gir-type Alias
     */
    type UserArray = User;
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
