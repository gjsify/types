/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

/**
 * Keybinder-3.0
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

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
     * "Cooked" accelerators use symbols produced by using modifiers such
     * as shift or altgr, for example if "!" is produced by "Shift+1".
     *
     * If cooked accelerators are enabled, use "&lt;Ctrl&gt;exclam" to bind
     * "Ctrl+!" If disabled, use "&lt;Ctrl&gt;&lt;Shift&gt;1" to bind
     * "Ctrl+Shift+1". These two examples are not equal on all keymaps.
     *
     * The cooked accelerator keyvalue and modifiers are provided by the
     * function gdk_keymap_translate_keyboard_state()
     *
     * Cooked accelerators are useful if you receive keystrokes from GTK to bind,
     * but raw accelerators can be useful if you or the user inputs accelerators as
     * text.
     *
     * Default: Enabled. Should be set before binding anything.
     * @param use_cooked if %FALSE disable cooked accelerators
     */
    function set_use_cooked_accelerators(use_cooked: boolean): void;
    function supported(): boolean;
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
