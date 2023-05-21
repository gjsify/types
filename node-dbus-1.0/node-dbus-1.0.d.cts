
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-dbus-1.0-import.d.ts';
    
/**
 * DBus-1.0
 */

import type GObject from '@girs/node-gobject-2.0';

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

// END