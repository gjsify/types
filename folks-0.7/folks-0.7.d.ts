/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './folks-0.7-ambient.d.ts';
import './folks-0.7-import.d.ts';
/**
 * Folks-0.7
 */

import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type Gee from '@girs/gee-0.8';

export namespace Folks {
    enum Gender {
        UNSPECIFIED,
        MALE,
        FEMALE,
    }
    enum TrustLevel {
        NONE,
        PERSONAS,
    }
    enum PersonaStoreTrust {
        NONE,
        PARTIAL,
        FULL,
    }
    enum PersonaDetail {
        INVALID,
        ALIAS,
        AVATAR,
        BIRTHDAY,
        EMAIL_ADDRESSES,
        FULL_NAME,
        GENDER,
        IM_ADDRESSES,
        IS_FAVOURITE,
        LOCAL_IDS,
        LOCATION,
        NICKNAME,
        NOTES,
        PHONE_NUMBERS,
        POSTAL_ADDRESSES,
        ROLES,
        STRUCTURED_NAME,
        URLS,
        WEB_SERVICE_ADDRESSES,
        GROUPS,
        IM_INTERACTION_COUNT,
        LAST_IM_INTERACTION_DATETIME,
        CALL_INTERACTION_COUNT,
        LAST_CALL_INTERACTION_DATETIME,
        ANTI_LINKS,
        EXTENDED_INFO,
    }
    enum MatchResult {
        NONE,
        VERY_LOW,
        LOW,
        MEDIUM,
        HIGH,
        VERY_HIGH,
        MIN,
        MAX,
    }
    enum PresenceType {
        UNSET,
        OFFLINE,
        AVAILABLE,
        AWAY,
        EXTENDED_AWAY,
        HIDDEN,
        BUSY,
        UNKNOWN,
        ERROR,
    }
    enum MaybeBool {
        UNSET,
        FALSE,
        TRUE,
    }
    class ImDetailsError extends GLib.Error {
        // Own fields of Folks-0.7.ImDetailsError

        INVALID_IM_ADDRESS: number;

        // Constructors of Folks-0.7.ImDetailsError

        constructor(options: { message: string; code: number });
    }

    class IndividualAggregatorError extends GLib.Error {
        // Own fields of Folks-0.7.IndividualAggregatorError

        ADD_FAILED: number;
        NO_WRITEABLE_STORE: number;
        STORE_OFFLINE: number;
        PROPERTY_NOT_WRITEABLE: number;
        NO_PRIMARY_STORE: number;

        // Constructors of Folks-0.7.IndividualAggregatorError

        constructor(options: { message: string; code: number });
    }

    class PersonaStoreError extends GLib.Error {
        // Own fields of Folks-0.7.PersonaStoreError

        INVALID_ARGUMENT: number;
        CREATE_FAILED: number;
        UNSUPPORTED_ON_USER: number;
        STORE_OFFLINE: number;
        READ_ONLY: number;
        PERMISSION_DENIED: number;
        REMOVE_FAILED: number;
        UNSUPPORTED_ON_NON_USER: number;

        // Constructors of Folks-0.7.PersonaStoreError

        constructor(options: { message: string; code: number });
    }

    class PropertyError extends GLib.Error {
        // Own fields of Folks-0.7.PropertyError

        NOT_WRITEABLE: number;
        INVALID_VALUE: number;
        UNKNOWN_ERROR: number;
        UNAVAILABLE: number;

        // Constructors of Folks-0.7.PropertyError

        constructor(options: { message: string; code: number });
    }

    enum GroupDetailsChangeReason {
        NONE,
        OFFLINE,
        KICKED,
        BUSY,
        INVITED,
        BANNED,
        ERROR,
        INVALID_MEMBER,
        NO_ANSWER,
        RENAMED,
        PERMISSION_DENIED,
        SEPARATED,
    }
    module AbstractFieldDetails {
        // Constructor properties interface
    }

    abstract class AbstractFieldDetails extends GObject.Object {
        // Own properties of Folks-0.7.AbstractFieldDetails

        t_type: GObject.GType;
        tType: GObject.GType;
        t_dup_func: GObject.BoxedCopyFunc;
        tDupFunc: GObject.BoxedCopyFunc;
        t_destroy_func: GLib.DestroyNotify;
        tDestroyFunc: GLib.DestroyNotify;
        value: any;
        readonly value_type: GObject.GType;
        readonly valueType: GObject.GType;
        id: string;
        parameters: Gee.MultiMap;

        // Owm methods of Folks-0.7.AbstractFieldDetails

        static equal_static(left: AbstractFieldDetails, right: AbstractFieldDetails): boolean;
        static hash_static(value: AbstractFieldDetails): number;

        // Owm methods of Folks-0.7.AbstractFieldDetails

        get_parameter_values(parameter_name: string): Gee.Collection | null;
        add_parameter(parameter_name: string, parameter_value: string): void;
        set_parameter(parameter_name: string, parameter_value: string): void;
        extend_parameters(additional: Gee.MultiMap): void;
        remove_parameter_all(parameter_name: string): void;
        equal(that: AbstractFieldDetails): boolean;
        parameters_equal(that: AbstractFieldDetails): boolean;
        values_equal(that: AbstractFieldDetails): boolean;
        hash(): number;
        get_value(): any;
        set_value(value: any): void;
        get_value_type(): GObject.GType;
        get_id(): string;
        set_id(value: string): void;
        get_parameters(): Gee.MultiMap;
        set_parameters(value: Gee.MultiMap): void;
    }

    module AvatarCache {
        // Constructor properties interface
    }

    class AvatarCache extends GObject.Object {
        // Owm methods of Folks-0.7.AvatarCache

        static dup(): AvatarCache;

        // Owm methods of Folks-0.7.AvatarCache

        load_avatar(id: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        load_avatar_finish(_res_: Gio.AsyncResult): Gio.LoadableIcon | null;
        store_avatar(id: string, avatar: Gio.LoadableIcon, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        store_avatar_finish(_res_: Gio.AsyncResult): string;
        remove_avatar(id: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        remove_avatar_finish(_res_: Gio.AsyncResult): void;
        build_uri_for_avatar(id: string): string;
    }

    module BackendStore {
        // Signal callback interfaces

        interface BackendAvailable {
            (backend: Backend): void;
        }

        // Constructor properties interface
    }

    class BackendStore extends GObject.Object {
        // Own properties of Folks-0.7.BackendStore

        enabled_backends: Gee.Map;
        enabledBackends: Gee.Map;
        is_prepared: boolean;
        isPrepared: boolean;

        // Own fields of Folks-0.7.BackendStore

        folks_backend_store_KEY_FILE_GROUP_ALL_OTHERS: string;

        // Owm methods of Folks-0.7.BackendStore

        static dup(): BackendStore;

        // Owm methods of Folks-0.7.BackendStore

        prepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        prepare_finish(_res_: Gio.AsyncResult): void;
        load_backends(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        load_backends_finish(_res_: Gio.AsyncResult): void;
        add_backend(backend: Backend): void;
        dup_backend_by_name(name: string): Backend | null;
        list_backends(): Gee.Collection;
        enable_backend(name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        enable_backend_finish(_res_: Gio.AsyncResult): void;
        disable_backend(name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        disable_backend_finish(_res_: Gio.AsyncResult): void;
        get_enabled_backends(): Gee.Map;
        get_is_prepared(): boolean;
    }

    module Backend {
        // Signal callback interfaces

        interface PersonaStoreAdded {
            (store: PersonaStore): void;
        }

        interface PersonaStoreRemoved {
            (store: PersonaStore): void;
        }

        // Constructor properties interface
    }

    abstract class Backend extends GObject.Object {
        // Own properties of Folks-0.7.Backend

        readonly is_prepared: boolean;
        readonly isPrepared: boolean;
        readonly is_quiescent: boolean;
        readonly isQuiescent: boolean;
        readonly name: string;
        readonly persona_stores: Gee.Map;
        readonly personaStores: Gee.Map;

        // Owm methods of Folks-0.7.Backend

        disable_persona_store(store: PersonaStore): void;
        enable_persona_store(store: PersonaStore): void;
        set_persona_stores(storeids?: Gee.Set | null): void;
        prepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        prepare_finish(_res_: Gio.AsyncResult): void;
        unprepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        unprepare_finish(_res_: Gio.AsyncResult): void;
        get_is_prepared(): boolean;
        get_is_quiescent(): boolean;
        get_name(): string;
        get_persona_stores(): Gee.Map;
    }

    module Debug {
        // Signal callback interfaces

        interface PrintStatus {
            (): void;
        }

        // Constructor properties interface
    }

    class Debug extends GObject.Object {
        // Own properties of Folks-0.7.Debug

        colour_enabled: boolean;
        colourEnabled: boolean;
        debug_output_enabled: boolean;
        debugOutputEnabled: boolean;

        // Owm methods of Folks-0.7.Debug

        static dup(): Debug;
        static dup_with_flags(debug_flags: string | null, colour_enabled: boolean): Debug;

        // Owm methods of Folks-0.7.Debug

        emit_print_status(): void;
        indent(): void;
        unindent(): void;
        get_colour_enabled(): boolean;
        set_colour_enabled(value: boolean): void;
        get_debug_output_enabled(): boolean;
        set_debug_output_enabled(value: boolean): void;
    }

    module EmailFieldDetails {
        // Constructor properties interface
    }

    class EmailFieldDetails extends AbstractFieldDetails {
        // Constructors of Folks-0.7.EmailFieldDetails

        static ['new'](value: string, parameters?: Gee.MultiMap | null): EmailFieldDetails;
    }

    module ExtendedFieldDetails {
        // Constructor properties interface
    }

    class ExtendedFieldDetails extends AbstractFieldDetails {
        // Constructors of Folks-0.7.ExtendedFieldDetails

        static ['new'](value: string, parameters?: Gee.MultiMap | null): ExtendedFieldDetails;
    }

    module ImFieldDetails {
        // Constructor properties interface
    }

    class ImFieldDetails extends AbstractFieldDetails {
        // Constructors of Folks-0.7.ImFieldDetails

        static ['new'](value: string, parameters?: Gee.MultiMap | null): ImFieldDetails;
    }

    module IndividualAggregator {
        // Signal callback interfaces

        interface IndividualsChanged {
            (
                added: Gee.Set,
                removed: Gee.Set,
                message: string | null,
                actor: Persona | null,
                reason: GroupDetailsChangeReason,
            ): void;
        }

        interface IndividualsChangedDetailed {
            (changes: Gee.MultiMap): void;
        }

        // Constructor properties interface
    }

    class IndividualAggregator extends GObject.Object {
        // Own properties of Folks-0.7.IndividualAggregator

        readonly is_prepared: boolean;
        readonly isPrepared: boolean;
        readonly is_quiescent: boolean;
        readonly isQuiescent: boolean;
        readonly primary_store: PersonaStore;
        readonly primaryStore: PersonaStore;
        backend_store: BackendStore;
        backendStore: BackendStore;
        individuals: Gee.Map;
        user: Individual;

        // Constructors of Folks-0.7.IndividualAggregator

        static ['new'](): IndividualAggregator;

        static with_backend_store(store: BackendStore): IndividualAggregator;

        // Owm methods of Folks-0.7.IndividualAggregator

        static dup(): IndividualAggregator;
        static dup_with_backend_store(store: BackendStore): IndividualAggregator | null;

        // Owm methods of Folks-0.7.IndividualAggregator

        prepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        prepare_finish(_res_: Gio.AsyncResult): void;
        unprepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        unprepare_finish(_res_: Gio.AsyncResult): void;
        get_potential_matches(matchee: Individual, min_threshold: MatchResult): Gee.Map;
        get_all_potential_matches(min_threshold: MatchResult): Gee.Map;
        add_persona_from_details(
            parent: Individual | null,
            persona_store: PersonaStore,
            details: GLib.HashTable<string, GObject.Value>,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        add_persona_from_details_finish(_res_: Gio.AsyncResult): Persona | null;
        remove_individual(individual: Individual, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        remove_individual_finish(_res_: Gio.AsyncResult): void;
        remove_persona(persona: Persona, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        remove_persona_finish(_res_: Gio.AsyncResult): void;
        link_personas(personas: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        link_personas_finish(_res_: Gio.AsyncResult): void;
        unlink_individual(individual: Individual, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        unlink_individual_finish(_res_: Gio.AsyncResult): void;
        ensure_individual_property_writeable(
            individual: Individual,
            property_name: string,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        ensure_individual_property_writeable_finish(_res_: Gio.AsyncResult): Persona;
        look_up_individual(id: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        look_up_individual_finish(_res_: Gio.AsyncResult): Individual | null;
        get_is_prepared(): boolean;
        get_is_quiescent(): boolean;
        get_primary_store(): PersonaStore | null;
        get_backend_store(): BackendStore;
        get_individuals(): Gee.Map;
        get_user(): Individual | null;
    }

    module Individual {
        // Signal callback interfaces

        interface Removed {
            (replacement_individual?: Individual | null): void;
        }

        interface PersonasChanged {
            (added: Gee.Set, removed: Gee.Set): void;
        }

        // Constructor properties interface
    }

    class Individual extends GObject.Object {
        // Own properties of Folks-0.7.Individual

        trust_level: TrustLevel;
        trustLevel: TrustLevel;
        is_user: boolean;
        isUser: boolean;
        id: string;
        readonly display_name: string;
        readonly displayName: string;
        personas: Gee.Set;

        // Constructors of Folks-0.7.Individual

        static ['new'](personas?: Gee.Set | null): Individual;

        // Owm methods of Folks-0.7.Individual

        has_anti_link_with_persona(p: Persona): boolean;
        has_anti_link_with_individual(i: Individual): boolean;
        get_trust_level(): TrustLevel;
        get_is_user(): boolean;
        get_id(): string;
        get_display_name(): string;
        get_personas(): Gee.Set;
        set_personas(value: Gee.Set): void;
    }

    module Location {
        // Constructor properties interface
    }

    class Location extends GObject.Object {
        // Own fields of Folks-0.7.Location

        latitude: number;
        longitude: number;

        // Constructors of Folks-0.7.Location

        static ['new'](latitude: number, longitude: number): Location;

        // Owm methods of Folks-0.7.Location

        equal(other: Location): boolean;
        equal_coordinates(latitude: number, longitude: number): boolean;
    }

    module StructuredName {
        // Constructor properties interface
    }

    class StructuredName extends GObject.Object {
        // Own properties of Folks-0.7.StructuredName

        family_name: string;
        familyName: string;
        given_name: string;
        givenName: string;
        additional_names: string;
        additionalNames: string;
        prefixes: string;
        suffixes: string;

        // Constructors of Folks-0.7.StructuredName

        static ['new'](
            family_name?: string | null,
            given_name?: string | null,
            additional_names?: string | null,
            prefixes?: string | null,
            suffixes?: string | null,
        ): StructuredName;

        static simple(family_name?: string | null, given_name?: string | null): StructuredName;

        // Owm methods of Folks-0.7.StructuredName

        is_empty(): boolean;
        equal(other: StructuredName): boolean;
        to_string(): string;
        to_string_with_format(name_fmt: string): string;
        get_family_name(): string;
        set_family_name(value: string): void;
        get_given_name(): string;
        set_given_name(value: string): void;
        get_additional_names(): string;
        set_additional_names(value: string): void;
        get_prefixes(): string;
        set_prefixes(value: string): void;
        get_suffixes(): string;
        set_suffixes(value: string): void;
    }

    module NoteFieldDetails {
        // Constructor properties interface
    }

    class NoteFieldDetails extends AbstractFieldDetails {
        // Own properties of Folks-0.7.NoteFieldDetails

        uid: string;

        // Constructors of Folks-0.7.NoteFieldDetails

        static ['new'](value: string, parameters?: Gee.MultiMap | null, uid?: string | null): NoteFieldDetails;

        // Owm methods of Folks-0.7.NoteFieldDetails

        get_uid(): string;
        set_uid(value: string): void;
    }

    module ObjectCache {
        // Constructor properties interface
    }

    abstract class ObjectCache extends GObject.Object {
        // Own properties of Folks-0.7.ObjectCache

        t_type: GObject.GType;
        tType: GObject.GType;
        t_dup_func: GObject.BoxedCopyFunc;
        tDupFunc: GObject.BoxedCopyFunc;
        t_destroy_func: GLib.DestroyNotify;
        tDestroyFunc: GLib.DestroyNotify;
        type_id: string;
        typeId: string;
        id: string;

        // Owm methods of Folks-0.7.ObjectCache

        get_serialised_object_type(object_version: number): GLib.VariantType | null;
        get_serialised_object_version(): number;
        serialise_object(object: any): GLib.Variant;
        deserialise_object(variant: GLib.Variant, object_version: number): any;
        load_objects(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        load_objects_finish(_res_: Gio.AsyncResult): Gee.Set | null;
        store_objects(
            objects: Gee.Set,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        store_objects_finish(_res_: Gio.AsyncResult): void;
        clear_cache(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        clear_cache_finish(_res_: Gio.AsyncResult): void;
        get_type_id(): string;
        get_id(): string;
    }

    module PersonaStore {
        // Signal callback interfaces

        interface PersonasChanged {
            (
                added: Gee.Set,
                removed: Gee.Set,
                message: string | null,
                actor: Persona | null,
                reason: GroupDetailsChangeReason,
            ): void;
        }

        interface Removed {
            (): void;
        }

        // Constructor properties interface
    }

    abstract class PersonaStore extends GObject.Object {
        // Own properties of Folks-0.7.PersonaStore

        readonly type_id: string;
        readonly typeId: string;
        display_name: string;
        displayName: string;
        id: string;
        readonly personas: Gee.Map;
        readonly can_add_personas: MaybeBool;
        readonly canAddPersonas: MaybeBool;
        readonly can_alias_personas: MaybeBool;
        readonly canAliasPersonas: MaybeBool;
        readonly can_group_personas: MaybeBool;
        readonly canGroupPersonas: MaybeBool;
        readonly can_remove_personas: MaybeBool;
        readonly canRemovePersonas: MaybeBool;
        readonly is_prepared: boolean;
        readonly isPrepared: boolean;
        readonly is_quiescent: boolean;
        readonly isQuiescent: boolean;
        is_writeable: boolean;
        isWriteable: boolean;
        trust_level: PersonaStoreTrust;
        trustLevel: PersonaStoreTrust;
        readonly always_writeable_properties: string[];
        readonly alwaysWriteableProperties: string[];
        is_primary_store: boolean;
        isPrimaryStore: boolean;
        is_user_set_default: boolean;
        isUserSetDefault: boolean;

        // Owm methods of Folks-0.7.PersonaStore

        static detail_key(detail: PersonaDetail): string | null;

        // Owm methods of Folks-0.7.PersonaStore

        _emit_personas_changed(
            added: Gee.Set | null,
            removed: Gee.Set | null,
            message: string | null,
            actor: Persona | null,
            reason: GroupDetailsChangeReason,
        ): void;
        prepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        prepare_finish(_res_: Gio.AsyncResult): void;
        flush(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        flush_finish(_res_: Gio.AsyncResult): void;
        add_persona_from_details(
            details: GLib.HashTable<string, GObject.Value>,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        add_persona_from_details_finish(_res_: Gio.AsyncResult): Persona | null;
        remove_persona(persona: Persona, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        remove_persona_finish(_res_: Gio.AsyncResult): void;
        get_type_id(): string;
        get_display_name(): string;
        get_id(): string;
        get_personas(): Gee.Map;
        get_can_add_personas(): MaybeBool;
        get_can_alias_personas(): MaybeBool;
        get_can_group_personas(): MaybeBool;
        get_can_remove_personas(): MaybeBool;
        get_is_prepared(): boolean;
        get_is_quiescent(): boolean;
        get_is_writeable(): boolean;
        set_is_writeable(value: boolean): void;
        get_trust_level(): PersonaStoreTrust;
        set_trust_level(value: PersonaStoreTrust): void;
        get_always_writeable_properties(): string[];
        get_is_primary_store(): boolean;
        get_is_user_set_default(): boolean;
    }

    module Persona {
        // Constructor properties interface
    }

    abstract class Persona extends GObject.Object {
        // Own properties of Folks-0.7.Persona

        iid: string;
        uid: string;
        display_id: string;
        displayId: string;
        is_user: boolean;
        isUser: boolean;
        store: PersonaStore;
        individual: Individual;
        readonly linkable_properties: string[];
        readonly linkableProperties: string[];
        readonly writeable_properties: string[];
        readonly writeableProperties: string[];

        // Owm methods of Folks-0.7.Persona

        static build_uid(backend_name: string, persona_store_id: string, persona_id: string): string;
        static split_uid(uid: string): void;

        // Owm methods of Folks-0.7.Persona

        linkable_property_to_links(prop_name: string, callback: PersonaLinkablePropertyCallback): void;
        get_iid(): string;
        get_uid(): string;
        get_display_id(): string;
        get_is_user(): boolean;
        get_store(): PersonaStore;
        get_individual(): Individual | null;
        get_linkable_properties(): string[];
        get_writeable_properties(): string[];
    }

    module PhoneFieldDetails {
        // Constructor properties interface
    }

    class PhoneFieldDetails extends AbstractFieldDetails {
        // Constructors of Folks-0.7.PhoneFieldDetails

        static ['new'](value: string, parameters?: Gee.MultiMap | null): PhoneFieldDetails;

        // Owm methods of Folks-0.7.PhoneFieldDetails

        get_normalised(): string;
    }

    module PostalAddress {
        // Constructor properties interface
    }

    class PostalAddress extends GObject.Object {
        // Own properties of Folks-0.7.PostalAddress

        po_box: string;
        poBox: string;
        extension: string;
        street: string;
        locality: string;
        region: string;
        postal_code: string;
        postalCode: string;
        country: string;
        address_format: string;
        addressFormat: string;
        uid: string;

        // Constructors of Folks-0.7.PostalAddress

        static ['new'](
            po_box?: string | null,
            extension?: string | null,
            street?: string | null,
            locality?: string | null,
            region?: string | null,
            postal_code?: string | null,
            country?: string | null,
            address_format?: string | null,
            uid?: string | null,
        ): PostalAddress;

        // Owm methods of Folks-0.7.PostalAddress

        is_empty(): boolean;
        equal(_with: PostalAddress): boolean;
        to_string(): string;
        get_po_box(): string;
        set_po_box(value: string): void;
        get_extension(): string;
        set_extension(value: string): void;
        get_street(): string;
        set_street(value: string): void;
        get_locality(): string;
        set_locality(value: string): void;
        get_region(): string;
        set_region(value: string): void;
        get_postal_code(): string;
        set_postal_code(value: string): void;
        get_country(): string;
        set_country(value: string): void;
        get_address_format(): string;
        set_address_format(value: string): void;
        get_uid(): string;
        set_uid(value: string): void;
    }

    module PostalAddressFieldDetails {
        // Constructor properties interface
    }

    class PostalAddressFieldDetails extends AbstractFieldDetails {
        // Constructors of Folks-0.7.PostalAddressFieldDetails

        static ['new'](value: PostalAddress, parameters?: Gee.MultiMap | null): PostalAddressFieldDetails;
    }

    module PotentialMatch {
        // Constructor properties interface
    }

    class PotentialMatch extends GObject.Object {
        // Own fields of Folks-0.7.PotentialMatch

        folks_potential_match_known_email_aliases: Gee.Set;

        // Constructors of Folks-0.7.PotentialMatch

        static ['new'](): PotentialMatch;

        // Owm methods of Folks-0.7.PotentialMatch

        potential_match(a: Individual, b: Individual): MatchResult;
    }

    module Query {
        // Constructor properties interface
    }

    abstract class Query extends GObject.Object {
        // Own properties of Folks-0.7.Query

        match_fields: string[];
        matchFields: string[];

        // Owm methods of Folks-0.7.Query

        is_match(individual: Individual): number;
        get_match_fields(): string[];
    }

    module Role {
        // Constructor properties interface
    }

    class Role extends GObject.Object {
        // Own properties of Folks-0.7.Role

        organisation_name: string;
        organisationName: string;
        title: string;
        role: string;
        uid: string;

        // Constructors of Folks-0.7.Role

        static ['new'](title?: string | null, organisation_name?: string | null, uid?: string | null): Role;

        // Owm methods of Folks-0.7.Role

        static equal(a: Role, b: Role): boolean;
        static hash(r: Role): number;

        // Owm methods of Folks-0.7.Role

        is_empty(): boolean;
        to_string(): string;
        get_organisation_name(): string;
        set_organisation_name(value: string): void;
        get_title(): string;
        set_title(value: string): void;
        get_role(): string;
        set_role(value: string): void;
        get_uid(): string;
        set_uid(value: string): void;
    }

    module RoleFieldDetails {
        // Constructor properties interface
    }

    class RoleFieldDetails extends AbstractFieldDetails {
        // Constructors of Folks-0.7.RoleFieldDetails

        static ['new'](value: Role, parameters?: Gee.MultiMap | null): RoleFieldDetails;
    }

    module SearchView {
        // Signal callback interfaces

        interface IndividualsChangedDetailed {
            (added: Gee.SortedSet, removed: Gee.SortedSet): void;
        }

        // Constructor properties interface
    }

    class SearchView extends GObject.Object {
        // Own properties of Folks-0.7.SearchView

        readonly aggregator: IndividualAggregator;
        query: Query;
        readonly individuals: Gee.SortedSet;
        readonly is_prepared: boolean;
        readonly isPrepared: boolean;
        readonly is_quiescent: boolean;
        readonly isQuiescent: boolean;

        // Constructors of Folks-0.7.SearchView

        static ['new'](aggregator: IndividualAggregator, query: Query): SearchView;

        // Owm methods of Folks-0.7.SearchView

        prepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        prepare_finish(_res_: Gio.AsyncResult): void;
        unprepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        unprepare_finish(_res_: Gio.AsyncResult): void;
        refresh(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        refresh_finish(_res_: Gio.AsyncResult): void;
        get_aggregator(): IndividualAggregator;
        get_query(): Query;
        set_query(value: Query): void;
        get_individuals(): Gee.SortedSet;
        get_is_prepared(): boolean;
        get_is_quiescent(): boolean;
    }

    module SimpleQuery {
        // Constructor properties interface
    }

    class SimpleQuery extends Query {
        // Own properties of Folks-0.7.SimpleQuery

        query_string: string;
        queryString: string;
        query_locale: string;
        queryLocale: string;

        // Constructors of Folks-0.7.SimpleQuery

        static ['new'](query_string: string, match_fields: string[]): SimpleQuery;

        // Owm methods of Folks-0.7.SimpleQuery

        get_query_string(): string;
        set_query_string(value: string): void;
        get_query_locale(): string | null;
        set_query_locale(value?: string | null): void;
    }

    module UrlFieldDetails {
        // Constructor properties interface
    }

    class UrlFieldDetails extends AbstractFieldDetails {
        // Constructors of Folks-0.7.UrlFieldDetails

        static ['new'](value: string, parameters?: Gee.MultiMap | null): UrlFieldDetails;
    }

    module Utils {
        // Constructor properties interface
    }

    class Utils extends GObject.Object {
        // Constructors of Folks-0.7.Utils

        static ['new'](): Utils;

        // Owm methods of Folks-0.7.Utils

        static multi_map_str_str_equal(a: Gee.MultiMap, b: Gee.MultiMap): boolean;
        static multi_map_str_afd_equal(a: Gee.MultiMap, b: Gee.MultiMap): boolean;
        static set_afd_equal(a: Gee.Set, b: Gee.Set): boolean;
        static set_string_afd_equal(a: Gee.Set, b: Gee.Set): boolean;
    }

    module WebServiceFieldDetails {
        // Constructor properties interface
    }

    class WebServiceFieldDetails extends AbstractFieldDetails {
        // Constructors of Folks-0.7.WebServiceFieldDetails

        static ['new'](value: string, parameters?: Gee.MultiMap | null): WebServiceFieldDetails;
    }

    class AbstractFieldDetailsClass {}

    class AbstractFieldDetailsPrivate {}

    class AvatarCacheClass {}

    class AvatarCachePrivate {}

    class BackendStoreClass {}

    class BackendStorePrivate {}

    class BackendClass {}

    class BackendPrivate {}

    class DebugClass {}

    class DebugPrivate {}

    class EmailFieldDetailsClass {}

    class EmailFieldDetailsPrivate {}

    class ExtendedFieldDetailsClass {}

    class ExtendedFieldDetailsPrivate {}

    class ImFieldDetailsClass {}

    class ImFieldDetailsPrivate {}

    class IndividualAggregatorClass {}

    class IndividualAggregatorPrivate {}

    class IndividualClass {}

    class IndividualPrivate {}

    class LocationClass {}

    class LocationPrivate {}

    class StructuredNameClass {}

    class StructuredNamePrivate {}

    class NoteFieldDetailsClass {}

    class NoteFieldDetailsPrivate {}

    class ObjectCacheClass {}

    class ObjectCachePrivate {}

    class PersonaStoreClass {}

    class PersonaStorePrivate {}

    class PersonaClass {}

    class PersonaPrivate {}

    class PhoneFieldDetailsClass {}

    class PhoneFieldDetailsPrivate {}

    class PostalAddressClass {}

    class PostalAddressPrivate {}

    class PostalAddressFieldDetailsClass {}

    class PostalAddressFieldDetailsPrivate {}

    class PotentialMatchClass {}

    class PotentialMatchPrivate {}

    class QueryClass {}

    class QueryPrivate {}

    class RoleClass {}

    class RolePrivate {}

    class RoleFieldDetailsClass {}

    class RoleFieldDetailsPrivate {}

    class SearchViewClass {}

    class SearchViewPrivate {}

    class SimpleQueryClass {}

    class SimpleQueryPrivate {}

    class UrlFieldDetailsClass {}

    class UrlFieldDetailsPrivate {}

    class UtilsClass {}

    class UtilsPrivate {}

    class WebServiceFieldDetailsClass {}

    class WebServiceFieldDetailsPrivate {}

    class AliasDetailsIface {}

    class AntiLinkableIface {}

    class AvatarDetailsIface {}

    class BirthdayDetailsIface {}

    class EmailDetailsIface {}

    class ExtendedInfoIface {}

    class FavouriteDetailsIface {}

    class GenderDetailsIface {}

    class GroupDetailsIface {}

    class ImDetailsIface {}

    class InteractionDetailsIface {}

    class LocalIdDetailsIface {}

    class LocationDetailsIface {}

    class NameDetailsIface {}

    class NoteDetailsIface {}

    class PhoneDetailsIface {}

    class PostalAddressDetailsIface {}

    class PresenceDetailsIface {}

    class RoleDetailsIface {}

    class UrlDetailsIface {}

    class WebServiceDetailsIface {}

    interface AliasDetails {
        // Own properties of Folks-0.7.AliasDetails

        alias: string;

        // Owm methods of Folks-0.7.AliasDetails

        change_alias(alias: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        change_alias_finish(_res_: Gio.AsyncResult): void;
        get_alias(): string;
        set_alias(value: string): void;

        // Own virtual methods of Folks-0.7.AliasDetails

        vfunc_change_alias(alias: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_change_alias_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_alias(): string;
        vfunc_set_alias(value: string): void;
    }

    interface AntiLinkable {
        // Own properties of Folks-0.7.AntiLinkable

        anti_links: Gee.Set;
        antiLinks: Gee.Set;

        // Owm methods of Folks-0.7.AntiLinkable

        change_anti_links(anti_links: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        change_anti_links_finish(_res_: Gio.AsyncResult): void;
        has_anti_link_with_persona(other_persona: Persona): boolean;
        add_anti_links(other_personas: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        add_anti_links_finish(_res_: Gio.AsyncResult): void;
        remove_anti_links(other_personas: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        remove_anti_links_finish(_res_: Gio.AsyncResult): void;
        add_global_anti_link(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        add_global_anti_link_finish(_res_: Gio.AsyncResult): void;
        remove_global_anti_link(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        remove_global_anti_link_finish(_res_: Gio.AsyncResult): void;
        has_global_anti_link(): boolean;
        get_anti_links(): Gee.Set;
        set_anti_links(value: Gee.Set): void;

        // Own virtual methods of Folks-0.7.AntiLinkable

        vfunc_change_anti_links(anti_links: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_change_anti_links_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_anti_links(): Gee.Set;
        vfunc_set_anti_links(value: Gee.Set): void;
    }

    interface AvatarDetails {
        // Own properties of Folks-0.7.AvatarDetails

        avatar: Gio.LoadableIcon;

        // Owm methods of Folks-0.7.AvatarDetails

        change_avatar(avatar?: Gio.LoadableIcon | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        change_avatar_finish(_res_: Gio.AsyncResult): void;
        get_avatar(): Gio.LoadableIcon | null;
        set_avatar(value?: Gio.LoadableIcon | null): void;

        // Own virtual methods of Folks-0.7.AvatarDetails

        vfunc_change_avatar(avatar?: Gio.LoadableIcon | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_change_avatar_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_avatar(): Gio.LoadableIcon | null;
        vfunc_set_avatar(value?: Gio.LoadableIcon | null): void;
    }

    interface BirthdayDetails {
        // Own properties of Folks-0.7.BirthdayDetails

        birthday: GLib.DateTime;
        calendar_event_id: string;
        calendarEventId: string;

        // Owm methods of Folks-0.7.BirthdayDetails

        change_birthday(birthday?: GLib.DateTime | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        change_birthday_finish(_res_: Gio.AsyncResult): void;
        change_calendar_event_id(event_id?: string | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        change_calendar_event_id_finish(_res_: Gio.AsyncResult): void;
        get_birthday(): GLib.DateTime | null;
        set_birthday(value?: GLib.DateTime | null): void;
        get_calendar_event_id(): string | null;
        set_calendar_event_id(value?: string | null): void;

        // Own virtual methods of Folks-0.7.BirthdayDetails

        vfunc_change_birthday(birthday?: GLib.DateTime | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_change_birthday_finish(_res_: Gio.AsyncResult): void;
        vfunc_change_calendar_event_id(
            event_id?: string | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_change_calendar_event_id_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_birthday(): GLib.DateTime | null;
        vfunc_set_birthday(value?: GLib.DateTime | null): void;
        vfunc_get_calendar_event_id(): string | null;
        vfunc_set_calendar_event_id(value?: string | null): void;
    }

    interface EmailDetails {
        // Own properties of Folks-0.7.EmailDetails

        email_addresses: Gee.Set;
        emailAddresses: Gee.Set;

        // Owm methods of Folks-0.7.EmailDetails

        change_email_addresses(email_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        change_email_addresses_finish(_res_: Gio.AsyncResult): void;
        get_email_addresses(): Gee.Set;
        set_email_addresses(value: Gee.Set): void;

        // Own virtual methods of Folks-0.7.EmailDetails

        vfunc_change_email_addresses(email_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_change_email_addresses_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_email_addresses(): Gee.Set;
        vfunc_set_email_addresses(value: Gee.Set): void;
    }

    interface ExtendedInfo {
        // Owm methods of Folks-0.7.ExtendedInfo

        get_extended_field(name: string): ExtendedFieldDetails | null;
        change_extended_field(
            name: string,
            value: ExtendedFieldDetails,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        change_extended_field_finish(_res_: Gio.AsyncResult): void;
        remove_extended_field(name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        remove_extended_field_finish(_res_: Gio.AsyncResult): void;

        // Own virtual methods of Folks-0.7.ExtendedInfo

        vfunc_get_extended_field(name: string): ExtendedFieldDetails | null;
        vfunc_change_extended_field(
            name: string,
            value: ExtendedFieldDetails,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_change_extended_field_finish(_res_: Gio.AsyncResult): void;
        vfunc_remove_extended_field(name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_remove_extended_field_finish(_res_: Gio.AsyncResult): void;
    }

    interface FavouriteDetails {
        // Own properties of Folks-0.7.FavouriteDetails

        is_favourite: boolean;
        isFavourite: boolean;

        // Owm methods of Folks-0.7.FavouriteDetails

        change_is_favourite(is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        change_is_favourite_finish(_res_: Gio.AsyncResult): void;
        get_is_favourite(): boolean;
        set_is_favourite(value: boolean): void;

        // Own virtual methods of Folks-0.7.FavouriteDetails

        vfunc_change_is_favourite(is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_change_is_favourite_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_is_favourite(): boolean;
        vfunc_set_is_favourite(value: boolean): void;
    }

    interface GenderDetails {
        // Own properties of Folks-0.7.GenderDetails

        gender: Gender;

        // Owm methods of Folks-0.7.GenderDetails

        change_gender(gender: Gender, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        change_gender_finish(_res_: Gio.AsyncResult): void;
        get_gender(): Gender;
        set_gender(value: Gender): void;

        // Own virtual methods of Folks-0.7.GenderDetails

        vfunc_change_gender(gender: Gender, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_change_gender_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_gender(): Gender;
        vfunc_set_gender(value: Gender): void;
    }

    interface GroupDetails {
        // Own properties of Folks-0.7.GroupDetails

        groups: Gee.Set;

        // Owm methods of Folks-0.7.GroupDetails

        change_group(group: string, is_member: boolean, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        change_group_finish(_res_: Gio.AsyncResult): void;
        change_groups(groups: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        change_groups_finish(_res_: Gio.AsyncResult): void;
        get_groups(): Gee.Set;
        set_groups(value: Gee.Set): void;

        // Own virtual methods of Folks-0.7.GroupDetails

        vfunc_change_group(group: string, is_member: boolean, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_change_group_finish(_res_: Gio.AsyncResult): void;
        vfunc_change_groups(groups: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_change_groups_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_groups(): Gee.Set;
        vfunc_set_groups(value: Gee.Set): void;
    }

    interface ImDetails {
        // Own properties of Folks-0.7.ImDetails

        im_addresses: Gee.MultiMap;
        imAddresses: Gee.MultiMap;

        // Owm methods of Folks-0.7.ImDetails

        change_im_addresses(im_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        change_im_addresses_finish(_res_: Gio.AsyncResult): void;
        get_im_addresses(): Gee.MultiMap;
        set_im_addresses(value: Gee.MultiMap): void;

        // Own virtual methods of Folks-0.7.ImDetails

        vfunc_change_im_addresses(im_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_change_im_addresses_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_im_addresses(): Gee.MultiMap;
        vfunc_set_im_addresses(value: Gee.MultiMap): void;
    }

    interface InteractionDetails {
        // Own properties of Folks-0.7.InteractionDetails

        readonly im_interaction_count: number;
        readonly imInteractionCount: number;
        readonly last_im_interaction_datetime: GLib.DateTime;
        readonly lastImInteractionDatetime: GLib.DateTime;
        readonly call_interaction_count: number;
        readonly callInteractionCount: number;
        readonly last_call_interaction_datetime: GLib.DateTime;
        readonly lastCallInteractionDatetime: GLib.DateTime;

        // Owm methods of Folks-0.7.InteractionDetails

        get_im_interaction_count(): number;
        get_last_im_interaction_datetime(): GLib.DateTime | null;
        get_call_interaction_count(): number;
        get_last_call_interaction_datetime(): GLib.DateTime | null;

        // Own virtual methods of Folks-0.7.InteractionDetails

        vfunc_get_im_interaction_count(): number;
        vfunc_get_last_im_interaction_datetime(): GLib.DateTime | null;
        vfunc_get_call_interaction_count(): number;
        vfunc_get_last_call_interaction_datetime(): GLib.DateTime | null;
    }

    interface LocalIdDetails {
        // Own properties of Folks-0.7.LocalIdDetails

        local_ids: Gee.Set;
        localIds: Gee.Set;

        // Owm methods of Folks-0.7.LocalIdDetails

        change_local_ids(local_ids: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        change_local_ids_finish(_res_: Gio.AsyncResult): void;
        get_local_ids(): Gee.Set;
        set_local_ids(value: Gee.Set): void;

        // Own virtual methods of Folks-0.7.LocalIdDetails

        vfunc_change_local_ids(local_ids: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_change_local_ids_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_local_ids(): Gee.Set;
        vfunc_set_local_ids(value: Gee.Set): void;
    }

    interface LocationDetails {
        // Own properties of Folks-0.7.LocationDetails

        location: Location;

        // Owm methods of Folks-0.7.LocationDetails

        change_location(location?: Location | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        change_location_finish(_res_: Gio.AsyncResult): void;
        get_location(): Location | null;
        set_location(value?: Location | null): void;

        // Own virtual methods of Folks-0.7.LocationDetails

        vfunc_change_location(location?: Location | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_change_location_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_location(): Location | null;
        vfunc_set_location(value?: Location | null): void;
    }

    interface NameDetails {
        // Own properties of Folks-0.7.NameDetails

        structured_name: StructuredName;
        structuredName: StructuredName;
        full_name: string;
        fullName: string;
        nickname: string;

        // Owm methods of Folks-0.7.NameDetails

        change_structured_name(name?: StructuredName | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        change_structured_name_finish(_res_: Gio.AsyncResult): void;
        change_full_name(full_name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        change_full_name_finish(_res_: Gio.AsyncResult): void;
        change_nickname(nickname: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        change_nickname_finish(_res_: Gio.AsyncResult): void;
        get_structured_name(): StructuredName | null;
        set_structured_name(value?: StructuredName | null): void;
        get_full_name(): string;
        set_full_name(value: string): void;
        get_nickname(): string;
        set_nickname(value: string): void;

        // Own virtual methods of Folks-0.7.NameDetails

        vfunc_change_structured_name(
            name?: StructuredName | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_change_structured_name_finish(_res_: Gio.AsyncResult): void;
        vfunc_change_full_name(full_name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_change_full_name_finish(_res_: Gio.AsyncResult): void;
        vfunc_change_nickname(nickname: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_change_nickname_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_structured_name(): StructuredName | null;
        vfunc_set_structured_name(value?: StructuredName | null): void;
        vfunc_get_full_name(): string;
        vfunc_set_full_name(value: string): void;
        vfunc_get_nickname(): string;
        vfunc_set_nickname(value: string): void;
    }

    interface NoteDetails {
        // Own properties of Folks-0.7.NoteDetails

        notes: Gee.Set;

        // Owm methods of Folks-0.7.NoteDetails

        change_notes(notes: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        change_notes_finish(_res_: Gio.AsyncResult): void;
        get_notes(): Gee.Set;
        set_notes(value: Gee.Set): void;

        // Own virtual methods of Folks-0.7.NoteDetails

        vfunc_change_notes(notes: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_change_notes_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_notes(): Gee.Set;
        vfunc_set_notes(value: Gee.Set): void;
    }

    interface PhoneDetails {
        // Own properties of Folks-0.7.PhoneDetails

        phone_numbers: Gee.Set;
        phoneNumbers: Gee.Set;

        // Owm methods of Folks-0.7.PhoneDetails

        change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        change_phone_numbers_finish(_res_: Gio.AsyncResult): void;
        get_phone_numbers(): Gee.Set;
        set_phone_numbers(value: Gee.Set): void;

        // Own virtual methods of Folks-0.7.PhoneDetails

        vfunc_change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_change_phone_numbers_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_phone_numbers(): Gee.Set;
        vfunc_set_phone_numbers(value: Gee.Set): void;
    }

    interface PostalAddressDetails {
        // Own properties of Folks-0.7.PostalAddressDetails

        postal_addresses: Gee.Set;
        postalAddresses: Gee.Set;

        // Owm methods of Folks-0.7.PostalAddressDetails

        change_postal_addresses(postal_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        change_postal_addresses_finish(_res_: Gio.AsyncResult): void;
        get_postal_addresses(): Gee.Set;
        set_postal_addresses(value: Gee.Set): void;

        // Own virtual methods of Folks-0.7.PostalAddressDetails

        vfunc_change_postal_addresses(
            postal_addresses: Gee.Set,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_change_postal_addresses_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_postal_addresses(): Gee.Set;
        vfunc_set_postal_addresses(value: Gee.Set): void;
    }

    interface PresenceDetails {
        // Own properties of Folks-0.7.PresenceDetails

        presence_type: PresenceType;
        presenceType: PresenceType;
        presence_message: string;
        presenceMessage: string;
        client_types: string[];
        clientTypes: string[];
        presence_status: string;
        presenceStatus: string;

        // Owm methods of Folks-0.7.PresenceDetails

        is_online(): boolean;
        get_presence_type(): PresenceType;
        set_presence_type(value: PresenceType): void;
        get_presence_message(): string;
        set_presence_message(value: string): void;
        get_client_types(): string[];
        set_client_types(value: string[]): void;
        get_presence_status(): string;
        set_presence_status(value: string): void;

        // Own virtual methods of Folks-0.7.PresenceDetails

        vfunc_get_presence_type(): PresenceType;
        vfunc_set_presence_type(value: PresenceType): void;
        vfunc_get_presence_message(): string;
        vfunc_set_presence_message(value: string): void;
        vfunc_get_client_types(): string[];
        vfunc_set_client_types(value: string[]): void;
        vfunc_get_presence_status(): string;
        vfunc_set_presence_status(value: string): void;
    }

    interface RoleDetails {
        // Own properties of Folks-0.7.RoleDetails

        roles: Gee.Set;

        // Owm methods of Folks-0.7.RoleDetails

        change_roles(roles: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        change_roles_finish(_res_: Gio.AsyncResult): void;
        get_roles(): Gee.Set;
        set_roles(value: Gee.Set): void;

        // Own virtual methods of Folks-0.7.RoleDetails

        vfunc_change_roles(roles: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_change_roles_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_roles(): Gee.Set;
        vfunc_set_roles(value: Gee.Set): void;
    }

    interface UrlDetails {
        // Own properties of Folks-0.7.UrlDetails

        urls: Gee.Set;

        // Owm methods of Folks-0.7.UrlDetails

        change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        change_urls_finish(_res_: Gio.AsyncResult): void;
        get_urls(): Gee.Set;
        set_urls(value: Gee.Set): void;

        // Own virtual methods of Folks-0.7.UrlDetails

        vfunc_change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_change_urls_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_urls(): Gee.Set;
        vfunc_set_urls(value: Gee.Set): void;
    }

    interface WebServiceDetails {
        // Own properties of Folks-0.7.WebServiceDetails

        web_service_addresses: Gee.MultiMap;
        webServiceAddresses: Gee.MultiMap;

        // Owm methods of Folks-0.7.WebServiceDetails

        change_web_service_addresses(
            web_service_addresses: Gee.MultiMap,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        change_web_service_addresses_finish(_res_: Gio.AsyncResult): void;
        get_web_service_addresses(): Gee.MultiMap;
        set_web_service_addresses(value: Gee.MultiMap): void;

        // Own virtual methods of Folks-0.7.WebServiceDetails

        vfunc_change_web_service_addresses(
            web_service_addresses: Gee.MultiMap,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_change_web_service_addresses_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_web_service_addresses(): Gee.MultiMap;
        vfunc_set_web_service_addresses(value: Gee.MultiMap): void;
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

export default Folks;
// END
