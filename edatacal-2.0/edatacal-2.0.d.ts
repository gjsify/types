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
import type ICalGLib from '@girs/icalglib-3.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type EDataServer from '@girs/edataserver-1.2';
import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-3.0';
import type Json from '@girs/json-1.0';
import type Camel from '@girs/camel-1.2';
import type ECal from '@girs/ecal-2.0';
import type EBackend from '@girs/ebackend-1.2';

export namespace EDataCal {
    /**
     * EDataCal-2.0
     */

    /**
     * This environment variable configures where the calendar
     * factory loads its backend modules from.
     */
    const EDS_CALENDAR_MODULES: string;
    /**
     * This environment variable configures where the calendar
     * factory subprocess is located in.
     */
    const EDS_SUBPROCESS_CAL_PATH: string;
    const INTERVALTREE_DEBUG: number;
    const LIBICAL_GLIB_UNSTABLE_API: number;
    /**
     * Frees the `change` structure, previously allocated with `e_cal_cache_offline_change_new()`
     * or `e_cal_cache_offline_change_copy()`.
     * @param change an {@link EDataCal.CalCacheOfflineChange}
     * @since 3.26
     */
    function cal_cache_offline_change_free(change?: any | null): void;
    /**
     * Frees the `ptr` structure, previously allocated with `e_cal_cache_search_data_new()`
     * or `e_cal_cache_search_data_copy()`.
     * @param ptr an {@link EDataCal.CalCacheSearchData}
     * @since 3.26
     */
    function cal_cache_search_data_free(ptr?: any | null): void;
    /**
     * Frees the `ptr` structure, previously allocated with `e_cal_meta_backend_info_new()`
     * or `e_cal_meta_backend_info_copy()`.
     * @param ptr an {@link EDataCal.CalMetaBackendInfo}
     * @since 3.26
     */
    function cal_meta_backend_info_free(ptr?: any | null): void;
    /**
     * @param queue
     */
    function cal_queue_free_strings(queue: GLib.Queue): void;
    /**
     * @gir-type Callback
     */
    interface CalBackendCustomOpFunc {
        (cal_backend: CalBackend, cancellable?: Gio.Cancellable | null): void;
    }
    /**
     * @gir-type Callback
     */
    interface CalBackendForeachViewFunc {
        (backend: CalBackend, view: DataCalView): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface CalCacheSearchFunc {
        (
            cal_cache: CalCache,
            uid: string,
            rid: string | null,
            revision: string,
            object: string,
            extra: string,
            custom_flags: number,
            offline_state: EBackend.OfflineState,
        ): boolean;
    }
    namespace CalBackend {
        // Signal signatures
        interface SignalSignatures extends EBackend.Backend.SignalSignatures {
            /**
             * Emitted when a client destroys its {@link ECal.Client} for `backend`
             * @signal
             * @since 3.10
             * @run-last
             */
            closed: (arg0: string) => void;
            /**
             * Emitted when the last client destroys its {@link ECal.Client} for
             * `backend`.  This signals the `backend` to begin final cleanup
             * tasks such as synchronizing data to permanent storage.
             * @signal
             * @since 3.10
             * @run-last
             */
            shutdown: () => void;
            'notify::cache-dir': (pspec: GObject.ParamSpec) => void;
            'notify::kind': (pspec: GObject.ParamSpec) => void;
            'notify::proxy-resolver': (pspec: GObject.ParamSpec) => void;
            'notify::registry': (pspec: GObject.ParamSpec) => void;
            'notify::writable': (pspec: GObject.ParamSpec) => void;
            'notify::connectable': (pspec: GObject.ParamSpec) => void;
            'notify::main-context': (pspec: GObject.ParamSpec) => void;
            'notify::online': (pspec: GObject.ParamSpec) => void;
            'notify::source': (pspec: GObject.ParamSpec) => void;
            'notify::user-prompter': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends EBackend.Backend.ConstructorProps, ECal.TimezoneCache.ConstructorProps {
            cache_dir: string;
            cacheDir: string;
            kind: number;
            proxy_resolver: Gio.ProxyResolver;
            proxyResolver: Gio.ProxyResolver;
            registry: EDataServer.SourceRegistry;
            writable: boolean;
        }
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     * @gir-type Class
     */
    class CalBackend extends EBackend.Backend implements ECal.TimezoneCache {
        static $gtype: GObject.GType<CalBackend>;

        // Properties

        /**
         * The backend's cache directory
         */
        get cache_dir(): string;
        set cache_dir(val: string);
        /**
         * The backend's cache directory
         */
        get cacheDir(): string;
        set cacheDir(val: string);
        /**
         * The kind of iCalendar components this backend manages
         * @construct-only
         */
        get kind(): number;
        /**
         * The proxy resolver for this backend
         * @read-only
         */
        get proxy_resolver(): Gio.ProxyResolver;
        /**
         * The proxy resolver for this backend
         * @read-only
         */
        get proxyResolver(): Gio.ProxyResolver;
        /**
         * Data source registry
         * @construct-only
         */
        get registry(): EDataServer.SourceRegistry;
        /**
         * Whether the backend will accept changes
         */
        get writable(): boolean;
        set writable(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CalBackend.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CalBackend.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof CalBackend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CalBackend.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CalBackend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CalBackend.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CalBackend.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CalBackend.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Retrieve the default mail account as stored in Evolution configuration.
         * @param registry an {@link EDataServer.SourceRegistry}
         * @param address placeholder for default address
         * @param name placeholder for name
         */
        static mail_account_get_default(registry: EDataServer.SourceRegistry, address: string, name: string): boolean;
        /**
         * Checks that a mail account is valid, and returns its name.
         * @param registry an {@link EDataServer.SourceRegistry}
         * @param user user name for the account to check
         * @param name placeholder for the account name
         */
        static mail_account_is_valid(registry: EDataServer.SourceRegistry, user: string, name: string): boolean;
        /**
         * @param registry an {@link EDataServer.SourceRegistry}
         * @param icalcomp component where to check
         */
        static user_declined(registry: EDataServer.SourceRegistry, icalcomp: ICalGLib.Component): boolean;

        // Virtual methods

        /**
         * A signal notifying that the backend was closed
         * @param sender
         * @virtual
         */
        vfunc_closed(sender: string): void;
        /**
         * FIXME: Document me
         * @param cal
         * @param opid
         * @param cancellable
         * @param tzobject
         * @virtual
         */
        vfunc_impl_add_timezone(
            cal: DataCal,
            opid: number,
            cancellable: Gio.Cancellable | null,
            tzobject: string,
        ): void;
        /**
         * FIXME: Document me
         * @param cal
         * @param opid
         * @param cancellable
         * @param uid
         * @param rid
         * @param auid
         * @param opflags
         * @virtual
         */
        vfunc_impl_discard_alarm(
            cal: DataCal,
            opid: number,
            cancellable: Gio.Cancellable | null,
            uid: string,
            rid: string,
            auid: string,
            opflags: ECal.OperationFlags,
        ): void;
        /**
         * FIXME: Document me
         * @param cal
         * @param opid
         * @param cancellable
         * @param uid
         * @param rid
         * @virtual
         */
        vfunc_impl_get_attachment_uris(
            cal: DataCal,
            opid: number,
            cancellable: Gio.Cancellable | null,
            uid: string,
            rid: string,
        ): void;
        /**
         * Fetch a property value by name from the backend
         * @param prop_name
         * @virtual
         */
        vfunc_impl_get_backend_property(prop_name: string): string;
        /**
         * Fetch a calendar object
         * @param cal
         * @param opid
         * @param cancellable
         * @param uid
         * @param rid
         * @virtual
         */
        vfunc_impl_get_object(
            cal: DataCal,
            opid: number,
            cancellable: Gio.Cancellable | null,
            uid: string,
            rid: string,
        ): void;
        /**
         * FIXME: Document me
         * @param cal
         * @param opid
         * @param cancellable
         * @param sexp
         * @virtual
         */
        vfunc_impl_get_object_list(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, sexp: string): void;
        /**
         * FIXME: Document me
         * @param cal
         * @param opid
         * @param cancellable
         * @param tzid
         * @virtual
         */
        vfunc_impl_get_timezone(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, tzid: string): void;
        /**
         * Open the backend
         * @param cal
         * @param opid
         * @param cancellable
         * @virtual
         */
        vfunc_impl_open(cal: DataCal, opid: number, cancellable?: Gio.Cancellable | null): void;
        /**
         * FIXME: Document me
         * @param cal
         * @param opid
         * @param cancellable
         * @param calobj
         * @param opflags
         * @virtual
         */
        vfunc_impl_receive_objects(
            cal: DataCal,
            opid: number,
            cancellable: Gio.Cancellable | null,
            calobj: string,
            opflags: ECal.OperationFlags,
        ): void;
        /**
         * Refresh the backend
         * @param cal
         * @param opid
         * @param cancellable
         * @virtual
         */
        vfunc_impl_refresh(cal: DataCal, opid: number, cancellable?: Gio.Cancellable | null): void;
        /**
         * FIXME: Document me
         * @param cal
         * @param opid
         * @param cancellable
         * @param calobj
         * @param opflags
         * @virtual
         */
        vfunc_impl_send_objects(
            cal: DataCal,
            opid: number,
            cancellable: Gio.Cancellable | null,
            calobj: string,
            opflags: ECal.OperationFlags,
        ): void;
        /**
         * Start up the specified view
         * @param view
         * @virtual
         */
        vfunc_impl_start_view(view: DataCalView): void;
        /**
         * Stop the specified view
         * @param view
         * @virtual
         */
        vfunc_impl_stop_view(view: DataCalView): void;
        /**
         * A signal notifying that the backend is being shut down
         * @virtual
         */
        vfunc_shutdown(): void;

        // Methods

        /**
         * Asynchronously adds the timezone described by `tzobject` to `backend`.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call `e_cal_backend_add_timezone_finish()` to get the result of
         * the operation.
         * @param tzobject an iCalendar VTIMEZONE string
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        add_timezone(tzobject: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously adds the timezone described by `tzobject` to `backend`.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call `e_cal_backend_add_timezone_finish()` to get the result of
         * the operation.
         * @param tzobject an iCalendar VTIMEZONE string
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        add_timezone(
            tzobject: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously adds the timezone described by `tzobject` to `backend`.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call `e_cal_backend_add_timezone_finish()` to get the result of
         * the operation.
         * @param tzobject an iCalendar VTIMEZONE string
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        add_timezone(
            tzobject: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param args
         */
        // Conflicted with ECal.TimezoneCache.add_timezone
        add_timezone(...args: never[]): any;
        /**
         * Finishes the operation started with `e_cal_backend_add_timezone()`.
         *
         * If an error occurred, the function will set `error` and return `false`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` on success, `false` on failure
         */
        add_timezone_finish(result: Gio.AsyncResult): boolean;
        /**
         * Adds the timezone described by `tzobject` to `backend`.
         *
         * If an error occurs, the function will set `error` and return `false`.
         * @param tzobject an iCalendar VTIMEZONE string
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns `true` on success, `false` on failure
         */
        add_timezone_sync(tzobject: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Adds a view to the list of live views being run by the given backend.
         * Doing so means that any listener on the view will get notified of any
         * change that affect the live view.
         * @param view An {@link EDataCal.DataCalView} object.
         */
        add_view(view: DataCalView): void;
        /**
         * @param uid a component UID
         * @param filename a filename to use; can be `null`
         * @param fileindex index of a file; used only when `filename` is `null`
         * @returns a filename for an attachment in a local cache dir. Free returned pointer with a `g_free()`.
         */
        create_cache_filename(uid: string, filename: string | null, fileindex: number): string;
        /**
         * Asynchronously creates one or more new iCalendar objects from `calobjs`.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_cal_backend_create_objects_finish()` to get the result of the
         * operation.
         * @param calobjs a `null`-terminated array of iCalendar strings
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        create_objects(
            calobjs: string,
            opflags: ECal.OperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously creates one or more new iCalendar objects from `calobjs`.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_cal_backend_create_objects_finish()` to get the result of the
         * operation.
         * @param calobjs a `null`-terminated array of iCalendar strings
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisifed
         */
        create_objects(
            calobjs: string,
            opflags: ECal.OperationFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously creates one or more new iCalendar objects from `calobjs`.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_cal_backend_create_objects_finish()` to get the result of the
         * operation.
         * @param calobjs a `null`-terminated array of iCalendar strings
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisifed
         */
        create_objects(
            calobjs: string,
            opflags: ECal.OperationFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes the operation started with `e_cal_backend_create_objects()`.
         *
         * A unique ID string for each newly-created object is deposited in `out_uids`.
         * Free the returned ID strings with `g_free()` when finished with them.
         *
         * If an error occurred, the function will set `error` and return `false`.
         * @param result a {@link Gio.AsyncResult}
         * @param out_uids a {@link GLib.Queue} in which to deposit results
         * @returns `true` on success, `false` on failure
         */
        create_objects_finish(result: Gio.AsyncResult, out_uids: GLib.Queue): boolean;
        /**
         * Creates one or more new iCalendar objects from `calobjs`, and deposits
         * the unique ID string for each newly-created object in `out_uids`.
         *
         * Free the returned ID strings with `g_free()` when finished with them.
         *
         * If an error occurs, the function will set `error` and return `false`.
         * @param calobjs a `null`-terminated array of iCalendar strings
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param out_uids a {@link GLib.Queue} in which to deposit results
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns `true` on success, `false` on failure
         */
        create_objects_sync(
            calobjs: string,
            opflags: ECal.OperationFlags | null,
            out_uids: GLib.Queue,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously discards the VALARM object with a unique ID of `alarm_uid`
         * from the iCalendar object identified by `uid` and, optionally, `rid`.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call `e_cal_backend_discard_alarm_finish()` to get the result of
         * the operation.
         * @param uid a unique ID for an iCalendar object
         * @param rid a recurrence ID, or `null`
         * @param alarm_uid a unique ID for an iCalendar VALARM object
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        discard_alarm(
            uid: string,
            rid: string | null,
            alarm_uid: string,
            opflags: ECal.OperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously discards the VALARM object with a unique ID of `alarm_uid`
         * from the iCalendar object identified by `uid` and, optionally, `rid`.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call `e_cal_backend_discard_alarm_finish()` to get the result of
         * the operation.
         * @param uid a unique ID for an iCalendar object
         * @param rid a recurrence ID, or `null`
         * @param alarm_uid a unique ID for an iCalendar VALARM object
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        discard_alarm(
            uid: string,
            rid: string | null,
            alarm_uid: string,
            opflags: ECal.OperationFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously discards the VALARM object with a unique ID of `alarm_uid`
         * from the iCalendar object identified by `uid` and, optionally, `rid`.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call `e_cal_backend_discard_alarm_finish()` to get the result of
         * the operation.
         * @param uid a unique ID for an iCalendar object
         * @param rid a recurrence ID, or `null`
         * @param alarm_uid a unique ID for an iCalendar VALARM object
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        discard_alarm(
            uid: string,
            rid: string | null,
            alarm_uid: string,
            opflags: ECal.OperationFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes the operation started with `e_cal_backend_discard_alarm()`.
         *
         * If an error occurred, the function will set `error` and return `false`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` on success, `false` on failure
         */
        discard_alarm_finish(result: Gio.AsyncResult): boolean;
        /**
         * Discards the VALARM object with a unique ID of `alarm_uid` from the
         * iCalendar object identified by `uid` and, optionally, `rid`.
         *
         * If an error occurs, the function will set `error` and return `false`.
         * @param uid a unique ID for an iCalendar object
         * @param rid a recurrence ID, or `null`
         * @param alarm_uid a unique ID for an iCalendar VALARM object
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns `true` on success, `false` on failure
         */
        discard_alarm_sync(
            uid: string,
            rid: string | null,
            alarm_uid: string,
            opflags: ECal.OperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Thread-safe variation of `e_cal_backend_get_cache_dir()`.
         * Use this function when accessing `backend` from multiple threads.
         *
         * The returned string should be freed with `g_free()` when no longer needed.
         * @returns a newly-allocated copy of {@link EDataCal.CalBackend.cache_dir}
         */
        dup_cache_dir(): string;
        /**
         * Calls `func` for each existing view (as returned by `e_cal_backend_list_views()`).
         * The `func` can return `false` to stop early.
         * @param func an {@link EDataCal.CalBackendForeachViewFunc} function to call
         * @returns whether the call had been stopped by `func`
         */
        foreach_view(func: CalBackendForeachViewFunc): boolean;
        /**
         * Notifies each view of the `backend` about progress. When `only_completed_views`
         * is `true`, notifies only completed views.
         * @param only_completed_views whether notify in completed views only
         * @param percent percent complete
         * @param message message describing the operation in progress, or `null`
         */
        foreach_view_notify_progress(only_completed_views: boolean, percent: number, message?: string | null): void;
        /**
         * Asynchronously inspects the iCalendar object specified by `uid` and,
         * optionally, `rid` for attachments.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_cal_backend_get_attachment_uris_finish()` to get the result of the
         * operation.
         * @param uid a unique ID for an iCalendar object
         * @param rid a recurrence ID, or `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        get_attachment_uris(
            uid: string,
            rid?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously inspects the iCalendar object specified by `uid` and,
         * optionally, `rid` for attachments.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_cal_backend_get_attachment_uris_finish()` to get the result of the
         * operation.
         * @param uid a unique ID for an iCalendar object
         * @param rid a recurrence ID, or `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_attachment_uris(
            uid: string,
            rid: string | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously inspects the iCalendar object specified by `uid` and,
         * optionally, `rid` for attachments.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_cal_backend_get_attachment_uris_finish()` to get the result of the
         * operation.
         * @param uid a unique ID for an iCalendar object
         * @param rid a recurrence ID, or `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_attachment_uris(
            uid: string,
            rid?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes the operation started with `e_cal_backend_get_attachment_uris()`.
         *
         * The requested attachment URI strings are deposited in `out_attachment_uris`.
         * Free the returned strings with `g_free()` when finished with them.
         *
         * If an error occurred, the function will set `error` and return `false`.
         * Note that an empty result set does not necessarily imply an error.
         * @param result a {@link Gio.AsyncResult}
         * @param out_attachment_uris a {@link GLib.Queue} in which to deposit results
         * @returns `true` on success, `false` on failure
         */
        get_attachment_uris_finish(result: Gio.AsyncResult, out_attachment_uris: GLib.Queue): boolean;
        /**
         * Inspects the iCalendar object specified by `uid` and, optionally, `rid`
         * for attachments and deposits a URI string for each attachment in
         * `out_attachment_uris`.  Free the returned strings with `g_free()` when
         * finished with them.
         *
         * If an error occurs, the function will set `error` and return `false`.
         * Note that an empty result set does not necessarily imply an error.
         * @param uid a unique ID for an iCalendar object
         * @param rid a recurrence ID, or `null`
         * @param out_attachment_uris a {@link GLib.Queue} in which to deposit results
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns `true` on success, `false` on failure
         */
        get_attachment_uris_sync(
            uid: string,
            rid: string | null,
            out_attachment_uris: GLib.Queue,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Obtains the value of the backend property named `prop_name`.
         * Freed the returned string with `g_free()` when finished with it.
         * @param prop_name a backend property name
         * @returns the value for `prop_name`
         */
        get_backend_property(prop_name: string): string;
        /**
         * Returns the cache directory path used by `backend`.
         * @returns the cache directory path
         */
        get_cache_dir(): string;
        /**
         * Asynchronously obtains a free/busy object for the list of `users` in the
         * time interval between `start` and `end`.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call `e_cal_backend_get_free_busy_finish()` to get the result of
         * the operation.
         * @param start start time
         * @param end end time
         * @param users a `null`-terminated array of user strings
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        get_free_busy(
            start: number,
            end: number,
            users: string[],
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously obtains a free/busy object for the list of `users` in the
         * time interval between `start` and `end`.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call `e_cal_backend_get_free_busy_finish()` to get the result of
         * the operation.
         * @param start start time
         * @param end end time
         * @param users a `null`-terminated array of user strings
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_free_busy(
            start: number,
            end: number,
            users: string[],
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously obtains a free/busy object for the list of `users` in the
         * time interval between `start` and `end`.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call `e_cal_backend_get_free_busy_finish()` to get the result of
         * the operation.
         * @param start start time
         * @param end end time
         * @param users a `null`-terminated array of user strings
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_free_busy(
            start: number,
            end: number,
            users: string[],
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes the operation started with `e_cal_backend_get_free_busy()`.
         *
         * The free/busy results can be returned through the
         * `e_data_cal_report_free_busy_data()` function asynchronously. The out_freebusy
         * will contain all the returned data, possibly again, thus the client is
         * responsible for the data merge, if needed.
         *
         * If an error occurred, the function will set `error` and return `false`.
         * @param result a {@link Gio.AsyncResult}
         * @param out_freebusy iCalendar strings with overall returned Free/Busy data
         * @returns `true` on success, `false` on failure
         */
        get_free_busy_finish(result: Gio.AsyncResult, out_freebusy: string[]): boolean;
        /**
         * Obtains a free/busy object for the list of `users` in the time interval
         * between `start` and `end`.
         *
         * The free/busy results can be returned through the
         * `e_data_cal_report_free_busy_data()` function asynchronously. The out_freebusy
         * will contain all the returned data, possibly again, thus the client is
         * responsible for the data merge, if needed.
         *
         * If an error occurs, the function will set `error` and return `false`.
         * @param start start time
         * @param end end time
         * @param users a `null`-terminated array of user strings
         * @param out_freebusy iCalendar strings with overall returned Free/Busy data
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns `true` on success, `false` on failure.
         */
        get_free_busy_sync(
            start: number,
            end: number,
            users: string[],
            out_freebusy: string[],
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Gets the kind of components the given backend stores.
         * @returns The kind of components for this backend.
         */
        get_kind(): ICalGLib.ComponentKind;
        /**
         * Asynchronously obtains an {@link ECal.Component} by its `uid` and, optionally, `rid`.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_cal_backend_get_object_finish()` to get the result of the operation.
         * @param uid a unique ID for an iCalendar object
         * @param rid a recurrence ID, or `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        get_object(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): globalThis.Promise<string>;
        /**
         * Asynchronously obtains an {@link ECal.Component} by its `uid` and, optionally, `rid`.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_cal_backend_get_object_finish()` to get the result of the operation.
         * @param uid a unique ID for an iCalendar object
         * @param rid a recurrence ID, or `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_object(
            uid: string,
            rid: string | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously obtains an {@link ECal.Component} by its `uid` and, optionally, `rid`.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_cal_backend_get_object_finish()` to get the result of the operation.
         * @param uid a unique ID for an iCalendar object
         * @param rid a recurrence ID, or `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_object(
            uid: string,
            rid?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Finishes the operation started with `e_cal_backend_get_object()`.
         *
         * The returned string is an iCalendar object describing either single component
         * or a vCalendar object, which includes also detached instances. It should be
         * freed when no longer needed.
         *
         * If an error occurs, the function will set `error` and return `null`.
         * @param result a {@link Gio.AsyncResult}
         * @returns an {@link ECal.Component}, or `null` on error
         */
        get_object_finish(result: Gio.AsyncResult): string;
        /**
         * Asynchronously obtains a set of iCalendar instances which satisfy
         * the criteria specified in `query`.
         *
         * When the operation in finished, `callback` will be called.  You can then
         * call `e_cal_backend_get_object_list_finish()` to get the result of the
         * operation.
         * @param query a search query in S-expression format
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        get_object_list(query: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously obtains a set of iCalendar instances which satisfy
         * the criteria specified in `query`.
         *
         * When the operation in finished, `callback` will be called.  You can then
         * call `e_cal_backend_get_object_list_finish()` to get the result of the
         * operation.
         * @param query a search query in S-expression format
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_object_list(
            query: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously obtains a set of iCalendar instances which satisfy
         * the criteria specified in `query`.
         *
         * When the operation in finished, `callback` will be called.  You can then
         * call `e_cal_backend_get_object_list_finish()` to get the result of the
         * operation.
         * @param query a search query in S-expression format
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_object_list(
            query: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes the operation started with `e_cal_backend_get_object_list()`.
         *
         * The matching iCalendar instances are deposited in `out_objects`.
         * The returned instances should be freed with `g_free()` when finished with them.
         *
         * If an error occurred, the function will set `error` and return `false`.
         * Note that an empty result set does not necessarily imply an error.
         * @param result a {@link Gio.AsyncResult}
         * @param out_objects a {@link GLib.Queue} in which to deposit results
         * @returns `true` on success, `false` on failure
         */
        get_object_list_finish(result: Gio.AsyncResult, out_objects: GLib.Queue): boolean;
        /**
         * Obtains a set of iCalendar string instances which satisfy the criteria
         * specified in `query`, and deposits them in `out_objects`.
         *
         * The returned instances should be freed with `g_free()` when finished with them.
         *
         * If an error occurs, the function will set `error` and return `false`.
         * Note that an empty result set does not necessarily imply an error.
         * @param query a search query in S-expression format
         * @param out_objects a {@link GLib.Queue} in which to deposit results
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns `true` on success, `false` on failure
         */
        get_object_list_sync(query: string, out_objects: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Obtains an iCalendar string for an object identified by its `uid` and,
         * optionally, `rid`.
         *
         * The returned string should be freed with `g_free()` when finished with it.
         *
         * If an error occurs, the function will set `error` and return `null`.
         * @param uid a unique ID for an iCalendar object
         * @param rid a recurrence ID, or `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns an {@link ECal.Component}, or `null` on error
         */
        get_object_sync(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): string;
        /**
         * Returns the data source registry to which {@link EBackend.Backend.source} belongs.
         * @returns an {@link EDataServer.SourceRegistry}
         */
        get_registry(): EDataServer.SourceRegistry;
        /**
         * Asynchronously obtains the VTIMEZONE object identified by `tzid`.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call `e_cal_backend_get_timezone_finish()` to get the result of
         * the operation.
         * @param tzid a unique ID for an iCalendar VTIMEZONE object
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        get_timezone(tzid: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<string>;
        /**
         * Asynchronously obtains the VTIMEZONE object identified by `tzid`.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call `e_cal_backend_get_timezone_finish()` to get the result of
         * the operation.
         * @param tzid a unique ID for an iCalendar VTIMEZONE object
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_timezone(
            tzid: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously obtains the VTIMEZONE object identified by `tzid`.
         *
         * When the operation is finished, `callback` will be called.  You can
         * then call `e_cal_backend_get_timezone_finish()` to get the result of
         * the operation.
         * @param tzid a unique ID for an iCalendar VTIMEZONE object
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_timezone(
            tzid: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * @param args
         */
        // Conflicted with ECal.TimezoneCache.get_timezone
        get_timezone(...args: never[]): any;
        /**
         * Finishes the operation started with `e_cal_backend_get_timezone()`.
         *
         * Free the returned string with `g_free()` when finished with it.
         *
         * If an error occurred, the function will set `error` and return `null`.
         * @param result a {@link Gio.AsyncResult}
         * @returns an iCalendar string, or `null` on error
         */
        get_timezone_finish(result: Gio.AsyncResult): string;
        /**
         * Obtains the VTIMEZONE object identified by `tzid`.  Free the returned
         * string with `g_free()` when finished with it.
         *
         * If an error occurs, the function will set `error` and return `null`.
         * @param tzid a unique ID for an iCalendar VTIMEZONE object
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns an iCalendar string, or `null` on error
         */
        get_timezone_sync(tzid: string, cancellable?: Gio.Cancellable | null): string;
        /**
         * Returns whether `backend` will accept changes to its data content.
         * @returns whether `backend` is writable
         */
        get_writable(): boolean;
        /**
         * Checks if `backend`'s storage has been opened (and
         * authenticated, if necessary) and the backend itself
         * is ready for accessing. This property is changed automatically
         * after the `backend` is successfully opened.
         * @returns `true` if fully opened, `false` otherwise.
         */
        is_opened(): boolean;
        /**
         * @returns Whether is backend read-only.
         */
        is_readonly(): boolean;
        /**
         * Returns a list of {@link EDataCal.DataCalView} instances added with
         * `e_cal_backend_add_view()`.
         *
         * The views returned in the list are referenced for thread-safety.
         * They must each be unreferenced with `g_object_unref()` when finished
         * with them.  Free the returned list itself with `g_list_free()`.
         *
         * An easy way to free the list properly in one step is as follows:
         *
         *
         * ```
         *   g_list_free_full (list, g_object_unref);
         * ```
         *
         * @returns a list of cal views
         */
        list_views(): DataCalView[];
        /**
         * Asynchronously modifies one or more iCalendar objects according to
         * `calobjs` and `mod`.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_cal_backend_modify_objects_finish()` to get the result of the
         * operation.
         * @param calobjs a `null`-terminated array of iCalendar strings
         * @param mod modification type for recurrences
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        modify_objects(
            calobjs: string,
            mod: ECal.ObjModType | null,
            opflags: ECal.OperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously modifies one or more iCalendar objects according to
         * `calobjs` and `mod`.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_cal_backend_modify_objects_finish()` to get the result of the
         * operation.
         * @param calobjs a `null`-terminated array of iCalendar strings
         * @param mod modification type for recurrences
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        modify_objects(
            calobjs: string,
            mod: ECal.ObjModType | null,
            opflags: ECal.OperationFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously modifies one or more iCalendar objects according to
         * `calobjs` and `mod`.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_cal_backend_modify_objects_finish()` to get the result of the
         * operation.
         * @param calobjs a `null`-terminated array of iCalendar strings
         * @param mod modification type for recurrences
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        modify_objects(
            calobjs: string,
            mod: ECal.ObjModType | null,
            opflags: ECal.OperationFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes the operation started with `e_cal_backend_modify_objects()`.
         *
         * If an error occurred, the function will set `error` and return `false`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` on success, `false` on failure
         */
        modify_objects_finish(result: Gio.AsyncResult): boolean;
        /**
         * Modifies one or more iCalendar objects according to `calobjs` and `mod`.
         *
         * If an error occurs, the function will set `error` and return `false`.
         * @param calobjs a `null`-terminated array of iCalendar strings
         * @param mod modification type for recurrences
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns `true` on success, `false` on failure
         */
        modify_objects_sync(
            calobjs: string,
            mod: ECal.ObjModType | null,
            opflags: ECal.OperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Notifies each of the backend's listeners about a new object.
         *
         * Uses the {@link EDataCal.DataCalView}'s fields-of-interest to filter out unwanted
         * information from ical strings sent over the bus.
         * @param component the newly created {@link ECal.Component}
         */
        notify_component_created(component: ECal.Component): void;
        /**
         * Notifies each of the backend's listeners about a modified object.
         *
         * Uses the {@link EDataCal.DataCalView}'s fields-of-interest to filter out unwanted
         * information from ical strings sent over the bus.
         * @param old_component the {@link ECal.Component} before the modification
         * @param new_component the {@link ECal.Component} after the modification
         */
        notify_component_modified(old_component: ECal.Component, new_component: ECal.Component): void;
        /**
         * Notifies each of the backend's listeners about a removed object.
         *
         * Uses the {@link EDataCal.DataCalView}'s fields-of-interest to filter out unwanted
         * information from ical strings sent over the bus.
         * @param id the Id of the removed object
         * @param old_component the removed component
         * @param new_component the component after the removal. This only applies to recurrent appointments that had an instance removed. In that case, this function notifies a modification instead of a removal.
         */
        notify_component_removed(
            id: ECal.ComponentId,
            old_component: ECal.Component,
            new_component: ECal.Component,
        ): void;
        /**
         * Notifies each of the backend's listeners about an error
         * @param message Error message
         */
        notify_error(message: string): void;
        /**
         * Notifies client about property value change.
         * @param prop_name property name, which changed
         * @param prop_value new property value
         */
        notify_property_changed(prop_name: string, prop_value?: string | null): void;
        /**
         * Asynchronously "opens" the `backend`.  Opening a backend is something of
         * an outdated concept, but the operation is hanging around for a little
         * while longer.  This usually involves some custom initialization logic,
         * and testing of remote authentication if applicable.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_cal_backend_open_finish()` to get the result of the operation.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        open(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously "opens" the `backend`.  Opening a backend is something of
         * an outdated concept, but the operation is hanging around for a little
         * while longer.  This usually involves some custom initialization logic,
         * and testing of remote authentication if applicable.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_cal_backend_open_finish()` to get the result of the operation.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        open(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously "opens" the `backend`.  Opening a backend is something of
         * an outdated concept, but the operation is hanging around for a little
         * while longer.  This usually involves some custom initialization logic,
         * and testing of remote authentication if applicable.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_cal_backend_open_finish()` to get the result of the operation.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        open(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes the operation started with `e_cal_backend_open()`.
         *
         * If an error occurred, the function will set `error` and return `false`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` on success, `false` on failure
         */
        open_finish(result: Gio.AsyncResult): boolean;
        /**
         * "Opens" the `backend`.  Opening a backend is something of an outdated
         * concept, but the operation is hanging around for a little while longer.
         * This usually involves some custom initialization logic, and testing of
         * remote authentication if applicable.
         *
         * If an error occurs, the function will set `error` and return `false`.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns `true` on success, `false` on failure
         */
        open_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Obtains the {@link Gio.Task} for `opid`.
         *
         * <note>
         *   <para>
         *     This is a temporary function to serve {@link EDataCal.DataCal}'s "respond"
         *     functions until they can be removed.  Nothing else should be
         *     calling this function.
         *   </para>
         * </note>
         * @param opid an operation ID given to {@link EDataCal.DataCal}
         * @returns a {@link Gio.Task}
         */
        prepare_for_completion(opid: number): Gio.Task;
        /**
         * Asynchronously receives the set of iCalendar objects specified by
         * `calobj`.  This is used for iTIP confirmation and cancellation messages
         * for scheduled meetings.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_cal_backend_receive_objects_finish()` to get the result of the
         * operation.
         * @param calobj an iCalendar string
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        receive_objects(
            calobj: string,
            opflags: ECal.OperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously receives the set of iCalendar objects specified by
         * `calobj`.  This is used for iTIP confirmation and cancellation messages
         * for scheduled meetings.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_cal_backend_receive_objects_finish()` to get the result of the
         * operation.
         * @param calobj an iCalendar string
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        receive_objects(
            calobj: string,
            opflags: ECal.OperationFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously receives the set of iCalendar objects specified by
         * `calobj`.  This is used for iTIP confirmation and cancellation messages
         * for scheduled meetings.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_cal_backend_receive_objects_finish()` to get the result of the
         * operation.
         * @param calobj an iCalendar string
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        receive_objects(
            calobj: string,
            opflags: ECal.OperationFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes the operation started with `e_cal_backend_receive_objects()`.
         *
         * If an error occurred, the function will set `error` and erturn `false`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` on success, `false` on failure
         */
        receive_objects_finish(result: Gio.AsyncResult): boolean;
        /**
         * Receives the set of iCalendar objects specified by `calobj`.  This is used
         * for iTIP confirmation and cancellation messages for scheduled meetings.
         *
         * If an error occurs, the function will set `error` and return `false`.
         * @param calobj an iCalendar string
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns `true` on success, `false` on failure
         */
        receive_objects_sync(
            calobj: string,
            opflags: ECal.OperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Returns the {@link EDataCal.DataCal} for `backend`.  The {@link EDataCal.DataCal} is essentially
         * the glue between incoming D-Bus requests and `backend`'s native API.
         *
         * An {@link EDataCal.DataCal} should be set only once after `backend` is first created.
         * If an {@link EDataCal.DataCal} has not yet been set, the function returns `null`.
         *
         * The returned {@link EDataCal.DataCal} is referenced for thread-safety and must be
         * unreferenced with `g_object_unref()` when finished with it.
         * @returns an {@link EDataCal.DataCal}, or `null`
         */
        ref_data_cal(): DataCal | null;
        /**
         * Returns the {@link Gio.ProxyResolver} for `backend` (if applicable), as indicated
         * by the {@link EDataServer.SourceAuthentication.proxy_uid} of `backend`'s {@link EBackend.Backend.source}
         * or one of its ancestors.
         *
         * The returned {@link Gio.ProxyResolver} is referenced for thread-safety and must
         * be unreferenced with `g_object_unref()` when finished with it.
         * @returns a {@link Gio.ProxyResolver}, or `null`
         */
        ref_proxy_resolver(): Gio.ProxyResolver | null;
        /**
         * Asynchronously initiates a refresh for `backend`, if the `backend` supports
         * refreshing.  The actual refresh operation completes on its own time.  This
         * function, along with `e_cal_backend_refresh_finish()`, merely initiates the
         * operation.
         *
         * Once the refresh is initiated, `callback` will be called.  You can then
         * call `e_cal_backend_refresh_finish()` to get the result of the initiation.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        refresh(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously initiates a refresh for `backend`, if the `backend` supports
         * refreshing.  The actual refresh operation completes on its own time.  This
         * function, along with `e_cal_backend_refresh_finish()`, merely initiates the
         * operation.
         *
         * Once the refresh is initiated, `callback` will be called.  You can then
         * call `e_cal_backend_refresh_finish()` to get the result of the initiation.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously initiates a refresh for `backend`, if the `backend` supports
         * refreshing.  The actual refresh operation completes on its own time.  This
         * function, along with `e_cal_backend_refresh_finish()`, merely initiates the
         * operation.
         *
         * Once the refresh is initiated, `callback` will be called.  You can then
         * call `e_cal_backend_refresh_finish()` to get the result of the initiation.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        refresh(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes the refresh initiation started with `e_cal_backend_refresh()`.
         *
         * If an error occurred while initiating the refresh, the function will set
         * `error` and return `false`.  If the `backend` does not support refreshing,
         * the function will set an {@link EDataServer.ClientError.NOT_SUPPORTED} error and return
         * `false`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` on success, `false` on failure
         */
        refresh_finish(result: Gio.AsyncResult): boolean;
        /**
         * Initiates a refresh for `backend`, if the `backend` supports refreshing.
         * The actual refresh operation completes on its own time.  This function
         * merely initiates the operation.
         *
         * If an error occrs while initiating the refresh, the function will set
         * `error` and return `false`.  If the `backend` does not support refreshing,
         * the function will set an {@link EDataServer.ClientError.NOT_SUPPORTED} error and return
         * `false`.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns `true` on success, `false` on failure
         */
        refresh_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously removes one or more iCalendar objects according to
         * `component_ids` and `mod`.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_cal_backend_remove_objects_finish()` to get the result of the
         * operation.
         * @param component_ids a {@link GLib.List} of {@link ECal.ComponentId} structs
         * @param mod modification type for recurrences
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        remove_objects(
            component_ids: ECal.ComponentId[],
            mod: ECal.ObjModType | null,
            opflags: ECal.OperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously removes one or more iCalendar objects according to
         * `component_ids` and `mod`.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_cal_backend_remove_objects_finish()` to get the result of the
         * operation.
         * @param component_ids a {@link GLib.List} of {@link ECal.ComponentId} structs
         * @param mod modification type for recurrences
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        remove_objects(
            component_ids: ECal.ComponentId[],
            mod: ECal.ObjModType | null,
            opflags: ECal.OperationFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously removes one or more iCalendar objects according to
         * `component_ids` and `mod`.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_cal_backend_remove_objects_finish()` to get the result of the
         * operation.
         * @param component_ids a {@link GLib.List} of {@link ECal.ComponentId} structs
         * @param mod modification type for recurrences
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        remove_objects(
            component_ids: ECal.ComponentId[],
            mod: ECal.ObjModType | null,
            opflags: ECal.OperationFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes the operation started with `e_cal_backend_remove_objects()`.
         *
         * If an error occurred, the function will set `error` and return `false`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` on success, `false` on failure
         */
        remove_objects_finish(result: Gio.AsyncResult): boolean;
        /**
         * Removes one or more iCalendar objects according to `component_ids` and `mod`.
         *
         * If an error occurs, the function will set `error` and return `false`.
         * @param component_ids a {@link GLib.List} of {@link ECal.ComponentId} structs
         * @param mod modification type for recurrences
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns `true` on success, `false` on failure
         */
        remove_objects_sync(
            component_ids: ECal.ComponentId[],
            mod: ECal.ObjModType | null,
            opflags: ECal.OperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Removes view from the list of live views for the backend.
         * @param view An {@link EDataCal.DataCalView} object, previously added with `ref` e_cal_backend_add_view.
         */
        remove_view(view: DataCalView): void;
        /**
         * Schedules user function `func` to be run in a dedicated thread as
         * a blocking operation.
         *
         * The function adds its own reference to `use_cancellable`, if not `null`.
         *
         * The error returned from `func` is propagated to client using
         * `e_cal_backend_notify_error()` function. If it's not desired,
         * then left the error unchanged and notify about errors manually.
         * @param use_cancellable an optional {@link Gio.Cancellable} to use for `func`
         * @param func a function to call in a dedicated thread
         * @param user_data_free optional destroy call back for `user_data`
         */
        schedule_custom_operation(
            use_cancellable: Gio.Cancellable | null,
            func: CalBackendCustomOpFunc,
            user_data_free?: GLib.DestroyNotify | null,
        ): void;
        /**
         * Asynchronously sends meeting information in `calobj`.  The `backend` may
         * modify `calobj` and send meeting information only to particular users.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_cal_backend_send_objects_finish()` to get the result of the operation.
         * @param calobj an iCalendar string
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        send_objects(
            calobj: string,
            opflags: ECal.OperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<string>;
        /**
         * Asynchronously sends meeting information in `calobj`.  The `backend` may
         * modify `calobj` and send meeting information only to particular users.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_cal_backend_send_objects_finish()` to get the result of the operation.
         * @param calobj an iCalendar string
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        send_objects(
            calobj: string,
            opflags: ECal.OperationFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously sends meeting information in `calobj`.  The `backend` may
         * modify `calobj` and send meeting information only to particular users.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_cal_backend_send_objects_finish()` to get the result of the operation.
         * @param calobj an iCalendar string
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        send_objects(
            calobj: string,
            opflags: ECal.OperationFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Finishes the operation started with `e_cal_backend_send_objects()`.
         *
         * The function returns a string representation of a sent, or to be send,
         * vCalendar and deposits the list of users the meeting information was sent
         * to, or to be send to, in `out_users`.
         *
         * Free the returned pointer with `g_free()`, when no longer needed.
         *
         * If an error occurs, the function will set `error` and return `null`.
         * @param result a {@link Gio.AsyncResult}
         * @param out_users a {@link GLib.Queue} in which to deposit results
         * @returns a newly allocated vCalendar string, or `null` on error
         */
        send_objects_finish(result: Gio.AsyncResult, out_users: GLib.Queue): string;
        /**
         * Sends meeting information in `calobj`.  The `backend` may modify `calobj`
         * and send meeting information only to particular users.  The function
         * returns the (maybe) modified `calobj` and deposits the list of users the
         * meeting information was sent (to be send) to in `out_users`.
         *
         * The returned pointer should be freed with `g_free()`, when no londer needed.
         *
         * If an error occurs, the function will set `error` and return `null`.
         * @param calobj an iCalendar string
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param out_users a {@link GLib.Queue} in which to deposit results
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns a vCalendar string, or `null` on error
         */
        send_objects_sync(
            calobj: string,
            opflags: ECal.OperationFlags | null,
            out_users: GLib.Queue,
            cancellable?: Gio.Cancellable | null,
        ): string;
        /**
         * Sets the cache directory path for use by `backend`.
         *
         * Note that {@link EDataCal.CalBackend} is initialized with a default cache directory
         * path which should suffice for most cases.  Backends should not override
         * the default path without good reason.
         * @param cache_dir a local cache directory path
         */
        set_cache_dir(cache_dir: string): void;
        /**
         * Sets the {@link EDataCal.DataCal} for `backend`.  The {@link EDataCal.DataCal} is essentially the
         * glue between incoming D-Bus requests and `backend`'s native API.
         *
         * An {@link EDataCal.DataCal} should be set only once after `backend` is first created.
         *
         * The `backend` adds its own reference on the `data_cal`.
         * @param data_cal an {@link EDataCal.DataCal}
         */
        set_data_cal(data_cal: DataCal): void;
        /**
         * Sets whether `backend` will accept changes to its data content.
         * @param writable whether `backend` is writable
         */
        set_writable(writable: boolean): void;
        /**
         * Starts a new live view on the given backend.
         * @param view The view to be started.
         */
        start_view(view: DataCalView): void;
        /**
         * Stops a previously started live view on the given backend.
         * @param view The view to be stopped.
         */
        stop_view(view: DataCalView): void;
        /**
         * Returns a list of {@link ICalGLib.Timezone} instances that were explicitly added to
         * the `cache` through `e_timezone_cache_add_timezone()`.  In particular, any
         * built-in time zone data that `e_timezone_cache_get_timezone()` may use to
         * match a TZID string is excluded from the returned list.
         *
         * Free the returned list with `g_list_free()`.  The list elements are owned
         * by the `cache` and should not be modified or freed.
         * @returns a {@link GLib.List} of    {@link ICalGLib.Timezone} instances
         */
        list_timezones(): ICalGLib.Timezone[];
        /**
         * @param zone
         * @virtual
         */
        vfunc_timezone_added(zone: ICalGLib.Timezone): void;
        /**
         * @param zone
         * @virtual
         */
        vfunc_tzcache_add_timezone(zone: ICalGLib.Timezone): void;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace CalBackendFactory {
        // Signal signatures
        interface SignalSignatures extends EBackend.BackendFactory.SignalSignatures {
            'notify::extensible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends EBackend.BackendFactory.ConstructorProps {}
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     * @gir-type Class
     */
    abstract class CalBackendFactory extends EBackend.BackendFactory {
        static $gtype: GObject.GType<CalBackendFactory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CalBackendFactory.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CalBackendFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof CalBackendFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CalBackendFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CalBackendFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CalBackendFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CalBackendFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CalBackendFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace CalBackendSExp {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class CalBackendSExp extends GObject.Object {
        static $gtype: GObject.GType<CalBackendSExp>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CalBackendSExp.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CalBackendSExp.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](text: string): CalBackendSExp;

        // Signals

        /** @signal */
        connect<K extends keyof CalBackendSExp.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CalBackendSExp.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CalBackendSExp.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CalBackendSExp.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CalBackendSExp.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CalBackendSExp.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Determines biggest time window given by expressions "occur-in-range" in sexp.
         * @param start Start of the time window will be stored here.
         * @param end End of the time window will be stored here.
         * @returns `true` on success, `false` otherwise
         */
        evaluate_occur_times(start: number, end: number): boolean;
        /**
         * Locks the `sexp`. Other threads cannot use it until
         * it's unlocked with `e_cal_backend_sexp_unlock()`.
         */
        lock(): void;
        /**
         * Checks if `comp` matches `sexp`.
         * @param comp Component to match against the expression.
         * @param cache an {@link ECal.TimezoneCache}
         * @returns `true` if the component matches, `false` otherwise
         */
        match_comp(comp: ECal.Component, cache: ECal.TimezoneCache): boolean;
        /**
         * Checks if `object` matches `sexp`.
         * @param object An iCalendar string.
         * @param cache an {@link ECal.TimezoneCache}
         * @returns `true` if the object matches, `false` otherwise
         */
        match_object(object: string, cache: ECal.TimezoneCache): boolean;
        /**
         * Retrieve the text expression for the given {@link EDataCal.CalBackendSExp} object.
         * @returns the text expression
         */
        text(): string;
        /**
         * Unlocks the `sexp`, previously locked by `e_cal_backend_sexp_lock()`.
         */
        unlock(): void;
    }

    namespace CalBackendSync {
        // Signal signatures
        interface SignalSignatures extends CalBackend.SignalSignatures {
            'notify::cache-dir': (pspec: GObject.ParamSpec) => void;
            'notify::kind': (pspec: GObject.ParamSpec) => void;
            'notify::proxy-resolver': (pspec: GObject.ParamSpec) => void;
            'notify::registry': (pspec: GObject.ParamSpec) => void;
            'notify::writable': (pspec: GObject.ParamSpec) => void;
            'notify::connectable': (pspec: GObject.ParamSpec) => void;
            'notify::main-context': (pspec: GObject.ParamSpec) => void;
            'notify::online': (pspec: GObject.ParamSpec) => void;
            'notify::source': (pspec: GObject.ParamSpec) => void;
            'notify::user-prompter': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends CalBackend.ConstructorProps, ECal.TimezoneCache.ConstructorProps {}
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     * @gir-type Class
     */
    class CalBackendSync extends CalBackend implements ECal.TimezoneCache {
        static $gtype: GObject.GType<CalBackendSync>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CalBackendSync.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CalBackendSync.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof CalBackendSync.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CalBackendSync.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CalBackendSync.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CalBackendSync.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CalBackendSync.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CalBackendSync.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Add specified timezone
         * @param cal
         * @param cancellable
         * @param tzobject
         * @virtual
         */
        vfunc_add_timezone_sync(cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string): void;
        /**
         * Discard alarm
         * @param cal
         * @param cancellable
         * @param uid
         * @param rid
         * @param auid
         * @param opflags
         * @virtual
         */
        vfunc_discard_alarm_sync(
            cal: DataCal,
            cancellable: Gio.Cancellable | null,
            uid: string,
            rid: string,
            auid: string,
            opflags: ECal.OperationFlags,
        ): void;
        /**
         * Get single object
         * @param cal
         * @param cancellable
         * @param uid
         * @param rid
         * @param calobj
         * @virtual
         */
        vfunc_get_object_sync(
            cal: DataCal,
            cancellable: Gio.Cancellable | null,
            uid: string,
            rid: string,
            calobj: string,
        ): void;
        /**
         * Get specified timezone
         * @param cal
         * @param cancellable
         * @param tzid
         * @param tzobject
         * @virtual
         */
        vfunc_get_timezone_sync(
            cal: DataCal,
            cancellable: Gio.Cancellable | null,
            tzid: string,
            tzobject: string,
        ): void;
        /**
         * Open the calendar
         * @param cal
         * @param cancellable
         * @virtual
         */
        vfunc_open_sync(cal: DataCal, cancellable?: Gio.Cancellable | null): void;
        /**
         * Receive objects
         * @param cal
         * @param cancellable
         * @param calobj
         * @param opflags
         * @virtual
         */
        vfunc_receive_objects_sync(
            cal: DataCal,
            cancellable: Gio.Cancellable | null,
            calobj: string,
            opflags: ECal.OperationFlags,
        ): void;
        /**
         * Refresh the calendar
         * @param cal
         * @param cancellable
         * @virtual
         */
        vfunc_refresh_sync(cal: DataCal, cancellable?: Gio.Cancellable | null): void;

        // Methods

        /**
         * Calls the add_timezone_sync method on the given backend.
         * @param cal An EDataCal object.
         * @param cancellable a {@link Gio.Cancellable} for the operation
         * @param tzobject VTIMEZONE object to be added.
         */
        add_timezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string): void;
        /**
         * @param args
         */
        // Conflicted with EDataCal.CalBackend.add_timezone
        add_timezone(...args: never[]): any;
        /**
         * Calls the create_objects_sync method on the given backend.
         * @param cal An EDataCal object.
         * @param cancellable a {@link Gio.Cancellable} for the operation
         * @param calobjs The objects to be added.
         * @param opflags bit-or of {@link ECal.OperationFlags}
         */
        create_objects(
            cal: DataCal,
            cancellable: Gio.Cancellable | null,
            calobjs: string[],
            opflags: ECal.OperationFlags | null,
        ): [string[], ECal.Component[]];
        /**
         * @param args
         */
        // Conflicted with EDataCal.CalBackend.create_objects
        create_objects(...args: never[]): any;
        /**
         * Calls the discard_alarm_sync method on the given backend.
         * @param cal An EDataCal object.
         * @param cancellable a {@link Gio.Cancellable} for the operation
         * @param uid Unique id of the calendar object.
         * @param rid Recurrence id of the calendar object.
         * @param auid Alarm ID to remove.
         * @param opflags bit-or of {@link ECal.OperationFlags}
         */
        discard_alarm(
            cal: DataCal,
            cancellable: Gio.Cancellable | null,
            uid: string,
            rid: string,
            auid: string,
            opflags: ECal.OperationFlags | null,
        ): void;
        /**
         * @param args
         */
        // Conflicted with EDataCal.CalBackend.discard_alarm
        discard_alarm(...args: never[]): any;
        /**
         * Calls the get_attachment_uris_sync method on the given backend.
         * @param cal An EDataCal object.
         * @param cancellable a {@link Gio.Cancellable} for the operation
         * @param uid Unique id of the calendar object.
         * @param rid Recurrence id of the calendar object.
         * @param attachments Placeholder for list of returned attachment uris.
         */
        get_attachment_uris(
            cal: DataCal,
            cancellable: Gio.Cancellable | null,
            uid: string,
            rid: string,
            attachments: string[],
        ): void;
        /**
         * @param args
         */
        // Conflicted with EDataCal.CalBackend.get_attachment_uris
        get_attachment_uris(...args: never[]): any;
        /**
         * Calls the get_free_busy_sync method on the given backend.
         * @param cal An EDataCal object.
         * @param cancellable a {@link Gio.Cancellable} for the operation
         * @param users List of users to get F/B info from.
         * @param start Time range start.
         * @param end Time range end.
         */
        get_free_busy(
            cal: DataCal,
            cancellable: Gio.Cancellable | null,
            users: string[],
            start: number,
            end: number,
        ): string[];
        /**
         * @param args
         */
        // Conflicted with EDataCal.CalBackend.get_free_busy
        get_free_busy(...args: never[]): any;
        /**
         * Calls the get_object_sync method on the given backend.
         * @param cal An EDataCal object.
         * @param cancellable a {@link Gio.Cancellable} for the operation
         * @param uid UID of the object to get.
         * @param rid Recurrence ID of the specific instance to get, or `null` if    getting the master object.
         */
        get_object(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string | null): string;
        /**
         * @param args
         */
        // Conflicted with EDataCal.CalBackend.get_object
        get_object(...args: never[]): any;
        /**
         * Calls the get_object_list_sync method on the given backend.
         * @param cal An EDataCal object.
         * @param cancellable a {@link Gio.Cancellable} for the operation
         * @param sexp Search query.
         */
        get_object_list(cal: DataCal, cancellable: Gio.Cancellable | null, sexp: string): string[];
        /**
         * @param args
         */
        // Conflicted with EDataCal.CalBackend.get_object_list
        get_object_list(...args: never[]): any;
        /**
         * Calls the get_timezone_sync method on the given backend.
         * This method is not mandatory on the backend, because here
         * is used internal_get_timezone call to fetch timezone from
         * it and that is transformed to a string. In other words,
         * any object deriving from ECalBackendSync can implement only
         * internal_get_timezone and can skip implementation of
         * get_timezone_sync completely.
         * @param cal An EDataCal object.
         * @param cancellable a {@link Gio.Cancellable} for the operation
         * @param tzid ID of the timezone to retrieve.
         * @param tzobject Placeholder for the returned timezone.
         */
        get_timezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string, tzobject: string): void;
        /**
         * @param args
         */
        // Conflicted with EDataCal.CalBackend.get_timezone
        get_timezone(...args: never[]): any;
        /**
         * Calls the modify_objects_sync method on the given backend.
         * @param cal An EDataCal object.
         * @param cancellable a {@link Gio.Cancellable} for the operation
         * @param calobjs Objects to be modified.
         * @param mod Type of modification to be done.
         * @param opflags bit-or of {@link ECal.OperationFlags}
         */
        modify_objects(
            cal: DataCal,
            cancellable: Gio.Cancellable | null,
            calobjs: string[],
            mod: ECal.ObjModType | null,
            opflags: ECal.OperationFlags | null,
        ): [ECal.Component[], ECal.Component[]];
        /**
         * @param args
         */
        // Conflicted with EDataCal.CalBackend.modify_objects
        modify_objects(...args: never[]): any;
        /**
         * Calls the open_sync method on the given backend.
         * @param cal An EDataCal object.
         * @param cancellable a {@link Gio.Cancellable} for the operation or just create it when it does not exist.
         */
        open(cal: DataCal, cancellable?: Gio.Cancellable | null): void;
        /**
         * @param args
         */
        // Conflicted with EDataCal.CalBackend.open
        open(...args: never[]): any;
        /**
         * Calls the receive_objects_sync method on the given backend.
         * @param cal An EDataCal object.
         * @param cancellable a {@link Gio.Cancellable} for the operation
         * @param calobj iCalendar object to receive.
         * @param opflags bit-or of {@link ECal.OperationFlags}
         */
        receive_objects(
            cal: DataCal,
            cancellable: Gio.Cancellable | null,
            calobj: string,
            opflags: ECal.OperationFlags | null,
        ): void;
        /**
         * @param args
         */
        // Conflicted with EDataCal.CalBackend.receive_objects
        receive_objects(...args: never[]): any;
        /**
         * Calls the refresh_sync method on the given backend.
         * @param cal An EDataCal object.
         * @param cancellable a {@link Gio.Cancellable} for the operation
         */
        refresh(cal: DataCal, cancellable?: Gio.Cancellable | null): void;
        /**
         * @param args
         */
        // Conflicted with EDataCal.CalBackend.refresh
        refresh(...args: never[]): any;
        /**
         * Calls the remove_objects_sync method on the given backend.
         * @param cal An EDataCal object.
         * @param cancellable a {@link Gio.Cancellable} for the operation
         * @param ids List of {@link ECal.ComponentId} objects identifying the objects to remove.
         * @param mod Type of removal.
         * @param opflags bit-or of {@link ECal.OperationFlags}
         */
        remove_objects(
            cal: DataCal,
            cancellable: Gio.Cancellable | null,
            ids: ECal.ComponentId[],
            mod: ECal.ObjModType | null,
            opflags: ECal.OperationFlags | null,
        ): [ECal.Component[], ECal.Component[]];
        /**
         * @param args
         */
        // Conflicted with EDataCal.CalBackend.remove_objects
        remove_objects(...args: never[]): any;
        /**
         * Calls the send_objects_sync method on the given backend.
         * @param cal An EDataCal object.
         * @param cancellable a {@link Gio.Cancellable} for the operation
         * @param calobj The iCalendar object to send.
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param users List of users to send notifications to.
         */
        send_objects(
            cal: DataCal,
            cancellable: Gio.Cancellable | null,
            calobj: string,
            opflags: ECal.OperationFlags | null,
            users: string[],
        ): string;
        /**
         * @param args
         */
        // Conflicted with EDataCal.CalBackend.send_objects
        send_objects(...args: never[]): any;
        /**
         * Returns a list of {@link ICalGLib.Timezone} instances that were explicitly added to
         * the `cache` through `e_timezone_cache_add_timezone()`.  In particular, any
         * built-in time zone data that `e_timezone_cache_get_timezone()` may use to
         * match a TZID string is excluded from the returned list.
         *
         * Free the returned list with `g_list_free()`.  The list elements are owned
         * by the `cache` and should not be modified or freed.
         * @returns a {@link GLib.List} of    {@link ICalGLib.Timezone} instances
         */
        list_timezones(): ICalGLib.Timezone[];
        /**
         * @param zone
         * @virtual
         */
        vfunc_timezone_added(zone: ICalGLib.Timezone): void;
        /**
         * @param zone
         * @virtual
         */
        vfunc_tzcache_add_timezone(zone: ICalGLib.Timezone): void;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace CalCache {
        // Signal signatures
        interface SignalSignatures extends EBackend.Cache.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-last
             */
            'dup-component-revision': (arg0: ICalGLib.Component) => string;
            /**
             * A signal being called to get timezone when putting component
             * into the cache. It's used to make sure the cache contains
             * all timezones which are needed by the component. The returned
             * ICalTimezone will not be freed.
             * @signal
             * @since 3.30
             * @action
             * @run-last
             */
            'get-timezone': (arg0: string) => ICalGLib.Timezone;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                EBackend.Cache.ConstructorProps,
                ECal.TimezoneCache.ConstructorProps,
                EDataServer.Extensible.ConstructorProps {}
    }

    /**
     * Contains only private data that should be read and manipulated using
     * the functions below.
     * @gir-type Class
     * @since 3.26
     */
    class CalCache extends EBackend.Cache implements ECal.TimezoneCache, EDataServer.Extensible {
        static $gtype: GObject.GType<CalCache>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CalCache.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CalCache.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](filename: string, cancellable?: Gio.Cancellable | null): CalCache;

        // Signals

        /** @signal */
        connect<K extends keyof CalCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CalCache.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CalCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CalCache.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CalCache.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CalCache.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * An {@link ECal.RecurResolveTimezoneCb} callback, which can be used
         * with `e_cal_recur_generate_instances_sync()`. The `cal_cache`
         * is supposed to be an {@link EDataCal.CalCache} instance.
         * @param tzid a timezone ID
         * @param cal_cache an {@link EDataCal.CalCache}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        static resolve_timezone_cb(
            tzid: string,
            cal_cache?: any | null,
            cancellable?: Gio.Cancellable | null,
        ): ICalGLib.Timezone | null;

        // Virtual methods

        /**
         * Returns the `icomp` revision, used to detect changes.
         * The returned string should be freed with `g_free()`, when
         * no longer needed.
         * @param icomp an {@link ICalGLib.Component}
         * @virtual
         */
        vfunc_dup_component_revision(icomp: ICalGLib.Component): string;

        // Methods

        /**
         * Checkes whether the `cal_cache` contains an object with
         * the given `uid` and `rid`. The `rid` can be an empty string
         * or `null` to search for the master object, otherwise the check
         * is done for a detached instance, not for a recurrence instance.
         * @param uid component UID
         * @param rid optional component Recurrence-ID or `null`
         * @param deleted_flag one of {@link EBackend.CacheDeletedFlag} enum
         * @returns Whether the object had been found.
         */
        contains(uid: string, rid: string | null, deleted_flag: EBackend.CacheDeletedFlag | null): boolean;
        /**
         * @param args
         */
        // Conflicted with EBackend.Cache.contains
        contains(...args: never[]): any;
        /**
         * Deletes all locally stored attachments beside the cache file from the disk.
         * This doesn't modify the `component`. It's usually called before the `component`
         * is being removed from the `cal_cache`.
         * @param component an {@link ICalGLib.Component}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        delete_attachments(component: ICalGLib.Component, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Returns the `icomp` revision, used to detect changes.
         * The returned string should be freed with `g_free()`, when
         * no longer needed.
         * @param icomp an {@link ICalGLib.Component}
         * @returns A newly allocated string containing    revision of the `icomp`.
         */
        dup_component_revision(icomp: ICalGLib.Component): string;
        /**
         * Gets a timezone with given `tzid`, which had been previously put
         * into the `cal_cache` with `e_cal_cache_put_timezone()`.
         * The returned string is an iCal string for that ICalTimezone and
         * should be freed with `g_free()` when no longer needed.
         * @param tzid a timezone ID to get
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        dup_timezone_as_string(tzid: string, cancellable?: Gio.Cancellable | null): [boolean, string];
        /**
         * Gets a component identified by `uid`, and optionally by the `rid`,
         * from the `cal_cache`. The returned `out_component` should be freed with
         * `g_object_unref()`, when no longer needed.
         * @param uid a UID of the component
         * @param rid an optional Recurrence-ID
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        get_component(uid: string, rid: string | null, cancellable?: Gio.Cancellable | null): [boolean, ECal.Component];
        /**
         * Gets a component identified by `uid`, and optionally by the `rid`,
         * from the `cal_cache`. The returned `out_icalstring` should be freed with
         * `g_free()`, when no longer needed.
         * @param uid a UID of the component
         * @param rid an optional Recurrence-ID
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        get_component_as_string(
            uid: string,
            rid: string | null,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string];
        /**
         * Gets the custom flags previously set for `uid` and `rid`, either with
         * `e_cal_cache_set_component_custom_flags()`, when adding components or
         * when removing components in offline.
         * @param uid a UID of the component
         * @param rid an optional Recurrence-ID
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        get_component_custom_flags(
            uid: string,
            rid: string | null,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, number];
        /**
         * Gets the extra data previously set for `uid` and `rid`, either with
         * `e_cal_cache_set_component_extra()` or when adding components.
         * @param uid a UID of the component
         * @param rid an optional Recurrence-ID
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        get_component_extra(uid: string, rid: string | null, cancellable?: Gio.Cancellable | null): [boolean, string];
        /**
         * Gets the master object and all detached instances for a component
         * identified by the `uid`. Free the returned {@link GLib.SList} with
         * g_slist_free_full (components, g_object_unref); when
         * no longer needed.
         * @param uid a UID of the component
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        get_components_by_uid(uid: string, cancellable?: Gio.Cancellable | null): [boolean, ECal.Component[]];
        /**
         * Gets the master object and all detached instances as string
         * for a component identified by the `uid`. Free the returned {@link GLib.SList}
         * with g_slist_free_full (icalstrings, g_free); when no longer needed.
         * @param uid a UID of the component
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        get_components_by_uid_as_string(uid: string, cancellable?: Gio.Cancellable | null): [boolean, string[]];
        /**
         * Gets a list of components which occur in the given time range.
         * It's not an error if none is found.
         * @param range_start start of the range, as time_t, inclusive
         * @param range_end end of the range, as time_t, exclusive
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        get_components_in_range(
            range_start: number,
            range_end: number,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, ECal.Component[]];
        /**
         * Gets a list of components, as iCal strings, which occur in the given time range.
         * @param range_start start of the range, as time_t, inclusive
         * @param range_end end of the range, as time_t, exclusive
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        get_components_in_range_as_strings(
            range_start: number,
            range_end: number,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string[]];
        /**
         * Gets all the ID-s the `extra` data is set for.
         *
         * The `out_ids` should be freed with
         * g_slist_free_full (ids, (GDestroyNotify) e_cal_component_id_free);
         * when no longer needed.
         * @param extra an extra column value to search for
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        get_ids_with_extra(extra: string, cancellable?: Gio.Cancellable | null): [boolean, ECal.ComponentId[]];
        /**
         * The same as `e_cache_get_offline_changes()`, only splits the saved UID
         * into UID and RID and saved the data into {@link EDataCal.CalCacheOfflineChange} structure.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns A newly allocated list of all    offline changes. Free it with g_slist_free_full (slist, e_cal_cache_offline_change_free);    when no longer needed.
         */
        get_offline_changes(cancellable?: Gio.Cancellable | null): CalCacheOfflineChange[];
        /**
         * @param args
         */
        // Conflicted with EBackend.Cache.get_offline_changes
        get_offline_changes(...args: never[]): any;
        /**
         * This is a wrapper of `e_cache_get_offline_state()`, ensuring that
         * a correct {@link EBackend.Cache} UID will be used.
         * @param uid a UID of the component
         * @param rid an optional Recurrence-ID
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Current offline state {@link EBackend.OfflineState} for the given component.    It returns {@link EBackend.OfflineState.UNKNOWN} when the component could not be    found or other error happened.
         */
        get_offline_state(
            uid: string,
            rid?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): EBackend.OfflineState;
        /**
         * @param args
         */
        // Conflicted with EBackend.Cache.get_offline_state
        get_offline_state(...args: never[]): any;
        /**
         * Gets a timezone with given `tzid`, which had been previously put
         * into the `cal_cache` with `e_cal_cache_put_timezone()`.
         * The returned ICalTimezone is owned by the `cal_cache` and should
         * not be freed.
         * @param tzid a timezone ID to get
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        get_timezone(tzid: string, cancellable?: Gio.Cancellable | null): [boolean, ICalGLib.Timezone];
        /**
         * @param args
         */
        // Conflicted with ECal.TimezoneCache.get_timezone
        get_timezone(...args: never[]): any;
        /**
         * Gets a list of all stored timezones by the `cal_cache`.
         * Only the returned list should be freed with `g_list_free()`
         * when no longer needed; the {@link ICalGLib.Timezone}-s are owned
         * by the `cal_cache`.
         *
         * Note: The list can contain timezones previously stored
         * in the cache, but removed from it since they were loaded,
         * because these are freed only when also the `cal_cache` is freed.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        list_timezones(cancellable?: Gio.Cancellable | null): [boolean, ICalGLib.Timezone[]];
        /**
         * @param args
         */
        // Conflicted with ECal.TimezoneCache.list_timezones
        list_timezones(...args: never[]): any;
        /**
         * Adds a `component` into the `cal_cache`. Any existing with the same UID
         * and RID is replaced.
         * @param component an {@link ECal.Component} to put into the `cal_cache`
         * @param extra an extra data to store in association with the `component`
         * @param custom_flags custom flags for the `component`, not interpreted by the `cal_cache`
         * @param offline_flag one of {@link EBackend.CacheOfflineFlag}, whether putting this component in offline
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        put_component(
            component: ECal.Component,
            extra: string | null,
            custom_flags: number,
            offline_flag: EBackend.CacheOfflineFlag | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Adds a list of `components` into the `cal_cache`. Any existing with the same UID
         * and RID are replaced.
         *
         * If `extras` is not `null`, its length should be the same as the length
         * of the `components`. Similarly the non-NULL `custom_flags` length
         * should be the same as the length of the `components`.
         * @param components a {@link GLib.SList} of {@link ECal.Component} to put into the `cal_cache`
         * @param extras optional extra data to store in association with the `components`
         * @param custom_flags optional custom flags to use for the `components`
         * @param offline_flag one of {@link EBackend.CacheOfflineFlag}, whether putting these components in offline
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        put_components(
            components: ECal.Component[],
            extras: string[] | null,
            custom_flags: number[] | null,
            offline_flag: EBackend.CacheOfflineFlag | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Puts the `zone` into the `cal_cache` using its timezone ID as
         * an identificator. The function adds a new or replaces existing,
         * if any such already exists in the `cal_cache`. The function does
         * nothing and returns `true`, when the passed-in `zone` is libical
         * builtin timezone.
         * @param zone an {@link ICalGLib.Timezone} to put
         * @param inc_ref_counts how many refs to add, or 0 to have it stored forever
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        put_timezone(zone: ICalGLib.Timezone, inc_ref_counts: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Removes a component identified by `uid` and `rid` from the `cal_cache`.
         * When the `rid` is `null`, or an empty string, then removes the master
         * object only, without any detached instance.
         * @param uid a UID of the component to remove
         * @param rid an optional Recurrence-ID to remove
         * @param custom_flags custom flags for the component, not interpreted by the `cal_cache`
         * @param offline_flag one of {@link EBackend.CacheOfflineFlag}, whether removing this component in offline
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        remove_component(
            uid: string,
            rid: string | null,
            custom_flags: number,
            offline_flag: EBackend.CacheOfflineFlag | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Removes components identified by `uid` and `rid` from the `cal_cache`
         * in the `ids` list. When the `rid` is `null`, or an empty string, then
         * removes the master object only, without any detached instance.
         * The `custom_flags` is used, if not `null`, only if the `offline_flag`
         * is {@link EBackend.CacheOfflineFlag.IS_OFFLINE}. Otherwise it's ignored. The length of
         * the `custom_flags` should match the length of `ids`, when not `null`.
         * @param ids a {@link GLib.SList} of components to remove
         * @param custom_flags an optional {@link GLib.SList} of custom flags for the `ids`
         * @param offline_flag one of {@link EBackend.CacheOfflineFlag}, whether removing these comonents in offline
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        remove_components(
            ids: ECal.ComponentId[],
            custom_flags: number[] | null,
            offline_flag: EBackend.CacheOfflineFlag | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Dereferences use count of the time zone with ID `tzid` by `dec_ref_counts`
         * and removes the timezone from the cache when the reference count reaches
         * zero. Special case is with `dec_ref_counts` being zero, in which case
         * the corresponding timezone is removed regardless of the current reference
         * count.
         *
         * It's not an error when the timezone doesn't exist in the cache.
         * @param tzid timezone ID to remove/dereference
         * @param dec_ref_counts reference counts to drop, 0 to remove it regardless of the current reference count
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        remove_timezone(tzid: string, dec_ref_counts: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Removes all stored timezones from the `cal_cache`.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        remove_timezones(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Searches the `cal_cache` with the given `sexp` and
         * returns those components which satisfy the search
         * expression as a {@link GLib.SList} of {@link EDataCal.CalCacheSearchData}.
         * The `out_data` should be freed with
         * g_slist_free_full (data, e_cal_cache_search_data_free);
         * when no longer needed.
         * @param sexp search expression; use `null` or an empty string to list all stored components
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        search(sexp: string | null, cancellable?: Gio.Cancellable | null): [boolean, CalCacheSearchData[]];
        /**
         * Searches the `cal_cache` with the given `sexp` and
         * returns those components which satisfy the search
         * expression. The `out_components` should be freed with
         * g_slist_free_full (components, g_object_unref); when
         * no longer needed.
         * @param sexp search expression; use `null` or an empty string to list all stored components
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        search_components(sexp: string | null, cancellable?: Gio.Cancellable | null): [boolean, ECal.Component[]];
        /**
         * Searches the `cal_cache` with the given `sexp` and returns ECalComponentId
         * for those components which satisfy the search expression.
         * The `out_ids` should be freed with
         * g_slist_free_full (ids, (GDestroyNotify) e_cal_component_id_free);
         * when no longer needed.
         * @param sexp search expression; use `null` or an empty string to list all stored components
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        search_ids(sexp: string | null, cancellable?: Gio.Cancellable | null): [boolean, ECal.ComponentId[]];
        /**
         * Searches the `cal_cache` with the given `sexp` and calls `func` for each
         * row which satisfy the search expression.
         * @param sexp search expression; use `null` or an empty string to list all stored components
         * @param func an {@link EDataCal.CalCacheSearchFunc} callback to call for each row which satisfies `sexp`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        search_with_callback(
            sexp: string | null,
            func: CalCacheSearchFunc,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Sets or replaces the custom flags associated with a component
         * identified by `uid` and optionally `rid`.
         * @param uid a UID of the component
         * @param rid an optional Recurrence-ID
         * @param custom_flags the custom flags to set for the component
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        set_component_custom_flags(
            uid: string,
            rid: string | null,
            custom_flags: number,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Sets or replaces the extra data associated with a component
         * identified by `uid` and optionally `rid`.
         * @param uid a UID of the component
         * @param rid an optional Recurrence-ID
         * @param extra extra data to set for the component
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        set_component_extra(
            uid: string,
            rid?: string | null,
            extra?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Adds a copy of `zone` to `cache` and emits an
         * {@link ECal.TimezoneCache.SignalSignatures.timezone_added | ECal.TimezoneCache::timezone-added} signal.  The `cache` will use the TZID
         * string returned by `i_cal_timezone_get_tzid()` as the lookup key, which can
         * be passed to `e_timezone_cache_get_timezone()` to obtain `zone` again.
         *
         * If the `cache` already has an {@link ICalGLib.Timezone} with the same TZID string
         * as `zone`, the `cache` will remain unchanged to avoid invalidating any
         * {@link ICalGLib.Timezone} pointers which may have already been returned through
         * `e_timezone_cache_get_timezone()`.
         * @param zone an {@link ICalGLib.Timezone}
         */
        add_timezone(zone: ICalGLib.Timezone): void;
        /**
         * @param zone
         * @virtual
         */
        vfunc_timezone_added(zone: ICalGLib.Timezone): void;
        /**
         * @param zone
         * @virtual
         */
        vfunc_tzcache_add_timezone(zone: ICalGLib.Timezone): void;
        /**
         * Returns a list of {@link EDataServer.Extension} objects bound to `extensible` whose
         * types are ancestors of `extension_type`.  For a complete list of
         * extension objects bound to `extensible`, pass `E_TYPE_EXTENSION`.
         *
         * The list itself should be freed with `g_list_free()`.  The extension
         * objects are owned by `extensible` and should not be unreferenced.
         * @param extension_type the type of extensions to list
         * @returns a list of extension objects derived from `extension_type`
         */
        list_extensions(extension_type: GObject.GType): EDataServer.Extension[];
        /**
         * Creates an instance of all instantiable subtypes of {@link EDataServer.Extension} which
         * target the class of `extensible`.  The lifetimes of these newly created
         * {@link EDataServer.Extension} objects are bound to `extensible` such that they are finalized
         * when `extensible` is finalized.
         */
        load_extensions(): void;
        /**
         * Similar to `e_extensible_load_extensions()`, only loads newly discovered
         * extensions again. This can help in case a new module had been loaded
         * to the process, which provides the extensions for the `extensible`.
         */
        reload_extensions(): void;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace CalMetaBackend {
        // Signal signatures
        interface SignalSignatures extends CalBackendSync.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'refresh-completed': () => void;
            /**
             * This signal is emitted whenever the underlying backend {@link EDataServer.Source}
             * changes. Unlike the {@link EDataServer.Source}'s 'changed' signal this one is
             * tight to the {@link EDataCal.CalMetaBackend} itself and is emitted from
             * a dedicated thread, thus it doesn't block the main thread.
             * @signal
             * @since 3.26
             * @run-last
             */
            'source-changed': () => void;
            'notify::cache': (pspec: GObject.ParamSpec) => void;
            'notify::cache-dir': (pspec: GObject.ParamSpec) => void;
            'notify::kind': (pspec: GObject.ParamSpec) => void;
            'notify::proxy-resolver': (pspec: GObject.ParamSpec) => void;
            'notify::registry': (pspec: GObject.ParamSpec) => void;
            'notify::writable': (pspec: GObject.ParamSpec) => void;
            'notify::connectable': (pspec: GObject.ParamSpec) => void;
            'notify::main-context': (pspec: GObject.ParamSpec) => void;
            'notify::online': (pspec: GObject.ParamSpec) => void;
            'notify::source': (pspec: GObject.ParamSpec) => void;
            'notify::user-prompter': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends CalBackendSync.ConstructorProps, ECal.TimezoneCache.ConstructorProps {
            cache: CalCache;
        }
    }

    /**
     * Contains only private data that should be read and manipulated using
     * the functions below.
     * @gir-type Class
     * @since 3.26
     */
    abstract class CalMetaBackend extends CalBackendSync implements ECal.TimezoneCache {
        static $gtype: GObject.GType<CalMetaBackend>;

        // Properties

        /**
         * The {@link EDataCal.CalCache} being used for this meta backend.
         */
        get cache(): CalCache;
        set cache(val: CalCache);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CalMetaBackend.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CalMetaBackend.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof CalMetaBackend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CalMetaBackend.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CalMetaBackend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CalMetaBackend.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CalMetaBackend.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CalMetaBackend.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * This is called always before any operation which requires a connection
         * to the remote side. It can fail with an #E_CLIENT_ERROR_REPOSITORY_OFFLINE
         * error to indicate that the remote side cannot be currently reached. Other
         * errors are propagated to the caller/client side. This method is not called
         * when the backend is offline.
         *
         * The descendant should also call `e_cal_backend_set_writable()` after successful
         * connect to the remote side. This value is stored for later use, when being
         * opened offline.
         *
         * The `credentials` parameter consists of the previously used credentials.
         * It's always `null` with the first connection attempt. To get the credentials,
         * just set the `out_auth_result` to {@link EDataServer.SourceAuthenticationResult.REQUIRED} for
         * the first time and the function will be called again once the credentials
         * are available. See the documentation of {@link EDataServer.SourceAuthenticationResult} for
         * other available results.
         *
         * The out parameters are passed to `e_backend_schedule_credentials_required()`
         * and are ignored when the descendant returns `true`, aka they are used
         * only if the connection fails. The `out_certificate_pem` and `out_certificate_errors`
         * should be used together and they can be left untouched if the failure reason was
         * not related to certificate. Use `out_auth_result` {@link EDataServer.SourceAuthenticationResult.UNKNOWN}
         * to indicate other error than `credentials` error, otherwise the `error` is used
         * according to `out_auth_result` value.
         *
         * It is mandatory to implement this virtual method by the descendant.
         * @param credentials an {@link EDataServer.NamedParameters} with previously used credentials, or `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @virtual
         */
        vfunc_connect_sync(
            credentials: EDataServer.NamedParameters | null,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, EDataServer.SourceAuthenticationResult, string, Gio.TlsCertificateFlags];
        /**
         * This is called when the backend goes into offline mode or
         * when the disconnect is required. The implementation should
         * not report any error when it is called and the `meta_backend`
         * is not connected.
         *
         * It is mandatory to implement this virtual method by the descendant.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @virtual
         */
        vfunc_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Gathers the changes since the last check which had been done
         * on the remote side.
         *
         * The `last_sync_tag` can be used as a tag of the last check. This can be `null`,
         * when there was no previous call or when the descendant doesn't store any
         * such tags. The `out_new_sync_tag` can be populated with a value to be stored
         * and used the next time.
         *
         * The `out_repeat` can be set to `true` when the descendant didn't finish
         * read of all the changes. In that case the `meta_backend` calls this
         * function again with the `out_new_sync_tag` as the `last_sync_tag`, but also
         * notifies about the found changes immediately. The `is_repeat` is set
         * to `true` as well in this case, otherwise it's `false`.
         *
         * The descendant can populate also ECalMetaBackendInfo::object of
         * the `out_created_objects` and `out_modified_objects`, if known, in which
         * case this will be used instead of loading it with `e_cal_meta_backend_load_component_sync()`.
         *
         * It is optional to implement this virtual method by the descendant.
         * The default implementation calls `e_cal_meta_backend_list_existing_sync()`
         * and then compares the list with the current content of the local cache
         * and populates the respective lists appropriately.
         *
         * Each output {@link GLib.SList} should be freed with
         * g_slist_free_full (objects, e_cal_meta_backend_info_free);
         * when no longer needed.
         * @param last_sync_tag optional sync tag from the last check
         * @param is_repeat set to `true` when this is the repeated call
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @virtual
         */
        vfunc_get_changes_sync(
            last_sync_tag: string | null,
            is_repeat: boolean,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string, boolean, CalMetaBackendInfo[], CalMetaBackendInfo[], CalMetaBackendInfo[]];
        /**
         * It is optional to implement this virtual method by the descendants.
         * It is used to receive SSL error details when any online operation
         * returns E_CLIENT_ERROR, E_CLIENT_ERROR_TLS_NOT_AVAILABLE error.
         * @virtual
         */
        vfunc_get_ssl_error_details(): [boolean, string, Gio.TlsCertificateFlags];
        /**
         * Used to get list of all existing objects on the remote side. The descendant
         * can optionally provide `out_new_sync_tag`, which will be stored on success, if
         * not `null`. The descendant can populate also ECalMetaBackendInfo::object of
         * the `out_existing_objects`, if known, in which case this will be used instead
         * of loading it with `e_cal_meta_backend_load_component_sync()`.
         *
         * It is mandatory to implement this virtual method by the descendant, unless
         * it implements its own {@link EDataCal.CalMetaBackendClass}.get_changes_sync().
         *
         * The `out_existing_objects` {@link GLib.SList} should be freed with
         * g_slist_free_full (objects, e_cal_meta_backend_info_free);
         * when no longer needed.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @virtual
         */
        vfunc_list_existing_sync(cancellable?: Gio.Cancellable | null): [boolean, string, CalMetaBackendInfo[]];
        /**
         * Loads a component from the remote side. Any detached instances should be
         * returned together with the master object. The `out_component` can be either
         * a VCALENDAR component, which would contain the master object and all of
         * its detached instances, eventually also used time zones, or the requested
         * component of type VEVENT, VJOURNAL or VTODO.
         *
         * It is mandatory to implement this virtual method by the descendant.
         *
         * The returned `out_component` should be freed with `g_object_unref()`,
         * when no longer needed.
         *
         * The returned `out_extra` should be freed with `g_free()`, when no longer
         * needed.
         * @param uid a component UID
         * @param extra optional extra data stored with the component, or `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @virtual
         */
        vfunc_load_component_sync(
            uid: string,
            extra: string | null,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, ICalGLib.Component, string];
        /**
         * Removes a component from the remote side, with all its detached instances.
         * The `object` is not `null` when it's removing locally deleted object
         * in offline mode. Being it `null`, the descendant can obtain the object
         * from the {@link EDataCal.CalCache}.
         *
         * It is mandatory to implement this virtual method by the writable descendant.
         * @param conflict_resolution an {@link EDataServer.ConflictResolution} to use
         * @param uid a component UID
         * @param extra extra data being saved with the component in the local cache, or `null`
         * @param object corresponding iCalendar object, as stored in the local cache, or `null`
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @virtual
         */
        vfunc_remove_component_sync(
            conflict_resolution: EDataServer.ConflictResolution,
            uid: string,
            extra: string | null,
            object: string | null,
            opflags: ECal.OperationFlags,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Determines, whether current source content requires reconnect of the backend.
         *
         * It is optional to implement this virtual method by the descendant. The default
         * implementation compares `E_SOURCE_EXTENSION_AUTHENTICATION` and
         * `E_SOURCE_EXTENSION_WEBDAV_BACKEND`, if existing in the source,
         * with the values after the last successful connect and returns
         * `true` when they changed. It always return `true` when there was
         * no successful connect done yet.
         * @virtual
         */
        vfunc_requires_reconnect(): boolean;
        /**
         * Saves one component into the remote side. The `instances` contain the master
         * object and all the detached instances of the same component (all have the same UID).
         * When the `overwrite_existing` is `true`, then the descendant can overwrite an object
         * with the same UID on the remote side (usually used for modify). The `conflict_resolution`
         * defines what to do when the remote side had made any changes to the object since
         * the last update.
         *
         * The descendant can use `e_cal_meta_backend_merge_instances()` to merge
         * the instances into one VCALENDAR component, which will contain also
         * used time zones.
         *
         * The components in `instances` have already converted locally stored attachments
         * into inline attachments, thus it's not needed to call
         * `e_cal_meta_backend_inline_local_attachments_sync()` by the descendant.
         *
         * The `out_new_uid` can be populated with a UID of the saved component as the server
         * assigned it to it. This UID, if set, is loaded from the remote side afterwards,
         * also to see whether any changes had been made to the component by the remote side.
         *
         * The `out_new_extra` can be populated with a new extra data to save with the component.
         * Left it `null`, to keep the same value as the `extra`.
         *
         * The descendant can use an #E_CLIENT_ERROR_OUT_OF_SYNC error to indicate that
         * the save failed due to made changes on the remote side, and let the `meta_backend`
         * to resolve this conflict based on the `conflict_resolution` on its own.
         * The #E_CLIENT_ERROR_OUT_OF_SYNC error should not be used when the descendant
         * is able to resolve the conflicts itself.
         *
         * It is mandatory to implement this virtual method by the writable descendant.
         * @param overwrite_existing `true` when can overwrite existing components, `false` otherwise
         * @param conflict_resolution one of {@link EDataServer.ConflictResolution}, what to do on conflicts
         * @param instances instances of the component to save
         * @param extra extra data saved with the components in an {@link EDataCal.CalCache}
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @virtual
         */
        vfunc_save_component_sync(
            overwrite_existing: boolean,
            conflict_resolution: EDataServer.ConflictResolution,
            instances: ECal.Component[],
            extra: string | null,
            opflags: ECal.OperationFlags,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string, string];
        /**
         * Searches `meta_backend` with given expression `expr` and returns
         * found components as a {@link GLib.SList} of {@link ECal.Component} `out_components`.
         * Free the returned `out_components` with g_slist_free_full (components, g_object_unref);
         * when no longer needed.
         * When the `expr` is `null`, all objects are returned. To get iCal
         * strings instead, call `e_cal_meta_backend_search_sync()`.
         *
         * It is optional to implement this virtual method by the descendant.
         * The default implementation searches `meta_backend`'s cache. It's also
         * not required to be online for searching, thus `meta_backend` doesn't
         * ensure it.
         * @param expr a search expression, or `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @virtual
         */
        vfunc_search_components_sync(
            expr: string | null,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, ECal.Component[]];
        /**
         * Searches `meta_backend` with given expression `expr` and returns
         * found components as a {@link GLib.SList} of iCal strings `out_icalstrings`.
         * Free the returned `out_icalstrings` with g_slist_free_full (icalstrings, g_free);
         * when no longer needed.
         * When the `expr` is `null`, all objects are returned. To get
         * {@link ECal.Component}-s instead, call `e_cal_meta_backend_search_components_sync()`.
         *
         * It is optional to implement this virtual method by the descendant.
         * The default implementation searches `meta_backend`'s cache. It's also
         * not required to be online for searching, thus `meta_backend` doesn't
         * ensure it.
         * @param expr a search expression, or `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @virtual
         */
        vfunc_search_sync(expr: string | null, cancellable?: Gio.Cancellable | null): [boolean, string[]];
        /**
         * @virtual
         */
        vfunc_source_changed(): void;

        // Methods

        /**
         * This is called always before any operation which requires a connection
         * to the remote side. It can fail with an #E_CLIENT_ERROR_REPOSITORY_OFFLINE
         * error to indicate that the remote side cannot be currently reached. Other
         * errors are propagated to the caller/client side. This method is not called
         * when the backend is offline.
         *
         * The descendant should also call `e_cal_backend_set_writable()` after successful
         * connect to the remote side. This value is stored for later use, when being
         * opened offline.
         *
         * The `credentials` parameter consists of the previously used credentials.
         * It's always `null` with the first connection attempt. To get the credentials,
         * just set the `out_auth_result` to {@link EDataServer.SourceAuthenticationResult.REQUIRED} for
         * the first time and the function will be called again once the credentials
         * are available. See the documentation of {@link EDataServer.SourceAuthenticationResult} for
         * other available results.
         *
         * The out parameters are passed to `e_backend_schedule_credentials_required()`
         * and are ignored when the descendant returns `true`, aka they are used
         * only if the connection fails. The `out_certificate_pem` and `out_certificate_errors`
         * should be used together and they can be left untouched if the failure reason was
         * not related to certificate. Use `out_auth_result` {@link EDataServer.SourceAuthenticationResult.UNKNOWN}
         * to indicate other error than `credentials` error, otherwise the `error` is used
         * according to `out_auth_result` value.
         *
         * It is mandatory to implement this virtual method by the descendant.
         * @param credentials an {@link EDataServer.NamedParameters} with previously used credentials, or `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        connect_sync(
            credentials: EDataServer.NamedParameters | null,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, EDataServer.SourceAuthenticationResult, string, Gio.TlsCertificateFlags];
        /**
         * This is called when the backend goes into offline mode or
         * when the disconnect is required. The implementation should
         * not report any error when it is called and the `meta_backend`
         * is not connected.
         *
         * It is mandatory to implement this virtual method by the descendant.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        disconnect_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Returns the last known synchronization tag, the same as used to
         * call `e_cal_meta_backend_get_changes_sync()`.
         *
         * Free the returned string with `g_free()`, when no longer needed.
         * @returns The last known synchronization tag,    or `null`, when none is stored.
         */
        dup_sync_tag(): string | null;
        /**
         * Empties the local cache by removing all known components from it
         * and notifies about such removal any opened views. It removes also
         * all known time zones.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        empty_cache_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Ensures that the `meta_backend` is connected to its destination.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        ensure_connected_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Extracts all VTIMEZONE components from the `vcalendar` and adds them
         * to the memory cache, thus they are available when needed. The function does
         * nothing when the `vcalendar` doesn't hold a VCALENDAR component.
         *
         * Set the `remove_existing` argument to `true` to remove all cached timezones
         * first and then add the existing in the `vcalendar`, or set it to `false`
         * to preserver existing timezones and merge them with those in `vcalendar`.
         * @param vcalendar a VCALENDAR {@link ICalGLib.Component}
         * @param remove_existing whether to remove any existing first
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        gather_timezones_sync(
            vcalendar: ICalGLib.Component,
            remove_existing: boolean,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * @returns an {@link EDataCal.CalBackend.SignalSignatures.capabilities | EDataCal.CalBackend::capabilities} property to be used by    the descendant in conjunction to the descendant's capabilities    in the result of `e_cal_backend_get_backend_property()` with    #CLIENT_BACKEND_PROPERTY_CAPABILITIES.
         */
        get_capabilities(): string;
        /**
         * Gathers the changes since the last check which had been done
         * on the remote side.
         *
         * The `last_sync_tag` can be used as a tag of the last check. This can be `null`,
         * when there was no previous call or when the descendant doesn't store any
         * such tags. The `out_new_sync_tag` can be populated with a value to be stored
         * and used the next time.
         *
         * The `out_repeat` can be set to `true` when the descendant didn't finish
         * read of all the changes. In that case the `meta_backend` calls this
         * function again with the `out_new_sync_tag` as the `last_sync_tag`, but also
         * notifies about the found changes immediately. The `is_repeat` is set
         * to `true` as well in this case, otherwise it's `false`.
         *
         * The descendant can populate also ECalMetaBackendInfo::object of
         * the `out_created_objects` and `out_modified_objects`, if known, in which
         * case this will be used instead of loading it with `e_cal_meta_backend_load_component_sync()`.
         *
         * It is optional to implement this virtual method by the descendant.
         * The default implementation calls `e_cal_meta_backend_list_existing_sync()`
         * and then compares the list with the current content of the local cache
         * and populates the respective lists appropriately.
         *
         * Each output {@link GLib.SList} should be freed with
         * g_slist_free_full (objects, e_cal_meta_backend_info_free);
         * when no longer needed.
         * @param last_sync_tag optional sync tag from the last check
         * @param is_repeat set to `true` when this is the repeated call
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        get_changes_sync(
            last_sync_tag: string | null,
            is_repeat: boolean,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string, boolean, CalMetaBackendInfo[], CalMetaBackendInfo[], CalMetaBackendInfo[]];
        /**
         * This value has meaning only if `e_cal_meta_backend_get_ever_connected()`
         * is `true`.
         * @returns Whether the `meta_backend` connected to a writable destination.
         */
        get_connected_writable(): boolean;
        /**
         * @returns Whether the `meta_backend` ever made a successful connection    to its destination.
         */
        get_ever_connected(): boolean;
        /**
         * It is optional to implement this virtual method by the descendants.
         * It is used to receive SSL error details when any online operation
         * returns E_CLIENT_ERROR, E_CLIENT_ERROR_TLS_NOT_AVAILABLE error.
         * @returns `true`, when the SSL error details had been available and    the out parameters populated, `false` otherwise.
         */
        get_ssl_error_details(): [boolean, string, Gio.TlsCertificateFlags];
        /**
         * Changes all URL attachments which point to a local file in `component`
         * to inline attachments, aka adds the file content into the `component`.
         * It also populates FILENAME parameter on the attachment.
         * This is called automatically before `e_cal_meta_backend_save_component_sync()`.
         *
         * The reverse operation is `e_cal_meta_backend_store_inline_attachments_sync()`.
         * @param component an {@link ICalGLib.Component} to work with
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        inline_local_attachments_sync(component: ICalGLib.Component, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Used to get list of all existing objects on the remote side. The descendant
         * can optionally provide `out_new_sync_tag`, which will be stored on success, if
         * not `null`. The descendant can populate also ECalMetaBackendInfo::object of
         * the `out_existing_objects`, if known, in which case this will be used instead
         * of loading it with `e_cal_meta_backend_load_component_sync()`.
         *
         * It is mandatory to implement this virtual method by the descendant, unless
         * it implements its own {@link EDataCal.CalMetaBackendClass}.get_changes_sync().
         *
         * The `out_existing_objects` {@link GLib.SList} should be freed with
         * g_slist_free_full (objects, e_cal_meta_backend_info_free);
         * when no longer needed.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        list_existing_sync(cancellable?: Gio.Cancellable | null): [boolean, string, CalMetaBackendInfo[]];
        /**
         * Loads a component from the remote side. Any detached instances should be
         * returned together with the master object. The `out_component` can be either
         * a VCALENDAR component, which would contain the master object and all of
         * its detached instances, eventually also used time zones, or the requested
         * component of type VEVENT, VJOURNAL or VTODO.
         *
         * It is mandatory to implement this virtual method by the descendant.
         *
         * The returned `out_component` should be freed with `g_object_unref()`,
         * when no longer needed.
         *
         * The returned `out_extra` should be freed with `g_free()`, when no longer
         * needed.
         * @param uid a component UID
         * @param extra optional extra data stored with the component, or `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        load_component_sync(
            uid: string,
            extra: string | null,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, ICalGLib.Component, string];
        /**
         * Merges all the instances provided in `instances` list into one VCALENDAR
         * object, which would eventually contain also all the used timezones.
         * The `instances` list should contain the master object and eventually all
         * the detached instances for one component (they all have the same UID).
         *
         * Any TZID property parameters can be replaced with corresponding timezone
         * location, which will not influence the timezone itself.
         * @param instances component instances to merge
         * @param replace_tzid_with_location whether to replace TZID-s with locations
         * @returns an {@link ICalGLib.Component} containing a VCALENDAR    component which consists of all the given instances. Free    the returned pointer with `g_object_unref()`, when no longer needed. See: `e_cal_meta_backend_save_component_sync()`
         */
        merge_instances(instances: ECal.Component[], replace_tzid_with_location: boolean): ICalGLib.Component;
        /**
         * Processes given changes by updating local cache content accordingly.
         * The `meta_backend` processes the changes like being online and particularly
         * requires to be online to load created and modified objects when needed.
         * @param created_objects a {@link GLib.SList} of {@link EDataCal.CalMetaBackendInfo} object infos which had been created
         * @param modified_objects a {@link GLib.SList} of {@link EDataCal.CalMetaBackendInfo} object infos which had been modified
         * @param removed_objects a {@link GLib.SList} of {@link EDataCal.CalMetaBackendInfo} object infos which had been removed
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        process_changes_sync(
            created_objects?: CalMetaBackendInfo[] | null,
            modified_objects?: CalMetaBackendInfo[] | null,
            removed_objects?: CalMetaBackendInfo[] | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * @returns Referenced {@link EDataCal.CalCache}, which is used by `meta_backend`.    Unref it with `g_object_unref()` when no longer needed.
         */
        ref_cache(): CalCache;
        /**
         * Refreshes the `meta_backend` immediately. To just schedule refresh
         * operation call `e_cal_meta_backend_schedule_refresh()`.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        refresh_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Removes a component from the remote side, with all its detached instances.
         * The `object` is not `null` when it's removing locally deleted object
         * in offline mode. Being it `null`, the descendant can obtain the object
         * from the {@link EDataCal.CalCache}.
         *
         * It is mandatory to implement this virtual method by the writable descendant.
         * @param conflict_resolution an {@link EDataServer.ConflictResolution} to use
         * @param uid a component UID
         * @param extra extra data being saved with the component in the local cache, or `null`
         * @param object corresponding iCalendar object, as stored in the local cache, or `null`
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        remove_component_sync(
            conflict_resolution: EDataServer.ConflictResolution | null,
            uid: string,
            extra: string | null,
            object: string | null,
            opflags: ECal.OperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Determines, whether current source content requires reconnect of the backend.
         *
         * It is optional to implement this virtual method by the descendant. The default
         * implementation compares `E_SOURCE_EXTENSION_AUTHENTICATION` and
         * `E_SOURCE_EXTENSION_WEBDAV_BACKEND`, if existing in the source,
         * with the values after the last successful connect and returns
         * `true` when they changed. It always return `true` when there was
         * no successful connect done yet.
         * @returns `true`, when reconnect is required, `false` otherwise.
         */
        requires_reconnect(): boolean;
        /**
         * Saves one component into the remote side. The `instances` contain the master
         * object and all the detached instances of the same component (all have the same UID).
         * When the `overwrite_existing` is `true`, then the descendant can overwrite an object
         * with the same UID on the remote side (usually used for modify). The `conflict_resolution`
         * defines what to do when the remote side had made any changes to the object since
         * the last update.
         *
         * The descendant can use `e_cal_meta_backend_merge_instances()` to merge
         * the instances into one VCALENDAR component, which will contain also
         * used time zones.
         *
         * The components in `instances` have already converted locally stored attachments
         * into inline attachments, thus it's not needed to call
         * `e_cal_meta_backend_inline_local_attachments_sync()` by the descendant.
         *
         * The `out_new_uid` can be populated with a UID of the saved component as the server
         * assigned it to it. This UID, if set, is loaded from the remote side afterwards,
         * also to see whether any changes had been made to the component by the remote side.
         *
         * The `out_new_extra` can be populated with a new extra data to save with the component.
         * Left it `null`, to keep the same value as the `extra`.
         *
         * The descendant can use an #E_CLIENT_ERROR_OUT_OF_SYNC error to indicate that
         * the save failed due to made changes on the remote side, and let the `meta_backend`
         * to resolve this conflict based on the `conflict_resolution` on its own.
         * The #E_CLIENT_ERROR_OUT_OF_SYNC error should not be used when the descendant
         * is able to resolve the conflicts itself.
         *
         * It is mandatory to implement this virtual method by the writable descendant.
         * @param overwrite_existing `true` when can overwrite existing components, `false` otherwise
         * @param conflict_resolution one of {@link EDataServer.ConflictResolution}, what to do on conflicts
         * @param instances instances of the component to save
         * @param extra extra data saved with the components in an {@link EDataCal.CalCache}
         * @param opflags bit-or of {@link ECal.OperationFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        save_component_sync(
            overwrite_existing: boolean,
            conflict_resolution: EDataServer.ConflictResolution | null,
            instances: ECal.Component[],
            extra: string | null,
            opflags: ECal.OperationFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string, string];
        /**
         * Schedules refresh of the content of the `meta_backend`. If there's any
         * already scheduled, then the function does nothing.
         *
         * Use `e_cal_meta_backend_refresh_sync()` to refresh the `meta_backend`
         * immediately.
         */
        schedule_refresh(): void;
        /**
         * Searches `meta_backend` with given expression `expr` and returns
         * found components as a {@link GLib.SList} of {@link ECal.Component} `out_components`.
         * Free the returned `out_components` with g_slist_free_full (components, g_object_unref);
         * when no longer needed.
         * When the `expr` is `null`, all objects are returned. To get iCal
         * strings instead, call `e_cal_meta_backend_search_sync()`.
         *
         * It is optional to implement this virtual method by the descendant.
         * The default implementation searches `meta_backend`'s cache. It's also
         * not required to be online for searching, thus `meta_backend` doesn't
         * ensure it.
         * @param expr a search expression, or `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        search_components_sync(expr: string | null, cancellable?: Gio.Cancellable | null): [boolean, ECal.Component[]];
        /**
         * Searches `meta_backend` with given expression `expr` and returns
         * found components as a {@link GLib.SList} of iCal strings `out_icalstrings`.
         * Free the returned `out_icalstrings` with g_slist_free_full (icalstrings, g_free);
         * when no longer needed.
         * When the `expr` is `null`, all objects are returned. To get
         * {@link ECal.Component}-s instead, call `e_cal_meta_backend_search_components_sync()`.
         *
         * It is optional to implement this virtual method by the descendant.
         * The default implementation searches `meta_backend`'s cache. It's also
         * not required to be online for searching, thus `meta_backend` doesn't
         * ensure it.
         * @param expr a search expression, or `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        search_sync(expr: string | null, cancellable?: Gio.Cancellable | null): [boolean, string[]];
        /**
         * Sets the `cache` as the cache to be used by the `meta_backend`.
         * By default, a cache.db in ECalBackend::cache-dir is created
         * in the constructed method. This function can be used to override
         * the default.
         *
         * Note the `meta_backend` adds its own reference to the `cache`.
         * @param cache an {@link EDataCal.CalCache} to use
         */
        set_cache(cache: CalCache): void;
        /**
         * Sets whether the `meta_backend` connected to a writable destination.
         * This value has meaning only if `e_cal_meta_backend_get_ever_connected()`
         * is `true`.
         *
         * This is used by the `meta_backend` itself, during the opening phase,
         * to set the backend writable or not also in the offline mode.
         * @param value value to set
         */
        set_connected_writable(value: boolean): void;
        /**
         * Sets whether the `meta_backend` ever made a successful connection
         * to its destination.
         *
         * This is used by the `meta_backend` itself, during the opening phase,
         * when it had not been connected yet, then it does so immediately, to
         * eventually report settings error easily.
         * @param value value to set
         */
        set_ever_connected(value: boolean): void;
        /**
         * Sets the `sync_tag` for the `meta_backend`.
         * @param sync_tag a sync tag to set, or `null` to unset the old one
         */
        set_sync_tag(sync_tag?: string | null): void;
        /**
         * Splits `objects` into created/modified/removed lists according to current local
         * cache content. Only the `out_removed_objects` can be `null`, others cannot.
         * The function modifies `objects` by moving its 'data' to corresponding out
         * lists and sets the `objects` 'data' to `null`.
         *
         * Each output {@link GLib.SList} should be freed with
         * g_slist_free_full (objects, e_cal_meta_backend_info_free);
         * when no longer needed.
         *
         * The caller is still responsible to free `objects` as well.
         * @param objects a {@link GLib.SList} of {@link EDataCal.CalMetaBackendInfo} object infos to split
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        split_changes_sync(
            objects: CalMetaBackendInfo[],
            cancellable?: Gio.Cancellable | null,
        ): [boolean, CalMetaBackendInfo[], CalMetaBackendInfo[], CalMetaBackendInfo[], CalMetaBackendInfo[] | null];
        /**
         * Changes all inline attachments to URL attachments in `component`, which
         * will point to a local file instead. The function expects FILENAME parameter
         * to be set on the attachment as the file name of it.
         * This is called automatically after `e_cal_meta_backend_load_component_sync()`.
         *
         * The reverse operation is `e_cal_meta_backend_inline_local_attachments_sync()`.
         * @param component an {@link ICalGLib.Component} to work with
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        store_inline_attachments_sync(component: ICalGLib.Component, cancellable?: Gio.Cancellable | null): boolean;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace DataCal {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::backend': (pspec: GObject.ParamSpec) => void;
            'notify::connection': (pspec: GObject.ParamSpec) => void;
            'notify::object-path': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            backend: CalBackend;
            connection: Gio.DBusConnection;
            object_path: string;
            objectPath: string;
        }
    }

    /**
     * @gir-type Class
     */
    class DataCal extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<DataCal>;

        // Properties

        /**
         * The backend driving this connection
         * @construct-only
         */
        get backend(): CalBackend;
        /**
         * The {@link Gio.DBusConnection} on which to export the calendar interface
         * @construct-only
         */
        get connection(): Gio.DBusConnection;
        /**
         * The object path at which to export the calendar interface
         * @construct-only
         */
        get object_path(): string;
        /**
         * The object path at which to export the calendar interface
         * @construct-only
         */
        get objectPath(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DataCal.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DataCal.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](backend: CalBackend, connection: Gio.DBusConnection, object_path: string): DataCal;

        // Signals

        /** @signal */
        connect<K extends keyof DataCal.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataCal.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DataCal.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataCal.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DataCal.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DataCal.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Returns the {@link Gio.DBusConnection} on which the Calendar D-Bus interface
         * is exported.
         * @returns the {@link Gio.DBusConnection}
         */
        get_connection(): Gio.DBusConnection;
        /**
         * Returns the object path at which the Calendar D-Bus interface is
         * exported.
         * @returns the object path
         */
        get_object_path(): string;
        /**
         * Returns the {@link EDataCal.CalBackend} to which incoming remote method invocations
         * are being forwarded.
         *
         * The returned {@link EDataCal.CalBackend} is referenced for thread-safety and should
         * be unreferenced with `g_object_unref()` when finished with it.
         * @returns an {@link EDataCal.CalBackend}
         */
        ref_backend(): CalBackend | null;
        /**
         * Notifies client about certain property value change
         * @param prop_name property name
         * @param prop_value new property value
         */
        report_backend_property_changed(prop_name: string, prop_value: string): void;
        /**
         * Emits an error message, thus the clients can be notified about it.
         * @param message an error message to report
         */
        report_error(message: string): void;
        /**
         * Reports result of a free/busy query on the `cal`.
         * @param freebusy a {@link GLib.SList} of free/busy components encoded as string
         */
        report_free_busy_data(freebusy: string[]): void;
        /**
         * Notifies listeners of the completion of the add_timezone method call.
         * @param opid associated operation id
         * @param error Operation error, if any, automatically freed if passed it.
         */
        respond_add_timezone(opid: number, error?: GLib.Error | null): void;
        /**
         * Notifies listeners of the completion of the create_objects method call.
         * @param opid associated operation id
         * @param error Operation error, if any, automatically freed if passed it.
         * @param uids UIDs of the objects created.
         * @param new_components The newly created {@link ECal.Component} objects.
         */
        respond_create_objects(
            opid: number,
            error: GLib.Error | null,
            uids: string[],
            new_components: ECal.Component[],
        ): void;
        /**
         * Notifies listeners of the completion of the discard_alarm method call.
         * @param opid associated operation id
         * @param error Operation error, if any, automatically freed if passed it.
         */
        respond_discard_alarm(opid: number, error?: GLib.Error | null): void;
        /**
         * Notifies listeners of the completion of the get_attachment_uris method call.
         * @param opid associated operation id
         * @param error Operation error, if any, automatically freed if passed it.
         * @param attachment_uris List of retrieved attachment uri's.
         */
        respond_get_attachment_uris(opid: number, error: GLib.Error | null, attachment_uris: string[]): void;
        /**
         * Notifies listeners of the completion of the get_free_busy method call.
         * To pass actual free/busy objects to the client asynchronously
         * use `e_data_cal_report_free_busy_data()`, but the `freebusy` should contain
         * all the objects being used in `e_data_cal_report_free_busy_data()`.
         * @param opid associated operation id
         * @param error Operation error, if any, automatically freed if passed it.
         * @param freebusy a {@link GLib.SList} of iCalendar strings with all gathered free/busy components.
         */
        respond_get_free_busy(opid: number, error: GLib.Error | null, freebusy: string[]): void;
        /**
         * Notifies listeners of the completion of the get_object method call.
         * @param opid associated operation id
         * @param error Operation error, if any, automatically freed if passed it.
         * @param object The object retrieved as an iCalendar string.
         */
        respond_get_object(opid: number, error: GLib.Error | null, object: string): void;
        /**
         * Notifies listeners of the completion of the get_object_list method call.
         * @param opid associated operation id
         * @param error Operation error, if any, automatically freed if passed it.
         * @param objects List of retrieved objects.
         */
        respond_get_object_list(opid: number, error: GLib.Error | null, objects: string[]): void;
        /**
         * Notifies listeners of the completion of the get_timezone method call.
         * @param opid associated operation id
         * @param error Operation error, if any, automatically freed if passed it.
         * @param tzobject The requested timezone as an iCalendar string.
         */
        respond_get_timezone(opid: number, error: GLib.Error | null, tzobject: string): void;
        /**
         * Notifies listeners of the completion of the modify_objects method call.
         * @param opid associated operation id
         * @param error Operation error, if any, automatically freed if passed it.
         * @param old_components The old {@link ECal.Component}(s).
         * @param new_components The new {@link ECal.Component}(s).
         */
        respond_modify_objects(
            opid: number,
            error: GLib.Error | null,
            old_components: ECal.Component[],
            new_components: ECal.Component[],
        ): void;
        /**
         * Notifies listeners of the completion of the open method call.
         * @param opid associated operation id
         * @param error Operation error, if any, automatically freed if passed it.
         */
        respond_open(opid: number, error?: GLib.Error | null): void;
        /**
         * Notifies listeners of the completion of the receive_objects method call.
         * @param opid associated operation id
         * @param error Operation error, if any, automatically freed if passed it.
         */
        respond_receive_objects(opid: number, error?: GLib.Error | null): void;
        /**
         * Notifies listeners of the completion of the refresh method call.
         * @param opid associated operation id
         * @param error Operation error, if any, automatically freed if passed it.
         */
        respond_refresh(opid: number, error?: GLib.Error | null): void;
        /**
         * Notifies listeners of the completion of the remove_objects method call.
         * @param opid associated operation id
         * @param error Operation error, if any, automatically freed if passed it.
         * @param ids IDs of the removed objects.
         * @param old_components The old {@link ECal.Component}(s).
         * @param new_components The new {@link ECal.Component}(s).    They will not be NULL only when removing instances of recurring appointments.
         */
        respond_remove_objects(
            opid: number,
            error: GLib.Error | null,
            ids: ECal.ComponentId[],
            old_components: ECal.Component[],
            new_components: ECal.Component[],
        ): void;
        /**
         * Notifies listeners of the completion of the send_objects method call.
         * @param opid associated operation id
         * @param error Operation error, if any, automatically freed if passed it.
         * @param users List of users.
         * @param calobj An iCalendar string representing the object sent.
         */
        respond_send_objects(opid: number, error: GLib.Error | null, users: string[], calobj: string): void;
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
        init(cancellable?: Gio.Cancellable | null): boolean;
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
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace DataCalFactory {
        // Signal signatures
        interface SignalSignatures extends EBackend.DataFactory.SignalSignatures {
            'notify::backend-per-process': (pspec: GObject.ParamSpec) => void;
            'notify::registry': (pspec: GObject.ParamSpec) => void;
            'notify::reload-supported': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                EBackend.DataFactory.ConstructorProps,
                EDataServer.Extensible.ConstructorProps,
                Gio.Initable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DataCalFactory extends EBackend.DataFactory implements EDataServer.Extensible, Gio.Initable {
        static $gtype: GObject.GType<DataCalFactory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DataCalFactory.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DataCalFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](backend_per_process: number, cancellable?: Gio.Cancellable | null): DataCalFactory;

        // Signals

        /** @signal */
        connect<K extends keyof DataCalFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataCalFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DataCalFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataCalFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DataCalFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DataCalFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
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
        init(cancellable?: Gio.Cancellable | null): boolean;
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
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace DataCalView {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::backend': (pspec: GObject.ParamSpec) => void;
            'notify::connection': (pspec: GObject.ParamSpec) => void;
            'notify::object-path': (pspec: GObject.ParamSpec) => void;
            'notify::sexp': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            backend: CalBackend;
            connection: Gio.DBusConnection;
            object_path: string;
            objectPath: string;
            sexp: CalBackendSExp;
        }
    }

    /**
     * @gir-type Class
     */
    class DataCalView extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<DataCalView>;

        // Properties

        /**
         * The backend being monitored
         * @construct-only
         */
        get backend(): CalBackend;
        /**
         * The {@link Gio.DBusConnection} on which to export the view interface
         * @construct-only
         */
        get connection(): Gio.DBusConnection;
        /**
         * The object path at which to export the view interface
         * @construct-only
         */
        get object_path(): string;
        /**
         * The object path at which to export the view interface
         * @construct-only
         */
        get objectPath(): string;
        /**
         * The query expression for this view
         * @construct-only
         */
        get sexp(): CalBackendSExp;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DataCalView.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DataCalView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            backend: any | null,
            sexp: any | null,
            connection: Gio.DBusConnection,
            object_path: string,
        ): DataCalView;

        // Signals

        /** @signal */
        connect<K extends keyof DataCalView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataCalView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DataCalView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataCalView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DataCalView.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DataCalView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Compares the given `component` to the regular expression used for the
         * given view.
         * @param component the {@link ECal.Component} object to match.
         * @returns TRUE if the object matches the expression, FALSE if not.
         */
        component_matches(component: ECal.Component): boolean;
        /**
         * This function is similar to `e_cal_component_get_as_string()` except
         * that it takes into account the fields-of-interest that `view` is
         * configured with and filters out any unneeded fields.
         * @param component The {@link ECal.Component} to get the string for.
         * @returns A newly allocated string representation of `component` suitable for `view`.
         */
        get_component_string(component: ECal.Component): string;
        /**
         * Returns the {@link Gio.DBusConnection} on which the CalendarView D-Bus
         * interface is exported.
         * @returns the {@link Gio.DBusConnection}
         */
        get_connection(): Gio.DBusConnection;
        /**
         * @returns Hash table of field names which the listener is interested in. Backends can return fully populated objects, but the listener advertised that it will use only these. Returns `null` for all available fields. Note: The data pointer in the hash table has no special meaning, it's only GINT_TO_POINTER(1) for easier checking. Also, field names are compared case insensitively.
         */
        get_fields_of_interest(): GLib.HashTable<any, any> | null;
        /**
         * Gets the {@link ECal.ClientViewFlags} that control the behaviour of `view`.
         * @returns the flags for `view`.
         */
        get_flags(): ECal.ClientViewFlags;
        /**
         * Return the object path at which the CalendarView D-Bus inteface is
         * exported.
         * @returns the object path
         */
        get_object_path(): string;
        /**
         * Get the {@link EDataCal.CalBackendSExp} object used for the given view.
         * @returns The expression object used to search.
         */
        get_sexp(): any | null;
        /**
         * Checks whether the given view is already completed. Being completed means the initial
         * matching of objects have been finished, not that no more notifications about
         * changes will be sent. In fact, even after completed, notifications will still be sent
         * if there are changes in the objects matching the view search expression.
         * @returns TRUE if the view is completed, FALSE if still in progress.
         */
        is_completed(): boolean;
        /**
         * Checks whether the given view has already been started.
         * @returns TRUE if the view has already been started, FALSE otherwise.
         */
        is_started(): boolean;
        /**
         * Checks whether the given view has been stopped.
         * @returns TRUE if the view has been stopped, FALSE otherwise.
         */
        is_stopped(): boolean;
        /**
         * Notifies all view listeners of the completion of the view, including a
         * status code.
         * @param error View completion error, if any.
         */
        notify_complete(error: GLib.Error): void;
        /**
         * Notifies all view listeners of the addition of a list of components.
         *
         * Uses the {@link EDataCal.DataCalView}'s fields-of-interest to filter out unwanted
         * information from iCalendar strings sent over the bus.
         * @param ecalcomponents List of {@link ECal.Component}-s that have been added.
         */
        notify_components_added(ecalcomponents: ECal.Component[]): void;
        /**
         * Notifies all the view listeners of the addition of a single object.
         *
         * Uses the {@link EDataCal.DataCalView}'s fields-of-interest to filter out unwanted
         * information from iCalendar strings sent over the bus.
         * @param component The {@link ECal.Component} that has been added.
         */
        notify_components_added_1(component: ECal.Component): void;
        /**
         * Notifies all view listeners of the modification of a list of components.
         *
         * Uses the {@link EDataCal.DataCalView}'s fields-of-interest to filter out unwanted
         * information from iCalendar strings sent over the bus.
         * @param ecalcomponents List of modified {@link ECal.Component}-s.
         */
        notify_components_modified(ecalcomponents: ECal.Component[]): void;
        /**
         * Notifies all view listeners of the modification of `component`.
         *
         * Uses the {@link EDataCal.DataCalView}'s fields-of-interest to filter out unwanted
         * information from iCalendar strings sent over the bus.
         * @param component The modified {@link ECal.Component}.
         */
        notify_components_modified_1(component: ECal.Component): void;
        /**
         * Notifies all view listener of the removal of a list of objects.
         * @param ids List of IDs for the objects that have been removed.
         */
        notify_objects_removed(ids: ECal.ComponentId[]): void;
        /**
         * Notifies all view listener of the removal of a single object.
         * @param id ID of the removed object.
         */
        notify_objects_removed_1(id: ECal.ComponentId): void;
        /**
         * Notifies all view listeners of progress messages.
         * @param percent Percentage completed.
         * @param message Progress message to send to listeners.
         */
        notify_progress(percent: number, message: string): void;
        /**
         * Compares the given `object` to the regular expression used for the
         * given view.
         * @param object Object to match.
         * @returns TRUE if the object matches the expression, FALSE if not.
         */
        object_matches(object: string): boolean;
        /**
         * Refs the backend that `view` is querying. Unref the returned backend,
         * if not `null`, with `g_object_unref()`, when no longer needed.
         * @returns The associated {@link EDataCal.CalBackend}.
         */
        ref_backend(): CalBackend | null;
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
        init(cancellable?: Gio.Cancellable | null): boolean;
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
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace IntervalTree {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     * @gir-type Class
     * @since 2.32
     */
    class IntervalTree extends GObject.Object {
        static $gtype: GObject.GType<IntervalTree>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: IntervalTree.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<IntervalTree.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): IntervalTree;

        // Signals

        /** @signal */
        connect<K extends keyof IntervalTree.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IntervalTree.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof IntervalTree.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IntervalTree.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof IntervalTree.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<IntervalTree.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        destroy(): void;
        dump(): void;
        /**
         * @param start start of the interval
         * @param end end of the interval
         * @param comp Component
         */
        insert(start: number, end: number, comp: ECal.Component): boolean;
        /**
         * @param uid the uid of the component to remove
         * @param rid the recurrance id of the component to remove
         */
        remove(uid: string, rid: string): boolean;
        /**
         * @param start start of the interval
         * @param end end of the interval
         * @returns list of {@link ECal.Component}-s    that overlap given interval, or `null`.
         */
        search(start: number, end: number): ECal.Component[] | null;
    }

    namespace SubprocessCalFactory {
        // Signal signatures
        interface SignalSignatures extends EBackend.SubprocessFactory.SignalSignatures {
            'notify::registry': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends EBackend.SubprocessFactory.ConstructorProps, Gio.Initable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class SubprocessCalFactory extends EBackend.SubprocessFactory implements Gio.Initable {
        static $gtype: GObject.GType<SubprocessCalFactory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SubprocessCalFactory.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SubprocessCalFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](cancellable?: Gio.Cancellable | null): SubprocessCalFactory;

        // Signals

        /** @signal */
        connect<K extends keyof SubprocessCalFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SubprocessCalFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SubprocessCalFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SubprocessCalFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SubprocessCalFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SubprocessCalFactory.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
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
        init(cancellable?: Gio.Cancellable | null): boolean;
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
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    /**
     * @gir-type Alias
     */
    type CalBackendClass = typeof CalBackend;
    /**
     * @gir-type Alias
     */
    type CalBackendFactoryClass = typeof CalBackendFactory;
    /**
     * @gir-type Struct
     */
    abstract class CalBackendFactoryPrivate {
        static $gtype: GObject.GType<CalBackendFactoryPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class CalBackendPrivate {
        static $gtype: GObject.GType<CalBackendPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CalBackendSExpClass = typeof CalBackendSExp;
    /**
     * @gir-type Struct
     */
    abstract class CalBackendSExpPrivate {
        static $gtype: GObject.GType<CalBackendSExpPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CalBackendSyncClass = typeof CalBackendSync;
    /**
     * @gir-type Struct
     */
    abstract class CalBackendSyncPrivate {
        static $gtype: GObject.GType<CalBackendSyncPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CalCacheClass = typeof CalCache;
    /**
     * Holds the information about offline change for one component.
     * @gir-type Struct
     * @since 3.26
     */
    class CalCacheOfflineChange {
        static $gtype: GObject.GType<CalCacheOfflineChange>;

        // Fields

        uid: string;
        rid: string;
        revision: string;
        object: string;
        state: EBackend.OfflineState;

        // Constructors

        constructor(
            uid: string,
            rid: string | null,
            revision: string | null,
            object: string | null,
            state: EBackend.OfflineState,
        );

        static ['new'](
            uid: string,
            rid: string | null,
            revision: string | null,
            object: string | null,
            state: EBackend.OfflineState,
        ): CalCacheOfflineChange;

        // Static methods

        /**
         * Frees the `change` structure, previously allocated with `e_cal_cache_offline_change_new()`
         * or `e_cal_cache_offline_change_copy()`.
         * @param change an {@link EDataCal.CalCacheOfflineChange}
         */
        static free(change?: any | null): void;

        // Methods

        /**
         * @returns Copy of the given `change`. Free it with    `e_cal_cache_offline_change_free()` when no longer needed.    If the `change` is `null`, then returns `null` as well.
         */
        copy(): CalCacheOfflineChange | null;
    }

    /**
     * @gir-type Struct
     */
    abstract class CalCachePrivate {
        static $gtype: GObject.GType<CalCachePrivate>;
    }

    /**
     * This structure is used to represent components returned
     * by the {@link EDataCal.CalCache} from various functions
     * such as `e_cal_cache_search()`.
     *
     * The `extra` parameter will contain any data which was
     * previously passed for this component in `e_cal_cache_put_component()`
     * or set with `e_cal_cache_set_component_extra()`.
     *
     * These should be freed with `e_cal_cache_search_data_free()`.
     * @gir-type Struct
     * @since 3.26
     */
    class CalCacheSearchData {
        static $gtype: GObject.GType<CalCacheSearchData>;

        // Fields

        uid: string;
        rid: string;
        object: string;
        extra: string;

        // Constructors

        constructor(
            properties?: Partial<{
                uid: string;
                rid: string;
                object: string;
                extra: string;
            }>,
        );

        static ['new'](uid: string, rid: string | null, object: string, extra?: string | null): CalCacheSearchData;

        // Static methods

        /**
         * Frees the `ptr` structure, previously allocated with `e_cal_cache_search_data_new()`
         * or `e_cal_cache_search_data_copy()`.
         * @param ptr an {@link EDataCal.CalCacheSearchData}
         */
        static free(ptr?: any | null): void;

        // Methods

        /**
         * @returns Copy of the given `data`. Free it with    `e_cal_cache_search_data_free()` when no longer needed.    If the `data` is `null`, then returns `null` as well.
         */
        copy(): CalCacheSearchData | null;
    }

    /**
     * @gir-type Alias
     */
    type CalMetaBackendClass = typeof CalMetaBackend;
    /**
     * @gir-type Struct
     */
    class CalMetaBackendInfo {
        static $gtype: GObject.GType<CalMetaBackendInfo>;

        // Fields

        uid: string;
        revision: string;
        object: string;
        extra: string;

        // Constructors

        constructor(
            properties?: Partial<{
                uid: string;
                revision: string;
                object: string;
                extra: string;
            }>,
        );

        static ['new'](
            uid: string,
            revision?: string | null,
            object?: string | null,
            extra?: string | null,
        ): CalMetaBackendInfo;

        // Static methods

        /**
         * Frees the `ptr` structure, previously allocated with `e_cal_meta_backend_info_new()`
         * or `e_cal_meta_backend_info_copy()`.
         * @param ptr an {@link EDataCal.CalMetaBackendInfo}
         */
        static free(ptr?: any | null): void;

        // Methods

        /**
         * @returns Copy of the given `src`. Free it with    `e_cal_meta_backend_info_free()` when no longer needed.    If the `src` is `null`, then returns `null` as well.
         */
        copy(): CalMetaBackendInfo;
    }

    /**
     * @gir-type Struct
     */
    abstract class CalMetaBackendPrivate {
        static $gtype: GObject.GType<CalMetaBackendPrivate>;
    }

    /**
     * @gir-type Struct
     */
    class CalQueueTuple {
        static $gtype: GObject.GType<CalQueueTuple>;

        // Fields

        first: GLib.Queue;
        second: GLib.Queue;
        third: GLib.Queue;
        first_free_func: GLib.DestroyNotify;
        second_free_func: GLib.DestroyNotify;
        third_free_func: GLib.DestroyNotify;

        // Methods

        free(): void;
    }

    /**
     * @gir-type Alias
     */
    type DataCalClass = typeof DataCal;
    /**
     * @gir-type Alias
     */
    type DataCalFactoryClass = typeof DataCalFactory;
    /**
     * @gir-type Struct
     */
    abstract class DataCalFactoryPrivate {
        static $gtype: GObject.GType<DataCalFactoryPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class DataCalPrivate {
        static $gtype: GObject.GType<DataCalPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DataCalViewClass = typeof DataCalView;
    /**
     * @gir-type Struct
     */
    abstract class DataCalViewPrivate {
        static $gtype: GObject.GType<DataCalViewPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type IntervalTreeClass = typeof IntervalTree;
    /**
     * @gir-type Struct
     */
    abstract class IntervalTreePrivate {
        static $gtype: GObject.GType<IntervalTreePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SubprocessCalFactoryClass = typeof SubprocessCalFactory;
    /**
     * @gir-type Struct
     */
    abstract class SubprocessCalFactoryPrivate {
        static $gtype: GObject.GType<SubprocessCalFactoryPrivate>;
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

export default EDataCal;

// END
