
/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type SocialWebClient from '@girs/socialwebclient-0.25';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Folks from '@girs/folks-0.6';
import type Gee from '@girs/gee-0.8';

export namespace FolksLibsocialweb {

    /**
     * FolksLibsocialweb-0.6
     */


    namespace Persona {
        // Signal signatures
        interface SignalSignatures extends Folks.Persona.SignalSignatures {
            "notify::lsw-contact": (pspec: GObject.ParamSpec) => void;
            "notify::iid": (pspec: GObject.ParamSpec) => void;
            "notify::uid": (pspec: GObject.ParamSpec) => void;
            "notify::display-id": (pspec: GObject.ParamSpec) => void;
            "notify::is-user": (pspec: GObject.ParamSpec) => void;
            "notify::store": (pspec: GObject.ParamSpec) => void;
            "notify::individual": (pspec: GObject.ParamSpec) => void;
            "notify::linkable-properties": (pspec: GObject.ParamSpec) => void;
            "notify::writeable-properties": (pspec: GObject.ParamSpec) => void;
            "notify::avatar": (pspec: GObject.ParamSpec) => void;
            "notify::gender": (pspec: GObject.ParamSpec) => void;
            "notify::im-addresses": (pspec: GObject.ParamSpec) => void;
            "notify::structured-name": (pspec: GObject.ParamSpec) => void;
            "notify::full-name": (pspec: GObject.ParamSpec) => void;
            "notify::nickname": (pspec: GObject.ParamSpec) => void;
            "notify::urls": (pspec: GObject.ParamSpec) => void;
            "notify::web-service-addresses": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Folks.Persona.ConstructorProps, Folks.AvatarDetails.ConstructorProps, Folks.GenderDetails.ConstructorProps, Folks.ImDetails.ConstructorProps, Folks.NameDetails.ConstructorProps, Folks.UrlDetails.ConstructorProps, Folks.WebServiceDetails.ConstructorProps {
            lsw_contact: SocialWebClient.Contact;
            lswContact: SocialWebClient.Contact;
        }
    }

    /**
     * @gir-type Class
     */
    class Persona extends Folks.Persona implements Folks.AvatarDetails, Folks.GenderDetails, Folks.ImDetails, Folks.NameDetails, Folks.UrlDetails, Folks.WebServiceDetails {
        static $gtype: GObject.GType<Persona>;

        // Properties
        /**
         * @construct-only
         */
        get lsw_contact(): SocialWebClient.Contact;

        /**
         * @construct-only
         */
        get lswContact(): SocialWebClient.Contact;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Persona.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Persona.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](store: PersonaStore, contact: SocialWebClient.Contact): Persona;

        // Signals
        /** @signal */
        connect<K extends keyof Persona.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Persona.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Persona.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Persona.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Persona.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Persona.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param contact 
         */
        static get_contact_id(contact: SocialWebClient.Contact): string;

        // Methods
        /**
         * @param contact 
         */
        update(contact: SocialWebClient.Contact): void;

        get_lsw_contact(): SocialWebClient.Contact;

        /** @category Inherited from Folks.AvatarDetails */
        get avatar(): Gio.LoadableIcon;
        set avatar(val: Gio.LoadableIcon);

        /** @category Inherited from Folks.GenderDetails */
        get gender(): Folks.Gender;
        set gender(val: Folks.Gender);

        /** @category Inherited from Folks.ImDetails */
        get im_addresses(): Gee.MultiMap;
        set im_addresses(val: Gee.MultiMap);

        /** @category Inherited from Folks.ImDetails */
        get imAddresses(): Gee.MultiMap;
        set imAddresses(val: Gee.MultiMap);

        /** @category Inherited from Folks.NameDetails */
        get structured_name(): Folks.StructuredName;
        set structured_name(val: Folks.StructuredName);

        /** @category Inherited from Folks.NameDetails */
        get structuredName(): Folks.StructuredName;
        set structuredName(val: Folks.StructuredName);

        /** @category Inherited from Folks.NameDetails */
        get full_name(): string;
        set full_name(val: string);

        /** @category Inherited from Folks.NameDetails */
        get fullName(): string;
        set fullName(val: string);

        /** @category Inherited from Folks.NameDetails */
        get nickname(): string;
        set nickname(val: string);

        /** @category Inherited from Folks.UrlDetails */
        get urls(): Gee.Set;
        set urls(val: Gee.Set);

        /** @category Inherited from Folks.WebServiceDetails */
        get web_service_addresses(): Gee.MultiMap;
        set web_service_addresses(val: Gee.MultiMap);

        /** @category Inherited from Folks.WebServiceDetails */
        get webServiceAddresses(): Gee.MultiMap;
        set webServiceAddresses(val: Gee.MultiMap);

        /**
         * @param avatar 
         */
        change_avatar(avatar: Gio.LoadableIcon): globalThis.Promise<void>;

        /**
         * @param avatar 
         * @param _callback_ 
         */
        change_avatar(avatar: Gio.LoadableIcon, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param avatar 
         * @param _callback_ 
         */
        change_avatar(avatar: Gio.LoadableIcon, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        change_avatar_finish(_res_: Gio.AsyncResult): void;

        get_avatar(): Gio.LoadableIcon;

        /**
         * @param value 
         */
        set_avatar(value: Gio.LoadableIcon): void;

        /**
         * @param avatar 
         * @param _callback_ 
         * @virtual
         */
        vfunc_change_avatar(avatar: Gio.LoadableIcon, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_change_avatar_finish(_res_: Gio.AsyncResult): void;

        /**
         * @virtual
         */
        vfunc_get_avatar(): Gio.LoadableIcon;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_avatar(value: Gio.LoadableIcon): void;

        /**
         * @param gender 
         */
        change_gender(gender: Folks.Gender): globalThis.Promise<void>;

        /**
         * @param gender 
         * @param _callback_ 
         */
        change_gender(gender: Folks.Gender, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param gender 
         * @param _callback_ 
         */
        change_gender(gender: Folks.Gender, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        change_gender_finish(_res_: Gio.AsyncResult): void;

        get_gender(): Folks.Gender;

        /**
         * @param value 
         */
        set_gender(value: Folks.Gender): void;

        /**
         * @param gender 
         * @param _callback_ 
         * @virtual
         */
        vfunc_change_gender(gender: Folks.Gender, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_change_gender_finish(_res_: Gio.AsyncResult): void;

        /**
         * @virtual
         */
        vfunc_get_gender(): Folks.Gender;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_gender(value: Folks.Gender): void;

        /**
         * @param im_addresses 
         */
        change_im_addresses(im_addresses: Gee.MultiMap): globalThis.Promise<void>;

        /**
         * @param im_addresses 
         * @param _callback_ 
         */
        change_im_addresses(im_addresses: Gee.MultiMap, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param im_addresses 
         * @param _callback_ 
         */
        change_im_addresses(im_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        change_im_addresses_finish(_res_: Gio.AsyncResult): void;

        get_im_addresses(): Gee.MultiMap;

        /**
         * @param value 
         */
        set_im_addresses(value: Gee.MultiMap): void;

        /**
         * @param im_addresses 
         * @param _callback_ 
         * @virtual
         */
        vfunc_change_im_addresses(im_addresses: Gee.MultiMap, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_change_im_addresses_finish(_res_: Gio.AsyncResult): void;

        /**
         * @virtual
         */
        vfunc_get_im_addresses(): Gee.MultiMap;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_im_addresses(value: Gee.MultiMap): void;

        /**
         * @param name 
         */
        change_structured_name(name: Folks.StructuredName): globalThis.Promise<void>;

        /**
         * @param name 
         * @param _callback_ 
         */
        change_structured_name(name: Folks.StructuredName, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param name 
         * @param _callback_ 
         */
        change_structured_name(name: Folks.StructuredName, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        change_structured_name_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param full_name 
         */
        change_full_name(full_name: string): globalThis.Promise<void>;

        /**
         * @param full_name 
         * @param _callback_ 
         */
        change_full_name(full_name: string, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param full_name 
         * @param _callback_ 
         */
        change_full_name(full_name: string, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        change_full_name_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param nickname 
         */
        change_nickname(nickname: string): globalThis.Promise<void>;

        /**
         * @param nickname 
         * @param _callback_ 
         */
        change_nickname(nickname: string, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param nickname 
         * @param _callback_ 
         */
        change_nickname(nickname: string, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        change_nickname_finish(_res_: Gio.AsyncResult): void;

        get_structured_name(): Folks.StructuredName;

        /**
         * @param value 
         */
        set_structured_name(value: Folks.StructuredName): void;

        get_full_name(): string;

        /**
         * @param value 
         */
        set_full_name(value: string): void;

        get_nickname(): string;

        /**
         * @param value 
         */
        set_nickname(value: string): void;

        /**
         * @param name 
         * @param _callback_ 
         * @virtual
         */
        vfunc_change_structured_name(name: Folks.StructuredName, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_change_structured_name_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param full_name 
         * @param _callback_ 
         * @virtual
         */
        vfunc_change_full_name(full_name: string, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_change_full_name_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param nickname 
         * @param _callback_ 
         * @virtual
         */
        vfunc_change_nickname(nickname: string, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_change_nickname_finish(_res_: Gio.AsyncResult): void;

        /**
         * @virtual
         */
        vfunc_get_structured_name(): Folks.StructuredName;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_structured_name(value: Folks.StructuredName): void;

        /**
         * @virtual
         */
        vfunc_get_full_name(): string;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_full_name(value: string): void;

        /**
         * @virtual
         */
        vfunc_get_nickname(): string;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_nickname(value: string): void;

        /**
         * @param urls 
         */
        change_urls(urls: Gee.Set): globalThis.Promise<void>;

        /**
         * @param urls 
         * @param _callback_ 
         */
        change_urls(urls: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param urls 
         * @param _callback_ 
         */
        change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        change_urls_finish(_res_: Gio.AsyncResult): void;

        get_urls(): Gee.Set;

        /**
         * @param value 
         */
        set_urls(value: Gee.Set): void;

        /**
         * @param urls 
         * @param _callback_ 
         * @virtual
         */
        vfunc_change_urls(urls: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_change_urls_finish(_res_: Gio.AsyncResult): void;

        /**
         * @virtual
         */
        vfunc_get_urls(): Gee.Set;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_urls(value: Gee.Set): void;

        /**
         * @param web_service_addresses 
         */
        change_web_service_addresses(web_service_addresses: Gee.MultiMap): globalThis.Promise<void>;

        /**
         * @param web_service_addresses 
         * @param _callback_ 
         */
        change_web_service_addresses(web_service_addresses: Gee.MultiMap, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param web_service_addresses 
         * @param _callback_ 
         */
        change_web_service_addresses(web_service_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        change_web_service_addresses_finish(_res_: Gio.AsyncResult): void;

        get_web_service_addresses(): Gee.MultiMap;

        /**
         * @param value 
         */
        set_web_service_addresses(value: Gee.MultiMap): void;

        /**
         * @param web_service_addresses 
         * @param _callback_ 
         * @virtual
         */
        vfunc_change_web_service_addresses(web_service_addresses: Gee.MultiMap, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_change_web_service_addresses_finish(_res_: Gio.AsyncResult): void;

        /**
         * @virtual
         */
        vfunc_get_web_service_addresses(): Gee.MultiMap;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_web_service_addresses(value: Gee.MultiMap): void;
    }


    namespace PersonaStore {
        // Signal signatures
        interface SignalSignatures extends Folks.PersonaStore.SignalSignatures {
            "notify::service": (pspec: GObject.ParamSpec) => void;
            "notify::type-id": (pspec: GObject.ParamSpec) => void;
            "notify::display-name": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::personas": (pspec: GObject.ParamSpec) => void;
            "notify::can-add-personas": (pspec: GObject.ParamSpec) => void;
            "notify::can-alias-personas": (pspec: GObject.ParamSpec) => void;
            "notify::can-group-personas": (pspec: GObject.ParamSpec) => void;
            "notify::can-remove-personas": (pspec: GObject.ParamSpec) => void;
            "notify::is-prepared": (pspec: GObject.ParamSpec) => void;
            "notify::is-quiescent": (pspec: GObject.ParamSpec) => void;
            "notify::is-writeable": (pspec: GObject.ParamSpec) => void;
            "notify::trust-level": (pspec: GObject.ParamSpec) => void;
            "notify::always-writeable-properties": (pspec: GObject.ParamSpec) => void;
            "notify::is-primary-store": (pspec: GObject.ParamSpec) => void;
            "notify::is-user-set-default": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Folks.PersonaStore.ConstructorProps {
            service: SocialWebClient.ClientService;
        }
    }

    /**
     * @gir-type Class
     */
    class PersonaStore extends Folks.PersonaStore {
        static $gtype: GObject.GType<PersonaStore>;

        // Properties
        /**
         * @construct-only
         */
        get service(): SocialWebClient.ClientService;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PersonaStore.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PersonaStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](service: SocialWebClient.ClientService): PersonaStore;

        // Signals
        /** @signal */
        connect<K extends keyof PersonaStore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PersonaStore.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PersonaStore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PersonaStore.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PersonaStore.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PersonaStore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_service(): SocialWebClient.ClientService;
    }


    /**
     * @gir-type Alias
     */
    type PersonaClass = typeof Persona;

    /**
     * @gir-type Struct
     */
    abstract class PersonaPrivate {
        static $gtype: GObject.GType<PersonaPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type PersonaStoreClass = typeof PersonaStore;

    /**
     * @gir-type Struct
     */
    abstract class PersonaStorePrivate {
        static $gtype: GObject.GType<PersonaStorePrivate>;
    }


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
