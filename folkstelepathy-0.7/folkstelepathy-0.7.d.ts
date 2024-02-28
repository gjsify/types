/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './folkstelepathy-0.7-ambient.d.ts';
import './folkstelepathy-0.7-import.d.ts';
/**
 * FolksTelepathy-0.7
 */

import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type TelepathyGLib from '@girs/telepathyglib-0.12';
import type Folks from '@girs/folks-0.7';

export namespace FolksTelepathy {
    module PersonaStore {
        // Constructor properties interface
    }

    class PersonaStore extends Folks.PersonaStore {
        // Own properties of FolksTelepathy-0.7.PersonaStore

        account: TelepathyGLib.Account;

        // Constructors of FolksTelepathy-0.7.PersonaStore

        static ['new'](account: TelepathyGLib.Account): PersonaStore;

        // Owm methods of FolksTelepathy-0.7.PersonaStore

        static list_persona_stores(): Gee.Map;
        static dup_for_account(account: TelepathyGLib.Account): PersonaStore;

        // Owm methods of FolksTelepathy-0.7.PersonaStore

        get_account(): TelepathyGLib.Account;
    }

    module Persona {
        // Constructor properties interface
    }

    class Persona extends Folks.Persona {
        // Own properties of FolksTelepathy-0.7.Persona

        is_in_contact_list: boolean;
        isInContactList: boolean;
        contact: TelepathyGLib.Contact;

        // Constructors of FolksTelepathy-0.7.Persona

        static ['new'](contact: TelepathyGLib.Contact, store: PersonaStore): Persona;

        // Owm methods of FolksTelepathy-0.7.Persona

        static dup_for_contact(contact: TelepathyGLib.Contact): Persona | null;

        // Owm methods of FolksTelepathy-0.7.Persona

        get_is_in_contact_list(): boolean;
        set_is_in_contact_list(value: boolean): void;
        get_contact(): TelepathyGLib.Contact | null;
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

export default FolksTelepathy;
// END
