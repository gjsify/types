/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './dbus-1.0-ambient.d.ts';
import './dbus-1.0-import.d.ts';
/**
 * DBus-1.0
 */

import type GObject from '@girs/gobject-2.0';

export namespace DBus {
    enum BusType {
        SESSION,
        SYSTEM,
        STARTER,
    }
    class Connection {}

    class Error {}

    class Message {}

    class MessageIter {}

    class PendingCall {}

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

export default DBus;
// END
