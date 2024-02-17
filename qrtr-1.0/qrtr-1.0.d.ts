
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './qrtr-1.0-ambient.d.ts';
import './qrtr-1.0-import.d.ts';
/**
 * Qrtr-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Qrtr {

/**
 * Symbol defining the #QrtrBus:lookup-timeout property.
 */
const BUS_LOOKUP_TIMEOUT: string
/**
 * Symbol defining the #QrtrBus::node-added signal.
 */
const BUS_SIGNAL_NODE_ADDED: string
/**
 * Symbol defining the #QrtrBus::node-removed signal.
 */
const BUS_SIGNAL_NODE_REMOVED: string
/**
 * The QRTR node this client refers to.
 */
const CLIENT_NODE: string
/**
 * The QRTR node port this client refers to.
 */
const CLIENT_PORT: string
/**
 * Symbol defining the #QrtrClient::client-message signal.
 */
const CLIENT_SIGNAL_MESSAGE: string
/**
 * The QRTR bus.
 */
const NODE_BUS: string
/**
 * The node id.
 */
const NODE_ID: string
/**
 * Symbol defining the #QrtrNode::node-removed signal.
 */
const NODE_SIGNAL_REMOVED: string
/**
 * Symbol defining the #QrtrNode::service-added signal.
 */
const NODE_SIGNAL_SERVICE_ADDED: string
/**
 * Symbol defining the #QrtrNode::service-removed signal.
 */
const NODE_SIGNAL_SERVICE_REMOVED: string
/**
 * Get the QRTR node id from the specified URI.
 * @param uri a URI.
 * @param node_id return location for the node id.
 * @returns %TRUE if @node_id is set, %FALSE otherwise.
 */
function get_node_for_uri(uri: string, node_id: number): boolean
/**
 * Build a URI for the given QRTR node.
 * @param node_id node id.
 * @returns a string with the URI, or %NULL if none given. The returned value  should be freed with g_free().
 */
function get_uri_for_node(node_id: number): string | null
module Bus {

    // Signal callback interfaces

    /**
     * Signal callback interface for `node-added`
     */
    interface NodeAddedSignalCallback {
        ($obj: Bus, node: number): void
    }

    /**
     * Signal callback interface for `node-removed`
     */
    interface NodeRemovedSignalCallback {
        ($obj: Bus, node: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Qrtr-1.0.Qrtr.Bus

        lookupTimeout?: number | null
    }

}

interface Bus extends Gio.AsyncInitable {

    // Own properties of Qrtr-1.0.Qrtr.Bus

    readonly lookupTimeout: number

    // Owm methods of Qrtr-1.0.Qrtr.Bus

    /**
     * Get the #QrtrNode with node ID `node_id`.
     * 
     * This method will fail if there is no node with the given `node_id` in the QRTR bus.
     * @param node_id the QRTR bus node ID to get
     * @returns a #QrtrNode that must be freed with g_object_unref(),  or %NULL if none available
     */
    get_node(node_id: number): Node
    /**
     * Gets a list of all the #QrtrNode objects in the bus.
     * @returns a list of  #QrtrNode elements. The caller should free the result by using  g_list_free_full() with g_object_unref() as #GDestroyNotify.
     */
    get_nodes(): Node[] | null
    /**
     * Get the #QrtrNode with node ID `node_id,` without increasing the reference count
     * on the returned object.
     * 
     * This method will fail if there is no node with the given `node_id` in the QRTR bus.
     * @param node_id the QRTR bus node ID to get
     * @returns a #QrtrNode, or %NULL if none available.  Do not free the returned object, it is owned by @self.
     */
    peek_node(node_id: number): Node
    /**
     * Gets a list of all the #QrtrNode objects in the bus, without increasing
     * the reference count on the returned object or the list.
     * @returns a list of  #QrtrNode elements. The caller should not free the result, it is  owned by @self.
     */
    peek_nodes(): Node[] | null
    /**
     * Asynchronously waits for the node with ID `node_id`.
     * 
     * When the operation is finished `callback` will be called. You can then call
     * qrtr_bus_wait_for_node_finish() to get the result of the
     * operation.
     * @param node_id the QRTR bus node ID to lookup.
     * @param timeout_ms the timeout, in milliseconds, to wait for the node to appear in  the bus.
     * @param cancellable a #GCancellable, or #NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    wait_for_node(node_id: number, timeout_ms: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with qrtr_bus_wait_for_node().
     * @param res a #GAsyncResult.
     * @returns A #QrtrNode, or %NULL if @error is set.
     */
    wait_for_node_finish(res: Gio.AsyncResult): Node

    // Own signals of Qrtr-1.0.Qrtr.Bus

    connect(sigName: "node-added", callback: Bus.NodeAddedSignalCallback): number
    connect_after(sigName: "node-added", callback: Bus.NodeAddedSignalCallback): number
    emit(sigName: "node-added", node: number, ...args: any[]): void
    connect(sigName: "node-removed", callback: Bus.NodeRemovedSignalCallback): number
    connect_after(sigName: "node-removed", callback: Bus.NodeRemovedSignalCallback): number
    emit(sigName: "node-removed", node: number, ...args: any[]): void

    // Class property signals of Qrtr-1.0.Qrtr.Bus

    connect(sigName: "notify::lookup-timeout", callback: (($obj: Bus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lookup-timeout", callback: (($obj: Bus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::lookup-timeout", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #QrtrBus structure contains private data and should only be accessed
 * using the provided API.
 * @class 
 */
class Bus extends GObject.Object {

    // Own properties of Qrtr-1.0.Qrtr.Bus

    static name: string
    static $gtype: GObject.GType<Bus>

    // Constructors of Qrtr-1.0.Qrtr.Bus

    constructor(config?: Bus.ConstructorProperties) 
    /**
     * Finishes an operation started with qrtr_bus_new().
     * @constructor 
     * @param res a #GAsyncResult.
     * @returns A newly created #QrtrBus, or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): Bus
    _init(config?: Bus.ConstructorProperties): void
    /**
     * Asynchronously creates a #QrtrBus object.
     * 
     * This method will fail if the access to the QRTR bus is not possible, or if
     * the initial lookup doesn't finish on time.
     * 
     * When `lookup_timeout_ms` is 0, this method does not guarantee that the
     * initial bus lookup has already finished, the user should wait for the required
     * #QrtrBus::node-added and #QrtrNode::service-added signals before assuming the
     * nodes are accessible.
     * 
     * When the operation is finished, `callback` will be invoked. You can then call
     * qrtr_bus_new_finish() to get the result of the operation.
     * @param lookup_timeout_ms the timeout, in milliseconds, to wait for the initial bus   lookup to complete. A zero timeout disables the lookup.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the initialization is finished.
     */
    static new(lookup_timeout_ms: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Bus> | null): void
}

module Client {

    // Signal callback interfaces

    /**
     * Signal callback interface for `client-message`
     */
    interface ClientMessageSignalCallback {
        ($obj: Client, message: Uint8Array): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Qrtr-1.0.Qrtr.Client

        clientNode?: Node | null
        clientPort?: number | null
    }

}

interface Client extends Gio.Initable {

    // Own properties of Qrtr-1.0.Qrtr.Client

    readonly clientNode: Node
    readonly clientPort: number

    // Owm methods of Qrtr-1.0.Qrtr.Client

    /**
     * Get the #QrtrNode that this client refers to.
     * @returns a #QrtrNode that must be freed with g_object_unref().
     */
    get_node(): Node
    /**
     * Gets the node port where this client communicates.
     * @returns the node port.
     */
    get_port(): number
    /**
     * Get the #QrtrNode that this client refers to, without increasing the
     * reference count on the returned object.
     * @returns a #QrtrNode. Do not free the returned object, it is  owned by @self.
     */
    peek_node(): Node
    /**
     * Sends a message to the port at the node.
     * @param message the message.
     * @param cancellable a #GCancellable.
     * @returns %TRUE if the message is sent, or %FALSE if @error is set.
     */
    send(message: Uint8Array, cancellable: Gio.Cancellable | null): boolean

    // Own signals of Qrtr-1.0.Qrtr.Client

    connect(sigName: "client-message", callback: Client.ClientMessageSignalCallback): number
    connect_after(sigName: "client-message", callback: Client.ClientMessageSignalCallback): number
    emit(sigName: "client-message", message: Uint8Array, ...args: any[]): void

    // Class property signals of Qrtr-1.0.Qrtr.Client

    connect(sigName: "notify::client-node", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-node", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client-node", ...args: any[]): void
    connect(sigName: "notify::client-port", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-port", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client-port", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #QrtrClient structure contains private data and should only be accessed
 * using the provided API.
 * @class 
 */
class Client extends GObject.Object {

    // Own properties of Qrtr-1.0.Qrtr.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of Qrtr-1.0.Qrtr.Client

    constructor(config?: Client.ConstructorProperties) 
    /**
     * Creates a new #QrtrClient to communicate with `port` at #QrtrNode.
     * @constructor 
     * @param node a #QrtrNode.
     * @param port a node port.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns a newly allocated #QrtrClient, or %NULL if @error is set.
     */
    constructor(node: Node, port: number, cancellable: Gio.Cancellable | null) 
    /**
     * Creates a new #QrtrClient to communicate with `port` at #QrtrNode.
     * @constructor 
     * @param node a #QrtrNode.
     * @param port a node port.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns a newly allocated #QrtrClient, or %NULL if @error is set.
     */
    static new(node: Node, port: number, cancellable: Gio.Cancellable | null): Client
    _init(config?: Client.ConstructorProperties): void
}

module Node {

    // Signal callback interfaces

    /**
     * Signal callback interface for `node-removed`
     */
    interface NodeRemovedSignalCallback {
        ($obj: Node): void
    }

    /**
     * Signal callback interface for `service-added`
     */
    interface ServiceAddedSignalCallback {
        ($obj: Node, service: number): void
    }

    /**
     * Signal callback interface for `service-removed`
     */
    interface ServiceRemovedSignalCallback {
        ($obj: Node, service: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Qrtr-1.0.Qrtr.Node

        bus?: Bus | null
        nodeId?: number | null
    }

}

interface Node {

    // Own properties of Qrtr-1.0.Qrtr.Node

    readonly bus: Bus
    readonly nodeId: number

    // Owm methods of Qrtr-1.0.Qrtr.Node

    add_service_info(service: number, port: number, version: number, instance: number): void
    /**
     * Get the #QrtrBus where this node is available.
     * @returns a #QrtrBus that must be freed with g_object_unref().
     */
    get_bus(): Bus
    /**
     * Gets the node ID in the QRTR bus.
     * @returns the node id.
     */
    get_id(): number
    /**
     * Get the list of services currently supported by the #QrtrNode.
     * @returns a #GList of #QrtrNodeServiceInfo elements, that  must be freed with g_list_free_full() using qrtr_node_service_info_free()  as #GDestroyNotify.
     */
    get_service_info_list(): NodeServiceInfo[]
    /**
     * If a server has announced itself for the given node and service number,
     * return the port number of that service.
     * 
     * If multiple instances are registered, this method returns the port number
     * for the service with the highest version number.
     * @param service a service number.
     * @returns the port number of the service in the node, or -1 if not found.
     */
    lookup_port(service: number): number
    /**
     * If a server has announced itself for the given node and port number,
     * return the service it serves.
     * @param port a port number.
     * @returns the service number, or -1 if not found.
     */
    lookup_service(port: number): number
    /**
     * Get the #QrtrBus where this node is available, without increasing the
     * reference count on the returned object.
     * @returns a #QrtrBus. Do not free the returned object, it is  owned by @self.
     */
    peek_bus(): Bus
    /**
     * Get the list of services currently supported by the #QrtrNode.
     * @returns a #GList of #QrtrNodeServiceInfo elements. Do not  free the returned object, it is owned by @self.
     */
    peek_service_info_list(): NodeServiceInfo[]
    remove_service_info(service: number, port: number, version: number, instance: number): void
    /**
     * Asynchronously waits until all the services listed in `services` are present
     * on the node.
     * 
     * The operation may fail if any of the requested services isn't notified, or
     * if the node is removed from the bus while waiting.
     * 
     * When the operation is finished `callback` will be called. You can then call
     * qrtr_node_wait_for_services_finish() to get the result of the
     * operation.
     * @param services a #GArray of service types
     * @param timeout_ms the timeout, in milliseconds, to wait for the the services to  be exposed in the node.
     * @param cancellable a #GCancellable, or #NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    wait_for_services(services: number[], timeout_ms: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with qrtr_node_wait_for_services().
     * @param result a #GAsyncResult.
     * @returns %TRUE if all requested services are present on this node, or %FALSE if @error is set.
     */
    wait_for_services_finish(result: Gio.AsyncResult): boolean

    // Own signals of Qrtr-1.0.Qrtr.Node

    connect(sigName: "node-removed", callback: Node.NodeRemovedSignalCallback): number
    connect_after(sigName: "node-removed", callback: Node.NodeRemovedSignalCallback): number
    emit(sigName: "node-removed", ...args: any[]): void
    connect(sigName: "service-added", callback: Node.ServiceAddedSignalCallback): number
    connect_after(sigName: "service-added", callback: Node.ServiceAddedSignalCallback): number
    emit(sigName: "service-added", service: number, ...args: any[]): void
    connect(sigName: "service-removed", callback: Node.ServiceRemovedSignalCallback): number
    connect_after(sigName: "service-removed", callback: Node.ServiceRemovedSignalCallback): number
    emit(sigName: "service-removed", service: number, ...args: any[]): void

    // Class property signals of Qrtr-1.0.Qrtr.Node

    connect(sigName: "notify::bus", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bus", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bus", ...args: any[]): void
    connect(sigName: "notify::node-id", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-id", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #QrtrNode structure contains private data and should only be accessed
 * using the provided API.
 * @class 
 */
class Node extends GObject.Object {

    // Own properties of Qrtr-1.0.Qrtr.Node

    static name: string
    static $gtype: GObject.GType<Node>

    // Constructors of Qrtr-1.0.Qrtr.Node

    constructor(config?: Node.ConstructorProperties) 
    _init(config?: Node.ConstructorProperties): void
}

interface BusClass {

    // Own fields of Qrtr-1.0.Qrtr.BusClass

    parent: GObject.ObjectClass
}

abstract class BusClass {

    // Own properties of Qrtr-1.0.Qrtr.BusClass

    static name: string
}

interface BusPrivate {
}

class BusPrivate {

    // Own properties of Qrtr-1.0.Qrtr.BusPrivate

    static name: string
}

interface ClientClass {
}

abstract class ClientClass {

    // Own properties of Qrtr-1.0.Qrtr.ClientClass

    static name: string
}

interface ClientPrivate {
}

class ClientPrivate {

    // Own properties of Qrtr-1.0.Qrtr.ClientPrivate

    static name: string
}

interface NodeClass {
}

abstract class NodeClass {

    // Own properties of Qrtr-1.0.Qrtr.NodeClass

    static name: string
}

interface NodePrivate {
}

class NodePrivate {

    // Own properties of Qrtr-1.0.Qrtr.NodePrivate

    static name: string
}

interface NodeServiceInfo {

    // Owm methods of Qrtr-1.0.Qrtr.NodeServiceInfo

    /**
     * Frees a single #QrtrNodeServiceInfo, as returned by qrtr_node_get_service_info_list().
     */
    free(): void
    /**
     * Get the instance number from the #QrtrNodeServiceInfo.
     * @returns the instance number.
     */
    get_instance(): number
    /**
     * Get the port number from the #QrtrNodeServiceInfo.
     * @returns the port number.
     */
    get_port(): number
    /**
     * Get the service number from the #QrtrNodeServiceInfo.
     * @returns the service number.
     */
    get_service(): number
    /**
     * Get the version number from the #QrtrNodeServiceInfo.
     * @returns the version number.
     */
    get_version(): number
}

/**
 * Information for a service instance in the #QrtrNode.
 * @record 
 */
class NodeServiceInfo {

    // Own properties of Qrtr-1.0.Qrtr.NodeServiceInfo

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

export default Qrtr;
// END