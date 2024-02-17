
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-folkseds-0.6-import.d.ts';
    
/**
 * FolksEds-0.6
 */

import type EBookContacts from '@girs/node-ebookcontacts-1.2';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type EDataServer from '@girs/node-edataserver-1.2';
import type libxml2 from '@girs/node-libxml2-2.0';
import type Soup from '@girs/node-soup-3.0';
import type Json from '@girs/node-json-1.0';
import type Camel from '@girs/node-camel-1.2';
import type Gee from '@girs/node-gee-0.8';
import type Folks from '@girs/node-folks-0.6';

export namespace FolksEds {

module PersonaStore {

    // Constructor properties interface

    interface ConstructorProperties extends Folks.PersonaStore.ConstructorProperties {

        // Own constructor properties of FolksEds-0.6.FolksEds.PersonaStore

        source?: EDataServer.Source | null
    }

}

interface PersonaStore {

    // Own properties of FolksEds-0.6.FolksEds.PersonaStore

    readonly source: EDataServer.Source
    __gtype__: number

    // Owm methods of FolksEds-0.6.FolksEds.PersonaStore

    getSource(): EDataServer.Source

    // Class property signals of FolksEds-0.6.FolksEds.PersonaStore

    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    disconnect(id: number): void
}

class PersonaStore extends Folks.PersonaStore {

    // Own properties of FolksEds-0.6.FolksEds.PersonaStore

    static name: string

    // Constructors of FolksEds-0.6.FolksEds.PersonaStore

    constructor(config?: PersonaStore.ConstructorProperties) 
    constructor(s: EDataServer.Source) 
    static new(s: EDataServer.Source): PersonaStore
    static withSourceRegistry(r: EDataServer.SourceRegistry, s: EDataServer.Source): PersonaStore
    _init(config?: PersonaStore.ConstructorProperties): void
    static createAddressBook(id: string, callback?: Gio.AsyncReadyCallback | null): void
    static createAddressBookFinish(res: Gio.AsyncResult): void
    static removeAddressBook(store: PersonaStore, callback?: Gio.AsyncReadyCallback | null): void
    static removeAddressBookFinish(res: Gio.AsyncResult): void
}

module Persona {

    // Constructor properties interface

    interface ConstructorProperties extends Folks.AntiLinkable.ConstructorProperties, Folks.AvatarDetails.ConstructorProperties, Folks.BirthdayDetails.ConstructorProperties, Folks.EmailDetails.ConstructorProperties, Folks.ExtendedInfo.ConstructorProperties, Folks.FavouriteDetails.ConstructorProperties, Folks.GenderDetails.ConstructorProperties, Folks.GroupDetails.ConstructorProperties, Folks.ImDetails.ConstructorProperties, Folks.LocalIdDetails.ConstructorProperties, Folks.LocationDetails.ConstructorProperties, Folks.NameDetails.ConstructorProperties, Folks.NoteDetails.ConstructorProperties, Folks.PhoneDetails.ConstructorProperties, Folks.RoleDetails.ConstructorProperties, Folks.UrlDetails.ConstructorProperties, Folks.PostalAddressDetails.ConstructorProperties, Folks.WebServiceDetails.ConstructorProperties, Folks.Persona.ConstructorProperties {

        // Own constructor properties of FolksEds-0.6.FolksEds.Persona

        contact?: EBookContacts.Contact | null
        contact_id?: string | null
        system_groups?: Gee.Set | null
        in_google_personal_group?: boolean | null
    }

}

interface Persona extends Folks.AntiLinkable, Folks.AvatarDetails, Folks.BirthdayDetails, Folks.EmailDetails, Folks.ExtendedInfo, Folks.FavouriteDetails, Folks.GenderDetails, Folks.GroupDetails, Folks.ImDetails, Folks.LocalIdDetails, Folks.LocationDetails, Folks.NameDetails, Folks.NoteDetails, Folks.PhoneDetails, Folks.RoleDetails, Folks.UrlDetails, Folks.PostalAddressDetails, Folks.WebServiceDetails {

    // Own properties of FolksEds-0.6.FolksEds.Persona

    readonly contact: EBookContacts.Contact
    readonly contactId: string | null
    systemGroups: Gee.Set
    inGooglePersonalGroup: boolean
    __gtype__: number

    // Owm methods of FolksEds-0.6.FolksEds.Persona

    changeSystemGroups(systemGroups: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeSystemGroupsFinish(res: Gio.AsyncResult): void
    changeInGooglePersonalGroup(inPersonal: boolean, callback?: Gio.AsyncReadyCallback | null): void
    changeInGooglePersonalGroupFinish(res: Gio.AsyncResult): void
    getContact(): EBookContacts.Contact
    getContactId(): string
    getSystemGroups(): Gee.Set | null
    setSystemGroups(value?: Gee.Set | null): void
    getInGooglePersonalGroup(): boolean
    setInGooglePersonalGroup(value: boolean): void

    // Class property signals of FolksEds-0.6.FolksEds.Persona

    connect(sigName: "notify::contact", callback: (...args: any[]) => void): number
    on(sigName: "notify::contact", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::contact", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::contact", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::contact", ...args: any[]): void
    connect(sigName: "notify::contact-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::contact-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::contact-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::contact-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::contact-id", ...args: any[]): void
    connect(sigName: "notify::system-groups", callback: (...args: any[]) => void): number
    on(sigName: "notify::system-groups", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::system-groups", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::system-groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::system-groups", ...args: any[]): void
    connect(sigName: "notify::in-google-personal-group", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-google-personal-group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-google-personal-group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-google-personal-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-google-personal-group", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    connect(sigName: "notify::anti-links", callback: (...args: any[]) => void): number
    on(sigName: "notify::anti-links", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anti-links", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anti-links", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anti-links", ...args: any[]): void
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
    connect(sigName: "notify::gender", callback: (...args: any[]) => void): number
    on(sigName: "notify::gender", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gender", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gender", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gender", ...args: any[]): void
    connect(sigName: "notify::groups", callback: (...args: any[]) => void): number
    on(sigName: "notify::groups", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::groups", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::groups", ...args: any[]): void
    connect(sigName: "notify::im-addresses", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-addresses", ...args: any[]): void
    connect(sigName: "notify::local-ids", callback: (...args: any[]) => void): number
    on(sigName: "notify::local-ids", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::local-ids", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::local-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::local-ids", ...args: any[]): void
    connect(sigName: "notify::location", callback: (...args: any[]) => void): number
    on(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::location", ...args: any[]): void
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
    connect(sigName: "notify::notes", callback: (...args: any[]) => void): number
    on(sigName: "notify::notes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::notes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::notes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::notes", ...args: any[]): void
    connect(sigName: "notify::phone-numbers", callback: (...args: any[]) => void): number
    on(sigName: "notify::phone-numbers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::phone-numbers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::phone-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::phone-numbers", ...args: any[]): void
    connect(sigName: "notify::roles", callback: (...args: any[]) => void): number
    on(sigName: "notify::roles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::roles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::roles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::roles", ...args: any[]): void
    connect(sigName: "notify::urls", callback: (...args: any[]) => void): number
    on(sigName: "notify::urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::urls", ...args: any[]): void
    connect(sigName: "notify::postal-addresses", callback: (...args: any[]) => void): number
    on(sigName: "notify::postal-addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::postal-addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::postal-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::postal-addresses", ...args: any[]): void
    connect(sigName: "notify::web-service-addresses", callback: (...args: any[]) => void): number
    on(sigName: "notify::web-service-addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::web-service-addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::web-service-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::web-service-addresses", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Persona extends Folks.Persona {

    // Own properties of FolksEds-0.6.FolksEds.Persona

    static name: string

    // Constructors of FolksEds-0.6.FolksEds.Persona

    constructor(config?: Persona.ConstructorProperties) 
    constructor(store: PersonaStore, contact: EBookContacts.Contact) 
    static new(store: PersonaStore, contact: EBookContacts.Contact): Persona
    _init(config?: Persona.ConstructorProperties): void
}

interface PersonaStoreClass {
}

abstract class PersonaStoreClass {

    // Own properties of FolksEds-0.6.FolksEds.PersonaStoreClass

    static name: string
}

interface PersonaStorePrivate {
}

class PersonaStorePrivate {

    // Own properties of FolksEds-0.6.FolksEds.PersonaStorePrivate

    static name: string
}

interface PersonaClass {
}

abstract class PersonaClass {

    // Own properties of FolksEds-0.6.FolksEds.PersonaClass

    static name: string
}

interface PersonaPrivate {
}

class PersonaPrivate {

    // Own properties of FolksEds-0.6.FolksEds.PersonaPrivate

    static name: string
}

}

export default FolksEds;
// END