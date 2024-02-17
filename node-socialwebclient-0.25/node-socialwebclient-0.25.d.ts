
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-socialwebclient-0.25-import.d.ts';
    
/**
 * SocialWebClient-0.25
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export namespace SocialWebClient {

interface ClientGetServicesCallback {
    (client: Client, services: string[]): void
}
interface ClientIsOnlineCallback {
    (client: Client, online: boolean): void
}
interface ClientServiceContactsQueryOpenViewCallback {
    (query: ClientService, contactView: ClientContactView | null): void
}
interface ClientServiceGetCapabilitiesCallback {
    (service: ClientService, caps: string[], error: GLib.Error): void
}
interface ClientServiceQueryOpenViewCallback {
    (query: ClientService, itemView: ClientItemView | null): void
}
interface ClientServiceUpdateStatusCallback {
    (service: ClientService, error: GLib.Error): void
}
module Client {

    // Signal callback interfaces

    /**
     * Signal callback interface for `online-changed`
     */
    interface OnlineChangedSignalCallback {
        (object: boolean): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Client {

    // Own properties of SocialWebClient-0.25.SocialWebClient.Client

    __gtype__: number

    // Own fields of SocialWebClient-0.25.SocialWebClient.Client

    parent: GObject.Object

    // Owm methods of SocialWebClient-0.25.SocialWebClient.Client

    getService(serviceName: string): ClientService
    getServices(cb: ClientGetServicesCallback): void
    isOnline(cb: ClientIsOnlineCallback): void

    // Own signals of SocialWebClient-0.25.SocialWebClient.Client

    connect(sigName: "online-changed", callback: Client.OnlineChangedSignalCallback): number
    on(sigName: "online-changed", callback: Client.OnlineChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "online-changed", callback: Client.OnlineChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "online-changed", callback: Client.OnlineChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "online-changed", ...args: any[]): void

    // Class property signals of SocialWebClient-0.25.SocialWebClient.Client

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Client extends GObject.Object {

    // Own properties of SocialWebClient-0.25.SocialWebClient.Client

    static name: string

    // Constructors of SocialWebClient-0.25.SocialWebClient.Client

    constructor(config?: Client.ConstructorProperties) 
    constructor() 
    static new(): Client
    _init(config?: Client.ConstructorProperties): void
}

module ClientContactView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `contacts-added`
     */
    interface ContactsAddedSignalCallback {
        (contacts: Contact[]): void
    }

    /**
     * Signal callback interface for `contacts-changed`
     */
    interface ContactsChangedSignalCallback {
        (contacts: Contact[]): void
    }

    /**
     * Signal callback interface for `contacts-removed`
     */
    interface ContactsRemovedSignalCallback {
        (contacts: Contact[]): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of SocialWebClient-0.25.SocialWebClient.ClientContactView

        object_path?: string | null
    }

}

interface ClientContactView {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientContactView

    readonly objectPath: string | null
    __gtype__: number

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientContactView

    parent: GObject.Object

    // Owm methods of SocialWebClient-0.25.SocialWebClient.ClientContactView

    close(): void
    refresh(): void
    start(): void
    stop(): void

    // Own signals of SocialWebClient-0.25.SocialWebClient.ClientContactView

    connect(sigName: "contacts-added", callback: ClientContactView.ContactsAddedSignalCallback): number
    on(sigName: "contacts-added", callback: ClientContactView.ContactsAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "contacts-added", callback: ClientContactView.ContactsAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "contacts-added", callback: ClientContactView.ContactsAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "contacts-added", ...args: any[]): void
    connect(sigName: "contacts-changed", callback: ClientContactView.ContactsChangedSignalCallback): number
    on(sigName: "contacts-changed", callback: ClientContactView.ContactsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "contacts-changed", callback: ClientContactView.ContactsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "contacts-changed", callback: ClientContactView.ContactsChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "contacts-changed", ...args: any[]): void
    connect(sigName: "contacts-removed", callback: ClientContactView.ContactsRemovedSignalCallback): number
    on(sigName: "contacts-removed", callback: ClientContactView.ContactsRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "contacts-removed", callback: ClientContactView.ContactsRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "contacts-removed", callback: ClientContactView.ContactsRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "contacts-removed", ...args: any[]): void

    // Class property signals of SocialWebClient-0.25.SocialWebClient.ClientContactView

    connect(sigName: "notify::object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ClientContactView extends GObject.Object {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientContactView

    static name: string

    // Constructors of SocialWebClient-0.25.SocialWebClient.ClientContactView

    constructor(config?: ClientContactView.ConstructorProperties) 
    _init(config?: ClientContactView.ConstructorProperties): void
}

module ClientItemView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `items-added`
     */
    interface ItemsAddedSignalCallback {
        (items: Item[]): void
    }

    /**
     * Signal callback interface for `items-changed`
     */
    interface ItemsChangedSignalCallback {
        (items: Item[]): void
    }

    /**
     * Signal callback interface for `items-removed`
     */
    interface ItemsRemovedSignalCallback {
        (items: Item[]): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of SocialWebClient-0.25.SocialWebClient.ClientItemView

        object_path?: string | null
    }

}

interface ClientItemView {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientItemView

    readonly objectPath: string | null
    __gtype__: number

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientItemView

    parent: GObject.Object

    // Owm methods of SocialWebClient-0.25.SocialWebClient.ClientItemView

    close(): void
    refresh(): void
    start(): void
    stop(): void

    // Own signals of SocialWebClient-0.25.SocialWebClient.ClientItemView

    connect(sigName: "items-added", callback: ClientItemView.ItemsAddedSignalCallback): number
    on(sigName: "items-added", callback: ClientItemView.ItemsAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-added", callback: ClientItemView.ItemsAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-added", callback: ClientItemView.ItemsAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "items-added", ...args: any[]): void
    connect(sigName: "items-changed", callback: ClientItemView.ItemsChangedSignalCallback): number
    on(sigName: "items-changed", callback: ClientItemView.ItemsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-changed", callback: ClientItemView.ItemsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-changed", callback: ClientItemView.ItemsChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "items-changed", ...args: any[]): void
    connect(sigName: "items-removed", callback: ClientItemView.ItemsRemovedSignalCallback): number
    on(sigName: "items-removed", callback: ClientItemView.ItemsRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-removed", callback: ClientItemView.ItemsRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-removed", callback: ClientItemView.ItemsRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "items-removed", ...args: any[]): void

    // Class property signals of SocialWebClient-0.25.SocialWebClient.ClientItemView

    connect(sigName: "notify::object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ClientItemView extends GObject.Object {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientItemView

    static name: string

    // Constructors of SocialWebClient-0.25.SocialWebClient.ClientItemView

    constructor(config?: ClientItemView.ConstructorProperties) 
    _init(config?: ClientItemView.ConstructorProperties): void
}

module ClientLastfm {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ClientLastfm {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientLastfm

    __gtype__: number

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientLastfm

    parent: GObject.Object

    // Owm methods of SocialWebClient-0.25.SocialWebClient.ClientLastfm

    nowPlaying(artist: string, album: string, track: string, length: number, tracknumber: number, musicbrainzId: string): void
    submitTrack(artist: string, album: string, track: string, time: number, source: string, rating: string, length: number, tracknumber: number, musicbrainzId: string): void

    // Class property signals of SocialWebClient-0.25.SocialWebClient.ClientLastfm

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ClientLastfm extends GObject.Object {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientLastfm

    static name: string

    // Constructors of SocialWebClient-0.25.SocialWebClient.ClientLastfm

    constructor(config?: ClientLastfm.ConstructorProperties) 
    constructor() 
    static new(): ClientLastfm
    _init(config?: ClientLastfm.ConstructorProperties): void
}

module ClientService {

    // Signal callback interfaces

    /**
     * Signal callback interface for `avatar-retrieved`
     */
    interface AvatarRetrievedSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `capabilities-changed`
     */
    interface CapabilitiesChangedSignalCallback {
        (object: string[]): void
    }

    /**
     * Signal callback interface for `status-updated`
     */
    interface StatusUpdatedSignalCallback {
        (object: boolean): void
    }

    /**
     * Signal callback interface for `user-changed`
     */
    interface UserChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ClientService {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientService

    __gtype__: number

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientService

    parent: GObject.Object

    // Owm methods of SocialWebClient-0.25.SocialWebClient.ClientService

    banishableHideItem(uid: string): void
    contactsQueryOpenView(query: string, params: GLib.HashTable, cb: ClientServiceContactsQueryOpenViewCallback): void
    credentialsUpdated(): void
    getDisplayName(): string
    getDynamicCapabilities(cb: ClientServiceGetCapabilitiesCallback): void
    getName(): string
    getStaticCapabilities(cb: ClientServiceGetCapabilitiesCallback): void
    queryOpenView(query: string, params: GLib.HashTable, cb: ClientServiceQueryOpenViewCallback): void
    requestAvatar(): void
    updateStatus(cb: ClientServiceUpdateStatusCallback, statusMsg: string): void
    updateStatusWithFields(cb: ClientServiceUpdateStatusCallback, statusMsg: string, fields: GLib.HashTable): void
    uploadPhotoFinish(res: Gio.AsyncResult): boolean
    uploadVideoFinish(res: Gio.AsyncResult): boolean

    // Own virtual methods of SocialWebClient-0.25.SocialWebClient.ClientService

    avatarRetrieved(path: string | null): void
    capabilitiesChanged(caps: string): void
    statusUpdated(success: boolean): void
    userChanged(): void

    // Own signals of SocialWebClient-0.25.SocialWebClient.ClientService

    connect(sigName: "avatar-retrieved", callback: ClientService.AvatarRetrievedSignalCallback): number
    on(sigName: "avatar-retrieved", callback: ClientService.AvatarRetrievedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "avatar-retrieved", callback: ClientService.AvatarRetrievedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "avatar-retrieved", callback: ClientService.AvatarRetrievedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "avatar-retrieved", ...args: any[]): void
    connect(sigName: "capabilities-changed", callback: ClientService.CapabilitiesChangedSignalCallback): number
    on(sigName: "capabilities-changed", callback: ClientService.CapabilitiesChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "capabilities-changed", callback: ClientService.CapabilitiesChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "capabilities-changed", callback: ClientService.CapabilitiesChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "capabilities-changed", ...args: any[]): void
    connect(sigName: "status-updated", callback: ClientService.StatusUpdatedSignalCallback): number
    on(sigName: "status-updated", callback: ClientService.StatusUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "status-updated", callback: ClientService.StatusUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "status-updated", callback: ClientService.StatusUpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "status-updated", ...args: any[]): void
    connect(sigName: "user-changed", callback: ClientService.UserChangedSignalCallback): number
    on(sigName: "user-changed", callback: ClientService.UserChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-changed", callback: ClientService.UserChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-changed", callback: ClientService.UserChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "user-changed", ...args: any[]): void

    // Class property signals of SocialWebClient-0.25.SocialWebClient.ClientService

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ClientService extends GObject.Object {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientService

    static name: string

    // Constructors of SocialWebClient-0.25.SocialWebClient.ClientService

    constructor(config?: ClientService.ConstructorProperties) 
    _init(config?: ClientService.ConstructorProperties): void
    static hasCap(caps: string[], cap: string): boolean
}

interface ClientClass {

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientClass

    parentClass: GObject.ObjectClass
}

abstract class ClientClass {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientClass

    static name: string
}

interface ClientContactViewClass {

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientContactViewClass

    parentClass: GObject.ObjectClass
}

abstract class ClientContactViewClass {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientContactViewClass

    static name: string
}

interface ClientItemViewClass {

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientItemViewClass

    parentClass: GObject.ObjectClass
}

abstract class ClientItemViewClass {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientItemViewClass

    static name: string
}

interface ClientLastfmClass {

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientLastfmClass

    parentClass: GObject.ObjectClass
}

abstract class ClientLastfmClass {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientLastfmClass

    static name: string
}

interface ClientServiceClass {

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientServiceClass

    parentClass: GObject.ObjectClass
    capabilitiesChanged: (service: ClientService, caps: string) => void
    userChanged: (service: ClientService) => void
    avatarRetrieved: (service: ClientService, path: string | null) => void
    statusUpdated: (service: ClientService, success: boolean) => void
}

abstract class ClientServiceClass {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientServiceClass

    static name: string
}

interface Contact {

    // Own fields of SocialWebClient-0.25.SocialWebClient.Contact

    refcount: number
    service: string | null
    uuid: string | null
    date: GLib.TimeVal
    props: GLib.HashTable

    // Owm methods of SocialWebClient-0.25.SocialWebClient.Contact

    free(): void
    getValue(key: string): string
    getValueAll(key: string): string[]
    hasKey(key: string): boolean
    isFromCache(): boolean
    ref(): Contact
    unref(): void
}

class Contact {

    // Own properties of SocialWebClient-0.25.SocialWebClient.Contact

    static name: string

    // Constructors of SocialWebClient-0.25.SocialWebClient.Contact

    constructor() 
    static new(): Contact
}

interface Item {

    // Own fields of SocialWebClient-0.25.SocialWebClient.Item

    refcount: number
    service: string | null
    uuid: string | null
    date: GLib.TimeVal
    props: GLib.HashTable

    // Owm methods of SocialWebClient-0.25.SocialWebClient.Item

    free(): void
    getValue(key: string): string
    hasKey(key: string): boolean
    isFromCache(): boolean
    ref(): Item
    unref(): void
}

class Item {

    // Own properties of SocialWebClient-0.25.SocialWebClient.Item

    static name: string

    // Constructors of SocialWebClient-0.25.SocialWebClient.Item

    constructor() 
    static new(): Item
}

}

export default SocialWebClient;
// END