// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * FolksLibsocialweb-0.6
 */

import type * as Gjs from './Gjs';
import type SocialWebClient from './SocialWebClient-0.25';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Folks from './Folks-0.6';
import type Gee from './Gee-0.8';

export namespace FolksLibsocialweb {

interface Persona_ConstructProps extends Folks.AvatarDetails_ConstructProps, Folks.GenderDetails_ConstructProps, Folks.ImDetails_ConstructProps, Folks.NameDetails_ConstructProps, Folks.UrlDetails_ConstructProps, Folks.WebServiceDetails_ConstructProps, Folks.Persona_ConstructProps {

    // Own constructor properties of FolksLibsocialweb-0.6.FolksLibsocialweb.Persona

    lsw_contact?: SocialWebClient.Contact | null
}

interface Persona extends Folks.AvatarDetails, Folks.GenderDetails, Folks.ImDetails, Folks.NameDetails, Folks.UrlDetails, Folks.WebServiceDetails {

    // Own properties of FolksLibsocialweb-0.6.FolksLibsocialweb.Persona

    readonly lsw_contact: SocialWebClient.Contact

    // Own fields of FolksLibsocialweb-0.6.FolksLibsocialweb.Persona

    parent_instance: Folks.Persona
    priv: PersonaPrivate

    // Owm methods of FolksLibsocialweb-0.6.FolksLibsocialweb.Persona

    update(contact: SocialWebClient.Contact): void
    get_lsw_contact(): SocialWebClient.Contact

    // Class property signals of FolksLibsocialweb-0.6.FolksLibsocialweb.Persona

    connect(sigName: "notify::lsw-contact", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lsw-contact", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::lsw-contact", ...args: any[]): void
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
    connect(sigName: "notify::avatar", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::avatar", ...args: any[]): void
    connect(sigName: "notify::gender", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gender", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gender", ...args: any[]): void
    connect(sigName: "notify::im-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-addresses", ...args: any[]): void
    connect(sigName: "notify::structured-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::structured-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::structured-name", ...args: any[]): void
    connect(sigName: "notify::full-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::full-name", ...args: any[]): void
    connect(sigName: "notify::nickname", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nickname", ...args: any[]): void
    connect(sigName: "notify::urls", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urls", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urls", ...args: any[]): void
    connect(sigName: "notify::web-service-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::web-service-addresses", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::web-service-addresses", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Persona extends Folks.Persona {

    // Own properties of FolksLibsocialweb-0.6.FolksLibsocialweb.Persona

    static name: string
    static $gtype: GObject.GType<Persona>

    // Constructors of FolksLibsocialweb-0.6.FolksLibsocialweb.Persona

    constructor(config?: Persona_ConstructProps) 
    constructor(store: PersonaStore, contact: SocialWebClient.Contact) 
    static new(store: PersonaStore, contact: SocialWebClient.Contact): Persona
    _init(config?: Persona_ConstructProps): void
    static get_contact_id(contact: SocialWebClient.Contact): string | null
}

interface PersonaStore_ConstructProps extends Folks.PersonaStore_ConstructProps {

    // Own constructor properties of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaStore

    service?: SocialWebClient.ClientService | null
}

interface PersonaStore {

    // Own properties of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaStore

    readonly service: SocialWebClient.ClientService

    // Own fields of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaStore

    parent_instance: Folks.PersonaStore
    priv: PersonaStorePrivate

    // Owm methods of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaStore

    get_service(): SocialWebClient.ClientService

    // Class property signals of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaStore

    connect(sigName: "notify::service", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service", ...args: any[]): void
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

    // Own properties of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaStore

    static name: string
    static $gtype: GObject.GType<PersonaStore>

    // Constructors of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaStore

    constructor(config?: PersonaStore_ConstructProps) 
    constructor(service: SocialWebClient.ClientService) 
    static new(service: SocialWebClient.ClientService): PersonaStore
    _init(config?: PersonaStore_ConstructProps): void
}

interface PersonaClass {

    // Own fields of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaClass

    parent_class: Folks.PersonaClass
}

abstract class PersonaClass {

    // Own properties of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaClass

    static name: string
}

interface PersonaPrivate {
}

class PersonaPrivate {

    // Own properties of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaPrivate

    static name: string
}

interface PersonaStoreClass {

    // Own fields of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaStoreClass

    parent_class: Folks.PersonaStoreClass
}

abstract class PersonaStoreClass {

    // Own properties of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaStoreClass

    static name: string
}

interface PersonaStorePrivate {
}

class PersonaStorePrivate {

    // Own properties of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaStorePrivate

    static name: string
}

}
export default FolksLibsocialweb;