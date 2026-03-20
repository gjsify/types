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
import type Folks from '@girs/folks-0.7';

export namespace FolksDummy {
    /**
     * FolksDummy-0.7
     */

    namespace Backend {
        // Signal signatures
        interface SignalSignatures extends Folks.Backend.SignalSignatures {
            'notify::is-prepared': (pspec: GObject.ParamSpec) => void;
            'notify::is-quiescent': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::persona-stores': (pspec: GObject.ParamSpec) => void;
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

        static ['new'](): Backend;

        // Signals

        /** @signal */
        connect<K extends keyof Backend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Backend.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Backend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Backend.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Backend.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Backend.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
            'notify::property-change-delay': (pspec: GObject.ParamSpec) => void;
            'notify::iid': (pspec: GObject.ParamSpec) => void;
            'notify::uid': (pspec: GObject.ParamSpec) => void;
            'notify::display-id': (pspec: GObject.ParamSpec) => void;
            'notify::is-user': (pspec: GObject.ParamSpec) => void;
            'notify::store': (pspec: GObject.ParamSpec) => void;
            'notify::individual': (pspec: GObject.ParamSpec) => void;
            'notify::linkable-properties': (pspec: GObject.ParamSpec) => void;
            'notify::writeable-properties': (pspec: GObject.ParamSpec) => void;
            'notify::anti-links': (pspec: GObject.ParamSpec) => void;
            'notify::avatar': (pspec: GObject.ParamSpec) => void;
            'notify::birthday': (pspec: GObject.ParamSpec) => void;
            'notify::calendar-event-id': (pspec: GObject.ParamSpec) => void;
            'notify::email-addresses': (pspec: GObject.ParamSpec) => void;
            'notify::is-favourite': (pspec: GObject.ParamSpec) => void;
            'notify::gender': (pspec: GObject.ParamSpec) => void;
            'notify::groups': (pspec: GObject.ParamSpec) => void;
            'notify::im-addresses': (pspec: GObject.ParamSpec) => void;
            'notify::local-ids': (pspec: GObject.ParamSpec) => void;
            'notify::structured-name': (pspec: GObject.ParamSpec) => void;
            'notify::full-name': (pspec: GObject.ParamSpec) => void;
            'notify::nickname': (pspec: GObject.ParamSpec) => void;
            'notify::notes': (pspec: GObject.ParamSpec) => void;
            'notify::phone-numbers': (pspec: GObject.ParamSpec) => void;
            'notify::roles': (pspec: GObject.ParamSpec) => void;
            'notify::urls': (pspec: GObject.ParamSpec) => void;
            'notify::postal-addresses': (pspec: GObject.ParamSpec) => void;
            'notify::web-service-addresses': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Persona.ConstructorProps,
                Folks.AntiLinkable.ConstructorProps,
                Folks.AvatarDetails.ConstructorProps,
                Folks.BirthdayDetails.ConstructorProps,
                Folks.EmailDetails.ConstructorProps,
                Folks.FavouriteDetails.ConstructorProps,
                Folks.GenderDetails.ConstructorProps,
                Folks.GroupDetails.ConstructorProps,
                Folks.ImDetails.ConstructorProps,
                Folks.LocalIdDetails.ConstructorProps,
                Folks.NameDetails.ConstructorProps,
                Folks.NoteDetails.ConstructorProps,
                Folks.PhoneDetails.ConstructorProps,
                Folks.RoleDetails.ConstructorProps,
                Folks.UrlDetails.ConstructorProps,
                Folks.PostalAddressDetails.ConstructorProps,
                Folks.WebServiceDetails.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class FullPersona
        extends Persona
        implements
            Folks.AntiLinkable,
            Folks.AvatarDetails,
            Folks.BirthdayDetails,
            Folks.EmailDetails,
            Folks.FavouriteDetails,
            Folks.GenderDetails,
            Folks.GroupDetails,
            Folks.ImDetails,
            Folks.LocalIdDetails,
            Folks.NameDetails,
            Folks.NoteDetails,
            Folks.PhoneDetails,
            Folks.RoleDetails,
            Folks.UrlDetails,
            Folks.PostalAddressDetails,
            Folks.WebServiceDetails
    {
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

        static ['new'](
            store: PersonaStore,
            contact_id: string,
            is_user: boolean,
            linkable_properties: string[],
        ): FullPersona;

        // Signals

        /** @signal */
        connect<K extends keyof FullPersona.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FullPersona.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FullPersona.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FullPersona.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FullPersona.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FullPersona.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param gender
         */
        update_gender(gender: Folks.Gender | null): void;
        /**
         * @param calendar_event_id
         */
        update_calendar_event_id(calendar_event_id?: string | null): void;
        /**
         * @param birthday
         */
        update_birthday(birthday?: GLib.DateTime | null): void;
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
        update_structured_name(structured_name?: Folks.StructuredName | null): void;
        /**
         * @param avatar
         */
        update_avatar(avatar?: Gio.LoadableIcon | null): void;
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
         * @construct-only
         * @category Inherited from Folks.Persona
         */
        get iid(): string;
        /**
         * @construct-only
         * @category Inherited from Folks.Persona
         */
        get uid(): string;
        /**
         * @construct-only
         * @category Inherited from Folks.Persona
         */
        get display_id(): string;
        /**
         * @construct-only
         * @category Inherited from Folks.Persona
         */
        get displayId(): string;
        /**
         * @construct-only
         * @category Inherited from Folks.Persona
         */
        get is_user(): boolean;
        /**
         * @construct-only
         * @category Inherited from Folks.Persona
         */
        get isUser(): boolean;
        /**
         * @construct-only
         * @category Inherited from Folks.Persona
         */
        get store(): Folks.PersonaStore;
        /** @category Inherited from Folks.Persona */
        get individual(): Folks.Individual;
        set individual(val: Folks.Individual);
        /**
         * @read-only
         * @category Inherited from Folks.Persona
         */
        get linkable_properties(): string[];
        /**
         * @read-only
         * @category Inherited from Folks.Persona
         */
        get linkableProperties(): string[];
        /**
         * @read-only
         * @category Inherited from Folks.Persona
         */
        get writeable_properties(): string[];
        /**
         * @read-only
         * @category Inherited from Folks.Persona
         */
        get writeableProperties(): string[];
        /**
         * @param anti_links
         */
        change_anti_links(anti_links: Gee.Set): globalThis.Promise<void>;
        /**
         * @param anti_links
         * @param _callback_
         */
        change_anti_links(anti_links: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param anti_links
         * @param _callback_
         */
        change_anti_links(
            anti_links: Gee.Set,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
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
        add_anti_links(other_personas: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param other_personas
         * @param _callback_
         */
        add_anti_links(
            other_personas: Gee.Set,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
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
        remove_anti_links(other_personas: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param other_personas
         * @param _callback_
         */
        remove_anti_links(
            other_personas: Gee.Set,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        remove_anti_links_finish(_res_: Gio.AsyncResult): void;
        add_global_anti_link(): globalThis.Promise<void>;
        /**
         * @param _callback_
         */
        add_global_anti_link(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _callback_
         */
        add_global_anti_link(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        add_global_anti_link_finish(_res_: Gio.AsyncResult): void;
        remove_global_anti_link(): globalThis.Promise<void>;
        /**
         * @param _callback_
         */
        remove_global_anti_link(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _callback_
         */
        remove_global_anti_link(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
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
        vfunc_change_anti_links(anti_links: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
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
        change_avatar(avatar?: Gio.LoadableIcon | null): globalThis.Promise<void>;
        /**
         * @param avatar
         * @param _callback_
         */
        change_avatar(avatar: Gio.LoadableIcon | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param avatar
         * @param _callback_
         */
        change_avatar(
            avatar?: Gio.LoadableIcon | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        change_avatar_finish(_res_: Gio.AsyncResult): void;
        get_avatar(): Gio.LoadableIcon | null;
        /**
         * @param value
         */
        set_avatar(value?: Gio.LoadableIcon | null): void;
        /**
         * @param avatar
         * @param _callback_
         * @virtual
         */
        vfunc_change_avatar(avatar?: Gio.LoadableIcon | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _res_
         * @virtual
         */
        vfunc_change_avatar_finish(_res_: Gio.AsyncResult): void;
        /**
         * @virtual
         */
        vfunc_get_avatar(): Gio.LoadableIcon | null;
        /**
         * @param value
         * @virtual
         */
        vfunc_set_avatar(value?: Gio.LoadableIcon | null): void;
        /**
         * @param birthday
         */
        change_birthday(birthday?: GLib.DateTime | null): globalThis.Promise<void>;
        /**
         * @param birthday
         * @param _callback_
         */
        change_birthday(birthday: GLib.DateTime | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param birthday
         * @param _callback_
         */
        change_birthday(
            birthday?: GLib.DateTime | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        change_birthday_finish(_res_: Gio.AsyncResult): void;
        /**
         * @param event_id
         */
        change_calendar_event_id(event_id?: string | null): globalThis.Promise<void>;
        /**
         * @param event_id
         * @param _callback_
         */
        change_calendar_event_id(event_id: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param event_id
         * @param _callback_
         */
        change_calendar_event_id(
            event_id?: string | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        change_calendar_event_id_finish(_res_: Gio.AsyncResult): void;
        get_birthday(): GLib.DateTime | null;
        /**
         * @param value
         */
        set_birthday(value?: GLib.DateTime | null): void;
        get_calendar_event_id(): string | null;
        /**
         * @param value
         */
        set_calendar_event_id(value?: string | null): void;
        /**
         * @param birthday
         * @param _callback_
         * @virtual
         */
        vfunc_change_birthday(birthday?: GLib.DateTime | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
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
        vfunc_change_calendar_event_id(
            event_id?: string | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param _res_
         * @virtual
         */
        vfunc_change_calendar_event_id_finish(_res_: Gio.AsyncResult): void;
        /**
         * @virtual
         */
        vfunc_get_birthday(): GLib.DateTime | null;
        /**
         * @param value
         * @virtual
         */
        vfunc_set_birthday(value?: GLib.DateTime | null): void;
        /**
         * @virtual
         */
        vfunc_get_calendar_event_id(): string | null;
        /**
         * @param value
         * @virtual
         */
        vfunc_set_calendar_event_id(value?: string | null): void;
        /**
         * @param email_addresses
         */
        change_email_addresses(email_addresses: Gee.Set): globalThis.Promise<void>;
        /**
         * @param email_addresses
         * @param _callback_
         */
        change_email_addresses(email_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param email_addresses
         * @param _callback_
         */
        change_email_addresses(
            email_addresses: Gee.Set,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
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
        vfunc_change_email_addresses(email_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
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
        change_is_favourite(is_favourite: boolean, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param is_favourite
         * @param _callback_
         */
        change_is_favourite(
            is_favourite: boolean,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
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
        vfunc_change_is_favourite(is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
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
        change_gender(gender: Folks.Gender | null): globalThis.Promise<void>;
        /**
         * @param gender
         * @param _callback_
         */
        change_gender(gender: Folks.Gender | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param gender
         * @param _callback_
         */
        change_gender(
            gender: Folks.Gender | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        change_gender_finish(_res_: Gio.AsyncResult): void;
        get_gender(): Folks.Gender;
        /**
         * @param value
         */
        set_gender(value: Folks.Gender | null): void;
        /**
         * @param gender
         * @param _callback_
         * @virtual
         */
        vfunc_change_gender(gender: Folks.Gender, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
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
        change_group(group: string, is_member: boolean, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param group
         * @param is_member
         * @param _callback_
         */
        change_group(
            group: string,
            is_member: boolean,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
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
        change_groups(groups: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param groups
         * @param _callback_
         */
        change_groups(
            groups: Gee.Set,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
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
        vfunc_change_group(group: string, is_member: boolean, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
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
        vfunc_change_groups(groups: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
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
        change_im_addresses(im_addresses: Gee.MultiMap, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param im_addresses
         * @param _callback_
         */
        change_im_addresses(
            im_addresses: Gee.MultiMap,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
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
        vfunc_change_im_addresses(im_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
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
        change_local_ids(local_ids: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param local_ids
         * @param _callback_
         */
        change_local_ids(
            local_ids: Gee.Set,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
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
        vfunc_change_local_ids(local_ids: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
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
        change_structured_name(name?: Folks.StructuredName | null): globalThis.Promise<void>;
        /**
         * @param name
         * @param _callback_
         */
        change_structured_name(
            name: Folks.StructuredName | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param name
         * @param _callback_
         */
        change_structured_name(
            name?: Folks.StructuredName | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
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
        change_full_name(full_name: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param full_name
         * @param _callback_
         */
        change_full_name(
            full_name: string,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
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
        change_nickname(nickname: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param nickname
         * @param _callback_
         */
        change_nickname(
            nickname: string,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        change_nickname_finish(_res_: Gio.AsyncResult): void;
        get_structured_name(): Folks.StructuredName | null;
        /**
         * @param value
         */
        set_structured_name(value?: Folks.StructuredName | null): void;
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
        vfunc_change_structured_name(
            name?: Folks.StructuredName | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        vfunc_change_full_name(full_name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
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
        vfunc_change_nickname(nickname: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _res_
         * @virtual
         */
        vfunc_change_nickname_finish(_res_: Gio.AsyncResult): void;
        /**
         * @virtual
         */
        vfunc_get_structured_name(): Folks.StructuredName | null;
        /**
         * @param value
         * @virtual
         */
        vfunc_set_structured_name(value?: Folks.StructuredName | null): void;
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
        change_notes(notes: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param notes
         * @param _callback_
         */
        change_notes(notes: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
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
        vfunc_change_notes(notes: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
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
        change_phone_numbers(phone_numbers: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param phone_numbers
         * @param _callback_
         */
        change_phone_numbers(
            phone_numbers: Gee.Set,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
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
        vfunc_change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
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
        change_roles(roles: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param roles
         * @param _callback_
         */
        change_roles(roles: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
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
        vfunc_change_roles(roles: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
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
        change_urls(urls: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param urls
         * @param _callback_
         */
        change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
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
        vfunc_change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
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
        change_postal_addresses(postal_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param postal_addresses
         * @param _callback_
         */
        change_postal_addresses(
            postal_addresses: Gee.Set,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
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
        vfunc_change_postal_addresses(
            postal_addresses: Gee.Set,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        change_web_service_addresses(
            web_service_addresses: Gee.MultiMap,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param web_service_addresses
         * @param _callback_
         */
        change_web_service_addresses(
            web_service_addresses: Gee.MultiMap,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
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
        vfunc_change_web_service_addresses(
            web_service_addresses: Gee.MultiMap,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        /**
         * @param prop_name
         * @param callback
         */
        linkable_property_to_links(prop_name: string, callback: Folks.Persona.LinkablePropertyCallback): void;
        get_iid(): string;
        get_uid(): string;
        get_display_id(): string;
        get_is_user(): boolean;
        get_store(): Folks.PersonaStore;
        get_individual(): Folks.Individual | null;
        get_linkable_properties(): string[];
        get_writeable_properties(): string[];
        /**
         * @param prop_name
         * @param callback
         * @virtual
         */
        vfunc_linkable_property_to_links(prop_name: string, callback: Folks.Persona.LinkablePropertyCallback): void;
        /**
         * @virtual
         */
        vfunc_get_linkable_properties(): string[];
        /**
         * @virtual
         */
        vfunc_get_writeable_properties(): string[];
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace PersonaStore {
        // Signal signatures
        interface SignalSignatures extends Folks.PersonaStore.SignalSignatures {
            'notify::persona-type': (pspec: GObject.ParamSpec) => void;
            'notify::type-id': (pspec: GObject.ParamSpec) => void;
            'notify::display-name': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::personas': (pspec: GObject.ParamSpec) => void;
            'notify::can-add-personas': (pspec: GObject.ParamSpec) => void;
            'notify::can-alias-personas': (pspec: GObject.ParamSpec) => void;
            'notify::can-group-personas': (pspec: GObject.ParamSpec) => void;
            'notify::can-remove-personas': (pspec: GObject.ParamSpec) => void;
            'notify::is-prepared': (pspec: GObject.ParamSpec) => void;
            'notify::is-quiescent': (pspec: GObject.ParamSpec) => void;
            'notify::is-writeable': (pspec: GObject.ParamSpec) => void;
            'notify::trust-level': (pspec: GObject.ParamSpec) => void;
            'notify::always-writeable-properties': (pspec: GObject.ParamSpec) => void;
            'notify::is-primary-store': (pspec: GObject.ParamSpec) => void;
            'notify::is-user-set-default': (pspec: GObject.ParamSpec) => void;
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
            persona_type: GObject.GType;
            personaType: GObject.GType;
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

        static ['new'](id: string, display_name: string, always_writeable_properties: string[]): PersonaStore;

        // Signals

        /** @signal */
        connect<K extends keyof PersonaStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PersonaStore.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PersonaStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PersonaStore.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PersonaStore.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PersonaStore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param can_add_personas
         * @param can_alias_personas
         * @param can_remove_personas
         */
        update_capabilities(
            can_add_personas: Folks.MaybeBool | null,
            can_alias_personas: Folks.MaybeBool | null,
            can_remove_personas: Folks.MaybeBool | null,
        ): void;
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
        update_trust_level(trust_level: Folks.PersonaStoreTrust | null): void;
        /**
         * @param mock
         */
        set_add_persona_from_details_mock(mock?: PersonaStore.AddPersonaFromDetailsMock | null): void;
        /**
         * @param mock
         */
        set_remove_persona_mock(mock?: PersonaStore.RemovePersonaMock | null): void;
        /**
         * @param mock
         */
        set_prepare_mock(mock?: PersonaStore.PrepareMock | null): void;
        get_persona_type(): GObject.GType;
        /**
         * @param value
         */
        set_persona_type(value: GObject.GType): void;
    }

    namespace Persona {
        // Signal signatures
        interface SignalSignatures extends Folks.Persona.SignalSignatures {
            'notify::property-change-delay': (pspec: GObject.ParamSpec) => void;
            'notify::iid': (pspec: GObject.ParamSpec) => void;
            'notify::uid': (pspec: GObject.ParamSpec) => void;
            'notify::display-id': (pspec: GObject.ParamSpec) => void;
            'notify::is-user': (pspec: GObject.ParamSpec) => void;
            'notify::store': (pspec: GObject.ParamSpec) => void;
            'notify::individual': (pspec: GObject.ParamSpec) => void;
            'notify::linkable-properties': (pspec: GObject.ParamSpec) => void;
            'notify::writeable-properties': (pspec: GObject.ParamSpec) => void;
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

        static ['new'](
            store: PersonaStore,
            contact_id: string,
            is_user: boolean,
            linkable_properties: string[],
        ): Persona;

        // Signals

        /** @signal */
        connect<K extends keyof Persona.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Persona.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Persona.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Persona.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Persona.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Persona.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
        change_property(
            property_name: string,
            callback: Persona.ChangePropertyCallback,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param property_name
         * @param callback
         * @param _callback_
         */
        change_property(
            property_name: string,
            callback: Persona.ChangePropertyCallback,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
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
