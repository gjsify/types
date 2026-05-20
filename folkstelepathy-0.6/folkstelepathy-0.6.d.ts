
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
import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GModule from '@girs/gmodule-2.0';
import type TelepathyGLib from '@girs/telepathyglib-0.12';
import type Folks from '@girs/folks-0.6';

export namespace FolksTelepathy {

    /**
     * FolksTelepathy-0.6
     */


    namespace PersonaStore {
        // Signal signatures
        interface SignalSignatures extends Folks.PersonaStore.SignalSignatures {
            "notify::account": (pspec: GObject.ParamSpec) => void;
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
            account: TelepathyGLib.Account;
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
        get account(): TelepathyGLib.Account;

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

        static ["new"](account: TelepathyGLib.Account): PersonaStore;

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

        // Static methods
        static list_persona_stores(): Gee.Map;

        /**
         * @param account 
         */
        static dup_for_account(account: TelepathyGLib.Account): PersonaStore;

        // Methods
        get_account(): TelepathyGLib.Account;
    }


    namespace Persona {
        // Signal signatures
        interface SignalSignatures extends Folks.Persona.SignalSignatures {
            "notify::is-in-contact-list": (pspec: GObject.ParamSpec) => void;
            "notify::contact": (pspec: GObject.ParamSpec) => void;
            "notify::iid": (pspec: GObject.ParamSpec) => void;
            "notify::uid": (pspec: GObject.ParamSpec) => void;
            "notify::display-id": (pspec: GObject.ParamSpec) => void;
            "notify::is-user": (pspec: GObject.ParamSpec) => void;
            "notify::store": (pspec: GObject.ParamSpec) => void;
            "notify::individual": (pspec: GObject.ParamSpec) => void;
            "notify::linkable-properties": (pspec: GObject.ParamSpec) => void;
            "notify::writeable-properties": (pspec: GObject.ParamSpec) => void;
            "notify::alias": (pspec: GObject.ParamSpec) => void;
            "notify::avatar": (pspec: GObject.ParamSpec) => void;
            "notify::birthday": (pspec: GObject.ParamSpec) => void;
            "notify::calendar-event-id": (pspec: GObject.ParamSpec) => void;
            "notify::email-addresses": (pspec: GObject.ParamSpec) => void;
            "notify::is-favourite": (pspec: GObject.ParamSpec) => void;
            "notify::groups": (pspec: GObject.ParamSpec) => void;
            "notify::im-interaction-count": (pspec: GObject.ParamSpec) => void;
            "notify::last-im-interaction-datetime": (pspec: GObject.ParamSpec) => void;
            "notify::call-interaction-count": (pspec: GObject.ParamSpec) => void;
            "notify::last-call-interaction-datetime": (pspec: GObject.ParamSpec) => void;
            "notify::im-addresses": (pspec: GObject.ParamSpec) => void;
            "notify::structured-name": (pspec: GObject.ParamSpec) => void;
            "notify::full-name": (pspec: GObject.ParamSpec) => void;
            "notify::nickname": (pspec: GObject.ParamSpec) => void;
            "notify::phone-numbers": (pspec: GObject.ParamSpec) => void;
            "notify::presence-type": (pspec: GObject.ParamSpec) => void;
            "notify::presence-message": (pspec: GObject.ParamSpec) => void;
            "notify::client-types": (pspec: GObject.ParamSpec) => void;
            "notify::presence-status": (pspec: GObject.ParamSpec) => void;
            "notify::urls": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Folks.Persona.ConstructorProps, Folks.AliasDetails.ConstructorProps, Folks.AvatarDetails.ConstructorProps, Folks.BirthdayDetails.ConstructorProps, Folks.EmailDetails.ConstructorProps, Folks.FavouriteDetails.ConstructorProps, Folks.GroupDetails.ConstructorProps, Folks.InteractionDetails.ConstructorProps, Folks.ImDetails.ConstructorProps, Folks.NameDetails.ConstructorProps, Folks.PhoneDetails.ConstructorProps, Folks.PresenceDetails.ConstructorProps, Folks.UrlDetails.ConstructorProps {
            is_in_contact_list: boolean;
            isInContactList: boolean;
            contact: TelepathyGLib.Contact;
        }
    }

    /**
     * @gir-type Class
     */
    class Persona extends Folks.Persona implements Folks.AliasDetails, Folks.AvatarDetails, Folks.BirthdayDetails, Folks.EmailDetails, Folks.FavouriteDetails, Folks.GroupDetails, Folks.InteractionDetails, Folks.ImDetails, Folks.NameDetails, Folks.PhoneDetails, Folks.PresenceDetails, Folks.UrlDetails {
        static $gtype: GObject.GType<Persona>;

        // Properties
        get is_in_contact_list(): boolean;
        set is_in_contact_list(val: boolean);

        get isInContactList(): boolean;
        set isInContactList(val: boolean);

        /**
         * @construct-only
         */
        get contact(): TelepathyGLib.Contact;

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

        static ["new"](contact: TelepathyGLib.Contact, store: PersonaStore): Persona;

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
        static dup_for_contact(contact: TelepathyGLib.Contact): Persona;

        // Methods
        get_is_in_contact_list(): boolean;

        /**
         * @param value 
         */
        set_is_in_contact_list(value: boolean): void;

        get_contact(): TelepathyGLib.Contact;

        /** @category Inherited from Folks.AliasDetails */
        get alias(): string;
        set alias(val: string);

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

        /** @category Inherited from Folks.GroupDetails */
        get groups(): Gee.Set;
        set groups(val: Gee.Set);

        /**
         * @read-only
          * @category Inherited from Folks.InteractionDetails
         */
        get im_interaction_count(): number;

        /**
         * @read-only
          * @category Inherited from Folks.InteractionDetails
         */
        get imInteractionCount(): number;

        /**
         * @read-only
          * @category Inherited from Folks.InteractionDetails
         */
        get last_im_interaction_datetime(): GLib.DateTime;

        /**
         * @read-only
          * @category Inherited from Folks.InteractionDetails
         */
        get lastImInteractionDatetime(): GLib.DateTime;

        /**
         * @read-only
          * @category Inherited from Folks.InteractionDetails
         */
        get call_interaction_count(): number;

        /**
         * @read-only
          * @category Inherited from Folks.InteractionDetails
         */
        get callInteractionCount(): number;

        /**
         * @read-only
          * @category Inherited from Folks.InteractionDetails
         */
        get last_call_interaction_datetime(): GLib.DateTime;

        /**
         * @read-only
          * @category Inherited from Folks.InteractionDetails
         */
        get lastCallInteractionDatetime(): GLib.DateTime;

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

        /** @category Inherited from Folks.PhoneDetails */
        get phone_numbers(): Gee.Set;
        set phone_numbers(val: Gee.Set);

        /** @category Inherited from Folks.PhoneDetails */
        get phoneNumbers(): Gee.Set;
        set phoneNumbers(val: Gee.Set);

        /** @category Inherited from Folks.PresenceDetails */
        get presence_type(): Folks.PresenceType;
        set presence_type(val: Folks.PresenceType);

        /** @category Inherited from Folks.PresenceDetails */
        get presenceType(): Folks.PresenceType;
        set presenceType(val: Folks.PresenceType);

        /** @category Inherited from Folks.PresenceDetails */
        get presence_message(): string;
        set presence_message(val: string);

        /** @category Inherited from Folks.PresenceDetails */
        get presenceMessage(): string;
        set presenceMessage(val: string);

        /** @category Inherited from Folks.PresenceDetails */
        get client_types(): string[];
        set client_types(val: string[]);

        /** @category Inherited from Folks.PresenceDetails */
        get clientTypes(): string[];
        set clientTypes(val: string[]);

        /** @category Inherited from Folks.PresenceDetails */
        get presence_status(): string;
        set presence_status(val: string);

        /** @category Inherited from Folks.PresenceDetails */
        get presenceStatus(): string;
        set presenceStatus(val: string);

        /** @category Inherited from Folks.UrlDetails */
        get urls(): Gee.Set;
        set urls(val: Gee.Set);

        /**
         * @param alias 
         */
        change_alias(alias: string): globalThis.Promise<void>;

        /**
         * @param alias 
         * @param _callback_ 
         */
        change_alias(alias: string, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param alias 
         * @param _callback_ 
         */
        change_alias(alias: string, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        change_alias_finish(_res_: Gio.AsyncResult): void;

        get_alias(): string;

        /**
         * @param value 
         */
        set_alias(value: string): void;

        /**
         * @param alias 
         * @param _callback_ 
         * @virtual
         */
        vfunc_change_alias(alias: string, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_change_alias_finish(_res_: Gio.AsyncResult): void;

        /**
         * @virtual
         */
        vfunc_get_alias(): string;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_alias(value: string): void;

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

        get_im_interaction_count(): number;

        get_last_im_interaction_datetime(): GLib.DateTime;

        get_call_interaction_count(): number;

        get_last_call_interaction_datetime(): GLib.DateTime;

        /**
         * @virtual
         */
        vfunc_get_im_interaction_count(): number;

        /**
         * @virtual
         */
        vfunc_get_last_im_interaction_datetime(): GLib.DateTime;

        /**
         * @virtual
         */
        vfunc_get_call_interaction_count(): number;

        /**
         * @virtual
         */
        vfunc_get_last_call_interaction_datetime(): GLib.DateTime;

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

        is_online(): boolean;

        get_presence_type(): Folks.PresenceType;

        /**
         * @param value 
         */
        set_presence_type(value: Folks.PresenceType): void;

        get_presence_message(): string;

        /**
         * @param value 
         */
        set_presence_message(value: string): void;

        get_client_types(): string[];

        /**
         * @param value 
         */
        set_client_types(value: string[]): void;

        get_presence_status(): string;

        /**
         * @param value 
         */
        set_presence_status(value: string): void;

        /**
         * @virtual
         */
        vfunc_get_presence_type(): Folks.PresenceType;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_presence_type(value: Folks.PresenceType): void;

        /**
         * @virtual
         */
        vfunc_get_presence_message(): string;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_presence_message(value: string): void;

        /**
         * @virtual
         */
        vfunc_get_client_types(): string[];

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_client_types(value: string[]): void;

        /**
         * @virtual
         */
        vfunc_get_presence_status(): string;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_presence_status(value: string): void;

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

export default FolksTelepathy;

// END
