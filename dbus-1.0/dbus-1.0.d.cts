
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

export enum BusType {
    SESSION,
    SYSTEM,
    STARTER,
}
export interface Connection {
}

export class Connection {

    // Own properties of DBus-1.0.DBus.Connection

    static name: string
}

export interface Error {
}

export class Error {

    // Own properties of DBus-1.0.DBus.Error

    static name: string
}

export interface Message {
}

export class Message {

    // Own properties of DBus-1.0.DBus.Message

    static name: string
}

export interface MessageIter {
}

export class MessageIter {

    // Own properties of DBus-1.0.DBus.MessageIter

    static name: string
}

export interface PendingCall {
}

export class PendingCall {

    // Own properties of DBus-1.0.DBus.PendingCall

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END