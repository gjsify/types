
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
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
const BUS_LOOKUP_TIMEOUT: string | null
/**
 * Symbol defining the #QrtrBus::node-added signal.
 */
const BUS_SIGNAL_NODE_ADDED: string | null
/**
 * Symbol defining the #QrtrBus::node-removed signal.
 */
const BUS_SIGNAL_NODE_REMOVED: string | null
/**
 * The QRTR node this client refers to.
 */
const CLIENT_NODE: string | null
/**
 * The QRTR node port this client refers to.
 */
const CLIENT_PORT: string | null
/**
 * Symbol defining the #QrtrClient::client-message signal.
 */
const CLIENT_SIGNAL_MESSAGE: string | null
/**
 * The QRTR bus.
 */
const NODE_BUS: string | null
/**
 * The node id.
 */
const NODE_ID: string | null
/**
 * Symbol defining the #QrtrNode::node-removed signal.
 */
const NODE_SIGNAL_REMOVED: string | null
/**
 * Symbol defining the #QrtrNode::service-added signal.
 */
const NODE_SIGNAL_SERVICE_ADDED: string | null
/**
 * Symbol defining the #QrtrNode::service-removed signal.
 */
const NODE_SIGNAL_SERVICE_REMOVED: string | null
/**
 * Get the QRTR node id from the specified URI.
 * @param uri a URI.
 * @param nodeId return location for the node id.
 * @returns %TRUE if @node_id is set, %FALSE otherwise.
 */
function getNodeForUri(uri: string | null, nodeId: number): boolean
/**
 * Build a URI for the given QRTR node.
 * @param nodeId node id.
 * @returns a string with the URI, or %NULL if none given. The returned value  should be freed with g_free().
 */
function getUriForNode(nodeId: number): string | null
module Bus {

    // Signal callback interfaces

    /**
     * Signal callback interface for `node-added`
     */
    interface NodeAddedSignalCallback {
        (node: number): void
    }

    /**
     * Signal callback interface for `node-removed`
     */
    interface NodeRemovedSignalCallback {
        (node: number): void
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
    __gtype__: number

    // Owm methods of Qrtr-1.0.Qrtr.Bus

    /**
     * Get the #QrtrNode with node ID `node_id`.
     * 
     * This method will fail if there is no node with the given `node_id` in the QRTR bus.
     * @param nodeId the QRTR bus node ID to get
     * @returns a #QrtrNode that must be freed with g_object_unref(),  or %NULL if none available
     */
    getNode(nodeId: number): Node
    /**
     * Gets a list of all the #QrtrNode objects in the bus.
     * @returns a list of  #QrtrNode elements. The caller should free the result by using  g_list_free_full() with g_object_unref() as #GDestroyNotify.
     */
    getNodes(): Node[] | null
    /**
     * Get the #QrtrNode with node ID `node_id,` without increasing the reference count
     * on the returned object.
     * 
     * This method will fail if there is no node with the given `node_id` in the QRTR bus.
     * @param nodeId the QRTR bus node ID to get
     * @returns a #QrtrNode, or %NULL if none available.  Do not free the returned object, it is owned by @self.
     */
    peekNode(nodeId: number): Node
    /**
     * Gets a list of all the #QrtrNode objects in the bus, without increasing
     * the reference count on the returned object or the list.
     * @returns a list of  #QrtrNode elements. The caller should not free the result, it is  owned by @self.
     */
    peekNodes(): Node[] | null
    /**
     * Asynchronously waits for the node with ID `node_id`.
     * 
     * When the operation is finished `callback` will be called. You can then call
     * qrtr_bus_wait_for_node_finish() to get the result of the
     * operation.
     * @param nodeId the QRTR bus node ID to lookup.
     * @param timeoutMs the timeout, in milliseconds, to wait for the node to appear in  the bus.
     * @param cancellable a #GCancellable, or #NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    waitForNode(nodeId: number, timeoutMs: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with qrtr_bus_wait_for_node().
     * @param res a #GAsyncResult.
     * @returns A #QrtrNode, or %NULL if @error is set.
     */
    waitForNodeFinish(res: Gio.AsyncResult): Node

    // Own signals of Qrtr-1.0.Qrtr.Bus

    connect(sigName: "node-added", callback: Bus.NodeAddedSignalCallback): number
    on(sigName: "node-added", callback: Bus.NodeAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-added", callback: Bus.NodeAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-added", callback: Bus.NodeAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "node-added", ...args: any[]): void
    connect(sigName: "node-removed", callback: Bus.NodeRemovedSignalCallback): number
    on(sigName: "node-removed", callback: Bus.NodeRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-removed", callback: Bus.NodeRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-removed", callback: Bus.NodeRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "node-removed", ...args: any[]): void

    // Class property signals of Qrtr-1.0.Qrtr.Bus

    connect(sigName: "notify::lookup-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::lookup-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::lookup-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::lookup-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::lookup-timeout", ...args: any[]): void
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

/**
 * The #QrtrBus structure contains private data and should only be accessed
 * using the provided API.
 * @class 
 */
class Bus extends GObject.Object {

    // Own properties of Qrtr-1.0.Qrtr.Bus

    static name: string

    // Constructors of Qrtr-1.0.Qrtr.Bus

    constructor(config?: Bus.ConstructorProperties) 
    /**
     * Finishes an operation started with qrtr_bus_new().
     * @constructor 
     * @param res a #GAsyncResult.
     * @returns A newly created #QrtrBus, or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): Bus
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
     * @param lookupTimeoutMs the timeout, in milliseconds, to wait for the initial bus   lookup to complete. A zero timeout disables the lookup.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the initialization is finished.
     */
    static new(lookupTimeoutMs: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

module Client {

    // Signal callback interfaces

    /**
     * Signal callback interface for `client-message`
     */
    interface ClientMessageSignalCallback {
        (message: Uint8Array): void
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
    __gtype__: number

    // Owm methods of Qrtr-1.0.Qrtr.Client

    /**
     * Get the #QrtrNode that this client refers to.
     * @returns a #QrtrNode that must be freed with g_object_unref().
     */
    getNode(): Node
    /**
     * Gets the node port where this client communicates.
     * @returns the node port.
     */
    getPort(): number
    /**
     * Get the #QrtrNode that this client refers to, without increasing the
     * reference count on the returned object.
     * @returns a #QrtrNode. Do not free the returned object, it is  owned by @self.
     */
    peekNode(): Node
    /**
     * Sends a message to the port at the node.
     * @param message the message.
     * @param cancellable a #GCancellable.
     * @returns %TRUE if the message is sent, or %FALSE if @error is set.
     */
    send(message: Uint8Array, cancellable: Gio.Cancellable | null): boolean

    // Own signals of Qrtr-1.0.Qrtr.Client

    connect(sigName: "client-message", callback: Client.ClientMessageSignalCallback): number
    on(sigName: "client-message", callback: Client.ClientMessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "client-message", callback: Client.ClientMessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "client-message", callback: Client.ClientMessageSignalCallback): NodeJS.EventEmitter
    emit(sigName: "client-message", ...args: any[]): void

    // Class property signals of Qrtr-1.0.Qrtr.Client

    connect(sigName: "notify::client-node", callback: (...args: any[]) => void): number
    on(sigName: "notify::client-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::client-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::client-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::client-node", ...args: any[]): void
    connect(sigName: "notify::client-port", callback: (...args: any[]) => void): number
    on(sigName: "notify::client-port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::client-port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::client-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::client-port", ...args: any[]): void
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

/**
 * The #QrtrClient structure contains private data and should only be accessed
 * using the provided API.
 * @class 
 */
class Client extends GObject.Object {

    // Own properties of Qrtr-1.0.Qrtr.Client

    static name: string

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
        (): void
    }

    /**
     * Signal callback interface for `service-added`
     */
    interface ServiceAddedSignalCallback {
        (service: number): void
    }

    /**
     * Signal callback interface for `service-removed`
     */
    interface ServiceRemovedSignalCallback {
        (service: number): void
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
    __gtype__: number

    // Owm methods of Qrtr-1.0.Qrtr.Node

    addServiceInfo(service: number, port: number, version: number, instance: number): void
    /**
     * Get the #QrtrBus where this node is available.
     * @returns a #QrtrBus that must be freed with g_object_unref().
     */
    getBus(): Bus
    /**
     * Gets the node ID in the QRTR bus.
     * @returns the node id.
     */
    getId(): number
    /**
     * Get the list of services currently supported by the #QrtrNode.
     * @returns a #GList of #QrtrNodeServiceInfo elements, that  must be freed with g_list_free_full() using qrtr_node_service_info_free()  as #GDestroyNotify.
     */
    getServiceInfoList(): NodeServiceInfo[]
    /**
     * If a server has announced itself for the given node and service number,
     * return the port number of that service.
     * 
     * If multiple instances are registered, this method returns the port number
     * for the service with the highest version number.
     * @param service a service number.
     * @returns the port number of the service in the node, or -1 if not found.
     */
    lookupPort(service: number): number
    /**
     * If a server has announced itself for the given node and port number,
     * return the service it serves.
     * @param port a port number.
     * @returns the service number, or -1 if not found.
     */
    lookupService(port: number): number
    /**
     * Get the #QrtrBus where this node is available, without increasing the
     * reference count on the returned object.
     * @returns a #QrtrBus. Do not free the returned object, it is  owned by @self.
     */
    peekBus(): Bus
    /**
     * Get the list of services currently supported by the #QrtrNode.
     * @returns a #GList of #QrtrNodeServiceInfo elements. Do not  free the returned object, it is owned by @self.
     */
    peekServiceInfoList(): NodeServiceInfo[]
    removeServiceInfo(service: number, port: number, version: number, instance: number): void
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
     * @param timeoutMs the timeout, in milliseconds, to wait for the the services to  be exposed in the node.
     * @param cancellable a #GCancellable, or #NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    waitForServices(services: number[], timeoutMs: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with qrtr_node_wait_for_services().
     * @param result a #GAsyncResult.
     * @returns %TRUE if all requested services are present on this node, or %FALSE if @error is set.
     */
    waitForServicesFinish(result: Gio.AsyncResult): boolean

    // Own signals of Qrtr-1.0.Qrtr.Node

    connect(sigName: "node-removed", callback: Node.NodeRemovedSignalCallback): number
    on(sigName: "node-removed", callback: Node.NodeRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-removed", callback: Node.NodeRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-removed", callback: Node.NodeRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "node-removed", ...args: any[]): void
    connect(sigName: "service-added", callback: Node.ServiceAddedSignalCallback): number
    on(sigName: "service-added", callback: Node.ServiceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-added", callback: Node.ServiceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-added", callback: Node.ServiceAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "service-added", ...args: any[]): void
    connect(sigName: "service-removed", callback: Node.ServiceRemovedSignalCallback): number
    on(sigName: "service-removed", callback: Node.ServiceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-removed", callback: Node.ServiceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-removed", callback: Node.ServiceRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "service-removed", ...args: any[]): void

    // Class property signals of Qrtr-1.0.Qrtr.Node

    connect(sigName: "notify::bus", callback: (...args: any[]) => void): number
    on(sigName: "notify::bus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bus", ...args: any[]): void
    connect(sigName: "notify::node-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::node-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node-id", ...args: any[]): void
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

/**
 * The #QrtrNode structure contains private data and should only be accessed
 * using the provided API.
 * @class 
 */
class Node extends GObject.Object {

    // Own properties of Qrtr-1.0.Qrtr.Node

    static name: string

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
    getInstance(): number
    /**
     * Get the port number from the #QrtrNodeServiceInfo.
     * @returns the port number.
     */
    getPort(): number
    /**
     * Get the service number from the #QrtrNodeServiceInfo.
     * @returns the service number.
     */
    getService(): number
    /**
     * Get the version number from the #QrtrNodeServiceInfo.
     * @returns the version number.
     */
    getVersion(): number
}

/**
 * Information for a service instance in the #QrtrNode.
 * @record 
 */
class NodeServiceInfo {

    // Own properties of Qrtr-1.0.Qrtr.NodeServiceInfo

    static name: string
}

}

export default Qrtr;