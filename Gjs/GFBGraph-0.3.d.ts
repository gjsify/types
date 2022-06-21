// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GFBGraph-0.3
 */

import type * as Gjs from './Gjs';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Rest from './Rest-0.7';
import type Json from './Json-1.0';

export namespace GFBGraph {

enum NodeError {
    CONNECTIONABLE,
    CONNECTABLE,
}
/**
 * Create a new #RestProxyCall pointing to the Facebook Graph API url (https://graph.facebook.com)
 * and processed by the authorizer to allow queries.
 * @param authorizer a #GFBGraphAuthorizer.
 */
function new_rest_call(authorizer: Authorizer): Rest.ProxyCall
interface Authorizer_ConstructProps extends GObject.Object_ConstructProps {
}

interface Authorizer {

    // Owm methods of GFBGraph-0.3.GFBGraph.Authorizer

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
     */
    refresh_authorization(cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of GFBGraph-0.3.GFBGraph.Authorizer

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
     */
    vfunc_refresh_authorization(cancellable: Gio.Cancellable | null): boolean

    // Class property signals of GFBGraph-0.3.GFBGraph.Authorizer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Authorizer extends GObject.Object {

    // Own properties of GFBGraph-0.3.GFBGraph.Authorizer

    static name: string
    static $gtype: GObject.GType<Authorizer>

    // Constructors of GFBGraph-0.3.GFBGraph.Authorizer

    constructor(config?: Authorizer_ConstructProps) 
    _init(config?: Authorizer_ConstructProps): void
}

interface Connectable_ConstructProps extends Node_ConstructProps, GObject.Object_ConstructProps {
}

interface Connectable extends Node {

    // Owm methods of GFBGraph-0.3.GFBGraph.Connectable

    /**
     * In most cases, #GFBGraphConnectable implementers can use this function in order to parse
     * the response when a gfbgraph_node_get_connection_nodes() is executed and the
     * gfbgraph_connectable_parse_connected_data() was called.
     * 
     * Normally, Facebook Graph API returns the connections in the same way, using JSON objects,
     * with a root object called "data".
     * @param payload a const #gchar with the response string from the Facebook Graph API.
     */
    default_parse_connected_data(payload: string): Node[]
    /**
     * Get the Facebook Graph API function path to retrieve the nodes connected with `node_type`
     * managed by the #GFBGraphConnectable object.
     * @param node_type a #GType, required a #GFBGRAPH_TYPE_NODE or children.
     */
    get_connection_path(node_type: GObject.GType): string
    /**
     * Get the params to be inserted in a request to the Facebook Graph API
     * in order to append the node `self` to a node of type `node_type`.
     * @param node_type a #GType, required a #GFBGRAPH_TYPE_NODE or children.
     */
    get_connection_post_params(node_type: GObject.GType): GLib.HashTable
    /**
     * Check if `self` object, normally a #GFBGraphNode implementing the #GFBGraphConnectable interface,
     * has the possibility to be connected to another node of type `node_type`.
     * @param node_type a #GType, required a #GFBGRAPH_TYPE_NODE or children.
     */
    is_connectable_to(node_type: GObject.GType): boolean
    /**
     * Parse the response contained in `payload` when a gfbgraph_node_get_connection_nodes() was
     * executed.
     * @param payload a const #gchar with the response string from the Facebook Graph API.
     */
    parse_connected_data(payload: string): Node[]

    // Own virtual methods of GFBGraph-0.3.GFBGraph.Connectable

    /**
     * Get the params to be inserted in a request to the Facebook Graph API
     * in order to append the node `self` to a node of type `node_type`.
     * @virtual 
     * @param node_type a #GType, required a #GFBGRAPH_TYPE_NODE or children.
     */
    vfunc_get_connection_post_params(node_type: GObject.GType): GLib.HashTable
    /**
     * Parse the response contained in `payload` when a gfbgraph_node_get_connection_nodes() was
     * executed.
     * @virtual 
     * @param payload a const #gchar with the response string from the Facebook Graph API.
     */
    vfunc_parse_connected_data(payload: string): Node[]

    // Class property signals of GFBGraph-0.3.GFBGraph.Connectable

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

class Connectable extends GObject.Object {

    // Own properties of GFBGraph-0.3.GFBGraph.Connectable

    static name: string
    static $gtype: GObject.GType<Connectable>

    // Constructors of GFBGraph-0.3.GFBGraph.Connectable

    constructor(config?: Connectable_ConstructProps) 
    _init(config?: Connectable_ConstructProps): void
}

interface Album_ConstructProps extends Connectable_ConstructProps, Node_ConstructProps {

    // Own constructor properties of GFBGraph-0.3.GFBGraph.Album

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

interface Album extends Connectable {

    // Own properties of GFBGraph-0.3.GFBGraph.Album

    /**
     * The number of photos in the album.
     */
    count: number
    cover_photo: string
    /**
     * The album description given by the owner.
     */
    description: string
    /**
     * The album name.
     */
    name: string

    // Own fields of GFBGraph-0.3.GFBGraph.Album

    parent: Node

    // Owm methods of GFBGraph-0.3.GFBGraph.Album

    get_count(): number
    get_cover_photo_id(): string
    get_description(): string
    get_name(): string
    /**
     * Sets the description for the `album`.
     * @param description a const pointer to a #gchar.
     */
    set_description(description: string): void
    /**
     * Sets the name for the `album`.
     * @param name a const pointer to a #gchar.
     */
    set_name(name: string): void

    // Class property signals of GFBGraph-0.3.GFBGraph.Album

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

class Album extends Node {

    // Own properties of GFBGraph-0.3.GFBGraph.Album

    static name: string
    static $gtype: GObject.GType<Album>

    // Constructors of GFBGraph-0.3.GFBGraph.Album

    constructor(config?: Album_ConstructProps) 
    /**
     * Creates a new #GFBGraphAlbum.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GFBGraphAlbum.
     * @constructor 
     */
    static new(): Album

    // Overloads of new

    /**
     * Creates a new #GFBGraphNode.
     * @constructor 
     */
    static new(): Node
    /**
     * Retrieves an album node from the Facebook Graph with the give ID.
     * @constructor 
     * @param authorizer a #GFBGraphAuthorizer.
     * @param id a const #gchar with the album ID.
     */
    static new_from_id(authorizer: Authorizer, id: string): Album

    // Overloads of new_from_id

    /**
     * Retrieve a node object as a #GFBgraphNode of #node_type type, with the given `id` from the Facebook Graph.
     * @constructor 
     * @param authorizer a #GFBGraphAuthorizer.
     * @param id a const #gchar with the node ID.
     * @param node_type a #GFBGraphNode type #GType.
     */
    static new_from_id(authorizer: Authorizer, id: string, node_type: GObject.GType): Node
    _init(config?: Album_ConstructProps): void
}

interface GoaAuthorizer_ConstructProps extends Authorizer_ConstructProps, GObject.Object_ConstructProps {
}

interface GoaAuthorizer extends Authorizer {

    // Own fields of GFBGraph-0.3.GFBGraph.GoaAuthorizer

    parent: GObject.Object

    // Class property signals of GFBGraph-0.3.GFBGraph.GoaAuthorizer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GoaAuthorizer extends GObject.Object {

    // Own properties of GFBGraph-0.3.GFBGraph.GoaAuthorizer

    static name: string
    static $gtype: GObject.GType<GoaAuthorizer>

    // Constructors of GFBGraph-0.3.GFBGraph.GoaAuthorizer

    constructor(config?: GoaAuthorizer_ConstructProps) 
    _init(config?: GoaAuthorizer_ConstructProps): void
}

interface Node_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GFBGraph-0.3.GFBGraph.Node

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

interface Node {

    // Own properties of GFBGraph-0.3.GFBGraph.Node

    created_time: string
    /**
     * The node ID. All nodes have one of this.
     */
    id: string
    /**
     * The node link. An URL to the node on Facebook.
     */
    link: string
    updated_time: string

    // Own fields of GFBGraph-0.3.GFBGraph.Node

    parent: GObject.Object

    // Owm methods of GFBGraph-0.3.GFBGraph.Node

    /**
     * Appends `connect_node` to `node`. `connect_node` must implement the #GFBGraphConnectable interface
     * and be connectable to `node` GType.
     * @param connect_node A #GFBGraphNode.
     * @param authorizer A #GFBGraphAuthorizer.
     */
    append_connection(connect_node: Node, authorizer: Authorizer): boolean
    /**
     * Retrieve the nodes of type `node_type` connected to the `node` object. The `node_type` object must
     * implement the #GFBGraphConnectionable interface and be connectable to `node` type object.
     * See gfbgraph_node_get_connection_nodes_async() for the asynchronous version of this call.
     * @param node_type a #GFBGraphNode type #GType that determines the kind of nodes to retrieve.
     * @param authorizer a #GFBGraphAuthorizer.
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
    get_connection_nodes_async(node_type: GObject.GType, authorizer: Authorizer, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous operation started with
     * gfbgraph_node_get_connection_nodes_async().
     * @param result A #GAsyncResult.
     */
    get_connection_nodes_async_finish(result: Gio.AsyncResult): Node[]
    /**
     * Gets a node created time.
     */
    get_created_time(): string
    /**
     * Gets the Facebook Graph unique node ID.
     */
    get_id(): string
    get_link(): string
    /**
     * Gets a node updated time.
     */
    get_updated_time(): string
    /**
     * Sets the ID for a node. Just useful when a new node is created
     * and the Graph API returns the ID of the new created node.
     * @param id a const pointer to a #gchar.
     */
    set_id(id: string): void

    // Class property signals of GFBGraph-0.3.GFBGraph.Node

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

class Node extends GObject.Object {

    // Own properties of GFBGraph-0.3.GFBGraph.Node

    static name: string
    static $gtype: GObject.GType<Node>

    // Constructors of GFBGraph-0.3.GFBGraph.Node

    constructor(config?: Node_ConstructProps) 
    /**
     * Creates a new #GFBGraphNode.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GFBGraphNode.
     * @constructor 
     */
    static new(): Node
    /**
     * Retrieve a node object as a #GFBgraphNode of #node_type type, with the given `id` from the Facebook Graph.
     * @constructor 
     * @param authorizer a #GFBGraphAuthorizer.
     * @param id a const #gchar with the node ID.
     * @param node_type a #GFBGraphNode type #GType.
     */
    static new_from_id(authorizer: Authorizer, id: string, node_type: GObject.GType): Node
    _init(config?: Node_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface Photo_ConstructProps extends Connectable_ConstructProps, Json.Serializable_ConstructProps, Node_ConstructProps {

    // Own constructor properties of GFBGraph-0.3.GFBGraph.Photo

    /**
     * The default photo height, up to 720px.
     */
    height?: number | null
    /**
     * A list with the available representations of the photo, in differents sizes
     */
    images?: object | null
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

interface Photo extends Connectable, Json.Serializable {

    // Own properties of GFBGraph-0.3.GFBGraph.Photo

    /**
     * The default photo height, up to 720px.
     */
    height: number
    /**
     * A list with the available representations of the photo, in differents sizes
     */
    images: object
    /**
     * The name of the photo given by his owner.
     */
    name: string
    /**
     * An URI for the photo, with a maximum width or height of 720px.
     */
    source: string
    /**
     * The default photo width, up to 720px.
     */
    width: number

    // Own fields of GFBGraph-0.3.GFBGraph.Photo

    parent: Node

    // Owm methods of GFBGraph-0.3.GFBGraph.Photo

    /**
     * Download the default sized photo pointed by `photo,` with a maximum width or height of 720px.
     * The photo always is a JPEG.
     * @param authorizer a #GFBGraphAuthorizer.
     */
    download_default_size(authorizer: Authorizer): Gio.InputStream
    get_default_height(): number
    get_default_source_uri(): string
    get_default_width(): number
    get_image_hires(): PhotoImage
    get_image_near_height(height: number): PhotoImage
    get_image_near_width(width: number): PhotoImage
    get_images(): PhotoImage[]
    get_name(): string

    // Conflicting methods

    get_property(...args: any[]): any
    set_property(...args: any[]): any
    vfunc_get_property(...args: any[]): any
    vfunc_set_property(...args: any[]): any

    // Class property signals of GFBGraph-0.3.GFBGraph.Photo

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

class Photo extends Node {

    // Own properties of GFBGraph-0.3.GFBGraph.Photo

    static name: string
    static $gtype: GObject.GType<Photo>

    // Constructors of GFBGraph-0.3.GFBGraph.Photo

    constructor(config?: Photo_ConstructProps) 
    /**
     * Creates a new #GFBGraphPhoto.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GFBGraphPhoto.
     * @constructor 
     */
    static new(): Photo

    // Overloads of new

    /**
     * Creates a new #GFBGraphNode.
     * @constructor 
     */
    static new(): Node
    /**
     * Retrieves an photo node from the Facebook Graph with the give ID.
     * @constructor 
     * @param authorizer a #GFBGraphAuthorizer.
     * @param id a const #gchar with the photo ID.
     */
    static new_from_id(authorizer: Authorizer, id: string): Photo

    // Overloads of new_from_id

    /**
     * Retrieve a node object as a #GFBgraphNode of #node_type type, with the given `id` from the Facebook Graph.
     * @constructor 
     * @param authorizer a #GFBGraphAuthorizer.
     * @param id a const #gchar with the node ID.
     * @param node_type a #GFBGraphNode type #GType.
     */
    static new_from_id(authorizer: Authorizer, id: string, node_type: GObject.GType): Node
    _init(config?: Photo_ConstructProps): void
}

interface SimpleAuthorizer_ConstructProps extends Authorizer_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of GFBGraph-0.3.GFBGraph.SimpleAuthorizer

    access_token?: string | null
}

interface SimpleAuthorizer extends Authorizer {

    // Own properties of GFBGraph-0.3.GFBGraph.SimpleAuthorizer

    access_token: string

    // Own fields of GFBGraph-0.3.GFBGraph.SimpleAuthorizer

    parent: GObject.Object

    // Class property signals of GFBGraph-0.3.GFBGraph.SimpleAuthorizer

    connect(sigName: "notify::access-token", callback: (($obj: SimpleAuthorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::access-token", callback: (($obj: SimpleAuthorizer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::access-token", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SimpleAuthorizer extends GObject.Object {

    // Own properties of GFBGraph-0.3.GFBGraph.SimpleAuthorizer

    static name: string
    static $gtype: GObject.GType<SimpleAuthorizer>

    // Constructors of GFBGraph-0.3.GFBGraph.SimpleAuthorizer

    constructor(config?: SimpleAuthorizer_ConstructProps) 
    /**
     * Creates a new #GFBGraphAuthorizer to use with the GFBGraph library using the `access_token` as access token.
     * It's only a test authorizer, don't use in final code.
     * @constructor 
     * @param access_token a const `gchar`.
     */
    constructor(access_token: string) 
    /**
     * Creates a new #GFBGraphAuthorizer to use with the GFBGraph library using the `access_token` as access token.
     * It's only a test authorizer, don't use in final code.
     * @constructor 
     * @param access_token a const `gchar`.
     */
    static new(access_token: string): SimpleAuthorizer
    _init(config?: SimpleAuthorizer_ConstructProps): void
}

interface User_ConstructProps extends Node_ConstructProps {

    // Own constructor properties of GFBGraph-0.3.GFBGraph.User

    /**
     * The email of the user if available
     */
    email?: string | null
    /**
     * The full name of the user
     */
    name?: string | null
}

interface User {

    // Own properties of GFBGraph-0.3.GFBGraph.User

    /**
     * The email of the user if available
     */
    email: string
    /**
     * The full name of the user
     */
    name: string

    // Own fields of GFBGraph-0.3.GFBGraph.User

    parent: Node

    // Owm methods of GFBGraph-0.3.GFBGraph.User

    /**
     * Retrieve the albums nodes owned by the `user`. This functions call the function ID/albums.
     * @param authorizer a #GFBGraphAuthorizer.
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
    get_albums_async(authorizer: Authorizer, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous operation started with
     * gfbgraph_user_get_albums_async().
     * @param result A #GAsyncResult.
     */
    get_albums_async_finish(result: Gio.AsyncResult): Album[]
    /**
     * Get the user email. To retrieve this propertie, you need 'email' extended
     * permission.
     */
    get_email(): string
    /**
     * Get the user full name.
     */
    get_name(): string

    // Class property signals of GFBGraph-0.3.GFBGraph.User

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

class User extends Node {

    // Own properties of GFBGraph-0.3.GFBGraph.User

    static name: string
    static $gtype: GObject.GType<User>

    // Constructors of GFBGraph-0.3.GFBGraph.User

    constructor(config?: User_ConstructProps) 
    /**
     * Creates a new #GFBGraphUser.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GFBGraphUser.
     * @constructor 
     */
    static new(): User

    // Overloads of new

    /**
     * Creates a new #GFBGraphNode.
     * @constructor 
     */
    static new(): Node
    /**
     * Retrieves a user from the Facebook Graph with the give ID.
     * @constructor 
     * @param authorizer a #GFBGraphAuthorizer.
     * @param id a const #gchar with the user ID.
     */
    static new_from_id(authorizer: Authorizer, id: string): User

    // Overloads of new_from_id

    /**
     * Retrieve a node object as a #GFBgraphNode of #node_type type, with the given `id` from the Facebook Graph.
     * @constructor 
     * @param authorizer a #GFBGraphAuthorizer.
     * @param id a const #gchar with the node ID.
     * @param node_type a #GFBGraphNode type #GType.
     */
    static new_from_id(authorizer: Authorizer, id: string, node_type: GObject.GType): Node
    _init(config?: User_ConstructProps): void
    /**
     * Retrieve the current user logged using the https://graph.facebook.com/me Graph API function.
     * See gfbgraph_user_get_my_async() for the asynchronous version of this call.
     * @param authorizer a #GFBGraphAuthorizer.
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
    static get_me_async(authorizer: Authorizer, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous operation started with
     * gfbgraph_user_get_me_async().
     * @param authorizer a #GFBGraphAuthorizer.
     * @param result A #GAsyncResult.
     */
    static get_me_async_finish(authorizer: Authorizer, result: Gio.AsyncResult): User
}

interface AlbumClass {

    // Own fields of GFBGraph-0.3.GFBGraph.AlbumClass

    parent_class: NodeClass
}

abstract class AlbumClass {

    // Own properties of GFBGraph-0.3.GFBGraph.AlbumClass

    static name: string
}

interface AlbumPrivate {
}

class AlbumPrivate {

    // Own properties of GFBGraph-0.3.GFBGraph.AlbumPrivate

    static name: string
}

interface AuthorizerInterface {

    // Own fields of GFBGraph-0.3.GFBGraph.AuthorizerInterface

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
abstract class AuthorizerInterface {

    // Own properties of GFBGraph-0.3.GFBGraph.AuthorizerInterface

    static name: string
}

interface ConnectableInterface {

    // Own fields of GFBGraph-0.3.GFBGraph.ConnectableInterface

    parent: GObject.TypeInterface
    connections: GLib.HashTable
    get_connection_post_params: (self: Connectable, node_type: GObject.GType) => GLib.HashTable
    parse_connected_data: (self: Connectable, payload: string) => Node[]
}

abstract class ConnectableInterface {

    // Own properties of GFBGraph-0.3.GFBGraph.ConnectableInterface

    static name: string
}

interface GoaAuthorizerClass {

    // Own fields of GFBGraph-0.3.GFBGraph.GoaAuthorizerClass

    parent_class: GObject.ObjectClass
}

abstract class GoaAuthorizerClass {

    // Own properties of GFBGraph-0.3.GFBGraph.GoaAuthorizerClass

    static name: string
}

interface GoaAuthorizerPrivate {
}

class GoaAuthorizerPrivate {

    // Own properties of GFBGraph-0.3.GFBGraph.GoaAuthorizerPrivate

    static name: string
}

interface NodeClass {

    // Own fields of GFBGraph-0.3.GFBGraph.NodeClass

    parent_class: GObject.ObjectClass
}

abstract class NodeClass {

    // Own properties of GFBGraph-0.3.GFBGraph.NodeClass

    static name: string
}

interface NodePrivate {
}

class NodePrivate {

    // Own properties of GFBGraph-0.3.GFBGraph.NodePrivate

    static name: string
}

interface PhotoClass {

    // Own fields of GFBGraph-0.3.GFBGraph.PhotoClass

    parent_class: NodeClass
}

abstract class PhotoClass {

    // Own properties of GFBGraph-0.3.GFBGraph.PhotoClass

    static name: string
}

interface PhotoImage {

    // Own fields of GFBGraph-0.3.GFBGraph.PhotoImage

    width: number
    height: number
    source: string
}

/**
 * An struct with the information of a image.
 * @record 
 */
class PhotoImage {

    // Own properties of GFBGraph-0.3.GFBGraph.PhotoImage

    static name: string
}

interface PhotoPrivate {
}

class PhotoPrivate {

    // Own properties of GFBGraph-0.3.GFBGraph.PhotoPrivate

    static name: string
}

interface SimpleAuthorizerClass {

    // Own fields of GFBGraph-0.3.GFBGraph.SimpleAuthorizerClass

    parent_class: GObject.ObjectClass
}

abstract class SimpleAuthorizerClass {

    // Own properties of GFBGraph-0.3.GFBGraph.SimpleAuthorizerClass

    static name: string
}

interface SimpleAuthorizerPrivate {
}

class SimpleAuthorizerPrivate {

    // Own properties of GFBGraph-0.3.GFBGraph.SimpleAuthorizerPrivate

    static name: string
}

interface UserClass {

    // Own fields of GFBGraph-0.3.GFBGraph.UserClass

    parent_class: NodeClass
}

abstract class UserClass {

    // Own properties of GFBGraph-0.3.GFBGraph.UserClass

    static name: string
}

interface UserPrivate {
}

class UserPrivate {

    // Own properties of GFBGraph-0.3.GFBGraph.UserPrivate

    static name: string
}

}
export default GFBGraph;