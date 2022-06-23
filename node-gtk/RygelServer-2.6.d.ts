// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * RygelServer-2.6
 */

import type RygelCore from './RygelCore-2.6';
import type GLib from './GLib-2.0';
import type Gee from './Gee-0.8';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GUPnP from './GUPnP-1.2';
import type libxml2 from './libxml2-2.0';
import type Soup from './Soup-2.4';
import type GSSDP from './GSSDP-1.2';
import type GUPnPAV from './GUPnPAV-1.0';

export namespace RygelServer {

enum LogicalOperator {
    AND,
    OR,
}
enum ObjectEventType {
    ADDED,
    MODIFIED,
    DELETED,
}
enum SerializerType {
    GENERIC_DIDL,
    DIDL_S,
    M3UEXT,
}
enum WritableContainerError {
    NOT_IMPLEMENTED,
}
enum MediaEngineError {
    NOT_FOUND,
}
enum HTTPSeekRequestError {
    INVALID_RANGE,
    BAD_REQUEST,
    OUT_OF_RANGE,
}
enum DataSourceError {
    GENERAL,
    SEEK_FAILED,
    PLAYSPEED_FAILED,
}
enum HTTPRequestError {
    UNACCEPTABLE,
    BAD_REQUEST,
    NOT_FOUND,
    INTERNAL_SERVER_ERROR,
}
enum PlaySpeedError {
    INVALID_SPEED_FORMAT,
    SPEED_NOT_PRESENT,
}
interface SearchableContainer_ConstructProps extends MediaContainer_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.SearchableContainer

    searchClasses?: Gee.ArrayList | null
}

interface SearchableContainer extends MediaContainer {

    // Own properties of RygelServer-2.6.RygelServer.SearchableContainer

    searchClasses: Gee.ArrayList

    // Owm methods of RygelServer-2.6.RygelServer.SearchableContainer

    search(expression: SearchExpression | null, offset: number, maxCount: number, sortCriteria: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    searchFinish(res: Gio.AsyncResult): [ /* returnType */ MediaObjects | null, /* totalMatches */ number ]
    simpleSearch(expression: SearchExpression | null, offset: number, maxCount: number, sortCriteria: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    simpleSearchFinish(res: Gio.AsyncResult): [ /* returnType */ MediaObjects | null, /* totalMatches */ number ]
    findObject(id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    findObjectFinish(res: Gio.AsyncResult): MediaObject | null
    getSearchClasses(): Gee.ArrayList
    setSearchClasses(value: Gee.ArrayList): void

    // Class property signals of RygelServer-2.6.RygelServer.SearchableContainer

    connect(sigName: "notify::search-classes", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-classes", ...args: any[]): void
    connect(sigName: "notify::child-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-count", ...args: any[]): void
    connect(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::empty-child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::empty-child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::empty-child-count", ...args: any[]): void
    connect(sigName: "notify::all-child-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::all-child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::all-child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::all-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::all-child-count", ...args: any[]): void
    connect(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::create-mode-enabled", ...args: any[]): void
    connect(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): number
    on(sigName: "notify::sort-criteria", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sort-criteria", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sort-criteria", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SearchableContainer extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.SearchableContainer

    static name: string
    static $gtype: GObject.GType<SearchableContainer>

    // Constructors of RygelServer-2.6.RygelServer.SearchableContainer

    constructor(config?: SearchableContainer_ConstructProps) 
    _init(config?: SearchableContainer_ConstructProps): void
}

interface TrackableContainer_ConstructProps extends MediaContainer_ConstructProps, GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `child-added`
 */
interface TrackableContainer_ChildAddedSignalCallback {
    (object: MediaObject): void
}

/**
 * Signal callback interface for `child-removed`
 */
interface TrackableContainer_ChildRemovedSignalCallback {
    (object: MediaObject): void
}

interface TrackableContainer extends MediaContainer {

    // Owm methods of RygelServer-2.6.RygelServer.TrackableContainer

    clear(callback: Gio.AsyncReadyCallback | null): void
    clearFinish(res: Gio.AsyncResult): void
    addChild(object: MediaObject, callback: Gio.AsyncReadyCallback | null): void
    addChildFinish(res: Gio.AsyncResult): void
    addChildTracked(object: MediaObject, callback: Gio.AsyncReadyCallback | null): void
    addChildTrackedFinish(res: Gio.AsyncResult): void
    removeChild(object: MediaObject, callback: Gio.AsyncReadyCallback | null): void
    removeChildFinish(res: Gio.AsyncResult): void
    removeChildTracked(object: MediaObject, callback: Gio.AsyncReadyCallback | null): void
    removeChildTrackedFinish(res: Gio.AsyncResult): void
    getServiceResetToken(): string
    setServiceResetToken(token: string): void
    getSystemUpdateId(): number

    // Own signals of RygelServer-2.6.RygelServer.TrackableContainer

    connect(sigName: "child-added", callback: TrackableContainer_ChildAddedSignalCallback): number
    on(sigName: "child-added", callback: TrackableContainer_ChildAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: TrackableContainer_ChildAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: TrackableContainer_ChildAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "child-added", ...args: any[]): void
    connect(sigName: "child-removed", callback: TrackableContainer_ChildRemovedSignalCallback): number
    on(sigName: "child-removed", callback: TrackableContainer_ChildRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: TrackableContainer_ChildRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: TrackableContainer_ChildRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "child-removed", ...args: any[]): void

    // Class property signals of RygelServer-2.6.RygelServer.TrackableContainer

    connect(sigName: "notify::child-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-count", ...args: any[]): void
    connect(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::empty-child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::empty-child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::empty-child-count", ...args: any[]): void
    connect(sigName: "notify::all-child-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::all-child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::all-child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::all-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::all-child-count", ...args: any[]): void
    connect(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::create-mode-enabled", ...args: any[]): void
    connect(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): number
    on(sigName: "notify::sort-criteria", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sort-criteria", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sort-criteria", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TrackableContainer extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.TrackableContainer

    static name: string
    static $gtype: GObject.GType<TrackableContainer>

    // Constructors of RygelServer-2.6.RygelServer.TrackableContainer

    constructor(config?: TrackableContainer_ConstructProps) 
    _init(config?: TrackableContainer_ConstructProps): void
}

interface TrackableItem_ConstructProps extends MediaItem_ConstructProps, GObject.Object_ConstructProps {
}

interface TrackableItem extends MediaItem {

    // Owm methods of RygelServer-2.6.RygelServer.TrackableItem

    changed(): void

    // Class property signals of RygelServer-2.6.RygelServer.TrackableItem

    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TrackableItem extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.TrackableItem

    static name: string
    static $gtype: GObject.GType<TrackableItem>

    // Constructors of RygelServer-2.6.RygelServer.TrackableItem

    constructor(config?: TrackableItem_ConstructProps) 
    _init(config?: TrackableItem_ConstructProps): void
}

interface VisualItem_ConstructProps extends MediaFileItem_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.VisualItem

    width?: number | null
    height?: number | null
    colorDepth?: number | null
    thumbnails?: Gee.ArrayList | null
}

interface VisualItem extends MediaFileItem {

    // Own properties of RygelServer-2.6.RygelServer.VisualItem

    width: number
    height: number
    colorDepth: number
    thumbnails: Gee.ArrayList

    // Owm methods of RygelServer-2.6.RygelServer.VisualItem

    getWidth(): number
    setWidth(value: number): void
    getHeight(): number
    setHeight(value: number): void
    getColorDepth(): number
    setColorDepth(value: number): void
    getThumbnails(): Gee.ArrayList
    setThumbnails(value: Gee.ArrayList): void

    // Class property signals of RygelServer-2.6.RygelServer.VisualItem

    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::color-depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::color-depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color-depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color-depth", ...args: any[]): void
    connect(sigName: "notify::thumbnails", callback: (...args: any[]) => void): number
    on(sigName: "notify::thumbnails", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::thumbnails", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::thumbnails", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::thumbnails", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-profile", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::place-holder", callback: (...args: any[]) => void): number
    on(sigName: "notify::place-holder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::place-holder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::place-holder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class VisualItem extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.VisualItem

    static name: string
    static $gtype: GObject.GType<VisualItem>

    // Constructors of RygelServer-2.6.RygelServer.VisualItem

    constructor(config?: VisualItem_ConstructProps) 
    _init(config?: VisualItem_ConstructProps): void
}

interface WritableContainer_ConstructProps extends MediaContainer_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.WritableContainer

    createClasses?: Gee.ArrayList | null
}

interface WritableContainer extends MediaContainer {

    // Own properties of RygelServer-2.6.RygelServer.WritableContainer

    createClasses: Gee.ArrayList

    // Owm methods of RygelServer-2.6.RygelServer.WritableContainer

    canCreate(upnpClass: string): boolean
    addItem(item: MediaFileItem, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    addItemFinish(res: Gio.AsyncResult): void
    addContainer(container: MediaContainer, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    addContainerFinish(res: Gio.AsyncResult): void
    addReference(object: MediaObject, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    addReferenceFinish(res: Gio.AsyncResult): string
    removeItem(id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    removeItemFinish(res: Gio.AsyncResult): void
    removeContainer(id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    removeContainerFinish(res: Gio.AsyncResult): void
    getCreateClasses(): Gee.ArrayList
    setCreateClasses(value: Gee.ArrayList): void

    // Class property signals of RygelServer-2.6.RygelServer.WritableContainer

    connect(sigName: "notify::create-classes", callback: (...args: any[]) => void): number
    on(sigName: "notify::create-classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::create-classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::create-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::create-classes", ...args: any[]): void
    connect(sigName: "notify::child-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-count", ...args: any[]): void
    connect(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::empty-child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::empty-child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::empty-child-count", ...args: any[]): void
    connect(sigName: "notify::all-child-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::all-child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::all-child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::all-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::all-child-count", ...args: any[]): void
    connect(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::create-mode-enabled", ...args: any[]): void
    connect(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): number
    on(sigName: "notify::sort-criteria", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sort-criteria", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sort-criteria", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class WritableContainer extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.WritableContainer

    static name: string
    static $gtype: GObject.GType<WritableContainer>

    // Constructors of RygelServer-2.6.RygelServer.WritableContainer

    constructor(config?: WritableContainer_ConstructProps) 
    _init(config?: WritableContainer_ConstructProps): void
}

interface DataSource_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `data-available`
 */
interface DataSource_DataAvailableSignalCallback {
    (data: Uint8Array): void
}

/**
 * Signal callback interface for `done`
 */
interface DataSource_DoneSignalCallback {
    (): void
}

/**
 * Signal callback interface for `error`
 */
interface DataSource_ErrorSignalCallback {
    (error: GLib.Error): void
}

interface DataSource extends GObject.Object {

    // Owm methods of RygelServer-2.6.RygelServer.DataSource

    preroll(seek: HTTPSeekRequest | null, playspeed: PlaySpeedRequest | null): Gee.List | null
    start(): void
    freeze(): void
    thaw(): void
    stop(): void

    // Own signals of RygelServer-2.6.RygelServer.DataSource

    connect(sigName: "data-available", callback: DataSource_DataAvailableSignalCallback): number
    on(sigName: "data-available", callback: DataSource_DataAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "data-available", callback: DataSource_DataAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "data-available", callback: DataSource_DataAvailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "data-available", ...args: any[]): void
    connect(sigName: "done", callback: DataSource_DoneSignalCallback): number
    on(sigName: "done", callback: DataSource_DoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "done", callback: DataSource_DoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "done", callback: DataSource_DoneSignalCallback): NodeJS.EventEmitter
    emit(sigName: "done", ...args: any[]): void
    connect(sigName: "error", callback: DataSource_ErrorSignalCallback): number
    on(sigName: "error", callback: DataSource_ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: DataSource_ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: DataSource_ErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "error", ...args: any[]): void

    // Class property signals of RygelServer-2.6.RygelServer.DataSource

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DataSource {

    // Own properties of RygelServer-2.6.RygelServer.DataSource

    static name: string
    static $gtype: GObject.GType<DataSource>

    // Constructors of RygelServer-2.6.RygelServer.DataSource

    constructor(config?: DataSource_ConstructProps) 
    _init(config?: DataSource_ConstructProps): void
}

interface UpdatableObject_ConstructProps extends MediaObject_ConstructProps, GObject.Object_ConstructProps {
}

interface UpdatableObject extends MediaObject {

    // Owm methods of RygelServer-2.6.RygelServer.UpdatableObject

    commit(callback: Gio.AsyncReadyCallback | null): void
    commitFinish(res: Gio.AsyncResult): void

    // Class property signals of RygelServer-2.6.RygelServer.UpdatableObject

    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::date", callback: (...args: any[]) => void): number
    on(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (...args: any[]) => void): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (...args: any[]) => void): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-update-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-update-id", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (...args: any[]) => void): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (...args: any[]) => void): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::parent-ref", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent-ref", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ocm-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class UpdatableObject extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.UpdatableObject

    static name: string
    static $gtype: GObject.GType<UpdatableObject>

    // Constructors of RygelServer-2.6.RygelServer.UpdatableObject

    constructor(config?: UpdatableObject_ConstructProps) 
    _init(config?: UpdatableObject_ConstructProps): void
}

// Workaround
/** @ignore */
interface IconInfo extends RygelCore.IconInfo {}
interface AudioItem_ConstructProps extends MediaFileItem_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.AudioItem

    duration?: number | null
    bitrate?: number | null
    sampleFreq?: number | null
    bitsPerSample?: number | null
    channels?: number | null
    album?: string | null
}

interface AudioItem {

    // Own properties of RygelServer-2.6.RygelServer.AudioItem

    duration: number
    bitrate: number
    sampleFreq: number
    bitsPerSample: number
    channels: number
    album: string

    // Owm methods of RygelServer-2.6.RygelServer.AudioItem

    getDuration(): number
    setDuration(value: number): void
    getBitrate(): number
    setBitrate(value: number): void
    getSampleFreq(): number
    setSampleFreq(value: number): void
    getBitsPerSample(): number
    setBitsPerSample(value: number): void
    getChannels(): number
    setChannels(value: number): void
    getAlbum(): string
    setAlbum(value: string): void

    // Class property signals of RygelServer-2.6.RygelServer.AudioItem

    connect(sigName: "notify::duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::bitrate", callback: (...args: any[]) => void): number
    on(sigName: "notify::bitrate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bitrate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bitrate", ...args: any[]): void
    connect(sigName: "notify::sample-freq", callback: (...args: any[]) => void): number
    on(sigName: "notify::sample-freq", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sample-freq", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sample-freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sample-freq", ...args: any[]): void
    connect(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): number
    on(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bits-per-sample", ...args: any[]): void
    connect(sigName: "notify::channels", callback: (...args: any[]) => void): number
    on(sigName: "notify::channels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channels", ...args: any[]): void
    connect(sigName: "notify::album", callback: (...args: any[]) => void): number
    on(sigName: "notify::album", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::album", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::album", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-profile", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::place-holder", callback: (...args: any[]) => void): number
    on(sigName: "notify::place-holder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::place-holder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::place-holder", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::date", callback: (...args: any[]) => void): number
    on(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (...args: any[]) => void): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (...args: any[]) => void): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-update-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-update-id", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (...args: any[]) => void): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (...args: any[]) => void): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::parent-ref", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent-ref", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ocm-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AudioItem extends MediaFileItem {

    // Own properties of RygelServer-2.6.RygelServer.AudioItem

    static name: string
    static $gtype: GObject.GType<AudioItem>

    // Constructors of RygelServer-2.6.RygelServer.AudioItem

    constructor(config?: AudioItem_ConstructProps) 
    constructor(id: string, parent: MediaContainer, title: string, upnpClass: string) 
    static new(id: string, parent: MediaContainer, title: string, upnpClass: string): AudioItem
    _init(config?: AudioItem_ConstructProps): void
}

interface ImageItem_ConstructProps extends VisualItem_ConstructProps, MediaFileItem_ConstructProps {
}

interface ImageItem extends VisualItem {

    // Class property signals of RygelServer-2.6.RygelServer.ImageItem

    connect(sigName: "notify::mime-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-profile", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::place-holder", callback: (...args: any[]) => void): number
    on(sigName: "notify::place-holder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::place-holder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::place-holder", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::date", callback: (...args: any[]) => void): number
    on(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (...args: any[]) => void): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (...args: any[]) => void): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-update-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-update-id", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (...args: any[]) => void): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (...args: any[]) => void): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::parent-ref", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent-ref", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ocm-flags", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::color-depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::color-depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color-depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color-depth", ...args: any[]): void
    connect(sigName: "notify::thumbnails", callback: (...args: any[]) => void): number
    on(sigName: "notify::thumbnails", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::thumbnails", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::thumbnails", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::thumbnails", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ImageItem extends MediaFileItem {

    // Own properties of RygelServer-2.6.RygelServer.ImageItem

    static name: string
    static $gtype: GObject.GType<ImageItem>

    // Constructors of RygelServer-2.6.RygelServer.ImageItem

    constructor(config?: ImageItem_ConstructProps) 
    constructor(id: string, parent: MediaContainer, title: string, upnpClass: string) 
    static new(id: string, parent: MediaContainer, title: string, upnpClass: string): ImageItem
    _init(config?: ImageItem_ConstructProps): void
}

interface LogicalExpression {
}

class LogicalExpression extends SearchExpression {

    // Own properties of RygelServer-2.6.RygelServer.LogicalExpression

    static name: string

    // Constructors of RygelServer-2.6.RygelServer.LogicalExpression

    constructor() 
    static new(): LogicalExpression
}

interface MediaArtStore_ConstructProps extends GObject.Object_ConstructProps {
}

interface MediaArtStore {

    // Owm methods of RygelServer-2.6.RygelServer.MediaArtStore

    lookupMediaArt(item: MusicItem): Thumbnail | null
    add(item: MusicItem, file: Gio.File, data: Uint8Array, mime: string): void
    searchMediaArtForFile(item: MusicItem, file: Gio.File): void

    // Class property signals of RygelServer-2.6.RygelServer.MediaArtStore

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MediaArtStore extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.MediaArtStore

    static name: string
    static $gtype: GObject.GType<MediaArtStore>

    // Constructors of RygelServer-2.6.RygelServer.MediaArtStore

    constructor(config?: MediaArtStore_ConstructProps) 
    _init(config?: MediaArtStore_ConstructProps): void
    static getDefault(): MediaArtStore | null
}

interface MediaObjects_ConstructProps extends Gee.ArrayList_ConstructProps {
}

interface MediaObjects {

    // Conflicting properties

    readOnlyView: any
    size: any

    // Owm methods of RygelServer-2.6.RygelServer.MediaObjects

    sortByCriteria(sortCriteria: string): void

    // Conflicting methods

    getReadOnlyView(...args: any[]): any
    vfuncGetReadOnlyView(...args: any[]): any

    // Class property signals of RygelServer-2.6.RygelServer.MediaObjects

    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MediaObjects extends Gee.ArrayList {

    // Own properties of RygelServer-2.6.RygelServer.MediaObjects

    static name: string
    static $gtype: GObject.GType<MediaObjects>

    // Constructors of RygelServer-2.6.RygelServer.MediaObjects

    constructor(config?: MediaObjects_ConstructProps) 
    constructor() 
    static new(): MediaObjects

    // Overloads of new

    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: MediaObjects_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface MusicItem_ConstructProps extends AudioItem_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.MusicItem

    trackNumber?: number | null
    albumArt?: Thumbnail | null
}

interface MusicItem {

    // Own properties of RygelServer-2.6.RygelServer.MusicItem

    trackNumber: number
    albumArt: Thumbnail

    // Owm methods of RygelServer-2.6.RygelServer.MusicItem

    lookupAlbumArt(): void
    getTrackNumber(): number
    setTrackNumber(value: number): void
    getAlbumArt(): Thumbnail
    setAlbumArt(value: Thumbnail): void

    // Class property signals of RygelServer-2.6.RygelServer.MusicItem

    connect(sigName: "notify::track-number", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-number", ...args: any[]): void
    connect(sigName: "notify::album-art", callback: (...args: any[]) => void): number
    on(sigName: "notify::album-art", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::album-art", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::album-art", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::album-art", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::bitrate", callback: (...args: any[]) => void): number
    on(sigName: "notify::bitrate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bitrate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bitrate", ...args: any[]): void
    connect(sigName: "notify::sample-freq", callback: (...args: any[]) => void): number
    on(sigName: "notify::sample-freq", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sample-freq", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sample-freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sample-freq", ...args: any[]): void
    connect(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): number
    on(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bits-per-sample", ...args: any[]): void
    connect(sigName: "notify::channels", callback: (...args: any[]) => void): number
    on(sigName: "notify::channels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channels", ...args: any[]): void
    connect(sigName: "notify::album", callback: (...args: any[]) => void): number
    on(sigName: "notify::album", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::album", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::album", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-profile", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::place-holder", callback: (...args: any[]) => void): number
    on(sigName: "notify::place-holder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::place-holder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::place-holder", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::date", callback: (...args: any[]) => void): number
    on(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (...args: any[]) => void): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (...args: any[]) => void): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-update-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-update-id", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (...args: any[]) => void): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (...args: any[]) => void): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::parent-ref", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent-ref", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ocm-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MusicItem extends AudioItem {

    // Own properties of RygelServer-2.6.RygelServer.MusicItem

    static name: string
    static $gtype: GObject.GType<MusicItem>

    // Constructors of RygelServer-2.6.RygelServer.MusicItem

    constructor(config?: MusicItem_ConstructProps) 
    constructor(id: string, parent: MediaContainer, title: string, upnpClass: string) 
    static new(id: string, parent: MediaContainer, title: string, upnpClass: string): MusicItem

    // Overloads of new

    static new(id: string, parent: MediaContainer, title: string, upnpClass: string): AudioItem
    _init(config?: MusicItem_ConstructProps): void
}

interface PhotoItem_ConstructProps extends ImageItem_ConstructProps {
}

interface PhotoItem {

    // Class property signals of RygelServer-2.6.RygelServer.PhotoItem

    connect(sigName: "notify::mime-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-profile", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::place-holder", callback: (...args: any[]) => void): number
    on(sigName: "notify::place-holder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::place-holder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::place-holder", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::date", callback: (...args: any[]) => void): number
    on(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (...args: any[]) => void): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (...args: any[]) => void): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-update-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-update-id", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (...args: any[]) => void): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (...args: any[]) => void): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::parent-ref", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent-ref", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ocm-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class PhotoItem extends ImageItem {

    // Own properties of RygelServer-2.6.RygelServer.PhotoItem

    static name: string
    static $gtype: GObject.GType<PhotoItem>

    // Constructors of RygelServer-2.6.RygelServer.PhotoItem

    constructor(config?: PhotoItem_ConstructProps) 
    constructor(id: string, parent: MediaContainer, title: string, upnpClass: string) 
    static new(id: string, parent: MediaContainer, title: string, upnpClass: string): PhotoItem

    // Overloads of new

    static new(id: string, parent: MediaContainer, title: string, upnpClass: string): ImageItem
    _init(config?: PhotoItem_ConstructProps): void
}

interface RelationalExpression {

    // Owm methods of RygelServer-2.6.RygelServer.RelationalExpression

    compareString(str: string | null): boolean
    compareInt(integer: number): boolean
    compareUint(integer: number): boolean
}

class RelationalExpression extends SearchExpression {

    // Own properties of RygelServer-2.6.RygelServer.RelationalExpression

    static name: string

    // Constructors of RygelServer-2.6.RygelServer.RelationalExpression

    constructor() 
    static new(): RelationalExpression
}

interface SimpleContainer_ConstructProps extends SearchableContainer_ConstructProps, MediaContainer_ConstructProps {
}

interface SimpleContainer extends SearchableContainer {

    // Own fields of RygelServer-2.6.RygelServer.SimpleContainer

    children: MediaObjects

    // Owm methods of RygelServer-2.6.RygelServer.SimpleContainer

    addChildItem(child: MediaItem): void
    getAllChildren(): MediaObjects
    addChildContainer(child: MediaContainer): void
    removeChild(child: MediaObject): void
    clear(): void
    isChildIdUnique(childId: string): boolean

    // Class property signals of RygelServer-2.6.RygelServer.SimpleContainer

    connect(sigName: "notify::child-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-count", ...args: any[]): void
    connect(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::empty-child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::empty-child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::empty-child-count", ...args: any[]): void
    connect(sigName: "notify::all-child-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::all-child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::all-child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::all-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::all-child-count", ...args: any[]): void
    connect(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::create-mode-enabled", ...args: any[]): void
    connect(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): number
    on(sigName: "notify::sort-criteria", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sort-criteria", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sort-criteria", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::date", callback: (...args: any[]) => void): number
    on(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (...args: any[]) => void): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (...args: any[]) => void): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-update-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-update-id", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (...args: any[]) => void): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (...args: any[]) => void): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::parent-ref", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent-ref", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ocm-flags", ...args: any[]): void
    connect(sigName: "notify::search-classes", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-classes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SimpleContainer extends MediaContainer {

    // Own properties of RygelServer-2.6.RygelServer.SimpleContainer

    static name: string
    static $gtype: GObject.GType<SimpleContainer>

    // Constructors of RygelServer-2.6.RygelServer.SimpleContainer

    constructor(config?: SimpleContainer_ConstructProps) 
    constructor(id: string, parent: MediaContainer | null, title: string) 
    static new(id: string, parent: MediaContainer | null, title: string): SimpleContainer
    static root(title: string): SimpleContainer
    _init(config?: SimpleContainer_ConstructProps): void
}

interface Subtitle {

    // Own fields of RygelServer-2.6.RygelServer.Subtitle

    refCount: number
    uri: string
    mimeType: string
    captionType: string
    fileExtension: string
    size: number

    // Owm methods of RygelServer-2.6.RygelServer.Subtitle

    getResource(protocol: string, index: number): MediaResource
}

class Subtitle {

    // Own properties of RygelServer-2.6.RygelServer.Subtitle

    static name: string

    // Constructors of RygelServer-2.6.RygelServer.Subtitle

    constructor(mimeType: string, captionType: string, fileExtension: string) 
    static new(mimeType: string, captionType: string, fileExtension: string): Subtitle
}

interface Thumbnail {

    // Own fields of RygelServer-2.6.RygelServer.Thumbnail

    dlnaProfile: string

    // Owm methods of RygelServer-2.6.RygelServer.Thumbnail

    getResource(protocol: string, index: number): MediaResource
}

class Thumbnail extends RygelCore.IconInfo {

    // Own properties of RygelServer-2.6.RygelServer.Thumbnail

    static name: string

    // Constructors of RygelServer-2.6.RygelServer.Thumbnail

    constructor(mimeType: string, dlnaProfile: string, fileExtension: string) 
    static new(mimeType: string, dlnaProfile: string, fileExtension: string): Thumbnail

    // Overloads of new

    static new(mimeType: string, fileExtension: string): RygelCore.IconInfo
}

interface VideoItem_ConstructProps extends VisualItem_ConstructProps, AudioItem_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.VideoItem

    author?: string | null
    subtitles?: Gee.ArrayList | null
}

interface VideoItem extends VisualItem {

    // Own properties of RygelServer-2.6.RygelServer.VideoItem

    author: string
    subtitles: Gee.ArrayList

    // Owm methods of RygelServer-2.6.RygelServer.VideoItem

    addSubtitleResources(httpServer: HTTPServer): void
    getAuthor(): string
    setAuthor(value: string): void
    getSubtitles(): Gee.ArrayList
    setSubtitles(value: Gee.ArrayList): void

    // Class property signals of RygelServer-2.6.RygelServer.VideoItem

    connect(sigName: "notify::author", callback: (...args: any[]) => void): number
    on(sigName: "notify::author", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::subtitles", callback: (...args: any[]) => void): number
    on(sigName: "notify::subtitles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subtitles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subtitles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subtitles", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::bitrate", callback: (...args: any[]) => void): number
    on(sigName: "notify::bitrate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bitrate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bitrate", ...args: any[]): void
    connect(sigName: "notify::sample-freq", callback: (...args: any[]) => void): number
    on(sigName: "notify::sample-freq", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sample-freq", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sample-freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sample-freq", ...args: any[]): void
    connect(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): number
    on(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bits-per-sample", ...args: any[]): void
    connect(sigName: "notify::channels", callback: (...args: any[]) => void): number
    on(sigName: "notify::channels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channels", ...args: any[]): void
    connect(sigName: "notify::album", callback: (...args: any[]) => void): number
    on(sigName: "notify::album", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::album", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::album", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-profile", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::place-holder", callback: (...args: any[]) => void): number
    on(sigName: "notify::place-holder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::place-holder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::place-holder", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::date", callback: (...args: any[]) => void): number
    on(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (...args: any[]) => void): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (...args: any[]) => void): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-update-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-update-id", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (...args: any[]) => void): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (...args: any[]) => void): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::parent-ref", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent-ref", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ocm-flags", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::color-depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::color-depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color-depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color-depth", ...args: any[]): void
    connect(sigName: "notify::thumbnails", callback: (...args: any[]) => void): number
    on(sigName: "notify::thumbnails", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::thumbnails", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::thumbnails", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::thumbnails", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class VideoItem extends AudioItem {

    // Own properties of RygelServer-2.6.RygelServer.VideoItem

    static name: string
    static $gtype: GObject.GType<VideoItem>

    // Constructors of RygelServer-2.6.RygelServer.VideoItem

    constructor(config?: VideoItem_ConstructProps) 
    constructor(id: string, parent: MediaContainer, title: string, upnpClass: string) 
    static new(id: string, parent: MediaContainer, title: string, upnpClass: string): VideoItem

    // Overloads of new

    static new(id: string, parent: MediaContainer, title: string, upnpClass: string): AudioItem
    _init(config?: VideoItem_ConstructProps): void
}

interface MediaContainer_ConstructProps extends MediaObject_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.MediaContainer

    childCount?: number | null
    emptyChildCount?: number | null
    createModeEnabled?: boolean | null
    sortCriteria?: string | null
}

/**
 * Signal callback interface for `container-updated`
 */
interface MediaContainer_ContainerUpdatedSignalCallback {
    (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean): void
}

/**
 * Signal callback interface for `sub-tree-updates-finished`
 */
interface MediaContainer_SubTreeUpdatesFinishedSignalCallback {
    (subTreeRoot: MediaObject): void
}

interface MediaContainer {

    // Own properties of RygelServer-2.6.RygelServer.MediaContainer

    childCount: number
    emptyChildCount: number
    readonly allChildCount: number
    createModeEnabled: boolean
    sortCriteria: string

    // Own fields of RygelServer-2.6.RygelServer.MediaContainer

    updateId: number
    storageUsed: number
    totalDeletedChildCount: number

    // Owm methods of RygelServer-2.6.RygelServer.MediaContainer

    getChildren(offset: number, maxCount: number, sortCriteria: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getChildrenFinish(res: Gio.AsyncResult): MediaObjects | null
    findObject(id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    findObjectFinish(res: Gio.AsyncResult): MediaObject | null
    updated(object: MediaObject | null, eventType: ObjectEventType, subTreeUpdate: boolean): void
    getChildCount(): number
    setChildCount(value: number): void
    getEmptyChildCount(): number
    setEmptyChildCount(value: number): void
    getAllChildCount(): number
    getCreateModeEnabled(): boolean
    setCreateModeEnabled(value: boolean): void
    getSortCriteria(): string
    setSortCriteria(value: string): void

    // Own signals of RygelServer-2.6.RygelServer.MediaContainer

    connect(sigName: "container-updated", callback: MediaContainer_ContainerUpdatedSignalCallback): number
    on(sigName: "container-updated", callback: MediaContainer_ContainerUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "container-updated", callback: MediaContainer_ContainerUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "container-updated", callback: MediaContainer_ContainerUpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "container-updated", object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean, ...args: any[]): void
    connect(sigName: "sub-tree-updates-finished", callback: MediaContainer_SubTreeUpdatesFinishedSignalCallback): number
    on(sigName: "sub-tree-updates-finished", callback: MediaContainer_SubTreeUpdatesFinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sub-tree-updates-finished", callback: MediaContainer_SubTreeUpdatesFinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sub-tree-updates-finished", callback: MediaContainer_SubTreeUpdatesFinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "sub-tree-updates-finished", ...args: any[]): void

    // Class property signals of RygelServer-2.6.RygelServer.MediaContainer

    connect(sigName: "notify::child-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-count", ...args: any[]): void
    connect(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::empty-child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::empty-child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::empty-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::empty-child-count", ...args: any[]): void
    connect(sigName: "notify::all-child-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::all-child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::all-child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::all-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::all-child-count", ...args: any[]): void
    connect(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::create-mode-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::create-mode-enabled", ...args: any[]): void
    connect(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): number
    on(sigName: "notify::sort-criteria", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sort-criteria", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sort-criteria", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sort-criteria", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::date", callback: (...args: any[]) => void): number
    on(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (...args: any[]) => void): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (...args: any[]) => void): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-update-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-update-id", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (...args: any[]) => void): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (...args: any[]) => void): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::parent-ref", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent-ref", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ocm-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MediaContainer extends MediaObject {

    // Own properties of RygelServer-2.6.RygelServer.MediaContainer

    static name: string
    static $gtype: GObject.GType<MediaContainer>

    // Constructors of RygelServer-2.6.RygelServer.MediaContainer

    constructor(config?: MediaContainer_ConstructProps) 
    _init(config?: MediaContainer_ConstructProps): void
    static equalFunc(a: MediaContainer, b: MediaContainer): boolean
}

interface MediaItem_ConstructProps extends MediaObject_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.MediaItem

    description?: string | null
}

interface MediaItem {

    // Own properties of RygelServer-2.6.RygelServer.MediaItem

    description: string

    // Owm methods of RygelServer-2.6.RygelServer.MediaItem

    getDescription(): string
    setDescription(value: string): void

    // Class property signals of RygelServer-2.6.RygelServer.MediaItem

    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::date", callback: (...args: any[]) => void): number
    on(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (...args: any[]) => void): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (...args: any[]) => void): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-update-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-update-id", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (...args: any[]) => void): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (...args: any[]) => void): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::parent-ref", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent-ref", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ocm-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MediaItem extends MediaObject {

    // Own properties of RygelServer-2.6.RygelServer.MediaItem

    static name: string
    static $gtype: GObject.GType<MediaItem>

    // Constructors of RygelServer-2.6.RygelServer.MediaItem

    constructor(config?: MediaItem_ConstructProps) 
    _init(config?: MediaItem_ConstructProps): void
}

interface MediaFileItem_ConstructProps extends MediaItem_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.MediaFileItem

    mimeType?: string | null
    dlnaProfile?: string | null
    size?: number | null
    placeHolder?: boolean | null
}

interface MediaFileItem {

    // Own properties of RygelServer-2.6.RygelServer.MediaFileItem

    mimeType: string
    dlnaProfile: string
    size: number
    placeHolder: boolean

    // Own fields of RygelServer-2.6.RygelServer.MediaFileItem

    rygelMediaFileItemAddressRegex: GLib.Regex
    rygelMediaFileItemMimeToExt: Gee.HashMap

    // Owm methods of RygelServer-2.6.RygelServer.MediaFileItem

    getPrimaryResource(): MediaResource
    getExtension(): string
    extFromMimeType(mimeType: string): string
    addEngineResources(callback: Gio.AsyncReadyCallback | null): void
    addEngineResourcesFinish(res: Gio.AsyncResult): void
    addAdditionalResources(server: HTTPServer): void
    getMimeType(): string
    setMimeType(value: string): void
    getDlnaProfile(): string
    setDlnaProfile(value: string): void
    getSize(): number
    setSize(value: number): void
    getPlaceHolder(): boolean
    setPlaceHolder(value: boolean): void

    // Class property signals of RygelServer-2.6.RygelServer.MediaFileItem

    connect(sigName: "notify::mime-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-profile", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::place-holder", callback: (...args: any[]) => void): number
    on(sigName: "notify::place-holder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::place-holder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::place-holder", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::date", callback: (...args: any[]) => void): number
    on(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (...args: any[]) => void): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (...args: any[]) => void): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-update-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-update-id", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (...args: any[]) => void): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (...args: any[]) => void): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::parent-ref", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent-ref", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ocm-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MediaFileItem extends MediaItem {

    // Own properties of RygelServer-2.6.RygelServer.MediaFileItem

    static name: string
    static $gtype: GObject.GType<MediaFileItem>

    // Constructors of RygelServer-2.6.RygelServer.MediaFileItem

    constructor(config?: MediaFileItem_ConstructProps) 
    _init(config?: MediaFileItem_ConstructProps): void
}

interface MediaObject_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.MediaObject

    id?: string | null
    refId?: string | null
    upnpClass?: string | null
    date?: string | null
    creator?: string | null
    modified?: number | null
    objectUpdateId?: number | null
    artist?: string | null
    genre?: string | null
    parent?: MediaContainer | null
    parentRef?: MediaContainer | null
    title?: string | null
}

interface MediaObject {

    // Own properties of RygelServer-2.6.RygelServer.MediaObject

    id: string
    refId: string
    upnpClass: string
    date: string
    creator: string
    modified: number
    objectUpdateId: number
    artist: string
    genre: string
    parent: MediaContainer
    parentRef: MediaContainer
    title: string
    readonly ocmFlags: GUPnPAV.OCMFlags

    // Own fields of RygelServer-2.6.RygelServer.MediaObject

    parentPtr: MediaContainer

    // Owm methods of RygelServer-2.6.RygelServer.MediaObject

    getUris(): Gee.List
    getPrimaryUri(): string | null
    addUri(uri: string): void
    getWritable(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    getResourceList(): Gee.List
    getResourceByName(resourceName: string): MediaResource | null
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serializeResourceList(didlObject: GUPnPAV.DIDLLiteObject, httpServer: HTTPServer): void
    createStreamSourceForResource(request: HTTPRequest, resource: MediaResource): DataSource | null
    applyDidlLite(didlObject: GUPnPAV.DIDLLiteObject): void
    compareByProperty(mediaObject: MediaObject, property: string): number
    compareStringProps(prop1: string, prop2: string): number
    compareIntProps(prop1: number, prop2: number): number
    getId(): string
    setId(value: string): void
    getRefId(): string
    setRefId(value: string): void
    getUpnpClass(): string
    setUpnpClass(value: string): void
    getDate(): string
    setDate(value: string): void
    getCreator(): string
    setCreator(value: string): void
    getModified(): number
    setModified(value: number): void
    getObjectUpdateId(): number
    setObjectUpdateId(value: number): void
    getArtist(): string
    setArtist(value: string): void
    getGenre(): string
    setGenre(value: string): void
    getParent(): MediaContainer
    setParent(value: MediaContainer): void
    getParentRef(): MediaContainer
    setParentRef(value: MediaContainer): void
    getTitle(): string
    setTitle(value: string): void
    getOcmFlags(): GUPnPAV.OCMFlags

    // Class property signals of RygelServer-2.6.RygelServer.MediaObject

    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::date", callback: (...args: any[]) => void): number
    on(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (...args: any[]) => void): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (...args: any[]) => void): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-update-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-update-id", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (...args: any[]) => void): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (...args: any[]) => void): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::parent-ref", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent-ref", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ocm-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MediaObject extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.MediaObject

    static name: string
    static $gtype: GObject.GType<MediaObject>

    // Constructors of RygelServer-2.6.RygelServer.MediaObject

    constructor(config?: MediaObject_ConstructProps) 
    _init(config?: MediaObject_ConstructProps): void
    static applyReplacements(replacementPairs: GLib.HashTable, sourceString: string | null): string | null
}

interface MediaResource_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.MediaResource

    uri?: string | null
    importUri?: string | null
    extension?: string | null
    size?: number | null
    cleartextSize?: number | null
    duration?: number | null
    bitrate?: number | null
    bitsPerSample?: number | null
    colorDepth?: number | null
    width?: number | null
    height?: number | null
    audioChannels?: number | null
    sampleFreq?: number | null
    protocol?: string | null
    mimeType?: string | null
    dlnaProfile?: string | null
    network?: string | null
    dlnaConversion?: GUPnPAV.DLNAConversion | null
    dlnaFlags?: GUPnPAV.DLNAFlags | null
    dlnaOperation?: GUPnPAV.DLNAOperation | null
}

interface MediaResource {

    // Own properties of RygelServer-2.6.RygelServer.MediaResource

    uri: string
    importUri: string
    extension: string
    size: number
    cleartextSize: number
    duration: number
    bitrate: number
    bitsPerSample: number
    colorDepth: number
    width: number
    height: number
    audioChannels: number
    sampleFreq: number
    protocol: string
    mimeType: string
    dlnaProfile: string
    network: string
    dlnaConversion: GUPnPAV.DLNAConversion
    dlnaFlags: GUPnPAV.DLNAFlags
    dlnaOperation: GUPnPAV.DLNAOperation

    // Own fields of RygelServer-2.6.RygelServer.MediaResource

    playSpeeds: string[]
    playSpeedsLength1: number

    // Owm methods of RygelServer-2.6.RygelServer.MediaResource

    dup(): MediaResource
    getName(): string
    serialize(didlResource: GUPnPAV.DIDLLiteResource, replacements: GLib.HashTable | null): GUPnPAV.DIDLLiteResource
    setProtocolInfo(pi: GUPnPAV.ProtocolInfo): void
    getProtocolInfo(replacements: GLib.HashTable | null): GUPnPAV.ProtocolInfo
    supportsArbitraryByteSeek(): boolean
    supportsArbitraryTimeSeek(): boolean
    supportsLimitedByteSeek(): boolean
    supportsLimitedTimeSeek(): boolean
    supportsLimitedCleartextByteSeek(): boolean
    supportsFullCleartextByteSeek(): boolean
    isLinkProtectionEnabled(): boolean
    isDlnaContent(): boolean
    getDefaultTransferMode(): string
    supportsTransferMode(transferMode: string): boolean
    isStreamable(): boolean
    isCleartextRangeSupportEnabled(): boolean
    supportsPlayspeed(): boolean
    isDlnaProtocolFlagSet(flags: number): boolean
    isDlnaOperationModeSet(flags: number): boolean
    toString(): string
    getUri(): string
    setUri(value: string): void
    getImportUri(): string
    setImportUri(value: string): void
    getExtension(): string
    setExtension(value: string): void
    getSize(): number
    setSize(value: number): void
    getCleartextSize(): number
    setCleartextSize(value: number): void
    getDuration(): number
    setDuration(value: number): void
    getBitrate(): number
    setBitrate(value: number): void
    getBitsPerSample(): number
    setBitsPerSample(value: number): void
    getColorDepth(): number
    setColorDepth(value: number): void
    getWidth(): number
    setWidth(value: number): void
    getHeight(): number
    setHeight(value: number): void
    getAudioChannels(): number
    setAudioChannels(value: number): void
    getSampleFreq(): number
    setSampleFreq(value: number): void
    getProtocol(): string
    setProtocol(value: string): void
    getMimeType(): string
    setMimeType(value: string): void
    getDlnaProfile(): string
    setDlnaProfile(value: string): void
    getNetwork(): string
    setNetwork(value: string): void
    getDlnaConversion(): GUPnPAV.DLNAConversion
    setDlnaConversion(value: GUPnPAV.DLNAConversion): void
    getDlnaFlags(): GUPnPAV.DLNAFlags
    setDlnaFlags(value: GUPnPAV.DLNAFlags): void
    getDlnaOperation(): GUPnPAV.DLNAOperation
    setDlnaOperation(value: GUPnPAV.DLNAOperation): void

    // Class property signals of RygelServer-2.6.RygelServer.MediaResource

    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::import-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::import-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::import-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::import-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::import-uri", ...args: any[]): void
    connect(sigName: "notify::extension", callback: (...args: any[]) => void): number
    on(sigName: "notify::extension", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extension", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extension", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::cleartext-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::cleartext-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cleartext-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cleartext-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cleartext-size", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::bitrate", callback: (...args: any[]) => void): number
    on(sigName: "notify::bitrate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bitrate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bitrate", ...args: any[]): void
    connect(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): number
    on(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bits-per-sample", ...args: any[]): void
    connect(sigName: "notify::color-depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::color-depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color-depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color-depth", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::audio-channels", callback: (...args: any[]) => void): number
    on(sigName: "notify::audio-channels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::audio-channels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::audio-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::audio-channels", ...args: any[]): void
    connect(sigName: "notify::sample-freq", callback: (...args: any[]) => void): number
    on(sigName: "notify::sample-freq", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sample-freq", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sample-freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sample-freq", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: (...args: any[]) => void): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-profile", ...args: any[]): void
    connect(sigName: "notify::network", callback: (...args: any[]) => void): number
    on(sigName: "notify::network", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::network", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::network", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::network", ...args: any[]): void
    connect(sigName: "notify::dlna-conversion", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-conversion", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-conversion", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-conversion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-conversion", ...args: any[]): void
    connect(sigName: "notify::dlna-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-flags", ...args: any[]): void
    connect(sigName: "notify::dlna-operation", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-operation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-operation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-operation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MediaResource extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.MediaResource

    static name: string
    static $gtype: GObject.GType<MediaResource>

    // Constructors of RygelServer-2.6.RygelServer.MediaResource

    constructor(config?: MediaResource_ConstructProps) 
    constructor(name: string) 
    static new(name: string): MediaResource
    static fromResource(name: string, that: MediaResource): MediaResource
    static fromDidlLiteResource(name: string, didlResource: GUPnPAV.DIDLLiteResource): MediaResource
    _init(config?: MediaResource_ConstructProps): void
}

interface MediaServerPlugin_ConstructProps extends RygelCore.Plugin_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.MediaServerPlugin

    rootContainer?: MediaContainer | null
    uploadProfiles?: RygelCore.DLNAProfile[] | null
    supportedProfiles?: RygelCore.DLNAProfile[] | null
}

interface MediaServerPlugin {

    // Own properties of RygelServer-2.6.RygelServer.MediaServerPlugin

    readonly rootContainer: MediaContainer
    readonly searchCaps: string
    uploadProfiles: RygelCore.DLNAProfile[]
    supportedProfiles: RygelCore.DLNAProfile[]

    // Owm methods of RygelServer-2.6.RygelServer.MediaServerPlugin

    getRootContainer(): MediaContainer
    getSearchCaps(): string
    getUploadProfiles(): RygelCore.DLNAProfile[]
    setUploadProfiles(value: RygelCore.DLNAProfile[]): void
    getSupportedProfiles(): RygelCore.DLNAProfile[]
    setSupportedProfiles(value: RygelCore.DLNAProfile[]): void

    // Class property signals of RygelServer-2.6.RygelServer.MediaServerPlugin

    connect(sigName: "notify::root-container", callback: (...args: any[]) => void): number
    on(sigName: "notify::root-container", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::root-container", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::root-container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::root-container", ...args: any[]): void
    connect(sigName: "notify::search-caps", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-caps", ...args: any[]): void
    connect(sigName: "notify::upload-profiles", callback: (...args: any[]) => void): number
    on(sigName: "notify::upload-profiles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::upload-profiles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::upload-profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::upload-profiles", ...args: any[]): void
    connect(sigName: "notify::supported-profiles", callback: (...args: any[]) => void): number
    on(sigName: "notify::supported-profiles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::supported-profiles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::supported-profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::supported-profiles", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::desc-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::desc-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::desc-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::desc-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::desc-path", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::resource-infos", callback: (...args: any[]) => void): number
    on(sigName: "notify::resource-infos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resource-infos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resource-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resource-infos", ...args: any[]): void
    connect(sigName: "notify::icon-infos", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-infos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-infos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-infos", ...args: any[]): void
    connect(sigName: "notify::default-icons", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-icons", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-icons", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-icons", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MediaServerPlugin extends RygelCore.Plugin {

    // Own properties of RygelServer-2.6.RygelServer.MediaServerPlugin

    static name: string
    static $gtype: GObject.GType<MediaServerPlugin>

    // Constructors of RygelServer-2.6.RygelServer.MediaServerPlugin

    constructor(config?: MediaServerPlugin_ConstructProps) 
    _init(config?: MediaServerPlugin_ConstructProps): void

    // Conflicting static methods

    static new(...args: any[]): any
}

interface SearchExpression {

    // Own fields of RygelServer-2.6.RygelServer.SearchExpression

    refCount: number
    op: object | null
    operand1: object | null
    operand2: object | null

    // Owm methods of RygelServer-2.6.RygelServer.SearchExpression

    satisfiedBy(mediaObject: MediaObject): boolean
    toString(): string
}

class SearchExpression {

    // Own properties of RygelServer-2.6.RygelServer.SearchExpression

    static name: string
}

interface MediaServer_ConstructProps extends RygelCore.MediaDevice_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.MediaServer

    rootContainer?: MediaContainer | null
}

interface MediaServer {

    // Own properties of RygelServer-2.6.RygelServer.MediaServer

    readonly rootContainer: MediaContainer

    // Class property signals of RygelServer-2.6.RygelServer.MediaServer

    connect(sigName: "notify::root-container", callback: (...args: any[]) => void): number
    on(sigName: "notify::root-container", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::root-container", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::root-container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::root-container", ...args: any[]): void
    connect(sigName: "notify::plugin", callback: (...args: any[]) => void): number
    on(sigName: "notify::plugin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::plugin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::plugin", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MediaServer extends RygelCore.MediaDevice {

    // Own properties of RygelServer-2.6.RygelServer.MediaServer

    static name: string
    static $gtype: GObject.GType<MediaServer>

    // Constructors of RygelServer-2.6.RygelServer.MediaServer

    constructor(config?: MediaServer_ConstructProps) 
    constructor(title: string, rootContainer: MediaContainer, capabilities: RygelCore.PluginCapabilities) 
    static new(title: string, rootContainer: MediaContainer, capabilities: RygelCore.PluginCapabilities): MediaServer
    _init(config?: MediaServer_ConstructProps): void
}

interface MediaEngine_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `resource-changed`
 */
interface MediaEngine_ResourceChangedSignalCallback {
    (mediaObjectUri: string): void
}

interface MediaEngine {

    // Owm methods of RygelServer-2.6.RygelServer.MediaEngine

    getDlnaProfiles(): RygelCore.DLNAProfile[]
    getResourcesForItem(item: MediaObject, callback: Gio.AsyncReadyCallback | null): void
    getResourcesForItemFinish(res: Gio.AsyncResult): Gee.List | null
    createDataSourceForResource(item: MediaObject, resource: MediaResource, replacements: GLib.HashTable): DataSource | null
    createDataSourceForUri(uri: string): DataSource | null
    getInternalProtocolSchemes(): string[]

    // Own signals of RygelServer-2.6.RygelServer.MediaEngine

    connect(sigName: "resource-changed", callback: MediaEngine_ResourceChangedSignalCallback): number
    on(sigName: "resource-changed", callback: MediaEngine_ResourceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resource-changed", callback: MediaEngine_ResourceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resource-changed", callback: MediaEngine_ResourceChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "resource-changed", ...args: any[]): void

    // Class property signals of RygelServer-2.6.RygelServer.MediaEngine

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MediaEngine extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.MediaEngine

    static name: string
    static $gtype: GObject.GType<MediaEngine>

    // Constructors of RygelServer-2.6.RygelServer.MediaEngine

    constructor(config?: MediaEngine_ConstructProps) 
    _init(config?: MediaEngine_ConstructProps): void
    static init(): void
    static getDefault(): MediaEngine
}

interface HTTPSeekRequest_ConstructProps extends GObject.Object_ConstructProps {
}

interface HTTPSeekRequest {

    // Class property signals of RygelServer-2.6.RygelServer.HTTPSeekRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class HTTPSeekRequest extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.HTTPSeekRequest

    static name: string
    static $gtype: GObject.GType<HTTPSeekRequest>

    // Constructors of RygelServer-2.6.RygelServer.HTTPSeekRequest

    constructor(config?: HTTPSeekRequest_ConstructProps) 
    _init(config?: HTTPSeekRequest_ConstructProps): void
}

interface PlaylistItem_ConstructProps extends MediaFileItem_ConstructProps {
}

interface PlaylistItem {

    // Class property signals of RygelServer-2.6.RygelServer.PlaylistItem

    connect(sigName: "notify::mime-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-profile", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::place-holder", callback: (...args: any[]) => void): number
    on(sigName: "notify::place-holder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::place-holder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::place-holder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::place-holder", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::date", callback: (...args: any[]) => void): number
    on(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (...args: any[]) => void): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (...args: any[]) => void): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-update-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-update-id", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (...args: any[]) => void): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (...args: any[]) => void): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::parent-ref", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent-ref", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent-ref", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent-ref", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent-ref", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::ocm-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ocm-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ocm-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ocm-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class PlaylistItem extends MediaFileItem {

    // Own properties of RygelServer-2.6.RygelServer.PlaylistItem

    static name: string
    static $gtype: GObject.GType<PlaylistItem>

    // Constructors of RygelServer-2.6.RygelServer.PlaylistItem

    constructor(config?: PlaylistItem_ConstructProps) 
    constructor(id: string, parent: MediaContainer, title: string, upnpClass: string) 
    static new(id: string, parent: MediaContainer, title: string, upnpClass: string): PlaylistItem
    _init(config?: PlaylistItem_ConstructProps): void
}

interface ContentDirectory_ConstructProps extends GUPnP.Service_ConstructProps {
}

interface ContentDirectory {

    // Conflicting properties

    parentInstance: any

    // Own fields of RygelServer-2.6.RygelServer.ContentDirectory

    featureList: string
    httpServer: HTTPServer
    rootContainer: MediaContainer
    cancellable: Gio.Cancellable
    systemUpdateId: number

    // Class property signals of RygelServer-2.6.RygelServer.ContentDirectory

    connect(sigName: "notify::root-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::root-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::root-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::root-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::root-device", ...args: any[]): void
    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::document", callback: (...args: any[]) => void): number
    on(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::element", callback: (...args: any[]) => void): number
    on(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::location", callback: (...args: any[]) => void): number
    on(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::service-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-type", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (...args: any[]) => void): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: "notify::url-base", callback: (...args: any[]) => void): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::url-base", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ContentDirectory extends GUPnP.Service {

    // Own properties of RygelServer-2.6.RygelServer.ContentDirectory

    static name: string
    static $gtype: GObject.GType<ContentDirectory>

    // Constructors of RygelServer-2.6.RygelServer.ContentDirectory

    constructor(config?: ContentDirectory_ConstructProps) 
    constructor() 
    static new(): ContentDirectory
    _init(config?: ContentDirectory_ConstructProps): void
}

interface HTTPByteSeekRequest_ConstructProps extends HTTPSeekRequest_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.HTTPByteSeekRequest

    startByte?: number | null
    endByte?: number | null
    rangeLength?: number | null
    totalSize?: number | null
}

interface HTTPByteSeekRequest {

    // Own properties of RygelServer-2.6.RygelServer.HTTPByteSeekRequest

    startByte: number
    endByte: number
    rangeLength: number
    totalSize: number

    // Owm methods of RygelServer-2.6.RygelServer.HTTPByteSeekRequest

    getStartByte(): number
    setStartByte(value: number): void
    getEndByte(): number
    setEndByte(value: number): void
    getRangeLength(): number
    getTotalSize(): number
    setTotalSize(value: number): void

    // Class property signals of RygelServer-2.6.RygelServer.HTTPByteSeekRequest

    connect(sigName: "notify::start-byte", callback: (...args: any[]) => void): number
    on(sigName: "notify::start-byte", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::start-byte", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::start-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::start-byte", ...args: any[]): void
    connect(sigName: "notify::end-byte", callback: (...args: any[]) => void): number
    on(sigName: "notify::end-byte", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::end-byte", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::end-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::end-byte", ...args: any[]): void
    connect(sigName: "notify::range-length", callback: (...args: any[]) => void): number
    on(sigName: "notify::range-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::range-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::range-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::range-length", ...args: any[]): void
    connect(sigName: "notify::total-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::total-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total-size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class HTTPByteSeekRequest extends HTTPSeekRequest {

    // Own properties of RygelServer-2.6.RygelServer.HTTPByteSeekRequest

    static name: string
    static $gtype: GObject.GType<HTTPByteSeekRequest>

    // Constructors of RygelServer-2.6.RygelServer.HTTPByteSeekRequest

    constructor(config?: HTTPByteSeekRequest_ConstructProps) 
    constructor(msg: Soup.Message, handler: HTTPGetHandler) 
    static new(msg: Soup.Message, handler: HTTPGetHandler): HTTPByteSeekRequest
    _init(config?: HTTPByteSeekRequest_ConstructProps): void
    static supported(message: Soup.Message, handler: HTTPGetHandler): boolean
    static requested(msg: Soup.Message): boolean
}

interface HTTPByteSeekResponse_ConstructProps extends HTTPResponseElement_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.HTTPByteSeekResponse

    startByte?: number | null
    endByte?: number | null
    rangeLength?: number | null
    totalSize?: number | null
}

interface HTTPByteSeekResponse {

    // Own properties of RygelServer-2.6.RygelServer.HTTPByteSeekResponse

    startByte: number
    endByte: number
    rangeLength: number
    totalSize: number

    // Owm methods of RygelServer-2.6.RygelServer.HTTPByteSeekResponse

    getStartByte(): number
    setStartByte(value: number): void
    getEndByte(): number
    setEndByte(value: number): void
    getRangeLength(): number
    getTotalSize(): number
    setTotalSize(value: number): void

    // Class property signals of RygelServer-2.6.RygelServer.HTTPByteSeekResponse

    connect(sigName: "notify::start-byte", callback: (...args: any[]) => void): number
    on(sigName: "notify::start-byte", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::start-byte", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::start-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::start-byte", ...args: any[]): void
    connect(sigName: "notify::end-byte", callback: (...args: any[]) => void): number
    on(sigName: "notify::end-byte", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::end-byte", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::end-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::end-byte", ...args: any[]): void
    connect(sigName: "notify::range-length", callback: (...args: any[]) => void): number
    on(sigName: "notify::range-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::range-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::range-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::range-length", ...args: any[]): void
    connect(sigName: "notify::total-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::total-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total-size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class HTTPByteSeekResponse extends HTTPResponseElement {

    // Own properties of RygelServer-2.6.RygelServer.HTTPByteSeekResponse

    static name: string
    static $gtype: GObject.GType<HTTPByteSeekResponse>

    // Constructors of RygelServer-2.6.RygelServer.HTTPByteSeekResponse

    constructor(config?: HTTPByteSeekResponse_ConstructProps) 
    constructor(startByte: number, endByte: number, totalSize: number) 
    static new(startByte: number, endByte: number, totalSize: number): HTTPByteSeekResponse
    static fromRequest(request: HTTPByteSeekRequest): HTTPByteSeekResponse
    _init(config?: HTTPByteSeekResponse_ConstructProps): void
}

interface HTTPGetHandler_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.HTTPGetHandler

    cancellable?: Gio.Cancellable | null
}

interface HTTPGetHandler {

    // Own properties of RygelServer-2.6.RygelServer.HTTPGetHandler

    cancellable: Gio.Cancellable

    // Owm methods of RygelServer-2.6.RygelServer.HTTPGetHandler

    addResponseHeaders(request: HTTPGet): void
    getDefaultTransferMode(): string
    supportsTransferMode(mode: string): boolean
    getResourceSize(): number
    getResourceDuration(): number
    supportsByteSeek(): boolean
    supportsTimeSeek(): boolean
    supportsPlayspeed(): boolean
    renderBody(request: HTTPGet): HTTPResponse
    getCancellable(): Gio.Cancellable
    setCancellable(value: Gio.Cancellable): void

    // Class property signals of RygelServer-2.6.RygelServer.HTTPGetHandler

    connect(sigName: "notify::cancellable", callback: (...args: any[]) => void): number
    on(sigName: "notify::cancellable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cancellable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class HTTPGetHandler extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.HTTPGetHandler

    static name: string
    static $gtype: GObject.GType<HTTPGetHandler>

    // Constructors of RygelServer-2.6.RygelServer.HTTPGetHandler

    constructor(config?: HTTPGetHandler_ConstructProps) 
    _init(config?: HTTPGetHandler_ConstructProps): void
}

interface HTTPGet_ConstructProps extends HTTPRequest_ConstructProps {
}

interface HTTPGet {

    // Own fields of RygelServer-2.6.RygelServer.HTTPGet

    seek: HTTPSeekRequest
    speedRequest: PlaySpeedRequest
    handler: HTTPGetHandler

    // Class property signals of RygelServer-2.6.RygelServer.HTTPGet

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class HTTPGet extends HTTPRequest {

    // Own properties of RygelServer-2.6.RygelServer.HTTPGet

    static name: string
    static $gtype: GObject.GType<HTTPGet>

    // Constructors of RygelServer-2.6.RygelServer.HTTPGet

    constructor(config?: HTTPGet_ConstructProps) 
    constructor(httpServer: HTTPServer, server: Soup.Server, msg: Soup.Message) 
    static new(httpServer: HTTPServer, server: Soup.Server, msg: Soup.Message): HTTPGet
    _init(config?: HTTPGet_ConstructProps): void
}

interface HTTPItemURI_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.HTTPItemURI

    itemId?: string | null
    thumbnailIndex?: number | null
    subtitleIndex?: number | null
    resourceName?: string | null
    httpServer?: HTTPServer | null
    extension?: string | null
}

interface HTTPItemURI {

    // Own properties of RygelServer-2.6.RygelServer.HTTPItemURI

    itemId: string
    thumbnailIndex: number
    subtitleIndex: number
    resourceName: string
    httpServer: HTTPServer
    extension: string

    // Own fields of RygelServer-2.6.RygelServer.HTTPItemURI

    rygelHttpItemUriMimeToExt: Gee.HashMap

    // Owm methods of RygelServer-2.6.RygelServer.HTTPItemURI

    toString(): string
    getItemId(): string
    setItemId(value: string): void
    getThumbnailIndex(): number
    setThumbnailIndex(value: number): void
    getSubtitleIndex(): number
    setSubtitleIndex(value: number): void
    getResourceName(): string | null
    setResourceName(value: string | null): void
    getHttpServer(): HTTPServer
    setHttpServer(value: HTTPServer): void
    getExtension(): string
    setExtension(value: string): void

    // Class property signals of RygelServer-2.6.RygelServer.HTTPItemURI

    connect(sigName: "notify::item-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::item-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::item-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::item-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::item-id", ...args: any[]): void
    connect(sigName: "notify::thumbnail-index", callback: (...args: any[]) => void): number
    on(sigName: "notify::thumbnail-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::thumbnail-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::thumbnail-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::thumbnail-index", ...args: any[]): void
    connect(sigName: "notify::subtitle-index", callback: (...args: any[]) => void): number
    on(sigName: "notify::subtitle-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subtitle-index", ...args: any[]): void
    connect(sigName: "notify::resource-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::resource-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resource-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resource-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resource-name", ...args: any[]): void
    connect(sigName: "notify::http-server", callback: (...args: any[]) => void): number
    on(sigName: "notify::http-server", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::http-server", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::http-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::http-server", ...args: any[]): void
    connect(sigName: "notify::extension", callback: (...args: any[]) => void): number
    on(sigName: "notify::extension", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extension", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extension", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class HTTPItemURI extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.HTTPItemURI

    static name: string
    static $gtype: GObject.GType<HTTPItemURI>

    // Constructors of RygelServer-2.6.RygelServer.HTTPItemURI

    constructor(config?: HTTPItemURI_ConstructProps) 
    constructor(object: MediaObject, httpServer: HTTPServer, thumbnailIndex: number, subtitleIndex: number, resourceName: string | null) 
    static new(object: MediaObject, httpServer: HTTPServer, thumbnailIndex: number, subtitleIndex: number, resourceName: string | null): HTTPItemURI
    static fromString(uri: string, httpServer: HTTPServer): HTTPItemURI
    _init(config?: HTTPItemURI_ConstructProps): void
}

interface HTTPRequest_ConstructProps extends RygelCore.StateMachine_ConstructProps, GObject.Object_ConstructProps {
}

interface HTTPRequest extends RygelCore.StateMachine {

    // Own fields of RygelServer-2.6.RygelServer.HTTPRequest

    httpServer: HTTPServer
    server: Soup.Server
    msg: Soup.Message
    uri: HTTPItemURI
    object: MediaObject
    hack: any

    // Owm methods of RygelServer-2.6.RygelServer.HTTPRequest

    handle(callback: Gio.AsyncReadyCallback | null): void
    handleFinish(res: Gio.AsyncResult): void
    findItem(callback: Gio.AsyncReadyCallback | null): void
    findItemFinish(res: Gio.AsyncResult): void
    handleError(error: GLib.Error): void
    end(status: number, reason: string | null): void

    // Class property signals of RygelServer-2.6.RygelServer.HTTPRequest

    connect(sigName: "notify::cancellable", callback: (...args: any[]) => void): number
    on(sigName: "notify::cancellable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cancellable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class HTTPRequest extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.HTTPRequest

    static name: string
    static $gtype: GObject.GType<HTTPRequest>

    // Constructors of RygelServer-2.6.RygelServer.HTTPRequest

    constructor(config?: HTTPRequest_ConstructProps) 
    _init(config?: HTTPRequest_ConstructProps): void
}

interface HTTPResponse_ConstructProps extends RygelCore.StateMachine_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.HTTPResponse

    server?: Soup.Server | null
}

interface HTTPResponse extends RygelCore.StateMachine {

    // Own properties of RygelServer-2.6.RygelServer.HTTPResponse

    server: Soup.Server
    readonly priority: number

    // Own fields of RygelServer-2.6.RygelServer.HTTPResponse

    msg: Soup.Message
    seek: HTTPSeekRequest
    speed: PlaySpeedRequest

    // Owm methods of RygelServer-2.6.RygelServer.HTTPResponse

    preroll(): Gee.List | null
    end(aborted: boolean, status: number): void
    getServer(): Soup.Server
    getPriority(): number

    // Class property signals of RygelServer-2.6.RygelServer.HTTPResponse

    connect(sigName: "notify::server", callback: (...args: any[]) => void): number
    on(sigName: "notify::server", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::server", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::server", ...args: any[]): void
    connect(sigName: "notify::priority", callback: (...args: any[]) => void): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::priority", ...args: any[]): void
    connect(sigName: "notify::cancellable", callback: (...args: any[]) => void): number
    on(sigName: "notify::cancellable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cancellable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class HTTPResponse extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.HTTPResponse

    static name: string
    static $gtype: GObject.GType<HTTPResponse>

    // Constructors of RygelServer-2.6.RygelServer.HTTPResponse

    constructor(config?: HTTPResponse_ConstructProps) 
    constructor(request: HTTPGet, requestHandler: HTTPGetHandler, src: DataSource) 
    static new(request: HTTPGet, requestHandler: HTTPGetHandler, src: DataSource): HTTPResponse
    _init(config?: HTTPResponse_ConstructProps): void
}

interface HTTPResponseElement_ConstructProps extends GObject.Object_ConstructProps {
}

interface HTTPResponseElement {

    // Owm methods of RygelServer-2.6.RygelServer.HTTPResponseElement

    addResponseHeaders(request: HTTPRequest): void
    toString(): string

    // Class property signals of RygelServer-2.6.RygelServer.HTTPResponseElement

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class HTTPResponseElement extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.HTTPResponseElement

    static name: string
    static $gtype: GObject.GType<HTTPResponseElement>

    // Constructors of RygelServer-2.6.RygelServer.HTTPResponseElement

    constructor(config?: HTTPResponseElement_ConstructProps) 
    _init(config?: HTTPResponseElement_ConstructProps): void
}

interface HTTPServer_ConstructProps extends RygelCore.StateMachine_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.HTTPServer

    pathRoot?: string | null
    serverName?: string | null
}

interface HTTPServer extends RygelCore.StateMachine {

    // Own properties of RygelServer-2.6.RygelServer.HTTPServer

    pathRoot: string
    serverName: string

    // Own fields of RygelServer-2.6.RygelServer.HTTPServer

    rootContainer: MediaContainer
    context: GUPnP.Context
    replacements: GLib.HashTable

    // Owm methods of RygelServer-2.6.RygelServer.HTTPServer

    setResourceDeliveryOptions(res: MediaResource): void
    needProxy(uri: string): boolean
    getProtocol(): string
    getProtocolInfo(): Gee.ArrayList
    getReplacements(): GLib.HashTable
    isLocal(): boolean
    getPathRoot(): string
    getServerName(): string
    setServerName(value: string): void

    // Class property signals of RygelServer-2.6.RygelServer.HTTPServer

    connect(sigName: "notify::path-root", callback: (...args: any[]) => void): number
    on(sigName: "notify::path-root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path-root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path-root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path-root", ...args: any[]): void
    connect(sigName: "notify::server-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::server-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::server-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::server-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::server-name", ...args: any[]): void
    connect(sigName: "notify::cancellable", callback: (...args: any[]) => void): number
    on(sigName: "notify::cancellable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cancellable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class HTTPServer extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.HTTPServer

    static name: string
    static $gtype: GObject.GType<HTTPServer>

    // Constructors of RygelServer-2.6.RygelServer.HTTPServer

    constructor(config?: HTTPServer_ConstructProps) 
    constructor(contentDir: ContentDirectory, name: string) 
    static new(contentDir: ContentDirectory, name: string): HTTPServer
    _init(config?: HTTPServer_ConstructProps): void
}

interface HTTPTimeSeekRequest_ConstructProps extends HTTPSeekRequest_ConstructProps {
}

interface HTTPTimeSeekRequest {

    // Own fields of RygelServer-2.6.RygelServer.HTTPTimeSeekRequest

    startTime: number
    endTime: number
    rangeDuration: number
    totalDuration: number

    // Owm methods of RygelServer-2.6.RygelServer.HTTPTimeSeekRequest

    toString(): string

    // Class property signals of RygelServer-2.6.RygelServer.HTTPTimeSeekRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class HTTPTimeSeekRequest extends HTTPSeekRequest {

    // Own properties of RygelServer-2.6.RygelServer.HTTPTimeSeekRequest

    static name: string
    static $gtype: GObject.GType<HTTPTimeSeekRequest>

    // Constructors of RygelServer-2.6.RygelServer.HTTPTimeSeekRequest

    constructor(config?: HTTPTimeSeekRequest_ConstructProps) 
    _init(config?: HTTPTimeSeekRequest_ConstructProps): void
    static supported(message: Soup.Message, handler: HTTPGetHandler): boolean
    static requested(message: Soup.Message): boolean
}

interface HTTPTimeSeekResponse_ConstructProps extends HTTPResponseElement_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.HTTPTimeSeekResponse

    startTime?: number | null
    endTime?: number | null
    rangeDuration?: number | null
    totalDuration?: number | null
    startByte?: number | null
    endByte?: number | null
    responseLength?: number | null
    totalSize?: number | null
}

interface HTTPTimeSeekResponse {

    // Own properties of RygelServer-2.6.RygelServer.HTTPTimeSeekResponse

    startTime: number
    endTime: number
    rangeDuration: number
    totalDuration: number
    startByte: number
    endByte: number
    responseLength: number
    totalSize: number

    // Owm methods of RygelServer-2.6.RygelServer.HTTPTimeSeekResponse

    getStartTime(): number
    getEndTime(): number
    getRangeDuration(): number
    getTotalDuration(): number
    getStartByte(): number
    getEndByte(): number
    getResponseLength(): number
    getTotalSize(): number

    // Class property signals of RygelServer-2.6.RygelServer.HTTPTimeSeekResponse

    connect(sigName: "notify::start-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::start-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::start-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::start-time", ...args: any[]): void
    connect(sigName: "notify::end-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::end-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::end-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::end-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::end-time", ...args: any[]): void
    connect(sigName: "notify::range-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::range-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::range-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::range-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::range-duration", ...args: any[]): void
    connect(sigName: "notify::total-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::total-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total-duration", ...args: any[]): void
    connect(sigName: "notify::start-byte", callback: (...args: any[]) => void): number
    on(sigName: "notify::start-byte", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::start-byte", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::start-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::start-byte", ...args: any[]): void
    connect(sigName: "notify::end-byte", callback: (...args: any[]) => void): number
    on(sigName: "notify::end-byte", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::end-byte", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::end-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::end-byte", ...args: any[]): void
    connect(sigName: "notify::response-length", callback: (...args: any[]) => void): number
    on(sigName: "notify::response-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::response-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::response-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::response-length", ...args: any[]): void
    connect(sigName: "notify::total-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::total-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total-size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class HTTPTimeSeekResponse extends HTTPResponseElement {

    // Own properties of RygelServer-2.6.RygelServer.HTTPTimeSeekResponse

    static name: string
    static $gtype: GObject.GType<HTTPTimeSeekResponse>

    // Constructors of RygelServer-2.6.RygelServer.HTTPTimeSeekResponse

    constructor(config?: HTTPTimeSeekResponse_ConstructProps) 
    constructor(startTime: number, endTime: number, totalDuration: number, startByte: number, endByte: number, totalSize: number) 
    static new(startTime: number, endTime: number, totalDuration: number, startByte: number, endByte: number, totalSize: number): HTTPTimeSeekResponse
    static timeOnly(startTime: number, endTime: number, totalDuration: number): HTTPTimeSeekResponse
    static withLength(startTime: number, endTime: number, totalDuration: number, startByte: number, endByte: number, totalSize: number, responseLength: number): HTTPTimeSeekResponse
    static fromRequest(timeSeekRequest: HTTPTimeSeekRequest, totalDuration: number): HTTPTimeSeekResponse
    _init(config?: HTTPTimeSeekResponse_ConstructProps): void
}

interface Serializer_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.Serializer

    serializerType?: SerializerType | null
}

interface Serializer {

    // Own properties of RygelServer-2.6.RygelServer.Serializer

    readonly serializerType: SerializerType

    // Owm methods of RygelServer-2.6.RygelServer.Serializer

    addItem(): GUPnPAV.DIDLLiteItem | null
    addContainer(): GUPnPAV.DIDLLiteContainer | null
    filter(filterString: string): void
    getString(): string

    // Class property signals of RygelServer-2.6.RygelServer.Serializer

    connect(sigName: "notify::serializer-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::serializer-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serializer-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serializer-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serializer-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Serializer extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.Serializer

    static name: string
    static $gtype: GObject.GType<Serializer>

    // Constructors of RygelServer-2.6.RygelServer.Serializer

    constructor(config?: Serializer_ConstructProps) 
    constructor(type: SerializerType) 
    static new(type: SerializerType): Serializer
    _init(config?: Serializer_ConstructProps): void
}

interface PlaySpeed {

    // Own fields of RygelServer-2.6.RygelServer.PlaySpeed

    refCount: number
    numerator: number
    denominator: number

    // Owm methods of RygelServer-2.6.RygelServer.PlaySpeed

    equals(that: PlaySpeed): boolean
    isPositive(): boolean
    isNormalRate(): boolean
    toString(): string
    toFloat(): number
    toDouble(): number
}

class PlaySpeed {

    // Own properties of RygelServer-2.6.RygelServer.PlaySpeed

    static name: string

    // Constructors of RygelServer-2.6.RygelServer.PlaySpeed

    constructor(numerator: number, denominator: number) 
    static new(numerator: number, denominator: number): PlaySpeed
    static fromString(speed: string): PlaySpeed
}

interface PlaySpeedRequest_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.PlaySpeedRequest

    speed?: PlaySpeed | null
}

interface PlaySpeedRequest {

    // Own properties of RygelServer-2.6.RygelServer.PlaySpeedRequest

    speed: PlaySpeed

    // Owm methods of RygelServer-2.6.RygelServer.PlaySpeedRequest

    equals(that: PlaySpeedRequest): boolean
    getSpeed(): PlaySpeed

    // Class property signals of RygelServer-2.6.RygelServer.PlaySpeedRequest

    connect(sigName: "notify::speed", callback: (...args: any[]) => void): number
    on(sigName: "notify::speed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::speed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::speed", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class PlaySpeedRequest extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.PlaySpeedRequest

    static name: string
    static $gtype: GObject.GType<PlaySpeedRequest>

    // Constructors of RygelServer-2.6.RygelServer.PlaySpeedRequest

    constructor(config?: PlaySpeedRequest_ConstructProps) 
    constructor(numerator: number, denominator: number) 
    static new(numerator: number, denominator: number): PlaySpeedRequest
    static fromString(speed: string): PlaySpeedRequest
    _init(config?: PlaySpeedRequest_ConstructProps): void
    static supported(request: HTTPGet): boolean
}

interface PlaySpeedResponse_ConstructProps extends HTTPResponseElement_ConstructProps {
}

interface PlaySpeedResponse {

    // Own fields of RygelServer-2.6.RygelServer.PlaySpeedResponse

    framerate: number

    // Owm methods of RygelServer-2.6.RygelServer.PlaySpeedResponse

    equals(that: PlaySpeedRequest): boolean

    // Class property signals of RygelServer-2.6.RygelServer.PlaySpeedResponse

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class PlaySpeedResponse extends HTTPResponseElement {

    // Own properties of RygelServer-2.6.RygelServer.PlaySpeedResponse

    static name: string
    static $gtype: GObject.GType<PlaySpeedResponse>

    // Constructors of RygelServer-2.6.RygelServer.PlaySpeedResponse

    constructor(config?: PlaySpeedResponse_ConstructProps) 
    constructor(numerator: number, denominator: number, framerate: number) 
    static new(numerator: number, denominator: number, framerate: number): PlaySpeedResponse
    static fromSpeed(speed: PlaySpeed, framerate: number): PlaySpeedResponse
    static fromString(speed: string, framerate: number): PlaySpeedResponse
    _init(config?: PlaySpeedResponse_ConstructProps): void
}

interface DTCPCleartextRequest_ConstructProps extends HTTPSeekRequest_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.DTCPCleartextRequest

    startByte?: number | null
    endByte?: number | null
    rangeLength?: number | null
    totalSize?: number | null
}

interface DTCPCleartextRequest {

    // Own properties of RygelServer-2.6.RygelServer.DTCPCleartextRequest

    startByte: number
    endByte: number
    rangeLength: number
    totalSize: number

    // Owm methods of RygelServer-2.6.RygelServer.DTCPCleartextRequest

    getStartByte(): number
    getEndByte(): number
    getRangeLength(): number
    getTotalSize(): number

    // Class property signals of RygelServer-2.6.RygelServer.DTCPCleartextRequest

    connect(sigName: "notify::start-byte", callback: (...args: any[]) => void): number
    on(sigName: "notify::start-byte", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::start-byte", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::start-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::start-byte", ...args: any[]): void
    connect(sigName: "notify::end-byte", callback: (...args: any[]) => void): number
    on(sigName: "notify::end-byte", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::end-byte", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::end-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::end-byte", ...args: any[]): void
    connect(sigName: "notify::range-length", callback: (...args: any[]) => void): number
    on(sigName: "notify::range-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::range-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::range-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::range-length", ...args: any[]): void
    connect(sigName: "notify::total-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::total-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total-size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DTCPCleartextRequest extends HTTPSeekRequest {

    // Own properties of RygelServer-2.6.RygelServer.DTCPCleartextRequest

    static name: string
    static $gtype: GObject.GType<DTCPCleartextRequest>

    // Constructors of RygelServer-2.6.RygelServer.DTCPCleartextRequest

    constructor(config?: DTCPCleartextRequest_ConstructProps) 
    constructor(message: Soup.Message, handler: HTTPGetHandler) 
    static new(message: Soup.Message, handler: HTTPGetHandler): DTCPCleartextRequest
    _init(config?: DTCPCleartextRequest_ConstructProps): void
    static supported(message: Soup.Message, handler: HTTPGetHandler): boolean
    static requested(message: Soup.Message): boolean
}

interface DTCPCleartextResponse_ConstructProps extends HTTPResponseElement_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.DTCPCleartextResponse

    startByte?: number | null
    endByte?: number | null
    rangeLength?: number | null
    totalSize?: number | null
    encryptedLength?: number | null
}

interface DTCPCleartextResponse {

    // Own properties of RygelServer-2.6.RygelServer.DTCPCleartextResponse

    startByte: number
    endByte: number
    rangeLength: number
    totalSize: number
    encryptedLength: number

    // Owm methods of RygelServer-2.6.RygelServer.DTCPCleartextResponse

    getStartByte(): number
    getEndByte(): number
    getRangeLength(): number
    getTotalSize(): number
    getEncryptedLength(): number
    setEncryptedLength(value: number): void

    // Class property signals of RygelServer-2.6.RygelServer.DTCPCleartextResponse

    connect(sigName: "notify::start-byte", callback: (...args: any[]) => void): number
    on(sigName: "notify::start-byte", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::start-byte", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::start-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::start-byte", ...args: any[]): void
    connect(sigName: "notify::end-byte", callback: (...args: any[]) => void): number
    on(sigName: "notify::end-byte", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::end-byte", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::end-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::end-byte", ...args: any[]): void
    connect(sigName: "notify::range-length", callback: (...args: any[]) => void): number
    on(sigName: "notify::range-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::range-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::range-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::range-length", ...args: any[]): void
    connect(sigName: "notify::total-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::total-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total-size", ...args: any[]): void
    connect(sigName: "notify::encrypted-length", callback: (...args: any[]) => void): number
    on(sigName: "notify::encrypted-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::encrypted-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::encrypted-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::encrypted-length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DTCPCleartextResponse extends HTTPResponseElement {

    // Own properties of RygelServer-2.6.RygelServer.DTCPCleartextResponse

    static name: string
    static $gtype: GObject.GType<DTCPCleartextResponse>

    // Constructors of RygelServer-2.6.RygelServer.DTCPCleartextResponse

    constructor(config?: DTCPCleartextResponse_ConstructProps) 
    constructor(startByte: number, endByte: number, totalSize: number, encryptedLength: number) 
    static new(startByte: number, endByte: number, totalSize: number, encryptedLength: number): DTCPCleartextResponse
    static fromRequest(request: DTCPCleartextRequest, encryptedLength: number): DTCPCleartextResponse
    _init(config?: DTCPCleartextResponse_ConstructProps): void
}

interface DLNAAvailableSeekRangeRequest_ConstructProps extends HTTPSeekRequest_ConstructProps {
}

interface DLNAAvailableSeekRangeRequest {

    // Class property signals of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DLNAAvailableSeekRangeRequest extends HTTPSeekRequest {

    // Own properties of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeRequest

    static name: string
    static $gtype: GObject.GType<DLNAAvailableSeekRangeRequest>

    // Constructors of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeRequest

    constructor(config?: DLNAAvailableSeekRangeRequest_ConstructProps) 
    _init(config?: DLNAAvailableSeekRangeRequest_ConstructProps): void
    static supported(message: Soup.Message, handler: HTTPGetHandler): boolean
    static requested(message: Soup.Message): boolean
}

interface DLNAAvailableSeekRangeResponse_ConstructProps extends HTTPResponseElement_ConstructProps {

    // Own constructor properties of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeResponse

    mode?: number | null
    startTime?: number | null
    endTime?: number | null
    startByte?: number | null
    endByte?: number | null
    rangeLength?: number | null
}

interface DLNAAvailableSeekRangeResponse {

    // Own properties of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeResponse

    mode: number
    startTime: number
    endTime: number
    startByte: number
    endByte: number
    rangeLength: number

    // Owm methods of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeResponse

    getMode(): number
    getStartTime(): number
    getEndTime(): number
    getStartByte(): number
    getEndByte(): number
    getRangeLength(): number

    // Class property signals of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeResponse

    connect(sigName: "notify::mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::start-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::start-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::start-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::start-time", ...args: any[]): void
    connect(sigName: "notify::end-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::end-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::end-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::end-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::end-time", ...args: any[]): void
    connect(sigName: "notify::start-byte", callback: (...args: any[]) => void): number
    on(sigName: "notify::start-byte", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::start-byte", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::start-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::start-byte", ...args: any[]): void
    connect(sigName: "notify::end-byte", callback: (...args: any[]) => void): number
    on(sigName: "notify::end-byte", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::end-byte", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::end-byte", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::end-byte", ...args: any[]): void
    connect(sigName: "notify::range-length", callback: (...args: any[]) => void): number
    on(sigName: "notify::range-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::range-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::range-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::range-length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DLNAAvailableSeekRangeResponse extends HTTPResponseElement {

    // Own properties of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeResponse

    static name: string
    static $gtype: GObject.GType<DLNAAvailableSeekRangeResponse>

    // Constructors of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeResponse

    constructor(config?: DLNAAvailableSeekRangeResponse_ConstructProps) 
    constructor(mode: number, startTime: number, endTime: number, startByte: number, endByte: number) 
    static new(mode: number, startTime: number, endTime: number, startByte: number, endByte: number): DLNAAvailableSeekRangeResponse
    static timeOnly(mode: number, startTime: number, endTime: number): DLNAAvailableSeekRangeResponse
    _init(config?: DLNAAvailableSeekRangeResponse_ConstructProps): void
}

interface AudioItemClass {
}

abstract class AudioItemClass {

    // Own properties of RygelServer-2.6.RygelServer.AudioItemClass

    static name: string
}

interface AudioItemPrivate {
}

class AudioItemPrivate {

    // Own properties of RygelServer-2.6.RygelServer.AudioItemPrivate

    static name: string
}

interface ImageItemClass {
}

abstract class ImageItemClass {

    // Own properties of RygelServer-2.6.RygelServer.ImageItemClass

    static name: string
}

interface ImageItemPrivate {
}

class ImageItemPrivate {

    // Own properties of RygelServer-2.6.RygelServer.ImageItemPrivate

    static name: string
}

interface LogicalExpressionClass {
}

abstract class LogicalExpressionClass {

    // Own properties of RygelServer-2.6.RygelServer.LogicalExpressionClass

    static name: string
}

interface LogicalExpressionPrivate {
}

class LogicalExpressionPrivate {

    // Own properties of RygelServer-2.6.RygelServer.LogicalExpressionPrivate

    static name: string
}

interface MediaArtStoreClass {
}

abstract class MediaArtStoreClass {

    // Own properties of RygelServer-2.6.RygelServer.MediaArtStoreClass

    static name: string
}

interface MediaArtStorePrivate {
}

class MediaArtStorePrivate {

    // Own properties of RygelServer-2.6.RygelServer.MediaArtStorePrivate

    static name: string
}

interface MediaObjectsClass {
}

abstract class MediaObjectsClass {

    // Own properties of RygelServer-2.6.RygelServer.MediaObjectsClass

    static name: string
}

interface MediaObjectsPrivate {
}

class MediaObjectsPrivate {

    // Own properties of RygelServer-2.6.RygelServer.MediaObjectsPrivate

    static name: string
}

interface MusicItemClass {
}

abstract class MusicItemClass {

    // Own properties of RygelServer-2.6.RygelServer.MusicItemClass

    static name: string
}

interface MusicItemPrivate {
}

class MusicItemPrivate {

    // Own properties of RygelServer-2.6.RygelServer.MusicItemPrivate

    static name: string
}

interface PhotoItemClass {
}

abstract class PhotoItemClass {

    // Own properties of RygelServer-2.6.RygelServer.PhotoItemClass

    static name: string
}

interface PhotoItemPrivate {
}

class PhotoItemPrivate {

    // Own properties of RygelServer-2.6.RygelServer.PhotoItemPrivate

    static name: string
}

interface RelationalExpressionClass {
}

abstract class RelationalExpressionClass {

    // Own properties of RygelServer-2.6.RygelServer.RelationalExpressionClass

    static name: string
}

interface RelationalExpressionPrivate {
}

class RelationalExpressionPrivate {

    // Own properties of RygelServer-2.6.RygelServer.RelationalExpressionPrivate

    static name: string
}

interface SimpleContainerClass {
}

abstract class SimpleContainerClass {

    // Own properties of RygelServer-2.6.RygelServer.SimpleContainerClass

    static name: string
}

interface SimpleContainerPrivate {
}

class SimpleContainerPrivate {

    // Own properties of RygelServer-2.6.RygelServer.SimpleContainerPrivate

    static name: string
}

interface SubtitleClass {

    // Own fields of RygelServer-2.6.RygelServer.SubtitleClass

    getResource: (self: Subtitle, protocol: string, index: number) => MediaResource
}

abstract class SubtitleClass {

    // Own properties of RygelServer-2.6.RygelServer.SubtitleClass

    static name: string
}

interface SubtitlePrivate {
}

class SubtitlePrivate {

    // Own properties of RygelServer-2.6.RygelServer.SubtitlePrivate

    static name: string
}

interface ThumbnailClass {

    // Own fields of RygelServer-2.6.RygelServer.ThumbnailClass

    getResource: (self: Thumbnail, protocol: string, index: number) => MediaResource
}

abstract class ThumbnailClass {

    // Own properties of RygelServer-2.6.RygelServer.ThumbnailClass

    static name: string
}

interface ThumbnailPrivate {
}

class ThumbnailPrivate {

    // Own properties of RygelServer-2.6.RygelServer.ThumbnailPrivate

    static name: string
}

interface VideoItemClass {

    // Own fields of RygelServer-2.6.RygelServer.VideoItemClass

    addSubtitleResources: (self: VideoItem, httpServer: HTTPServer) => void
}

abstract class VideoItemClass {

    // Own properties of RygelServer-2.6.RygelServer.VideoItemClass

    static name: string
}

interface VideoItemPrivate {
}

class VideoItemPrivate {

    // Own properties of RygelServer-2.6.RygelServer.VideoItemPrivate

    static name: string
}

interface MediaContainerClass {

    // Own fields of RygelServer-2.6.RygelServer.MediaContainerClass

    getChildren: (self: MediaContainer, offset: number, maxCount: number, sortCriteria: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    getChildrenFinish: (self: MediaContainer, res: Gio.AsyncResult) => MediaObjects | null
    findObject: (self: MediaContainer, id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    findObjectFinish: (self: MediaContainer, res: Gio.AsyncResult) => MediaObject | null
}

abstract class MediaContainerClass {

    // Own properties of RygelServer-2.6.RygelServer.MediaContainerClass

    static name: string
}

interface MediaContainerPrivate {
}

class MediaContainerPrivate {

    // Own properties of RygelServer-2.6.RygelServer.MediaContainerPrivate

    static name: string
}

interface MediaItemClass {
}

abstract class MediaItemClass {

    // Own properties of RygelServer-2.6.RygelServer.MediaItemClass

    static name: string
}

interface MediaItemPrivate {
}

class MediaItemPrivate {

    // Own properties of RygelServer-2.6.RygelServer.MediaItemPrivate

    static name: string
}

interface MediaFileItemClass {

    // Own fields of RygelServer-2.6.RygelServer.MediaFileItemClass

    getPrimaryResource: (self: MediaFileItem) => MediaResource
    getExtension: (self: MediaFileItem) => string
    addEngineResources: (self: MediaFileItem, callback: Gio.AsyncReadyCallback | null) => void
    addEngineResourcesFinish: (self: MediaFileItem, res: Gio.AsyncResult) => void
    addAdditionalResources: (self: MediaFileItem, server: HTTPServer) => void
}

abstract class MediaFileItemClass {

    // Own properties of RygelServer-2.6.RygelServer.MediaFileItemClass

    static name: string
}

interface MediaFileItemPrivate {
}

class MediaFileItemPrivate {

    // Own properties of RygelServer-2.6.RygelServer.MediaFileItemPrivate

    static name: string
}

interface MediaObjectClass {

    // Own fields of RygelServer-2.6.RygelServer.MediaObjectClass

    addUri: (self: MediaObject, uri: string) => void
    serialize: (self: MediaObject, serializer: Serializer, httpServer: HTTPServer) => GUPnPAV.DIDLLiteObject | null
    createStreamSourceForResource: (self: MediaObject, request: HTTPRequest, resource: MediaResource) => DataSource | null
    applyDidlLite: (self: MediaObject, didlObject: GUPnPAV.DIDLLiteObject) => void
    compareByProperty: (self: MediaObject, mediaObject: MediaObject, property: string) => number
}

abstract class MediaObjectClass {

    // Own properties of RygelServer-2.6.RygelServer.MediaObjectClass

    static name: string
}

interface MediaObjectPrivate {
}

class MediaObjectPrivate {

    // Own properties of RygelServer-2.6.RygelServer.MediaObjectPrivate

    static name: string
}

interface MediaResourceClass {
}

abstract class MediaResourceClass {

    // Own properties of RygelServer-2.6.RygelServer.MediaResourceClass

    static name: string
}

interface MediaResourcePrivate {
}

class MediaResourcePrivate {

    // Own properties of RygelServer-2.6.RygelServer.MediaResourcePrivate

    static name: string
}

interface MediaServerPluginClass {
}

abstract class MediaServerPluginClass {

    // Own properties of RygelServer-2.6.RygelServer.MediaServerPluginClass

    static name: string
}

interface MediaServerPluginPrivate {
}

class MediaServerPluginPrivate {

    // Own properties of RygelServer-2.6.RygelServer.MediaServerPluginPrivate

    static name: string
}

interface SearchExpressionClass {

    // Own fields of RygelServer-2.6.RygelServer.SearchExpressionClass

    satisfiedBy: (self: SearchExpression, mediaObject: MediaObject) => boolean
    toString: (self: SearchExpression) => string
}

abstract class SearchExpressionClass {

    // Own properties of RygelServer-2.6.RygelServer.SearchExpressionClass

    static name: string
}

interface SearchExpressionPrivate {
}

class SearchExpressionPrivate {

    // Own properties of RygelServer-2.6.RygelServer.SearchExpressionPrivate

    static name: string
}

interface MediaServerClass {
}

abstract class MediaServerClass {

    // Own properties of RygelServer-2.6.RygelServer.MediaServerClass

    static name: string
}

interface MediaServerPrivate {
}

class MediaServerPrivate {

    // Own properties of RygelServer-2.6.RygelServer.MediaServerPrivate

    static name: string
}

interface MediaEngineClass {

    // Own fields of RygelServer-2.6.RygelServer.MediaEngineClass

    getDlnaProfiles: (self: MediaEngine) => RygelCore.DLNAProfile[]
    getResourcesForItem: (self: MediaEngine, item: MediaObject, callback: Gio.AsyncReadyCallback | null) => void
    getResourcesForItemFinish: (self: MediaEngine, res: Gio.AsyncResult) => Gee.List | null
    createDataSourceForResource: (self: MediaEngine, item: MediaObject, resource: MediaResource, replacements: GLib.HashTable) => DataSource | null
    createDataSourceForUri: (self: MediaEngine, uri: string) => DataSource | null
    getInternalProtocolSchemes: (self: MediaEngine) => string[]
}

abstract class MediaEngineClass {

    // Own properties of RygelServer-2.6.RygelServer.MediaEngineClass

    static name: string
}

interface MediaEnginePrivate {
}

class MediaEnginePrivate {

    // Own properties of RygelServer-2.6.RygelServer.MediaEnginePrivate

    static name: string
}

interface HTTPSeekRequestClass {
}

abstract class HTTPSeekRequestClass {

    // Own properties of RygelServer-2.6.RygelServer.HTTPSeekRequestClass

    static name: string
}

interface HTTPSeekRequestPrivate {
}

class HTTPSeekRequestPrivate {

    // Own properties of RygelServer-2.6.RygelServer.HTTPSeekRequestPrivate

    static name: string
}

interface PlaylistItemClass {
}

abstract class PlaylistItemClass {

    // Own properties of RygelServer-2.6.RygelServer.PlaylistItemClass

    static name: string
}

interface PlaylistItemPrivate {
}

class PlaylistItemPrivate {

    // Own properties of RygelServer-2.6.RygelServer.PlaylistItemPrivate

    static name: string
}

interface ContentDirectoryClass {
}

abstract class ContentDirectoryClass {

    // Own properties of RygelServer-2.6.RygelServer.ContentDirectoryClass

    static name: string
}

interface ContentDirectoryPrivate {
}

class ContentDirectoryPrivate {

    // Own properties of RygelServer-2.6.RygelServer.ContentDirectoryPrivate

    static name: string
}

interface HTTPByteSeekRequestClass {
}

abstract class HTTPByteSeekRequestClass {

    // Own properties of RygelServer-2.6.RygelServer.HTTPByteSeekRequestClass

    static name: string
}

interface HTTPByteSeekRequestPrivate {
}

class HTTPByteSeekRequestPrivate {

    // Own properties of RygelServer-2.6.RygelServer.HTTPByteSeekRequestPrivate

    static name: string
}

interface HTTPByteSeekResponseClass {
}

abstract class HTTPByteSeekResponseClass {

    // Own properties of RygelServer-2.6.RygelServer.HTTPByteSeekResponseClass

    static name: string
}

interface HTTPByteSeekResponsePrivate {
}

class HTTPByteSeekResponsePrivate {

    // Own properties of RygelServer-2.6.RygelServer.HTTPByteSeekResponsePrivate

    static name: string
}

interface HTTPGetHandlerClass {

    // Own fields of RygelServer-2.6.RygelServer.HTTPGetHandlerClass

    addResponseHeaders: (self: HTTPGetHandler, request: HTTPGet) => void
    getDefaultTransferMode: (self: HTTPGetHandler) => string
    supportsTransferMode: (self: HTTPGetHandler, mode: string) => boolean
    getResourceSize: (self: HTTPGetHandler) => number
    getResourceDuration: (self: HTTPGetHandler) => number
    supportsByteSeek: (self: HTTPGetHandler) => boolean
    supportsTimeSeek: (self: HTTPGetHandler) => boolean
    supportsPlayspeed: (self: HTTPGetHandler) => boolean
    renderBody: (self: HTTPGetHandler, request: HTTPGet) => HTTPResponse
}

abstract class HTTPGetHandlerClass {

    // Own properties of RygelServer-2.6.RygelServer.HTTPGetHandlerClass

    static name: string
}

interface HTTPGetHandlerPrivate {
}

class HTTPGetHandlerPrivate {

    // Own properties of RygelServer-2.6.RygelServer.HTTPGetHandlerPrivate

    static name: string
}

interface HTTPGetClass {
}

abstract class HTTPGetClass {

    // Own properties of RygelServer-2.6.RygelServer.HTTPGetClass

    static name: string
}

interface HTTPGetPrivate {
}

class HTTPGetPrivate {

    // Own properties of RygelServer-2.6.RygelServer.HTTPGetPrivate

    static name: string
}

interface HTTPItemURIClass {
}

abstract class HTTPItemURIClass {

    // Own properties of RygelServer-2.6.RygelServer.HTTPItemURIClass

    static name: string
}

interface HTTPItemURIPrivate {
}

class HTTPItemURIPrivate {

    // Own properties of RygelServer-2.6.RygelServer.HTTPItemURIPrivate

    static name: string
}

interface HTTPRequestClass {

    // Own fields of RygelServer-2.6.RygelServer.HTTPRequestClass

    handle: (self: HTTPRequest, callback: Gio.AsyncReadyCallback | null) => void
    handleFinish: (self: HTTPRequest, res: Gio.AsyncResult) => void
    findItem: (self: HTTPRequest, callback: Gio.AsyncReadyCallback | null) => void
    findItemFinish: (self: HTTPRequest, res: Gio.AsyncResult) => void
}

abstract class HTTPRequestClass {

    // Own properties of RygelServer-2.6.RygelServer.HTTPRequestClass

    static name: string
}

interface HTTPRequestPrivate {
}

class HTTPRequestPrivate {

    // Own properties of RygelServer-2.6.RygelServer.HTTPRequestPrivate

    static name: string
}

interface HTTPResponseClass {

    // Own fields of RygelServer-2.6.RygelServer.HTTPResponseClass

    end: (self: HTTPResponse, aborted: boolean, status: number) => void
}

abstract class HTTPResponseClass {

    // Own properties of RygelServer-2.6.RygelServer.HTTPResponseClass

    static name: string
}

interface HTTPResponsePrivate {
}

class HTTPResponsePrivate {

    // Own properties of RygelServer-2.6.RygelServer.HTTPResponsePrivate

    static name: string
}

interface HTTPResponseElementClass {

    // Own fields of RygelServer-2.6.RygelServer.HTTPResponseElementClass

    addResponseHeaders: (self: HTTPResponseElement, request: HTTPRequest) => void
    toString: (self: HTTPResponseElement) => string
}

abstract class HTTPResponseElementClass {

    // Own properties of RygelServer-2.6.RygelServer.HTTPResponseElementClass

    static name: string
}

interface HTTPResponseElementPrivate {
}

class HTTPResponseElementPrivate {

    // Own properties of RygelServer-2.6.RygelServer.HTTPResponseElementPrivate

    static name: string
}

interface HTTPServerClass {

    // Own fields of RygelServer-2.6.RygelServer.HTTPServerClass

    getProtocol: (self: HTTPServer) => string
    getProtocolInfo: (self: HTTPServer) => Gee.ArrayList
}

abstract class HTTPServerClass {

    // Own properties of RygelServer-2.6.RygelServer.HTTPServerClass

    static name: string
}

interface HTTPServerPrivate {
}

class HTTPServerPrivate {

    // Own properties of RygelServer-2.6.RygelServer.HTTPServerPrivate

    static name: string
}

interface HTTPTimeSeekRequestClass {
}

abstract class HTTPTimeSeekRequestClass {

    // Own properties of RygelServer-2.6.RygelServer.HTTPTimeSeekRequestClass

    static name: string
}

interface HTTPTimeSeekRequestPrivate {
}

class HTTPTimeSeekRequestPrivate {

    // Own properties of RygelServer-2.6.RygelServer.HTTPTimeSeekRequestPrivate

    static name: string
}

interface HTTPTimeSeekResponseClass {
}

abstract class HTTPTimeSeekResponseClass {

    // Own properties of RygelServer-2.6.RygelServer.HTTPTimeSeekResponseClass

    static name: string
}

interface HTTPTimeSeekResponsePrivate {
}

class HTTPTimeSeekResponsePrivate {

    // Own properties of RygelServer-2.6.RygelServer.HTTPTimeSeekResponsePrivate

    static name: string
}

interface SerializerClass {
}

abstract class SerializerClass {

    // Own properties of RygelServer-2.6.RygelServer.SerializerClass

    static name: string
}

interface SerializerPrivate {
}

class SerializerPrivate {

    // Own properties of RygelServer-2.6.RygelServer.SerializerPrivate

    static name: string
}

interface PlaySpeedClass {
}

abstract class PlaySpeedClass {

    // Own properties of RygelServer-2.6.RygelServer.PlaySpeedClass

    static name: string
}

interface PlaySpeedPrivate {
}

class PlaySpeedPrivate {

    // Own properties of RygelServer-2.6.RygelServer.PlaySpeedPrivate

    static name: string
}

interface PlaySpeedRequestClass {
}

abstract class PlaySpeedRequestClass {

    // Own properties of RygelServer-2.6.RygelServer.PlaySpeedRequestClass

    static name: string
}

interface PlaySpeedRequestPrivate {
}

class PlaySpeedRequestPrivate {

    // Own properties of RygelServer-2.6.RygelServer.PlaySpeedRequestPrivate

    static name: string
}

interface PlaySpeedResponseClass {
}

abstract class PlaySpeedResponseClass {

    // Own properties of RygelServer-2.6.RygelServer.PlaySpeedResponseClass

    static name: string
}

interface PlaySpeedResponsePrivate {
}

class PlaySpeedResponsePrivate {

    // Own properties of RygelServer-2.6.RygelServer.PlaySpeedResponsePrivate

    static name: string
}

interface DTCPCleartextRequestClass {
}

abstract class DTCPCleartextRequestClass {

    // Own properties of RygelServer-2.6.RygelServer.DTCPCleartextRequestClass

    static name: string
}

interface DTCPCleartextRequestPrivate {
}

class DTCPCleartextRequestPrivate {

    // Own properties of RygelServer-2.6.RygelServer.DTCPCleartextRequestPrivate

    static name: string
}

interface DTCPCleartextResponseClass {
}

abstract class DTCPCleartextResponseClass {

    // Own properties of RygelServer-2.6.RygelServer.DTCPCleartextResponseClass

    static name: string
}

interface DTCPCleartextResponsePrivate {
}

class DTCPCleartextResponsePrivate {

    // Own properties of RygelServer-2.6.RygelServer.DTCPCleartextResponsePrivate

    static name: string
}

interface DLNAAvailableSeekRangeRequestClass {
}

abstract class DLNAAvailableSeekRangeRequestClass {

    // Own properties of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeRequestClass

    static name: string
}

interface DLNAAvailableSeekRangeRequestPrivate {
}

class DLNAAvailableSeekRangeRequestPrivate {

    // Own properties of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeRequestPrivate

    static name: string
}

interface DLNAAvailableSeekRangeResponseClass {
}

abstract class DLNAAvailableSeekRangeResponseClass {

    // Own properties of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeResponseClass

    static name: string
}

interface DLNAAvailableSeekRangeResponsePrivate {
}

class DLNAAvailableSeekRangeResponsePrivate {

    // Own properties of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeResponsePrivate

    static name: string
}

interface SearchableContainerIface {

    // Own fields of RygelServer-2.6.RygelServer.SearchableContainerIface

    search: (self: SearchableContainer, expression: SearchExpression | null, offset: number, maxCount: number, sortCriteria: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    searchFinish: (self: SearchableContainer, res: Gio.AsyncResult) => [ /* returnType */ MediaObjects | null, /* totalMatches */ number ]
    getSearchClasses: (self: SearchableContainer) => Gee.ArrayList
    setSearchClasses: (self: SearchableContainer, value: Gee.ArrayList) => void
}

abstract class SearchableContainerIface {

    // Own properties of RygelServer-2.6.RygelServer.SearchableContainerIface

    static name: string
}

interface TrackableContainerIface {

    // Own fields of RygelServer-2.6.RygelServer.TrackableContainerIface

    addChild: (self: TrackableContainer, object: MediaObject, callback: Gio.AsyncReadyCallback | null) => void
    addChildFinish: (self: TrackableContainer, res: Gio.AsyncResult) => void
    removeChild: (self: TrackableContainer, object: MediaObject, callback: Gio.AsyncReadyCallback | null) => void
    removeChildFinish: (self: TrackableContainer, res: Gio.AsyncResult) => void
    getServiceResetToken: (self: TrackableContainer) => string
    setServiceResetToken: (self: TrackableContainer, token: string) => void
    getSystemUpdateId: (self: TrackableContainer) => number
}

abstract class TrackableContainerIface {

    // Own properties of RygelServer-2.6.RygelServer.TrackableContainerIface

    static name: string
}

interface TrackableItemIface {
}

abstract class TrackableItemIface {

    // Own properties of RygelServer-2.6.RygelServer.TrackableItemIface

    static name: string
}

interface VisualItemIface {

    // Own fields of RygelServer-2.6.RygelServer.VisualItemIface

    getWidth: (self: VisualItem) => number
    setWidth: (self: VisualItem, value: number) => void
    getHeight: (self: VisualItem) => number
    setHeight: (self: VisualItem, value: number) => void
    getColorDepth: (self: VisualItem) => number
    setColorDepth: (self: VisualItem, value: number) => void
    getThumbnails: (self: VisualItem) => Gee.ArrayList
    setThumbnails: (self: VisualItem, value: Gee.ArrayList) => void
}

abstract class VisualItemIface {

    // Own properties of RygelServer-2.6.RygelServer.VisualItemIface

    static name: string
}

interface WritableContainerIface {

    // Own fields of RygelServer-2.6.RygelServer.WritableContainerIface

    addItem: (self: WritableContainer, item: MediaFileItem, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    addItemFinish: (self: WritableContainer, res: Gio.AsyncResult) => void
    addContainer: (self: WritableContainer, container: MediaContainer, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    addContainerFinish: (self: WritableContainer, res: Gio.AsyncResult) => void
    addReference: (self: WritableContainer, object: MediaObject, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    addReferenceFinish: (self: WritableContainer, res: Gio.AsyncResult) => string
    removeItem: (self: WritableContainer, id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    removeItemFinish: (self: WritableContainer, res: Gio.AsyncResult) => void
    removeContainer: (self: WritableContainer, id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    removeContainerFinish: (self: WritableContainer, res: Gio.AsyncResult) => void
    getCreateClasses: (self: WritableContainer) => Gee.ArrayList
    setCreateClasses: (self: WritableContainer, value: Gee.ArrayList) => void
}

abstract class WritableContainerIface {

    // Own properties of RygelServer-2.6.RygelServer.WritableContainerIface

    static name: string
}

interface DataSourceIface {

    // Own fields of RygelServer-2.6.RygelServer.DataSourceIface

    preroll: (self: DataSource, seek: HTTPSeekRequest | null, playspeed: PlaySpeedRequest | null) => Gee.List | null
    start: (self: DataSource) => void
    freeze: (self: DataSource) => void
    thaw: (self: DataSource) => void
    stop: (self: DataSource) => void
}

abstract class DataSourceIface {

    // Own properties of RygelServer-2.6.RygelServer.DataSourceIface

    static name: string
}

interface UpdatableObjectIface {

    // Own fields of RygelServer-2.6.RygelServer.UpdatableObjectIface

    commit: (self: UpdatableObject, callback: Gio.AsyncReadyCallback | null) => void
    commitFinish: (self: UpdatableObject, res: Gio.AsyncResult) => void
}

abstract class UpdatableObjectIface {

    // Own properties of RygelServer-2.6.RygelServer.UpdatableObjectIface

    static name: string
}

}
export default RygelServer;