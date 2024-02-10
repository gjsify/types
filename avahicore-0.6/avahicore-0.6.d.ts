/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './avahicore-0.6-ambient.d.ts';
import './avahicore-0.6-import.d.ts';
/**
 * AvahiCore-0.6
 */

import type GObject from '@girs/gobject-2.0';

export namespace AvahiCore {
    enum Protocol {
        INET,
        INET6,
        UNSPEC,
    }
    function server_get_host_name(): string;
    enum PublishFlags {
        UNIQUE,
        NO_PROBE,
        NO_ANNOUNCE,
        ALLOW_MULTIPLE,
        NO_REVERSE,
        NO_COOKIE,
        UPDATE,
        USE_WIDE_AREA,
        USE_MULTICAST,
    }
    class StringList {}

    class Address {}

    class Client {}

    type IfIndex = number;
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

export default AvahiCore;
// END
