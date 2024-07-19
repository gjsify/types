/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

/**
 * Keybinder-0.0
 */

export namespace Keybinder {
    /**
     * Grab a key combination globally and register a callback to be called each
     * time the key combination is pressed.
     * @param keystring an accelerator description (gtk_accelerator_parse() format)
     * @param handler callback function
     * @param notify called when @handler is unregistered
     * @returns %TRUE if the accelerator could be grabbed
     */
    function bind(keystring: string, handler: Handler, notify?: GLib.DestroyNotify | null): boolean;
    function get_current_event_time(): number;
    /**
     * Initialize the keybinder library.
     *
     * This function must be called after initializing GTK, before calling any
     * other function in the library. Can only be called once.
     */
    function init(): void;
    /**
     * Unregister all previously bound callbacks for this keystring.
     * @param keystring an accelerator description (gtk_accelerator_parse() format)
     */
    function unbind(keystring: string): void;
    interface Handler {
        (keystring: string): void;
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

export default Keybinder;
// END
