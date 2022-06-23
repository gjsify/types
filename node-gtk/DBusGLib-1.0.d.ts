// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * DBusGLib-1.0
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace DBusGLib {

interface Proxy_ConstructProps extends GObject.Object_ConstructProps {
}

interface Proxy {

    // Class property signals of DBusGLib-1.0.DBusGLib.Proxy

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Proxy extends GObject.Object {

    // Own properties of DBusGLib-1.0.DBusGLib.Proxy

    static name: string
    static $gtype: GObject.GType<Proxy>

    // Constructors of DBusGLib-1.0.DBusGLib.Proxy

    constructor(config?: Proxy_ConstructProps) 
    _init(config?: Proxy_ConstructProps): void
}

interface Connection {
}

class Connection {

    // Own properties of DBusGLib-1.0.DBusGLib.Connection

    static name: string
}

interface MethodInvocation {
}

class MethodInvocation {

    // Own properties of DBusGLib-1.0.DBusGLib.MethodInvocation

    static name: string
}

interface ProxyClass {
}

class ProxyClass {

    // Own properties of DBusGLib-1.0.DBusGLib.ProxyClass

    static name: string
}

}
export default DBusGLib;