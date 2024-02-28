/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './anthy-9000-ambient.d.ts';
import './anthy-9000-import.d.ts';
/**
 * Anthy-9000
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Anthy {
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
    module GContext {
        // Constructor properties interface
    }

    /**
     * An #AnthyGContext is an object that handles conversion strings.
     */
    class GContext extends GObject.InitiallyUnowned {
        // Constructors of Anthy-9000.GContext

        static ['new'](): GContext;

        // Owm methods of Anthy-9000.GContext

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

    class GContextClass {}

    class GContextPrivate {}

    class anthy_context_t {}

    class anthy_conv_stat {
        // Own fields of Anthy-9000.anthy_conv_stat

        nr_segment: number;

        // Constructors of Anthy-9000.anthy_conv_stat

        constructor(
            properties?: Partial<{
                nr_segment: number;
            }>,
        );
    }

    class anthy_prediction_stat {
        // Own fields of Anthy-9000.anthy_prediction_stat

        nr_prediction: number;

        // Constructors of Anthy-9000.anthy_prediction_stat

        constructor(
            properties?: Partial<{
                nr_prediction: number;
            }>,
        );
    }

    class anthy_segment_stat {
        // Own fields of Anthy-9000.anthy_segment_stat

        nr_candidate: number;
        seg_len: number;

        // Constructors of Anthy-9000.anthy_segment_stat

        constructor(
            properties?: Partial<{
                nr_candidate: number;
                seg_len: number;
            }>,
        );
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
