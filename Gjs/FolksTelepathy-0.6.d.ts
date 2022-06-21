// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * FolksTelepathy-0.6
 */

import type * as Gjs from './Gjs';
import type GLib from './GLib-2.0';
import type Gee from './Gee-0.8';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type TelepathyGLib from './TelepathyGLib-0.12';
import type Folks from './Folks-0.6';

export namespace FolksTelepathy {

interface PersonaStore_ConstructProps extends Folks.PersonaStore_ConstructProps {

    // Own constructor properties of FolksTelepathy-0.6.FolksTelepathy.PersonaStore

    account?: TelepathyGLib.Account | null
}

interface PersonaStore {

    // Own properties of FolksTelepathy-0.6.FolksTelepathy.PersonaStore

    readonly account: TelepathyGLib.Account

    // Owm methods of FolksTelepathy-0.6.FolksTelepathy.PersonaStore

    get_account(): TelepathyGLib.Account

    // Class property signals of FolksTelepathy-0.6.FolksTelepathy.PersonaStore

    connect(sigName: "notify::account", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::type-id", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-id", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::personas", ...args: any[]): void
    connect(sigName: "notify::can-add-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-add-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-add-personas", ...args: any[]): void
    connect(sigName: "notify::can-alias-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-alias-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-alias-personas", ...args: any[]): void
    connect(sigName: "notify::can-group-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-group-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-group-personas", ...args: any[]): void
    connect(sigName: "notify::can-remove-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-remove-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-remove-personas", ...args: any[]): void
    connect(sigName: "notify::is-prepared", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-prepared", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-prepared", ...args: any[]): void
    connect(sigName: "notify::is-quiescent", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-quiescent", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-quiescent", ...args: any[]): void
    connect(sigName: "notify::is-writeable", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-writeable", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-writeable", ...args: any[]): void
    connect(sigName: "notify::trust-level", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::trust-level", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::trust-level", ...args: any[]): void
    connect(sigName: "notify::always-writeable-properties", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-writeable-properties", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-writeable-properties", ...args: any[]): void
    connect(sigName: "notify::is-primary-store", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary-store", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-primary-store", ...args: any[]): void
    connect(sigName: "notify::is-user-set-default", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-user-set-default", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-user-set-default", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PersonaStore extends Folks.PersonaStore {

    // Own properties of FolksTelepathy-0.6.FolksTelepathy.PersonaStore

    static name: string
    static $gtype: GObject.GType<PersonaStore>

    // Constructors of FolksTelepathy-0.6.FolksTelepathy.PersonaStore

    constructor(config?: PersonaStore_ConstructProps) 
    constructor(account: TelepathyGLib.Account) 
    static new(account: TelepathyGLib.Account): PersonaStore
    _init(config?: PersonaStore_ConstructProps): void
    static list_persona_stores(): Gee.Map
    static dup_for_account(account: TelepathyGLib.Account): PersonaStore
}

interface Persona_ConstructProps extends Folks.AliasDetails_ConstructProps, Folks.AvatarDetails_ConstructProps, Folks.BirthdayDetails_ConstructProps, Folks.EmailDetails_ConstructProps, Folks.FavouriteDetails_ConstructProps, Folks.GroupDetails_ConstructProps, Folks.InteractionDetails_ConstructProps, Folks.ImDetails_ConstructProps, Folks.NameDetails_ConstructProps, Folks.PhoneDetails_ConstructProps, Folks.PresenceDetails_ConstructProps, Folks.UrlDetails_ConstructProps, Folks.Persona_ConstructProps {

    // Own constructor properties of FolksTelepathy-0.6.FolksTelepathy.Persona

    is_in_contact_list?: boolean | null
    contact?: TelepathyGLib.Contact | null
}

interface Persona extends Folks.AliasDetails, Folks.AvatarDetails, Folks.BirthdayDetails, Folks.EmailDetails, Folks.FavouriteDetails, Folks.GroupDetails, Folks.InteractionDetails, Folks.ImDetails, Folks.NameDetails, Folks.PhoneDetails, Folks.PresenceDetails, Folks.UrlDetails {

    // Own properties of FolksTelepathy-0.6.FolksTelepathy.Persona

    is_in_contact_list: boolean
    readonly contact: TelepathyGLib.Contact

    // Own fields of FolksTelepathy-0.6.FolksTelepathy.Persona

    _last_im_interaction_datetime?: GLib.DateTime | null
    _last_call_interaction_datetime?: GLib.DateTime | null

    // Owm methods of FolksTelepathy-0.6.FolksTelepathy.Persona

    get_is_in_contact_list(): boolean
    set_is_in_contact_list(value: boolean): void
    get_contact(): TelepathyGLib.Contact | null

    // Class property signals of FolksTelepathy-0.6.FolksTelepathy.Persona

    connect(sigName: "notify::is-in-contact-list", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-in-contact-list", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-in-contact-list", ...args: any[]): void
    connect(sigName: "notify::contact", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contact", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::contact", ...args: any[]): void
    connect(sigName: "notify::iid", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iid", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::iid", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::display-id", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-id", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-id", ...args: any[]): void
    connect(sigName: "notify::is-user", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-user", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-user", ...args: any[]): void
    connect(sigName: "notify::store", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::store", ...args: any[]): void
    connect(sigName: "notify::individual", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::individual", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::individual", ...args: any[]): void
    connect(sigName: "notify::linkable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::linkable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::linkable-properties", ...args: any[]): void
    connect(sigName: "notify::writeable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writeable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::writeable-properties", ...args: any[]): void
    connect(sigName: "notify::alias", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alias", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alias", ...args: any[]): void
    connect(sigName: "notify::avatar", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::avatar", ...args: any[]): void
    connect(sigName: "notify::birthday", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::birthday", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::birthday", ...args: any[]): void
    connect(sigName: "notify::calendar-event-id", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-event-id", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::calendar-event-id", ...args: any[]): void
    connect(sigName: "notify::email-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::email-addresses", ...args: any[]): void
    connect(sigName: "notify::is-favourite", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-favourite", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-favourite", ...args: any[]): void
    connect(sigName: "notify::groups", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::groups", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::groups", ...args: any[]): void
    connect(sigName: "notify::im-interaction-count", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-interaction-count", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-interaction-count", ...args: any[]): void
    connect(sigName: "notify::last-im-interaction-datetime", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-im-interaction-datetime", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-im-interaction-datetime", ...args: any[]): void
    connect(sigName: "notify::call-interaction-count", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::call-interaction-count", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::call-interaction-count", ...args: any[]): void
    connect(sigName: "notify::last-call-interaction-datetime", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-call-interaction-datetime", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-call-interaction-datetime", ...args: any[]): void
    connect(sigName: "notify::im-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-addresses", ...args: any[]): void
    connect(sigName: "notify::structured-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::structured-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::structured-name", ...args: any[]): void
    connect(sigName: "notify::full-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::full-name", ...args: any[]): void
    connect(sigName: "notify::nickname", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nickname", ...args: any[]): void
    connect(sigName: "notify::phone-numbers", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phone-numbers", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::phone-numbers", ...args: any[]): void
    connect(sigName: "notify::presence-type", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-type", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::presence-type", ...args: any[]): void
    connect(sigName: "notify::presence-message", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-message", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::presence-message", ...args: any[]): void
    connect(sigName: "notify::client-types", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-types", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client-types", ...args: any[]): void
    connect(sigName: "notify::presence-status", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-status", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::presence-status", ...args: any[]): void
    connect(sigName: "notify::urls", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urls", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urls", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Persona extends Folks.Persona {

    // Own properties of FolksTelepathy-0.6.FolksTelepathy.Persona

    static name: string
    static $gtype: GObject.GType<Persona>

    // Constructors of FolksTelepathy-0.6.FolksTelepathy.Persona

    constructor(config?: Persona_ConstructProps) 
    constructor(contact: TelepathyGLib.Contact, store: PersonaStore) 
    static new(contact: TelepathyGLib.Contact, store: PersonaStore): Persona
    _init(config?: Persona_ConstructProps): void
    static dup_for_contact(contact: TelepathyGLib.Contact): Persona | null
}

interface PersonaStoreClass {
}

abstract class PersonaStoreClass {

    // Own properties of FolksTelepathy-0.6.FolksTelepathy.PersonaStoreClass

    static name: string
}

interface PersonaStorePrivate {
}

class PersonaStorePrivate {

    // Own properties of FolksTelepathy-0.6.FolksTelepathy.PersonaStorePrivate

    static name: string
}

interface PersonaClass {
}

abstract class PersonaClass {

    // Own properties of FolksTelepathy-0.6.FolksTelepathy.PersonaClass

    static name: string
}

interface PersonaPrivate {
}

class PersonaPrivate {

    // Own properties of FolksTelepathy-0.6.FolksTelepathy.PersonaPrivate

    static name: string
}

}
export default FolksTelepathy;