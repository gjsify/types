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

export namespace libxml2 {
    /**
     * libxml2-2.0
     */

    function dummy(): void;
    /**
     * @gir-type Struct
     */
    class Node {
        static $gtype: GObject.GType<Node>;
    }

    /**
     * @gir-type Struct
     */
    class NodePtr {
        static $gtype: GObject.GType<NodePtr>;
    }

    /**
     * @gir-type Struct
     */
    class Doc {
        static $gtype: GObject.GType<Doc>;
    }

    /**
     * @gir-type Struct
     */
    class DocPtr {
        static $gtype: GObject.GType<DocPtr>;
    }

    /**
     * @gir-type Struct
     */
    class NsPtr {
        static $gtype: GObject.GType<NsPtr>;
    }

    /**
     * @gir-type Struct
     */
    class Char {
        static $gtype: GObject.GType<Char>;
    }

    /**
     * @gir-type Struct
     */
    class TextWriter {
        static $gtype: GObject.GType<TextWriter>;
    }

    /**
     * @gir-type Struct
     */
    class TextReader {
        static $gtype: GObject.GType<TextReader>;
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
