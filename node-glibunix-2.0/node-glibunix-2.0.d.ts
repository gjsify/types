
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-glibunix-2.0-import.d.ts';
    
/**
 * GLibUnix-2.0
 */

import type GLib from '@girs/node-glib-2.0';
import type GObject from '@girs/node-gobject-2.0';

export namespace GLibUnix {

/**
 * Mnemonic constants for the ends of a Unix pipe.
 */
enum PipeEnd {
    /**
     * The readable file descriptor 0
     */
    READ,
    /**
     * The writable file descriptor 1
     */
    WRITE,
}
function closefrom(lowfd: number): number
function errorQuark(): GLib.Quark
function fdAddFull(priority: number, fd: number, condition: GLib.IOCondition, function_: GLib.UnixFDSourceFunc): number
function fdSourceNew(fd: number, condition: GLib.IOCondition): GLib.Source
function fdwalkSetCloexec(lowfd: number): number
function getPasswdEntry(userName: string): any | null
function openPipe(fds: number, flags: number): boolean
function setFdNonblocking(fd: number, nonblock: boolean): boolean
function signalAddFull(priority: number, signum: number, handler: GLib.SourceFunc): number
function signalSourceNew(signum: number): GLib.Source
/**
 * The type of functions to be called when a UNIX fd watch source
 * triggers.
 * @callback 
 * @param fd the fd that triggered the event
 * @param condition the IO conditions reported on `fd`
 * @returns %FALSE if the source should be removed
 */
interface FDSourceFunc {
    (fd: number, condition: GLib.IOCondition): boolean
}
interface Pipe {

    // Own fields of GLibUnix-2.0.GLibUnix.Pipe

    /**
     * A pair of file descriptors, each negative if closed or not yet opened.
     *  The file descriptor with index %G_UNIX_PIPE_END_READ is readable.
     *  The file descriptor with index %G_UNIX_PIPE_END_WRITE is writable.
     * @field 
     */
    fds: number[]
}

/**
 * A Unix pipe. The advantage of this type over `int[2]` is that it can
 * be closed automatically when it goes out of scope, using `g_auto(GUnixPipe)`,
 * on compilers that support that feature.
 * @record 
 */
class Pipe {

    // Own properties of GLibUnix-2.0.GLibUnix.Pipe

    static name: string
}

}

export default GLibUnix;
// END