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
import type libxml2 from '@girs/libxml2-2.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type EDataServer from '@girs/edataserver-1.2';
import type Soup from '@girs/soup-3.0';
import type Json from '@girs/json-1.0';
import type Camel from '@girs/camel-1.2';

export namespace ECalendar {
    /**
     * ECalendar-1.2
     */

    /**
     * FIXME: Document me.
     */

    /**
     * FIXME: Document me.
     */
    export namespace CalClientError {
        export const $gtype: GObject.GType<CalClientError>;
    }

    enum CalClientError {
        NO_SUCH_CALENDAR,
        OBJECT_NOT_FOUND,
        INVALID_OBJECT,
        UNKNOWN_USER,
        OBJECT_ID_ALREADY_EXISTS,
        INVALID_RANGE,
    }
    /**
     * FIXME: Document me.
     */

    /**
     * FIXME: Document me.
     */
    export namespace CalClientSourceType {
        export const $gtype: GObject.GType<CalClientSourceType>;
    }

    enum CalClientSourceType {
        EVENTS,
        TASKS,
        MEMOS,
        LAST,
    }

    export namespace CalClientSourceTypeEnum {
        export const $gtype: GObject.GType<CalClientSourceTypeEnum>;
    }

    enum CalClientSourceTypeEnum {
        EVENTS,
        TASKS,
        MEMOS,
        INVALID,
    }

    export namespace CalComponentAlarmAction {
        export const $gtype: GObject.GType<CalComponentAlarmAction>;
    }

    enum CalComponentAlarmAction {
        NONE,
        AUDIO,
        DISPLAY,
        EMAIL,
        PROCEDURE,
        UNKNOWN,
    }

    export namespace CalComponentAlarmTriggerType {
        export const $gtype: GObject.GType<CalComponentAlarmTriggerType>;
    }

    enum CalComponentAlarmTriggerType {
        NONE,
        RELATIVE_START,
        RELATIVE_END,
        ABSOLUTE,
    }

    export namespace CalComponentClassification {
        export const $gtype: GObject.GType<CalComponentClassification>;
    }

    enum CalComponentClassification {
        NONE,
        PUBLIC,
        PRIVATE,
        CONFIDENTIAL,
        UNKNOWN,
    }

    export namespace CalComponentField {
        export const $gtype: GObject.GType<CalComponentField>;
    }

    enum CalComponentField {
        CATEGORIES,
        CLASSIFICATION,
        COMPLETED,
        DTEND,
        DTSTART,
        DUE,
        GEO,
        PERCENT,
        PRIORITY,
        SUMMARY,
        TRANSPARENCY,
        URL,
        HAS_ALARMS,
        ICON,
        COMPLETE,
        RECURRING,
        OVERDUE,
        COLOR,
        STATUS,
        COMPONENT,
        LOCATION,
        NUM_FIELDS,
    }

    export namespace CalComponentPeriodType {
        export const $gtype: GObject.GType<CalComponentPeriodType>;
    }

    enum CalComponentPeriodType {
        DATETIME,
        DURATION,
    }

    export namespace CalComponentRangeType {
        export const $gtype: GObject.GType<CalComponentRangeType>;
    }

    enum CalComponentRangeType {
        SINGLE,
        THISPRIOR,
        THISFUTURE,
    }

    export namespace CalComponentTransparency {
        export const $gtype: GObject.GType<CalComponentTransparency>;
    }

    enum CalComponentTransparency {
        NONE,
        TRANSPARENT,
        OPAQUE,
        UNKNOWN,
    }

    export namespace CalComponentVType {
        export const $gtype: GObject.GType<CalComponentVType>;
    }

    enum CalComponentVType {
        NO_TYPE,
        EVENT,
        TODO,
        JOURNAL,
        FREEBUSY,
        TIMEZONE,
    }

    export namespace CalLoadState {
        export const $gtype: GObject.GType<CalLoadState>;
    }

    enum CalLoadState {
        NOT_LOADED,
        LOADING,
        LOADED,
    }

    export namespace CalSetModeStatus {
        export const $gtype: GObject.GType<CalSetModeStatus>;
    }

    enum CalSetModeStatus {
        SUCCESS,
        ERROR,
        NOT_SUPPORTED,
    }

    export namespace CalSetModeStatusEnum {
        export const $gtype: GObject.GType<CalSetModeStatusEnum>;
    }

    enum CalSetModeStatusEnum {
        SUCCESS,
        ERROR,
        UNSUPPORTED,
    }

    export namespace CalSourceType {
        export const $gtype: GObject.GType<CalSourceType>;
    }

    enum CalSourceType {
        EVENT,
        TODO,
        JOURNAL,
        LAST,
    }

    export namespace CalSourceTypeEnum {
        export const $gtype: GObject.GType<CalSourceTypeEnum>;
    }

    enum CalSourceTypeEnum {
        EVENT,
        TODO,
        JOURNAL,
        INVALID,
    }

    export namespace CalendarStatus {
        export const $gtype: GObject.GType<CalendarStatus>;
    }

    enum CalendarStatus {
        OK,
        INVALID_ARG,
        BUSY,
        REPOSITORY_OFFLINE,
        NO_SUCH_CALENDAR,
        OBJECT_NOT_FOUND,
        INVALID_OBJECT,
        URI_NOT_LOADED,
        URI_ALREADY_LOADED,
        PERMISSION_DENIED,
        UNKNOWN_USER,
        OBJECT_ID_ALREADY_EXISTS,
        PROTOCOL_NOT_SUPPORTED,
        CANCELLED,
        COULD_NOT_CANCEL,
        AUTHENTICATION_FAILED,
        AUTHENTICATION_REQUIRED,
        DBUS_EXCEPTION,
        OTHER_ERROR,
        INVALID_SERVER_VERSION,
        NOT_SUPPORTED,
    }
    /**
     * FIXME Document me!
     */

    /**
     * FIXME Document me!
     */
    export namespace DataCalCallStatus {
        export const $gtype: GObject.GType<DataCalCallStatus>;
    }

    enum DataCalCallStatus {
        SUCCESS,
        BUSY,
        REPOSITORYOFFLINE,
        PERMISSIONDENIED,
        INVALIDRANGE,
        OBJECTNOTFOUND,
        INVALIDOBJECT,
        OBJECTIDALREADYEXISTS,
        AUTHENTICATIONFAILED,
        AUTHENTICATIONREQUIRED,
        UNSUPPORTEDFIELD,
        UNSUPPORTEDMETHOD,
        UNSUPPORTEDAUTHENTICATIONMETHOD,
        TLSNOTAVAILABLE,
        NOSUCHCAL,
        UNKNOWNUSER,
        OFFLINEUNAVAILABLE,
        SEARCHSIZELIMITEXCEEDED,
        SEARCHTIMELIMITEXCEEDED,
        INVALIDQUERY,
        QUERYREFUSED,
        COULDNOTCANCEL,
        OTHERERROR,
        INVALIDSERVERVERSION,
        INVALIDARG,
        NOTSUPPORTED,
        NOTOPENED,
    }
    function calendar_error_quark(): GLib.Quark;
    interface CalRecurInstanceFn {
        (comp: CalComponent, instance_start: number, instance_end: number, data: any): boolean;
    }

    export namespace CalChangeType {
        export const $gtype: GObject.GType<CalChangeType>;
    }

    enum CalChangeType {
        ADDED,
        MODIFIED,
        DELETED,
    }
    /**
     * Flags that control the behaviour of an #ECalClientView.
     */

    /**
     * Flags that control the behaviour of an #ECalClientView.
     */
    export namespace CalClientViewFlags {
        export const $gtype: GObject.GType<CalClientViewFlags>;
    }

    enum CalClientViewFlags {
        NONE,
        NOTIFY_INITIAL,
    }
    /**
     * FIXME: Document me.
     */

    /**
     * FIXME: Document me.
     */
    export namespace DataCalMode {
        export const $gtype: GObject.GType<DataCalMode>;
    }

    enum DataCalMode {
        OCAL,
        EMOTE,
        NYMODE,
    }
    /**
     * FIXME Document me!
     */

    /**
     * FIXME Document me!
     */
    export namespace DataCalObjModType {
        export const $gtype: GObject.GType<DataCalObjModType>;
    }

    enum DataCalObjModType {
        THIS,
        THISANDPRIOR,
        THISANDFUTURE,
        ALL,
    }
    /**
     * FIXME Document me!
     */

    /**
     * FIXME Document me!
     */
    export namespace DataCalObjType {
        export const $gtype: GObject.GType<DataCalObjType>;
    }

    enum DataCalObjType {
        EVENT,
        TODO,
        JOURNAL,
        ANYTYPE,
    }
    namespace Cal {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'backend-died': () => void;
            'backend-error': (arg0: string) => void;
            'cal-opened': (arg0: number) => void;
            'cal-opened-ex': (arg0: number) => void;
            'cal-set-mode': (arg0: CalSetModeStatusEnum, arg1: unknown) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Cal extends GObject.Object {
        static $gtype: GObject.GType<Cal>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Cal.SignalSignatures;

        // Fields

        object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<Cal.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](source: EDataServer.Source, type: CalSourceType): Cal;

        // Signals

        connect<K extends keyof Cal.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cal.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Cal.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cal.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Cal.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cal.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets an error message for the given status code.
         * @param status A status code.
         */
        static get_error_message(status: CalendarStatus): string;
        static marshal_VOID__ENUM_ENUM(
            closure: GObject.Closure,
            return_value: GObject.Value | any,
            n_param_values: number,
            param_values: GObject.Value | any,
            invocation_hint: any,
            marshal_data: any,
        ): void;
        static marshal_VOID__STRING_UINT(
            closure: GObject.Closure,
            return_value: GObject.Value | any,
            n_param_values: number,
            param_values: GObject.Value | any,
            invocation_hint: any,
            marshal_data: any,
        ): void;
        static marshal_VOID__UINT_STRING(
            closure: GObject.Closure,
            return_value: GObject.Value | any,
            n_param_values: number,
            param_values: GObject.Value | any,
            invocation_hint: any,
            marshal_data: any,
        ): void;
        /**
         * Matches `tzid` against the system timezone definitions
         * and returns the matching TZID, or %NULL if none found
         * @param tzid a timezone ID
         */
        static match_tzid(tzid: string): string;
        /**
         * Returns system timezone location string, NULL on an error.
         * Returned pointer should be freed with g_free().
         *
         * Note: Since 3.4 the returned timezone location is either NULL or
         * an equivalent within known libical timezones.
         */
        static system_timezone_get_location(): string;
        /**
         * Returns system timezone location string, NULL on an error.
         * Returned pointer should be freed with g_free().
         */
        static util_get_system_timezone_location(): string;
        /**
         * Converts a translated priority string to an iCalendar priority value.
         * @param string A string representing the PRIORITY value.
         */
        static util_priority_from_string(string: string): number;
        /**
         * Converts an iCalendar PRIORITY value to a translated string. Any unknown
         * priority value (i.e. not 0-9) will be returned as "" (undefined).
         * @param priority Priority value.
         */
        static util_priority_to_string(priority: number): string;

        // Virtual methods

        vfunc_backend_died(): void;
        vfunc_backend_error(message: string): void;
        vfunc_cal_opened(status: CalendarStatus): void;
        vfunc_cal_opened_ex(error: GLib.Error): void;

        // Methods

        /**
         * Tells the calendar backend to get rid of the alarm identified by the
         * `auid` argument in `comp`. Some backends might remove the alarm or
         * update internal information about the alarm be discarded, or, like
         * the file backend does, ignore the operation.
         *
         * CALOBJ_MOD_ONLY_THIS is not supported in this call.
         * @param comp The component to discard the alarm from.
         * @param auid Unique identifier of the alarm to be discarded.
         * @returns TRUE if the operation was successful, FALSE otherwise.
         */
        discard_alarm(comp: CalComponent, auid: string): boolean;
        /**
         * Queries the address to be used for alarms in a calendar client.
         * @param alarm_address Return value for alarm address.
         * @returns TRUE if the operation was successful, FALSE if there was an error while contacting the backend.
         */
        get_alarm_email_address(alarm_address: string): boolean;
        /**
         * Queries a calendar for the alarms of a particular object that trigger in the
         * specified range of time.
         * @param id Unique identifier for a calendar component.
         * @param start Start time for query.
         * @param end End time for query.
         * @param alarms Return value for the component's alarm instances.  Will return NULL if no instances occur within the specified time range.  This should be freed using the e_cal_component_alarms_free() function.
         * @returns TRUE on success, FALSE if the object was not found.
         */
        get_alarms_for_object(id: CalComponentId, start: number, end: number, alarms: CalComponentAlarms): boolean;
        /**
         * Queries the calendar address associated with a calendar client.
         * @param cal_address Return value for address information.
         * @returns TRUE if the operation was successful, FALSE if there was an error.
         */
        get_cal_address(cal_address: string): boolean;
        /**
         * Queries the LDAP attribute for a calendar client.
         * @param ldap_attribute Return value for the LDAP attribute.
         * @returns TRUE if the call was successful, FALSE if there was an error contacting the backend.
         */
        get_ldap_attribute(ldap_attribute: string): boolean;
        /**
         * Queries the state of loading of a calendar client.
         * @returns A #ECalLoadState value indicating whether the client has not been loaded with #e_cal_open yet, whether it is being loaded, or whether it is already loaded.
         */
        get_load_state(): CalLoadState;
        /**
         * Queries the URL where the calendar attachments are
         * serialized in the local filesystem. This enable clients
         * to operate with the reference to attachments rather than the data itself
         * unless it specifically uses the attachments for open/sending
         * operations.
         * @returns The URL where the attachments are serialized in the local filesystem.
         */
        get_local_attachment_store(): string;
        /**
         * Gets a list of objects from the calendar that match the query specified
         * by the `query` argument. The objects will be returned in the `objects`
         * argument, which is a list of #icalcomponent. When done, this list
         * should be freed by using the #e_cal_free_object_list function.
         * @param query Query string.
         * @returns TRUE if the operation was successful, FALSE otherwise.
         */
        get_object_list(query: string): [boolean, number[]];
        /**
         * Checks if a calendar supports only one alarm per component.
         * @returns TRUE if the calendar allows only one alarm, FALSE otherwise.
         */
        get_one_alarm_only(): boolean;
        /**
         * Checks whether a calendar requires organizer to accept their attendance to
         * meetings.
         * @returns TRUE if the calendar requires organizers to accept, FALSE otherwise.
         */
        get_organizer_must_accept(): boolean;
        /**
         * Checks if a calendar forces organizers of meetings to be also attendees.
         * @returns TRUE if the calendar forces organizers to attend meetings, FALSE otherwise.
         */
        get_organizer_must_attend(): boolean;
        /**
         * Creates a live query object from a loaded calendar.
         * @param sexp S-expression representing the query.
         * @returns A query object that will emit notification signals as calendar components are added and removed from the query in the server.
         */
        get_query(sexp: string): [boolean, CalView];
        /**
         * Checks if the calendar has a master object for recurrences.
         * @returns TRUE if the calendar has a master object for recurrences, FALSE otherwise.
         */
        get_recurrences_no_master(): boolean;
        /**
         * Checks whether a calendar supports explicit refreshing (see `e_cal_refresh)`.
         * @returns TRUE if the calendar supports refreshing, FALSE otherwise.
         */
        get_refresh_supported(): boolean;
        /**
         * Checks whether the calendar saves schedules.
         * @returns TRUE if it saves schedules, FALSE otherwise.
         */
        get_save_schedules(): boolean;
        /**
         * Gets the type of the calendar client.
         * @returns an #ECalSourceType value corresponding to the type of the calendar client.
         */
        get_source_type(): CalSourceType;
        /**
         * Queries the calendar for static capabilities.
         * @param cap Name of the static capability to check.
         * @returns TRUE if the capability is supported, FALSE otherwise.
         */
        get_static_capability(cap: string): boolean;
        /**
         * Queries whether the calendar client can perform modifications
         * on the calendar or not. Whether the backend is read only or not
         * is specified, on exit, in the `read_only` argument.
         * @param read_only Return value for read only status.
         * @returns TRUE if the call was successful, FALSE if there was an error.
         */
        is_read_only(read_only: boolean): boolean;
        /**
         * Makes a calendar client initiate a request to open a calendar.  The calendar
         * client will emit the "cal_opened" signal when the response from the server is
         * received. Since 3.0 is emitted also "cal_opened_ex" signal, which contains
         * a GError pointer from the open operation (NULL when no error occurred).
         * New signal deprecates the old "cal_opened" signal.
         * @param only_if_exists FALSE if the calendar should be opened even if there was no storage for it, i.e. to create a new calendar or load an existing one if it already exists.  TRUE if it should only try to load calendars that already exist.
         * @returns TRUE on success, FALSE on failure to issue the open request.
         */
        open(only_if_exists: boolean): boolean;
        /**
         * Open the calendar asynchronously.  The calendar will emit the
         * "cal_opened" signal when the operation has completed.
         * Since 3.0 is emitted also "cal_opened_ex" signal, which contains
         * a GError pointer from the open operation (NULL when no error occurred).
         * New signal deprecates the old "cal_opened" signal.
         * @param only_if_exists If TRUE, then only open the calendar if it already exists.  If FALSE, then create a new calendar if it doesn't already exist.
         */
        open_async(only_if_exists: boolean): void;
        /**
         * Invokes refresh on a calendar. See `e_cal_get_refresh_supported`.
         * @returns TRUE if calendar supports refresh and it was invoked, FALSE otherwise.
         */
        refresh(): boolean;
        /**
         * Removes a calendar.
         * @returns TRUE if the calendar was removed, FALSE if there was an error.
         */
        remove(): boolean;
        /**
         * Asks a calendar to remove all components with the given UID.
         * If more control of the removal is desired, then use e_cal_remove_object_with_mod().
         * If the server is able to remove the component(s), all clients will
         * be notified and they will emit the "obj_removed" signal.
         * @param uid Unique identifier of the calendar component to remove.
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        remove_object(uid: string): boolean;
    }

    namespace CalClient {
        // Signal signatures
        interface SignalSignatures extends EDataServer.Client.SignalSignatures {
            'free-busy-data': (arg0: any) => void;
            'notify::capabilities': (pspec: GObject.ParamSpec) => void;
            'notify::main-context': (pspec: GObject.ParamSpec) => void;
            'notify::online': (pspec: GObject.ParamSpec) => void;
            'notify::opened': (pspec: GObject.ParamSpec) => void;
            'notify::readonly': (pspec: GObject.ParamSpec) => void;
            'notify::source': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends EDataServer.Client.ConstructorProps {}
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    class CalClient extends EDataServer.Client {
        static $gtype: GObject.GType<CalClient>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CalClient.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CalClient.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](source: EDataServer.Source, source_type: CalClientSourceType): CalClient;

        // Signals

        connect<K extends keyof CalClient.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CalClient.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CalClient.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CalClient.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CalClient.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CalClient.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static error_create(code: CalClientError, custom_msg: string): GLib.Error;
        // Conflicted with EDataServer.Client.error_create
        static error_create(...args: never[]): any;
        static error_quark(): GLib.Quark;
        /**
         * FIXME: Document me.
         * @param code
         */
        static error_to_string(code: CalClientError): string;
        // Conflicted with EDataServer.Client.error_to_string
        static error_to_string(...args: never[]): any;
        /**
         * Frees each element of the `ecalcomps` list and the list itself.
         * Each element is an object of type #ECalComponent.
         * @param ecalcomps list of #ECalComponent objects
         */
        static free_ecalcomp_slist(ecalcomps: CalComponent[]): void;

        // Methods

        /**
         * Finishes previous call of e_cal_client_add_timezone().
         * @param result a #GAsyncResult
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        add_timezone_finish(result: Gio.AsyncResult): boolean;
        /**
         * Checks if a calendar supports only one alarm per component.
         * @returns TRUE if the calendar allows only one alarm, FALSE otherwise.
         */
        check_one_alarm_only(): boolean;
        /**
         * Checks whether a calendar requires organizer to accept their attendance to
         * meetings.
         * @returns TRUE if the calendar requires organizers to accept, FALSE otherwise.
         */
        check_organizer_must_accept(): boolean;
        /**
         * Checks if a calendar forces organizers of meetings to be also attendees.
         * @returns TRUE if the calendar forces organizers to attend meetings, FALSE otherwise.
         */
        check_organizer_must_attend(): boolean;
        /**
         * Checks if the calendar has a master object for recurrences.
         * @returns TRUE if the calendar has a master object for recurrences, FALSE otherwise.
         */
        check_recurrences_no_master(): boolean;
        /**
         * Checks whether the calendar saves schedules.
         * @returns TRUE if it saves schedules, FALSE otherwise.
         */
        check_save_schedules(): boolean;
        /**
         * Finishes previous call of e_cal_client_create_object() and
         * sets `uid` to newly assigned UID for the created object.
         * This `uid` should be freed with g_free().
         * @param result a #GAsyncResult
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        create_object_finish(result: Gio.AsyncResult): [boolean, string];
        /**
         * Finishes previous call of e_cal_client_create_objects() and
         * sets `uids` to newly assigned UIDs for the created objects.
         * This `uids` should be freed with e_client_util_free_string_slist().
         * @param result a #GAsyncResult
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        create_objects_finish(result: Gio.AsyncResult): [boolean, string[]];
        /**
         * Removes alarm `auid` from a given component identified by `uid` and `rid`.
         * The call is finished by e_cal_client_discard_alarm_finish() from
         * the `callback`.
         * @param uid Unique identifier for a calendar component
         * @param rid Recurrence identifier
         * @param auid Alarm identifier to remove
         * @param cancellable a #GCancellable; can be %NULL
         */
        discard_alarm(
            uid: string,
            rid: string,
            auid: string,
            cancellable: Gio.Cancellable,
        ): globalThis.Promise<boolean>;
        /**
         * Removes alarm `auid` from a given component identified by `uid` and `rid`.
         * The call is finished by e_cal_client_discard_alarm_finish() from
         * the `callback`.
         * @param uid Unique identifier for a calendar component
         * @param rid Recurrence identifier
         * @param auid Alarm identifier to remove
         * @param cancellable a #GCancellable; can be %NULL
         * @param callback callback to call when a result is ready
         */
        discard_alarm(
            uid: string,
            rid: string,
            auid: string,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<this>,
        ): void;
        /**
         * Removes alarm `auid` from a given component identified by `uid` and `rid`.
         * The call is finished by e_cal_client_discard_alarm_finish() from
         * the `callback`.
         * @param uid Unique identifier for a calendar component
         * @param rid Recurrence identifier
         * @param auid Alarm identifier to remove
         * @param cancellable a #GCancellable; can be %NULL
         * @param callback callback to call when a result is ready
         */
        discard_alarm(
            uid: string,
            rid: string,
            auid: string,
            cancellable: Gio.Cancellable,
            callback?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes previous call of e_cal_client_discard_alarm().
         * @param result a #GAsyncResult
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        discard_alarm_finish(result: Gio.AsyncResult): boolean;
        /**
         * Removes alarm `auid` from a given component identified by `uid` and `rid`.
         * @param uid Unique identifier for a calendar component
         * @param rid Recurrence identifier
         * @param auid Alarm identifier to remove
         * @param cancellable a #GCancellable; can be %NULL
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        discard_alarm_sync(uid: string, rid: string, auid: string, cancellable: Gio.Cancellable): boolean;
        /**
         * Does a combination of #e_cal_client_get_object_list () and
         * #e_cal_client_recur_generate_instances(). Unlike #e_cal_client_generate_instances_sync (),
         * this returns immediately and the `cb` callback is called asynchronously.
         *
         * The callback function should do a g_object_ref() of the calendar component
         * it gets passed if it intends to keep it around, since it will be unref'ed
         * as soon as the callback returns.
         * @param start Start time for query.
         * @param end End time for query.
         * @param cancellable a #GCancellable; can be %NULL
         * @param cb Callback for each generated instance.
         */
        generate_instances(start: number, end: number, cancellable: Gio.Cancellable, cb: CalRecurInstanceFn): void;
        /**
         * Does a combination of e_cal_client_get_object_list() and
         * e_cal_client_recur_generate_instances().
         *
         * The callback function should do a g_object_ref() of the calendar component
         * it gets passed if it intends to keep it around, since it will be unreffed
         * as soon as the callback returns.
         * @param start Start time for query
         * @param end End time for query
         * @param cb Callback for each generated instance
         */
        generate_instances_sync(start: number, end: number, cb: CalRecurInstanceFn): void;
        /**
         * Queries a calendar for a specified component's object attachment uris.
         * The call is finished by e_cal_client_get_attachment_uris_finish() from
         * the `callback`.
         * @param uid Unique identifier for a calendar component
         * @param rid Recurrence identifier
         * @param cancellable a #GCancellable; can be %NULL
         */
        get_attachment_uris(uid: string, rid: string, cancellable: Gio.Cancellable): globalThis.Promise<string[]>;
        /**
         * Queries a calendar for a specified component's object attachment uris.
         * The call is finished by e_cal_client_get_attachment_uris_finish() from
         * the `callback`.
         * @param uid Unique identifier for a calendar component
         * @param rid Recurrence identifier
         * @param cancellable a #GCancellable; can be %NULL
         * @param callback callback to call when a result is ready
         */
        get_attachment_uris(
            uid: string,
            rid: string,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<this>,
        ): void;
        /**
         * Queries a calendar for a specified component's object attachment uris.
         * The call is finished by e_cal_client_get_attachment_uris_finish() from
         * the `callback`.
         * @param uid Unique identifier for a calendar component
         * @param rid Recurrence identifier
         * @param cancellable a #GCancellable; can be %NULL
         * @param callback callback to call when a result is ready
         */
        get_attachment_uris(
            uid: string,
            rid: string,
            cancellable: Gio.Cancellable,
            callback?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<string[]> | void;
        /**
         * Finishes previous call of e_cal_client_get_attachment_uris() and
         * sets `attachment_uris` to uris for component's attachments.
         * The list should be freed with e_client_util_free_string_slist().
         * @param result a #GAsyncResult
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        get_attachment_uris_finish(result: Gio.AsyncResult): [boolean, string[]];
        /**
         * Queries a calendar for a specified component's object attachment URIs.
         * The list should be freed with e_client_util_free_string_slist().
         * @param uid Unique identifier for a calendar component
         * @param rid Recurrence identifier
         * @param cancellable a #GCancellable; can be %NULL
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        get_attachment_uris_sync(uid: string, rid: string, cancellable: Gio.Cancellable): [boolean, string[]];
        /**
         * Retrives an #icalcomponent from the backend that contains the default
         * values for properties needed. The call is finished
         * by e_cal_client_get_default_object_finish() from the `callback`.
         * @param cancellable a #GCancellable; can be %NULL
         * @param callback callback to call when a result is ready
         */
        get_default_object(cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        /**
         * Begins retrieval of free/busy information from the calendar server
         * as a list of #ECalComponent-s. Connect to "free-busy-data" signal
         * to receive chunks of free/busy components.
         * The call is finished by e_cal_client_get_free_busy_finish() from
         * the `callback`.
         * @param start Start time for query
         * @param end End time for query
         * @param users List of users to retrieve free/busy information for
         * @param cancellable a #GCancellable; can be %NULL
         */
        get_free_busy(
            start: number,
            end: number,
            users: string[],
            cancellable: Gio.Cancellable,
        ): globalThis.Promise<boolean>;
        /**
         * Begins retrieval of free/busy information from the calendar server
         * as a list of #ECalComponent-s. Connect to "free-busy-data" signal
         * to receive chunks of free/busy components.
         * The call is finished by e_cal_client_get_free_busy_finish() from
         * the `callback`.
         * @param start Start time for query
         * @param end End time for query
         * @param users List of users to retrieve free/busy information for
         * @param cancellable a #GCancellable; can be %NULL
         * @param callback callback to call when a result is ready
         */
        get_free_busy(
            start: number,
            end: number,
            users: string[],
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<this>,
        ): void;
        /**
         * Begins retrieval of free/busy information from the calendar server
         * as a list of #ECalComponent-s. Connect to "free-busy-data" signal
         * to receive chunks of free/busy components.
         * The call is finished by e_cal_client_get_free_busy_finish() from
         * the `callback`.
         * @param start Start time for query
         * @param end End time for query
         * @param users List of users to retrieve free/busy information for
         * @param cancellable a #GCancellable; can be %NULL
         * @param callback callback to call when a result is ready
         */
        get_free_busy(
            start: number,
            end: number,
            users: string[],
            cancellable: Gio.Cancellable,
            callback?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes previous call of e_cal_client_get_free_busy().
         * All VFREEBUSY #ECalComponent-s were received by "free-busy-data" signal.
         * @param result a #GAsyncResult
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        get_free_busy_finish(result: Gio.AsyncResult): boolean;
        /**
         * Gets free/busy information from the calendar server.
         * All VFREEBUSY #ECalComponent-s were received by "free-busy-data" signal.
         * @param start Start time for query
         * @param end End time for query
         * @param users List of users to retrieve free/busy information for
         * @param cancellable a #GCancellable; can be %NULL
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        get_free_busy_sync(start: number, end: number, users: string[], cancellable: Gio.Cancellable): boolean;
        /**
         * Queries the URL where the calendar attachments are
         * serialized in the local filesystem. This enable clients
         * to operate with the reference to attachments rather than the data itself
         * unless it specifically uses the attachments for open/sending
         * operations.
         * @returns The URL where the attachments are serialized in the local filesystem.
         */
        get_local_attachment_store(): string;
        /**
         * Queries a calendar for a calendar component object based on its unique
         * identifier. The call is finished by e_cal_client_get_object_finish()
         * from the `callback`.
         *
         * Use e_cal_client_get_objects_for_uid() to get list of all
         * objects for the given uid, which includes master object and
         * all detached instances.
         * @param uid Unique identifier for a calendar component.
         * @param rid Recurrence identifier.
         * @param cancellable a #GCancellable; can be %NULL
         * @param callback callback to call when a result is ready
         */
        get_object(
            uid: string,
            rid: string,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<this>,
        ): void;
        /**
         * Gets a list of objects from the calendar that match the query specified
         * by the `sexp` argument, returning matching objects as a list of #icalcomponent-s.
         * The call is finished by e_cal_client_get_object_list_finish() from
         * the `callback`.
         * @param sexp an S-expression representing the query
         * @param cancellable a #GCancellable; can be %NULL
         * @param callback callback to call when a result is ready
         */
        get_object_list(sexp: string, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        /**
         * Gets a list of objects from the calendar that match the query specified
         * by the `sexp` argument, returning matching objects as a list of #ECalComponent-s.
         * The call is finished by e_cal_client_get_object_list_as_comps_finish() from
         * the `callback`.
         * @param sexp an S-expression representing the query
         * @param cancellable a #GCancellable; can be %NULL
         */
        get_object_list_as_comps(sexp: string, cancellable: Gio.Cancellable): globalThis.Promise<CalComponent[]>;
        /**
         * Gets a list of objects from the calendar that match the query specified
         * by the `sexp` argument, returning matching objects as a list of #ECalComponent-s.
         * The call is finished by e_cal_client_get_object_list_as_comps_finish() from
         * the `callback`.
         * @param sexp an S-expression representing the query
         * @param cancellable a #GCancellable; can be %NULL
         * @param callback callback to call when a result is ready
         */
        get_object_list_as_comps(
            sexp: string,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<this>,
        ): void;
        /**
         * Gets a list of objects from the calendar that match the query specified
         * by the `sexp` argument, returning matching objects as a list of #ECalComponent-s.
         * The call is finished by e_cal_client_get_object_list_as_comps_finish() from
         * the `callback`.
         * @param sexp an S-expression representing the query
         * @param cancellable a #GCancellable; can be %NULL
         * @param callback callback to call when a result is ready
         */
        get_object_list_as_comps(
            sexp: string,
            cancellable: Gio.Cancellable,
            callback?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<CalComponent[]> | void;
        /**
         * Finishes previous call of e_cal_client_get_object_list_as_comps() and
         * sets `ecalcomps` to a matching list of #ECalComponent-s.
         * This list should be freed with #e_cal_client_free_ecalcomp_slist().
         * @param result a #GAsyncResult
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        get_object_list_as_comps_finish(result: Gio.AsyncResult): [boolean, CalComponent[]];
        /**
         * Gets a list of objects from the calendar that match the query specified
         * by the `sexp` argument. The objects will be returned in the `ecalcomps`
         * argument, which is a list of #ECalComponent.
         * This list should be freed with #e_cal_client_free_ecalcomp_slist().
         * @param sexp an S-expression representing the query
         * @param cancellable a #GCancellable; can be %NULL
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        get_object_list_as_comps_sync(sexp: string, cancellable: Gio.Cancellable): [boolean, CalComponent[]];
        /**
         * Queries a calendar for all calendar components with the given unique
         * ID. This will return any recurring event and all its detached recurrences.
         * For non-recurring events, it will just return the object with that ID.
         * The call is finished by e_cal_client_get_objects_for_uid_finish() from
         * the `callback`.
         * @param uid Unique identifier for a calendar component
         * @param cancellable a #GCancellable; can be %NULL
         */
        get_objects_for_uid(uid: string, cancellable: Gio.Cancellable): globalThis.Promise<CalComponent[]>;
        /**
         * Queries a calendar for all calendar components with the given unique
         * ID. This will return any recurring event and all its detached recurrences.
         * For non-recurring events, it will just return the object with that ID.
         * The call is finished by e_cal_client_get_objects_for_uid_finish() from
         * the `callback`.
         * @param uid Unique identifier for a calendar component
         * @param cancellable a #GCancellable; can be %NULL
         * @param callback callback to call when a result is ready
         */
        get_objects_for_uid(uid: string, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        /**
         * Queries a calendar for all calendar components with the given unique
         * ID. This will return any recurring event and all its detached recurrences.
         * For non-recurring events, it will just return the object with that ID.
         * The call is finished by e_cal_client_get_objects_for_uid_finish() from
         * the `callback`.
         * @param uid Unique identifier for a calendar component
         * @param cancellable a #GCancellable; can be %NULL
         * @param callback callback to call when a result is ready
         */
        get_objects_for_uid(
            uid: string,
            cancellable: Gio.Cancellable,
            callback?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<CalComponent[]> | void;
        /**
         * Finishes previous call of e_cal_client_get_objects_for_uid() and
         * sets `ecalcomps` to a list of #ECalComponent<!-- -->s corresponding to
         * found components for a given uid of the same type as this client.
         * This list should be freed with e_cal_client_free_ecalcomp_slist().
         * @param result a #GAsyncResult
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        get_objects_for_uid_finish(result: Gio.AsyncResult): [boolean, CalComponent[]];
        /**
         * Queries a calendar for all calendar components with the given unique
         * ID. This will return any recurring event and all its detached recurrences.
         * For non-recurring events, it will just return the object with that ID.
         * This list should be freed with e_cal_client_free_ecalcomp_slist().
         * @param uid Unique identifier for a calendar component
         * @param cancellable a #GCancellable; can be %NULL
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        get_objects_for_uid_sync(uid: string, cancellable: Gio.Cancellable): [boolean, CalComponent[]];
        /**
         * Gets the source type of the calendar client.
         * @returns an #ECalClientSourceType value corresponding to the source type of the calendar client.
         */
        get_source_type(): CalClientSourceType;
        /**
         * Retrieves a timezone object from the calendar backend.
         * The call is finished by e_cal_client_get_timezone_finish() from
         * the `callback`.
         * @param tzid ID of the timezone to retrieve
         * @param cancellable a #GCancellable; can be %NULL
         * @param callback callback to call when a result is ready
         */
        get_timezone(tzid: string, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        /**
         * Query `client` with `sexp,` creating an #ECalClientView.
         * The call is finished by e_cal_client_get_view_finish()
         * from the `callback`.
         * @param sexp an S-expression representing the query.
         * @param cancellable a #GCancellable; can be %NULL
         */
        get_view(sexp: string, cancellable: Gio.Cancellable): globalThis.Promise<CalClientView>;
        /**
         * Query `client` with `sexp,` creating an #ECalClientView.
         * The call is finished by e_cal_client_get_view_finish()
         * from the `callback`.
         * @param sexp an S-expression representing the query.
         * @param cancellable a #GCancellable; can be %NULL
         * @param callback callback to call when a result is ready
         */
        get_view(sexp: string, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        /**
         * Query `client` with `sexp,` creating an #ECalClientView.
         * The call is finished by e_cal_client_get_view_finish()
         * from the `callback`.
         * @param sexp an S-expression representing the query.
         * @param cancellable a #GCancellable; can be %NULL
         * @param callback callback to call when a result is ready
         */
        get_view(
            sexp: string,
            cancellable: Gio.Cancellable,
            callback?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<CalClientView> | void;
        /**
         * Finishes previous call of e_cal_client_get_view().
         * If successful, then the `view` is set to newly allocated #ECalClientView,
         * which should be freed with g_object_unref().
         * @param result a #GAsyncResult
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        get_view_finish(result: Gio.AsyncResult): [boolean, CalClientView];
        /**
         * Query `client` with `sexp,` creating an #ECalClientView.
         * If successful, then the `view` is set to newly allocated #ECalClientView,
         * which should be freed with g_object_unref().
         * @param sexp an S-expression representing the query.
         * @param cancellable a #GCancellable; can be %NULL
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        get_view_sync(sexp: string, cancellable: Gio.Cancellable): [boolean, CalClientView];
        /**
         * Finishes previous call of e_cal_client_modify_object().
         * @param result a #GAsyncResult
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        modify_object_finish(result: Gio.AsyncResult): boolean;
        /**
         * Finishes previous call of e_cal_client_modify_objects().
         * @param result a #GAsyncResult
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        modify_objects_finish(result: Gio.AsyncResult): boolean;
        /**
         * Finishes previous call of e_cal_client_receive_objects().
         * @param result a #GAsyncResult
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        receive_objects_finish(result: Gio.AsyncResult): boolean;
        /**
         * Finishes previous call of e_cal_client_remove_object().
         * @param result a #GAsyncResult
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        remove_object_finish(result: Gio.AsyncResult): boolean;
        /**
         * Finishes previous call of e_cal_client_remove_objects().
         * @param result a #GAsyncResult
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        remove_objects_finish(result: Gio.AsyncResult): boolean;
    }

    namespace CalClientView {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            complete: (arg0: GLib.Error) => void;
            'objects-added': (arg0: number[]) => void;
            'objects-modified': (arg0: number[]) => void;
            'objects-removed': (arg0: CalComponentId[]) => void;
            progress: (arg0: number, arg1: string) => void;
            'notify::client': (pspec: GObject.ParamSpec) => void;
            'notify::view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            client: CalClient;
            view: any;
        }
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    class CalClientView extends GObject.Object {
        static $gtype: GObject.GType<CalClientView>;

        // Properties

        get client(): CalClient;
        get view(): any;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CalClientView.SignalSignatures;

        // Fields

        object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<CalClientView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof CalClientView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CalClientView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CalClientView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CalClientView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CalClientView.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CalClientView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_complete(error: GLib.Error): void;
        vfunc_progress(percent: number, message: string): void;

        // Methods

        /**
         * Get the #ECalClient associated with this view.
         * @returns the associated client.
         */
        get_client(): any;
        /**
         * Retunrs: Whether view is running. Not running views are ignoring
         * all events sent from the server.
         */
        is_running(): boolean;
        /**
         * Client can instruct server to which fields it is interested in only, thus
         * the server can return less data over the wire. The server can still return
         * complete objects, this is just a hint to it that the listed fields will
         * be used only. The UID/RID fields are returned always. Initial views has no fields
         * of interest and using %NULL for `fields_of_interest` will unset any previous
         * changes.
         *
         * Some backends can use summary information of its cache to create artifical
         * objects, which will omit stored object parsing. If this cannot be done then
         * it will simply return object as is stored in the cache.
         * @param fields_of_interest List of field names in which the client is interested, or %NULL to reset the fields of interest
         */
        set_fields_of_interest(fields_of_interest: string[]): void;
        /**
         * Sets the `flags` which control the behaviour of `view`.
         * @param flags the #ECalClientViewFlags for @view.
         */
        set_flags(flags: CalClientViewFlags | null): void;
        /**
         * Starts a live query to the calendar/tasks backend.
         */
        start(): void;
        /**
         * Stops a live query to the calendar/tasks backend.
         */
        stop(): void;
    }

    namespace CalComponent {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class CalComponent extends GObject.Object {
        static $gtype: GObject.GType<CalComponent>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CalComponent.SignalSignatures;

        // Fields

        object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<CalComponent.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CalComponent;

        static new_from_string(calobj: string): CalComponent;

        // Signals

        connect<K extends keyof CalComponent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CalComponent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CalComponent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CalComponent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CalComponent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CalComponent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Frees a list of #ECalComponentAttendee structures.
         * @param attendee_list List of attendees
         */
        static free_attendee_list(attendee_list: CalComponentAttendee[]): void;
        /**
         * Frees a list of category strings.
         * @param categ_list List of category strings
         */
        static free_categories_list(categ_list: string[]): void;
        /**
         * Frees a date/time structure.
         * @param dt A date/time structure.
         */
        static free_datetime(dt: CalComponentDateTime): void;
        /**
         * Frees a list of #ECalComponentDateTime structures as returned by the
         * e_cal_component_get_exdate_list() function.
         * @param exdate_list List of #ECalComponentDateTime structures
         */
        static free_exdate_list(exdate_list: CalComponentDateTime[]): void;
        /**
         * Frees a struct #icalgeotype structure as returned by the calendar component
         * functions.
         * @param geo An #icalgeotype structure.
         */
        static free_geo(geo: any): void;
        /**
         * Frees a struct #icaltimetype value as returned by the calendar component
         * functions.
         * @param t An #icaltimetype structure.
         */
        static free_icaltimetype(t: any): void;
        /**
         * Frees the id.
         * @param id Component ID
         */
        static free_id(id: CalComponentId): void;
        /**
         * Frees a percent value as returned by the e_cal_component_get_percent()
         * function.
         * @param percent Percent value.
         */
        static free_percent(percent: number): void;
        /**
         * Frees a list of #ECalComponentPeriod structures.
         * @param period_list List of #ECalComponentPeriod structures
         */
        static free_period_list(period_list: CalComponentPeriod[]): void;
        /**
         * Frees a priority value as returned by the e_cal_component_get_priority()
         * function.
         * @param priority Priority value.
         */
        static free_priority(priority: number): void;
        /**
         * Frees an #ECalComponentRange structure.
         * @param range A #ECalComponentRange.
         */
        static free_range(range: CalComponentRange): void;
        /**
         * Frees a sequence number value.
         * @param sequence Sequence number value.
         */
        static free_sequence(sequence: number): void;
        /**
         * Frees a list of #ECalComponentText structures.  This function should only be
         * used to free lists of text values as returned by the other getter functions
         * of #ECalComponent.
         * @param text_list List of #ECalComponentText structures.
         */
        static free_text_list(text_list: CalComponentText[]): void;
        /**
         * Generates a unique identifier suitable for calendar components.
         */
        static gen_uid(): string;

        // Methods

        /**
         * Aborts the sequence change needed in the given calendar component, which
         * means it will not require a sequence commit (via #e_cal_component_commit_sequence)
         * even if the changes done require a sequence increment.
         */
        abort_sequence(): void;
        /**
         * Adds an alarm subcomponent to a calendar component.  You should have created
         * the `alarm` by using e_cal_component_alarm_new(); it is invalid to use a
         * #ECalComponentAlarm structure that came from e_cal_component_get_alarm().  After
         * adding the alarm, the `alarm` structure is no longer valid because the
         * internal structures may change and you should get rid of it by using
         * e_cal_component_alarm_free().
         * @param alarm An alarm.
         */
        add_alarm(alarm: CalComponentAlarm): void;
        /**
         * Creates a new calendar component object by copying the information from
         * another one.
         * @returns A newly-created calendar component with the same values as the original one.
         */
        clone(): CalComponent;
        /**
         * Increments the sequence number property in a calendar component object if it
         * needs it.  This needs to be done when any of a number of properties listed in
         * RFC 2445 change values, such as the start and end dates of a component.
         *
         * This function must be called before calling e_cal_component_get_as_string() to
         * ensure that the component is fully consistent.
         */
        commit_sequence(): void;
        /**
         * Checks if the DTSTART and DTEND properties of the 2 components match.
         * Note that the events may have different recurrence properties which are not
         * taken into account here.
         * @param comp2 A calendar component object.
         * @returns TRUE if the DTSTART and DTEND properties of the 2 components match.
         */
        event_dates_match(comp2: CalComponent): boolean;
        /**
         * Builds a list of the unique identifiers of the alarm subcomponents inside a
         * calendar component.
         * @returns List of unique identifiers for alarms.  This should be freed using cal_obj_uid_list_free().
         */
        get_alarm_uids(): string[];
        /**
         * Gets the iCalendar string representation of a calendar component.  You should
         * call e_cal_component_commit_sequence() before this function to ensure that the
         * component's sequence number is consistent with the state of the object.
         * @returns String representation of the calendar component according to RFC 2445.
         */
        get_as_string(): string;
        /**
         * Queries the attachment properties of the calendar component object. When done,
         * the `attachment_list` should be freed by calling g_slist_free().
         */
        get_attachment_list(): string[];
        /**
         * Queries the attendee properties of the calendar component object
         */
        get_attendee_list(): CalComponentAttendee[];
        /**
         * Queries the categories of the given calendar component. The categories
         * are returned in the `categories` argument, which, on success, will contain
         * a comma-separated list of all categories set in the component.
         * @param categories Return holder for the categories.
         */
        get_categories(categories: string): void;
        /**
         * Queries the list of categories of a calendar component object.  Each element
         * in the returned categ_list is a string with the corresponding category.
         */
        get_categories_list(): string[];
        /**
         * Queries the classification of a calendar component object.  If the
         * classification property is not set on this component, this function returns
         * #E_CAL_COMPONENT_CLASS_NONE.
         * @param classif Return value for the classification.
         */
        get_classification(classif: CalComponentClassification | null): void;
        /**
         * Queries the comments of a calendar component object.  The comment property can
         * appear several times inside a calendar component, and so a list of
         * #ECalComponentText is returned.
         */
        get_comment_list(): CalComponentText[];
        /**
         * Queries the date at which a calendar compoment object was completed.
         * @param t Return value for the completion date.  This should be freed using the e_cal_component_free_icaltimetype() function.
         */
        get_completed(t: any): void;
        /**
         * Queries the contact of a calendar component object.  The contact property can
         * appear several times inside a calendar component, and so a list of
         * #ECalComponentText is returned.
         */
        get_contact_list(): CalComponentText[];
        /**
         * Queries the date in which a calendar component object was created in the
         * calendar store.
         * @param t Return value for the creation date.  This should be freed using the e_cal_component_free_icaltimetype() function.
         */
        get_created(t: any): void;
        /**
         * Queries the description of a calendar component object.  Journal components
         * may have more than one description, and as such this function returns a list
         * of #ECalComponentText structures.  All other types of components can have at
         * most one description.
         */
        get_description_list(): CalComponentText[];
        /**
         * Queries the date/time end of a calendar component object.
         * @param dt Return value for the date/time end.  This should be freed with the e_cal_component_free_datetime() function.
         */
        get_dtend(dt: CalComponentDateTime): void;
        /**
         * Queries the date/timestamp property of a calendar component object, which is
         * the last time at which the object was modified by a calendar user agent.
         * @param t A value for the date/timestamp.
         */
        get_dtstamp(t: any): void;
        /**
         * Queries the date/time start of a calendar component object.
         * @param dt Return value for the date/time start.  This should be freed with the e_cal_component_free_datetime() function.
         */
        get_dtstart(dt: CalComponentDateTime): void;
        /**
         * Queries the due date/time of a calendar component object.
         * @param dt Return value for the due date/time.  This should be freed with the e_cal_component_free_datetime() function.
         */
        get_due(dt: CalComponentDateTime): void;
        /**
         * Queries the list of exception date properties in a calendar component object.
         */
        get_exdate_list(): CalComponentDateTime[];
        /**
         * Gets the geographic position property of a calendar component object.
         * @param geo Return value for the geographic position property.  This should be freed using the e_cal_component_free_geo() function.
         */
        get_geo(geo: any): void;
        /**
         * Queries the time at which a calendar component object was last modified in
         * the calendar store.
         * @param t Return value for the last modified time value.
         */
        get_last_modified(t: any): void;
        /**
         * Queries the location property of a calendar component object.
         * @param location Return value for the location.
         */
        get_location(location: string): void;
        /**
         * Get the number of attachments to this calendar component object.
         * @returns the number of attachments.
         */
        get_num_attachments(): number;
        /**
         * Queries the organizer property of a calendar component object
         * @param organizer A value for the organizer
         */
        get_organizer(organizer: CalComponentOrganizer): void;
        /**
         * Queries the percent-complete property of a calendar component object.
         * @param percent Return value for the percent-complete property.  This should be freed using the e_cal_component_free_percent() function.
         */
        get_percent(percent: number): void;
        get_percent_as_int(): number;
        /**
         * Queries the priority property of a calendar component object.
         * @param priority Return value for the priority property.  This should be freed using the e_cal_component_free_priority() function.
         */
        get_priority(priority: number): void;
        /**
         * Queries the list of recurrence date properties in a calendar component
         * object.
         */
        get_rdate_list(): CalComponentPeriod[];
        /**
         * Queries the recurrence id property of a calendar component object.
         * @param recur_id Return value for the recurrence id property
         */
        get_recurid(recur_id: CalComponentRange): void;
        /**
         * Gets the recurrence ID property as a string.
         * @returns the recurrence ID as a string.
         */
        get_recurid_as_string(): string;
        /**
         * Queries the sequence number of a calendar component object.
         * @param sequence Return value for the sequence number.  This should be freed using e_cal_component_free_sequence().
         */
        get_sequence(sequence: number): void;
        /**
         * Queries the summary of a calendar component object.
         * @param summary Return value for the summary property and its parameters.
         */
        get_summary(summary: CalComponentText): void;
        /**
         * Queries the time transparency of a calendar component object.
         * @param transp Return value for the time transparency.
         */
        get_transparency(transp: CalComponentTransparency | null): void;
        /**
         * Queries the unique identifier of a calendar component object.
         * @param uid Return value for the UID string.
         */
        get_uid(uid: string): void;
        /**
         * Queries the uniform resource locator property of a calendar component object.
         * @param url Return value for the URL.
         */
        get_url(url: string): void;
        /**
         * Queries the type of a calendar component object.
         * @returns The type of the component, as defined by RFC 2445.
         */
        get_vtype(): CalComponentVType;
        /**
         * Checks whether the component has any alarms.
         * @returns TRUE if the component has any alarms.
         */
        has_alarms(): boolean;
        /**
         * Queries the component to see if it has attachments.
         * @returns TRUE if there are attachments, FALSE otherwise.
         */
        has_attachments(): boolean;
        /**
         * Queries a calendar component object for the existence of attendees.
         * @returns TRUE if there are attendees, FALSE if not.
         */
        has_attendees(): boolean;
        /**
         * Queries whether a calendar component object has any exception dates
         * or exception rules.
         * @returns TRUE if the component has exceptions, FALSE otherwise.
         */
        has_exceptions(): boolean;
        /**
         * Queries whether a calendar component object has any exception dates defined
         * for it.
         * @returns TRUE if the component has exception dates, FALSE otherwise.
         */
        has_exdates(): boolean;
        /**
         * Queries whether a calendar component object has any exception rules defined
         * for it.
         * @returns TRUE if the component has exception rules, FALSE otherwise.
         */
        has_exrules(): boolean;
        /**
         * Check whether a calendar component object has an organizer or not.
         * @returns TRUE if there is an organizer, FALSE otherwise.
         */
        has_organizer(): boolean;
        /**
         * Queries whether a calendar component object has any recurrence dates defined
         * for it.
         * @returns TRUE if the component has recurrence dates, FALSE otherwise.
         */
        has_rdates(): boolean;
        /**
         * Queries whether a calendar component object has any recurrence dates or
         * recurrence rules.
         * @returns TRUE if the component has recurrences, FALSE otherwise.
         */
        has_recurrences(): boolean;
        /**
         * Queries whether a calendar component object has any recurrence rules defined
         * for it.
         * @returns TRUE if the component has recurrence rules, FALSE otherwise.
         */
        has_rrules(): boolean;
        /**
         * Checks whether the given calendar component object has simple recurrence
         * rules or more complicated ones.
         * @returns TRUE if it has a simple recurrence rule, FALSE otherwise.
         */
        has_simple_recurrence(): boolean;
        /**
         * Checks whether a calendar component object is an instance of a recurring
         * event.
         * @returns TRUE if it is an instance, FALSE if not.
         */
        is_instance(): boolean;
        /**
         * Removes an alarm subcomponent from a calendar component.  If the alarm that
         * corresponds to the specified `auid` had been fetched with
         * e_cal_component_get_alarm(), then those alarm structures will be invalid; you
         * should get rid of them with e_cal_component_alarm_free() before using this
         * function.
         * @param auid UID of the alarm to remove.
         */
        remove_alarm(auid: string): void;
        /**
         * Remove all alarms from the calendar component
         */
        remove_all_alarms(): void;
        /**
         * Rescans the #icalcomponent being wrapped by the given calendar component. This
         * would replace any value that was changed in the wrapped #icalcomponent.
         */
        rescan(): void;
        /**
         * This currently handles only attachments that are URIs
         * in the file system - not inline binaries.
         *
         * Sets the attachments of a calendar component object
         * @param attachment_list list of URIs to attachment pointers
         */
        set_attachment_list(attachment_list: string[]): void;
        /**
         * Sets the attendees of a calendar component object
         * @param attendee_list Values for attendee properties
         */
        set_attendee_list(attendee_list: CalComponentAttendee[]): void;
        /**
         * Sets the list of categories for a calendar component.
         * @param categories Comma-separated list of categories.
         */
        set_categories(categories: string): void;
        /**
         * Sets the list of categories of a calendar component object.
         * @param categ_list List of strings, one for each category.
         */
        set_categories_list(categ_list: string[]): void;
        /**
         * Sets the classification property of a calendar component object.  To unset
         * the property, specify E_CAL_COMPONENT_CLASS_NONE for `classif`.
         * @param classif Classification to use.
         */
        set_classification(classif: CalComponentClassification | null): void;
        /**
         * Sets the comments of a calendar component object.  The comment property can
         * appear several times inside a calendar component, and so a list of
         * #ECalComponentText structures is used.
         * @param text_list List of #ECalComponentText structures.
         */
        set_comment_list(text_list: CalComponentText[]): void;
        /**
         * Sets the date at which a calendar component object was completed.
         * @param t Value for the completion date.
         */
        set_completed(t: any): void;
        /**
         * Sets the contact of a calendar component object.  The contact property can
         * appear several times inside a calendar component, and so a list of
         * #ECalComponentText structures is used.
         * @param text_list List of #ECalComponentText structures.
         */
        set_contact_list(text_list: CalComponentText[]): void;
        /**
         * Sets the date in which a calendar component object is created in the calendar
         * store.  This should only be used inside a calendar store application, i.e.
         * not by calendar user agents.
         * @param t Value for the creation date.
         */
        set_created(t: any): void;
        /**
         * Sets the date/time end property of a calendar component object.
         * @param dt End date/time.
         */
        set_dtend(dt: CalComponentDateTime): void;
        /**
         * Sets the date/timestamp of a calendar component object.  This should be
         * called whenever a calendar user agent makes a change to a component's
         * properties.
         * @param t Date/timestamp value.
         */
        set_dtstamp(t: any): void;
        /**
         * Sets the date/time start property of a calendar component object.
         * @param dt Start date/time.
         */
        set_dtstart(dt: CalComponentDateTime): void;
        /**
         * Sets the due date/time property of a calendar component object.
         * @param dt End date/time.
         */
        set_due(dt: CalComponentDateTime): void;
        /**
         * Sets the list of exception dates in a calendar component object.
         * @param exdate_list List of #ECalComponentDateTime structures.
         */
        set_exdate_list(exdate_list: CalComponentDateTime[]): void;
        /**
         * Sets the geographic position property on a calendar component object.
         * @param geo Value for the geographic position property.
         */
        set_geo(geo: any): void;
        /**
         * Sets the contents of a calendar component object from an #icalcomponent
         * structure.  If the `comp` already had an #icalcomponent set into it, it will
         * will be freed automatically if the #icalcomponent does not have a parent
         * component itself.
         *
         * Supported component types are VEVENT, VTODO, VJOURNAL, VFREEBUSY, and VTIMEZONE.
         * @param icalcomp An #icalcomponent.
         * @returns TRUE on success, FALSE if @icalcomp is an unsupported component type.
         */
        set_icalcomponent(icalcomp: number): boolean;
        /**
         * Sets the time at which a calendar component object was last stored in the
         * calendar store.  This should not be called by plain calendar user agents.
         * @param t Value for the last time modified.
         */
        set_last_modified(t: any): void;
        /**
         * Sets the location property of a calendar component object.
         * @param location Location value.
         */
        set_location(location: string): void;
        /**
         * Clears any existing component data from a calendar component object and
         * creates a new #icalcomponent of the specified type for it.  The only property
         * that will be set in the new component will be its unique identifier.
         * @param type Type of calendar component to create.
         */
        set_new_vtype(type: CalComponentVType | null): void;
        /**
         * Sets the organizer of a calendar component object
         * @param organizer Value for the organizer property
         */
        set_organizer(organizer: CalComponentOrganizer): void;
        /**
         * Sets the percent-complete property of a calendar component object.
         * @param percent Value for the percent-complete property.
         */
        set_percent(percent: number): void;
        set_percent_as_int(percent: number): void;
        /**
         * Sets the priority property of a calendar component object.
         * @param priority Value for the priority property.
         */
        set_priority(priority: number): void;
        /**
         * Sets the list of recurrence dates in a calendar component object.
         * @param period_list List of #ECalComponentPeriod structures
         */
        set_rdate_list(period_list: CalComponentPeriod[]): void;
        /**
         * Sets the recurrence id property of a calendar component object.
         * @param recur_id Value for the recurrence id property.
         */
        set_recurid(recur_id: CalComponentRange): void;
        /**
         * Sets the sequence number of a calendar component object.  Normally this
         * function should not be called, since the sequence number is incremented
         * automatically at the proper times.
         * @param sequence Sequence number value.
         */
        set_sequence(sequence: number): void;
        /**
         * Sets the summary of a calendar component object.
         * @param summary Summary property and its parameters.
         */
        set_summary(summary: CalComponentText): void;
        /**
         * Sets the time transparency of a calendar component object.
         * @param transp Time transparency value.
         */
        set_transparency(transp: CalComponentTransparency | null): void;
        /**
         * Sets the unique identifier string of a calendar component object.
         * @param uid Unique identifier.
         */
        set_uid(uid: string): void;
        /**
         * Sets the uniform resource locator property of a calendar component object.
         * @param url URL value.
         */
        set_url(url: string): void;
        /**
         * Strips all error messages from the calendar component. Those error messages are
         * added to the iCalendar string representation whenever an invalid is used for
         * one of its fields.
         */
        strip_errors(): void;
    }

    namespace CalView {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'objects-added': (arg0: number[]) => void;
            'objects-modified': (arg0: number[]) => void;
            'objects-removed': (arg0: CalComponentId[]) => void;
            'view-complete': (arg0: number, arg1: string) => void;
            'view-done': (arg0: number) => void;
            'view-progress': (arg0: string, arg1: number) => void;
            'notify::client': (pspec: GObject.ParamSpec) => void;
            'notify::view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            client: Cal;
            view: any;
        }
    }

    class CalView extends GObject.Object {
        static $gtype: GObject.GType<CalView>;

        // Properties

        get client(): Cal;
        get view(): any;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CalView.SignalSignatures;

        // Fields

        object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<CalView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof CalView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CalView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CalView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CalView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CalView.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CalView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_view_complete(status: CalendarStatus, error_msg: string): void;
        vfunc_view_done(status: CalendarStatus): void;
        vfunc_view_progress(message: string, percent: number): void;

        // Methods

        /**
         * Starts a live query to the calendar/tasks backend.
         */
        start(): void;
        /**
         * Stops a live query to the calendar/tasks backend.
         */
        stop(): void;
    }

    /**
     * FIXME Document me!
     */
    class CalChange {
        static $gtype: GObject.GType<CalChange>;

        // Fields

        comp: CalComponent;
        type: CalChangeType;

        // Constructors

        _init(...args: any[]): void;
    }

    type CalClass = typeof Cal;
    type CalClientClass = typeof CalClient;
    abstract class CalClientPrivate {
        static $gtype: GObject.GType<CalClientPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CalClientViewClass = typeof CalClientView;
    abstract class CalClientViewPrivate {
        static $gtype: GObject.GType<CalClientViewPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class CalComponentAlarm {
        static $gtype: GObject.GType<CalComponentAlarm>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Frees an alarm structure.
         */
        free(): void;
        /**
         * Queries the action type of an alarm.
         * @param action Return value for the alarm's action type.
         */
        get_action(action: CalComponentAlarmAction | null): void;
        /**
         * Gets the list of attendees associated with an alarm.
         */
        get_attendee_list(): CalComponentAttendee[];
        /**
         * Queries the description property of an alarm.
         * @param description Return value for the description property and its parameters.
         */
        get_description(description: CalComponentText): void;
        /**
         * Queries the repeat/duration properties of an alarm.
         * @param repeat Return value for the repeat/duration properties.
         */
        get_repeat(repeat: CalComponentAlarmRepeat): void;
        /**
         * Queries the trigger time for an alarm.
         * @param trigger Return value for the trigger time.
         */
        get_trigger(trigger: CalComponentAlarmTrigger): void;
        /**
         * Queries the unique identifier of an alarm subcomponent.
         * @returns UID of the alarm.
         */
        get_uid(): string;
        /**
         * Queries an alarm to see if it has attendees associated with it.
         * @returns TRUE if there are attendees in the alarm, FALSE if not.
         */
        has_attendees(): boolean;
        /**
         * Sets the action type for an alarm.
         * @param action Action type.
         */
        set_action(action: CalComponentAlarmAction | null): void;
        /**
         * Sets the list of attendees for an alarm.
         * @param attendee_list List of attendees.
         */
        set_attendee_list(attendee_list: CalComponentAttendee[]): void;
        /**
         * Sets the description property of an alarm.
         * @param description Description property and its parameters, or NULL for no description.
         */
        set_description(description: CalComponentText): void;
        /**
         * Sets the repeat/duration values for an alarm.
         * @param repeat Repeat/duration values.  To remove any repetitions from the alarm, set the @repeat.repetitions to 0.
         */
        set_repeat(repeat: CalComponentAlarmRepeat): void;
        /**
         * Sets the trigger time of an alarm.
         * @param trigger Trigger time structure.
         */
        set_trigger(trigger: CalComponentAlarmTrigger): void;
    }

    class CalComponentAlarmInstance {
        static $gtype: GObject.GType<CalComponentAlarmInstance>;

        // Fields

        auid: string;
        trigger: number;
        occur_start: number;
        occur_end: number;

        // Constructors

        constructor(
            properties?: Partial<{
                auid: string;
                trigger: number;
                occur_start: number;
                occur_end: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    class CalComponentAlarmRepeat {
        static $gtype: GObject.GType<CalComponentAlarmRepeat>;

        // Fields

        repetitions: number;
        duration: any;

        // Constructors

        constructor(
            properties?: Partial<{
                repetitions: number;
                duration: any;
            }>,
        );
        _init(...args: any[]): void;
    }

    class CalComponentAlarmTrigger {
        static $gtype: GObject.GType<CalComponentAlarmTrigger>;

        // Fields

        type: CalComponentAlarmTriggerType;

        // Constructors

        _init(...args: any[]): void;
    }

    class CalComponentAlarms {
        static $gtype: GObject.GType<CalComponentAlarms>;

        // Fields

        comp: CalComponent;
        alarms: any[];

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Frees a #ECalComponentAlarms structure.
         */
        free(): void;
    }

    class CalComponentAttendee {
        static $gtype: GObject.GType<CalComponentAttendee>;

        // Fields

        value: string;
        member: string;
        rsvp: boolean;
        delto: string;
        delfrom: string;
        sentby: string;
        cn: string;
        language: string;

        // Constructors

        constructor(
            properties?: Partial<{
                value: string;
                member: string;
                cutype: unknown;
                role: unknown;
                status: unknown;
                rsvp: boolean;
                delto: string;
                delfrom: string;
                sentby: string;
                cn: string;
                language: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    type CalComponentClass = typeof CalComponent;
    class CalComponentDateTime {
        static $gtype: GObject.GType<CalComponentDateTime>;

        // Fields

        value: any;
        tzid: string;

        // Constructors

        constructor(
            properties?: Partial<{
                value: any;
                tzid: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    class CalComponentId {
        static $gtype: GObject.GType<CalComponentId>;

        // Fields

        uid: string;
        rid: string;

        // Constructors

        constructor(
            properties?: Partial<{
                uid: string;
                rid: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    class CalComponentOrganizer {
        static $gtype: GObject.GType<CalComponentOrganizer>;

        // Fields

        value: string;
        sentby: string;
        cn: string;
        language: string;

        // Constructors

        constructor(
            properties?: Partial<{
                value: string;
                sentby: string;
                cn: string;
                language: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    class CalComponentPeriod {
        static $gtype: GObject.GType<CalComponentPeriod>;

        // Fields

        type: CalComponentPeriodType;
        start: any;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class CalComponentPrivate {
        static $gtype: GObject.GType<CalComponentPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    class CalComponentRange {
        static $gtype: GObject.GType<CalComponentRange>;

        // Fields

        type: CalComponentRangeType;
        datetime: CalComponentDateTime;

        // Constructors

        _init(...args: any[]): void;
    }

    class CalComponentText {
        static $gtype: GObject.GType<CalComponentText>;

        // Fields

        value: string;
        altrep: string;

        // Constructors

        constructor(
            properties?: Partial<{
                value: string;
                altrep: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    abstract class CalPrivate {
        static $gtype: GObject.GType<CalPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CalViewClass = typeof CalView;
    abstract class CalViewPrivate {
        static $gtype: GObject.GType<CalViewPrivate>;

        // Constructors

        _init(...args: any[]): void;
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

export default ECalendar;

// END
