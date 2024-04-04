/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './libxml2-2.0-ambient.d.ts';

/**
 * libxml2-2.0
 */

import type GObject from '@girs/gobject-2.0';

export namespace libxml2 {
    function dummy(): void;
    class Node {
        static $gtype: GObject.GType<Node>;

        // Constructors of libxml2.Node

        _init(...args: any[]): void;
    }

    class NodePtr {
        static $gtype: GObject.GType<NodePtr>;

        // Constructors of libxml2.NodePtr

        _init(...args: any[]): void;
    }

    class Doc {
        static $gtype: GObject.GType<Doc>;

        // Constructors of libxml2.Doc

        _init(...args: any[]): void;
    }

    class DocPtr {
        static $gtype: GObject.GType<DocPtr>;

        // Constructors of libxml2.DocPtr

        _init(...args: any[]): void;
    }

    class NsPtr {
        static $gtype: GObject.GType<NsPtr>;

        // Constructors of libxml2.NsPtr

        _init(...args: any[]): void;
    }

    class Char {
        static $gtype: GObject.GType<Char>;

        // Constructors of libxml2.Char

        _init(...args: any[]): void;
    }

    class TextWriter {
        static $gtype: GObject.GType<TextWriter>;

        // Constructors of libxml2.TextWriter

        _init(...args: any[]): void;
    }

    class TextReader {
        static $gtype: GObject.GType<TextReader>;

        // Constructors of libxml2.TextReader

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

export default libxml2;
// END
