/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gupnpigd-1.0-ambient.d.ts';
import './gupnpigd-1.0-import.d.ts';
/**
 * GUPnPIgd-1.0
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace GUPnPIgd {
    /**
     * Errors coming out of the GUPnPSimpleIGD object.
     */
    enum SimpleIgdError {
        /**
         * Error getting the external
         * address of the router
         */
        SIMPLE_IGD_ERROR_EXTERNAL_ADDRESS,
    }
    module SimpleIgd {
        // Signal callback interfaces

        interface ContextAvailable {
            (context: GObject.Object): boolean;
        }

        interface ErrorMappingPort {
            (
                error: GLib.Error,
                proto: string,
                external_port: number,
                local_ip: string,
                local_port: number,
                description: string,
            ): void;
        }

        interface MappedExternalPort {
            (
                proto: string,
                external_ip: string,
                replaces_external_ip: string,
                external_port: number,
                local_ip: string,
                local_port: number,
                description: string,
            ): void;
        }

        // Constructor properties interface
    }

    /**
     * All members are private, access them using methods and properties
     */
    class SimpleIgd extends GObject.Object {
        // Own properties of GUPnPIgd-1.0.SimpleIgd

        readonly main_context: any;
        readonly mainContext: any;

        // Constructors of GUPnPIgd-1.0.SimpleIgd

        static ['new'](): SimpleIgd;

        // Owm methods of GUPnPIgd-1.0.SimpleIgd

        static error_quark(): GLib.Quark;

        // Owm methods of GUPnPIgd-1.0.SimpleIgd

        /**
         * This adds a port to the router's forwarding table. The mapping will
         * be automatically refreshed by this object until it is either
         * removed with gupnp_simple_igd_remove_port(),
         * gupnp_simple_igd_remove_port_local() or the object disapears.
         *
         * If there is a problem, the #GUPnPSimpleIgd::error-mapping-port signal will
         * be emitted. If a router is found and a port is mapped correctly,
         * #GUPnPSimpleIgd::mapped-external-port will be emitted. These signals may
         * be emitted multiple times if there are multiple routers present.
         * @param protocol the protocol "UDP" or "TCP"
         * @param external_port The port to try to open on the external device,   0 means to try a random port if the same port as the local port is already   taken
         * @param local_ip The IP address to forward packets to (most likely the local ip address)
         * @param local_port The local port to forward packets to
         * @param lease_duration The duration of the lease (it will be auto-renewed before it expires). This is in seconds.
         * @param description The description that will appear in the router's table
         */
        add_port(
            protocol: string,
            external_port: number,
            local_ip: string,
            local_port: number,
            lease_duration: number,
            description: string,
        ): void;
        /**
         * Removes all mappings and prevents other from being formed
         * Should only be called by the dispose function of subclasses
         * @returns %TRUE if the object can be disposed, %FALSE otherwise
         */
        delete_all_mappings(): boolean;
        /**
         * This tries to remove a port entry from the routers that was previously added
         * with gupnp_simple_igd_add_port(). There is no indicated of success or failure
         * it is a best effort mechanism. If it fails, the bindings will disapears after
         * the lease duration set when the port where added.
         * @param protocol the protocol "UDP" or "TCP" as given to  gupnp_simple_igd_add_port()
         * @param external_port The port to try to open on the external device as given to  gupnp_simple_igd_add_port()
         */
        remove_port(protocol: string, external_port: number): void;
        /**
         * This tries to remove a port entry from the routers that was previously added
         * with gupnp_simple_igd_add_port(). There is no indicated of success or failure
         * it is a best effort mechanism. If it fails, the bindings will disapears after
         * the lease duration set when the port where added.
         * @param protocol the protocol "UDP" or "TCP" as given to  gupnp_simple_igd_add_port()
         * @param local_ip The local ip on the internal device as was to  gupnp_simple_igd_add_port()
         * @param local_port The port to try to open on the internal device as given to  gupnp_simple_igd_add_port()
         */
        remove_port_local(protocol: string, local_ip: string, local_port: number): void;
    }

    module SimpleIgdThread {
        // Constructor properties interface
    }

    /**
     * All members are private, access them using methods and properties
     */
    class SimpleIgdThread extends SimpleIgd {
        // Constructors of GUPnPIgd-1.0.SimpleIgdThread

        static ['new'](): SimpleIgdThread;
    }

    class SimpleIgdClass {}

    class SimpleIgdPrivate {}

    /**
     * The Raw UDP component transmitter class
     */
    class SimpleIgdThreadClass {}

    class SimpleIgdThreadPrivate {}

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

export default GUPnPIgd;
// END
