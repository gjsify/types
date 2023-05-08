
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * RygelServer-2.8
 */

import type RygelCore from '@girs/rygelcore-2.8';
import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GUPnP from '@girs/gupnp-1.6';
import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-3.0';
import type GSSDP from '@girs/gssdp-1.6';
import type GUPnPAV from '@girs/gupnpav-1.0';

export enum LogicalOperator {
    AND,
    OR,
}
export enum ObjectEventType {
    ADDED,
    MODIFIED,
    DELETED,
}
export enum SerializerType {
    GENERIC_DIDL,
    DIDL_S,
    M3UEXT,
}
export enum WritableContainerError {
    NOT_IMPLEMENTED,
}
export enum MediaEngineError {
    NOT_FOUND,
}
export enum HTTPSeekRequestError {
    INVALID_RANGE,
    BAD_REQUEST,
    OUT_OF_RANGE,
}
export enum DataSourceError {
    GENERAL,
    SEEK_FAILED,
    PLAYSPEED_FAILED,
}
export enum HTTPRequestError {
    UNACCEPTABLE,
    BAD_REQUEST,
    NOT_FOUND,
    INTERNAL_SERVER_ERROR,
}
export enum PlaySpeedError {
    INVALID_SPEED_FORMAT,
    SPEED_NOT_PRESENT,
}
export module SearchableContainer {

    // Constructor properties interface

    export interface ConstructorProperties extends MediaContainer.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.SearchableContainer

        searchClasses?: Gee.ArrayList | null
    }

}

export interface SearchableContainer extends MediaContainer {

    // Own properties of RygelServer-2.8.RygelServer.SearchableContainer

    searchClasses: Gee.ArrayList
    __gtype__: number

    // Owm methods of RygelServer-2.8.RygelServer.SearchableContainer

    // Has conflict: search(expression: SearchExpression | null, offset: number, maxCount: number, sortCriteria: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: searchFinish(res: Gio.AsyncResult): [ /* returnType */ MediaObjects | null, /* totalMatches */ number ]
    simpleSearch(expression: SearchExpression | null, offset: number, maxCount: number, sortCriteria: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    simpleSearchFinish(res: Gio.AsyncResult): [ /* returnType */ MediaObjects | null, /* totalMatches */ number ]
    findObject(id: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Overloads of findObject

    findObject(id: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    findObjectFinish(res: Gio.AsyncResult): MediaObject | null

    // Overloads of findObjectFinish

    findObjectFinish(res: Gio.AsyncResult): MediaObject | null
    // Has conflict: getSearchClasses(): Gee.ArrayList
    // Has conflict: setSearchClasses(value: Gee.ArrayList): void

    // Own virtual methods of RygelServer-2.8.RygelServer.SearchableContainer

    search(expression: SearchExpression | null, offset: number, maxCount: number, sortCriteria: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    searchFinish(res: Gio.AsyncResult): [ /* returnType */ MediaObjects | null, /* totalMatches */ number ]
    getSearchClasses(): Gee.ArrayList
    setSearchClasses(value: Gee.ArrayList): void

    // Class property signals of RygelServer-2.8.RygelServer.SearchableContainer

    connect(sigName: "notify::search-classes", callback: (...args: any[]) => void): number
    on(sigName: "notify::search-classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::search-classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::search-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::search-classes", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class SearchableContainer extends GObject.Object {

    // Own properties of RygelServer-2.8.RygelServer.SearchableContainer

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.SearchableContainer

    constructor(config?: SearchableContainer.ConstructorProperties) 
    _init(config?: SearchableContainer.ConstructorProperties): void
}

export module TrackableContainer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `child-added`
     */
    export interface ChildAddedSignalCallback {
        (object: MediaObject): void
    }

    /**
     * Signal callback interface for `child-removed`
     */
    export interface ChildRemovedSignalCallback {
        (object: MediaObject): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends MediaContainer.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface TrackableContainer extends MediaContainer {

    // Own properties of RygelServer-2.8.RygelServer.TrackableContainer

    __gtype__: number

    // Owm methods of RygelServer-2.8.RygelServer.TrackableContainer

    clear(callback: Gio.AsyncReadyCallback | null): void
    clearFinish(res: Gio.AsyncResult): void
    // Has conflict: addChild(object: MediaObject, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: addChildFinish(res: Gio.AsyncResult): void
    addChildTracked(object: MediaObject, callback: Gio.AsyncReadyCallback | null): void
    addChildTrackedFinish(res: Gio.AsyncResult): void
    // Has conflict: removeChild(object: MediaObject, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: removeChildFinish(res: Gio.AsyncResult): void
    removeChildTracked(object: MediaObject, callback: Gio.AsyncReadyCallback | null): void
    removeChildTrackedFinish(res: Gio.AsyncResult): void
    // Has conflict: getServiceResetToken(): string | null
    // Has conflict: setServiceResetToken(token: string | null): void
    // Has conflict: getSystemUpdateId(): number

    // Own virtual methods of RygelServer-2.8.RygelServer.TrackableContainer

    addChild(object: MediaObject, callback: Gio.AsyncReadyCallback | null): void
    addChildFinish(res: Gio.AsyncResult): void
    removeChild(object: MediaObject, callback: Gio.AsyncReadyCallback | null): void
    removeChildFinish(res: Gio.AsyncResult): void
    getServiceResetToken(): string | null
    setServiceResetToken(token: string | null): void
    getSystemUpdateId(): number

    // Own signals of RygelServer-2.8.RygelServer.TrackableContainer

    connect(sigName: "child-added", callback: TrackableContainer.ChildAddedSignalCallback): number
    on(sigName: "child-added", callback: TrackableContainer.ChildAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: TrackableContainer.ChildAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: TrackableContainer.ChildAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "child-added", ...args: any[]): void
    connect(sigName: "child-removed", callback: TrackableContainer.ChildRemovedSignalCallback): number
    on(sigName: "child-removed", callback: TrackableContainer.ChildRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: TrackableContainer.ChildRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: TrackableContainer.ChildRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "child-removed", ...args: any[]): void

    // Class property signals of RygelServer-2.8.RygelServer.TrackableContainer

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class TrackableContainer extends GObject.Object {

    // Own properties of RygelServer-2.8.RygelServer.TrackableContainer

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.TrackableContainer

    constructor(config?: TrackableContainer.ConstructorProperties) 
    _init(config?: TrackableContainer.ConstructorProperties): void
}

export module TrackableItem {

    // Constructor properties interface

    export interface ConstructorProperties extends MediaItem.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface TrackableItem extends MediaItem {

    // Own properties of RygelServer-2.8.RygelServer.TrackableItem

    __gtype__: number

    // Owm methods of RygelServer-2.8.RygelServer.TrackableItem

    changed(): void

    // Class property signals of RygelServer-2.8.RygelServer.TrackableItem

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class TrackableItem extends GObject.Object {

    // Own properties of RygelServer-2.8.RygelServer.TrackableItem

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.TrackableItem

    constructor(config?: TrackableItem.ConstructorProperties) 
    _init(config?: TrackableItem.ConstructorProperties): void
}

export module VisualItem {

    // Constructor properties interface

    export interface ConstructorProperties extends MediaFileItem.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.VisualItem

        width?: number | null
        height?: number | null
        colorDepth?: number | null
        thumbnails?: Gee.ArrayList | null
    }

}

export interface VisualItem extends MediaFileItem {

    // Own properties of RygelServer-2.8.RygelServer.VisualItem

    width: number
    height: number
    colorDepth: number
    thumbnails: Gee.ArrayList
    __gtype__: number

    // Owm methods of RygelServer-2.8.RygelServer.VisualItem

    // Has conflict: getWidth(): number
    // Has conflict: setWidth(value: number): void
    // Has conflict: getHeight(): number
    // Has conflict: setHeight(value: number): void
    // Has conflict: getColorDepth(): number
    // Has conflict: setColorDepth(value: number): void
    // Has conflict: getThumbnails(): Gee.ArrayList
    // Has conflict: setThumbnails(value: Gee.ArrayList): void

    // Own virtual methods of RygelServer-2.8.RygelServer.VisualItem

    getWidth(): number
    setWidth(value: number): void
    getHeight(): number
    setHeight(value: number): void
    getColorDepth(): number
    setColorDepth(value: number): void
    getThumbnails(): Gee.ArrayList
    setThumbnails(value: Gee.ArrayList): void

    // Class property signals of RygelServer-2.8.RygelServer.VisualItem

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class VisualItem extends GObject.Object {

    // Own properties of RygelServer-2.8.RygelServer.VisualItem

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.VisualItem

    constructor(config?: VisualItem.ConstructorProperties) 
    _init(config?: VisualItem.ConstructorProperties): void
}

export module WritableContainer {

    // Constructor properties interface

    export interface ConstructorProperties extends MediaContainer.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.WritableContainer

        createClasses?: Gee.ArrayList | null
    }

}

export interface WritableContainer extends MediaContainer {

    // Own properties of RygelServer-2.8.RygelServer.WritableContainer

    createClasses: Gee.ArrayList
    __gtype__: number

    // Owm methods of RygelServer-2.8.RygelServer.WritableContainer

    canCreate(upnpClass: string | null): boolean
    // Has conflict: addItem(item: MediaFileItem, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: addItemFinish(res: Gio.AsyncResult): void
    // Has conflict: addContainer(container: MediaContainer, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: addContainerFinish(res: Gio.AsyncResult): void
    // Has conflict: addReference(object: MediaObject, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: addReferenceFinish(res: Gio.AsyncResult): string | null
    // Has conflict: removeItem(id: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: removeItemFinish(res: Gio.AsyncResult): void
    // Has conflict: removeContainer(id: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: removeContainerFinish(res: Gio.AsyncResult): void
    // Has conflict: getCreateClasses(): Gee.ArrayList
    // Has conflict: setCreateClasses(value: Gee.ArrayList): void

    // Own virtual methods of RygelServer-2.8.RygelServer.WritableContainer

    addItem(item: MediaFileItem, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    addItemFinish(res: Gio.AsyncResult): void
    addContainer(container: MediaContainer, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    addContainerFinish(res: Gio.AsyncResult): void
    addReference(object: MediaObject, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    addReferenceFinish(res: Gio.AsyncResult): string | null
    removeItem(id: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    removeItemFinish(res: Gio.AsyncResult): void
    removeContainer(id: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    removeContainerFinish(res: Gio.AsyncResult): void
    getCreateClasses(): Gee.ArrayList
    setCreateClasses(value: Gee.ArrayList): void

    // Class property signals of RygelServer-2.8.RygelServer.WritableContainer

    connect(sigName: "notify::create-classes", callback: (...args: any[]) => void): number
    on(sigName: "notify::create-classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::create-classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::create-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::create-classes", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class WritableContainer extends GObject.Object {

    // Own properties of RygelServer-2.8.RygelServer.WritableContainer

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.WritableContainer

    constructor(config?: WritableContainer.ConstructorProperties) 
    _init(config?: WritableContainer.ConstructorProperties): void
}

export module DataSource {

    // Signal callback interfaces

    /**
     * Signal callback interface for `data-available`
     */
    export interface DataAvailableSignalCallback {
        (data: Uint8Array): void
    }

    /**
     * Signal callback interface for `done`
     */
    export interface DoneSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `error`
     */
    export interface ErrorSignalCallback {
        (error: GLib.Error): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DataSource extends GObject.Object {

    // Own properties of RygelServer-2.8.RygelServer.DataSource

    __gtype__: number

    // Owm methods of RygelServer-2.8.RygelServer.DataSource

    // Has conflict: preroll(seek: HTTPSeekRequest | null, playspeed: PlaySpeedRequest | null): Gee.List | null
    // Has conflict: start(): void
    // Has conflict: freeze(): void
    // Has conflict: thaw(): void
    // Has conflict: stop(): void

    // Own virtual methods of RygelServer-2.8.RygelServer.DataSource

    preroll(seek: HTTPSeekRequest | null, playspeed: PlaySpeedRequest | null): Gee.List | null
    start(): void
    freeze(): void
    thaw(): void
    stop(): void

    // Own signals of RygelServer-2.8.RygelServer.DataSource

    connect(sigName: "data-available", callback: DataSource.DataAvailableSignalCallback): number
    on(sigName: "data-available", callback: DataSource.DataAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "data-available", callback: DataSource.DataAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "data-available", callback: DataSource.DataAvailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "data-available", ...args: any[]): void
    connect(sigName: "done", callback: DataSource.DoneSignalCallback): number
    on(sigName: "done", callback: DataSource.DoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "done", callback: DataSource.DoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "done", callback: DataSource.DoneSignalCallback): NodeJS.EventEmitter
    emit(sigName: "done", ...args: any[]): void
    connect(sigName: "error", callback: DataSource.ErrorSignalCallback): number
    on(sigName: "error", callback: DataSource.ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: DataSource.ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: DataSource.ErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "error", ...args: any[]): void

    // Class property signals of RygelServer-2.8.RygelServer.DataSource

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
}

export class DataSource {

    // Own properties of RygelServer-2.8.RygelServer.DataSource

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.DataSource

    constructor(config?: DataSource.ConstructorProperties) 
    _init(config?: DataSource.ConstructorProperties): void
}

export module UpdatableObject {

    // Constructor properties interface

    export interface ConstructorProperties extends MediaObject.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface UpdatableObject extends MediaObject {

    // Own properties of RygelServer-2.8.RygelServer.UpdatableObject

    __gtype__: number

    // Owm methods of RygelServer-2.8.RygelServer.UpdatableObject

    // Has conflict: commit(callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: commitFinish(res: Gio.AsyncResult): void

    // Own virtual methods of RygelServer-2.8.RygelServer.UpdatableObject

    commit(callback: Gio.AsyncReadyCallback | null): void
    commitFinish(res: Gio.AsyncResult): void

    // Class property signals of RygelServer-2.8.RygelServer.UpdatableObject

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class UpdatableObject extends GObject.Object {

    // Own properties of RygelServer-2.8.RygelServer.UpdatableObject

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.UpdatableObject

    constructor(config?: UpdatableObject.ConstructorProperties) 
    _init(config?: UpdatableObject.ConstructorProperties): void
}

export module AudioItem {

    // Constructor properties interface

    export interface ConstructorProperties extends MediaFileItem.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.AudioItem

        duration?: number | null
        bitrate?: number | null
        sampleFreq?: number | null
        bitsPerSample?: number | null
        channels?: number | null
        album?: string | null
    }

}

export interface AudioItem {

    // Own properties of RygelServer-2.8.RygelServer.AudioItem

    duration: number
    bitrate: number
    sampleFreq: number
    bitsPerSample: number
    channels: number
    album: string | null
    __gtype__: number

    // Owm methods of RygelServer-2.8.RygelServer.AudioItem

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
    getAlbum(): string | null
    setAlbum(value: string | null): void

    // Class property signals of RygelServer-2.8.RygelServer.AudioItem

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class AudioItem extends MediaFileItem {

    // Own properties of RygelServer-2.8.RygelServer.AudioItem

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.AudioItem

    constructor(config?: AudioItem.ConstructorProperties) 
    constructor(id: string | null, parent: MediaContainer, title: string | null, upnpClass: string | null) 
    static new(id: string | null, parent: MediaContainer, title: string | null, upnpClass: string | null): AudioItem
    _init(config?: AudioItem.ConstructorProperties): void
}

export module ImageItem {

    // Constructor properties interface

    export interface ConstructorProperties extends VisualItem.ConstructorProperties, MediaFileItem.ConstructorProperties {
    }

}

export interface ImageItem extends VisualItem {

    // Own properties of RygelServer-2.8.RygelServer.ImageItem

    __gtype__: number

    // Class property signals of RygelServer-2.8.RygelServer.ImageItem

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class ImageItem extends MediaFileItem {

    // Own properties of RygelServer-2.8.RygelServer.ImageItem

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.ImageItem

    constructor(config?: ImageItem.ConstructorProperties) 
    constructor(id: string | null, parent: MediaContainer, title: string | null, upnpClass: string | null) 
    static new(id: string | null, parent: MediaContainer, title: string | null, upnpClass: string | null): ImageItem
    _init(config?: ImageItem.ConstructorProperties): void
}

export interface LogicalExpression {
}

export class LogicalExpression extends SearchExpression {

    // Own properties of RygelServer-2.8.RygelServer.LogicalExpression

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.LogicalExpression

    constructor() 
    static new(): LogicalExpression
}

export module MediaArtStore {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MediaArtStore {

    // Own properties of RygelServer-2.8.RygelServer.MediaArtStore

    __gtype__: number

    // Owm methods of RygelServer-2.8.RygelServer.MediaArtStore

    lookupMediaArt(item: MusicItem): Thumbnail | null
    add(item: MusicItem, file: Gio.File, data: Uint8Array, mime: string | null): void
    searchMediaArtForFile(item: MusicItem, file: Gio.File): void

    // Class property signals of RygelServer-2.8.RygelServer.MediaArtStore

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
}

export class MediaArtStore extends GObject.Object {

    // Own properties of RygelServer-2.8.RygelServer.MediaArtStore

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.MediaArtStore

    constructor(config?: MediaArtStore.ConstructorProperties) 
    _init(config?: MediaArtStore.ConstructorProperties): void
    static getDefault(): MediaArtStore | null
}

export module MediaObjects {

    // Constructor properties interface

    export interface ConstructorProperties extends Gee.ArrayList.ConstructorProperties {
    }

}

export interface MediaObjects {

    // Own properties of RygelServer-2.8.RygelServer.MediaObjects

    __gtype__: number

    // Conflicting properties

    readOnlyView: any
    size: any

    // Owm methods of RygelServer-2.8.RygelServer.MediaObjects

    sortByCriteria(sortCriteria: string | null): void

    // Conflicting methods

    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): any | null

    // Overloads of get

    get(index: number): any | null
    get(index: number): any | null
    set(index: number, item: any | null): void

    // Overloads of set

    set(index: number, item: any | null): void
    set(index: number, item: any | null): void
    indexOf(item: any | null): number

    // Overloads of indexOf

    indexOf(item: any | null): number
    indexOf(item: any | null): number
    insert(index: number, item: any | null): void

    // Overloads of insert

    insert(index: number, item: any | null): void
    insert(index: number, item: any | null): void
    removeAt(index: number): any | null

    // Overloads of removeAt

    removeAt(index: number): any | null
    removeAt(index: number): any | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: any | null): boolean

    // Overloads of contains

    contains(item: any | null): boolean
    contains(item: any | null): boolean
    add(item: any | null): boolean

    // Overloads of add

    add(item: any | null): boolean
    add(item: any | null): boolean
    remove(item: any | null): boolean

    // Overloads of remove

    remove(item: any | null): boolean
    remove(item: any | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of RygelServer-2.8.RygelServer.MediaObjects

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class MediaObjects extends Gee.ArrayList {

    // Own properties of RygelServer-2.8.RygelServer.MediaObjects

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.MediaObjects

    constructor(config?: MediaObjects.ConstructorProperties) 
    constructor() 
    static new(): MediaObjects

    // Overloads of new

    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: MediaObjects.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module MusicItem {

    // Constructor properties interface

    export interface ConstructorProperties extends AudioItem.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.MusicItem

        trackNumber?: number | null
        albumArt?: Thumbnail | null
    }

}

export interface MusicItem {

    // Own properties of RygelServer-2.8.RygelServer.MusicItem

    trackNumber: number
    albumArt: Thumbnail
    __gtype__: number

    // Owm methods of RygelServer-2.8.RygelServer.MusicItem

    lookupAlbumArt(): void
    getTrackNumber(): number
    setTrackNumber(value: number): void
    getAlbumArt(): Thumbnail
    setAlbumArt(value: Thumbnail): void

    // Class property signals of RygelServer-2.8.RygelServer.MusicItem

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class MusicItem extends AudioItem {

    // Own properties of RygelServer-2.8.RygelServer.MusicItem

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.MusicItem

    constructor(config?: MusicItem.ConstructorProperties) 
    constructor(id: string | null, parent: MediaContainer, title: string | null, upnpClass: string | null) 
    static new(id: string | null, parent: MediaContainer, title: string | null, upnpClass: string | null): MusicItem

    // Overloads of new

    static new(id: string | null, parent: MediaContainer, title: string | null, upnpClass: string | null): AudioItem
    _init(config?: MusicItem.ConstructorProperties): void
}

export module PhotoItem {

    // Constructor properties interface

    export interface ConstructorProperties extends ImageItem.ConstructorProperties {
    }

}

export interface PhotoItem {

    // Own properties of RygelServer-2.8.RygelServer.PhotoItem

    __gtype__: number

    // Class property signals of RygelServer-2.8.RygelServer.PhotoItem

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class PhotoItem extends ImageItem {

    // Own properties of RygelServer-2.8.RygelServer.PhotoItem

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.PhotoItem

    constructor(config?: PhotoItem.ConstructorProperties) 
    constructor(id: string | null, parent: MediaContainer, title: string | null, upnpClass: string | null) 
    static new(id: string | null, parent: MediaContainer, title: string | null, upnpClass: string | null): PhotoItem

    // Overloads of new

    static new(id: string | null, parent: MediaContainer, title: string | null, upnpClass: string | null): ImageItem
    _init(config?: PhotoItem.ConstructorProperties): void
}

export interface RelationalExpression {

    // Owm methods of RygelServer-2.8.RygelServer.RelationalExpression

    compareString(str: string | null): boolean
    compareInt(integer: number): boolean
    compareUint(integer: number): boolean
}

export class RelationalExpression extends SearchExpression {

    // Own properties of RygelServer-2.8.RygelServer.RelationalExpression

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.RelationalExpression

    constructor() 
    static new(): RelationalExpression
}

export module SimpleContainer {

    // Constructor properties interface

    export interface ConstructorProperties extends SearchableContainer.ConstructorProperties, MediaContainer.ConstructorProperties {
    }

}

export interface SimpleContainer extends SearchableContainer {

    // Own properties of RygelServer-2.8.RygelServer.SimpleContainer

    __gtype__: number

    // Own fields of RygelServer-2.8.RygelServer.SimpleContainer

    children: MediaObjects

    // Owm methods of RygelServer-2.8.RygelServer.SimpleContainer

    addChildItem(child: MediaItem): void
    getAllChildren(): MediaObjects
    addChildContainer(child: MediaContainer): void
    removeChild(child: MediaObject): void
    clear(): void
    isChildIdUnique(childId: string | null): boolean

    // Conflicting methods

    findObject(id: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Overloads of findObject

    findObject(id: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    findObject(id: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    findObjectFinish(res: Gio.AsyncResult): MediaObject | null

    // Overloads of findObjectFinish

    findObjectFinish(res: Gio.AsyncResult): MediaObject | null
    findObjectFinish(res: Gio.AsyncResult): MediaObject | null

    // Class property signals of RygelServer-2.8.RygelServer.SimpleContainer

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class SimpleContainer extends MediaContainer {

    // Own properties of RygelServer-2.8.RygelServer.SimpleContainer

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.SimpleContainer

    constructor(config?: SimpleContainer.ConstructorProperties) 
    constructor(id: string | null, parent: MediaContainer | null, title: string | null) 
    static new(id: string | null, parent: MediaContainer | null, title: string | null): SimpleContainer
    static root(title: string | null): SimpleContainer
    _init(config?: SimpleContainer.ConstructorProperties): void
}

export interface Subtitle {

    // Own fields of RygelServer-2.8.RygelServer.Subtitle

    refCount: number
    uri: string | null
    mimeType: string | null
    captionType: string | null
    fileExtension: string | null
    size: number

    // Owm methods of RygelServer-2.8.RygelServer.Subtitle

    // Has conflict: getResource(protocol: string | null, index: number): MediaResource

    // Own virtual methods of RygelServer-2.8.RygelServer.Subtitle

    getResource(protocol: string | null, index: number): MediaResource
}

export class Subtitle {

    // Own properties of RygelServer-2.8.RygelServer.Subtitle

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.Subtitle

    constructor(mimeType: string | null, captionType: string | null, fileExtension: string | null) 
    static new(mimeType: string | null, captionType: string | null, fileExtension: string | null): Subtitle
}

export interface Thumbnail {

    // Own fields of RygelServer-2.8.RygelServer.Thumbnail

    dlnaProfile: string | null

    // Owm methods of RygelServer-2.8.RygelServer.Thumbnail

    // Has conflict: getResource(protocol: string | null, index: number): MediaResource

    // Own virtual methods of RygelServer-2.8.RygelServer.Thumbnail

    getResource(protocol: string | null, index: number): MediaResource
}

export class Thumbnail extends RygelCore.IconInfo {

    // Own properties of RygelServer-2.8.RygelServer.Thumbnail

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.Thumbnail

    constructor(mimeType: string | null, dlnaProfile: string | null, fileExtension: string | null) 
    static new(mimeType: string | null, dlnaProfile: string | null, fileExtension: string | null): Thumbnail

    // Overloads of new

    static new(mimeType: string | null, fileExtension: string | null): RygelCore.IconInfo
}

export module VideoItem {

    // Constructor properties interface

    export interface ConstructorProperties extends VisualItem.ConstructorProperties, AudioItem.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.VideoItem

        author?: string | null
        subtitles?: Gee.ArrayList | null
    }

}

export interface VideoItem extends VisualItem {

    // Own properties of RygelServer-2.8.RygelServer.VideoItem

    author: string | null
    subtitles: Gee.ArrayList
    __gtype__: number

    // Owm methods of RygelServer-2.8.RygelServer.VideoItem

    // Has conflict: addSubtitleResources(httpServer: HTTPServer): void
    getAuthor(): string | null
    setAuthor(value: string | null): void
    getSubtitles(): Gee.ArrayList
    setSubtitles(value: Gee.ArrayList): void

    // Own virtual methods of RygelServer-2.8.RygelServer.VideoItem

    addSubtitleResources(httpServer: HTTPServer): void

    // Class property signals of RygelServer-2.8.RygelServer.VideoItem

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class VideoItem extends AudioItem {

    // Own properties of RygelServer-2.8.RygelServer.VideoItem

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.VideoItem

    constructor(config?: VideoItem.ConstructorProperties) 
    constructor(id: string | null, parent: MediaContainer, title: string | null, upnpClass: string | null) 
    static new(id: string | null, parent: MediaContainer, title: string | null, upnpClass: string | null): VideoItem

    // Overloads of new

    static new(id: string | null, parent: MediaContainer, title: string | null, upnpClass: string | null): AudioItem
    _init(config?: VideoItem.ConstructorProperties): void
}

export module MediaContainer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `container-updated`
     */
    export interface ContainerUpdatedSignalCallback {
        (container: MediaContainer, object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean): void
    }

    /**
     * Signal callback interface for `sub-tree-updates-finished`
     */
    export interface SubTreeUpdatesFinishedSignalCallback {
        (subTreeRoot: MediaObject): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends MediaObject.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.MediaContainer

        childCount?: number | null
        emptyChildCount?: number | null
        createModeEnabled?: boolean | null
        sortCriteria?: string | null
    }

}

export interface MediaContainer {

    // Own properties of RygelServer-2.8.RygelServer.MediaContainer

    childCount: number
    emptyChildCount: number
    readonly allChildCount: number
    createModeEnabled: boolean
    sortCriteria: string | null
    __gtype__: number

    // Own fields of RygelServer-2.8.RygelServer.MediaContainer

    updateId: number
    storageUsed: number
    totalDeletedChildCount: number

    // Owm methods of RygelServer-2.8.RygelServer.MediaContainer

    // Has conflict: getChildren(offset: number, maxCount: number, sortCriteria: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: getChildrenFinish(res: Gio.AsyncResult): MediaObjects | null
    // Has conflict: findObject(id: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: findObjectFinish(res: Gio.AsyncResult): MediaObject | null
    updated(object: MediaObject | null, eventType: ObjectEventType, subTreeUpdate: boolean): void
    getChildCount(): number
    setChildCount(value: number): void
    getEmptyChildCount(): number
    setEmptyChildCount(value: number): void
    getAllChildCount(): number
    getCreateModeEnabled(): boolean
    setCreateModeEnabled(value: boolean): void
    getSortCriteria(): string | null
    setSortCriteria(value: string | null): void

    // Own virtual methods of RygelServer-2.8.RygelServer.MediaContainer

    getChildren(offset: number, maxCount: number, sortCriteria: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getChildrenFinish(res: Gio.AsyncResult): MediaObjects | null
    findObject(id: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    findObjectFinish(res: Gio.AsyncResult): MediaObject | null

    // Own signals of RygelServer-2.8.RygelServer.MediaContainer

    connect(sigName: "container-updated", callback: MediaContainer.ContainerUpdatedSignalCallback): number
    on(sigName: "container-updated", callback: MediaContainer.ContainerUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "container-updated", callback: MediaContainer.ContainerUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "container-updated", callback: MediaContainer.ContainerUpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "container-updated", object: MediaObject, eventType: ObjectEventType, subTreeUpdate: boolean, ...args: any[]): void
    connect(sigName: "sub-tree-updates-finished", callback: MediaContainer.SubTreeUpdatesFinishedSignalCallback): number
    on(sigName: "sub-tree-updates-finished", callback: MediaContainer.SubTreeUpdatesFinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sub-tree-updates-finished", callback: MediaContainer.SubTreeUpdatesFinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sub-tree-updates-finished", callback: MediaContainer.SubTreeUpdatesFinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "sub-tree-updates-finished", ...args: any[]): void

    // Class property signals of RygelServer-2.8.RygelServer.MediaContainer

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class MediaContainer extends MediaObject {

    // Own properties of RygelServer-2.8.RygelServer.MediaContainer

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.MediaContainer

    constructor(config?: MediaContainer.ConstructorProperties) 
    _init(config?: MediaContainer.ConstructorProperties): void
    static equalFunc(a: MediaContainer, b: MediaContainer): boolean
}

export module MediaItem {

    // Constructor properties interface

    export interface ConstructorProperties extends MediaObject.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.MediaItem

        description?: string | null
    }

}

export interface MediaItem {

    // Own properties of RygelServer-2.8.RygelServer.MediaItem

    description: string | null
    __gtype__: number

    // Owm methods of RygelServer-2.8.RygelServer.MediaItem

    getDescription(): string | null
    setDescription(value: string | null): void

    // Class property signals of RygelServer-2.8.RygelServer.MediaItem

    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class MediaItem extends MediaObject {

    // Own properties of RygelServer-2.8.RygelServer.MediaItem

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.MediaItem

    constructor(config?: MediaItem.ConstructorProperties) 
    _init(config?: MediaItem.ConstructorProperties): void
}

export module MediaFileItem {

    // Constructor properties interface

    export interface ConstructorProperties extends MediaItem.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.MediaFileItem

        mimeType?: string | null
        dlnaProfile?: string | null
        size?: number | null
        placeHolder?: boolean | null
    }

}

export interface MediaFileItem {

    // Own properties of RygelServer-2.8.RygelServer.MediaFileItem

    mimeType: string | null
    dlnaProfile: string | null
    size: number
    placeHolder: boolean
    __gtype__: number

    // Own fields of RygelServer-2.8.RygelServer.MediaFileItem

    rygelMediaFileItemAddressRegex: GLib.Regex
    rygelMediaFileItemMimeToExt: Gee.HashMap

    // Owm methods of RygelServer-2.8.RygelServer.MediaFileItem

    // Has conflict: getPrimaryResource(): MediaResource
    // Has conflict: getExtension(): string | null
    extFromMimeType(mimeType: string | null): string | null
    // Has conflict: addEngineResources(callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: addEngineResourcesFinish(res: Gio.AsyncResult): void
    // Has conflict: addAdditionalResources(server: HTTPServer): void
    getMimeType(): string | null
    setMimeType(value: string | null): void
    getDlnaProfile(): string | null
    setDlnaProfile(value: string | null): void
    getSize(): number
    setSize(value: number): void
    getPlaceHolder(): boolean
    setPlaceHolder(value: boolean): void

    // Own virtual methods of RygelServer-2.8.RygelServer.MediaFileItem

    getPrimaryResource(): MediaResource
    getExtension(): string | null
    addEngineResources(callback: Gio.AsyncReadyCallback | null): void
    addEngineResourcesFinish(res: Gio.AsyncResult): void
    addAdditionalResources(server: HTTPServer): void

    // Class property signals of RygelServer-2.8.RygelServer.MediaFileItem

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class MediaFileItem extends MediaItem {

    // Own properties of RygelServer-2.8.RygelServer.MediaFileItem

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.MediaFileItem

    constructor(config?: MediaFileItem.ConstructorProperties) 
    _init(config?: MediaFileItem.ConstructorProperties): void
}

export module MediaObject {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.MediaObject

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

}

export interface MediaObject {

    // Own properties of RygelServer-2.8.RygelServer.MediaObject

    id: string | null
    refId: string | null
    upnpClass: string | null
    date: string | null
    creator: string | null
    modified: number
    objectUpdateId: number
    artist: string | null
    genre: string | null
    parent: MediaContainer
    parentRef: MediaContainer
    title: string | null
    readonly ocmFlags: GUPnPAV.OCMFlags
    __gtype__: number

    // Own fields of RygelServer-2.8.RygelServer.MediaObject

    parentPtr: MediaContainer

    // Owm methods of RygelServer-2.8.RygelServer.MediaObject

    getUris(): Gee.List
    getPrimaryUri(): string | null
    // Has conflict: addUri(uri: string | null): void
    getWritable(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getWritableFinish(res: Gio.AsyncResult): Gio.File | null
    getWritables(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getWritablesFinish(res: Gio.AsyncResult): Gee.ArrayList
    getResourceList(): Gee.List
    getResourceByName(resourceName: string | null): MediaResource | null
    // Has conflict: serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serializeResourceList(didlObject: GUPnPAV.DIDLLiteObject, httpServer: HTTPServer): void
    // Has conflict: createStreamSourceForResource(request: HTTPRequest, resource: MediaResource): DataSource | null
    // Has conflict: applyDidlLite(didlObject: GUPnPAV.DIDLLiteObject): void
    // Has conflict: compareByProperty(mediaObject: MediaObject, property: string | null): number
    compareStringProps(prop1: string | null, prop2: string | null): number
    compareIntProps(prop1: number, prop2: number): number
    getId(): string | null
    setId(value: string | null): void
    getRefId(): string | null
    setRefId(value: string | null): void
    getUpnpClass(): string | null
    setUpnpClass(value: string | null): void
    getDate(): string | null
    setDate(value: string | null): void
    getCreator(): string | null
    setCreator(value: string | null): void
    getModified(): number
    setModified(value: number): void
    getObjectUpdateId(): number
    setObjectUpdateId(value: number): void
    getArtist(): string | null
    setArtist(value: string | null): void
    getGenre(): string | null
    setGenre(value: string | null): void
    getParent(): MediaContainer
    setParent(value: MediaContainer): void
    getParentRef(): MediaContainer
    setParentRef(value: MediaContainer): void
    getTitle(): string | null
    setTitle(value: string | null): void
    // Has conflict: getOcmFlags(): GUPnPAV.OCMFlags

    // Own virtual methods of RygelServer-2.8.RygelServer.MediaObject

    addUri(uri: string | null): void
    serialize(serializer: Serializer, httpServer: HTTPServer): GUPnPAV.DIDLLiteObject | null
    createStreamSourceForResource(request: HTTPRequest, resource: MediaResource): DataSource | null
    applyDidlLite(didlObject: GUPnPAV.DIDLLiteObject): void
    compareByProperty(mediaObject: MediaObject, property: string | null): number
    getOcmFlags(): GUPnPAV.OCMFlags

    // Class property signals of RygelServer-2.8.RygelServer.MediaObject

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
}

export class MediaObject extends GObject.Object {

    // Own properties of RygelServer-2.8.RygelServer.MediaObject

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.MediaObject

    constructor(config?: MediaObject.ConstructorProperties) 
    _init(config?: MediaObject.ConstructorProperties): void
    static applyReplacements(replacementPairs: GLib.HashTable, sourceString: string | null): string | null
}

export module MediaResource {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.MediaResource

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

}

export interface MediaResource {

    // Own properties of RygelServer-2.8.RygelServer.MediaResource

    uri: string | null
    importUri: string | null
    extension: string | null
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
    protocol: string | null
    mimeType: string | null
    dlnaProfile: string | null
    network: string | null
    dlnaConversion: GUPnPAV.DLNAConversion
    dlnaFlags: GUPnPAV.DLNAFlags
    dlnaOperation: GUPnPAV.DLNAOperation
    __gtype__: number

    // Own fields of RygelServer-2.8.RygelServer.MediaResource

    playSpeeds: string[]
    playSpeedsLength1: number

    // Owm methods of RygelServer-2.8.RygelServer.MediaResource

    dup(): MediaResource
    getName(): string | null
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
    getDefaultTransferMode(): string | null
    supportsTransferMode(transferMode: string | null): boolean
    isStreamable(): boolean
    isCleartextRangeSupportEnabled(): boolean
    supportsPlayspeed(): boolean
    isDlnaProtocolFlagSet(flags: number): boolean
    isDlnaOperationModeSet(flags: number): boolean
    toString(): string | null
    getUri(): string | null
    setUri(value: string | null): void
    getImportUri(): string | null
    setImportUri(value: string | null): void
    getExtension(): string | null
    setExtension(value: string | null): void
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
    getProtocol(): string | null
    setProtocol(value: string | null): void
    getMimeType(): string | null
    setMimeType(value: string | null): void
    getDlnaProfile(): string | null
    setDlnaProfile(value: string | null): void
    getNetwork(): string | null
    setNetwork(value: string | null): void
    getDlnaConversion(): GUPnPAV.DLNAConversion
    setDlnaConversion(value: GUPnPAV.DLNAConversion): void
    getDlnaFlags(): GUPnPAV.DLNAFlags
    setDlnaFlags(value: GUPnPAV.DLNAFlags): void
    getDlnaOperation(): GUPnPAV.DLNAOperation
    setDlnaOperation(value: GUPnPAV.DLNAOperation): void

    // Class property signals of RygelServer-2.8.RygelServer.MediaResource

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
}

export class MediaResource extends GObject.Object {

    // Own properties of RygelServer-2.8.RygelServer.MediaResource

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.MediaResource

    constructor(config?: MediaResource.ConstructorProperties) 
    constructor(name: string | null) 
    static new(name: string | null): MediaResource
    static fromResource(name: string | null, that: MediaResource): MediaResource
    static fromDidlLiteResource(name: string | null, didlResource: GUPnPAV.DIDLLiteResource): MediaResource
    _init(config?: MediaResource.ConstructorProperties): void
}

export module MediaServerPlugin {

    // Constructor properties interface

    export interface ConstructorProperties extends RygelCore.Plugin.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.MediaServerPlugin

        rootContainer?: MediaContainer | null
        uploadProfiles?: RygelCore.DLNAProfile[] | null
        supportedProfiles?: RygelCore.DLNAProfile[] | null
    }

}

export interface MediaServerPlugin {

    // Own properties of RygelServer-2.8.RygelServer.MediaServerPlugin

    readonly rootContainer: MediaContainer
    readonly searchCaps: string | null
    uploadProfiles: RygelCore.DLNAProfile[]
    supportedProfiles: RygelCore.DLNAProfile[]
    __gtype__: number

    // Owm methods of RygelServer-2.8.RygelServer.MediaServerPlugin

    getRootContainer(): MediaContainer
    // Has conflict: getSearchCaps(): string | null
    getUploadProfiles(): RygelCore.DLNAProfile[]
    setUploadProfiles(value: RygelCore.DLNAProfile[]): void
    getSupportedProfiles(): RygelCore.DLNAProfile[]
    setSupportedProfiles(value: RygelCore.DLNAProfile[]): void

    // Own virtual methods of RygelServer-2.8.RygelServer.MediaServerPlugin

    getSearchCaps(): string | null

    // Class property signals of RygelServer-2.8.RygelServer.MediaServerPlugin

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class MediaServerPlugin extends RygelCore.Plugin {

    // Own properties of RygelServer-2.8.RygelServer.MediaServerPlugin

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.MediaServerPlugin

    constructor(config?: MediaServerPlugin.ConstructorProperties) 
    _init(config?: MediaServerPlugin.ConstructorProperties): void

    // Conflicting static methods

    static new(...args: any[]): any
}

export interface SearchExpression {

    // Own fields of RygelServer-2.8.RygelServer.SearchExpression

    refCount: number
    op: any | null
    operand1: any | null
    operand2: any | null

    // Owm methods of RygelServer-2.8.RygelServer.SearchExpression

    // Has conflict: satisfiedBy(mediaObject: MediaObject): boolean
    // Has conflict: toString(): string | null

    // Own virtual methods of RygelServer-2.8.RygelServer.SearchExpression

    satisfiedBy(mediaObject: MediaObject): boolean
    toString(): string | null
}

export class SearchExpression {

    // Own properties of RygelServer-2.8.RygelServer.SearchExpression

    static name: string
}

export module MediaServer {

    // Constructor properties interface

    export interface ConstructorProperties extends RygelCore.MediaDevice.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.MediaServer

        rootContainer?: MediaContainer | null
    }

}

export interface MediaServer {

    // Own properties of RygelServer-2.8.RygelServer.MediaServer

    readonly rootContainer: MediaContainer
    __gtype__: number

    // Class property signals of RygelServer-2.8.RygelServer.MediaServer

    connect(sigName: "notify::root-container", callback: (...args: any[]) => void): number
    on(sigName: "notify::root-container", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::root-container", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::root-container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::root-container", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class MediaServer extends RygelCore.MediaDevice {

    // Own properties of RygelServer-2.8.RygelServer.MediaServer

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.MediaServer

    constructor(config?: MediaServer.ConstructorProperties) 
    constructor(title: string | null, rootContainer: MediaContainer, capabilities: RygelCore.PluginCapabilities) 
    static new(title: string | null, rootContainer: MediaContainer, capabilities: RygelCore.PluginCapabilities): MediaServer
    _init(config?: MediaServer.ConstructorProperties): void
}

export module MediaEngine {

    // Signal callback interfaces

    /**
     * Signal callback interface for `resource-changed`
     */
    export interface ResourceChangedSignalCallback {
        (mediaObjectUri: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MediaEngine {

    // Own properties of RygelServer-2.8.RygelServer.MediaEngine

    __gtype__: number

    // Owm methods of RygelServer-2.8.RygelServer.MediaEngine

    // Has conflict: getDlnaProfiles(): RygelCore.DLNAProfile[]
    // Has conflict: getResourcesForItem(item: MediaObject, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: getResourcesForItemFinish(res: Gio.AsyncResult): Gee.List | null
    // Has conflict: createDataSourceForResource(item: MediaObject, resource: MediaResource, replacements: GLib.HashTable): DataSource | null
    // Has conflict: createDataSourceForUri(uri: string | null): DataSource | null
    // Has conflict: getInternalProtocolSchemes(): string[]

    // Own virtual methods of RygelServer-2.8.RygelServer.MediaEngine

    getDlnaProfiles(): RygelCore.DLNAProfile[]
    getResourcesForItem(item: MediaObject, callback: Gio.AsyncReadyCallback | null): void
    getResourcesForItemFinish(res: Gio.AsyncResult): Gee.List | null
    createDataSourceForResource(item: MediaObject, resource: MediaResource, replacements: GLib.HashTable): DataSource | null
    createDataSourceForUri(uri: string | null): DataSource | null
    getInternalProtocolSchemes(): string[]

    // Own signals of RygelServer-2.8.RygelServer.MediaEngine

    connect(sigName: "resource-changed", callback: MediaEngine.ResourceChangedSignalCallback): number
    on(sigName: "resource-changed", callback: MediaEngine.ResourceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resource-changed", callback: MediaEngine.ResourceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resource-changed", callback: MediaEngine.ResourceChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "resource-changed", ...args: any[]): void

    // Class property signals of RygelServer-2.8.RygelServer.MediaEngine

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
}

export class MediaEngine extends GObject.Object {

    // Own properties of RygelServer-2.8.RygelServer.MediaEngine

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.MediaEngine

    constructor(config?: MediaEngine.ConstructorProperties) 
    _init(config?: MediaEngine.ConstructorProperties): void
    static init(): void
    static getDefault(): MediaEngine
}

export module HTTPSeekRequest {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface HTTPSeekRequest {

    // Own properties of RygelServer-2.8.RygelServer.HTTPSeekRequest

    __gtype__: number

    // Class property signals of RygelServer-2.8.RygelServer.HTTPSeekRequest

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
}

export class HTTPSeekRequest extends GObject.Object {

    // Own properties of RygelServer-2.8.RygelServer.HTTPSeekRequest

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.HTTPSeekRequest

    constructor(config?: HTTPSeekRequest.ConstructorProperties) 
    _init(config?: HTTPSeekRequest.ConstructorProperties): void
}

export module PlaylistItem {

    // Constructor properties interface

    export interface ConstructorProperties extends MediaFileItem.ConstructorProperties {
    }

}

export interface PlaylistItem {

    // Own properties of RygelServer-2.8.RygelServer.PlaylistItem

    __gtype__: number

    // Class property signals of RygelServer-2.8.RygelServer.PlaylistItem

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class PlaylistItem extends MediaFileItem {

    // Own properties of RygelServer-2.8.RygelServer.PlaylistItem

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.PlaylistItem

    constructor(config?: PlaylistItem.ConstructorProperties) 
    constructor(id: string | null, parent: MediaContainer, title: string | null, upnpClass: string | null) 
    static new(id: string | null, parent: MediaContainer, title: string | null, upnpClass: string | null): PlaylistItem
    _init(config?: PlaylistItem.ConstructorProperties): void
}

export module ContentDirectory {

    // Constructor properties interface

    export interface ConstructorProperties extends GUPnP.Service.ConstructorProperties {
    }

}

export interface ContentDirectory {

    // Own properties of RygelServer-2.8.RygelServer.ContentDirectory

    __gtype__: number

    // Conflicting properties

    parentInstance: any

    // Own fields of RygelServer-2.8.RygelServer.ContentDirectory

    featureList: string | null
    httpServer: HTTPServer
    rootContainer: MediaContainer
    cancellable: Gio.Cancellable
    systemUpdateId: number

    // Class property signals of RygelServer-2.8.RygelServer.ContentDirectory

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class ContentDirectory extends GUPnP.Service {

    // Own properties of RygelServer-2.8.RygelServer.ContentDirectory

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.ContentDirectory

    constructor(config?: ContentDirectory.ConstructorProperties) 
    constructor() 
    static new(): ContentDirectory
    _init(config?: ContentDirectory.ConstructorProperties): void
}

export module HTTPByteSeekRequest {

    // Constructor properties interface

    export interface ConstructorProperties extends HTTPSeekRequest.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.HTTPByteSeekRequest

        startByte?: number | null
        endByte?: number | null
        rangeLength?: number | null
        totalSize?: number | null
    }

}

export interface HTTPByteSeekRequest {

    // Own properties of RygelServer-2.8.RygelServer.HTTPByteSeekRequest

    startByte: number
    endByte: number
    rangeLength: number
    totalSize: number
    __gtype__: number

    // Owm methods of RygelServer-2.8.RygelServer.HTTPByteSeekRequest

    getStartByte(): number
    setStartByte(value: number): void
    getEndByte(): number
    setEndByte(value: number): void
    getRangeLength(): number
    getTotalSize(): number
    setTotalSize(value: number): void

    // Class property signals of RygelServer-2.8.RygelServer.HTTPByteSeekRequest

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
}

export class HTTPByteSeekRequest extends HTTPSeekRequest {

    // Own properties of RygelServer-2.8.RygelServer.HTTPByteSeekRequest

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.HTTPByteSeekRequest

    constructor(config?: HTTPByteSeekRequest.ConstructorProperties) 
    constructor(msg: Soup.ServerMessage, handler: HTTPGetHandler) 
    static new(msg: Soup.ServerMessage, handler: HTTPGetHandler): HTTPByteSeekRequest
    _init(config?: HTTPByteSeekRequest.ConstructorProperties): void
    static supported(message: Soup.ServerMessage, handler: HTTPGetHandler): boolean
    static requested(msg: Soup.ServerMessage): boolean
}

export module HTTPByteSeekResponse {

    // Constructor properties interface

    export interface ConstructorProperties extends HTTPResponseElement.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.HTTPByteSeekResponse

        startByte?: number | null
        endByte?: number | null
        rangeLength?: number | null
        totalSize?: number | null
    }

}

export interface HTTPByteSeekResponse {

    // Own properties of RygelServer-2.8.RygelServer.HTTPByteSeekResponse

    startByte: number
    endByte: number
    rangeLength: number
    totalSize: number
    __gtype__: number

    // Owm methods of RygelServer-2.8.RygelServer.HTTPByteSeekResponse

    getStartByte(): number
    setStartByte(value: number): void
    getEndByte(): number
    setEndByte(value: number): void
    getRangeLength(): number
    getTotalSize(): number
    setTotalSize(value: number): void

    // Class property signals of RygelServer-2.8.RygelServer.HTTPByteSeekResponse

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
}

export class HTTPByteSeekResponse extends HTTPResponseElement {

    // Own properties of RygelServer-2.8.RygelServer.HTTPByteSeekResponse

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.HTTPByteSeekResponse

    constructor(config?: HTTPByteSeekResponse.ConstructorProperties) 
    constructor(startByte: number, endByte: number, totalSize: number) 
    static new(startByte: number, endByte: number, totalSize: number): HTTPByteSeekResponse
    static fromRequest(request: HTTPByteSeekRequest): HTTPByteSeekResponse
    _init(config?: HTTPByteSeekResponse.ConstructorProperties): void
}

export module HTTPGetHandler {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.HTTPGetHandler

        cancellable?: Gio.Cancellable | null
    }

}

export interface HTTPGetHandler {

    // Own properties of RygelServer-2.8.RygelServer.HTTPGetHandler

    cancellable: Gio.Cancellable
    __gtype__: number

    // Owm methods of RygelServer-2.8.RygelServer.HTTPGetHandler

    // Has conflict: addResponseHeaders(request: HTTPGet): void
    // Has conflict: getDefaultTransferMode(): string | null
    // Has conflict: supportsTransferMode(mode: string | null): boolean
    // Has conflict: getResourceSize(): number
    // Has conflict: getResourceDuration(): number
    // Has conflict: supportsByteSeek(): boolean
    // Has conflict: supportsTimeSeek(): boolean
    // Has conflict: supportsPlayspeed(): boolean
    // Has conflict: renderBody(request: HTTPGet): HTTPResponse
    getCancellable(): Gio.Cancellable
    setCancellable(value: Gio.Cancellable): void

    // Own virtual methods of RygelServer-2.8.RygelServer.HTTPGetHandler

    addResponseHeaders(request: HTTPGet): void
    getDefaultTransferMode(): string | null
    supportsTransferMode(mode: string | null): boolean
    getResourceSize(): number
    getResourceDuration(): number
    supportsByteSeek(): boolean
    supportsTimeSeek(): boolean
    supportsPlayspeed(): boolean
    renderBody(request: HTTPGet): HTTPResponse

    // Class property signals of RygelServer-2.8.RygelServer.HTTPGetHandler

    connect(sigName: "notify::cancellable", callback: (...args: any[]) => void): number
    on(sigName: "notify::cancellable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cancellable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cancellable", ...args: any[]): void
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
}

export class HTTPGetHandler extends GObject.Object {

    // Own properties of RygelServer-2.8.RygelServer.HTTPGetHandler

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.HTTPGetHandler

    constructor(config?: HTTPGetHandler.ConstructorProperties) 
    _init(config?: HTTPGetHandler.ConstructorProperties): void
}

export module HTTPGet {

    // Constructor properties interface

    export interface ConstructorProperties extends HTTPRequest.ConstructorProperties {
    }

}

export interface HTTPGet {

    // Own properties of RygelServer-2.8.RygelServer.HTTPGet

    __gtype__: number

    // Own fields of RygelServer-2.8.RygelServer.HTTPGet

    seek: HTTPSeekRequest
    speedRequest: PlaySpeedRequest
    handler: HTTPGetHandler

    // Class property signals of RygelServer-2.8.RygelServer.HTTPGet

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
}

export class HTTPGet extends HTTPRequest {

    // Own properties of RygelServer-2.8.RygelServer.HTTPGet

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.HTTPGet

    constructor(config?: HTTPGet.ConstructorProperties) 
    constructor(httpServer: HTTPServer, server: Soup.Server, msg: Soup.ServerMessage) 
    static new(httpServer: HTTPServer, server: Soup.Server, msg: Soup.ServerMessage): HTTPGet
    _init(config?: HTTPGet.ConstructorProperties): void
}

export module HTTPItemURI {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.HTTPItemURI

        itemId?: string | null
        thumbnailIndex?: number | null
        subtitleIndex?: number | null
        resourceName?: string | null
        httpServer?: HTTPServer | null
        extension?: string | null
    }

}

export interface HTTPItemURI {

    // Own properties of RygelServer-2.8.RygelServer.HTTPItemURI

    itemId: string | null
    thumbnailIndex: number
    subtitleIndex: number
    resourceName: string | null
    httpServer: HTTPServer
    extension: string | null
    __gtype__: number

    // Own fields of RygelServer-2.8.RygelServer.HTTPItemURI

    rygelHttpItemUriMimeToExt: Gee.HashMap

    // Owm methods of RygelServer-2.8.RygelServer.HTTPItemURI

    toString(): string | null
    getItemId(): string | null
    setItemId(value: string | null): void
    getThumbnailIndex(): number
    setThumbnailIndex(value: number): void
    getSubtitleIndex(): number
    setSubtitleIndex(value: number): void
    getResourceName(): string | null
    setResourceName(value: string | null): void
    getHttpServer(): HTTPServer
    setHttpServer(value: HTTPServer): void
    getExtension(): string | null
    setExtension(value: string | null): void

    // Class property signals of RygelServer-2.8.RygelServer.HTTPItemURI

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
}

export class HTTPItemURI extends GObject.Object {

    // Own properties of RygelServer-2.8.RygelServer.HTTPItemURI

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.HTTPItemURI

    constructor(config?: HTTPItemURI.ConstructorProperties) 
    constructor(object: MediaObject, httpServer: HTTPServer, thumbnailIndex: number, subtitleIndex: number, resourceName: string | null) 
    static new(object: MediaObject, httpServer: HTTPServer, thumbnailIndex: number, subtitleIndex: number, resourceName: string | null): HTTPItemURI
    static fromString(uri: string | null, httpServer: HTTPServer): HTTPItemURI
    _init(config?: HTTPItemURI.ConstructorProperties): void
}

export module HTTPRequest {

    // Constructor properties interface

    export interface ConstructorProperties extends RygelCore.StateMachine.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface HTTPRequest extends RygelCore.StateMachine {

    // Own properties of RygelServer-2.8.RygelServer.HTTPRequest

    __gtype__: number

    // Own fields of RygelServer-2.8.RygelServer.HTTPRequest

    httpServer: HTTPServer
    server: Soup.Server
    msg: Soup.ServerMessage
    uri: HTTPItemURI
    object: MediaObject
    hack: any

    // Owm methods of RygelServer-2.8.RygelServer.HTTPRequest

    // Has conflict: handle(callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: handleFinish(res: Gio.AsyncResult): void
    // Has conflict: findItem(callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: findItemFinish(res: Gio.AsyncResult): void
    handleError(error: GLib.Error): void
    end(status: number, reason: string | null): void

    // Own virtual methods of RygelServer-2.8.RygelServer.HTTPRequest

    handle(callback: Gio.AsyncReadyCallback | null): void
    handleFinish(res: Gio.AsyncResult): void
    findItem(callback: Gio.AsyncReadyCallback | null): void
    findItemFinish(res: Gio.AsyncResult): void

    // Class property signals of RygelServer-2.8.RygelServer.HTTPRequest

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class HTTPRequest extends GObject.Object {

    // Own properties of RygelServer-2.8.RygelServer.HTTPRequest

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.HTTPRequest

    constructor(config?: HTTPRequest.ConstructorProperties) 
    _init(config?: HTTPRequest.ConstructorProperties): void
}

export module HTTPResponse {

    // Constructor properties interface

    export interface ConstructorProperties extends RygelCore.StateMachine.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.HTTPResponse

        server?: Soup.Server | null
    }

}

export interface HTTPResponse extends RygelCore.StateMachine {

    // Own properties of RygelServer-2.8.RygelServer.HTTPResponse

    server: Soup.Server
    readonly priority: number
    __gtype__: number

    // Own fields of RygelServer-2.8.RygelServer.HTTPResponse

    msg: Soup.ServerMessage
    seek: HTTPSeekRequest
    speed: PlaySpeedRequest

    // Owm methods of RygelServer-2.8.RygelServer.HTTPResponse

    preroll(): Gee.List | null
    // Has conflict: end(aborted: boolean, status: number): void
    getServer(): Soup.Server
    getPriority(): number

    // Own virtual methods of RygelServer-2.8.RygelServer.HTTPResponse

    end(aborted: boolean, status: number): void

    // Class property signals of RygelServer-2.8.RygelServer.HTTPResponse

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class HTTPResponse extends GObject.Object {

    // Own properties of RygelServer-2.8.RygelServer.HTTPResponse

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.HTTPResponse

    constructor(config?: HTTPResponse.ConstructorProperties) 
    constructor(request: HTTPGet, requestHandler: HTTPGetHandler, src: DataSource) 
    static new(request: HTTPGet, requestHandler: HTTPGetHandler, src: DataSource): HTTPResponse
    _init(config?: HTTPResponse.ConstructorProperties): void
}

export module HTTPResponseElement {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface HTTPResponseElement {

    // Own properties of RygelServer-2.8.RygelServer.HTTPResponseElement

    __gtype__: number

    // Owm methods of RygelServer-2.8.RygelServer.HTTPResponseElement

    // Has conflict: addResponseHeaders(request: HTTPRequest): void
    // Has conflict: toString(): string | null

    // Own virtual methods of RygelServer-2.8.RygelServer.HTTPResponseElement

    addResponseHeaders(request: HTTPRequest): void
    toString(): string | null

    // Class property signals of RygelServer-2.8.RygelServer.HTTPResponseElement

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
}

export class HTTPResponseElement extends GObject.Object {

    // Own properties of RygelServer-2.8.RygelServer.HTTPResponseElement

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.HTTPResponseElement

    constructor(config?: HTTPResponseElement.ConstructorProperties) 
    _init(config?: HTTPResponseElement.ConstructorProperties): void
}

export module HTTPServer {

    // Constructor properties interface

    export interface ConstructorProperties extends RygelCore.StateMachine.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.HTTPServer

        pathRoot?: string | null
        serverName?: string | null
    }

}

export interface HTTPServer extends RygelCore.StateMachine {

    // Own properties of RygelServer-2.8.RygelServer.HTTPServer

    pathRoot: string | null
    serverName: string | null
    __gtype__: number

    // Own fields of RygelServer-2.8.RygelServer.HTTPServer

    rootContainer: MediaContainer
    context: GUPnP.Context
    replacements: GLib.HashTable

    // Owm methods of RygelServer-2.8.RygelServer.HTTPServer

    setResourceDeliveryOptions(res: MediaResource): void
    needProxy(uri: string | null): boolean
    // Has conflict: getProtocol(): string | null
    // Has conflict: getProtocolInfo(): Gee.ArrayList
    getReplacements(): GLib.HashTable
    isLocal(): boolean
    getPathRoot(): string | null
    getServerName(): string | null
    setServerName(value: string | null): void

    // Own virtual methods of RygelServer-2.8.RygelServer.HTTPServer

    getProtocol(): string | null
    getProtocolInfo(): Gee.ArrayList

    // Class property signals of RygelServer-2.8.RygelServer.HTTPServer

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class HTTPServer extends GObject.Object {

    // Own properties of RygelServer-2.8.RygelServer.HTTPServer

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.HTTPServer

    constructor(config?: HTTPServer.ConstructorProperties) 
    constructor(contentDir: ContentDirectory, name: string | null) 
    static new(contentDir: ContentDirectory, name: string | null): HTTPServer
    _init(config?: HTTPServer.ConstructorProperties): void
}

export module HTTPTimeSeekRequest {

    // Constructor properties interface

    export interface ConstructorProperties extends HTTPSeekRequest.ConstructorProperties {
    }

}

export interface HTTPTimeSeekRequest {

    // Own properties of RygelServer-2.8.RygelServer.HTTPTimeSeekRequest

    __gtype__: number

    // Own fields of RygelServer-2.8.RygelServer.HTTPTimeSeekRequest

    startTime: number
    endTime: number
    rangeDuration: number
    totalDuration: number

    // Owm methods of RygelServer-2.8.RygelServer.HTTPTimeSeekRequest

    toString(): string | null

    // Class property signals of RygelServer-2.8.RygelServer.HTTPTimeSeekRequest

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
}

export class HTTPTimeSeekRequest extends HTTPSeekRequest {

    // Own properties of RygelServer-2.8.RygelServer.HTTPTimeSeekRequest

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.HTTPTimeSeekRequest

    constructor(config?: HTTPTimeSeekRequest.ConstructorProperties) 
    _init(config?: HTTPTimeSeekRequest.ConstructorProperties): void
    static supported(message: Soup.ServerMessage, handler: HTTPGetHandler): boolean
    static requested(message: Soup.ServerMessage): boolean
}

export module HTTPTimeSeekResponse {

    // Constructor properties interface

    export interface ConstructorProperties extends HTTPResponseElement.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.HTTPTimeSeekResponse

        startTime?: number | null
        endTime?: number | null
        rangeDuration?: number | null
        totalDuration?: number | null
        startByte?: number | null
        endByte?: number | null
        responseLength?: number | null
        totalSize?: number | null
    }

}

export interface HTTPTimeSeekResponse {

    // Own properties of RygelServer-2.8.RygelServer.HTTPTimeSeekResponse

    startTime: number
    endTime: number
    rangeDuration: number
    totalDuration: number
    startByte: number
    endByte: number
    responseLength: number
    totalSize: number
    __gtype__: number

    // Owm methods of RygelServer-2.8.RygelServer.HTTPTimeSeekResponse

    getStartTime(): number
    getEndTime(): number
    getRangeDuration(): number
    getTotalDuration(): number
    getStartByte(): number
    getEndByte(): number
    getResponseLength(): number
    getTotalSize(): number

    // Class property signals of RygelServer-2.8.RygelServer.HTTPTimeSeekResponse

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
}

export class HTTPTimeSeekResponse extends HTTPResponseElement {

    // Own properties of RygelServer-2.8.RygelServer.HTTPTimeSeekResponse

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.HTTPTimeSeekResponse

    constructor(config?: HTTPTimeSeekResponse.ConstructorProperties) 
    constructor(startTime: number, endTime: number, totalDuration: number, startByte: number, endByte: number, totalSize: number) 
    static new(startTime: number, endTime: number, totalDuration: number, startByte: number, endByte: number, totalSize: number): HTTPTimeSeekResponse
    static timeOnly(startTime: number, endTime: number, totalDuration: number): HTTPTimeSeekResponse
    static withLength(startTime: number, endTime: number, totalDuration: number, startByte: number, endByte: number, totalSize: number, responseLength: number): HTTPTimeSeekResponse
    static fromRequest(timeSeekRequest: HTTPTimeSeekRequest, totalDuration: number): HTTPTimeSeekResponse
    _init(config?: HTTPTimeSeekResponse.ConstructorProperties): void
}

export module Serializer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.Serializer

        serializerType?: SerializerType | null
    }

}

export interface Serializer {

    // Own properties of RygelServer-2.8.RygelServer.Serializer

    readonly serializerType: SerializerType
    __gtype__: number

    // Owm methods of RygelServer-2.8.RygelServer.Serializer

    addItem(): GUPnPAV.DIDLLiteItem | null
    addContainer(): GUPnPAV.DIDLLiteContainer | null
    filter(filterString: string | null): void
    getString(): string | null

    // Class property signals of RygelServer-2.8.RygelServer.Serializer

    connect(sigName: "notify::serializer-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::serializer-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serializer-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serializer-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serializer-type", ...args: any[]): void
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
}

export class Serializer extends GObject.Object {

    // Own properties of RygelServer-2.8.RygelServer.Serializer

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.Serializer

    constructor(config?: Serializer.ConstructorProperties) 
    constructor(type: SerializerType) 
    static new(type: SerializerType): Serializer
    _init(config?: Serializer.ConstructorProperties): void
}

export interface PlaySpeed {

    // Own fields of RygelServer-2.8.RygelServer.PlaySpeed

    refCount: number
    numerator: number
    denominator: number

    // Owm methods of RygelServer-2.8.RygelServer.PlaySpeed

    equals(that: PlaySpeed): boolean
    isPositive(): boolean
    isNormalRate(): boolean
    toString(): string | null
    toFloat(): number
    toDouble(): number
}

export class PlaySpeed {

    // Own properties of RygelServer-2.8.RygelServer.PlaySpeed

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.PlaySpeed

    constructor(numerator: number, denominator: number) 
    static new(numerator: number, denominator: number): PlaySpeed
    static fromString(speed: string | null): PlaySpeed
}

export module PlaySpeedRequest {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.PlaySpeedRequest

        speed?: PlaySpeed | null
    }

}

export interface PlaySpeedRequest {

    // Own properties of RygelServer-2.8.RygelServer.PlaySpeedRequest

    speed: PlaySpeed
    __gtype__: number

    // Owm methods of RygelServer-2.8.RygelServer.PlaySpeedRequest

    equals(that: PlaySpeedRequest): boolean
    getSpeed(): PlaySpeed

    // Class property signals of RygelServer-2.8.RygelServer.PlaySpeedRequest

    connect(sigName: "notify::speed", callback: (...args: any[]) => void): number
    on(sigName: "notify::speed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::speed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::speed", ...args: any[]): void
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
}

export class PlaySpeedRequest extends GObject.Object {

    // Own properties of RygelServer-2.8.RygelServer.PlaySpeedRequest

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.PlaySpeedRequest

    constructor(config?: PlaySpeedRequest.ConstructorProperties) 
    constructor(numerator: number, denominator: number) 
    static new(numerator: number, denominator: number): PlaySpeedRequest
    static fromString(speed: string | null): PlaySpeedRequest
    _init(config?: PlaySpeedRequest.ConstructorProperties): void
    static supported(request: HTTPGet): boolean
}

export module PlaySpeedResponse {

    // Constructor properties interface

    export interface ConstructorProperties extends HTTPResponseElement.ConstructorProperties {
    }

}

export interface PlaySpeedResponse {

    // Own properties of RygelServer-2.8.RygelServer.PlaySpeedResponse

    __gtype__: number

    // Own fields of RygelServer-2.8.RygelServer.PlaySpeedResponse

    framerate: number

    // Owm methods of RygelServer-2.8.RygelServer.PlaySpeedResponse

    equals(that: PlaySpeedRequest): boolean

    // Class property signals of RygelServer-2.8.RygelServer.PlaySpeedResponse

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
}

export class PlaySpeedResponse extends HTTPResponseElement {

    // Own properties of RygelServer-2.8.RygelServer.PlaySpeedResponse

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.PlaySpeedResponse

    constructor(config?: PlaySpeedResponse.ConstructorProperties) 
    constructor(numerator: number, denominator: number, framerate: number) 
    static new(numerator: number, denominator: number, framerate: number): PlaySpeedResponse
    static fromSpeed(speed: PlaySpeed, framerate: number): PlaySpeedResponse
    static fromString(speed: string | null, framerate: number): PlaySpeedResponse
    _init(config?: PlaySpeedResponse.ConstructorProperties): void
}

export module DTCPCleartextRequest {

    // Constructor properties interface

    export interface ConstructorProperties extends HTTPSeekRequest.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.DTCPCleartextRequest

        startByte?: number | null
        endByte?: number | null
        rangeLength?: number | null
        totalSize?: number | null
    }

}

export interface DTCPCleartextRequest {

    // Own properties of RygelServer-2.8.RygelServer.DTCPCleartextRequest

    startByte: number
    endByte: number
    rangeLength: number
    totalSize: number
    __gtype__: number

    // Owm methods of RygelServer-2.8.RygelServer.DTCPCleartextRequest

    getStartByte(): number
    getEndByte(): number
    getRangeLength(): number
    getTotalSize(): number

    // Class property signals of RygelServer-2.8.RygelServer.DTCPCleartextRequest

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
}

export class DTCPCleartextRequest extends HTTPSeekRequest {

    // Own properties of RygelServer-2.8.RygelServer.DTCPCleartextRequest

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.DTCPCleartextRequest

    constructor(config?: DTCPCleartextRequest.ConstructorProperties) 
    constructor(message: Soup.ServerMessage, handler: HTTPGetHandler) 
    static new(message: Soup.ServerMessage, handler: HTTPGetHandler): DTCPCleartextRequest
    _init(config?: DTCPCleartextRequest.ConstructorProperties): void
    static supported(message: Soup.ServerMessage, handler: HTTPGetHandler): boolean
    static requested(message: Soup.ServerMessage): boolean
}

export module DTCPCleartextResponse {

    // Constructor properties interface

    export interface ConstructorProperties extends HTTPResponseElement.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.DTCPCleartextResponse

        startByte?: number | null
        endByte?: number | null
        rangeLength?: number | null
        totalSize?: number | null
        encryptedLength?: number | null
    }

}

export interface DTCPCleartextResponse {

    // Own properties of RygelServer-2.8.RygelServer.DTCPCleartextResponse

    startByte: number
    endByte: number
    rangeLength: number
    totalSize: number
    encryptedLength: number
    __gtype__: number

    // Owm methods of RygelServer-2.8.RygelServer.DTCPCleartextResponse

    getStartByte(): number
    getEndByte(): number
    getRangeLength(): number
    getTotalSize(): number
    getEncryptedLength(): number
    setEncryptedLength(value: number): void

    // Class property signals of RygelServer-2.8.RygelServer.DTCPCleartextResponse

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
}

export class DTCPCleartextResponse extends HTTPResponseElement {

    // Own properties of RygelServer-2.8.RygelServer.DTCPCleartextResponse

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.DTCPCleartextResponse

    constructor(config?: DTCPCleartextResponse.ConstructorProperties) 
    constructor(startByte: number, endByte: number, totalSize: number, encryptedLength: number) 
    static new(startByte: number, endByte: number, totalSize: number, encryptedLength: number): DTCPCleartextResponse
    static fromRequest(request: DTCPCleartextRequest, encryptedLength: number): DTCPCleartextResponse
    _init(config?: DTCPCleartextResponse.ConstructorProperties): void
}

export module DLNAAvailableSeekRangeRequest {

    // Constructor properties interface

    export interface ConstructorProperties extends HTTPSeekRequest.ConstructorProperties {
    }

}

export interface DLNAAvailableSeekRangeRequest {

    // Own properties of RygelServer-2.8.RygelServer.DLNAAvailableSeekRangeRequest

    __gtype__: number

    // Class property signals of RygelServer-2.8.RygelServer.DLNAAvailableSeekRangeRequest

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
}

export class DLNAAvailableSeekRangeRequest extends HTTPSeekRequest {

    // Own properties of RygelServer-2.8.RygelServer.DLNAAvailableSeekRangeRequest

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.DLNAAvailableSeekRangeRequest

    constructor(config?: DLNAAvailableSeekRangeRequest.ConstructorProperties) 
    _init(config?: DLNAAvailableSeekRangeRequest.ConstructorProperties): void
    static supported(message: Soup.Message, handler: HTTPGetHandler): boolean
    static requested(message: Soup.Message): boolean
}

export module DLNAAvailableSeekRangeResponse {

    // Constructor properties interface

    export interface ConstructorProperties extends HTTPResponseElement.ConstructorProperties {

        // Own constructor properties of RygelServer-2.8.RygelServer.DLNAAvailableSeekRangeResponse

        mode?: number | null
        startTime?: number | null
        endTime?: number | null
        startByte?: number | null
        endByte?: number | null
        rangeLength?: number | null
    }

}

export interface DLNAAvailableSeekRangeResponse {

    // Own properties of RygelServer-2.8.RygelServer.DLNAAvailableSeekRangeResponse

    mode: number
    startTime: number
    endTime: number
    startByte: number
    endByte: number
    rangeLength: number
    __gtype__: number

    // Owm methods of RygelServer-2.8.RygelServer.DLNAAvailableSeekRangeResponse

    getMode(): number
    getStartTime(): number
    getEndTime(): number
    getStartByte(): number
    getEndByte(): number
    getRangeLength(): number

    // Class property signals of RygelServer-2.8.RygelServer.DLNAAvailableSeekRangeResponse

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
}

export class DLNAAvailableSeekRangeResponse extends HTTPResponseElement {

    // Own properties of RygelServer-2.8.RygelServer.DLNAAvailableSeekRangeResponse

    static name: string

    // Constructors of RygelServer-2.8.RygelServer.DLNAAvailableSeekRangeResponse

    constructor(config?: DLNAAvailableSeekRangeResponse.ConstructorProperties) 
    constructor(mode: number, startTime: number, endTime: number, startByte: number, endByte: number) 
    static new(mode: number, startTime: number, endTime: number, startByte: number, endByte: number): DLNAAvailableSeekRangeResponse
    static timeOnly(mode: number, startTime: number, endTime: number): DLNAAvailableSeekRangeResponse
    _init(config?: DLNAAvailableSeekRangeResponse.ConstructorProperties): void
}

export interface AudioItemClass {
}

export abstract class AudioItemClass {

    // Own properties of RygelServer-2.8.RygelServer.AudioItemClass

    static name: string
}

export interface AudioItemPrivate {
}

export class AudioItemPrivate {

    // Own properties of RygelServer-2.8.RygelServer.AudioItemPrivate

    static name: string
}

export interface ImageItemClass {
}

export abstract class ImageItemClass {

    // Own properties of RygelServer-2.8.RygelServer.ImageItemClass

    static name: string
}

export interface ImageItemPrivate {
}

export class ImageItemPrivate {

    // Own properties of RygelServer-2.8.RygelServer.ImageItemPrivate

    static name: string
}

export interface LogicalExpressionClass {
}

export abstract class LogicalExpressionClass {

    // Own properties of RygelServer-2.8.RygelServer.LogicalExpressionClass

    static name: string
}

export interface LogicalExpressionPrivate {
}

export class LogicalExpressionPrivate {

    // Own properties of RygelServer-2.8.RygelServer.LogicalExpressionPrivate

    static name: string
}

export interface MediaArtStoreClass {
}

export abstract class MediaArtStoreClass {

    // Own properties of RygelServer-2.8.RygelServer.MediaArtStoreClass

    static name: string
}

export interface MediaArtStorePrivate {
}

export class MediaArtStorePrivate {

    // Own properties of RygelServer-2.8.RygelServer.MediaArtStorePrivate

    static name: string
}

export interface MediaObjectsClass {
}

export abstract class MediaObjectsClass {

    // Own properties of RygelServer-2.8.RygelServer.MediaObjectsClass

    static name: string
}

export interface MediaObjectsPrivate {
}

export class MediaObjectsPrivate {

    // Own properties of RygelServer-2.8.RygelServer.MediaObjectsPrivate

    static name: string
}

export interface MusicItemClass {
}

export abstract class MusicItemClass {

    // Own properties of RygelServer-2.8.RygelServer.MusicItemClass

    static name: string
}

export interface MusicItemPrivate {
}

export class MusicItemPrivate {

    // Own properties of RygelServer-2.8.RygelServer.MusicItemPrivate

    static name: string
}

export interface PhotoItemClass {
}

export abstract class PhotoItemClass {

    // Own properties of RygelServer-2.8.RygelServer.PhotoItemClass

    static name: string
}

export interface PhotoItemPrivate {
}

export class PhotoItemPrivate {

    // Own properties of RygelServer-2.8.RygelServer.PhotoItemPrivate

    static name: string
}

export interface RelationalExpressionClass {
}

export abstract class RelationalExpressionClass {

    // Own properties of RygelServer-2.8.RygelServer.RelationalExpressionClass

    static name: string
}

export interface RelationalExpressionPrivate {
}

export class RelationalExpressionPrivate {

    // Own properties of RygelServer-2.8.RygelServer.RelationalExpressionPrivate

    static name: string
}

export interface SimpleContainerClass {
}

export abstract class SimpleContainerClass {

    // Own properties of RygelServer-2.8.RygelServer.SimpleContainerClass

    static name: string
}

export interface SimpleContainerPrivate {
}

export class SimpleContainerPrivate {

    // Own properties of RygelServer-2.8.RygelServer.SimpleContainerPrivate

    static name: string
}

export interface SubtitleClass {

    // Own fields of RygelServer-2.8.RygelServer.SubtitleClass

    getResource: (self: Subtitle, protocol: string | null, index: number) => MediaResource
}

export abstract class SubtitleClass {

    // Own properties of RygelServer-2.8.RygelServer.SubtitleClass

    static name: string
}

export interface SubtitlePrivate {
}

export class SubtitlePrivate {

    // Own properties of RygelServer-2.8.RygelServer.SubtitlePrivate

    static name: string
}

export interface ThumbnailClass {

    // Own fields of RygelServer-2.8.RygelServer.ThumbnailClass

    getResource: (self: Thumbnail, protocol: string | null, index: number) => MediaResource
}

export abstract class ThumbnailClass {

    // Own properties of RygelServer-2.8.RygelServer.ThumbnailClass

    static name: string
}

export interface ThumbnailPrivate {
}

export class ThumbnailPrivate {

    // Own properties of RygelServer-2.8.RygelServer.ThumbnailPrivate

    static name: string
}

export interface VideoItemClass {

    // Own fields of RygelServer-2.8.RygelServer.VideoItemClass

    addSubtitleResources: (self: VideoItem, httpServer: HTTPServer) => void
}

export abstract class VideoItemClass {

    // Own properties of RygelServer-2.8.RygelServer.VideoItemClass

    static name: string
}

export interface VideoItemPrivate {
}

export class VideoItemPrivate {

    // Own properties of RygelServer-2.8.RygelServer.VideoItemPrivate

    static name: string
}

export interface MediaContainerClass {

    // Own fields of RygelServer-2.8.RygelServer.MediaContainerClass

    getChildren: (self: MediaContainer, offset: number, maxCount: number, sortCriteria: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    getChildrenFinish: (self: MediaContainer, res: Gio.AsyncResult) => MediaObjects | null
    findObject: (self: MediaContainer, id: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    findObjectFinish: (self: MediaContainer, res: Gio.AsyncResult) => MediaObject | null
}

export abstract class MediaContainerClass {

    // Own properties of RygelServer-2.8.RygelServer.MediaContainerClass

    static name: string
}

export interface MediaContainerPrivate {
}

export class MediaContainerPrivate {

    // Own properties of RygelServer-2.8.RygelServer.MediaContainerPrivate

    static name: string
}

export interface MediaItemClass {
}

export abstract class MediaItemClass {

    // Own properties of RygelServer-2.8.RygelServer.MediaItemClass

    static name: string
}

export interface MediaItemPrivate {
}

export class MediaItemPrivate {

    // Own properties of RygelServer-2.8.RygelServer.MediaItemPrivate

    static name: string
}

export interface MediaFileItemClass {

    // Own fields of RygelServer-2.8.RygelServer.MediaFileItemClass

    getPrimaryResource: (self: MediaFileItem) => MediaResource
    getExtension: (self: MediaFileItem) => string | null
    addEngineResources: (self: MediaFileItem, callback: Gio.AsyncReadyCallback | null) => void
    addEngineResourcesFinish: (self: MediaFileItem, res: Gio.AsyncResult) => void
    addAdditionalResources: (self: MediaFileItem, server: HTTPServer) => void
}

export abstract class MediaFileItemClass {

    // Own properties of RygelServer-2.8.RygelServer.MediaFileItemClass

    static name: string
}

export interface MediaFileItemPrivate {
}

export class MediaFileItemPrivate {

    // Own properties of RygelServer-2.8.RygelServer.MediaFileItemPrivate

    static name: string
}

export interface MediaObjectClass {

    // Own fields of RygelServer-2.8.RygelServer.MediaObjectClass

    addUri: (self: MediaObject, uri: string | null) => void
    serialize: (self: MediaObject, serializer: Serializer, httpServer: HTTPServer) => GUPnPAV.DIDLLiteObject | null
    createStreamSourceForResource: (self: MediaObject, request: HTTPRequest, resource: MediaResource) => DataSource | null
    applyDidlLite: (self: MediaObject, didlObject: GUPnPAV.DIDLLiteObject) => void
    compareByProperty: (self: MediaObject, mediaObject: MediaObject, property: string | null) => number
}

export abstract class MediaObjectClass {

    // Own properties of RygelServer-2.8.RygelServer.MediaObjectClass

    static name: string
}

export interface MediaObjectPrivate {
}

export class MediaObjectPrivate {

    // Own properties of RygelServer-2.8.RygelServer.MediaObjectPrivate

    static name: string
}

export interface MediaResourceClass {
}

export abstract class MediaResourceClass {

    // Own properties of RygelServer-2.8.RygelServer.MediaResourceClass

    static name: string
}

export interface MediaResourcePrivate {
}

export class MediaResourcePrivate {

    // Own properties of RygelServer-2.8.RygelServer.MediaResourcePrivate

    static name: string
}

export interface MediaServerPluginClass {
}

export abstract class MediaServerPluginClass {

    // Own properties of RygelServer-2.8.RygelServer.MediaServerPluginClass

    static name: string
}

export interface MediaServerPluginPrivate {
}

export class MediaServerPluginPrivate {

    // Own properties of RygelServer-2.8.RygelServer.MediaServerPluginPrivate

    static name: string
}

export interface SearchExpressionClass {

    // Own fields of RygelServer-2.8.RygelServer.SearchExpressionClass

    satisfiedBy: (self: SearchExpression, mediaObject: MediaObject) => boolean
    toString: (self: SearchExpression) => string | null
}

export abstract class SearchExpressionClass {

    // Own properties of RygelServer-2.8.RygelServer.SearchExpressionClass

    static name: string
}

export interface SearchExpressionPrivate {
}

export class SearchExpressionPrivate {

    // Own properties of RygelServer-2.8.RygelServer.SearchExpressionPrivate

    static name: string
}

export interface MediaServerClass {
}

export abstract class MediaServerClass {

    // Own properties of RygelServer-2.8.RygelServer.MediaServerClass

    static name: string
}

export interface MediaServerPrivate {
}

export class MediaServerPrivate {

    // Own properties of RygelServer-2.8.RygelServer.MediaServerPrivate

    static name: string
}

export interface MediaEngineClass {

    // Own fields of RygelServer-2.8.RygelServer.MediaEngineClass

    getDlnaProfiles: (self: MediaEngine) => RygelCore.DLNAProfile[]
    getResourcesForItem: (self: MediaEngine, item: MediaObject, callback: Gio.AsyncReadyCallback | null) => void
    getResourcesForItemFinish: (self: MediaEngine, res: Gio.AsyncResult) => Gee.List | null
    createDataSourceForResource: (self: MediaEngine, item: MediaObject, resource: MediaResource, replacements: GLib.HashTable) => DataSource | null
    createDataSourceForUri: (self: MediaEngine, uri: string | null) => DataSource | null
    getInternalProtocolSchemes: (self: MediaEngine) => string[]
}

export abstract class MediaEngineClass {

    // Own properties of RygelServer-2.8.RygelServer.MediaEngineClass

    static name: string
}

export interface MediaEnginePrivate {
}

export class MediaEnginePrivate {

    // Own properties of RygelServer-2.8.RygelServer.MediaEnginePrivate

    static name: string
}

export interface HTTPSeekRequestClass {
}

export abstract class HTTPSeekRequestClass {

    // Own properties of RygelServer-2.8.RygelServer.HTTPSeekRequestClass

    static name: string
}

export interface HTTPSeekRequestPrivate {
}

export class HTTPSeekRequestPrivate {

    // Own properties of RygelServer-2.8.RygelServer.HTTPSeekRequestPrivate

    static name: string
}

export interface PlaylistItemClass {
}

export abstract class PlaylistItemClass {

    // Own properties of RygelServer-2.8.RygelServer.PlaylistItemClass

    static name: string
}

export interface PlaylistItemPrivate {
}

export class PlaylistItemPrivate {

    // Own properties of RygelServer-2.8.RygelServer.PlaylistItemPrivate

    static name: string
}

export interface ContentDirectoryClass {
}

export abstract class ContentDirectoryClass {

    // Own properties of RygelServer-2.8.RygelServer.ContentDirectoryClass

    static name: string
}

export interface ContentDirectoryPrivate {
}

export class ContentDirectoryPrivate {

    // Own properties of RygelServer-2.8.RygelServer.ContentDirectoryPrivate

    static name: string
}

export interface HTTPByteSeekRequestClass {
}

export abstract class HTTPByteSeekRequestClass {

    // Own properties of RygelServer-2.8.RygelServer.HTTPByteSeekRequestClass

    static name: string
}

export interface HTTPByteSeekRequestPrivate {
}

export class HTTPByteSeekRequestPrivate {

    // Own properties of RygelServer-2.8.RygelServer.HTTPByteSeekRequestPrivate

    static name: string
}

export interface HTTPByteSeekResponseClass {
}

export abstract class HTTPByteSeekResponseClass {

    // Own properties of RygelServer-2.8.RygelServer.HTTPByteSeekResponseClass

    static name: string
}

export interface HTTPByteSeekResponsePrivate {
}

export class HTTPByteSeekResponsePrivate {

    // Own properties of RygelServer-2.8.RygelServer.HTTPByteSeekResponsePrivate

    static name: string
}

export interface HTTPGetHandlerClass {

    // Own fields of RygelServer-2.8.RygelServer.HTTPGetHandlerClass

    addResponseHeaders: (self: HTTPGetHandler, request: HTTPGet) => void
    getDefaultTransferMode: (self: HTTPGetHandler) => string | null
    supportsTransferMode: (self: HTTPGetHandler, mode: string | null) => boolean
    getResourceSize: (self: HTTPGetHandler) => number
    getResourceDuration: (self: HTTPGetHandler) => number
    supportsByteSeek: (self: HTTPGetHandler) => boolean
    supportsTimeSeek: (self: HTTPGetHandler) => boolean
    supportsPlayspeed: (self: HTTPGetHandler) => boolean
    renderBody: (self: HTTPGetHandler, request: HTTPGet) => HTTPResponse
}

export abstract class HTTPGetHandlerClass {

    // Own properties of RygelServer-2.8.RygelServer.HTTPGetHandlerClass

    static name: string
}

export interface HTTPGetHandlerPrivate {
}

export class HTTPGetHandlerPrivate {

    // Own properties of RygelServer-2.8.RygelServer.HTTPGetHandlerPrivate

    static name: string
}

export interface HTTPGetClass {
}

export abstract class HTTPGetClass {

    // Own properties of RygelServer-2.8.RygelServer.HTTPGetClass

    static name: string
}

export interface HTTPGetPrivate {
}

export class HTTPGetPrivate {

    // Own properties of RygelServer-2.8.RygelServer.HTTPGetPrivate

    static name: string
}

export interface HTTPItemURIClass {
}

export abstract class HTTPItemURIClass {

    // Own properties of RygelServer-2.8.RygelServer.HTTPItemURIClass

    static name: string
}

export interface HTTPItemURIPrivate {
}

export class HTTPItemURIPrivate {

    // Own properties of RygelServer-2.8.RygelServer.HTTPItemURIPrivate

    static name: string
}

export interface HTTPRequestClass {

    // Own fields of RygelServer-2.8.RygelServer.HTTPRequestClass

    handle: (self: HTTPRequest, callback: Gio.AsyncReadyCallback | null) => void
    handleFinish: (self: HTTPRequest, res: Gio.AsyncResult) => void
    findItem: (self: HTTPRequest, callback: Gio.AsyncReadyCallback | null) => void
    findItemFinish: (self: HTTPRequest, res: Gio.AsyncResult) => void
}

export abstract class HTTPRequestClass {

    // Own properties of RygelServer-2.8.RygelServer.HTTPRequestClass

    static name: string
}

export interface HTTPRequestPrivate {
}

export class HTTPRequestPrivate {

    // Own properties of RygelServer-2.8.RygelServer.HTTPRequestPrivate

    static name: string
}

export interface HTTPResponseClass {

    // Own fields of RygelServer-2.8.RygelServer.HTTPResponseClass

    end: (self: HTTPResponse, aborted: boolean, status: number) => void
}

export abstract class HTTPResponseClass {

    // Own properties of RygelServer-2.8.RygelServer.HTTPResponseClass

    static name: string
}

export interface HTTPResponsePrivate {
}

export class HTTPResponsePrivate {

    // Own properties of RygelServer-2.8.RygelServer.HTTPResponsePrivate

    static name: string
}

export interface HTTPResponseElementClass {

    // Own fields of RygelServer-2.8.RygelServer.HTTPResponseElementClass

    addResponseHeaders: (self: HTTPResponseElement, request: HTTPRequest) => void
    toString: (self: HTTPResponseElement) => string | null
}

export abstract class HTTPResponseElementClass {

    // Own properties of RygelServer-2.8.RygelServer.HTTPResponseElementClass

    static name: string
}

export interface HTTPResponseElementPrivate {
}

export class HTTPResponseElementPrivate {

    // Own properties of RygelServer-2.8.RygelServer.HTTPResponseElementPrivate

    static name: string
}

export interface HTTPServerClass {

    // Own fields of RygelServer-2.8.RygelServer.HTTPServerClass

    getProtocol: (self: HTTPServer) => string | null
    getProtocolInfo: (self: HTTPServer) => Gee.ArrayList
}

export abstract class HTTPServerClass {

    // Own properties of RygelServer-2.8.RygelServer.HTTPServerClass

    static name: string
}

export interface HTTPServerPrivate {
}

export class HTTPServerPrivate {

    // Own properties of RygelServer-2.8.RygelServer.HTTPServerPrivate

    static name: string
}

export interface HTTPTimeSeekRequestClass {
}

export abstract class HTTPTimeSeekRequestClass {

    // Own properties of RygelServer-2.8.RygelServer.HTTPTimeSeekRequestClass

    static name: string
}

export interface HTTPTimeSeekRequestPrivate {
}

export class HTTPTimeSeekRequestPrivate {

    // Own properties of RygelServer-2.8.RygelServer.HTTPTimeSeekRequestPrivate

    static name: string
}

export interface HTTPTimeSeekResponseClass {
}

export abstract class HTTPTimeSeekResponseClass {

    // Own properties of RygelServer-2.8.RygelServer.HTTPTimeSeekResponseClass

    static name: string
}

export interface HTTPTimeSeekResponsePrivate {
}

export class HTTPTimeSeekResponsePrivate {

    // Own properties of RygelServer-2.8.RygelServer.HTTPTimeSeekResponsePrivate

    static name: string
}

export interface SerializerClass {
}

export abstract class SerializerClass {

    // Own properties of RygelServer-2.8.RygelServer.SerializerClass

    static name: string
}

export interface SerializerPrivate {
}

export class SerializerPrivate {

    // Own properties of RygelServer-2.8.RygelServer.SerializerPrivate

    static name: string
}

export interface PlaySpeedClass {
}

export abstract class PlaySpeedClass {

    // Own properties of RygelServer-2.8.RygelServer.PlaySpeedClass

    static name: string
}

export interface PlaySpeedPrivate {
}

export class PlaySpeedPrivate {

    // Own properties of RygelServer-2.8.RygelServer.PlaySpeedPrivate

    static name: string
}

export interface PlaySpeedRequestClass {
}

export abstract class PlaySpeedRequestClass {

    // Own properties of RygelServer-2.8.RygelServer.PlaySpeedRequestClass

    static name: string
}

export interface PlaySpeedRequestPrivate {
}

export class PlaySpeedRequestPrivate {

    // Own properties of RygelServer-2.8.RygelServer.PlaySpeedRequestPrivate

    static name: string
}

export interface PlaySpeedResponseClass {
}

export abstract class PlaySpeedResponseClass {

    // Own properties of RygelServer-2.8.RygelServer.PlaySpeedResponseClass

    static name: string
}

export interface PlaySpeedResponsePrivate {
}

export class PlaySpeedResponsePrivate {

    // Own properties of RygelServer-2.8.RygelServer.PlaySpeedResponsePrivate

    static name: string
}

export interface DTCPCleartextRequestClass {
}

export abstract class DTCPCleartextRequestClass {

    // Own properties of RygelServer-2.8.RygelServer.DTCPCleartextRequestClass

    static name: string
}

export interface DTCPCleartextRequestPrivate {
}

export class DTCPCleartextRequestPrivate {

    // Own properties of RygelServer-2.8.RygelServer.DTCPCleartextRequestPrivate

    static name: string
}

export interface DTCPCleartextResponseClass {
}

export abstract class DTCPCleartextResponseClass {

    // Own properties of RygelServer-2.8.RygelServer.DTCPCleartextResponseClass

    static name: string
}

export interface DTCPCleartextResponsePrivate {
}

export class DTCPCleartextResponsePrivate {

    // Own properties of RygelServer-2.8.RygelServer.DTCPCleartextResponsePrivate

    static name: string
}

export interface DLNAAvailableSeekRangeRequestClass {
}

export abstract class DLNAAvailableSeekRangeRequestClass {

    // Own properties of RygelServer-2.8.RygelServer.DLNAAvailableSeekRangeRequestClass

    static name: string
}

export interface DLNAAvailableSeekRangeRequestPrivate {
}

export class DLNAAvailableSeekRangeRequestPrivate {

    // Own properties of RygelServer-2.8.RygelServer.DLNAAvailableSeekRangeRequestPrivate

    static name: string
}

export interface DLNAAvailableSeekRangeResponseClass {
}

export abstract class DLNAAvailableSeekRangeResponseClass {

    // Own properties of RygelServer-2.8.RygelServer.DLNAAvailableSeekRangeResponseClass

    static name: string
}

export interface DLNAAvailableSeekRangeResponsePrivate {
}

export class DLNAAvailableSeekRangeResponsePrivate {

    // Own properties of RygelServer-2.8.RygelServer.DLNAAvailableSeekRangeResponsePrivate

    static name: string
}

export interface SearchableContainerIface {

    // Own fields of RygelServer-2.8.RygelServer.SearchableContainerIface

    search: (self: SearchableContainer, expression: SearchExpression | null, offset: number, maxCount: number, sortCriteria: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    searchFinish: (self: SearchableContainer, res: Gio.AsyncResult) => [ /* returnType */ MediaObjects | null, /* totalMatches */ number ]
    getSearchClasses: (self: SearchableContainer) => Gee.ArrayList
    setSearchClasses: (self: SearchableContainer, value: Gee.ArrayList) => void
}

export abstract class SearchableContainerIface {

    // Own properties of RygelServer-2.8.RygelServer.SearchableContainerIface

    static name: string
}

export interface TrackableContainerIface {

    // Own fields of RygelServer-2.8.RygelServer.TrackableContainerIface

    addChild: (self: TrackableContainer, object: MediaObject, callback: Gio.AsyncReadyCallback | null) => void
    addChildFinish: (self: TrackableContainer, res: Gio.AsyncResult) => void
    removeChild: (self: TrackableContainer, object: MediaObject, callback: Gio.AsyncReadyCallback | null) => void
    removeChildFinish: (self: TrackableContainer, res: Gio.AsyncResult) => void
    getServiceResetToken: (self: TrackableContainer) => string | null
    setServiceResetToken: (self: TrackableContainer, token: string | null) => void
    getSystemUpdateId: (self: TrackableContainer) => number
}

export abstract class TrackableContainerIface {

    // Own properties of RygelServer-2.8.RygelServer.TrackableContainerIface

    static name: string
}

export interface TrackableItemIface {
}

export abstract class TrackableItemIface {

    // Own properties of RygelServer-2.8.RygelServer.TrackableItemIface

    static name: string
}

export interface VisualItemIface {

    // Own fields of RygelServer-2.8.RygelServer.VisualItemIface

    getWidth: (self: VisualItem) => number
    setWidth: (self: VisualItem, value: number) => void
    getHeight: (self: VisualItem) => number
    setHeight: (self: VisualItem, value: number) => void
    getColorDepth: (self: VisualItem) => number
    setColorDepth: (self: VisualItem, value: number) => void
    getThumbnails: (self: VisualItem) => Gee.ArrayList
    setThumbnails: (self: VisualItem, value: Gee.ArrayList) => void
}

export abstract class VisualItemIface {

    // Own properties of RygelServer-2.8.RygelServer.VisualItemIface

    static name: string
}

export interface WritableContainerIface {

    // Own fields of RygelServer-2.8.RygelServer.WritableContainerIface

    addItem: (self: WritableContainer, item: MediaFileItem, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    addItemFinish: (self: WritableContainer, res: Gio.AsyncResult) => void
    addContainer: (self: WritableContainer, container: MediaContainer, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    addContainerFinish: (self: WritableContainer, res: Gio.AsyncResult) => void
    addReference: (self: WritableContainer, object: MediaObject, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    addReferenceFinish: (self: WritableContainer, res: Gio.AsyncResult) => string | null
    removeItem: (self: WritableContainer, id: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    removeItemFinish: (self: WritableContainer, res: Gio.AsyncResult) => void
    removeContainer: (self: WritableContainer, id: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    removeContainerFinish: (self: WritableContainer, res: Gio.AsyncResult) => void
    getCreateClasses: (self: WritableContainer) => Gee.ArrayList
    setCreateClasses: (self: WritableContainer, value: Gee.ArrayList) => void
}

export abstract class WritableContainerIface {

    // Own properties of RygelServer-2.8.RygelServer.WritableContainerIface

    static name: string
}

export interface DataSourceIface {

    // Own fields of RygelServer-2.8.RygelServer.DataSourceIface

    preroll: (self: DataSource, seek: HTTPSeekRequest | null, playspeed: PlaySpeedRequest | null) => Gee.List | null
    start: (self: DataSource) => void
    freeze: (self: DataSource) => void
    thaw: (self: DataSource) => void
    stop: (self: DataSource) => void
}

export abstract class DataSourceIface {

    // Own properties of RygelServer-2.8.RygelServer.DataSourceIface

    static name: string
}

export interface UpdatableObjectIface {

    // Own fields of RygelServer-2.8.RygelServer.UpdatableObjectIface

    commit: (self: UpdatableObject, callback: Gio.AsyncReadyCallback | null) => void
    commitFinish: (self: UpdatableObject, res: Gio.AsyncResult) => void
}

export abstract class UpdatableObjectIface {

    // Own properties of RygelServer-2.8.RygelServer.UpdatableObjectIface

    static name: string
}
