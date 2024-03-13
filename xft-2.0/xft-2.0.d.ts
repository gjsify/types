/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './xft-2.0-ambient.d.ts';
import './xft-2.0-import.d.ts';
/**
 * xft-2.0
 */

import type xlib from '@girs/xlib-2.0';
import type GObject from '@girs/gobject-2.0';

export namespace xft {
    function init(): void;
    class Color {
        // Constructors of xft.Color

        _init(...args: any[]): void;
    }

    class Draw {
        // Constructors of xft.Draw

        _init(...args: any[]): void;
    }

    class Font {
        // Constructors of xft.Font

        _init(...args: any[]): void;
    }

    class GlyphSpec {
        // Constructors of xft.GlyphSpec

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

export default xft;
// END
