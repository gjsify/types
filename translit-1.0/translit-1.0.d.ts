/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './translit-1.0-ambient.d.ts';

/**
 * Translit-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Translit {
    enum ErrorEnum {
        NO_SUCH_BACKEND,
        LOAD_FAILED,
        INVALID_INPUT,
        FAILED,
    }
    function error_quark(): GLib.Quark;
    function implement_transliterator(backend: string, type: GObject.GType): void;
    module Transliterator {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
        }
    }

    class Transliterator extends GObject.Object {
        static $gtype: GObject.GType<Transliterator>;

        // Own properties of Translit.Transliterator

        /**
         * The transliteration which #TranslitTransliterator supports
         */
        get name(): string;

        // Constructors of Translit.Transliterator

        constructor(properties?: Partial<Transliterator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Translit.Transliterator

        /**
         * Get a transliterator instance whose name is `name`.
         * @param backend backend name (e.g. "m17n")
         * @param name name of the transliterator (e.g. "hi-inscript")
         */
        static get(backend: string, name: string): Transliterator;

        // Own virtual methods of Translit.Transliterator

        vfunc_transliterate(input: string): [string, number];

        // Own methods of Translit.Transliterator

        transliterate(input: string): [string, number];
    }

    type TransliteratorClass = typeof Transliterator;
    abstract class TransliteratorPrivate {
        static $gtype: GObject.GType<TransliteratorPrivate>;

        // Constructors of Translit.TransliteratorPrivate

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

export default Translit;
// END
