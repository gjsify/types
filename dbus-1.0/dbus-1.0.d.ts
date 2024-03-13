/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './dbus-1.0-ambient.d.ts';

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
    class Connection {
        // Constructors of DBus.Connection

        _init(...args: any[]): void;
    }

    class Error {
        // Constructors of DBus.Error

        _init(...args: any[]): void;
    }

    class Message {
        // Constructors of DBus.Message

        _init(...args: any[]): void;
    }

    class MessageIter {
        // Constructors of DBus.MessageIter

        _init(...args: any[]): void;
    }

    class PendingCall {
        // Constructors of DBus.PendingCall

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

export default DBus;
// END
