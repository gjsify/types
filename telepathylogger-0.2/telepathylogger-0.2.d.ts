/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './telepathylogger-0.2-ambient.d.ts';
import './telepathylogger-0.2-import.d.ts';
/**
 * TelepathyLogger-0.2
 */

import type TelepathyGLib from '@girs/telepathyglib-0.12';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace TelepathyLogger {
    enum EntityType {
        /**
         * the current contact's type is unknown
         */
        UNKNOWN,
        /**
         * the contact's type represents a user (buddy), but not
         *    the account's owner for which `TPL_ENTITY_SELF` is used
         */
        CONTACT,
        /**
         * a named room (#TP_HANDLE_TYPE_ROOM)
         */
        ROOM,
        /**
         * the contact's type represents the owner of the account
         *    whose channel has been logged, as opposed to `TPL_ENTITY_CONTACT` which
         *    represents any other user
         */
        SELF,
    }
    enum LogManagerError {
        /**
         * Error return when adding logs fails
         */
        LOG_MANAGER_ERROR_ADD_EVENT,
    }
    interface LogEventFilter {
        (event: Event): boolean;
    }
    /**
     * Mask used to filter type of #TplEvent returned.
     */
    enum EventTypeMask {
        /**
         * Mask to #TplTextEvent
         */
        TEXT,
        /**
         * Mask to #TplCallEvent
         */
        CALL,
        /**
         * Special value to select all type of #TplEvent
         */
        ANY,
    }
    module CallEvent {
        // Constructor properties interface
    }

    /**
     * An object representing a call log event.
     */
    class CallEvent extends Event {
        // Own properties of TelepathyLogger-0.2.CallEvent

        detailed_end_reason: string;
        detailedEndReason: string;
        duration: number;
        end_actor: Entity;
        endActor: Entity;
        end_reason: number;
        endReason: number;

        // Owm methods of TelepathyLogger-0.2.CallEvent

        get_detailed_end_reason(): string;
        get_duration(): GLib.TimeSpan;
        get_end_actor(): Entity;
        get_end_reason(): TelepathyGLib.CallStateChangeReason;
    }

    module Entity {
        // Constructor properties interface
    }

    /**
     * An object representing a contact or room.
     */
    class Entity extends GObject.Object {
        // Own properties of TelepathyLogger-0.2.Entity

        /**
         * The entity's alias
         */
        alias: string;
        /**
         * The entity's avatar token
         */
        avatar_token: string;
        /**
         * The entity's avatar token
         */
        avatarToken: string;
        /**
         * The entity's identifier
         */
        identifier: string;
        /**
         * The entity's type (see #TplEntityType).
         */
        type: number;

        // Constructors of TelepathyLogger-0.2.Entity

        static ['new'](id: string, type: EntityType, alias: string, avatar_token: string): Entity;

        static new_from_room_id(room_id: string): Entity;

        static new_from_tp_contact(contact: TelepathyGLib.Contact, type: EntityType): Entity;

        // Owm methods of TelepathyLogger-0.2.Entity

        get_alias(): string;
        get_avatar_token(): string;
        get_entity_type(): EntityType;
        get_identifier(): string;
    }

    module Event {
        // Constructor properties interface
    }

    /**
     * An object representing a generic log event.
     */
    abstract class Event extends GObject.Object {
        // Own properties of TelepathyLogger-0.2.Event

        account: TelepathyGLib.Account;
        readonly account_path: string;
        readonly accountPath: string;
        channel_path: string;
        channelPath: string;
        receiver: Entity;
        sender: Entity;
        timestamp: number;

        // Owm methods of TelepathyLogger-0.2.Event

        /**
         * Checks if two instances of TplEvent represent the same data
         * @param data an instance of the same TplEvent subclass of @self
         * @returns %TRUE if @data is the same type of @self and they hold the same data, %FALSE otherwise
         */
        equal(data: Event): boolean;
        /**
         * &lt;!-- no more to say --&gt;
         * @returns the same account as the #TplEvent:account property
         */
        get_account(): TelepathyGLib.Account;
        /**
         * &lt;!-- no more to say --&gt;
         * @returns the path as the #TplEvent:account property
         */
        get_account_path(): string;
        get_receiver(): Entity;
        get_sender(): Entity;
        get_timestamp(): number;
    }

    module LogManager {
        // Constructor properties interface
    }

    /**
     * An object used to access logs
     */
    class LogManager extends GObject.Object {
        // Own fields of TelepathyLogger-0.2.LogManager

        priv: any;

        // Owm methods of TelepathyLogger-0.2.LogManager

        static dup_singleton(): LogManager;
        static errors_quark(): GLib.Quark;

        // Owm methods of TelepathyLogger-0.2.LogManager

        /**
         * Checks if logs exist for `target`.
         *
         * It applies for any registered TplLogStore with the TplLogStore:readable
         * property %TRUE.
         * @param account TpAccount
         * @param target a non-NULL #TplEntity
         * @param type_mask event type filter see #TplEventTypeMask
         * @returns %TRUE logs exist for @target, otherwise %FALSE
         */
        exists(account: TelepathyGLib.Account, target: Entity, type_mask: number): boolean;
        /**
         * Retrieves a list of #GDate corresponding to each day where
         * at least one event exist for `target`.
         *
         * It applies for any registered TplLogStore with the TplLogStore:readable
         * property %TRUE.
         * @param account a #TpAccount
         * @param target a non-NULL #TplEntity
         * @param type_mask event type filter see #TplEventTypeMask
         * @param callback a callback to call when the request is satisfied
         */
        get_dates_async(
            account: TelepathyGLib.Account,
            target: Entity,
            type_mask: number,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        get_dates_finish(result: Gio.AsyncResult): boolean;
        /**
         * Start a query looking for all entities for which you have logs in the `account`.
         * @param account a #TpAccount
         * @param callback a callback to call when the request is satisfied
         */
        get_entities_async(account: TelepathyGLib.Account, callback?: Gio.AsyncReadyCallback<this> | null): void;
        get_entities_finish(result: Gio.AsyncResult): boolean;
        /**
         * Retrieve a list of #TplEvent at `date` with `target`.
         * @param account a #TpAccount
         * @param target a non-NULL #TplEntity
         * @param type_mask event type filter see #TplEventTypeMask
         * @param date a #GDate
         * @param callback a callback to call when the request is satisfied
         */
        get_events_for_date_async(
            account: TelepathyGLib.Account,
            target: Entity,
            type_mask: number,
            date: GLib.Date,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        get_events_for_date_finish(result: Gio.AsyncResult): boolean;
        /**
         * Retrieve the most recent `num_event` events exchanged with `target`.
         * @param account a #TpAccount
         * @param target a non-NULL #TplEntity
         * @param type_mask event type filter see #TplEventTypeMask
         * @param num_events number of maximum events to fetch
         * @param filter an optional filter function
         * @param callback a callback to call when the request is satisfied
         */
        get_filtered_events_async(
            account: TelepathyGLib.Account,
            target: Entity,
            type_mask: number,
            num_events: number,
            filter?: LogEventFilter | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        get_filtered_events_finish(result: Gio.AsyncResult): boolean;
        /**
         * Search for all the conversations containing `text`.
         * @param text the pattern to search
         * @param type_mask event type filter see #TplEventTypeMask
         * @param callback a callback to call when the request is satisfied
         */
        search_async(text: string, type_mask: number, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Create a #TplLogWalker to traverse all the events exchanged with `target`.
         * @param account a #TpAccount
         * @param target a non-NULL #TplEntity
         * @param type_mask event type filter see #TplEventTypeMask
         * @param filter an optional filter function
         * @returns a #TplLogWalker
         */
        walk_filtered_events(
            account: TelepathyGLib.Account,
            target: Entity,
            type_mask: number,
            filter?: LogEventFilter | null,
        ): LogWalker;
    }

    module LogWalker {
        // Constructor properties interface
    }

    /**
     * An object used to iterate over the logs
     */
    class LogWalker extends GObject.Object {
        // Own properties of TelepathyLogger-0.2.LogWalker

        filter: any;
        filter_data: any;
        filterData: any;

        // Owm methods of TelepathyLogger-0.2.LogWalker

        /**
         * Walk the logs to retrieve the next most recent `num_event` events.
         * @param num_events number of maximum events to fetch
         * @param callback a callback to call when the request is satisfied
         */
        get_events_async(num_events: number, callback?: Gio.AsyncReadyCallback<this> | null): void;
        get_events_finish(result: Gio.AsyncResult): boolean;
        /**
         * Determines whether `walker` has run out of events. This is the case
         * when `walker` has returned all the events from the logs.
         * @returns #TRUE if @walker has run out of events, otherwise #FALSE.
         */
        is_end(): boolean;
        /**
         * Determines whether `walker` is pointing at the most recent event in
         * the logs. This is the case when `walker` has not yet returned any
         * events or has been rewound completely.
         * @returns #TRUE if @walker is pointing at the most recent event, otherwise #FALSE.
         */
        is_start(): boolean;
        /**
         * Move the `walker` back by the last `num_event` events that were
         * returned by tpl_log_walker_get_events_async().
         * @param num_events number of events to move back
         * @param callback a callback to call when the request is satisfied
         */
        rewind_async(num_events: number, callback?: Gio.AsyncReadyCallback<this> | null): void;
        rewind_finish(result: Gio.AsyncResult): boolean;
    }

    module TextEvent {
        // Constructor properties interface
    }

    /**
     * An object representing a text log event.
     */
    class TextEvent extends Event {
        // Own properties of TelepathyLogger-0.2.TextEvent

        edit_timestamp: number;
        editTimestamp: number;
        message: string;
        message_token: string;
        messageToken: string;
        message_type: number;
        messageType: number;
        supersedes_token: string;
        supersedesToken: string;

        // Owm methods of TelepathyLogger-0.2.TextEvent

        get_edit_timestamp(): number;
        get_message(): string;
        get_message_token(): string;
        get_message_type(): TelepathyGLib.ChannelTextMessageType;
        get_supersedes(): TextEvent[];
        get_supersedes_token(): string;
    }

    class CallEventClass {}

    class CallEventPriv {}

    class EntityPriv {}

    class EventClass {}

    class EventPriv {}

    class LogManagerClass {}

    /**
     * Represent the context where the search has results.
     */
    class LogSearchHit {
        // Own fields of TelepathyLogger-0.2.LogSearchHit

        account: TelepathyGLib.Account;
        target: Entity;
        date: GLib.Date;
    }

    class LogWalkerClass {}

    class LogWalkerPriv {}

    class TextEventClass {}

    class TextEventPriv {}

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

export default TelepathyLogger;
// END
