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
import type GLib from '@girs/glib-2.0';

export namespace Anthy {
    /**
     * Anthy-9000
     */

    const COMPILED_ENCODING: number;
    const EUC_JP_ENCODING: number;
    const NTH_HALFKANA_CANDIDATE: number;
    const NTH_HIRAGANA_CANDIDATE: number;
    const NTH_KATAKANA_CANDIDATE: number;
    const NTH_UNCONVERTED_CANDIDATE: number;
    const RECONVERT_ALWAYS: number;
    const RECONVERT_AUTO: number;
    const RECONVERT_DISABLE: number;
    const UTF8_ENCODING: number;
    function commit_prediction(arg0: anthy_context_t, arg1: number): number;
    function commit_segment(arg0: anthy_context_t, arg1: number, arg2: number): number;
    function conf_override(arg0: string, arg1: string): void;
    function context_set_encoding(ac: anthy_context_t, encoding: number): number;
    function get_prediction(arg0: anthy_context_t, arg1: number, arg2: string, arg3: number): number;
    function get_prediction_stat(arg0: anthy_context_t, arg1: any): number;
    function get_segment(arg0: anthy_context_t, arg1: number, arg2: number, arg3: string, arg4: number): number;
    function get_segment_stat(arg0: anthy_context_t, arg1: number, arg2: any): number;
    function get_stat(arg0: anthy_context_t, arg1: any): number;
    function get_version_string(): string;
    function init(): number;
    function print_context(arg0: anthy_context_t): void;
    function quit(): void;
    function release_context(arg0: anthy_context_t): void;
    function reset_context(arg0: anthy_context_t): void;
    function resize_segment(arg0: anthy_context_t, arg1: number, arg2: number): void;
    function set_personality(arg0: string): number;
    function set_prediction_string(arg0: anthy_context_t, arg1: string): number;
    function set_reconversion_mode(ac: anthy_context_t, mode: number): number;
    function set_string(arg0: anthy_context_t, arg1: string): number;
    interface logger {
        (level: number, arg1: string): void;
    }
    namespace GContext {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {}
    }

    /**
     * An #AnthyGContext is an object that handles conversion strings.
     */
    class GContext extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<GContext>;

        // Constructors

        constructor(properties?: Partial<GContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GContext;

        // Signals

        connect<K extends keyof GContext.SignalSignatures>(signal: K, callback: GContext.SignalSignatures[K]): number;
        connect_after<K extends keyof GContext.SignalSignatures>(
            signal: K,
            callback: GContext.SignalSignatures[K],
        ): number;
        emit<K extends keyof GContext.SignalSignatures>(
            signal: K,
            ...args: GContext.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Commit a prediction string with `ntg_seg` .
         * @param nth_seg Nth segment
         */
        commit_prediction(nth_seg: number): number;
        /**
         * Commit a string with `ntg_seg` and `nth_lookup`.
         * @param nth_seg Nth segment
         * @param nth_lookup Nth lookup
         */
        commit_segment(nth_seg: number, nth_lookup: number): number;
        /**
         * Set a personal dictionary.
         * @param dict_name a Dictionary name
         */
        do_set_personality(dict_name: string): number;
        /**
         * The number of the candidates
         * @param nth_seg
         * @returns The number of the candidates
         */
        get_nr_candidates(nth_seg: number): number;
        /**
         * The number of the converted segments in the current prediction string.
         * @returns The number of the converted segments in the current        prediction string.
         */
        get_nr_predictions(): number;
        /**
         * The number of the converted segments
         * @returns The number of the converted segments
         */
        get_nr_segments(): number;
        /**
         * A newly assigned string with `ntg_seg` .
         * @param nth_seg Nth segment
         * @returns A newly assigned string.
         */
        get_prediction(nth_seg: number): string;
        /**
         * A newly assigned string with `ntg_seg` and `nth_lookup` .
         * @param nth_seg Nth segment
         * @param nth_lookup Nth lookup
         * @returns A newly assigned string.
         */
        get_segment(nth_seg: number, nth_lookup: number): string;
        /**
         * Initialize the personal dictionaries.
         */
        init_personality(): void;
        /**
         * Resize the nth segment.
         * @param nth nth segment
         * @param resize size
         */
        resize_segment(nth: number, resize: number): void;
        /**
         * Set an encoding.
         * @param encoding An encoding
         */
        set_encoding(encoding: number): number;
        /**
         * Set a prediction string.
         * @param string A prediction string
         */
        set_prediction_string(string: string): number;
        /**
         * Set a conversion string.
         * @param string A conversion string
         */
        set_string(string: string): number;
    }

    type GContextClass = typeof GContext;
    abstract class GContextPrivate {
        static $gtype: GObject.GType<GContextPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class anthy_context_t {
        static $gtype: GObject.GType<anthy_context_t>;

        // Constructors

        _init(...args: any[]): void;
    }

    class anthy_conv_stat {
        static $gtype: GObject.GType<anthy_conv_stat>;

        // Fields

        nr_segment: number;

        // Constructors

        constructor(
            properties?: Partial<{
                nr_segment: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    class anthy_prediction_stat {
        static $gtype: GObject.GType<anthy_prediction_stat>;

        // Fields

        nr_prediction: number;

        // Constructors

        constructor(
            properties?: Partial<{
                nr_prediction: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    class anthy_segment_stat {
        static $gtype: GObject.GType<anthy_segment_stat>;

        // Fields

        nr_candidate: number;
        seg_len: number;

        // Constructors

        constructor(
            properties?: Partial<{
                nr_candidate: number;
                seg_len: number;
            }>,
        );
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

export default Anthy;

// END
