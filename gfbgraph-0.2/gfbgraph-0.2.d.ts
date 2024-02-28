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

export namespace GFBGraph {
    enum NodeError {
        CONNECTIONABLE,
        CONNECTABLE,
    }
    /**
     * Create a new #RestProxyCall pointing to the Facebook Graph API url (https://graph.facebook.com)
     * and processed by the authorizer to allow queries.
     * @param authorizer a #GFBGraphAuthorizer.
     * @returns a new #RestProxyCall or %NULL in case of error.
     */
    function new_rest_call(authorizer: Authorizer): Rest.ProxyCall;
    module Album {
        // Constructor properties interface
    }

    class Album extends Node {
        // Own properties of GFBGraph-0.2.Album

        /**
         * The number of photos in the album.
         */
        count: number;
        cover_photo: string;
        coverPhoto: string;
        /**
         * The album description given by the owner.
         */
        description: string;
        /**
         * The album name.
         */
        name: string;

        // Constructors of GFBGraph-0.2.Album

        static ['new'](): Album;

        static new_from_id(authorizer: Authorizer, id: string): Album;

        // Owm methods of GFBGraph-0.2.Album

        get_count(): number;
        get_cover_photo_id(): string;
        get_description(): string;
        get_name(): string;
        /**
         * Sets the description for the `album`.
         * @param description a const pointer to a #gchar.
         */
        set_description(description: string): void;
        /**
         * Sets the name for the `album`.
         * @param name a const pointer to a #gchar.
         */
        set_name(name: string): void;
    }

    module GoaAuthorizer {
        // Constructor properties interface
    }

    class GoaAuthorizer extends GObject.Object {}

    module Node {
        // Constructor properties interface
    }

    class Node extends GObject.Object {
        // Own properties of GFBGraph-0.2.Node

        created_time: string;
        createdTime: string;
        /**
         * The node ID. All nodes have one of this.
         */
        id: string;
        /**
         * The node link. An URL to the node on Facebook.
         */
        link: string;
        updated_time: string;
        updatedTime: string;

        // Constructors of GFBGraph-0.2.Node

        static ['new'](): Node;

        static new_from_id(authorizer: Authorizer, id: string, node_type: GObject.GType): Node;

        // Owm methods of GFBGraph-0.2.Node

        static error_quark(): GLib.Quark;

        // Owm methods of GFBGraph-0.2.Node

        /**
         * Appends `connect_node` to `node`. `connect_node` must implement the #GFBGraphConnectable interface
         * and be connectable to `node` GType.
         * @param connect_node A #GFBGraphNode.
         * @param authorizer A #GFBGraphAuthorizer.
         * @returns TRUE on sucess, FALSE if an error ocurred.
         */
        append_connection(connect_node: Node, authorizer: Authorizer): boolean;
        /**
         * Retrieve the nodes of type `node_type` connected to the `node` object. The `node_type` object must
         * implement the #GFBGraphConnectionable interface and be connectable to `node` type object.
         * See gfbgraph_node_get_connection_nodes_async() for the asynchronous version of this call.
         * @param node_type a #GFBGraphNode type #GType that determines the kind of nodes to retrieve.
         * @param authorizer a #GFBGraphAuthorizer.
         * @returns a newly-allocated #GList of type @node_type objects with the found nodes.
         */
        get_connection_nodes(node_type: GObject.GType, authorizer: Authorizer): Node[];
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
        get_connection_nodes_async(
            node_type: GObject.GType,
            authorizer: Authorizer,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous operation started with
         * gfbgraph_node_get_connection_nodes_async().
         * @param result A #GAsyncResult.
         * @returns a newly-allocated #GList of type #node_type objects with the found nodes.
         */
        get_connection_nodes_async_finish(result: Gio.AsyncResult): Node[];
        /**
         * Gets a node created time.
         * @returns an ISO 8601 encoded date when the node was initially published.
         */
        get_created_time(): string;
        /**
         * Gets the Facebook Graph unique node ID.
         * @returns the node ID.
         */
        get_id(): string;
        get_link(): string;
        /**
         * Gets a node updated time.
         * @returns an ISO 8601 encoded date when the node was updated.
         */
        get_updated_time(): string;
        /**
         * Sets the ID for a node. Just useful when a new node is created
         * and the Graph API returns the ID of the new created node.
         * @param id a const pointer to a #gchar.
         */
        set_id(id: string): void;
    }

    module Photo {
        // Constructor properties interface
    }

    class Photo extends Node {
        // Own properties of GFBGraph-0.2.Photo

        /**
         * The default photo height, up to 720px.
         */
        height: number;
        /**
         * A list with the available representations of the photo, in differents sizes
         */
        images: any;
        /**
         * The name of the photo given by his owner.
         */
        name: string;
        /**
         * An URI for the photo, with a maximum width or height of 720px.
         */
        source: string;
        /**
         * The default photo width, up to 720px.
         */
        width: number;

        // Constructors of GFBGraph-0.2.Photo

        static ['new'](): Photo;

        static new_from_id(authorizer: Authorizer, id: string): Photo;

        // Owm methods of GFBGraph-0.2.Photo

        /**
         * Download the default sized photo pointed by `photo,` with a maximum width or height of 720px.
         * The photo always is a JPEG.
         * @param authorizer a #GFBGraphAuthorizer.
         * @returns a #GInputStream with the photo content or %NULL in case of error.
         */
        download_default_size(authorizer: Authorizer): Gio.InputStream;
        get_default_height(): number;
        get_default_source_uri(): string;
        get_default_width(): number;
        get_image_hires(): PhotoImage;
        get_image_near_height(height: number): PhotoImage;
        get_image_near_width(width: number): PhotoImage;
        get_images(): PhotoImage[];
        get_name(): string;
    }

    module SimpleAuthorizer {
        // Constructor properties interface
    }

    class SimpleAuthorizer extends GObject.Object {
        // Own properties of GFBGraph-0.2.SimpleAuthorizer

        access_token: string;
        accessToken: string;

        // Constructors of GFBGraph-0.2.SimpleAuthorizer

        static ['new'](access_token: string): SimpleAuthorizer;
    }

    module User {
        // Constructor properties interface
    }

    class User extends Node {
        // Own properties of GFBGraph-0.2.User

        /**
         * The email of the user if available
         */
        email: string;
        /**
         * The full name of the user
         */
        name: string;

        // Constructors of GFBGraph-0.2.User

        static ['new'](): User;

        static new_from_id(authorizer: Authorizer, id: string): User;

        // Owm methods of GFBGraph-0.2.User

        /**
         * Retrieve the current user logged using the https://graph.facebook.com/me Graph API function.
         * See gfbgraph_user_get_my_async() for the asynchronous version of this call.
         * @param authorizer a #GFBGraphAuthorizer.
         */
        static get_me(authorizer: Authorizer): User;
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
        static get_me_async(
            authorizer: Authorizer,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<User> | null,
        ): void;
        /**
         * Finishes an asynchronous operation started with
         * gfbgraph_user_get_me_async().
         * @param authorizer a #GFBGraphAuthorizer.
         * @param result A #GAsyncResult.
         */
        static get_me_async_finish(authorizer: Authorizer, result: Gio.AsyncResult): User;

        // Owm methods of GFBGraph-0.2.User

        /**
         * Retrieve the albums nodes owned by the `user`. This functions call the function ID/albums.
         * @param authorizer a #GFBGraphAuthorizer.
         * @returns a newly-allocated #GList with the albums nodes owned by the given user.
         */
        get_albums(authorizer: Authorizer): Album[];
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
        get_albums_async(
            authorizer: Authorizer,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous operation started with
         * gfbgraph_user_get_albums_async().
         * @param result A #GAsyncResult.
         * @returns a newly-allocated #GList of albums owned by the @user.
         */
        get_albums_async_finish(result: Gio.AsyncResult): Album[];
        /**
         * Get the user email. To retrieve this propertie, you need 'email' extended
         * permission.
         * @returns a const #gchar with the user email, or %NULL.
         */
        get_email(): string;
        /**
         * Get the user full name.
         * @returns a const #gchar with the user full name, or %NULL.
         */
        get_name(): string;
    }

    class AlbumClass {}

    class AlbumPrivate {}

    /**
     * Interface structure for #GFBGraphAuthorizer. All methos should be thread safe.
     */
    class AuthorizerInterface {}

    class ConnectableInterface {}

    class GoaAuthorizerClass {}

    class GoaAuthorizerPrivate {}

    class NodeClass {}

    class NodePrivate {}

    class PhotoClass {}

    /**
     * An struct with the information of a image.
     */
    class PhotoImage {
        // Own fields of GFBGraph-0.2.PhotoImage

        width: number;
        height: number;
        source: string;

        // Constructors of GFBGraph-0.2.PhotoImage

        constructor(
            properties?: Partial<{
                width: number;
                height: number;
                source: string;
            }>,
        );
    }

    class PhotoPrivate {}

    class SimpleAuthorizerClass {}

    class SimpleAuthorizerPrivate {}

    class UserClass {}

    class UserPrivate {}

    interface Authorizer {
        // Owm methods of GFBGraph-0.2.Authorizer

        /**
         * Adds the necessary authorization to `call`.
         *
         * This method modifies `call` in place and is thread safe.
         * @param call A #RestProxyCall.
         */
        process_call(call: Rest.ProxyCall): void;
        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param message A #SoupMessage.
         */
        process_message(message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or %NULL.
         * @returns %TRUE if the authorizer now has a valid token.
         */
        refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;

        // Own virtual methods of GFBGraph-0.2.Authorizer

        /**
         * Adds the necessary authorization to `call`.
         *
         * This method modifies `call` in place and is thread safe.
         * @param call A #RestProxyCall.
         */
        vfunc_process_call(call: Rest.ProxyCall): void;
        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param message A #SoupMessage.
         */
        vfunc_process_message(message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or %NULL.
         */
        vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
    }

    interface Connectable {
        // Owm methods of GFBGraph-0.2.Connectable

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
        default_parse_connected_data(payload: string): Node[];
        /**
         * Get the Facebook Graph API function path to retrieve the nodes connected with `node_type`
         * managed by the #GFBGraphConnectable object.
         * @param node_type a #GType, required a #GFBGRAPH_TYPE_NODE or children.
         * @returns a const #gchar with the function path or %NULL.
         */
        get_connection_path(node_type: GObject.GType): string;
        /**
         * Get the params to be inserted in a request to the Facebook Graph API
         * in order to append the node `self` to a node of type `node_type`.
         * @param node_type a #GType, required a #GFBGRAPH_TYPE_NODE or children.
         * @returns A string based #GHashTable with the params and his values or %NULL.
         */
        get_connection_post_params(node_type: GObject.GType): GLib.HashTable<any, any>;
        /**
         * Check if `self` object, normally a #GFBGraphNode implementing the #GFBGraphConnectable interface,
         * has the possibility to be connected to another node of type `node_type`.
         * @param node_type a #GType, required a #GFBGRAPH_TYPE_NODE or children.
         * @returns %TRUE in case that the @self object can be connected to a node of type @node_type, %FALSE otherwise.
         */
        is_connectable_to(node_type: GObject.GType): boolean;
        /**
         * Parse the response contained in `payload` when a gfbgraph_node_get_connection_nodes() was
         * executed.
         * @param payload a const #gchar with the response string from the Facebook Graph API.
         * @returns a newly-allocated #GList of #GFBGraphNode created from the @payload or %NULL.
         */
        parse_connected_data(payload: string): Node[];

        // Own virtual methods of GFBGraph-0.2.Connectable

        /**
         * Get the params to be inserted in a request to the Facebook Graph API
         * in order to append the node `self` to a node of type `node_type`.
         * @param node_type a #GType, required a #GFBGRAPH_TYPE_NODE or children.
         */
        vfunc_get_connection_post_params(node_type: GObject.GType): GLib.HashTable<any, any>;
        /**
         * Parse the response contained in `payload` when a gfbgraph_node_get_connection_nodes() was
         * executed.
         * @param payload a const #gchar with the response string from the Facebook Graph API.
         */
        vfunc_parse_connected_data(payload: string): Node[];
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

export default GFBGraph;
// END
