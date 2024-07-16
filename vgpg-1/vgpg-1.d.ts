/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

/**
 * Vgpg-1
 */

import type Vda from '@girs/vda-1';
import type GCalc from '@girs/gcalc-2';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gee from '@girs/gee-0.8';
import type Json from '@girs/json-1.0';
import type GXml from '@girs/gxml-0.20';
import type libxml2 from '@girs/libxml2-2.0';
import type Vgda from '@girs/vgda-1';

export namespace Vgpg {
    module Connection {
        // Constructor properties interface

        interface ConstructorProps extends Vgda.GProvider.ConstructorProps {}
    }

    class Connection extends Vgda.GProvider {
        static $gtype: GObject.GType<Connection>;

        // Constructors of Vgpg.Connection

        constructor(properties?: Partial<Connection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Connection;

        // Own methods of Vgpg.Connection

        current_user(): Vda.Role;
    }

    type ConnectionClass = typeof Connection;
    abstract class ConnectionPrivate {
        static $gtype: GObject.GType<ConnectionPrivate>;

        // Constructors of Vgpg.ConnectionPrivate

        _init(...args: any[]): void;
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

export default Vgpg;
// END
