
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * LibvirtGLib-1.0
 */

import type GLib from '@girs/glib-2.0';
import type GObject from '@girs/gobject-2.0';

/**
 * Creates a new #GError; unlike gvir_error_new(), `message` is
 * not a printf()-style format string. Use this function if
 * `message` contains text you don't have control over,
 * that could include printf() escape sequences.
 * @param domain error domain
 * @param code error code
 * @param message error message
 * @returns a new #GError
 */
export function error_new_literal(domain: GLib.Quark, code: number, message: string | null): GLib.Error
/**
 * Registers a libvirt event loop implementation that is backed
 * by the default <code>GMain</code> context. If invoked more
 * than once this method will be a no-op. Applications should,
 * however, take care not to register any another non-GLib
 * event loop with libvirt.
 * 
 * After invoking this method, it is mandatory to run the
 * default GMain event loop. Typically this can be satisfied
 * by invoking <code>gtk_main</code> or <code>g_application_run</code>
 * in the application's main thread. Failure to run the event
 * loop will mean no libvirt events get dispatched, and the
 * libvirt keepalive timer will kill off libvirt connections
 * frequently.
 */
export function event_register(): void
/**
 * Call this function before using any other Libvirt GLib functions in your applications.
 * It will initialize everything needed to operate the toolkit and parses some standard
 * command line options.
 * 
 * Although you are expected to pass the `argc,` `argv` parameters from main() to this
 * function, it is possible to pass NULL if `argv` is not available or commandline
 * handling is not required.
 * 
 * `argc` and `argv` are adjusted accordingly so your own code will never see those
 * standard arguments.
 * 
 * This method will also turn on debug logging of the library if the
 * <literal>LIBVIRT_GLIB_DEBUG</literal> environment variable is set.
 * 
 * This function will terminate your program if it was unable to initialize
 * for some reason. If you want the program to fall back to an alternate
 * mode of operation call <code>gvir_init_check</code> instead.
 * @param argv Address of the     <parameter>argv</parameter> parameter of main(), or %NULL. Any options     understood by GTK+ are stripped before return.
 */
export function init(argv: string[] | null): /* argv */ string[] | null
/**
 * This function does the same work as gvir_init() with only a single
 * change: It does not terminate the program if the Libvirt GLib library
 * can't be initialized. Instead it returns %FALSE on failure.
 * 
 * This way the application can fall back to some other mode of
 * operation.
 * @param argv Address of the     <parameter>argv</parameter> parameter of main(), or %NULL. Any options     understood by GTK+ are stripped before return.
 * @returns %TRUE if the library was successfully initialized,     %FALSE otherwise
 */
export function init_check(argv: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
/**
 * If `error` is NULL this does nothing. Otherwise it
 * creates a new #GError and stores it in `error;` unlike
 * gvir_set_error(), `message` is not a printf()-style
 * format string. Use this function if `message` contains
 * text you don't have control over, that could include
 * printf() escape sequences.
 * @param error pointer to error location
 * @param domain error domain
 * @param code error code
 * @param message error message
 */
export function set_error_literal(error: GLib.Error, domain: GLib.Quark, code: number, message: string | null): void
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