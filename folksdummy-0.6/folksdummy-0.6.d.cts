
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './folksdummy-0.6-ambient.d.ts';
import './folksdummy-0.6-import.d.ts';
/**
 * FolksDummy-0.6
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type Gee from '@girs/gee-0.8';
import type Folks from '@girs/folks-0.6';

export module Backend {

    // Constructor properties interface

    export interface ConstructorProperties extends Folks.Backend.ConstructorProperties {
    }

}

export interface Backend {

    // Owm methods of FolksDummy-0.6.FolksDummy.Backend

    register_persona_stores(stores: Gee.Set, enable_stores: boolean): void
    unregister_persona_stores(stores: Gee.Set): void

    // Class property signals of FolksDummy-0.6.FolksDummy.Backend

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

export class Backend extends Folks.Backend {

    // Own properties of FolksDummy-0.6.FolksDummy.Backend

    static name: string
    static $gtype: GObject.GType<Backend>

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

    // Owm methods of FolksDummy-0.6.FolksDummy.FullPersona

    update_gender(gender: Folks.Gender): void
    update_calendar_event_id(calendar_event_id?: string | null): void
    update_birthday(birthday?: GLib.DateTime | null): void
    update_roles(roles: Gee.Set): void
    update_groups(groups: Gee.Set): void
    update_web_service_addresses(web_service_addresses: Gee.MultiMap): void
    update_email_addresses(email_addresses: Gee.Set): void
    update_notes(notes: Gee.Set): void
    update_full_name(full_name: string): void
    update_nickname(nickname: string): void
    update_structured_name(structured_name?: Folks.StructuredName | null): void
    update_avatar(avatar?: Gio.LoadableIcon | null): void
    update_urls(urls: Gee.Set): void
    update_im_addresses(im_addresses: Gee.MultiMap): void
    update_phone_numbers(phone_numbers: Gee.Set): void
    update_postal_addresses(postal_addresses: Gee.Set): void
    update_local_ids(local_ids: Gee.Set): void
    update_is_favourite(is_favourite: boolean): void
    update_anti_links(anti_links: Gee.Set): void

    // Class property signals of FolksDummy-0.6.FolksDummy.FullPersona

    connect(sigName: "notify::property-change-delay", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::property-change-delay", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::property-change-delay", ...args: any[]): void
    connect(sigName: "notify::iid", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iid", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::iid", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::display-id", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-id", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-id", ...args: any[]): void
    connect(sigName: "notify::is-user", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-user", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-user", ...args: any[]): void
    connect(sigName: "notify::store", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::store", ...args: any[]): void
    connect(sigName: "notify::individual", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::individual", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::individual", ...args: any[]): void
    connect(sigName: "notify::linkable-properties", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::linkable-properties", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::linkable-properties", ...args: any[]): void
    connect(sigName: "notify::writeable-properties", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writeable-properties", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::writeable-properties", ...args: any[]): void
    connect(sigName: "notify::anti-links", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anti-links", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anti-links", ...args: any[]): void
    connect(sigName: "notify::avatar", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::avatar", ...args: any[]): void
    connect(sigName: "notify::birthday", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::birthday", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::birthday", ...args: any[]): void
    connect(sigName: "notify::calendar-event-id", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-event-id", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::calendar-event-id", ...args: any[]): void
    connect(sigName: "notify::email-addresses", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-addresses", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::email-addresses", ...args: any[]): void
    connect(sigName: "notify::is-favourite", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-favourite", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-favourite", ...args: any[]): void
    connect(sigName: "notify::gender", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gender", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gender", ...args: any[]): void
    connect(sigName: "notify::groups", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::groups", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::groups", ...args: any[]): void
    connect(sigName: "notify::im-addresses", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-addresses", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-addresses", ...args: any[]): void
    connect(sigName: "notify::local-ids", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-ids", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-ids", ...args: any[]): void
    connect(sigName: "notify::structured-name", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::structured-name", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::structured-name", ...args: any[]): void
    connect(sigName: "notify::full-name", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::full-name", ...args: any[]): void
    connect(sigName: "notify::nickname", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nickname", ...args: any[]): void
    connect(sigName: "notify::notes", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notes", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::notes", ...args: any[]): void
    connect(sigName: "notify::phone-numbers", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phone-numbers", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::phone-numbers", ...args: any[]): void
    connect(sigName: "notify::roles", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::roles", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::roles", ...args: any[]): void
    connect(sigName: "notify::urls", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urls", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urls", ...args: any[]): void
    connect(sigName: "notify::postal-addresses", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::postal-addresses", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::postal-addresses", ...args: any[]): void
    connect(sigName: "notify::web-service-addresses", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::web-service-addresses", callback: (($obj: FullPersona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::web-service-addresses", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class FullPersona extends Persona {

    // Own properties of FolksDummy-0.6.FolksDummy.FullPersona

    static name: string
    static $gtype: GObject.GType<FullPersona>

    // Constructors of FolksDummy-0.6.FolksDummy.FullPersona

    constructor(config?: FullPersona.ConstructorProperties) 
    constructor(store: PersonaStore, contact_id: string, is_user: boolean, linkable_properties: string[]) 
    static new(store: PersonaStore, contact_id: string, is_user: boolean, linkable_properties: string[]): FullPersona

    // Overloads of new

    static new(store: PersonaStore, contact_id: string, is_user: boolean, linkable_properties: string[]): Persona
    _init(config?: FullPersona.ConstructorProperties): void
}

export module PersonaStore {

    // Constructor properties interface

    export interface ConstructorProperties extends Folks.PersonaStore.ConstructorProperties {

        // Own constructor properties of FolksDummy-0.6.FolksDummy.PersonaStore

        persona_type?: GObject.GType | null
        personaType?: GObject.GType | null
    }

}

export interface PersonaStore {

    // Own properties of FolksDummy-0.6.FolksDummy.PersonaStore

    persona_type: GObject.GType
    personaType: GObject.GType

    // Owm methods of FolksDummy-0.6.FolksDummy.PersonaStore

    update_capabilities(can_add_personas: Folks.MaybeBool, can_alias_personas: Folks.MaybeBool, can_remove_personas: Folks.MaybeBool): void
    freeze_personas_changed(): void
    thaw_personas_changed(): void
    register_personas(personas: Gee.Set): void
    unregister_personas(personas: Gee.Set): void
    reach_quiescence(): void
    update_is_user_set_default(is_user_set_default: boolean): void
    update_trust_level(trust_level: Folks.PersonaStoreTrust): void
    set_add_persona_from_details_mock(mock?: any | null): void
    set_remove_persona_mock(mock?: any | null): void
    set_prepare_mock(mock?: any | null): void
    get_persona_type(): GObject.GType
    set_persona_type(value: GObject.GType): void

    // Class property signals of FolksDummy-0.6.FolksDummy.PersonaStore

    connect(sigName: "notify::persona-type", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::persona-type", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::persona-type", ...args: any[]): void
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

export class PersonaStore extends Folks.PersonaStore {

    // Own properties of FolksDummy-0.6.FolksDummy.PersonaStore

    static name: string
    static $gtype: GObject.GType<PersonaStore>

    // Constructors of FolksDummy-0.6.FolksDummy.PersonaStore

    constructor(config?: PersonaStore.ConstructorProperties) 
    constructor(id: string, display_name: string, always_writeable_properties: string[]) 
    static new(id: string, display_name: string, always_writeable_properties: string[]): PersonaStore
    _init(config?: PersonaStore.ConstructorProperties): void
}

export module Persona {

    // Constructor properties interface

    export interface ConstructorProperties extends Folks.Persona.ConstructorProperties {

        // Own constructor properties of FolksDummy-0.6.FolksDummy.Persona

        property_change_delay?: number | null
        propertyChangeDelay?: number | null
    }

}

export interface Persona {

    // Own properties of FolksDummy-0.6.FolksDummy.Persona

    property_change_delay: number
    propertyChangeDelay: number

    // Owm methods of FolksDummy-0.6.FolksDummy.Persona

    update_writeable_properties(writeable_properties: string[]): void
    update_linkable_properties(linkable_properties: string[]): void
    change_property(property_name: string, callback: any, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    change_property_finish(_res_: Gio.AsyncResult): void
    get_property_change_delay(): number
    set_property_change_delay(value: number): void

    // Class property signals of FolksDummy-0.6.FolksDummy.Persona

    connect(sigName: "notify::property-change-delay", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::property-change-delay", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::property-change-delay", ...args: any[]): void
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

export class Persona extends Folks.Persona {

    // Own properties of FolksDummy-0.6.FolksDummy.Persona

    static name: string
    static $gtype: GObject.GType<Persona>

    // Constructors of FolksDummy-0.6.FolksDummy.Persona

    constructor(config?: Persona.ConstructorProperties) 
    constructor(store: PersonaStore, contact_id: string, is_user: boolean, linkable_properties: string[]) 
    static new(store: PersonaStore, contact_id: string, is_user: boolean, linkable_properties: string[]): Persona
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