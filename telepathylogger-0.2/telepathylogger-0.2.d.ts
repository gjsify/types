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
import type TelepathyGLib from '@girs/telepathyglib-0.12';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace TelepathyLogger {
    /**
     * TelepathyLogger-0.2
     */

    export namespace EntityType {
        export const $gtype: GObject.GType<EntityType>;
    }

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

    export namespace LogManagerError {
        export const $gtype: GObject.GType<LogManagerError>;
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

    /**
     * Mask used to filter type of #TplEvent returned.
     */
    export namespace EventTypeMask {
        export const $gtype: GObject.GType<EventTypeMask>;
    }

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
    namespace CallEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {
            'notify::detailed-end-reason': (pspec: GObject.ParamSpec) => void;
            'notify::duration': (pspec: GObject.ParamSpec) => void;
            'notify::end-actor': (pspec: GObject.ParamSpec) => void;
            'notify::end-reason': (pspec: GObject.ParamSpec) => void;
            'notify::account': (pspec: GObject.ParamSpec) => void;
            'notify::account-path': (pspec: GObject.ParamSpec) => void;
            'notify::channel-path': (pspec: GObject.ParamSpec) => void;
            'notify::receiver': (pspec: GObject.ParamSpec) => void;
            'notify::sender': (pspec: GObject.ParamSpec) => void;
            'notify::timestamp': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Event.ConstructorProps {
            detailed_end_reason: string;
            detailedEndReason: string;
            duration: number;
            end_actor: Entity;
            endActor: Entity;
            end_reason: number;
            endReason: number;
        }
    }

    /**
     * An object representing a call log event.
     */
    class CallEvent extends Event {
        static $gtype: GObject.GType<CallEvent>;

        // Properties

        get detailed_end_reason(): string;
        get detailedEndReason(): string;
        get duration(): number;
        get end_actor(): Entity;
        get endActor(): Entity;
        get end_reason(): number;
        get endReason(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CallEvent.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CallEvent.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof CallEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CallEvent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CallEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CallEvent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CallEvent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CallEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_detailed_end_reason(): string;
        get_duration(): GLib.TimeSpan;
        get_end_actor(): Entity;
        get_end_reason(): TelepathyGLib.CallStateChangeReason;
    }

    namespace Entity {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::alias': (pspec: GObject.ParamSpec) => void;
            'notify::avatar-token': (pspec: GObject.ParamSpec) => void;
            'notify::identifier': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            alias: string;
            avatar_token: string;
            avatarToken: string;
            identifier: string;
            type: number;
        }
    }

    /**
     * An object representing a contact or room.
     */
    class Entity extends GObject.Object {
        static $gtype: GObject.GType<Entity>;

        // Properties

        /**
         * The entity's alias
         */
        get alias(): string;
        /**
         * The entity's avatar token
         */
        get avatar_token(): string;
        /**
         * The entity's avatar token
         */
        get avatarToken(): string;
        /**
         * The entity's identifier
         */
        get identifier(): string;
        /**
         * The entity's type (see #TplEntityType).
         */
        get type(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Entity.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Entity.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, type: EntityType, alias: string, avatar_token: string): Entity;

        static new_from_room_id(room_id: string): Entity;

        static new_from_tp_contact(contact: TelepathyGLib.Contact, type: EntityType): Entity;

        // Signals

        connect<K extends keyof Entity.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Entity.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Entity.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Entity.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Entity.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Entity.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_alias(): string;
        get_avatar_token(): string;
        get_entity_type(): EntityType;
        get_identifier(): string;
    }

    namespace Event {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::account': (pspec: GObject.ParamSpec) => void;
            'notify::account-path': (pspec: GObject.ParamSpec) => void;
            'notify::channel-path': (pspec: GObject.ParamSpec) => void;
            'notify::receiver': (pspec: GObject.ParamSpec) => void;
            'notify::sender': (pspec: GObject.ParamSpec) => void;
            'notify::timestamp': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            account: TelepathyGLib.Account;
            account_path: string;
            accountPath: string;
            channel_path: string;
            channelPath: string;
            receiver: Entity;
            sender: Entity;
            timestamp: number;
        }
    }

    /**
     * An object representing a generic log event.
     */
    abstract class Event extends GObject.Object {
        static $gtype: GObject.GType<Event>;

        // Properties

        get account(): TelepathyGLib.Account;
        get account_path(): string;
        get accountPath(): string;
        get channel_path(): string;
        get channelPath(): string;
        get receiver(): Entity;
        get sender(): Entity;
        get timestamp(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Event.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Event.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Event.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Event.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Event.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Event.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Event.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Event.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Checks if two instances of TplEvent represent the same data
         * @param data an instance of the same TplEvent subclass of @self
         * @returns %TRUE if @data is the same type of @self and they hold the same data, %FALSE otherwise
         */
        equal(data: Event): boolean;
        /**
         * <!-- no more to say -->
         * @returns the same account as the #TplEvent:account property
         */
        get_account(): TelepathyGLib.Account;
        /**
         * <!-- no more to say -->
         * @returns the path as the #TplEvent:account property
         */
        get_account_path(): string;
        get_receiver(): Entity;
        get_sender(): Entity;
        get_timestamp(): number;
    }

    namespace LogManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * An object used to access logs
     */
    class LogManager extends GObject.Object {
        static $gtype: GObject.GType<LogManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LogManager.SignalSignatures;

        // Fields

        priv: any;

        // Constructors

        constructor(properties?: Partial<LogManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof LogManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LogManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LogManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LogManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LogManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LogManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static dup_singleton(): LogManager;
        static errors_quark(): GLib.Quark;

        // Methods

        /**
         * Disables logging of events for given entity. By default logging is enabled
         * for all entities.
         * @param account
         * @param entity
         */
        disable_for_entity(account: TelepathyGLib.Account, entity: Entity): void;
        /**
         * Re-enables logging of events for entity previously disabled by
         * tpl_log_manager_disable_for_entity(). By default logging is enabled for all
         * entities.
         * @param account
         * @param entity a TplEntity
         */
        enable_for_entity(account: TelepathyGLib.Account, entity: Entity): void;
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
         */
        get_dates_async(
            account: TelepathyGLib.Account,
            target: Entity,
            type_mask: number,
        ): globalThis.Promise<GLib.Date[]>;
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
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        ): globalThis.Promise<GLib.Date[]> | void;
        get_dates_finish(result: Gio.AsyncResult): [boolean, GLib.Date[]];
        /**
         * Start a query looking for all entities for which you have logs in the `account`.
         * @param account a #TpAccount
         */
        get_entities_async(account: TelepathyGLib.Account): globalThis.Promise<Entity[]>;
        /**
         * Start a query looking for all entities for which you have logs in the `account`.
         * @param account a #TpAccount
         * @param callback a callback to call when the request is satisfied
         */
        get_entities_async(account: TelepathyGLib.Account, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Start a query looking for all entities for which you have logs in the `account`.
         * @param account a #TpAccount
         * @param callback a callback to call when the request is satisfied
         */
        get_entities_async(
            account: TelepathyGLib.Account,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Entity[]> | void;
        get_entities_finish(result: Gio.AsyncResult): [boolean, Entity[]];
        /**
         * Retrieve a list of #TplEvent at `date` with `target`.
         * @param account a #TpAccount
         * @param target a non-NULL #TplEntity
         * @param type_mask event type filter see #TplEventTypeMask
         * @param date a #GDate
         */
        get_events_for_date_async(
            account: TelepathyGLib.Account,
            target: Entity,
            type_mask: number,
            date: GLib.Date,
        ): globalThis.Promise<Event[]>;
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
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        ): globalThis.Promise<Event[]> | void;
        get_events_for_date_finish(result: Gio.AsyncResult): [boolean, Event[]];
        /**
         * Retrieve the most recent `num_event` events exchanged with `target`.
         * @param account a #TpAccount
         * @param target a non-NULL #TplEntity
         * @param type_mask event type filter see #TplEventTypeMask
         * @param num_events number of maximum events to fetch
         * @param filter an optional filter function
         */
        get_filtered_events_async(
            account: TelepathyGLib.Account,
            target: Entity,
            type_mask: number,
            num_events: number,
            filter?: LogEventFilter | null,
        ): globalThis.Promise<Event[]>;
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
            filter: LogEventFilter | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        ): globalThis.Promise<Event[]> | void;
        get_filtered_events_finish(result: Gio.AsyncResult): [boolean, Event[]];
        /**
         * Checks, whether logging is disabled for given entity. By default, logging
         * is enabled for all entities.
         * @param account
         * @param entity a TplEntity
         * @returns %TRUE if logging for the entity has been disabled, %FALSE otherwise.
         */
        is_disabled_for_entity(account: TelepathyGLib.Account, entity: Entity): boolean;
        /**
         * Search for all the conversations containing `text`.
         * @param text the pattern to search
         * @param type_mask event type filter see #TplEventTypeMask
         */
        search_async(text: string, type_mask: number): globalThis.Promise<LogSearchHit[]>;
        /**
         * Search for all the conversations containing `text`.
         * @param text the pattern to search
         * @param type_mask event type filter see #TplEventTypeMask
         * @param callback a callback to call when the request is satisfied
         */
        search_async(text: string, type_mask: number, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Search for all the conversations containing `text`.
         * @param text the pattern to search
         * @param type_mask event type filter see #TplEventTypeMask
         * @param callback a callback to call when the request is satisfied
         */
        search_async(
            text: string,
            type_mask: number,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<LogSearchHit[]> | void;
        search_finish(result: Gio.AsyncResult): [boolean, LogSearchHit[]];
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

    namespace LogWalker {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::filter': (pspec: GObject.ParamSpec) => void;
            'notify::filter-data': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            filter: any;
            filter_data: any;
            filterData: any;
        }
    }

    /**
     * An object used to iterate over the logs
     */
    class LogWalker extends GObject.Object {
        static $gtype: GObject.GType<LogWalker>;

        // Properties

        get filter(): any;
        get filter_data(): any;
        get filterData(): any;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LogWalker.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LogWalker.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof LogWalker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LogWalker.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LogWalker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LogWalker.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LogWalker.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LogWalker.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Walk the logs to retrieve the next most recent `num_event` events.
         * @param num_events number of maximum events to fetch
         */
        get_events_async(num_events: number): globalThis.Promise<Event[]>;
        /**
         * Walk the logs to retrieve the next most recent `num_event` events.
         * @param num_events number of maximum events to fetch
         * @param callback a callback to call when the request is satisfied
         */
        get_events_async(num_events: number, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Walk the logs to retrieve the next most recent `num_event` events.
         * @param num_events number of maximum events to fetch
         * @param callback a callback to call when the request is satisfied
         */
        get_events_async(
            num_events: number,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Event[]> | void;
        get_events_finish(result: Gio.AsyncResult): [boolean, Event[]];
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
         */
        rewind_async(num_events: number): globalThis.Promise<boolean>;
        /**
         * Move the `walker` back by the last `num_event` events that were
         * returned by tpl_log_walker_get_events_async().
         * @param num_events number of events to move back
         * @param callback a callback to call when the request is satisfied
         */
        rewind_async(num_events: number, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Move the `walker` back by the last `num_event` events that were
         * returned by tpl_log_walker_get_events_async().
         * @param num_events number of events to move back
         * @param callback a callback to call when the request is satisfied
         */
        rewind_async(
            num_events: number,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        rewind_finish(result: Gio.AsyncResult): boolean;
    }

    namespace TextEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {
            'notify::edit-timestamp': (pspec: GObject.ParamSpec) => void;
            'notify::message': (pspec: GObject.ParamSpec) => void;
            'notify::message-token': (pspec: GObject.ParamSpec) => void;
            'notify::message-type': (pspec: GObject.ParamSpec) => void;
            'notify::supersedes-token': (pspec: GObject.ParamSpec) => void;
            'notify::account': (pspec: GObject.ParamSpec) => void;
            'notify::account-path': (pspec: GObject.ParamSpec) => void;
            'notify::channel-path': (pspec: GObject.ParamSpec) => void;
            'notify::receiver': (pspec: GObject.ParamSpec) => void;
            'notify::sender': (pspec: GObject.ParamSpec) => void;
            'notify::timestamp': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Event.ConstructorProps {
            edit_timestamp: number;
            editTimestamp: number;
            message: string;
            message_token: string;
            messageToken: string;
            message_type: number;
            messageType: number;
            supersedes_token: string;
            supersedesToken: string;
        }
    }

    /**
     * An object representing a text log event.
     */
    class TextEvent extends Event {
        static $gtype: GObject.GType<TextEvent>;

        // Properties

        get edit_timestamp(): number;
        get editTimestamp(): number;
        get message(): string;
        get message_token(): string;
        get messageToken(): string;
        get message_type(): number;
        get messageType(): number;
        get supersedes_token(): string;
        get supersedesToken(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TextEvent.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TextEvent.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof TextEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TextEvent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TextEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TextEvent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TextEvent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TextEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_edit_timestamp(): number;
        get_message(): string;
        get_message_token(): string;
        get_message_type(): TelepathyGLib.ChannelTextMessageType;
        get_supersedes(): TextEvent[];
        get_supersedes_token(): string;
    }

    type CallEventClass = typeof CallEvent;
    abstract class CallEventPriv {
        static $gtype: GObject.GType<CallEventPriv>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class EntityPriv {
        static $gtype: GObject.GType<EntityPriv>;

        // Constructors

        _init(...args: any[]): void;
    }

    type EventClass = typeof Event;
    abstract class EventPriv {
        static $gtype: GObject.GType<EventPriv>;

        // Constructors

        _init(...args: any[]): void;
    }

    type LogManagerClass = typeof LogManager;
    /**
     * Represent the context where the search has results.
     */
    class LogSearchHit {
        static $gtype: GObject.GType<LogSearchHit>;

        // Fields

        account: TelepathyGLib.Account;
        target: Entity;
        date: GLib.Date;

        // Constructors

        _init(...args: any[]): void;
    }

    type LogWalkerClass = typeof LogWalker;
    abstract class LogWalkerPriv {
        static $gtype: GObject.GType<LogWalkerPriv>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TextEventClass = typeof TextEvent;
    abstract class TextEventPriv {
        static $gtype: GObject.GType<TextEventPriv>;

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

export default TelepathyLogger;

// END
