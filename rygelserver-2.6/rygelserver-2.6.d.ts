
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './rygelserver-2.6-ambient.d.ts';
import './rygelserver-2.6-import.d.ts';
/**
 * RygelServer-2.6
 */

import type RygelCore from '@girs/rygelcore-2.6';
import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GUPnP from '@girs/gupnp-1.2';
import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-2.4';
import type GSSDP from '@girs/gssdp-1.2';
import type GUPnPAV from '@girs/gupnpav-1.0';

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
module SearchableContainer {

    // Constructor properties interface

    interface ConstructorProperties extends MediaContainer.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.SearchableContainer

        search_classes?: Gee.ArrayList | null
        searchClasses?: Gee.ArrayList | null
    }

}

interface SearchableContainer extends MediaContainer {

    // Own properties of RygelServer-2.6.RygelServer.SearchableContainer

    search_classes: Gee.ArrayList
    searchClasses: Gee.ArrayList

    // Owm methods of RygelServer-2.6.RygelServer.SearchableContainer

    search(expression: SearchExpression | null, offset: number, max_count: number, sort_criteria: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    search_finish(_res_: Gio.AsyncResult): [ /* returnType */ MediaObjects | null, /* total_matches */ number ]
    simple_search(expression: SearchExpression | null, offset: number, max_count: number, sort_criteria: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    simple_search_finish(_res_: Gio.AsyncResult): [ /* returnType */ MediaObjects | null, /* total_matches */ number ]
    find_object(id: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    find_object_finish(_res_: Gio.AsyncResult): MediaObject | null
    get_search_classes(): Gee.ArrayList
    set_search_classes(value: Gee.ArrayList): void

    // Own virtual methods of RygelServer-2.6.RygelServer.SearchableContainer

    vfunc_search(expression: SearchExpression | null, offset: number, max_count: number, sort_criteria: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_search_finish(_res_: Gio.AsyncResult): [ /* returnType */ MediaObjects | null, /* total_matches */ number ]
    vfunc_get_search_classes(): Gee.ArrayList
    vfunc_set_search_classes(value: Gee.ArrayList): void

    // Class property signals of RygelServer-2.6.RygelServer.SearchableContainer

    connect(sigName: "notify::search-classes", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-classes", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-classes", ...args: any[]): void
    connect(sigName: "notify::child-count", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-count", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-count", ...args: any[]): void
    connect(sigName: "notify::empty-child-count", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::empty-child-count", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::empty-child-count", ...args: any[]): void
    connect(sigName: "notify::all-child-count", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::all-child-count", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::all-child-count", ...args: any[]): void
    connect(sigName: "notify::create-mode-enabled", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::create-mode-enabled", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::create-mode-enabled", ...args: any[]): void
    connect(sigName: "notify::sort-criteria", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-criteria", callback: (($obj: SearchableContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sort-criteria", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SearchableContainer extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.SearchableContainer

    static name: string
    static $gtype: GObject.GType<SearchableContainer>

    // Constructors of RygelServer-2.6.RygelServer.SearchableContainer

    constructor(config?: SearchableContainer.ConstructorProperties) 
    _init(config?: SearchableContainer.ConstructorProperties): void
}

module TrackableContainer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `child-added`
     */
    interface ChildAddedSignalCallback {
        ($obj: TrackableContainer, object: MediaObject): void
    }

    /**
     * Signal callback interface for `child-removed`
     */
    interface ChildRemovedSignalCallback {
        ($obj: TrackableContainer, object: MediaObject): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends MediaContainer.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface TrackableContainer extends MediaContainer {

    // Owm methods of RygelServer-2.6.RygelServer.TrackableContainer

    clear(_callback_: Gio.AsyncReadyCallback<this> | null): void
    clear_finish(_res_: Gio.AsyncResult): void
    add_child(object: MediaObject, _callback_: Gio.AsyncReadyCallback<this> | null): void
    add_child_finish(_res_: Gio.AsyncResult): void
    add_child_tracked(object: MediaObject, _callback_: Gio.AsyncReadyCallback<this> | null): void
    add_child_tracked_finish(_res_: Gio.AsyncResult): void
    remove_child(object: MediaObject, _callback_: Gio.AsyncReadyCallback<this> | null): void
    remove_child_finish(_res_: Gio.AsyncResult): void
    remove_child_tracked(object: MediaObject, _callback_: Gio.AsyncReadyCallback<this> | null): void
    remove_child_tracked_finish(_res_: Gio.AsyncResult): void
    get_service_reset_token(): string | null
    set_service_reset_token(token: string): void
    get_system_update_id(): number

    // Own virtual methods of RygelServer-2.6.RygelServer.TrackableContainer

    vfunc_add_child(object: MediaObject, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_add_child_finish(_res_: Gio.AsyncResult): void
    vfunc_remove_child(object: MediaObject, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_remove_child_finish(_res_: Gio.AsyncResult): void
    vfunc_get_service_reset_token(): string | null
    vfunc_set_service_reset_token(token: string): void
    vfunc_get_system_update_id(): number

    // Own signals of RygelServer-2.6.RygelServer.TrackableContainer

    connect(sigName: "child-added", callback: TrackableContainer.ChildAddedSignalCallback): number
    connect_after(sigName: "child-added", callback: TrackableContainer.ChildAddedSignalCallback): number
    emit(sigName: "child-added", object: MediaObject, ...args: any[]): void
    connect(sigName: "child-removed", callback: TrackableContainer.ChildRemovedSignalCallback): number
    connect_after(sigName: "child-removed", callback: TrackableContainer.ChildRemovedSignalCallback): number
    emit(sigName: "child-removed", object: MediaObject, ...args: any[]): void

    // Class property signals of RygelServer-2.6.RygelServer.TrackableContainer

    connect(sigName: "notify::child-count", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-count", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-count", ...args: any[]): void
    connect(sigName: "notify::empty-child-count", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::empty-child-count", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::empty-child-count", ...args: any[]): void
    connect(sigName: "notify::all-child-count", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::all-child-count", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::all-child-count", ...args: any[]): void
    connect(sigName: "notify::create-mode-enabled", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::create-mode-enabled", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::create-mode-enabled", ...args: any[]): void
    connect(sigName: "notify::sort-criteria", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-criteria", callback: (($obj: TrackableContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sort-criteria", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TrackableContainer extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.TrackableContainer

    static name: string
    static $gtype: GObject.GType<TrackableContainer>

    // Constructors of RygelServer-2.6.RygelServer.TrackableContainer

    constructor(config?: TrackableContainer.ConstructorProperties) 
    _init(config?: TrackableContainer.ConstructorProperties): void
}

module TrackableItem {

    // Constructor properties interface

    interface ConstructorProperties extends MediaItem.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface TrackableItem extends MediaItem {

    // Owm methods of RygelServer-2.6.RygelServer.TrackableItem

    changed(): void

    // Class property signals of RygelServer-2.6.RygelServer.TrackableItem

    connect(sigName: "notify::description", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: TrackableItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TrackableItem extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.TrackableItem

    static name: string
    static $gtype: GObject.GType<TrackableItem>

    // Constructors of RygelServer-2.6.RygelServer.TrackableItem

    constructor(config?: TrackableItem.ConstructorProperties) 
    _init(config?: TrackableItem.ConstructorProperties): void
}

module VisualItem {

    // Constructor properties interface

    interface ConstructorProperties extends MediaFileItem.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.VisualItem

        width?: number | null
        height?: number | null
        color_depth?: number | null
        thumbnails?: Gee.ArrayList | null
        colorDepth?: number | null
    }

}

interface VisualItem extends MediaFileItem {

    // Own properties of RygelServer-2.6.RygelServer.VisualItem

    width: number
    height: number
    color_depth: number
    colorDepth: number
    thumbnails: Gee.ArrayList

    // Owm methods of RygelServer-2.6.RygelServer.VisualItem

    get_width(): number
    set_width(value: number): void
    get_height(): number
    set_height(value: number): void
    get_color_depth(): number
    set_color_depth(value: number): void
    get_thumbnails(): Gee.ArrayList
    set_thumbnails(value: Gee.ArrayList): void

    // Own virtual methods of RygelServer-2.6.RygelServer.VisualItem

    vfunc_get_width(): number
    vfunc_set_width(value: number): void
    vfunc_get_height(): number
    vfunc_set_height(value: number): void
    vfunc_get_color_depth(): number
    vfunc_set_color_depth(value: number): void
    vfunc_get_thumbnails(): Gee.ArrayList
    vfunc_set_thumbnails(value: Gee.ArrayList): void

    // Class property signals of RygelServer-2.6.RygelServer.VisualItem

    connect(sigName: "notify::width", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::color-depth", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-depth", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color-depth", ...args: any[]): void
    connect(sigName: "notify::thumbnails", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thumbnails", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::thumbnails", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::dlna-profile", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-profile", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::place-holder", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: VisualItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::place-holder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VisualItem extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.VisualItem

    static name: string
    static $gtype: GObject.GType<VisualItem>

    // Constructors of RygelServer-2.6.RygelServer.VisualItem

    constructor(config?: VisualItem.ConstructorProperties) 
    _init(config?: VisualItem.ConstructorProperties): void
}

module WritableContainer {

    // Constructor properties interface

    interface ConstructorProperties extends MediaContainer.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.WritableContainer

        create_classes?: Gee.ArrayList | null
        createClasses?: Gee.ArrayList | null
    }

}

interface WritableContainer extends MediaContainer {

    // Own properties of RygelServer-2.6.RygelServer.WritableContainer

    create_classes: Gee.ArrayList
    createClasses: Gee.ArrayList

    // Owm methods of RygelServer-2.6.RygelServer.WritableContainer

    can_create(upnp_class: string): boolean
    add_item(item: MediaFileItem, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    add_item_finish(_res_: Gio.AsyncResult): void
    add_container(container: MediaContainer, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    add_container_finish(_res_: Gio.AsyncResult): void
    add_reference(object: MediaObject, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    add_reference_finish(_res_: Gio.AsyncResult): string | null
    remove_item(id: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    remove_item_finish(_res_: Gio.AsyncResult): void
    remove_container(id: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    remove_container_finish(_res_: Gio.AsyncResult): void
    get_create_classes(): Gee.ArrayList
    set_create_classes(value: Gee.ArrayList): void

    // Own virtual methods of RygelServer-2.6.RygelServer.WritableContainer

    vfunc_add_item(item: MediaFileItem, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_add_item_finish(_res_: Gio.AsyncResult): void
    vfunc_add_container(container: MediaContainer, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_add_container_finish(_res_: Gio.AsyncResult): void
    vfunc_add_reference(object: MediaObject, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_add_reference_finish(_res_: Gio.AsyncResult): string | null
    vfunc_remove_item(id: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_remove_item_finish(_res_: Gio.AsyncResult): void
    vfunc_remove_container(id: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_remove_container_finish(_res_: Gio.AsyncResult): void
    vfunc_get_create_classes(): Gee.ArrayList
    vfunc_set_create_classes(value: Gee.ArrayList): void

    // Class property signals of RygelServer-2.6.RygelServer.WritableContainer

    connect(sigName: "notify::create-classes", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::create-classes", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::create-classes", ...args: any[]): void
    connect(sigName: "notify::child-count", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-count", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-count", ...args: any[]): void
    connect(sigName: "notify::empty-child-count", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::empty-child-count", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::empty-child-count", ...args: any[]): void
    connect(sigName: "notify::all-child-count", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::all-child-count", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::all-child-count", ...args: any[]): void
    connect(sigName: "notify::create-mode-enabled", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::create-mode-enabled", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::create-mode-enabled", ...args: any[]): void
    connect(sigName: "notify::sort-criteria", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-criteria", callback: (($obj: WritableContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sort-criteria", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WritableContainer extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.WritableContainer

    static name: string
    static $gtype: GObject.GType<WritableContainer>

    // Constructors of RygelServer-2.6.RygelServer.WritableContainer

    constructor(config?: WritableContainer.ConstructorProperties) 
    _init(config?: WritableContainer.ConstructorProperties): void
}

module DataSource {

    // Signal callback interfaces

    /**
     * Signal callback interface for `data-available`
     */
    interface DataAvailableSignalCallback {
        ($obj: DataSource, data: Uint8Array): void
    }

    /**
     * Signal callback interface for `done`
     */
    interface DoneSignalCallback {
        ($obj: DataSource): void
    }

    /**
     * Signal callback interface for `error`
     */
    interface ErrorSignalCallback {
        ($obj: DataSource, _error_: GLib.Error): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DataSource extends GObject.Object {

    // Owm methods of RygelServer-2.6.RygelServer.DataSource

    preroll(seek: HTTPSeekRequest | null, playspeed: PlaySpeedRequest | null): Gee.List | null
    start(): void
    freeze(): void
    thaw(): void
    stop(): void

    // Own virtual methods of RygelServer-2.6.RygelServer.DataSource

    vfunc_preroll(seek: HTTPSeekRequest | null, playspeed: PlaySpeedRequest | null): Gee.List | null
    vfunc_start(): void
    vfunc_freeze(): void
    vfunc_thaw(): void
    vfunc_stop(): void

    // Own signals of RygelServer-2.6.RygelServer.DataSource

    connect(sigName: "data-available", callback: DataSource.DataAvailableSignalCallback): number
    connect_after(sigName: "data-available", callback: DataSource.DataAvailableSignalCallback): number
    emit(sigName: "data-available", data: Uint8Array, ...args: any[]): void
    connect(sigName: "done", callback: DataSource.DoneSignalCallback): number
    connect_after(sigName: "done", callback: DataSource.DoneSignalCallback): number
    emit(sigName: "done", ...args: any[]): void
    connect(sigName: "error", callback: DataSource.ErrorSignalCallback): number
    connect_after(sigName: "error", callback: DataSource.ErrorSignalCallback): number
    emit(sigName: "error", _error_: GLib.Error, ...args: any[]): void

    // Class property signals of RygelServer-2.6.RygelServer.DataSource

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataSource {

    // Own properties of RygelServer-2.6.RygelServer.DataSource

    static name: string
    static $gtype: GObject.GType<DataSource>

    // Constructors of RygelServer-2.6.RygelServer.DataSource

    constructor(config?: DataSource.ConstructorProperties) 
    _init(config?: DataSource.ConstructorProperties): void
}

module UpdatableObject {

    // Constructor properties interface

    interface ConstructorProperties extends MediaObject.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface UpdatableObject extends MediaObject {

    // Owm methods of RygelServer-2.6.RygelServer.UpdatableObject

    commit(_callback_: Gio.AsyncReadyCallback<this> | null): void
    commit_finish(_res_: Gio.AsyncResult): void

    // Own virtual methods of RygelServer-2.6.RygelServer.UpdatableObject

    vfunc_commit(_callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_commit_finish(_res_: Gio.AsyncResult): void

    // Class property signals of RygelServer-2.6.RygelServer.UpdatableObject

    connect(sigName: "notify::id", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::date", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-update-id", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-update-id", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::parent-ref", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-ref", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::ocm-flags", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: UpdatableObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ocm-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UpdatableObject extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.UpdatableObject

    static name: string
    static $gtype: GObject.GType<UpdatableObject>

    // Constructors of RygelServer-2.6.RygelServer.UpdatableObject

    constructor(config?: UpdatableObject.ConstructorProperties) 
    _init(config?: UpdatableObject.ConstructorProperties): void
}

// Workaround
/** @ignore */
interface IconInfo extends RygelCore.IconInfo {}
module AudioItem {

    // Constructor properties interface

    interface ConstructorProperties extends MediaFileItem.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.AudioItem

        duration?: number | null
        bitrate?: number | null
        sample_freq?: number | null
        bits_per_sample?: number | null
        channels?: number | null
        album?: string | null
        sampleFreq?: number | null
        bitsPerSample?: number | null
    }

}

interface AudioItem {

    // Own properties of RygelServer-2.6.RygelServer.AudioItem

    duration: number
    bitrate: number
    sample_freq: number
    sampleFreq: number
    bits_per_sample: number
    bitsPerSample: number
    channels: number
    album: string | null

    // Owm methods of RygelServer-2.6.RygelServer.AudioItem

    get_duration(): number
    set_duration(value: number): void
    get_bitrate(): number
    set_bitrate(value: number): void
    get_sample_freq(): number
    set_sample_freq(value: number): void
    get_bits_per_sample(): number
    set_bits_per_sample(value: number): void
    get_channels(): number
    set_channels(value: number): void
    get_album(): string
    set_album(value: string): void

    // Class property signals of RygelServer-2.6.RygelServer.AudioItem

    connect(sigName: "notify::duration", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::bitrate", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitrate", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bitrate", ...args: any[]): void
    connect(sigName: "notify::sample-freq", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sample-freq", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sample-freq", ...args: any[]): void
    connect(sigName: "notify::bits-per-sample", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bits-per-sample", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bits-per-sample", ...args: any[]): void
    connect(sigName: "notify::channels", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channels", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channels", ...args: any[]): void
    connect(sigName: "notify::album", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::album", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::dlna-profile", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-profile", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::place-holder", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::place-holder", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::date", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-update-id", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-update-id", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::parent-ref", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-ref", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::ocm-flags", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: AudioItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ocm-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AudioItem extends MediaFileItem {

    // Own properties of RygelServer-2.6.RygelServer.AudioItem

    static name: string
    static $gtype: GObject.GType<AudioItem>

    // Constructors of RygelServer-2.6.RygelServer.AudioItem

    constructor(config?: AudioItem.ConstructorProperties) 
    constructor(id: string, parent: MediaContainer, title: string, upnp_class: string) 
    static new(id: string, parent: MediaContainer, title: string, upnp_class: string): AudioItem
    _init(config?: AudioItem.ConstructorProperties): void
}

module ImageItem {

    // Constructor properties interface

    interface ConstructorProperties extends VisualItem.ConstructorProperties, MediaFileItem.ConstructorProperties {
    }

}

interface ImageItem extends VisualItem {

    // Class property signals of RygelServer-2.6.RygelServer.ImageItem

    connect(sigName: "notify::mime-type", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::dlna-profile", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-profile", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::place-holder", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::place-holder", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::date", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-update-id", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-update-id", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::parent-ref", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-ref", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::ocm-flags", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ocm-flags", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::color-depth", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-depth", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color-depth", ...args: any[]): void
    connect(sigName: "notify::thumbnails", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thumbnails", callback: (($obj: ImageItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::thumbnails", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ImageItem extends MediaFileItem {

    // Own properties of RygelServer-2.6.RygelServer.ImageItem

    static name: string
    static $gtype: GObject.GType<ImageItem>

    // Constructors of RygelServer-2.6.RygelServer.ImageItem

    constructor(config?: ImageItem.ConstructorProperties) 
    constructor(id: string, parent: MediaContainer, title: string, upnp_class: string) 
    static new(id: string, parent: MediaContainer, title: string, upnp_class: string): ImageItem
    _init(config?: ImageItem.ConstructorProperties): void
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

module MediaArtStore {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface MediaArtStore {

    // Owm methods of RygelServer-2.6.RygelServer.MediaArtStore

    lookup_media_art(item: MusicItem): Thumbnail | null
    add(item: MusicItem, file: Gio.File, data: Uint8Array, mime: string): void
    search_media_art_for_file(item: MusicItem, file: Gio.File): void

    // Class property signals of RygelServer-2.6.RygelServer.MediaArtStore

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MediaArtStore extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.MediaArtStore

    static name: string
    static $gtype: GObject.GType<MediaArtStore>

    // Constructors of RygelServer-2.6.RygelServer.MediaArtStore

    constructor(config?: MediaArtStore.ConstructorProperties) 
    _init(config?: MediaArtStore.ConstructorProperties): void
    static get_default(): MediaArtStore | null
}

module MediaObjects {

    // Constructor properties interface

    interface ConstructorProperties extends Gee.ArrayList.ConstructorProperties {
    }

}

interface MediaObjects {

    // Conflicting properties

    read_only_view: any
    readOnlyView: any

    // Owm methods of RygelServer-2.6.RygelServer.MediaObjects

    sort_by_criteria(sort_criteria: string): void

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of RygelServer-2.6.RygelServer.MediaObjects

    connect(sigName: "notify::g-type", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: MediaObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MediaObjects extends Gee.ArrayList {

    // Own properties of RygelServer-2.6.RygelServer.MediaObjects

    static name: string
    static $gtype: GObject.GType<MediaObjects>

    // Constructors of RygelServer-2.6.RygelServer.MediaObjects

    constructor(config?: MediaObjects.ConstructorProperties) 
    constructor() 
    static new(): MediaObjects

    // Overloads of new

    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: MediaObjects.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

module MusicItem {

    // Constructor properties interface

    interface ConstructorProperties extends AudioItem.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.MusicItem

        track_number?: number | null
        album_art?: Thumbnail | null
        trackNumber?: number | null
        albumArt?: Thumbnail | null
    }

}

interface MusicItem {

    // Own properties of RygelServer-2.6.RygelServer.MusicItem

    track_number: number
    trackNumber: number
    album_art: Thumbnail
    albumArt: Thumbnail

    // Owm methods of RygelServer-2.6.RygelServer.MusicItem

    lookup_album_art(): void
    get_track_number(): number
    set_track_number(value: number): void
    get_album_art(): Thumbnail
    set_album_art(value: Thumbnail): void

    // Class property signals of RygelServer-2.6.RygelServer.MusicItem

    connect(sigName: "notify::track-number", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-number", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::track-number", ...args: any[]): void
    connect(sigName: "notify::album-art", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album-art", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::album-art", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::bitrate", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitrate", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bitrate", ...args: any[]): void
    connect(sigName: "notify::sample-freq", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sample-freq", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sample-freq", ...args: any[]): void
    connect(sigName: "notify::bits-per-sample", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bits-per-sample", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bits-per-sample", ...args: any[]): void
    connect(sigName: "notify::channels", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channels", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channels", ...args: any[]): void
    connect(sigName: "notify::album", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::album", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::dlna-profile", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-profile", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::place-holder", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::place-holder", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::date", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-update-id", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-update-id", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::parent-ref", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-ref", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::ocm-flags", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: MusicItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ocm-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MusicItem extends AudioItem {

    // Own properties of RygelServer-2.6.RygelServer.MusicItem

    static name: string
    static $gtype: GObject.GType<MusicItem>

    // Constructors of RygelServer-2.6.RygelServer.MusicItem

    constructor(config?: MusicItem.ConstructorProperties) 
    constructor(id: string, parent: MediaContainer, title: string, upnp_class: string) 
    static new(id: string, parent: MediaContainer, title: string, upnp_class: string): MusicItem

    // Overloads of new

    static new(id: string, parent: MediaContainer, title: string, upnp_class: string): AudioItem
    _init(config?: MusicItem.ConstructorProperties): void
}

module PhotoItem {

    // Constructor properties interface

    interface ConstructorProperties extends ImageItem.ConstructorProperties {
    }

}

interface PhotoItem {

    // Class property signals of RygelServer-2.6.RygelServer.PhotoItem

    connect(sigName: "notify::mime-type", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::dlna-profile", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-profile", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::place-holder", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::place-holder", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::date", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-update-id", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-update-id", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::parent-ref", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-ref", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::ocm-flags", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: PhotoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ocm-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PhotoItem extends ImageItem {

    // Own properties of RygelServer-2.6.RygelServer.PhotoItem

    static name: string
    static $gtype: GObject.GType<PhotoItem>

    // Constructors of RygelServer-2.6.RygelServer.PhotoItem

    constructor(config?: PhotoItem.ConstructorProperties) 
    constructor(id: string, parent: MediaContainer, title: string, upnp_class: string) 
    static new(id: string, parent: MediaContainer, title: string, upnp_class: string): PhotoItem

    // Overloads of new

    static new(id: string, parent: MediaContainer, title: string, upnp_class: string): ImageItem
    _init(config?: PhotoItem.ConstructorProperties): void
}

interface RelationalExpression {

    // Owm methods of RygelServer-2.6.RygelServer.RelationalExpression

    compare_string(str: string | null): boolean
    compare_int(integer: number): boolean
    compare_uint(integer: number): boolean
}

class RelationalExpression extends SearchExpression {

    // Own properties of RygelServer-2.6.RygelServer.RelationalExpression

    static name: string

    // Constructors of RygelServer-2.6.RygelServer.RelationalExpression

    constructor() 
    static new(): RelationalExpression
}

module SimpleContainer {

    // Constructor properties interface

    interface ConstructorProperties extends SearchableContainer.ConstructorProperties, MediaContainer.ConstructorProperties {
    }

}

interface SimpleContainer extends SearchableContainer {

    // Own fields of RygelServer-2.6.RygelServer.SimpleContainer

    children: MediaObjects

    // Owm methods of RygelServer-2.6.RygelServer.SimpleContainer

    add_child_item(child: MediaItem): void
    get_all_children(): MediaObjects
    add_child_container(child: MediaContainer): void
    remove_child(child: MediaObject): void
    clear(): void
    is_child_id_unique(child_id: string): boolean

    // Class property signals of RygelServer-2.6.RygelServer.SimpleContainer

    connect(sigName: "notify::child-count", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-count", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-count", ...args: any[]): void
    connect(sigName: "notify::empty-child-count", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::empty-child-count", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::empty-child-count", ...args: any[]): void
    connect(sigName: "notify::all-child-count", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::all-child-count", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::all-child-count", ...args: any[]): void
    connect(sigName: "notify::create-mode-enabled", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::create-mode-enabled", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::create-mode-enabled", ...args: any[]): void
    connect(sigName: "notify::sort-criteria", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-criteria", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sort-criteria", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::date", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-update-id", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-update-id", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::parent-ref", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-ref", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::ocm-flags", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ocm-flags", ...args: any[]): void
    connect(sigName: "notify::search-classes", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-classes", callback: (($obj: SimpleContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-classes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SimpleContainer extends MediaContainer {

    // Own properties of RygelServer-2.6.RygelServer.SimpleContainer

    static name: string
    static $gtype: GObject.GType<SimpleContainer>

    // Constructors of RygelServer-2.6.RygelServer.SimpleContainer

    constructor(config?: SimpleContainer.ConstructorProperties) 
    constructor(id: string, parent: MediaContainer | null, title: string) 
    static new(id: string, parent: MediaContainer | null, title: string): SimpleContainer
    static root(title: string): SimpleContainer
    _init(config?: SimpleContainer.ConstructorProperties): void
}

interface Subtitle {

    // Own fields of RygelServer-2.6.RygelServer.Subtitle

    ref_count: number
    uri: string | null
    mime_type: string | null
    caption_type: string | null
    file_extension: string | null
    size: number

    // Owm methods of RygelServer-2.6.RygelServer.Subtitle

    get_resource(protocol: string, index: number): MediaResource

    // Own virtual methods of RygelServer-2.6.RygelServer.Subtitle

    vfunc_get_resource(protocol: string, index: number): MediaResource
}

class Subtitle {

    // Own properties of RygelServer-2.6.RygelServer.Subtitle

    static name: string

    // Constructors of RygelServer-2.6.RygelServer.Subtitle

    constructor(mime_type: string, caption_type: string, file_extension: string) 
    static new(mime_type: string, caption_type: string, file_extension: string): Subtitle
}

interface Thumbnail {

    // Own fields of RygelServer-2.6.RygelServer.Thumbnail

    dlna_profile: string | null

    // Owm methods of RygelServer-2.6.RygelServer.Thumbnail

    get_resource(protocol: string, index: number): MediaResource

    // Own virtual methods of RygelServer-2.6.RygelServer.Thumbnail

    vfunc_get_resource(protocol: string, index: number): MediaResource
}

class Thumbnail extends RygelCore.IconInfo {

    // Own properties of RygelServer-2.6.RygelServer.Thumbnail

    static name: string

    // Constructors of RygelServer-2.6.RygelServer.Thumbnail

    constructor(mime_type: string, dlna_profile: string, file_extension: string) 
    static new(mime_type: string, dlna_profile: string, file_extension: string): Thumbnail

    // Overloads of new

    static new(mime_type: string, file_extension: string): RygelCore.IconInfo
}

module VideoItem {

    // Constructor properties interface

    interface ConstructorProperties extends VisualItem.ConstructorProperties, AudioItem.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.VideoItem

        author?: string | null
        subtitles?: Gee.ArrayList | null
    }

}

interface VideoItem extends VisualItem {

    // Own properties of RygelServer-2.6.RygelServer.VideoItem

    author: string | null
    subtitles: Gee.ArrayList

    // Owm methods of RygelServer-2.6.RygelServer.VideoItem

    add_subtitle_resources(http_server: HTTPServer): void
    get_author(): string
    set_author(value: string): void
    get_subtitles(): Gee.ArrayList
    set_subtitles(value: Gee.ArrayList): void

    // Own virtual methods of RygelServer-2.6.RygelServer.VideoItem

    vfunc_add_subtitle_resources(http_server: HTTPServer): void

    // Class property signals of RygelServer-2.6.RygelServer.VideoItem

    connect(sigName: "notify::author", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::subtitles", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitles", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitles", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::bitrate", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitrate", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bitrate", ...args: any[]): void
    connect(sigName: "notify::sample-freq", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sample-freq", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sample-freq", ...args: any[]): void
    connect(sigName: "notify::bits-per-sample", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bits-per-sample", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bits-per-sample", ...args: any[]): void
    connect(sigName: "notify::channels", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channels", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channels", ...args: any[]): void
    connect(sigName: "notify::album", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::album", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::dlna-profile", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-profile", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::place-holder", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::place-holder", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::date", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-update-id", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-update-id", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::parent-ref", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-ref", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::ocm-flags", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ocm-flags", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::color-depth", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-depth", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color-depth", ...args: any[]): void
    connect(sigName: "notify::thumbnails", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thumbnails", callback: (($obj: VideoItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::thumbnails", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VideoItem extends AudioItem {

    // Own properties of RygelServer-2.6.RygelServer.VideoItem

    static name: string
    static $gtype: GObject.GType<VideoItem>

    // Constructors of RygelServer-2.6.RygelServer.VideoItem

    constructor(config?: VideoItem.ConstructorProperties) 
    constructor(id: string, parent: MediaContainer, title: string, upnp_class: string) 
    static new(id: string, parent: MediaContainer, title: string, upnp_class: string): VideoItem

    // Overloads of new

    static new(id: string, parent: MediaContainer, title: string, upnp_class: string): AudioItem
    _init(config?: VideoItem.ConstructorProperties): void
}

module MediaContainer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `container-updated`
     */
    interface ContainerUpdatedSignalCallback {
        ($obj: MediaContainer, container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean): void
    }

    /**
     * Signal callback interface for `sub-tree-updates-finished`
     */
    interface SubTreeUpdatesFinishedSignalCallback {
        ($obj: MediaContainer, sub_tree_root: MediaObject): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends MediaObject.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.MediaContainer

        child_count?: number | null
        empty_child_count?: number | null
        create_mode_enabled?: boolean | null
        sort_criteria?: string | null
        childCount?: number | null
        emptyChildCount?: number | null
        createModeEnabled?: boolean | null
        sortCriteria?: string | null
    }

}

interface MediaContainer {

    // Own properties of RygelServer-2.6.RygelServer.MediaContainer

    child_count: number
    childCount: number
    empty_child_count: number
    emptyChildCount: number
    readonly all_child_count: number
    readonly allChildCount: number
    create_mode_enabled: boolean
    createModeEnabled: boolean
    sort_criteria: string | null
    sortCriteria: string | null

    // Own fields of RygelServer-2.6.RygelServer.MediaContainer

    update_id: number
    storage_used: number
    total_deleted_child_count: number

    // Owm methods of RygelServer-2.6.RygelServer.MediaContainer

    get_children(offset: number, max_count: number, sort_criteria: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null
    find_object(id: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    find_object_finish(_res_: Gio.AsyncResult): MediaObject | null
    updated(object: MediaObject | null, event_type: ObjectEventType, sub_tree_update: boolean): void
    get_child_count(): number
    set_child_count(value: number): void
    get_empty_child_count(): number
    set_empty_child_count(value: number): void
    get_all_child_count(): number
    get_create_mode_enabled(): boolean
    set_create_mode_enabled(value: boolean): void
    get_sort_criteria(): string
    set_sort_criteria(value: string): void

    // Own virtual methods of RygelServer-2.6.RygelServer.MediaContainer

    vfunc_get_children(offset: number, max_count: number, sort_criteria: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null
    vfunc_find_object(id: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_find_object_finish(_res_: Gio.AsyncResult): MediaObject | null

    // Own signals of RygelServer-2.6.RygelServer.MediaContainer

    connect(sigName: "container-updated", callback: MediaContainer.ContainerUpdatedSignalCallback): number
    connect_after(sigName: "container-updated", callback: MediaContainer.ContainerUpdatedSignalCallback): number
    emit(sigName: "container-updated", container: MediaContainer, object: MediaObject, event_type: ObjectEventType, sub_tree_update: boolean, ...args: any[]): void
    connect(sigName: "sub-tree-updates-finished", callback: MediaContainer.SubTreeUpdatesFinishedSignalCallback): number
    connect_after(sigName: "sub-tree-updates-finished", callback: MediaContainer.SubTreeUpdatesFinishedSignalCallback): number
    emit(sigName: "sub-tree-updates-finished", sub_tree_root: MediaObject, ...args: any[]): void

    // Class property signals of RygelServer-2.6.RygelServer.MediaContainer

    connect(sigName: "notify::child-count", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-count", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-count", ...args: any[]): void
    connect(sigName: "notify::empty-child-count", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::empty-child-count", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::empty-child-count", ...args: any[]): void
    connect(sigName: "notify::all-child-count", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::all-child-count", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::all-child-count", ...args: any[]): void
    connect(sigName: "notify::create-mode-enabled", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::create-mode-enabled", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::create-mode-enabled", ...args: any[]): void
    connect(sigName: "notify::sort-criteria", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-criteria", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sort-criteria", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::date", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-update-id", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-update-id", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::parent-ref", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-ref", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::ocm-flags", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: MediaContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ocm-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MediaContainer extends MediaObject {

    // Own properties of RygelServer-2.6.RygelServer.MediaContainer

    static name: string
    static $gtype: GObject.GType<MediaContainer>

    // Constructors of RygelServer-2.6.RygelServer.MediaContainer

    constructor(config?: MediaContainer.ConstructorProperties) 
    _init(config?: MediaContainer.ConstructorProperties): void
    static equal_func(a: MediaContainer, b: MediaContainer): boolean
}

module MediaItem {

    // Constructor properties interface

    interface ConstructorProperties extends MediaObject.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.MediaItem

        description?: string | null
    }

}

interface MediaItem {

    // Own properties of RygelServer-2.6.RygelServer.MediaItem

    description: string | null

    // Owm methods of RygelServer-2.6.RygelServer.MediaItem

    get_description(): string
    set_description(value: string): void

    // Class property signals of RygelServer-2.6.RygelServer.MediaItem

    connect(sigName: "notify::description", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::date", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-update-id", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-update-id", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::parent-ref", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-ref", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::ocm-flags", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: MediaItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ocm-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MediaItem extends MediaObject {

    // Own properties of RygelServer-2.6.RygelServer.MediaItem

    static name: string
    static $gtype: GObject.GType<MediaItem>

    // Constructors of RygelServer-2.6.RygelServer.MediaItem

    constructor(config?: MediaItem.ConstructorProperties) 
    _init(config?: MediaItem.ConstructorProperties): void
}

module MediaFileItem {

    // Constructor properties interface

    interface ConstructorProperties extends MediaItem.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.MediaFileItem

        mime_type?: string | null
        dlna_profile?: string | null
        size?: number | null
        place_holder?: boolean | null
        mimeType?: string | null
        dlnaProfile?: string | null
        placeHolder?: boolean | null
    }

}

interface MediaFileItem {

    // Own properties of RygelServer-2.6.RygelServer.MediaFileItem

    mime_type: string | null
    mimeType: string | null
    dlna_profile: string | null
    dlnaProfile: string | null
    size: number
    place_holder: boolean
    placeHolder: boolean

    // Own fields of RygelServer-2.6.RygelServer.MediaFileItem

    rygel_media_file_item_address_regex: GLib.Regex
    rygel_media_file_item_mime_to_ext: Gee.HashMap

    // Owm methods of RygelServer-2.6.RygelServer.MediaFileItem

    get_primary_resource(): MediaResource
    get_extension(): string | null
    ext_from_mime_type(mime_type: string): string | null
    add_engine_resources(_callback_: Gio.AsyncReadyCallback<this> | null): void
    add_engine_resources_finish(_res_: Gio.AsyncResult): void
    add_additional_resources(server: HTTPServer): void
    get_mime_type(): string
    set_mime_type(value: string): void
    get_dlna_profile(): string
    set_dlna_profile(value: string): void
    get_size(): number
    set_size(value: number): void
    get_place_holder(): boolean
    set_place_holder(value: boolean): void

    // Own virtual methods of RygelServer-2.6.RygelServer.MediaFileItem

    vfunc_get_primary_resource(): MediaResource
    vfunc_get_extension(): string | null
    vfunc_add_engine_resources(_callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_add_engine_resources_finish(_res_: Gio.AsyncResult): void
    vfunc_add_additional_resources(server: HTTPServer): void

    // Class property signals of RygelServer-2.6.RygelServer.MediaFileItem

    connect(sigName: "notify::mime-type", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::dlna-profile", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-profile", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::place-holder", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::place-holder", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::date", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-update-id", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-update-id", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::parent-ref", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-ref", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::ocm-flags", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: MediaFileItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ocm-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MediaFileItem extends MediaItem {

    // Own properties of RygelServer-2.6.RygelServer.MediaFileItem

    static name: string
    static $gtype: GObject.GType<MediaFileItem>

    // Constructors of RygelServer-2.6.RygelServer.MediaFileItem

    constructor(config?: MediaFileItem.ConstructorProperties) 
    _init(config?: MediaFileItem.ConstructorProperties): void
}

module MediaObject {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.MediaObject

        id?: string | null
        ref_id?: string | null
        upnp_class?: string | null
        date?: string | null
        creator?: string | null
        modified?: number | null
        object_update_id?: number | null
        artist?: string | null
        genre?: string | null
        parent?: MediaContainer | null
        parent_ref?: MediaContainer | null
        title?: string | null
        refId?: string | null
        upnpClass?: string | null
        objectUpdateId?: number | null
        parentRef?: MediaContainer | null
    }

}

interface MediaObject {

    // Own properties of RygelServer-2.6.RygelServer.MediaObject

    id: string | null
    ref_id: string | null
    refId: string | null
    upnp_class: string | null
    upnpClass: string | null
    date: string | null
    creator: string | null
    modified: number
    object_update_id: number
    objectUpdateId: number
    artist: string | null
    genre: string | null
    parent: MediaContainer
    parent_ref: MediaContainer
    parentRef: MediaContainer
    title: string | null
    readonly ocm_flags: GUPnPAV.OCMFlags
    readonly ocmFlags: GUPnPAV.OCMFlags

    // Own fields of RygelServer-2.6.RygelServer.MediaObject

    parent_ptr: MediaContainer

    // Owm methods of RygelServer-2.6.RygelServer.MediaObject

    get_uris(): Gee.List
    get_primary_uri(): string | null
    add_uri(uri: string): void
    get_writable(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null
    get_writables(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList
    get_resource_list(): Gee.List
    get_resource_by_name(resource_name: string): MediaResource | null
    serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    serialize_resource_list(didl_object: GUPnPAV.DIDLLiteObject, http_server: HTTPServer): void
    create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    compare_by_property(media_object: MediaObject, property: string): number
    compare_string_props(prop1: string, prop2: string): number
    compare_int_props(prop1: number, prop2: number): number
    get_id(): string
    set_id(value: string): void
    get_ref_id(): string
    set_ref_id(value: string): void
    get_upnp_class(): string
    set_upnp_class(value: string): void
    get_date(): string
    set_date(value: string): void
    get_creator(): string
    set_creator(value: string): void
    get_modified(): number
    set_modified(value: number): void
    get_object_update_id(): number
    set_object_update_id(value: number): void
    get_artist(): string
    set_artist(value: string): void
    get_genre(): string
    set_genre(value: string): void
    get_parent(): MediaContainer
    set_parent(value: MediaContainer): void
    get_parent_ref(): MediaContainer
    set_parent_ref(value: MediaContainer): void
    get_title(): string
    set_title(value: string): void
    get_ocm_flags(): GUPnPAV.OCMFlags

    // Own virtual methods of RygelServer-2.6.RygelServer.MediaObject

    vfunc_add_uri(uri: string): void
    vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null
    vfunc_create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null
    vfunc_apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void
    vfunc_compare_by_property(media_object: MediaObject, property: string): number
    vfunc_get_ocm_flags(): GUPnPAV.OCMFlags

    // Class property signals of RygelServer-2.6.RygelServer.MediaObject

    connect(sigName: "notify::id", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::date", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-update-id", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-update-id", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::parent-ref", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-ref", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::ocm-flags", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: MediaObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ocm-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MediaObject extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.MediaObject

    static name: string
    static $gtype: GObject.GType<MediaObject>

    // Constructors of RygelServer-2.6.RygelServer.MediaObject

    constructor(config?: MediaObject.ConstructorProperties) 
    _init(config?: MediaObject.ConstructorProperties): void
    static apply_replacements(replacement_pairs: GLib.HashTable, source_string: string | null): string | null
}

module MediaResource {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.MediaResource

        uri?: string | null
        import_uri?: string | null
        extension?: string | null
        size?: number | null
        cleartext_size?: number | null
        duration?: number | null
        bitrate?: number | null
        bits_per_sample?: number | null
        color_depth?: number | null
        width?: number | null
        height?: number | null
        audio_channels?: number | null
        sample_freq?: number | null
        protocol?: string | null
        mime_type?: string | null
        dlna_profile?: string | null
        network?: string | null
        dlna_conversion?: GUPnPAV.DLNAConversion | null
        dlna_flags?: GUPnPAV.DLNAFlags | null
        dlna_operation?: GUPnPAV.DLNAOperation | null
        importUri?: string | null
        cleartextSize?: number | null
        bitsPerSample?: number | null
        colorDepth?: number | null
        audioChannels?: number | null
        sampleFreq?: number | null
        mimeType?: string | null
        dlnaProfile?: string | null
        dlnaConversion?: GUPnPAV.DLNAConversion | null
        dlnaFlags?: GUPnPAV.DLNAFlags | null
        dlnaOperation?: GUPnPAV.DLNAOperation | null
    }

}

interface MediaResource {

    // Own properties of RygelServer-2.6.RygelServer.MediaResource

    uri: string | null
    import_uri: string | null
    importUri: string | null
    extension: string | null
    size: number
    cleartext_size: number
    cleartextSize: number
    duration: number
    bitrate: number
    bits_per_sample: number
    bitsPerSample: number
    color_depth: number
    colorDepth: number
    width: number
    height: number
    audio_channels: number
    audioChannels: number
    sample_freq: number
    sampleFreq: number
    protocol: string | null
    mime_type: string | null
    mimeType: string | null
    dlna_profile: string | null
    dlnaProfile: string | null
    network: string | null
    dlna_conversion: GUPnPAV.DLNAConversion
    dlnaConversion: GUPnPAV.DLNAConversion
    dlna_flags: GUPnPAV.DLNAFlags
    dlnaFlags: GUPnPAV.DLNAFlags
    dlna_operation: GUPnPAV.DLNAOperation
    dlnaOperation: GUPnPAV.DLNAOperation

    // Own fields of RygelServer-2.6.RygelServer.MediaResource

    play_speeds: string[]
    play_speeds_length1: number

    // Owm methods of RygelServer-2.6.RygelServer.MediaResource

    dup(): MediaResource
    get_name(): string | null
    serialize(didl_resource: GUPnPAV.DIDLLiteResource, replacements: GLib.HashTable | null): GUPnPAV.DIDLLiteResource
    set_protocol_info(pi: GUPnPAV.ProtocolInfo): void
    get_protocol_info(replacements: GLib.HashTable | null): GUPnPAV.ProtocolInfo
    supports_arbitrary_byte_seek(): boolean
    supports_arbitrary_time_seek(): boolean
    supports_limited_byte_seek(): boolean
    supports_limited_time_seek(): boolean
    supports_limited_cleartext_byte_seek(): boolean
    supports_full_cleartext_byte_seek(): boolean
    is_link_protection_enabled(): boolean
    is_dlna_content(): boolean
    get_default_transfer_mode(): string | null
    supports_transfer_mode(transfer_mode: string): boolean
    is_streamable(): boolean
    is_cleartext_range_support_enabled(): boolean
    supports_playspeed(): boolean
    is_dlna_protocol_flag_set(flags: number): boolean
    is_dlna_operation_mode_set(flags: number): boolean
    to_string(): string | null
    get_uri(): string
    set_uri(value: string): void
    get_import_uri(): string
    set_import_uri(value: string): void
    get_extension(): string
    set_extension(value: string): void
    get_size(): number
    set_size(value: number): void
    get_cleartext_size(): number
    set_cleartext_size(value: number): void
    get_duration(): number
    set_duration(value: number): void
    get_bitrate(): number
    set_bitrate(value: number): void
    get_bits_per_sample(): number
    set_bits_per_sample(value: number): void
    get_color_depth(): number
    set_color_depth(value: number): void
    get_width(): number
    set_width(value: number): void
    get_height(): number
    set_height(value: number): void
    get_audio_channels(): number
    set_audio_channels(value: number): void
    get_sample_freq(): number
    set_sample_freq(value: number): void
    get_protocol(): string
    set_protocol(value: string): void
    get_mime_type(): string
    set_mime_type(value: string): void
    get_dlna_profile(): string
    set_dlna_profile(value: string): void
    get_network(): string
    set_network(value: string): void
    get_dlna_conversion(): GUPnPAV.DLNAConversion
    set_dlna_conversion(value: GUPnPAV.DLNAConversion): void
    get_dlna_flags(): GUPnPAV.DLNAFlags
    set_dlna_flags(value: GUPnPAV.DLNAFlags): void
    get_dlna_operation(): GUPnPAV.DLNAOperation
    set_dlna_operation(value: GUPnPAV.DLNAOperation): void

    // Class property signals of RygelServer-2.6.RygelServer.MediaResource

    connect(sigName: "notify::uri", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::import-uri", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::import-uri", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::import-uri", ...args: any[]): void
    connect(sigName: "notify::extension", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extension", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::extension", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::cleartext-size", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cleartext-size", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cleartext-size", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::bitrate", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitrate", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bitrate", ...args: any[]): void
    connect(sigName: "notify::bits-per-sample", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bits-per-sample", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bits-per-sample", ...args: any[]): void
    connect(sigName: "notify::color-depth", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-depth", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color-depth", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::audio-channels", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-channels", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::audio-channels", ...args: any[]): void
    connect(sigName: "notify::sample-freq", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sample-freq", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sample-freq", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::dlna-profile", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-profile", ...args: any[]): void
    connect(sigName: "notify::network", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::network", ...args: any[]): void
    connect(sigName: "notify::dlna-conversion", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-conversion", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-conversion", ...args: any[]): void
    connect(sigName: "notify::dlna-flags", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-flags", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-flags", ...args: any[]): void
    connect(sigName: "notify::dlna-operation", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-operation", callback: (($obj: MediaResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-operation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MediaResource extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.MediaResource

    static name: string
    static $gtype: GObject.GType<MediaResource>

    // Constructors of RygelServer-2.6.RygelServer.MediaResource

    constructor(config?: MediaResource.ConstructorProperties) 
    constructor(name: string) 
    static new(name: string): MediaResource
    static from_resource(name: string, that: MediaResource): MediaResource
    static from_didl_lite_resource(name: string, didl_resource: GUPnPAV.DIDLLiteResource): MediaResource
    _init(config?: MediaResource.ConstructorProperties): void
}

module MediaServerPlugin {

    // Constructor properties interface

    interface ConstructorProperties extends RygelCore.Plugin.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.MediaServerPlugin

        root_container?: MediaContainer | null
        upload_profiles?: RygelCore.DLNAProfile[] | null
        supported_profiles?: RygelCore.DLNAProfile[] | null
        rootContainer?: MediaContainer | null
        uploadProfiles?: RygelCore.DLNAProfile[] | null
        supportedProfiles?: RygelCore.DLNAProfile[] | null
    }

}

interface MediaServerPlugin {

    // Own properties of RygelServer-2.6.RygelServer.MediaServerPlugin

    readonly root_container: MediaContainer
    readonly rootContainer: MediaContainer
    readonly search_caps: string | null
    readonly searchCaps: string | null
    upload_profiles: RygelCore.DLNAProfile[]
    uploadProfiles: RygelCore.DLNAProfile[]
    supported_profiles: RygelCore.DLNAProfile[]
    supportedProfiles: RygelCore.DLNAProfile[]

    // Owm methods of RygelServer-2.6.RygelServer.MediaServerPlugin

    get_root_container(): MediaContainer
    get_search_caps(): string
    get_upload_profiles(): RygelCore.DLNAProfile[]
    set_upload_profiles(value: RygelCore.DLNAProfile[]): void
    get_supported_profiles(): RygelCore.DLNAProfile[]
    set_supported_profiles(value: RygelCore.DLNAProfile[]): void

    // Own virtual methods of RygelServer-2.6.RygelServer.MediaServerPlugin

    vfunc_get_search_caps(): string

    // Class property signals of RygelServer-2.6.RygelServer.MediaServerPlugin

    connect(sigName: "notify::root-container", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root-container", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root-container", ...args: any[]): void
    connect(sigName: "notify::search-caps", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-caps", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-caps", ...args: any[]): void
    connect(sigName: "notify::upload-profiles", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upload-profiles", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upload-profiles", ...args: any[]): void
    connect(sigName: "notify::supported-profiles", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-profiles", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::supported-profiles", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::desc-path", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desc-path", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::desc-path", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::resource-infos", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-infos", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource-infos", ...args: any[]): void
    connect(sigName: "notify::icon-infos", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-infos", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-infos", ...args: any[]): void
    connect(sigName: "notify::default-icons", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-icons", callback: (($obj: MediaServerPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-icons", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MediaServerPlugin extends RygelCore.Plugin {

    // Own properties of RygelServer-2.6.RygelServer.MediaServerPlugin

    static name: string
    static $gtype: GObject.GType<MediaServerPlugin>

    // Constructors of RygelServer-2.6.RygelServer.MediaServerPlugin

    constructor(config?: MediaServerPlugin.ConstructorProperties) 
    _init(config?: MediaServerPlugin.ConstructorProperties): void

    // Conflicting static methods

    static new(...args: any[]): any
}

interface SearchExpression {

    // Own fields of RygelServer-2.6.RygelServer.SearchExpression

    ref_count: number
    op: any | null
    operand1: any | null
    operand2: any | null

    // Owm methods of RygelServer-2.6.RygelServer.SearchExpression

    satisfied_by(media_object: MediaObject): boolean
    to_string(): string | null

    // Own virtual methods of RygelServer-2.6.RygelServer.SearchExpression

    vfunc_satisfied_by(media_object: MediaObject): boolean
    vfunc_to_string(): string | null
}

class SearchExpression {

    // Own properties of RygelServer-2.6.RygelServer.SearchExpression

    static name: string
}

module MediaServer {

    // Constructor properties interface

    interface ConstructorProperties extends RygelCore.MediaDevice.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.MediaServer

        root_container?: MediaContainer | null
        rootContainer?: MediaContainer | null
    }

}

interface MediaServer {

    // Own properties of RygelServer-2.6.RygelServer.MediaServer

    readonly root_container: MediaContainer
    readonly rootContainer: MediaContainer

    // Class property signals of RygelServer-2.6.RygelServer.MediaServer

    connect(sigName: "notify::root-container", callback: (($obj: MediaServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root-container", callback: (($obj: MediaServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root-container", ...args: any[]): void
    connect(sigName: "notify::plugin", callback: (($obj: MediaServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: MediaServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::plugin", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: MediaServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MediaServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (($obj: MediaServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: MediaServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MediaServer extends RygelCore.MediaDevice {

    // Own properties of RygelServer-2.6.RygelServer.MediaServer

    static name: string
    static $gtype: GObject.GType<MediaServer>

    // Constructors of RygelServer-2.6.RygelServer.MediaServer

    constructor(config?: MediaServer.ConstructorProperties) 
    constructor(title: string, root_container: MediaContainer, capabilities: RygelCore.PluginCapabilities) 
    static new(title: string, root_container: MediaContainer, capabilities: RygelCore.PluginCapabilities): MediaServer
    _init(config?: MediaServer.ConstructorProperties): void
}

module MediaEngine {

    // Signal callback interfaces

    /**
     * Signal callback interface for `resource-changed`
     */
    interface ResourceChangedSignalCallback {
        ($obj: MediaEngine, media_object_uri: string): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface MediaEngine {

    // Owm methods of RygelServer-2.6.RygelServer.MediaEngine

    get_dlna_profiles(): RygelCore.DLNAProfile[]
    get_resources_for_item(item: MediaObject, _callback_: Gio.AsyncReadyCallback<this> | null): void
    get_resources_for_item_finish(_res_: Gio.AsyncResult): Gee.List | null
    create_data_source_for_resource(item: MediaObject, resource: MediaResource, replacements: GLib.HashTable): DataSource | null
    create_data_source_for_uri(uri: string): DataSource | null
    get_internal_protocol_schemes(): string[]

    // Own virtual methods of RygelServer-2.6.RygelServer.MediaEngine

    vfunc_get_dlna_profiles(): RygelCore.DLNAProfile[]
    vfunc_get_resources_for_item(item: MediaObject, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_get_resources_for_item_finish(_res_: Gio.AsyncResult): Gee.List | null
    vfunc_create_data_source_for_resource(item: MediaObject, resource: MediaResource, replacements: GLib.HashTable): DataSource | null
    vfunc_create_data_source_for_uri(uri: string): DataSource | null
    vfunc_get_internal_protocol_schemes(): string[]

    // Own signals of RygelServer-2.6.RygelServer.MediaEngine

    connect(sigName: "resource-changed", callback: MediaEngine.ResourceChangedSignalCallback): number
    connect_after(sigName: "resource-changed", callback: MediaEngine.ResourceChangedSignalCallback): number
    emit(sigName: "resource-changed", media_object_uri: string, ...args: any[]): void

    // Class property signals of RygelServer-2.6.RygelServer.MediaEngine

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MediaEngine extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.MediaEngine

    static name: string
    static $gtype: GObject.GType<MediaEngine>

    // Constructors of RygelServer-2.6.RygelServer.MediaEngine

    constructor(config?: MediaEngine.ConstructorProperties) 
    _init(config?: MediaEngine.ConstructorProperties): void
    static init(): void
    static get_default(): MediaEngine
}

module HTTPSeekRequest {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface HTTPSeekRequest {

    // Class property signals of RygelServer-2.6.RygelServer.HTTPSeekRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HTTPSeekRequest extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.HTTPSeekRequest

    static name: string
    static $gtype: GObject.GType<HTTPSeekRequest>

    // Constructors of RygelServer-2.6.RygelServer.HTTPSeekRequest

    constructor(config?: HTTPSeekRequest.ConstructorProperties) 
    _init(config?: HTTPSeekRequest.ConstructorProperties): void
}

module PlaylistItem {

    // Constructor properties interface

    interface ConstructorProperties extends MediaFileItem.ConstructorProperties {
    }

}

interface PlaylistItem {

    // Class property signals of RygelServer-2.6.RygelServer.PlaylistItem

    connect(sigName: "notify::mime-type", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::dlna-profile", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-profile", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::place-holder", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::place-holder", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::place-holder", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::date", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-update-id", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-update-id", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-update-id", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::parent-ref", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-ref", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-ref", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::ocm-flags", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ocm-flags", callback: (($obj: PlaylistItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ocm-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PlaylistItem extends MediaFileItem {

    // Own properties of RygelServer-2.6.RygelServer.PlaylistItem

    static name: string
    static $gtype: GObject.GType<PlaylistItem>

    // Constructors of RygelServer-2.6.RygelServer.PlaylistItem

    constructor(config?: PlaylistItem.ConstructorProperties) 
    constructor(id: string, parent: MediaContainer, title: string, upnp_class: string) 
    static new(id: string, parent: MediaContainer, title: string, upnp_class: string): PlaylistItem
    _init(config?: PlaylistItem.ConstructorProperties): void
}

module ContentDirectory {

    // Constructor properties interface

    interface ConstructorProperties extends GUPnP.Service.ConstructorProperties {
    }

}

interface ContentDirectory {

    // Conflicting properties

    parent_instance: GUPnP.ServiceInfo & GObject.Object & GObject.Object

    // Own fields of RygelServer-2.6.RygelServer.ContentDirectory

    feature_list: string | null
    http_server: HTTPServer
    root_container: MediaContainer
    cancellable: Gio.Cancellable
    system_update_id: number

    // Class property signals of RygelServer-2.6.RygelServer.ContentDirectory

    connect(sigName: "notify::root-device", callback: (($obj: ContentDirectory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root-device", callback: (($obj: ContentDirectory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root-device", ...args: any[]): void
    connect(sigName: "notify::context", callback: (($obj: ContentDirectory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: ContentDirectory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: ContentDirectory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: ContentDirectory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: ContentDirectory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: ContentDirectory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: ContentDirectory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: ContentDirectory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::service-type", callback: (($obj: ContentDirectory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-type", callback: (($obj: ContentDirectory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-type", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (($obj: ContentDirectory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: (($obj: ContentDirectory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: "notify::url-base", callback: (($obj: ContentDirectory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: (($obj: ContentDirectory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url-base", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ContentDirectory extends GUPnP.Service {

    // Own properties of RygelServer-2.6.RygelServer.ContentDirectory

    static name: string
    static $gtype: GObject.GType<ContentDirectory>

    // Constructors of RygelServer-2.6.RygelServer.ContentDirectory

    constructor(config?: ContentDirectory.ConstructorProperties) 
    constructor() 
    static new(): ContentDirectory
    _init(config?: ContentDirectory.ConstructorProperties): void
}

module HTTPByteSeekRequest {

    // Constructor properties interface

    interface ConstructorProperties extends HTTPSeekRequest.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.HTTPByteSeekRequest

        start_byte?: number | null
        end_byte?: number | null
        range_length?: number | null
        total_size?: number | null
        startByte?: number | null
        endByte?: number | null
        rangeLength?: number | null
        totalSize?: number | null
    }

}

interface HTTPByteSeekRequest {

    // Own properties of RygelServer-2.6.RygelServer.HTTPByteSeekRequest

    start_byte: number
    startByte: number
    end_byte: number
    endByte: number
    range_length: number
    rangeLength: number
    total_size: number
    totalSize: number

    // Owm methods of RygelServer-2.6.RygelServer.HTTPByteSeekRequest

    get_start_byte(): number
    set_start_byte(value: number): void
    get_end_byte(): number
    set_end_byte(value: number): void
    get_range_length(): number
    get_total_size(): number
    set_total_size(value: number): void

    // Class property signals of RygelServer-2.6.RygelServer.HTTPByteSeekRequest

    connect(sigName: "notify::start-byte", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-byte", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-byte", ...args: any[]): void
    connect(sigName: "notify::end-byte", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-byte", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end-byte", ...args: any[]): void
    connect(sigName: "notify::range-length", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::range-length", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::range-length", ...args: any[]): void
    connect(sigName: "notify::total-size", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-size", callback: (($obj: HTTPByteSeekRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HTTPByteSeekRequest extends HTTPSeekRequest {

    // Own properties of RygelServer-2.6.RygelServer.HTTPByteSeekRequest

    static name: string
    static $gtype: GObject.GType<HTTPByteSeekRequest>

    // Constructors of RygelServer-2.6.RygelServer.HTTPByteSeekRequest

    constructor(config?: HTTPByteSeekRequest.ConstructorProperties) 
    constructor(msg: Soup.Message, handler: HTTPGetHandler) 
    static new(msg: Soup.Message, handler: HTTPGetHandler): HTTPByteSeekRequest
    _init(config?: HTTPByteSeekRequest.ConstructorProperties): void
    static supported(message: Soup.Message, handler: HTTPGetHandler): boolean
    static requested(msg: Soup.Message): boolean
}

module HTTPByteSeekResponse {

    // Constructor properties interface

    interface ConstructorProperties extends HTTPResponseElement.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.HTTPByteSeekResponse

        start_byte?: number | null
        end_byte?: number | null
        range_length?: number | null
        total_size?: number | null
        startByte?: number | null
        endByte?: number | null
        rangeLength?: number | null
        totalSize?: number | null
    }

}

interface HTTPByteSeekResponse {

    // Own properties of RygelServer-2.6.RygelServer.HTTPByteSeekResponse

    start_byte: number
    startByte: number
    end_byte: number
    endByte: number
    range_length: number
    rangeLength: number
    total_size: number
    totalSize: number

    // Owm methods of RygelServer-2.6.RygelServer.HTTPByteSeekResponse

    get_start_byte(): number
    set_start_byte(value: number): void
    get_end_byte(): number
    set_end_byte(value: number): void
    get_range_length(): number
    get_total_size(): number
    set_total_size(value: number): void

    // Class property signals of RygelServer-2.6.RygelServer.HTTPByteSeekResponse

    connect(sigName: "notify::start-byte", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-byte", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-byte", ...args: any[]): void
    connect(sigName: "notify::end-byte", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-byte", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end-byte", ...args: any[]): void
    connect(sigName: "notify::range-length", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::range-length", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::range-length", ...args: any[]): void
    connect(sigName: "notify::total-size", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-size", callback: (($obj: HTTPByteSeekResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HTTPByteSeekResponse extends HTTPResponseElement {

    // Own properties of RygelServer-2.6.RygelServer.HTTPByteSeekResponse

    static name: string
    static $gtype: GObject.GType<HTTPByteSeekResponse>

    // Constructors of RygelServer-2.6.RygelServer.HTTPByteSeekResponse

    constructor(config?: HTTPByteSeekResponse.ConstructorProperties) 
    constructor(start_byte: number, end_byte: number, total_size: number) 
    static new(start_byte: number, end_byte: number, total_size: number): HTTPByteSeekResponse
    static from_request(request: HTTPByteSeekRequest): HTTPByteSeekResponse
    _init(config?: HTTPByteSeekResponse.ConstructorProperties): void
}

module HTTPGetHandler {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.HTTPGetHandler

        cancellable?: Gio.Cancellable | null
    }

}

interface HTTPGetHandler {

    // Own properties of RygelServer-2.6.RygelServer.HTTPGetHandler

    cancellable: Gio.Cancellable

    // Owm methods of RygelServer-2.6.RygelServer.HTTPGetHandler

    add_response_headers(request: HTTPGet): void
    get_default_transfer_mode(): string | null
    supports_transfer_mode(mode: string): boolean
    get_resource_size(): number
    get_resource_duration(): number
    supports_byte_seek(): boolean
    supports_time_seek(): boolean
    supports_playspeed(): boolean
    render_body(request: HTTPGet): HTTPResponse
    get_cancellable(): Gio.Cancellable
    set_cancellable(value: Gio.Cancellable): void

    // Own virtual methods of RygelServer-2.6.RygelServer.HTTPGetHandler

    vfunc_add_response_headers(request: HTTPGet): void
    vfunc_get_default_transfer_mode(): string | null
    vfunc_supports_transfer_mode(mode: string): boolean
    vfunc_get_resource_size(): number
    vfunc_get_resource_duration(): number
    vfunc_supports_byte_seek(): boolean
    vfunc_supports_time_seek(): boolean
    vfunc_supports_playspeed(): boolean
    vfunc_render_body(request: HTTPGet): HTTPResponse

    // Class property signals of RygelServer-2.6.RygelServer.HTTPGetHandler

    connect(sigName: "notify::cancellable", callback: (($obj: HTTPGetHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: HTTPGetHandler, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HTTPGetHandler extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.HTTPGetHandler

    static name: string
    static $gtype: GObject.GType<HTTPGetHandler>

    // Constructors of RygelServer-2.6.RygelServer.HTTPGetHandler

    constructor(config?: HTTPGetHandler.ConstructorProperties) 
    _init(config?: HTTPGetHandler.ConstructorProperties): void
}

module HTTPGet {

    // Constructor properties interface

    interface ConstructorProperties extends HTTPRequest.ConstructorProperties {
    }

}

interface HTTPGet {

    // Own fields of RygelServer-2.6.RygelServer.HTTPGet

    seek: HTTPSeekRequest
    speed_request: PlaySpeedRequest
    handler: HTTPGetHandler

    // Class property signals of RygelServer-2.6.RygelServer.HTTPGet

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HTTPGet extends HTTPRequest {

    // Own properties of RygelServer-2.6.RygelServer.HTTPGet

    static name: string
    static $gtype: GObject.GType<HTTPGet>

    // Constructors of RygelServer-2.6.RygelServer.HTTPGet

    constructor(config?: HTTPGet.ConstructorProperties) 
    constructor(http_server: HTTPServer, server: Soup.Server, msg: Soup.Message) 
    static new(http_server: HTTPServer, server: Soup.Server, msg: Soup.Message): HTTPGet
    _init(config?: HTTPGet.ConstructorProperties): void
}

module HTTPItemURI {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.HTTPItemURI

        item_id?: string | null
        thumbnail_index?: number | null
        subtitle_index?: number | null
        resource_name?: string | null
        http_server?: HTTPServer | null
        extension?: string | null
        itemId?: string | null
        thumbnailIndex?: number | null
        subtitleIndex?: number | null
        resourceName?: string | null
        httpServer?: HTTPServer | null
    }

}

interface HTTPItemURI {

    // Own properties of RygelServer-2.6.RygelServer.HTTPItemURI

    item_id: string | null
    itemId: string | null
    thumbnail_index: number
    thumbnailIndex: number
    subtitle_index: number
    subtitleIndex: number
    resource_name: string | null
    resourceName: string | null
    http_server: HTTPServer
    httpServer: HTTPServer
    extension: string | null

    // Own fields of RygelServer-2.6.RygelServer.HTTPItemURI

    rygel_http_item_uri_mime_to_ext: Gee.HashMap

    // Owm methods of RygelServer-2.6.RygelServer.HTTPItemURI

    to_string(): string | null
    get_item_id(): string
    set_item_id(value: string): void
    get_thumbnail_index(): number
    set_thumbnail_index(value: number): void
    get_subtitle_index(): number
    set_subtitle_index(value: number): void
    get_resource_name(): string | null
    set_resource_name(value: string | null): void
    get_http_server(): HTTPServer
    set_http_server(value: HTTPServer): void
    get_extension(): string | null
    set_extension(value: string): void

    // Class property signals of RygelServer-2.6.RygelServer.HTTPItemURI

    connect(sigName: "notify::item-id", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::item-id", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::item-id", ...args: any[]): void
    connect(sigName: "notify::thumbnail-index", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thumbnail-index", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::thumbnail-index", ...args: any[]): void
    connect(sigName: "notify::subtitle-index", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-index", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle-index", ...args: any[]): void
    connect(sigName: "notify::resource-name", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-name", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource-name", ...args: any[]): void
    connect(sigName: "notify::http-server", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-server", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::http-server", ...args: any[]): void
    connect(sigName: "notify::extension", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extension", callback: (($obj: HTTPItemURI, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::extension", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HTTPItemURI extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.HTTPItemURI

    static name: string
    static $gtype: GObject.GType<HTTPItemURI>

    // Constructors of RygelServer-2.6.RygelServer.HTTPItemURI

    constructor(config?: HTTPItemURI.ConstructorProperties) 
    constructor(object: MediaObject, http_server: HTTPServer, thumbnail_index: number, subtitle_index: number, resource_name: string | null) 
    static new(object: MediaObject, http_server: HTTPServer, thumbnail_index: number, subtitle_index: number, resource_name: string | null): HTTPItemURI
    static from_string(uri: string, http_server: HTTPServer): HTTPItemURI
    _init(config?: HTTPItemURI.ConstructorProperties): void
}

module HTTPRequest {

    // Constructor properties interface

    interface ConstructorProperties extends RygelCore.StateMachine.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface HTTPRequest extends RygelCore.StateMachine {

    // Own fields of RygelServer-2.6.RygelServer.HTTPRequest

    http_server: HTTPServer
    server: Soup.Server
    msg: Soup.Message
    uri: HTTPItemURI
    object: MediaObject
    hack: any

    // Owm methods of RygelServer-2.6.RygelServer.HTTPRequest

    handle(_callback_: Gio.AsyncReadyCallback<this> | null): void
    handle_finish(_res_: Gio.AsyncResult): void
    find_item(_callback_: Gio.AsyncReadyCallback<this> | null): void
    find_item_finish(_res_: Gio.AsyncResult): void
    handle_error(_error_: GLib.Error): void
    end(status: number, reason: string | null): void

    // Own virtual methods of RygelServer-2.6.RygelServer.HTTPRequest

    vfunc_handle(_callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_handle_finish(_res_: Gio.AsyncResult): void
    vfunc_find_item(_callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_find_item_finish(_res_: Gio.AsyncResult): void

    // Class property signals of RygelServer-2.6.RygelServer.HTTPRequest

    connect(sigName: "notify::cancellable", callback: (($obj: HTTPRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: HTTPRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HTTPRequest extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.HTTPRequest

    static name: string
    static $gtype: GObject.GType<HTTPRequest>

    // Constructors of RygelServer-2.6.RygelServer.HTTPRequest

    constructor(config?: HTTPRequest.ConstructorProperties) 
    _init(config?: HTTPRequest.ConstructorProperties): void
}

module HTTPResponse {

    // Constructor properties interface

    interface ConstructorProperties extends RygelCore.StateMachine.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.HTTPResponse

        server?: Soup.Server | null
    }

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
    get_server(): Soup.Server
    get_priority(): number

    // Own virtual methods of RygelServer-2.6.RygelServer.HTTPResponse

    vfunc_end(aborted: boolean, status: number): void

    // Class property signals of RygelServer-2.6.RygelServer.HTTPResponse

    connect(sigName: "notify::server", callback: (($obj: HTTPResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server", callback: (($obj: HTTPResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::server", ...args: any[]): void
    connect(sigName: "notify::priority", callback: (($obj: HTTPResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: HTTPResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::priority", ...args: any[]): void
    connect(sigName: "notify::cancellable", callback: (($obj: HTTPResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: HTTPResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HTTPResponse extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.HTTPResponse

    static name: string
    static $gtype: GObject.GType<HTTPResponse>

    // Constructors of RygelServer-2.6.RygelServer.HTTPResponse

    constructor(config?: HTTPResponse.ConstructorProperties) 
    constructor(request: HTTPGet, request_handler: HTTPGetHandler, src: DataSource) 
    static new(request: HTTPGet, request_handler: HTTPGetHandler, src: DataSource): HTTPResponse
    _init(config?: HTTPResponse.ConstructorProperties): void
}

module HTTPResponseElement {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface HTTPResponseElement {

    // Owm methods of RygelServer-2.6.RygelServer.HTTPResponseElement

    add_response_headers(request: HTTPRequest): void
    to_string(): string | null

    // Own virtual methods of RygelServer-2.6.RygelServer.HTTPResponseElement

    vfunc_add_response_headers(request: HTTPRequest): void
    vfunc_to_string(): string | null

    // Class property signals of RygelServer-2.6.RygelServer.HTTPResponseElement

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HTTPResponseElement extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.HTTPResponseElement

    static name: string
    static $gtype: GObject.GType<HTTPResponseElement>

    // Constructors of RygelServer-2.6.RygelServer.HTTPResponseElement

    constructor(config?: HTTPResponseElement.ConstructorProperties) 
    _init(config?: HTTPResponseElement.ConstructorProperties): void
}

module HTTPServer {

    // Constructor properties interface

    interface ConstructorProperties extends RygelCore.StateMachine.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.HTTPServer

        path_root?: string | null
        server_name?: string | null
        pathRoot?: string | null
        serverName?: string | null
    }

}

interface HTTPServer extends RygelCore.StateMachine {

    // Own properties of RygelServer-2.6.RygelServer.HTTPServer

    path_root: string | null
    pathRoot: string | null
    server_name: string | null
    serverName: string | null

    // Own fields of RygelServer-2.6.RygelServer.HTTPServer

    root_container: MediaContainer
    context: GUPnP.Context
    replacements: GLib.HashTable

    // Owm methods of RygelServer-2.6.RygelServer.HTTPServer

    set_resource_delivery_options(res: MediaResource): void
    need_proxy(uri: string): boolean
    get_protocol(): string | null
    get_protocol_info(): Gee.ArrayList
    get_replacements(): GLib.HashTable
    is_local(): boolean
    get_path_root(): string
    get_server_name(): string
    set_server_name(value: string): void

    // Own virtual methods of RygelServer-2.6.RygelServer.HTTPServer

    vfunc_get_protocol(): string | null
    vfunc_get_protocol_info(): Gee.ArrayList

    // Class property signals of RygelServer-2.6.RygelServer.HTTPServer

    connect(sigName: "notify::path-root", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path-root", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path-root", ...args: any[]): void
    connect(sigName: "notify::server-name", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-name", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::server-name", ...args: any[]): void
    connect(sigName: "notify::cancellable", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: HTTPServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HTTPServer extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.HTTPServer

    static name: string
    static $gtype: GObject.GType<HTTPServer>

    // Constructors of RygelServer-2.6.RygelServer.HTTPServer

    constructor(config?: HTTPServer.ConstructorProperties) 
    constructor(content_dir: ContentDirectory, name: string) 
    static new(content_dir: ContentDirectory, name: string): HTTPServer
    _init(config?: HTTPServer.ConstructorProperties): void
}

module HTTPTimeSeekRequest {

    // Constructor properties interface

    interface ConstructorProperties extends HTTPSeekRequest.ConstructorProperties {
    }

}

interface HTTPTimeSeekRequest {

    // Own fields of RygelServer-2.6.RygelServer.HTTPTimeSeekRequest

    start_time: number
    end_time: number
    range_duration: number
    total_duration: number

    // Owm methods of RygelServer-2.6.RygelServer.HTTPTimeSeekRequest

    to_string(): string | null

    // Class property signals of RygelServer-2.6.RygelServer.HTTPTimeSeekRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HTTPTimeSeekRequest extends HTTPSeekRequest {

    // Own properties of RygelServer-2.6.RygelServer.HTTPTimeSeekRequest

    static name: string
    static $gtype: GObject.GType<HTTPTimeSeekRequest>

    // Constructors of RygelServer-2.6.RygelServer.HTTPTimeSeekRequest

    constructor(config?: HTTPTimeSeekRequest.ConstructorProperties) 
    _init(config?: HTTPTimeSeekRequest.ConstructorProperties): void
    static supported(message: Soup.Message, handler: HTTPGetHandler): boolean
    static requested(message: Soup.Message): boolean
}

module HTTPTimeSeekResponse {

    // Constructor properties interface

    interface ConstructorProperties extends HTTPResponseElement.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.HTTPTimeSeekResponse

        start_time?: number | null
        end_time?: number | null
        range_duration?: number | null
        total_duration?: number | null
        start_byte?: number | null
        end_byte?: number | null
        response_length?: number | null
        total_size?: number | null
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

interface HTTPTimeSeekResponse {

    // Own properties of RygelServer-2.6.RygelServer.HTTPTimeSeekResponse

    start_time: number
    startTime: number
    end_time: number
    endTime: number
    range_duration: number
    rangeDuration: number
    total_duration: number
    totalDuration: number
    start_byte: number
    startByte: number
    end_byte: number
    endByte: number
    response_length: number
    responseLength: number
    total_size: number
    totalSize: number

    // Owm methods of RygelServer-2.6.RygelServer.HTTPTimeSeekResponse

    get_start_time(): number
    get_end_time(): number
    get_range_duration(): number
    get_total_duration(): number
    get_start_byte(): number
    get_end_byte(): number
    get_response_length(): number
    get_total_size(): number

    // Class property signals of RygelServer-2.6.RygelServer.HTTPTimeSeekResponse

    connect(sigName: "notify::start-time", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-time", ...args: any[]): void
    connect(sigName: "notify::end-time", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-time", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end-time", ...args: any[]): void
    connect(sigName: "notify::range-duration", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::range-duration", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::range-duration", ...args: any[]): void
    connect(sigName: "notify::total-duration", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-duration", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-duration", ...args: any[]): void
    connect(sigName: "notify::start-byte", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-byte", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-byte", ...args: any[]): void
    connect(sigName: "notify::end-byte", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-byte", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end-byte", ...args: any[]): void
    connect(sigName: "notify::response-length", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response-length", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::response-length", ...args: any[]): void
    connect(sigName: "notify::total-size", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-size", callback: (($obj: HTTPTimeSeekResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HTTPTimeSeekResponse extends HTTPResponseElement {

    // Own properties of RygelServer-2.6.RygelServer.HTTPTimeSeekResponse

    static name: string
    static $gtype: GObject.GType<HTTPTimeSeekResponse>

    // Constructors of RygelServer-2.6.RygelServer.HTTPTimeSeekResponse

    constructor(config?: HTTPTimeSeekResponse.ConstructorProperties) 
    constructor(start_time: number, end_time: number, total_duration: number, start_byte: number, end_byte: number, total_size: number) 
    static new(start_time: number, end_time: number, total_duration: number, start_byte: number, end_byte: number, total_size: number): HTTPTimeSeekResponse
    static time_only(start_time: number, end_time: number, total_duration: number): HTTPTimeSeekResponse
    static with_length(start_time: number, end_time: number, total_duration: number, start_byte: number, end_byte: number, total_size: number, response_length: number): HTTPTimeSeekResponse
    static from_request(time_seek_request: HTTPTimeSeekRequest, total_duration: number): HTTPTimeSeekResponse
    _init(config?: HTTPTimeSeekResponse.ConstructorProperties): void
}

module Serializer {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.Serializer

        serializer_type?: SerializerType | null
        serializerType?: SerializerType | null
    }

}

interface Serializer {

    // Own properties of RygelServer-2.6.RygelServer.Serializer

    readonly serializer_type: SerializerType
    readonly serializerType: SerializerType

    // Owm methods of RygelServer-2.6.RygelServer.Serializer

    add_item(): GUPnPAV.DIDLLiteItem | null
    add_container(): GUPnPAV.DIDLLiteContainer | null
    filter(filter_string: string): void
    get_string(): string | null

    // Class property signals of RygelServer-2.6.RygelServer.Serializer

    connect(sigName: "notify::serializer-type", callback: (($obj: Serializer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serializer-type", callback: (($obj: Serializer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::serializer-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Serializer extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.Serializer

    static name: string
    static $gtype: GObject.GType<Serializer>

    // Constructors of RygelServer-2.6.RygelServer.Serializer

    constructor(config?: Serializer.ConstructorProperties) 
    constructor(type: SerializerType) 
    static new(type: SerializerType): Serializer
    _init(config?: Serializer.ConstructorProperties): void
}

interface PlaySpeed {

    // Own fields of RygelServer-2.6.RygelServer.PlaySpeed

    ref_count: number
    numerator: number
    denominator: number

    // Owm methods of RygelServer-2.6.RygelServer.PlaySpeed

    equals(that: PlaySpeed): boolean
    is_positive(): boolean
    is_normal_rate(): boolean
    to_string(): string | null
    to_float(): number
    to_double(): number
}

class PlaySpeed {

    // Own properties of RygelServer-2.6.RygelServer.PlaySpeed

    static name: string

    // Constructors of RygelServer-2.6.RygelServer.PlaySpeed

    constructor(numerator: number, denominator: number) 
    static new(numerator: number, denominator: number): PlaySpeed
    static from_string(speed: string): PlaySpeed
}

module PlaySpeedRequest {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.PlaySpeedRequest

        speed?: PlaySpeed | null
    }

}

interface PlaySpeedRequest {

    // Own properties of RygelServer-2.6.RygelServer.PlaySpeedRequest

    speed: PlaySpeed

    // Owm methods of RygelServer-2.6.RygelServer.PlaySpeedRequest

    equals(that: PlaySpeedRequest): boolean
    get_speed(): PlaySpeed

    // Class property signals of RygelServer-2.6.RygelServer.PlaySpeedRequest

    connect(sigName: "notify::speed", callback: (($obj: PlaySpeedRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed", callback: (($obj: PlaySpeedRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::speed", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PlaySpeedRequest extends GObject.Object {

    // Own properties of RygelServer-2.6.RygelServer.PlaySpeedRequest

    static name: string
    static $gtype: GObject.GType<PlaySpeedRequest>

    // Constructors of RygelServer-2.6.RygelServer.PlaySpeedRequest

    constructor(config?: PlaySpeedRequest.ConstructorProperties) 
    constructor(numerator: number, denominator: number) 
    static new(numerator: number, denominator: number): PlaySpeedRequest
    static from_string(speed: string): PlaySpeedRequest
    _init(config?: PlaySpeedRequest.ConstructorProperties): void
    static supported(request: HTTPGet): boolean
}

module PlaySpeedResponse {

    // Constructor properties interface

    interface ConstructorProperties extends HTTPResponseElement.ConstructorProperties {
    }

}

interface PlaySpeedResponse {

    // Own fields of RygelServer-2.6.RygelServer.PlaySpeedResponse

    framerate: number

    // Owm methods of RygelServer-2.6.RygelServer.PlaySpeedResponse

    equals(that: PlaySpeedRequest): boolean

    // Class property signals of RygelServer-2.6.RygelServer.PlaySpeedResponse

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PlaySpeedResponse extends HTTPResponseElement {

    // Own properties of RygelServer-2.6.RygelServer.PlaySpeedResponse

    static name: string
    static $gtype: GObject.GType<PlaySpeedResponse>

    // Constructors of RygelServer-2.6.RygelServer.PlaySpeedResponse

    constructor(config?: PlaySpeedResponse.ConstructorProperties) 
    constructor(numerator: number, denominator: number, framerate: number) 
    static new(numerator: number, denominator: number, framerate: number): PlaySpeedResponse
    static from_speed(speed: PlaySpeed, framerate: number): PlaySpeedResponse
    static from_string(speed: string, framerate: number): PlaySpeedResponse
    _init(config?: PlaySpeedResponse.ConstructorProperties): void
}

module DTCPCleartextRequest {

    // Constructor properties interface

    interface ConstructorProperties extends HTTPSeekRequest.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.DTCPCleartextRequest

        start_byte?: number | null
        end_byte?: number | null
        range_length?: number | null
        total_size?: number | null
        startByte?: number | null
        endByte?: number | null
        rangeLength?: number | null
        totalSize?: number | null
    }

}

interface DTCPCleartextRequest {

    // Own properties of RygelServer-2.6.RygelServer.DTCPCleartextRequest

    start_byte: number
    startByte: number
    end_byte: number
    endByte: number
    range_length: number
    rangeLength: number
    total_size: number
    totalSize: number

    // Owm methods of RygelServer-2.6.RygelServer.DTCPCleartextRequest

    get_start_byte(): number
    get_end_byte(): number
    get_range_length(): number
    get_total_size(): number

    // Class property signals of RygelServer-2.6.RygelServer.DTCPCleartextRequest

    connect(sigName: "notify::start-byte", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-byte", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-byte", ...args: any[]): void
    connect(sigName: "notify::end-byte", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-byte", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end-byte", ...args: any[]): void
    connect(sigName: "notify::range-length", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::range-length", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::range-length", ...args: any[]): void
    connect(sigName: "notify::total-size", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-size", callback: (($obj: DTCPCleartextRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DTCPCleartextRequest extends HTTPSeekRequest {

    // Own properties of RygelServer-2.6.RygelServer.DTCPCleartextRequest

    static name: string
    static $gtype: GObject.GType<DTCPCleartextRequest>

    // Constructors of RygelServer-2.6.RygelServer.DTCPCleartextRequest

    constructor(config?: DTCPCleartextRequest.ConstructorProperties) 
    constructor(message: Soup.Message, handler: HTTPGetHandler) 
    static new(message: Soup.Message, handler: HTTPGetHandler): DTCPCleartextRequest
    _init(config?: DTCPCleartextRequest.ConstructorProperties): void
    static supported(message: Soup.Message, handler: HTTPGetHandler): boolean
    static requested(message: Soup.Message): boolean
}

module DTCPCleartextResponse {

    // Constructor properties interface

    interface ConstructorProperties extends HTTPResponseElement.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.DTCPCleartextResponse

        start_byte?: number | null
        end_byte?: number | null
        range_length?: number | null
        total_size?: number | null
        encrypted_length?: number | null
        startByte?: number | null
        endByte?: number | null
        rangeLength?: number | null
        totalSize?: number | null
        encryptedLength?: number | null
    }

}

interface DTCPCleartextResponse {

    // Own properties of RygelServer-2.6.RygelServer.DTCPCleartextResponse

    start_byte: number
    startByte: number
    end_byte: number
    endByte: number
    range_length: number
    rangeLength: number
    total_size: number
    totalSize: number
    encrypted_length: number
    encryptedLength: number

    // Owm methods of RygelServer-2.6.RygelServer.DTCPCleartextResponse

    get_start_byte(): number
    get_end_byte(): number
    get_range_length(): number
    get_total_size(): number
    get_encrypted_length(): number
    set_encrypted_length(value: number): void

    // Class property signals of RygelServer-2.6.RygelServer.DTCPCleartextResponse

    connect(sigName: "notify::start-byte", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-byte", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-byte", ...args: any[]): void
    connect(sigName: "notify::end-byte", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-byte", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end-byte", ...args: any[]): void
    connect(sigName: "notify::range-length", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::range-length", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::range-length", ...args: any[]): void
    connect(sigName: "notify::total-size", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-size", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-size", ...args: any[]): void
    connect(sigName: "notify::encrypted-length", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encrypted-length", callback: (($obj: DTCPCleartextResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::encrypted-length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DTCPCleartextResponse extends HTTPResponseElement {

    // Own properties of RygelServer-2.6.RygelServer.DTCPCleartextResponse

    static name: string
    static $gtype: GObject.GType<DTCPCleartextResponse>

    // Constructors of RygelServer-2.6.RygelServer.DTCPCleartextResponse

    constructor(config?: DTCPCleartextResponse.ConstructorProperties) 
    constructor(start_byte: number, end_byte: number, total_size: number, encrypted_length: number) 
    static new(start_byte: number, end_byte: number, total_size: number, encrypted_length: number): DTCPCleartextResponse
    static from_request(request: DTCPCleartextRequest, encrypted_length: number): DTCPCleartextResponse
    _init(config?: DTCPCleartextResponse.ConstructorProperties): void
}

module DLNAAvailableSeekRangeRequest {

    // Constructor properties interface

    interface ConstructorProperties extends HTTPSeekRequest.ConstructorProperties {
    }

}

interface DLNAAvailableSeekRangeRequest {

    // Class property signals of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DLNAAvailableSeekRangeRequest extends HTTPSeekRequest {

    // Own properties of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeRequest

    static name: string
    static $gtype: GObject.GType<DLNAAvailableSeekRangeRequest>

    // Constructors of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeRequest

    constructor(config?: DLNAAvailableSeekRangeRequest.ConstructorProperties) 
    _init(config?: DLNAAvailableSeekRangeRequest.ConstructorProperties): void
    static supported(message: Soup.Message, handler: HTTPGetHandler): boolean
    static requested(message: Soup.Message): boolean
}

module DLNAAvailableSeekRangeResponse {

    // Constructor properties interface

    interface ConstructorProperties extends HTTPResponseElement.ConstructorProperties {

        // Own constructor properties of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeResponse

        mode?: number | null
        start_time?: number | null
        end_time?: number | null
        start_byte?: number | null
        end_byte?: number | null
        range_length?: number | null
        startTime?: number | null
        endTime?: number | null
        startByte?: number | null
        endByte?: number | null
        rangeLength?: number | null
    }

}

interface DLNAAvailableSeekRangeResponse {

    // Own properties of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeResponse

    mode: number
    start_time: number
    startTime: number
    end_time: number
    endTime: number
    start_byte: number
    startByte: number
    end_byte: number
    endByte: number
    range_length: number
    rangeLength: number

    // Owm methods of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeResponse

    get_mode(): number
    get_start_time(): number
    get_end_time(): number
    get_start_byte(): number
    get_end_byte(): number
    get_range_length(): number

    // Class property signals of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeResponse

    connect(sigName: "notify::mode", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::start-time", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-time", ...args: any[]): void
    connect(sigName: "notify::end-time", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-time", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end-time", ...args: any[]): void
    connect(sigName: "notify::start-byte", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-byte", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-byte", ...args: any[]): void
    connect(sigName: "notify::end-byte", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-byte", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end-byte", ...args: any[]): void
    connect(sigName: "notify::range-length", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::range-length", callback: (($obj: DLNAAvailableSeekRangeResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::range-length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DLNAAvailableSeekRangeResponse extends HTTPResponseElement {

    // Own properties of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeResponse

    static name: string
    static $gtype: GObject.GType<DLNAAvailableSeekRangeResponse>

    // Constructors of RygelServer-2.6.RygelServer.DLNAAvailableSeekRangeResponse

    constructor(config?: DLNAAvailableSeekRangeResponse.ConstructorProperties) 
    constructor(mode: number, start_time: number, end_time: number, start_byte: number, end_byte: number) 
    static new(mode: number, start_time: number, end_time: number, start_byte: number, end_byte: number): DLNAAvailableSeekRangeResponse
    static time_only(mode: number, start_time: number, end_time: number): DLNAAvailableSeekRangeResponse
    _init(config?: DLNAAvailableSeekRangeResponse.ConstructorProperties): void
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

    get_resource: (self: Subtitle, protocol: string, index: number) => MediaResource
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

    get_resource: (self: Thumbnail, protocol: string, index: number) => MediaResource
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

    add_subtitle_resources: (self: VideoItem, http_server: HTTPServer) => void
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

    get_children: (self: MediaContainer, offset: number, max_count: number, sort_criteria: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    get_children_finish: (self: MediaContainer, _res_: Gio.AsyncResult) => MediaObjects | null
    find_object: (self: MediaContainer, id: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    find_object_finish: (self: MediaContainer, _res_: Gio.AsyncResult) => MediaObject | null
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

    get_primary_resource: (self: MediaFileItem) => MediaResource
    get_extension: (self: MediaFileItem) => string | null
    add_engine_resources: (self: MediaFileItem, _callback_: Gio.AsyncReadyCallback | null) => void
    add_engine_resources_finish: (self: MediaFileItem, _res_: Gio.AsyncResult) => void
    add_additional_resources: (self: MediaFileItem, server: HTTPServer) => void
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

    add_uri: (self: MediaObject, uri: string) => void
    serialize: (self: MediaObject, serializer: Serializer, http_server: HTTPServer) => GUPnPAV.DIDLLiteObject | null
    create_stream_source_for_resource: (self: MediaObject, request: HTTPRequest, resource: MediaResource) => DataSource | null
    apply_didl_lite: (self: MediaObject, didl_object: GUPnPAV.DIDLLiteObject) => void
    compare_by_property: (self: MediaObject, media_object: MediaObject, property: string) => number
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

    satisfied_by: (self: SearchExpression, media_object: MediaObject) => boolean
    to_string: (self: SearchExpression) => string | null
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

    get_dlna_profiles: (self: MediaEngine) => RygelCore.DLNAProfile[]
    get_resources_for_item: (self: MediaEngine, item: MediaObject, _callback_: Gio.AsyncReadyCallback | null) => void
    get_resources_for_item_finish: (self: MediaEngine, _res_: Gio.AsyncResult) => Gee.List | null
    create_data_source_for_resource: (self: MediaEngine, item: MediaObject, resource: MediaResource, replacements: GLib.HashTable) => DataSource | null
    create_data_source_for_uri: (self: MediaEngine, uri: string) => DataSource | null
    get_internal_protocol_schemes: (self: MediaEngine) => string[]
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

    add_response_headers: (self: HTTPGetHandler, request: HTTPGet) => void
    get_default_transfer_mode: (self: HTTPGetHandler) => string | null
    supports_transfer_mode: (self: HTTPGetHandler, mode: string) => boolean
    get_resource_size: (self: HTTPGetHandler) => number
    get_resource_duration: (self: HTTPGetHandler) => number
    supports_byte_seek: (self: HTTPGetHandler) => boolean
    supports_time_seek: (self: HTTPGetHandler) => boolean
    supports_playspeed: (self: HTTPGetHandler) => boolean
    render_body: (self: HTTPGetHandler, request: HTTPGet) => HTTPResponse
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

    handle: (self: HTTPRequest, _callback_: Gio.AsyncReadyCallback | null) => void
    handle_finish: (self: HTTPRequest, _res_: Gio.AsyncResult) => void
    find_item: (self: HTTPRequest, _callback_: Gio.AsyncReadyCallback | null) => void
    find_item_finish: (self: HTTPRequest, _res_: Gio.AsyncResult) => void
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

    add_response_headers: (self: HTTPResponseElement, request: HTTPRequest) => void
    to_string: (self: HTTPResponseElement) => string | null
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

    get_protocol: (self: HTTPServer) => string | null
    get_protocol_info: (self: HTTPServer) => Gee.ArrayList
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

    search: (self: SearchableContainer, expression: SearchExpression | null, offset: number, max_count: number, sort_criteria: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    search_finish: (self: SearchableContainer, _res_: Gio.AsyncResult) => [ /* returnType */ MediaObjects | null, /* total_matches */ number ]
    get_search_classes: (self: SearchableContainer) => Gee.ArrayList
    set_search_classes: (self: SearchableContainer, value: Gee.ArrayList) => void
}

abstract class SearchableContainerIface {

    // Own properties of RygelServer-2.6.RygelServer.SearchableContainerIface

    static name: string
}

interface TrackableContainerIface {

    // Own fields of RygelServer-2.6.RygelServer.TrackableContainerIface

    add_child: (self: TrackableContainer, object: MediaObject, _callback_: Gio.AsyncReadyCallback | null) => void
    add_child_finish: (self: TrackableContainer, _res_: Gio.AsyncResult) => void
    remove_child: (self: TrackableContainer, object: MediaObject, _callback_: Gio.AsyncReadyCallback | null) => void
    remove_child_finish: (self: TrackableContainer, _res_: Gio.AsyncResult) => void
    get_service_reset_token: (self: TrackableContainer) => string | null
    set_service_reset_token: (self: TrackableContainer, token: string) => void
    get_system_update_id: (self: TrackableContainer) => number
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

    get_width: (self: VisualItem) => number
    set_width: (self: VisualItem, value: number) => void
    get_height: (self: VisualItem) => number
    set_height: (self: VisualItem, value: number) => void
    get_color_depth: (self: VisualItem) => number
    set_color_depth: (self: VisualItem, value: number) => void
    get_thumbnails: (self: VisualItem) => Gee.ArrayList
    set_thumbnails: (self: VisualItem, value: Gee.ArrayList) => void
}

abstract class VisualItemIface {

    // Own properties of RygelServer-2.6.RygelServer.VisualItemIface

    static name: string
}

interface WritableContainerIface {

    // Own fields of RygelServer-2.6.RygelServer.WritableContainerIface

    add_item: (self: WritableContainer, item: MediaFileItem, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    add_item_finish: (self: WritableContainer, _res_: Gio.AsyncResult) => void
    add_container: (self: WritableContainer, container: MediaContainer, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    add_container_finish: (self: WritableContainer, _res_: Gio.AsyncResult) => void
    add_reference: (self: WritableContainer, object: MediaObject, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    add_reference_finish: (self: WritableContainer, _res_: Gio.AsyncResult) => string | null
    remove_item: (self: WritableContainer, id: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    remove_item_finish: (self: WritableContainer, _res_: Gio.AsyncResult) => void
    remove_container: (self: WritableContainer, id: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    remove_container_finish: (self: WritableContainer, _res_: Gio.AsyncResult) => void
    get_create_classes: (self: WritableContainer) => Gee.ArrayList
    set_create_classes: (self: WritableContainer, value: Gee.ArrayList) => void
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

    commit: (self: UpdatableObject, _callback_: Gio.AsyncReadyCallback | null) => void
    commit_finish: (self: UpdatableObject, _res_: Gio.AsyncResult) => void
}

abstract class UpdatableObjectIface {

    // Own properties of RygelServer-2.6.RygelServer.UpdatableObjectIface

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default RygelServer;
// END