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
import type GObject from '@girs/gobject-2.0';

export namespace fontconfig {
    /**
     * fontconfig-2.0
     */

    function init(): void;
    class Pattern {
        static $gtype: GObject.GType<Pattern>;

        // Constructors

        _init(...args: any[]): void;
    }

    class CharSet {
        static $gtype: GObject.GType<CharSet>;

        // Constructors

        _init(...args: any[]): void;
    }

    class Config {
        static $gtype: GObject.GType<Config>;

        // Constructors

        _init(...args: any[]): void;
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

export default fontconfig;

// END
