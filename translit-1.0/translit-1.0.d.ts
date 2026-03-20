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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Translit {
    /**
     * Translit-1.0
     */

    /**
     * @gir-type Enum
     */
    enum ErrorEnum {
        NO_SUCH_BACKEND,
        LOAD_FAILED,
        INVALID_INPUT,
        FAILED,
    }

    function error_quark(): GLib.Quark;
    /**
     * @param backend
     * @param type
     */
    function implement_transliterator(backend: string, type: GObject.GType): void;
    namespace Transliterator {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Transliterator extends GObject.Object {
        static $gtype: GObject.GType<Transliterator>;

        // Properties

        /**
         * The transliteration which {@link Translit.Transliterator} supports
         * @construct-only
         */
        get name(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Transliterator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Transliterator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Transliterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Transliterator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Transliterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Transliterator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Transliterator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Transliterator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Get a transliterator instance whose name is `name`.
         * @param backend backend name (e.g. "m17n")
         * @param name name of the transliterator (e.g. "hi-inscript")
         */
        static get(backend: string, name: string): Transliterator;

        // Virtual methods

        /**
         * @param input an input string in UTF-8
         * @virtual
         */
        vfunc_transliterate(input: string): [string, number];

        // Methods

        /**
         * @param input an input string in UTF-8
         * @returns a newly allocated output string
         */
        transliterate(input: string): [string, number];
    }

    /**
     * @gir-type Alias
     */
    type TransliteratorClass = typeof Transliterator;
    /**
     * @gir-type Struct
     */
    abstract class TransliteratorPrivate {
        static $gtype: GObject.GType<TransliteratorPrivate>;
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
