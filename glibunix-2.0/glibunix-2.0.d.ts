/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type GLib from '@girs/glib-2.0';
import type GObject from '@girs/gobject-2.0';

export namespace GLibUnix {
    /**
     * GLibUnix-2.0
     */

    /**
     * Mnemonic constants for the ends of a Unix pipe.
     * @gir-type Enum
     * @since 2.80
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

    /**
     * @param lowfd
     */
    function closefrom(lowfd: number): number;
    function error_quark(): GLib.Quark;
    /**
     * @param priority
     * @param fd
     * @param condition
     * @param _function
     */
    function fd_add_full(priority: number, fd: number, condition: GLib.IOCondition | null, _function: never): number;
    /**
     * @param fd
     * @param condition
     */
    function fd_source_new(fd: number, condition: GLib.IOCondition | null): GLib.Source;
    /**
     * @param lowfd
     */
    function fdwalk_set_cloexec(lowfd: number): number;
    /**
     * @param user_name
     */
    function get_passwd_entry(user_name: string): any | null;
    /**
     * @param fds
     * @param flags
     */
    function open_pipe(fds: number, flags: number): boolean;
    /**
     * @param fd
     * @param nonblock
     */
    function set_fd_nonblocking(fd: number, nonblock: boolean): boolean;
    /**
     * @param priority
     * @param signum
     * @param handler
     */
    function signal_add_full(priority: number, signum: number, handler: GLib.SourceFunc): number;
    /**
     * @param signum
     */
    function signal_source_new(signum: number): GLib.Source;
    /**
     * @gir-type Callback
     */
    interface FDSourceFunc {
        (fd: number, condition: GLib.IOCondition): boolean;
    }
    /**
     * A Unix pipe. The advantage of this type over `int[2]` is that it can
     * be closed automatically when it goes out of scope, using `g_auto(GUnixPipe)`,
     * on compilers that support that feature.
     * @gir-type Struct
     * @since 2.80
     */
    class Pipe {
        static $gtype: GObject.GType<Pipe>;

        // Fields

        fds: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                fds: number[];
            }>,
        );
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

export default GLibUnix;

// END
