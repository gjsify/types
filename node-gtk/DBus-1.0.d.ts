/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * DBus-1.0
 */

import type GObject from './GObject-2.0';

export namespace DBus {

enum BusType {
    SESSION,
    SYSTEM,
    STARTER,
}
class Connection {
    static name: string
}
class Error {
    static name: string
}
class Message {
    static name: string
}
class MessageIter {
    static name: string
}
class PendingCall {
    static name: string
}
}
export default DBus;