
/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Rest from '@girs/rest-0.7';
import type Json from '@girs/json-1.0';

export namespace GFBGraph {

    /**
     * GFBGraph-0.3
     */


    /**
     * @gir-type Enum
     */
    enum NodeError {
        CONNECTIONABLE,
        CONNECTABLE,
    }


    /**
     * Create a new {@link Rest.ProxyCall} pointing to the Facebook Graph API url (https://graph.facebook.com)
     * and processed by the authorizer to allow queries.
     * @param authorizer a {@link GFBGraph.Authorizer}.
     * @returns a new {@link Rest.ProxyCall} or `null` in case of error.
     */
    function new_rest_call(authorizer: Authorizer): Rest.ProxyCall;

    namespace Album {
        // Signal signatures
        interface SignalSignatures extends Node.SignalSignatures {
            "notify::count": (pspec: GObject.ParamSpec) => void;
            "notify::cover-photo": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::created-time": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::link": (pspec: GObject.ParamSpec) => void;
            "notify::updated-time": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Node.ConstructorProps, Connectable.ConstructorProps {
            count: number;
            cover_photo: string;
            coverPhoto: string;
            description: string;
            name: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Album extends Node implements Connectable {
        static $gtype: GObject.GType<Album>;

        // Properties
        /**
         * The number of photos in the album.
         * @default 0
         */
        get count(): number;
        set count(val: number);

        get cover_photo(): string;
        set cover_photo(val: string);

        get coverPhoto(): string;
        set coverPhoto(val: string);

        /**
         * The album description given by the owner.
         */
        get description(): string;
        set description(val: string);

        /**
         * The album name.
         */
        get name(): string;
        set name(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Album.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Album.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Album;

        static new_from_id(authorizer: Authorizer, id: string): Album;

        // Signals
        /** @signal */
        connect<K extends keyof Album.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Album.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Album.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Album.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Album.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Album.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the number of photos into the `album` or -1 in case of error.
         */
        get_count(): number;

        get_cover_photo_id(): string;

        /**
         * @returns the `album` description, or `null`.
         */
        get_description(): string;

        /**
         * @returns the `album` name, or `null`.
         */
        get_name(): string;

        /**
         * Sets the description for the `album`.
         * @param description a const pointer to a `gchar`.
         */
        set_description(description: string): void;

        /**
         * Sets the name for the `album`.
         * @param name a const pointer to a `gchar`.
         */
        set_name(name: string): void;

        /**
         * In most cases, {@link GFBGraph.Connectable} implementers can use this function in order to parse
         * the response when a `gfbgraph_node_get_connection_nodes()` is executed and the
         * `gfbgraph_connectable_parse_connected_data()` was called.
         * 
         * Normally, Facebook Graph API returns the connections in the same way, using JSON objects,
         * with a root object called "data".
         * @param payload a const `gchar` with the response string from the Facebook Graph API.
         * @returns a newly-allocated {@link GLib.List} of {@link GFBGraph.Node} with the same {@link GObject.GType} as `self`.
         */
        default_parse_connected_data(payload: string): Node[];

        /**
         * Get the Facebook Graph API function path to retrieve the nodes connected with `node_type`
         * managed by the {@link GFBGraph.Connectable} object.
         * @param node_type a {@link GObject.GType}, required a #GFBGRAPH_TYPE_NODE or children.
         * @returns a const `gchar` with the function path or `null`.
         */
        get_connection_path(node_type: GObject.GType): string;

        /**
         * Get the params to be inserted in a request to the Facebook Graph API
         * in order to append the node `self` to a node of type `node_type`.
         * @param node_type a {@link GObject.GType}, required a #GFBGRAPH_TYPE_NODE or children.
         * @returns A string based {@link GLib.HashTable} with the params and his values or `null`.
         */
        get_connection_post_params(node_type: GObject.GType): GLib.HashTable<any, any>;

        /**
         * Check if `self` object, normally a {@link GFBGraph.Node} implementing the {@link GFBGraph.Connectable} interface,
         * has the possibility to be connected to another node of type `node_type`.
         * @param node_type a {@link GObject.GType}, required a #GFBGRAPH_TYPE_NODE or children.
         * @returns `true` in case that the `self` object can be connected to a node of type `node_type`, `false` otherwise.
         */
        is_connectable_to(node_type: GObject.GType): boolean;

        /**
         * Parse the response contained in `payload` when a `gfbgraph_node_get_connection_nodes()` was
         * executed.
         * @param payload a const `gchar` with the response string from the Facebook Graph API.
         * @returns a newly-allocated {@link GLib.List} of {@link GFBGraph.Node} created from the `payload` or `null`.
         */
        parse_connected_data(payload: string): Node[];

        /**
         * Get the params to be inserted in a request to the Facebook Graph API
         * in order to append the node `self` to a node of type `node_type`.
         * @param node_type a {@link GObject.GType}, required a #GFBGRAPH_TYPE_NODE or children.
         * @virtual
         */
        vfunc_get_connection_post_params(node_type: GObject.GType): ({ [key: string]: any } | GLib.HashTable<any, any>);

        /**
         * Parse the response contained in `payload` when a `gfbgraph_node_get_connection_nodes()` was
         * executed.
         * @param payload a const `gchar` with the response string from the Facebook Graph API.
         * @virtual
         */
        vfunc_parse_connected_data(payload: string): Node[];
    }


    namespace GoaAuthorizer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Authorizer.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class GoaAuthorizer extends GObject.Object implements Authorizer {
        static $gtype: GObject.GType<GoaAuthorizer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GoaAuthorizer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GoaAuthorizer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof GoaAuthorizer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GoaAuthorizer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GoaAuthorizer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GoaAuthorizer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GoaAuthorizer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GoaAuthorizer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Adds the necessary authorization to `call`.
         * 
         * This method modifies `call` in place and is thread safe.
         * @param call A {@link Rest.ProxyCall}.
         */
        process_call(call: Rest.ProxyCall): void;

        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         * 
         * This method modifies `message` in place and is thread safe.
         * @param message A {@link Soup.Message}.
         */
        process_message(message: Soup.Message): void;

        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it.
         * 
         * This method is thread safe.
         * @param cancellable An optional {@link Gio.Cancellable} object, or `null`.
         * @returns `true` if the authorizer now has a valid token.
         */
        refresh_authorization(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Adds the necessary authorization to `call`.
         * 
         * This method modifies `call` in place and is thread safe.
         * @param call A {@link Rest.ProxyCall}.
         * @virtual
         */
        vfunc_process_call(call: Rest.ProxyCall): void;

        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         * 
         * This method modifies `message` in place and is thread safe.
         * @param message A {@link Soup.Message}.
         * @virtual
         */
        vfunc_process_message(message: Soup.Message): void;

        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it.
         * 
         * This method is thread safe.
         * @param cancellable An optional {@link Gio.Cancellable} object, or `null`.
         * @virtual
         */
        vfunc_refresh_authorization(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace Node {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::created-time": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::link": (pspec: GObject.ParamSpec) => void;
            "notify::updated-time": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            created_time: string;
            createdTime: string;
            id: string;
            link: string;
            updated_time: string;
            updatedTime: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Node extends GObject.Object {
        static $gtype: GObject.GType<Node>;

        // Properties
        get created_time(): string;
        set created_time(val: string);

        get createdTime(): string;
        set createdTime(val: string);

        /**
         * The node ID. All nodes have one of this.
         */
        get id(): string;
        set id(val: string);

        /**
         * The node link. An URL to the node on Facebook.
         */
        get link(): string;
        set link(val: string);

        get updated_time(): string;
        set updated_time(val: string);

        get updatedTime(): string;
        set updatedTime(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Node.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Node.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Node;

        static new_from_id(authorizer: Authorizer, id: string, node_type: GObject.GType): Node;

        // Signals
        /** @signal */
        connect<K extends keyof Node.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Node.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Node.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Node.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Node.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Node.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        static error_quark(): GLib.Quark;

        // Methods
        /**
         * Appends `connect_node` to `node`. `connect_node` must implement the {@link GFBGraph.Connectable} interface
         * and be connectable to `node` GType.
         * @param connect_node A {@link GFBGraph.Node}.
         * @param authorizer A {@link GFBGraph.Authorizer}.
         * @returns TRUE on sucess, FALSE if an error ocurred.
         */
        append_connection(connect_node: Node, authorizer: Authorizer): boolean;

        /**
         * Retrieve the nodes of type `node_type` connected to the `node` object. The `node_type` object must
         * implement the `GFBGraphConnectionable` interface and be connectable to `node` type object.
         * See `gfbgraph_node_get_connection_nodes_async()` for the asynchronous version of this call.
         * @param node_type a {@link GFBGraph.Node} type {@link GObject.GType} that determines the kind of nodes to retrieve.
         * @param authorizer a {@link GFBGraph.Authorizer}.
         * @returns a newly-allocated {@link GLib.List} of type `node_type` objects with the found nodes.
         */
        get_connection_nodes(node_type: GObject.GType, authorizer: Authorizer): Node[];

        /**
         * Asynchronously retrieve the list of nodes of type `node_type` connected to the `node` object. See
         * `gfbgraph_node_get_connection_nodes()` for the synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can then call `gfbgraph_node_get_connection_nodes_finish()`
         * to get the list of connected nodes.
         * @param node_type a {@link GFBGraph.Node} type {@link GObject.GType} that must implement the `GFBGraphConnectionable` interface.
         * @param authorizer a {@link GFBGraph.Authorizer}.
         * @param cancellable An optional {@link Gio.Cancellable} object, or `null`.
         */
        get_connection_nodes_async(node_type: GObject.GType, authorizer: Authorizer, cancellable: (Gio.Cancellable | null)): globalThis.Promise<Node[]>;

        /**
         * Asynchronously retrieve the list of nodes of type `node_type` connected to the `node` object. See
         * `gfbgraph_node_get_connection_nodes()` for the synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can then call `gfbgraph_node_get_connection_nodes_finish()`
         * to get the list of connected nodes.
         * @param node_type a {@link GFBGraph.Node} type {@link GObject.GType} that must implement the `GFBGraphConnectionable` interface.
         * @param authorizer a {@link GFBGraph.Authorizer}.
         * @param cancellable An optional {@link Gio.Cancellable} object, or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is completed.
         */
        get_connection_nodes_async(node_type: GObject.GType, authorizer: Authorizer, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously retrieve the list of nodes of type `node_type` connected to the `node` object. See
         * `gfbgraph_node_get_connection_nodes()` for the synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can then call `gfbgraph_node_get_connection_nodes_finish()`
         * to get the list of connected nodes.
         * @param node_type a {@link GFBGraph.Node} type {@link GObject.GType} that must implement the `GFBGraphConnectionable` interface.
         * @param authorizer a {@link GFBGraph.Authorizer}.
         * @param cancellable An optional {@link Gio.Cancellable} object, or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is completed.
         */
        get_connection_nodes_async(node_type: GObject.GType, authorizer: Authorizer, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<Node[]> | void);

        /**
         * Finishes an asynchronous operation started with
         * `gfbgraph_node_get_connection_nodes_async()`.
         * @param result A {@link Gio.AsyncResult}.
         * @returns a newly-allocated {@link GLib.List} of type `node_type` objects with the found nodes.
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
         * @param id a const pointer to a `gchar`.
         */
        set_id(id: string): void;
    }


    namespace Photo {
        // Signal signatures
        interface SignalSignatures extends Node.SignalSignatures {
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::images": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::source": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::created-time": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::link": (pspec: GObject.ParamSpec) => void;
            "notify::updated-time": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Node.ConstructorProps, Connectable.ConstructorProps, Json.Serializable.ConstructorProps {
            height: number;
            images: any;
            name: string;
            source: string;
            width: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Photo extends Node implements Connectable, Json.Serializable {
        static $gtype: GObject.GType<Photo>;

        // Properties
        /**
         * The default photo height, up to 720px.
         * @default 0
         */
        get height(): number;
        set height(val: number);

        /**
         * A list with the available representations of the photo, in differents sizes
         */
        get images(): any;
        set images(val: any);

        /**
         * The name of the photo given by his owner.
         */
        get name(): string;
        set name(val: string);

        /**
         * An URI for the photo, with a maximum width or height of 720px.
         */
        get source(): string;
        set source(val: string);

        /**
         * The default photo width, up to 720px.
         * @default 0
         */
        get width(): number;
        set width(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Photo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Photo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Photo;

        static new_from_id(authorizer: Authorizer, id: string): Photo;

        // Signals
        /** @signal */
        connect<K extends keyof Photo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Photo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Photo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Photo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Photo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Photo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Download the default sized photo pointed by `photo`, with a maximum width or height of 720px.
         * The photo always is a JPEG.
         * @param authorizer a {@link GFBGraph.Authorizer}.
         * @returns a {@link Gio.InputStream} with the photo content or `null` in case of error.
         */
        download_default_size(authorizer: Authorizer): Gio.InputStream;

        get_default_height(): number;

        get_default_source_uri(): string;

        get_default_width(): number;

        /**
         * @returns a {@link GFBGraph.PhotoImage} with the higher resolution available of the photo
         */
        get_image_hires(): PhotoImage;

        /**
         * @param height 
         */
        get_image_near_height(height: number): PhotoImage;

        /**
         * @param width 
         */
        get_image_near_width(width: number): PhotoImage;

        /**
         * @returns a {@link GLib.List} of {@link GFBGraph.PhotoImage} with the available photo sizes
         */
        get_images(): PhotoImage[];

        /**
         * @returns the `photo` name, which is the comment given by the user so it would by larger, or `null`.
         */
        get_name(): string;

        /**
         * In most cases, {@link GFBGraph.Connectable} implementers can use this function in order to parse
         * the response when a `gfbgraph_node_get_connection_nodes()` is executed and the
         * `gfbgraph_connectable_parse_connected_data()` was called.
         * 
         * Normally, Facebook Graph API returns the connections in the same way, using JSON objects,
         * with a root object called "data".
         * @param payload a const `gchar` with the response string from the Facebook Graph API.
         * @returns a newly-allocated {@link GLib.List} of {@link GFBGraph.Node} with the same {@link GObject.GType} as `self`.
         */
        default_parse_connected_data(payload: string): Node[];

        /**
         * Get the Facebook Graph API function path to retrieve the nodes connected with `node_type`
         * managed by the {@link GFBGraph.Connectable} object.
         * @param node_type a {@link GObject.GType}, required a #GFBGRAPH_TYPE_NODE or children.
         * @returns a const `gchar` with the function path or `null`.
         */
        get_connection_path(node_type: GObject.GType): string;

        /**
         * Get the params to be inserted in a request to the Facebook Graph API
         * in order to append the node `self` to a node of type `node_type`.
         * @param node_type a {@link GObject.GType}, required a #GFBGRAPH_TYPE_NODE or children.
         * @returns A string based {@link GLib.HashTable} with the params and his values or `null`.
         */
        get_connection_post_params(node_type: GObject.GType): GLib.HashTable<any, any>;

        /**
         * Check if `self` object, normally a {@link GFBGraph.Node} implementing the {@link GFBGraph.Connectable} interface,
         * has the possibility to be connected to another node of type `node_type`.
         * @param node_type a {@link GObject.GType}, required a #GFBGRAPH_TYPE_NODE or children.
         * @returns `true` in case that the `self` object can be connected to a node of type `node_type`, `false` otherwise.
         */
        is_connectable_to(node_type: GObject.GType): boolean;

        /**
         * Parse the response contained in `payload` when a `gfbgraph_node_get_connection_nodes()` was
         * executed.
         * @param payload a const `gchar` with the response string from the Facebook Graph API.
         * @returns a newly-allocated {@link GLib.List} of {@link GFBGraph.Node} created from the `payload` or `null`.
         */
        parse_connected_data(payload: string): Node[];

        /**
         * Get the params to be inserted in a request to the Facebook Graph API
         * in order to append the node `self` to a node of type `node_type`.
         * @param node_type a {@link GObject.GType}, required a #GFBGRAPH_TYPE_NODE or children.
         * @virtual
         */
        vfunc_get_connection_post_params(node_type: GObject.GType): ({ [key: string]: any } | GLib.HashTable<any, any>);

        /**
         * Parse the response contained in `payload` when a `gfbgraph_node_get_connection_nodes()` was
         * executed.
         * @param payload a const `gchar` with the response string from the Facebook Graph API.
         * @virtual
         */
        vfunc_parse_connected_data(payload: string): Node[];

        /**
         * Calls the default implementation of the {@link Json.Serializable.deserialize_property}
         * virtual function.
         * 
         * This function can be used inside a custom implementation of the
         * `deserialize_property()` virtual function in lieu of calling the
         * default implementation through `g_type_default_interface_peek()`:
         * 
         * ```c
         * JsonSerializable *iface;
         * gboolean res;
         * 
         * iface = g_type_default_interface_peek (JSON_TYPE_SERIALIZABLE);
         * res = iface->deserialize_property (serializable, property_name,
         *                                    value,
         *                                    pspec,
         *                                    property_node);
         * ```
         * @param property_name the name of the property to deserialize
         * @param value a pointer to an uninitialized value
         * @param pspec a property description
         * @param property_node the JSON node containing the serialized property
         * @returns `TRUE` if the property was successfully deserialized
         */
        default_deserialize_property(property_name: string, value: (GObject.Value | any), pspec: GObject.ParamSpec, property_node: Json.Node): boolean;

        /**
         * Calls the default implementation of the {@link Json.Serializable.serialize_property}
         * virtual function.
         * 
         * This function can be used inside a custom implementation of the
         * `serialize_property()` virtual function in lieu of calling the
         * default implementation through `g_type_default_interface_peek()`:
         * 
         * ```c
         * JsonSerializable *iface;
         * JsonNode *node;
         * 
         * iface = g_type_default_interface_peek (JSON_TYPE_SERIALIZABLE);
         * node = iface->serialize_property (serializable, property_name,
         *                                   value,
         *                                   pspec);
         * ```
         * 
         * This function will return `NULL` if the property could not be
         * serialized.
         * @param property_name the name of the property to serialize
         * @param value the value of the property to serialize
         * @param pspec a property description
         * @returns a node containing the   serialized property
         */
        default_serialize_property(property_name: string, value: (GObject.Value | any), pspec: GObject.ParamSpec): (Json.Node | null);

        /**
         * Asks a {@link Json.Serializable} implementation to deserialize the
         * property contained inside `property_node` and place its value
         * into `value`.
         * 
         * The `value` can be:
         * 
         * - an empty {@link GObject.Value} initialized by `G_VALUE_INIT`, which will be automatically
         *   initialized with the expected type of the property by using the given
         *   property description (since JSON-GLib 1.6)
         * - a {@link GObject.Value} initialized with the expected type of the property
         * 
         * This function will not be called for properties that are marked as
         * as `G_PARAM_CONSTRUCT_ONLY`.
         * @param property_name the name of the property to serialize
         * @param pspec a property description
         * @param property_node the JSON node containing the serialized property
         * @returns `TRUE` if the property was successfully deserialized
         */
        deserialize_property(property_name: string, pspec: GObject.ParamSpec, property_node: Json.Node): [boolean, unknown];

        /**
         * Calls the {@link Json.Serializable.find_property} implementation on
         * the {@link Json.Serializable} instance, which will return the property
         * description for the given name.
         * @param name the name of the property
         * @returns the property description
         */
        find_property(name: string): (GObject.ParamSpec | null);

        /**
         * Calls the {@link Json.Serializable.get_property} implementation
         * on the {@link Json.Serializable} instance, which will get the value of
         * the given property.
         * @param pspec a property description
         */
        get_property(pspec: GObject.ParamSpec): unknown;

        /**
         * @param args 
         */
        // Conflicted with GObject.Object.get_property
        get_property(...args: never[]): any;

        /**
         * Calls the {@link Json.Serializable.list_properties} implementation on
         * the {@link Json.Serializable} instance, which will return the list of serializable
         * properties.
         * @returns the serializable   properties of the object
         */
        list_properties(): GObject.ParamSpec[];

        /**
         * Asks a {@link Json.Serializable} implementation to serialize an object
         * property into a JSON node.
         * @param property_name the name of the property to serialize
         * @param value the value of the property to serialize
         * @param pspec a property description
         * @returns a node containing the serialized property
         */
        serialize_property(property_name: string, value: (GObject.Value | any), pspec: GObject.ParamSpec): (Json.Node | null);

        /**
         * Calls the {@link Json.Serializable.set_property} implementation
         * on the {@link Json.Serializable} instance, which will set the property
         * with the given value.
         * @param pspec a property description
         * @param value the property value to set
         */
        set_property(pspec: GObject.ParamSpec, value: (GObject.Value | any)): void;

        /**
         * @param args 
         */
        // Conflicted with GObject.Object.set_property
        set_property(...args: never[]): any;

        /**
         * Asks a {@link Json.Serializable} implementation to deserialize the
         * property contained inside `property_node` and place its value
         * into `value`.
         * 
         * The `value` can be:
         * 
         * - an empty {@link GObject.Value} initialized by `G_VALUE_INIT`, which will be automatically
         *   initialized with the expected type of the property by using the given
         *   property description (since JSON-GLib 1.6)
         * - a {@link GObject.Value} initialized with the expected type of the property
         * 
         * This function will not be called for properties that are marked as
         * as `G_PARAM_CONSTRUCT_ONLY`.
         * @param property_name the name of the property to serialize
         * @param pspec a property description
         * @param property_node the JSON node containing the serialized property
         * @virtual
         */
        vfunc_deserialize_property(property_name: string, pspec: GObject.ParamSpec, property_node: Json.Node): [boolean, GObject.Value | any];

        /**
         * Calls the {@link Json.Serializable.find_property} implementation on
         * the {@link Json.Serializable} instance, which will return the property
         * description for the given name.
         * @param name the name of the property
         * @virtual
         */
        vfunc_find_property(name: string): (GObject.ParamSpec | null);

        /**
         * Calls the {@link Json.Serializable.get_property} implementation
         * on the {@link Json.Serializable} instance, which will get the value of
         * the given property.
         * @param pspec a property description
         * @virtual
         */
        vfunc_get_property(pspec: GObject.ParamSpec): GObject.Value | any;

        /**
         * @param args 
         * @virtual
         */
        // Conflicted with GObject.Object.vfunc_get_property
        vfunc_get_property(...args: never[]): any;

        /**
         * Asks a {@link Json.Serializable} implementation to serialize an object
         * property into a JSON node.
         * @param property_name the name of the property to serialize
         * @param value the value of the property to serialize
         * @param pspec a property description
         * @virtual
         */
        vfunc_serialize_property(property_name: string, value: unknown, pspec: GObject.ParamSpec): (Json.Node | null);

        /**
         * Calls the {@link Json.Serializable.set_property} implementation
         * on the {@link Json.Serializable} instance, which will set the property
         * with the given value.
         * @param pspec a property description
         * @param value the property value to set
         * @virtual
         */
        vfunc_set_property(pspec: GObject.ParamSpec, value: unknown): void;

        /**
         * @param args 
         * @virtual
         */
        // Conflicted with GObject.Object.vfunc_set_property
        vfunc_set_property(...args: never[]): any;
    }


    namespace SimpleAuthorizer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::access-token": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Authorizer.ConstructorProps {
            access_token: string;
            accessToken: string;
        }
    }

    /**
     * @gir-type Class
     */
    class SimpleAuthorizer extends GObject.Object implements Authorizer {
        static $gtype: GObject.GType<SimpleAuthorizer>;

        // Properties
        get access_token(): string;
        set access_token(val: string);

        get accessToken(): string;
        set accessToken(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SimpleAuthorizer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SimpleAuthorizer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](access_token: string): SimpleAuthorizer;

        // Signals
        /** @signal */
        connect<K extends keyof SimpleAuthorizer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimpleAuthorizer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SimpleAuthorizer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimpleAuthorizer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SimpleAuthorizer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SimpleAuthorizer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Adds the necessary authorization to `call`.
         * 
         * This method modifies `call` in place and is thread safe.
         * @param call A {@link Rest.ProxyCall}.
         */
        process_call(call: Rest.ProxyCall): void;

        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         * 
         * This method modifies `message` in place and is thread safe.
         * @param message A {@link Soup.Message}.
         */
        process_message(message: Soup.Message): void;

        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it.
         * 
         * This method is thread safe.
         * @param cancellable An optional {@link Gio.Cancellable} object, or `null`.
         * @returns `true` if the authorizer now has a valid token.
         */
        refresh_authorization(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Adds the necessary authorization to `call`.
         * 
         * This method modifies `call` in place and is thread safe.
         * @param call A {@link Rest.ProxyCall}.
         * @virtual
         */
        vfunc_process_call(call: Rest.ProxyCall): void;

        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         * 
         * This method modifies `message` in place and is thread safe.
         * @param message A {@link Soup.Message}.
         * @virtual
         */
        vfunc_process_message(message: Soup.Message): void;

        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it.
         * 
         * This method is thread safe.
         * @param cancellable An optional {@link Gio.Cancellable} object, or `null`.
         * @virtual
         */
        vfunc_refresh_authorization(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace User {
        // Signal signatures
        interface SignalSignatures extends Node.SignalSignatures {
            "notify::email": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::created-time": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::link": (pspec: GObject.ParamSpec) => void;
            "notify::updated-time": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Node.ConstructorProps {
            email: string;
            name: string;
        }
    }

    /**
     * @gir-type Class
     */
    class User extends Node {
        static $gtype: GObject.GType<User>;

        // Properties
        /**
         * The email of the user if available
         * @default null
         */
        get email(): string;
        set email(val: string);

        /**
         * The full name of the user
         */
        get name(): string;
        set name(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: User.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<User.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): User;

        static new_from_id(authorizer: Authorizer, id: string): User;

        // Signals
        /** @signal */
        connect<K extends keyof User.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, User.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof User.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, User.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof User.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<User.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Retrieve the current user logged using the https://graph.facebook.com/me Graph API function.
         * See `gfbgraph_user_get_my_async()` for the asynchronous version of this call.
         * @param authorizer a {@link GFBGraph.Authorizer}.
         */
        static get_me(authorizer: Authorizer): User;

        /**
         * Asynchronously retrieve the current user logged. See `gfbgraph_user_get_me()` for the
         * synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can then call `gfbgraph_user_get_me_finish()`
         * to get the {@link GFBGraph.User} for to the current user logged.
         * @param authorizer a {@link GFBGraph.Authorizer}.
         * @param cancellable An optional {@link Gio.Cancellable} object, or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is completed.
         */
        static get_me_async(authorizer: Authorizer, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<User> | null)): void;

        /**
         * Finishes an asynchronous operation started with
         * `gfbgraph_user_get_me_async()`.
         * @param authorizer a {@link GFBGraph.Authorizer}.
         * @param result A {@link Gio.AsyncResult}.
         */
        static get_me_async_finish(authorizer: Authorizer, result: Gio.AsyncResult): User;

        // Methods
        /**
         * Retrieve the albums nodes owned by the `user`. This functions call the function ID/albums.
         * @param authorizer a {@link GFBGraph.Authorizer}.
         * @returns a newly-allocated {@link GLib.List} with the albums nodes owned by the given user.
         */
        get_albums(authorizer: Authorizer): Album[];

        /**
         * Asynchronously retrieve the albums nodes owned by the `user`. See `gfbgraph_user_get_albums()` for the
         * synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can then call `gfbgraph_user_get_albums_async_finish()`
         * to get the {@link GLib.List} of {@link GFBGraph.Album} owned by the `user`.
         * @param authorizer a {@link GFBGraph.Authorizer}.
         * @param cancellable An optional {@link Gio.Cancellable} object, or `null`.
         */
        get_albums_async(authorizer: Authorizer, cancellable: (Gio.Cancellable | null)): globalThis.Promise<Album[]>;

        /**
         * Asynchronously retrieve the albums nodes owned by the `user`. See `gfbgraph_user_get_albums()` for the
         * synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can then call `gfbgraph_user_get_albums_async_finish()`
         * to get the {@link GLib.List} of {@link GFBGraph.Album} owned by the `user`.
         * @param authorizer a {@link GFBGraph.Authorizer}.
         * @param cancellable An optional {@link Gio.Cancellable} object, or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is completed.
         */
        get_albums_async(authorizer: Authorizer, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously retrieve the albums nodes owned by the `user`. See `gfbgraph_user_get_albums()` for the
         * synchronous version of this call.
         * 
         * When the operation is finished, `callback` will be called. You can then call `gfbgraph_user_get_albums_async_finish()`
         * to get the {@link GLib.List} of {@link GFBGraph.Album} owned by the `user`.
         * @param authorizer a {@link GFBGraph.Authorizer}.
         * @param cancellable An optional {@link Gio.Cancellable} object, or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is completed.
         */
        get_albums_async(authorizer: Authorizer, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<Album[]> | void);

        /**
         * Finishes an asynchronous operation started with
         * `gfbgraph_user_get_albums_async()`.
         * @param result A {@link Gio.AsyncResult}.
         * @returns a newly-allocated {@link GLib.List} of albums owned by the `user`.
         */
        get_albums_async_finish(result: Gio.AsyncResult): Album[];

        /**
         * Get the user email. To retrieve this propertie, you need 'email' extended
         * permission.
         * @returns a const `gchar` with the user email, or `null`.
         */
        get_email(): string;

        /**
         * Get the user full name.
         * @returns a const `gchar` with the user full name, or `null`.
         */
        get_name(): string;
    }


    /**
     * @gir-type Alias
     */
    type AlbumClass = typeof Album;

    /**
     * @gir-type Struct
     */
    abstract class AlbumPrivate {
        static $gtype: GObject.GType<AlbumPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type AuthorizerInterface = typeof Authorizer;

    /**
     * @gir-type Alias
     */
    type ConnectableInterface = typeof Connectable;

    /**
     * @gir-type Alias
     */
    type GoaAuthorizerClass = typeof GoaAuthorizer;

    /**
     * @gir-type Struct
     */
    abstract class GoaAuthorizerPrivate {
        static $gtype: GObject.GType<GoaAuthorizerPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type NodeClass = typeof Node;

    /**
     * @gir-type Struct
     */
    abstract class NodePrivate {
        static $gtype: GObject.GType<NodePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type PhotoClass = typeof Photo;

    /**
     * An struct with the information of a image.
     * @gir-type Struct
     */
    class PhotoImage {
        static $gtype: GObject.GType<PhotoImage>;

        // Fields
        width: number;

        height: number;

        source: string;

        // Constructors

        constructor(properties?: Partial<{
            width: number;
            height: number;
            source: string;
        }>);
    }


    /**
     * @gir-type Struct
     */
    abstract class PhotoPrivate {
        static $gtype: GObject.GType<PhotoPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SimpleAuthorizerClass = typeof SimpleAuthorizer;

    /**
     * @gir-type Struct
     */
    abstract class SimpleAuthorizerPrivate {
        static $gtype: GObject.GType<SimpleAuthorizerPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type UserClass = typeof User;

    /**
     * @gir-type Struct
     */
    abstract class UserPrivate {
        static $gtype: GObject.GType<UserPrivate>;
    }


    namespace Authorizer {
        /**
         * Interface for implementing Authorizer.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Adds the necessary authorization to `call`.
             * 
             * This method modifies `call` in place and is thread safe.
             * @param call A {@link Rest.ProxyCall}.
             * @virtual
             */
            vfunc_process_call(call: Rest.ProxyCall): void;

            /**
             * Adds the necessary authorization to `message`. The type of `message`
             * can be DELETE, GET and POST.
             * 
             * This method modifies `message` in place and is thread safe.
             * @param message A {@link Soup.Message}.
             * @virtual
             */
            vfunc_process_message(message: Soup.Message): void;

            /**
             * Synchronously forces `iface` to refresh any authorization tokens
             * held by it.
             * 
             * This method is thread safe.
             * @param cancellable An optional {@link Gio.Cancellable} object, or `null`.
             * @virtual
             */
            vfunc_refresh_authorization(cancellable: (Gio.Cancellable | null)): boolean;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface AuthorizerNamespace {
        $gtype: GObject.GType<Authorizer>;
        prototype: Authorizer;
    }
    /**
     * @gir-type Interface
     */
    interface Authorizer extends GObject.Object, Authorizer.Interface {

        // Methods
        /**
         * Adds the necessary authorization to `call`.
         * 
         * This method modifies `call` in place and is thread safe.
         * @param call A {@link Rest.ProxyCall}.
         */
        process_call(call: Rest.ProxyCall): void;

        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         * 
         * This method modifies `message` in place and is thread safe.
         * @param message A {@link Soup.Message}.
         */
        process_message(message: Soup.Message): void;

        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it.
         * 
         * This method is thread safe.
         * @param cancellable An optional {@link Gio.Cancellable} object, or `null`.
         * @returns `true` if the authorizer now has a valid token.
         */
        refresh_authorization(cancellable: (Gio.Cancellable | null)): boolean;
    }


    export const Authorizer: AuthorizerNamespace & {
        new (): Authorizer; // This allows `obj instanceof Authorizer`
    };

    namespace Connectable {
        /**
         * Interface for implementing Connectable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Get the params to be inserted in a request to the Facebook Graph API
             * in order to append the node `self` to a node of type `node_type`.
             * @param node_type a {@link GObject.GType}, required a #GFBGRAPH_TYPE_NODE or children.
             * @virtual
             */
            vfunc_get_connection_post_params(node_type: GObject.GType): ({ [key: string]: any } | GLib.HashTable<any, any>);

            /**
             * Parse the response contained in `payload` when a `gfbgraph_node_get_connection_nodes()` was
             * executed.
             * @param payload a const `gchar` with the response string from the Facebook Graph API.
             * @virtual
             */
            vfunc_parse_connected_data(payload: string): Node[];
        }


        // Constructor properties interface
        interface ConstructorProps extends Node.ConstructorProps {

        }
    }

    export interface ConnectableNamespace {
        $gtype: GObject.GType<Connectable>;
        prototype: Connectable;
    }
    /**
     * @gir-type Interface
     */
    interface Connectable extends Node, Connectable.Interface {

        // Methods
        /**
         * In most cases, {@link GFBGraph.Connectable} implementers can use this function in order to parse
         * the response when a `gfbgraph_node_get_connection_nodes()` is executed and the
         * `gfbgraph_connectable_parse_connected_data()` was called.
         * 
         * Normally, Facebook Graph API returns the connections in the same way, using JSON objects,
         * with a root object called "data".
         * @param payload a const `gchar` with the response string from the Facebook Graph API.
         * @returns a newly-allocated {@link GLib.List} of {@link GFBGraph.Node} with the same {@link GObject.GType} as `self`.
         */
        default_parse_connected_data(payload: string): Node[];

        /**
         * Get the Facebook Graph API function path to retrieve the nodes connected with `node_type`
         * managed by the {@link GFBGraph.Connectable} object.
         * @param node_type a {@link GObject.GType}, required a #GFBGRAPH_TYPE_NODE or children.
         * @returns a const `gchar` with the function path or `null`.
         */
        get_connection_path(node_type: GObject.GType): string;

        /**
         * Get the params to be inserted in a request to the Facebook Graph API
         * in order to append the node `self` to a node of type `node_type`.
         * @param node_type a {@link GObject.GType}, required a #GFBGRAPH_TYPE_NODE or children.
         * @returns A string based {@link GLib.HashTable} with the params and his values or `null`.
         */
        get_connection_post_params(node_type: GObject.GType): GLib.HashTable<any, any>;

        /**
         * Check if `self` object, normally a {@link GFBGraph.Node} implementing the {@link GFBGraph.Connectable} interface,
         * has the possibility to be connected to another node of type `node_type`.
         * @param node_type a {@link GObject.GType}, required a #GFBGRAPH_TYPE_NODE or children.
         * @returns `true` in case that the `self` object can be connected to a node of type `node_type`, `false` otherwise.
         */
        is_connectable_to(node_type: GObject.GType): boolean;

        /**
         * Parse the response contained in `payload` when a `gfbgraph_node_get_connection_nodes()` was
         * executed.
         * @param payload a const `gchar` with the response string from the Facebook Graph API.
         * @returns a newly-allocated {@link GLib.List} of {@link GFBGraph.Node} created from the `payload` or `null`.
         */
        parse_connected_data(payload: string): Node[];
    }


    export const Connectable: ConnectableNamespace & {
        new (): Connectable; // This allows `obj instanceof Connectable`
    };

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
