
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './folks-0.6-ambient.d.ts';
import './folks-0.6-import.d.ts';
/**
 * Folks-0.6
 */

import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type Gee from '@girs/gee-0.8';

export enum Gender {
    UNSPECIFIED,
    MALE,
    FEMALE,
}
export enum TrustLevel {
    NONE,
    PERSONAS,
}
export enum PersonaStoreTrust {
    NONE,
    PARTIAL,
    FULL,
}
export enum PersonaDetail {
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
export enum MatchResult {
    NONE,
    VERY_LOW,
    LOW,
    MEDIUM,
    HIGH,
    VERY_HIGH,
    MIN,
    MAX,
}
export enum PresenceType {
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
export enum MaybeBool {
    UNSET,
    FALSE,
    TRUE,
}
export enum ImDetailsError {
    INVALID_IM_ADDRESS,
}
export enum IndividualAggregatorError {
    ADD_FAILED,
    NO_WRITEABLE_STORE,
    STORE_OFFLINE,
    PROPERTY_NOT_WRITEABLE,
    NO_PRIMARY_STORE,
}
export enum PersonaStoreError {
    INVALID_ARGUMENT,
    CREATE_FAILED,
    UNSUPPORTED_ON_USER,
    STORE_OFFLINE,
    READ_ONLY,
    PERMISSION_DENIED,
    REMOVE_FAILED,
    UNSUPPORTED_ON_NON_USER,
}
export enum PropertyError {
    NOT_WRITEABLE,
    INVALID_VALUE,
    UNKNOWN_ERROR,
    UNAVAILABLE,
}
export enum GroupDetailsChangeReason {
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
export module AliasDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.AliasDetails

        alias?: string | null
    }

}

export interface AliasDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.AliasDetails

    alias: string | null

    // Owm methods of Folks-0.6.Folks.AliasDetails

    change_alias(alias: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_alias_finish(_res_: Gio.AsyncResult): void
    get_alias(): string
    set_alias(value: string): void

    // Own virtual methods of Folks-0.6.Folks.AliasDetails

    vfunc_change_alias(alias: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_alias_finish(_res_: Gio.AsyncResult): void
    vfunc_get_alias(): string
    vfunc_set_alias(value: string): void

    // Class property signals of Folks-0.6.Folks.AliasDetails

    connect(sigName: "notify::alias", callback: (($obj: AliasDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alias", callback: (($obj: AliasDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alias", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class AliasDetails {

    // Own properties of Folks-0.6.Folks.AliasDetails

    static name: string
    static $gtype: GObject.GType<AliasDetails>

    // Constructors of Folks-0.6.Folks.AliasDetails

    constructor(config?: AliasDetails.ConstructorProperties) 
    _init(config?: AliasDetails.ConstructorProperties): void
}

export module AntiLinkable {

    // Constructor properties interface

    export interface ConstructorProperties extends Persona.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.AntiLinkable

        antiLinks?: Gee.Set | null
    }

}

export interface AntiLinkable extends Persona {

    // Own properties of Folks-0.6.Folks.AntiLinkable

    antiLinks: Gee.Set

    // Owm methods of Folks-0.6.Folks.AntiLinkable

    change_anti_links(anti_links: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_anti_links_finish(_res_: Gio.AsyncResult): void
    has_anti_link_with_persona(other_persona: Persona): boolean
    add_anti_links(other_personas: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    add_anti_links_finish(_res_: Gio.AsyncResult): void
    remove_anti_links(other_personas: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    remove_anti_links_finish(_res_: Gio.AsyncResult): void
    add_global_anti_link(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    add_global_anti_link_finish(_res_: Gio.AsyncResult): void
    remove_global_anti_link(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    remove_global_anti_link_finish(_res_: Gio.AsyncResult): void
    has_global_anti_link(): boolean
    get_anti_links(): Gee.Set
    set_anti_links(value: Gee.Set): void

    // Own virtual methods of Folks-0.6.Folks.AntiLinkable

    vfunc_change_anti_links(anti_links: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_anti_links_finish(_res_: Gio.AsyncResult): void
    vfunc_get_anti_links(): Gee.Set
    vfunc_set_anti_links(value: Gee.Set): void

    // Class property signals of Folks-0.6.Folks.AntiLinkable

    connect(sigName: "notify::anti-links", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anti-links", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anti-links", ...args: any[]): void
    connect(sigName: "notify::iid", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iid", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::iid", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::display-id", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-id", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-id", ...args: any[]): void
    connect(sigName: "notify::is-user", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-user", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-user", ...args: any[]): void
    connect(sigName: "notify::store", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::store", ...args: any[]): void
    connect(sigName: "notify::individual", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::individual", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::individual", ...args: any[]): void
    connect(sigName: "notify::linkable-properties", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::linkable-properties", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::linkable-properties", ...args: any[]): void
    connect(sigName: "notify::writeable-properties", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writeable-properties", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::writeable-properties", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class AntiLinkable extends GObject.Object {

    // Own properties of Folks-0.6.Folks.AntiLinkable

    static name: string
    static $gtype: GObject.GType<AntiLinkable>

    // Constructors of Folks-0.6.Folks.AntiLinkable

    constructor(config?: AntiLinkable.ConstructorProperties) 
    _init(config?: AntiLinkable.ConstructorProperties): void
}

export module AvatarDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.AvatarDetails

        avatar?: Gio.LoadableIcon | null
    }

}

export interface AvatarDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.AvatarDetails

    avatar: Gio.LoadableIcon

    // Owm methods of Folks-0.6.Folks.AvatarDetails

    change_avatar(avatar?: Gio.LoadableIcon | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_avatar_finish(_res_: Gio.AsyncResult): void
    get_avatar(): Gio.LoadableIcon | null
    set_avatar(value?: Gio.LoadableIcon | null): void

    // Own virtual methods of Folks-0.6.Folks.AvatarDetails

    vfunc_change_avatar(avatar?: Gio.LoadableIcon | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_avatar_finish(_res_: Gio.AsyncResult): void
    vfunc_get_avatar(): Gio.LoadableIcon | null
    vfunc_set_avatar(value?: Gio.LoadableIcon | null): void

    // Class property signals of Folks-0.6.Folks.AvatarDetails

    connect(sigName: "notify::avatar", callback: (($obj: AvatarDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar", callback: (($obj: AvatarDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::avatar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class AvatarDetails {

    // Own properties of Folks-0.6.Folks.AvatarDetails

    static name: string
    static $gtype: GObject.GType<AvatarDetails>

    // Constructors of Folks-0.6.Folks.AvatarDetails

    constructor(config?: AvatarDetails.ConstructorProperties) 
    _init(config?: AvatarDetails.ConstructorProperties): void
}

export module BirthdayDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.BirthdayDetails

        birthday?: GLib.DateTime | null
        calendarEventId?: string | null
    }

}

export interface BirthdayDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.BirthdayDetails

    birthday: GLib.DateTime
    calendarEventId: string | null

    // Owm methods of Folks-0.6.Folks.BirthdayDetails

    change_birthday(birthday?: GLib.DateTime | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_birthday_finish(_res_: Gio.AsyncResult): void
    change_calendar_event_id(event_id?: string | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_calendar_event_id_finish(_res_: Gio.AsyncResult): void
    get_birthday(): GLib.DateTime | null
    set_birthday(value?: GLib.DateTime | null): void
    get_calendar_event_id(): string | null
    set_calendar_event_id(value?: string | null): void

    // Own virtual methods of Folks-0.6.Folks.BirthdayDetails

    vfunc_change_birthday(birthday?: GLib.DateTime | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_birthday_finish(_res_: Gio.AsyncResult): void
    vfunc_change_calendar_event_id(event_id?: string | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_calendar_event_id_finish(_res_: Gio.AsyncResult): void
    vfunc_get_birthday(): GLib.DateTime | null
    vfunc_set_birthday(value?: GLib.DateTime | null): void
    vfunc_get_calendar_event_id(): string | null
    vfunc_set_calendar_event_id(value?: string | null): void

    // Class property signals of Folks-0.6.Folks.BirthdayDetails

    connect(sigName: "notify::birthday", callback: (($obj: BirthdayDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::birthday", callback: (($obj: BirthdayDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::birthday", ...args: any[]): void
    connect(sigName: "notify::calendar-event-id", callback: (($obj: BirthdayDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-event-id", callback: (($obj: BirthdayDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::calendar-event-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class BirthdayDetails {

    // Own properties of Folks-0.6.Folks.BirthdayDetails

    static name: string
    static $gtype: GObject.GType<BirthdayDetails>

    // Constructors of Folks-0.6.Folks.BirthdayDetails

    constructor(config?: BirthdayDetails.ConstructorProperties) 
    _init(config?: BirthdayDetails.ConstructorProperties): void
}

export module EmailDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.EmailDetails

        emailAddresses?: Gee.Set | null
    }

}

export interface EmailDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.EmailDetails

    emailAddresses: Gee.Set

    // Owm methods of Folks-0.6.Folks.EmailDetails

    change_email_addresses(email_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_email_addresses_finish(_res_: Gio.AsyncResult): void
    get_email_addresses(): Gee.Set
    set_email_addresses(value: Gee.Set): void

    // Own virtual methods of Folks-0.6.Folks.EmailDetails

    vfunc_change_email_addresses(email_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_email_addresses_finish(_res_: Gio.AsyncResult): void
    vfunc_get_email_addresses(): Gee.Set
    vfunc_set_email_addresses(value: Gee.Set): void

    // Class property signals of Folks-0.6.Folks.EmailDetails

    connect(sigName: "notify::email-addresses", callback: (($obj: EmailDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-addresses", callback: (($obj: EmailDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::email-addresses", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class EmailDetails {

    // Own properties of Folks-0.6.Folks.EmailDetails

    static name: string
    static $gtype: GObject.GType<EmailDetails>

    // Constructors of Folks-0.6.Folks.EmailDetails

    constructor(config?: EmailDetails.ConstructorProperties) 
    _init(config?: EmailDetails.ConstructorProperties): void
}

export module ExtendedInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ExtendedInfo extends GObject.Object {

    // Owm methods of Folks-0.6.Folks.ExtendedInfo

    get_extended_field(name: string): ExtendedFieldDetails | null
    change_extended_field(name: string, value: ExtendedFieldDetails, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_extended_field_finish(_res_: Gio.AsyncResult): void
    remove_extended_field(name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    remove_extended_field_finish(_res_: Gio.AsyncResult): void

    // Own virtual methods of Folks-0.6.Folks.ExtendedInfo

    vfunc_get_extended_field(name: string): ExtendedFieldDetails | null
    vfunc_change_extended_field(name: string, value: ExtendedFieldDetails, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_extended_field_finish(_res_: Gio.AsyncResult): void
    vfunc_remove_extended_field(name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_remove_extended_field_finish(_res_: Gio.AsyncResult): void

    // Class property signals of Folks-0.6.Folks.ExtendedInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExtendedInfo {

    // Own properties of Folks-0.6.Folks.ExtendedInfo

    static name: string
    static $gtype: GObject.GType<ExtendedInfo>

    // Constructors of Folks-0.6.Folks.ExtendedInfo

    constructor(config?: ExtendedInfo.ConstructorProperties) 
    _init(config?: ExtendedInfo.ConstructorProperties): void
}

export module FavouriteDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.FavouriteDetails

        isFavourite?: boolean | null
    }

}

export interface FavouriteDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.FavouriteDetails

    isFavourite: boolean

    // Owm methods of Folks-0.6.Folks.FavouriteDetails

    change_is_favourite(is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_is_favourite_finish(_res_: Gio.AsyncResult): void
    get_is_favourite(): boolean
    set_is_favourite(value: boolean): void

    // Own virtual methods of Folks-0.6.Folks.FavouriteDetails

    vfunc_change_is_favourite(is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_is_favourite_finish(_res_: Gio.AsyncResult): void
    vfunc_get_is_favourite(): boolean
    vfunc_set_is_favourite(value: boolean): void

    // Class property signals of Folks-0.6.Folks.FavouriteDetails

    connect(sigName: "notify::is-favourite", callback: (($obj: FavouriteDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-favourite", callback: (($obj: FavouriteDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-favourite", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class FavouriteDetails {

    // Own properties of Folks-0.6.Folks.FavouriteDetails

    static name: string
    static $gtype: GObject.GType<FavouriteDetails>

    // Constructors of Folks-0.6.Folks.FavouriteDetails

    constructor(config?: FavouriteDetails.ConstructorProperties) 
    _init(config?: FavouriteDetails.ConstructorProperties): void
}

export module GenderDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.GenderDetails

        gender?: Gender | null
    }

}

export interface GenderDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.GenderDetails

    gender: Gender

    // Owm methods of Folks-0.6.Folks.GenderDetails

    change_gender(gender: Gender, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_gender_finish(_res_: Gio.AsyncResult): void
    get_gender(): Gender
    set_gender(value: Gender): void

    // Own virtual methods of Folks-0.6.Folks.GenderDetails

    vfunc_change_gender(gender: Gender, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_gender_finish(_res_: Gio.AsyncResult): void
    vfunc_get_gender(): Gender
    vfunc_set_gender(value: Gender): void

    // Class property signals of Folks-0.6.Folks.GenderDetails

    connect(sigName: "notify::gender", callback: (($obj: GenderDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gender", callback: (($obj: GenderDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gender", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class GenderDetails {

    // Own properties of Folks-0.6.Folks.GenderDetails

    static name: string
    static $gtype: GObject.GType<GenderDetails>

    // Constructors of Folks-0.6.Folks.GenderDetails

    constructor(config?: GenderDetails.ConstructorProperties) 
    _init(config?: GenderDetails.ConstructorProperties): void
}

export module GroupDetails {

    // Signal callback interfaces

    /**
     * Signal callback interface for `group-changed`
     */
    export interface GroupChangedSignalCallback {
        ($obj: GroupDetails, group: string, is_member: boolean): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.GroupDetails

        groups?: Gee.Set | null
    }

}

export interface GroupDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.GroupDetails

    groups: Gee.Set

    // Owm methods of Folks-0.6.Folks.GroupDetails

    change_group(group: string, is_member: boolean, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_group_finish(_res_: Gio.AsyncResult): void
    change_groups(groups: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_groups_finish(_res_: Gio.AsyncResult): void
    get_groups(): Gee.Set
    set_groups(value: Gee.Set): void

    // Own virtual methods of Folks-0.6.Folks.GroupDetails

    vfunc_change_group(group: string, is_member: boolean, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_group_finish(_res_: Gio.AsyncResult): void
    vfunc_change_groups(groups: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_groups_finish(_res_: Gio.AsyncResult): void
    vfunc_get_groups(): Gee.Set
    vfunc_set_groups(value: Gee.Set): void

    // Own signals of Folks-0.6.Folks.GroupDetails

    connect(sigName: "group-changed", callback: GroupDetails.GroupChangedSignalCallback): number
    connect_after(sigName: "group-changed", callback: GroupDetails.GroupChangedSignalCallback): number
    emit(sigName: "group-changed", group: string, is_member: boolean, ...args: any[]): void

    // Class property signals of Folks-0.6.Folks.GroupDetails

    connect(sigName: "notify::groups", callback: (($obj: GroupDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::groups", callback: (($obj: GroupDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::groups", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class GroupDetails {

    // Own properties of Folks-0.6.Folks.GroupDetails

    static name: string
    static $gtype: GObject.GType<GroupDetails>

    // Constructors of Folks-0.6.Folks.GroupDetails

    constructor(config?: GroupDetails.ConstructorProperties) 
    _init(config?: GroupDetails.ConstructorProperties): void
}

export module ImDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.ImDetails

        imAddresses?: Gee.MultiMap | null
    }

}

export interface ImDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.ImDetails

    imAddresses: Gee.MultiMap

    // Owm methods of Folks-0.6.Folks.ImDetails

    change_im_addresses(im_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_im_addresses_finish(_res_: Gio.AsyncResult): void
    get_im_addresses(): Gee.MultiMap
    set_im_addresses(value: Gee.MultiMap): void

    // Own virtual methods of Folks-0.6.Folks.ImDetails

    vfunc_change_im_addresses(im_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_im_addresses_finish(_res_: Gio.AsyncResult): void
    vfunc_get_im_addresses(): Gee.MultiMap
    vfunc_set_im_addresses(value: Gee.MultiMap): void

    // Class property signals of Folks-0.6.Folks.ImDetails

    connect(sigName: "notify::im-addresses", callback: (($obj: ImDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-addresses", callback: (($obj: ImDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-addresses", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ImDetails {

    // Own properties of Folks-0.6.Folks.ImDetails

    static name: string
    static $gtype: GObject.GType<ImDetails>

    // Constructors of Folks-0.6.Folks.ImDetails

    constructor(config?: ImDetails.ConstructorProperties) 
    _init(config?: ImDetails.ConstructorProperties): void
    static normalise_im_address(im_address: string, protocol: string): string | null
}

export module InteractionDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface InteractionDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.InteractionDetails

    readonly imInteractionCount: number
    readonly lastImInteractionDatetime: GLib.DateTime
    readonly callInteractionCount: number
    readonly lastCallInteractionDatetime: GLib.DateTime

    // Owm methods of Folks-0.6.Folks.InteractionDetails

    get_im_interaction_count(): number
    get_last_im_interaction_datetime(): GLib.DateTime | null
    get_call_interaction_count(): number
    get_last_call_interaction_datetime(): GLib.DateTime | null

    // Own virtual methods of Folks-0.6.Folks.InteractionDetails

    vfunc_get_im_interaction_count(): number
    vfunc_get_last_im_interaction_datetime(): GLib.DateTime | null
    vfunc_get_call_interaction_count(): number
    vfunc_get_last_call_interaction_datetime(): GLib.DateTime | null

    // Class property signals of Folks-0.6.Folks.InteractionDetails

    connect(sigName: "notify::im-interaction-count", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-interaction-count", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-interaction-count", ...args: any[]): void
    connect(sigName: "notify::last-im-interaction-datetime", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-im-interaction-datetime", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-im-interaction-datetime", ...args: any[]): void
    connect(sigName: "notify::call-interaction-count", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::call-interaction-count", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::call-interaction-count", ...args: any[]): void
    connect(sigName: "notify::last-call-interaction-datetime", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-call-interaction-datetime", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-call-interaction-datetime", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class InteractionDetails {

    // Own properties of Folks-0.6.Folks.InteractionDetails

    static name: string
    static $gtype: GObject.GType<InteractionDetails>

    // Constructors of Folks-0.6.Folks.InteractionDetails

    constructor(config?: InteractionDetails.ConstructorProperties) 
    _init(config?: InteractionDetails.ConstructorProperties): void
}

export module LocalIdDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.LocalIdDetails

        localIds?: Gee.Set | null
    }

}

export interface LocalIdDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.LocalIdDetails

    localIds: Gee.Set

    // Owm methods of Folks-0.6.Folks.LocalIdDetails

    change_local_ids(local_ids: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_local_ids_finish(_res_: Gio.AsyncResult): void
    get_local_ids(): Gee.Set
    set_local_ids(value: Gee.Set): void

    // Own virtual methods of Folks-0.6.Folks.LocalIdDetails

    vfunc_change_local_ids(local_ids: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_local_ids_finish(_res_: Gio.AsyncResult): void
    vfunc_get_local_ids(): Gee.Set
    vfunc_set_local_ids(value: Gee.Set): void

    // Class property signals of Folks-0.6.Folks.LocalIdDetails

    connect(sigName: "notify::local-ids", callback: (($obj: LocalIdDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-ids", callback: (($obj: LocalIdDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-ids", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class LocalIdDetails {

    // Own properties of Folks-0.6.Folks.LocalIdDetails

    static name: string
    static $gtype: GObject.GType<LocalIdDetails>

    // Constructors of Folks-0.6.Folks.LocalIdDetails

    constructor(config?: LocalIdDetails.ConstructorProperties) 
    _init(config?: LocalIdDetails.ConstructorProperties): void
}

export module LocationDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.LocationDetails

        location?: Location | null
    }

}

export interface LocationDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.LocationDetails

    location: Location

    // Owm methods of Folks-0.6.Folks.LocationDetails

    change_location(location?: Location | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_location_finish(_res_: Gio.AsyncResult): void
    get_location(): Location | null
    set_location(value?: Location | null): void

    // Own virtual methods of Folks-0.6.Folks.LocationDetails

    vfunc_change_location(location?: Location | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_location_finish(_res_: Gio.AsyncResult): void
    vfunc_get_location(): Location | null
    vfunc_set_location(value?: Location | null): void

    // Class property signals of Folks-0.6.Folks.LocationDetails

    connect(sigName: "notify::location", callback: (($obj: LocationDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: LocationDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class LocationDetails {

    // Own properties of Folks-0.6.Folks.LocationDetails

    static name: string
    static $gtype: GObject.GType<LocationDetails>

    // Constructors of Folks-0.6.Folks.LocationDetails

    constructor(config?: LocationDetails.ConstructorProperties) 
    _init(config?: LocationDetails.ConstructorProperties): void
}

export module NameDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.NameDetails

        structuredName?: StructuredName | null
        fullName?: string | null
        nickname?: string | null
    }

}

export interface NameDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.NameDetails

    structuredName: StructuredName
    fullName: string | null
    nickname: string | null

    // Owm methods of Folks-0.6.Folks.NameDetails

    change_structured_name(name?: StructuredName | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_structured_name_finish(_res_: Gio.AsyncResult): void
    change_full_name(full_name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_full_name_finish(_res_: Gio.AsyncResult): void
    change_nickname(nickname: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_nickname_finish(_res_: Gio.AsyncResult): void
    get_structured_name(): StructuredName | null
    set_structured_name(value?: StructuredName | null): void
    get_full_name(): string
    set_full_name(value: string): void
    get_nickname(): string
    set_nickname(value: string): void

    // Own virtual methods of Folks-0.6.Folks.NameDetails

    vfunc_change_structured_name(name?: StructuredName | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_structured_name_finish(_res_: Gio.AsyncResult): void
    vfunc_change_full_name(full_name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_full_name_finish(_res_: Gio.AsyncResult): void
    vfunc_change_nickname(nickname: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_nickname_finish(_res_: Gio.AsyncResult): void
    vfunc_get_structured_name(): StructuredName | null
    vfunc_set_structured_name(value?: StructuredName | null): void
    vfunc_get_full_name(): string
    vfunc_set_full_name(value: string): void
    vfunc_get_nickname(): string
    vfunc_set_nickname(value: string): void

    // Class property signals of Folks-0.6.Folks.NameDetails

    connect(sigName: "notify::structured-name", callback: (($obj: NameDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::structured-name", callback: (($obj: NameDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::structured-name", ...args: any[]): void
    connect(sigName: "notify::full-name", callback: (($obj: NameDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: NameDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::full-name", ...args: any[]): void
    connect(sigName: "notify::nickname", callback: (($obj: NameDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: (($obj: NameDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nickname", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class NameDetails {

    // Own properties of Folks-0.6.Folks.NameDetails

    static name: string
    static $gtype: GObject.GType<NameDetails>

    // Constructors of Folks-0.6.Folks.NameDetails

    constructor(config?: NameDetails.ConstructorProperties) 
    _init(config?: NameDetails.ConstructorProperties): void
}

export module NoteDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.NoteDetails

        notes?: Gee.Set | null
    }

}

export interface NoteDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.NoteDetails

    notes: Gee.Set

    // Owm methods of Folks-0.6.Folks.NoteDetails

    change_notes(notes: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_notes_finish(_res_: Gio.AsyncResult): void
    get_notes(): Gee.Set
    set_notes(value: Gee.Set): void

    // Own virtual methods of Folks-0.6.Folks.NoteDetails

    vfunc_change_notes(notes: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_notes_finish(_res_: Gio.AsyncResult): void
    vfunc_get_notes(): Gee.Set
    vfunc_set_notes(value: Gee.Set): void

    // Class property signals of Folks-0.6.Folks.NoteDetails

    connect(sigName: "notify::notes", callback: (($obj: NoteDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notes", callback: (($obj: NoteDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::notes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class NoteDetails {

    // Own properties of Folks-0.6.Folks.NoteDetails

    static name: string
    static $gtype: GObject.GType<NoteDetails>

    // Constructors of Folks-0.6.Folks.NoteDetails

    constructor(config?: NoteDetails.ConstructorProperties) 
    _init(config?: NoteDetails.ConstructorProperties): void
}

export module PhoneDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.PhoneDetails

        phoneNumbers?: Gee.Set | null
    }

}

export interface PhoneDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.PhoneDetails

    phoneNumbers: Gee.Set

    // Owm methods of Folks-0.6.Folks.PhoneDetails

    change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_phone_numbers_finish(_res_: Gio.AsyncResult): void
    get_phone_numbers(): Gee.Set
    set_phone_numbers(value: Gee.Set): void

    // Own virtual methods of Folks-0.6.Folks.PhoneDetails

    vfunc_change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_phone_numbers_finish(_res_: Gio.AsyncResult): void
    vfunc_get_phone_numbers(): Gee.Set
    vfunc_set_phone_numbers(value: Gee.Set): void

    // Class property signals of Folks-0.6.Folks.PhoneDetails

    connect(sigName: "notify::phone-numbers", callback: (($obj: PhoneDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phone-numbers", callback: (($obj: PhoneDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::phone-numbers", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class PhoneDetails {

    // Own properties of Folks-0.6.Folks.PhoneDetails

    static name: string
    static $gtype: GObject.GType<PhoneDetails>

    // Constructors of Folks-0.6.Folks.PhoneDetails

    constructor(config?: PhoneDetails.ConstructorProperties) 
    _init(config?: PhoneDetails.ConstructorProperties): void
}

export module PostalAddressDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.PostalAddressDetails

        postalAddresses?: Gee.Set | null
    }

}

export interface PostalAddressDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.PostalAddressDetails

    postalAddresses: Gee.Set

    // Owm methods of Folks-0.6.Folks.PostalAddressDetails

    change_postal_addresses(postal_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_postal_addresses_finish(_res_: Gio.AsyncResult): void
    get_postal_addresses(): Gee.Set
    set_postal_addresses(value: Gee.Set): void

    // Own virtual methods of Folks-0.6.Folks.PostalAddressDetails

    vfunc_change_postal_addresses(postal_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_postal_addresses_finish(_res_: Gio.AsyncResult): void
    vfunc_get_postal_addresses(): Gee.Set
    vfunc_set_postal_addresses(value: Gee.Set): void

    // Class property signals of Folks-0.6.Folks.PostalAddressDetails

    connect(sigName: "notify::postal-addresses", callback: (($obj: PostalAddressDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::postal-addresses", callback: (($obj: PostalAddressDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::postal-addresses", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class PostalAddressDetails {

    // Own properties of Folks-0.6.Folks.PostalAddressDetails

    static name: string
    static $gtype: GObject.GType<PostalAddressDetails>

    // Constructors of Folks-0.6.Folks.PostalAddressDetails

    constructor(config?: PostalAddressDetails.ConstructorProperties) 
    _init(config?: PostalAddressDetails.ConstructorProperties): void
}

export module PresenceDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.PresenceDetails

        presenceType?: PresenceType | null
        presenceMessage?: string | null
        clientTypes?: string[] | null
        presenceStatus?: string | null
    }

}

export interface PresenceDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.PresenceDetails

    presenceType: PresenceType
    presenceMessage: string | null
    clientTypes: string[]
    presenceStatus: string | null

    // Owm methods of Folks-0.6.Folks.PresenceDetails

    is_online(): boolean
    get_presence_type(): PresenceType
    set_presence_type(value: PresenceType): void
    get_presence_message(): string
    set_presence_message(value: string): void
    get_client_types(): string[]
    set_client_types(value: string[]): void
    get_presence_status(): string
    set_presence_status(value: string): void

    // Own virtual methods of Folks-0.6.Folks.PresenceDetails

    vfunc_get_presence_type(): PresenceType
    vfunc_set_presence_type(value: PresenceType): void
    vfunc_get_presence_message(): string
    vfunc_set_presence_message(value: string): void
    vfunc_get_client_types(): string[]
    vfunc_set_client_types(value: string[]): void
    vfunc_get_presence_status(): string
    vfunc_set_presence_status(value: string): void

    // Class property signals of Folks-0.6.Folks.PresenceDetails

    connect(sigName: "notify::presence-type", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-type", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::presence-type", ...args: any[]): void
    connect(sigName: "notify::presence-message", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-message", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::presence-message", ...args: any[]): void
    connect(sigName: "notify::client-types", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-types", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client-types", ...args: any[]): void
    connect(sigName: "notify::presence-status", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-status", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::presence-status", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class PresenceDetails {

    // Own properties of Folks-0.6.Folks.PresenceDetails

    static name: string
    static $gtype: GObject.GType<PresenceDetails>

    // Constructors of Folks-0.6.Folks.PresenceDetails

    constructor(config?: PresenceDetails.ConstructorProperties) 
    _init(config?: PresenceDetails.ConstructorProperties): void
    static get_default_message_from_type(type: PresenceType): string
    static typecmp(type_a: PresenceType, type_b: PresenceType): number
}

export module RoleDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.RoleDetails

        roles?: Gee.Set | null
    }

}

export interface RoleDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.RoleDetails

    roles: Gee.Set

    // Owm methods of Folks-0.6.Folks.RoleDetails

    change_roles(roles: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_roles_finish(_res_: Gio.AsyncResult): void
    get_roles(): Gee.Set
    set_roles(value: Gee.Set): void

    // Own virtual methods of Folks-0.6.Folks.RoleDetails

    vfunc_change_roles(roles: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_roles_finish(_res_: Gio.AsyncResult): void
    vfunc_get_roles(): Gee.Set
    vfunc_set_roles(value: Gee.Set): void

    // Class property signals of Folks-0.6.Folks.RoleDetails

    connect(sigName: "notify::roles", callback: (($obj: RoleDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::roles", callback: (($obj: RoleDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::roles", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RoleDetails {

    // Own properties of Folks-0.6.Folks.RoleDetails

    static name: string
    static $gtype: GObject.GType<RoleDetails>

    // Constructors of Folks-0.6.Folks.RoleDetails

    constructor(config?: RoleDetails.ConstructorProperties) 
    _init(config?: RoleDetails.ConstructorProperties): void
}

export module UrlDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.UrlDetails

        urls?: Gee.Set | null
    }

}

export interface UrlDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.UrlDetails

    urls: Gee.Set

    // Owm methods of Folks-0.6.Folks.UrlDetails

    change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_urls_finish(_res_: Gio.AsyncResult): void
    get_urls(): Gee.Set
    set_urls(value: Gee.Set): void

    // Own virtual methods of Folks-0.6.Folks.UrlDetails

    vfunc_change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_urls_finish(_res_: Gio.AsyncResult): void
    vfunc_get_urls(): Gee.Set
    vfunc_set_urls(value: Gee.Set): void

    // Class property signals of Folks-0.6.Folks.UrlDetails

    connect(sigName: "notify::urls", callback: (($obj: UrlDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urls", callback: (($obj: UrlDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urls", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class UrlDetails {

    // Own properties of Folks-0.6.Folks.UrlDetails

    static name: string
    static $gtype: GObject.GType<UrlDetails>

    // Constructors of Folks-0.6.Folks.UrlDetails

    constructor(config?: UrlDetails.ConstructorProperties) 
    _init(config?: UrlDetails.ConstructorProperties): void
}

export module WebServiceDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.WebServiceDetails

        webServiceAddresses?: Gee.MultiMap | null
    }

}

export interface WebServiceDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.WebServiceDetails

    webServiceAddresses: Gee.MultiMap

    // Owm methods of Folks-0.6.Folks.WebServiceDetails

    change_web_service_addresses(web_service_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_web_service_addresses_finish(_res_: Gio.AsyncResult): void
    get_web_service_addresses(): Gee.MultiMap
    set_web_service_addresses(value: Gee.MultiMap): void

    // Own virtual methods of Folks-0.6.Folks.WebServiceDetails

    vfunc_change_web_service_addresses(web_service_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_web_service_addresses_finish(_res_: Gio.AsyncResult): void
    vfunc_get_web_service_addresses(): Gee.MultiMap
    vfunc_set_web_service_addresses(value: Gee.MultiMap): void

    // Class property signals of Folks-0.6.Folks.WebServiceDetails

    connect(sigName: "notify::web-service-addresses", callback: (($obj: WebServiceDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::web-service-addresses", callback: (($obj: WebServiceDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::web-service-addresses", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class WebServiceDetails {

    // Own properties of Folks-0.6.Folks.WebServiceDetails

    static name: string
    static $gtype: GObject.GType<WebServiceDetails>

    // Constructors of Folks-0.6.Folks.WebServiceDetails

    constructor(config?: WebServiceDetails.ConstructorProperties) 
    _init(config?: WebServiceDetails.ConstructorProperties): void
}

export module AbstractFieldDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.AbstractFieldDetails

        tType?: GObject.GType | null
        tDupFunc?: GObject.BoxedCopyFunc | null
        tDestroyFunc?: GLib.DestroyNotify | null
        value?: any | null
        id?: string | null
        parameters?: Gee.MultiMap | null
    }

}

export interface AbstractFieldDetails {

    // Own properties of Folks-0.6.Folks.AbstractFieldDetails

    readonly tType: GObject.GType
    readonly tDupFunc: GObject.BoxedCopyFunc
    readonly tDestroyFunc: GLib.DestroyNotify
    value: any
    readonly valueType: GObject.GType
    id: string | null
    parameters: Gee.MultiMap

    // Owm methods of Folks-0.6.Folks.AbstractFieldDetails

    get_parameter_values(parameter_name: string): Gee.Collection | null
    add_parameter(parameter_name: string, parameter_value: string): void
    set_parameter(parameter_name: string, parameter_value: string): void
    extend_parameters(additional: Gee.MultiMap): void
    remove_parameter_all(parameter_name: string): void
    equal(that: AbstractFieldDetails): boolean
    parameters_equal(that: AbstractFieldDetails): boolean
    values_equal(that: AbstractFieldDetails): boolean
    hash(): number
    get_value(): any | null
    set_value(value?: any | null): void
    get_value_type(): GObject.GType
    get_id(): string
    set_id(value: string): void
    get_parameters(): Gee.MultiMap
    set_parameters(value: Gee.MultiMap): void

    // Own virtual methods of Folks-0.6.Folks.AbstractFieldDetails

    vfunc_equal(that: AbstractFieldDetails): boolean
    vfunc_parameters_equal(that: AbstractFieldDetails): boolean
    vfunc_values_equal(that: AbstractFieldDetails): boolean
    vfunc_hash(): number
    vfunc_get_value(): any | null
    vfunc_set_value(value?: any | null): void
    vfunc_get_id(): string
    vfunc_set_id(value: string): void
    vfunc_get_parameters(): Gee.MultiMap
    vfunc_set_parameters(value: Gee.MultiMap): void

    // Class property signals of Folks-0.6.Folks.AbstractFieldDetails

    connect(sigName: "notify::t-type", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-type", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-dup-func", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-destroy-func", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class AbstractFieldDetails extends GObject.Object {

    // Own properties of Folks-0.6.Folks.AbstractFieldDetails

    static name: string
    static $gtype: GObject.GType<AbstractFieldDetails>

    // Constructors of Folks-0.6.Folks.AbstractFieldDetails

    constructor(config?: AbstractFieldDetails.ConstructorProperties) 
    _init(config?: AbstractFieldDetails.ConstructorProperties): void
    static equal_static(left: AbstractFieldDetails, right: AbstractFieldDetails): boolean
    static hash_static(value: AbstractFieldDetails): number
}

export module AvatarCache {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface AvatarCache {

    // Owm methods of Folks-0.6.Folks.AvatarCache

    load_avatar(id: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    load_avatar_finish(_res_: Gio.AsyncResult): Gio.LoadableIcon | null
    store_avatar(id: string, avatar: Gio.LoadableIcon, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    store_avatar_finish(_res_: Gio.AsyncResult): string | null
    remove_avatar(id: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    remove_avatar_finish(_res_: Gio.AsyncResult): void
    build_uri_for_avatar(id: string): string | null

    // Class property signals of Folks-0.6.Folks.AvatarCache

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class AvatarCache extends GObject.Object {

    // Own properties of Folks-0.6.Folks.AvatarCache

    static name: string
    static $gtype: GObject.GType<AvatarCache>

    // Constructors of Folks-0.6.Folks.AvatarCache

    constructor(config?: AvatarCache.ConstructorProperties) 
    _init(config?: AvatarCache.ConstructorProperties): void
    static dup(): AvatarCache
}

export module BackendStore {

    // Signal callback interfaces

    /**
     * Signal callback interface for `backend-available`
     */
    export interface BackendAvailableSignalCallback {
        ($obj: BackendStore, backend: Backend): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.BackendStore

        enabledBackends?: Gee.Map | null
        isPrepared?: boolean | null
    }

}

export interface BackendStore {

    // Own properties of Folks-0.6.Folks.BackendStore

    enabledBackends: Gee.Map
    isPrepared: boolean

    // Own fields of Folks-0.6.Folks.BackendStore

    folks_backend_store_KEY_FILE_GROUP_ALL_OTHERS: string | null

    // Owm methods of Folks-0.6.Folks.BackendStore

    prepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    prepare_finish(_res_: Gio.AsyncResult): void
    load_backends(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    load_backends_finish(_res_: Gio.AsyncResult): void
    add_backend(backend: Backend): void
    dup_backend_by_name(name: string): Backend | null
    list_backends(): Gee.Collection
    enable_backend(name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    enable_backend_finish(_res_: Gio.AsyncResult): void
    disable_backend(name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    disable_backend_finish(_res_: Gio.AsyncResult): void
    get_enabled_backends(): Gee.Map
    get_is_prepared(): boolean

    // Own signals of Folks-0.6.Folks.BackendStore

    connect(sigName: "backend-available", callback: BackendStore.BackendAvailableSignalCallback): number
    connect_after(sigName: "backend-available", callback: BackendStore.BackendAvailableSignalCallback): number
    emit(sigName: "backend-available", backend: Backend, ...args: any[]): void

    // Class property signals of Folks-0.6.Folks.BackendStore

    connect(sigName: "notify::enabled-backends", callback: (($obj: BackendStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled-backends", callback: (($obj: BackendStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enabled-backends", ...args: any[]): void
    connect(sigName: "notify::is-prepared", callback: (($obj: BackendStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-prepared", callback: (($obj: BackendStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-prepared", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class BackendStore extends GObject.Object {

    // Own properties of Folks-0.6.Folks.BackendStore

    static name: string
    static $gtype: GObject.GType<BackendStore>

    // Constructors of Folks-0.6.Folks.BackendStore

    constructor(config?: BackendStore.ConstructorProperties) 
    _init(config?: BackendStore.ConstructorProperties): void
    static dup(): BackendStore
}

export module Backend {

    // Signal callback interfaces

    /**
     * Signal callback interface for `persona-store-added`
     */
    export interface PersonaStoreAddedSignalCallback {
        ($obj: Backend, store: PersonaStore): void
    }

    /**
     * Signal callback interface for `persona-store-removed`
     */
    export interface PersonaStoreRemovedSignalCallback {
        ($obj: Backend, store: PersonaStore): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Backend {

    // Own properties of Folks-0.6.Folks.Backend

    readonly isPrepared: boolean
    readonly isQuiescent: boolean
    readonly name: string | null
    readonly personaStores: Gee.Map

    // Owm methods of Folks-0.6.Folks.Backend

    disable_persona_store(store: PersonaStore): void
    enable_persona_store(store: PersonaStore): void
    set_persona_stores(storeids?: Gee.Set | null): void
    prepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    prepare_finish(_res_: Gio.AsyncResult): void
    unprepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    unprepare_finish(_res_: Gio.AsyncResult): void
    get_is_prepared(): boolean
    get_is_quiescent(): boolean
    get_name(): string
    get_persona_stores(): Gee.Map

    // Own virtual methods of Folks-0.6.Folks.Backend

    vfunc_disable_persona_store(store: PersonaStore): void
    vfunc_enable_persona_store(store: PersonaStore): void
    vfunc_set_persona_stores(storeids?: Gee.Set | null): void
    vfunc_prepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_prepare_finish(_res_: Gio.AsyncResult): void
    vfunc_unprepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_unprepare_finish(_res_: Gio.AsyncResult): void
    vfunc_get_is_prepared(): boolean
    vfunc_get_is_quiescent(): boolean
    vfunc_get_name(): string
    vfunc_get_persona_stores(): Gee.Map

    // Own signals of Folks-0.6.Folks.Backend

    connect(sigName: "persona-store-added", callback: Backend.PersonaStoreAddedSignalCallback): number
    connect_after(sigName: "persona-store-added", callback: Backend.PersonaStoreAddedSignalCallback): number
    emit(sigName: "persona-store-added", store: PersonaStore, ...args: any[]): void
    connect(sigName: "persona-store-removed", callback: Backend.PersonaStoreRemovedSignalCallback): number
    connect_after(sigName: "persona-store-removed", callback: Backend.PersonaStoreRemovedSignalCallback): number
    emit(sigName: "persona-store-removed", store: PersonaStore, ...args: any[]): void

    // Class property signals of Folks-0.6.Folks.Backend

    connect(sigName: "notify::is-prepared", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-prepared", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-prepared", ...args: any[]): void
    connect(sigName: "notify::is-quiescent", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-quiescent", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-quiescent", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::persona-stores", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::persona-stores", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::persona-stores", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Backend extends GObject.Object {

    // Own properties of Folks-0.6.Folks.Backend

    static name: string
    static $gtype: GObject.GType<Backend>

    // Constructors of Folks-0.6.Folks.Backend

    constructor(config?: Backend.ConstructorProperties) 
    _init(config?: Backend.ConstructorProperties): void
}

export module Debug {

    // Signal callback interfaces

    /**
     * Signal callback interface for `print-status`
     */
    export interface PrintStatusSignalCallback {
        ($obj: Debug): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.Debug

        colourEnabled?: boolean | null
        debugOutputEnabled?: boolean | null
    }

}

export interface Debug {

    // Own properties of Folks-0.6.Folks.Debug

    colourEnabled: boolean
    debugOutputEnabled: boolean

    // Owm methods of Folks-0.6.Folks.Debug

    emit_print_status(): void
    indent(): void
    unindent(): void
    get_colour_enabled(): boolean
    set_colour_enabled(value: boolean): void
    get_debug_output_enabled(): boolean
    set_debug_output_enabled(value: boolean): void

    // Own signals of Folks-0.6.Folks.Debug

    connect(sigName: "print-status", callback: Debug.PrintStatusSignalCallback): number
    connect_after(sigName: "print-status", callback: Debug.PrintStatusSignalCallback): number
    emit(sigName: "print-status", ...args: any[]): void

    // Class property signals of Folks-0.6.Folks.Debug

    connect(sigName: "notify::colour-enabled", callback: (($obj: Debug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::colour-enabled", callback: (($obj: Debug, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::colour-enabled", ...args: any[]): void
    connect(sigName: "notify::debug-output-enabled", callback: (($obj: Debug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::debug-output-enabled", callback: (($obj: Debug, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::debug-output-enabled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Debug extends GObject.Object {

    // Own properties of Folks-0.6.Folks.Debug

    static name: string
    static $gtype: GObject.GType<Debug>

    // Constructors of Folks-0.6.Folks.Debug

    constructor(config?: Debug.ConstructorProperties) 
    _init(config?: Debug.ConstructorProperties): void
    static dup(): Debug
    static dup_with_flags(debug_flags: string | null, colour_enabled: boolean): Debug
}

export module EmailFieldDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

export interface EmailFieldDetails {

    // Class property signals of Folks-0.6.Folks.EmailFieldDetails

    connect(sigName: "notify::t-type", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-type", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-dup-func", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-destroy-func", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class EmailFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.6.Folks.EmailFieldDetails

    static name: string
    static $gtype: GObject.GType<EmailFieldDetails>

    // Constructors of Folks-0.6.Folks.EmailFieldDetails

    constructor(config?: EmailFieldDetails.ConstructorProperties) 
    constructor(value: string, parameters?: Gee.MultiMap | null) 
    static new(value: string, parameters?: Gee.MultiMap | null): EmailFieldDetails
    _init(config?: EmailFieldDetails.ConstructorProperties): void
}

export module ExtendedFieldDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

export interface ExtendedFieldDetails {

    // Class property signals of Folks-0.6.Folks.ExtendedFieldDetails

    connect(sigName: "notify::t-type", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-type", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-dup-func", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-destroy-func", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ExtendedFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.6.Folks.ExtendedFieldDetails

    static name: string
    static $gtype: GObject.GType<ExtendedFieldDetails>

    // Constructors of Folks-0.6.Folks.ExtendedFieldDetails

    constructor(config?: ExtendedFieldDetails.ConstructorProperties) 
    constructor(value: string, parameters?: Gee.MultiMap | null) 
    static new(value: string, parameters?: Gee.MultiMap | null): ExtendedFieldDetails
    _init(config?: ExtendedFieldDetails.ConstructorProperties): void
}

export module ImFieldDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

export interface ImFieldDetails {

    // Class property signals of Folks-0.6.Folks.ImFieldDetails

    connect(sigName: "notify::t-type", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-type", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-dup-func", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-destroy-func", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ImFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.6.Folks.ImFieldDetails

    static name: string
    static $gtype: GObject.GType<ImFieldDetails>

    // Constructors of Folks-0.6.Folks.ImFieldDetails

    constructor(config?: ImFieldDetails.ConstructorProperties) 
    constructor(value: string, parameters?: Gee.MultiMap | null) 
    static new(value: string, parameters?: Gee.MultiMap | null): ImFieldDetails
    _init(config?: ImFieldDetails.ConstructorProperties): void
}

export module IndividualAggregator {

    // Signal callback interfaces

    /**
     * Signal callback interface for `individuals-changed`
     */
    export interface IndividualsChangedSignalCallback {
        ($obj: IndividualAggregator, added: Gee.Set, removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason): void
    }

    /**
     * Signal callback interface for `individuals-changed-detailed`
     */
    export interface IndividualsChangedDetailedSignalCallback {
        ($obj: IndividualAggregator, changes: Gee.MultiMap): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.IndividualAggregator

        backendStore?: BackendStore | null
        individuals?: Gee.Map | null
        user?: Individual | null
    }

}

export interface IndividualAggregator {

    // Own properties of Folks-0.6.Folks.IndividualAggregator

    readonly isPrepared: boolean
    readonly isQuiescent: boolean
    readonly primaryStore: PersonaStore
    readonly backendStore: BackendStore
    individuals: Gee.Map
    user: Individual

    // Owm methods of Folks-0.6.Folks.IndividualAggregator

    prepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    prepare_finish(_res_: Gio.AsyncResult): void
    unprepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    unprepare_finish(_res_: Gio.AsyncResult): void
    get_potential_matches(matchee: Individual, min_threshold: MatchResult): Gee.Map
    get_all_potential_matches(min_threshold: MatchResult): Gee.Map
    add_persona_from_details(parent: Individual | null, persona_store: PersonaStore, details: GLib.HashTable, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    add_persona_from_details_finish(_res_: Gio.AsyncResult): Persona | null
    remove_individual(individual: Individual, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    remove_individual_finish(_res_: Gio.AsyncResult): void
    remove_persona(persona: Persona, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    remove_persona_finish(_res_: Gio.AsyncResult): void
    link_personas(personas: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    link_personas_finish(_res_: Gio.AsyncResult): void
    unlink_individual(individual: Individual, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    unlink_individual_finish(_res_: Gio.AsyncResult): void
    ensure_individual_property_writeable(individual: Individual, property_name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    ensure_individual_property_writeable_finish(_res_: Gio.AsyncResult): Persona
    look_up_individual(id: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    look_up_individual_finish(_res_: Gio.AsyncResult): Individual | null
    get_is_prepared(): boolean
    get_is_quiescent(): boolean
    get_primary_store(): PersonaStore | null
    get_backend_store(): BackendStore
    get_individuals(): Gee.Map
    get_user(): Individual | null

    // Own signals of Folks-0.6.Folks.IndividualAggregator

    connect(sigName: "individuals-changed", callback: IndividualAggregator.IndividualsChangedSignalCallback): number
    connect_after(sigName: "individuals-changed", callback: IndividualAggregator.IndividualsChangedSignalCallback): number
    emit(sigName: "individuals-changed", added: Gee.Set, removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason, ...args: any[]): void
    connect(sigName: "individuals-changed-detailed", callback: IndividualAggregator.IndividualsChangedDetailedSignalCallback): number
    connect_after(sigName: "individuals-changed-detailed", callback: IndividualAggregator.IndividualsChangedDetailedSignalCallback): number
    emit(sigName: "individuals-changed-detailed", changes: Gee.MultiMap, ...args: any[]): void

    // Class property signals of Folks-0.6.Folks.IndividualAggregator

    connect(sigName: "notify::is-prepared", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-prepared", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-prepared", ...args: any[]): void
    connect(sigName: "notify::is-quiescent", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-quiescent", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-quiescent", ...args: any[]): void
    connect(sigName: "notify::primary-store", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-store", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-store", ...args: any[]): void
    connect(sigName: "notify::backend-store", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-store", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backend-store", ...args: any[]): void
    connect(sigName: "notify::individuals", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::individuals", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::individuals", ...args: any[]): void
    connect(sigName: "notify::user", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IndividualAggregator extends GObject.Object {

    // Own properties of Folks-0.6.Folks.IndividualAggregator

    static name: string
    static $gtype: GObject.GType<IndividualAggregator>

    // Constructors of Folks-0.6.Folks.IndividualAggregator

    constructor(config?: IndividualAggregator.ConstructorProperties) 
    constructor() 
    static new(): IndividualAggregator
    static with_backend_store(store: BackendStore): IndividualAggregator
    _init(config?: IndividualAggregator.ConstructorProperties): void
    static dup(): IndividualAggregator
    static dup_with_backend_store(store: BackendStore): IndividualAggregator | null
}

export module Individual {

    // Signal callback interfaces

    /**
     * Signal callback interface for `removed`
     */
    export interface RemovedSignalCallback {
        ($obj: Individual, replacement_individual?: Individual | null): void
    }

    /**
     * Signal callback interface for `personas-changed`
     */
    export interface PersonasChangedSignalCallback {
        ($obj: Individual, added: Gee.Set, removed: Gee.Set): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends AliasDetails.ConstructorProperties, AvatarDetails.ConstructorProperties, BirthdayDetails.ConstructorProperties, EmailDetails.ConstructorProperties, ExtendedInfo.ConstructorProperties, FavouriteDetails.ConstructorProperties, GenderDetails.ConstructorProperties, GroupDetails.ConstructorProperties, ImDetails.ConstructorProperties, InteractionDetails.ConstructorProperties, LocalIdDetails.ConstructorProperties, LocationDetails.ConstructorProperties, NameDetails.ConstructorProperties, NoteDetails.ConstructorProperties, PresenceDetails.ConstructorProperties, PhoneDetails.ConstructorProperties, PostalAddressDetails.ConstructorProperties, RoleDetails.ConstructorProperties, UrlDetails.ConstructorProperties, WebServiceDetails.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.Individual

        trustLevel?: TrustLevel | null
        isUser?: boolean | null
        id?: string | null
        personas?: Gee.Set | null
    }

}

export interface Individual extends AliasDetails, AvatarDetails, BirthdayDetails, EmailDetails, ExtendedInfo, FavouriteDetails, GenderDetails, GroupDetails, ImDetails, InteractionDetails, LocalIdDetails, LocationDetails, NameDetails, NoteDetails, PresenceDetails, PhoneDetails, PostalAddressDetails, RoleDetails, UrlDetails, WebServiceDetails {

    // Own properties of Folks-0.6.Folks.Individual

    trustLevel: TrustLevel
    isUser: boolean
    id: string | null
    readonly displayName: string | null
    personas: Gee.Set

    // Owm methods of Folks-0.6.Folks.Individual

    has_anti_link_with_persona(p: Persona): boolean
    has_anti_link_with_individual(i: Individual): boolean
    get_trust_level(): TrustLevel
    get_is_user(): boolean
    get_id(): string
    get_display_name(): string
    get_personas(): Gee.Set
    set_personas(value: Gee.Set): void

    // Own signals of Folks-0.6.Folks.Individual

    connect(sigName: "removed", callback: Individual.RemovedSignalCallback): number
    connect_after(sigName: "removed", callback: Individual.RemovedSignalCallback): number
    emit(sigName: "removed", replacement_individual?: Individual | null, ...args: any[]): void
    connect(sigName: "personas-changed", callback: Individual.PersonasChangedSignalCallback): number
    connect_after(sigName: "personas-changed", callback: Individual.PersonasChangedSignalCallback): number
    emit(sigName: "personas-changed", added: Gee.Set, removed: Gee.Set, ...args: any[]): void

    // Class property signals of Folks-0.6.Folks.Individual

    connect(sigName: "notify::trust-level", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::trust-level", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::trust-level", ...args: any[]): void
    connect(sigName: "notify::is-user", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-user", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-user", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::personas", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::personas", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::personas", ...args: any[]): void
    connect(sigName: "notify::alias", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alias", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alias", ...args: any[]): void
    connect(sigName: "notify::avatar", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::avatar", ...args: any[]): void
    connect(sigName: "notify::birthday", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::birthday", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::birthday", ...args: any[]): void
    connect(sigName: "notify::calendar-event-id", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-event-id", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::calendar-event-id", ...args: any[]): void
    connect(sigName: "notify::email-addresses", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-addresses", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::email-addresses", ...args: any[]): void
    connect(sigName: "notify::is-favourite", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-favourite", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-favourite", ...args: any[]): void
    connect(sigName: "notify::gender", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gender", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gender", ...args: any[]): void
    connect(sigName: "notify::groups", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::groups", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::groups", ...args: any[]): void
    connect(sigName: "notify::im-addresses", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-addresses", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-addresses", ...args: any[]): void
    connect(sigName: "notify::im-interaction-count", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-interaction-count", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-interaction-count", ...args: any[]): void
    connect(sigName: "notify::last-im-interaction-datetime", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-im-interaction-datetime", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-im-interaction-datetime", ...args: any[]): void
    connect(sigName: "notify::call-interaction-count", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::call-interaction-count", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::call-interaction-count", ...args: any[]): void
    connect(sigName: "notify::last-call-interaction-datetime", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-call-interaction-datetime", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-call-interaction-datetime", ...args: any[]): void
    connect(sigName: "notify::local-ids", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-ids", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-ids", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::structured-name", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::structured-name", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::structured-name", ...args: any[]): void
    connect(sigName: "notify::full-name", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::full-name", ...args: any[]): void
    connect(sigName: "notify::nickname", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nickname", ...args: any[]): void
    connect(sigName: "notify::notes", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notes", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::notes", ...args: any[]): void
    connect(sigName: "notify::presence-type", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-type", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::presence-type", ...args: any[]): void
    connect(sigName: "notify::presence-message", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-message", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::presence-message", ...args: any[]): void
    connect(sigName: "notify::client-types", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-types", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client-types", ...args: any[]): void
    connect(sigName: "notify::presence-status", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-status", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::presence-status", ...args: any[]): void
    connect(sigName: "notify::phone-numbers", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phone-numbers", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::phone-numbers", ...args: any[]): void
    connect(sigName: "notify::postal-addresses", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::postal-addresses", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::postal-addresses", ...args: any[]): void
    connect(sigName: "notify::roles", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::roles", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::roles", ...args: any[]): void
    connect(sigName: "notify::urls", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urls", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urls", ...args: any[]): void
    connect(sigName: "notify::web-service-addresses", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::web-service-addresses", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::web-service-addresses", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Individual extends GObject.Object {

    // Own properties of Folks-0.6.Folks.Individual

    static name: string
    static $gtype: GObject.GType<Individual>

    // Constructors of Folks-0.6.Folks.Individual

    constructor(config?: Individual.ConstructorProperties) 
    constructor(personas?: Gee.Set | null) 
    static new(personas?: Gee.Set | null): Individual
    _init(config?: Individual.ConstructorProperties): void
}

export module Location {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Location {

    // Own fields of Folks-0.6.Folks.Location

    latitude: number
    longitude: number

    // Owm methods of Folks-0.6.Folks.Location

    equal(other: Location): boolean
    equal_coordinates(latitude: number, longitude: number): boolean

    // Class property signals of Folks-0.6.Folks.Location

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Location extends GObject.Object {

    // Own properties of Folks-0.6.Folks.Location

    static name: string
    static $gtype: GObject.GType<Location>

    // Constructors of Folks-0.6.Folks.Location

    constructor(config?: Location.ConstructorProperties) 
    constructor(latitude: number, longitude: number) 
    static new(latitude: number, longitude: number): Location
    _init(config?: Location.ConstructorProperties): void
}

export module StructuredName {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.StructuredName

        familyName?: string | null
        givenName?: string | null
        additionalNames?: string | null
        prefixes?: string | null
        suffixes?: string | null
    }

}

export interface StructuredName {

    // Own properties of Folks-0.6.Folks.StructuredName

    familyName: string | null
    givenName: string | null
    additionalNames: string | null
    prefixes: string | null
    suffixes: string | null

    // Owm methods of Folks-0.6.Folks.StructuredName

    is_empty(): boolean
    equal(other: StructuredName): boolean
    to_string(): string | null
    to_string_with_format(name_fmt: string): string | null
    get_family_name(): string
    set_family_name(value: string): void
    get_given_name(): string
    set_given_name(value: string): void
    get_additional_names(): string
    set_additional_names(value: string): void
    get_prefixes(): string
    set_prefixes(value: string): void
    get_suffixes(): string
    set_suffixes(value: string): void

    // Class property signals of Folks-0.6.Folks.StructuredName

    connect(sigName: "notify::family-name", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family-name", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::family-name", ...args: any[]): void
    connect(sigName: "notify::given-name", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::given-name", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::given-name", ...args: any[]): void
    connect(sigName: "notify::additional-names", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::additional-names", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::additional-names", ...args: any[]): void
    connect(sigName: "notify::prefixes", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefixes", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefixes", ...args: any[]): void
    connect(sigName: "notify::suffixes", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suffixes", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::suffixes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class StructuredName extends GObject.Object {

    // Own properties of Folks-0.6.Folks.StructuredName

    static name: string
    static $gtype: GObject.GType<StructuredName>

    // Constructors of Folks-0.6.Folks.StructuredName

    constructor(config?: StructuredName.ConstructorProperties) 
    constructor(family_name?: string | null, given_name?: string | null, additional_names?: string | null, prefixes?: string | null, suffixes?: string | null) 
    static new(family_name?: string | null, given_name?: string | null, additional_names?: string | null, prefixes?: string | null, suffixes?: string | null): StructuredName
    static simple(family_name?: string | null, given_name?: string | null): StructuredName
    _init(config?: StructuredName.ConstructorProperties): void
}

export module NoteFieldDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.NoteFieldDetails

        uid?: string | null
    }

}

export interface NoteFieldDetails {

    // Own properties of Folks-0.6.Folks.NoteFieldDetails

    uid: string | null

    // Owm methods of Folks-0.6.Folks.NoteFieldDetails

    get_uid(): string
    set_uid(value: string): void

    // Class property signals of Folks-0.6.Folks.NoteFieldDetails

    connect(sigName: "notify::uid", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::t-type", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-type", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-dup-func", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-destroy-func", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class NoteFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.6.Folks.NoteFieldDetails

    static name: string
    static $gtype: GObject.GType<NoteFieldDetails>

    // Constructors of Folks-0.6.Folks.NoteFieldDetails

    constructor(config?: NoteFieldDetails.ConstructorProperties) 
    constructor(value: string, parameters?: Gee.MultiMap | null, uid?: string | null) 
    static new(value: string, parameters?: Gee.MultiMap | null, uid?: string | null): NoteFieldDetails
    _init(config?: NoteFieldDetails.ConstructorProperties): void
}

export module ObjectCache {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.ObjectCache

        tType?: GObject.GType | null
        tDupFunc?: GObject.BoxedCopyFunc | null
        tDestroyFunc?: GLib.DestroyNotify | null
        typeId?: string | null
        id?: string | null
    }

}

export interface ObjectCache {

    // Own properties of Folks-0.6.Folks.ObjectCache

    readonly tType: GObject.GType
    readonly tDupFunc: GObject.BoxedCopyFunc
    readonly tDestroyFunc: GLib.DestroyNotify
    readonly typeId: string | null
    readonly id: string | null

    // Owm methods of Folks-0.6.Folks.ObjectCache

    get_serialised_object_type(object_version: number): GLib.VariantType | null
    get_serialised_object_version(): number
    serialise_object(object?: any | null): GLib.Variant
    deserialise_object(variant: GLib.Variant, object_version: number): any | null
    load_objects(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    load_objects_finish(_res_: Gio.AsyncResult): Gee.Set | null
    store_objects(objects: Gee.Set, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    store_objects_finish(_res_: Gio.AsyncResult): void
    clear_cache(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    clear_cache_finish(_res_: Gio.AsyncResult): void
    get_type_id(): string
    get_id(): string

    // Own virtual methods of Folks-0.6.Folks.ObjectCache

    vfunc_get_serialised_object_type(object_version: number): GLib.VariantType | null
    vfunc_get_serialised_object_version(): number
    vfunc_serialise_object(object?: any | null): GLib.Variant
    vfunc_deserialise_object(variant: GLib.Variant, object_version: number): any | null

    // Class property signals of Folks-0.6.Folks.ObjectCache

    connect(sigName: "notify::t-type", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-type", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-dup-func", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-destroy-func", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::type-id", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-id", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-id", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ObjectCache extends GObject.Object {

    // Own properties of Folks-0.6.Folks.ObjectCache

    static name: string
    static $gtype: GObject.GType<ObjectCache>

    // Constructors of Folks-0.6.Folks.ObjectCache

    constructor(config?: ObjectCache.ConstructorProperties) 
    _init(config?: ObjectCache.ConstructorProperties): void
}

export module PersonaStore {

    // Signal callback interfaces

    /**
     * Signal callback interface for `personas-changed`
     */
    export interface PersonasChangedSignalCallback {
        ($obj: PersonaStore, added: Gee.Set, removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason): void
    }

    /**
     * Signal callback interface for `removed`
     */
    export interface RemovedSignalCallback {
        ($obj: PersonaStore): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.PersonaStore

        displayName?: string | null
        id?: string | null
        isWriteable?: boolean | null
        trustLevel?: PersonaStoreTrust | null
        isPrimaryStore?: boolean | null
        isUserSetDefault?: boolean | null
    }

}

export interface PersonaStore {

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

    // Owm methods of Folks-0.6.Folks.PersonaStore

    _emit_personas_changed(added: Gee.Set | null, removed: Gee.Set | null, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason): void
    prepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    prepare_finish(_res_: Gio.AsyncResult): void
    flush(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    flush_finish(_res_: Gio.AsyncResult): void
    add_persona_from_details(details: GLib.HashTable, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    add_persona_from_details_finish(_res_: Gio.AsyncResult): Persona | null
    remove_persona(persona: Persona, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    remove_persona_finish(_res_: Gio.AsyncResult): void
    get_type_id(): string
    get_display_name(): string
    get_id(): string
    get_personas(): Gee.Map
    get_can_add_personas(): MaybeBool
    get_can_alias_personas(): MaybeBool
    get_can_group_personas(): MaybeBool
    get_can_remove_personas(): MaybeBool
    get_is_prepared(): boolean
    get_is_quiescent(): boolean
    get_is_writeable(): boolean
    set_is_writeable(value: boolean): void
    get_trust_level(): PersonaStoreTrust
    set_trust_level(value: PersonaStoreTrust): void
    get_always_writeable_properties(): string[]
    get_is_primary_store(): boolean
    get_is_user_set_default(): boolean

    // Own virtual methods of Folks-0.6.Folks.PersonaStore

    vfunc_prepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_prepare_finish(_res_: Gio.AsyncResult): void
    vfunc_flush(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_flush_finish(_res_: Gio.AsyncResult): void
    vfunc_add_persona_from_details(details: GLib.HashTable, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_add_persona_from_details_finish(_res_: Gio.AsyncResult): Persona | null
    vfunc_remove_persona(persona: Persona, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_remove_persona_finish(_res_: Gio.AsyncResult): void
    vfunc_get_type_id(): string
    vfunc_get_personas(): Gee.Map
    vfunc_get_can_add_personas(): MaybeBool
    vfunc_get_can_alias_personas(): MaybeBool
    vfunc_get_can_group_personas(): MaybeBool
    vfunc_get_can_remove_personas(): MaybeBool
    vfunc_get_is_prepared(): boolean
    vfunc_get_is_quiescent(): boolean
    vfunc_get_always_writeable_properties(): string[]

    // Own signals of Folks-0.6.Folks.PersonaStore

    connect(sigName: "personas-changed", callback: PersonaStore.PersonasChangedSignalCallback): number
    connect_after(sigName: "personas-changed", callback: PersonaStore.PersonasChangedSignalCallback): number
    emit(sigName: "personas-changed", added: Gee.Set, removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason, ...args: any[]): void
    connect(sigName: "removed", callback: PersonaStore.RemovedSignalCallback): number
    connect_after(sigName: "removed", callback: PersonaStore.RemovedSignalCallback): number
    emit(sigName: "removed", ...args: any[]): void

    // Class property signals of Folks-0.6.Folks.PersonaStore

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

export class PersonaStore extends GObject.Object {

    // Own properties of Folks-0.6.Folks.PersonaStore

    static name: string
    static $gtype: GObject.GType<PersonaStore>

    // Constructors of Folks-0.6.Folks.PersonaStore

    constructor(config?: PersonaStore.ConstructorProperties) 
    _init(config?: PersonaStore.ConstructorProperties): void
    static detail_key(detail: PersonaDetail): string | null
}

export module Persona {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.Persona

        iid?: string | null
        uid?: string | null
        displayId?: string | null
        isUser?: boolean | null
        store?: PersonaStore | null
        individual?: Individual | null
    }

}

export interface Persona {

    // Own properties of Folks-0.6.Folks.Persona

    readonly iid: string | null
    readonly uid: string | null
    readonly displayId: string | null
    readonly isUser: boolean
    readonly store: PersonaStore
    individual: Individual
    readonly linkableProperties: string[]
    readonly writeableProperties: string[]

    // Owm methods of Folks-0.6.Folks.Persona

    linkable_property_to_links(prop_name: string, callback: any): void
    get_iid(): string
    get_uid(): string
    get_display_id(): string
    get_is_user(): boolean
    get_store(): PersonaStore
    get_individual(): Individual | null
    get_linkable_properties(): string[]
    get_writeable_properties(): string[]

    // Own virtual methods of Folks-0.6.Folks.Persona

    vfunc_linkable_property_to_links(prop_name: string, callback: any): void
    vfunc_get_linkable_properties(): string[]
    vfunc_get_writeable_properties(): string[]

    // Class property signals of Folks-0.6.Folks.Persona

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Persona extends GObject.Object {

    // Own properties of Folks-0.6.Folks.Persona

    static name: string
    static $gtype: GObject.GType<Persona>

    // Constructors of Folks-0.6.Folks.Persona

    constructor(config?: Persona.ConstructorProperties) 
    _init(config?: Persona.ConstructorProperties): void
    static build_uid(backend_name: string, persona_store_id: string, persona_id: string): string | null
    static split_uid(uid: string): [ /* backend_name */ string | null, /* persona_store_id */ string | null, /* persona_id */ string | null ]
}

export module PhoneFieldDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

export interface PhoneFieldDetails {

    // Owm methods of Folks-0.6.Folks.PhoneFieldDetails

    get_normalised(): string | null

    // Class property signals of Folks-0.6.Folks.PhoneFieldDetails

    connect(sigName: "notify::t-type", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-type", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-dup-func", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-destroy-func", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class PhoneFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.6.Folks.PhoneFieldDetails

    static name: string
    static $gtype: GObject.GType<PhoneFieldDetails>

    // Constructors of Folks-0.6.Folks.PhoneFieldDetails

    constructor(config?: PhoneFieldDetails.ConstructorProperties) 
    constructor(value: string, parameters?: Gee.MultiMap | null) 
    static new(value: string, parameters?: Gee.MultiMap | null): PhoneFieldDetails
    _init(config?: PhoneFieldDetails.ConstructorProperties): void
}

export module PostalAddress {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

export interface PostalAddress {

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

    // Owm methods of Folks-0.6.Folks.PostalAddress

    is_empty(): boolean
    equal(with_: PostalAddress): boolean
    to_string(): string | null
    get_po_box(): string
    set_po_box(value: string): void
    get_extension(): string
    set_extension(value: string): void
    get_street(): string
    set_street(value: string): void
    get_locality(): string
    set_locality(value: string): void
    get_region(): string
    set_region(value: string): void
    get_postal_code(): string
    set_postal_code(value: string): void
    get_country(): string
    set_country(value: string): void
    get_address_format(): string
    set_address_format(value: string): void
    get_uid(): string
    set_uid(value: string): void

    // Class property signals of Folks-0.6.Folks.PostalAddress

    connect(sigName: "notify::po-box", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::po-box", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::po-box", ...args: any[]): void
    connect(sigName: "notify::extension", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extension", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::extension", ...args: any[]): void
    connect(sigName: "notify::street", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::street", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::street", ...args: any[]): void
    connect(sigName: "notify::locality", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locality", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locality", ...args: any[]): void
    connect(sigName: "notify::region", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::region", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::region", ...args: any[]): void
    connect(sigName: "notify::postal-code", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::postal-code", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::postal-code", ...args: any[]): void
    connect(sigName: "notify::country", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::country", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::country", ...args: any[]): void
    connect(sigName: "notify::address-format", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address-format", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::address-format", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class PostalAddress extends GObject.Object {

    // Own properties of Folks-0.6.Folks.PostalAddress

    static name: string
    static $gtype: GObject.GType<PostalAddress>

    // Constructors of Folks-0.6.Folks.PostalAddress

    constructor(config?: PostalAddress.ConstructorProperties) 
    constructor(po_box?: string | null, extension?: string | null, street?: string | null, locality?: string | null, region?: string | null, postal_code?: string | null, country?: string | null, address_format?: string | null, uid?: string | null) 
    static new(po_box?: string | null, extension?: string | null, street?: string | null, locality?: string | null, region?: string | null, postal_code?: string | null, country?: string | null, address_format?: string | null, uid?: string | null): PostalAddress
    _init(config?: PostalAddress.ConstructorProperties): void
}

export module PostalAddressFieldDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

export interface PostalAddressFieldDetails {

    // Class property signals of Folks-0.6.Folks.PostalAddressFieldDetails

    connect(sigName: "notify::t-type", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-type", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-dup-func", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-destroy-func", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class PostalAddressFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.6.Folks.PostalAddressFieldDetails

    static name: string
    static $gtype: GObject.GType<PostalAddressFieldDetails>

    // Constructors of Folks-0.6.Folks.PostalAddressFieldDetails

    constructor(config?: PostalAddressFieldDetails.ConstructorProperties) 
    constructor(value: PostalAddress, parameters?: Gee.MultiMap | null) 
    static new(value: PostalAddress, parameters?: Gee.MultiMap | null): PostalAddressFieldDetails
    _init(config?: PostalAddressFieldDetails.ConstructorProperties): void
}

export module PotentialMatch {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface PotentialMatch {

    // Own fields of Folks-0.6.Folks.PotentialMatch

    folks_potential_match_known_email_aliases: Gee.Set

    // Owm methods of Folks-0.6.Folks.PotentialMatch

    potential_match(a: Individual, b: Individual): MatchResult

    // Class property signals of Folks-0.6.Folks.PotentialMatch

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class PotentialMatch extends GObject.Object {

    // Own properties of Folks-0.6.Folks.PotentialMatch

    static name: string
    static $gtype: GObject.GType<PotentialMatch>

    // Constructors of Folks-0.6.Folks.PotentialMatch

    constructor(config?: PotentialMatch.ConstructorProperties) 
    constructor() 
    static new(): PotentialMatch
    _init(config?: PotentialMatch.ConstructorProperties): void
}

export module Query {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.Query

        matchFields?: string[] | null
    }

}

export interface Query {

    // Own properties of Folks-0.6.Folks.Query

    readonly matchFields: string[]

    // Owm methods of Folks-0.6.Folks.Query

    is_match(individual: Individual): number
    get_match_fields(): string[]

    // Own virtual methods of Folks-0.6.Folks.Query

    vfunc_is_match(individual: Individual): number
    vfunc_get_match_fields(): string[]

    // Class property signals of Folks-0.6.Folks.Query

    connect(sigName: "notify::match-fields", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::match-fields", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::match-fields", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Query extends GObject.Object {

    // Own properties of Folks-0.6.Folks.Query

    static name: string
    static $gtype: GObject.GType<Query>

    // Constructors of Folks-0.6.Folks.Query

    constructor(config?: Query.ConstructorProperties) 
    _init(config?: Query.ConstructorProperties): void
}

export module Role {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.Role

        organisationName?: string | null
        title?: string | null
        role?: string | null
        uid?: string | null
    }

}

export interface Role {

    // Own properties of Folks-0.6.Folks.Role

    organisationName: string | null
    title: string | null
    role: string | null
    uid: string | null

    // Owm methods of Folks-0.6.Folks.Role

    is_empty(): boolean
    to_string(): string | null
    get_organisation_name(): string
    set_organisation_name(value: string): void
    get_title(): string
    set_title(value: string): void
    get_role(): string
    set_role(value: string): void
    get_uid(): string
    set_uid(value: string): void

    // Class property signals of Folks-0.6.Folks.Role

    connect(sigName: "notify::organisation-name", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::organisation-name", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::organisation-name", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Role extends GObject.Object {

    // Own properties of Folks-0.6.Folks.Role

    static name: string
    static $gtype: GObject.GType<Role>

    // Constructors of Folks-0.6.Folks.Role

    constructor(config?: Role.ConstructorProperties) 
    constructor(title?: string | null, organisation_name?: string | null, uid?: string | null) 
    static new(title?: string | null, organisation_name?: string | null, uid?: string | null): Role
    _init(config?: Role.ConstructorProperties): void
    static equal(a: Role, b: Role): boolean
    static hash(r: Role): number
}

export module RoleFieldDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

export interface RoleFieldDetails {

    // Class property signals of Folks-0.6.Folks.RoleFieldDetails

    connect(sigName: "notify::t-type", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-type", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-dup-func", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-destroy-func", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RoleFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.6.Folks.RoleFieldDetails

    static name: string
    static $gtype: GObject.GType<RoleFieldDetails>

    // Constructors of Folks-0.6.Folks.RoleFieldDetails

    constructor(config?: RoleFieldDetails.ConstructorProperties) 
    constructor(value: Role, parameters?: Gee.MultiMap | null) 
    static new(value: Role, parameters?: Gee.MultiMap | null): RoleFieldDetails
    _init(config?: RoleFieldDetails.ConstructorProperties): void
}

export module SearchView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `individuals-changed-detailed`
     */
    export interface IndividualsChangedDetailedSignalCallback {
        ($obj: SearchView, added: Gee.SortedSet, removed: Gee.SortedSet): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.SearchView

        query?: Query | null
    }

}

export interface SearchView {

    // Own properties of Folks-0.6.Folks.SearchView

    readonly aggregator: IndividualAggregator
    query: Query
    readonly individuals: Gee.SortedSet
    readonly isPrepared: boolean
    readonly isQuiescent: boolean

    // Owm methods of Folks-0.6.Folks.SearchView

    prepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    prepare_finish(_res_: Gio.AsyncResult): void
    unprepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    unprepare_finish(_res_: Gio.AsyncResult): void
    refresh(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    refresh_finish(_res_: Gio.AsyncResult): void
    get_aggregator(): IndividualAggregator
    get_query(): Query
    set_query(value: Query): void
    get_individuals(): Gee.SortedSet
    get_is_prepared(): boolean
    get_is_quiescent(): boolean

    // Own signals of Folks-0.6.Folks.SearchView

    connect(sigName: "individuals-changed-detailed", callback: SearchView.IndividualsChangedDetailedSignalCallback): number
    connect_after(sigName: "individuals-changed-detailed", callback: SearchView.IndividualsChangedDetailedSignalCallback): number
    emit(sigName: "individuals-changed-detailed", added: Gee.SortedSet, removed: Gee.SortedSet, ...args: any[]): void

    // Class property signals of Folks-0.6.Folks.SearchView

    connect(sigName: "notify::aggregator", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aggregator", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::aggregator", ...args: any[]): void
    connect(sigName: "notify::query", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::query", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::query", ...args: any[]): void
    connect(sigName: "notify::individuals", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::individuals", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::individuals", ...args: any[]): void
    connect(sigName: "notify::is-prepared", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-prepared", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-prepared", ...args: any[]): void
    connect(sigName: "notify::is-quiescent", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-quiescent", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-quiescent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SearchView extends GObject.Object {

    // Own properties of Folks-0.6.Folks.SearchView

    static name: string
    static $gtype: GObject.GType<SearchView>

    // Constructors of Folks-0.6.Folks.SearchView

    constructor(config?: SearchView.ConstructorProperties) 
    constructor(aggregator: IndividualAggregator, query: Query) 
    static new(aggregator: IndividualAggregator, query: Query): SearchView
    _init(config?: SearchView.ConstructorProperties): void
}

export module SimpleQuery {

    // Constructor properties interface

    export interface ConstructorProperties extends Query.ConstructorProperties {

        // Own constructor properties of Folks-0.6.Folks.SimpleQuery

        queryString?: string | null
        queryLocale?: string | null
    }

}

export interface SimpleQuery {

    // Own properties of Folks-0.6.Folks.SimpleQuery

    queryString: string | null
    queryLocale: string | null

    // Owm methods of Folks-0.6.Folks.SimpleQuery

    get_query_string(): string
    set_query_string(value: string): void
    get_query_locale(): string | null
    set_query_locale(value?: string | null): void

    // Class property signals of Folks-0.6.Folks.SimpleQuery

    connect(sigName: "notify::query-string", callback: (($obj: SimpleQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::query-string", callback: (($obj: SimpleQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::query-string", ...args: any[]): void
    connect(sigName: "notify::query-locale", callback: (($obj: SimpleQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::query-locale", callback: (($obj: SimpleQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::query-locale", ...args: any[]): void
    connect(sigName: "notify::match-fields", callback: (($obj: SimpleQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::match-fields", callback: (($obj: SimpleQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::match-fields", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SimpleQuery extends Query {

    // Own properties of Folks-0.6.Folks.SimpleQuery

    static name: string
    static $gtype: GObject.GType<SimpleQuery>

    // Constructors of Folks-0.6.Folks.SimpleQuery

    constructor(config?: SimpleQuery.ConstructorProperties) 
    constructor(query_string: string, match_fields: string[]) 
    static new(query_string: string, match_fields: string[]): SimpleQuery
    _init(config?: SimpleQuery.ConstructorProperties): void
}

export module UrlFieldDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

export interface UrlFieldDetails {

    // Class property signals of Folks-0.6.Folks.UrlFieldDetails

    connect(sigName: "notify::t-type", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-type", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-dup-func", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-destroy-func", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class UrlFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.6.Folks.UrlFieldDetails

    static name: string
    static $gtype: GObject.GType<UrlFieldDetails>

    // Constructors of Folks-0.6.Folks.UrlFieldDetails

    constructor(config?: UrlFieldDetails.ConstructorProperties) 
    constructor(value: string, parameters?: Gee.MultiMap | null) 
    static new(value: string, parameters?: Gee.MultiMap | null): UrlFieldDetails
    _init(config?: UrlFieldDetails.ConstructorProperties): void
}

export module Utils {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Utils {

    // Class property signals of Folks-0.6.Folks.Utils

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Utils extends GObject.Object {

    // Own properties of Folks-0.6.Folks.Utils

    static name: string
    static $gtype: GObject.GType<Utils>

    // Constructors of Folks-0.6.Folks.Utils

    constructor(config?: Utils.ConstructorProperties) 
    constructor() 
    static new(): Utils
    _init(config?: Utils.ConstructorProperties): void
    static multi_map_str_str_equal(a: Gee.MultiMap, b: Gee.MultiMap): boolean
    static multi_map_str_afd_equal(a: Gee.MultiMap, b: Gee.MultiMap): boolean
    static set_afd_equal(a: Gee.Set, b: Gee.Set): boolean
    static set_string_afd_equal(a: Gee.Set, b: Gee.Set): boolean
}

export module WebServiceFieldDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

export interface WebServiceFieldDetails {

    // Class property signals of Folks-0.6.Folks.WebServiceFieldDetails

    connect(sigName: "notify::t-type", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-type", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-dup-func", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-destroy-func", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class WebServiceFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.6.Folks.WebServiceFieldDetails

    static name: string
    static $gtype: GObject.GType<WebServiceFieldDetails>

    // Constructors of Folks-0.6.Folks.WebServiceFieldDetails

    constructor(config?: WebServiceFieldDetails.ConstructorProperties) 
    constructor(value: string, parameters?: Gee.MultiMap | null) 
    static new(value: string, parameters?: Gee.MultiMap | null): WebServiceFieldDetails
    _init(config?: WebServiceFieldDetails.ConstructorProperties): void
}

export interface AbstractFieldDetailsClass {

    // Own fields of Folks-0.6.Folks.AbstractFieldDetailsClass

    equal: (that: AbstractFieldDetails) => boolean
    parameters_equal: (that: AbstractFieldDetails) => boolean
    values_equal: (that: AbstractFieldDetails) => boolean
    hash: () => number
}

export abstract class AbstractFieldDetailsClass {

    // Own properties of Folks-0.6.Folks.AbstractFieldDetailsClass

    static name: string
}

export interface AbstractFieldDetailsPrivate {
}

export class AbstractFieldDetailsPrivate {

    // Own properties of Folks-0.6.Folks.AbstractFieldDetailsPrivate

    static name: string
}

export interface AvatarCacheClass {
}

export abstract class AvatarCacheClass {

    // Own properties of Folks-0.6.Folks.AvatarCacheClass

    static name: string
}

export interface AvatarCachePrivate {
}

export class AvatarCachePrivate {

    // Own properties of Folks-0.6.Folks.AvatarCachePrivate

    static name: string
}

export interface BackendStoreClass {
}

export abstract class BackendStoreClass {

    // Own properties of Folks-0.6.Folks.BackendStoreClass

    static name: string
}

export interface BackendStorePrivate {
}

export class BackendStorePrivate {

    // Own properties of Folks-0.6.Folks.BackendStorePrivate

    static name: string
}

export interface BackendClass {

    // Own fields of Folks-0.6.Folks.BackendClass

    disable_persona_store: (store: PersonaStore) => void
    enable_persona_store: (store: PersonaStore) => void
    set_persona_stores: (storeids?: Gee.Set | null) => void
    prepare: (_callback_?: Gio.AsyncReadyCallback | null) => void
    prepare_finish: (_res_: Gio.AsyncResult) => void
    unprepare: (_callback_?: Gio.AsyncReadyCallback | null) => void
    unprepare_finish: (_res_: Gio.AsyncResult) => void
}

export abstract class BackendClass {

    // Own properties of Folks-0.6.Folks.BackendClass

    static name: string
}

export interface BackendPrivate {
}

export class BackendPrivate {

    // Own properties of Folks-0.6.Folks.BackendPrivate

    static name: string
}

export interface DebugClass {
}

export abstract class DebugClass {

    // Own properties of Folks-0.6.Folks.DebugClass

    static name: string
}

export interface DebugPrivate {
}

export class DebugPrivate {

    // Own properties of Folks-0.6.Folks.DebugPrivate

    static name: string
}

export interface EmailFieldDetailsClass {
}

export abstract class EmailFieldDetailsClass {

    // Own properties of Folks-0.6.Folks.EmailFieldDetailsClass

    static name: string
}

export interface EmailFieldDetailsPrivate {
}

export class EmailFieldDetailsPrivate {

    // Own properties of Folks-0.6.Folks.EmailFieldDetailsPrivate

    static name: string
}

export interface ExtendedFieldDetailsClass {
}

export abstract class ExtendedFieldDetailsClass {

    // Own properties of Folks-0.6.Folks.ExtendedFieldDetailsClass

    static name: string
}

export interface ExtendedFieldDetailsPrivate {
}

export class ExtendedFieldDetailsPrivate {

    // Own properties of Folks-0.6.Folks.ExtendedFieldDetailsPrivate

    static name: string
}

export interface ImFieldDetailsClass {
}

export abstract class ImFieldDetailsClass {

    // Own properties of Folks-0.6.Folks.ImFieldDetailsClass

    static name: string
}

export interface ImFieldDetailsPrivate {
}

export class ImFieldDetailsPrivate {

    // Own properties of Folks-0.6.Folks.ImFieldDetailsPrivate

    static name: string
}

export interface IndividualAggregatorClass {
}

export abstract class IndividualAggregatorClass {

    // Own properties of Folks-0.6.Folks.IndividualAggregatorClass

    static name: string
}

export interface IndividualAggregatorPrivate {
}

export class IndividualAggregatorPrivate {

    // Own properties of Folks-0.6.Folks.IndividualAggregatorPrivate

    static name: string
}

export interface IndividualClass {
}

export abstract class IndividualClass {

    // Own properties of Folks-0.6.Folks.IndividualClass

    static name: string
}

export interface IndividualPrivate {
}

export class IndividualPrivate {

    // Own properties of Folks-0.6.Folks.IndividualPrivate

    static name: string
}

export interface LocationClass {
}

export abstract class LocationClass {

    // Own properties of Folks-0.6.Folks.LocationClass

    static name: string
}

export interface LocationPrivate {
}

export class LocationPrivate {

    // Own properties of Folks-0.6.Folks.LocationPrivate

    static name: string
}

export interface StructuredNameClass {
}

export abstract class StructuredNameClass {

    // Own properties of Folks-0.6.Folks.StructuredNameClass

    static name: string
}

export interface StructuredNamePrivate {
}

export class StructuredNamePrivate {

    // Own properties of Folks-0.6.Folks.StructuredNamePrivate

    static name: string
}

export interface NoteFieldDetailsClass {
}

export abstract class NoteFieldDetailsClass {

    // Own properties of Folks-0.6.Folks.NoteFieldDetailsClass

    static name: string
}

export interface NoteFieldDetailsPrivate {
}

export class NoteFieldDetailsPrivate {

    // Own properties of Folks-0.6.Folks.NoteFieldDetailsPrivate

    static name: string
}

export interface ObjectCacheClass {

    // Own fields of Folks-0.6.Folks.ObjectCacheClass

    get_serialised_object_type: (object_version: number) => GLib.VariantType | null
    get_serialised_object_version: () => number
    serialise_object: (object?: any | null) => GLib.Variant
    deserialise_object: (variant: GLib.Variant, object_version: number) => any | null
}

export abstract class ObjectCacheClass {

    // Own properties of Folks-0.6.Folks.ObjectCacheClass

    static name: string
}

export interface ObjectCachePrivate {
}

export class ObjectCachePrivate {

    // Own properties of Folks-0.6.Folks.ObjectCachePrivate

    static name: string
}

export interface PersonaStoreClass {

    // Own fields of Folks-0.6.Folks.PersonaStoreClass

    prepare: (_callback_?: Gio.AsyncReadyCallback | null) => void
    prepare_finish: (_res_: Gio.AsyncResult) => void
    flush: (_callback_?: Gio.AsyncReadyCallback | null) => void
    flush_finish: (_res_: Gio.AsyncResult) => void
    add_persona_from_details: (details: GLib.HashTable, _callback_?: Gio.AsyncReadyCallback | null) => void
    add_persona_from_details_finish: (_res_: Gio.AsyncResult) => Persona | null
    remove_persona: (persona: Persona, _callback_?: Gio.AsyncReadyCallback | null) => void
    remove_persona_finish: (_res_: Gio.AsyncResult) => void
}

export abstract class PersonaStoreClass {

    // Own properties of Folks-0.6.Folks.PersonaStoreClass

    static name: string
}

export interface PersonaStorePrivate {
}

export class PersonaStorePrivate {

    // Own properties of Folks-0.6.Folks.PersonaStorePrivate

    static name: string
}

export interface PersonaClass {

    // Own fields of Folks-0.6.Folks.PersonaClass

    linkable_property_to_links: (prop_name: string, callback: any) => void
}

export abstract class PersonaClass {

    // Own properties of Folks-0.6.Folks.PersonaClass

    static name: string
}

export interface PersonaPrivate {
}

export class PersonaPrivate {

    // Own properties of Folks-0.6.Folks.PersonaPrivate

    static name: string
}

export interface PhoneFieldDetailsClass {
}

export abstract class PhoneFieldDetailsClass {

    // Own properties of Folks-0.6.Folks.PhoneFieldDetailsClass

    static name: string
}

export interface PhoneFieldDetailsPrivate {
}

export class PhoneFieldDetailsPrivate {

    // Own properties of Folks-0.6.Folks.PhoneFieldDetailsPrivate

    static name: string
}

export interface PostalAddressClass {
}

export abstract class PostalAddressClass {

    // Own properties of Folks-0.6.Folks.PostalAddressClass

    static name: string
}

export interface PostalAddressPrivate {
}

export class PostalAddressPrivate {

    // Own properties of Folks-0.6.Folks.PostalAddressPrivate

    static name: string
}

export interface PostalAddressFieldDetailsClass {
}

export abstract class PostalAddressFieldDetailsClass {

    // Own properties of Folks-0.6.Folks.PostalAddressFieldDetailsClass

    static name: string
}

export interface PostalAddressFieldDetailsPrivate {
}

export class PostalAddressFieldDetailsPrivate {

    // Own properties of Folks-0.6.Folks.PostalAddressFieldDetailsPrivate

    static name: string
}

export interface PotentialMatchClass {
}

export abstract class PotentialMatchClass {

    // Own properties of Folks-0.6.Folks.PotentialMatchClass

    static name: string
}

export interface PotentialMatchPrivate {
}

export class PotentialMatchPrivate {

    // Own properties of Folks-0.6.Folks.PotentialMatchPrivate

    static name: string
}

export interface QueryClass {

    // Own fields of Folks-0.6.Folks.QueryClass

    is_match: (individual: Individual) => number
}

export abstract class QueryClass {

    // Own properties of Folks-0.6.Folks.QueryClass

    static name: string
}

export interface QueryPrivate {
}

export class QueryPrivate {

    // Own properties of Folks-0.6.Folks.QueryPrivate

    static name: string
}

export interface RoleClass {
}

export abstract class RoleClass {

    // Own properties of Folks-0.6.Folks.RoleClass

    static name: string
}

export interface RolePrivate {
}

export class RolePrivate {

    // Own properties of Folks-0.6.Folks.RolePrivate

    static name: string
}

export interface RoleFieldDetailsClass {
}

export abstract class RoleFieldDetailsClass {

    // Own properties of Folks-0.6.Folks.RoleFieldDetailsClass

    static name: string
}

export interface RoleFieldDetailsPrivate {
}

export class RoleFieldDetailsPrivate {

    // Own properties of Folks-0.6.Folks.RoleFieldDetailsPrivate

    static name: string
}

export interface SearchViewClass {
}

export abstract class SearchViewClass {

    // Own properties of Folks-0.6.Folks.SearchViewClass

    static name: string
}

export interface SearchViewPrivate {
}

export class SearchViewPrivate {

    // Own properties of Folks-0.6.Folks.SearchViewPrivate

    static name: string
}

export interface SimpleQueryClass {
}

export abstract class SimpleQueryClass {

    // Own properties of Folks-0.6.Folks.SimpleQueryClass

    static name: string
}

export interface SimpleQueryPrivate {
}

export class SimpleQueryPrivate {

    // Own properties of Folks-0.6.Folks.SimpleQueryPrivate

    static name: string
}

export interface UrlFieldDetailsClass {
}

export abstract class UrlFieldDetailsClass {

    // Own properties of Folks-0.6.Folks.UrlFieldDetailsClass

    static name: string
}

export interface UrlFieldDetailsPrivate {
}

export class UrlFieldDetailsPrivate {

    // Own properties of Folks-0.6.Folks.UrlFieldDetailsPrivate

    static name: string
}

export interface UtilsClass {
}

export abstract class UtilsClass {

    // Own properties of Folks-0.6.Folks.UtilsClass

    static name: string
}

export interface UtilsPrivate {
}

export class UtilsPrivate {

    // Own properties of Folks-0.6.Folks.UtilsPrivate

    static name: string
}

export interface WebServiceFieldDetailsClass {
}

export abstract class WebServiceFieldDetailsClass {

    // Own properties of Folks-0.6.Folks.WebServiceFieldDetailsClass

    static name: string
}

export interface WebServiceFieldDetailsPrivate {
}

export class WebServiceFieldDetailsPrivate {

    // Own properties of Folks-0.6.Folks.WebServiceFieldDetailsPrivate

    static name: string
}

export interface AliasDetailsIface {

    // Own fields of Folks-0.6.Folks.AliasDetailsIface

    change_alias: (alias: string, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_alias_finish: (_res_: Gio.AsyncResult) => void
    get_alias: () => string
    set_alias: (value: string) => void
}

export abstract class AliasDetailsIface {

    // Own properties of Folks-0.6.Folks.AliasDetailsIface

    static name: string
}

export interface AntiLinkableIface {

    // Own fields of Folks-0.6.Folks.AntiLinkableIface

    change_anti_links: (anti_links: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_anti_links_finish: (_res_: Gio.AsyncResult) => void
    get_anti_links: () => Gee.Set
    set_anti_links: (value: Gee.Set) => void
}

export abstract class AntiLinkableIface {

    // Own properties of Folks-0.6.Folks.AntiLinkableIface

    static name: string
}

export interface AvatarDetailsIface {

    // Own fields of Folks-0.6.Folks.AvatarDetailsIface

    change_avatar: (avatar?: Gio.LoadableIcon | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_avatar_finish: (_res_: Gio.AsyncResult) => void
    get_avatar: () => Gio.LoadableIcon | null
    set_avatar: (value?: Gio.LoadableIcon | null) => void
}

export abstract class AvatarDetailsIface {

    // Own properties of Folks-0.6.Folks.AvatarDetailsIface

    static name: string
}

export interface BirthdayDetailsIface {

    // Own fields of Folks-0.6.Folks.BirthdayDetailsIface

    change_birthday: (birthday?: GLib.DateTime | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_birthday_finish: (_res_: Gio.AsyncResult) => void
    change_calendar_event_id: (event_id?: string | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_calendar_event_id_finish: (_res_: Gio.AsyncResult) => void
    get_birthday: () => GLib.DateTime | null
    set_birthday: (value?: GLib.DateTime | null) => void
    get_calendar_event_id: () => string | null
    set_calendar_event_id: (value?: string | null) => void
}

export abstract class BirthdayDetailsIface {

    // Own properties of Folks-0.6.Folks.BirthdayDetailsIface

    static name: string
}

export interface EmailDetailsIface {

    // Own fields of Folks-0.6.Folks.EmailDetailsIface

    change_email_addresses: (email_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_email_addresses_finish: (_res_: Gio.AsyncResult) => void
    get_email_addresses: () => Gee.Set
    set_email_addresses: (value: Gee.Set) => void
}

export abstract class EmailDetailsIface {

    // Own properties of Folks-0.6.Folks.EmailDetailsIface

    static name: string
}

export interface ExtendedInfoIface {

    // Own fields of Folks-0.6.Folks.ExtendedInfoIface

    get_extended_field: (name: string) => ExtendedFieldDetails | null
    change_extended_field: (name: string, value: ExtendedFieldDetails, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_extended_field_finish: (_res_: Gio.AsyncResult) => void
    remove_extended_field: (name: string, _callback_?: Gio.AsyncReadyCallback | null) => void
    remove_extended_field_finish: (_res_: Gio.AsyncResult) => void
}

export abstract class ExtendedInfoIface {

    // Own properties of Folks-0.6.Folks.ExtendedInfoIface

    static name: string
}

export interface FavouriteDetailsIface {

    // Own fields of Folks-0.6.Folks.FavouriteDetailsIface

    change_is_favourite: (is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_is_favourite_finish: (_res_: Gio.AsyncResult) => void
    get_is_favourite: () => boolean
    set_is_favourite: (value: boolean) => void
}

export abstract class FavouriteDetailsIface {

    // Own properties of Folks-0.6.Folks.FavouriteDetailsIface

    static name: string
}

export interface GenderDetailsIface {

    // Own fields of Folks-0.6.Folks.GenderDetailsIface

    change_gender: (gender: Gender, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_gender_finish: (_res_: Gio.AsyncResult) => void
    get_gender: () => Gender
    set_gender: (value: Gender) => void
}

export abstract class GenderDetailsIface {

    // Own properties of Folks-0.6.Folks.GenderDetailsIface

    static name: string
}

export interface GroupDetailsIface {

    // Own fields of Folks-0.6.Folks.GroupDetailsIface

    change_group: (group: string, is_member: boolean, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_group_finish: (_res_: Gio.AsyncResult) => void
    change_groups: (groups: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_groups_finish: (_res_: Gio.AsyncResult) => void
    get_groups: () => Gee.Set
    set_groups: (value: Gee.Set) => void
}

export abstract class GroupDetailsIface {

    // Own properties of Folks-0.6.Folks.GroupDetailsIface

    static name: string
}

export interface ImDetailsIface {

    // Own fields of Folks-0.6.Folks.ImDetailsIface

    change_im_addresses: (im_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_im_addresses_finish: (_res_: Gio.AsyncResult) => void
    get_im_addresses: () => Gee.MultiMap
    set_im_addresses: (value: Gee.MultiMap) => void
}

export abstract class ImDetailsIface {

    // Own properties of Folks-0.6.Folks.ImDetailsIface

    static name: string
}

export interface InteractionDetailsIface {

    // Own fields of Folks-0.6.Folks.InteractionDetailsIface

    get_im_interaction_count: () => number
    get_last_im_interaction_datetime: () => GLib.DateTime | null
    get_call_interaction_count: () => number
    get_last_call_interaction_datetime: () => GLib.DateTime | null
}

export abstract class InteractionDetailsIface {

    // Own properties of Folks-0.6.Folks.InteractionDetailsIface

    static name: string
}

export interface LocalIdDetailsIface {

    // Own fields of Folks-0.6.Folks.LocalIdDetailsIface

    change_local_ids: (local_ids: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_local_ids_finish: (_res_: Gio.AsyncResult) => void
    get_local_ids: () => Gee.Set
    set_local_ids: (value: Gee.Set) => void
}

export abstract class LocalIdDetailsIface {

    // Own properties of Folks-0.6.Folks.LocalIdDetailsIface

    static name: string
}

export interface LocationDetailsIface {

    // Own fields of Folks-0.6.Folks.LocationDetailsIface

    change_location: (location?: Location | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_location_finish: (_res_: Gio.AsyncResult) => void
    get_location: () => Location | null
    set_location: (value?: Location | null) => void
}

export abstract class LocationDetailsIface {

    // Own properties of Folks-0.6.Folks.LocationDetailsIface

    static name: string
}

export interface NameDetailsIface {

    // Own fields of Folks-0.6.Folks.NameDetailsIface

    change_structured_name: (name?: StructuredName | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_structured_name_finish: (_res_: Gio.AsyncResult) => void
    change_full_name: (full_name: string, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_full_name_finish: (_res_: Gio.AsyncResult) => void
    change_nickname: (nickname: string, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_nickname_finish: (_res_: Gio.AsyncResult) => void
    get_structured_name: () => StructuredName | null
    set_structured_name: (value?: StructuredName | null) => void
    get_full_name: () => string
    set_full_name: (value: string) => void
    get_nickname: () => string
    set_nickname: (value: string) => void
}

export abstract class NameDetailsIface {

    // Own properties of Folks-0.6.Folks.NameDetailsIface

    static name: string
}

export interface NoteDetailsIface {

    // Own fields of Folks-0.6.Folks.NoteDetailsIface

    change_notes: (notes: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_notes_finish: (_res_: Gio.AsyncResult) => void
    get_notes: () => Gee.Set
    set_notes: (value: Gee.Set) => void
}

export abstract class NoteDetailsIface {

    // Own properties of Folks-0.6.Folks.NoteDetailsIface

    static name: string
}

export interface PhoneDetailsIface {

    // Own fields of Folks-0.6.Folks.PhoneDetailsIface

    change_phone_numbers: (phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_phone_numbers_finish: (_res_: Gio.AsyncResult) => void
    get_phone_numbers: () => Gee.Set
    set_phone_numbers: (value: Gee.Set) => void
}

export abstract class PhoneDetailsIface {

    // Own properties of Folks-0.6.Folks.PhoneDetailsIface

    static name: string
}

export interface PostalAddressDetailsIface {

    // Own fields of Folks-0.6.Folks.PostalAddressDetailsIface

    change_postal_addresses: (postal_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_postal_addresses_finish: (_res_: Gio.AsyncResult) => void
    get_postal_addresses: () => Gee.Set
    set_postal_addresses: (value: Gee.Set) => void
}

export abstract class PostalAddressDetailsIface {

    // Own properties of Folks-0.6.Folks.PostalAddressDetailsIface

    static name: string
}

export interface PresenceDetailsIface {

    // Own fields of Folks-0.6.Folks.PresenceDetailsIface

    get_presence_type: () => PresenceType
    set_presence_type: (value: PresenceType) => void
    get_presence_message: () => string
    set_presence_message: (value: string) => void
    get_client_types: () => string[]
    set_client_types: (value: string[]) => void
    get_presence_status: () => string
    set_presence_status: (value: string) => void
}

export abstract class PresenceDetailsIface {

    // Own properties of Folks-0.6.Folks.PresenceDetailsIface

    static name: string
}

export interface RoleDetailsIface {

    // Own fields of Folks-0.6.Folks.RoleDetailsIface

    change_roles: (roles: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_roles_finish: (_res_: Gio.AsyncResult) => void
    get_roles: () => Gee.Set
    set_roles: (value: Gee.Set) => void
}

export abstract class RoleDetailsIface {

    // Own properties of Folks-0.6.Folks.RoleDetailsIface

    static name: string
}

export interface UrlDetailsIface {

    // Own fields of Folks-0.6.Folks.UrlDetailsIface

    change_urls: (urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_urls_finish: (_res_: Gio.AsyncResult) => void
    get_urls: () => Gee.Set
    set_urls: (value: Gee.Set) => void
}

export abstract class UrlDetailsIface {

    // Own properties of Folks-0.6.Folks.UrlDetailsIface

    static name: string
}

export interface WebServiceDetailsIface {

    // Own fields of Folks-0.6.Folks.WebServiceDetailsIface

    change_web_service_addresses: (web_service_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_web_service_addresses_finish: (_res_: Gio.AsyncResult) => void
    get_web_service_addresses: () => Gee.MultiMap
    set_web_service_addresses: (value: Gee.MultiMap) => void
}

export abstract class WebServiceDetailsIface {

    // Own properties of Folks-0.6.Folks.WebServiceDetailsIface

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END