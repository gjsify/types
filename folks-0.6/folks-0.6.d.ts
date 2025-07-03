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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gee from '@girs/gee-0.8';

export namespace Folks {
    /**
     * Folks-0.6
     */

    export namespace Gender {
        export const $gtype: GObject.GType<Gender>;
    }

    enum Gender {
        UNSPECIFIED,
        MALE,
        FEMALE,
    }

    export namespace TrustLevel {
        export const $gtype: GObject.GType<TrustLevel>;
    }

    enum TrustLevel {
        NONE,
        PERSONAS,
    }

    export namespace PersonaStoreTrust {
        export const $gtype: GObject.GType<PersonaStoreTrust>;
    }

    enum PersonaStoreTrust {
        NONE,
        PARTIAL,
        FULL,
    }

    export namespace PersonaDetail {
        export const $gtype: GObject.GType<PersonaDetail>;
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

    export namespace MatchResult {
        export const $gtype: GObject.GType<MatchResult>;
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

    export namespace PresenceType {
        export const $gtype: GObject.GType<PresenceType>;
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

    export namespace MaybeBool {
        export const $gtype: GObject.GType<MaybeBool>;
    }

    enum MaybeBool {
        UNSET,
        FALSE,
        TRUE,
    }
    class ImDetailsError extends GLib.Error {
        static $gtype: GObject.GType<ImDetailsError>;

        // Static fields

        static INVALID_IM_ADDRESS: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    class IndividualAggregatorError extends GLib.Error {
        static $gtype: GObject.GType<IndividualAggregatorError>;

        // Static fields

        static ADD_FAILED: number;
        static NO_WRITEABLE_STORE: number;
        static STORE_OFFLINE: number;
        static PROPERTY_NOT_WRITEABLE: number;
        static NO_PRIMARY_STORE: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    class PersonaStoreError extends GLib.Error {
        static $gtype: GObject.GType<PersonaStoreError>;

        // Static fields

        static INVALID_ARGUMENT: number;
        static CREATE_FAILED: number;
        static UNSUPPORTED_ON_USER: number;
        static STORE_OFFLINE: number;
        static READ_ONLY: number;
        static PERMISSION_DENIED: number;
        static REMOVE_FAILED: number;
        static UNSUPPORTED_ON_NON_USER: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    class PropertyError extends GLib.Error {
        static $gtype: GObject.GType<PropertyError>;

        // Static fields

        static NOT_WRITEABLE: number;
        static INVALID_VALUE: number;
        static UNKNOWN_ERROR: number;
        static UNAVAILABLE: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    export namespace GroupDetailsChangeReason {
        export const $gtype: GObject.GType<GroupDetailsChangeReason>;
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
    namespace AbstractFieldDetails {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::t-type': (pspec: GObject.ParamSpec) => void;
            'notify::t-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::t-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::value': (pspec: GObject.ParamSpec) => void;
            'notify::value-type': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::parameters': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            t_type: GObject.GType;
            tType: GObject.GType;
            t_dup_func: GObject.BoxedCopyFunc;
            tDupFunc: GObject.BoxedCopyFunc;
            t_destroy_func: GLib.DestroyNotify;
            tDestroyFunc: GLib.DestroyNotify;
            value: any;
            value_type: GObject.GType;
            valueType: GObject.GType;
            id: string;
            parameters: Gee.MultiMap;
        }
    }

    abstract class AbstractFieldDetails extends GObject.Object {
        static $gtype: GObject.GType<AbstractFieldDetails>;

        // Properties

        get t_type(): GObject.GType;
        get tType(): GObject.GType;
        get t_dup_func(): GObject.BoxedCopyFunc;
        get tDupFunc(): GObject.BoxedCopyFunc;
        get t_destroy_func(): GLib.DestroyNotify;
        get tDestroyFunc(): GLib.DestroyNotify;
        get value(): any;
        set value(val: any);
        get value_type(): GObject.GType;
        get valueType(): GObject.GType;
        get id(): string;
        set id(val: string);
        get parameters(): Gee.MultiMap;
        set parameters(val: Gee.MultiMap);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AbstractFieldDetails.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AbstractFieldDetails.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof AbstractFieldDetails.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractFieldDetails.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AbstractFieldDetails.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractFieldDetails.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AbstractFieldDetails.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AbstractFieldDetails.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static equal_static(left: AbstractFieldDetails, right: AbstractFieldDetails): boolean;
        static hash_static(value: AbstractFieldDetails): number;

        // Virtual methods

        vfunc_equal(that: AbstractFieldDetails): boolean;
        vfunc_parameters_equal(that: AbstractFieldDetails): boolean;
        vfunc_values_equal(that: AbstractFieldDetails): boolean;
        vfunc_hash(): number;
        vfunc_get_value(): any;
        vfunc_set_value(value: any): void;
        vfunc_get_id(): string;
        vfunc_set_id(value: string): void;
        vfunc_get_parameters(): Gee.MultiMap;
        vfunc_set_parameters(value: Gee.MultiMap): void;

        // Methods

        get_parameter_values(parameter_name: string): Gee.Collection;
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

    namespace AvatarCache {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class AvatarCache extends GObject.Object {
        static $gtype: GObject.GType<AvatarCache>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AvatarCache.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AvatarCache.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof AvatarCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AvatarCache.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AvatarCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AvatarCache.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AvatarCache.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AvatarCache.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static dup(): AvatarCache;

        // Methods

        load_avatar(id: string): globalThis.Promise<Gio.LoadableIcon>;
        load_avatar(id: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        load_avatar(id: string, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<Gio.LoadableIcon> | void;
        load_avatar_finish(_res_: Gio.AsyncResult): Gio.LoadableIcon;
        store_avatar(id: string, avatar: Gio.LoadableIcon): globalThis.Promise<string>;
        store_avatar(id: string, avatar: Gio.LoadableIcon, _callback_: Gio.AsyncReadyCallback<this>): void;
        store_avatar(
            id: string,
            avatar: Gio.LoadableIcon,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<string> | void;
        store_avatar_finish(_res_: Gio.AsyncResult): string;
        remove_avatar(id: string): globalThis.Promise<void>;
        remove_avatar(id: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        remove_avatar(id: string, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        remove_avatar_finish(_res_: Gio.AsyncResult): void;
        build_uri_for_avatar(id: string): string;
    }

    namespace BackendStore {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'backend-available': (arg0: Backend) => void;
            'notify::enabled-backends': (pspec: GObject.ParamSpec) => void;
            'notify::is-prepared': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            enabled_backends: Gee.Map;
            enabledBackends: Gee.Map;
            is_prepared: boolean;
            isPrepared: boolean;
        }
    }

    class BackendStore extends GObject.Object {
        static $gtype: GObject.GType<BackendStore>;

        // Properties

        get enabled_backends(): Gee.Map;
        set enabled_backends(val: Gee.Map);
        get enabledBackends(): Gee.Map;
        set enabledBackends(val: Gee.Map);
        get is_prepared(): boolean;
        set is_prepared(val: boolean);
        get isPrepared(): boolean;
        set isPrepared(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BackendStore.SignalSignatures;

        // Fields

        folks_backend_store_KEY_FILE_GROUP_ALL_OTHERS: string;

        // Constructors

        constructor(properties?: Partial<BackendStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof BackendStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackendStore.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BackendStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackendStore.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BackendStore.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BackendStore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static dup(): BackendStore;

        // Methods

        prepare(): globalThis.Promise<void>;
        prepare(_callback_: Gio.AsyncReadyCallback<this>): void;
        prepare(_callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        prepare_finish(_res_: Gio.AsyncResult): void;
        load_backends(): globalThis.Promise<void>;
        load_backends(_callback_: Gio.AsyncReadyCallback<this>): void;
        load_backends(_callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        load_backends_finish(_res_: Gio.AsyncResult): void;
        add_backend(backend: Backend): void;
        dup_backend_by_name(name: string): Backend;
        list_backends(): Gee.Collection;
        enable_backend(name: string): globalThis.Promise<void>;
        enable_backend(name: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        enable_backend(name: string, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        enable_backend_finish(_res_: Gio.AsyncResult): void;
        disable_backend(name: string): globalThis.Promise<void>;
        disable_backend(name: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        disable_backend(name: string, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        disable_backend_finish(_res_: Gio.AsyncResult): void;
        get_enabled_backends(): Gee.Map;
        get_is_prepared(): boolean;
    }

    namespace Backend {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'persona-store-added': (arg0: PersonaStore) => void;
            'persona-store-removed': (arg0: PersonaStore) => void;
            'notify::is-prepared': (pspec: GObject.ParamSpec) => void;
            'notify::is-quiescent': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::persona-stores': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            is_prepared: boolean;
            isPrepared: boolean;
            is_quiescent: boolean;
            isQuiescent: boolean;
            name: string;
            persona_stores: Gee.Map;
            personaStores: Gee.Map;
        }
    }

    abstract class Backend extends GObject.Object {
        static $gtype: GObject.GType<Backend>;

        // Properties

        get is_prepared(): boolean;
        get isPrepared(): boolean;
        get is_quiescent(): boolean;
        get isQuiescent(): boolean;
        get name(): string;
        get persona_stores(): Gee.Map;
        get personaStores(): Gee.Map;

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

        // Signals

        connect<K extends keyof Backend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Backend.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Backend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Backend.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Backend.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Backend.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_disable_persona_store(store: PersonaStore): void;
        vfunc_enable_persona_store(store: PersonaStore): void;
        vfunc_set_persona_stores(storeids: Gee.Set): void;
        vfunc_prepare(_callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_prepare_finish(_res_: Gio.AsyncResult): void;
        vfunc_unprepare(_callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_unprepare_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_is_prepared(): boolean;
        vfunc_get_is_quiescent(): boolean;
        vfunc_get_name(): string;
        vfunc_get_persona_stores(): Gee.Map;

        // Methods

        disable_persona_store(store: PersonaStore): void;
        enable_persona_store(store: PersonaStore): void;
        set_persona_stores(storeids: Gee.Set): void;
        prepare(): globalThis.Promise<void>;
        prepare(_callback_: Gio.AsyncReadyCallback<this>): void;
        prepare(_callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        prepare_finish(_res_: Gio.AsyncResult): void;
        unprepare(): globalThis.Promise<void>;
        unprepare(_callback_: Gio.AsyncReadyCallback<this>): void;
        unprepare(_callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        unprepare_finish(_res_: Gio.AsyncResult): void;
        get_is_prepared(): boolean;
        get_is_quiescent(): boolean;
        get_name(): string;
        get_persona_stores(): Gee.Map;
    }

    namespace Debug {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'print-status': () => void;
            'notify::colour-enabled': (pspec: GObject.ParamSpec) => void;
            'notify::debug-output-enabled': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            colour_enabled: boolean;
            colourEnabled: boolean;
            debug_output_enabled: boolean;
            debugOutputEnabled: boolean;
        }
    }

    class Debug extends GObject.Object {
        static $gtype: GObject.GType<Debug>;

        // Properties

        get colour_enabled(): boolean;
        set colour_enabled(val: boolean);
        get colourEnabled(): boolean;
        set colourEnabled(val: boolean);
        get debug_output_enabled(): boolean;
        set debug_output_enabled(val: boolean);
        get debugOutputEnabled(): boolean;
        set debugOutputEnabled(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Debug.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Debug.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Debug.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Debug.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Debug.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Debug.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Debug.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Debug.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static dup(): Debug;
        static dup_with_flags(debug_flags: string, colour_enabled: boolean): Debug;

        // Methods

        emit_print_status(): void;
        indent(): void;
        unindent(): void;
        get_colour_enabled(): boolean;
        set_colour_enabled(value: boolean): void;
        get_debug_output_enabled(): boolean;
        set_debug_output_enabled(value: boolean): void;
    }

    namespace EmailFieldDetails {
        // Signal signatures
        interface SignalSignatures extends AbstractFieldDetails.SignalSignatures {
            'notify::t-type': (pspec: GObject.ParamSpec) => void;
            'notify::t-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::t-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::value': (pspec: GObject.ParamSpec) => void;
            'notify::value-type': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::parameters': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractFieldDetails.ConstructorProps {}
    }

    class EmailFieldDetails extends AbstractFieldDetails {
        static $gtype: GObject.GType<EmailFieldDetails>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EmailFieldDetails.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<EmailFieldDetails.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: string, parameters: Gee.MultiMap): EmailFieldDetails;

        // Signals

        connect<K extends keyof EmailFieldDetails.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EmailFieldDetails.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof EmailFieldDetails.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EmailFieldDetails.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof EmailFieldDetails.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<EmailFieldDetails.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ExtendedFieldDetails {
        // Signal signatures
        interface SignalSignatures extends AbstractFieldDetails.SignalSignatures {
            'notify::t-type': (pspec: GObject.ParamSpec) => void;
            'notify::t-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::t-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::value': (pspec: GObject.ParamSpec) => void;
            'notify::value-type': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::parameters': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractFieldDetails.ConstructorProps {}
    }

    class ExtendedFieldDetails extends AbstractFieldDetails {
        static $gtype: GObject.GType<ExtendedFieldDetails>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ExtendedFieldDetails.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ExtendedFieldDetails.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: string, parameters: Gee.MultiMap): ExtendedFieldDetails;

        // Signals

        connect<K extends keyof ExtendedFieldDetails.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ExtendedFieldDetails.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ExtendedFieldDetails.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ExtendedFieldDetails.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ExtendedFieldDetails.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ExtendedFieldDetails.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ImFieldDetails {
        // Signal signatures
        interface SignalSignatures extends AbstractFieldDetails.SignalSignatures {
            'notify::t-type': (pspec: GObject.ParamSpec) => void;
            'notify::t-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::t-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::value': (pspec: GObject.ParamSpec) => void;
            'notify::value-type': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::parameters': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractFieldDetails.ConstructorProps {}
    }

    class ImFieldDetails extends AbstractFieldDetails {
        static $gtype: GObject.GType<ImFieldDetails>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ImFieldDetails.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ImFieldDetails.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: string, parameters: Gee.MultiMap): ImFieldDetails;

        // Signals

        connect<K extends keyof ImFieldDetails.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ImFieldDetails.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ImFieldDetails.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ImFieldDetails.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ImFieldDetails.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ImFieldDetails.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace IndividualAggregator {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'individuals-changed': (
                arg0: Gee.Set,
                arg1: Gee.Set,
                arg2: string,
                arg3: Persona,
                arg4: GroupDetailsChangeReason,
            ) => void;
            'individuals-changed-detailed': (arg0: Gee.MultiMap) => void;
            'notify::is-prepared': (pspec: GObject.ParamSpec) => void;
            'notify::is-quiescent': (pspec: GObject.ParamSpec) => void;
            'notify::primary-store': (pspec: GObject.ParamSpec) => void;
            'notify::backend-store': (pspec: GObject.ParamSpec) => void;
            'notify::individuals': (pspec: GObject.ParamSpec) => void;
            'notify::user': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            is_prepared: boolean;
            isPrepared: boolean;
            is_quiescent: boolean;
            isQuiescent: boolean;
            primary_store: PersonaStore;
            primaryStore: PersonaStore;
            backend_store: BackendStore;
            backendStore: BackendStore;
            individuals: Gee.Map;
            user: Individual;
        }
    }

    class IndividualAggregator extends GObject.Object {
        static $gtype: GObject.GType<IndividualAggregator>;

        // Properties

        get is_prepared(): boolean;
        get isPrepared(): boolean;
        get is_quiescent(): boolean;
        get isQuiescent(): boolean;
        get primary_store(): PersonaStore;
        get primaryStore(): PersonaStore;
        get backend_store(): BackendStore;
        get backendStore(): BackendStore;
        get individuals(): Gee.Map;
        set individuals(val: Gee.Map);
        get user(): Individual;
        set user(val: Individual);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: IndividualAggregator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<IndividualAggregator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): IndividualAggregator;

        static with_backend_store(store: BackendStore): IndividualAggregator;

        // Signals

        connect<K extends keyof IndividualAggregator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IndividualAggregator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof IndividualAggregator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IndividualAggregator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof IndividualAggregator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<IndividualAggregator.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static dup(): IndividualAggregator;
        static dup_with_backend_store(store: BackendStore): IndividualAggregator;

        // Methods

        prepare(): globalThis.Promise<void>;
        prepare(_callback_: Gio.AsyncReadyCallback<this>): void;
        prepare(_callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        prepare_finish(_res_: Gio.AsyncResult): void;
        unprepare(): globalThis.Promise<void>;
        unprepare(_callback_: Gio.AsyncReadyCallback<this>): void;
        unprepare(_callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        unprepare_finish(_res_: Gio.AsyncResult): void;
        get_potential_matches(matchee: Individual, min_threshold: MatchResult | null): Gee.Map;
        get_all_potential_matches(min_threshold: MatchResult | null): Gee.Map;
        add_persona_from_details(
            parent: Individual,
            persona_store: PersonaStore,
            details: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
        ): globalThis.Promise<Persona>;
        add_persona_from_details(
            parent: Individual,
            persona_store: PersonaStore,
            details: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        add_persona_from_details(
            parent: Individual,
            persona_store: PersonaStore,
            details: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<Persona> | void;
        add_persona_from_details_finish(_res_: Gio.AsyncResult): Persona;
        remove_individual(individual: Individual): globalThis.Promise<void>;
        remove_individual(individual: Individual, _callback_: Gio.AsyncReadyCallback<this>): void;
        remove_individual(
            individual: Individual,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        remove_individual_finish(_res_: Gio.AsyncResult): void;
        remove_persona(persona: Persona): globalThis.Promise<void>;
        remove_persona(persona: Persona, _callback_: Gio.AsyncReadyCallback<this>): void;
        remove_persona(persona: Persona, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        remove_persona_finish(_res_: Gio.AsyncResult): void;
        link_personas(personas: Gee.Set): globalThis.Promise<void>;
        link_personas(personas: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        link_personas(personas: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        link_personas_finish(_res_: Gio.AsyncResult): void;
        unlink_individual(individual: Individual): globalThis.Promise<void>;
        unlink_individual(individual: Individual, _callback_: Gio.AsyncReadyCallback<this>): void;
        unlink_individual(
            individual: Individual,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        unlink_individual_finish(_res_: Gio.AsyncResult): void;
        ensure_individual_property_writeable(
            individual: Individual,
            property_name: string,
        ): globalThis.Promise<Persona>;
        ensure_individual_property_writeable(
            individual: Individual,
            property_name: string,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        ensure_individual_property_writeable(
            individual: Individual,
            property_name: string,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<Persona> | void;
        ensure_individual_property_writeable_finish(_res_: Gio.AsyncResult): Persona;
        look_up_individual(id: string): globalThis.Promise<Individual>;
        look_up_individual(id: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        look_up_individual(
            id: string,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<Individual> | void;
        look_up_individual_finish(_res_: Gio.AsyncResult): Individual;
        get_is_prepared(): boolean;
        get_is_quiescent(): boolean;
        get_primary_store(): PersonaStore;
        get_backend_store(): BackendStore;
        get_individuals(): Gee.Map;
        get_user(): Individual;
    }

    namespace Individual {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            removed: (arg0: Individual) => void;
            'personas-changed': (arg0: Gee.Set, arg1: Gee.Set) => void;
            'notify::trust-level': (pspec: GObject.ParamSpec) => void;
            'notify::is-user': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::display-name': (pspec: GObject.ParamSpec) => void;
            'notify::personas': (pspec: GObject.ParamSpec) => void;
            'notify::alias': (pspec: GObject.ParamSpec) => void;
            'notify::avatar': (pspec: GObject.ParamSpec) => void;
            'notify::birthday': (pspec: GObject.ParamSpec) => void;
            'notify::calendar-event-id': (pspec: GObject.ParamSpec) => void;
            'notify::email-addresses': (pspec: GObject.ParamSpec) => void;
            'notify::is-favourite': (pspec: GObject.ParamSpec) => void;
            'notify::gender': (pspec: GObject.ParamSpec) => void;
            'notify::groups': (pspec: GObject.ParamSpec) => void;
            'notify::im-addresses': (pspec: GObject.ParamSpec) => void;
            'notify::im-interaction-count': (pspec: GObject.ParamSpec) => void;
            'notify::last-im-interaction-datetime': (pspec: GObject.ParamSpec) => void;
            'notify::call-interaction-count': (pspec: GObject.ParamSpec) => void;
            'notify::last-call-interaction-datetime': (pspec: GObject.ParamSpec) => void;
            'notify::local-ids': (pspec: GObject.ParamSpec) => void;
            'notify::location': (pspec: GObject.ParamSpec) => void;
            'notify::structured-name': (pspec: GObject.ParamSpec) => void;
            'notify::full-name': (pspec: GObject.ParamSpec) => void;
            'notify::nickname': (pspec: GObject.ParamSpec) => void;
            'notify::notes': (pspec: GObject.ParamSpec) => void;
            'notify::presence-type': (pspec: GObject.ParamSpec) => void;
            'notify::presence-message': (pspec: GObject.ParamSpec) => void;
            'notify::client-types': (pspec: GObject.ParamSpec) => void;
            'notify::presence-status': (pspec: GObject.ParamSpec) => void;
            'notify::phone-numbers': (pspec: GObject.ParamSpec) => void;
            'notify::postal-addresses': (pspec: GObject.ParamSpec) => void;
            'notify::roles': (pspec: GObject.ParamSpec) => void;
            'notify::urls': (pspec: GObject.ParamSpec) => void;
            'notify::web-service-addresses': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                AliasDetails.ConstructorProps,
                AvatarDetails.ConstructorProps,
                BirthdayDetails.ConstructorProps,
                EmailDetails.ConstructorProps,
                ExtendedInfo.ConstructorProps,
                FavouriteDetails.ConstructorProps,
                GenderDetails.ConstructorProps,
                GroupDetails.ConstructorProps,
                ImDetails.ConstructorProps,
                InteractionDetails.ConstructorProps,
                LocalIdDetails.ConstructorProps,
                LocationDetails.ConstructorProps,
                NameDetails.ConstructorProps,
                NoteDetails.ConstructorProps,
                PresenceDetails.ConstructorProps,
                PhoneDetails.ConstructorProps,
                PostalAddressDetails.ConstructorProps,
                RoleDetails.ConstructorProps,
                UrlDetails.ConstructorProps,
                WebServiceDetails.ConstructorProps {
            trust_level: TrustLevel;
            trustLevel: TrustLevel;
            is_user: boolean;
            isUser: boolean;
            id: string;
            display_name: string;
            displayName: string;
            personas: Gee.Set;
        }
    }

    class Individual
        extends GObject.Object
        implements
            AliasDetails,
            AvatarDetails,
            BirthdayDetails,
            EmailDetails,
            ExtendedInfo,
            FavouriteDetails,
            GenderDetails,
            GroupDetails,
            ImDetails,
            InteractionDetails,
            LocalIdDetails,
            LocationDetails,
            NameDetails,
            NoteDetails,
            PresenceDetails,
            PhoneDetails,
            PostalAddressDetails,
            RoleDetails,
            UrlDetails,
            WebServiceDetails
    {
        static $gtype: GObject.GType<Individual>;

        // Properties

        get trust_level(): TrustLevel;
        set trust_level(val: TrustLevel);
        get trustLevel(): TrustLevel;
        set trustLevel(val: TrustLevel);
        get is_user(): boolean;
        set is_user(val: boolean);
        get isUser(): boolean;
        set isUser(val: boolean);
        get id(): string;
        set id(val: string);
        get display_name(): string;
        get displayName(): string;
        get personas(): Gee.Set;
        set personas(val: Gee.Set);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Individual.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Individual.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](personas: Gee.Set): Individual;

        // Signals

        connect<K extends keyof Individual.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Individual.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Individual.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Individual.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Individual.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Individual.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        has_anti_link_with_persona(p: Persona): boolean;
        has_anti_link_with_individual(i: Individual): boolean;
        get_trust_level(): TrustLevel;
        get_is_user(): boolean;
        get_id(): string;
        get_display_name(): string;
        get_personas(): Gee.Set;
        set_personas(value: Gee.Set): void;

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
        get gender(): Gender;
        set gender(val: Gender);
        get groups(): Gee.Set;
        set groups(val: Gee.Set);
        get im_addresses(): Gee.MultiMap;
        set im_addresses(val: Gee.MultiMap);
        get imAddresses(): Gee.MultiMap;
        set imAddresses(val: Gee.MultiMap);
        get im_interaction_count(): number;
        get imInteractionCount(): number;
        get last_im_interaction_datetime(): GLib.DateTime;
        get lastImInteractionDatetime(): GLib.DateTime;
        get call_interaction_count(): number;
        get callInteractionCount(): number;
        get last_call_interaction_datetime(): GLib.DateTime;
        get lastCallInteractionDatetime(): GLib.DateTime;
        get local_ids(): Gee.Set;
        set local_ids(val: Gee.Set);
        get localIds(): Gee.Set;
        set localIds(val: Gee.Set);
        get location(): Location;
        set location(val: Location);
        get structured_name(): StructuredName;
        set structured_name(val: StructuredName);
        get structuredName(): StructuredName;
        set structuredName(val: StructuredName);
        get full_name(): string;
        set full_name(val: string);
        get fullName(): string;
        set fullName(val: string);
        get nickname(): string;
        set nickname(val: string);
        get notes(): Gee.Set;
        set notes(val: Gee.Set);
        get presence_type(): PresenceType;
        set presence_type(val: PresenceType);
        get presenceType(): PresenceType;
        set presenceType(val: PresenceType);
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
        get phone_numbers(): Gee.Set;
        set phone_numbers(val: Gee.Set);
        get phoneNumbers(): Gee.Set;
        set phoneNumbers(val: Gee.Set);
        get postal_addresses(): Gee.Set;
        set postal_addresses(val: Gee.Set);
        get postalAddresses(): Gee.Set;
        set postalAddresses(val: Gee.Set);
        get roles(): Gee.Set;
        set roles(val: Gee.Set);
        get urls(): Gee.Set;
        set urls(val: Gee.Set);
        get web_service_addresses(): Gee.MultiMap;
        set web_service_addresses(val: Gee.MultiMap);
        get webServiceAddresses(): Gee.MultiMap;
        set webServiceAddresses(val: Gee.MultiMap);

        // Inherited methods
        change_alias(alias: string): globalThis.Promise<void>;
        change_alias(alias: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_alias(alias: string, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        change_alias_finish(_res_: Gio.AsyncResult): void;
        get_alias(): string;
        set_alias(value: string): void;
        vfunc_change_alias(alias: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_alias_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_alias(): string;
        vfunc_set_alias(value: string): void;
        change_avatar(avatar: Gio.LoadableIcon): globalThis.Promise<void>;
        change_avatar(avatar: Gio.LoadableIcon, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_avatar(
            avatar: Gio.LoadableIcon,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_avatar_finish(_res_: Gio.AsyncResult): void;
        get_avatar(): Gio.LoadableIcon;
        set_avatar(value: Gio.LoadableIcon): void;
        vfunc_change_avatar(avatar: Gio.LoadableIcon, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_avatar_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_avatar(): Gio.LoadableIcon;
        vfunc_set_avatar(value: Gio.LoadableIcon): void;
        change_birthday(birthday: GLib.DateTime): globalThis.Promise<void>;
        change_birthday(birthday: GLib.DateTime, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_birthday(
            birthday: GLib.DateTime,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_birthday_finish(_res_: Gio.AsyncResult): void;
        change_calendar_event_id(event_id: string): globalThis.Promise<void>;
        change_calendar_event_id(event_id: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_calendar_event_id(
            event_id: string,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
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
        change_email_addresses(email_addresses: Gee.Set): globalThis.Promise<void>;
        change_email_addresses(email_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_email_addresses(
            email_addresses: Gee.Set,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_email_addresses_finish(_res_: Gio.AsyncResult): void;
        get_email_addresses(): Gee.Set;
        set_email_addresses(value: Gee.Set): void;
        vfunc_change_email_addresses(email_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_email_addresses_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_email_addresses(): Gee.Set;
        vfunc_set_email_addresses(value: Gee.Set): void;
        get_extended_field(name: string): ExtendedFieldDetails;
        change_extended_field(name: string, value: ExtendedFieldDetails): globalThis.Promise<void>;
        change_extended_field(
            name: string,
            value: ExtendedFieldDetails,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        change_extended_field(
            name: string,
            value: ExtendedFieldDetails,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_extended_field_finish(_res_: Gio.AsyncResult): void;
        remove_extended_field(name: string): globalThis.Promise<void>;
        remove_extended_field(name: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        remove_extended_field(name: string, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        remove_extended_field_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_extended_field(name: string): ExtendedFieldDetails;
        vfunc_change_extended_field(
            name: string,
            value: ExtendedFieldDetails,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        vfunc_change_extended_field_finish(_res_: Gio.AsyncResult): void;
        vfunc_remove_extended_field(name: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_remove_extended_field_finish(_res_: Gio.AsyncResult): void;
        change_is_favourite(is_favourite: boolean): globalThis.Promise<void>;
        change_is_favourite(is_favourite: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_is_favourite(
            is_favourite: boolean,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_is_favourite_finish(_res_: Gio.AsyncResult): void;
        get_is_favourite(): boolean;
        set_is_favourite(value: boolean): void;
        vfunc_change_is_favourite(is_favourite: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_is_favourite_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_is_favourite(): boolean;
        vfunc_set_is_favourite(value: boolean): void;
        change_gender(gender: Gender | null): globalThis.Promise<void>;
        change_gender(gender: Gender | null, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_gender(
            gender: Gender | null,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_gender_finish(_res_: Gio.AsyncResult): void;
        get_gender(): Gender;
        set_gender(value: Gender | null): void;
        vfunc_change_gender(gender: Gender, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_gender_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_gender(): Gender;
        vfunc_set_gender(value: Gender): void;
        change_group(group: string, is_member: boolean): globalThis.Promise<void>;
        change_group(group: string, is_member: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_group(
            group: string,
            is_member: boolean,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_group_finish(_res_: Gio.AsyncResult): void;
        change_groups(groups: Gee.Set): globalThis.Promise<void>;
        change_groups(groups: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_groups(groups: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        change_groups_finish(_res_: Gio.AsyncResult): void;
        get_groups(): Gee.Set;
        set_groups(value: Gee.Set): void;
        vfunc_change_group(group: string, is_member: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_group_finish(_res_: Gio.AsyncResult): void;
        vfunc_change_groups(groups: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_groups_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_groups(): Gee.Set;
        vfunc_set_groups(value: Gee.Set): void;
        change_im_addresses(im_addresses: Gee.MultiMap): globalThis.Promise<void>;
        change_im_addresses(im_addresses: Gee.MultiMap, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_im_addresses(
            im_addresses: Gee.MultiMap,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_im_addresses_finish(_res_: Gio.AsyncResult): void;
        get_im_addresses(): Gee.MultiMap;
        set_im_addresses(value: Gee.MultiMap): void;
        vfunc_change_im_addresses(im_addresses: Gee.MultiMap, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_im_addresses_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_im_addresses(): Gee.MultiMap;
        vfunc_set_im_addresses(value: Gee.MultiMap): void;
        get_im_interaction_count(): number;
        get_last_im_interaction_datetime(): GLib.DateTime;
        get_call_interaction_count(): number;
        get_last_call_interaction_datetime(): GLib.DateTime;
        vfunc_get_im_interaction_count(): number;
        vfunc_get_last_im_interaction_datetime(): GLib.DateTime;
        vfunc_get_call_interaction_count(): number;
        vfunc_get_last_call_interaction_datetime(): GLib.DateTime;
        change_local_ids(local_ids: Gee.Set): globalThis.Promise<void>;
        change_local_ids(local_ids: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_local_ids(
            local_ids: Gee.Set,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_local_ids_finish(_res_: Gio.AsyncResult): void;
        get_local_ids(): Gee.Set;
        set_local_ids(value: Gee.Set): void;
        vfunc_change_local_ids(local_ids: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_local_ids_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_local_ids(): Gee.Set;
        vfunc_set_local_ids(value: Gee.Set): void;
        change_location(location: Location): globalThis.Promise<void>;
        change_location(location: Location, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_location(location: Location, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        change_location_finish(_res_: Gio.AsyncResult): void;
        get_location(): Location;
        set_location(value: Location): void;
        vfunc_change_location(location: Location, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_location_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_location(): Location;
        vfunc_set_location(value: Location): void;
        change_structured_name(name: StructuredName): globalThis.Promise<void>;
        change_structured_name(name: StructuredName, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_structured_name(
            name: StructuredName,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_structured_name_finish(_res_: Gio.AsyncResult): void;
        change_full_name(full_name: string): globalThis.Promise<void>;
        change_full_name(full_name: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_full_name(full_name: string, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        change_full_name_finish(_res_: Gio.AsyncResult): void;
        change_nickname(nickname: string): globalThis.Promise<void>;
        change_nickname(nickname: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_nickname(nickname: string, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        change_nickname_finish(_res_: Gio.AsyncResult): void;
        get_structured_name(): StructuredName;
        set_structured_name(value: StructuredName): void;
        get_full_name(): string;
        set_full_name(value: string): void;
        get_nickname(): string;
        set_nickname(value: string): void;
        vfunc_change_structured_name(name: StructuredName, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_structured_name_finish(_res_: Gio.AsyncResult): void;
        vfunc_change_full_name(full_name: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_full_name_finish(_res_: Gio.AsyncResult): void;
        vfunc_change_nickname(nickname: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_nickname_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_structured_name(): StructuredName;
        vfunc_set_structured_name(value: StructuredName): void;
        vfunc_get_full_name(): string;
        vfunc_set_full_name(value: string): void;
        vfunc_get_nickname(): string;
        vfunc_set_nickname(value: string): void;
        change_notes(notes: Gee.Set): globalThis.Promise<void>;
        change_notes(notes: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_notes(notes: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        change_notes_finish(_res_: Gio.AsyncResult): void;
        get_notes(): Gee.Set;
        set_notes(value: Gee.Set): void;
        vfunc_change_notes(notes: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_notes_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_notes(): Gee.Set;
        vfunc_set_notes(value: Gee.Set): void;
        is_online(): boolean;
        get_presence_type(): PresenceType;
        set_presence_type(value: PresenceType | null): void;
        get_presence_message(): string;
        set_presence_message(value: string): void;
        get_client_types(): string[];
        set_client_types(value: string[]): void;
        get_presence_status(): string;
        set_presence_status(value: string): void;
        vfunc_get_presence_type(): PresenceType;
        vfunc_set_presence_type(value: PresenceType): void;
        vfunc_get_presence_message(): string;
        vfunc_set_presence_message(value: string): void;
        vfunc_get_client_types(): string[];
        vfunc_set_client_types(value: string[]): void;
        vfunc_get_presence_status(): string;
        vfunc_set_presence_status(value: string): void;
        change_phone_numbers(phone_numbers: Gee.Set): globalThis.Promise<void>;
        change_phone_numbers(phone_numbers: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_phone_numbers(
            phone_numbers: Gee.Set,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_phone_numbers_finish(_res_: Gio.AsyncResult): void;
        get_phone_numbers(): Gee.Set;
        set_phone_numbers(value: Gee.Set): void;
        vfunc_change_phone_numbers(phone_numbers: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_phone_numbers_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_phone_numbers(): Gee.Set;
        vfunc_set_phone_numbers(value: Gee.Set): void;
        change_postal_addresses(postal_addresses: Gee.Set): globalThis.Promise<void>;
        change_postal_addresses(postal_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_postal_addresses(
            postal_addresses: Gee.Set,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_postal_addresses_finish(_res_: Gio.AsyncResult): void;
        get_postal_addresses(): Gee.Set;
        set_postal_addresses(value: Gee.Set): void;
        vfunc_change_postal_addresses(postal_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_postal_addresses_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_postal_addresses(): Gee.Set;
        vfunc_set_postal_addresses(value: Gee.Set): void;
        change_roles(roles: Gee.Set): globalThis.Promise<void>;
        change_roles(roles: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_roles(roles: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        change_roles_finish(_res_: Gio.AsyncResult): void;
        get_roles(): Gee.Set;
        set_roles(value: Gee.Set): void;
        vfunc_change_roles(roles: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_roles_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_roles(): Gee.Set;
        vfunc_set_roles(value: Gee.Set): void;
        change_urls(urls: Gee.Set): globalThis.Promise<void>;
        change_urls(urls: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        change_urls_finish(_res_: Gio.AsyncResult): void;
        get_urls(): Gee.Set;
        set_urls(value: Gee.Set): void;
        vfunc_change_urls(urls: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_change_urls_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_urls(): Gee.Set;
        vfunc_set_urls(value: Gee.Set): void;
        change_web_service_addresses(web_service_addresses: Gee.MultiMap): globalThis.Promise<void>;
        change_web_service_addresses(
            web_service_addresses: Gee.MultiMap,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        change_web_service_addresses(
            web_service_addresses: Gee.MultiMap,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
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

    namespace Location {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Location extends GObject.Object {
        static $gtype: GObject.GType<Location>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Location.SignalSignatures;

        // Fields

        latitude: number;
        longitude: number;

        // Constructors

        constructor(properties?: Partial<Location.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](latitude: number, longitude: number): Location;

        // Signals

        connect<K extends keyof Location.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Location.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Location.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Location.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Location.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Location.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        equal(other: Location): boolean;
        equal_coordinates(latitude: number, longitude: number): boolean;
    }

    namespace StructuredName {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::family-name': (pspec: GObject.ParamSpec) => void;
            'notify::given-name': (pspec: GObject.ParamSpec) => void;
            'notify::additional-names': (pspec: GObject.ParamSpec) => void;
            'notify::prefixes': (pspec: GObject.ParamSpec) => void;
            'notify::suffixes': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            family_name: string;
            familyName: string;
            given_name: string;
            givenName: string;
            additional_names: string;
            additionalNames: string;
            prefixes: string;
            suffixes: string;
        }
    }

    class StructuredName extends GObject.Object {
        static $gtype: GObject.GType<StructuredName>;

        // Properties

        get family_name(): string;
        set family_name(val: string);
        get familyName(): string;
        set familyName(val: string);
        get given_name(): string;
        set given_name(val: string);
        get givenName(): string;
        set givenName(val: string);
        get additional_names(): string;
        set additional_names(val: string);
        get additionalNames(): string;
        set additionalNames(val: string);
        get prefixes(): string;
        set prefixes(val: string);
        get suffixes(): string;
        set suffixes(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StructuredName.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StructuredName.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            family_name: string,
            given_name: string,
            additional_names: string,
            prefixes: string,
            suffixes: string,
        ): StructuredName;

        static simple(family_name: string, given_name: string): StructuredName;

        // Signals

        connect<K extends keyof StructuredName.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StructuredName.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StructuredName.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StructuredName.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StructuredName.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StructuredName.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace NoteFieldDetails {
        // Signal signatures
        interface SignalSignatures extends AbstractFieldDetails.SignalSignatures {
            'notify::uid': (pspec: GObject.ParamSpec) => void;
            'notify::t-type': (pspec: GObject.ParamSpec) => void;
            'notify::t-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::t-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::value': (pspec: GObject.ParamSpec) => void;
            'notify::value-type': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::parameters': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractFieldDetails.ConstructorProps {
            uid: string;
        }
    }

    class NoteFieldDetails extends AbstractFieldDetails {
        static $gtype: GObject.GType<NoteFieldDetails>;

        // Properties

        get uid(): string;
        set uid(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NoteFieldDetails.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<NoteFieldDetails.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: string, parameters: Gee.MultiMap, uid: string): NoteFieldDetails;

        // Signals

        connect<K extends keyof NoteFieldDetails.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NoteFieldDetails.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NoteFieldDetails.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NoteFieldDetails.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NoteFieldDetails.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<NoteFieldDetails.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_uid(): string;
        set_uid(value: string): void;
    }

    namespace ObjectCache {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::t-type': (pspec: GObject.ParamSpec) => void;
            'notify::t-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::t-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::type-id': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            t_type: GObject.GType;
            tType: GObject.GType;
            t_dup_func: GObject.BoxedCopyFunc;
            tDupFunc: GObject.BoxedCopyFunc;
            t_destroy_func: GLib.DestroyNotify;
            tDestroyFunc: GLib.DestroyNotify;
            type_id: string;
            typeId: string;
            id: string;
        }
    }

    abstract class ObjectCache extends GObject.Object {
        static $gtype: GObject.GType<ObjectCache>;

        // Properties

        get t_type(): GObject.GType;
        get tType(): GObject.GType;
        get t_dup_func(): GObject.BoxedCopyFunc;
        get tDupFunc(): GObject.BoxedCopyFunc;
        get t_destroy_func(): GLib.DestroyNotify;
        get tDestroyFunc(): GLib.DestroyNotify;
        get type_id(): string;
        get typeId(): string;
        get id(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ObjectCache.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ObjectCache.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ObjectCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ObjectCache.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ObjectCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ObjectCache.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ObjectCache.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ObjectCache.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_get_serialised_object_type(object_version: number): GLib.VariantType;
        vfunc_get_serialised_object_version(): number;
        vfunc_serialise_object(object: any): GLib.Variant;
        vfunc_deserialise_object(variant: GLib.Variant, object_version: number): any;

        // Methods

        get_serialised_object_type(object_version: number): GLib.VariantType;
        get_serialised_object_version(): number;
        serialise_object(object: any): GLib.Variant;
        deserialise_object(variant: GLib.Variant, object_version: number): any;
        load_objects(cancellable: Gio.Cancellable): globalThis.Promise<Gee.Set>;
        load_objects(cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        load_objects(
            cancellable: Gio.Cancellable,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<Gee.Set> | void;
        load_objects_finish(_res_: Gio.AsyncResult): Gee.Set;
        store_objects(objects: Gee.Set, cancellable: Gio.Cancellable): globalThis.Promise<void>;
        store_objects(objects: Gee.Set, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        store_objects(
            objects: Gee.Set,
            cancellable: Gio.Cancellable,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        store_objects_finish(_res_: Gio.AsyncResult): void;
        clear_cache(): globalThis.Promise<void>;
        clear_cache(_callback_: Gio.AsyncReadyCallback<this>): void;
        clear_cache(_callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        clear_cache_finish(_res_: Gio.AsyncResult): void;
        get_type_id(): string;
        get_id(): string;
    }

    namespace PersonaStore {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'personas-changed': (
                arg0: Gee.Set,
                arg1: Gee.Set,
                arg2: string,
                arg3: Persona,
                arg4: GroupDetailsChangeReason,
            ) => void;
            removed: () => void;
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

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            type_id: string;
            typeId: string;
            display_name: string;
            displayName: string;
            id: string;
            personas: Gee.Map;
            can_add_personas: MaybeBool;
            canAddPersonas: MaybeBool;
            can_alias_personas: MaybeBool;
            canAliasPersonas: MaybeBool;
            can_group_personas: MaybeBool;
            canGroupPersonas: MaybeBool;
            can_remove_personas: MaybeBool;
            canRemovePersonas: MaybeBool;
            is_prepared: boolean;
            isPrepared: boolean;
            is_quiescent: boolean;
            isQuiescent: boolean;
            is_writeable: boolean;
            isWriteable: boolean;
            trust_level: PersonaStoreTrust;
            trustLevel: PersonaStoreTrust;
            always_writeable_properties: string[];
            alwaysWriteableProperties: string[];
            is_primary_store: boolean;
            isPrimaryStore: boolean;
            is_user_set_default: boolean;
            isUserSetDefault: boolean;
        }
    }

    abstract class PersonaStore extends GObject.Object {
        static $gtype: GObject.GType<PersonaStore>;

        // Properties

        get type_id(): string;
        get typeId(): string;
        get display_name(): string;
        get displayName(): string;
        get id(): string;
        get personas(): Gee.Map;
        get can_add_personas(): MaybeBool;
        get canAddPersonas(): MaybeBool;
        get can_alias_personas(): MaybeBool;
        get canAliasPersonas(): MaybeBool;
        get can_group_personas(): MaybeBool;
        get canGroupPersonas(): MaybeBool;
        get can_remove_personas(): MaybeBool;
        get canRemovePersonas(): MaybeBool;
        get is_prepared(): boolean;
        get isPrepared(): boolean;
        get is_quiescent(): boolean;
        get isQuiescent(): boolean;
        get is_writeable(): boolean;
        set is_writeable(val: boolean);
        get isWriteable(): boolean;
        set isWriteable(val: boolean);
        get trust_level(): PersonaStoreTrust;
        set trust_level(val: PersonaStoreTrust);
        get trustLevel(): PersonaStoreTrust;
        set trustLevel(val: PersonaStoreTrust);
        get always_writeable_properties(): string[];
        get alwaysWriteableProperties(): string[];
        get is_primary_store(): boolean;
        set is_primary_store(val: boolean);
        get isPrimaryStore(): boolean;
        set isPrimaryStore(val: boolean);
        get is_user_set_default(): boolean;
        set is_user_set_default(val: boolean);
        get isUserSetDefault(): boolean;
        set isUserSetDefault(val: boolean);

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

        // Signals

        connect<K extends keyof PersonaStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PersonaStore.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PersonaStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PersonaStore.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PersonaStore.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PersonaStore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static detail_key(detail: PersonaDetail): string;

        // Virtual methods

        vfunc_prepare(_callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_prepare_finish(_res_: Gio.AsyncResult): void;
        vfunc_flush(_callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_flush_finish(_res_: Gio.AsyncResult): void;
        vfunc_add_persona_from_details(
            details: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        vfunc_add_persona_from_details_finish(_res_: Gio.AsyncResult): Persona;
        vfunc_remove_persona(persona: Persona, _callback_: Gio.AsyncReadyCallback<this>): void;
        vfunc_remove_persona_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_type_id(): string;
        vfunc_get_personas(): Gee.Map;
        vfunc_get_can_add_personas(): MaybeBool;
        vfunc_get_can_alias_personas(): MaybeBool;
        vfunc_get_can_group_personas(): MaybeBool;
        vfunc_get_can_remove_personas(): MaybeBool;
        vfunc_get_is_prepared(): boolean;
        vfunc_get_is_quiescent(): boolean;
        vfunc_get_always_writeable_properties(): string[];

        // Methods

        _emit_personas_changed(
            added: Gee.Set,
            removed: Gee.Set,
            message: string,
            actor: Persona,
            reason: GroupDetailsChangeReason | null,
        ): void;
        prepare(): globalThis.Promise<void>;
        prepare(_callback_: Gio.AsyncReadyCallback<this>): void;
        prepare(_callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        prepare_finish(_res_: Gio.AsyncResult): void;
        flush(): globalThis.Promise<void>;
        flush(_callback_: Gio.AsyncReadyCallback<this>): void;
        flush(_callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        flush_finish(_res_: Gio.AsyncResult): void;
        add_persona_from_details(
            details: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
        ): globalThis.Promise<Persona>;
        add_persona_from_details(
            details: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        add_persona_from_details(
            details: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<Persona> | void;
        add_persona_from_details_finish(_res_: Gio.AsyncResult): Persona;
        remove_persona(persona: Persona): globalThis.Promise<void>;
        remove_persona(persona: Persona, _callback_: Gio.AsyncReadyCallback<this>): void;
        remove_persona(persona: Persona, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
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
        set_trust_level(value: PersonaStoreTrust | null): void;
        get_always_writeable_properties(): string[];
        get_is_primary_store(): boolean;
        get_is_user_set_default(): boolean;
    }

    namespace Persona {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::iid': (pspec: GObject.ParamSpec) => void;
            'notify::uid': (pspec: GObject.ParamSpec) => void;
            'notify::display-id': (pspec: GObject.ParamSpec) => void;
            'notify::is-user': (pspec: GObject.ParamSpec) => void;
            'notify::store': (pspec: GObject.ParamSpec) => void;
            'notify::individual': (pspec: GObject.ParamSpec) => void;
            'notify::linkable-properties': (pspec: GObject.ParamSpec) => void;
            'notify::writeable-properties': (pspec: GObject.ParamSpec) => void;
        }

        interface LinkablePropertyCallback {
            (link: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            iid: string;
            uid: string;
            display_id: string;
            displayId: string;
            is_user: boolean;
            isUser: boolean;
            store: PersonaStore;
            individual: Individual;
            linkable_properties: string[];
            linkableProperties: string[];
            writeable_properties: string[];
            writeableProperties: string[];
        }
    }

    abstract class Persona extends GObject.Object {
        static $gtype: GObject.GType<Persona>;

        // Properties

        get iid(): string;
        get uid(): string;
        get display_id(): string;
        get displayId(): string;
        get is_user(): boolean;
        get isUser(): boolean;
        get store(): PersonaStore;
        get individual(): Individual;
        set individual(val: Individual);
        get linkable_properties(): string[];
        get linkableProperties(): string[];
        get writeable_properties(): string[];
        get writeableProperties(): string[];

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

        // Signals

        connect<K extends keyof Persona.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Persona.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Persona.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Persona.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Persona.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Persona.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static build_uid(backend_name: string, persona_store_id: string, persona_id: string): string;
        static split_uid(uid: string): [string, string, string];

        // Virtual methods

        vfunc_linkable_property_to_links(prop_name: string, callback: Persona.LinkablePropertyCallback): void;
        vfunc_get_linkable_properties(): string[];
        vfunc_get_writeable_properties(): string[];

        // Methods

        linkable_property_to_links(prop_name: string, callback: Persona.LinkablePropertyCallback): void;
        get_iid(): string;
        get_uid(): string;
        get_display_id(): string;
        get_is_user(): boolean;
        get_store(): PersonaStore;
        get_individual(): Individual;
        get_linkable_properties(): string[];
        get_writeable_properties(): string[];
    }

    namespace PhoneFieldDetails {
        // Signal signatures
        interface SignalSignatures extends AbstractFieldDetails.SignalSignatures {
            'notify::t-type': (pspec: GObject.ParamSpec) => void;
            'notify::t-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::t-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::value': (pspec: GObject.ParamSpec) => void;
            'notify::value-type': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::parameters': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractFieldDetails.ConstructorProps {}
    }

    class PhoneFieldDetails extends AbstractFieldDetails {
        static $gtype: GObject.GType<PhoneFieldDetails>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PhoneFieldDetails.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PhoneFieldDetails.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: string, parameters: Gee.MultiMap): PhoneFieldDetails;

        // Signals

        connect<K extends keyof PhoneFieldDetails.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PhoneFieldDetails.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PhoneFieldDetails.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PhoneFieldDetails.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PhoneFieldDetails.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PhoneFieldDetails.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_normalised(): string;
    }

    namespace PostalAddress {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::po-box': (pspec: GObject.ParamSpec) => void;
            'notify::extension': (pspec: GObject.ParamSpec) => void;
            'notify::street': (pspec: GObject.ParamSpec) => void;
            'notify::locality': (pspec: GObject.ParamSpec) => void;
            'notify::region': (pspec: GObject.ParamSpec) => void;
            'notify::postal-code': (pspec: GObject.ParamSpec) => void;
            'notify::country': (pspec: GObject.ParamSpec) => void;
            'notify::address-format': (pspec: GObject.ParamSpec) => void;
            'notify::uid': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
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
        }
    }

    class PostalAddress extends GObject.Object {
        static $gtype: GObject.GType<PostalAddress>;

        // Properties

        get po_box(): string;
        set po_box(val: string);
        get poBox(): string;
        set poBox(val: string);
        get extension(): string;
        set extension(val: string);
        get street(): string;
        set street(val: string);
        get locality(): string;
        set locality(val: string);
        get region(): string;
        set region(val: string);
        get postal_code(): string;
        set postal_code(val: string);
        get postalCode(): string;
        set postalCode(val: string);
        get country(): string;
        set country(val: string);
        get address_format(): string;
        set address_format(val: string);
        get addressFormat(): string;
        set addressFormat(val: string);
        get uid(): string;
        set uid(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PostalAddress.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PostalAddress.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            po_box: string,
            extension: string,
            street: string,
            locality: string,
            region: string,
            postal_code: string,
            country: string,
            address_format: string,
            uid: string,
        ): PostalAddress;

        // Signals

        connect<K extends keyof PostalAddress.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PostalAddress.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PostalAddress.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PostalAddress.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PostalAddress.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PostalAddress.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace PostalAddressFieldDetails {
        // Signal signatures
        interface SignalSignatures extends AbstractFieldDetails.SignalSignatures {
            'notify::t-type': (pspec: GObject.ParamSpec) => void;
            'notify::t-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::t-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::value': (pspec: GObject.ParamSpec) => void;
            'notify::value-type': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::parameters': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractFieldDetails.ConstructorProps {}
    }

    class PostalAddressFieldDetails extends AbstractFieldDetails {
        static $gtype: GObject.GType<PostalAddressFieldDetails>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PostalAddressFieldDetails.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PostalAddressFieldDetails.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: PostalAddress, parameters: Gee.MultiMap): PostalAddressFieldDetails;

        // Signals

        connect<K extends keyof PostalAddressFieldDetails.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PostalAddressFieldDetails.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PostalAddressFieldDetails.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PostalAddressFieldDetails.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PostalAddressFieldDetails.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PostalAddressFieldDetails.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace PotentialMatch {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class PotentialMatch extends GObject.Object {
        static $gtype: GObject.GType<PotentialMatch>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PotentialMatch.SignalSignatures;

        // Fields

        folks_potential_match_known_email_aliases: Gee.Set;

        // Constructors

        constructor(properties?: Partial<PotentialMatch.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PotentialMatch;

        // Signals

        connect<K extends keyof PotentialMatch.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PotentialMatch.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PotentialMatch.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PotentialMatch.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PotentialMatch.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PotentialMatch.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        potential_match(a: Individual, b: Individual): MatchResult;
    }

    namespace Query {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::match-fields': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            match_fields: string[];
            matchFields: string[];
        }
    }

    abstract class Query extends GObject.Object {
        static $gtype: GObject.GType<Query>;

        // Properties

        get match_fields(): string[];
        get matchFields(): string[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Query.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Query.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Query.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Query.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Query.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Query.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Query.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Query.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_is_match(individual: Individual): number;
        vfunc_get_match_fields(): string[];

        // Methods

        is_match(individual: Individual): number;
        get_match_fields(): string[];
    }

    namespace Role {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::organisation-name': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::uid': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            organisation_name: string;
            organisationName: string;
            title: string;
            role: string;
            uid: string;
        }
    }

    class Role extends GObject.Object {
        static $gtype: GObject.GType<Role>;

        // Properties

        get organisation_name(): string;
        set organisation_name(val: string);
        get organisationName(): string;
        set organisationName(val: string);
        get title(): string;
        set title(val: string);
        get role(): string;
        set role(val: string);
        get uid(): string;
        set uid(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Role.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Role.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](title: string, organisation_name: string, uid: string): Role;

        // Signals

        connect<K extends keyof Role.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Role.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Role.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Role.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Role.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Role.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static equal(a: Role, b: Role): boolean;
        static hash(r: Role): number;

        // Methods

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

    namespace RoleFieldDetails {
        // Signal signatures
        interface SignalSignatures extends AbstractFieldDetails.SignalSignatures {
            'notify::t-type': (pspec: GObject.ParamSpec) => void;
            'notify::t-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::t-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::value': (pspec: GObject.ParamSpec) => void;
            'notify::value-type': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::parameters': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractFieldDetails.ConstructorProps {}
    }

    class RoleFieldDetails extends AbstractFieldDetails {
        static $gtype: GObject.GType<RoleFieldDetails>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RoleFieldDetails.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RoleFieldDetails.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: Role, parameters: Gee.MultiMap): RoleFieldDetails;

        // Signals

        connect<K extends keyof RoleFieldDetails.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RoleFieldDetails.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RoleFieldDetails.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RoleFieldDetails.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RoleFieldDetails.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RoleFieldDetails.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace SearchView {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'individuals-changed-detailed': (arg0: Gee.SortedSet, arg1: Gee.SortedSet) => void;
            'notify::aggregator': (pspec: GObject.ParamSpec) => void;
            'notify::query': (pspec: GObject.ParamSpec) => void;
            'notify::individuals': (pspec: GObject.ParamSpec) => void;
            'notify::is-prepared': (pspec: GObject.ParamSpec) => void;
            'notify::is-quiescent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            aggregator: IndividualAggregator;
            query: Query;
            individuals: Gee.SortedSet;
            is_prepared: boolean;
            isPrepared: boolean;
            is_quiescent: boolean;
            isQuiescent: boolean;
        }
    }

    class SearchView extends GObject.Object {
        static $gtype: GObject.GType<SearchView>;

        // Properties

        get aggregator(): IndividualAggregator;
        get query(): Query;
        set query(val: Query);
        get individuals(): Gee.SortedSet;
        get is_prepared(): boolean;
        get isPrepared(): boolean;
        get is_quiescent(): boolean;
        get isQuiescent(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SearchView.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SearchView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](aggregator: IndividualAggregator, query: Query): SearchView;

        // Signals

        connect<K extends keyof SearchView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SearchView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SearchView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SearchView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SearchView.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SearchView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        prepare(): globalThis.Promise<void>;
        prepare(_callback_: Gio.AsyncReadyCallback<this>): void;
        prepare(_callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        prepare_finish(_res_: Gio.AsyncResult): void;
        unprepare(): globalThis.Promise<void>;
        unprepare(_callback_: Gio.AsyncReadyCallback<this>): void;
        unprepare(_callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        unprepare_finish(_res_: Gio.AsyncResult): void;
        refresh(): globalThis.Promise<void>;
        refresh(_callback_: Gio.AsyncReadyCallback<this>): void;
        refresh(_callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        refresh_finish(_res_: Gio.AsyncResult): void;
        get_aggregator(): IndividualAggregator;
        get_query(): Query;
        set_query(value: Query): void;
        get_individuals(): Gee.SortedSet;
        get_is_prepared(): boolean;
        get_is_quiescent(): boolean;
    }

    namespace SimpleQuery {
        // Signal signatures
        interface SignalSignatures extends Query.SignalSignatures {
            'notify::query-string': (pspec: GObject.ParamSpec) => void;
            'notify::query-locale': (pspec: GObject.ParamSpec) => void;
            'notify::match-fields': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Query.ConstructorProps {
            query_string: string;
            queryString: string;
            query_locale: string;
            queryLocale: string;
        }
    }

    class SimpleQuery extends Query {
        static $gtype: GObject.GType<SimpleQuery>;

        // Properties

        get query_string(): string;
        set query_string(val: string);
        get queryString(): string;
        set queryString(val: string);
        get query_locale(): string;
        set query_locale(val: string);
        get queryLocale(): string;
        set queryLocale(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SimpleQuery.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SimpleQuery.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](query_string: string, match_fields: string[]): SimpleQuery;

        // Signals

        connect<K extends keyof SimpleQuery.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SimpleQuery.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SimpleQuery.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SimpleQuery.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SimpleQuery.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SimpleQuery.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_query_string(): string;
        set_query_string(value: string): void;
        get_query_locale(): string;
        set_query_locale(value: string): void;
    }

    namespace UrlFieldDetails {
        // Signal signatures
        interface SignalSignatures extends AbstractFieldDetails.SignalSignatures {
            'notify::t-type': (pspec: GObject.ParamSpec) => void;
            'notify::t-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::t-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::value': (pspec: GObject.ParamSpec) => void;
            'notify::value-type': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::parameters': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractFieldDetails.ConstructorProps {}
    }

    class UrlFieldDetails extends AbstractFieldDetails {
        static $gtype: GObject.GType<UrlFieldDetails>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UrlFieldDetails.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UrlFieldDetails.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: string, parameters: Gee.MultiMap): UrlFieldDetails;

        // Signals

        connect<K extends keyof UrlFieldDetails.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UrlFieldDetails.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UrlFieldDetails.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UrlFieldDetails.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UrlFieldDetails.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UrlFieldDetails.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Utils {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Utils extends GObject.Object {
        static $gtype: GObject.GType<Utils>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Utils.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Utils.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Utils;

        // Signals

        connect<K extends keyof Utils.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Utils.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Utils.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Utils.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Utils.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Utils.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static multi_map_str_str_equal(a: Gee.MultiMap, b: Gee.MultiMap): boolean;
        static multi_map_str_afd_equal(a: Gee.MultiMap, b: Gee.MultiMap): boolean;
        static set_afd_equal(a: Gee.Set, b: Gee.Set): boolean;
        static set_string_afd_equal(a: Gee.Set, b: Gee.Set): boolean;
    }

    namespace WebServiceFieldDetails {
        // Signal signatures
        interface SignalSignatures extends AbstractFieldDetails.SignalSignatures {
            'notify::t-type': (pspec: GObject.ParamSpec) => void;
            'notify::t-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::t-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::value': (pspec: GObject.ParamSpec) => void;
            'notify::value-type': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::parameters': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractFieldDetails.ConstructorProps {}
    }

    class WebServiceFieldDetails extends AbstractFieldDetails {
        static $gtype: GObject.GType<WebServiceFieldDetails>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebServiceFieldDetails.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebServiceFieldDetails.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: string, parameters: Gee.MultiMap): WebServiceFieldDetails;

        // Signals

        connect<K extends keyof WebServiceFieldDetails.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebServiceFieldDetails.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebServiceFieldDetails.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebServiceFieldDetails.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebServiceFieldDetails.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebServiceFieldDetails.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    type AbstractFieldDetailsClass = typeof AbstractFieldDetails;
    abstract class AbstractFieldDetailsPrivate {
        static $gtype: GObject.GType<AbstractFieldDetailsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type AvatarCacheClass = typeof AvatarCache;
    abstract class AvatarCachePrivate {
        static $gtype: GObject.GType<AvatarCachePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type BackendStoreClass = typeof BackendStore;
    abstract class BackendStorePrivate {
        static $gtype: GObject.GType<BackendStorePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type BackendClass = typeof Backend;
    abstract class BackendPrivate {
        static $gtype: GObject.GType<BackendPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DebugClass = typeof Debug;
    abstract class DebugPrivate {
        static $gtype: GObject.GType<DebugPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type EmailFieldDetailsClass = typeof EmailFieldDetails;
    abstract class EmailFieldDetailsPrivate {
        static $gtype: GObject.GType<EmailFieldDetailsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ExtendedFieldDetailsClass = typeof ExtendedFieldDetails;
    abstract class ExtendedFieldDetailsPrivate {
        static $gtype: GObject.GType<ExtendedFieldDetailsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ImFieldDetailsClass = typeof ImFieldDetails;
    abstract class ImFieldDetailsPrivate {
        static $gtype: GObject.GType<ImFieldDetailsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type IndividualAggregatorClass = typeof IndividualAggregator;
    abstract class IndividualAggregatorPrivate {
        static $gtype: GObject.GType<IndividualAggregatorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type IndividualClass = typeof Individual;
    abstract class IndividualPrivate {
        static $gtype: GObject.GType<IndividualPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type LocationClass = typeof Location;
    abstract class LocationPrivate {
        static $gtype: GObject.GType<LocationPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type StructuredNameClass = typeof StructuredName;
    abstract class StructuredNamePrivate {
        static $gtype: GObject.GType<StructuredNamePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type NoteFieldDetailsClass = typeof NoteFieldDetails;
    abstract class NoteFieldDetailsPrivate {
        static $gtype: GObject.GType<NoteFieldDetailsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ObjectCacheClass = typeof ObjectCache;
    abstract class ObjectCachePrivate {
        static $gtype: GObject.GType<ObjectCachePrivate>;

        // Constructors

        _init(...args: any[]): void;
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

    type PhoneFieldDetailsClass = typeof PhoneFieldDetails;
    abstract class PhoneFieldDetailsPrivate {
        static $gtype: GObject.GType<PhoneFieldDetailsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PostalAddressClass = typeof PostalAddress;
    abstract class PostalAddressPrivate {
        static $gtype: GObject.GType<PostalAddressPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PostalAddressFieldDetailsClass = typeof PostalAddressFieldDetails;
    abstract class PostalAddressFieldDetailsPrivate {
        static $gtype: GObject.GType<PostalAddressFieldDetailsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PotentialMatchClass = typeof PotentialMatch;
    abstract class PotentialMatchPrivate {
        static $gtype: GObject.GType<PotentialMatchPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type QueryClass = typeof Query;
    abstract class QueryPrivate {
        static $gtype: GObject.GType<QueryPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RoleClass = typeof Role;
    abstract class RolePrivate {
        static $gtype: GObject.GType<RolePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RoleFieldDetailsClass = typeof RoleFieldDetails;
    abstract class RoleFieldDetailsPrivate {
        static $gtype: GObject.GType<RoleFieldDetailsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SearchViewClass = typeof SearchView;
    abstract class SearchViewPrivate {
        static $gtype: GObject.GType<SearchViewPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SimpleQueryClass = typeof SimpleQuery;
    abstract class SimpleQueryPrivate {
        static $gtype: GObject.GType<SimpleQueryPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type UrlFieldDetailsClass = typeof UrlFieldDetails;
    abstract class UrlFieldDetailsPrivate {
        static $gtype: GObject.GType<UrlFieldDetailsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type UtilsClass = typeof Utils;
    abstract class UtilsPrivate {
        static $gtype: GObject.GType<UtilsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WebServiceFieldDetailsClass = typeof WebServiceFieldDetails;
    abstract class WebServiceFieldDetailsPrivate {
        static $gtype: GObject.GType<WebServiceFieldDetailsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type AliasDetailsIface = typeof AliasDetails;
    type AntiLinkableIface = typeof AntiLinkable;
    type AvatarDetailsIface = typeof AvatarDetails;
    type BirthdayDetailsIface = typeof BirthdayDetails;
    type EmailDetailsIface = typeof EmailDetails;
    type ExtendedInfoIface = typeof ExtendedInfo;
    type FavouriteDetailsIface = typeof FavouriteDetails;
    type GenderDetailsIface = typeof GenderDetails;
    type GroupDetailsIface = typeof GroupDetails;
    type ImDetailsIface = typeof ImDetails;
    type InteractionDetailsIface = typeof InteractionDetails;
    type LocalIdDetailsIface = typeof LocalIdDetails;
    type LocationDetailsIface = typeof LocationDetails;
    type NameDetailsIface = typeof NameDetails;
    type NoteDetailsIface = typeof NoteDetails;
    type PhoneDetailsIface = typeof PhoneDetails;
    type PostalAddressDetailsIface = typeof PostalAddressDetails;
    type PresenceDetailsIface = typeof PresenceDetails;
    type RoleDetailsIface = typeof RoleDetails;
    type UrlDetailsIface = typeof UrlDetails;
    type WebServiceDetailsIface = typeof WebServiceDetails;
    namespace AliasDetails {
        /**
         * Interface for implementing AliasDetails.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_change_alias(alias: string, _callback_: Gio.AsyncReadyCallback<this>): void;
            vfunc_change_alias_finish(_res_: Gio.AsyncResult): void;
            vfunc_get_alias(): string;
            vfunc_set_alias(value: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            alias: string;
        }
    }

    export interface AliasDetailsNamespace {
        $gtype: GObject.GType<AliasDetails>;
        prototype: AliasDetails;
    }
    interface AliasDetails extends GObject.Object, AliasDetails.Interface {
        // Properties

        get alias(): string;
        set alias(val: string);

        // Methods

        change_alias(alias: string): globalThis.Promise<void>;
        change_alias(alias: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_alias(alias: string, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        change_alias_finish(_res_: Gio.AsyncResult): void;
        get_alias(): string;
        set_alias(value: string): void;
    }

    export const AliasDetails: AliasDetailsNamespace & {
        new (): AliasDetails; // This allows `obj instanceof AliasDetails`
    };

    namespace AntiLinkable {
        /**
         * Interface for implementing AntiLinkable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_change_anti_links(anti_links: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
            vfunc_change_anti_links_finish(_res_: Gio.AsyncResult): void;
            vfunc_get_anti_links(): Gee.Set;
            vfunc_set_anti_links(value: Gee.Set): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Persona.ConstructorProps {
            anti_links: Gee.Set;
            antiLinks: Gee.Set;
        }
    }

    export interface AntiLinkableNamespace {
        $gtype: GObject.GType<AntiLinkable>;
        prototype: AntiLinkable;
    }
    interface AntiLinkable extends Persona, AntiLinkable.Interface {
        // Properties

        get anti_links(): Gee.Set;
        set anti_links(val: Gee.Set);
        get antiLinks(): Gee.Set;
        set antiLinks(val: Gee.Set);

        // Methods

        change_anti_links(anti_links: Gee.Set): globalThis.Promise<void>;
        change_anti_links(anti_links: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_anti_links(
            anti_links: Gee.Set,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_anti_links_finish(_res_: Gio.AsyncResult): void;
        has_anti_link_with_persona(other_persona: Persona): boolean;
        add_anti_links(other_personas: Gee.Set): globalThis.Promise<void>;
        add_anti_links(other_personas: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        add_anti_links(
            other_personas: Gee.Set,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        add_anti_links_finish(_res_: Gio.AsyncResult): void;
        remove_anti_links(other_personas: Gee.Set): globalThis.Promise<void>;
        remove_anti_links(other_personas: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        remove_anti_links(
            other_personas: Gee.Set,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        remove_anti_links_finish(_res_: Gio.AsyncResult): void;
        add_global_anti_link(): globalThis.Promise<void>;
        add_global_anti_link(_callback_: Gio.AsyncReadyCallback<this>): void;
        add_global_anti_link(_callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        add_global_anti_link_finish(_res_: Gio.AsyncResult): void;
        remove_global_anti_link(): globalThis.Promise<void>;
        remove_global_anti_link(_callback_: Gio.AsyncReadyCallback<this>): void;
        remove_global_anti_link(_callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        remove_global_anti_link_finish(_res_: Gio.AsyncResult): void;
        has_global_anti_link(): boolean;
        get_anti_links(): Gee.Set;
        set_anti_links(value: Gee.Set): void;
    }

    export const AntiLinkable: AntiLinkableNamespace & {
        new (): AntiLinkable; // This allows `obj instanceof AntiLinkable`
    };

    namespace AvatarDetails {
        /**
         * Interface for implementing AvatarDetails.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_change_avatar(avatar: Gio.LoadableIcon, _callback_: Gio.AsyncReadyCallback<this>): void;
            vfunc_change_avatar_finish(_res_: Gio.AsyncResult): void;
            vfunc_get_avatar(): Gio.LoadableIcon;
            vfunc_set_avatar(value: Gio.LoadableIcon): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            avatar: Gio.LoadableIcon;
        }
    }

    export interface AvatarDetailsNamespace {
        $gtype: GObject.GType<AvatarDetails>;
        prototype: AvatarDetails;
    }
    interface AvatarDetails extends GObject.Object, AvatarDetails.Interface {
        // Properties

        get avatar(): Gio.LoadableIcon;
        set avatar(val: Gio.LoadableIcon);

        // Methods

        change_avatar(avatar: Gio.LoadableIcon): globalThis.Promise<void>;
        change_avatar(avatar: Gio.LoadableIcon, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_avatar(
            avatar: Gio.LoadableIcon,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_avatar_finish(_res_: Gio.AsyncResult): void;
        get_avatar(): Gio.LoadableIcon;
        set_avatar(value: Gio.LoadableIcon): void;
    }

    export const AvatarDetails: AvatarDetailsNamespace & {
        new (): AvatarDetails; // This allows `obj instanceof AvatarDetails`
    };

    namespace BirthdayDetails {
        /**
         * Interface for implementing BirthdayDetails.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_change_birthday(birthday: GLib.DateTime, _callback_: Gio.AsyncReadyCallback<this>): void;
            vfunc_change_birthday_finish(_res_: Gio.AsyncResult): void;
            vfunc_change_calendar_event_id(event_id: string, _callback_: Gio.AsyncReadyCallback<this>): void;
            vfunc_change_calendar_event_id_finish(_res_: Gio.AsyncResult): void;
            vfunc_get_birthday(): GLib.DateTime;
            vfunc_set_birthday(value: GLib.DateTime): void;
            vfunc_get_calendar_event_id(): string;
            vfunc_set_calendar_event_id(value: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            birthday: GLib.DateTime;
            calendar_event_id: string;
            calendarEventId: string;
        }
    }

    export interface BirthdayDetailsNamespace {
        $gtype: GObject.GType<BirthdayDetails>;
        prototype: BirthdayDetails;
    }
    interface BirthdayDetails extends GObject.Object, BirthdayDetails.Interface {
        // Properties

        get birthday(): GLib.DateTime;
        set birthday(val: GLib.DateTime);
        get calendar_event_id(): string;
        set calendar_event_id(val: string);
        get calendarEventId(): string;
        set calendarEventId(val: string);

        // Methods

        change_birthday(birthday: GLib.DateTime): globalThis.Promise<void>;
        change_birthday(birthday: GLib.DateTime, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_birthday(
            birthday: GLib.DateTime,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_birthday_finish(_res_: Gio.AsyncResult): void;
        change_calendar_event_id(event_id: string): globalThis.Promise<void>;
        change_calendar_event_id(event_id: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_calendar_event_id(
            event_id: string,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_calendar_event_id_finish(_res_: Gio.AsyncResult): void;
        get_birthday(): GLib.DateTime;
        set_birthday(value: GLib.DateTime): void;
        get_calendar_event_id(): string;
        set_calendar_event_id(value: string): void;
    }

    export const BirthdayDetails: BirthdayDetailsNamespace & {
        new (): BirthdayDetails; // This allows `obj instanceof BirthdayDetails`
    };

    namespace EmailDetails {
        /**
         * Interface for implementing EmailDetails.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_change_email_addresses(email_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
            vfunc_change_email_addresses_finish(_res_: Gio.AsyncResult): void;
            vfunc_get_email_addresses(): Gee.Set;
            vfunc_set_email_addresses(value: Gee.Set): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            email_addresses: Gee.Set;
            emailAddresses: Gee.Set;
        }
    }

    export interface EmailDetailsNamespace {
        $gtype: GObject.GType<EmailDetails>;
        prototype: EmailDetails;
    }
    interface EmailDetails extends GObject.Object, EmailDetails.Interface {
        // Properties

        get email_addresses(): Gee.Set;
        set email_addresses(val: Gee.Set);
        get emailAddresses(): Gee.Set;
        set emailAddresses(val: Gee.Set);

        // Methods

        change_email_addresses(email_addresses: Gee.Set): globalThis.Promise<void>;
        change_email_addresses(email_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_email_addresses(
            email_addresses: Gee.Set,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_email_addresses_finish(_res_: Gio.AsyncResult): void;
        get_email_addresses(): Gee.Set;
        set_email_addresses(value: Gee.Set): void;
    }

    export const EmailDetails: EmailDetailsNamespace & {
        new (): EmailDetails; // This allows `obj instanceof EmailDetails`
    };

    namespace ExtendedInfo {
        /**
         * Interface for implementing ExtendedInfo.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_get_extended_field(name: string): ExtendedFieldDetails;
            vfunc_change_extended_field(
                name: string,
                value: ExtendedFieldDetails,
                _callback_: Gio.AsyncReadyCallback<this>,
            ): void;
            vfunc_change_extended_field_finish(_res_: Gio.AsyncResult): void;
            vfunc_remove_extended_field(name: string, _callback_: Gio.AsyncReadyCallback<this>): void;
            vfunc_remove_extended_field_finish(_res_: Gio.AsyncResult): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ExtendedInfoNamespace {
        $gtype: GObject.GType<ExtendedInfo>;
        prototype: ExtendedInfo;
    }
    interface ExtendedInfo extends GObject.Object, ExtendedInfo.Interface {
        // Methods

        get_extended_field(name: string): ExtendedFieldDetails;
        change_extended_field(name: string, value: ExtendedFieldDetails): globalThis.Promise<void>;
        change_extended_field(
            name: string,
            value: ExtendedFieldDetails,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        change_extended_field(
            name: string,
            value: ExtendedFieldDetails,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_extended_field_finish(_res_: Gio.AsyncResult): void;
        remove_extended_field(name: string): globalThis.Promise<void>;
        remove_extended_field(name: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        remove_extended_field(name: string, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        remove_extended_field_finish(_res_: Gio.AsyncResult): void;
    }

    export const ExtendedInfo: ExtendedInfoNamespace & {
        new (): ExtendedInfo; // This allows `obj instanceof ExtendedInfo`
    };

    namespace FavouriteDetails {
        /**
         * Interface for implementing FavouriteDetails.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_change_is_favourite(is_favourite: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;
            vfunc_change_is_favourite_finish(_res_: Gio.AsyncResult): void;
            vfunc_get_is_favourite(): boolean;
            vfunc_set_is_favourite(value: boolean): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            is_favourite: boolean;
            isFavourite: boolean;
        }
    }

    export interface FavouriteDetailsNamespace {
        $gtype: GObject.GType<FavouriteDetails>;
        prototype: FavouriteDetails;
    }
    interface FavouriteDetails extends GObject.Object, FavouriteDetails.Interface {
        // Properties

        get is_favourite(): boolean;
        set is_favourite(val: boolean);
        get isFavourite(): boolean;
        set isFavourite(val: boolean);

        // Methods

        change_is_favourite(is_favourite: boolean): globalThis.Promise<void>;
        change_is_favourite(is_favourite: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_is_favourite(
            is_favourite: boolean,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_is_favourite_finish(_res_: Gio.AsyncResult): void;
        get_is_favourite(): boolean;
        set_is_favourite(value: boolean): void;
    }

    export const FavouriteDetails: FavouriteDetailsNamespace & {
        new (): FavouriteDetails; // This allows `obj instanceof FavouriteDetails`
    };

    namespace GenderDetails {
        /**
         * Interface for implementing GenderDetails.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_change_gender(gender: Gender, _callback_: Gio.AsyncReadyCallback<this>): void;
            vfunc_change_gender_finish(_res_: Gio.AsyncResult): void;
            vfunc_get_gender(): Gender;
            vfunc_set_gender(value: Gender): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            gender: Gender;
        }
    }

    export interface GenderDetailsNamespace {
        $gtype: GObject.GType<GenderDetails>;
        prototype: GenderDetails;
    }
    interface GenderDetails extends GObject.Object, GenderDetails.Interface {
        // Properties

        get gender(): Gender;
        set gender(val: Gender);

        // Methods

        change_gender(gender: Gender | null): globalThis.Promise<void>;
        change_gender(gender: Gender | null, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_gender(
            gender: Gender | null,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_gender_finish(_res_: Gio.AsyncResult): void;
        get_gender(): Gender;
        set_gender(value: Gender | null): void;
    }

    export const GenderDetails: GenderDetailsNamespace & {
        new (): GenderDetails; // This allows `obj instanceof GenderDetails`
    };

    namespace GroupDetails {
        /**
         * Interface for implementing GroupDetails.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_change_group(group: string, is_member: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;
            vfunc_change_group_finish(_res_: Gio.AsyncResult): void;
            vfunc_change_groups(groups: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
            vfunc_change_groups_finish(_res_: Gio.AsyncResult): void;
            vfunc_get_groups(): Gee.Set;
            vfunc_set_groups(value: Gee.Set): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            groups: Gee.Set;
        }
    }

    export interface GroupDetailsNamespace {
        $gtype: GObject.GType<GroupDetails>;
        prototype: GroupDetails;
    }
    interface GroupDetails extends GObject.Object, GroupDetails.Interface {
        // Properties

        get groups(): Gee.Set;
        set groups(val: Gee.Set);

        // Methods

        change_group(group: string, is_member: boolean): globalThis.Promise<void>;
        change_group(group: string, is_member: boolean, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_group(
            group: string,
            is_member: boolean,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_group_finish(_res_: Gio.AsyncResult): void;
        change_groups(groups: Gee.Set): globalThis.Promise<void>;
        change_groups(groups: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_groups(groups: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        change_groups_finish(_res_: Gio.AsyncResult): void;
        get_groups(): Gee.Set;
        set_groups(value: Gee.Set): void;
    }

    export const GroupDetails: GroupDetailsNamespace & {
        new (): GroupDetails; // This allows `obj instanceof GroupDetails`
    };

    namespace ImDetails {
        /**
         * Interface for implementing ImDetails.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_change_im_addresses(im_addresses: Gee.MultiMap, _callback_: Gio.AsyncReadyCallback<this>): void;
            vfunc_change_im_addresses_finish(_res_: Gio.AsyncResult): void;
            vfunc_get_im_addresses(): Gee.MultiMap;
            vfunc_set_im_addresses(value: Gee.MultiMap): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            im_addresses: Gee.MultiMap;
            imAddresses: Gee.MultiMap;
        }
    }

    export interface ImDetailsNamespace {
        $gtype: GObject.GType<ImDetails>;
        prototype: ImDetails;

        normalise_im_address(im_address: string, protocol: string): string;
    }
    interface ImDetails extends GObject.Object, ImDetails.Interface {
        // Properties

        get im_addresses(): Gee.MultiMap;
        set im_addresses(val: Gee.MultiMap);
        get imAddresses(): Gee.MultiMap;
        set imAddresses(val: Gee.MultiMap);

        // Methods

        change_im_addresses(im_addresses: Gee.MultiMap): globalThis.Promise<void>;
        change_im_addresses(im_addresses: Gee.MultiMap, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_im_addresses(
            im_addresses: Gee.MultiMap,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_im_addresses_finish(_res_: Gio.AsyncResult): void;
        get_im_addresses(): Gee.MultiMap;
        set_im_addresses(value: Gee.MultiMap): void;
    }

    export const ImDetails: ImDetailsNamespace & {
        new (): ImDetails; // This allows `obj instanceof ImDetails`
    };

    namespace InteractionDetails {
        /**
         * Interface for implementing InteractionDetails.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_get_im_interaction_count(): number;
            vfunc_get_last_im_interaction_datetime(): GLib.DateTime;
            vfunc_get_call_interaction_count(): number;
            vfunc_get_last_call_interaction_datetime(): GLib.DateTime;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            im_interaction_count: number;
            imInteractionCount: number;
            last_im_interaction_datetime: GLib.DateTime;
            lastImInteractionDatetime: GLib.DateTime;
            call_interaction_count: number;
            callInteractionCount: number;
            last_call_interaction_datetime: GLib.DateTime;
            lastCallInteractionDatetime: GLib.DateTime;
        }
    }

    export interface InteractionDetailsNamespace {
        $gtype: GObject.GType<InteractionDetails>;
        prototype: InteractionDetails;
    }
    interface InteractionDetails extends GObject.Object, InteractionDetails.Interface {
        // Properties

        get im_interaction_count(): number;
        get imInteractionCount(): number;
        get last_im_interaction_datetime(): GLib.DateTime;
        get lastImInteractionDatetime(): GLib.DateTime;
        get call_interaction_count(): number;
        get callInteractionCount(): number;
        get last_call_interaction_datetime(): GLib.DateTime;
        get lastCallInteractionDatetime(): GLib.DateTime;

        // Methods

        get_im_interaction_count(): number;
        get_last_im_interaction_datetime(): GLib.DateTime;
        get_call_interaction_count(): number;
        get_last_call_interaction_datetime(): GLib.DateTime;
    }

    export const InteractionDetails: InteractionDetailsNamespace & {
        new (): InteractionDetails; // This allows `obj instanceof InteractionDetails`
    };

    namespace LocalIdDetails {
        /**
         * Interface for implementing LocalIdDetails.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_change_local_ids(local_ids: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
            vfunc_change_local_ids_finish(_res_: Gio.AsyncResult): void;
            vfunc_get_local_ids(): Gee.Set;
            vfunc_set_local_ids(value: Gee.Set): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            local_ids: Gee.Set;
            localIds: Gee.Set;
        }
    }

    export interface LocalIdDetailsNamespace {
        $gtype: GObject.GType<LocalIdDetails>;
        prototype: LocalIdDetails;
    }
    interface LocalIdDetails extends GObject.Object, LocalIdDetails.Interface {
        // Properties

        get local_ids(): Gee.Set;
        set local_ids(val: Gee.Set);
        get localIds(): Gee.Set;
        set localIds(val: Gee.Set);

        // Methods

        change_local_ids(local_ids: Gee.Set): globalThis.Promise<void>;
        change_local_ids(local_ids: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_local_ids(
            local_ids: Gee.Set,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_local_ids_finish(_res_: Gio.AsyncResult): void;
        get_local_ids(): Gee.Set;
        set_local_ids(value: Gee.Set): void;
    }

    export const LocalIdDetails: LocalIdDetailsNamespace & {
        new (): LocalIdDetails; // This allows `obj instanceof LocalIdDetails`
    };

    namespace LocationDetails {
        /**
         * Interface for implementing LocationDetails.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_change_location(location: Location, _callback_: Gio.AsyncReadyCallback<this>): void;
            vfunc_change_location_finish(_res_: Gio.AsyncResult): void;
            vfunc_get_location(): Location;
            vfunc_set_location(value: Location): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            location: Location;
        }
    }

    export interface LocationDetailsNamespace {
        $gtype: GObject.GType<LocationDetails>;
        prototype: LocationDetails;
    }
    interface LocationDetails extends GObject.Object, LocationDetails.Interface {
        // Properties

        get location(): Location;
        set location(val: Location);

        // Methods

        change_location(location: Location): globalThis.Promise<void>;
        change_location(location: Location, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_location(location: Location, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        change_location_finish(_res_: Gio.AsyncResult): void;
        get_location(): Location;
        set_location(value: Location): void;
    }

    export const LocationDetails: LocationDetailsNamespace & {
        new (): LocationDetails; // This allows `obj instanceof LocationDetails`
    };

    namespace NameDetails {
        /**
         * Interface for implementing NameDetails.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_change_structured_name(name: StructuredName, _callback_: Gio.AsyncReadyCallback<this>): void;
            vfunc_change_structured_name_finish(_res_: Gio.AsyncResult): void;
            vfunc_change_full_name(full_name: string, _callback_: Gio.AsyncReadyCallback<this>): void;
            vfunc_change_full_name_finish(_res_: Gio.AsyncResult): void;
            vfunc_change_nickname(nickname: string, _callback_: Gio.AsyncReadyCallback<this>): void;
            vfunc_change_nickname_finish(_res_: Gio.AsyncResult): void;
            vfunc_get_structured_name(): StructuredName;
            vfunc_set_structured_name(value: StructuredName): void;
            vfunc_get_full_name(): string;
            vfunc_set_full_name(value: string): void;
            vfunc_get_nickname(): string;
            vfunc_set_nickname(value: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            structured_name: StructuredName;
            structuredName: StructuredName;
            full_name: string;
            fullName: string;
            nickname: string;
        }
    }

    export interface NameDetailsNamespace {
        $gtype: GObject.GType<NameDetails>;
        prototype: NameDetails;
    }
    interface NameDetails extends GObject.Object, NameDetails.Interface {
        // Properties

        get structured_name(): StructuredName;
        set structured_name(val: StructuredName);
        get structuredName(): StructuredName;
        set structuredName(val: StructuredName);
        get full_name(): string;
        set full_name(val: string);
        get fullName(): string;
        set fullName(val: string);
        get nickname(): string;
        set nickname(val: string);

        // Methods

        change_structured_name(name: StructuredName): globalThis.Promise<void>;
        change_structured_name(name: StructuredName, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_structured_name(
            name: StructuredName,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_structured_name_finish(_res_: Gio.AsyncResult): void;
        change_full_name(full_name: string): globalThis.Promise<void>;
        change_full_name(full_name: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_full_name(full_name: string, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        change_full_name_finish(_res_: Gio.AsyncResult): void;
        change_nickname(nickname: string): globalThis.Promise<void>;
        change_nickname(nickname: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_nickname(nickname: string, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        change_nickname_finish(_res_: Gio.AsyncResult): void;
        get_structured_name(): StructuredName;
        set_structured_name(value: StructuredName): void;
        get_full_name(): string;
        set_full_name(value: string): void;
        get_nickname(): string;
        set_nickname(value: string): void;
    }

    export const NameDetails: NameDetailsNamespace & {
        new (): NameDetails; // This allows `obj instanceof NameDetails`
    };

    namespace NoteDetails {
        /**
         * Interface for implementing NoteDetails.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_change_notes(notes: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
            vfunc_change_notes_finish(_res_: Gio.AsyncResult): void;
            vfunc_get_notes(): Gee.Set;
            vfunc_set_notes(value: Gee.Set): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            notes: Gee.Set;
        }
    }

    export interface NoteDetailsNamespace {
        $gtype: GObject.GType<NoteDetails>;
        prototype: NoteDetails;
    }
    interface NoteDetails extends GObject.Object, NoteDetails.Interface {
        // Properties

        get notes(): Gee.Set;
        set notes(val: Gee.Set);

        // Methods

        change_notes(notes: Gee.Set): globalThis.Promise<void>;
        change_notes(notes: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_notes(notes: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        change_notes_finish(_res_: Gio.AsyncResult): void;
        get_notes(): Gee.Set;
        set_notes(value: Gee.Set): void;
    }

    export const NoteDetails: NoteDetailsNamespace & {
        new (): NoteDetails; // This allows `obj instanceof NoteDetails`
    };

    namespace PhoneDetails {
        /**
         * Interface for implementing PhoneDetails.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_change_phone_numbers(phone_numbers: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
            vfunc_change_phone_numbers_finish(_res_: Gio.AsyncResult): void;
            vfunc_get_phone_numbers(): Gee.Set;
            vfunc_set_phone_numbers(value: Gee.Set): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            phone_numbers: Gee.Set;
            phoneNumbers: Gee.Set;
        }
    }

    export interface PhoneDetailsNamespace {
        $gtype: GObject.GType<PhoneDetails>;
        prototype: PhoneDetails;
    }
    interface PhoneDetails extends GObject.Object, PhoneDetails.Interface {
        // Properties

        get phone_numbers(): Gee.Set;
        set phone_numbers(val: Gee.Set);
        get phoneNumbers(): Gee.Set;
        set phoneNumbers(val: Gee.Set);

        // Methods

        change_phone_numbers(phone_numbers: Gee.Set): globalThis.Promise<void>;
        change_phone_numbers(phone_numbers: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_phone_numbers(
            phone_numbers: Gee.Set,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_phone_numbers_finish(_res_: Gio.AsyncResult): void;
        get_phone_numbers(): Gee.Set;
        set_phone_numbers(value: Gee.Set): void;
    }

    export const PhoneDetails: PhoneDetailsNamespace & {
        new (): PhoneDetails; // This allows `obj instanceof PhoneDetails`
    };

    namespace PostalAddressDetails {
        /**
         * Interface for implementing PostalAddressDetails.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_change_postal_addresses(postal_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
            vfunc_change_postal_addresses_finish(_res_: Gio.AsyncResult): void;
            vfunc_get_postal_addresses(): Gee.Set;
            vfunc_set_postal_addresses(value: Gee.Set): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            postal_addresses: Gee.Set;
            postalAddresses: Gee.Set;
        }
    }

    export interface PostalAddressDetailsNamespace {
        $gtype: GObject.GType<PostalAddressDetails>;
        prototype: PostalAddressDetails;
    }
    interface PostalAddressDetails extends GObject.Object, PostalAddressDetails.Interface {
        // Properties

        get postal_addresses(): Gee.Set;
        set postal_addresses(val: Gee.Set);
        get postalAddresses(): Gee.Set;
        set postalAddresses(val: Gee.Set);

        // Methods

        change_postal_addresses(postal_addresses: Gee.Set): globalThis.Promise<void>;
        change_postal_addresses(postal_addresses: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_postal_addresses(
            postal_addresses: Gee.Set,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_postal_addresses_finish(_res_: Gio.AsyncResult): void;
        get_postal_addresses(): Gee.Set;
        set_postal_addresses(value: Gee.Set): void;
    }

    export const PostalAddressDetails: PostalAddressDetailsNamespace & {
        new (): PostalAddressDetails; // This allows `obj instanceof PostalAddressDetails`
    };

    namespace PresenceDetails {
        /**
         * Interface for implementing PresenceDetails.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_get_presence_type(): PresenceType;
            vfunc_set_presence_type(value: PresenceType): void;
            vfunc_get_presence_message(): string;
            vfunc_set_presence_message(value: string): void;
            vfunc_get_client_types(): string[];
            vfunc_set_client_types(value: string[]): void;
            vfunc_get_presence_status(): string;
            vfunc_set_presence_status(value: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            presence_type: PresenceType;
            presenceType: PresenceType;
            presence_message: string;
            presenceMessage: string;
            client_types: string[];
            clientTypes: string[];
            presence_status: string;
            presenceStatus: string;
        }
    }

    export interface PresenceDetailsNamespace {
        $gtype: GObject.GType<PresenceDetails>;
        prototype: PresenceDetails;

        get_default_message_from_type(type: PresenceType): string;
        typecmp(type_a: PresenceType, type_b: PresenceType): number;
    }
    interface PresenceDetails extends GObject.Object, PresenceDetails.Interface {
        // Properties

        get presence_type(): PresenceType;
        set presence_type(val: PresenceType);
        get presenceType(): PresenceType;
        set presenceType(val: PresenceType);
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

        // Methods

        is_online(): boolean;
        get_presence_type(): PresenceType;
        set_presence_type(value: PresenceType | null): void;
        get_presence_message(): string;
        set_presence_message(value: string): void;
        get_client_types(): string[];
        set_client_types(value: string[]): void;
        get_presence_status(): string;
        set_presence_status(value: string): void;
    }

    export const PresenceDetails: PresenceDetailsNamespace & {
        new (): PresenceDetails; // This allows `obj instanceof PresenceDetails`
    };

    namespace RoleDetails {
        /**
         * Interface for implementing RoleDetails.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_change_roles(roles: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
            vfunc_change_roles_finish(_res_: Gio.AsyncResult): void;
            vfunc_get_roles(): Gee.Set;
            vfunc_set_roles(value: Gee.Set): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            roles: Gee.Set;
        }
    }

    export interface RoleDetailsNamespace {
        $gtype: GObject.GType<RoleDetails>;
        prototype: RoleDetails;
    }
    interface RoleDetails extends GObject.Object, RoleDetails.Interface {
        // Properties

        get roles(): Gee.Set;
        set roles(val: Gee.Set);

        // Methods

        change_roles(roles: Gee.Set): globalThis.Promise<void>;
        change_roles(roles: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_roles(roles: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        change_roles_finish(_res_: Gio.AsyncResult): void;
        get_roles(): Gee.Set;
        set_roles(value: Gee.Set): void;
    }

    export const RoleDetails: RoleDetailsNamespace & {
        new (): RoleDetails; // This allows `obj instanceof RoleDetails`
    };

    namespace UrlDetails {
        /**
         * Interface for implementing UrlDetails.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_change_urls(urls: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
            vfunc_change_urls_finish(_res_: Gio.AsyncResult): void;
            vfunc_get_urls(): Gee.Set;
            vfunc_set_urls(value: Gee.Set): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            urls: Gee.Set;
        }
    }

    export interface UrlDetailsNamespace {
        $gtype: GObject.GType<UrlDetails>;
        prototype: UrlDetails;
    }
    interface UrlDetails extends GObject.Object, UrlDetails.Interface {
        // Properties

        get urls(): Gee.Set;
        set urls(val: Gee.Set);

        // Methods

        change_urls(urls: Gee.Set): globalThis.Promise<void>;
        change_urls(urls: Gee.Set, _callback_: Gio.AsyncReadyCallback<this>): void;
        change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;
        change_urls_finish(_res_: Gio.AsyncResult): void;
        get_urls(): Gee.Set;
        set_urls(value: Gee.Set): void;
    }

    export const UrlDetails: UrlDetailsNamespace & {
        new (): UrlDetails; // This allows `obj instanceof UrlDetails`
    };

    namespace WebServiceDetails {
        /**
         * Interface for implementing WebServiceDetails.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_change_web_service_addresses(
                web_service_addresses: Gee.MultiMap,
                _callback_: Gio.AsyncReadyCallback<this>,
            ): void;
            vfunc_change_web_service_addresses_finish(_res_: Gio.AsyncResult): void;
            vfunc_get_web_service_addresses(): Gee.MultiMap;
            vfunc_set_web_service_addresses(value: Gee.MultiMap): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            web_service_addresses: Gee.MultiMap;
            webServiceAddresses: Gee.MultiMap;
        }
    }

    export interface WebServiceDetailsNamespace {
        $gtype: GObject.GType<WebServiceDetails>;
        prototype: WebServiceDetails;
    }
    interface WebServiceDetails extends GObject.Object, WebServiceDetails.Interface {
        // Properties

        get web_service_addresses(): Gee.MultiMap;
        set web_service_addresses(val: Gee.MultiMap);
        get webServiceAddresses(): Gee.MultiMap;
        set webServiceAddresses(val: Gee.MultiMap);

        // Methods

        change_web_service_addresses(web_service_addresses: Gee.MultiMap): globalThis.Promise<void>;
        change_web_service_addresses(
            web_service_addresses: Gee.MultiMap,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        change_web_service_addresses(
            web_service_addresses: Gee.MultiMap,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<void> | void;
        change_web_service_addresses_finish(_res_: Gio.AsyncResult): void;
        get_web_service_addresses(): Gee.MultiMap;
        set_web_service_addresses(value: Gee.MultiMap): void;
    }

    export const WebServiceDetails: WebServiceDetailsNamespace & {
        new (): WebServiceDetails; // This allows `obj instanceof WebServiceDetails`
    };

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
