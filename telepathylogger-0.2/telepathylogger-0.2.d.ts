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

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    enum LogManagerError {
        /**
         * Error return when adding logs fails
         */
        LOG_MANAGER_ERROR_ADD_EVENT,
    }

    /**
     * @gir-type Callback
     */
    interface LogEventFilter {
        (event: Event): boolean;
    }
    /**
     * Mask used to filter type of {@link TelepathyLogger.Event} returned.
     * @gir-type Flags
     */
    enum EventTypeMask {
        /**
         * Mask to {@link TelepathyLogger.TextEvent}
         */
        TEXT,
        /**
         * Mask to {@link TelepathyLogger.CallEvent}
         */
        CALL,
        /**
         * Special value to select all type of {@link TelepathyLogger.Event}
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
     * @gir-type Class
     */
    class CallEvent extends Event {
        static $gtype: GObject.GType<CallEvent>;

        // Properties

        /**
         * @construct-only
         */
        get detailed_end_reason(): string;
        /**
         * @construct-only
         */
        get detailedEndReason(): string;
        /**
         * @construct-only
         */
        get duration(): number;
        /**
         * @construct-only
         */
        get end_actor(): Entity;
        /**
         * @construct-only
         */
        get endActor(): Entity;
        /**
         * @construct-only
         */
        get end_reason(): number;
        /**
         * @construct-only
         */
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

        /** @signal */
        connect<K extends keyof CallEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CallEvent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CallEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CallEvent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CallEvent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CallEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the same string as the          {@link TelepathyLogger.CallEvent.detailed_end_reason} property
         */
        get_detailed_end_reason(): string;
        /**
         * @returns the same duration as the {@link TelepathyLogger.CallEvent.duration} property
         */
        get_duration(): GLib.TimeSpan;
        /**
         * @returns the same {@link TelepathyLogger.Entity}          as {@link TelepathyLogger.CallEvent.end_actor} property
         */
        get_end_actor(): Entity;
        /**
         * @returns the same {@link TelepathyGLib.CallStateChangeReason} as {@link TelepathyLogger.CallEvent.end_reason} property
         */
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
     * @gir-type Class
     */
    class Entity extends GObject.Object {
        static $gtype: GObject.GType<Entity>;

        // Properties

        /**
         * The entity's alias
         * @construct-only
         */
        get alias(): string;
        /**
         * The entity's avatar token
         * @construct-only
         */
        get avatar_token(): string;
        /**
         * The entity's avatar token
         * @construct-only
         */
        get avatarToken(): string;
        /**
         * The entity's identifier
         * @construct-only
         */
        get identifier(): string;
        /**
         * The entity's type (see {@link TelepathyLogger.EntityType}).
         * @construct-only
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

        /** @signal */
        connect<K extends keyof Entity.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Entity.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Entity.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Entity.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Entity.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Entity.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the alias of the entity, or `null`
         */
        get_alias(): string;
        /**
         * @returns a token representing the avatar of the token, or `null`
         */
        get_avatar_token(): string;
        /**
         * @returns the type of the entity
         */
        get_entity_type(): EntityType;
        /**
         * @returns the identifier of the entity
         */
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
     * @gir-type Class
     */
    abstract class Event extends GObject.Object {
        static $gtype: GObject.GType<Event>;

        // Properties

        /**
         * @construct-only
         */
        get account(): TelepathyGLib.Account;
        /**
         * @read-only
         */
        get account_path(): string;
        /**
         * @read-only
         */
        get accountPath(): string;
        /**
         * @construct-only
         */
        get channel_path(): string;
        /**
         * @construct-only
         */
        get channelPath(): string;
        /**
         * @construct-only
         */
        get receiver(): Entity;
        /**
         * @construct-only
         */
        get sender(): Entity;
        /**
         * @construct-only
         */
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

        /** @signal */
        connect<K extends keyof Event.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Event.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Event.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Event.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Event.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Event.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Checks if two instances of TplEvent represent the same data
         * @param data an instance of the same TplEvent subclass of `self`
         * @returns `true` if `data` is the same type of `self` and they hold the same data, `false` otherwise
         */
        equal(data: Event): boolean;
        /**
         * <!-- no more to say -->
         * @returns the same account as the {@link TelepathyLogger.Event.account} property
         */
        get_account(): TelepathyGLib.Account;
        /**
         * <!-- no more to say -->
         * @returns the path as the {@link TelepathyLogger.Event.account} property
         */
        get_account_path(): string;
        /**
         * @returns the same {@link TelepathyLogger.Entity} as the {@link TelepathyLogger.Event.receiver} property
         */
        get_receiver(): Entity;
        /**
         * @returns the same {@link TelepathyLogger.Entity} as the {@link TelepathyLogger.Event.sender} property
         */
        get_sender(): Entity;
        /**
         * @returns the same timestamp as the {@link TelepathyLogger.Event.timestamp} property
         */
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
     * @gir-type Class
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

        /** @signal */
        connect<K extends keyof LogManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LogManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LogManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LogManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
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
         * `tpl_log_manager_disable_for_entity()`. By default logging is enabled for all
         * entities.
         * @param account
         * @param entity a TplEntity
         */
        enable_for_entity(account: TelepathyGLib.Account, entity: Entity): void;
        /**
         * Checks if logs exist for `target`.
         *
         * It applies for any registered TplLogStore with the TplLogStore:readable
         * property `true`.
         * @param account TpAccount
         * @param target a non-NULL {@link TelepathyLogger.Entity}
         * @param type_mask event type filter see {@link TelepathyLogger.EventTypeMask}
         * @returns `true` logs exist for `target`, otherwise `false`
         */
        exists(account: TelepathyGLib.Account, target: Entity, type_mask: number): boolean;
        /**
         * Retrieves a list of {@link GLib.Date} corresponding to each day where
         * at least one event exist for `target`.
         *
         * It applies for any registered TplLogStore with the TplLogStore:readable
         * property `true`.
         * @param account a {@link TelepathyGLib.Account}
         * @param target a non-NULL {@link TelepathyLogger.Entity}
         * @param type_mask event type filter see {@link TelepathyLogger.EventTypeMask}
         */
        get_dates_async(
            account: TelepathyGLib.Account,
            target: Entity,
            type_mask: number,
        ): globalThis.Promise<GLib.Date[]>;
        /**
         * Retrieves a list of {@link GLib.Date} corresponding to each day where
         * at least one event exist for `target`.
         *
         * It applies for any registered TplLogStore with the TplLogStore:readable
         * property `true`.
         * @param account a {@link TelepathyGLib.Account}
         * @param target a non-NULL {@link TelepathyLogger.Entity}
         * @param type_mask event type filter see {@link TelepathyLogger.EventTypeMask}
         * @param callback a callback to call when the request is satisfied
         */
        get_dates_async(
            account: TelepathyGLib.Account,
            target: Entity,
            type_mask: number,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Retrieves a list of {@link GLib.Date} corresponding to each day where
         * at least one event exist for `target`.
         *
         * It applies for any registered TplLogStore with the TplLogStore:readable
         * property `true`.
         * @param account a {@link TelepathyGLib.Account}
         * @param target a non-NULL {@link TelepathyLogger.Entity}
         * @param type_mask event type filter see {@link TelepathyLogger.EventTypeMask}
         * @param callback a callback to call when the request is satisfied
         */
        get_dates_async(
            account: TelepathyGLib.Account,
            target: Entity,
            type_mask: number,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<GLib.Date[]> | void;
        /**
         * @param result a {@link Gio.AsyncResult}
         * @returns `TRUE` if the operation was successful, otherwise `FALSE`
         */
        get_dates_finish(result: Gio.AsyncResult): [boolean, GLib.Date[]];
        /**
         * Start a query looking for all entities for which you have logs in the `account`.
         * @param account a {@link TelepathyGLib.Account}
         */
        get_entities_async(account: TelepathyGLib.Account): globalThis.Promise<Entity[]>;
        /**
         * Start a query looking for all entities for which you have logs in the `account`.
         * @param account a {@link TelepathyGLib.Account}
         * @param callback a callback to call when the request is satisfied
         */
        get_entities_async(account: TelepathyGLib.Account, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Start a query looking for all entities for which you have logs in the `account`.
         * @param account a {@link TelepathyGLib.Account}
         * @param callback a callback to call when the request is satisfied
         */
        get_entities_async(
            account: TelepathyGLib.Account,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Entity[]> | void;
        /**
         * @param result a {@link Gio.AsyncResult}
         * @returns `TRUE` if the operation was successful, otherwise `FALSE`
         */
        get_entities_finish(result: Gio.AsyncResult): [boolean, Entity[]];
        /**
         * Retrieve a list of {@link TelepathyLogger.Event} at `date` with `target`.
         * @param account a {@link TelepathyGLib.Account}
         * @param target a non-NULL {@link TelepathyLogger.Entity}
         * @param type_mask event type filter see {@link TelepathyLogger.EventTypeMask}
         * @param date a {@link GLib.Date}
         */
        get_events_for_date_async(
            account: TelepathyGLib.Account,
            target: Entity,
            type_mask: number,
            date: GLib.Date,
        ): globalThis.Promise<Event[]>;
        /**
         * Retrieve a list of {@link TelepathyLogger.Event} at `date` with `target`.
         * @param account a {@link TelepathyGLib.Account}
         * @param target a non-NULL {@link TelepathyLogger.Entity}
         * @param type_mask event type filter see {@link TelepathyLogger.EventTypeMask}
         * @param date a {@link GLib.Date}
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
         * Retrieve a list of {@link TelepathyLogger.Event} at `date` with `target`.
         * @param account a {@link TelepathyGLib.Account}
         * @param target a non-NULL {@link TelepathyLogger.Entity}
         * @param type_mask event type filter see {@link TelepathyLogger.EventTypeMask}
         * @param date a {@link GLib.Date}
         * @param callback a callback to call when the request is satisfied
         */
        get_events_for_date_async(
            account: TelepathyGLib.Account,
            target: Entity,
            type_mask: number,
            date: GLib.Date,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Event[]> | void;
        /**
         * @param result a {@link Gio.AsyncResult}
         * @returns `TRUE` if the operation was successful, otherwise `FALSE`
         */
        get_events_for_date_finish(result: Gio.AsyncResult): [boolean, Event[]];
        /**
         * Retrieve the most recent `num_event` events exchanged with `target`.
         * @param account a {@link TelepathyGLib.Account}
         * @param target a non-NULL {@link TelepathyLogger.Entity}
         * @param type_mask event type filter see {@link TelepathyLogger.EventTypeMask}
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
         * @param account a {@link TelepathyGLib.Account}
         * @param target a non-NULL {@link TelepathyLogger.Entity}
         * @param type_mask event type filter see {@link TelepathyLogger.EventTypeMask}
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
         * @param account a {@link TelepathyGLib.Account}
         * @param target a non-NULL {@link TelepathyLogger.Entity}
         * @param type_mask event type filter see {@link TelepathyLogger.EventTypeMask}
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
        /**
         * @param result a {@link Gio.AsyncResult}
         * @returns `TRUE` if the operation was successful, otherwise `FALSE`.
         */
        get_filtered_events_finish(result: Gio.AsyncResult): [boolean, Event[]];
        /**
         * Checks, whether logging is disabled for given entity. By default, logging
         * is enabled for all entities.
         * @param account
         * @param entity a TplEntity
         * @returns `true` if logging for the entity has been disabled, `false` otherwise.
         */
        is_disabled_for_entity(account: TelepathyGLib.Account, entity: Entity): boolean;
        /**
         * Search for all the conversations containing `text`.
         * @param text the pattern to search
         * @param type_mask event type filter see {@link TelepathyLogger.EventTypeMask}
         */
        search_async(text: string, type_mask: number): globalThis.Promise<LogSearchHit[]>;
        /**
         * Search for all the conversations containing `text`.
         * @param text the pattern to search
         * @param type_mask event type filter see {@link TelepathyLogger.EventTypeMask}
         * @param callback a callback to call when the request is satisfied
         */
        search_async(text: string, type_mask: number, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Search for all the conversations containing `text`.
         * @param text the pattern to search
         * @param type_mask event type filter see {@link TelepathyLogger.EventTypeMask}
         * @param callback a callback to call when the request is satisfied
         */
        search_async(
            text: string,
            type_mask: number,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<LogSearchHit[]> | void;
        /**
         * @param result a {@link Gio.AsyncResult}
         * @returns `TRUE` if the operation was successful, otherwise `FALSE`
         */
        search_finish(result: Gio.AsyncResult): [boolean, LogSearchHit[]];
        /**
         * Create a {@link TelepathyLogger.LogWalker} to traverse all the events exchanged with `target`.
         * @param account a {@link TelepathyGLib.Account}
         * @param target a non-NULL {@link TelepathyLogger.Entity}
         * @param type_mask event type filter see {@link TelepathyLogger.EventTypeMask}
         * @param filter an optional filter function
         * @returns a {@link TelepathyLogger.LogWalker}
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
     * @gir-type Class
     * @since 0.8.0
     */
    class LogWalker extends GObject.Object {
        static $gtype: GObject.GType<LogWalker>;

        // Properties

        /**
         * @construct-only
         */
        get filter(): any;
        /**
         * @construct-only
         */
        get filter_data(): any;
        /**
         * @construct-only
         */
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

        /** @signal */
        connect<K extends keyof LogWalker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LogWalker.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LogWalker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LogWalker.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
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
        /**
         * @param result a {@link Gio.AsyncResult}
         * @returns `TRUE` if the operation was successful, otherwise `FALSE`.
         */
        get_events_finish(result: Gio.AsyncResult): [boolean, Event[]];
        /**
         * Determines whether `walker` has run out of events. This is the case
         * when `walker` has returned all the events from the logs.
         * @returns `TRUE` if `walker` has run out of events, otherwise `FALSE`.
         */
        is_end(): boolean;
        /**
         * Determines whether `walker` is pointing at the most recent event in
         * the logs. This is the case when `walker` has not yet returned any
         * events or has been rewound completely.
         * @returns `TRUE` if `walker` is pointing at the most recent event, otherwise `FALSE`.
         */
        is_start(): boolean;
        /**
         * Move the `walker` back by the last `num_event` events that were
         * returned by `tpl_log_walker_get_events_async()`.
         * @param num_events number of events to move back
         */
        rewind_async(num_events: number): globalThis.Promise<boolean>;
        /**
         * Move the `walker` back by the last `num_event` events that were
         * returned by `tpl_log_walker_get_events_async()`.
         * @param num_events number of events to move back
         * @param callback a callback to call when the request is satisfied
         */
        rewind_async(num_events: number, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Move the `walker` back by the last `num_event` events that were
         * returned by `tpl_log_walker_get_events_async()`.
         * @param num_events number of events to move back
         * @param callback a callback to call when the request is satisfied
         */
        rewind_async(
            num_events: number,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result a {@link Gio.AsyncResult}
         * @returns `TRUE` if the operation was successful, otherwise `FALSE`.
         */
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
     * @gir-type Class
     */
    class TextEvent extends Event {
        static $gtype: GObject.GType<TextEvent>;

        // Properties

        /**
         * @construct-only
         */
        get edit_timestamp(): number;
        /**
         * @construct-only
         */
        get editTimestamp(): number;
        /**
         * @construct-only
         */
        get message(): string;
        /**
         * @construct-only
         */
        get message_token(): string;
        /**
         * @construct-only
         */
        get messageToken(): string;
        /**
         * @construct-only
         */
        get message_type(): number;
        /**
         * @construct-only
         */
        get messageType(): number;
        /**
         * @construct-only
         */
        get supersedes_token(): string;
        /**
         * @construct-only
         */
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

        /** @signal */
        connect<K extends keyof TextEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TextEvent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TextEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TextEvent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TextEvent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TextEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the same value as the {@link TelepathyLogger.TextEvent.edit_timestamp} property
         */
        get_edit_timestamp(): number;
        /**
         * @returns the same message as the {@link TelepathyLogger.TextEvent.message} property
         */
        get_message(): string;
        /**
         * @returns the same message as the {@link TelepathyLogger.TextEvent.message_token} property
         */
        get_message_token(): string;
        /**
         * @returns the same message as the {@link TelepathyLogger.TextEvent.message_type} property
         */
        get_message_type(): TelepathyGLib.ChannelTextMessageType;
        /**
         * @returns A {@link GLib.List}  of {@link TelepathyLogger.TextEvent} that this event supersedes.
         */
        get_supersedes(): TextEvent[];
        /**
         * @returns the same message as the {@link TelepathyLogger.TextEvent.supersedes_token} property
         */
        get_supersedes_token(): string;
    }

    /**
     * @gir-type Alias
     */
    type CallEventClass = typeof CallEvent;
    /**
     * @gir-type Struct
     */
    abstract class CallEventPriv {
        static $gtype: GObject.GType<CallEventPriv>;
    }

    /**
     * @gir-type Struct
     */
    abstract class EntityPriv {
        static $gtype: GObject.GType<EntityPriv>;
    }

    /**
     * @gir-type Alias
     */
    type EventClass = typeof Event;
    /**
     * @gir-type Struct
     */
    abstract class EventPriv {
        static $gtype: GObject.GType<EventPriv>;
    }

    /**
     * @gir-type Alias
     */
    type LogManagerClass = typeof LogManager;
    /**
     * Represent the context where the search has results.
     * @gir-type Struct
     */
    class LogSearchHit {
        static $gtype: GObject.GType<LogSearchHit>;

        // Fields

        account: TelepathyGLib.Account;
        target: Entity;
        date: GLib.Date;
    }

    /**
     * @gir-type Alias
     */
    type LogWalkerClass = typeof LogWalker;
    /**
     * @gir-type Struct
     */
    abstract class LogWalkerPriv {
        static $gtype: GObject.GType<LogWalkerPriv>;
    }

    /**
     * @gir-type Alias
     */
    type TextEventClass = typeof TextEvent;
    /**
     * @gir-type Struct
     */
    abstract class TextEventPriv {
        static $gtype: GObject.GType<TextEventPriv>;
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
