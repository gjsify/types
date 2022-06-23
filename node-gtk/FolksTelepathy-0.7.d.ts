// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * FolksTelepathy-0.7
 */

import type GLib from './GLib-2.0';
import type Gee from './Gee-0.8';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type TelepathyGLib from './TelepathyGLib-0.12';
import type Folks from './Folks-0.7';

export namespace FolksTelepathy {

interface PersonaStore_ConstructProps extends Folks.PersonaStore_ConstructProps {

    // Own constructor properties of FolksTelepathy-0.7.FolksTelepathy.PersonaStore

    account?: TelepathyGLib.Account | null
}

interface PersonaStore {

    // Own properties of FolksTelepathy-0.7.FolksTelepathy.PersonaStore

    readonly account: TelepathyGLib.Account

    // Owm methods of FolksTelepathy-0.7.FolksTelepathy.PersonaStore

    getAccount(): TelepathyGLib.Account

    // Class property signals of FolksTelepathy-0.7.FolksTelepathy.PersonaStore

    connect(sigName: "notify::account", callback: (...args: any[]) => void): number
    on(sigName: "notify::account", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::account", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::type-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::type-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type-id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::personas", callback: (...args: any[]) => void): number
    on(sigName: "notify::personas", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::personas", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::personas", ...args: any[]): void
    connect(sigName: "notify::can-add-personas", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-add-personas", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-add-personas", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-add-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-add-personas", ...args: any[]): void
    connect(sigName: "notify::can-alias-personas", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-alias-personas", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-alias-personas", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-alias-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-alias-personas", ...args: any[]): void
    connect(sigName: "notify::can-group-personas", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-group-personas", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-group-personas", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-group-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-group-personas", ...args: any[]): void
    connect(sigName: "notify::can-remove-personas", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-remove-personas", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-remove-personas", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-remove-personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-remove-personas", ...args: any[]): void
    connect(sigName: "notify::is-prepared", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-prepared", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-prepared", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-prepared", ...args: any[]): void
    connect(sigName: "notify::is-quiescent", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-quiescent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-quiescent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-quiescent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-quiescent", ...args: any[]): void
    connect(sigName: "notify::is-writeable", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-writeable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-writeable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-writeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-writeable", ...args: any[]): void
    connect(sigName: "notify::trust-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::trust-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::trust-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::trust-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::trust-level", ...args: any[]): void
    connect(sigName: "notify::always-writeable-properties", callback: (...args: any[]) => void): number
    on(sigName: "notify::always-writeable-properties", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::always-writeable-properties", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::always-writeable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::always-writeable-properties", ...args: any[]): void
    connect(sigName: "notify::is-primary-store", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-primary-store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-primary-store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-primary-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-primary-store", ...args: any[]): void
    connect(sigName: "notify::is-user-set-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-user-set-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-user-set-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-user-set-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-user-set-default", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class PersonaStore extends Folks.PersonaStore {

    // Own properties of FolksTelepathy-0.7.FolksTelepathy.PersonaStore

    static name: string
    static $gtype: GObject.GType<PersonaStore>

    // Constructors of FolksTelepathy-0.7.FolksTelepathy.PersonaStore

    constructor(config?: PersonaStore_ConstructProps) 
    constructor(account: TelepathyGLib.Account) 
    static new(account: TelepathyGLib.Account): PersonaStore
    _init(config?: PersonaStore_ConstructProps): void
    static listPersonaStores(): Gee.Map
    static dupForAccount(account: TelepathyGLib.Account): PersonaStore
}

interface Persona_ConstructProps extends Folks.AliasDetails_ConstructProps, Folks.AvatarDetails_ConstructProps, Folks.BirthdayDetails_ConstructProps, Folks.EmailDetails_ConstructProps, Folks.FavouriteDetails_ConstructProps, Folks.GroupDetails_ConstructProps, Folks.InteractionDetails_ConstructProps, Folks.ImDetails_ConstructProps, Folks.NameDetails_ConstructProps, Folks.PhoneDetails_ConstructProps, Folks.PresenceDetails_ConstructProps, Folks.UrlDetails_ConstructProps, Folks.Persona_ConstructProps {

    // Own constructor properties of FolksTelepathy-0.7.FolksTelepathy.Persona

    isInContactList?: boolean | null
    contact?: TelepathyGLib.Contact | null
}

interface Persona extends Folks.AliasDetails, Folks.AvatarDetails, Folks.BirthdayDetails, Folks.EmailDetails, Folks.FavouriteDetails, Folks.GroupDetails, Folks.InteractionDetails, Folks.ImDetails, Folks.NameDetails, Folks.PhoneDetails, Folks.PresenceDetails, Folks.UrlDetails {

    // Own properties of FolksTelepathy-0.7.FolksTelepathy.Persona

    isInContactList: boolean
    readonly contact: TelepathyGLib.Contact

    // Own fields of FolksTelepathy-0.7.FolksTelepathy.Persona

    lastImInteractionDatetime: GLib.DateTime | null
    lastCallInteractionDatetime: GLib.DateTime | null

    // Owm methods of FolksTelepathy-0.7.FolksTelepathy.Persona

    getIsInContactList(): boolean
    setIsInContactList(value: boolean): void
    getContact(): TelepathyGLib.Contact | null

    // Class property signals of FolksTelepathy-0.7.FolksTelepathy.Persona

    connect(sigName: "notify::is-in-contact-list", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-in-contact-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-in-contact-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-in-contact-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-in-contact-list", ...args: any[]): void
    connect(sigName: "notify::contact", callback: (...args: any[]) => void): number
    on(sigName: "notify::contact", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::contact", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::contact", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::contact", ...args: any[]): void
    connect(sigName: "notify::iid", callback: (...args: any[]) => void): number
    on(sigName: "notify::iid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::iid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::iid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::iid", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::display-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-id", ...args: any[]): void
    connect(sigName: "notify::is-user", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-user", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-user", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-user", ...args: any[]): void
    connect(sigName: "notify::store", callback: (...args: any[]) => void): number
    on(sigName: "notify::store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::store", ...args: any[]): void
    connect(sigName: "notify::individual", callback: (...args: any[]) => void): number
    on(sigName: "notify::individual", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::individual", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::individual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::individual", ...args: any[]): void
    connect(sigName: "notify::linkable-properties", callback: (...args: any[]) => void): number
    on(sigName: "notify::linkable-properties", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::linkable-properties", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::linkable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::linkable-properties", ...args: any[]): void
    connect(sigName: "notify::writeable-properties", callback: (...args: any[]) => void): number
    on(sigName: "notify::writeable-properties", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::writeable-properties", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::writeable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::writeable-properties", ...args: any[]): void
    connect(sigName: "notify::alias", callback: (...args: any[]) => void): number
    on(sigName: "notify::alias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::alias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::alias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::alias", ...args: any[]): void
    connect(sigName: "notify::avatar", callback: (...args: any[]) => void): number
    on(sigName: "notify::avatar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::avatar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::avatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::avatar", ...args: any[]): void
    connect(sigName: "notify::birthday", callback: (...args: any[]) => void): number
    on(sigName: "notify::birthday", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::birthday", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::birthday", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::birthday", ...args: any[]): void
    connect(sigName: "notify::calendar-event-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::calendar-event-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::calendar-event-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::calendar-event-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::calendar-event-id", ...args: any[]): void
    connect(sigName: "notify::email-addresses", callback: (...args: any[]) => void): number
    on(sigName: "notify::email-addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::email-addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::email-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::email-addresses", ...args: any[]): void
    connect(sigName: "notify::is-favourite", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-favourite", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-favourite", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-favourite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-favourite", ...args: any[]): void
    connect(sigName: "notify::groups", callback: (...args: any[]) => void): number
    on(sigName: "notify::groups", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::groups", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::groups", ...args: any[]): void
    connect(sigName: "notify::im-interaction-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-interaction-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-interaction-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-interaction-count", ...args: any[]): void
    connect(sigName: "notify::last-im-interaction-datetime", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-im-interaction-datetime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-im-interaction-datetime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-im-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-im-interaction-datetime", ...args: any[]): void
    connect(sigName: "notify::call-interaction-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::call-interaction-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::call-interaction-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::call-interaction-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::call-interaction-count", ...args: any[]): void
    connect(sigName: "notify::last-call-interaction-datetime", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-call-interaction-datetime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-call-interaction-datetime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-call-interaction-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-call-interaction-datetime", ...args: any[]): void
    connect(sigName: "notify::im-addresses", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-addresses", ...args: any[]): void
    connect(sigName: "notify::structured-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::structured-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::structured-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::structured-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::structured-name", ...args: any[]): void
    connect(sigName: "notify::full-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::full-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::full-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::full-name", ...args: any[]): void
    connect(sigName: "notify::nickname", callback: (...args: any[]) => void): number
    on(sigName: "notify::nickname", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::nickname", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::nickname", ...args: any[]): void
    connect(sigName: "notify::phone-numbers", callback: (...args: any[]) => void): number
    on(sigName: "notify::phone-numbers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::phone-numbers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::phone-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::phone-numbers", ...args: any[]): void
    connect(sigName: "notify::presence-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::presence-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::presence-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::presence-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::presence-type", ...args: any[]): void
    connect(sigName: "notify::presence-message", callback: (...args: any[]) => void): number
    on(sigName: "notify::presence-message", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::presence-message", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::presence-message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::presence-message", ...args: any[]): void
    connect(sigName: "notify::client-types", callback: (...args: any[]) => void): number
    on(sigName: "notify::client-types", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::client-types", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::client-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::client-types", ...args: any[]): void
    connect(sigName: "notify::presence-status", callback: (...args: any[]) => void): number
    on(sigName: "notify::presence-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::presence-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::presence-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::presence-status", ...args: any[]): void
    connect(sigName: "notify::urls", callback: (...args: any[]) => void): number
    on(sigName: "notify::urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::urls", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Persona extends Folks.Persona {

    // Own properties of FolksTelepathy-0.7.FolksTelepathy.Persona

    static name: string
    static $gtype: GObject.GType<Persona>

    // Constructors of FolksTelepathy-0.7.FolksTelepathy.Persona

    constructor(config?: Persona_ConstructProps) 
    constructor(contact: TelepathyGLib.Contact, store: PersonaStore) 
    static new(contact: TelepathyGLib.Contact, store: PersonaStore): Persona
    _init(config?: Persona_ConstructProps): void
    static dupForContact(contact: TelepathyGLib.Contact): Persona | null
}

interface PersonaStoreClass {
}

abstract class PersonaStoreClass {

    // Own properties of FolksTelepathy-0.7.FolksTelepathy.PersonaStoreClass

    static name: string
}

interface PersonaStorePrivate {
}

class PersonaStorePrivate {

    // Own properties of FolksTelepathy-0.7.FolksTelepathy.PersonaStorePrivate

    static name: string
}

interface PersonaClass {
}

abstract class PersonaClass {

    // Own properties of FolksTelepathy-0.7.FolksTelepathy.PersonaClass

    static name: string
}

interface PersonaPrivate {
}

class PersonaPrivate {

    // Own properties of FolksTelepathy-0.7.FolksTelepathy.PersonaPrivate

    static name: string
}

}
export default FolksTelepathy;