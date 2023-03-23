
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
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
interface Connection {
}

class Connection {

    // Own properties of DBus-1.0.DBus.Connection

    static name: string
}

interface Error {
}

class Error {

    // Own properties of DBus-1.0.DBus.Error

    static name: string
}

interface Message {
}

class Message {

    // Own properties of DBus-1.0.DBus.Message

    static name: string
}

interface MessageIter {
}

class MessageIter {

    // Own properties of DBus-1.0.DBus.MessageIter

    static name: string
}

interface PendingCall {
}

class PendingCall {

    // Own properties of DBus-1.0.DBus.PendingCall

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

export default DBus;
// END