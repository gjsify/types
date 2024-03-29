
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-telepathylogger-0.2-import.d.ts';
    
/**
 * TelepathyLogger-0.2
 */

import type TelepathyGLib from '@girs/node-telepathyglib-0.12';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export enum EntityType {
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
export enum LogManagerError {
    /**
     * Error return when adding logs fails
     */
    LOG_MANAGER_ERROR_ADD_EVENT,
}
/**
 * Mask used to filter type of #TplEvent returned.
 * @bitfield 
 */
export enum EventTypeMask {
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
export interface LogEventFilter {
    (event: Event): boolean
}
export module CallEvent {

    // Constructor properties interface

    export interface ConstructorProperties extends Event.ConstructorProperties {

        // Own constructor properties of TelepathyLogger-0.2.TelepathyLogger.CallEvent

        detailed_end_reason?: string | null
        duration?: number | null
        end_actor?: Entity | null
        end_reason?: number | null
    }

}

export interface CallEvent {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.CallEvent

    readonly detailedEndReason: string | null
    readonly duration: number
    readonly endActor: Entity
    readonly endReason: number
    __gtype__: number

    // Owm methods of TelepathyLogger-0.2.TelepathyLogger.CallEvent

    getDetailedEndReason(): string
    getDuration(): GLib.TimeSpan
    getEndActor(): Entity
    getEndReason(): TelepathyGLib.CallStateChangeReason

    // Class property signals of TelepathyLogger-0.2.TelepathyLogger.CallEvent

    connect(sigName: "notify::detailed-end-reason", callback: (...args: any[]) => void): number
    on(sigName: "notify::detailed-end-reason", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::detailed-end-reason", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::detailed-end-reason", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::detailed-end-reason", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::end-actor", callback: (...args: any[]) => void): number
    on(sigName: "notify::end-actor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::end-actor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::end-actor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::end-actor", ...args: any[]): void
    connect(sigName: "notify::end-reason", callback: (...args: any[]) => void): number
    on(sigName: "notify::end-reason", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::end-reason", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::end-reason", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::end-reason", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::account", callback: (...args: any[]) => void): number
    on(sigName: "notify::account", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::account", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::account-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::account-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::account-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::account-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::account-path", ...args: any[]): void
    connect(sigName: "notify::channel-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::channel-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-path", ...args: any[]): void
    connect(sigName: "notify::receiver", callback: (...args: any[]) => void): number
    on(sigName: "notify::receiver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receiver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receiver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receiver", ...args: any[]): void
    connect(sigName: "notify::sender", callback: (...args: any[]) => void): number
    on(sigName: "notify::sender", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sender", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sender", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sender", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object representing a call log event.
 * @class 
 */
export class CallEvent extends Event {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.CallEvent

    static name: string

    // Constructors of TelepathyLogger-0.2.TelepathyLogger.CallEvent

    constructor(config?: CallEvent.ConstructorProperties) 
    _init(config?: CallEvent.ConstructorProperties): void
}

export module Entity {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

}

export interface Entity {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.Entity

    /**
     * The entity's alias
     */
    readonly alias: string | null
    /**
     * The entity's avatar token
     */
    readonly avatarToken: string | null
    /**
     * The entity's identifier
     */
    readonly identifier: string | null
    /**
     * The entity's type (see #TplEntityType).
     */
    readonly type: number
    __gtype__: number

    // Own fields of TelepathyLogger-0.2.TelepathyLogger.Entity

    parent: GObject.Object
    priv: EntityPriv

    // Owm methods of TelepathyLogger-0.2.TelepathyLogger.Entity

    getAlias(): string
    getAvatarToken(): string
    getEntityType(): EntityType
    getIdentifier(): string

    // Class property signals of TelepathyLogger-0.2.TelepathyLogger.Entity

    connect(sigName: "notify::alias", callback: (...args: any[]) => void): number
    on(sigName: "notify::alias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::alias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::alias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::alias", ...args: any[]): void
    connect(sigName: "notify::avatar-token", callback: (...args: any[]) => void): number
    on(sigName: "notify::avatar-token", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::avatar-token", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::avatar-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::avatar-token", ...args: any[]): void
    connect(sigName: "notify::identifier", callback: (...args: any[]) => void): number
    on(sigName: "notify::identifier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::identifier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::identifier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::identifier", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object representing a contact or room.
 * @class 
 */
export class Entity extends GObject.Object {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.Entity

    static name: string

    // Constructors of TelepathyLogger-0.2.TelepathyLogger.Entity

    constructor(config?: Entity.ConstructorProperties) 
    constructor(id: string, type: EntityType, alias: string, avatarToken: string) 
    static new(id: string, type: EntityType, alias: string, avatarToken: string): Entity
    static newFromRoomId(roomId: string): Entity
    static newFromTpContact(contact: TelepathyGLib.Contact, type: EntityType): Entity
    _init(config?: Entity.ConstructorProperties): void
}

export module Event {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of TelepathyLogger-0.2.TelepathyLogger.Event

        account?: TelepathyGLib.Account | null
        channel_path?: string | null
        receiver?: Entity | null
        sender?: Entity | null
        timestamp?: number | null
    }

}

export interface Event {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.Event

    readonly account: TelepathyGLib.Account
    readonly accountPath: string | null
    readonly channelPath: string | null
    readonly receiver: Entity
    readonly sender: Entity
    readonly timestamp: number
    __gtype__: number

    // Owm methods of TelepathyLogger-0.2.TelepathyLogger.Event

    /**
     * Checks if two instances of TplEvent represent the same data
     * @param data an instance of the same TplEvent subclass of `self`
     * @returns %TRUE if @data is the same type of @self and they hold the same data, %FALSE otherwise
     */
    equal(data: Event): boolean
    /**
     * <!-- no more to say -->
     * @returns the same account as the #TplEvent:account property
     */
    getAccount(): TelepathyGLib.Account
    /**
     * <!-- no more to say -->
     * @returns the path as the #TplEvent:account property
     */
    getAccountPath(): string
    getReceiver(): Entity
    getSender(): Entity
    getTimestamp(): number

    // Class property signals of TelepathyLogger-0.2.TelepathyLogger.Event

    connect(sigName: "notify::account", callback: (...args: any[]) => void): number
    on(sigName: "notify::account", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::account", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::account-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::account-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::account-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::account-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::account-path", ...args: any[]): void
    connect(sigName: "notify::channel-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::channel-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-path", ...args: any[]): void
    connect(sigName: "notify::receiver", callback: (...args: any[]) => void): number
    on(sigName: "notify::receiver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receiver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receiver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receiver", ...args: any[]): void
    connect(sigName: "notify::sender", callback: (...args: any[]) => void): number
    on(sigName: "notify::sender", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sender", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sender", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sender", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object representing a generic log event.
 * @class 
 */
export class Event extends GObject.Object {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.Event

    static name: string

    // Constructors of TelepathyLogger-0.2.TelepathyLogger.Event

    constructor(config?: Event.ConstructorProperties) 
    _init(config?: Event.ConstructorProperties): void
}

export module LogManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface LogManager {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.LogManager

    __gtype__: number

    // Own fields of TelepathyLogger-0.2.TelepathyLogger.LogManager

    parent: GObject.Object
    priv: any

    // Owm methods of TelepathyLogger-0.2.TelepathyLogger.LogManager

    /**
     * Disables logging of events for given entity. By default logging is enabled
     * for all entities.
     * @param account 
     * @param entity 
     */
    disableForEntity(account: TelepathyGLib.Account, entity: Entity): void
    /**
     * Re-enables logging of events for entity previously disabled by
     * tpl_log_manager_disable_for_entity(). By default logging is enabled for all
     * entities.
     * @param account 
     * @param entity a TplEntity
     */
    enableForEntity(account: TelepathyGLib.Account, entity: Entity): void
    /**
     * Checks if logs exist for `target`.
     * 
     * It applies for any registered TplLogStore with the TplLogStore:readable
     * property %TRUE.
     * @param account TpAccount
     * @param target a non-NULL #TplEntity
     * @param typeMask event type filter see #TplEventTypeMask
     * @returns %TRUE logs exist for @target, otherwise %FALSE
     */
    exists(account: TelepathyGLib.Account, target: Entity, typeMask: number): boolean
    /**
     * Retrieves a list of #GDate corresponding to each day where
     * at least one event exist for `target`.
     * 
     * It applies for any registered TplLogStore with the TplLogStore:readable
     * property %TRUE.
     * @param account a #TpAccount
     * @param target a non-NULL #TplEntity
     * @param typeMask event type filter see #TplEventTypeMask
     * @param callback a callback to call when the request is satisfied
     */
    getDatesAsync(account: TelepathyGLib.Account, target: Entity, typeMask: number, callback: Gio.AsyncReadyCallback | null): void
    getDatesFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* dates */ GLib.Date[] ]
    /**
     * Start a query looking for all entities for which you have logs in the `account`.
     * @param account a #TpAccount
     * @param callback a callback to call when the request is satisfied
     */
    getEntitiesAsync(account: TelepathyGLib.Account, callback: Gio.AsyncReadyCallback | null): void
    getEntitiesFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* entities */ Entity[] ]
    /**
     * Retrieve a list of #TplEvent at `date` with `target`.
     * @param account a #TpAccount
     * @param target a non-NULL #TplEntity
     * @param typeMask event type filter see #TplEventTypeMask
     * @param date a #GDate
     * @param callback a callback to call when the request is satisfied
     */
    getEventsForDateAsync(account: TelepathyGLib.Account, target: Entity, typeMask: number, date: GLib.Date, callback: Gio.AsyncReadyCallback | null): void
    getEventsForDateFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* events */ Event[] ]
    /**
     * Retrieve the most recent `num_event` events exchanged with `target`.
     * @param account a #TpAccount
     * @param target a non-NULL #TplEntity
     * @param typeMask event type filter see #TplEventTypeMask
     * @param numEvents number of maximum events to fetch
     * @param filter an optional filter function
     * @param callback a callback to call when the request is satisfied
     */
    getFilteredEventsAsync(account: TelepathyGLib.Account, target: Entity, typeMask: number, numEvents: number, filter: LogEventFilter | null, callback: Gio.AsyncReadyCallback | null): void
    getFilteredEventsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* events */ Event[] ]
    /**
     * Checks, whether logging is disabled for given entity. By default, logging
     * is enabled for all entities.
     * @param account 
     * @param entity a TplEntity
     * @returns %TRUE if logging for the entity has been disabled, %FALSE otherwise.
     */
    isDisabledForEntity(account: TelepathyGLib.Account, entity: Entity): boolean
    /**
     * Search for all the conversations containing `text`.
     * @param text the pattern to search
     * @param typeMask event type filter see #TplEventTypeMask
     * @param callback a callback to call when the request is satisfied
     */
    searchAsync(text: string, typeMask: number, callback: Gio.AsyncReadyCallback | null): void
    searchFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* hits */ LogSearchHit[] ]
    /**
     * Create a #TplLogWalker to traverse all the events exchanged with `target`.
     * @param account a #TpAccount
     * @param target a non-NULL #TplEntity
     * @param typeMask event type filter see #TplEventTypeMask
     * @param filter an optional filter function
     * @returns a #TplLogWalker
     */
    walkFilteredEvents(account: TelepathyGLib.Account, target: Entity, typeMask: number, filter: LogEventFilter | null): LogWalker

    // Class property signals of TelepathyLogger-0.2.TelepathyLogger.LogManager

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object used to access logs
 * @class 
 */
export class LogManager extends GObject.Object {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.LogManager

    static name: string

    // Constructors of TelepathyLogger-0.2.TelepathyLogger.LogManager

    constructor(config?: LogManager.ConstructorProperties) 
    _init(config?: LogManager.ConstructorProperties): void
    static dupSingleton(): LogManager
    static errorsQuark(): GLib.Quark
}

export module LogWalker {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of TelepathyLogger-0.2.TelepathyLogger.LogWalker

        filter?: any | null
        filter_data?: any | null
    }

}

export interface LogWalker {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.LogWalker

    readonly filter: any
    readonly filterData: any
    __gtype__: number

    // Own fields of TelepathyLogger-0.2.TelepathyLogger.LogWalker

    parentInstance: GObject.Object
    priv: LogWalkerPriv

    // Owm methods of TelepathyLogger-0.2.TelepathyLogger.LogWalker

    /**
     * Walk the logs to retrieve the next most recent `num_event` events.
     * @param numEvents number of maximum events to fetch
     * @param callback a callback to call when the request is satisfied
     */
    getEventsAsync(numEvents: number, callback: Gio.AsyncReadyCallback | null): void
    getEventsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* events */ Event[] ]
    /**
     * Determines whether `walker` has run out of events. This is the case
     * when `walker` has returned all the events from the logs.
     * @returns #TRUE if @walker has run out of events, otherwise #FALSE.
     */
    isEnd(): boolean
    /**
     * Determines whether `walker` is pointing at the most recent event in
     * the logs. This is the case when `walker` has not yet returned any
     * events or has been rewound completely.
     * @returns #TRUE if @walker is pointing at the most recent event, otherwise #FALSE.
     */
    isStart(): boolean
    /**
     * Move the `walker` back by the last `num_event` events that were
     * returned by tpl_log_walker_get_events_async().
     * @param numEvents number of events to move back
     * @param callback a callback to call when the request is satisfied
     */
    rewindAsync(numEvents: number, callback: Gio.AsyncReadyCallback | null): void
    rewindFinish(result: Gio.AsyncResult): boolean

    // Class property signals of TelepathyLogger-0.2.TelepathyLogger.LogWalker

    connect(sigName: "notify::filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filter", ...args: any[]): void
    connect(sigName: "notify::filter-data", callback: (...args: any[]) => void): number
    on(sigName: "notify::filter-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filter-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filter-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filter-data", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object used to iterate over the logs
 * @class 
 */
export class LogWalker extends GObject.Object {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.LogWalker

    static name: string

    // Constructors of TelepathyLogger-0.2.TelepathyLogger.LogWalker

    constructor(config?: LogWalker.ConstructorProperties) 
    _init(config?: LogWalker.ConstructorProperties): void
}

export module TextEvent {

    // Constructor properties interface

    export interface ConstructorProperties extends Event.ConstructorProperties {

        // Own constructor properties of TelepathyLogger-0.2.TelepathyLogger.TextEvent

        edit_timestamp?: number | null
        message?: string | null
        message_token?: string | null
        message_type?: number | null
        supersedes_token?: string | null
    }

}

export interface TextEvent {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.TextEvent

    readonly editTimestamp: number
    readonly message: string | null
    readonly messageToken: string | null
    readonly messageType: number
    readonly supersedesToken: string | null
    __gtype__: number

    // Owm methods of TelepathyLogger-0.2.TelepathyLogger.TextEvent

    getEditTimestamp(): number
    getMessage(): string
    getMessageToken(): string
    getMessageType(): TelepathyGLib.ChannelTextMessageType
    getSupersedes(): TextEvent[]
    getSupersedesToken(): string

    // Class property signals of TelepathyLogger-0.2.TelepathyLogger.TextEvent

    connect(sigName: "notify::edit-timestamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::edit-timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::edit-timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::edit-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::edit-timestamp", ...args: any[]): void
    connect(sigName: "notify::message", callback: (...args: any[]) => void): number
    on(sigName: "notify::message", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::message", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: "notify::message-token", callback: (...args: any[]) => void): number
    on(sigName: "notify::message-token", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::message-token", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::message-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::message-token", ...args: any[]): void
    connect(sigName: "notify::message-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::message-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::message-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::message-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::message-type", ...args: any[]): void
    connect(sigName: "notify::supersedes-token", callback: (...args: any[]) => void): number
    on(sigName: "notify::supersedes-token", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::supersedes-token", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::supersedes-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::supersedes-token", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::account", callback: (...args: any[]) => void): number
    on(sigName: "notify::account", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::account", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::account-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::account-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::account-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::account-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::account-path", ...args: any[]): void
    connect(sigName: "notify::channel-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::channel-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel-path", ...args: any[]): void
    connect(sigName: "notify::receiver", callback: (...args: any[]) => void): number
    on(sigName: "notify::receiver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receiver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receiver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receiver", ...args: any[]): void
    connect(sigName: "notify::sender", callback: (...args: any[]) => void): number
    on(sigName: "notify::sender", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sender", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sender", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sender", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object representing a text log event.
 * @class 
 */
export class TextEvent extends Event {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.TextEvent

    static name: string

    // Constructors of TelepathyLogger-0.2.TelepathyLogger.TextEvent

    constructor(config?: TextEvent.ConstructorProperties) 
    _init(config?: TextEvent.ConstructorProperties): void
}

export interface CallEventClass {
}

export abstract class CallEventClass {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.CallEventClass

    static name: string
}

export interface CallEventPriv {
}

export class CallEventPriv {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.CallEventPriv

    static name: string
}

export interface EntityPriv {
}

export class EntityPriv {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.EntityPriv

    static name: string
}

export interface EventClass {
}

export abstract class EventClass {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.EventClass

    static name: string
}

export interface EventPriv {
}

export class EventPriv {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.EventPriv

    static name: string
}

export interface LogManagerClass {

    // Own fields of TelepathyLogger-0.2.TelepathyLogger.LogManagerClass

    parentClass: GObject.ObjectClass
}

export abstract class LogManagerClass {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.LogManagerClass

    static name: string
}

export interface LogSearchHit {

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
export class LogSearchHit {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.LogSearchHit

    static name: string
}

export interface LogWalkerClass {
}

export abstract class LogWalkerClass {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.LogWalkerClass

    static name: string
}

export interface LogWalkerPriv {
}

export class LogWalkerPriv {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.LogWalkerPriv

    static name: string
}

export interface TextEventClass {
}

export abstract class TextEventClass {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.TextEventClass

    static name: string
}

export interface TextEventPriv {
}

export class TextEventPriv {

    // Own properties of TelepathyLogger-0.2.TelepathyLogger.TextEventPriv

    static name: string
}

// END