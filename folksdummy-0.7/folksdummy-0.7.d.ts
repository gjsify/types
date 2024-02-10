/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './folksdummy-0.7-ambient.d.ts';
import './folksdummy-0.7-import.d.ts';
/**
 * FolksDummy-0.7
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gee from '@girs/gee-0.8';
import type Folks from '@girs/folks-0.7';

export namespace FolksDummy {
    module Backend {
        // Constructor properties interface
    }

    class Backend extends Folks.Backend {
        // Constructors of FolksDummy-0.7.Backend

        static ['new'](): Backend;

        // Owm methods of FolksDummy-0.7.Backend

        register_persona_stores(stores: Gee.Set, enable_stores: boolean): void;
        unregister_persona_stores(stores: Gee.Set): void;
    }

    module FullPersona {
        // Constructor properties interface
    }

    class FullPersona extends Persona {
        // Constructors of FolksDummy-0.7.FullPersona

        static ['new'](
            store: PersonaStore,
            contact_id: string,
            is_user: boolean,
            linkable_properties: string[],
        ): FullPersona;

        // Owm methods of FolksDummy-0.7.FullPersona

        update_gender(gender: Folks.Gender): void;
        update_calendar_event_id(calendar_event_id?: string | null): void;
        update_birthday(birthday?: GLib.DateTime | null): void;
        update_roles(roles: Gee.Set): void;
        update_groups(groups: Gee.Set): void;
        update_web_service_addresses(web_service_addresses: Gee.MultiMap): void;
        update_email_addresses(email_addresses: Gee.Set): void;
        update_notes(notes: Gee.Set): void;
        update_full_name(full_name: string): void;
        update_nickname(nickname: string): void;
        update_structured_name(structured_name?: Folks.StructuredName | null): void;
        update_avatar(avatar?: Gio.LoadableIcon | null): void;
        update_urls(urls: Gee.Set): void;
        update_im_addresses(im_addresses: Gee.MultiMap): void;
        update_phone_numbers(phone_numbers: Gee.Set): void;
        update_postal_addresses(postal_addresses: Gee.Set): void;
        update_local_ids(local_ids: Gee.Set): void;
        update_is_favourite(is_favourite: boolean): void;
        update_anti_links(anti_links: Gee.Set): void;
    }

    module PersonaStore {
        // Constructor properties interface
    }

    class PersonaStore extends Folks.PersonaStore {
        // Own properties of FolksDummy-0.7.PersonaStore

        persona_type: GObject.GType;
        personaType: GObject.GType;

        // Constructors of FolksDummy-0.7.PersonaStore

        static ['new'](id: string, display_name: string, always_writeable_properties: string[]): PersonaStore;

        // Owm methods of FolksDummy-0.7.PersonaStore

        update_capabilities(
            can_add_personas: Folks.MaybeBool,
            can_alias_personas: Folks.MaybeBool,
            can_remove_personas: Folks.MaybeBool,
        ): void;
        freeze_personas_changed(): void;
        thaw_personas_changed(): void;
        register_personas(personas: Gee.Set): void;
        unregister_personas(personas: Gee.Set): void;
        reach_quiescence(): void;
        update_is_user_set_default(is_user_set_default: boolean): void;
        update_trust_level(trust_level: Folks.PersonaStoreTrust): void;
        set_add_persona_from_details_mock(mock?: PersonaStoreAddPersonaFromDetailsMock | null): void;
        set_remove_persona_mock(mock?: PersonaStoreRemovePersonaMock | null): void;
        set_prepare_mock(mock?: PersonaStorePrepareMock | null): void;
        get_persona_type(): GObject.GType;
        set_persona_type(value: GObject.GType): void;
    }

    module Persona {
        // Constructor properties interface
    }

    class Persona extends Folks.Persona {
        // Own properties of FolksDummy-0.7.Persona

        property_change_delay: number;
        propertyChangeDelay: number;

        // Constructors of FolksDummy-0.7.Persona

        static ['new'](
            store: PersonaStore,
            contact_id: string,
            is_user: boolean,
            linkable_properties: string[],
        ): Persona;

        // Owm methods of FolksDummy-0.7.Persona

        update_writeable_properties(writeable_properties: string[]): void;
        update_linkable_properties(linkable_properties: string[]): void;
        change_property(
            property_name: string,
            callback: PersonaChangePropertyCallback,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        change_property_finish(_res_: Gio.AsyncResult): void;
        get_property_change_delay(): number;
        set_property_change_delay(value: number): void;
    }

    class BackendClass {}

    class BackendPrivate {}

    class FullPersonaClass {}

    class FullPersonaPrivate {}

    class PersonaStoreClass {}

    class PersonaStorePrivate {}

    class PersonaClass {}

    class PersonaPrivate {}

    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default FolksDummy;
// END
