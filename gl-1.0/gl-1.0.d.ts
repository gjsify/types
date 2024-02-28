/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gl-1.0-ambient.d.ts';
import './gl-1.0-import.d.ts';
/**
 * GL-1.0
 */

import type GObject from '@girs/gobject-2.0';

export namespace GL {
    function InitNames(): void;
    class bitfield {}

    class charARB {}

    class clampf {}

    class __boolean {}

    class __enum {}

    class float {}

    class handleARB {}

    class int {}

    class intptr {}

    class sizei {}

    class sizeiptr {}

    class uint {}

    class __void {}

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

export default GL;
// END
