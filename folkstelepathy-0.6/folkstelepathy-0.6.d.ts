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
        // Constructor properties interface

        interface ConstructorProps extends Folks.PersonaStore.ConstructorProps {
            account: TelepathyGLib.Account;
        }
    }

    class PersonaStore extends Folks.PersonaStore {
        static $gtype: GObject.GType<PersonaStore>;

        // Properties

        get account(): TelepathyGLib.Account;

        // Constructors

        constructor(properties?: Partial<PersonaStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](account: TelepathyGLib.Account): PersonaStore;

        // Static methods

        static list_persona_stores(): Gee.Map;
        static dup_for_account(account: TelepathyGLib.Account): PersonaStore;

        // Methods

        get_account(): TelepathyGLib.Account;
    }

    namespace Persona {
        // Constructor properties interface

        interface ConstructorProps
            extends Folks.Persona.ConstructorProps,
                Folks.AliasDetails.ConstructorProps,
                Folks.AvatarDetails.ConstructorProps,
                Folks.BirthdayDetails.ConstructorProps,
                Folks.EmailDetails.ConstructorProps,
                Folks.FavouriteDetails.ConstructorProps,
                Folks.GroupDetails.ConstructorProps,
                Folks.InteractionDetails.ConstructorProps,
                Folks.ImDetails.ConstructorProps,
                Folks.NameDetails.ConstructorProps,
                Folks.PhoneDetails.ConstructorProps,
                Folks.PresenceDetails.ConstructorProps,
                Folks.UrlDetails.ConstructorProps {
            is_in_contact_list: boolean;
            isInContactList: boolean;
            contact: TelepathyGLib.Contact;
        }
    }

    class Persona
        extends Folks.Persona
        implements
            Folks.AliasDetails,
            Folks.AvatarDetails,
            Folks.BirthdayDetails,
            Folks.EmailDetails,
            Folks.FavouriteDetails,
            Folks.GroupDetails,
            Folks.InteractionDetails,
            Folks.ImDetails,
            Folks.NameDetails,
            Folks.PhoneDetails,
            Folks.PresenceDetails,
            Folks.UrlDetails
    {
        static $gtype: GObject.GType<Persona>;

        // Properties

        get is_in_contact_list(): boolean;
        set is_in_contact_list(val: boolean);
        get isInContactList(): boolean;
        set isInContactList(val: boolean);
        get contact(): TelepathyGLib.Contact;

        // Constructors

        constructor(properties?: Partial<Persona.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](contact: TelepathyGLib.Contact, store: PersonaStore): Persona;

        // Static methods

        static dup_for_contact(contact: TelepathyGLib.Contact): Persona;

        // Methods

        get_is_in_contact_list(): boolean;
        set_is_in_contact_list(value: boolean): void;
        get_contact(): TelepathyGLib.Contact;

        // Inherited properties
        get alias(): string;
        set alias(val: string);
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
        get groups(): Gee.Set;
        set groups(val: Gee.Set);
        get im_interaction_count(): number;
        get imInteractionCount(): number;
        get last_im_interaction_datetime(): GLib.DateTime;
        get lastImInteractionDatetime(): GLib.DateTime;
        get call_interaction_count(): number;
        get callInteractionCount(): number;
        get last_call_interaction_datetime(): GLib.DateTime;
        get lastCallInteractionDatetime(): GLib.DateTime;
        get im_addresses(): Gee.MultiMap;
        set im_addresses(val: Gee.MultiMap);
        get imAddresses(): Gee.MultiMap;
        set imAddresses(val: Gee.MultiMap);
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
        get phone_numbers(): Gee.Set;
        set phone_numbers(val: Gee.Set);
        get phoneNumbers(): Gee.Set;
        set phoneNumbers(val: Gee.Set);
        get presence_type(): Folks.PresenceType;
        set presence_type(val: Folks.PresenceType);
        get presenceType(): Folks.PresenceType;
        set presenceType(val: Folks.PresenceType);
        get presence_message(): string;
        set presence_message(val: string);
        get presenceMessage(): string;
        set presenceMessage(val: string);
        get client_types(): string[];
        set client_types(val: string[]);
        get clientTypes(): string[];
        set clientTypes(val: string[]);
        get presence_status(): string;
        set presence_status(val: string);
        get presenceStatus(): string;
        set presenceStatus(val: string);
        get urls(): Gee.Set;
        set urls(val: Gee.Set);

        // Inherited methods
        change_alias(alias: string): Promise<void>;
        change_alias(alias: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_alias(alias: string, _callback_?: Gio.AsyncReadyCallback<this>): Promise<void> | void;
        change_alias_finish(_res_: Gio.AsyncResult): void;
        get_alias(): string;
        set_alias(value: string): void;
        vfunc_change_alias(alias: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_alias_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_alias(): string;
        vfunc_set_alias(value: string): void;
        change_avatar(avatar: Gio.LoadableIcon): Promise<void>;
        change_avatar(avatar: Gio.LoadableIcon, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_avatar(avatar: Gio.LoadableIcon, _callback_?: Gio.AsyncReadyCallback<this>): Promise<void> | void;
        change_avatar_finish(_res_: Gio.AsyncResult): void;
        get_avatar(): Gio.LoadableIcon;
        set_avatar(value: Gio.LoadableIcon): void;
        vfunc_change_avatar(avatar: Gio.LoadableIcon, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_avatar_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_avatar(): Gio.LoadableIcon;
        vfunc_set_avatar(value: Gio.LoadableIcon): void;
        change_birthday(birthday: GLib.DateTime): Promise<void>;
        change_birthday(birthday: GLib.DateTime, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_birthday(birthday: GLib.DateTime, _callback_?: Gio.AsyncReadyCallback<this>): Promise<void> | void;
        change_birthday_finish(_res_: Gio.AsyncResult): void;
        change_calendar_event_id(event_id: string): Promise<void>;
        change_calendar_event_id(event_id: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_calendar_event_id(event_id: string, _callback_?: Gio.AsyncReadyCallback<this>): Promise<void> | void;
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
        change_email_addresses(email_addresses: Gee.Set): Promise<void>;
        change_email_addresses(email_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_email_addresses(
            email_addresses: Gee.Set,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): Promise<void> | void;
        change_email_addresses_finish(_res_: Gio.AsyncResult): void;
        get_email_addresses(): Gee.Set;
        set_email_addresses(value: Gee.Set): void;
        vfunc_change_email_addresses(email_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_email_addresses_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_email_addresses(): Gee.Set;
        vfunc_set_email_addresses(value: Gee.Set): void;
        change_is_favourite(is_favourite: boolean): Promise<void>;
        change_is_favourite(is_favourite: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_is_favourite(is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback<this>): Promise<void> | void;
        change_is_favourite_finish(_res_: Gio.AsyncResult): void;
        get_is_favourite(): boolean;
        set_is_favourite(value: boolean): void;
        vfunc_change_is_favourite(is_favourite: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_is_favourite_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_is_favourite(): boolean;
        vfunc_set_is_favourite(value: boolean): void;
        change_group(group: string, is_member: boolean): Promise<void>;
        change_group(group: string, is_member: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_group(
            group: string,
            is_member: boolean,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): Promise<void> | void;
        change_group_finish(_res_: Gio.AsyncResult): void;
        change_groups(groups: Gee.Set): Promise<void>;
        change_groups(groups: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_groups(groups: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this>): Promise<void> | void;
        change_groups_finish(_res_: Gio.AsyncResult): void;
        get_groups(): Gee.Set;
        set_groups(value: Gee.Set): void;
        vfunc_change_group(group: string, is_member: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_group_finish(_res_: Gio.AsyncResult): void;
        vfunc_change_groups(groups: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_groups_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_groups(): Gee.Set;
        vfunc_set_groups(value: Gee.Set): void;
        get_im_interaction_count(): number;
        get_last_im_interaction_datetime(): GLib.DateTime;
        get_call_interaction_count(): number;
        get_last_call_interaction_datetime(): GLib.DateTime;
        vfunc_get_im_interaction_count(): number;
        vfunc_get_last_im_interaction_datetime(): GLib.DateTime;
        vfunc_get_call_interaction_count(): number;
        vfunc_get_last_call_interaction_datetime(): GLib.DateTime;
        change_im_addresses(im_addresses: Gee.MultiMap): Promise<void>;
        change_im_addresses(im_addresses: Gee.MultiMap, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_im_addresses(
            im_addresses: Gee.MultiMap,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): Promise<void> | void;
        change_im_addresses_finish(_res_: Gio.AsyncResult): void;
        get_im_addresses(): Gee.MultiMap;
        set_im_addresses(value: Gee.MultiMap): void;
        vfunc_change_im_addresses(im_addresses: Gee.MultiMap, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_im_addresses_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_im_addresses(): Gee.MultiMap;
        vfunc_set_im_addresses(value: Gee.MultiMap): void;
        change_structured_name(name: Folks.StructuredName): Promise<void>;
        change_structured_name(name: Folks.StructuredName, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_structured_name(
            name: Folks.StructuredName,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): Promise<void> | void;
        change_structured_name_finish(_res_: Gio.AsyncResult): void;
        change_full_name(full_name: string): Promise<void>;
        change_full_name(full_name: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_full_name(full_name: string, _callback_?: Gio.AsyncReadyCallback<this>): Promise<void> | void;
        change_full_name_finish(_res_: Gio.AsyncResult): void;
        change_nickname(nickname: string): Promise<void>;
        change_nickname(nickname: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_nickname(nickname: string, _callback_?: Gio.AsyncReadyCallback<this>): Promise<void> | void;
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
        change_phone_numbers(phone_numbers: Gee.Set): Promise<void>;
        change_phone_numbers(phone_numbers: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this>): Promise<void> | void;
        change_phone_numbers_finish(_res_: Gio.AsyncResult): void;
        get_phone_numbers(): Gee.Set;
        set_phone_numbers(value: Gee.Set): void;
        vfunc_change_phone_numbers(phone_numbers: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_phone_numbers_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_phone_numbers(): Gee.Set;
        vfunc_set_phone_numbers(value: Gee.Set): void;
        is_online(): boolean;
        get_presence_type(): Folks.PresenceType;
        set_presence_type(value: Folks.PresenceType | null): void;
        get_presence_message(): string;
        set_presence_message(value: string): void;
        get_client_types(): string[];
        set_client_types(value: string[]): void;
        get_presence_status(): string;
        set_presence_status(value: string): void;
        vfunc_get_presence_type(): Folks.PresenceType;
        vfunc_set_presence_type(value: Folks.PresenceType): void;
        vfunc_get_presence_message(): string;
        vfunc_set_presence_message(value: string): void;
        vfunc_get_client_types(): string[];
        vfunc_set_client_types(value: string[]): void;
        vfunc_get_presence_status(): string;
        vfunc_set_presence_status(value: string): void;
        change_urls(urls: Gee.Set): Promise<void>;
        change_urls(urls: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this>): Promise<void> | void;
        change_urls_finish(_res_: Gio.AsyncResult): void;
        get_urls(): Gee.Set;
        set_urls(value: Gee.Set): void;
        vfunc_change_urls(urls: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_urls_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_urls(): Gee.Set;
        vfunc_set_urls(value: Gee.Set): void;
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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
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
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
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

    type PersonaStoreClass = typeof PersonaStore;
    abstract class PersonaStorePrivate {
        static $gtype: GObject.GType<PersonaStorePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PersonaClass = typeof Persona;
    abstract class PersonaPrivate {
        static $gtype: GObject.GType<PersonaPrivate>;

        // Constructors

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

export default FolksTelepathy;

// END
