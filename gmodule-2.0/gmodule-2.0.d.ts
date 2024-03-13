
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gmodule-2.0-ambient.d.ts';
import './gmodule-2.0-import.d.ts';
/**
 * GModule-2.0
 */

import type GLib from '@girs/glib-2.0';
import type GObject from '@girs/gobject-2.0';

export namespace GModule {

/**
 * Errors returned by g_module_open_full().
 */
class ModuleError extends GLib.Error {

    // Static fields of GModule.ModuleError

/**
 * there was an error loading or opening a module file
 */
static FAILED: number
/**
 * a module returned an error from its `g_module_check_init()` function
 */
static CHECK_FAILED: number

    // Constructors of GModule.ModuleError

constructor(options: { message: string, code: number});
_init(...args: any[]): void;

}

/**
 * A portable way to build the filename of a module. The platform-specific
 * prefix and suffix are added to the filename, if needed, and the result
 * is added to the directory, using the correct separator character.
 * 
 * The directory should specify the directory where the module can be found.
 * It can be %NULL or an empty string to indicate that the module is in a
 * standard platform-specific directory, though this is not recommended
 * since the wrong module may be found.
 * 
 * For example, calling g_module_build_path() on a Linux system with a
 * `directory` of `/lib` and a `module_name` of "mylibrary" will return
 * `/lib/libmylibrary.so`. On a Windows system, using `\Windows` as the
 * directory it will return `\Windows\mylibrary.dll`.
 * @param directory the directory where the module is. This can be     %NULL or the empty string to indicate that the standard platform-specific     directories will be used, though that is not recommended
 * @param module_name the name of the module
 * @returns the complete path of the module, including the standard library     prefix and suffix. This should be freed when no longer needed
 */
function module_build_path(directory: (string | null), module_name: string): string
/**
 * Gets a string describing the last module error.
 * @returns a string describing the last module error
 */
function module_error(): string
function module_error_quark(): GLib.Quark
/**
 * Checks if modules are supported on the current platform.
 * @returns %TRUE if modules are supported
 */
function module_supported(): boolean
interface ModuleCheckInit {
    (module: Module): string
}
interface ModuleUnload {
    (module: Module): void
}
/**
 * Flags passed to g_module_open().
 * Note that these flags are not supported on all platforms.
 */
enum ModuleFlags {
    /**
     * specifies that symbols are only resolved when
     *     needed. The default action is to bind all symbols when the module
     *     is loaded.
     */
    LAZY,
    /**
     * specifies that symbols in the module should
     *     not be added to the global name space. The default action on most
     *     platforms is to place symbols in the module in the global name space,
     *     which may cause conflicts with existing symbols.
     */
    LOCAL,
    /**
     * mask for all flags.
     */
    MASK,
}
/**
 * The #GModule struct is an opaque data structure to represent a
 * [dynamically-loaded module][glib-Dynamic-Loading-of-Modules].
 * It should only be accessed via the following functions.
 */
abstract class Module {

    // Constructors of GModule.Module

_init(...args: any[]): void;


    // Own static methods of GModule.Module

    /**
     * A portable way to build the filename of a module. The platform-specific
     * prefix and suffix are added to the filename, if needed, and the result
     * is added to the directory, using the correct separator character.
     * 
     * The directory should specify the directory where the module can be found.
     * It can be %NULL or an empty string to indicate that the module is in a
     * standard platform-specific directory, though this is not recommended
     * since the wrong module may be found.
     * 
     * For example, calling g_module_build_path() on a Linux system with a
     * `directory` of `/lib` and a `module_name` of "mylibrary" will return
     * `/lib/libmylibrary.so`. On a Windows system, using `\Windows` as the
     * directory it will return `\Windows\mylibrary.dll`.
     * @param directory the directory where the module is. This can be     %NULL or the empty string to indicate that the standard platform-specific     directories will be used, though that is not recommended
     * @param module_name the name of the module
     */
    static build_path(directory: (string | null), module_name: string): string
    /**
     * Gets a string describing the last module error.
     */
    static error(): string
    static error_quark(): GLib.Quark
    /**
     * Checks if modules are supported on the current platform.
     */
    static supported(): boolean

    // Own methods of GModule.Module

    /**
     * Closes a module.
     * @returns %TRUE on success
     */
    close(): boolean
    /**
     * Ensures that a module will never be unloaded.
     * Any future g_module_close() calls on the module will be ignored.
     */
    make_resident(): void
    /**
     * Returns the filename that the module was opened with.
     * 
     * If `module` refers to the application itself, "main" is returned.
     * @returns the filename of the module
     */
    name(): string
    /**
     * Gets a symbol pointer from a module, such as one exported
     * by %G_MODULE_EXPORT. Note that a valid symbol can be %NULL.
     * @param symbol_name the name of the symbol to find
     * @returns %TRUE on success
     */
    symbol(symbol_name: string): [boolean, any]
}

/**
 * Name of the imported GIR library
 * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default GModule;
// END