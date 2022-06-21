// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * TelepathyLogger-0.2
 */

import type * as Gjs from './Gjs';
import type TelepathyGLib from './TelepathyGLib-0.12';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

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
/**
 * Mask used to filter type of #TplEvent returned.
 * @bitfield 
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
interface LogEventFilter {
    (event: Event): boolean
}
interface CallEvent_ConstructProps extends Event_ConstructProps {

    // Own constructor properties of TelepathyLogger-0.2.TelepathyLogger.CallEvent

    detailed_end_reason?: string | null
    duration?: number | null
    end_actor?: Entity | null
    end_reason?: number | null
}

interface CallEvent {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.CallEvent

    readonly detailed_end_reason: string
    readonly duration: number
    readonly end_actor: Entity
    readonly end_reason: number

    // Owm methods of TelepathyLogger-0.2.TelepathyLogger.CallEvent

    get_detailed_end_reason(): string
    get_duration(): GLib.TimeSpan
    get_end_actor(): Entity
    get_end_reason(): TelepathyGLib.CallStateChangeReason

    // Class property signals of TelepathyLogger-0.2.TelepathyLogger.CallEvent

    connect(sigName: "notify::detailed-end-reason", callback: (($obj: CallEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::detailed-end-reason", callback: (($obj: CallEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::detailed-end-reason", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (($obj: CallEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: CallEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::end-actor", callback: (($obj: CallEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-actor", callback: (($obj: CallEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end-actor", ...args: any[]): void
    connect(sigName: "notify::end-reason", callback: (($obj: CallEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-reason", callback: (($obj: CallEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end-reason", ...args: any[]): void
    connect(sigName: "notify::account", callback: (($obj: CallEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account", callback: (($obj: CallEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::account-path", callback: (($obj: CallEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account-path", callback: (($obj: CallEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::account-path", ...args: any[]): void
    connect(sigName: "notify::channel-path", callback: (($obj: CallEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel-path", callback: (($obj: CallEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-path", ...args: any[]): void
    connect(sigName: "notify::receiver", callback: (($obj: CallEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receiver", callback: (($obj: CallEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receiver", ...args: any[]): void
    connect(sigName: "notify::sender", callback: (($obj: CallEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sender", callback: (($obj: CallEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sender", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (($obj: CallEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: CallEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object representing a call log event.
 * @class 
 */
class CallEvent extends Event {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.CallEvent

    static name: string
    static $gtype: GObject.GType<CallEvent>

    // Constructors of TelepathyLogger-0.2.TelepathyLogger.CallEvent

    constructor(config?: CallEvent_ConstructProps) 
    _init(config?: CallEvent_ConstructProps): void
}

interface Entity_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of TelepathyLogger-0.2.TelepathyLogger.Entity

    /**
     * The entity's alias
     */
    alias?: string | null
    /**
     * The entity's avatar token
     */
    avatar_token?: string | null
    /**
     * The entity's identifier
     */
    identifier?: string | null
    /**
     * The entity's type (see #TplEntityType).
     */
    type?: number | null
}

interface Entity {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.Entity

    /**
     * The entity's alias
     */
    readonly alias: string
    /**
     * The entity's avatar token
     */
    readonly avatar_token: string
    /**
     * The entity's identifier
     */
    readonly identifier: string
    /**
     * The entity's type (see #TplEntityType).
     */
    readonly type: number

    // Own fields of TelepathyLogger-0.2.TelepathyLogger.Entity

    parent: GObject.Object
    priv: EntityPriv

    // Owm methods of TelepathyLogger-0.2.TelepathyLogger.Entity

    get_alias(): string
    get_avatar_token(): string
    get_entity_type(): EntityType
    get_identifier(): string

    // Class property signals of TelepathyLogger-0.2.TelepathyLogger.Entity

    connect(sigName: "notify::alias", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alias", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alias", ...args: any[]): void
    connect(sigName: "notify::avatar-token", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar-token", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::avatar-token", ...args: any[]): void
    connect(sigName: "notify::identifier", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identifier", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::identifier", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object representing a contact or room.
 * @class 
 */
class Entity extends GObject.Object {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.Entity

    static name: string
    static $gtype: GObject.GType<Entity>

    // Constructors of TelepathyLogger-0.2.TelepathyLogger.Entity

    constructor(config?: Entity_ConstructProps) 
    constructor(id: string, type: EntityType, alias: string, avatar_token: string) 
    static new(id: string, type: EntityType, alias: string, avatar_token: string): Entity
    static new_from_room_id(room_id: string): Entity
    static new_from_tp_contact(contact: TelepathyGLib.Contact, type: EntityType): Entity
    _init(config?: Entity_ConstructProps): void
}

interface Event_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of TelepathyLogger-0.2.TelepathyLogger.Event

    account?: TelepathyGLib.Account | null
    channel_path?: string | null
    receiver?: Entity | null
    sender?: Entity | null
    timestamp?: number | null
}

interface Event {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.Event

    readonly account: TelepathyGLib.Account
    readonly account_path: string
    readonly channel_path: string
    readonly receiver: Entity
    readonly sender: Entity
    readonly timestamp: number

    // Owm methods of TelepathyLogger-0.2.TelepathyLogger.Event

    /**
     * Checks if two instances of TplEvent represent the same data
     * @param data an instance of the same TplEvent subclass of `self`
     */
    equal(data: Event): boolean
    /**
     * <!-- no more to say -->
     */
    get_account(): TelepathyGLib.Account
    /**
     * <!-- no more to say -->
     */
    get_account_path(): string
    get_receiver(): Entity
    get_sender(): Entity
    get_timestamp(): number

    // Class property signals of TelepathyLogger-0.2.TelepathyLogger.Event

    connect(sigName: "notify::account", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::account-path", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account-path", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::account-path", ...args: any[]): void
    connect(sigName: "notify::channel-path", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel-path", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-path", ...args: any[]): void
    connect(sigName: "notify::receiver", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receiver", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receiver", ...args: any[]): void
    connect(sigName: "notify::sender", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sender", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sender", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object representing a generic log event.
 * @class 
 */
class Event extends GObject.Object {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.Event

    static name: string
    static $gtype: GObject.GType<Event>

    // Constructors of TelepathyLogger-0.2.TelepathyLogger.Event

    constructor(config?: Event_ConstructProps) 
    _init(config?: Event_ConstructProps): void
}

interface LogManager_ConstructProps extends GObject.Object_ConstructProps {
}

interface LogManager {

    // Own fields of TelepathyLogger-0.2.TelepathyLogger.LogManager

    parent: GObject.Object
    priv: object

    // Owm methods of TelepathyLogger-0.2.TelepathyLogger.LogManager

    /**
     * Disables logging of events for given entity. By default logging is enabled
     * for all entities.
     * @param account 
     * @param entity 
     */
    disable_for_entity(account: TelepathyGLib.Account, entity: Entity): void
    /**
     * Re-enables logging of events for entity previously disabled by
     * tpl_log_manager_disable_for_entity(). By default logging is enabled for all
     * entities.
     * @param account 
     * @param entity a TplEntity
     */
    enable_for_entity(account: TelepathyGLib.Account, entity: Entity): void
    /**
     * Checks if logs exist for `target`.
     * 
     * It applies for any registered TplLogStore with the TplLogStore:readable
     * property %TRUE.
     * @param account TpAccount
     * @param target a non-NULL #TplEntity
     * @param type_mask event type filter see #TplEventTypeMask
     */
    exists(account: TelepathyGLib.Account, target: Entity, type_mask: number): boolean
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
    get_dates_async(account: TelepathyGLib.Account, target: Entity, type_mask: number, callback: Gio.AsyncReadyCallback | null): void
    get_dates_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* dates */ GLib.Date[] ]
    /**
     * Start a query looking for all entities for which you have logs in the `account`.
     * @param account a #TpAccount
     * @param callback a callback to call when the request is satisfied
     */
    get_entities_async(account: TelepathyGLib.Account, callback: Gio.AsyncReadyCallback | null): void
    get_entities_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* entities */ Entity[] ]
    /**
     * Retrieve a list of #TplEvent at `date` with `target`.
     * @param account a #TpAccount
     * @param target a non-NULL #TplEntity
     * @param type_mask event type filter see #TplEventTypeMask
     * @param date a #GDate
     * @param callback a callback to call when the request is satisfied
     */
    get_events_for_date_async(account: TelepathyGLib.Account, target: Entity, type_mask: number, date: GLib.Date, callback: Gio.AsyncReadyCallback | null): void
    get_events_for_date_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* events */ Event[] ]
    /**
     * Retrieve the most recent `num_event` events exchanged with `target`.
     * @param account a #TpAccount
     * @param target a non-NULL #TplEntity
     * @param type_mask event type filter see #TplEventTypeMask
     * @param num_events number of maximum events to fetch
     * @param filter an optional filter function
     * @param callback a callback to call when the request is satisfied
     */
    get_filtered_events_async(account: TelepathyGLib.Account, target: Entity, type_mask: number, num_events: number, filter: LogEventFilter | null, callback: Gio.AsyncReadyCallback | null): void
    get_filtered_events_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* events */ Event[] ]
    /**
     * Checks, whether logging is disabled for given entity. By default, logging
     * is enabled for all entities.
     * @param account 
     * @param entity a TplEntity
     */
    is_disabled_for_entity(account: TelepathyGLib.Account, entity: Entity): boolean
    /**
     * Search for all the conversations containing `text`.
     * @param text the pattern to search
     * @param type_mask event type filter see #TplEventTypeMask
     * @param callback a callback to call when the request is satisfied
     */
    search_async(text: string, type_mask: number, callback: Gio.AsyncReadyCallback | null): void
    search_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* hits */ LogSearchHit[] ]
    /**
     * Create a #TplLogWalker to traverse all the events exchanged with `target`.
     * @param account a #TpAccount
     * @param target a non-NULL #TplEntity
     * @param type_mask event type filter see #TplEventTypeMask
     * @param filter an optional filter function
     */
    walk_filtered_events(account: TelepathyGLib.Account, target: Entity, type_mask: number, filter: LogEventFilter | null): LogWalker

    // Class property signals of TelepathyLogger-0.2.TelepathyLogger.LogManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object used to access logs
 * @class 
 */
class LogManager extends GObject.Object {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.LogManager

    static name: string
    static $gtype: GObject.GType<LogManager>

    // Constructors of TelepathyLogger-0.2.TelepathyLogger.LogManager

    constructor(config?: LogManager_ConstructProps) 
    _init(config?: LogManager_ConstructProps): void
    static dup_singleton(): LogManager
    static errors_quark(): GLib.Quark
}

interface LogWalker_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of TelepathyLogger-0.2.TelepathyLogger.LogWalker

    filter?: object | null
    filter_data?: object | null
}

interface LogWalker {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.LogWalker

    readonly filter: object
    readonly filter_data: object

    // Own fields of TelepathyLogger-0.2.TelepathyLogger.LogWalker

    parent_instance: GObject.Object
    priv: LogWalkerPriv

    // Owm methods of TelepathyLogger-0.2.TelepathyLogger.LogWalker

    /**
     * Walk the logs to retrieve the next most recent `num_event` events.
     * @param num_events number of maximum events to fetch
     * @param callback a callback to call when the request is satisfied
     */
    get_events_async(num_events: number, callback: Gio.AsyncReadyCallback | null): void
    get_events_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* events */ Event[] ]
    /**
     * Determines whether `walker` has run out of events. This is the case
     * when `walker` has returned all the events from the logs.
     */
    is_end(): boolean
    /**
     * Determines whether `walker` is pointing at the most recent event in
     * the logs. This is the case when `walker` has not yet returned any
     * events or has been rewound completely.
     */
    is_start(): boolean
    /**
     * Move the `walker` back by the last `num_event` events that were
     * returned by tpl_log_walker_get_events_async().
     * @param num_events number of events to move back
     * @param callback a callback to call when the request is satisfied
     */
    rewind_async(num_events: number, callback: Gio.AsyncReadyCallback | null): void
    rewind_finish(result: Gio.AsyncResult): boolean

    // Class property signals of TelepathyLogger-0.2.TelepathyLogger.LogWalker

    connect(sigName: "notify::filter", callback: (($obj: LogWalker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: (($obj: LogWalker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filter", ...args: any[]): void
    connect(sigName: "notify::filter-data", callback: (($obj: LogWalker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-data", callback: (($obj: LogWalker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filter-data", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object used to iterate over the logs
 * @class 
 */
class LogWalker extends GObject.Object {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.LogWalker

    static name: string
    static $gtype: GObject.GType<LogWalker>

    // Constructors of TelepathyLogger-0.2.TelepathyLogger.LogWalker

    constructor(config?: LogWalker_ConstructProps) 
    _init(config?: LogWalker_ConstructProps): void
}

interface TextEvent_ConstructProps extends Event_ConstructProps {

    // Own constructor properties of TelepathyLogger-0.2.TelepathyLogger.TextEvent

    edit_timestamp?: number | null
    message?: string | null
    message_token?: string | null
    message_type?: number | null
    supersedes_token?: string | null
}

interface TextEvent {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.TextEvent

    readonly edit_timestamp: number
    readonly message: string
    readonly message_token: string
    readonly message_type: number
    readonly supersedes_token: string

    // Owm methods of TelepathyLogger-0.2.TelepathyLogger.TextEvent

    get_edit_timestamp(): number
    get_message(): string
    get_message_token(): string
    get_message_type(): TelepathyGLib.ChannelTextMessageType
    get_supersedes(): TextEvent[]
    get_supersedes_token(): string

    // Class property signals of TelepathyLogger-0.2.TelepathyLogger.TextEvent

    connect(sigName: "notify::edit-timestamp", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edit-timestamp", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::edit-timestamp", ...args: any[]): void
    connect(sigName: "notify::message", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: "notify::message-token", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-token", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message-token", ...args: any[]): void
    connect(sigName: "notify::message-type", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-type", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message-type", ...args: any[]): void
    connect(sigName: "notify::supersedes-token", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supersedes-token", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::supersedes-token", ...args: any[]): void
    connect(sigName: "notify::account", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::account-path", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account-path", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::account-path", ...args: any[]): void
    connect(sigName: "notify::channel-path", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel-path", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel-path", ...args: any[]): void
    connect(sigName: "notify::receiver", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receiver", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receiver", ...args: any[]): void
    connect(sigName: "notify::sender", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sender", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sender", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: TextEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object representing a text log event.
 * @class 
 */
class TextEvent extends Event {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.TextEvent

    static name: string
    static $gtype: GObject.GType<TextEvent>

    // Constructors of TelepathyLogger-0.2.TelepathyLogger.TextEvent

    constructor(config?: TextEvent_ConstructProps) 
    _init(config?: TextEvent_ConstructProps): void
}

interface CallEventClass {
}

abstract class CallEventClass {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.CallEventClass

    static name: string
}

interface CallEventPriv {
}

class CallEventPriv {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.CallEventPriv

    static name: string
}

interface EntityPriv {
}

class EntityPriv {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.EntityPriv

    static name: string
}

interface EventClass {
}

abstract class EventClass {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.EventClass

    static name: string
}

interface EventPriv {
}

class EventPriv {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.EventPriv

    static name: string
}

interface LogManagerClass {

    // Own fields of TelepathyLogger-0.2.TelepathyLogger.LogManagerClass

    parent_class: GObject.ObjectClass
}

abstract class LogManagerClass {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.LogManagerClass

    static name: string
}

interface LogSearchHit {

    // Own fields of TelepathyLogger-0.2.TelepathyLogger.LogSearchHit

    /**
     * the #TpAccount
     * @field 
     */
    account: TelepathyGLib.Account
    /**
     * the #TplEntity
     * @field 
     */
    target: Entity
    /**
     * the #GDate
     * @field 
     */
    date: GLib.Date
}

/**
 * Represent the context where the search has results.
 * @record 
 */
class LogSearchHit {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.LogSearchHit

    static name: string
}

interface LogWalkerClass {
}

abstract class LogWalkerClass {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.LogWalkerClass

    static name: string
}

interface LogWalkerPriv {
}

class LogWalkerPriv {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.LogWalkerPriv

    static name: string
}

interface TextEventClass {
}

abstract class TextEventClass {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.TextEventClass

    static name: string
}

interface TextEventPriv {
}

class TextEventPriv {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.TextEventPriv

    static name: string
}

}
export default TelepathyLogger;