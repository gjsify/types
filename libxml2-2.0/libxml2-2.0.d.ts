/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './libxml2-2.0-ambient.d.ts';
import './libxml2-2.0-import.d.ts';
/**
 * libxml2-2.0
 */

import type GObject from '@girs/gobject-2.0';

export namespace libxml2 {
    function dummy(): void;
    class Node {}

    class NodePtr {}

    class Doc {}

    class DocPtr {}

    class NsPtr {}

    class Char {}

    class TextWriter {}

    class TextReader {}

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

export default libxml2;
// END
