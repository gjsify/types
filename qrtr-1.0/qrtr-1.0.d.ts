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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Qrtr {
    /**
     * Qrtr-1.0
     */

    /**
     * Symbol defining the {@link Qrtr.Bus.lookup_timeout} property.
     * @since 1.0
     */
    const BUS_LOOKUP_TIMEOUT: string;
    /**
     * Symbol defining the {@link Qrtr.Bus.SignalSignatures.node_added | Qrtr.Bus::node-added} signal.
     * @since 1.0
     */
    const BUS_SIGNAL_NODE_ADDED: string;
    /**
     * Symbol defining the {@link Qrtr.Bus.SignalSignatures.node_removed | Qrtr.Bus::node-removed} signal.
     * @since 1.0
     */
    const BUS_SIGNAL_NODE_REMOVED: string;
    /**
     * The QRTR node this client refers to.
     * @since 1.0
     */
    const CLIENT_NODE: string;
    /**
     * The QRTR node port this client refers to.
     * @since 1.0
     */
    const CLIENT_PORT: string;
    /**
     * Symbol defining the {@link Qrtr.Client.SignalSignatures.client_message | Qrtr.Client::client-message} signal.
     * @since 1.0
     */
    const CLIENT_SIGNAL_MESSAGE: string;
    /**
     * The QRTR bus.
     * @since 1.0
     */
    const NODE_BUS: string;
    /**
     * The node id.
     * @since 1.0
     */
    const NODE_ID: string;
    /**
     * Symbol defining the {@link Qrtr.Node.SignalSignatures.node_removed | Qrtr.Node::node-removed} signal.
     * @since 1.0
     */
    const NODE_SIGNAL_REMOVED: string;
    /**
     * Symbol defining the {@link Qrtr.Node.SignalSignatures.service_added | Qrtr.Node::service-added} signal.
     * @since 1.0
     */
    const NODE_SIGNAL_SERVICE_ADDED: string;
    /**
     * Symbol defining the {@link Qrtr.Node.SignalSignatures.service_removed | Qrtr.Node::service-removed} signal.
     * @since 1.0
     */
    const NODE_SIGNAL_SERVICE_REMOVED: string;
    /**
     * Get the QRTR node id from the specified URI.
     * @param uri a URI.
     * @param node_id return location for the node id.
     * @returns `true` if `node_id` is set, `false` otherwise.
     * @since 1.0
     */
    function get_node_for_uri(uri: string, node_id: number): boolean;
    /**
     * Build a URI for the given QRTR node.
     * @param node_id node id.
     * @returns a string with the URI, or `null` if none given. The returned value  should be freed with `g_free()`.
     * @since 1.0
     */
    function get_uri_for_node(node_id: number): string;
    namespace Bus {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::node-added signal is emitted when a new node registers a service on
             * the QRTR bus.
             * @signal
             * @since 1.0
             * @run-last
             */
            'node-added': (arg0: number) => void;
            /**
             * The ::node-removed signal is emitted when a node deregisters all services
             * from the QRTR bus.
             * @signal
             * @since 1.0
             * @run-last
             */
            'node-removed': (arg0: number) => void;
            'notify::lookup-timeout': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncInitable.ConstructorProps {
            lookup_timeout: number;
            lookupTimeout: number;
        }
    }

    /**
     * The {@link Qrtr.Bus} structure contains private data and should only be accessed
     * using the provided API.
     * @gir-type Class
     * @since 1.0
     */
    class Bus extends GObject.Object implements Gio.AsyncInitable<Bus> {
        static $gtype: GObject.GType<Bus>;

        // Properties

        /**
         * @since 1.0
         * @construct-only
         * @default 0
         */
        get lookup_timeout(): number;
        /**
         * @since 1.0
         * @construct-only
         * @default 0
         */
        get lookupTimeout(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Bus.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Bus.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(res: Gio.AsyncResult): Bus;
        // Conflicted with Gio.AsyncInitable.new_finish

        static new_finish(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof Bus.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Bus.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Bus.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Bus.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Bus.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Bus.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Asynchronously creates a {@link Qrtr.Bus} object.
         *
         * This method will fail if the access to the QRTR bus is not possible, or if
         * the initial lookup doesn't finish on time.
         *
         * When `lookup_timeout_ms` is 0, this method does not guarantee that the
         * initial bus lookup has already finished, the user should wait for the required
         * {@link Qrtr.Bus.SignalSignatures.node_added | Qrtr.Bus::node-added} and {@link Qrtr.Node.SignalSignatures.service_added | Qrtr.Node::service-added} signals before assuming the
         * nodes are accessible.
         *
         * When the operation is finished, `callback` will be invoked. You can then call
         * `qrtr_bus_new_finish()` to get the result of the operation.
         * @param lookup_timeout_ms the timeout, in milliseconds, to wait for the initial bus   lookup to complete. A zero timeout disables the lookup.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the initialization is finished.
         */
        static ['new'](
            lookup_timeout_ms: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<Bus> | null,
        ): void;

        // Methods

        /**
         * Get the {@link Qrtr.Node} with node ID `node_id`.
         *
         * This method will fail if there is no node with the given `node_id` in the QRTR bus.
         * @param node_id the QRTR bus node ID to get
         * @returns a {@link Qrtr.Node} that must be freed with `g_object_unref()`,  or `null` if none available
         */
        get_node(node_id: number): Node;
        /**
         * Gets a list of all the {@link Qrtr.Node} objects in the bus.
         * @returns a list of  {@link Qrtr.Node} elements. The caller should free the result by using  `g_list_free_full()` with `g_object_unref()` as {@link GLib.DestroyNotify}.
         */
        get_nodes(): Node[] | null;
        /**
         * Get the {@link Qrtr.Node} with node ID `node_id`, without increasing the reference count
         * on the returned object.
         *
         * This method will fail if there is no node with the given `node_id` in the QRTR bus.
         * @param node_id the QRTR bus node ID to get
         * @returns a {@link Qrtr.Node}, or `null` if none available.  Do not free the returned object, it is owned by `self`.
         */
        peek_node(node_id: number): Node;
        /**
         * Gets a list of all the {@link Qrtr.Node} objects in the bus, without increasing
         * the reference count on the returned object or the list.
         * @returns a list of  {@link Qrtr.Node} elements. The caller should not free the result, it is  owned by `self`.
         */
        peek_nodes(): Node[] | null;
        /**
         * Asynchronously waits for the node with ID `node_id`.
         *
         * When the operation is finished `callback` will be called. You can then call
         * `qrtr_bus_wait_for_node_finish()` to get the result of the
         * operation.
         * @param node_id the QRTR bus node ID to lookup.
         * @param timeout_ms the timeout, in milliseconds, to wait for the node to appear in  the bus.
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`.
         */
        wait_for_node(
            node_id: number,
            timeout_ms: number,
            cancellable: Gio.Cancellable | null,
        ): globalThis.Promise<Node>;
        /**
         * Asynchronously waits for the node with ID `node_id`.
         *
         * When the operation is finished `callback` will be called. You can then call
         * `qrtr_bus_wait_for_node_finish()` to get the result of the
         * operation.
         * @param node_id the QRTR bus node ID to lookup.
         * @param timeout_ms the timeout, in milliseconds, to wait for the node to appear in  the bus.
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        wait_for_node(
            node_id: number,
            timeout_ms: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously waits for the node with ID `node_id`.
         *
         * When the operation is finished `callback` will be called. You can then call
         * `qrtr_bus_wait_for_node_finish()` to get the result of the
         * operation.
         * @param node_id the QRTR bus node ID to lookup.
         * @param timeout_ms the timeout, in milliseconds, to wait for the node to appear in  the bus.
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        wait_for_node(
            node_id: number,
            timeout_ms: number,
            cancellable: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Node> | void;
        /**
         * Finishes an operation started with `qrtr_bus_wait_for_node()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns A {@link Qrtr.Node}, or `null` if `error` is set.
         */
        wait_for_node_finish(res: Gio.AsyncResult): Node;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         *
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         *
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         *
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         *
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         *
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         *
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): Bus;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         *
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         *
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
    }

    namespace Client {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::client-message signal is emitted when a message is received
             * from the port in the node.
             *
             * There must be one single user connected to this signal, because it is
             * not guaranteed that the contents of the `message` byte array aren't
             * modified by multiple users. In other words, the user connected to this
             * signal may modify the contents of the `message` byte array if needed.
             * @signal
             * @since 1.0
             * @run-last
             */
            'client-message': (arg0: Uint8Array) => void;
            'notify::client-node': (pspec: GObject.ParamSpec) => void;
            'notify::client-port': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            client_node: Node;
            clientNode: Node;
            client_port: number;
            clientPort: number;
        }
    }

    /**
     * The {@link Qrtr.Client} structure contains private data and should only be accessed
     * using the provided API.
     * @gir-type Class
     * @since 1.0
     */
    class Client extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Client>;

        // Properties

        /**
         * @since 1.0
         * @construct-only
         */
        get client_node(): Node;
        /**
         * @since 1.0
         * @construct-only
         */
        get clientNode(): Node;
        /**
         * @since 1.0
         * @construct-only
         * @default 0
         */
        get client_port(): number;
        /**
         * @since 1.0
         * @construct-only
         * @default 0
         */
        get clientPort(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Client.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](node: Node, port: number, cancellable: Gio.Cancellable | null): Client;

        // Signals

        /** @signal */
        connect<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Client.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the {@link Qrtr.Node} that this client refers to.
         * @returns a {@link Qrtr.Node} that must be freed with `g_object_unref()`.
         */
        get_node(): Node;
        /**
         * Gets the node port where this client communicates.
         * @returns the node port.
         */
        get_port(): number;
        /**
         * Get the {@link Qrtr.Node} that this client refers to, without increasing the
         * reference count on the returned object.
         * @returns a {@link Qrtr.Node}. Do not free the returned object, it is  owned by `self`.
         */
        peek_node(): Node;
        /**
         * Sends a message to the port at the node.
         * @param message the message.
         * @param cancellable a {@link Gio.Cancellable}.
         * @returns `true` if the message is sent, or `false` if `error` is set.
         */
        send(message: Uint8Array | string, cancellable: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }

    namespace Node {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::node-removed signal is emitted when the node fully disappears from
             * the QRTR bus.
             * @signal
             * @since 1.0
             * @run-last
             */
            'node-removed': () => void;
            /**
             * The ::service-added signal is emitted when a new service registers
             * on the QRTR node.
             * @signal
             * @since 1.0
             * @run-last
             */
            'service-added': (arg0: number) => void;
            /**
             * The ::service-removed signal is emitted when a service deregisters
             * from the QRTR node.
             * @signal
             * @since 1.0
             * @run-last
             */
            'service-removed': (arg0: number) => void;
            'notify::bus': (pspec: GObject.ParamSpec) => void;
            'notify::node-id': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            bus: Bus;
            node_id: number;
            nodeId: number;
        }
    }

    /**
     * The {@link Qrtr.Node} structure contains private data and should only be accessed
     * using the provided API.
     * @gir-type Class
     * @since 1.0
     */
    class Node extends GObject.Object {
        static $gtype: GObject.GType<Node>;

        // Properties

        /**
         * @since 1.0
         * @construct-only
         */
        get bus(): Bus;
        /**
         * @since 1.0
         * @construct-only
         * @default 0
         */
        get node_id(): number;
        /**
         * @since 1.0
         * @construct-only
         * @default 0
         */
        get nodeId(): number;

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

        // Signals

        /** @signal */
        connect<K extends keyof Node.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Node.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Node.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Node.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Node.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Node.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param service
         * @param port
         * @param version
         * @param instance
         */
        add_service_info(service: number, port: number, version: number, instance: number): void;
        /**
         * Get the {@link Qrtr.Bus} where this node is available.
         * @returns a {@link Qrtr.Bus} that must be freed with `g_object_unref()`.
         */
        get_bus(): Bus;
        /**
         * Gets the node ID in the QRTR bus.
         * @returns the node id.
         */
        get_id(): number;
        /**
         * Get the list of services currently supported by the {@link Qrtr.Node}.
         * @returns a {@link GLib.List} of {@link Qrtr.NodeServiceInfo} elements, that  must be freed with `g_list_free_full()` using `qrtr_node_service_info_free()`  as {@link GLib.DestroyNotify}.
         */
        get_service_info_list(): NodeServiceInfo[];
        /**
         * If a server has announced itself for the given node and service number,
         * return the port number of that service.
         *
         * If multiple instances are registered, this method returns the port number
         * for the service with the highest version number.
         * @param service a service number.
         * @returns the port number of the service in the node, or -1 if not found.
         */
        lookup_port(service: number): number;
        /**
         * If a server has announced itself for the given node and port number,
         * return the service it serves.
         * @param port a port number.
         * @returns the service number, or -1 if not found.
         */
        lookup_service(port: number): number;
        /**
         * Get the {@link Qrtr.Bus} where this node is available, without increasing the
         * reference count on the returned object.
         * @returns a {@link Qrtr.Bus}. Do not free the returned object, it is  owned by `self`.
         */
        peek_bus(): Bus;
        /**
         * Get the list of services currently supported by the {@link Qrtr.Node}.
         * @returns a {@link GLib.List} of {@link Qrtr.NodeServiceInfo} elements. Do not  free the returned object, it is owned by `self`.
         */
        peek_service_info_list(): NodeServiceInfo[];
        /**
         * @param service
         * @param port
         * @param version
         * @param instance
         */
        remove_service_info(service: number, port: number, version: number, instance: number): void;
        /**
         * Asynchronously waits until all the services listed in `services` are present
         * on the node.
         *
         * The operation may fail if any of the requested services isn't notified, or
         * if the node is removed from the bus while waiting.
         *
         * When the operation is finished `callback` will be called. You can then call
         * `qrtr_node_wait_for_services_finish()` to get the result of the
         * operation.
         * @param services a {@link GLib.Array} of service types
         * @param timeout_ms the timeout, in milliseconds, to wait for the the services to  be exposed in the node.
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`.
         */
        wait_for_services(
            services: number[],
            timeout_ms: number,
            cancellable: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously waits until all the services listed in `services` are present
         * on the node.
         *
         * The operation may fail if any of the requested services isn't notified, or
         * if the node is removed from the bus while waiting.
         *
         * When the operation is finished `callback` will be called. You can then call
         * `qrtr_node_wait_for_services_finish()` to get the result of the
         * operation.
         * @param services a {@link GLib.Array} of service types
         * @param timeout_ms the timeout, in milliseconds, to wait for the the services to  be exposed in the node.
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        wait_for_services(
            services: number[],
            timeout_ms: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously waits until all the services listed in `services` are present
         * on the node.
         *
         * The operation may fail if any of the requested services isn't notified, or
         * if the node is removed from the bus while waiting.
         *
         * When the operation is finished `callback` will be called. You can then call
         * `qrtr_node_wait_for_services_finish()` to get the result of the
         * operation.
         * @param services a {@link GLib.Array} of service types
         * @param timeout_ms the timeout, in milliseconds, to wait for the the services to  be exposed in the node.
         * @param cancellable a {@link Gio.Cancellable}, or `NULL`.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        wait_for_services(
            services: number[],
            timeout_ms: number,
            cancellable: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `qrtr_node_wait_for_services()`.
         * @param result a {@link Gio.AsyncResult}.
         * @returns `true` if all requested services are present on this node, or `false` if `error` is set.
         */
        wait_for_services_finish(result: Gio.AsyncResult): boolean;
    }

    /**
     * @gir-type Alias
     */
    type BusClass = typeof Bus;
    /**
     * @gir-type Struct
     */
    abstract class BusPrivate {
        static $gtype: GObject.GType<BusPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ClientClass = typeof Client;
    /**
     * @gir-type Struct
     */
    abstract class ClientPrivate {
        static $gtype: GObject.GType<ClientPrivate>;
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
     * Information for a service instance in the {@link Qrtr.Node}.
     * @gir-type Struct
     * @since 1.0
     */
    abstract class NodeServiceInfo {
        static $gtype: GObject.GType<NodeServiceInfo>;

        // Methods

        /**
         * Frees a single {@link Qrtr.NodeServiceInfo}, as returned by `qrtr_node_get_service_info_list()`.
         */
        free(): void;
        /**
         * Get the instance number from the {@link Qrtr.NodeServiceInfo}.
         * @returns the instance number.
         */
        get_instance(): number;
        /**
         * Get the port number from the {@link Qrtr.NodeServiceInfo}.
         * @returns the port number.
         */
        get_port(): number;
        /**
         * Get the service number from the {@link Qrtr.NodeServiceInfo}.
         * @returns the service number.
         */
        get_service(): number;
        /**
         * Get the version number from the {@link Qrtr.NodeServiceInfo}.
         * @returns the version number.
         */
        get_version(): number;
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

export default Qrtr;

// END
