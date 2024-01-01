
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-folks-0.6-import.d.ts';
    
/**
 * Folks-0.6
 */

import type GLib from '@girs/node-glib-2.0';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type Gee from '@girs/node-gee-0.8';

export namespace Folks {

enum Gender {
    UNSPECIFIED,
    MALE,
    FEMALE,
}
enum TrustLevel {
    NONE,
    PERSONAS,
}
enum PersonaStoreTrust {
    NONE,
    PARTIAL,
    FULL,
}
enum PersonaDetail {
    INVALID,
    ALIAS,
    AVATAR,
    BIRTHDAY,
    EMAIL_ADDRESSES,
    FULL_NAME,
    GENDER,
    IM_ADDRESSES,
    IS_FAVOURITE,
    LOCAL_IDS,
    LOCATION,
    NICKNAME,
    NOTES,
    PHONE_NUMBERS,
    POSTAL_ADDRESSES,
    ROLES,
    STRUCTURED_NAME,
    URLS,
    WEB_SERVICE_ADDRESSES,
    GROUPS,
    IM_INTERACTION_COUNT,
    LAST_IM_INTERACTION_DATETIME,
    CALL_INTERACTION_COUNT,
    LAST_CALL_INTERACTION_DATETIME,
    ANTI_LINKS,
    EXTENDED_INFO,
}
enum MatchResult {
    NONE,
    VERY_LOW,
    LOW,
    MEDIUM,
    HIGH,
    VERY_HIGH,
    MIN,
    MAX,
}
enum PresenceType {
    UNSET,
    OFFLINE,
    AVAILABLE,
    AWAY,
    EXTENDED_AWAY,
    HIDDEN,
    BUSY,
    UNKNOWN,
    ERROR,
}
enum MaybeBool {
    UNSET,
    FALSE,
    TRUE,
}
enum ImDetailsError {
    INVALID_IM_ADDRESS,
}
enum IndividualAggregatorError {
    ADD_FAILED,
    NO_WRITEABLE_STORE,
    STORE_OFFLINE,
    PROPERTY_NOT_WRITEABLE,
    NO_PRIMARY_STORE,
}
enum PersonaStoreError {
    INVALID_ARGUMENT,
    CREATE_FAILED,
    UNSUPPORTED_ON_USER,
    STORE_OFFLINE,
    READ_ONLY,
    PERMISSION_DENIED,
    REMOVE_FAILED,
    UNSUPPORTED_ON_NON_USER,
}
enum PropertyError {
    NOT_WRITEABLE,
    INVALID_VALUE,
    UNKNOWN_ERROR,
    UNAVAILABLE,
}
enum GroupDetailsChangeReason {
    NONE,
    OFFLINE,
    KICKED,
    BUSY,
    INVITED,
    BANNED,
    ERROR,
    INVALID_MEMBER,
    NO_ANSWER,
    RENAMED,
    PERMISSION_DENIED,
    SEPARATED,
}
module AliasDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.AliasDetails

        alias?: string | null
    }

}

interface AliasDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.AliasDetails

    alias: string | null
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.AliasDetails

    // Has conflict: changeAlias(alias: string, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeAliasFinish(res: Gio.AsyncResult): void
    // Has conflict: getAlias(): string
    // Has conflict: setAlias(value: string): void

    // Own virtual methods of Folks-0.6.Folks.AliasDetails

    changeAlias(alias: string, callback?: Gio.AsyncReadyCallback | null): void
    changeAliasFinish(res: Gio.AsyncResult): void
    getAlias(): string
    setAlias(value: string): void

    // Class property signals of Folks-0.6.Folks.AliasDetails

    connect(sigName: "notify::alias", callback: (...args: any[]) => void): number
    on(sigName: "notify::alias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::alias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::alias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::alias", ...args: any[]): void
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

class AliasDetails {

    // Own properties of Folks-0.6.Folks.AliasDetails

    static name: string

    // Constructors of Folks-0.6.Folks.AliasDetails

    constructor(config?: AliasDetails.ConstructorProperties) 
    _init(config?: AliasDetails.ConstructorProperties): void
}

module AntiLinkable {

    // Constructor properties interface

    interface ConstructorProperties extends Persona.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.AntiLinkable

        antiLinks?: Gee.Set | null
    }

}

interface AntiLinkable extends Persona {

    // Own properties of Folks-0.6.Folks.AntiLinkable

    antiLinks: Gee.Set
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.AntiLinkable

    // Has conflict: changeAntiLinks(antiLinks: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeAntiLinksFinish(res: Gio.AsyncResult): void
    hasAntiLinkWithPersona(otherPersona: Persona): boolean
    addAntiLinks(otherPersonas: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    addAntiLinksFinish(res: Gio.AsyncResult): void
    removeAntiLinks(otherPersonas: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    removeAntiLinksFinish(res: Gio.AsyncResult): void
    addGlobalAntiLink(callback?: Gio.AsyncReadyCallback | null): void
    addGlobalAntiLinkFinish(res: Gio.AsyncResult): void
    removeGlobalAntiLink(callback?: Gio.AsyncReadyCallback | null): void
    removeGlobalAntiLinkFinish(res: Gio.AsyncResult): void
    hasGlobalAntiLink(): boolean
    // Has conflict: getAntiLinks(): Gee.Set
    // Has conflict: setAntiLinks(value: Gee.Set): void

    // Own virtual methods of Folks-0.6.Folks.AntiLinkable

    changeAntiLinks(antiLinks: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeAntiLinksFinish(res: Gio.AsyncResult): void
    getAntiLinks(): Gee.Set
    setAntiLinks(value: Gee.Set): void

    // Class property signals of Folks-0.6.Folks.AntiLinkable

    connect(sigName: "notify::anti-links", callback: (...args: any[]) => void): number
    on(sigName: "notify::anti-links", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anti-links", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anti-links", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anti-links", ...args: any[]): void
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

class AntiLinkable extends GObject.Object {

    // Own properties of Folks-0.6.Folks.AntiLinkable

    static name: string

    // Constructors of Folks-0.6.Folks.AntiLinkable

    constructor(config?: AntiLinkable.ConstructorProperties) 
    _init(config?: AntiLinkable.ConstructorProperties): void
}

module AvatarDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.AvatarDetails

        avatar?: Gio.LoadableIcon | null
    }

}

interface AvatarDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.AvatarDetails

    avatar: Gio.LoadableIcon
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.AvatarDetails

    // Has conflict: changeAvatar(avatar?: Gio.LoadableIcon | null, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeAvatarFinish(res: Gio.AsyncResult): void
    // Has conflict: getAvatar(): Gio.LoadableIcon | null
    // Has conflict: setAvatar(value?: Gio.LoadableIcon | null): void

    // Own virtual methods of Folks-0.6.Folks.AvatarDetails

    changeAvatar(avatar?: Gio.LoadableIcon | null, callback?: Gio.AsyncReadyCallback | null): void
    changeAvatarFinish(res: Gio.AsyncResult): void
    getAvatar(): Gio.LoadableIcon | null
    setAvatar(value?: Gio.LoadableIcon | null): void

    // Class property signals of Folks-0.6.Folks.AvatarDetails

    connect(sigName: "notify::avatar", callback: (...args: any[]) => void): number
    on(sigName: "notify::avatar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::avatar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::avatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::avatar", ...args: any[]): void
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

class AvatarDetails {

    // Own properties of Folks-0.6.Folks.AvatarDetails

    static name: string

    // Constructors of Folks-0.6.Folks.AvatarDetails

    constructor(config?: AvatarDetails.ConstructorProperties) 
    _init(config?: AvatarDetails.ConstructorProperties): void
}

module BirthdayDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.BirthdayDetails

        birthday?: GLib.DateTime | null
        calendarEventId?: string | null
    }

}

interface BirthdayDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.BirthdayDetails

    birthday: GLib.DateTime
    calendarEventId: string | null
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.BirthdayDetails

    // Has conflict: changeBirthday(birthday?: GLib.DateTime | null, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeBirthdayFinish(res: Gio.AsyncResult): void
    // Has conflict: changeCalendarEventId(eventId?: string | null, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeCalendarEventIdFinish(res: Gio.AsyncResult): void
    // Has conflict: getBirthday(): GLib.DateTime | null
    // Has conflict: setBirthday(value?: GLib.DateTime | null): void
    // Has conflict: getCalendarEventId(): string | null
    // Has conflict: setCalendarEventId(value?: string | null): void

    // Own virtual methods of Folks-0.6.Folks.BirthdayDetails

    changeBirthday(birthday?: GLib.DateTime | null, callback?: Gio.AsyncReadyCallback | null): void
    changeBirthdayFinish(res: Gio.AsyncResult): void
    changeCalendarEventId(eventId?: string | null, callback?: Gio.AsyncReadyCallback | null): void
    changeCalendarEventIdFinish(res: Gio.AsyncResult): void
    getBirthday(): GLib.DateTime | null
    setBirthday(value?: GLib.DateTime | null): void
    getCalendarEventId(): string | null
    setCalendarEventId(value?: string | null): void

    // Class property signals of Folks-0.6.Folks.BirthdayDetails

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

class BirthdayDetails {

    // Own properties of Folks-0.6.Folks.BirthdayDetails

    static name: string

    // Constructors of Folks-0.6.Folks.BirthdayDetails

    constructor(config?: BirthdayDetails.ConstructorProperties) 
    _init(config?: BirthdayDetails.ConstructorProperties): void
}

module EmailDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.EmailDetails

        emailAddresses?: Gee.Set | null
    }

}

interface EmailDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.EmailDetails

    emailAddresses: Gee.Set
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.EmailDetails

    // Has conflict: changeEmailAddresses(emailAddresses: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeEmailAddressesFinish(res: Gio.AsyncResult): void
    // Has conflict: getEmailAddresses(): Gee.Set
    // Has conflict: setEmailAddresses(value: Gee.Set): void

    // Own virtual methods of Folks-0.6.Folks.EmailDetails

    changeEmailAddresses(emailAddresses: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeEmailAddressesFinish(res: Gio.AsyncResult): void
    getEmailAddresses(): Gee.Set
    setEmailAddresses(value: Gee.Set): void

    // Class property signals of Folks-0.6.Folks.EmailDetails

    connect(sigName: "notify::email-addresses", callback: (...args: any[]) => void): number
    on(sigName: "notify::email-addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::email-addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::email-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::email-addresses", ...args: any[]): void
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

class EmailDetails {

    // Own properties of Folks-0.6.Folks.EmailDetails

    static name: string

    // Constructors of Folks-0.6.Folks.EmailDetails

    constructor(config?: EmailDetails.ConstructorProperties) 
    _init(config?: EmailDetails.ConstructorProperties): void
}

module ExtendedInfo {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ExtendedInfo extends GObject.Object {

    // Own properties of Folks-0.6.Folks.ExtendedInfo

    __gtype__: number

    // Owm methods of Folks-0.6.Folks.ExtendedInfo

    // Has conflict: getExtendedField(name: string): ExtendedFieldDetails | null
    // Has conflict: changeExtendedField(name: string, value: ExtendedFieldDetails, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeExtendedFieldFinish(res: Gio.AsyncResult): void
    // Has conflict: removeExtendedField(name: string, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: removeExtendedFieldFinish(res: Gio.AsyncResult): void

    // Own virtual methods of Folks-0.6.Folks.ExtendedInfo

    getExtendedField(name: string): ExtendedFieldDetails | null
    changeExtendedField(name: string, value: ExtendedFieldDetails, callback?: Gio.AsyncReadyCallback | null): void
    changeExtendedFieldFinish(res: Gio.AsyncResult): void
    removeExtendedField(name: string, callback?: Gio.AsyncReadyCallback | null): void
    removeExtendedFieldFinish(res: Gio.AsyncResult): void

    // Class property signals of Folks-0.6.Folks.ExtendedInfo

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

class ExtendedInfo {

    // Own properties of Folks-0.6.Folks.ExtendedInfo

    static name: string

    // Constructors of Folks-0.6.Folks.ExtendedInfo

    constructor(config?: ExtendedInfo.ConstructorProperties) 
    _init(config?: ExtendedInfo.ConstructorProperties): void
}

module FavouriteDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.FavouriteDetails

        isFavourite?: boolean | null
    }

}

interface FavouriteDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.FavouriteDetails

    isFavourite: boolean
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.FavouriteDetails

    // Has conflict: changeIsFavourite(isFavourite: boolean, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeIsFavouriteFinish(res: Gio.AsyncResult): void
    // Has conflict: getIsFavourite(): boolean
    // Has conflict: setIsFavourite(value: boolean): void

    // Own virtual methods of Folks-0.6.Folks.FavouriteDetails

    changeIsFavourite(isFavourite: boolean, callback?: Gio.AsyncReadyCallback | null): void
    changeIsFavouriteFinish(res: Gio.AsyncResult): void
    getIsFavourite(): boolean
    setIsFavourite(value: boolean): void

    // Class property signals of Folks-0.6.Folks.FavouriteDetails

    connect(sigName: "notify::is-favourite", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-favourite", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-favourite", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-favourite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-favourite", ...args: any[]): void
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

class FavouriteDetails {

    // Own properties of Folks-0.6.Folks.FavouriteDetails

    static name: string

    // Constructors of Folks-0.6.Folks.FavouriteDetails

    constructor(config?: FavouriteDetails.ConstructorProperties) 
    _init(config?: FavouriteDetails.ConstructorProperties): void
}

module GenderDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.GenderDetails

        gender?: Gender | null
    }

}

interface GenderDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.GenderDetails

    gender: Gender
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.GenderDetails

    // Has conflict: changeGender(gender: Gender, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeGenderFinish(res: Gio.AsyncResult): void
    // Has conflict: getGender(): Gender
    // Has conflict: setGender(value: Gender): void

    // Own virtual methods of Folks-0.6.Folks.GenderDetails

    changeGender(gender: Gender, callback?: Gio.AsyncReadyCallback | null): void
    changeGenderFinish(res: Gio.AsyncResult): void
    getGender(): Gender
    setGender(value: Gender): void

    // Class property signals of Folks-0.6.Folks.GenderDetails

    connect(sigName: "notify::gender", callback: (...args: any[]) => void): number
    on(sigName: "notify::gender", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gender", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gender", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gender", ...args: any[]): void
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

class GenderDetails {

    // Own properties of Folks-0.6.Folks.GenderDetails

    static name: string

    // Constructors of Folks-0.6.Folks.GenderDetails

    constructor(config?: GenderDetails.ConstructorProperties) 
    _init(config?: GenderDetails.ConstructorProperties): void
}

module GroupDetails {

    // Signal callback interfaces

    /**
     * Signal callback interface for `group-changed`
     */
    interface GroupChangedSignalCallback {
        (group: string, isMember: boolean): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.GroupDetails

        groups?: Gee.Set | null
    }

}

interface GroupDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.GroupDetails

    groups: Gee.Set
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.GroupDetails

    // Has conflict: changeGroup(group: string, isMember: boolean, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeGroupFinish(res: Gio.AsyncResult): void
    // Has conflict: changeGroups(groups: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeGroupsFinish(res: Gio.AsyncResult): void
    // Has conflict: getGroups(): Gee.Set
    // Has conflict: setGroups(value: Gee.Set): void

    // Own virtual methods of Folks-0.6.Folks.GroupDetails

    changeGroup(group: string, isMember: boolean, callback?: Gio.AsyncReadyCallback | null): void
    changeGroupFinish(res: Gio.AsyncResult): void
    changeGroups(groups: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeGroupsFinish(res: Gio.AsyncResult): void
    getGroups(): Gee.Set
    setGroups(value: Gee.Set): void

    // Own signals of Folks-0.6.Folks.GroupDetails

    connect(sigName: "group-changed", callback: GroupDetails.GroupChangedSignalCallback): number
    on(sigName: "group-changed", callback: GroupDetails.GroupChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "group-changed", callback: GroupDetails.GroupChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "group-changed", callback: GroupDetails.GroupChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "group-changed", isMember: boolean, ...args: any[]): void

    // Class property signals of Folks-0.6.Folks.GroupDetails

    connect(sigName: "notify::groups", callback: (...args: any[]) => void): number
    on(sigName: "notify::groups", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::groups", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::groups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::groups", ...args: any[]): void
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

class GroupDetails {

    // Own properties of Folks-0.6.Folks.GroupDetails

    static name: string

    // Constructors of Folks-0.6.Folks.GroupDetails

    constructor(config?: GroupDetails.ConstructorProperties) 
    _init(config?: GroupDetails.ConstructorProperties): void
}

module ImDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.ImDetails

        imAddresses?: Gee.MultiMap | null
    }

}

interface ImDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.ImDetails

    imAddresses: Gee.MultiMap
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.ImDetails

    // Has conflict: changeImAddresses(imAddresses: Gee.MultiMap, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeImAddressesFinish(res: Gio.AsyncResult): void
    // Has conflict: getImAddresses(): Gee.MultiMap
    // Has conflict: setImAddresses(value: Gee.MultiMap): void

    // Own virtual methods of Folks-0.6.Folks.ImDetails

    changeImAddresses(imAddresses: Gee.MultiMap, callback?: Gio.AsyncReadyCallback | null): void
    changeImAddressesFinish(res: Gio.AsyncResult): void
    getImAddresses(): Gee.MultiMap
    setImAddresses(value: Gee.MultiMap): void

    // Class property signals of Folks-0.6.Folks.ImDetails

    connect(sigName: "notify::im-addresses", callback: (...args: any[]) => void): number
    on(sigName: "notify::im-addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::im-addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::im-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::im-addresses", ...args: any[]): void
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

class ImDetails {

    // Own properties of Folks-0.6.Folks.ImDetails

    static name: string

    // Constructors of Folks-0.6.Folks.ImDetails

    constructor(config?: ImDetails.ConstructorProperties) 
    _init(config?: ImDetails.ConstructorProperties): void
    static normaliseImAddress(imAddress: string, protocol: string): string | null
}

module InteractionDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface InteractionDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.InteractionDetails

    readonly imInteractionCount: number
    readonly lastImInteractionDatetime: GLib.DateTime
    readonly callInteractionCount: number
    readonly lastCallInteractionDatetime: GLib.DateTime
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.InteractionDetails

    // Has conflict: getImInteractionCount(): number
    // Has conflict: getLastImInteractionDatetime(): GLib.DateTime | null
    // Has conflict: getCallInteractionCount(): number
    // Has conflict: getLastCallInteractionDatetime(): GLib.DateTime | null

    // Own virtual methods of Folks-0.6.Folks.InteractionDetails

    getImInteractionCount(): number
    getLastImInteractionDatetime(): GLib.DateTime | null
    getCallInteractionCount(): number
    getLastCallInteractionDatetime(): GLib.DateTime | null

    // Class property signals of Folks-0.6.Folks.InteractionDetails

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

class InteractionDetails {

    // Own properties of Folks-0.6.Folks.InteractionDetails

    static name: string

    // Constructors of Folks-0.6.Folks.InteractionDetails

    constructor(config?: InteractionDetails.ConstructorProperties) 
    _init(config?: InteractionDetails.ConstructorProperties): void
}

module LocalIdDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.LocalIdDetails

        localIds?: Gee.Set | null
    }

}

interface LocalIdDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.LocalIdDetails

    localIds: Gee.Set
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.LocalIdDetails

    // Has conflict: changeLocalIds(localIds: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeLocalIdsFinish(res: Gio.AsyncResult): void
    // Has conflict: getLocalIds(): Gee.Set
    // Has conflict: setLocalIds(value: Gee.Set): void

    // Own virtual methods of Folks-0.6.Folks.LocalIdDetails

    changeLocalIds(localIds: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeLocalIdsFinish(res: Gio.AsyncResult): void
    getLocalIds(): Gee.Set
    setLocalIds(value: Gee.Set): void

    // Class property signals of Folks-0.6.Folks.LocalIdDetails

    connect(sigName: "notify::local-ids", callback: (...args: any[]) => void): number
    on(sigName: "notify::local-ids", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::local-ids", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::local-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::local-ids", ...args: any[]): void
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

class LocalIdDetails {

    // Own properties of Folks-0.6.Folks.LocalIdDetails

    static name: string

    // Constructors of Folks-0.6.Folks.LocalIdDetails

    constructor(config?: LocalIdDetails.ConstructorProperties) 
    _init(config?: LocalIdDetails.ConstructorProperties): void
}

module LocationDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.LocationDetails

        location?: Location | null
    }

}

interface LocationDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.LocationDetails

    location: Location
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.LocationDetails

    // Has conflict: changeLocation(location?: Location | null, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeLocationFinish(res: Gio.AsyncResult): void
    // Has conflict: getLocation(): Location | null
    // Has conflict: setLocation(value?: Location | null): void

    // Own virtual methods of Folks-0.6.Folks.LocationDetails

    changeLocation(location?: Location | null, callback?: Gio.AsyncReadyCallback | null): void
    changeLocationFinish(res: Gio.AsyncResult): void
    getLocation(): Location | null
    setLocation(value?: Location | null): void

    // Class property signals of Folks-0.6.Folks.LocationDetails

    connect(sigName: "notify::location", callback: (...args: any[]) => void): number
    on(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::location", ...args: any[]): void
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

class LocationDetails {

    // Own properties of Folks-0.6.Folks.LocationDetails

    static name: string

    // Constructors of Folks-0.6.Folks.LocationDetails

    constructor(config?: LocationDetails.ConstructorProperties) 
    _init(config?: LocationDetails.ConstructorProperties): void
}

module NameDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.NameDetails

        structuredName?: StructuredName | null
        fullName?: string | null
        nickname?: string | null
    }

}

interface NameDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.NameDetails

    structuredName: StructuredName
    fullName: string | null
    nickname: string | null
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.NameDetails

    // Has conflict: changeStructuredName(name?: StructuredName | null, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeStructuredNameFinish(res: Gio.AsyncResult): void
    // Has conflict: changeFullName(fullName: string, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeFullNameFinish(res: Gio.AsyncResult): void
    // Has conflict: changeNickname(nickname: string, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeNicknameFinish(res: Gio.AsyncResult): void
    // Has conflict: getStructuredName(): StructuredName | null
    // Has conflict: setStructuredName(value?: StructuredName | null): void
    // Has conflict: getFullName(): string
    // Has conflict: setFullName(value: string): void
    // Has conflict: getNickname(): string
    // Has conflict: setNickname(value: string): void

    // Own virtual methods of Folks-0.6.Folks.NameDetails

    changeStructuredName(name?: StructuredName | null, callback?: Gio.AsyncReadyCallback | null): void
    changeStructuredNameFinish(res: Gio.AsyncResult): void
    changeFullName(fullName: string, callback?: Gio.AsyncReadyCallback | null): void
    changeFullNameFinish(res: Gio.AsyncResult): void
    changeNickname(nickname: string, callback?: Gio.AsyncReadyCallback | null): void
    changeNicknameFinish(res: Gio.AsyncResult): void
    getStructuredName(): StructuredName | null
    setStructuredName(value?: StructuredName | null): void
    getFullName(): string
    setFullName(value: string): void
    getNickname(): string
    setNickname(value: string): void

    // Class property signals of Folks-0.6.Folks.NameDetails

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

class NameDetails {

    // Own properties of Folks-0.6.Folks.NameDetails

    static name: string

    // Constructors of Folks-0.6.Folks.NameDetails

    constructor(config?: NameDetails.ConstructorProperties) 
    _init(config?: NameDetails.ConstructorProperties): void
}

module NoteDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.NoteDetails

        notes?: Gee.Set | null
    }

}

interface NoteDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.NoteDetails

    notes: Gee.Set
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.NoteDetails

    // Has conflict: changeNotes(notes: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeNotesFinish(res: Gio.AsyncResult): void
    // Has conflict: getNotes(): Gee.Set
    // Has conflict: setNotes(value: Gee.Set): void

    // Own virtual methods of Folks-0.6.Folks.NoteDetails

    changeNotes(notes: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeNotesFinish(res: Gio.AsyncResult): void
    getNotes(): Gee.Set
    setNotes(value: Gee.Set): void

    // Class property signals of Folks-0.6.Folks.NoteDetails

    connect(sigName: "notify::notes", callback: (...args: any[]) => void): number
    on(sigName: "notify::notes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::notes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::notes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::notes", ...args: any[]): void
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

class NoteDetails {

    // Own properties of Folks-0.6.Folks.NoteDetails

    static name: string

    // Constructors of Folks-0.6.Folks.NoteDetails

    constructor(config?: NoteDetails.ConstructorProperties) 
    _init(config?: NoteDetails.ConstructorProperties): void
}

module PhoneDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.PhoneDetails

        phoneNumbers?: Gee.Set | null
    }

}

interface PhoneDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.PhoneDetails

    phoneNumbers: Gee.Set
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.PhoneDetails

    // Has conflict: changePhoneNumbers(phoneNumbers: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: changePhoneNumbersFinish(res: Gio.AsyncResult): void
    // Has conflict: getPhoneNumbers(): Gee.Set
    // Has conflict: setPhoneNumbers(value: Gee.Set): void

    // Own virtual methods of Folks-0.6.Folks.PhoneDetails

    changePhoneNumbers(phoneNumbers: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changePhoneNumbersFinish(res: Gio.AsyncResult): void
    getPhoneNumbers(): Gee.Set
    setPhoneNumbers(value: Gee.Set): void

    // Class property signals of Folks-0.6.Folks.PhoneDetails

    connect(sigName: "notify::phone-numbers", callback: (...args: any[]) => void): number
    on(sigName: "notify::phone-numbers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::phone-numbers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::phone-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::phone-numbers", ...args: any[]): void
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

class PhoneDetails {

    // Own properties of Folks-0.6.Folks.PhoneDetails

    static name: string

    // Constructors of Folks-0.6.Folks.PhoneDetails

    constructor(config?: PhoneDetails.ConstructorProperties) 
    _init(config?: PhoneDetails.ConstructorProperties): void
}

module PostalAddressDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.PostalAddressDetails

        postalAddresses?: Gee.Set | null
    }

}

interface PostalAddressDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.PostalAddressDetails

    postalAddresses: Gee.Set
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.PostalAddressDetails

    // Has conflict: changePostalAddresses(postalAddresses: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: changePostalAddressesFinish(res: Gio.AsyncResult): void
    // Has conflict: getPostalAddresses(): Gee.Set
    // Has conflict: setPostalAddresses(value: Gee.Set): void

    // Own virtual methods of Folks-0.6.Folks.PostalAddressDetails

    changePostalAddresses(postalAddresses: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changePostalAddressesFinish(res: Gio.AsyncResult): void
    getPostalAddresses(): Gee.Set
    setPostalAddresses(value: Gee.Set): void

    // Class property signals of Folks-0.6.Folks.PostalAddressDetails

    connect(sigName: "notify::postal-addresses", callback: (...args: any[]) => void): number
    on(sigName: "notify::postal-addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::postal-addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::postal-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::postal-addresses", ...args: any[]): void
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

class PostalAddressDetails {

    // Own properties of Folks-0.6.Folks.PostalAddressDetails

    static name: string

    // Constructors of Folks-0.6.Folks.PostalAddressDetails

    constructor(config?: PostalAddressDetails.ConstructorProperties) 
    _init(config?: PostalAddressDetails.ConstructorProperties): void
}

module PresenceDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.PresenceDetails

        presenceType?: PresenceType | null
        presenceMessage?: string | null
        clientTypes?: string[] | null
        presenceStatus?: string | null
    }

}

interface PresenceDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.PresenceDetails

    presenceType: PresenceType
    presenceMessage: string | null
    clientTypes: string[]
    presenceStatus: string | null
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.PresenceDetails

    isOnline(): boolean
    // Has conflict: getPresenceType(): PresenceType
    // Has conflict: setPresenceType(value: PresenceType): void
    // Has conflict: getPresenceMessage(): string
    // Has conflict: setPresenceMessage(value: string): void
    // Has conflict: getClientTypes(): string[]
    // Has conflict: setClientTypes(value: string[]): void
    // Has conflict: getPresenceStatus(): string
    // Has conflict: setPresenceStatus(value: string): void

    // Own virtual methods of Folks-0.6.Folks.PresenceDetails

    getPresenceType(): PresenceType
    setPresenceType(value: PresenceType): void
    getPresenceMessage(): string
    setPresenceMessage(value: string): void
    getClientTypes(): string[]
    setClientTypes(value: string[]): void
    getPresenceStatus(): string
    setPresenceStatus(value: string): void

    // Class property signals of Folks-0.6.Folks.PresenceDetails

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

class PresenceDetails {

    // Own properties of Folks-0.6.Folks.PresenceDetails

    static name: string

    // Constructors of Folks-0.6.Folks.PresenceDetails

    constructor(config?: PresenceDetails.ConstructorProperties) 
    _init(config?: PresenceDetails.ConstructorProperties): void
    static getDefaultMessageFromType(type: PresenceType): string
    static typecmp(typeA: PresenceType, typeB: PresenceType): number
}

module RoleDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.RoleDetails

        roles?: Gee.Set | null
    }

}

interface RoleDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.RoleDetails

    roles: Gee.Set
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.RoleDetails

    // Has conflict: changeRoles(roles: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeRolesFinish(res: Gio.AsyncResult): void
    // Has conflict: getRoles(): Gee.Set
    // Has conflict: setRoles(value: Gee.Set): void

    // Own virtual methods of Folks-0.6.Folks.RoleDetails

    changeRoles(roles: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeRolesFinish(res: Gio.AsyncResult): void
    getRoles(): Gee.Set
    setRoles(value: Gee.Set): void

    // Class property signals of Folks-0.6.Folks.RoleDetails

    connect(sigName: "notify::roles", callback: (...args: any[]) => void): number
    on(sigName: "notify::roles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::roles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::roles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::roles", ...args: any[]): void
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

class RoleDetails {

    // Own properties of Folks-0.6.Folks.RoleDetails

    static name: string

    // Constructors of Folks-0.6.Folks.RoleDetails

    constructor(config?: RoleDetails.ConstructorProperties) 
    _init(config?: RoleDetails.ConstructorProperties): void
}

module UrlDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.UrlDetails

        urls?: Gee.Set | null
    }

}

interface UrlDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.UrlDetails

    urls: Gee.Set
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.UrlDetails

    // Has conflict: changeUrls(urls: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeUrlsFinish(res: Gio.AsyncResult): void
    // Has conflict: getUrls(): Gee.Set
    // Has conflict: setUrls(value: Gee.Set): void

    // Own virtual methods of Folks-0.6.Folks.UrlDetails

    changeUrls(urls: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeUrlsFinish(res: Gio.AsyncResult): void
    getUrls(): Gee.Set
    setUrls(value: Gee.Set): void

    // Class property signals of Folks-0.6.Folks.UrlDetails

    connect(sigName: "notify::urls", callback: (...args: any[]) => void): number
    on(sigName: "notify::urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::urls", ...args: any[]): void
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

class UrlDetails {

    // Own properties of Folks-0.6.Folks.UrlDetails

    static name: string

    // Constructors of Folks-0.6.Folks.UrlDetails

    constructor(config?: UrlDetails.ConstructorProperties) 
    _init(config?: UrlDetails.ConstructorProperties): void
}

module WebServiceDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.WebServiceDetails

        webServiceAddresses?: Gee.MultiMap | null
    }

}

interface WebServiceDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.WebServiceDetails

    webServiceAddresses: Gee.MultiMap
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.WebServiceDetails

    // Has conflict: changeWebServiceAddresses(webServiceAddresses: Gee.MultiMap, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeWebServiceAddressesFinish(res: Gio.AsyncResult): void
    // Has conflict: getWebServiceAddresses(): Gee.MultiMap
    // Has conflict: setWebServiceAddresses(value: Gee.MultiMap): void

    // Own virtual methods of Folks-0.6.Folks.WebServiceDetails

    changeWebServiceAddresses(webServiceAddresses: Gee.MultiMap, callback?: Gio.AsyncReadyCallback | null): void
    changeWebServiceAddressesFinish(res: Gio.AsyncResult): void
    getWebServiceAddresses(): Gee.MultiMap
    setWebServiceAddresses(value: Gee.MultiMap): void

    // Class property signals of Folks-0.6.Folks.WebServiceDetails

    connect(sigName: "notify::web-service-addresses", callback: (...args: any[]) => void): number
    on(sigName: "notify::web-service-addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::web-service-addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::web-service-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::web-service-addresses", ...args: any[]): void
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

class WebServiceDetails {

    // Own properties of Folks-0.6.Folks.WebServiceDetails

    static name: string

    // Constructors of Folks-0.6.Folks.WebServiceDetails

    constructor(config?: WebServiceDetails.ConstructorProperties) 
    _init(config?: WebServiceDetails.ConstructorProperties): void
}

module AbstractFieldDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.AbstractFieldDetails

        tType?: GObject.GType | null
        tDupFunc?: GObject.BoxedCopyFunc | null
        tDestroyFunc?: GLib.DestroyNotify | null
        value?: any | null
        id?: string | null
        parameters?: Gee.MultiMap | null
    }

}

interface AbstractFieldDetails {

    // Own properties of Folks-0.6.Folks.AbstractFieldDetails

    readonly tType: GObject.GType
    readonly tDupFunc: GObject.BoxedCopyFunc
    readonly tDestroyFunc: GLib.DestroyNotify
    value: any
    readonly valueType: GObject.GType
    id: string | null
    parameters: Gee.MultiMap
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.AbstractFieldDetails

    getParameterValues(parameterName: string): Gee.Collection | null
    addParameter(parameterName: string, parameterValue: string): void
    setParameter(parameterName: string, parameterValue: string): void
    extendParameters(additional: Gee.MultiMap): void
    removeParameterAll(parameterName: string): void
    // Has conflict: equal(that: AbstractFieldDetails): boolean
    // Has conflict: parametersEqual(that: AbstractFieldDetails): boolean
    // Has conflict: valuesEqual(that: AbstractFieldDetails): boolean
    // Has conflict: hash(): number
    // Has conflict: getValue(): any | null
    // Has conflict: setValue(value?: any | null): void
    getValueType(): GObject.GType
    // Has conflict: getId(): string
    // Has conflict: setId(value: string): void
    // Has conflict: getParameters(): Gee.MultiMap
    // Has conflict: setParameters(value: Gee.MultiMap): void

    // Own virtual methods of Folks-0.6.Folks.AbstractFieldDetails

    equal(that: AbstractFieldDetails): boolean
    parametersEqual(that: AbstractFieldDetails): boolean
    valuesEqual(that: AbstractFieldDetails): boolean
    hash(): number
    getValue(): any | null
    setValue(value?: any | null): void
    getId(): string
    setId(value: string): void
    getParameters(): Gee.MultiMap
    setParameters(value: Gee.MultiMap): void

    // Class property signals of Folks-0.6.Folks.AbstractFieldDetails

    connect(sigName: "notify::t-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (...args: any[]) => void): number
    on(sigName: "notify::parameters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parameters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parameters", ...args: any[]): void
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

class AbstractFieldDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.AbstractFieldDetails

    static name: string

    // Constructors of Folks-0.6.Folks.AbstractFieldDetails

    constructor(config?: AbstractFieldDetails.ConstructorProperties) 
    _init(config?: AbstractFieldDetails.ConstructorProperties): void
    static equalStatic(left: AbstractFieldDetails, right: AbstractFieldDetails): boolean
    static hashStatic(value: AbstractFieldDetails): number
}

module AvatarCache {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface AvatarCache {

    // Own properties of Folks-0.6.Folks.AvatarCache

    __gtype__: number

    // Owm methods of Folks-0.6.Folks.AvatarCache

    loadAvatar(id: string, callback?: Gio.AsyncReadyCallback | null): void
    loadAvatarFinish(res: Gio.AsyncResult): Gio.LoadableIcon | null
    storeAvatar(id: string, avatar: Gio.LoadableIcon, callback?: Gio.AsyncReadyCallback | null): void
    storeAvatarFinish(res: Gio.AsyncResult): string | null
    removeAvatar(id: string, callback?: Gio.AsyncReadyCallback | null): void
    removeAvatarFinish(res: Gio.AsyncResult): void
    buildUriForAvatar(id: string): string | null

    // Class property signals of Folks-0.6.Folks.AvatarCache

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

class AvatarCache extends GObject.Object {

    // Own properties of Folks-0.6.Folks.AvatarCache

    static name: string

    // Constructors of Folks-0.6.Folks.AvatarCache

    constructor(config?: AvatarCache.ConstructorProperties) 
    _init(config?: AvatarCache.ConstructorProperties): void
    static dup(): AvatarCache
}

module BackendStore {

    // Signal callback interfaces

    /**
     * Signal callback interface for `backend-available`
     */
    interface BackendAvailableSignalCallback {
        (backend: Backend): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.BackendStore

        enabledBackends?: Gee.Map | null
        isPrepared?: boolean | null
    }

}

interface BackendStore {

    // Own properties of Folks-0.6.Folks.BackendStore

    enabledBackends: Gee.Map
    isPrepared: boolean
    __gtype__: number

    // Own fields of Folks-0.6.Folks.BackendStore

    folksBackendStoreKEYFILEGROUPALLOTHERS: string | null

    // Owm methods of Folks-0.6.Folks.BackendStore

    prepare(callback?: Gio.AsyncReadyCallback | null): void
    prepareFinish(res: Gio.AsyncResult): void
    loadBackends(callback?: Gio.AsyncReadyCallback | null): void
    loadBackendsFinish(res: Gio.AsyncResult): void
    addBackend(backend: Backend): void
    dupBackendByName(name: string): Backend | null
    listBackends(): Gee.Collection
    enableBackend(name: string, callback?: Gio.AsyncReadyCallback | null): void
    enableBackendFinish(res: Gio.AsyncResult): void
    disableBackend(name: string, callback?: Gio.AsyncReadyCallback | null): void
    disableBackendFinish(res: Gio.AsyncResult): void
    getEnabledBackends(): Gee.Map
    getIsPrepared(): boolean

    // Own signals of Folks-0.6.Folks.BackendStore

    connect(sigName: "backend-available", callback: BackendStore.BackendAvailableSignalCallback): number
    on(sigName: "backend-available", callback: BackendStore.BackendAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-available", callback: BackendStore.BackendAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-available", callback: BackendStore.BackendAvailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "backend-available", ...args: any[]): void

    // Class property signals of Folks-0.6.Folks.BackendStore

    connect(sigName: "notify::enabled-backends", callback: (...args: any[]) => void): number
    on(sigName: "notify::enabled-backends", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enabled-backends", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enabled-backends", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enabled-backends", ...args: any[]): void
    connect(sigName: "notify::is-prepared", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-prepared", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-prepared", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-prepared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-prepared", ...args: any[]): void
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

class BackendStore extends GObject.Object {

    // Own properties of Folks-0.6.Folks.BackendStore

    static name: string

    // Constructors of Folks-0.6.Folks.BackendStore

    constructor(config?: BackendStore.ConstructorProperties) 
    _init(config?: BackendStore.ConstructorProperties): void
    static dup(): BackendStore
}

module Backend {

    // Signal callback interfaces

    /**
     * Signal callback interface for `persona-store-added`
     */
    interface PersonaStoreAddedSignalCallback {
        (store: PersonaStore): void
    }

    /**
     * Signal callback interface for `persona-store-removed`
     */
    interface PersonaStoreRemovedSignalCallback {
        (store: PersonaStore): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Backend {

    // Own properties of Folks-0.6.Folks.Backend

    readonly isPrepared: boolean
    readonly isQuiescent: boolean
    readonly name: string | null
    readonly personaStores: Gee.Map
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.Backend

    // Has conflict: disablePersonaStore(store: PersonaStore): void
    // Has conflict: enablePersonaStore(store: PersonaStore): void
    // Has conflict: setPersonaStores(storeids?: Gee.Set | null): void
    // Has conflict: prepare(callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: prepareFinish(res: Gio.AsyncResult): void
    // Has conflict: unprepare(callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: unprepareFinish(res: Gio.AsyncResult): void
    // Has conflict: getIsPrepared(): boolean
    // Has conflict: getIsQuiescent(): boolean
    // Has conflict: getName(): string
    // Has conflict: getPersonaStores(): Gee.Map

    // Own virtual methods of Folks-0.6.Folks.Backend

    disablePersonaStore(store: PersonaStore): void
    enablePersonaStore(store: PersonaStore): void
    setPersonaStores(storeids?: Gee.Set | null): void
    prepare(callback?: Gio.AsyncReadyCallback | null): void
    prepareFinish(res: Gio.AsyncResult): void
    unprepare(callback?: Gio.AsyncReadyCallback | null): void
    unprepareFinish(res: Gio.AsyncResult): void
    getIsPrepared(): boolean
    getIsQuiescent(): boolean
    getName(): string
    getPersonaStores(): Gee.Map

    // Own signals of Folks-0.6.Folks.Backend

    connect(sigName: "persona-store-added", callback: Backend.PersonaStoreAddedSignalCallback): number
    on(sigName: "persona-store-added", callback: Backend.PersonaStoreAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "persona-store-added", callback: Backend.PersonaStoreAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "persona-store-added", callback: Backend.PersonaStoreAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "persona-store-added", ...args: any[]): void
    connect(sigName: "persona-store-removed", callback: Backend.PersonaStoreRemovedSignalCallback): number
    on(sigName: "persona-store-removed", callback: Backend.PersonaStoreRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "persona-store-removed", callback: Backend.PersonaStoreRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "persona-store-removed", callback: Backend.PersonaStoreRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "persona-store-removed", ...args: any[]): void

    // Class property signals of Folks-0.6.Folks.Backend

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

class Backend extends GObject.Object {

    // Own properties of Folks-0.6.Folks.Backend

    static name: string

    // Constructors of Folks-0.6.Folks.Backend

    constructor(config?: Backend.ConstructorProperties) 
    _init(config?: Backend.ConstructorProperties): void
}

module Debug {

    // Signal callback interfaces

    /**
     * Signal callback interface for `print-status`
     */
    interface PrintStatusSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.Debug

        colourEnabled?: boolean | null
        debugOutputEnabled?: boolean | null
    }

}

interface Debug {

    // Own properties of Folks-0.6.Folks.Debug

    colourEnabled: boolean
    debugOutputEnabled: boolean
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.Debug

    emitPrintStatus(): void
    indent(): void
    unindent(): void
    getColourEnabled(): boolean
    setColourEnabled(value: boolean): void
    getDebugOutputEnabled(): boolean
    setDebugOutputEnabled(value: boolean): void

    // Own signals of Folks-0.6.Folks.Debug

    connect(sigName: "print-status", callback: Debug.PrintStatusSignalCallback): number
    on(sigName: "print-status", callback: Debug.PrintStatusSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "print-status", callback: Debug.PrintStatusSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "print-status", callback: Debug.PrintStatusSignalCallback): NodeJS.EventEmitter
    emit(sigName: "print-status", ...args: any[]): void

    // Class property signals of Folks-0.6.Folks.Debug

    connect(sigName: "notify::colour-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::colour-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::colour-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::colour-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::colour-enabled", ...args: any[]): void
    connect(sigName: "notify::debug-output-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::debug-output-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::debug-output-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::debug-output-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::debug-output-enabled", ...args: any[]): void
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

class Debug extends GObject.Object {

    // Own properties of Folks-0.6.Folks.Debug

    static name: string

    // Constructors of Folks-0.6.Folks.Debug

    constructor(config?: Debug.ConstructorProperties) 
    _init(config?: Debug.ConstructorProperties): void
    static dup(): Debug
    static dupWithFlags(debugFlags: string | null, colourEnabled: boolean): Debug
}

module EmailFieldDetails {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

interface EmailFieldDetails {

    // Own properties of Folks-0.6.Folks.EmailFieldDetails

    __gtype__: number

    // Class property signals of Folks-0.6.Folks.EmailFieldDetails

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::t-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (...args: any[]) => void): number
    on(sigName: "notify::parameters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parameters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EmailFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.6.Folks.EmailFieldDetails

    static name: string

    // Constructors of Folks-0.6.Folks.EmailFieldDetails

    constructor(config?: EmailFieldDetails.ConstructorProperties) 
    constructor(value: string, parameters?: Gee.MultiMap | null) 
    static new(value: string, parameters?: Gee.MultiMap | null): EmailFieldDetails
    _init(config?: EmailFieldDetails.ConstructorProperties): void
}

module ExtendedFieldDetails {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

interface ExtendedFieldDetails {

    // Own properties of Folks-0.6.Folks.ExtendedFieldDetails

    __gtype__: number

    // Class property signals of Folks-0.6.Folks.ExtendedFieldDetails

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::t-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (...args: any[]) => void): number
    on(sigName: "notify::parameters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parameters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExtendedFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.6.Folks.ExtendedFieldDetails

    static name: string

    // Constructors of Folks-0.6.Folks.ExtendedFieldDetails

    constructor(config?: ExtendedFieldDetails.ConstructorProperties) 
    constructor(value: string, parameters?: Gee.MultiMap | null) 
    static new(value: string, parameters?: Gee.MultiMap | null): ExtendedFieldDetails
    _init(config?: ExtendedFieldDetails.ConstructorProperties): void
}

module ImFieldDetails {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

interface ImFieldDetails {

    // Own properties of Folks-0.6.Folks.ImFieldDetails

    __gtype__: number

    // Class property signals of Folks-0.6.Folks.ImFieldDetails

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::t-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (...args: any[]) => void): number
    on(sigName: "notify::parameters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parameters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ImFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.6.Folks.ImFieldDetails

    static name: string

    // Constructors of Folks-0.6.Folks.ImFieldDetails

    constructor(config?: ImFieldDetails.ConstructorProperties) 
    constructor(value: string, parameters?: Gee.MultiMap | null) 
    static new(value: string, parameters?: Gee.MultiMap | null): ImFieldDetails
    _init(config?: ImFieldDetails.ConstructorProperties): void
}

module IndividualAggregator {

    // Signal callback interfaces

    /**
     * Signal callback interface for `individuals-changed`
     */
    interface IndividualsChangedSignalCallback {
        (added: Gee.Set, removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason): void
    }

    /**
     * Signal callback interface for `individuals-changed-detailed`
     */
    interface IndividualsChangedDetailedSignalCallback {
        (changes: Gee.MultiMap): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.IndividualAggregator

        backendStore?: BackendStore | null
        individuals?: Gee.Map | null
        user?: Individual | null
    }

}

interface IndividualAggregator {

    // Own properties of Folks-0.6.Folks.IndividualAggregator

    readonly isPrepared: boolean
    readonly isQuiescent: boolean
    readonly primaryStore: PersonaStore
    readonly backendStore: BackendStore
    individuals: Gee.Map
    user: Individual
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.IndividualAggregator

    prepare(callback?: Gio.AsyncReadyCallback | null): void
    prepareFinish(res: Gio.AsyncResult): void
    unprepare(callback?: Gio.AsyncReadyCallback | null): void
    unprepareFinish(res: Gio.AsyncResult): void
    getPotentialMatches(matchee: Individual, minThreshold: MatchResult): Gee.Map
    getAllPotentialMatches(minThreshold: MatchResult): Gee.Map
    addPersonaFromDetails(parent: Individual | null, personaStore: PersonaStore, details: GLib.HashTable, callback?: Gio.AsyncReadyCallback | null): void
    addPersonaFromDetailsFinish(res: Gio.AsyncResult): Persona | null
    removeIndividual(individual: Individual, callback?: Gio.AsyncReadyCallback | null): void
    removeIndividualFinish(res: Gio.AsyncResult): void
    removePersona(persona: Persona, callback?: Gio.AsyncReadyCallback | null): void
    removePersonaFinish(res: Gio.AsyncResult): void
    linkPersonas(personas: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    linkPersonasFinish(res: Gio.AsyncResult): void
    unlinkIndividual(individual: Individual, callback?: Gio.AsyncReadyCallback | null): void
    unlinkIndividualFinish(res: Gio.AsyncResult): void
    ensureIndividualPropertyWriteable(individual: Individual, propertyName: string, callback?: Gio.AsyncReadyCallback | null): void
    ensureIndividualPropertyWriteableFinish(res: Gio.AsyncResult): Persona
    lookUpIndividual(id: string, callback?: Gio.AsyncReadyCallback | null): void
    lookUpIndividualFinish(res: Gio.AsyncResult): Individual | null
    getIsPrepared(): boolean
    getIsQuiescent(): boolean
    getPrimaryStore(): PersonaStore | null
    getBackendStore(): BackendStore
    getIndividuals(): Gee.Map
    getUser(): Individual | null

    // Own signals of Folks-0.6.Folks.IndividualAggregator

    connect(sigName: "individuals-changed", callback: IndividualAggregator.IndividualsChangedSignalCallback): number
    on(sigName: "individuals-changed", callback: IndividualAggregator.IndividualsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "individuals-changed", callback: IndividualAggregator.IndividualsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "individuals-changed", callback: IndividualAggregator.IndividualsChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "individuals-changed", removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason, ...args: any[]): void
    connect(sigName: "individuals-changed-detailed", callback: IndividualAggregator.IndividualsChangedDetailedSignalCallback): number
    on(sigName: "individuals-changed-detailed", callback: IndividualAggregator.IndividualsChangedDetailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "individuals-changed-detailed", callback: IndividualAggregator.IndividualsChangedDetailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "individuals-changed-detailed", callback: IndividualAggregator.IndividualsChangedDetailedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "individuals-changed-detailed", ...args: any[]): void

    // Class property signals of Folks-0.6.Folks.IndividualAggregator

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
    connect(sigName: "notify::primary-store", callback: (...args: any[]) => void): number
    on(sigName: "notify::primary-store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::primary-store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::primary-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::primary-store", ...args: any[]): void
    connect(sigName: "notify::backend-store", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend-store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend-store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend-store", ...args: any[]): void
    connect(sigName: "notify::individuals", callback: (...args: any[]) => void): number
    on(sigName: "notify::individuals", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::individuals", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::individuals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::individuals", ...args: any[]): void
    connect(sigName: "notify::user", callback: (...args: any[]) => void): number
    on(sigName: "notify::user", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user", ...args: any[]): void
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

class IndividualAggregator extends GObject.Object {

    // Own properties of Folks-0.6.Folks.IndividualAggregator

    static name: string

    // Constructors of Folks-0.6.Folks.IndividualAggregator

    constructor(config?: IndividualAggregator.ConstructorProperties) 
    constructor() 
    static new(): IndividualAggregator
    static withBackendStore(store: BackendStore): IndividualAggregator
    _init(config?: IndividualAggregator.ConstructorProperties): void
    static dup(): IndividualAggregator
    static dupWithBackendStore(store: BackendStore): IndividualAggregator | null
}

module Individual {

    // Signal callback interfaces

    /**
     * Signal callback interface for `removed`
     */
    interface RemovedSignalCallback {
        (replacementIndividual?: Individual | null): void
    }

    /**
     * Signal callback interface for `personas-changed`
     */
    interface PersonasChangedSignalCallback {
        (added: Gee.Set, removed: Gee.Set): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends AliasDetails.ConstructorProperties, AvatarDetails.ConstructorProperties, BirthdayDetails.ConstructorProperties, EmailDetails.ConstructorProperties, ExtendedInfo.ConstructorProperties, FavouriteDetails.ConstructorProperties, GenderDetails.ConstructorProperties, GroupDetails.ConstructorProperties, ImDetails.ConstructorProperties, InteractionDetails.ConstructorProperties, LocalIdDetails.ConstructorProperties, LocationDetails.ConstructorProperties, NameDetails.ConstructorProperties, NoteDetails.ConstructorProperties, PresenceDetails.ConstructorProperties, PhoneDetails.ConstructorProperties, PostalAddressDetails.ConstructorProperties, RoleDetails.ConstructorProperties, UrlDetails.ConstructorProperties, WebServiceDetails.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.Individual

        trustLevel?: TrustLevel | null
        isUser?: boolean | null
        id?: string | null
        personas?: Gee.Set | null
    }

}

interface Individual extends AliasDetails, AvatarDetails, BirthdayDetails, EmailDetails, ExtendedInfo, FavouriteDetails, GenderDetails, GroupDetails, ImDetails, InteractionDetails, LocalIdDetails, LocationDetails, NameDetails, NoteDetails, PresenceDetails, PhoneDetails, PostalAddressDetails, RoleDetails, UrlDetails, WebServiceDetails {

    // Own properties of Folks-0.6.Folks.Individual

    trustLevel: TrustLevel
    isUser: boolean
    id: string | null
    readonly displayName: string | null
    personas: Gee.Set
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.Individual

    hasAntiLinkWithPersona(p: Persona): boolean
    hasAntiLinkWithIndividual(i: Individual): boolean
    getTrustLevel(): TrustLevel
    getIsUser(): boolean
    getId(): string
    getDisplayName(): string
    getPersonas(): Gee.Set
    setPersonas(value: Gee.Set): void

    // Own signals of Folks-0.6.Folks.Individual

    connect(sigName: "removed", callback: Individual.RemovedSignalCallback): number
    on(sigName: "removed", callback: Individual.RemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "removed", callback: Individual.RemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "removed", callback: Individual.RemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "removed", ...args: any[]): void
    connect(sigName: "personas-changed", callback: Individual.PersonasChangedSignalCallback): number
    on(sigName: "personas-changed", callback: Individual.PersonasChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "personas-changed", callback: Individual.PersonasChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "personas-changed", callback: Individual.PersonasChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "personas-changed", removed: Gee.Set, ...args: any[]): void

    // Class property signals of Folks-0.6.Folks.Individual

    connect(sigName: "notify::trust-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::trust-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::trust-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::trust-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::trust-level", ...args: any[]): void
    connect(sigName: "notify::is-user", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-user", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-user", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-user", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::personas", callback: (...args: any[]) => void): number
    on(sigName: "notify::personas", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::personas", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::personas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::personas", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    connect(sigName: "notify::phone-numbers", callback: (...args: any[]) => void): number
    on(sigName: "notify::phone-numbers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::phone-numbers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::phone-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::phone-numbers", ...args: any[]): void
    connect(sigName: "notify::postal-addresses", callback: (...args: any[]) => void): number
    on(sigName: "notify::postal-addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::postal-addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::postal-addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::postal-addresses", ...args: any[]): void
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

class Individual extends GObject.Object {

    // Own properties of Folks-0.6.Folks.Individual

    static name: string

    // Constructors of Folks-0.6.Folks.Individual

    constructor(config?: Individual.ConstructorProperties) 
    constructor(personas?: Gee.Set | null) 
    static new(personas?: Gee.Set | null): Individual
    _init(config?: Individual.ConstructorProperties): void
}

module Location {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Location {

    // Own properties of Folks-0.6.Folks.Location

    __gtype__: number

    // Own fields of Folks-0.6.Folks.Location

    latitude: number
    longitude: number

    // Owm methods of Folks-0.6.Folks.Location

    equal(other: Location): boolean
    equalCoordinates(latitude: number, longitude: number): boolean

    // Class property signals of Folks-0.6.Folks.Location

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

class Location extends GObject.Object {

    // Own properties of Folks-0.6.Folks.Location

    static name: string

    // Constructors of Folks-0.6.Folks.Location

    constructor(config?: Location.ConstructorProperties) 
    constructor(latitude: number, longitude: number) 
    static new(latitude: number, longitude: number): Location
    _init(config?: Location.ConstructorProperties): void
}

module StructuredName {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.StructuredName

        familyName?: string | null
        givenName?: string | null
        additionalNames?: string | null
        prefixes?: string | null
        suffixes?: string | null
    }

}

interface StructuredName {

    // Own properties of Folks-0.6.Folks.StructuredName

    familyName: string | null
    givenName: string | null
    additionalNames: string | null
    prefixes: string | null
    suffixes: string | null
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.StructuredName

    isEmpty(): boolean
    equal(other: StructuredName): boolean
    toString(): string | null
    toStringWithFormat(nameFmt: string): string | null
    getFamilyName(): string
    setFamilyName(value: string): void
    getGivenName(): string
    setGivenName(value: string): void
    getAdditionalNames(): string
    setAdditionalNames(value: string): void
    getPrefixes(): string
    setPrefixes(value: string): void
    getSuffixes(): string
    setSuffixes(value: string): void

    // Class property signals of Folks-0.6.Folks.StructuredName

    connect(sigName: "notify::family-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::family-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::family-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::family-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::family-name", ...args: any[]): void
    connect(sigName: "notify::given-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::given-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::given-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::given-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::given-name", ...args: any[]): void
    connect(sigName: "notify::additional-names", callback: (...args: any[]) => void): number
    on(sigName: "notify::additional-names", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::additional-names", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::additional-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::additional-names", ...args: any[]): void
    connect(sigName: "notify::prefixes", callback: (...args: any[]) => void): number
    on(sigName: "notify::prefixes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::prefixes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::prefixes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::prefixes", ...args: any[]): void
    connect(sigName: "notify::suffixes", callback: (...args: any[]) => void): number
    on(sigName: "notify::suffixes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::suffixes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::suffixes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::suffixes", ...args: any[]): void
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

class StructuredName extends GObject.Object {

    // Own properties of Folks-0.6.Folks.StructuredName

    static name: string

    // Constructors of Folks-0.6.Folks.StructuredName

    constructor(config?: StructuredName.ConstructorProperties) 
    constructor(familyName?: string | null, givenName?: string | null, additionalNames?: string | null, prefixes?: string | null, suffixes?: string | null) 
    static new(familyName?: string | null, givenName?: string | null, additionalNames?: string | null, prefixes?: string | null, suffixes?: string | null): StructuredName
    static simple(familyName?: string | null, givenName?: string | null): StructuredName
    _init(config?: StructuredName.ConstructorProperties): void
}

module NoteFieldDetails {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.NoteFieldDetails

        uid?: string | null
    }

}

interface NoteFieldDetails {

    // Own properties of Folks-0.6.Folks.NoteFieldDetails

    uid: string | null
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.NoteFieldDetails

    getUid(): string
    setUid(value: string): void

    // Class property signals of Folks-0.6.Folks.NoteFieldDetails

    connect(sigName: "notify::uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::t-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (...args: any[]) => void): number
    on(sigName: "notify::parameters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parameters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NoteFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.6.Folks.NoteFieldDetails

    static name: string

    // Constructors of Folks-0.6.Folks.NoteFieldDetails

    constructor(config?: NoteFieldDetails.ConstructorProperties) 
    constructor(value: string, parameters?: Gee.MultiMap | null, uid?: string | null) 
    static new(value: string, parameters?: Gee.MultiMap | null, uid?: string | null): NoteFieldDetails
    _init(config?: NoteFieldDetails.ConstructorProperties): void
}

module ObjectCache {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.ObjectCache

        tType?: GObject.GType | null
        tDupFunc?: GObject.BoxedCopyFunc | null
        tDestroyFunc?: GLib.DestroyNotify | null
        typeId?: string | null
        id?: string | null
    }

}

interface ObjectCache {

    // Own properties of Folks-0.6.Folks.ObjectCache

    readonly tType: GObject.GType
    readonly tDupFunc: GObject.BoxedCopyFunc
    readonly tDestroyFunc: GLib.DestroyNotify
    readonly typeId: string | null
    readonly id: string | null
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.ObjectCache

    // Has conflict: getSerialisedObjectType(objectVersion: number): GLib.VariantType | null
    // Has conflict: getSerialisedObjectVersion(): number
    // Has conflict: serialiseObject(object?: any | null): GLib.Variant
    // Has conflict: deserialiseObject(variant: GLib.Variant, objectVersion: number): any | null
    loadObjects(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadObjectsFinish(res: Gio.AsyncResult): Gee.Set | null
    storeObjects(objects: Gee.Set, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    storeObjectsFinish(res: Gio.AsyncResult): void
    clearCache(callback?: Gio.AsyncReadyCallback | null): void
    clearCacheFinish(res: Gio.AsyncResult): void
    getTypeId(): string
    getId(): string

    // Own virtual methods of Folks-0.6.Folks.ObjectCache

    getSerialisedObjectType(objectVersion: number): GLib.VariantType | null
    getSerialisedObjectVersion(): number
    serialiseObject(object?: any | null): GLib.Variant
    deserialiseObject(variant: GLib.Variant, objectVersion: number): any | null

    // Class property signals of Folks-0.6.Folks.ObjectCache

    connect(sigName: "notify::t-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::type-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::type-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type-id", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
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

class ObjectCache extends GObject.Object {

    // Own properties of Folks-0.6.Folks.ObjectCache

    static name: string

    // Constructors of Folks-0.6.Folks.ObjectCache

    constructor(config?: ObjectCache.ConstructorProperties) 
    _init(config?: ObjectCache.ConstructorProperties): void
}

module PersonaStore {

    // Signal callback interfaces

    /**
     * Signal callback interface for `personas-changed`
     */
    interface PersonasChangedSignalCallback {
        (added: Gee.Set, removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason): void
    }

    /**
     * Signal callback interface for `removed`
     */
    interface RemovedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.PersonaStore

        displayName?: string | null
        id?: string | null
        isWriteable?: boolean | null
        trustLevel?: PersonaStoreTrust | null
        isPrimaryStore?: boolean | null
        isUserSetDefault?: boolean | null
    }

}

interface PersonaStore {

    // Own properties of Folks-0.6.Folks.PersonaStore

    readonly typeId: string | null
    readonly displayName: string | null
    readonly id: string | null
    readonly personas: Gee.Map
    readonly canAddPersonas: MaybeBool
    readonly canAliasPersonas: MaybeBool
    readonly canGroupPersonas: MaybeBool
    readonly canRemovePersonas: MaybeBool
    readonly isPrepared: boolean
    readonly isQuiescent: boolean
    isWriteable: boolean
    trustLevel: PersonaStoreTrust
    readonly alwaysWriteableProperties: string[]
    isPrimaryStore: boolean
    isUserSetDefault: boolean
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.PersonaStore

    emitPersonasChanged(added: Gee.Set | null, removed: Gee.Set | null, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason): void
    // Has conflict: prepare(callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: prepareFinish(res: Gio.AsyncResult): void
    // Has conflict: flush(callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: flushFinish(res: Gio.AsyncResult): void
    // Has conflict: addPersonaFromDetails(details: GLib.HashTable, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: addPersonaFromDetailsFinish(res: Gio.AsyncResult): Persona | null
    // Has conflict: removePersona(persona: Persona, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: removePersonaFinish(res: Gio.AsyncResult): void
    // Has conflict: getTypeId(): string
    getDisplayName(): string
    getId(): string
    // Has conflict: getPersonas(): Gee.Map
    // Has conflict: getCanAddPersonas(): MaybeBool
    // Has conflict: getCanAliasPersonas(): MaybeBool
    // Has conflict: getCanGroupPersonas(): MaybeBool
    // Has conflict: getCanRemovePersonas(): MaybeBool
    // Has conflict: getIsPrepared(): boolean
    // Has conflict: getIsQuiescent(): boolean
    getIsWriteable(): boolean
    setIsWriteable(value: boolean): void
    getTrustLevel(): PersonaStoreTrust
    setTrustLevel(value: PersonaStoreTrust): void
    // Has conflict: getAlwaysWriteableProperties(): string[]
    getIsPrimaryStore(): boolean
    getIsUserSetDefault(): boolean

    // Own virtual methods of Folks-0.6.Folks.PersonaStore

    prepare(callback?: Gio.AsyncReadyCallback | null): void
    prepareFinish(res: Gio.AsyncResult): void
    flush(callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(res: Gio.AsyncResult): void
    addPersonaFromDetails(details: GLib.HashTable, callback?: Gio.AsyncReadyCallback | null): void
    addPersonaFromDetailsFinish(res: Gio.AsyncResult): Persona | null
    removePersona(persona: Persona, callback?: Gio.AsyncReadyCallback | null): void
    removePersonaFinish(res: Gio.AsyncResult): void
    getTypeId(): string
    getPersonas(): Gee.Map
    getCanAddPersonas(): MaybeBool
    getCanAliasPersonas(): MaybeBool
    getCanGroupPersonas(): MaybeBool
    getCanRemovePersonas(): MaybeBool
    getIsPrepared(): boolean
    getIsQuiescent(): boolean
    getAlwaysWriteableProperties(): string[]

    // Own signals of Folks-0.6.Folks.PersonaStore

    connect(sigName: "personas-changed", callback: PersonaStore.PersonasChangedSignalCallback): number
    on(sigName: "personas-changed", callback: PersonaStore.PersonasChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "personas-changed", callback: PersonaStore.PersonasChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "personas-changed", callback: PersonaStore.PersonasChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "personas-changed", removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason, ...args: any[]): void
    connect(sigName: "removed", callback: PersonaStore.RemovedSignalCallback): number
    on(sigName: "removed", callback: PersonaStore.RemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "removed", callback: PersonaStore.RemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "removed", callback: PersonaStore.RemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "removed", ...args: any[]): void

    // Class property signals of Folks-0.6.Folks.PersonaStore

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

class PersonaStore extends GObject.Object {

    // Own properties of Folks-0.6.Folks.PersonaStore

    static name: string

    // Constructors of Folks-0.6.Folks.PersonaStore

    constructor(config?: PersonaStore.ConstructorProperties) 
    _init(config?: PersonaStore.ConstructorProperties): void
    static detailKey(detail: PersonaDetail): string | null
}

module Persona {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.Persona

        iid?: string | null
        uid?: string | null
        displayId?: string | null
        isUser?: boolean | null
        store?: PersonaStore | null
        individual?: Individual | null
    }

}

interface Persona {

    // Own properties of Folks-0.6.Folks.Persona

    readonly iid: string | null
    readonly uid: string | null
    readonly displayId: string | null
    readonly isUser: boolean
    readonly store: PersonaStore
    individual: Individual
    readonly linkableProperties: string[]
    readonly writeableProperties: string[]
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.Persona

    // Has conflict: linkablePropertyToLinks(propName: string, callback: any): void
    getIid(): string
    getUid(): string
    getDisplayId(): string
    getIsUser(): boolean
    getStore(): PersonaStore
    getIndividual(): Individual | null
    // Has conflict: getLinkableProperties(): string[]
    // Has conflict: getWriteableProperties(): string[]

    // Own virtual methods of Folks-0.6.Folks.Persona

    linkablePropertyToLinks(propName: string, callback: any): void
    getLinkableProperties(): string[]
    getWriteableProperties(): string[]

    // Class property signals of Folks-0.6.Folks.Persona

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

class Persona extends GObject.Object {

    // Own properties of Folks-0.6.Folks.Persona

    static name: string

    // Constructors of Folks-0.6.Folks.Persona

    constructor(config?: Persona.ConstructorProperties) 
    _init(config?: Persona.ConstructorProperties): void
    static buildUid(backendName: string, personaStoreId: string, personaId: string): string | null
    static splitUid(uid: string): [ /* backendName */ string | null, /* personaStoreId */ string | null, /* personaId */ string | null ]
}

module PhoneFieldDetails {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

interface PhoneFieldDetails {

    // Own properties of Folks-0.6.Folks.PhoneFieldDetails

    __gtype__: number

    // Owm methods of Folks-0.6.Folks.PhoneFieldDetails

    getNormalised(): string | null

    // Class property signals of Folks-0.6.Folks.PhoneFieldDetails

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::t-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (...args: any[]) => void): number
    on(sigName: "notify::parameters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parameters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PhoneFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.6.Folks.PhoneFieldDetails

    static name: string

    // Constructors of Folks-0.6.Folks.PhoneFieldDetails

    constructor(config?: PhoneFieldDetails.ConstructorProperties) 
    constructor(value: string, parameters?: Gee.MultiMap | null) 
    static new(value: string, parameters?: Gee.MultiMap | null): PhoneFieldDetails
    _init(config?: PhoneFieldDetails.ConstructorProperties): void
}

module PostalAddress {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.PostalAddress

        poBox?: string | null
        extension?: string | null
        street?: string | null
        locality?: string | null
        region?: string | null
        postalCode?: string | null
        country?: string | null
        addressFormat?: string | null
        uid?: string | null
    }

}

interface PostalAddress {

    // Own properties of Folks-0.6.Folks.PostalAddress

    poBox: string | null
    extension: string | null
    street: string | null
    locality: string | null
    region: string | null
    postalCode: string | null
    country: string | null
    addressFormat: string | null
    uid: string | null
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.PostalAddress

    isEmpty(): boolean
    equal(with_: PostalAddress): boolean
    toString(): string | null
    getPoBox(): string
    setPoBox(value: string): void
    getExtension(): string
    setExtension(value: string): void
    getStreet(): string
    setStreet(value: string): void
    getLocality(): string
    setLocality(value: string): void
    getRegion(): string
    setRegion(value: string): void
    getPostalCode(): string
    setPostalCode(value: string): void
    getCountry(): string
    setCountry(value: string): void
    getAddressFormat(): string
    setAddressFormat(value: string): void
    getUid(): string
    setUid(value: string): void

    // Class property signals of Folks-0.6.Folks.PostalAddress

    connect(sigName: "notify::po-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::po-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::po-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::po-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::po-box", ...args: any[]): void
    connect(sigName: "notify::extension", callback: (...args: any[]) => void): number
    on(sigName: "notify::extension", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extension", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extension", ...args: any[]): void
    connect(sigName: "notify::street", callback: (...args: any[]) => void): number
    on(sigName: "notify::street", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::street", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::street", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::street", ...args: any[]): void
    connect(sigName: "notify::locality", callback: (...args: any[]) => void): number
    on(sigName: "notify::locality", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::locality", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::locality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::locality", ...args: any[]): void
    connect(sigName: "notify::region", callback: (...args: any[]) => void): number
    on(sigName: "notify::region", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::region", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::region", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::region", ...args: any[]): void
    connect(sigName: "notify::postal-code", callback: (...args: any[]) => void): number
    on(sigName: "notify::postal-code", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::postal-code", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::postal-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::postal-code", ...args: any[]): void
    connect(sigName: "notify::country", callback: (...args: any[]) => void): number
    on(sigName: "notify::country", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::country", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::country", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::country", ...args: any[]): void
    connect(sigName: "notify::address-format", callback: (...args: any[]) => void): number
    on(sigName: "notify::address-format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::address-format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::address-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::address-format", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uid", ...args: any[]): void
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

class PostalAddress extends GObject.Object {

    // Own properties of Folks-0.6.Folks.PostalAddress

    static name: string

    // Constructors of Folks-0.6.Folks.PostalAddress

    constructor(config?: PostalAddress.ConstructorProperties) 
    constructor(poBox?: string | null, extension?: string | null, street?: string | null, locality?: string | null, region?: string | null, postalCode?: string | null, country?: string | null, addressFormat?: string | null, uid?: string | null) 
    static new(poBox?: string | null, extension?: string | null, street?: string | null, locality?: string | null, region?: string | null, postalCode?: string | null, country?: string | null, addressFormat?: string | null, uid?: string | null): PostalAddress
    _init(config?: PostalAddress.ConstructorProperties): void
}

module PostalAddressFieldDetails {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

interface PostalAddressFieldDetails {

    // Own properties of Folks-0.6.Folks.PostalAddressFieldDetails

    __gtype__: number

    // Class property signals of Folks-0.6.Folks.PostalAddressFieldDetails

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::t-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (...args: any[]) => void): number
    on(sigName: "notify::parameters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parameters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PostalAddressFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.6.Folks.PostalAddressFieldDetails

    static name: string

    // Constructors of Folks-0.6.Folks.PostalAddressFieldDetails

    constructor(config?: PostalAddressFieldDetails.ConstructorProperties) 
    constructor(value: PostalAddress, parameters?: Gee.MultiMap | null) 
    static new(value: PostalAddress, parameters?: Gee.MultiMap | null): PostalAddressFieldDetails
    _init(config?: PostalAddressFieldDetails.ConstructorProperties): void
}

module PotentialMatch {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PotentialMatch {

    // Own properties of Folks-0.6.Folks.PotentialMatch

    __gtype__: number

    // Own fields of Folks-0.6.Folks.PotentialMatch

    folksPotentialMatchKnownEmailAliases: Gee.Set

    // Owm methods of Folks-0.6.Folks.PotentialMatch

    potentialMatch(a: Individual, b: Individual): MatchResult

    // Class property signals of Folks-0.6.Folks.PotentialMatch

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

class PotentialMatch extends GObject.Object {

    // Own properties of Folks-0.6.Folks.PotentialMatch

    static name: string

    // Constructors of Folks-0.6.Folks.PotentialMatch

    constructor(config?: PotentialMatch.ConstructorProperties) 
    constructor() 
    static new(): PotentialMatch
    _init(config?: PotentialMatch.ConstructorProperties): void
}

module Query {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.Query

        matchFields?: string[] | null
    }

}

interface Query {

    // Own properties of Folks-0.6.Folks.Query

    readonly matchFields: string[]
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.Query

    // Has conflict: isMatch(individual: Individual): number
    // Has conflict: getMatchFields(): string[]

    // Own virtual methods of Folks-0.6.Folks.Query

    isMatch(individual: Individual): number
    getMatchFields(): string[]

    // Class property signals of Folks-0.6.Folks.Query

    connect(sigName: "notify::match-fields", callback: (...args: any[]) => void): number
    on(sigName: "notify::match-fields", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::match-fields", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::match-fields", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::match-fields", ...args: any[]): void
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

class Query extends GObject.Object {

    // Own properties of Folks-0.6.Folks.Query

    static name: string

    // Constructors of Folks-0.6.Folks.Query

    constructor(config?: Query.ConstructorProperties) 
    _init(config?: Query.ConstructorProperties): void
}

module Role {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.Role

        organisationName?: string | null
        title?: string | null
        role?: string | null
        uid?: string | null
    }

}

interface Role {

    // Own properties of Folks-0.6.Folks.Role

    organisationName: string | null
    title: string | null
    role: string | null
    uid: string | null
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.Role

    isEmpty(): boolean
    toString(): string | null
    getOrganisationName(): string
    setOrganisationName(value: string): void
    getTitle(): string
    setTitle(value: string): void
    getRole(): string
    setRole(value: string): void
    getUid(): string
    setUid(value: string): void

    // Class property signals of Folks-0.6.Folks.Role

    connect(sigName: "notify::organisation-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::organisation-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::organisation-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::organisation-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::organisation-name", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::role", callback: (...args: any[]) => void): number
    on(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uid", ...args: any[]): void
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

class Role extends GObject.Object {

    // Own properties of Folks-0.6.Folks.Role

    static name: string

    // Constructors of Folks-0.6.Folks.Role

    constructor(config?: Role.ConstructorProperties) 
    constructor(title?: string | null, organisationName?: string | null, uid?: string | null) 
    static new(title?: string | null, organisationName?: string | null, uid?: string | null): Role
    _init(config?: Role.ConstructorProperties): void
    static equal(a: Role, b: Role): boolean
    static hash(r: Role): number
}

module RoleFieldDetails {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

interface RoleFieldDetails {

    // Own properties of Folks-0.6.Folks.RoleFieldDetails

    __gtype__: number

    // Class property signals of Folks-0.6.Folks.RoleFieldDetails

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::t-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (...args: any[]) => void): number
    on(sigName: "notify::parameters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parameters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RoleFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.6.Folks.RoleFieldDetails

    static name: string

    // Constructors of Folks-0.6.Folks.RoleFieldDetails

    constructor(config?: RoleFieldDetails.ConstructorProperties) 
    constructor(value: Role, parameters?: Gee.MultiMap | null) 
    static new(value: Role, parameters?: Gee.MultiMap | null): RoleFieldDetails
    _init(config?: RoleFieldDetails.ConstructorProperties): void
}

module SearchView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `individuals-changed-detailed`
     */
    interface IndividualsChangedDetailedSignalCallback {
        (added: Gee.SortedSet, removed: Gee.SortedSet): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.SearchView

        query?: Query | null
    }

}

interface SearchView {

    // Own properties of Folks-0.6.Folks.SearchView

    readonly aggregator: IndividualAggregator
    query: Query
    readonly individuals: Gee.SortedSet
    readonly isPrepared: boolean
    readonly isQuiescent: boolean
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.SearchView

    prepare(callback?: Gio.AsyncReadyCallback | null): void
    prepareFinish(res: Gio.AsyncResult): void
    unprepare(callback?: Gio.AsyncReadyCallback | null): void
    unprepareFinish(res: Gio.AsyncResult): void
    refresh(callback?: Gio.AsyncReadyCallback | null): void
    refreshFinish(res: Gio.AsyncResult): void
    getAggregator(): IndividualAggregator
    getQuery(): Query
    setQuery(value: Query): void
    getIndividuals(): Gee.SortedSet
    getIsPrepared(): boolean
    getIsQuiescent(): boolean

    // Own signals of Folks-0.6.Folks.SearchView

    connect(sigName: "individuals-changed-detailed", callback: SearchView.IndividualsChangedDetailedSignalCallback): number
    on(sigName: "individuals-changed-detailed", callback: SearchView.IndividualsChangedDetailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "individuals-changed-detailed", callback: SearchView.IndividualsChangedDetailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "individuals-changed-detailed", callback: SearchView.IndividualsChangedDetailedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "individuals-changed-detailed", removed: Gee.SortedSet, ...args: any[]): void

    // Class property signals of Folks-0.6.Folks.SearchView

    connect(sigName: "notify::aggregator", callback: (...args: any[]) => void): number
    on(sigName: "notify::aggregator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::aggregator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::aggregator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::aggregator", ...args: any[]): void
    connect(sigName: "notify::query", callback: (...args: any[]) => void): number
    on(sigName: "notify::query", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::query", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::query", ...args: any[]): void
    connect(sigName: "notify::individuals", callback: (...args: any[]) => void): number
    on(sigName: "notify::individuals", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::individuals", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::individuals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::individuals", ...args: any[]): void
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

class SearchView extends GObject.Object {

    // Own properties of Folks-0.6.Folks.SearchView

    static name: string

    // Constructors of Folks-0.6.Folks.SearchView

    constructor(config?: SearchView.ConstructorProperties) 
    constructor(aggregator: IndividualAggregator, query: Query) 
    static new(aggregator: IndividualAggregator, query: Query): SearchView
    _init(config?: SearchView.ConstructorProperties): void
}

module SimpleQuery {

    // Constructor properties interface

    interface ConstructorProperties extends Query.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.SimpleQuery

        queryString?: string | null
        queryLocale?: string | null
    }

}

interface SimpleQuery {

    // Own properties of Folks-0.6.Folks.SimpleQuery

    queryString: string | null
    queryLocale: string | null
    __gtype__: number

    // Owm methods of Folks-0.6.Folks.SimpleQuery

    getQueryString(): string
    setQueryString(value: string): void
    getQueryLocale(): string | null
    setQueryLocale(value?: string | null): void

    // Class property signals of Folks-0.6.Folks.SimpleQuery

    connect(sigName: "notify::query-string", callback: (...args: any[]) => void): number
    on(sigName: "notify::query-string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::query-string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::query-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::query-string", ...args: any[]): void
    connect(sigName: "notify::query-locale", callback: (...args: any[]) => void): number
    on(sigName: "notify::query-locale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::query-locale", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::query-locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::query-locale", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::match-fields", callback: (...args: any[]) => void): number
    on(sigName: "notify::match-fields", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::match-fields", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::match-fields", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::match-fields", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SimpleQuery extends Query {

    // Own properties of Folks-0.6.Folks.SimpleQuery

    static name: string

    // Constructors of Folks-0.6.Folks.SimpleQuery

    constructor(config?: SimpleQuery.ConstructorProperties) 
    constructor(queryString: string, matchFields: string[]) 
    static new(queryString: string, matchFields: string[]): SimpleQuery
    _init(config?: SimpleQuery.ConstructorProperties): void
}

module UrlFieldDetails {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

interface UrlFieldDetails {

    // Own properties of Folks-0.6.Folks.UrlFieldDetails

    __gtype__: number

    // Class property signals of Folks-0.6.Folks.UrlFieldDetails

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::t-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (...args: any[]) => void): number
    on(sigName: "notify::parameters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parameters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UrlFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.6.Folks.UrlFieldDetails

    static name: string

    // Constructors of Folks-0.6.Folks.UrlFieldDetails

    constructor(config?: UrlFieldDetails.ConstructorProperties) 
    constructor(value: string, parameters?: Gee.MultiMap | null) 
    static new(value: string, parameters?: Gee.MultiMap | null): UrlFieldDetails
    _init(config?: UrlFieldDetails.ConstructorProperties): void
}

module Utils {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Utils {

    // Own properties of Folks-0.6.Folks.Utils

    __gtype__: number

    // Class property signals of Folks-0.6.Folks.Utils

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

class Utils extends GObject.Object {

    // Own properties of Folks-0.6.Folks.Utils

    static name: string

    // Constructors of Folks-0.6.Folks.Utils

    constructor(config?: Utils.ConstructorProperties) 
    constructor() 
    static new(): Utils
    _init(config?: Utils.ConstructorProperties): void
    static multiMapStrStrEqual(a: Gee.MultiMap, b: Gee.MultiMap): boolean
    static multiMapStrAfdEqual(a: Gee.MultiMap, b: Gee.MultiMap): boolean
    static setAfdEqual(a: Gee.Set, b: Gee.Set): boolean
    static setStringAfdEqual(a: Gee.Set, b: Gee.Set): boolean
}

module WebServiceFieldDetails {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

interface WebServiceFieldDetails {

    // Own properties of Folks-0.6.Folks.WebServiceFieldDetails

    __gtype__: number

    // Class property signals of Folks-0.6.Folks.WebServiceFieldDetails

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::t-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (...args: any[]) => void): number
    on(sigName: "notify::parameters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parameters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WebServiceFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.6.Folks.WebServiceFieldDetails

    static name: string

    // Constructors of Folks-0.6.Folks.WebServiceFieldDetails

    constructor(config?: WebServiceFieldDetails.ConstructorProperties) 
    constructor(value: string, parameters?: Gee.MultiMap | null) 
    static new(value: string, parameters?: Gee.MultiMap | null): WebServiceFieldDetails
    _init(config?: WebServiceFieldDetails.ConstructorProperties): void
}

interface AbstractFieldDetailsClass {

    // Own fields of Folks-0.6.Folks.AbstractFieldDetailsClass

    equal: (that: AbstractFieldDetails) => boolean
    parametersEqual: (that: AbstractFieldDetails) => boolean
    valuesEqual: (that: AbstractFieldDetails) => boolean
    hash: () => number
}

abstract class AbstractFieldDetailsClass {

    // Own properties of Folks-0.6.Folks.AbstractFieldDetailsClass

    static name: string
}

interface AbstractFieldDetailsPrivate {
}

class AbstractFieldDetailsPrivate {

    // Own properties of Folks-0.6.Folks.AbstractFieldDetailsPrivate

    static name: string
}

interface AvatarCacheClass {
}

abstract class AvatarCacheClass {

    // Own properties of Folks-0.6.Folks.AvatarCacheClass

    static name: string
}

interface AvatarCachePrivate {
}

class AvatarCachePrivate {

    // Own properties of Folks-0.6.Folks.AvatarCachePrivate

    static name: string
}

interface BackendStoreClass {
}

abstract class BackendStoreClass {

    // Own properties of Folks-0.6.Folks.BackendStoreClass

    static name: string
}

interface BackendStorePrivate {
}

class BackendStorePrivate {

    // Own properties of Folks-0.6.Folks.BackendStorePrivate

    static name: string
}

interface BackendClass {

    // Own fields of Folks-0.6.Folks.BackendClass

    disablePersonaStore: (store: PersonaStore) => void
    enablePersonaStore: (store: PersonaStore) => void
    setPersonaStores: (storeids?: Gee.Set | null) => void
    prepare: (callback?: Gio.AsyncReadyCallback | null) => void
    prepareFinish: (res: Gio.AsyncResult) => void
    unprepare: (callback?: Gio.AsyncReadyCallback | null) => void
    unprepareFinish: (res: Gio.AsyncResult) => void
}

abstract class BackendClass {

    // Own properties of Folks-0.6.Folks.BackendClass

    static name: string
}

interface BackendPrivate {
}

class BackendPrivate {

    // Own properties of Folks-0.6.Folks.BackendPrivate

    static name: string
}

interface DebugClass {
}

abstract class DebugClass {

    // Own properties of Folks-0.6.Folks.DebugClass

    static name: string
}

interface DebugPrivate {
}

class DebugPrivate {

    // Own properties of Folks-0.6.Folks.DebugPrivate

    static name: string
}

interface EmailFieldDetailsClass {
}

abstract class EmailFieldDetailsClass {

    // Own properties of Folks-0.6.Folks.EmailFieldDetailsClass

    static name: string
}

interface EmailFieldDetailsPrivate {
}

class EmailFieldDetailsPrivate {

    // Own properties of Folks-0.6.Folks.EmailFieldDetailsPrivate

    static name: string
}

interface ExtendedFieldDetailsClass {
}

abstract class ExtendedFieldDetailsClass {

    // Own properties of Folks-0.6.Folks.ExtendedFieldDetailsClass

    static name: string
}

interface ExtendedFieldDetailsPrivate {
}

class ExtendedFieldDetailsPrivate {

    // Own properties of Folks-0.6.Folks.ExtendedFieldDetailsPrivate

    static name: string
}

interface ImFieldDetailsClass {
}

abstract class ImFieldDetailsClass {

    // Own properties of Folks-0.6.Folks.ImFieldDetailsClass

    static name: string
}

interface ImFieldDetailsPrivate {
}

class ImFieldDetailsPrivate {

    // Own properties of Folks-0.6.Folks.ImFieldDetailsPrivate

    static name: string
}

interface IndividualAggregatorClass {
}

abstract class IndividualAggregatorClass {

    // Own properties of Folks-0.6.Folks.IndividualAggregatorClass

    static name: string
}

interface IndividualAggregatorPrivate {
}

class IndividualAggregatorPrivate {

    // Own properties of Folks-0.6.Folks.IndividualAggregatorPrivate

    static name: string
}

interface IndividualClass {
}

abstract class IndividualClass {

    // Own properties of Folks-0.6.Folks.IndividualClass

    static name: string
}

interface IndividualPrivate {
}

class IndividualPrivate {

    // Own properties of Folks-0.6.Folks.IndividualPrivate

    static name: string
}

interface LocationClass {
}

abstract class LocationClass {

    // Own properties of Folks-0.6.Folks.LocationClass

    static name: string
}

interface LocationPrivate {
}

class LocationPrivate {

    // Own properties of Folks-0.6.Folks.LocationPrivate

    static name: string
}

interface StructuredNameClass {
}

abstract class StructuredNameClass {

    // Own properties of Folks-0.6.Folks.StructuredNameClass

    static name: string
}

interface StructuredNamePrivate {
}

class StructuredNamePrivate {

    // Own properties of Folks-0.6.Folks.StructuredNamePrivate

    static name: string
}

interface NoteFieldDetailsClass {
}

abstract class NoteFieldDetailsClass {

    // Own properties of Folks-0.6.Folks.NoteFieldDetailsClass

    static name: string
}

interface NoteFieldDetailsPrivate {
}

class NoteFieldDetailsPrivate {

    // Own properties of Folks-0.6.Folks.NoteFieldDetailsPrivate

    static name: string
}

interface ObjectCacheClass {

    // Own fields of Folks-0.6.Folks.ObjectCacheClass

    getSerialisedObjectType: (objectVersion: number) => GLib.VariantType | null
    getSerialisedObjectVersion: () => number
    serialiseObject: (object?: any | null) => GLib.Variant
    deserialiseObject: (variant: GLib.Variant, objectVersion: number) => any | null
}

abstract class ObjectCacheClass {

    // Own properties of Folks-0.6.Folks.ObjectCacheClass

    static name: string
}

interface ObjectCachePrivate {
}

class ObjectCachePrivate {

    // Own properties of Folks-0.6.Folks.ObjectCachePrivate

    static name: string
}

interface PersonaStoreClass {

    // Own fields of Folks-0.6.Folks.PersonaStoreClass

    prepare: (callback?: Gio.AsyncReadyCallback | null) => void
    prepareFinish: (res: Gio.AsyncResult) => void
    flush: (callback?: Gio.AsyncReadyCallback | null) => void
    flushFinish: (res: Gio.AsyncResult) => void
    addPersonaFromDetails: (details: GLib.HashTable, callback?: Gio.AsyncReadyCallback | null) => void
    addPersonaFromDetailsFinish: (res: Gio.AsyncResult) => Persona | null
    removePersona: (persona: Persona, callback?: Gio.AsyncReadyCallback | null) => void
    removePersonaFinish: (res: Gio.AsyncResult) => void
}

abstract class PersonaStoreClass {

    // Own properties of Folks-0.6.Folks.PersonaStoreClass

    static name: string
}

interface PersonaStorePrivate {
}

class PersonaStorePrivate {

    // Own properties of Folks-0.6.Folks.PersonaStorePrivate

    static name: string
}

interface PersonaClass {

    // Own fields of Folks-0.6.Folks.PersonaClass

    linkablePropertyToLinks: (propName: string, callback: any) => void
}

abstract class PersonaClass {

    // Own properties of Folks-0.6.Folks.PersonaClass

    static name: string
}

interface PersonaPrivate {
}

class PersonaPrivate {

    // Own properties of Folks-0.6.Folks.PersonaPrivate

    static name: string
}

interface PhoneFieldDetailsClass {
}

abstract class PhoneFieldDetailsClass {

    // Own properties of Folks-0.6.Folks.PhoneFieldDetailsClass

    static name: string
}

interface PhoneFieldDetailsPrivate {
}

class PhoneFieldDetailsPrivate {

    // Own properties of Folks-0.6.Folks.PhoneFieldDetailsPrivate

    static name: string
}

interface PostalAddressClass {
}

abstract class PostalAddressClass {

    // Own properties of Folks-0.6.Folks.PostalAddressClass

    static name: string
}

interface PostalAddressPrivate {
}

class PostalAddressPrivate {

    // Own properties of Folks-0.6.Folks.PostalAddressPrivate

    static name: string
}

interface PostalAddressFieldDetailsClass {
}

abstract class PostalAddressFieldDetailsClass {

    // Own properties of Folks-0.6.Folks.PostalAddressFieldDetailsClass

    static name: string
}

interface PostalAddressFieldDetailsPrivate {
}

class PostalAddressFieldDetailsPrivate {

    // Own properties of Folks-0.6.Folks.PostalAddressFieldDetailsPrivate

    static name: string
}

interface PotentialMatchClass {
}

abstract class PotentialMatchClass {

    // Own properties of Folks-0.6.Folks.PotentialMatchClass

    static name: string
}

interface PotentialMatchPrivate {
}

class PotentialMatchPrivate {

    // Own properties of Folks-0.6.Folks.PotentialMatchPrivate

    static name: string
}

interface QueryClass {

    // Own fields of Folks-0.6.Folks.QueryClass

    isMatch: (individual: Individual) => number
}

abstract class QueryClass {

    // Own properties of Folks-0.6.Folks.QueryClass

    static name: string
}

interface QueryPrivate {
}

class QueryPrivate {

    // Own properties of Folks-0.6.Folks.QueryPrivate

    static name: string
}

interface RoleClass {
}

abstract class RoleClass {

    // Own properties of Folks-0.6.Folks.RoleClass

    static name: string
}

interface RolePrivate {
}

class RolePrivate {

    // Own properties of Folks-0.6.Folks.RolePrivate

    static name: string
}

interface RoleFieldDetailsClass {
}

abstract class RoleFieldDetailsClass {

    // Own properties of Folks-0.6.Folks.RoleFieldDetailsClass

    static name: string
}

interface RoleFieldDetailsPrivate {
}

class RoleFieldDetailsPrivate {

    // Own properties of Folks-0.6.Folks.RoleFieldDetailsPrivate

    static name: string
}

interface SearchViewClass {
}

abstract class SearchViewClass {

    // Own properties of Folks-0.6.Folks.SearchViewClass

    static name: string
}

interface SearchViewPrivate {
}

class SearchViewPrivate {

    // Own properties of Folks-0.6.Folks.SearchViewPrivate

    static name: string
}

interface SimpleQueryClass {
}

abstract class SimpleQueryClass {

    // Own properties of Folks-0.6.Folks.SimpleQueryClass

    static name: string
}

interface SimpleQueryPrivate {
}

class SimpleQueryPrivate {

    // Own properties of Folks-0.6.Folks.SimpleQueryPrivate

    static name: string
}

interface UrlFieldDetailsClass {
}

abstract class UrlFieldDetailsClass {

    // Own properties of Folks-0.6.Folks.UrlFieldDetailsClass

    static name: string
}

interface UrlFieldDetailsPrivate {
}

class UrlFieldDetailsPrivate {

    // Own properties of Folks-0.6.Folks.UrlFieldDetailsPrivate

    static name: string
}

interface UtilsClass {
}

abstract class UtilsClass {

    // Own properties of Folks-0.6.Folks.UtilsClass

    static name: string
}

interface UtilsPrivate {
}

class UtilsPrivate {

    // Own properties of Folks-0.6.Folks.UtilsPrivate

    static name: string
}

interface WebServiceFieldDetailsClass {
}

abstract class WebServiceFieldDetailsClass {

    // Own properties of Folks-0.6.Folks.WebServiceFieldDetailsClass

    static name: string
}

interface WebServiceFieldDetailsPrivate {
}

class WebServiceFieldDetailsPrivate {

    // Own properties of Folks-0.6.Folks.WebServiceFieldDetailsPrivate

    static name: string
}

interface AliasDetailsIface {

    // Own fields of Folks-0.6.Folks.AliasDetailsIface

    changeAlias: (alias: string, callback?: Gio.AsyncReadyCallback | null) => void
    changeAliasFinish: (res: Gio.AsyncResult) => void
    getAlias: () => string
    setAlias: (value: string) => void
}

abstract class AliasDetailsIface {

    // Own properties of Folks-0.6.Folks.AliasDetailsIface

    static name: string
}

interface AntiLinkableIface {

    // Own fields of Folks-0.6.Folks.AntiLinkableIface

    changeAntiLinks: (antiLinks: Gee.Set, callback?: Gio.AsyncReadyCallback | null) => void
    changeAntiLinksFinish: (res: Gio.AsyncResult) => void
    getAntiLinks: () => Gee.Set
    setAntiLinks: (value: Gee.Set) => void
}

abstract class AntiLinkableIface {

    // Own properties of Folks-0.6.Folks.AntiLinkableIface

    static name: string
}

interface AvatarDetailsIface {

    // Own fields of Folks-0.6.Folks.AvatarDetailsIface

    changeAvatar: (avatar?: Gio.LoadableIcon | null, callback?: Gio.AsyncReadyCallback | null) => void
    changeAvatarFinish: (res: Gio.AsyncResult) => void
    getAvatar: () => Gio.LoadableIcon | null
    setAvatar: (value?: Gio.LoadableIcon | null) => void
}

abstract class AvatarDetailsIface {

    // Own properties of Folks-0.6.Folks.AvatarDetailsIface

    static name: string
}

interface BirthdayDetailsIface {

    // Own fields of Folks-0.6.Folks.BirthdayDetailsIface

    changeBirthday: (birthday?: GLib.DateTime | null, callback?: Gio.AsyncReadyCallback | null) => void
    changeBirthdayFinish: (res: Gio.AsyncResult) => void
    changeCalendarEventId: (eventId?: string | null, callback?: Gio.AsyncReadyCallback | null) => void
    changeCalendarEventIdFinish: (res: Gio.AsyncResult) => void
    getBirthday: () => GLib.DateTime | null
    setBirthday: (value?: GLib.DateTime | null) => void
    getCalendarEventId: () => string | null
    setCalendarEventId: (value?: string | null) => void
}

abstract class BirthdayDetailsIface {

    // Own properties of Folks-0.6.Folks.BirthdayDetailsIface

    static name: string
}

interface EmailDetailsIface {

    // Own fields of Folks-0.6.Folks.EmailDetailsIface

    changeEmailAddresses: (emailAddresses: Gee.Set, callback?: Gio.AsyncReadyCallback | null) => void
    changeEmailAddressesFinish: (res: Gio.AsyncResult) => void
    getEmailAddresses: () => Gee.Set
    setEmailAddresses: (value: Gee.Set) => void
}

abstract class EmailDetailsIface {

    // Own properties of Folks-0.6.Folks.EmailDetailsIface

    static name: string
}

interface ExtendedInfoIface {

    // Own fields of Folks-0.6.Folks.ExtendedInfoIface

    getExtendedField: (name: string) => ExtendedFieldDetails | null
    changeExtendedField: (name: string, value: ExtendedFieldDetails, callback?: Gio.AsyncReadyCallback | null) => void
    changeExtendedFieldFinish: (res: Gio.AsyncResult) => void
    removeExtendedField: (name: string, callback?: Gio.AsyncReadyCallback | null) => void
    removeExtendedFieldFinish: (res: Gio.AsyncResult) => void
}

abstract class ExtendedInfoIface {

    // Own properties of Folks-0.6.Folks.ExtendedInfoIface

    static name: string
}

interface FavouriteDetailsIface {

    // Own fields of Folks-0.6.Folks.FavouriteDetailsIface

    changeIsFavourite: (isFavourite: boolean, callback?: Gio.AsyncReadyCallback | null) => void
    changeIsFavouriteFinish: (res: Gio.AsyncResult) => void
    getIsFavourite: () => boolean
    setIsFavourite: (value: boolean) => void
}

abstract class FavouriteDetailsIface {

    // Own properties of Folks-0.6.Folks.FavouriteDetailsIface

    static name: string
}

interface GenderDetailsIface {

    // Own fields of Folks-0.6.Folks.GenderDetailsIface

    changeGender: (gender: Gender, callback?: Gio.AsyncReadyCallback | null) => void
    changeGenderFinish: (res: Gio.AsyncResult) => void
    getGender: () => Gender
    setGender: (value: Gender) => void
}

abstract class GenderDetailsIface {

    // Own properties of Folks-0.6.Folks.GenderDetailsIface

    static name: string
}

interface GroupDetailsIface {

    // Own fields of Folks-0.6.Folks.GroupDetailsIface

    changeGroup: (group: string, isMember: boolean, callback?: Gio.AsyncReadyCallback | null) => void
    changeGroupFinish: (res: Gio.AsyncResult) => void
    changeGroups: (groups: Gee.Set, callback?: Gio.AsyncReadyCallback | null) => void
    changeGroupsFinish: (res: Gio.AsyncResult) => void
    getGroups: () => Gee.Set
    setGroups: (value: Gee.Set) => void
}

abstract class GroupDetailsIface {

    // Own properties of Folks-0.6.Folks.GroupDetailsIface

    static name: string
}

interface ImDetailsIface {

    // Own fields of Folks-0.6.Folks.ImDetailsIface

    changeImAddresses: (imAddresses: Gee.MultiMap, callback?: Gio.AsyncReadyCallback | null) => void
    changeImAddressesFinish: (res: Gio.AsyncResult) => void
    getImAddresses: () => Gee.MultiMap
    setImAddresses: (value: Gee.MultiMap) => void
}

abstract class ImDetailsIface {

    // Own properties of Folks-0.6.Folks.ImDetailsIface

    static name: string
}

interface InteractionDetailsIface {

    // Own fields of Folks-0.6.Folks.InteractionDetailsIface

    getImInteractionCount: () => number
    getLastImInteractionDatetime: () => GLib.DateTime | null
    getCallInteractionCount: () => number
    getLastCallInteractionDatetime: () => GLib.DateTime | null
}

abstract class InteractionDetailsIface {

    // Own properties of Folks-0.6.Folks.InteractionDetailsIface

    static name: string
}

interface LocalIdDetailsIface {

    // Own fields of Folks-0.6.Folks.LocalIdDetailsIface

    changeLocalIds: (localIds: Gee.Set, callback?: Gio.AsyncReadyCallback | null) => void
    changeLocalIdsFinish: (res: Gio.AsyncResult) => void
    getLocalIds: () => Gee.Set
    setLocalIds: (value: Gee.Set) => void
}

abstract class LocalIdDetailsIface {

    // Own properties of Folks-0.6.Folks.LocalIdDetailsIface

    static name: string
}

interface LocationDetailsIface {

    // Own fields of Folks-0.6.Folks.LocationDetailsIface

    changeLocation: (location?: Location | null, callback?: Gio.AsyncReadyCallback | null) => void
    changeLocationFinish: (res: Gio.AsyncResult) => void
    getLocation: () => Location | null
    setLocation: (value?: Location | null) => void
}

abstract class LocationDetailsIface {

    // Own properties of Folks-0.6.Folks.LocationDetailsIface

    static name: string
}

interface NameDetailsIface {

    // Own fields of Folks-0.6.Folks.NameDetailsIface

    changeStructuredName: (name?: StructuredName | null, callback?: Gio.AsyncReadyCallback | null) => void
    changeStructuredNameFinish: (res: Gio.AsyncResult) => void
    changeFullName: (fullName: string, callback?: Gio.AsyncReadyCallback | null) => void
    changeFullNameFinish: (res: Gio.AsyncResult) => void
    changeNickname: (nickname: string, callback?: Gio.AsyncReadyCallback | null) => void
    changeNicknameFinish: (res: Gio.AsyncResult) => void
    getStructuredName: () => StructuredName | null
    setStructuredName: (value?: StructuredName | null) => void
    getFullName: () => string
    setFullName: (value: string) => void
    getNickname: () => string
    setNickname: (value: string) => void
}

abstract class NameDetailsIface {

    // Own properties of Folks-0.6.Folks.NameDetailsIface

    static name: string
}

interface NoteDetailsIface {

    // Own fields of Folks-0.6.Folks.NoteDetailsIface

    changeNotes: (notes: Gee.Set, callback?: Gio.AsyncReadyCallback | null) => void
    changeNotesFinish: (res: Gio.AsyncResult) => void
    getNotes: () => Gee.Set
    setNotes: (value: Gee.Set) => void
}

abstract class NoteDetailsIface {

    // Own properties of Folks-0.6.Folks.NoteDetailsIface

    static name: string
}

interface PhoneDetailsIface {

    // Own fields of Folks-0.6.Folks.PhoneDetailsIface

    changePhoneNumbers: (phoneNumbers: Gee.Set, callback?: Gio.AsyncReadyCallback | null) => void
    changePhoneNumbersFinish: (res: Gio.AsyncResult) => void
    getPhoneNumbers: () => Gee.Set
    setPhoneNumbers: (value: Gee.Set) => void
}

abstract class PhoneDetailsIface {

    // Own properties of Folks-0.6.Folks.PhoneDetailsIface

    static name: string
}

interface PostalAddressDetailsIface {

    // Own fields of Folks-0.6.Folks.PostalAddressDetailsIface

    changePostalAddresses: (postalAddresses: Gee.Set, callback?: Gio.AsyncReadyCallback | null) => void
    changePostalAddressesFinish: (res: Gio.AsyncResult) => void
    getPostalAddresses: () => Gee.Set
    setPostalAddresses: (value: Gee.Set) => void
}

abstract class PostalAddressDetailsIface {

    // Own properties of Folks-0.6.Folks.PostalAddressDetailsIface

    static name: string
}

interface PresenceDetailsIface {

    // Own fields of Folks-0.6.Folks.PresenceDetailsIface

    getPresenceType: () => PresenceType
    setPresenceType: (value: PresenceType) => void
    getPresenceMessage: () => string
    setPresenceMessage: (value: string) => void
    getClientTypes: () => string[]
    setClientTypes: (value: string[]) => void
    getPresenceStatus: () => string
    setPresenceStatus: (value: string) => void
}

abstract class PresenceDetailsIface {

    // Own properties of Folks-0.6.Folks.PresenceDetailsIface

    static name: string
}

interface RoleDetailsIface {

    // Own fields of Folks-0.6.Folks.RoleDetailsIface

    changeRoles: (roles: Gee.Set, callback?: Gio.AsyncReadyCallback | null) => void
    changeRolesFinish: (res: Gio.AsyncResult) => void
    getRoles: () => Gee.Set
    setRoles: (value: Gee.Set) => void
}

abstract class RoleDetailsIface {

    // Own properties of Folks-0.6.Folks.RoleDetailsIface

    static name: string
}

interface UrlDetailsIface {

    // Own fields of Folks-0.6.Folks.UrlDetailsIface

    changeUrls: (urls: Gee.Set, callback?: Gio.AsyncReadyCallback | null) => void
    changeUrlsFinish: (res: Gio.AsyncResult) => void
    getUrls: () => Gee.Set
    setUrls: (value: Gee.Set) => void
}

abstract class UrlDetailsIface {

    // Own properties of Folks-0.6.Folks.UrlDetailsIface

    static name: string
}

interface WebServiceDetailsIface {

    // Own fields of Folks-0.6.Folks.WebServiceDetailsIface

    changeWebServiceAddresses: (webServiceAddresses: Gee.MultiMap, callback?: Gio.AsyncReadyCallback | null) => void
    changeWebServiceAddressesFinish: (res: Gio.AsyncResult) => void
    getWebServiceAddresses: () => Gee.MultiMap
    setWebServiceAddresses: (value: Gee.MultiMap) => void
}

abstract class WebServiceDetailsIface {

    // Own properties of Folks-0.6.Folks.WebServiceDetailsIface

    static name: string
}

}

export default Folks;
// END