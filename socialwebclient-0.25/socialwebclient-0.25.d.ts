/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace SocialWebClient {
    /**
     * SocialWebClient-0.25
     */

    interface ClientGetServicesCallback {
        (client: Client, services: string[]): void;
    }
    interface ClientIsOnlineCallback {
        (client: Client, online: boolean): void;
    }
    interface ClientServiceContactsQueryOpenViewCallback {
        (query: ClientService, contact_view?: ClientContactView | null): void;
    }
    interface ClientServiceGetCapabilitiesCallback {
        (service: ClientService, caps: string[], error: GLib.Error): void;
    }
    interface ClientServiceQueryOpenViewCallback {
        (query: ClientService, item_view?: ClientItemView | null): void;
    }
    interface ClientServiceUpdateStatusCallback {
        (service: ClientService, error: GLib.Error): void;
    }
    namespace Client {
        // Signal callback interfaces

        interface OnlineChanged {
            (object: boolean): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        // Constructors

        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Client;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'online-changed', callback: (_source: this, object: boolean) => void): number;
        connect_after(signal: 'online-changed', callback: (_source: this, object: boolean) => void): number;
        emit(signal: 'online-changed', object: boolean): void;

        // Methods

        get_service(service_name: string): ClientService;
        get_services(cb: ClientGetServicesCallback): void;
        is_online(cb: ClientIsOnlineCallback): void;
    }

    namespace ClientContactView {
        // Signal callback interfaces

        interface ContactsAdded {
            (contacts: Contact[]): void;
        }

        interface ContactsChanged {
            (contacts: Contact[]): void;
        }

        interface ContactsRemoved {
            (contacts: Contact[]): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            object_path: string;
            objectPath: string;
        }
    }

    class ClientContactView extends GObject.Object {
        static $gtype: GObject.GType<ClientContactView>;

        // Properties

        get object_path(): string;
        get objectPath(): string;

        // Constructors

        constructor(properties?: Partial<ClientContactView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'contacts-added', callback: (_source: this, contacts: Contact[]) => void): number;
        connect_after(signal: 'contacts-added', callback: (_source: this, contacts: Contact[]) => void): number;
        emit(signal: 'contacts-added', contacts: Contact[]): void;
        connect(signal: 'contacts-changed', callback: (_source: this, contacts: Contact[]) => void): number;
        connect_after(signal: 'contacts-changed', callback: (_source: this, contacts: Contact[]) => void): number;
        emit(signal: 'contacts-changed', contacts: Contact[]): void;
        connect(signal: 'contacts-removed', callback: (_source: this, contacts: Contact[]) => void): number;
        connect_after(signal: 'contacts-removed', callback: (_source: this, contacts: Contact[]) => void): number;
        emit(signal: 'contacts-removed', contacts: Contact[]): void;

        // Methods

        close(): void;
        refresh(): void;
        start(): void;
        stop(): void;
    }

    namespace ClientItemView {
        // Signal callback interfaces

        interface ItemsAdded {
            (items: Item[]): void;
        }

        interface ItemsChanged {
            (items: Item[]): void;
        }

        interface ItemsRemoved {
            (items: Item[]): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            object_path: string;
            objectPath: string;
        }
    }

    class ClientItemView extends GObject.Object {
        static $gtype: GObject.GType<ClientItemView>;

        // Properties

        get object_path(): string;
        get objectPath(): string;

        // Constructors

        constructor(properties?: Partial<ClientItemView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'items-added', callback: (_source: this, items: Item[]) => void): number;
        connect_after(signal: 'items-added', callback: (_source: this, items: Item[]) => void): number;
        emit(signal: 'items-added', items: Item[]): void;
        connect(signal: 'items-changed', callback: (_source: this, items: Item[]) => void): number;
        connect_after(signal: 'items-changed', callback: (_source: this, items: Item[]) => void): number;
        emit(signal: 'items-changed', items: Item[]): void;
        connect(signal: 'items-removed', callback: (_source: this, items: Item[]) => void): number;
        connect_after(signal: 'items-removed', callback: (_source: this, items: Item[]) => void): number;
        emit(signal: 'items-removed', items: Item[]): void;

        // Methods

        close(): void;
        refresh(): void;
        start(): void;
        stop(): void;
    }

    namespace ClientLastfm {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ClientLastfm extends GObject.Object {
        static $gtype: GObject.GType<ClientLastfm>;

        // Constructors

        constructor(properties?: Partial<ClientLastfm.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ClientLastfm;

        // Methods

        now_playing(
            artist: string,
            album: string,
            track: string,
            length: number,
            tracknumber: number,
            musicbrainz_id: string,
        ): void;
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
        // Signal callback interfaces

        interface AvatarRetrieved {
            (object: string): void;
        }

        interface CapabilitiesChanged {
            (object: string[]): void;
        }

        interface StatusUpdated {
            (object: boolean): void;
        }

        interface UserChanged {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ClientService extends GObject.Object {
        static $gtype: GObject.GType<ClientService>;

        // Constructors

        constructor(properties?: Partial<ClientService.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'avatar-retrieved', callback: (_source: this, object: string) => void): number;
        connect_after(signal: 'avatar-retrieved', callback: (_source: this, object: string) => void): number;
        emit(signal: 'avatar-retrieved', object: string): void;
        connect(signal: 'capabilities-changed', callback: (_source: this, object: string[]) => void): number;
        connect_after(signal: 'capabilities-changed', callback: (_source: this, object: string[]) => void): number;
        emit(signal: 'capabilities-changed', object: string[]): void;
        connect(signal: 'status-updated', callback: (_source: this, object: boolean) => void): number;
        connect_after(signal: 'status-updated', callback: (_source: this, object: boolean) => void): number;
        emit(signal: 'status-updated', object: boolean): void;
        connect(signal: 'user-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'user-changed', callback: (_source: this) => void): number;
        emit(signal: 'user-changed'): void;

        // Static methods

        static has_cap(caps: string[], cap: string): boolean;

        // Virtual methods

        vfunc_avatar_retrieved(path: string): void;
        vfunc_capabilities_changed(caps: string): void;
        vfunc_status_updated(success: boolean): void;
        vfunc_user_changed(): void;

        // Methods

        banishable_hide_item(uid: string): void;
        contacts_query_open_view(
            query: string,
            params: { [key: string]: any } | GLib.HashTable<string, string>,
            cb: ClientServiceContactsQueryOpenViewCallback,
        ): void;
        credentials_updated(): void;
        get_display_name(): string;
        get_dynamic_capabilities(cb: ClientServiceGetCapabilitiesCallback): void;
        get_name(): string;
        get_static_capabilities(cb: ClientServiceGetCapabilitiesCallback): void;
        query_open_view(
            query: string,
            params: { [key: string]: any } | GLib.HashTable<string, string>,
            cb: ClientServiceQueryOpenViewCallback,
        ): void;
        request_avatar(): void;
        update_status(cb: ClientServiceUpdateStatusCallback, status_msg: string): void;
        update_status_with_fields(
            cb: ClientServiceUpdateStatusCallback,
            status_msg: string,
            fields: { [key: string]: any } | GLib.HashTable<string, string>,
        ): void;
        upload_photo_finish(res: Gio.AsyncResult): boolean;
        upload_video_finish(res: Gio.AsyncResult): boolean;
    }

    type ClientClass = typeof Client;
    type ClientContactViewClass = typeof ClientContactView;
    type ClientItemViewClass = typeof ClientItemView;
    type ClientLastfmClass = typeof ClientLastfm;
    type ClientServiceClass = typeof ClientService;
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
        _init(...args: any[]): void;

        static ['new'](): Contact;

        // Methods

        free(): void;
        get_value(key: string): string;
        get_value_all(key: string): string[];
        has_key(key: string): boolean;
        is_from_cache(): boolean;
        ref(): Contact;
        unref(): void;
    }

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
        _init(...args: any[]): void;

        static ['new'](): Item;

        // Methods

        free(): void;
        get_value(key: string): string;
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
