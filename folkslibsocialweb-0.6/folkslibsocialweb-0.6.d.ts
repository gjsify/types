/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './folkslibsocialweb-0.6-ambient.d.ts';
import './folkslibsocialweb-0.6-import.d.ts';
/**
 * FolksLibsocialweb-0.6
 */

import type SocialWebClient from '@girs/socialwebclient-0.25';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Folks from '@girs/folks-0.6';
import type Gee from '@girs/gee-0.8';

export namespace FolksLibsocialweb {
    module Persona {
        // Constructor properties interface
    }

    class Persona extends Folks.Persona {
        // Own properties of FolksLibsocialweb-0.6.Persona

        lsw_contact: SocialWebClient.Contact;
        lswContact: SocialWebClient.Contact;

        // Constructors of FolksLibsocialweb-0.6.Persona

        static ['new'](store: PersonaStore, contact: SocialWebClient.Contact): Persona;

        // Owm methods of FolksLibsocialweb-0.6.Persona

        static get_contact_id(contact: SocialWebClient.Contact): string;

        // Owm methods of FolksLibsocialweb-0.6.Persona

        update(contact: SocialWebClient.Contact): void;
        get_lsw_contact(): SocialWebClient.Contact;
    }

    module PersonaStore {
        // Constructor properties interface
    }

    class PersonaStore extends Folks.PersonaStore {
        // Own properties of FolksLibsocialweb-0.6.PersonaStore

        service: SocialWebClient.ClientService;

        // Constructors of FolksLibsocialweb-0.6.PersonaStore

        static ['new'](service: SocialWebClient.ClientService): PersonaStore;

        // Owm methods of FolksLibsocialweb-0.6.PersonaStore

        get_service(): SocialWebClient.ClientService;
    }

    class PersonaClass {}

    class PersonaPrivate {}

    class PersonaStoreClass {}

    class PersonaStorePrivate {}

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

export default FolksLibsocialweb;
// END
