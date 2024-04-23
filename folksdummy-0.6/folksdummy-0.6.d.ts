/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './folksdummy-0.6-ambient.d.ts';

import './folksdummy-0.6-import.d.ts';

/**
 * FolksDummy-0.6
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type Gee from '@girs/gee-0.8';
import type Folks from '@girs/folks-0.6';

export namespace FolksDummy {
    module Backend {
        // Constructor properties interface

        interface ConstructorProps extends Folks.Backend.ConstructorProps {}
    }

    class Backend extends Folks.Backend {
        static $gtype: GObject.GType<Backend>;

        // Constructors of FolksDummy.Backend

        constructor(properties?: Partial<Backend.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Backend;

        // Own methods of FolksDummy.Backend

        register_persona_stores(stores: Gee.Set, enable_stores: boolean): void;
        unregister_persona_stores(stores: Gee.Set): void;
    }

    module FullPersona {
        // Constructor properties interface

        interface ConstructorProps
            extends Persona.ConstructorProps,
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

        // Constructors of FolksDummy.FullPersona

        constructor(properties?: Partial<FullPersona.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            store: PersonaStore,
            contact_id: string,
            is_user: boolean,
            linkable_properties: string[],
        ): FullPersona;

        // Own methods of FolksDummy.FullPersona

        update_gender(gender: Folks.Gender): void;
        update_calendar_event_id(calendar_event_id: string): void;
        update_birthday(birthday: GLib.DateTime): void;
        update_roles(roles: Gee.Set): void;
        update_groups(groups: Gee.Set): void;
        update_web_service_addresses(web_service_addresses: Gee.MultiMap): void;
        update_email_addresses(email_addresses: Gee.Set): void;
        update_notes(notes: Gee.Set): void;
        update_full_name(full_name: string): void;
        update_nickname(nickname: string): void;
        update_structured_name(structured_name: Folks.StructuredName): void;
        update_avatar(avatar: Gio.LoadableIcon): void;
        update_urls(urls: Gee.Set): void;
        update_im_addresses(im_addresses: Gee.MultiMap): void;
        update_phone_numbers(phone_numbers: Gee.Set): void;
        update_postal_addresses(postal_addresses: Gee.Set): void;
        update_local_ids(local_ids: Gee.Set): void;
        update_is_favourite(is_favourite: boolean): void;
        update_anti_links(anti_links: Gee.Set): void;

        // Inherited properties
        get anti_links(): Gee.Set;
        set anti_links(val: Gee.Set);
        get antiLinks(): Gee.Set;
        set antiLinks(val: Gee.Set);
        get avatar(): Gio.LoadableIcon;
        set avatar(val: Gio.LoadableIcon);
        get birthday(): GLib.DateTime;
        set birthday(val: GLib.DateTime);
        get calendar_event_id(): string;
        set calendar_event_id(val: string);
        get calendarEventId(): string;
        set calendarEventId(val: string);
        get email_addresses(): Gee.Set;
        set email_addresses(val: Gee.Set);
        get emailAddresses(): Gee.Set;
        set emailAddresses(val: Gee.Set);
        get is_favourite(): boolean;
        set is_favourite(val: boolean);
        get isFavourite(): boolean;
        set isFavourite(val: boolean);
        get gender(): Folks.Gender;
        set gender(val: Folks.Gender);
        get groups(): Gee.Set;
        set groups(val: Gee.Set);
        get im_addresses(): Gee.MultiMap;
        set im_addresses(val: Gee.MultiMap);
        get imAddresses(): Gee.MultiMap;
        set imAddresses(val: Gee.MultiMap);
        get local_ids(): Gee.Set;
        set local_ids(val: Gee.Set);
        get localIds(): Gee.Set;
        set localIds(val: Gee.Set);
        get structured_name(): Folks.StructuredName;
        set structured_name(val: Folks.StructuredName);
        get structuredName(): Folks.StructuredName;
        set structuredName(val: Folks.StructuredName);
        get full_name(): string;
        set full_name(val: string);
        get fullName(): string;
        set fullName(val: string);
        get nickname(): string;
        set nickname(val: string);
        get notes(): Gee.Set;
        set notes(val: Gee.Set);
        get phone_numbers(): Gee.Set;
        set phone_numbers(val: Gee.Set);
        get phoneNumbers(): Gee.Set;
        set phoneNumbers(val: Gee.Set);
        get roles(): Gee.Set;
        set roles(val: Gee.Set);
        get urls(): Gee.Set;
        set urls(val: Gee.Set);
        get postal_addresses(): Gee.Set;
        set postal_addresses(val: Gee.Set);
        get postalAddresses(): Gee.Set;
        set postalAddresses(val: Gee.Set);
        get web_service_addresses(): Gee.MultiMap;
        set web_service_addresses(val: Gee.MultiMap);
        get webServiceAddresses(): Gee.MultiMap;
        set webServiceAddresses(val: Gee.MultiMap);
        get iid(): string;
        get uid(): string;
        get display_id(): string;
        get displayId(): string;
        get is_user(): boolean;
        get isUser(): boolean;
        get store(): Folks.PersonaStore;
        get individual(): Folks.Individual;
        set individual(val: Folks.Individual);
        get linkable_properties(): string[];
        get linkableProperties(): string[];
        get writeable_properties(): string[];
        get writeableProperties(): string[];

        // Inherited methods
        change_anti_links(anti_links: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_anti_links_finish(_res_: Gio.AsyncResult): void;
        has_anti_link_with_persona(other_persona: Folks.Persona): boolean;
        add_anti_links(other_personas: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        add_anti_links_finish(_res_: Gio.AsyncResult): void;
        remove_anti_links(other_personas: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        remove_anti_links_finish(_res_: Gio.AsyncResult): void;
        add_global_anti_link(_callback_: Gio.AsyncReadyCallback<this>): void;
        add_global_anti_link_finish(_res_: Gio.AsyncResult): void;
        remove_global_anti_link(_callback_: Gio.AsyncReadyCallback<this>): void;
        remove_global_anti_link_finish(_res_: Gio.AsyncResult): void;
        has_global_anti_link(): boolean;
        get_anti_links(): Gee.Set;
        set_anti_links(value: Gee.Set): void;
        vfunc_change_anti_links(anti_links: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_anti_links_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_anti_links(): Gee.Set;
        vfunc_set_anti_links(value: Gee.Set): void;
        change_avatar(avatar: Gio.LoadableIcon, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_avatar_finish(_res_: Gio.AsyncResult): void;
        get_avatar(): Gio.LoadableIcon;
        set_avatar(value: Gio.LoadableIcon): void;
        vfunc_change_avatar(avatar: Gio.LoadableIcon, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_avatar_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_avatar(): Gio.LoadableIcon;
        vfunc_set_avatar(value: Gio.LoadableIcon): void;
        change_birthday(birthday: GLib.DateTime, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_birthday_finish(_res_: Gio.AsyncResult): void;
        change_calendar_event_id(event_id: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_calendar_event_id_finish(_res_: Gio.AsyncResult): void;
        get_birthday(): GLib.DateTime;
        set_birthday(value: GLib.DateTime): void;
        get_calendar_event_id(): string;
        set_calendar_event_id(value: string): void;
        vfunc_change_birthday(birthday: GLib.DateTime, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_birthday_finish(_res_: Gio.AsyncResult): void;
        vfunc_change_calendar_event_id(event_id: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_calendar_event_id_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_birthday(): GLib.DateTime;
        vfunc_set_birthday(value: GLib.DateTime): void;
        vfunc_get_calendar_event_id(): string;
        vfunc_set_calendar_event_id(value: string): void;
        change_email_addresses(email_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_email_addresses_finish(_res_: Gio.AsyncResult): void;
        get_email_addresses(): Gee.Set;
        set_email_addresses(value: Gee.Set): void;
        vfunc_change_email_addresses(email_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_email_addresses_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_email_addresses(): Gee.Set;
        vfunc_set_email_addresses(value: Gee.Set): void;
        change_is_favourite(is_favourite: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_is_favourite_finish(_res_: Gio.AsyncResult): void;
        get_is_favourite(): boolean;
        set_is_favourite(value: boolean): void;
        vfunc_change_is_favourite(is_favourite: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_is_favourite_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_is_favourite(): boolean;
        vfunc_set_is_favourite(value: boolean): void;
        change_gender(gender: Folks.Gender, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_gender_finish(_res_: Gio.AsyncResult): void;
        get_gender(): Folks.Gender;
        set_gender(value: Folks.Gender): void;
        vfunc_change_gender(gender: Folks.Gender, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_gender_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_gender(): Folks.Gender;
        vfunc_set_gender(value: Folks.Gender): void;
        change_group(group: string, is_member: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_group_finish(_res_: Gio.AsyncResult): void;
        change_groups(groups: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_groups_finish(_res_: Gio.AsyncResult): void;
        get_groups(): Gee.Set;
        set_groups(value: Gee.Set): void;
        vfunc_change_group(group: string, is_member: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_group_finish(_res_: Gio.AsyncResult): void;
        vfunc_change_groups(groups: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_groups_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_groups(): Gee.Set;
        vfunc_set_groups(value: Gee.Set): void;
        change_im_addresses(im_addresses: Gee.MultiMap, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_im_addresses_finish(_res_: Gio.AsyncResult): void;
        get_im_addresses(): Gee.MultiMap;
        set_im_addresses(value: Gee.MultiMap): void;
        vfunc_change_im_addresses(im_addresses: Gee.MultiMap, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_im_addresses_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_im_addresses(): Gee.MultiMap;
        vfunc_set_im_addresses(value: Gee.MultiMap): void;
        change_local_ids(local_ids: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_local_ids_finish(_res_: Gio.AsyncResult): void;
        get_local_ids(): Gee.Set;
        set_local_ids(value: Gee.Set): void;
        vfunc_change_local_ids(local_ids: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_local_ids_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_local_ids(): Gee.Set;
        vfunc_set_local_ids(value: Gee.Set): void;
        change_structured_name(name: Folks.StructuredName, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_structured_name_finish(_res_: Gio.AsyncResult): void;
        change_full_name(full_name: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_full_name_finish(_res_: Gio.AsyncResult): void;
        change_nickname(nickname: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_nickname_finish(_res_: Gio.AsyncResult): void;
        get_structured_name(): Folks.StructuredName;
        set_structured_name(value: Folks.StructuredName): void;
        get_full_name(): string;
        set_full_name(value: string): void;
        get_nickname(): string;
        set_nickname(value: string): void;
        vfunc_change_structured_name(name: Folks.StructuredName, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_structured_name_finish(_res_: Gio.AsyncResult): void;
        vfunc_change_full_name(full_name: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_full_name_finish(_res_: Gio.AsyncResult): void;
        vfunc_change_nickname(nickname: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_nickname_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_structured_name(): Folks.StructuredName;
        vfunc_set_structured_name(value: Folks.StructuredName): void;
        vfunc_get_full_name(): string;
        vfunc_set_full_name(value: string): void;
        vfunc_get_nickname(): string;
        vfunc_set_nickname(value: string): void;
        change_notes(notes: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_notes_finish(_res_: Gio.AsyncResult): void;
        get_notes(): Gee.Set;
        set_notes(value: Gee.Set): void;
        vfunc_change_notes(notes: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_notes_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_notes(): Gee.Set;
        vfunc_set_notes(value: Gee.Set): void;
        change_phone_numbers(phone_numbers: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_phone_numbers_finish(_res_: Gio.AsyncResult): void;
        get_phone_numbers(): Gee.Set;
        set_phone_numbers(value: Gee.Set): void;
        vfunc_change_phone_numbers(phone_numbers: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_phone_numbers_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_phone_numbers(): Gee.Set;
        vfunc_set_phone_numbers(value: Gee.Set): void;
        change_roles(roles: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_roles_finish(_res_: Gio.AsyncResult): void;
        get_roles(): Gee.Set;
        set_roles(value: Gee.Set): void;
        vfunc_change_roles(roles: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_roles_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_roles(): Gee.Set;
        vfunc_set_roles(value: Gee.Set): void;
        change_urls(urls: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_urls_finish(_res_: Gio.AsyncResult): void;
        get_urls(): Gee.Set;
        set_urls(value: Gee.Set): void;
        vfunc_change_urls(urls: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_urls_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_urls(): Gee.Set;
        vfunc_set_urls(value: Gee.Set): void;
        change_postal_addresses(postal_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_postal_addresses_finish(_res_: Gio.AsyncResult): void;
        get_postal_addresses(): Gee.Set;
        set_postal_addresses(value: Gee.Set): void;
        vfunc_change_postal_addresses(postal_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_postal_addresses_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_postal_addresses(): Gee.Set;
        vfunc_set_postal_addresses(value: Gee.Set): void;
        change_web_service_addresses(
            web_service_addresses: Gee.MultiMap,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        change_web_service_addresses_finish(_res_: Gio.AsyncResult): void;
        get_web_service_addresses(): Gee.MultiMap;
        set_web_service_addresses(value: Gee.MultiMap): void;
        vfunc_change_web_service_addresses(
            web_service_addresses: Gee.MultiMap,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        vfunc_change_web_service_addresses_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_web_service_addresses(): Gee.MultiMap;
        vfunc_set_web_service_addresses(value: Gee.MultiMap): void;
        linkable_property_to_links(prop_name: string, callback: Folks.Persona.LinkablePropertyCallback): void;
        get_iid(): string;
        get_uid(): string;
        get_display_id(): string;
        get_is_user(): boolean;
        get_store(): Folks.PersonaStore;
        get_individual(): Folks.Individual;
        get_linkable_properties(): string[];
        get_writeable_properties(): string[];
        vfunc_linkable_property_to_links(prop_name: string, callback: Folks.Persona.LinkablePropertyCallback): void;
        vfunc_get_linkable_properties(): string[];
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        vfunc_constructed(): void;
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        vfunc_dispose(): void;
        vfunc_finalize(): void;
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module PersonaStore {
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

    class PersonaStore extends Folks.PersonaStore {
        static $gtype: GObject.GType<PersonaStore>;

        // Own properties of FolksDummy.PersonaStore

        get persona_type(): GObject.GType;
        set persona_type(val: GObject.GType);
        get personaType(): GObject.GType;
        set personaType(val: GObject.GType);

        // Constructors of FolksDummy.PersonaStore

        constructor(properties?: Partial<PersonaStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, display_name: string, always_writeable_properties: string[]): PersonaStore;

        // Own methods of FolksDummy.PersonaStore

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
        set_add_persona_from_details_mock(mock: PersonaStore.AddPersonaFromDetailsMock): void;
        set_remove_persona_mock(mock: PersonaStore.RemovePersonaMock): void;
        set_prepare_mock(mock: PersonaStore.PrepareMock): void;
        get_persona_type(): GObject.GType;
        set_persona_type(value: GObject.GType): void;
    }

    module Persona {
        interface ChangePropertyCallback {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Folks.Persona.ConstructorProps {
            property_change_delay: number;
            propertyChangeDelay: number;
        }
    }

    class Persona extends Folks.Persona {
        static $gtype: GObject.GType<Persona>;

        // Own properties of FolksDummy.Persona

        get property_change_delay(): number;
        set property_change_delay(val: number);
        get propertyChangeDelay(): number;
        set propertyChangeDelay(val: number);

        // Constructors of FolksDummy.Persona

        constructor(properties?: Partial<Persona.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            store: PersonaStore,
            contact_id: string,
            is_user: boolean,
            linkable_properties: string[],
        ): Persona;

        // Own methods of FolksDummy.Persona

        update_writeable_properties(writeable_properties: string[]): void;
        update_linkable_properties(linkable_properties: string[]): void;
        change_property(
            property_name: string,
            callback: Persona.ChangePropertyCallback,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        change_property_finish(_res_: Gio.AsyncResult): void;
        get_property_change_delay(): number;
        set_property_change_delay(value: number): void;
    }

    type BackendClass = typeof Backend;
    abstract class BackendPrivate {
        static $gtype: GObject.GType<BackendPrivate>;

        // Constructors of FolksDummy.BackendPrivate

        _init(...args: any[]): void;
    }

    type FullPersonaClass = typeof FullPersona;
    abstract class FullPersonaPrivate {
        static $gtype: GObject.GType<FullPersonaPrivate>;

        // Constructors of FolksDummy.FullPersonaPrivate

        _init(...args: any[]): void;
    }

    type PersonaStoreClass = typeof PersonaStore;
    abstract class PersonaStorePrivate {
        static $gtype: GObject.GType<PersonaStorePrivate>;

        // Constructors of FolksDummy.PersonaStorePrivate

        _init(...args: any[]): void;
    }

    type PersonaClass = typeof Persona;
    abstract class PersonaPrivate {
        static $gtype: GObject.GType<PersonaPrivate>;

        // Constructors of FolksDummy.PersonaPrivate

        _init(...args: any[]): void;
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
