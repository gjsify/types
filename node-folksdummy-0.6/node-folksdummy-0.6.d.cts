
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-folksdummy-0.6-import.d.ts';
    
/**
 * FolksDummy-0.6
 */

import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type Gio from '@girs/node-gio-2.0';
import type Gee from '@girs/node-gee-0.8';
import type Folks from '@girs/node-folks-0.6';

export module Backend {

    // Constructor properties interface

    export interface ConstructorProperties extends Folks.Backend.ConstructorProperties {
    }

}

export interface Backend {

    // Own properties of FolksDummy-0.6.FolksDummy.Backend

    __gtype__: number

    // Owm methods of FolksDummy-0.6.FolksDummy.Backend

    registerPersonaStores(stores: Gee.Set, enableStores: boolean): void
    unregisterPersonaStores(stores: Gee.Set): void

    // Class property signals of FolksDummy-0.6.FolksDummy.Backend

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::persona-stores", callback: (...args: any[]) => void): number
    on(sigName: "notify::persona-stores", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::persona-stores", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::persona-stores", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::persona-stores", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Backend extends Folks.Backend {

    // Own properties of FolksDummy-0.6.FolksDummy.Backend

    static name: string

    // Constructors of FolksDummy-0.6.FolksDummy.Backend

    constructor(config?: Backend.ConstructorProperties) 
    constructor() 
    static new(): Backend
    _init(config?: Backend.ConstructorProperties): void
}

export module FullPersona {

    // Constructor properties interface

    export interface ConstructorProperties extends Folks.AntiLinkable.ConstructorProperties, Folks.AvatarDetails.ConstructorProperties, Folks.BirthdayDetails.ConstructorProperties, Folks.EmailDetails.ConstructorProperties, Folks.FavouriteDetails.ConstructorProperties, Folks.GenderDetails.ConstructorProperties, Folks.GroupDetails.ConstructorProperties, Folks.ImDetails.ConstructorProperties, Folks.LocalIdDetails.ConstructorProperties, Folks.NameDetails.ConstructorProperties, Folks.NoteDetails.ConstructorProperties, Folks.PhoneDetails.ConstructorProperties, Folks.RoleDetails.ConstructorProperties, Folks.UrlDetails.ConstructorProperties, Folks.PostalAddressDetails.ConstructorProperties, Folks.WebServiceDetails.ConstructorProperties, Persona.ConstructorProperties {
    }

}

export interface FullPersona extends Folks.AntiLinkable, Folks.AvatarDetails, Folks.BirthdayDetails, Folks.EmailDetails, Folks.FavouriteDetails, Folks.GenderDetails, Folks.GroupDetails, Folks.ImDetails, Folks.LocalIdDetails, Folks.NameDetails, Folks.NoteDetails, Folks.PhoneDetails, Folks.RoleDetails, Folks.UrlDetails, Folks.PostalAddressDetails, Folks.WebServiceDetails {

    // Own properties of FolksDummy-0.6.FolksDummy.FullPersona

    __gtype__: number

    // Owm methods of FolksDummy-0.6.FolksDummy.FullPersona

    updateGender(gender: Folks.Gender): void
    updateCalendarEventId(calendarEventId?: string | null): void
    updateBirthday(birthday?: GLib.DateTime | null): void
    updateRoles(roles: Gee.Set): void
    updateGroups(groups: Gee.Set): void
    updateWebServiceAddresses(webServiceAddresses: Gee.MultiMap): void
    updateEmailAddresses(emailAddresses: Gee.Set): void
    updateNotes(notes: Gee.Set): void
    updateFullName(fullName: string | null): void
    updateNickname(nickname: string | null): void
    updateStructuredName(structuredName?: Folks.StructuredName | null): void
    updateAvatar(avatar?: Gio.LoadableIcon | null): void
    updateUrls(urls: Gee.Set): void
    updateImAddresses(imAddresses: Gee.MultiMap): void
    updatePhoneNumbers(phoneNumbers: Gee.Set): void
    updatePostalAddresses(postalAddresses: Gee.Set): void
    updateLocalIds(localIds: Gee.Set): void
    updateIsFavourite(isFavourite: boolean): void
    updateAntiLinks(antiLinks: Gee.Set): void

    // Class property signals of FolksDummy-0.6.FolksDummy.FullPersona

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::property-change-delay", callback: (...args: any[]) => void): number
    on(sigName: "notify::property-change-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::property-change-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::property-change-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::property-change-delay", ...args: any[]): void
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

export class FullPersona extends Persona {

    // Own properties of FolksDummy-0.6.FolksDummy.FullPersona

    static name: string

    // Constructors of FolksDummy-0.6.FolksDummy.FullPersona

    constructor(config?: FullPersona.ConstructorProperties) 
    constructor(store: PersonaStore, contactId: string | null, isUser: boolean, linkableProperties: string[]) 
    static new(store: PersonaStore, contactId: string | null, isUser: boolean, linkableProperties: string[]): FullPersona

    // Overloads of new

    static new(store: PersonaStore, contactId: string | null, isUser: boolean, linkableProperties: string[]): Persona
    _init(config?: FullPersona.ConstructorProperties): void
}

export module PersonaStore {

    // Constructor properties interface

    export interface ConstructorProperties extends Folks.PersonaStore.ConstructorProperties {

        // Own constructor properties of FolksDummy-0.6.FolksDummy.PersonaStore

        personaType?: GObject.GType | null
    }

}

export interface PersonaStore {

    // Own properties of FolksDummy-0.6.FolksDummy.PersonaStore

    personaType: GObject.GType
    __gtype__: number

    // Owm methods of FolksDummy-0.6.FolksDummy.PersonaStore

    updateCapabilities(canAddPersonas: Folks.MaybeBool, canAliasPersonas: Folks.MaybeBool, canRemovePersonas: Folks.MaybeBool): void
    freezePersonasChanged(): void
    thawPersonasChanged(): void
    registerPersonas(personas: Gee.Set): void
    unregisterPersonas(personas: Gee.Set): void
    reachQuiescence(): void
    updateIsUserSetDefault(isUserSetDefault: boolean): void
    updateTrustLevel(trustLevel: Folks.PersonaStoreTrust): void
    setAddPersonaFromDetailsMock(mock?: any | null): void
    setRemovePersonaMock(mock?: any | null): void
    setPrepareMock(mock?: any | null): void
    getPersonaType(): GObject.GType
    setPersonaType(value: GObject.GType): void

    // Class property signals of FolksDummy-0.6.FolksDummy.PersonaStore

    connect(sigName: "notify::persona-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::persona-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::persona-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::persona-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::persona-type", ...args: any[]): void
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

export class PersonaStore extends Folks.PersonaStore {

    // Own properties of FolksDummy-0.6.FolksDummy.PersonaStore

    static name: string

    // Constructors of FolksDummy-0.6.FolksDummy.PersonaStore

    constructor(config?: PersonaStore.ConstructorProperties) 
    constructor(id: string | null, displayName: string | null, alwaysWriteableProperties: string[]) 
    static new(id: string | null, displayName: string | null, alwaysWriteableProperties: string[]): PersonaStore
    _init(config?: PersonaStore.ConstructorProperties): void
}

export module Persona {

    // Constructor properties interface

    export interface ConstructorProperties extends Folks.Persona.ConstructorProperties {

        // Own constructor properties of FolksDummy-0.6.FolksDummy.Persona

        propertyChangeDelay?: number | null
    }

}

export interface Persona {

    // Own properties of FolksDummy-0.6.FolksDummy.Persona

    propertyChangeDelay: number
    __gtype__: number

    // Owm methods of FolksDummy-0.6.FolksDummy.Persona

    updateWriteableProperties(writeableProperties: string[]): void
    updateLinkableProperties(linkableProperties: string[]): void
    changeProperty(propertyName: string | null, callback: any, callback_?: Gio.AsyncReadyCallback | null): void
    changePropertyFinish(res: Gio.AsyncResult): void
    getPropertyChangeDelay(): number
    setPropertyChangeDelay(value: number): void

    // Class property signals of FolksDummy-0.6.FolksDummy.Persona

    connect(sigName: "notify::property-change-delay", callback: (...args: any[]) => void): number
    on(sigName: "notify::property-change-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::property-change-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::property-change-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::property-change-delay", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Persona extends Folks.Persona {

    // Own properties of FolksDummy-0.6.FolksDummy.Persona

    static name: string

    // Constructors of FolksDummy-0.6.FolksDummy.Persona

    constructor(config?: Persona.ConstructorProperties) 
    constructor(store: PersonaStore, contactId: string | null, isUser: boolean, linkableProperties: string[]) 
    static new(store: PersonaStore, contactId: string | null, isUser: boolean, linkableProperties: string[]): Persona
    _init(config?: Persona.ConstructorProperties): void
}

export interface BackendClass {
}

export abstract class BackendClass {

    // Own properties of FolksDummy-0.6.FolksDummy.BackendClass

    static name: string
}

export interface BackendPrivate {
}

export class BackendPrivate {

    // Own properties of FolksDummy-0.6.FolksDummy.BackendPrivate

    static name: string
}

export interface FullPersonaClass {
}

export abstract class FullPersonaClass {

    // Own properties of FolksDummy-0.6.FolksDummy.FullPersonaClass

    static name: string
}

export interface FullPersonaPrivate {
}

export class FullPersonaPrivate {

    // Own properties of FolksDummy-0.6.FolksDummy.FullPersonaPrivate

    static name: string
}

export interface PersonaStoreClass {
}

export abstract class PersonaStoreClass {

    // Own properties of FolksDummy-0.6.FolksDummy.PersonaStoreClass

    static name: string
}

export interface PersonaStorePrivate {
}

export class PersonaStorePrivate {

    // Own properties of FolksDummy-0.6.FolksDummy.PersonaStorePrivate

    static name: string
}

export interface PersonaClass {
}

export abstract class PersonaClass {

    // Own properties of FolksDummy-0.6.FolksDummy.PersonaClass

    static name: string
}

export interface PersonaPrivate {
}

export class PersonaPrivate {

    // Own properties of FolksDummy-0.6.FolksDummy.PersonaPrivate

    static name: string
}

// END