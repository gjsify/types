
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './folks-0.7-ambient.d.ts';
import './folks-0.7-import.d.ts';
/**
 * Folks-0.7
 */

import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type Gee from '@girs/gee-0.8';

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

        // Own constructor properties of Folks-0.7.Folks.AliasDetails

        alias?: string | null
    }

}

interface AliasDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.AliasDetails

    alias: string | null

    // Owm methods of Folks-0.7.Folks.AliasDetails

    change_alias(alias: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    change_alias_finish(_res_: Gio.AsyncResult): void
    get_alias(): string | null
    set_alias(value: string | null): void

    // Own virtual methods of Folks-0.7.Folks.AliasDetails

    vfunc_change_alias(alias: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_alias_finish(_res_: Gio.AsyncResult): void
    vfunc_get_alias(): string | null
    vfunc_set_alias(value: string | null): void

    // Class property signals of Folks-0.7.Folks.AliasDetails

    connect(sigName: "notify::alias", callback: (($obj: AliasDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alias", callback: (($obj: AliasDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alias", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AliasDetails {

    // Own properties of Folks-0.7.Folks.AliasDetails

    static name: string
    static $gtype: GObject.GType<AliasDetails>

    // Constructors of Folks-0.7.Folks.AliasDetails

    constructor(config?: AliasDetails.ConstructorProperties) 
    _init(config?: AliasDetails.ConstructorProperties): void
}

module AntiLinkable {

    // Constructor properties interface

    interface ConstructorProperties extends Persona.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.AntiLinkable

        anti_links?: Gee.Set | null
    }

}

interface AntiLinkable extends Persona {

    // Own properties of Folks-0.7.Folks.AntiLinkable

    anti_links: Gee.Set

    // Owm methods of Folks-0.7.Folks.AntiLinkable

    change_anti_links(anti_links: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void
    change_anti_links_finish(_res_: Gio.AsyncResult): void
    has_anti_link_with_persona(other_persona: Persona): boolean
    add_anti_links(other_personas: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void
    add_anti_links_finish(_res_: Gio.AsyncResult): void
    remove_anti_links(other_personas: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void
    remove_anti_links_finish(_res_: Gio.AsyncResult): void
    add_global_anti_link(_callback_: Gio.AsyncReadyCallback<this> | null): void
    add_global_anti_link_finish(_res_: Gio.AsyncResult): void
    remove_global_anti_link(_callback_: Gio.AsyncReadyCallback<this> | null): void
    remove_global_anti_link_finish(_res_: Gio.AsyncResult): void
    has_global_anti_link(): boolean
    get_anti_links(): Gee.Set
    set_anti_links(value: Gee.Set): void

    // Own virtual methods of Folks-0.7.Folks.AntiLinkable

    vfunc_change_anti_links(anti_links: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_anti_links_finish(_res_: Gio.AsyncResult): void
    vfunc_get_anti_links(): Gee.Set
    vfunc_set_anti_links(value: Gee.Set): void

    // Class property signals of Folks-0.7.Folks.AntiLinkable

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

class AntiLinkable extends GObject.Object {

    // Own properties of Folks-0.7.Folks.AntiLinkable

    static name: string
    static $gtype: GObject.GType<AntiLinkable>

    // Constructors of Folks-0.7.Folks.AntiLinkable

    constructor(config?: AntiLinkable.ConstructorProperties) 
    _init(config?: AntiLinkable.ConstructorProperties): void
}

module AvatarDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.AvatarDetails

        avatar?: Gio.LoadableIcon | null
    }

}

interface AvatarDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.AvatarDetails

    avatar: Gio.LoadableIcon

    // Owm methods of Folks-0.7.Folks.AvatarDetails

    change_avatar(avatar: Gio.LoadableIcon | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    change_avatar_finish(_res_: Gio.AsyncResult): void
    get_avatar(): Gio.LoadableIcon | null
    set_avatar(value: Gio.LoadableIcon | null): void

    // Own virtual methods of Folks-0.7.Folks.AvatarDetails

    vfunc_change_avatar(avatar: Gio.LoadableIcon | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_avatar_finish(_res_: Gio.AsyncResult): void
    vfunc_get_avatar(): Gio.LoadableIcon | null
    vfunc_set_avatar(value: Gio.LoadableIcon | null): void

    // Class property signals of Folks-0.7.Folks.AvatarDetails

    connect(sigName: "notify::avatar", callback: (($obj: AvatarDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar", callback: (($obj: AvatarDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::avatar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AvatarDetails {

    // Own properties of Folks-0.7.Folks.AvatarDetails

    static name: string
    static $gtype: GObject.GType<AvatarDetails>

    // Constructors of Folks-0.7.Folks.AvatarDetails

    constructor(config?: AvatarDetails.ConstructorProperties) 
    _init(config?: AvatarDetails.ConstructorProperties): void
}

module BirthdayDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.BirthdayDetails

        birthday?: GLib.DateTime | null
        calendar_event_id?: string | null
    }

}

interface BirthdayDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.BirthdayDetails

    birthday: GLib.DateTime
    calendar_event_id: string | null

    // Owm methods of Folks-0.7.Folks.BirthdayDetails

    change_birthday(birthday: GLib.DateTime | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    change_birthday_finish(_res_: Gio.AsyncResult): void
    change_calendar_event_id(event_id: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    change_calendar_event_id_finish(_res_: Gio.AsyncResult): void
    get_birthday(): GLib.DateTime | null
    set_birthday(value: GLib.DateTime | null): void
    get_calendar_event_id(): string | null
    set_calendar_event_id(value: string | null): void

    // Own virtual methods of Folks-0.7.Folks.BirthdayDetails

    vfunc_change_birthday(birthday: GLib.DateTime | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_birthday_finish(_res_: Gio.AsyncResult): void
    vfunc_change_calendar_event_id(event_id: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_calendar_event_id_finish(_res_: Gio.AsyncResult): void
    vfunc_get_birthday(): GLib.DateTime | null
    vfunc_set_birthday(value: GLib.DateTime | null): void
    vfunc_get_calendar_event_id(): string | null
    vfunc_set_calendar_event_id(value: string | null): void

    // Class property signals of Folks-0.7.Folks.BirthdayDetails

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

class BirthdayDetails {

    // Own properties of Folks-0.7.Folks.BirthdayDetails

    static name: string
    static $gtype: GObject.GType<BirthdayDetails>

    // Constructors of Folks-0.7.Folks.BirthdayDetails

    constructor(config?: BirthdayDetails.ConstructorProperties) 
    _init(config?: BirthdayDetails.ConstructorProperties): void
}

module EmailDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.EmailDetails

        email_addresses?: Gee.Set | null
    }

}

interface EmailDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.EmailDetails

    email_addresses: Gee.Set

    // Owm methods of Folks-0.7.Folks.EmailDetails

    change_email_addresses(email_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void
    change_email_addresses_finish(_res_: Gio.AsyncResult): void
    get_email_addresses(): Gee.Set
    set_email_addresses(value: Gee.Set): void

    // Own virtual methods of Folks-0.7.Folks.EmailDetails

    vfunc_change_email_addresses(email_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_email_addresses_finish(_res_: Gio.AsyncResult): void
    vfunc_get_email_addresses(): Gee.Set
    vfunc_set_email_addresses(value: Gee.Set): void

    // Class property signals of Folks-0.7.Folks.EmailDetails

    connect(sigName: "notify::email-addresses", callback: (($obj: EmailDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-addresses", callback: (($obj: EmailDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::email-addresses", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EmailDetails {

    // Own properties of Folks-0.7.Folks.EmailDetails

    static name: string
    static $gtype: GObject.GType<EmailDetails>

    // Constructors of Folks-0.7.Folks.EmailDetails

    constructor(config?: EmailDetails.ConstructorProperties) 
    _init(config?: EmailDetails.ConstructorProperties): void
}

module ExtendedInfo {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ExtendedInfo extends GObject.Object {

    // Owm methods of Folks-0.7.Folks.ExtendedInfo

    get_extended_field(name: string | null): ExtendedFieldDetails | null
    change_extended_field(name: string | null, value: ExtendedFieldDetails, _callback_: Gio.AsyncReadyCallback<this> | null): void
    change_extended_field_finish(_res_: Gio.AsyncResult): void
    remove_extended_field(name: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    remove_extended_field_finish(_res_: Gio.AsyncResult): void

    // Own virtual methods of Folks-0.7.Folks.ExtendedInfo

    vfunc_get_extended_field(name: string | null): ExtendedFieldDetails | null
    vfunc_change_extended_field(name: string | null, value: ExtendedFieldDetails, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_extended_field_finish(_res_: Gio.AsyncResult): void
    vfunc_remove_extended_field(name: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_remove_extended_field_finish(_res_: Gio.AsyncResult): void

    // Class property signals of Folks-0.7.Folks.ExtendedInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExtendedInfo {

    // Own properties of Folks-0.7.Folks.ExtendedInfo

    static name: string
    static $gtype: GObject.GType<ExtendedInfo>

    // Constructors of Folks-0.7.Folks.ExtendedInfo

    constructor(config?: ExtendedInfo.ConstructorProperties) 
    _init(config?: ExtendedInfo.ConstructorProperties): void
}

module FavouriteDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.FavouriteDetails

        is_favourite?: boolean | null
    }

}

interface FavouriteDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.FavouriteDetails

    is_favourite: boolean

    // Owm methods of Folks-0.7.Folks.FavouriteDetails

    change_is_favourite(is_favourite: boolean, _callback_: Gio.AsyncReadyCallback<this> | null): void
    change_is_favourite_finish(_res_: Gio.AsyncResult): void
    get_is_favourite(): boolean
    set_is_favourite(value: boolean): void

    // Own virtual methods of Folks-0.7.Folks.FavouriteDetails

    vfunc_change_is_favourite(is_favourite: boolean, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_is_favourite_finish(_res_: Gio.AsyncResult): void
    vfunc_get_is_favourite(): boolean
    vfunc_set_is_favourite(value: boolean): void

    // Class property signals of Folks-0.7.Folks.FavouriteDetails

    connect(sigName: "notify::is-favourite", callback: (($obj: FavouriteDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-favourite", callback: (($obj: FavouriteDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-favourite", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FavouriteDetails {

    // Own properties of Folks-0.7.Folks.FavouriteDetails

    static name: string
    static $gtype: GObject.GType<FavouriteDetails>

    // Constructors of Folks-0.7.Folks.FavouriteDetails

    constructor(config?: FavouriteDetails.ConstructorProperties) 
    _init(config?: FavouriteDetails.ConstructorProperties): void
}

module GenderDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.GenderDetails

        gender?: Gender | null
    }

}

interface GenderDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.GenderDetails

    gender: Gender

    // Owm methods of Folks-0.7.Folks.GenderDetails

    change_gender(gender: Gender, _callback_: Gio.AsyncReadyCallback<this> | null): void
    change_gender_finish(_res_: Gio.AsyncResult): void
    get_gender(): Gender
    set_gender(value: Gender): void

    // Own virtual methods of Folks-0.7.Folks.GenderDetails

    vfunc_change_gender(gender: Gender, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_gender_finish(_res_: Gio.AsyncResult): void
    vfunc_get_gender(): Gender
    vfunc_set_gender(value: Gender): void

    // Class property signals of Folks-0.7.Folks.GenderDetails

    connect(sigName: "notify::gender", callback: (($obj: GenderDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gender", callback: (($obj: GenderDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gender", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GenderDetails {

    // Own properties of Folks-0.7.Folks.GenderDetails

    static name: string
    static $gtype: GObject.GType<GenderDetails>

    // Constructors of Folks-0.7.Folks.GenderDetails

    constructor(config?: GenderDetails.ConstructorProperties) 
    _init(config?: GenderDetails.ConstructorProperties): void
}

module GroupDetails {

    // Signal callback interfaces

    /**
     * Signal callback interface for `group-changed`
     */
    interface GroupChangedSignalCallback {
        ($obj: GroupDetails, group: string | null, is_member: boolean): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.GroupDetails

        groups?: Gee.Set | null
    }

}

interface GroupDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.GroupDetails

    groups: Gee.Set

    // Owm methods of Folks-0.7.Folks.GroupDetails

    change_group(group: string | null, is_member: boolean, _callback_: Gio.AsyncReadyCallback<this> | null): void
    change_group_finish(_res_: Gio.AsyncResult): void
    change_groups(groups: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void
    change_groups_finish(_res_: Gio.AsyncResult): void
    get_groups(): Gee.Set
    set_groups(value: Gee.Set): void

    // Own virtual methods of Folks-0.7.Folks.GroupDetails

    vfunc_change_group(group: string | null, is_member: boolean, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_group_finish(_res_: Gio.AsyncResult): void
    vfunc_change_groups(groups: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_groups_finish(_res_: Gio.AsyncResult): void
    vfunc_get_groups(): Gee.Set
    vfunc_set_groups(value: Gee.Set): void

    // Own signals of Folks-0.7.Folks.GroupDetails

    connect(sigName: "group-changed", callback: GroupDetails.GroupChangedSignalCallback): number
    connect_after(sigName: "group-changed", callback: GroupDetails.GroupChangedSignalCallback): number
    emit(sigName: "group-changed", group: string | null, is_member: boolean, ...args: any[]): void

    // Class property signals of Folks-0.7.Folks.GroupDetails

    connect(sigName: "notify::groups", callback: (($obj: GroupDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::groups", callback: (($obj: GroupDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::groups", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GroupDetails {

    // Own properties of Folks-0.7.Folks.GroupDetails

    static name: string
    static $gtype: GObject.GType<GroupDetails>

    // Constructors of Folks-0.7.Folks.GroupDetails

    constructor(config?: GroupDetails.ConstructorProperties) 
    _init(config?: GroupDetails.ConstructorProperties): void
}

module ImDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.ImDetails

        im_addresses?: Gee.MultiMap | null
    }

}

interface ImDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.ImDetails

    im_addresses: Gee.MultiMap

    // Owm methods of Folks-0.7.Folks.ImDetails

    change_im_addresses(im_addresses: Gee.MultiMap, _callback_: Gio.AsyncReadyCallback<this> | null): void
    change_im_addresses_finish(_res_: Gio.AsyncResult): void
    get_im_addresses(): Gee.MultiMap
    set_im_addresses(value: Gee.MultiMap): void

    // Own virtual methods of Folks-0.7.Folks.ImDetails

    vfunc_change_im_addresses(im_addresses: Gee.MultiMap, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_im_addresses_finish(_res_: Gio.AsyncResult): void
    vfunc_get_im_addresses(): Gee.MultiMap
    vfunc_set_im_addresses(value: Gee.MultiMap): void

    // Class property signals of Folks-0.7.Folks.ImDetails

    connect(sigName: "notify::im-addresses", callback: (($obj: ImDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-addresses", callback: (($obj: ImDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-addresses", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ImDetails {

    // Own properties of Folks-0.7.Folks.ImDetails

    static name: string
    static $gtype: GObject.GType<ImDetails>

    // Constructors of Folks-0.7.Folks.ImDetails

    constructor(config?: ImDetails.ConstructorProperties) 
    _init(config?: ImDetails.ConstructorProperties): void
    static normalise_im_address(im_address: string | null, protocol: string | null): string | null
}

module InteractionDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface InteractionDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.InteractionDetails

    readonly im_interaction_count: number
    readonly last_im_interaction_datetime: GLib.DateTime
    readonly call_interaction_count: number
    readonly last_call_interaction_datetime: GLib.DateTime

    // Owm methods of Folks-0.7.Folks.InteractionDetails

    get_im_interaction_count(): number
    get_last_im_interaction_datetime(): GLib.DateTime | null
    get_call_interaction_count(): number
    get_last_call_interaction_datetime(): GLib.DateTime | null

    // Own virtual methods of Folks-0.7.Folks.InteractionDetails

    vfunc_get_im_interaction_count(): number
    vfunc_get_last_im_interaction_datetime(): GLib.DateTime | null
    vfunc_get_call_interaction_count(): number
    vfunc_get_last_call_interaction_datetime(): GLib.DateTime | null

    // Class property signals of Folks-0.7.Folks.InteractionDetails

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

class InteractionDetails {

    // Own properties of Folks-0.7.Folks.InteractionDetails

    static name: string
    static $gtype: GObject.GType<InteractionDetails>

    // Constructors of Folks-0.7.Folks.InteractionDetails

    constructor(config?: InteractionDetails.ConstructorProperties) 
    _init(config?: InteractionDetails.ConstructorProperties): void
}

module LocalIdDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.LocalIdDetails

        local_ids?: Gee.Set | null
    }

}

interface LocalIdDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.LocalIdDetails

    local_ids: Gee.Set

    // Owm methods of Folks-0.7.Folks.LocalIdDetails

    change_local_ids(local_ids: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void
    change_local_ids_finish(_res_: Gio.AsyncResult): void
    get_local_ids(): Gee.Set
    set_local_ids(value: Gee.Set): void

    // Own virtual methods of Folks-0.7.Folks.LocalIdDetails

    vfunc_change_local_ids(local_ids: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_local_ids_finish(_res_: Gio.AsyncResult): void
    vfunc_get_local_ids(): Gee.Set
    vfunc_set_local_ids(value: Gee.Set): void

    // Class property signals of Folks-0.7.Folks.LocalIdDetails

    connect(sigName: "notify::local-ids", callback: (($obj: LocalIdDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-ids", callback: (($obj: LocalIdDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-ids", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LocalIdDetails {

    // Own properties of Folks-0.7.Folks.LocalIdDetails

    static name: string
    static $gtype: GObject.GType<LocalIdDetails>

    // Constructors of Folks-0.7.Folks.LocalIdDetails

    constructor(config?: LocalIdDetails.ConstructorProperties) 
    _init(config?: LocalIdDetails.ConstructorProperties): void
}

module LocationDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.LocationDetails

        location?: Location | null
    }

}

interface LocationDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.LocationDetails

    location: Location

    // Owm methods of Folks-0.7.Folks.LocationDetails

    change_location(location: Location | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    change_location_finish(_res_: Gio.AsyncResult): void
    get_location(): Location | null
    set_location(value: Location | null): void

    // Own virtual methods of Folks-0.7.Folks.LocationDetails

    vfunc_change_location(location: Location | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_location_finish(_res_: Gio.AsyncResult): void
    vfunc_get_location(): Location | null
    vfunc_set_location(value: Location | null): void

    // Class property signals of Folks-0.7.Folks.LocationDetails

    connect(sigName: "notify::location", callback: (($obj: LocationDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: LocationDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LocationDetails {

    // Own properties of Folks-0.7.Folks.LocationDetails

    static name: string
    static $gtype: GObject.GType<LocationDetails>

    // Constructors of Folks-0.7.Folks.LocationDetails

    constructor(config?: LocationDetails.ConstructorProperties) 
    _init(config?: LocationDetails.ConstructorProperties): void
}

module NameDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.NameDetails

        structured_name?: StructuredName | null
        full_name?: string | null
        nickname?: string | null
    }

}

interface NameDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.NameDetails

    structured_name: StructuredName
    full_name: string | null
    nickname: string | null

    // Owm methods of Folks-0.7.Folks.NameDetails

    change_structured_name(name: StructuredName | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    change_structured_name_finish(_res_: Gio.AsyncResult): void
    change_full_name(full_name: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    change_full_name_finish(_res_: Gio.AsyncResult): void
    change_nickname(nickname: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    change_nickname_finish(_res_: Gio.AsyncResult): void
    get_structured_name(): StructuredName | null
    set_structured_name(value: StructuredName | null): void
    get_full_name(): string | null
    set_full_name(value: string | null): void
    get_nickname(): string | null
    set_nickname(value: string | null): void

    // Own virtual methods of Folks-0.7.Folks.NameDetails

    vfunc_change_structured_name(name: StructuredName | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_structured_name_finish(_res_: Gio.AsyncResult): void
    vfunc_change_full_name(full_name: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_full_name_finish(_res_: Gio.AsyncResult): void
    vfunc_change_nickname(nickname: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_nickname_finish(_res_: Gio.AsyncResult): void
    vfunc_get_structured_name(): StructuredName | null
    vfunc_set_structured_name(value: StructuredName | null): void
    vfunc_get_full_name(): string | null
    vfunc_set_full_name(value: string | null): void
    vfunc_get_nickname(): string | null
    vfunc_set_nickname(value: string | null): void

    // Class property signals of Folks-0.7.Folks.NameDetails

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

class NameDetails {

    // Own properties of Folks-0.7.Folks.NameDetails

    static name: string
    static $gtype: GObject.GType<NameDetails>

    // Constructors of Folks-0.7.Folks.NameDetails

    constructor(config?: NameDetails.ConstructorProperties) 
    _init(config?: NameDetails.ConstructorProperties): void
}

module NoteDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.NoteDetails

        notes?: Gee.Set | null
    }

}

interface NoteDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.NoteDetails

    notes: Gee.Set

    // Owm methods of Folks-0.7.Folks.NoteDetails

    change_notes(notes: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void
    change_notes_finish(_res_: Gio.AsyncResult): void
    get_notes(): Gee.Set
    set_notes(value: Gee.Set): void

    // Own virtual methods of Folks-0.7.Folks.NoteDetails

    vfunc_change_notes(notes: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_notes_finish(_res_: Gio.AsyncResult): void
    vfunc_get_notes(): Gee.Set
    vfunc_set_notes(value: Gee.Set): void

    // Class property signals of Folks-0.7.Folks.NoteDetails

    connect(sigName: "notify::notes", callback: (($obj: NoteDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notes", callback: (($obj: NoteDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::notes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NoteDetails {

    // Own properties of Folks-0.7.Folks.NoteDetails

    static name: string
    static $gtype: GObject.GType<NoteDetails>

    // Constructors of Folks-0.7.Folks.NoteDetails

    constructor(config?: NoteDetails.ConstructorProperties) 
    _init(config?: NoteDetails.ConstructorProperties): void
}

module PhoneDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.PhoneDetails

        phone_numbers?: Gee.Set | null
    }

}

interface PhoneDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.PhoneDetails

    phone_numbers: Gee.Set

    // Owm methods of Folks-0.7.Folks.PhoneDetails

    change_phone_numbers(phone_numbers: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void
    change_phone_numbers_finish(_res_: Gio.AsyncResult): void
    get_phone_numbers(): Gee.Set
    set_phone_numbers(value: Gee.Set): void

    // Own virtual methods of Folks-0.7.Folks.PhoneDetails

    vfunc_change_phone_numbers(phone_numbers: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_phone_numbers_finish(_res_: Gio.AsyncResult): void
    vfunc_get_phone_numbers(): Gee.Set
    vfunc_set_phone_numbers(value: Gee.Set): void

    // Class property signals of Folks-0.7.Folks.PhoneDetails

    connect(sigName: "notify::phone-numbers", callback: (($obj: PhoneDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phone-numbers", callback: (($obj: PhoneDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::phone-numbers", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PhoneDetails {

    // Own properties of Folks-0.7.Folks.PhoneDetails

    static name: string
    static $gtype: GObject.GType<PhoneDetails>

    // Constructors of Folks-0.7.Folks.PhoneDetails

    constructor(config?: PhoneDetails.ConstructorProperties) 
    _init(config?: PhoneDetails.ConstructorProperties): void
}

module PostalAddressDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.PostalAddressDetails

        postal_addresses?: Gee.Set | null
    }

}

interface PostalAddressDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.PostalAddressDetails

    postal_addresses: Gee.Set

    // Owm methods of Folks-0.7.Folks.PostalAddressDetails

    change_postal_addresses(postal_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void
    change_postal_addresses_finish(_res_: Gio.AsyncResult): void
    get_postal_addresses(): Gee.Set
    set_postal_addresses(value: Gee.Set): void

    // Own virtual methods of Folks-0.7.Folks.PostalAddressDetails

    vfunc_change_postal_addresses(postal_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_postal_addresses_finish(_res_: Gio.AsyncResult): void
    vfunc_get_postal_addresses(): Gee.Set
    vfunc_set_postal_addresses(value: Gee.Set): void

    // Class property signals of Folks-0.7.Folks.PostalAddressDetails

    connect(sigName: "notify::postal-addresses", callback: (($obj: PostalAddressDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::postal-addresses", callback: (($obj: PostalAddressDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::postal-addresses", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PostalAddressDetails {

    // Own properties of Folks-0.7.Folks.PostalAddressDetails

    static name: string
    static $gtype: GObject.GType<PostalAddressDetails>

    // Constructors of Folks-0.7.Folks.PostalAddressDetails

    constructor(config?: PostalAddressDetails.ConstructorProperties) 
    _init(config?: PostalAddressDetails.ConstructorProperties): void
}

module PresenceDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.PresenceDetails

        presence_type?: PresenceType | null
        presence_message?: string | null
        client_types?: string[] | null
        presence_status?: string | null
    }

}

interface PresenceDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.PresenceDetails

    presence_type: PresenceType
    presence_message: string | null
    client_types: string[]
    presence_status: string | null

    // Owm methods of Folks-0.7.Folks.PresenceDetails

    is_online(): boolean
    get_presence_type(): PresenceType
    set_presence_type(value: PresenceType): void
    get_presence_message(): string | null
    set_presence_message(value: string | null): void
    get_client_types(): string[]
    set_client_types(value: string[]): void
    get_presence_status(): string | null
    set_presence_status(value: string | null): void

    // Own virtual methods of Folks-0.7.Folks.PresenceDetails

    vfunc_get_presence_type(): PresenceType
    vfunc_set_presence_type(value: PresenceType): void
    vfunc_get_presence_message(): string | null
    vfunc_set_presence_message(value: string | null): void
    vfunc_get_client_types(): string[]
    vfunc_set_client_types(value: string[]): void
    vfunc_get_presence_status(): string | null
    vfunc_set_presence_status(value: string | null): void

    // Class property signals of Folks-0.7.Folks.PresenceDetails

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

class PresenceDetails {

    // Own properties of Folks-0.7.Folks.PresenceDetails

    static name: string
    static $gtype: GObject.GType<PresenceDetails>

    // Constructors of Folks-0.7.Folks.PresenceDetails

    constructor(config?: PresenceDetails.ConstructorProperties) 
    _init(config?: PresenceDetails.ConstructorProperties): void
    static get_default_message_from_type(type: PresenceType): string | null
    static typecmp(type_a: PresenceType, type_b: PresenceType): number
}

module RoleDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.RoleDetails

        roles?: Gee.Set | null
    }

}

interface RoleDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.RoleDetails

    roles: Gee.Set

    // Owm methods of Folks-0.7.Folks.RoleDetails

    change_roles(roles: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void
    change_roles_finish(_res_: Gio.AsyncResult): void
    get_roles(): Gee.Set
    set_roles(value: Gee.Set): void

    // Own virtual methods of Folks-0.7.Folks.RoleDetails

    vfunc_change_roles(roles: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_roles_finish(_res_: Gio.AsyncResult): void
    vfunc_get_roles(): Gee.Set
    vfunc_set_roles(value: Gee.Set): void

    // Class property signals of Folks-0.7.Folks.RoleDetails

    connect(sigName: "notify::roles", callback: (($obj: RoleDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::roles", callback: (($obj: RoleDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::roles", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RoleDetails {

    // Own properties of Folks-0.7.Folks.RoleDetails

    static name: string
    static $gtype: GObject.GType<RoleDetails>

    // Constructors of Folks-0.7.Folks.RoleDetails

    constructor(config?: RoleDetails.ConstructorProperties) 
    _init(config?: RoleDetails.ConstructorProperties): void
}

module UrlDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.UrlDetails

        urls?: Gee.Set | null
    }

}

interface UrlDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.UrlDetails

    urls: Gee.Set

    // Owm methods of Folks-0.7.Folks.UrlDetails

    change_urls(urls: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void
    change_urls_finish(_res_: Gio.AsyncResult): void
    get_urls(): Gee.Set
    set_urls(value: Gee.Set): void

    // Own virtual methods of Folks-0.7.Folks.UrlDetails

    vfunc_change_urls(urls: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_urls_finish(_res_: Gio.AsyncResult): void
    vfunc_get_urls(): Gee.Set
    vfunc_set_urls(value: Gee.Set): void

    // Class property signals of Folks-0.7.Folks.UrlDetails

    connect(sigName: "notify::urls", callback: (($obj: UrlDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urls", callback: (($obj: UrlDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urls", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UrlDetails {

    // Own properties of Folks-0.7.Folks.UrlDetails

    static name: string
    static $gtype: GObject.GType<UrlDetails>

    // Constructors of Folks-0.7.Folks.UrlDetails

    constructor(config?: UrlDetails.ConstructorProperties) 
    _init(config?: UrlDetails.ConstructorProperties): void
}

module WebServiceDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.WebServiceDetails

        web_service_addresses?: Gee.MultiMap | null
    }

}

interface WebServiceDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.WebServiceDetails

    web_service_addresses: Gee.MultiMap

    // Owm methods of Folks-0.7.Folks.WebServiceDetails

    change_web_service_addresses(web_service_addresses: Gee.MultiMap, _callback_: Gio.AsyncReadyCallback<this> | null): void
    change_web_service_addresses_finish(_res_: Gio.AsyncResult): void
    get_web_service_addresses(): Gee.MultiMap
    set_web_service_addresses(value: Gee.MultiMap): void

    // Own virtual methods of Folks-0.7.Folks.WebServiceDetails

    vfunc_change_web_service_addresses(web_service_addresses: Gee.MultiMap, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_change_web_service_addresses_finish(_res_: Gio.AsyncResult): void
    vfunc_get_web_service_addresses(): Gee.MultiMap
    vfunc_set_web_service_addresses(value: Gee.MultiMap): void

    // Class property signals of Folks-0.7.Folks.WebServiceDetails

    connect(sigName: "notify::web-service-addresses", callback: (($obj: WebServiceDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::web-service-addresses", callback: (($obj: WebServiceDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::web-service-addresses", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WebServiceDetails {

    // Own properties of Folks-0.7.Folks.WebServiceDetails

    static name: string
    static $gtype: GObject.GType<WebServiceDetails>

    // Constructors of Folks-0.7.Folks.WebServiceDetails

    constructor(config?: WebServiceDetails.ConstructorProperties) 
    _init(config?: WebServiceDetails.ConstructorProperties): void
}

module AbstractFieldDetails {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.AbstractFieldDetails

        t_type?: GObject.GType | null
        t_dup_func?: GObject.BoxedCopyFunc | null
        t_destroy_func?: GLib.DestroyNotify | null
        value?: any | null
        id?: string | null
        parameters?: Gee.MultiMap | null
    }

}

interface AbstractFieldDetails {

    // Own properties of Folks-0.7.Folks.AbstractFieldDetails

    readonly t_type: GObject.GType
    readonly t_dup_func: GObject.BoxedCopyFunc
    readonly t_destroy_func: GLib.DestroyNotify
    value: any
    readonly value_type: GObject.GType
    id: string | null
    parameters: Gee.MultiMap

    // Owm methods of Folks-0.7.Folks.AbstractFieldDetails

    get_parameter_values(parameter_name: string | null): Gee.Collection | null
    add_parameter(parameter_name: string | null, parameter_value: string | null): void
    set_parameter(parameter_name: string | null, parameter_value: string | null): void
    extend_parameters(additional: Gee.MultiMap): void
    remove_parameter_all(parameter_name: string | null): void
    equal(that: AbstractFieldDetails): boolean
    parameters_equal(that: AbstractFieldDetails): boolean
    values_equal(that: AbstractFieldDetails): boolean
    hash(): number
    get_value(): any | null
    set_value(value: any | null): void
    get_value_type(): GObject.GType
    get_id(): string | null
    set_id(value: string | null): void
    get_parameters(): Gee.MultiMap
    set_parameters(value: Gee.MultiMap): void

    // Own virtual methods of Folks-0.7.Folks.AbstractFieldDetails

    vfunc_equal(that: AbstractFieldDetails): boolean
    vfunc_parameters_equal(that: AbstractFieldDetails): boolean
    vfunc_values_equal(that: AbstractFieldDetails): boolean
    vfunc_hash(): number
    vfunc_get_value(): any | null
    vfunc_set_value(value: any | null): void
    vfunc_get_id(): string | null
    vfunc_set_id(value: string | null): void
    vfunc_get_parameters(): Gee.MultiMap
    vfunc_set_parameters(value: Gee.MultiMap): void

    // Class property signals of Folks-0.7.Folks.AbstractFieldDetails

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

class AbstractFieldDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.AbstractFieldDetails

    static name: string
    static $gtype: GObject.GType<AbstractFieldDetails>

    // Constructors of Folks-0.7.Folks.AbstractFieldDetails

    constructor(config?: AbstractFieldDetails.ConstructorProperties) 
    _init(config?: AbstractFieldDetails.ConstructorProperties): void
    static equal_static(left: AbstractFieldDetails, right: AbstractFieldDetails): boolean
    static hash_static(value: AbstractFieldDetails): number
}

module AvatarCache {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface AvatarCache {

    // Owm methods of Folks-0.7.Folks.AvatarCache

    load_avatar(id: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    load_avatar_finish(_res_: Gio.AsyncResult): Gio.LoadableIcon | null
    store_avatar(id: string | null, avatar: Gio.LoadableIcon, _callback_: Gio.AsyncReadyCallback<this> | null): void
    store_avatar_finish(_res_: Gio.AsyncResult): string | null
    remove_avatar(id: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    remove_avatar_finish(_res_: Gio.AsyncResult): void
    build_uri_for_avatar(id: string | null): string | null

    // Class property signals of Folks-0.7.Folks.AvatarCache

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AvatarCache extends GObject.Object {

    // Own properties of Folks-0.7.Folks.AvatarCache

    static name: string
    static $gtype: GObject.GType<AvatarCache>

    // Constructors of Folks-0.7.Folks.AvatarCache

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
        ($obj: BackendStore, backend: Backend): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.BackendStore

        enabled_backends?: Gee.Map | null
        is_prepared?: boolean | null
    }

}

interface BackendStore {

    // Own properties of Folks-0.7.Folks.BackendStore

    enabled_backends: Gee.Map
    is_prepared: boolean

    // Own fields of Folks-0.7.Folks.BackendStore

    folks_backend_store_KEY_FILE_GROUP_ALL_OTHERS: string | null

    // Owm methods of Folks-0.7.Folks.BackendStore

    prepare(_callback_: Gio.AsyncReadyCallback<this> | null): void
    prepare_finish(_res_: Gio.AsyncResult): void
    load_backends(_callback_: Gio.AsyncReadyCallback<this> | null): void
    load_backends_finish(_res_: Gio.AsyncResult): void
    add_backend(backend: Backend): void
    dup_backend_by_name(name: string | null): Backend | null
    list_backends(): Gee.Collection
    enable_backend(name: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    enable_backend_finish(_res_: Gio.AsyncResult): void
    disable_backend(name: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    disable_backend_finish(_res_: Gio.AsyncResult): void
    get_enabled_backends(): Gee.Map
    get_is_prepared(): boolean

    // Own signals of Folks-0.7.Folks.BackendStore

    connect(sigName: "backend-available", callback: BackendStore.BackendAvailableSignalCallback): number
    connect_after(sigName: "backend-available", callback: BackendStore.BackendAvailableSignalCallback): number
    emit(sigName: "backend-available", backend: Backend, ...args: any[]): void

    // Class property signals of Folks-0.7.Folks.BackendStore

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

class BackendStore extends GObject.Object {

    // Own properties of Folks-0.7.Folks.BackendStore

    static name: string
    static $gtype: GObject.GType<BackendStore>

    // Constructors of Folks-0.7.Folks.BackendStore

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
        ($obj: Backend, store: PersonaStore): void
    }

    /**
     * Signal callback interface for `persona-store-removed`
     */
    interface PersonaStoreRemovedSignalCallback {
        ($obj: Backend, store: PersonaStore): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Backend {

    // Own properties of Folks-0.7.Folks.Backend

    readonly is_prepared: boolean
    readonly is_quiescent: boolean
    readonly name: string | null
    readonly persona_stores: Gee.Map

    // Owm methods of Folks-0.7.Folks.Backend

    disable_persona_store(store: PersonaStore): void
    enable_persona_store(store: PersonaStore): void
    set_persona_stores(storeids: Gee.Set | null): void
    prepare(_callback_: Gio.AsyncReadyCallback<this> | null): void
    prepare_finish(_res_: Gio.AsyncResult): void
    unprepare(_callback_: Gio.AsyncReadyCallback<this> | null): void
    unprepare_finish(_res_: Gio.AsyncResult): void
    get_is_prepared(): boolean
    get_is_quiescent(): boolean
    get_name(): string | null
    get_persona_stores(): Gee.Map

    // Own virtual methods of Folks-0.7.Folks.Backend

    vfunc_disable_persona_store(store: PersonaStore): void
    vfunc_enable_persona_store(store: PersonaStore): void
    vfunc_set_persona_stores(storeids: Gee.Set | null): void
    vfunc_prepare(_callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_prepare_finish(_res_: Gio.AsyncResult): void
    vfunc_unprepare(_callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_unprepare_finish(_res_: Gio.AsyncResult): void
    vfunc_get_is_prepared(): boolean
    vfunc_get_is_quiescent(): boolean
    vfunc_get_name(): string | null
    vfunc_get_persona_stores(): Gee.Map

    // Own signals of Folks-0.7.Folks.Backend

    connect(sigName: "persona-store-added", callback: Backend.PersonaStoreAddedSignalCallback): number
    connect_after(sigName: "persona-store-added", callback: Backend.PersonaStoreAddedSignalCallback): number
    emit(sigName: "persona-store-added", store: PersonaStore, ...args: any[]): void
    connect(sigName: "persona-store-removed", callback: Backend.PersonaStoreRemovedSignalCallback): number
    connect_after(sigName: "persona-store-removed", callback: Backend.PersonaStoreRemovedSignalCallback): number
    emit(sigName: "persona-store-removed", store: PersonaStore, ...args: any[]): void

    // Class property signals of Folks-0.7.Folks.Backend

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

class Backend extends GObject.Object {

    // Own properties of Folks-0.7.Folks.Backend

    static name: string
    static $gtype: GObject.GType<Backend>

    // Constructors of Folks-0.7.Folks.Backend

    constructor(config?: Backend.ConstructorProperties) 
    _init(config?: Backend.ConstructorProperties): void
}

module Debug {

    // Signal callback interfaces

    /**
     * Signal callback interface for `print-status`
     */
    interface PrintStatusSignalCallback {
        ($obj: Debug): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.Debug

        colour_enabled?: boolean | null
        debug_output_enabled?: boolean | null
    }

}

interface Debug {

    // Own properties of Folks-0.7.Folks.Debug

    colour_enabled: boolean
    debug_output_enabled: boolean

    // Owm methods of Folks-0.7.Folks.Debug

    emit_print_status(): void
    indent(): void
    unindent(): void
    get_colour_enabled(): boolean
    set_colour_enabled(value: boolean): void
    get_debug_output_enabled(): boolean
    set_debug_output_enabled(value: boolean): void

    // Own signals of Folks-0.7.Folks.Debug

    connect(sigName: "print-status", callback: Debug.PrintStatusSignalCallback): number
    connect_after(sigName: "print-status", callback: Debug.PrintStatusSignalCallback): number
    emit(sigName: "print-status", ...args: any[]): void

    // Class property signals of Folks-0.7.Folks.Debug

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

class Debug extends GObject.Object {

    // Own properties of Folks-0.7.Folks.Debug

    static name: string
    static $gtype: GObject.GType<Debug>

    // Constructors of Folks-0.7.Folks.Debug

    constructor(config?: Debug.ConstructorProperties) 
    _init(config?: Debug.ConstructorProperties): void
    static dup(): Debug
    static dup_with_flags(debug_flags: string | null, colour_enabled: boolean): Debug
}

module EmailFieldDetails {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

interface EmailFieldDetails {

    // Class property signals of Folks-0.7.Folks.EmailFieldDetails

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

class EmailFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.7.Folks.EmailFieldDetails

    static name: string
    static $gtype: GObject.GType<EmailFieldDetails>

    // Constructors of Folks-0.7.Folks.EmailFieldDetails

    constructor(config?: EmailFieldDetails.ConstructorProperties) 
    constructor(value: string | null, parameters: Gee.MultiMap | null) 
    static new(value: string | null, parameters: Gee.MultiMap | null): EmailFieldDetails
    _init(config?: EmailFieldDetails.ConstructorProperties): void
}

module ExtendedFieldDetails {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

interface ExtendedFieldDetails {

    // Class property signals of Folks-0.7.Folks.ExtendedFieldDetails

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

class ExtendedFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.7.Folks.ExtendedFieldDetails

    static name: string
    static $gtype: GObject.GType<ExtendedFieldDetails>

    // Constructors of Folks-0.7.Folks.ExtendedFieldDetails

    constructor(config?: ExtendedFieldDetails.ConstructorProperties) 
    constructor(value: string | null, parameters: Gee.MultiMap | null) 
    static new(value: string | null, parameters: Gee.MultiMap | null): ExtendedFieldDetails
    _init(config?: ExtendedFieldDetails.ConstructorProperties): void
}

module ImFieldDetails {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

interface ImFieldDetails {

    // Class property signals of Folks-0.7.Folks.ImFieldDetails

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

class ImFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.7.Folks.ImFieldDetails

    static name: string
    static $gtype: GObject.GType<ImFieldDetails>

    // Constructors of Folks-0.7.Folks.ImFieldDetails

    constructor(config?: ImFieldDetails.ConstructorProperties) 
    constructor(value: string | null, parameters: Gee.MultiMap | null) 
    static new(value: string | null, parameters: Gee.MultiMap | null): ImFieldDetails
    _init(config?: ImFieldDetails.ConstructorProperties): void
}

module IndividualAggregator {

    // Signal callback interfaces

    /**
     * Signal callback interface for `individuals-changed`
     */
    interface IndividualsChangedSignalCallback {
        ($obj: IndividualAggregator, added: Gee.Set, removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason): void
    }

    /**
     * Signal callback interface for `individuals-changed-detailed`
     */
    interface IndividualsChangedDetailedSignalCallback {
        ($obj: IndividualAggregator, changes: Gee.MultiMap): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.IndividualAggregator

        backend_store?: BackendStore | null
        individuals?: Gee.Map | null
        user?: Individual | null
    }

}

interface IndividualAggregator {

    // Own properties of Folks-0.7.Folks.IndividualAggregator

    readonly is_prepared: boolean
    readonly is_quiescent: boolean
    readonly primary_store: PersonaStore
    readonly backend_store: BackendStore
    individuals: Gee.Map
    user: Individual

    // Owm methods of Folks-0.7.Folks.IndividualAggregator

    prepare(_callback_: Gio.AsyncReadyCallback<this> | null): void
    prepare_finish(_res_: Gio.AsyncResult): void
    unprepare(_callback_: Gio.AsyncReadyCallback<this> | null): void
    unprepare_finish(_res_: Gio.AsyncResult): void
    get_potential_matches(matchee: Individual, min_threshold: MatchResult): Gee.Map
    get_all_potential_matches(min_threshold: MatchResult): Gee.Map
    add_persona_from_details(parent: Individual | null, persona_store: PersonaStore, details: GLib.HashTable, _callback_: Gio.AsyncReadyCallback<this> | null): void
    add_persona_from_details_finish(_res_: Gio.AsyncResult): Persona | null
    remove_individual(individual: Individual, _callback_: Gio.AsyncReadyCallback<this> | null): void
    remove_individual_finish(_res_: Gio.AsyncResult): void
    remove_persona(persona: Persona, _callback_: Gio.AsyncReadyCallback<this> | null): void
    remove_persona_finish(_res_: Gio.AsyncResult): void
    link_personas(personas: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void
    link_personas_finish(_res_: Gio.AsyncResult): void
    unlink_individual(individual: Individual, _callback_: Gio.AsyncReadyCallback<this> | null): void
    unlink_individual_finish(_res_: Gio.AsyncResult): void
    ensure_individual_property_writeable(individual: Individual, property_name: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    ensure_individual_property_writeable_finish(_res_: Gio.AsyncResult): Persona
    look_up_individual(id: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    look_up_individual_finish(_res_: Gio.AsyncResult): Individual | null
    get_is_prepared(): boolean
    get_is_quiescent(): boolean
    get_primary_store(): PersonaStore | null
    get_backend_store(): BackendStore
    get_individuals(): Gee.Map
    get_user(): Individual | null

    // Own signals of Folks-0.7.Folks.IndividualAggregator

    connect(sigName: "individuals-changed", callback: IndividualAggregator.IndividualsChangedSignalCallback): number
    connect_after(sigName: "individuals-changed", callback: IndividualAggregator.IndividualsChangedSignalCallback): number
    emit(sigName: "individuals-changed", added: Gee.Set, removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason, ...args: any[]): void
    connect(sigName: "individuals-changed-detailed", callback: IndividualAggregator.IndividualsChangedDetailedSignalCallback): number
    connect_after(sigName: "individuals-changed-detailed", callback: IndividualAggregator.IndividualsChangedDetailedSignalCallback): number
    emit(sigName: "individuals-changed-detailed", changes: Gee.MultiMap, ...args: any[]): void

    // Class property signals of Folks-0.7.Folks.IndividualAggregator

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

class IndividualAggregator extends GObject.Object {

    // Own properties of Folks-0.7.Folks.IndividualAggregator

    static name: string
    static $gtype: GObject.GType<IndividualAggregator>

    // Constructors of Folks-0.7.Folks.IndividualAggregator

    constructor(config?: IndividualAggregator.ConstructorProperties) 
    constructor() 
    static new(): IndividualAggregator
    static with_backend_store(store: BackendStore): IndividualAggregator
    _init(config?: IndividualAggregator.ConstructorProperties): void
    static dup(): IndividualAggregator
    static dup_with_backend_store(store: BackendStore): IndividualAggregator | null
}

module Individual {

    // Signal callback interfaces

    /**
     * Signal callback interface for `removed`
     */
    interface RemovedSignalCallback {
        ($obj: Individual, replacement_individual: Individual | null): void
    }

    /**
     * Signal callback interface for `personas-changed`
     */
    interface PersonasChangedSignalCallback {
        ($obj: Individual, added: Gee.Set, removed: Gee.Set): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends AliasDetails.ConstructorProperties, AvatarDetails.ConstructorProperties, BirthdayDetails.ConstructorProperties, EmailDetails.ConstructorProperties, ExtendedInfo.ConstructorProperties, FavouriteDetails.ConstructorProperties, GenderDetails.ConstructorProperties, GroupDetails.ConstructorProperties, ImDetails.ConstructorProperties, InteractionDetails.ConstructorProperties, LocalIdDetails.ConstructorProperties, LocationDetails.ConstructorProperties, NameDetails.ConstructorProperties, NoteDetails.ConstructorProperties, PresenceDetails.ConstructorProperties, PhoneDetails.ConstructorProperties, PostalAddressDetails.ConstructorProperties, RoleDetails.ConstructorProperties, UrlDetails.ConstructorProperties, WebServiceDetails.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.Individual

        trust_level?: TrustLevel | null
        is_user?: boolean | null
        id?: string | null
        personas?: Gee.Set | null
    }

}

interface Individual extends AliasDetails, AvatarDetails, BirthdayDetails, EmailDetails, ExtendedInfo, FavouriteDetails, GenderDetails, GroupDetails, ImDetails, InteractionDetails, LocalIdDetails, LocationDetails, NameDetails, NoteDetails, PresenceDetails, PhoneDetails, PostalAddressDetails, RoleDetails, UrlDetails, WebServiceDetails {

    // Own properties of Folks-0.7.Folks.Individual

    trust_level: TrustLevel
    is_user: boolean
    id: string | null
    readonly display_name: string | null
    personas: Gee.Set

    // Owm methods of Folks-0.7.Folks.Individual

    has_anti_link_with_persona(p: Persona): boolean
    has_anti_link_with_individual(i: Individual): boolean
    get_trust_level(): TrustLevel
    get_is_user(): boolean
    get_id(): string | null
    get_display_name(): string | null
    get_personas(): Gee.Set
    set_personas(value: Gee.Set): void

    // Own signals of Folks-0.7.Folks.Individual

    connect(sigName: "removed", callback: Individual.RemovedSignalCallback): number
    connect_after(sigName: "removed", callback: Individual.RemovedSignalCallback): number
    emit(sigName: "removed", replacement_individual: Individual | null, ...args: any[]): void
    connect(sigName: "personas-changed", callback: Individual.PersonasChangedSignalCallback): number
    connect_after(sigName: "personas-changed", callback: Individual.PersonasChangedSignalCallback): number
    emit(sigName: "personas-changed", added: Gee.Set, removed: Gee.Set, ...args: any[]): void

    // Class property signals of Folks-0.7.Folks.Individual

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

class Individual extends GObject.Object {

    // Own properties of Folks-0.7.Folks.Individual

    static name: string
    static $gtype: GObject.GType<Individual>

    // Constructors of Folks-0.7.Folks.Individual

    constructor(config?: Individual.ConstructorProperties) 
    constructor(personas: Gee.Set | null) 
    static new(personas: Gee.Set | null): Individual
    _init(config?: Individual.ConstructorProperties): void
}

module Location {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Location {

    // Own fields of Folks-0.7.Folks.Location

    latitude: number
    longitude: number

    // Owm methods of Folks-0.7.Folks.Location

    equal(other: Location): boolean
    equal_coordinates(latitude: number, longitude: number): boolean

    // Class property signals of Folks-0.7.Folks.Location

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Location extends GObject.Object {

    // Own properties of Folks-0.7.Folks.Location

    static name: string
    static $gtype: GObject.GType<Location>

    // Constructors of Folks-0.7.Folks.Location

    constructor(config?: Location.ConstructorProperties) 
    constructor(latitude: number, longitude: number) 
    static new(latitude: number, longitude: number): Location
    _init(config?: Location.ConstructorProperties): void
}

module StructuredName {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.StructuredName

        family_name?: string | null
        given_name?: string | null
        additional_names?: string | null
        prefixes?: string | null
        suffixes?: string | null
    }

}

interface StructuredName {

    // Own properties of Folks-0.7.Folks.StructuredName

    family_name: string | null
    given_name: string | null
    additional_names: string | null
    prefixes: string | null
    suffixes: string | null

    // Owm methods of Folks-0.7.Folks.StructuredName

    is_empty(): boolean
    equal(other: StructuredName): boolean
    to_string(): string | null
    to_string_with_format(name_fmt: string | null): string | null
    get_family_name(): string | null
    set_family_name(value: string | null): void
    get_given_name(): string | null
    set_given_name(value: string | null): void
    get_additional_names(): string | null
    set_additional_names(value: string | null): void
    get_prefixes(): string | null
    set_prefixes(value: string | null): void
    get_suffixes(): string | null
    set_suffixes(value: string | null): void

    // Class property signals of Folks-0.7.Folks.StructuredName

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

class StructuredName extends GObject.Object {

    // Own properties of Folks-0.7.Folks.StructuredName

    static name: string
    static $gtype: GObject.GType<StructuredName>

    // Constructors of Folks-0.7.Folks.StructuredName

    constructor(config?: StructuredName.ConstructorProperties) 
    constructor(family_name: string | null, given_name: string | null, additional_names: string | null, prefixes: string | null, suffixes: string | null) 
    static new(family_name: string | null, given_name: string | null, additional_names: string | null, prefixes: string | null, suffixes: string | null): StructuredName
    static simple(family_name: string | null, given_name: string | null): StructuredName
    _init(config?: StructuredName.ConstructorProperties): void
}

module NoteFieldDetails {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.NoteFieldDetails

        uid?: string | null
    }

}

interface NoteFieldDetails {

    // Own properties of Folks-0.7.Folks.NoteFieldDetails

    uid: string | null

    // Owm methods of Folks-0.7.Folks.NoteFieldDetails

    get_uid(): string | null
    set_uid(value: string | null): void

    // Class property signals of Folks-0.7.Folks.NoteFieldDetails

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

class NoteFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.7.Folks.NoteFieldDetails

    static name: string
    static $gtype: GObject.GType<NoteFieldDetails>

    // Constructors of Folks-0.7.Folks.NoteFieldDetails

    constructor(config?: NoteFieldDetails.ConstructorProperties) 
    constructor(value: string | null, parameters: Gee.MultiMap | null, uid: string | null) 
    static new(value: string | null, parameters: Gee.MultiMap | null, uid: string | null): NoteFieldDetails
    _init(config?: NoteFieldDetails.ConstructorProperties): void
}

module ObjectCache {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.ObjectCache

        t_type?: GObject.GType | null
        t_dup_func?: GObject.BoxedCopyFunc | null
        t_destroy_func?: GLib.DestroyNotify | null
        type_id?: string | null
        id?: string | null
    }

}

interface ObjectCache {

    // Own properties of Folks-0.7.Folks.ObjectCache

    readonly t_type: GObject.GType
    readonly t_dup_func: GObject.BoxedCopyFunc
    readonly t_destroy_func: GLib.DestroyNotify
    readonly type_id: string | null
    readonly id: string | null

    // Owm methods of Folks-0.7.Folks.ObjectCache

    get_serialised_object_type(object_version: number): GLib.VariantType | null
    get_serialised_object_version(): number
    serialise_object(object: any | null): GLib.Variant
    deserialise_object(variant: GLib.Variant, object_version: number): any | null
    load_objects(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    load_objects_finish(_res_: Gio.AsyncResult): Gee.Set | null
    store_objects(objects: Gee.Set, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    store_objects_finish(_res_: Gio.AsyncResult): void
    clear_cache(_callback_: Gio.AsyncReadyCallback<this> | null): void
    clear_cache_finish(_res_: Gio.AsyncResult): void
    get_type_id(): string | null
    get_id(): string | null

    // Own virtual methods of Folks-0.7.Folks.ObjectCache

    vfunc_get_serialised_object_type(object_version: number): GLib.VariantType | null
    vfunc_get_serialised_object_version(): number
    vfunc_serialise_object(object: any | null): GLib.Variant
    vfunc_deserialise_object(variant: GLib.Variant, object_version: number): any | null

    // Class property signals of Folks-0.7.Folks.ObjectCache

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

class ObjectCache extends GObject.Object {

    // Own properties of Folks-0.7.Folks.ObjectCache

    static name: string
    static $gtype: GObject.GType<ObjectCache>

    // Constructors of Folks-0.7.Folks.ObjectCache

    constructor(config?: ObjectCache.ConstructorProperties) 
    _init(config?: ObjectCache.ConstructorProperties): void
}

module PersonaStore {

    // Signal callback interfaces

    /**
     * Signal callback interface for `personas-changed`
     */
    interface PersonasChangedSignalCallback {
        ($obj: PersonaStore, added: Gee.Set, removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason): void
    }

    /**
     * Signal callback interface for `removed`
     */
    interface RemovedSignalCallback {
        ($obj: PersonaStore): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.PersonaStore

        display_name?: string | null
        id?: string | null
        is_writeable?: boolean | null
        trust_level?: PersonaStoreTrust | null
        is_primary_store?: boolean | null
        is_user_set_default?: boolean | null
    }

}

interface PersonaStore {

    // Own properties of Folks-0.7.Folks.PersonaStore

    readonly type_id: string | null
    readonly display_name: string | null
    readonly id: string | null
    readonly personas: Gee.Map
    readonly can_add_personas: MaybeBool
    readonly can_alias_personas: MaybeBool
    readonly can_group_personas: MaybeBool
    readonly can_remove_personas: MaybeBool
    readonly is_prepared: boolean
    readonly is_quiescent: boolean
    is_writeable: boolean
    trust_level: PersonaStoreTrust
    readonly always_writeable_properties: string[]
    is_primary_store: boolean
    is_user_set_default: boolean

    // Owm methods of Folks-0.7.Folks.PersonaStore

    _emit_personas_changed(added: Gee.Set | null, removed: Gee.Set | null, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason): void
    prepare(_callback_: Gio.AsyncReadyCallback<this> | null): void
    prepare_finish(_res_: Gio.AsyncResult): void
    flush(_callback_: Gio.AsyncReadyCallback<this> | null): void
    flush_finish(_res_: Gio.AsyncResult): void
    add_persona_from_details(details: GLib.HashTable, _callback_: Gio.AsyncReadyCallback<this> | null): void
    add_persona_from_details_finish(_res_: Gio.AsyncResult): Persona | null
    remove_persona(persona: Persona, _callback_: Gio.AsyncReadyCallback<this> | null): void
    remove_persona_finish(_res_: Gio.AsyncResult): void
    get_type_id(): string | null
    get_display_name(): string | null
    get_id(): string | null
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

    // Own virtual methods of Folks-0.7.Folks.PersonaStore

    vfunc_prepare(_callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_prepare_finish(_res_: Gio.AsyncResult): void
    vfunc_flush(_callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_flush_finish(_res_: Gio.AsyncResult): void
    vfunc_add_persona_from_details(details: GLib.HashTable, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_add_persona_from_details_finish(_res_: Gio.AsyncResult): Persona | null
    vfunc_remove_persona(persona: Persona, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_remove_persona_finish(_res_: Gio.AsyncResult): void
    vfunc_get_type_id(): string | null
    vfunc_get_personas(): Gee.Map
    vfunc_get_can_add_personas(): MaybeBool
    vfunc_get_can_alias_personas(): MaybeBool
    vfunc_get_can_group_personas(): MaybeBool
    vfunc_get_can_remove_personas(): MaybeBool
    vfunc_get_is_prepared(): boolean
    vfunc_get_is_quiescent(): boolean
    vfunc_get_always_writeable_properties(): string[]

    // Own signals of Folks-0.7.Folks.PersonaStore

    connect(sigName: "personas-changed", callback: PersonaStore.PersonasChangedSignalCallback): number
    connect_after(sigName: "personas-changed", callback: PersonaStore.PersonasChangedSignalCallback): number
    emit(sigName: "personas-changed", added: Gee.Set, removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason, ...args: any[]): void
    connect(sigName: "removed", callback: PersonaStore.RemovedSignalCallback): number
    connect_after(sigName: "removed", callback: PersonaStore.RemovedSignalCallback): number
    emit(sigName: "removed", ...args: any[]): void

    // Class property signals of Folks-0.7.Folks.PersonaStore

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

class PersonaStore extends GObject.Object {

    // Own properties of Folks-0.7.Folks.PersonaStore

    static name: string
    static $gtype: GObject.GType<PersonaStore>

    // Constructors of Folks-0.7.Folks.PersonaStore

    constructor(config?: PersonaStore.ConstructorProperties) 
    _init(config?: PersonaStore.ConstructorProperties): void
    static detail_key(detail: PersonaDetail): string | null
}

module Persona {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.Persona

        iid?: string | null
        uid?: string | null
        display_id?: string | null
        is_user?: boolean | null
        store?: PersonaStore | null
        individual?: Individual | null
    }

}

interface Persona {

    // Own properties of Folks-0.7.Folks.Persona

    readonly iid: string | null
    readonly uid: string | null
    readonly display_id: string | null
    readonly is_user: boolean
    readonly store: PersonaStore
    individual: Individual
    readonly linkable_properties: string[]
    readonly writeable_properties: string[]

    // Owm methods of Folks-0.7.Folks.Persona

    linkable_property_to_links(prop_name: string | null, callback: any): void
    get_iid(): string | null
    get_uid(): string | null
    get_display_id(): string | null
    get_is_user(): boolean
    get_store(): PersonaStore
    get_individual(): Individual | null
    get_linkable_properties(): string[]
    get_writeable_properties(): string[]

    // Own virtual methods of Folks-0.7.Folks.Persona

    vfunc_linkable_property_to_links(prop_name: string | null, callback: any): void
    vfunc_get_linkable_properties(): string[]
    vfunc_get_writeable_properties(): string[]

    // Class property signals of Folks-0.7.Folks.Persona

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

class Persona extends GObject.Object {

    // Own properties of Folks-0.7.Folks.Persona

    static name: string
    static $gtype: GObject.GType<Persona>

    // Constructors of Folks-0.7.Folks.Persona

    constructor(config?: Persona.ConstructorProperties) 
    _init(config?: Persona.ConstructorProperties): void
    static build_uid(backend_name: string | null, persona_store_id: string | null, persona_id: string | null): string | null
    static split_uid(uid: string | null): [ /* backend_name */ string | null, /* persona_store_id */ string | null, /* persona_id */ string | null ]
}

module PhoneFieldDetails {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

interface PhoneFieldDetails {

    // Owm methods of Folks-0.7.Folks.PhoneFieldDetails

    get_normalised(): string | null

    // Class property signals of Folks-0.7.Folks.PhoneFieldDetails

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

class PhoneFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.7.Folks.PhoneFieldDetails

    static name: string
    static $gtype: GObject.GType<PhoneFieldDetails>

    // Constructors of Folks-0.7.Folks.PhoneFieldDetails

    constructor(config?: PhoneFieldDetails.ConstructorProperties) 
    constructor(value: string | null, parameters: Gee.MultiMap | null) 
    static new(value: string | null, parameters: Gee.MultiMap | null): PhoneFieldDetails
    _init(config?: PhoneFieldDetails.ConstructorProperties): void
}

module PostalAddress {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.PostalAddress

        po_box?: string | null
        extension?: string | null
        street?: string | null
        locality?: string | null
        region?: string | null
        postal_code?: string | null
        country?: string | null
        address_format?: string | null
        uid?: string | null
    }

}

interface PostalAddress {

    // Own properties of Folks-0.7.Folks.PostalAddress

    po_box: string | null
    extension: string | null
    street: string | null
    locality: string | null
    region: string | null
    postal_code: string | null
    country: string | null
    address_format: string | null
    uid: string | null

    // Owm methods of Folks-0.7.Folks.PostalAddress

    is_empty(): boolean
    equal(with_: PostalAddress): boolean
    to_string(): string | null
    get_po_box(): string | null
    set_po_box(value: string | null): void
    get_extension(): string | null
    set_extension(value: string | null): void
    get_street(): string | null
    set_street(value: string | null): void
    get_locality(): string | null
    set_locality(value: string | null): void
    get_region(): string | null
    set_region(value: string | null): void
    get_postal_code(): string | null
    set_postal_code(value: string | null): void
    get_country(): string | null
    set_country(value: string | null): void
    get_address_format(): string | null
    set_address_format(value: string | null): void
    get_uid(): string | null
    set_uid(value: string | null): void

    // Class property signals of Folks-0.7.Folks.PostalAddress

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

class PostalAddress extends GObject.Object {

    // Own properties of Folks-0.7.Folks.PostalAddress

    static name: string
    static $gtype: GObject.GType<PostalAddress>

    // Constructors of Folks-0.7.Folks.PostalAddress

    constructor(config?: PostalAddress.ConstructorProperties) 
    constructor(po_box: string | null, extension: string | null, street: string | null, locality: string | null, region: string | null, postal_code: string | null, country: string | null, address_format: string | null, uid: string | null) 
    static new(po_box: string | null, extension: string | null, street: string | null, locality: string | null, region: string | null, postal_code: string | null, country: string | null, address_format: string | null, uid: string | null): PostalAddress
    _init(config?: PostalAddress.ConstructorProperties): void
}

module PostalAddressFieldDetails {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

interface PostalAddressFieldDetails {

    // Class property signals of Folks-0.7.Folks.PostalAddressFieldDetails

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

class PostalAddressFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.7.Folks.PostalAddressFieldDetails

    static name: string
    static $gtype: GObject.GType<PostalAddressFieldDetails>

    // Constructors of Folks-0.7.Folks.PostalAddressFieldDetails

    constructor(config?: PostalAddressFieldDetails.ConstructorProperties) 
    constructor(value: PostalAddress, parameters: Gee.MultiMap | null) 
    static new(value: PostalAddress, parameters: Gee.MultiMap | null): PostalAddressFieldDetails
    _init(config?: PostalAddressFieldDetails.ConstructorProperties): void
}

module PotentialMatch {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PotentialMatch {

    // Own fields of Folks-0.7.Folks.PotentialMatch

    folks_potential_match_known_email_aliases: Gee.Set

    // Owm methods of Folks-0.7.Folks.PotentialMatch

    potential_match(a: Individual, b: Individual): MatchResult

    // Class property signals of Folks-0.7.Folks.PotentialMatch

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PotentialMatch extends GObject.Object {

    // Own properties of Folks-0.7.Folks.PotentialMatch

    static name: string
    static $gtype: GObject.GType<PotentialMatch>

    // Constructors of Folks-0.7.Folks.PotentialMatch

    constructor(config?: PotentialMatch.ConstructorProperties) 
    constructor() 
    static new(): PotentialMatch
    _init(config?: PotentialMatch.ConstructorProperties): void
}

module Query {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.Query

        match_fields?: string[] | null
    }

}

interface Query {

    // Own properties of Folks-0.7.Folks.Query

    readonly match_fields: string[]

    // Owm methods of Folks-0.7.Folks.Query

    is_match(individual: Individual): number
    get_match_fields(): string[]

    // Own virtual methods of Folks-0.7.Folks.Query

    vfunc_is_match(individual: Individual): number
    vfunc_get_match_fields(): string[]

    // Class property signals of Folks-0.7.Folks.Query

    connect(sigName: "notify::match-fields", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::match-fields", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::match-fields", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Query extends GObject.Object {

    // Own properties of Folks-0.7.Folks.Query

    static name: string
    static $gtype: GObject.GType<Query>

    // Constructors of Folks-0.7.Folks.Query

    constructor(config?: Query.ConstructorProperties) 
    _init(config?: Query.ConstructorProperties): void
}

module Role {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.Role

        organisation_name?: string | null
        title?: string | null
        role?: string | null
        uid?: string | null
    }

}

interface Role {

    // Own properties of Folks-0.7.Folks.Role

    organisation_name: string | null
    title: string | null
    role: string | null
    uid: string | null

    // Owm methods of Folks-0.7.Folks.Role

    is_empty(): boolean
    to_string(): string | null
    get_organisation_name(): string | null
    set_organisation_name(value: string | null): void
    get_title(): string | null
    set_title(value: string | null): void
    get_role(): string | null
    set_role(value: string | null): void
    get_uid(): string | null
    set_uid(value: string | null): void

    // Class property signals of Folks-0.7.Folks.Role

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

class Role extends GObject.Object {

    // Own properties of Folks-0.7.Folks.Role

    static name: string
    static $gtype: GObject.GType<Role>

    // Constructors of Folks-0.7.Folks.Role

    constructor(config?: Role.ConstructorProperties) 
    constructor(title: string | null, organisation_name: string | null, uid: string | null) 
    static new(title: string | null, organisation_name: string | null, uid: string | null): Role
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

    // Class property signals of Folks-0.7.Folks.RoleFieldDetails

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

class RoleFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.7.Folks.RoleFieldDetails

    static name: string
    static $gtype: GObject.GType<RoleFieldDetails>

    // Constructors of Folks-0.7.Folks.RoleFieldDetails

    constructor(config?: RoleFieldDetails.ConstructorProperties) 
    constructor(value: Role, parameters: Gee.MultiMap | null) 
    static new(value: Role, parameters: Gee.MultiMap | null): RoleFieldDetails
    _init(config?: RoleFieldDetails.ConstructorProperties): void
}

module SearchView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `individuals-changed-detailed`
     */
    interface IndividualsChangedDetailedSignalCallback {
        ($obj: SearchView, added: Gee.SortedSet, removed: Gee.SortedSet): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.SearchView

        query?: Query | null
    }

}

interface SearchView {

    // Own properties of Folks-0.7.Folks.SearchView

    readonly aggregator: IndividualAggregator
    query: Query
    readonly individuals: Gee.SortedSet
    readonly is_prepared: boolean
    readonly is_quiescent: boolean

    // Owm methods of Folks-0.7.Folks.SearchView

    prepare(_callback_: Gio.AsyncReadyCallback<this> | null): void
    prepare_finish(_res_: Gio.AsyncResult): void
    unprepare(_callback_: Gio.AsyncReadyCallback<this> | null): void
    unprepare_finish(_res_: Gio.AsyncResult): void
    refresh(_callback_: Gio.AsyncReadyCallback<this> | null): void
    refresh_finish(_res_: Gio.AsyncResult): void
    get_aggregator(): IndividualAggregator
    get_query(): Query
    set_query(value: Query): void
    get_individuals(): Gee.SortedSet
    get_is_prepared(): boolean
    get_is_quiescent(): boolean

    // Own signals of Folks-0.7.Folks.SearchView

    connect(sigName: "individuals-changed-detailed", callback: SearchView.IndividualsChangedDetailedSignalCallback): number
    connect_after(sigName: "individuals-changed-detailed", callback: SearchView.IndividualsChangedDetailedSignalCallback): number
    emit(sigName: "individuals-changed-detailed", added: Gee.SortedSet, removed: Gee.SortedSet, ...args: any[]): void

    // Class property signals of Folks-0.7.Folks.SearchView

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

class SearchView extends GObject.Object {

    // Own properties of Folks-0.7.Folks.SearchView

    static name: string
    static $gtype: GObject.GType<SearchView>

    // Constructors of Folks-0.7.Folks.SearchView

    constructor(config?: SearchView.ConstructorProperties) 
    constructor(aggregator: IndividualAggregator, query: Query) 
    static new(aggregator: IndividualAggregator, query: Query): SearchView
    _init(config?: SearchView.ConstructorProperties): void
}

module SimpleQuery {

    // Constructor properties interface

    interface ConstructorProperties extends Query.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.SimpleQuery

        query_string?: string | null
        query_locale?: string | null
    }

}

interface SimpleQuery {

    // Own properties of Folks-0.7.Folks.SimpleQuery

    query_string: string | null
    query_locale: string | null

    // Owm methods of Folks-0.7.Folks.SimpleQuery

    get_query_string(): string | null
    set_query_string(value: string | null): void
    get_query_locale(): string | null
    set_query_locale(value: string | null): void

    // Class property signals of Folks-0.7.Folks.SimpleQuery

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

class SimpleQuery extends Query {

    // Own properties of Folks-0.7.Folks.SimpleQuery

    static name: string
    static $gtype: GObject.GType<SimpleQuery>

    // Constructors of Folks-0.7.Folks.SimpleQuery

    constructor(config?: SimpleQuery.ConstructorProperties) 
    constructor(query_string: string | null, match_fields: string[]) 
    static new(query_string: string | null, match_fields: string[]): SimpleQuery
    _init(config?: SimpleQuery.ConstructorProperties): void
}

module UrlFieldDetails {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

interface UrlFieldDetails {

    // Class property signals of Folks-0.7.Folks.UrlFieldDetails

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

class UrlFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.7.Folks.UrlFieldDetails

    static name: string
    static $gtype: GObject.GType<UrlFieldDetails>

    // Constructors of Folks-0.7.Folks.UrlFieldDetails

    constructor(config?: UrlFieldDetails.ConstructorProperties) 
    constructor(value: string | null, parameters: Gee.MultiMap | null) 
    static new(value: string | null, parameters: Gee.MultiMap | null): UrlFieldDetails
    _init(config?: UrlFieldDetails.ConstructorProperties): void
}

module Utils {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Utils {

    // Class property signals of Folks-0.7.Folks.Utils

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Utils extends GObject.Object {

    // Own properties of Folks-0.7.Folks.Utils

    static name: string
    static $gtype: GObject.GType<Utils>

    // Constructors of Folks-0.7.Folks.Utils

    constructor(config?: Utils.ConstructorProperties) 
    constructor() 
    static new(): Utils
    _init(config?: Utils.ConstructorProperties): void
    static multi_map_str_str_equal(a: Gee.MultiMap, b: Gee.MultiMap): boolean
    static multi_map_str_afd_equal(a: Gee.MultiMap, b: Gee.MultiMap): boolean
    static set_afd_equal(a: Gee.Set, b: Gee.Set): boolean
    static set_string_afd_equal(a: Gee.Set, b: Gee.Set): boolean
}

module WebServiceFieldDetails {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

interface WebServiceFieldDetails {

    // Class property signals of Folks-0.7.Folks.WebServiceFieldDetails

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

class WebServiceFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.7.Folks.WebServiceFieldDetails

    static name: string
    static $gtype: GObject.GType<WebServiceFieldDetails>

    // Constructors of Folks-0.7.Folks.WebServiceFieldDetails

    constructor(config?: WebServiceFieldDetails.ConstructorProperties) 
    constructor(value: string | null, parameters: Gee.MultiMap | null) 
    static new(value: string | null, parameters: Gee.MultiMap | null): WebServiceFieldDetails
    _init(config?: WebServiceFieldDetails.ConstructorProperties): void
}

interface AbstractFieldDetailsClass {

    // Own fields of Folks-0.7.Folks.AbstractFieldDetailsClass

    equal: (self: AbstractFieldDetails, that: AbstractFieldDetails) => boolean
    parameters_equal: (self: AbstractFieldDetails, that: AbstractFieldDetails) => boolean
    values_equal: (self: AbstractFieldDetails, that: AbstractFieldDetails) => boolean
    hash: (self: AbstractFieldDetails) => number
}

abstract class AbstractFieldDetailsClass {

    // Own properties of Folks-0.7.Folks.AbstractFieldDetailsClass

    static name: string
}

interface AbstractFieldDetailsPrivate {
}

class AbstractFieldDetailsPrivate {

    // Own properties of Folks-0.7.Folks.AbstractFieldDetailsPrivate

    static name: string
}

interface AvatarCacheClass {
}

abstract class AvatarCacheClass {

    // Own properties of Folks-0.7.Folks.AvatarCacheClass

    static name: string
}

interface AvatarCachePrivate {
}

class AvatarCachePrivate {

    // Own properties of Folks-0.7.Folks.AvatarCachePrivate

    static name: string
}

interface BackendStoreClass {
}

abstract class BackendStoreClass {

    // Own properties of Folks-0.7.Folks.BackendStoreClass

    static name: string
}

interface BackendStorePrivate {
}

class BackendStorePrivate {

    // Own properties of Folks-0.7.Folks.BackendStorePrivate

    static name: string
}

interface BackendClass {

    // Own fields of Folks-0.7.Folks.BackendClass

    disable_persona_store: (self: Backend, store: PersonaStore) => void
    enable_persona_store: (self: Backend, store: PersonaStore) => void
    set_persona_stores: (self: Backend, storeids: Gee.Set | null) => void
    prepare: (self: Backend, _callback_: Gio.AsyncReadyCallback | null) => void
    prepare_finish: (self: Backend, _res_: Gio.AsyncResult) => void
    unprepare: (self: Backend, _callback_: Gio.AsyncReadyCallback | null) => void
    unprepare_finish: (self: Backend, _res_: Gio.AsyncResult) => void
}

abstract class BackendClass {

    // Own properties of Folks-0.7.Folks.BackendClass

    static name: string
}

interface BackendPrivate {
}

class BackendPrivate {

    // Own properties of Folks-0.7.Folks.BackendPrivate

    static name: string
}

interface DebugClass {
}

abstract class DebugClass {

    // Own properties of Folks-0.7.Folks.DebugClass

    static name: string
}

interface DebugPrivate {
}

class DebugPrivate {

    // Own properties of Folks-0.7.Folks.DebugPrivate

    static name: string
}

interface EmailFieldDetailsClass {
}

abstract class EmailFieldDetailsClass {

    // Own properties of Folks-0.7.Folks.EmailFieldDetailsClass

    static name: string
}

interface EmailFieldDetailsPrivate {
}

class EmailFieldDetailsPrivate {

    // Own properties of Folks-0.7.Folks.EmailFieldDetailsPrivate

    static name: string
}

interface ExtendedFieldDetailsClass {
}

abstract class ExtendedFieldDetailsClass {

    // Own properties of Folks-0.7.Folks.ExtendedFieldDetailsClass

    static name: string
}

interface ExtendedFieldDetailsPrivate {
}

class ExtendedFieldDetailsPrivate {

    // Own properties of Folks-0.7.Folks.ExtendedFieldDetailsPrivate

    static name: string
}

interface ImFieldDetailsClass {
}

abstract class ImFieldDetailsClass {

    // Own properties of Folks-0.7.Folks.ImFieldDetailsClass

    static name: string
}

interface ImFieldDetailsPrivate {
}

class ImFieldDetailsPrivate {

    // Own properties of Folks-0.7.Folks.ImFieldDetailsPrivate

    static name: string
}

interface IndividualAggregatorClass {
}

abstract class IndividualAggregatorClass {

    // Own properties of Folks-0.7.Folks.IndividualAggregatorClass

    static name: string
}

interface IndividualAggregatorPrivate {
}

class IndividualAggregatorPrivate {

    // Own properties of Folks-0.7.Folks.IndividualAggregatorPrivate

    static name: string
}

interface IndividualClass {
}

abstract class IndividualClass {

    // Own properties of Folks-0.7.Folks.IndividualClass

    static name: string
}

interface IndividualPrivate {
}

class IndividualPrivate {

    // Own properties of Folks-0.7.Folks.IndividualPrivate

    static name: string
}

interface LocationClass {
}

abstract class LocationClass {

    // Own properties of Folks-0.7.Folks.LocationClass

    static name: string
}

interface LocationPrivate {
}

class LocationPrivate {

    // Own properties of Folks-0.7.Folks.LocationPrivate

    static name: string
}

interface StructuredNameClass {
}

abstract class StructuredNameClass {

    // Own properties of Folks-0.7.Folks.StructuredNameClass

    static name: string
}

interface StructuredNamePrivate {
}

class StructuredNamePrivate {

    // Own properties of Folks-0.7.Folks.StructuredNamePrivate

    static name: string
}

interface NoteFieldDetailsClass {
}

abstract class NoteFieldDetailsClass {

    // Own properties of Folks-0.7.Folks.NoteFieldDetailsClass

    static name: string
}

interface NoteFieldDetailsPrivate {
}

class NoteFieldDetailsPrivate {

    // Own properties of Folks-0.7.Folks.NoteFieldDetailsPrivate

    static name: string
}

interface ObjectCacheClass {

    // Own fields of Folks-0.7.Folks.ObjectCacheClass

    get_serialised_object_type: (self: ObjectCache, object_version: number) => GLib.VariantType | null
    get_serialised_object_version: (self: ObjectCache) => number
    serialise_object: (self: ObjectCache, object: any | null) => GLib.Variant
    deserialise_object: (self: ObjectCache, variant: GLib.Variant, object_version: number) => any | null
}

abstract class ObjectCacheClass {

    // Own properties of Folks-0.7.Folks.ObjectCacheClass

    static name: string
}

interface ObjectCachePrivate {
}

class ObjectCachePrivate {

    // Own properties of Folks-0.7.Folks.ObjectCachePrivate

    static name: string
}

interface PersonaStoreClass {

    // Own fields of Folks-0.7.Folks.PersonaStoreClass

    prepare: (self: PersonaStore, _callback_: Gio.AsyncReadyCallback | null) => void
    prepare_finish: (self: PersonaStore, _res_: Gio.AsyncResult) => void
    flush: (self: PersonaStore, _callback_: Gio.AsyncReadyCallback | null) => void
    flush_finish: (self: PersonaStore, _res_: Gio.AsyncResult) => void
    add_persona_from_details: (self: PersonaStore, details: GLib.HashTable, _callback_: Gio.AsyncReadyCallback | null) => void
    add_persona_from_details_finish: (self: PersonaStore, _res_: Gio.AsyncResult) => Persona | null
    remove_persona: (self: PersonaStore, persona: Persona, _callback_: Gio.AsyncReadyCallback | null) => void
    remove_persona_finish: (self: PersonaStore, _res_: Gio.AsyncResult) => void
}

abstract class PersonaStoreClass {

    // Own properties of Folks-0.7.Folks.PersonaStoreClass

    static name: string
}

interface PersonaStorePrivate {
}

class PersonaStorePrivate {

    // Own properties of Folks-0.7.Folks.PersonaStorePrivate

    static name: string
}

interface PersonaClass {

    // Own fields of Folks-0.7.Folks.PersonaClass

    linkable_property_to_links: (self: Persona, prop_name: string | null, callback: any) => void
}

abstract class PersonaClass {

    // Own properties of Folks-0.7.Folks.PersonaClass

    static name: string
}

interface PersonaPrivate {
}

class PersonaPrivate {

    // Own properties of Folks-0.7.Folks.PersonaPrivate

    static name: string
}

interface PhoneFieldDetailsClass {
}

abstract class PhoneFieldDetailsClass {

    // Own properties of Folks-0.7.Folks.PhoneFieldDetailsClass

    static name: string
}

interface PhoneFieldDetailsPrivate {
}

class PhoneFieldDetailsPrivate {

    // Own properties of Folks-0.7.Folks.PhoneFieldDetailsPrivate

    static name: string
}

interface PostalAddressClass {
}

abstract class PostalAddressClass {

    // Own properties of Folks-0.7.Folks.PostalAddressClass

    static name: string
}

interface PostalAddressPrivate {
}

class PostalAddressPrivate {

    // Own properties of Folks-0.7.Folks.PostalAddressPrivate

    static name: string
}

interface PostalAddressFieldDetailsClass {
}

abstract class PostalAddressFieldDetailsClass {

    // Own properties of Folks-0.7.Folks.PostalAddressFieldDetailsClass

    static name: string
}

interface PostalAddressFieldDetailsPrivate {
}

class PostalAddressFieldDetailsPrivate {

    // Own properties of Folks-0.7.Folks.PostalAddressFieldDetailsPrivate

    static name: string
}

interface PotentialMatchClass {
}

abstract class PotentialMatchClass {

    // Own properties of Folks-0.7.Folks.PotentialMatchClass

    static name: string
}

interface PotentialMatchPrivate {
}

class PotentialMatchPrivate {

    // Own properties of Folks-0.7.Folks.PotentialMatchPrivate

    static name: string
}

interface QueryClass {

    // Own fields of Folks-0.7.Folks.QueryClass

    is_match: (self: Query, individual: Individual) => number
}

abstract class QueryClass {

    // Own properties of Folks-0.7.Folks.QueryClass

    static name: string
}

interface QueryPrivate {
}

class QueryPrivate {

    // Own properties of Folks-0.7.Folks.QueryPrivate

    static name: string
}

interface RoleClass {
}

abstract class RoleClass {

    // Own properties of Folks-0.7.Folks.RoleClass

    static name: string
}

interface RolePrivate {
}

class RolePrivate {

    // Own properties of Folks-0.7.Folks.RolePrivate

    static name: string
}

interface RoleFieldDetailsClass {
}

abstract class RoleFieldDetailsClass {

    // Own properties of Folks-0.7.Folks.RoleFieldDetailsClass

    static name: string
}

interface RoleFieldDetailsPrivate {
}

class RoleFieldDetailsPrivate {

    // Own properties of Folks-0.7.Folks.RoleFieldDetailsPrivate

    static name: string
}

interface SearchViewClass {
}

abstract class SearchViewClass {

    // Own properties of Folks-0.7.Folks.SearchViewClass

    static name: string
}

interface SearchViewPrivate {
}

class SearchViewPrivate {

    // Own properties of Folks-0.7.Folks.SearchViewPrivate

    static name: string
}

interface SimpleQueryClass {
}

abstract class SimpleQueryClass {

    // Own properties of Folks-0.7.Folks.SimpleQueryClass

    static name: string
}

interface SimpleQueryPrivate {
}

class SimpleQueryPrivate {

    // Own properties of Folks-0.7.Folks.SimpleQueryPrivate

    static name: string
}

interface UrlFieldDetailsClass {
}

abstract class UrlFieldDetailsClass {

    // Own properties of Folks-0.7.Folks.UrlFieldDetailsClass

    static name: string
}

interface UrlFieldDetailsPrivate {
}

class UrlFieldDetailsPrivate {

    // Own properties of Folks-0.7.Folks.UrlFieldDetailsPrivate

    static name: string
}

interface UtilsClass {
}

abstract class UtilsClass {

    // Own properties of Folks-0.7.Folks.UtilsClass

    static name: string
}

interface UtilsPrivate {
}

class UtilsPrivate {

    // Own properties of Folks-0.7.Folks.UtilsPrivate

    static name: string
}

interface WebServiceFieldDetailsClass {
}

abstract class WebServiceFieldDetailsClass {

    // Own properties of Folks-0.7.Folks.WebServiceFieldDetailsClass

    static name: string
}

interface WebServiceFieldDetailsPrivate {
}

class WebServiceFieldDetailsPrivate {

    // Own properties of Folks-0.7.Folks.WebServiceFieldDetailsPrivate

    static name: string
}

interface AliasDetailsIface {

    // Own fields of Folks-0.7.Folks.AliasDetailsIface

    change_alias: (self: AliasDetails, alias: string | null, _callback_: Gio.AsyncReadyCallback | null) => void
    change_alias_finish: (self: AliasDetails, _res_: Gio.AsyncResult) => void
    get_alias: (self: AliasDetails) => string | null
    set_alias: (self: AliasDetails, value: string | null) => void
}

abstract class AliasDetailsIface {

    // Own properties of Folks-0.7.Folks.AliasDetailsIface

    static name: string
}

interface AntiLinkableIface {

    // Own fields of Folks-0.7.Folks.AntiLinkableIface

    change_anti_links: (self: AntiLinkable, anti_links: Gee.Set, _callback_: Gio.AsyncReadyCallback | null) => void
    change_anti_links_finish: (self: AntiLinkable, _res_: Gio.AsyncResult) => void
    get_anti_links: (self: AntiLinkable) => Gee.Set
    set_anti_links: (self: AntiLinkable, value: Gee.Set) => void
}

abstract class AntiLinkableIface {

    // Own properties of Folks-0.7.Folks.AntiLinkableIface

    static name: string
}

interface AvatarDetailsIface {

    // Own fields of Folks-0.7.Folks.AvatarDetailsIface

    change_avatar: (self: AvatarDetails, avatar: Gio.LoadableIcon | null, _callback_: Gio.AsyncReadyCallback | null) => void
    change_avatar_finish: (self: AvatarDetails, _res_: Gio.AsyncResult) => void
    get_avatar: (self: AvatarDetails) => Gio.LoadableIcon | null
    set_avatar: (self: AvatarDetails, value: Gio.LoadableIcon | null) => void
}

abstract class AvatarDetailsIface {

    // Own properties of Folks-0.7.Folks.AvatarDetailsIface

    static name: string
}

interface BirthdayDetailsIface {

    // Own fields of Folks-0.7.Folks.BirthdayDetailsIface

    change_birthday: (self: BirthdayDetails, birthday: GLib.DateTime | null, _callback_: Gio.AsyncReadyCallback | null) => void
    change_birthday_finish: (self: BirthdayDetails, _res_: Gio.AsyncResult) => void
    change_calendar_event_id: (self: BirthdayDetails, event_id: string | null, _callback_: Gio.AsyncReadyCallback | null) => void
    change_calendar_event_id_finish: (self: BirthdayDetails, _res_: Gio.AsyncResult) => void
    get_birthday: (self: BirthdayDetails) => GLib.DateTime | null
    set_birthday: (self: BirthdayDetails, value: GLib.DateTime | null) => void
    get_calendar_event_id: (self: BirthdayDetails) => string | null
    set_calendar_event_id: (self: BirthdayDetails, value: string | null) => void
}

abstract class BirthdayDetailsIface {

    // Own properties of Folks-0.7.Folks.BirthdayDetailsIface

    static name: string
}

interface EmailDetailsIface {

    // Own fields of Folks-0.7.Folks.EmailDetailsIface

    change_email_addresses: (self: EmailDetails, email_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback | null) => void
    change_email_addresses_finish: (self: EmailDetails, _res_: Gio.AsyncResult) => void
    get_email_addresses: (self: EmailDetails) => Gee.Set
    set_email_addresses: (self: EmailDetails, value: Gee.Set) => void
}

abstract class EmailDetailsIface {

    // Own properties of Folks-0.7.Folks.EmailDetailsIface

    static name: string
}

interface ExtendedInfoIface {

    // Own fields of Folks-0.7.Folks.ExtendedInfoIface

    get_extended_field: (self: ExtendedInfo, name: string | null) => ExtendedFieldDetails | null
    change_extended_field: (self: ExtendedInfo, name: string | null, value: ExtendedFieldDetails, _callback_: Gio.AsyncReadyCallback | null) => void
    change_extended_field_finish: (self: ExtendedInfo, _res_: Gio.AsyncResult) => void
    remove_extended_field: (self: ExtendedInfo, name: string | null, _callback_: Gio.AsyncReadyCallback | null) => void
    remove_extended_field_finish: (self: ExtendedInfo, _res_: Gio.AsyncResult) => void
}

abstract class ExtendedInfoIface {

    // Own properties of Folks-0.7.Folks.ExtendedInfoIface

    static name: string
}

interface FavouriteDetailsIface {

    // Own fields of Folks-0.7.Folks.FavouriteDetailsIface

    change_is_favourite: (self: FavouriteDetails, is_favourite: boolean, _callback_: Gio.AsyncReadyCallback | null) => void
    change_is_favourite_finish: (self: FavouriteDetails, _res_: Gio.AsyncResult) => void
    get_is_favourite: (self: FavouriteDetails) => boolean
    set_is_favourite: (self: FavouriteDetails, value: boolean) => void
}

abstract class FavouriteDetailsIface {

    // Own properties of Folks-0.7.Folks.FavouriteDetailsIface

    static name: string
}

interface GenderDetailsIface {

    // Own fields of Folks-0.7.Folks.GenderDetailsIface

    change_gender: (self: GenderDetails, gender: Gender, _callback_: Gio.AsyncReadyCallback | null) => void
    change_gender_finish: (self: GenderDetails, _res_: Gio.AsyncResult) => void
    get_gender: (self: GenderDetails) => Gender
    set_gender: (self: GenderDetails, value: Gender) => void
}

abstract class GenderDetailsIface {

    // Own properties of Folks-0.7.Folks.GenderDetailsIface

    static name: string
}

interface GroupDetailsIface {

    // Own fields of Folks-0.7.Folks.GroupDetailsIface

    change_group: (self: GroupDetails, group: string | null, is_member: boolean, _callback_: Gio.AsyncReadyCallback | null) => void
    change_group_finish: (self: GroupDetails, _res_: Gio.AsyncResult) => void
    change_groups: (self: GroupDetails, groups: Gee.Set, _callback_: Gio.AsyncReadyCallback | null) => void
    change_groups_finish: (self: GroupDetails, _res_: Gio.AsyncResult) => void
    get_groups: (self: GroupDetails) => Gee.Set
    set_groups: (self: GroupDetails, value: Gee.Set) => void
}

abstract class GroupDetailsIface {

    // Own properties of Folks-0.7.Folks.GroupDetailsIface

    static name: string
}

interface ImDetailsIface {

    // Own fields of Folks-0.7.Folks.ImDetailsIface

    change_im_addresses: (self: ImDetails, im_addresses: Gee.MultiMap, _callback_: Gio.AsyncReadyCallback | null) => void
    change_im_addresses_finish: (self: ImDetails, _res_: Gio.AsyncResult) => void
    get_im_addresses: (self: ImDetails) => Gee.MultiMap
    set_im_addresses: (self: ImDetails, value: Gee.MultiMap) => void
}

abstract class ImDetailsIface {

    // Own properties of Folks-0.7.Folks.ImDetailsIface

    static name: string
}

interface InteractionDetailsIface {

    // Own fields of Folks-0.7.Folks.InteractionDetailsIface

    get_im_interaction_count: (self: InteractionDetails) => number
    get_last_im_interaction_datetime: (self: InteractionDetails) => GLib.DateTime | null
    get_call_interaction_count: (self: InteractionDetails) => number
    get_last_call_interaction_datetime: (self: InteractionDetails) => GLib.DateTime | null
}

abstract class InteractionDetailsIface {

    // Own properties of Folks-0.7.Folks.InteractionDetailsIface

    static name: string
}

interface LocalIdDetailsIface {

    // Own fields of Folks-0.7.Folks.LocalIdDetailsIface

    change_local_ids: (self: LocalIdDetails, local_ids: Gee.Set, _callback_: Gio.AsyncReadyCallback | null) => void
    change_local_ids_finish: (self: LocalIdDetails, _res_: Gio.AsyncResult) => void
    get_local_ids: (self: LocalIdDetails) => Gee.Set
    set_local_ids: (self: LocalIdDetails, value: Gee.Set) => void
}

abstract class LocalIdDetailsIface {

    // Own properties of Folks-0.7.Folks.LocalIdDetailsIface

    static name: string
}

interface LocationDetailsIface {

    // Own fields of Folks-0.7.Folks.LocationDetailsIface

    change_location: (self: LocationDetails, location: Location | null, _callback_: Gio.AsyncReadyCallback | null) => void
    change_location_finish: (self: LocationDetails, _res_: Gio.AsyncResult) => void
    get_location: (self: LocationDetails) => Location | null
    set_location: (self: LocationDetails, value: Location | null) => void
}

abstract class LocationDetailsIface {

    // Own properties of Folks-0.7.Folks.LocationDetailsIface

    static name: string
}

interface NameDetailsIface {

    // Own fields of Folks-0.7.Folks.NameDetailsIface

    change_structured_name: (self: NameDetails, name: StructuredName | null, _callback_: Gio.AsyncReadyCallback | null) => void
    change_structured_name_finish: (self: NameDetails, _res_: Gio.AsyncResult) => void
    change_full_name: (self: NameDetails, full_name: string | null, _callback_: Gio.AsyncReadyCallback | null) => void
    change_full_name_finish: (self: NameDetails, _res_: Gio.AsyncResult) => void
    change_nickname: (self: NameDetails, nickname: string | null, _callback_: Gio.AsyncReadyCallback | null) => void
    change_nickname_finish: (self: NameDetails, _res_: Gio.AsyncResult) => void
    get_structured_name: (self: NameDetails) => StructuredName | null
    set_structured_name: (self: NameDetails, value: StructuredName | null) => void
    get_full_name: (self: NameDetails) => string | null
    set_full_name: (self: NameDetails, value: string | null) => void
    get_nickname: (self: NameDetails) => string | null
    set_nickname: (self: NameDetails, value: string | null) => void
}

abstract class NameDetailsIface {

    // Own properties of Folks-0.7.Folks.NameDetailsIface

    static name: string
}

interface NoteDetailsIface {

    // Own fields of Folks-0.7.Folks.NoteDetailsIface

    change_notes: (self: NoteDetails, notes: Gee.Set, _callback_: Gio.AsyncReadyCallback | null) => void
    change_notes_finish: (self: NoteDetails, _res_: Gio.AsyncResult) => void
    get_notes: (self: NoteDetails) => Gee.Set
    set_notes: (self: NoteDetails, value: Gee.Set) => void
}

abstract class NoteDetailsIface {

    // Own properties of Folks-0.7.Folks.NoteDetailsIface

    static name: string
}

interface PhoneDetailsIface {

    // Own fields of Folks-0.7.Folks.PhoneDetailsIface

    change_phone_numbers: (self: PhoneDetails, phone_numbers: Gee.Set, _callback_: Gio.AsyncReadyCallback | null) => void
    change_phone_numbers_finish: (self: PhoneDetails, _res_: Gio.AsyncResult) => void
    get_phone_numbers: (self: PhoneDetails) => Gee.Set
    set_phone_numbers: (self: PhoneDetails, value: Gee.Set) => void
}

abstract class PhoneDetailsIface {

    // Own properties of Folks-0.7.Folks.PhoneDetailsIface

    static name: string
}

interface PostalAddressDetailsIface {

    // Own fields of Folks-0.7.Folks.PostalAddressDetailsIface

    change_postal_addresses: (self: PostalAddressDetails, postal_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback | null) => void
    change_postal_addresses_finish: (self: PostalAddressDetails, _res_: Gio.AsyncResult) => void
    get_postal_addresses: (self: PostalAddressDetails) => Gee.Set
    set_postal_addresses: (self: PostalAddressDetails, value: Gee.Set) => void
}

abstract class PostalAddressDetailsIface {

    // Own properties of Folks-0.7.Folks.PostalAddressDetailsIface

    static name: string
}

interface PresenceDetailsIface {

    // Own fields of Folks-0.7.Folks.PresenceDetailsIface

    get_presence_type: (self: PresenceDetails) => PresenceType
    set_presence_type: (self: PresenceDetails, value: PresenceType) => void
    get_presence_message: (self: PresenceDetails) => string | null
    set_presence_message: (self: PresenceDetails, value: string | null) => void
    get_client_types: () => [ /* returnType */ string[], /* result_length1 */ number ]
    set_client_types: (self: PresenceDetails, value: string[]) => void
    get_presence_status: (self: PresenceDetails) => string | null
    set_presence_status: (self: PresenceDetails, value: string | null) => void
}

abstract class PresenceDetailsIface {

    // Own properties of Folks-0.7.Folks.PresenceDetailsIface

    static name: string
}

interface RoleDetailsIface {

    // Own fields of Folks-0.7.Folks.RoleDetailsIface

    change_roles: (self: RoleDetails, roles: Gee.Set, _callback_: Gio.AsyncReadyCallback | null) => void
    change_roles_finish: (self: RoleDetails, _res_: Gio.AsyncResult) => void
    get_roles: (self: RoleDetails) => Gee.Set
    set_roles: (self: RoleDetails, value: Gee.Set) => void
}

abstract class RoleDetailsIface {

    // Own properties of Folks-0.7.Folks.RoleDetailsIface

    static name: string
}

interface UrlDetailsIface {

    // Own fields of Folks-0.7.Folks.UrlDetailsIface

    change_urls: (self: UrlDetails, urls: Gee.Set, _callback_: Gio.AsyncReadyCallback | null) => void
    change_urls_finish: (self: UrlDetails, _res_: Gio.AsyncResult) => void
    get_urls: (self: UrlDetails) => Gee.Set
    set_urls: (self: UrlDetails, value: Gee.Set) => void
}

abstract class UrlDetailsIface {

    // Own properties of Folks-0.7.Folks.UrlDetailsIface

    static name: string
}

interface WebServiceDetailsIface {

    // Own fields of Folks-0.7.Folks.WebServiceDetailsIface

    change_web_service_addresses: (self: WebServiceDetails, web_service_addresses: Gee.MultiMap, _callback_: Gio.AsyncReadyCallback | null) => void
    change_web_service_addresses_finish: (self: WebServiceDetails, _res_: Gio.AsyncResult) => void
    get_web_service_addresses: (self: WebServiceDetails) => Gee.MultiMap
    set_web_service_addresses: (self: WebServiceDetails, value: Gee.MultiMap) => void
}

abstract class WebServiceDetailsIface {

    // Own properties of Folks-0.7.Folks.WebServiceDetailsIface

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default Folks;
// END