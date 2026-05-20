
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
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gee from '@girs/gee-0.8';
import type Folks from '@girs/folks-0.6';

export namespace FolksDummy {

    /**
     * FolksDummy-0.6
     */


    namespace Backend {
        // Signal signatures
        interface SignalSignatures extends Folks.Backend.SignalSignatures {
            "notify::is-prepared": (pspec: GObject.ParamSpec) => void;
            "notify::is-quiescent": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::persona-stores": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Folks.Backend.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Backend extends Folks.Backend {
        static $gtype: GObject.GType<Backend>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Backend.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Backend.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Backend;

        // Signals
        /** @signal */
        connect<K extends keyof Backend.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Backend.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Backend.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Backend.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Backend.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Backend.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param stores 
         * @param enable_stores 
         */
        register_persona_stores(stores: Gee.Set, enable_stores: boolean): void;

        /**
         * @param stores 
         */
        unregister_persona_stores(stores: Gee.Set): void;
    }


    namespace FullPersona {
        // Signal signatures
        interface SignalSignatures extends Persona.SignalSignatures {
            "notify::property-change-delay": (pspec: GObject.ParamSpec) => void;
            "notify::iid": (pspec: GObject.ParamSpec) => void;
            "notify::uid": (pspec: GObject.ParamSpec) => void;
            "notify::display-id": (pspec: GObject.ParamSpec) => void;
            "notify::is-user": (pspec: GObject.ParamSpec) => void;
            "notify::store": (pspec: GObject.ParamSpec) => void;
            "notify::individual": (pspec: GObject.ParamSpec) => void;
            "notify::linkable-properties": (pspec: GObject.ParamSpec) => void;
            "notify::writeable-properties": (pspec: GObject.ParamSpec) => void;
            "notify::anti-links": (pspec: GObject.ParamSpec) => void;
            "notify::avatar": (pspec: GObject.ParamSpec) => void;
            "notify::birthday": (pspec: GObject.ParamSpec) => void;
            "notify::calendar-event-id": (pspec: GObject.ParamSpec) => void;
            "notify::email-addresses": (pspec: GObject.ParamSpec) => void;
            "notify::is-favourite": (pspec: GObject.ParamSpec) => void;
            "notify::gender": (pspec: GObject.ParamSpec) => void;
            "notify::groups": (pspec: GObject.ParamSpec) => void;
            "notify::im-addresses": (pspec: GObject.ParamSpec) => void;
            "notify::local-ids": (pspec: GObject.ParamSpec) => void;
            "notify::structured-name": (pspec: GObject.ParamSpec) => void;
            "notify::full-name": (pspec: GObject.ParamSpec) => void;
            "notify::nickname": (pspec: GObject.ParamSpec) => void;
            "notify::notes": (pspec: GObject.ParamSpec) => void;
            "notify::phone-numbers": (pspec: GObject.ParamSpec) => void;
            "notify::roles": (pspec: GObject.ParamSpec) => void;
            "notify::urls": (pspec: GObject.ParamSpec) => void;
            "notify::postal-addresses": (pspec: GObject.ParamSpec) => void;
            "notify::web-service-addresses": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Persona.ConstructorProps, Folks.AntiLinkable.ConstructorProps, Folks.AvatarDetails.ConstructorProps, Folks.BirthdayDetails.ConstructorProps, Folks.EmailDetails.ConstructorProps, Folks.FavouriteDetails.ConstructorProps, Folks.GenderDetails.ConstructorProps, Folks.GroupDetails.ConstructorProps, Folks.ImDetails.ConstructorProps, Folks.LocalIdDetails.ConstructorProps, Folks.NameDetails.ConstructorProps, Folks.NoteDetails.ConstructorProps, Folks.PhoneDetails.ConstructorProps, Folks.RoleDetails.ConstructorProps, Folks.UrlDetails.ConstructorProps, Folks.PostalAddressDetails.ConstructorProps, Folks.WebServiceDetails.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class FullPersona extends Persona implements Folks.AntiLinkable, Folks.AvatarDetails, Folks.BirthdayDetails, Folks.EmailDetails, Folks.FavouriteDetails, Folks.GenderDetails, Folks.GroupDetails, Folks.ImDetails, Folks.LocalIdDetails, Folks.NameDetails, Folks.NoteDetails, Folks.PhoneDetails, Folks.RoleDetails, Folks.UrlDetails, Folks.PostalAddressDetails, Folks.WebServiceDetails {
        static $gtype: GObject.GType<FullPersona>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FullPersona.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FullPersona.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](store: PersonaStore, contact_id: string, is_user: boolean, linkable_properties: string[]): FullPersona;

        // Signals
        /** @signal */
        connect<K extends keyof FullPersona.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FullPersona.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FullPersona.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FullPersona.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FullPersona.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FullPersona.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param gender 
         */
        update_gender(gender: Folks.Gender): void;

        /**
         * @param calendar_event_id 
         */
        update_calendar_event_id(calendar_event_id: string): void;

        /**
         * @param birthday 
         */
        update_birthday(birthday: GLib.DateTime): void;

        /**
         * @param roles 
         */
        update_roles(roles: Gee.Set): void;

        /**
         * @param groups 
         */
        update_groups(groups: Gee.Set): void;

        /**
         * @param web_service_addresses 
         */
        update_web_service_addresses(web_service_addresses: Gee.MultiMap): void;

        /**
         * @param email_addresses 
         */
        update_email_addresses(email_addresses: Gee.Set): void;

        /**
         * @param notes 
         */
        update_notes(notes: Gee.Set): void;

        /**
         * @param full_name 
         */
        update_full_name(full_name: string): void;

        /**
         * @param nickname 
         */
        update_nickname(nickname: string): void;

        /**
         * @param structured_name 
         */
        update_structured_name(structured_name: Folks.StructuredName): void;

        /**
         * @param avatar 
         */
        update_avatar(avatar: Gio.LoadableIcon): void;

        /**
         * @param urls 
         */
        update_urls(urls: Gee.Set): void;

        /**
         * @param im_addresses 
         */
        update_im_addresses(im_addresses: Gee.MultiMap): void;

        /**
         * @param phone_numbers 
         */
        update_phone_numbers(phone_numbers: Gee.Set): void;

        /**
         * @param postal_addresses 
         */
        update_postal_addresses(postal_addresses: Gee.Set): void;

        /**
         * @param local_ids 
         */
        update_local_ids(local_ids: Gee.Set): void;

        /**
         * @param is_favourite 
         */
        update_is_favourite(is_favourite: boolean): void;

        /**
         * @param anti_links 
         */
        update_anti_links(anti_links: Gee.Set): void;

        /** @category Inherited from Folks.AntiLinkable */
        get anti_links(): Gee.Set;
        set anti_links(val: Gee.Set);

        /** @category Inherited from Folks.AntiLinkable */
        get antiLinks(): Gee.Set;
        set antiLinks(val: Gee.Set);

        /** @category Inherited from Folks.AvatarDetails */
        get avatar(): Gio.LoadableIcon;
        set avatar(val: Gio.LoadableIcon);

        /** @category Inherited from Folks.BirthdayDetails */
        get birthday(): GLib.DateTime;
        set birthday(val: GLib.DateTime);

        /** @category Inherited from Folks.BirthdayDetails */
        get calendar_event_id(): string;
        set calendar_event_id(val: string);

        /** @category Inherited from Folks.BirthdayDetails */
        get calendarEventId(): string;
        set calendarEventId(val: string);

        /** @category Inherited from Folks.EmailDetails */
        get email_addresses(): Gee.Set;
        set email_addresses(val: Gee.Set);

        /** @category Inherited from Folks.EmailDetails */
        get emailAddresses(): Gee.Set;
        set emailAddresses(val: Gee.Set);

        /** @category Inherited from Folks.FavouriteDetails */
        get is_favourite(): boolean;
        set is_favourite(val: boolean);

        /** @category Inherited from Folks.FavouriteDetails */
        get isFavourite(): boolean;
        set isFavourite(val: boolean);

        /** @category Inherited from Folks.GenderDetails */
        get gender(): Folks.Gender;
        set gender(val: Folks.Gender);

        /** @category Inherited from Folks.GroupDetails */
        get groups(): Gee.Set;
        set groups(val: Gee.Set);

        /** @category Inherited from Folks.ImDetails */
        get im_addresses(): Gee.MultiMap;
        set im_addresses(val: Gee.MultiMap);

        /** @category Inherited from Folks.ImDetails */
        get imAddresses(): Gee.MultiMap;
        set imAddresses(val: Gee.MultiMap);

        /** @category Inherited from Folks.LocalIdDetails */
        get local_ids(): Gee.Set;
        set local_ids(val: Gee.Set);

        /** @category Inherited from Folks.LocalIdDetails */
        get localIds(): Gee.Set;
        set localIds(val: Gee.Set);

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

        /** @category Inherited from Folks.NoteDetails */
        get notes(): Gee.Set;
        set notes(val: Gee.Set);

        /** @category Inherited from Folks.PhoneDetails */
        get phone_numbers(): Gee.Set;
        set phone_numbers(val: Gee.Set);

        /** @category Inherited from Folks.PhoneDetails */
        get phoneNumbers(): Gee.Set;
        set phoneNumbers(val: Gee.Set);

        /** @category Inherited from Folks.RoleDetails */
        get roles(): Gee.Set;
        set roles(val: Gee.Set);

        /** @category Inherited from Folks.UrlDetails */
        get urls(): Gee.Set;
        set urls(val: Gee.Set);

        /** @category Inherited from Folks.PostalAddressDetails */
        get postal_addresses(): Gee.Set;
        set postal_addresses(val: Gee.Set);

        /** @category Inherited from Folks.PostalAddressDetails */
        get postalAddresses(): Gee.Set;
        set postalAddresses(val: Gee.Set);

        /** @category Inherited from Folks.WebServiceDetails */
        get web_service_addresses(): Gee.MultiMap;
        set web_service_addresses(val: Gee.MultiMap);

        /** @category Inherited from Folks.WebServiceDetails */
        get webServiceAddresses(): Gee.MultiMap;
        set webServiceAddresses(val: Gee.MultiMap);

        /**
         * @param anti_links 
         */
        change_anti_links(anti_links: Gee.Set): globalThis.Promise<void>;

        /**
         * @param anti_links 
         * @param _callback_ 
         */
        change_anti_links(anti_links: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param anti_links 
         * @param _callback_ 
         */
        change_anti_links(anti_links: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        change_anti_links_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param other_persona 
         */
        has_anti_link_with_persona(other_persona: Folks.Persona): boolean;

        /**
         * @param other_personas 
         */
        add_anti_links(other_personas: Gee.Set): globalThis.Promise<void>;

        /**
         * @param other_personas 
         * @param _callback_ 
         */
        add_anti_links(other_personas: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param other_personas 
         * @param _callback_ 
         */
        add_anti_links(other_personas: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        add_anti_links_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param other_personas 
         */
        remove_anti_links(other_personas: Gee.Set): globalThis.Promise<void>;

        /**
         * @param other_personas 
         * @param _callback_ 
         */
        remove_anti_links(other_personas: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param other_personas 
         * @param _callback_ 
         */
        remove_anti_links(other_personas: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        remove_anti_links_finish(_res_: Gio.AsyncResult): void;

        add_global_anti_link(): globalThis.Promise<void>;

        /**
         * @param _callback_ 
         */
        add_global_anti_link(_callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _callback_ 
         */
        add_global_anti_link(_callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        add_global_anti_link_finish(_res_: Gio.AsyncResult): void;

        remove_global_anti_link(): globalThis.Promise<void>;

        /**
         * @param _callback_ 
         */
        remove_global_anti_link(_callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _callback_ 
         */
        remove_global_anti_link(_callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        remove_global_anti_link_finish(_res_: Gio.AsyncResult): void;

        has_global_anti_link(): boolean;

        get_anti_links(): Gee.Set;

        /**
         * @param value 
         */
        set_anti_links(value: Gee.Set): void;

        /**
         * @param anti_links 
         * @param _callback_ 
         * @virtual
         */
        vfunc_change_anti_links(anti_links: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_change_anti_links_finish(_res_: Gio.AsyncResult): void;

        /**
         * @virtual
         */
        vfunc_get_anti_links(): Gee.Set;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_anti_links(value: Gee.Set): void;

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
         * @param birthday 
         */
        change_birthday(birthday: GLib.DateTime): globalThis.Promise<void>;

        /**
         * @param birthday 
         * @param _callback_ 
         */
        change_birthday(birthday: GLib.DateTime, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param birthday 
         * @param _callback_ 
         */
        change_birthday(birthday: GLib.DateTime, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        change_birthday_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param event_id 
         */
        change_calendar_event_id(event_id: string): globalThis.Promise<void>;

        /**
         * @param event_id 
         * @param _callback_ 
         */
        change_calendar_event_id(event_id: string, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param event_id 
         * @param _callback_ 
         */
        change_calendar_event_id(event_id: string, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        change_calendar_event_id_finish(_res_: Gio.AsyncResult): void;

        get_birthday(): GLib.DateTime;

        /**
         * @param value 
         */
        set_birthday(value: GLib.DateTime): void;

        get_calendar_event_id(): string;

        /**
         * @param value 
         */
        set_calendar_event_id(value: string): void;

        /**
         * @param birthday 
         * @param _callback_ 
         * @virtual
         */
        vfunc_change_birthday(birthday: GLib.DateTime, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_change_birthday_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param event_id 
         * @param _callback_ 
         * @virtual
         */
        vfunc_change_calendar_event_id(event_id: string, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_change_calendar_event_id_finish(_res_: Gio.AsyncResult): void;

        /**
         * @virtual
         */
        vfunc_get_birthday(): GLib.DateTime;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_birthday(value: GLib.DateTime): void;

        /**
         * @virtual
         */
        vfunc_get_calendar_event_id(): string;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_calendar_event_id(value: string): void;

        /**
         * @param email_addresses 
         */
        change_email_addresses(email_addresses: Gee.Set): globalThis.Promise<void>;

        /**
         * @param email_addresses 
         * @param _callback_ 
         */
        change_email_addresses(email_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param email_addresses 
         * @param _callback_ 
         */
        change_email_addresses(email_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        change_email_addresses_finish(_res_: Gio.AsyncResult): void;

        get_email_addresses(): Gee.Set;

        /**
         * @param value 
         */
        set_email_addresses(value: Gee.Set): void;

        /**
         * @param email_addresses 
         * @param _callback_ 
         * @virtual
         */
        vfunc_change_email_addresses(email_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_change_email_addresses_finish(_res_: Gio.AsyncResult): void;

        /**
         * @virtual
         */
        vfunc_get_email_addresses(): Gee.Set;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_email_addresses(value: Gee.Set): void;

        /**
         * @param is_favourite 
         */
        change_is_favourite(is_favourite: boolean): globalThis.Promise<void>;

        /**
         * @param is_favourite 
         * @param _callback_ 
         */
        change_is_favourite(is_favourite: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param is_favourite 
         * @param _callback_ 
         */
        change_is_favourite(is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        change_is_favourite_finish(_res_: Gio.AsyncResult): void;

        get_is_favourite(): boolean;

        /**
         * @param value 
         */
        set_is_favourite(value: boolean): void;

        /**
         * @param is_favourite 
         * @param _callback_ 
         * @virtual
         */
        vfunc_change_is_favourite(is_favourite: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_change_is_favourite_finish(_res_: Gio.AsyncResult): void;

        /**
         * @virtual
         */
        vfunc_get_is_favourite(): boolean;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_is_favourite(value: boolean): void;

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
         * @param group 
         * @param is_member 
         */
        change_group(group: string, is_member: boolean): globalThis.Promise<void>;

        /**
         * @param group 
         * @param is_member 
         * @param _callback_ 
         */
        change_group(group: string, is_member: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param group 
         * @param is_member 
         * @param _callback_ 
         */
        change_group(group: string, is_member: boolean, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        change_group_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param groups 
         */
        change_groups(groups: Gee.Set): globalThis.Promise<void>;

        /**
         * @param groups 
         * @param _callback_ 
         */
        change_groups(groups: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param groups 
         * @param _callback_ 
         */
        change_groups(groups: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        change_groups_finish(_res_: Gio.AsyncResult): void;

        get_groups(): Gee.Set;

        /**
         * @param value 
         */
        set_groups(value: Gee.Set): void;

        /**
         * @param group 
         * @param is_member 
         * @param _callback_ 
         * @virtual
         */
        vfunc_change_group(group: string, is_member: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_change_group_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param groups 
         * @param _callback_ 
         * @virtual
         */
        vfunc_change_groups(groups: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_change_groups_finish(_res_: Gio.AsyncResult): void;

        /**
         * @virtual
         */
        vfunc_get_groups(): Gee.Set;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_groups(value: Gee.Set): void;

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
         * @param local_ids 
         */
        change_local_ids(local_ids: Gee.Set): globalThis.Promise<void>;

        /**
         * @param local_ids 
         * @param _callback_ 
         */
        change_local_ids(local_ids: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param local_ids 
         * @param _callback_ 
         */
        change_local_ids(local_ids: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        change_local_ids_finish(_res_: Gio.AsyncResult): void;

        get_local_ids(): Gee.Set;

        /**
         * @param value 
         */
        set_local_ids(value: Gee.Set): void;

        /**
         * @param local_ids 
         * @param _callback_ 
         * @virtual
         */
        vfunc_change_local_ids(local_ids: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_change_local_ids_finish(_res_: Gio.AsyncResult): void;

        /**
         * @virtual
         */
        vfunc_get_local_ids(): Gee.Set;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_local_ids(value: Gee.Set): void;

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
         * @param notes 
         */
        change_notes(notes: Gee.Set): globalThis.Promise<void>;

        /**
         * @param notes 
         * @param _callback_ 
         */
        change_notes(notes: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param notes 
         * @param _callback_ 
         */
        change_notes(notes: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        change_notes_finish(_res_: Gio.AsyncResult): void;

        get_notes(): Gee.Set;

        /**
         * @param value 
         */
        set_notes(value: Gee.Set): void;

        /**
         * @param notes 
         * @param _callback_ 
         * @virtual
         */
        vfunc_change_notes(notes: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_change_notes_finish(_res_: Gio.AsyncResult): void;

        /**
         * @virtual
         */
        vfunc_get_notes(): Gee.Set;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_notes(value: Gee.Set): void;

        /**
         * @param phone_numbers 
         */
        change_phone_numbers(phone_numbers: Gee.Set): globalThis.Promise<void>;

        /**
         * @param phone_numbers 
         * @param _callback_ 
         */
        change_phone_numbers(phone_numbers: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param phone_numbers 
         * @param _callback_ 
         */
        change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        change_phone_numbers_finish(_res_: Gio.AsyncResult): void;

        get_phone_numbers(): Gee.Set;

        /**
         * @param value 
         */
        set_phone_numbers(value: Gee.Set): void;

        /**
         * @param phone_numbers 
         * @param _callback_ 
         * @virtual
         */
        vfunc_change_phone_numbers(phone_numbers: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_change_phone_numbers_finish(_res_: Gio.AsyncResult): void;

        /**
         * @virtual
         */
        vfunc_get_phone_numbers(): Gee.Set;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_phone_numbers(value: Gee.Set): void;

        /**
         * @param roles 
         */
        change_roles(roles: Gee.Set): globalThis.Promise<void>;

        /**
         * @param roles 
         * @param _callback_ 
         */
        change_roles(roles: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param roles 
         * @param _callback_ 
         */
        change_roles(roles: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        change_roles_finish(_res_: Gio.AsyncResult): void;

        get_roles(): Gee.Set;

        /**
         * @param value 
         */
        set_roles(value: Gee.Set): void;

        /**
         * @param roles 
         * @param _callback_ 
         * @virtual
         */
        vfunc_change_roles(roles: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_change_roles_finish(_res_: Gio.AsyncResult): void;

        /**
         * @virtual
         */
        vfunc_get_roles(): Gee.Set;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_roles(value: Gee.Set): void;

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
         * @param postal_addresses 
         */
        change_postal_addresses(postal_addresses: Gee.Set): globalThis.Promise<void>;

        /**
         * @param postal_addresses 
         * @param _callback_ 
         */
        change_postal_addresses(postal_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param postal_addresses 
         * @param _callback_ 
         */
        change_postal_addresses(postal_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        change_postal_addresses_finish(_res_: Gio.AsyncResult): void;

        get_postal_addresses(): Gee.Set;

        /**
         * @param value 
         */
        set_postal_addresses(value: Gee.Set): void;

        /**
         * @param postal_addresses 
         * @param _callback_ 
         * @virtual
         */
        vfunc_change_postal_addresses(postal_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_change_postal_addresses_finish(_res_: Gio.AsyncResult): void;

        /**
         * @virtual
         */
        vfunc_get_postal_addresses(): Gee.Set;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_postal_addresses(value: Gee.Set): void;

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
            "notify::persona-type": (pspec: GObject.ParamSpec) => void;
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
    interface AddPersonaFromDetailsMock {
        (persona: Persona): number;
    }
    interface RemovePersonaMock {
        (persona: Persona): number;
    }
    interface PrepareMock {
        (): number;
    }

        // Constructor properties interface
        interface ConstructorProps extends Folks.PersonaStore.ConstructorProps {
            persona_type: GObject.GTypeInput;
            personaType: GObject.GTypeInput;
        }
    }

    /**
     * @gir-type Class
     */
    class PersonaStore extends Folks.PersonaStore {
        static $gtype: GObject.GType<PersonaStore>;

        // Properties
        get persona_type(): GObject.GType;
        set persona_type(val: GObject.GType);

        get personaType(): GObject.GType;
        set personaType(val: GObject.GType);

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

        static ["new"](id: string, display_name: string, always_writeable_properties: string[]): PersonaStore;

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
        /**
         * @param can_add_personas 
         * @param can_alias_personas 
         * @param can_remove_personas 
         */
        update_capabilities(can_add_personas: Folks.MaybeBool, can_alias_personas: Folks.MaybeBool, can_remove_personas: Folks.MaybeBool): void;

        freeze_personas_changed(): void;

        thaw_personas_changed(): void;

        /**
         * @param personas 
         */
        register_personas(personas: Gee.Set): void;

        /**
         * @param personas 
         */
        unregister_personas(personas: Gee.Set): void;

        reach_quiescence(): void;

        /**
         * @param is_user_set_default 
         */
        update_is_user_set_default(is_user_set_default: boolean): void;

        /**
         * @param trust_level 
         */
        update_trust_level(trust_level: Folks.PersonaStoreTrust): void;

        /**
         * @param mock 
         */
        set_add_persona_from_details_mock(mock: PersonaStore.AddPersonaFromDetailsMock): void;

        /**
         * @param mock 
         */
        set_remove_persona_mock(mock: PersonaStore.RemovePersonaMock): void;

        /**
         * @param mock 
         */
        set_prepare_mock(mock: PersonaStore.PrepareMock): void;

        get_persona_type(): GObject.GType;

        /**
         * @param value 
         */
        set_persona_type(value: GObject.GType): void;
    }


    namespace Persona {
        // Signal signatures
        interface SignalSignatures extends Folks.Persona.SignalSignatures {
            "notify::property-change-delay": (pspec: GObject.ParamSpec) => void;
            "notify::iid": (pspec: GObject.ParamSpec) => void;
            "notify::uid": (pspec: GObject.ParamSpec) => void;
            "notify::display-id": (pspec: GObject.ParamSpec) => void;
            "notify::is-user": (pspec: GObject.ParamSpec) => void;
            "notify::store": (pspec: GObject.ParamSpec) => void;
            "notify::individual": (pspec: GObject.ParamSpec) => void;
            "notify::linkable-properties": (pspec: GObject.ParamSpec) => void;
            "notify::writeable-properties": (pspec: GObject.ParamSpec) => void;
        }
    interface ChangePropertyCallback {
        (): void;
    }

        // Constructor properties interface
        interface ConstructorProps extends Folks.Persona.ConstructorProps {
            property_change_delay: number;
            propertyChangeDelay: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Persona extends Folks.Persona {
        static $gtype: GObject.GType<Persona>;

        // Properties
        get property_change_delay(): number;
        set property_change_delay(val: number);

        get propertyChangeDelay(): number;
        set propertyChangeDelay(val: number);

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

        static ["new"](store: PersonaStore, contact_id: string, is_user: boolean, linkable_properties: string[]): Persona;

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

        // Methods
        /**
         * @param writeable_properties 
         */
        update_writeable_properties(writeable_properties: string[]): void;

        /**
         * @param linkable_properties 
         */
        update_linkable_properties(linkable_properties: string[]): void;

        /**
         * @param property_name 
         * @param callback 
         */
        change_property(property_name: string, callback: Persona.ChangePropertyCallback): globalThis.Promise<void>;

        /**
         * @param property_name 
         * @param callback 
         * @param _callback_ 
         */
        change_property(property_name: string, callback: Persona.ChangePropertyCallback, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param property_name 
         * @param callback 
         * @param _callback_ 
         */
        change_property(property_name: string, callback: Persona.ChangePropertyCallback, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        change_property_finish(_res_: Gio.AsyncResult): void;

        get_property_change_delay(): number;

        /**
         * @param value 
         */
        set_property_change_delay(value: number): void;
    }


    /**
     * @gir-type Alias
     */
    type BackendClass = typeof Backend;

    /**
     * @gir-type Struct
     */
    abstract class BackendPrivate {
        static $gtype: GObject.GType<BackendPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type FullPersonaClass = typeof FullPersona;

    /**
     * @gir-type Struct
     */
    abstract class FullPersonaPrivate {
        static $gtype: GObject.GType<FullPersonaPrivate>;
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
