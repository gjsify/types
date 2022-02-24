/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GModule-2.0
 */

import type GLib from './GLib-2.0';
import type GObject from './GObject-2.0';

export namespace GModule {

/**
 * Errors returned by g_module_open_full().
 */
enum ModuleError {
    /**
     * there was an error loading or opening a module file
     */
    FAILED,
    /**
     * a module returned an error from its `g_module_check_init()` function
     */
    CHECK_FAILED,
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
function moduleBuildPath(directory: string | null, moduleName: string): string
function moduleError(): string
function moduleErrorQuark(): GLib.Quark
function moduleSupported(): boolean
/**
 * Specifies the type of the module initialization function.
 * If a module contains a function named g_module_check_init() it is called
 * automatically when the module is loaded. It is passed the #GModule structure
 * and should return %NULL on success or a string describing the initialization
 * error.
 */
interface ModuleCheckInit {
    (module: Module): string
}
/**
 * Specifies the type of the module function called when it is unloaded.
 * If a module contains a function named g_module_unload() it is called
 * automatically when the module is unloaded.
 * It is passed the #GModule structure.
 */
interface ModuleUnload {
    (module: Module): void
}
class Module {
    /* Methods of GModule-2.0.GModule.Module */
    /**
     * Closes a module.
     */
    close(): boolean
    /**
     * Ensures that a module will never be unloaded.
     * Any future g_module_close() calls on the module will be ignored.
     */
    makeResident(): void
    /**
     * Returns the filename that the module was opened with.
     * 
     * If `module` refers to the application itself, "main" is returned.
     */
    name(): string
    /**
     * Gets a symbol pointer from a module, such as one exported
     * by #G_MODULE_EXPORT. Note that a valid symbol can be %NULL.
     */
    symbol(symbolName: string): [ /* returnType */ boolean, /* symbol */ object | null ]
    static name: string
    /* Static methods and pseudo-constructors */
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
     */
    static buildPath(directory: string | null, moduleName: string): string
    /**
     * Gets a string describing the last module error.
     */
    static error(): string
    static errorQuark(): GLib.Quark
    /**
     * Checks if modules are supported on the current platform.
     */
    static supported(): boolean
}
}
export default GModule;