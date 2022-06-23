// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GFBGraph-0.2
 */

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
function newRestCall(authorizer: Authorizer): Rest.ProxyCall
interface Authorizer_ConstructProps extends GObject.Object_ConstructProps {
}

interface Authorizer {

    // Owm methods of GFBGraph-0.2.GFBGraph.Authorizer

    /**
     * Adds the necessary authorization to `call`.
     * 
     * This method modifies `call` in place and is thread safe.
     * @param call A #RestProxyCall.
     */
    processCall(call: Rest.ProxyCall): void
    /**
     * Adds the necessary authorization to `message`. The type of `message`
     * can be DELETE, GET and POST.
     * 
     * This method modifies `message` in place and is thread safe.
     * @param message A #SoupMessage.
     */
    processMessage(message: Soup.Message): void
    /**
     * Synchronously forces `iface` to refresh any authorization tokens
     * held by it.
     * 
     * This method is thread safe.
     * @param cancellable An optional #GCancellable object, or %NULL.
     */
    refreshAuthorization(cancellable: Gio.Cancellable | null): boolean

    // Class property signals of GFBGraph-0.2.GFBGraph.Authorizer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Authorizer extends GObject.Object {

    // Own properties of GFBGraph-0.2.GFBGraph.Authorizer

    static name: string
    static $gtype: GObject.GType<Authorizer>

    // Constructors of GFBGraph-0.2.GFBGraph.Authorizer

    constructor(config?: Authorizer_ConstructProps) 
    _init(config?: Authorizer_ConstructProps): void
}

interface Connectable_ConstructProps extends Node_ConstructProps, GObject.Object_ConstructProps {
}

interface Connectable extends Node {

    // Owm methods of GFBGraph-0.2.GFBGraph.Connectable

    /**
     * In most cases, #GFBGraphConnectable implementers can use this function in order to parse
     * the response when a gfbgraph_node_get_connection_nodes() is executed and the
     * gfbgraph_connectable_parse_connected_data() was called.
     * 
     * Normally, Facebook Graph API returns the connections in the same way, using JSON objects,
     * with a root object called "data".
     * @param payload a const #gchar with the response string from the Facebook Graph API.
     */
    defaultParseConnectedData(payload: string): Node[]
    /**
     * Get the Facebook Graph API function path to retrieve the nodes connected with `node_type`
     * managed by the #GFBGraphConnectable object.
     * @param nodeType a #GType, required a #GFBGRAPH_TYPE_NODE or children.
     */
    getConnectionPath(nodeType: GObject.GType): string
    /**
     * Get the params to be inserted in a request to the Facebook Graph API
     * in order to append the node `self` to a node of type `node_type`.
     * @param nodeType a #GType, required a #GFBGRAPH_TYPE_NODE or children.
     */
    getConnectionPostParams(nodeType: GObject.GType): GLib.HashTable
    /**
     * Check if `self` object, normally a #GFBGraphNode implementing the #GFBGraphConnectable interface,
     * has the possibility to be connected to another node of type `node_type`.
     * @param nodeType a #GType, required a #GFBGRAPH_TYPE_NODE or children.
     */
    isConnectableTo(nodeType: GObject.GType): boolean
    /**
     * Parse the response contained in `payload` when a gfbgraph_node_get_connection_nodes() was
     * executed.
     * @param payload a const #gchar with the response string from the Facebook Graph API.
     */
    parseConnectedData(payload: string): Node[]

    // Class property signals of GFBGraph-0.2.GFBGraph.Connectable

    connect(sigName: "notify::created-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::created-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::created-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::link", callback: (...args: any[]) => void): number
    on(sigName: "notify::link", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::link", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::link", ...args: any[]): void
    connect(sigName: "notify::updated-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::updated-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::updated-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::updated-time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Connectable extends GObject.Object {

    // Own properties of GFBGraph-0.2.GFBGraph.Connectable

    static name: string
    static $gtype: GObject.GType<Connectable>

    // Constructors of GFBGraph-0.2.GFBGraph.Connectable

    constructor(config?: Connectable_ConstructProps) 
    _init(config?: Connectable_ConstructProps): void
}

interface Album_ConstructProps extends Connectable_ConstructProps, Node_ConstructProps {

    // Own constructor properties of GFBGraph-0.2.GFBGraph.Album

    /**
     * The number of photos in the album.
     */
    count?: number | null
    coverPhoto?: string | null
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

    // Own properties of GFBGraph-0.2.GFBGraph.Album

    /**
     * The number of photos in the album.
     */
    count: number
    coverPhoto: string
    /**
     * The album description given by the owner.
     */
    description: string
    /**
     * The album name.
     */
    name: string

    // Own fields of GFBGraph-0.2.GFBGraph.Album

    parent: Node

    // Owm methods of GFBGraph-0.2.GFBGraph.Album

    getCount(): number
    getCoverPhotoId(): string
    getDescription(): string
    getName(): string
    /**
     * Sets the description for the `album`.
     * @param description a const pointer to a #gchar.
     */
    setDescription(description: string): void
    /**
     * Sets the name for the `album`.
     * @param name a const pointer to a #gchar.
     */
    setName(name: string): void

    // Class property signals of GFBGraph-0.2.GFBGraph.Album

    connect(sigName: "notify::count", callback: (...args: any[]) => void): number
    on(sigName: "notify::count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::count", ...args: any[]): void
    connect(sigName: "notify::cover-photo", callback: (...args: any[]) => void): number
    on(sigName: "notify::cover-photo", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cover-photo", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cover-photo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cover-photo", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::created-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::created-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::created-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::link", callback: (...args: any[]) => void): number
    on(sigName: "notify::link", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::link", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::link", ...args: any[]): void
    connect(sigName: "notify::updated-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::updated-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::updated-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::updated-time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Album extends Node {

    // Own properties of GFBGraph-0.2.GFBGraph.Album

    static name: string
    static $gtype: GObject.GType<Album>

    // Constructors of GFBGraph-0.2.GFBGraph.Album

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
    static newFromId(authorizer: Authorizer, id: string): Album

    // Overloads of newFromId

    /**
     * Retrieve a node object as a #GFBgraphNode of #node_type type, with the given `id` from the Facebook Graph.
     * @constructor 
     * @param authorizer a #GFBGraphAuthorizer.
     * @param id a const #gchar with the node ID.
     * @param nodeType a #GFBGraphNode type #GType.
     */
    static newFromId(authorizer: Authorizer, id: string, nodeType: GObject.GType): Node
    _init(config?: Album_ConstructProps): void
}

interface GoaAuthorizer_ConstructProps extends Authorizer_ConstructProps, GObject.Object_ConstructProps {
}

interface GoaAuthorizer extends Authorizer {

    // Own fields of GFBGraph-0.2.GFBGraph.GoaAuthorizer

    parent: GObject.Object

    // Class property signals of GFBGraph-0.2.GFBGraph.GoaAuthorizer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GoaAuthorizer extends GObject.Object {

    // Own properties of GFBGraph-0.2.GFBGraph.GoaAuthorizer

    static name: string
    static $gtype: GObject.GType<GoaAuthorizer>

    // Constructors of GFBGraph-0.2.GFBGraph.GoaAuthorizer

    constructor(config?: GoaAuthorizer_ConstructProps) 
    _init(config?: GoaAuthorizer_ConstructProps): void
}

interface Node_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GFBGraph-0.2.GFBGraph.Node

    createdTime?: string | null
    /**
     * The node ID. All nodes have one of this.
     */
    id?: string | null
    /**
     * The node link. An URL to the node on Facebook.
     */
    link?: string | null
    updatedTime?: string | null
}

interface Node {

    // Own properties of GFBGraph-0.2.GFBGraph.Node

    createdTime: string
    /**
     * The node ID. All nodes have one of this.
     */
    id: string
    /**
     * The node link. An URL to the node on Facebook.
     */
    link: string
    updatedTime: string

    // Own fields of GFBGraph-0.2.GFBGraph.Node

    parent: GObject.Object

    // Owm methods of GFBGraph-0.2.GFBGraph.Node

    /**
     * Appends `connect_node` to `node`. `connect_node` must implement the #GFBGraphConnectable interface
     * and be connectable to `node` GType.
     * @param connectNode A #GFBGraphNode.
     * @param authorizer A #GFBGraphAuthorizer.
     */
    appendConnection(connectNode: Node, authorizer: Authorizer): boolean
    /**
     * Retrieve the nodes of type `node_type` connected to the `node` object. The `node_type` object must
     * implement the #GFBGraphConnectionable interface and be connectable to `node` type object.
     * See gfbgraph_node_get_connection_nodes_async() for the asynchronous version of this call.
     * @param nodeType a #GFBGraphNode type #GType that determines the kind of nodes to retrieve.
     * @param authorizer a #GFBGraphAuthorizer.
     */
    getConnectionNodes(nodeType: GObject.GType, authorizer: Authorizer): Node[]
    /**
     * Asynchronously retrieve the list of nodes of type `node_type` connected to the `node` object. See
     * gfbgraph_node_get_connection_nodes() for the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can then call gfbgraph_node_get_connection_nodes_finish()
     * to get the list of connected nodes.
     * @param nodeType a #GFBGraphNode type #GType that must implement the #GFBGraphConnectionable interface.
     * @param authorizer a #GFBGraphAuthorizer.
     * @param cancellable An optional #GCancellable object, or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is completed.
     */
    getConnectionNodesAsync(nodeType: GObject.GType, authorizer: Authorizer, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous operation started with
     * gfbgraph_node_get_connection_nodes_async().
     * @param result A #GAsyncResult.
     */
    getConnectionNodesAsyncFinish(result: Gio.AsyncResult): Node[]
    /**
     * Gets a node created time.
     */
    getCreatedTime(): string
    /**
     * Gets the Facebook Graph unique node ID.
     */
    getId(): string
    getLink(): string
    /**
     * Gets a node updated time.
     */
    getUpdatedTime(): string
    /**
     * Sets the ID for a node. Just useful when a new node is created
     * and the Graph API returns the ID of the new created node.
     * @param id a const pointer to a #gchar.
     */
    setId(id: string): void

    // Class property signals of GFBGraph-0.2.GFBGraph.Node

    connect(sigName: "notify::created-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::created-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::created-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::link", callback: (...args: any[]) => void): number
    on(sigName: "notify::link", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::link", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::link", ...args: any[]): void
    connect(sigName: "notify::updated-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::updated-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::updated-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::updated-time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Node extends GObject.Object {

    // Own properties of GFBGraph-0.2.GFBGraph.Node

    static name: string
    static $gtype: GObject.GType<Node>

    // Constructors of GFBGraph-0.2.GFBGraph.Node

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
     * @param nodeType a #GFBGraphNode type #GType.
     */
    static newFromId(authorizer: Authorizer, id: string, nodeType: GObject.GType): Node
    _init(config?: Node_ConstructProps): void
    static errorQuark(): GLib.Quark
}

interface Photo_ConstructProps extends Connectable_ConstructProps, Json.Serializable_ConstructProps, Node_ConstructProps {

    // Own constructor properties of GFBGraph-0.2.GFBGraph.Photo

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

    // Own properties of GFBGraph-0.2.GFBGraph.Photo

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

    // Own fields of GFBGraph-0.2.GFBGraph.Photo

    parent: Node

    // Owm methods of GFBGraph-0.2.GFBGraph.Photo

    /**
     * Download the default sized photo pointed by `photo,` with a maximum width or height of 720px.
     * The photo always is a JPEG.
     * @param authorizer a #GFBGraphAuthorizer.
     */
    downloadDefaultSize(authorizer: Authorizer): Gio.InputStream
    getDefaultHeight(): number
    getDefaultSourceUri(): string
    getDefaultWidth(): number
    getImageHires(): PhotoImage
    getImageNearHeight(height: number): PhotoImage
    getImageNearWidth(width: number): PhotoImage
    getImages(): PhotoImage[]
    getName(): string

    // Conflicting methods

    getProperty(...args: any[]): any
    setProperty(...args: any[]): any
    vfuncGetProperty(...args: any[]): any
    vfuncSetProperty(...args: any[]): any

    // Class property signals of GFBGraph-0.2.GFBGraph.Photo

    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::images", callback: (...args: any[]) => void): number
    on(sigName: "notify::images", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::images", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::images", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::images", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::created-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::created-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::created-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::link", callback: (...args: any[]) => void): number
    on(sigName: "notify::link", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::link", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::link", ...args: any[]): void
    connect(sigName: "notify::updated-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::updated-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::updated-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::updated-time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Photo extends Node {

    // Own properties of GFBGraph-0.2.GFBGraph.Photo

    static name: string
    static $gtype: GObject.GType<Photo>

    // Constructors of GFBGraph-0.2.GFBGraph.Photo

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
    static newFromId(authorizer: Authorizer, id: string): Photo

    // Overloads of newFromId

    /**
     * Retrieve a node object as a #GFBgraphNode of #node_type type, with the given `id` from the Facebook Graph.
     * @constructor 
     * @param authorizer a #GFBGraphAuthorizer.
     * @param id a const #gchar with the node ID.
     * @param nodeType a #GFBGraphNode type #GType.
     */
    static newFromId(authorizer: Authorizer, id: string, nodeType: GObject.GType): Node
    _init(config?: Photo_ConstructProps): void
}

interface SimpleAuthorizer_ConstructProps extends Authorizer_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of GFBGraph-0.2.GFBGraph.SimpleAuthorizer

    accessToken?: string | null
}

interface SimpleAuthorizer extends Authorizer {

    // Own properties of GFBGraph-0.2.GFBGraph.SimpleAuthorizer

    accessToken: string

    // Own fields of GFBGraph-0.2.GFBGraph.SimpleAuthorizer

    parent: GObject.Object

    // Class property signals of GFBGraph-0.2.GFBGraph.SimpleAuthorizer

    connect(sigName: "notify::access-token", callback: (...args: any[]) => void): number
    on(sigName: "notify::access-token", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::access-token", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::access-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::access-token", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SimpleAuthorizer extends GObject.Object {

    // Own properties of GFBGraph-0.2.GFBGraph.SimpleAuthorizer

    static name: string
    static $gtype: GObject.GType<SimpleAuthorizer>

    // Constructors of GFBGraph-0.2.GFBGraph.SimpleAuthorizer

    constructor(config?: SimpleAuthorizer_ConstructProps) 
    /**
     * Creates a new #GFBGraphAuthorizer to use with the GFBGraph library using the `access_token` as access token.
     * It's only a test authorizer, don't use in final code.
     * @constructor 
     * @param accessToken a const `gchar`.
     */
    constructor(accessToken: string) 
    /**
     * Creates a new #GFBGraphAuthorizer to use with the GFBGraph library using the `access_token` as access token.
     * It's only a test authorizer, don't use in final code.
     * @constructor 
     * @param accessToken a const `gchar`.
     */
    static new(accessToken: string): SimpleAuthorizer
    _init(config?: SimpleAuthorizer_ConstructProps): void
}

interface User_ConstructProps extends Node_ConstructProps {

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

interface User {

    // Own properties of GFBGraph-0.2.GFBGraph.User

    /**
     * The email of the user if available
     */
    email: string
    /**
     * The full name of the user
     */
    name: string

    // Own fields of GFBGraph-0.2.GFBGraph.User

    parent: Node

    // Owm methods of GFBGraph-0.2.GFBGraph.User

    /**
     * Retrieve the albums nodes owned by the `user`. This functions call the function ID/albums.
     * @param authorizer a #GFBGraphAuthorizer.
     */
    getAlbums(authorizer: Authorizer): Album[]
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
    getAlbumsAsync(authorizer: Authorizer, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous operation started with
     * gfbgraph_user_get_albums_async().
     * @param result A #GAsyncResult.
     */
    getAlbumsAsyncFinish(result: Gio.AsyncResult): Album[]
    /**
     * Get the user email. To retrieve this propertie, you need 'email' extended
     * permission.
     */
    getEmail(): string
    /**
     * Get the user full name.
     */
    getName(): string

    // Class property signals of GFBGraph-0.2.GFBGraph.User

    connect(sigName: "notify::email", callback: (...args: any[]) => void): number
    on(sigName: "notify::email", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::email", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::email", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::created-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::created-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::created-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::created-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::link", callback: (...args: any[]) => void): number
    on(sigName: "notify::link", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::link", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::link", ...args: any[]): void
    connect(sigName: "notify::updated-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::updated-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::updated-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::updated-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::updated-time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class User extends Node {

    // Own properties of GFBGraph-0.2.GFBGraph.User

    static name: string
    static $gtype: GObject.GType<User>

    // Constructors of GFBGraph-0.2.GFBGraph.User

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
    static newFromId(authorizer: Authorizer, id: string): User

    // Overloads of newFromId

    /**
     * Retrieve a node object as a #GFBgraphNode of #node_type type, with the given `id` from the Facebook Graph.
     * @constructor 
     * @param authorizer a #GFBGraphAuthorizer.
     * @param id a const #gchar with the node ID.
     * @param nodeType a #GFBGraphNode type #GType.
     */
    static newFromId(authorizer: Authorizer, id: string, nodeType: GObject.GType): Node
    _init(config?: User_ConstructProps): void
    /**
     * Retrieve the current user logged using the https://graph.facebook.com/me Graph API function.
     * See gfbgraph_user_get_my_async() for the asynchronous version of this call.
     * @param authorizer a #GFBGraphAuthorizer.
     */
    static getMe(authorizer: Authorizer): User
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
    static getMeAsync(authorizer: Authorizer, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous operation started with
     * gfbgraph_user_get_me_async().
     * @param authorizer a #GFBGraphAuthorizer.
     * @param result A #GAsyncResult.
     */
    static getMeAsyncFinish(authorizer: Authorizer, result: Gio.AsyncResult): User
}

interface AlbumClass {

    // Own fields of GFBGraph-0.2.GFBGraph.AlbumClass

    parentClass: NodeClass
}

abstract class AlbumClass {

    // Own properties of GFBGraph-0.2.GFBGraph.AlbumClass

    static name: string
}

interface AlbumPrivate {
}

class AlbumPrivate {

    // Own properties of GFBGraph-0.2.GFBGraph.AlbumPrivate

    static name: string
}

interface AuthorizerInterface {

    // Own fields of GFBGraph-0.2.GFBGraph.AuthorizerInterface

    /**
     * The parent interface.
     * @field 
     */
    parent: GObject.TypeInterface
    processCall: (iface: Authorizer, call: Rest.ProxyCall) => void
    processMessage: (iface: Authorizer, message: Soup.Message) => void
    refreshAuthorization: (iface: Authorizer, cancellable: Gio.Cancellable | null) => boolean
}

/**
 * Interface structure for #GFBGraphAuthorizer. All methos should be thread safe.
 * @record 
 */
abstract class AuthorizerInterface {

    // Own properties of GFBGraph-0.2.GFBGraph.AuthorizerInterface

    static name: string
}

interface ConnectableInterface {

    // Own fields of GFBGraph-0.2.GFBGraph.ConnectableInterface

    parent: GObject.TypeInterface
    connections: GLib.HashTable
    getConnectionPostParams: (self: Connectable, nodeType: GObject.GType) => GLib.HashTable
    parseConnectedData: (self: Connectable, payload: string) => Node[]
}

abstract class ConnectableInterface {

    // Own properties of GFBGraph-0.2.GFBGraph.ConnectableInterface

    static name: string
}

interface GoaAuthorizerClass {

    // Own fields of GFBGraph-0.2.GFBGraph.GoaAuthorizerClass

    parentClass: GObject.ObjectClass
}

abstract class GoaAuthorizerClass {

    // Own properties of GFBGraph-0.2.GFBGraph.GoaAuthorizerClass

    static name: string
}

interface GoaAuthorizerPrivate {
}

class GoaAuthorizerPrivate {

    // Own properties of GFBGraph-0.2.GFBGraph.GoaAuthorizerPrivate

    static name: string
}

interface NodeClass {

    // Own fields of GFBGraph-0.2.GFBGraph.NodeClass

    parentClass: GObject.ObjectClass
}

abstract class NodeClass {

    // Own properties of GFBGraph-0.2.GFBGraph.NodeClass

    static name: string
}

interface NodePrivate {
}

class NodePrivate {

    // Own properties of GFBGraph-0.2.GFBGraph.NodePrivate

    static name: string
}

interface PhotoClass {

    // Own fields of GFBGraph-0.2.GFBGraph.PhotoClass

    parentClass: NodeClass
}

abstract class PhotoClass {

    // Own properties of GFBGraph-0.2.GFBGraph.PhotoClass

    static name: string
}

interface PhotoImage {

    // Own fields of GFBGraph-0.2.GFBGraph.PhotoImage

    width: number
    height: number
    source: string
}

/**
 * An struct with the information of a image.
 * @record 
 */
class PhotoImage {

    // Own properties of GFBGraph-0.2.GFBGraph.PhotoImage

    static name: string
}

interface PhotoPrivate {
}

class PhotoPrivate {

    // Own properties of GFBGraph-0.2.GFBGraph.PhotoPrivate

    static name: string
}

interface SimpleAuthorizerClass {

    // Own fields of GFBGraph-0.2.GFBGraph.SimpleAuthorizerClass

    parentClass: GObject.ObjectClass
}

abstract class SimpleAuthorizerClass {

    // Own properties of GFBGraph-0.2.GFBGraph.SimpleAuthorizerClass

    static name: string
}

interface SimpleAuthorizerPrivate {
}

class SimpleAuthorizerPrivate {

    // Own properties of GFBGraph-0.2.GFBGraph.SimpleAuthorizerPrivate

    static name: string
}

interface UserClass {

    // Own fields of GFBGraph-0.2.GFBGraph.UserClass

    parentClass: NodeClass
}

abstract class UserClass {

    // Own properties of GFBGraph-0.2.GFBGraph.UserClass

    static name: string
}

interface UserPrivate {
}

class UserPrivate {

    // Own properties of GFBGraph-0.2.GFBGraph.UserPrivate

    static name: string
}

}
export default GFBGraph;