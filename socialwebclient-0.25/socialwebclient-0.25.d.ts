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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace SocialWebClient {
    /**
     * SocialWebClient-0.25
     */

    /**
     * @gir-type Callback
     */
    interface ClientGetServicesCallback {
        (client: Client, services: string[]): void;
    }
    /**
     * @gir-type Callback
     */
    interface ClientIsOnlineCallback {
        (client: Client, online: boolean): void;
    }
    /**
     * @gir-type Callback
     */
    interface ClientServiceContactsQueryOpenViewCallback {
        (query: ClientService, contact_view?: ClientContactView | null): void;
    }
    /**
     * @gir-type Callback
     */
    interface ClientServiceGetCapabilitiesCallback {
        (service: ClientService, caps: string[], error: GLib.Error): void;
    }
    /**
     * @gir-type Callback
     */
    interface ClientServiceQueryOpenViewCallback {
        (query: ClientService, item_view?: ClientItemView | null): void;
    }
    /**
     * @gir-type Callback
     */
    interface ClientServiceUpdateStatusCallback {
        (service: ClientService, error: GLib.Error): void;
    }
    namespace Client {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            'online-changed': (arg0: boolean) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Client.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Client;

        // Signals

        /** @signal */
        connect<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Client.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param service_name
         */
        get_service(service_name: string): ClientService;
        /**
         * @param cb
         */
        get_services(cb: ClientGetServicesCallback): void;
        /**
         * @param cb
         */
        is_online(cb: ClientIsOnlineCallback): void;
    }

    namespace ClientContactView {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            'contacts-added': (arg0: Contact[]) => void;
            /**
             * @signal
             */
            'contacts-changed': (arg0: Contact[]) => void;
            /**
             * @signal
             */
            'contacts-removed': (arg0: Contact[]) => void;
            'notify::object-path': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            object_path: string;
            objectPath: string;
        }
    }

    /**
     * @gir-type Class
     */
    class ClientContactView extends GObject.Object {
        static $gtype: GObject.GType<ClientContactView>;

        // Properties

        get object_path(): string;
        get objectPath(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ClientContactView.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ClientContactView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ClientContactView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClientContactView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ClientContactView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClientContactView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ClientContactView.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ClientContactView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        close(): void;
        refresh(): void;
        start(): void;
        stop(): void;
    }

    namespace ClientItemView {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            'items-added': (arg0: Item[]) => void;
            /**
             * @signal
             */
            'items-changed': (arg0: Item[]) => void;
            /**
             * @signal
             */
            'items-removed': (arg0: Item[]) => void;
            'notify::object-path': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            object_path: string;
            objectPath: string;
        }
    }

    /**
     * @gir-type Class
     */
    class ClientItemView extends GObject.Object {
        static $gtype: GObject.GType<ClientItemView>;

        // Properties

        get object_path(): string;
        get objectPath(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ClientItemView.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ClientItemView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ClientItemView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClientItemView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ClientItemView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClientItemView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ClientItemView.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ClientItemView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        close(): void;
        refresh(): void;
        start(): void;
        stop(): void;
    }

    namespace ClientLastfm {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ClientLastfm extends GObject.Object {
        static $gtype: GObject.GType<ClientLastfm>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ClientLastfm.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ClientLastfm.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ClientLastfm;

        // Signals

        /** @signal */
        connect<K extends keyof ClientLastfm.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClientLastfm.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ClientLastfm.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClientLastfm.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ClientLastfm.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ClientLastfm.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param artist
         * @param album
         * @param track
         * @param length
         * @param tracknumber
         * @param musicbrainz_id
         */
        now_playing(
            artist: string,
            album: string,
            track: string,
            length: number,
            tracknumber: number,
            musicbrainz_id: string,
        ): void;
        /**
         * @param artist
         * @param album
         * @param track
         * @param time
         * @param source
         * @param rating
         * @param length
         * @param tracknumber
         * @param musicbrainz_id
         */
        submit_track(
            artist: string,
            album: string,
            track: string,
            time: number,
            source: string,
            rating: string,
            length: number,
            tracknumber: number,
            musicbrainz_id: string,
        ): void;
    }

    namespace ClientService {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            'avatar-retrieved': (arg0: string) => void;
            /**
             * @signal
             */
            'capabilities-changed': (arg0: string[]) => void;
            /**
             * @signal
             */
            'status-updated': (arg0: boolean) => void;
            /**
             * @signal
             */
            'user-changed': () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ClientService extends GObject.Object {
        static $gtype: GObject.GType<ClientService>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ClientService.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ClientService.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ClientService.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClientService.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ClientService.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClientService.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ClientService.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ClientService.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param caps
         * @param cap
         */
        static has_cap(caps: string[], cap: string): boolean;

        // Virtual methods

        /**
         * @param path
         * @virtual
         */
        vfunc_avatar_retrieved(path: string): void;
        /**
         * @param caps
         * @virtual
         */
        vfunc_capabilities_changed(caps: string): void;
        /**
         * @param success
         * @virtual
         */
        vfunc_status_updated(success: boolean): void;
        /**
         * @virtual
         */
        vfunc_user_changed(): void;

        // Methods

        /**
         * @param uid
         */
        banishable_hide_item(uid: string): void;
        /**
         * @param query
         * @param params
         * @param cb
         */
        contacts_query_open_view(
            query: string,
            params: { [key: string]: any } | GLib.HashTable<string, string>,
            cb: ClientServiceContactsQueryOpenViewCallback,
        ): void;
        credentials_updated(): void;
        get_display_name(): string;
        /**
         * @param cb
         */
        get_dynamic_capabilities(cb: ClientServiceGetCapabilitiesCallback): void;
        get_name(): string;
        /**
         * @param cb
         */
        get_static_capabilities(cb: ClientServiceGetCapabilitiesCallback): void;
        /**
         * @param query
         * @param params
         * @param cb
         */
        query_open_view(
            query: string,
            params: { [key: string]: any } | GLib.HashTable<string, string>,
            cb: ClientServiceQueryOpenViewCallback,
        ): void;
        request_avatar(): void;
        /**
         * @param cb
         * @param status_msg
         */
        update_status(cb: ClientServiceUpdateStatusCallback, status_msg: string): void;
        /**
         * @param cb
         * @param status_msg
         * @param fields
         */
        update_status_with_fields(
            cb: ClientServiceUpdateStatusCallback,
            status_msg: string,
            fields: { [key: string]: any } | GLib.HashTable<string, string>,
        ): void;
        /**
         * @param res
         */
        upload_photo_finish(res: Gio.AsyncResult): boolean;
        /**
         * @param res
         */
        upload_video_finish(res: Gio.AsyncResult): boolean;
    }

    /**
     * @gir-type Alias
     */
    type ClientClass = typeof Client;
    /**
     * @gir-type Alias
     */
    type ClientContactViewClass = typeof ClientContactView;
    /**
     * @gir-type Alias
     */
    type ClientItemViewClass = typeof ClientItemView;
    /**
     * @gir-type Alias
     */
    type ClientLastfmClass = typeof ClientLastfm;
    /**
     * @gir-type Alias
     */
    type ClientServiceClass = typeof ClientService;
    /**
     * @gir-type Struct
     */
    class Contact {
        static $gtype: GObject.GType<Contact>;

        // Fields

        refcount: number;
        service: string;
        uuid: string;
        date: GLib.TimeVal;

        // Constructors

        constructor(
            properties?: Partial<{
                refcount: number;
                service: string;
                uuid: string;
                date: GLib.TimeVal;
            }>,
        );

        static ['new'](): Contact;

        // Methods

        free(): void;
        /**
         * @param key
         */
        get_value(key: string): string;
        /**
         * @param key
         */
        get_value_all(key: string): string[];
        /**
         * @param key
         */
        has_key(key: string): boolean;
        is_from_cache(): boolean;
        ref(): Contact;
        unref(): void;
    }

    /**
     * @gir-type Struct
     */
    class Item {
        static $gtype: GObject.GType<Item>;

        // Fields

        refcount: number;
        service: string;
        uuid: string;
        date: GLib.TimeVal;

        // Constructors

        constructor(
            properties?: Partial<{
                refcount: number;
                service: string;
                uuid: string;
                date: GLib.TimeVal;
            }>,
        );

        static ['new'](): Item;

        // Methods

        free(): void;
        /**
         * @param key
         */
        get_value(key: string): string;
        /**
         * @param key
         */
        has_key(key: string): boolean;
        is_from_cache(): boolean;
        ref(): Item;
        unref(): void;
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

export default SocialWebClient;

// END
