/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './folkseds-0.6-ambient.d.ts';
import './folkseds-0.6-import.d.ts';
/**
 * FolksEds-0.6
 */

import type EBookContacts from '@girs/ebookcontacts-1.2';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type EDataServer from '@girs/edataserver-1.2';
import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-3.0';
import type Json from '@girs/json-1.0';
import type Camel from '@girs/camel-1.2';
import type Gee from '@girs/gee-0.8';
import type Folks from '@girs/folks-0.6';

export namespace FolksEds {
    module PersonaStore {
        // Constructor properties interface
    }

    class PersonaStore extends Folks.PersonaStore {
        // Own properties of FolksEds-0.6.PersonaStore

        source: EDataServer.Source;

        // Constructors of FolksEds-0.6.PersonaStore

        static ['new'](s: EDataServer.Source): PersonaStore;

        static with_source_registry(r: EDataServer.SourceRegistry, s: EDataServer.Source): PersonaStore;

        // Owm methods of FolksEds-0.6.PersonaStore

        static create_address_book(id: string, _callback_: Gio.AsyncReadyCallback<PersonaStore>): void;
        static create_address_book_finish(_res_: Gio.AsyncResult): void;
        static remove_address_book(store: PersonaStore, _callback_: Gio.AsyncReadyCallback<PersonaStore>): void;
        static remove_address_book_finish(_res_: Gio.AsyncResult): void;

        // Owm methods of FolksEds-0.6.PersonaStore

        get_source(): EDataServer.Source;
    }

    module Persona {
        // Constructor properties interface
    }

    class Persona extends Folks.Persona {
        // Own properties of FolksEds-0.6.Persona

        contact: EBookContacts.Contact;
        contact_id: string;
        contactId: string;
        system_groups: Gee.Set;
        systemGroups: Gee.Set;
        in_google_personal_group: boolean;
        inGooglePersonalGroup: boolean;

        // Constructors of FolksEds-0.6.Persona

        static ['new'](store: PersonaStore, contact: EBookContacts.Contact): Persona;

        // Owm methods of FolksEds-0.6.Persona

        change_system_groups(system_groups: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_system_groups_finish(_res_: Gio.AsyncResult): void;
        change_in_google_personal_group(in_personal: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_in_google_personal_group_finish(_res_: Gio.AsyncResult): void;
        get_contact(): EBookContacts.Contact;
        get_contact_id(): string;
        get_system_groups(): Gee.Set;
        set_system_groups(value: Gee.Set): void;
        get_in_google_personal_group(): boolean;
        set_in_google_personal_group(value: boolean): void;
    }

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

export default FolksEds;
// END
