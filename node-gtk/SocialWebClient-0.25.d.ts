// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * SocialWebClient-0.25
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

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
interface Client_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `online-changed`
 */
interface Client_OnlineChangedSignalCallback {
    (object: boolean): void
}

interface Client {

    // Own fields of SocialWebClient-0.25.SocialWebClient.Client

    parent: GObject.Object

    // Owm methods of SocialWebClient-0.25.SocialWebClient.Client

    getService(serviceName: string): ClientService
    getServices(cb: ClientGetServicesCallback): void
    isOnline(cb: ClientIsOnlineCallback): void

    // Own signals of SocialWebClient-0.25.SocialWebClient.Client

    connect(sigName: "online-changed", callback: Client_OnlineChangedSignalCallback): number
    on(sigName: "online-changed", callback: Client_OnlineChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "online-changed", callback: Client_OnlineChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "online-changed", callback: Client_OnlineChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "online-changed", ...args: any[]): void

    // Class property signals of SocialWebClient-0.25.SocialWebClient.Client

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Client extends GObject.Object {

    // Own properties of SocialWebClient-0.25.SocialWebClient.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of SocialWebClient-0.25.SocialWebClient.Client

    constructor(config?: Client_ConstructProps) 
    constructor() 
    static new(): Client
    _init(config?: Client_ConstructProps): void
}

interface ClientContactView_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of SocialWebClient-0.25.SocialWebClient.ClientContactView

    objectPath?: string | null
}

/**
 * Signal callback interface for `contacts-added`
 */
interface ClientContactView_ContactsAddedSignalCallback {
    (contacts: Contact[]): void
}

/**
 * Signal callback interface for `contacts-changed`
 */
interface ClientContactView_ContactsChangedSignalCallback {
    (contacts: Contact[]): void
}

/**
 * Signal callback interface for `contacts-removed`
 */
interface ClientContactView_ContactsRemovedSignalCallback {
    (contacts: Contact[]): void
}

interface ClientContactView {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientContactView

    readonly objectPath: string

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientContactView

    parent: GObject.Object

    // Owm methods of SocialWebClient-0.25.SocialWebClient.ClientContactView

    close(): void
    refresh(): void
    start(): void
    stop(): void

    // Own signals of SocialWebClient-0.25.SocialWebClient.ClientContactView

    connect(sigName: "contacts-added", callback: ClientContactView_ContactsAddedSignalCallback): number
    on(sigName: "contacts-added", callback: ClientContactView_ContactsAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "contacts-added", callback: ClientContactView_ContactsAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "contacts-added", callback: ClientContactView_ContactsAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "contacts-added", ...args: any[]): void
    connect(sigName: "contacts-changed", callback: ClientContactView_ContactsChangedSignalCallback): number
    on(sigName: "contacts-changed", callback: ClientContactView_ContactsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "contacts-changed", callback: ClientContactView_ContactsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "contacts-changed", callback: ClientContactView_ContactsChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "contacts-changed", ...args: any[]): void
    connect(sigName: "contacts-removed", callback: ClientContactView_ContactsRemovedSignalCallback): number
    on(sigName: "contacts-removed", callback: ClientContactView_ContactsRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "contacts-removed", callback: ClientContactView_ContactsRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "contacts-removed", callback: ClientContactView_ContactsRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "contacts-removed", ...args: any[]): void

    // Class property signals of SocialWebClient-0.25.SocialWebClient.ClientContactView

    connect(sigName: "notify::object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ClientContactView extends GObject.Object {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientContactView

    static name: string
    static $gtype: GObject.GType<ClientContactView>

    // Constructors of SocialWebClient-0.25.SocialWebClient.ClientContactView

    constructor(config?: ClientContactView_ConstructProps) 
    _init(config?: ClientContactView_ConstructProps): void
}

interface ClientItemView_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of SocialWebClient-0.25.SocialWebClient.ClientItemView

    objectPath?: string | null
}

/**
 * Signal callback interface for `items-added`
 */
interface ClientItemView_ItemsAddedSignalCallback {
    (items: Item[]): void
}

/**
 * Signal callback interface for `items-changed`
 */
interface ClientItemView_ItemsChangedSignalCallback {
    (items: Item[]): void
}

/**
 * Signal callback interface for `items-removed`
 */
interface ClientItemView_ItemsRemovedSignalCallback {
    (items: Item[]): void
}

interface ClientItemView {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientItemView

    readonly objectPath: string

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientItemView

    parent: GObject.Object

    // Owm methods of SocialWebClient-0.25.SocialWebClient.ClientItemView

    close(): void
    refresh(): void
    start(): void
    stop(): void

    // Own signals of SocialWebClient-0.25.SocialWebClient.ClientItemView

    connect(sigName: "items-added", callback: ClientItemView_ItemsAddedSignalCallback): number
    on(sigName: "items-added", callback: ClientItemView_ItemsAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-added", callback: ClientItemView_ItemsAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-added", callback: ClientItemView_ItemsAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "items-added", ...args: any[]): void
    connect(sigName: "items-changed", callback: ClientItemView_ItemsChangedSignalCallback): number
    on(sigName: "items-changed", callback: ClientItemView_ItemsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-changed", callback: ClientItemView_ItemsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-changed", callback: ClientItemView_ItemsChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "items-changed", ...args: any[]): void
    connect(sigName: "items-removed", callback: ClientItemView_ItemsRemovedSignalCallback): number
    on(sigName: "items-removed", callback: ClientItemView_ItemsRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-removed", callback: ClientItemView_ItemsRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-removed", callback: ClientItemView_ItemsRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "items-removed", ...args: any[]): void

    // Class property signals of SocialWebClient-0.25.SocialWebClient.ClientItemView

    connect(sigName: "notify::object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ClientItemView extends GObject.Object {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientItemView

    static name: string
    static $gtype: GObject.GType<ClientItemView>

    // Constructors of SocialWebClient-0.25.SocialWebClient.ClientItemView

    constructor(config?: ClientItemView_ConstructProps) 
    _init(config?: ClientItemView_ConstructProps): void
}

interface ClientLastfm_ConstructProps extends GObject.Object_ConstructProps {
}

interface ClientLastfm {

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientLastfm

    parent: GObject.Object

    // Owm methods of SocialWebClient-0.25.SocialWebClient.ClientLastfm

    nowPlaying(artist: string, album: string, track: string, length: number, tracknumber: number, musicbrainzId: string): void
    submitTrack(artist: string, album: string, track: string, time: number, source: string, rating: string, length: number, tracknumber: number, musicbrainzId: string): void

    // Class property signals of SocialWebClient-0.25.SocialWebClient.ClientLastfm

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ClientLastfm extends GObject.Object {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientLastfm

    static name: string
    static $gtype: GObject.GType<ClientLastfm>

    // Constructors of SocialWebClient-0.25.SocialWebClient.ClientLastfm

    constructor(config?: ClientLastfm_ConstructProps) 
    constructor() 
    static new(): ClientLastfm
    _init(config?: ClientLastfm_ConstructProps): void
}

interface ClientService_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `avatar-retrieved`
 */
interface ClientService_AvatarRetrievedSignalCallback {
    (object: string): void
}

/**
 * Signal callback interface for `capabilities-changed`
 */
interface ClientService_CapabilitiesChangedSignalCallback {
    (object: string[]): void
}

/**
 * Signal callback interface for `status-updated`
 */
interface ClientService_StatusUpdatedSignalCallback {
    (object: boolean): void
}

/**
 * Signal callback interface for `user-changed`
 */
interface ClientService_UserChangedSignalCallback {
    (): void
}

interface ClientService {

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

    // Own signals of SocialWebClient-0.25.SocialWebClient.ClientService

    connect(sigName: "avatar-retrieved", callback: ClientService_AvatarRetrievedSignalCallback): number
    on(sigName: "avatar-retrieved", callback: ClientService_AvatarRetrievedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "avatar-retrieved", callback: ClientService_AvatarRetrievedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "avatar-retrieved", callback: ClientService_AvatarRetrievedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "avatar-retrieved", ...args: any[]): void
    connect(sigName: "capabilities-changed", callback: ClientService_CapabilitiesChangedSignalCallback): number
    on(sigName: "capabilities-changed", callback: ClientService_CapabilitiesChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "capabilities-changed", callback: ClientService_CapabilitiesChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "capabilities-changed", callback: ClientService_CapabilitiesChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "capabilities-changed", ...args: any[]): void
    connect(sigName: "status-updated", callback: ClientService_StatusUpdatedSignalCallback): number
    on(sigName: "status-updated", callback: ClientService_StatusUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "status-updated", callback: ClientService_StatusUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "status-updated", callback: ClientService_StatusUpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "status-updated", ...args: any[]): void
    connect(sigName: "user-changed", callback: ClientService_UserChangedSignalCallback): number
    on(sigName: "user-changed", callback: ClientService_UserChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-changed", callback: ClientService_UserChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-changed", callback: ClientService_UserChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "user-changed", ...args: any[]): void

    // Class property signals of SocialWebClient-0.25.SocialWebClient.ClientService

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ClientService extends GObject.Object {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientService

    static name: string
    static $gtype: GObject.GType<ClientService>

    // Constructors of SocialWebClient-0.25.SocialWebClient.ClientService

    constructor(config?: ClientService_ConstructProps) 
    _init(config?: ClientService_ConstructProps): void
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
    avatarRetrieved: (service: ClientService, path: string) => void
    statusUpdated: (service: ClientService, success: boolean) => void
}

abstract class ClientServiceClass {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientServiceClass

    static name: string
}

interface Contact {

    // Own fields of SocialWebClient-0.25.SocialWebClient.Contact

    refcount: number
    service: string
    uuid: string
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
    service: string
    uuid: string
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