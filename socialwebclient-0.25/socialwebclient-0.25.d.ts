/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './socialwebclient-0.25-ambient.d.ts';
import './socialwebclient-0.25-import.d.ts';
/**
 * SocialWebClient-0.25
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace SocialWebClient {
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
    module Client {
        // Signal callback interfaces

        interface OnlineChanged {
            (object: boolean): void;
        }

        // Constructor properties interface
    }

    class Client extends GObject.Object {
        // Constructors of SocialWebClient-0.25.Client

        static ['new'](): Client;

        // Owm methods of SocialWebClient-0.25.Client

        get_service(service_name: string): ClientService;
        get_services(cb: ClientGetServicesCallback): void;
        is_online(cb: ClientIsOnlineCallback): void;
    }

    module ClientContactView {
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
    }

    class ClientContactView extends GObject.Object {
        // Own properties of SocialWebClient-0.25.ClientContactView

        object_path: string;
        objectPath: string;

        // Owm methods of SocialWebClient-0.25.ClientContactView

        close(): void;
        refresh(): void;
        start(): void;
        stop(): void;
    }

    module ClientItemView {
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
    }

    class ClientItemView extends GObject.Object {
        // Own properties of SocialWebClient-0.25.ClientItemView

        object_path: string;
        objectPath: string;

        // Owm methods of SocialWebClient-0.25.ClientItemView

        close(): void;
        refresh(): void;
        start(): void;
        stop(): void;
    }

    module ClientLastfm {
        // Constructor properties interface
    }

    class ClientLastfm extends GObject.Object {
        // Constructors of SocialWebClient-0.25.ClientLastfm

        static ['new'](): ClientLastfm;

        // Owm methods of SocialWebClient-0.25.ClientLastfm

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

    module ClientService {
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
    }

    class ClientService extends GObject.Object {
        // Owm methods of SocialWebClient-0.25.ClientService

        static has_cap(caps: string[], cap: string): boolean;

        // Owm methods of SocialWebClient-0.25.ClientService

        banishable_hide_item(uid: string): void;
        contacts_query_open_view(
            query: string,
            params: GLib.HashTable<string, string>,
            cb: ClientServiceContactsQueryOpenViewCallback,
        ): void;
        credentials_updated(): void;
        get_display_name(): string;
        get_dynamic_capabilities(cb: ClientServiceGetCapabilitiesCallback): void;
        get_name(): string;
        get_static_capabilities(cb: ClientServiceGetCapabilitiesCallback): void;
        query_open_view(
            query: string,
            params: GLib.HashTable<string, string>,
            cb: ClientServiceQueryOpenViewCallback,
        ): void;
        request_avatar(): void;
        update_status(cb: ClientServiceUpdateStatusCallback, status_msg: string): void;
        update_status_with_fields(
            cb: ClientServiceUpdateStatusCallback,
            status_msg: string,
            fields: GLib.HashTable<string, string>,
        ): void;
        upload_photo_finish(res: Gio.AsyncResult): boolean;
        upload_video_finish(res: Gio.AsyncResult): boolean;
    }

    class ClientClass {}

    class ClientContactViewClass {}

    class ClientItemViewClass {}

    class ClientLastfmClass {}

    class ClientServiceClass {}

    class Contact {
        // Own fields of SocialWebClient-0.25.Contact

        refcount: number;
        service: string;
        uuid: string;
        date: GLib.TimeVal;

        // Constructors of SocialWebClient-0.25.Contact

        constructor(
            properties?: Partial<{
                refcount: number;
                service: string;
                uuid: string;
                date: GLib.TimeVal;
            }>,
        );

        static ['new'](): Contact;

        // Owm methods of SocialWebClient-0.25.Contact

        free(): void;
        get_value(key: string): string;
        get_value_all(key: string): string[];
        has_key(key: string): boolean;
        is_from_cache(): boolean;
        ref(): Contact;
        unref(): void;
    }

    class Item {
        // Own fields of SocialWebClient-0.25.Item

        refcount: number;
        service: string;
        uuid: string;
        date: GLib.TimeVal;

        // Constructors of SocialWebClient-0.25.Item

        constructor(
            properties?: Partial<{
                refcount: number;
                service: string;
                uuid: string;
                date: GLib.TimeVal;
            }>,
        );

        static ['new'](): Item;

        // Owm methods of SocialWebClient-0.25.Item

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
