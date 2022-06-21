// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * FolksDummy-0.6
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type Gee from './Gee-0.8';
import type Folks from './Folks-0.6';

export namespace FolksDummy {

interface Backend_ConstructProps extends Folks.Backend_ConstructProps {
}

interface Backend {

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

class Backend extends Folks.Backend {

    // Own properties of FolksDummy-0.6.FolksDummy.Backend

    static name: string
    static $gtype: GObject.GType<Backend>

    // Constructors of FolksDummy-0.6.FolksDummy.Backend

    constructor(config?: Backend_ConstructProps) 
    constructor() 
    static new(): Backend
    _init(config?: Backend_ConstructProps): void
}

interface FullPersona_ConstructProps extends Folks.AntiLinkable_ConstructProps, Folks.AvatarDetails_ConstructProps, Folks.BirthdayDetails_ConstructProps, Folks.EmailDetails_ConstructProps, Folks.FavouriteDetails_ConstructProps, Folks.GenderDetails_ConstructProps, Folks.GroupDetails_ConstructProps, Folks.ImDetails_ConstructProps, Folks.LocalIdDetails_ConstructProps, Folks.NameDetails_ConstructProps, Folks.NoteDetails_ConstructProps, Folks.PhoneDetails_ConstructProps, Folks.RoleDetails_ConstructProps, Folks.UrlDetails_ConstructProps, Folks.PostalAddressDetails_ConstructProps, Folks.WebServiceDetails_ConstructProps, Persona_ConstructProps {
}

interface FullPersona extends Folks.AntiLinkable, Folks.AvatarDetails, Folks.BirthdayDetails, Folks.EmailDetails, Folks.FavouriteDetails, Folks.GenderDetails, Folks.GroupDetails, Folks.ImDetails, Folks.LocalIdDetails, Folks.NameDetails, Folks.NoteDetails, Folks.PhoneDetails, Folks.RoleDetails, Folks.UrlDetails, Folks.PostalAddressDetails, Folks.WebServiceDetails {

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

class FullPersona extends Persona {

    // Own properties of FolksDummy-0.6.FolksDummy.FullPersona

    static name: string
    static $gtype: GObject.GType<FullPersona>

    // Constructors of FolksDummy-0.6.FolksDummy.FullPersona

    constructor(config?: FullPersona_ConstructProps) 
    constructor(store: PersonaStore, contact_id: string, is_user: boolean, linkable_properties: string[]) 
    static new(store: PersonaStore, contact_id: string, is_user: boolean, linkable_properties: string[]): FullPersona

    // Overloads of new

    static new(store: PersonaStore, contact_id: string, is_user: boolean, linkable_properties: string[]): Persona
    _init(config?: FullPersona_ConstructProps): void
}

interface PersonaStore_ConstructProps extends Folks.PersonaStore_ConstructProps {

    // Own constructor properties of FolksDummy-0.6.FolksDummy.PersonaStore

    persona_type?: GObject.GType | null
}

interface PersonaStore {

    // Own properties of FolksDummy-0.6.FolksDummy.PersonaStore

    persona_type: GObject.GType

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

class PersonaStore extends Folks.PersonaStore {

    // Own properties of FolksDummy-0.6.FolksDummy.PersonaStore

    static name: string
    static $gtype: GObject.GType<PersonaStore>

    // Constructors of FolksDummy-0.6.FolksDummy.PersonaStore

    constructor(config?: PersonaStore_ConstructProps) 
    constructor(id: string, display_name: string, always_writeable_properties: string[]) 
    static new(id: string, display_name: string, always_writeable_properties: string[]): PersonaStore
    _init(config?: PersonaStore_ConstructProps): void
}

interface Persona_ConstructProps extends Folks.Persona_ConstructProps {

    // Own constructor properties of FolksDummy-0.6.FolksDummy.Persona

    property_change_delay?: number | null
}

interface Persona {

    // Own properties of FolksDummy-0.6.FolksDummy.Persona

    property_change_delay: number

    // Owm methods of FolksDummy-0.6.FolksDummy.Persona

    update_writeable_properties(writeable_properties: string[]): void
    update_linkable_properties(linkable_properties: string[]): void
    change_property(property_name: string, callback: any, _callback_?: Gio.AsyncReadyCallback | null): void
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

class Persona extends Folks.Persona {

    // Own properties of FolksDummy-0.6.FolksDummy.Persona

    static name: string
    static $gtype: GObject.GType<Persona>

    // Constructors of FolksDummy-0.6.FolksDummy.Persona

    constructor(config?: Persona_ConstructProps) 
    constructor(store: PersonaStore, contact_id: string, is_user: boolean, linkable_properties: string[]) 
    static new(store: PersonaStore, contact_id: string, is_user: boolean, linkable_properties: string[]): Persona
    _init(config?: Persona_ConstructProps): void
}

interface BackendClass {
}

abstract class BackendClass {

    // Own properties of FolksDummy-0.6.FolksDummy.BackendClass

    static name: string
}

interface BackendPrivate {
}

class BackendPrivate {

    // Own properties of FolksDummy-0.6.FolksDummy.BackendPrivate

    static name: string
}

interface FullPersonaClass {
}

abstract class FullPersonaClass {

    // Own properties of FolksDummy-0.6.FolksDummy.FullPersonaClass

    static name: string
}

interface FullPersonaPrivate {
}

class FullPersonaPrivate {

    // Own properties of FolksDummy-0.6.FolksDummy.FullPersonaPrivate

    static name: string
}

interface PersonaStoreClass {
}

abstract class PersonaStoreClass {

    // Own properties of FolksDummy-0.6.FolksDummy.PersonaStoreClass

    static name: string
}

interface PersonaStorePrivate {
}

class PersonaStorePrivate {

    // Own properties of FolksDummy-0.6.FolksDummy.PersonaStorePrivate

    static name: string
}

interface PersonaClass {
}

abstract class PersonaClass {

    // Own properties of FolksDummy-0.6.FolksDummy.PersonaClass

    static name: string
}

interface PersonaPrivate {
}

class PersonaPrivate {

    // Own properties of FolksDummy-0.6.FolksDummy.PersonaPrivate

    static name: string
}

}
export default FolksDummy;