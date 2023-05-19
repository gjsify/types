
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gfbgraph-0.2-ambient.d.ts';
import './gfbgraph-0.2-import.d.ts';
/**
 * GFBGraph-0.2
 */

import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Rest from '@girs/rest-0.7';
import type Json from '@girs/json-1.0';

export enum NodeError {
    CONNECTIONABLE,
    CONNECTABLE,
}
/**
 * Create a new #RestProxyCall pointing to the Facebook Graph API url (https://graph.facebook.com)
 * and processed by the authorizer to allow queries.
 * @param authorizer a #GFBGraphAuthorizer.
 * @returns a new #RestProxyCall or %NULL in case of error.
 */
export function new_rest_call(authorizer: Authorizer): Rest.ProxyCall
export module Authorizer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Authorizer {

    // Owm methods of GFBGraph-0.2.GFBGraph.Authorizer

    /**
     * Adds the necessary authorization to `call`.
     * 
     * This method modifies `call` in place and is thread safe.
     * @param call A #RestProxyCall.
     */
    process_call(call: Rest.ProxyCall): void
    /**
     * Adds the necessary authorization to `message`. The type of `message`
     * can be DELETE, GET and POST.
     * 
     * This method modifies `message` in place and is thread safe.
     * @param message A #SoupMessage.
     */
    process_message(message: Soup.Message): void
    /**
     * Synchronously forces `iface` to refresh any authorization tokens
     * held by it.
     * 
     * This method is thread safe.
     * @param cancellable An optional #GCancellable object, or %NULL.
     * @returns %TRUE if the authorizer now has a valid token.
     */
    refresh_authorization(cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of GFBGraph-0.2.GFBGraph.Authorizer

    /**
     * Adds the necessary authorization to `call`.
     * 
     * This method modifies `call` in place and is thread safe.
     * @virtual 
     * @param call A #RestProxyCall.
     */
    vfunc_process_call(call: Rest.ProxyCall): void
    /**
     * Adds the necessary authorization to `message`. The type of `message`
     * can be DELETE, GET and POST.
     * 
     * This method modifies `message` in place and is thread safe.
     * @virtual 
     * @param message A #SoupMessage.
     */
    vfunc_process_message(message: Soup.Message): void
    /**
     * Synchronously forces `iface` to refresh any authorization tokens
     * held by it.
     * 
     * This method is thread safe.
     * @virtual 
     * @param cancellable An optional #GCancellable object, or %NULL.
     * @returns %TRUE if the authorizer now has a valid token.
     */
    vfunc_refresh_authorization(cancellable: Gio.Cancellable | null): boolean

    // Class property signals of GFBGraph-0.2.GFBGraph.Authorizer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Authorizer extends GObject.Object {

    // Own properties of GFBGraph-0.2.GFBGraph.Authorizer

    static name: string
    static $gtype: GObject.GType<Authorizer>

    // Constructors of GFBGraph-0.2.GFBGraph.Authorizer

    constructor(config?: Authorizer.ConstructorProperties) 
    _init(config?: Authorizer.ConstructorProperties): void
}

export module Connectable {

    // Constructor properties interface

    export interface ConstructorProperties extends Node.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Connectable extends Node {

    // Owm methods of GFBGraph-0.2.GFBGraph.Connectable

    /**
     * In most cases, #GFBGraphConnectable implementers can use this function in order to parse
     * the response when a gfbgraph_node_get_connection_nodes() is executed and the
     * gfbgraph_connectable_parse_connected_data() was called.
     * 
     * Normally, Facebook Graph API returns the connections in the same way, using JSON objects,
     * with a root object called "data".
     * @param payload a const #gchar with the response string from the Facebook Graph API.
     * @returns a newly-allocated #GList of #GFBGraphNode with the same #GType as @self.
     */
    default_parse_connected_data(payload: string | null): Node[]
    /**
     * Get the Facebook Graph API function path to retrieve the nodes connected with `node_type`
     * managed by the #GFBGraphConnectable object.
     * @param node_type a #GType, required a #GFBGRAPH_TYPE_NODE or children.
     * @returns a const #gchar with the function path or %NULL.
     */
    get_connection_path(node_type: GObject.GType): string | null
    /**
     * Get the params to be inserted in a request to the Facebook Graph API
     * in order to append the node `self` to a node of type `node_type`.
     * @param node_type a #GType, required a #GFBGRAPH_TYPE_NODE or children.
     * @returns A string based #GHashTable with the params and his values or %NULL.
     */
    get_connection_post_params(node_type: GObject.GType): GLib.HashTable
    /**
     * Check if `self` object, normally a #GFBGraphNode implementing the #GFBGraphConnectable interface,
     * has the possibility to be connected to another node of type `node_type`.
     * @param node_type a #GType, required a #GFBGRAPH_TYPE_NODE or children.
     * @returns %TRUE in case that the @self object can be connected to a node of type @node_type, %FALSE otherwise.
     */
    is_connectable_to(node_type: GObject.GType): boolean
    /**
     * Parse the response contained in `payload` when a gfbgraph_node_get_connection_nodes() was
     * executed.
     * @param payload a const #gchar with the response string from the Facebook Graph API.
     * @returns a newly-allocated #GList of #GFBGraphNode created from the @payload or %NULL.
     */
    parse_connected_data(payload: string | null): Node[]

    // Own virtual methods of GFBGraph-0.2.GFBGraph.Connectable

    /**
     * Get the params to be inserted in a request to the Facebook Graph API
     * in order to append the node `self` to a node of type `node_type`.
     * @virtual 
     * @param node_type a #GType, required a #GFBGRAPH_TYPE_NODE or children.
     * @returns A string based #GHashTable with the params and his values or %NULL.
     */
    vfunc_get_connection_post_params(node_type: GObject.GType): GLib.HashTable
    /**
     * Parse the response contained in `payload` when a gfbgraph_node_get_connection_nodes() was
     * executed.
     * @virtual 
     * @param payload a const #gchar with the response string from the Facebook Graph API.
     * @returns a newly-allocated #GList of #GFBGraphNode created from the @payload or %NULL.
     */
    vfunc_parse_connected_data(payload: string | null): Node[]

    // Class property signals of GFBGraph-0.2.GFBGraph.Connectable

    connect(sigName: "notify::created-time", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::link", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::link", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::link", ...args: any[]): void
    connect(sigName: "notify::updated-time", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated-time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Connectable extends GObject.Object {

    // Own properties of GFBGraph-0.2.GFBGraph.Connectable

    static name: string
    static $gtype: GObject.GType<Connectable>

    // Constructors of GFBGraph-0.2.GFBGraph.Connectable

    constructor(config?: Connectable.ConstructorProperties) 
    _init(config?: Connectable.ConstructorProperties): void
}

export module Album {

    // Constructor properties interface

    export interface ConstructorProperties extends Connectable.ConstructorProperties, Node.ConstructorProperties {

        // Own constructor properties of GFBGraph-0.2.GFBGraph.Album

        /**
         * The number of photos in the album.
         */
        count?: number | null
        cover_photo?: string | null
        /**
         * The album description given by the owner.
         */
        description?: string | null
        /**
         * The album name.
         */
        name?: string | null
    }

}

export interface Album extends Connectable {

    // Own properties of GFBGraph-0.2.GFBGraph.Album

    /**
     * The number of photos in the album.
     */
    count: number
    cover_photo: string | null
    /**
     * The album description given by the owner.
     */
    description: string | null
    /**
     * The album name.
     */
    name: string | null

    // Own fields of GFBGraph-0.2.GFBGraph.Album

    parent: Node & GObject.Object

    // Owm methods of GFBGraph-0.2.GFBGraph.Album

    get_count(): number
    get_cover_photo_id(): string | null
    get_description(): string | null
    get_name(): string | null
    /**
     * Sets the description for the `album`.
     * @param description a const pointer to a #gchar.
     */
    set_description(description: string | null): void
    /**
     * Sets the name for the `album`.
     * @param name a const pointer to a #gchar.
     */
    set_name(name: string | null): void

    // Class property signals of GFBGraph-0.2.GFBGraph.Album

    connect(sigName: "notify::count", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::count", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::count", ...args: any[]): void
    connect(sigName: "notify::cover-photo", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cover-photo", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cover-photo", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::created-time", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::link", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::link", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::link", ...args: any[]): void
    connect(sigName: "notify::updated-time", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated-time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Album extends Node {

    // Own properties of GFBGraph-0.2.GFBGraph.Album

    static name: string
    static $gtype: GObject.GType<Album>

    // Constructors of GFBGraph-0.2.GFBGraph.Album

    constructor(config?: Album.ConstructorProperties) 
    /**
     * Creates a new #GFBGraphAlbum.
     * @constructor 
     * @returns a new #GFBGraphAlbum; unref with g_object_unref()
     */
    constructor() 
    /**
     * Creates a new #GFBGraphAlbum.
     * @constructor 
     * @returns a new #GFBGraphAlbum; unref with g_object_unref()
     */
    static new(): Album

    // Overloads of new

    /**
     * Creates a new #GFBGraphNode.
     * @constructor 
     * @returns a new #GFBGraphNode; unref with g_object_unref()
     */
    static new(): Node
    /**
     * Retrieves an album node from the Facebook Graph with the give ID.
     * @constructor 
     * @param authorizer a #GFBGraphAuthorizer.
     * @param id a const #gchar with the album ID.
     * @returns a new #GFBGraphAlbum; unref with g_object_unref()
     */
    static new_from_id(authorizer: Authorizer, id: string | null): Album

    // Overloads of new_from_id

    /**
     * Retrieve a node object as a #GFBgraphNode of #node_type type, with the given `id` from the Facebook Graph.
     * @constructor 
     * @param authorizer a #GFBGraphAuthorizer.
     * @param id a const #gchar with the node ID.
     * @param node_type a #GFBGraphNode type #GType.
     * @returns a #GFBGraphNode or %NULL.
     */
    static new_from_id(authorizer: Authorizer, id: string | null, node_type: GObject.GType): Node
    _init(config?: Album.ConstructorProperties): void
}

export module GoaAuthorizer {

    // Constructor properties interface

    export interface ConstructorProperties extends Authorizer.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface GoaAuthorizer extends Authorizer {

    // Own fields of GFBGraph-0.2.GFBGraph.GoaAuthorizer

    parent: GObject.Object

    // Class property signals of GFBGraph-0.2.GFBGraph.GoaAuthorizer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class GoaAuthorizer extends GObject.Object {

    // Own properties of GFBGraph-0.2.GFBGraph.GoaAuthorizer

    static name: string
    static $gtype: GObject.GType<GoaAuthorizer>

    // Constructors of GFBGraph-0.2.GFBGraph.GoaAuthorizer

    constructor(config?: GoaAuthorizer.ConstructorProperties) 
    _init(config?: GoaAuthorizer.ConstructorProperties): void
}

export module Node {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GFBGraph-0.2.GFBGraph.Node

        created_time?: string | null
        /**
         * The node ID. All nodes have one of this.
         */
        id?: string | null
        /**
         * The node link. An URL to the node on Facebook.
         */
        link?: string | null
        updated_time?: string | null
    }

}

export interface Node {

    // Own properties of GFBGraph-0.2.GFBGraph.Node

    created_time: string | null
    /**
     * The node ID. All nodes have one of this.
     */
    id: string | null
    /**
     * The node link. An URL to the node on Facebook.
     */
    link: string | null
    updated_time: string | null

    // Own fields of GFBGraph-0.2.GFBGraph.Node

    parent: GObject.Object

    // Owm methods of GFBGraph-0.2.GFBGraph.Node

    /**
     * Appends `connect_node` to `node`. `connect_node` must implement the #GFBGraphConnectable interface
     * and be connectable to `node` GType.
     * @param connect_node A #GFBGraphNode.
     * @param authorizer A #GFBGraphAuthorizer.
     * @returns TRUE on sucess, FALSE if an error ocurred.
     */
    append_connection(connect_node: Node, authorizer: Authorizer): boolean
    /**
     * Retrieve the nodes of type `node_type` connected to the `node` object. The `node_type` object must
     * implement the #GFBGraphConnectionable interface and be connectable to `node` type object.
     * See gfbgraph_node_get_connection_nodes_async() for the asynchronous version of this call.
     * @param node_type a #GFBGraphNode type #GType that determines the kind of nodes to retrieve.
     * @param authorizer a #GFBGraphAuthorizer.
     * @returns a newly-allocated #GList of type @node_type objects with the found nodes.
     */
    get_connection_nodes(node_type: GObject.GType, authorizer: Authorizer): Node[]
    /**
     * Asynchronously retrieve the list of nodes of type `node_type` connected to the `node` object. See
     * gfbgraph_node_get_connection_nodes() for the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can then call gfbgraph_node_get_connection_nodes_finish()
     * to get the list of connected nodes.
     * @param node_type a #GFBGraphNode type #GType that must implement the #GFBGraphConnectionable interface.
     * @param authorizer a #GFBGraphAuthorizer.
     * @param cancellable An optional #GCancellable object, or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is completed.
     */
    get_connection_nodes_async(node_type: GObject.GType, authorizer: Authorizer, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an asynchronous operation started with
     * gfbgraph_node_get_connection_nodes_async().
     * @param result A #GAsyncResult.
     * @returns a newly-allocated #GList of type #node_type objects with the found nodes.
     */
    get_connection_nodes_async_finish(result: Gio.AsyncResult): Node[]
    /**
     * Gets a node created time.
     * @returns an ISO 8601 encoded date when the node was initially published.
     */
    get_created_time(): string | null
    /**
     * Gets the Facebook Graph unique node ID.
     * @returns the node ID.
     */
    get_id(): string | null
    get_link(): string | null
    /**
     * Gets a node updated time.
     * @returns an ISO 8601 encoded date when the node was updated.
     */
    get_updated_time(): string | null
    /**
     * Sets the ID for a node. Just useful when a new node is created
     * and the Graph API returns the ID of the new created node.
     * @param id a const pointer to a #gchar.
     */
    set_id(id: string | null): void

    // Class property signals of GFBGraph-0.2.GFBGraph.Node

    connect(sigName: "notify::created-time", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::link", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::link", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::link", ...args: any[]): void
    connect(sigName: "notify::updated-time", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated-time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Node extends GObject.Object {

    // Own properties of GFBGraph-0.2.GFBGraph.Node

    static name: string
    static $gtype: GObject.GType<Node>

    // Constructors of GFBGraph-0.2.GFBGraph.Node

    constructor(config?: Node.ConstructorProperties) 
    /**
     * Creates a new #GFBGraphNode.
     * @constructor 
     * @returns a new #GFBGraphNode; unref with g_object_unref()
     */
    constructor() 
    /**
     * Creates a new #GFBGraphNode.
     * @constructor 
     * @returns a new #GFBGraphNode; unref with g_object_unref()
     */
    static new(): Node
    /**
     * Retrieve a node object as a #GFBgraphNode of #node_type type, with the given `id` from the Facebook Graph.
     * @constructor 
     * @param authorizer a #GFBGraphAuthorizer.
     * @param id a const #gchar with the node ID.
     * @param node_type a #GFBGraphNode type #GType.
     * @returns a #GFBGraphNode or %NULL.
     */
    static new_from_id(authorizer: Authorizer, id: string | null, node_type: GObject.GType): Node
    _init(config?: Node.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

export module Photo {

    // Constructor properties interface

    export interface ConstructorProperties extends Connectable.ConstructorProperties, Json.Serializable.ConstructorProperties, Node.ConstructorProperties {

        // Own constructor properties of GFBGraph-0.2.GFBGraph.Photo

        /**
         * The default photo height, up to 720px.
         */
        height?: number | null
        /**
         * A list with the available representations of the photo, in differents sizes
         */
        images?: any | null
        /**
         * The name of the photo given by his owner.
         */
        name?: string | null
        /**
         * An URI for the photo, with a maximum width or height of 720px.
         */
        source?: string | null
        /**
         * The default photo width, up to 720px.
         */
        width?: number | null
    }

}

export interface Photo extends Connectable, Json.Serializable {

    // Own properties of GFBGraph-0.2.GFBGraph.Photo

    /**
     * The default photo height, up to 720px.
     */
    height: number
    /**
     * A list with the available representations of the photo, in differents sizes
     */
    images: any
    /**
     * The name of the photo given by his owner.
     */
    name: string | null
    /**
     * An URI for the photo, with a maximum width or height of 720px.
     */
    source: string | null
    /**
     * The default photo width, up to 720px.
     */
    width: number

    // Own fields of GFBGraph-0.2.GFBGraph.Photo

    parent: Node & GObject.Object

    // Owm methods of GFBGraph-0.2.GFBGraph.Photo

    /**
     * Download the default sized photo pointed by `photo,` with a maximum width or height of 720px.
     * The photo always is a JPEG.
     * @param authorizer a #GFBGraphAuthorizer.
     * @returns a #GInputStream with the photo content or %NULL in case of error.
     */
    download_default_size(authorizer: Authorizer): Gio.InputStream
    get_default_height(): number
    get_default_source_uri(): string | null
    get_default_width(): number
    get_image_hires(): PhotoImage
    get_image_near_height(height: number): PhotoImage
    get_image_near_width(width: number): PhotoImage
    get_images(): PhotoImage[]
    get_name(): string | null

    // Conflicting methods

    /**
     * Calls the [vfunc`Json`.Serializable.get_property] implementation
     * on the `JsonSerializable` instance, which will get the value of
     * the given property.
     * @param pspec a property description
     */
    get_property(pspec: GObject.ParamSpec): /* value */ any

    // Overloads of get_property

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string | null, value: any): void
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string | null, value: any): void
    /**
     * Calls the [vfunc`Json`.Serializable.set_property] implementation
     * on the `JsonSerializable` instance, which will set the property
     * with the given value.
     * @param pspec a property description
     * @param value the property value to set
     */
    set_property(pspec: GObject.ParamSpec, value: any): void

    // Overloads of set_property

    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string | null, value: any): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string | null, value: any): void
    /**
     * Calls the [vfunc`Json`.Serializable.get_property] implementation
     * on the `JsonSerializable` instance, which will get the value of
     * the given property.
     * @virtual 
     * @param pspec a property description
     */
    vfunc_get_property(pspec: GObject.ParamSpec): /* value */ any

    // Overloads of vfunc_get_property

    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Calls the [vfunc`Json`.Serializable.set_property] implementation
     * on the `JsonSerializable` instance, which will set the property
     * with the given value.
     * @virtual 
     * @param pspec a property description
     * @param value the property value to set
     */
    vfunc_set_property(pspec: GObject.ParamSpec, value: any): void

    // Overloads of vfunc_set_property

    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void

    // Class property signals of GFBGraph-0.2.GFBGraph.Photo

    connect(sigName: "notify::height", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::images", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::images", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::images", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::source", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::created-time", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::link", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::link", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::link", ...args: any[]): void
    connect(sigName: "notify::updated-time", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated-time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Photo extends Node {

    // Own properties of GFBGraph-0.2.GFBGraph.Photo

    static name: string
    static $gtype: GObject.GType<Photo>

    // Constructors of GFBGraph-0.2.GFBGraph.Photo

    constructor(config?: Photo.ConstructorProperties) 
    /**
     * Creates a new #GFBGraphPhoto.
     * @constructor 
     * @returns a new #GFBGraphPhoto; unref with g_object_unref()
     */
    constructor() 
    /**
     * Creates a new #GFBGraphPhoto.
     * @constructor 
     * @returns a new #GFBGraphPhoto; unref with g_object_unref()
     */
    static new(): Photo

    // Overloads of new

    /**
     * Creates a new #GFBGraphNode.
     * @constructor 
     * @returns a new #GFBGraphNode; unref with g_object_unref()
     */
    static new(): Node
    /**
     * Retrieves an photo node from the Facebook Graph with the give ID.
     * @constructor 
     * @param authorizer a #GFBGraphAuthorizer.
     * @param id a const #gchar with the photo ID.
     * @returns a new #GFBGraphPhoto; unref with g_object_unref()
     */
    static new_from_id(authorizer: Authorizer, id: string | null): Photo

    // Overloads of new_from_id

    /**
     * Retrieve a node object as a #GFBgraphNode of #node_type type, with the given `id` from the Facebook Graph.
     * @constructor 
     * @param authorizer a #GFBGraphAuthorizer.
     * @param id a const #gchar with the node ID.
     * @param node_type a #GFBGraphNode type #GType.
     * @returns a #GFBGraphNode or %NULL.
     */
    static new_from_id(authorizer: Authorizer, id: string | null, node_type: GObject.GType): Node
    _init(config?: Photo.ConstructorProperties): void
}

export module SimpleAuthorizer {

    // Constructor properties interface

    export interface ConstructorProperties extends Authorizer.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GFBGraph-0.2.GFBGraph.SimpleAuthorizer

        access_token?: string | null
    }

}

export interface SimpleAuthorizer extends Authorizer {

    // Own properties of GFBGraph-0.2.GFBGraph.SimpleAuthorizer

    access_token: string | null

    // Own fields of GFBGraph-0.2.GFBGraph.SimpleAuthorizer

    parent: GObject.Object

    // Class property signals of GFBGraph-0.2.GFBGraph.SimpleAuthorizer

    connect(sigName: "notify::access-token", callback: (($obj: SimpleAuthorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::access-token", callback: (($obj: SimpleAuthorizer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::access-token", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SimpleAuthorizer extends GObject.Object {

    // Own properties of GFBGraph-0.2.GFBGraph.SimpleAuthorizer

    static name: string
    static $gtype: GObject.GType<SimpleAuthorizer>

    // Constructors of GFBGraph-0.2.GFBGraph.SimpleAuthorizer

    constructor(config?: SimpleAuthorizer.ConstructorProperties) 
    /**
     * Creates a new #GFBGraphAuthorizer to use with the GFBGraph library using the `access_token` as access token.
     * It's only a test authorizer, don't use in final code.
     * @constructor 
     * @param access_token a const `gchar`.
     * @returns a #GFBGraphSimpleAuthorizer.
     */
    constructor(access_token: string | null) 
    /**
     * Creates a new #GFBGraphAuthorizer to use with the GFBGraph library using the `access_token` as access token.
     * It's only a test authorizer, don't use in final code.
     * @constructor 
     * @param access_token a const `gchar`.
     * @returns a #GFBGraphSimpleAuthorizer.
     */
    static new(access_token: string | null): SimpleAuthorizer
    _init(config?: SimpleAuthorizer.ConstructorProperties): void
}

export module User {

    // Constructor properties interface

    export interface ConstructorProperties extends Node.ConstructorProperties {

        // Own constructor properties of GFBGraph-0.2.GFBGraph.User

        /**
         * The email of the user if available
         */
        email?: string | null
        /**
         * The full name of the user
         */
        name?: string | null
    }

}

export interface User {

    // Own properties of GFBGraph-0.2.GFBGraph.User

    /**
     * The email of the user if available
     */
    email: string | null
    /**
     * The full name of the user
     */
    name: string | null

    // Own fields of GFBGraph-0.2.GFBGraph.User

    parent: Node & GObject.Object

    // Owm methods of GFBGraph-0.2.GFBGraph.User

    /**
     * Retrieve the albums nodes owned by the `user`. This functions call the function ID/albums.
     * @param authorizer a #GFBGraphAuthorizer.
     * @returns a newly-allocated #GList with the albums nodes owned by the given user.
     */
    get_albums(authorizer: Authorizer): Album[]
    /**
     * Asynchronously retrieve the albums nodes owned by the `user`. See gfbgraph_user_get_albums() for the
     * synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can then call gfbgraph_user_get_albums_async_finish()
     * to get the #GList of #GFBGraphAlbum owned by the `user`.
     * @param authorizer a #GFBGraphAuthorizer.
     * @param cancellable An optional #GCancellable object, or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is completed.
     */
    get_albums_async(authorizer: Authorizer, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an asynchronous operation started with
     * gfbgraph_user_get_albums_async().
     * @param result A #GAsyncResult.
     * @returns a newly-allocated #GList of albums owned by the @user.
     */
    get_albums_async_finish(result: Gio.AsyncResult): Album[]
    /**
     * Get the user email. To retrieve this propertie, you need 'email' extended
     * permission.
     * @returns a const #gchar with the user email, or %NULL.
     */
    get_email(): string | null
    /**
     * Get the user full name.
     * @returns a const #gchar with the user full name, or %NULL.
     */
    get_name(): string | null

    // Class property signals of GFBGraph-0.2.GFBGraph.User

    connect(sigName: "notify::email", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::email", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::created-time", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::link", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::link", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::link", ...args: any[]): void
    connect(sigName: "notify::updated-time", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::updated-time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class User extends Node {

    // Own properties of GFBGraph-0.2.GFBGraph.User

    static name: string
    static $gtype: GObject.GType<User>

    // Constructors of GFBGraph-0.2.GFBGraph.User

    constructor(config?: User.ConstructorProperties) 
    /**
     * Creates a new #GFBGraphUser.
     * @constructor 
     * @returns a new #GFBGraphUser; unref with g_object_unref()
     */
    constructor() 
    /**
     * Creates a new #GFBGraphUser.
     * @constructor 
     * @returns a new #GFBGraphUser; unref with g_object_unref()
     */
    static new(): User

    // Overloads of new

    /**
     * Creates a new #GFBGraphNode.
     * @constructor 
     * @returns a new #GFBGraphNode; unref with g_object_unref()
     */
    static new(): Node
    /**
     * Retrieves a user from the Facebook Graph with the give ID.
     * @constructor 
     * @param authorizer a #GFBGraphAuthorizer.
     * @param id a const #gchar with the user ID.
     * @returns a new #GFBGraphUser; unref with g_object_unref()
     */
    static new_from_id(authorizer: Authorizer, id: string | null): User

    // Overloads of new_from_id

    /**
     * Retrieve a node object as a #GFBgraphNode of #node_type type, with the given `id` from the Facebook Graph.
     * @constructor 
     * @param authorizer a #GFBGraphAuthorizer.
     * @param id a const #gchar with the node ID.
     * @param node_type a #GFBGraphNode type #GType.
     * @returns a #GFBGraphNode or %NULL.
     */
    static new_from_id(authorizer: Authorizer, id: string | null, node_type: GObject.GType): Node
    _init(config?: User.ConstructorProperties): void
    /**
     * Retrieve the current user logged using the https://graph.facebook.com/me Graph API function.
     * See gfbgraph_user_get_my_async() for the asynchronous version of this call.
     * @param authorizer a #GFBGraphAuthorizer.
     * @returns a #GFBGraphUser with the current user information.
     */
    static get_me(authorizer: Authorizer): User
    /**
     * Asynchronously retrieve the current user logged. See gfbgraph_user_get_me() for the
     * synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can then call gfbgraph_user_get_me_finish()
     * to get the #GFBGraphUser for to the current user logged.
     * @param authorizer a #GFBGraphAuthorizer.
     * @param cancellable An optional #GCancellable object, or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is completed.
     */
    static get_me_async(authorizer: Authorizer, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<User> | null): void
    /**
     * Finishes an asynchronous operation started with
     * gfbgraph_user_get_me_async().
     * @param authorizer a #GFBGraphAuthorizer.
     * @param result A #GAsyncResult.
     * @returns a #GFBGraphUser for to the current user logged.
     */
    static get_me_async_finish(authorizer: Authorizer, result: Gio.AsyncResult): User
}

export interface AlbumClass {

    // Own fields of GFBGraph-0.2.GFBGraph.AlbumClass

    parent_class: NodeClass
}

export abstract class AlbumClass {

    // Own properties of GFBGraph-0.2.GFBGraph.AlbumClass

    static name: string
}

export interface AlbumPrivate {
}

export class AlbumPrivate {

    // Own properties of GFBGraph-0.2.GFBGraph.AlbumPrivate

    static name: string
}

export interface AuthorizerInterface {

    // Own fields of GFBGraph-0.2.GFBGraph.AuthorizerInterface

    /**
     * The parent interface.
     * @field 
     */
    parent: GObject.TypeInterface
    process_call: (iface: Authorizer, call: Rest.ProxyCall) => void
    process_message: (iface: Authorizer, message: Soup.Message) => void
    refresh_authorization: (iface: Authorizer, cancellable: Gio.Cancellable | null) => boolean
}

/**
 * Interface structure for #GFBGraphAuthorizer. All methos should be thread safe.
 * @record 
 */
export abstract class AuthorizerInterface {

    // Own properties of GFBGraph-0.2.GFBGraph.AuthorizerInterface

    static name: string
}

export interface ConnectableInterface {

    // Own fields of GFBGraph-0.2.GFBGraph.ConnectableInterface

    parent: GObject.TypeInterface
    connections: GLib.HashTable
    get_connection_post_params: (self: Connectable, node_type: GObject.GType) => GLib.HashTable
    parse_connected_data: (self: Connectable, payload: string | null) => Node[]
}

export abstract class ConnectableInterface {

    // Own properties of GFBGraph-0.2.GFBGraph.ConnectableInterface

    static name: string
}

export interface GoaAuthorizerClass {

    // Own fields of GFBGraph-0.2.GFBGraph.GoaAuthorizerClass

    parent_class: GObject.ObjectClass
}

export abstract class GoaAuthorizerClass {

    // Own properties of GFBGraph-0.2.GFBGraph.GoaAuthorizerClass

    static name: string
}

export interface GoaAuthorizerPrivate {
}

export class GoaAuthorizerPrivate {

    // Own properties of GFBGraph-0.2.GFBGraph.GoaAuthorizerPrivate

    static name: string
}

export interface NodeClass {

    // Own fields of GFBGraph-0.2.GFBGraph.NodeClass

    parent_class: GObject.ObjectClass
}

export abstract class NodeClass {

    // Own properties of GFBGraph-0.2.GFBGraph.NodeClass

    static name: string
}

export interface NodePrivate {
}

export class NodePrivate {

    // Own properties of GFBGraph-0.2.GFBGraph.NodePrivate

    static name: string
}

export interface PhotoClass {

    // Own fields of GFBGraph-0.2.GFBGraph.PhotoClass

    parent_class: NodeClass
}

export abstract class PhotoClass {

    // Own properties of GFBGraph-0.2.GFBGraph.PhotoClass

    static name: string
}

export interface PhotoImage {

    // Own fields of GFBGraph-0.2.GFBGraph.PhotoImage

    width: number
    height: number
    source: string | null
}

/**
 * An struct with the information of a image.
 * @record 
 */
export class PhotoImage {

    // Own properties of GFBGraph-0.2.GFBGraph.PhotoImage

    static name: string
}

export interface PhotoPrivate {
}

export class PhotoPrivate {

    // Own properties of GFBGraph-0.2.GFBGraph.PhotoPrivate

    static name: string
}

export interface SimpleAuthorizerClass {

    // Own fields of GFBGraph-0.2.GFBGraph.SimpleAuthorizerClass

    parent_class: GObject.ObjectClass
}

export abstract class SimpleAuthorizerClass {

    // Own properties of GFBGraph-0.2.GFBGraph.SimpleAuthorizerClass

    static name: string
}

export interface SimpleAuthorizerPrivate {
}

export class SimpleAuthorizerPrivate {

    // Own properties of GFBGraph-0.2.GFBGraph.SimpleAuthorizerPrivate

    static name: string
}

export interface UserClass {

    // Own fields of GFBGraph-0.2.GFBGraph.UserClass

    parent_class: NodeClass
}

export abstract class UserClass {

    // Own properties of GFBGraph-0.2.GFBGraph.UserClass

    static name: string
}

export interface UserPrivate {
}

export class UserPrivate {

    // Own properties of GFBGraph-0.2.GFBGraph.UserPrivate

    static name: string
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