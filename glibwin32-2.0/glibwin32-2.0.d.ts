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

export namespace GLibWin32 {
    /**
     * GLibWin32-2.0
     */

    /**
     * Type of Windows edition to check for at run-time.
     * @gir-type Enum
     */
    enum OSType {
        /**
         * The running system can be a workstation or a server edition of
         *  Windows.  The type of the running system is therefore not checked.
         */
        ANY,
        /**
         * The running system is a workstation edition of Windows,
         *  such as Windows 7 Professional.
         */
        WORKSTATION,
        /**
         * The running system is a server edition of Windows, such as
         *  Windows Server 2008 R2.
         */
        SERVER,
    }

    /**
     * @param major
     * @param minor
     * @param spver
     * @param os_type
     */
    function check_windows_version(major: number, minor: number, spver: number, os_type: OSType | null): boolean;
    /**
     * @param error
     */
    function error_message(error: number): string;
    /**
     * @param f
     * @param size
     */
    function ftruncate(f: number, size: number): number;
    /**
     * @param _package
     * @param dll_name
     */
    function get_package_installation_directory(_package: string, dll_name: string): string;
    /**
     * @param hmodule
     */
    function get_package_installation_directory_of_module(hmodule?: any | null): string;
    /**
     * @param _package
     * @param dll_name
     * @param subdir
     */
    function get_package_installation_subdirectory(_package: string, dll_name: string, subdir: string): string;
    function get_windows_version(): number;
    function getlocale(): string;
    /**
     * @param utf8filename
     */
    function locale_filename_from_utf8(utf8filename: string): string;
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

export default GLibWin32;

// END
