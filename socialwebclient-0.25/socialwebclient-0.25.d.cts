
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * SocialWebClient-0.25
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export interface ClientGetServicesCallback {
    (client: Client, services: string[]): void
}
export interface ClientIsOnlineCallback {
    (client: Client, online: boolean): void
}
export interface ClientServiceContactsQueryOpenViewCallback {
    (query: ClientService, contact_view: ClientContactView | null): void
}
export interface ClientServiceGetCapabilitiesCallback {
    (service: ClientService, caps: string[], error: GLib.Error): void
}
export interface ClientServiceQueryOpenViewCallback {
    (query: ClientService, item_view: ClientItemView | null): void
}
export interface ClientServiceUpdateStatusCallback {
    (service: ClientService, error: GLib.Error): void
}
export module Client {

    // Signal callback interfaces

    /**
     * Signal callback interface for `online-changed`
     */
    export interface OnlineChangedSignalCallback {
        ($obj: Client, object: boolean): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Client {

    // Own fields of SocialWebClient-0.25.SocialWebClient.Client

    parent: GObject.Object

    // Owm methods of SocialWebClient-0.25.SocialWebClient.Client

    get_service(service_name: string | null): ClientService
    get_services(cb: ClientGetServicesCallback): void
    is_online(cb: ClientIsOnlineCallback): void

    // Own signals of SocialWebClient-0.25.SocialWebClient.Client

    connect(sigName: "online-changed", callback: Client.OnlineChangedSignalCallback): number
    connect_after(sigName: "online-changed", callback: Client.OnlineChangedSignalCallback): number
    emit(sigName: "online-changed", object: boolean, ...args: any[]): void

    // Class property signals of SocialWebClient-0.25.SocialWebClient.Client

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Client extends GObject.Object {

    // Own properties of SocialWebClient-0.25.SocialWebClient.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of SocialWebClient-0.25.SocialWebClient.Client

    constructor(config?: Client.ConstructorProperties) 
    constructor() 
    static new(): Client
    _init(config?: Client.ConstructorProperties): void
}

export module ClientContactView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `contacts-added`
     */
    export interface ContactsAddedSignalCallback {
        ($obj: ClientContactView, contacts: Contact[]): void
    }

    /**
     * Signal callback interface for `contacts-changed`
     */
    export interface ContactsChangedSignalCallback {
        ($obj: ClientContactView, contacts: Contact[]): void
    }

    /**
     * Signal callback interface for `contacts-removed`
     */
    export interface ContactsRemovedSignalCallback {
        ($obj: ClientContactView, contacts: Contact[]): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of SocialWebClient-0.25.SocialWebClient.ClientContactView

        object_path?: string | null
    }

}

export interface ClientContactView {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientContactView

    readonly object_path: string | null

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientContactView

    parent: GObject.Object

    // Owm methods of SocialWebClient-0.25.SocialWebClient.ClientContactView

    close(): void
    refresh(): void
    start(): void
    stop(): void

    // Own signals of SocialWebClient-0.25.SocialWebClient.ClientContactView

    connect(sigName: "contacts-added", callback: ClientContactView.ContactsAddedSignalCallback): number
    connect_after(sigName: "contacts-added", callback: ClientContactView.ContactsAddedSignalCallback): number
    emit(sigName: "contacts-added", contacts: Contact[], ...args: any[]): void
    connect(sigName: "contacts-changed", callback: ClientContactView.ContactsChangedSignalCallback): number
    connect_after(sigName: "contacts-changed", callback: ClientContactView.ContactsChangedSignalCallback): number
    emit(sigName: "contacts-changed", contacts: Contact[], ...args: any[]): void
    connect(sigName: "contacts-removed", callback: ClientContactView.ContactsRemovedSignalCallback): number
    connect_after(sigName: "contacts-removed", callback: ClientContactView.ContactsRemovedSignalCallback): number
    emit(sigName: "contacts-removed", contacts: Contact[], ...args: any[]): void

    // Class property signals of SocialWebClient-0.25.SocialWebClient.ClientContactView

    connect(sigName: "notify::object-path", callback: (($obj: ClientContactView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: ClientContactView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ClientContactView extends GObject.Object {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientContactView

    static name: string
    static $gtype: GObject.GType<ClientContactView>

    // Constructors of SocialWebClient-0.25.SocialWebClient.ClientContactView

    constructor(config?: ClientContactView.ConstructorProperties) 
    _init(config?: ClientContactView.ConstructorProperties): void
}

export module ClientItemView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `items-added`
     */
    export interface ItemsAddedSignalCallback {
        ($obj: ClientItemView, items: Item[]): void
    }

    /**
     * Signal callback interface for `items-changed`
     */
    export interface ItemsChangedSignalCallback {
        ($obj: ClientItemView, items: Item[]): void
    }

    /**
     * Signal callback interface for `items-removed`
     */
    export interface ItemsRemovedSignalCallback {
        ($obj: ClientItemView, items: Item[]): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of SocialWebClient-0.25.SocialWebClient.ClientItemView

        object_path?: string | null
    }

}

export interface ClientItemView {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientItemView

    readonly object_path: string | null

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientItemView

    parent: GObject.Object

    // Owm methods of SocialWebClient-0.25.SocialWebClient.ClientItemView

    close(): void
    refresh(): void
    start(): void
    stop(): void

    // Own signals of SocialWebClient-0.25.SocialWebClient.ClientItemView

    connect(sigName: "items-added", callback: ClientItemView.ItemsAddedSignalCallback): number
    connect_after(sigName: "items-added", callback: ClientItemView.ItemsAddedSignalCallback): number
    emit(sigName: "items-added", items: Item[], ...args: any[]): void
    connect(sigName: "items-changed", callback: ClientItemView.ItemsChangedSignalCallback): number
    connect_after(sigName: "items-changed", callback: ClientItemView.ItemsChangedSignalCallback): number
    emit(sigName: "items-changed", items: Item[], ...args: any[]): void
    connect(sigName: "items-removed", callback: ClientItemView.ItemsRemovedSignalCallback): number
    connect_after(sigName: "items-removed", callback: ClientItemView.ItemsRemovedSignalCallback): number
    emit(sigName: "items-removed", items: Item[], ...args: any[]): void

    // Class property signals of SocialWebClient-0.25.SocialWebClient.ClientItemView

    connect(sigName: "notify::object-path", callback: (($obj: ClientItemView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: ClientItemView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ClientItemView extends GObject.Object {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientItemView

    static name: string
    static $gtype: GObject.GType<ClientItemView>

    // Constructors of SocialWebClient-0.25.SocialWebClient.ClientItemView

    constructor(config?: ClientItemView.ConstructorProperties) 
    _init(config?: ClientItemView.ConstructorProperties): void
}

export module ClientLastfm {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ClientLastfm {

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientLastfm

    parent: GObject.Object

    // Owm methods of SocialWebClient-0.25.SocialWebClient.ClientLastfm

    now_playing(artist: string | null, album: string | null, track: string | null, length: number, tracknumber: number, musicbrainz_id: string | null): void
    submit_track(artist: string | null, album: string | null, track: string | null, time: number, source: string | null, rating: string | null, length: number, tracknumber: number, musicbrainz_id: string | null): void

    // Class property signals of SocialWebClient-0.25.SocialWebClient.ClientLastfm

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ClientLastfm extends GObject.Object {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientLastfm

    static name: string
    static $gtype: GObject.GType<ClientLastfm>

    // Constructors of SocialWebClient-0.25.SocialWebClient.ClientLastfm

    constructor(config?: ClientLastfm.ConstructorProperties) 
    constructor() 
    static new(): ClientLastfm
    _init(config?: ClientLastfm.ConstructorProperties): void
}

export module ClientService {

    // Signal callback interfaces

    /**
     * Signal callback interface for `avatar-retrieved`
     */
    export interface AvatarRetrievedSignalCallback {
        ($obj: ClientService, object: string | null): void
    }

    /**
     * Signal callback interface for `capabilities-changed`
     */
    export interface CapabilitiesChangedSignalCallback {
        ($obj: ClientService, object: string[]): void
    }

    /**
     * Signal callback interface for `status-updated`
     */
    export interface StatusUpdatedSignalCallback {
        ($obj: ClientService, object: boolean): void
    }

    /**
     * Signal callback interface for `user-changed`
     */
    export interface UserChangedSignalCallback {
        ($obj: ClientService): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ClientService {

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientService

    parent: GObject.Object

    // Owm methods of SocialWebClient-0.25.SocialWebClient.ClientService

    banishable_hide_item(uid: string | null): void
    contacts_query_open_view(query: string | null, params: GLib.HashTable, cb: ClientServiceContactsQueryOpenViewCallback): void
    credentials_updated(): void
    get_display_name(): string | null
    get_dynamic_capabilities(cb: ClientServiceGetCapabilitiesCallback): void
    get_name(): string | null
    get_static_capabilities(cb: ClientServiceGetCapabilitiesCallback): void
    query_open_view(query: string | null, params: GLib.HashTable, cb: ClientServiceQueryOpenViewCallback): void
    request_avatar(): void
    update_status(cb: ClientServiceUpdateStatusCallback, status_msg: string | null): void
    update_status_with_fields(cb: ClientServiceUpdateStatusCallback, status_msg: string | null, fields: GLib.HashTable): void
    upload_photo_finish(res: Gio.AsyncResult): boolean
    upload_video_finish(res: Gio.AsyncResult): boolean

    // Own virtual methods of SocialWebClient-0.25.SocialWebClient.ClientService

    vfunc_avatar_retrieved(path: string | null): void
    vfunc_capabilities_changed(caps: string | null): void
    vfunc_status_updated(success: boolean): void
    vfunc_user_changed(): void

    // Own signals of SocialWebClient-0.25.SocialWebClient.ClientService

    connect(sigName: "avatar-retrieved", callback: ClientService.AvatarRetrievedSignalCallback): number
    connect_after(sigName: "avatar-retrieved", callback: ClientService.AvatarRetrievedSignalCallback): number
    emit(sigName: "avatar-retrieved", object: string | null, ...args: any[]): void
    connect(sigName: "capabilities-changed", callback: ClientService.CapabilitiesChangedSignalCallback): number
    connect_after(sigName: "capabilities-changed", callback: ClientService.CapabilitiesChangedSignalCallback): number
    emit(sigName: "capabilities-changed", object: string[], ...args: any[]): void
    connect(sigName: "status-updated", callback: ClientService.StatusUpdatedSignalCallback): number
    connect_after(sigName: "status-updated", callback: ClientService.StatusUpdatedSignalCallback): number
    emit(sigName: "status-updated", object: boolean, ...args: any[]): void
    connect(sigName: "user-changed", callback: ClientService.UserChangedSignalCallback): number
    connect_after(sigName: "user-changed", callback: ClientService.UserChangedSignalCallback): number
    emit(sigName: "user-changed", ...args: any[]): void

    // Class property signals of SocialWebClient-0.25.SocialWebClient.ClientService

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ClientService extends GObject.Object {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientService

    static name: string
    static $gtype: GObject.GType<ClientService>

    // Constructors of SocialWebClient-0.25.SocialWebClient.ClientService

    constructor(config?: ClientService.ConstructorProperties) 
    _init(config?: ClientService.ConstructorProperties): void
    static has_cap(caps: string[], cap: string | null): boolean
}

export interface ClientClass {

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientClass

    parent_class: GObject.ObjectClass
}

export abstract class ClientClass {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientClass

    static name: string
}

export interface ClientContactViewClass {

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientContactViewClass

    parent_class: GObject.ObjectClass
}

export abstract class ClientContactViewClass {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientContactViewClass

    static name: string
}

export interface ClientItemViewClass {

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientItemViewClass

    parent_class: GObject.ObjectClass
}

export abstract class ClientItemViewClass {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientItemViewClass

    static name: string
}

export interface ClientLastfmClass {

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientLastfmClass

    parent_class: GObject.ObjectClass
}

export abstract class ClientLastfmClass {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientLastfmClass

    static name: string
}

export interface ClientServiceClass {

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientServiceClass

    parent_class: GObject.ObjectClass
    capabilities_changed: (service: ClientService, caps: string | null) => void
    user_changed: (service: ClientService) => void
    avatar_retrieved: (service: ClientService, path: string | null) => void
    status_updated: (service: ClientService, success: boolean) => void
}

export abstract class ClientServiceClass {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientServiceClass

    static name: string
}

export interface Contact {

    // Own fields of SocialWebClient-0.25.SocialWebClient.Contact

    refcount: number
    service: string | null
    uuid: string | null
    date: GLib.TimeVal
    props: GLib.HashTable

    // Owm methods of SocialWebClient-0.25.SocialWebClient.Contact

    free(): void
    get_value(key: string | null): string | null
    get_value_all(key: string | null): string[]
    has_key(key: string | null): boolean
    is_from_cache(): boolean
    ref(): Contact
    unref(): void
}

export class Contact {

    // Own properties of SocialWebClient-0.25.SocialWebClient.Contact

    static name: string

    // Constructors of SocialWebClient-0.25.SocialWebClient.Contact

    constructor() 
    static new(): Contact
}

export interface Item {

    // Own fields of SocialWebClient-0.25.SocialWebClient.Item

    refcount: number
    service: string | null
    uuid: string | null
    date: GLib.TimeVal
    props: GLib.HashTable

    // Owm methods of SocialWebClient-0.25.SocialWebClient.Item

    free(): void
    get_value(key: string | null): string | null
    has_key(key: string | null): boolean
    is_from_cache(): boolean
    ref(): Item
    unref(): void
}

export class Item {

    // Own properties of SocialWebClient-0.25.SocialWebClient.Item

    static name: string

    // Constructors of SocialWebClient-0.25.SocialWebClient.Item

    constructor() 
    static new(): Item
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END