
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * Anthy-9000
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export const COMPILED_ENCODING: number
export const EUC_JP_ENCODING: number
export const NTH_HALFKANA_CANDIDATE: number
export const NTH_HIRAGANA_CANDIDATE: number
export const NTH_KATAKANA_CANDIDATE: number
export const NTH_UNCONVERTED_CANDIDATE: number
export const RECONVERT_ALWAYS: number
export const RECONVERT_AUTO: number
export const RECONVERT_DISABLE: number
export const UTF8_ENCODING: number
export function commit_prediction(arg0: anthy_context_t, arg1: number): number
export function commit_segment(arg0: anthy_context_t, arg1: number, arg2: number): number
export function conf_override(arg0: string | null, arg1: string | null): void
export function context_set_encoding(ac: anthy_context_t, encoding: number): number
export function get_prediction(arg0: anthy_context_t, arg1: number, arg2: string | null, arg3: number): number
export function get_prediction_stat(arg0: anthy_context_t, arg1: any): number
export function get_segment(arg0: anthy_context_t, arg1: number, arg2: number, arg3: string | null, arg4: number): number
export function get_segment_stat(arg0: anthy_context_t, arg1: number, arg2: any): number
export function get_stat(arg0: anthy_context_t, arg1: any): number
export function get_version_string(): string | null
export function init(): number
export function print_context(arg0: anthy_context_t): void
export function quit(): void
export function release_context(arg0: anthy_context_t): void
export function reset_context(arg0: anthy_context_t): void
export function resize_segment(arg0: anthy_context_t, arg1: number, arg2: number): void
export function set_personality(arg0: string | null): number
export function set_prediction_string(arg0: anthy_context_t, arg1: string | null): number
export function set_reconversion_mode(ac: anthy_context_t, mode: number): number
export function set_string(arg0: anthy_context_t, arg1: string | null): number
export interface logger {
    (level: number, arg1: string | null): void
}
export module GContext {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
    }

}

export interface GContext {

    // Own fields of Anthy-9000.Anthy.GContext

    parent: GObject.InitiallyUnowned
    priv: GContextPrivate

    // Owm methods of Anthy-9000.Anthy.GContext

    /**
     * Commit a prediction string with `ntg_seg` .
     * @param nth_seg Nth segment
     */
    commit_prediction(nth_seg: number): number
    /**
     * Commit a string with `ntg_seg` and `nth_lookup`.
     * @param nth_seg Nth segment
     * @param nth_lookup Nth lookup
     */
    commit_segment(nth_seg: number, nth_lookup: number): number
    /**
     * Set a personal dictionary.
     * @param dict_name a Dictionary name
     */
    do_set_personality(dict_name: string | null): number
    /**
     * The number of the candidates
     * @param nth_seg 
     * @returns The number of the candidates
     */
    get_nr_candidates(nth_seg: number): number
    /**
     * The number of the converted segments in the current prediction string.
     * @returns The number of the converted segments in the current        prediction string.
     */
    get_nr_predictions(): number
    /**
     * The number of the converted segments
     * @returns The number of the converted segments
     */
    get_nr_segments(): number
    /**
     * A newly assigned string with `ntg_seg` .
     * @param nth_seg Nth segment
     * @returns A newly assigned string.
     */
    get_prediction(nth_seg: number): string | null
    /**
     * A newly assigned string with `ntg_seg` and `nth_lookup` .
     * @param nth_seg Nth segment
     * @param nth_lookup Nth lookup
     * @returns A newly assigned string.
     */
    get_segment(nth_seg: number, nth_lookup: number): string | null
    /**
     * Initialize the personal dictionaries.
     */
    init_personality(): void
    /**
     * Resize the nth segment.
     * @param nth nth segment
     * @param resize size
     */
    resize_segment(nth: number, resize: number): void
    /**
     * Set an encoding.
     * @param encoding An encoding
     */
    set_encoding(encoding: number): number
    /**
     * Set a prediction string.
     * @param string A prediction string
     */
    set_prediction_string(string: string | null): number
    /**
     * Set a conversion string.
     * @param string A conversion string
     */
    set_string(string: string | null): number

    // Class property signals of Anthy-9000.Anthy.GContext

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An #AnthyGContext is an object that handles conversion strings.
 * @class 
 */
export class GContext extends GObject.InitiallyUnowned {

    // Own properties of Anthy-9000.Anthy.GContext

    static name: string
    static $gtype: GObject.GType<GContext>

    // Constructors of Anthy-9000.Anthy.GContext

    constructor(config?: GContext.ConstructorProperties) 
    /**
     * New an #AnthyGobject.
     * @constructor 
     * @returns A newly allocated #AnthyGContext
     */
    constructor() 
    /**
     * New an #AnthyGobject.
     * @constructor 
     * @returns A newly allocated #AnthyGContext
     */
    static new(): GContext
    _init(config?: GContext.ConstructorProperties): void
}

export interface GContextClass {

    // Own fields of Anthy-9000.Anthy.GContextClass

    parent: GObject.InitiallyUnownedClass
}

export abstract class GContextClass {

    // Own properties of Anthy-9000.Anthy.GContextClass

    static name: string
}

export interface GContextPrivate {
}

export class GContextPrivate {

    // Own properties of Anthy-9000.Anthy.GContextPrivate

    static name: string
}

export interface anthy_context_t {
}

export class anthy_context_t {

    // Own properties of Anthy-9000.Anthy.anthy_context_t

    static name: string
}

export interface anthy_conv_stat {

    // Own fields of Anthy-9000.Anthy.anthy_conv_stat

    nr_segment: number
}

export class anthy_conv_stat {

    // Own properties of Anthy-9000.Anthy.anthy_conv_stat

    static name: string
}

export interface anthy_prediction_stat {

    // Own fields of Anthy-9000.Anthy.anthy_prediction_stat

    nr_prediction: number
}

export class anthy_prediction_stat {

    // Own properties of Anthy-9000.Anthy.anthy_prediction_stat

    static name: string
}

export interface anthy_segment_stat {

    // Own fields of Anthy-9000.Anthy.anthy_segment_stat

    nr_candidate: number
    seg_len: number
}

export class anthy_segment_stat {

    // Own properties of Anthy-9000.Anthy.anthy_segment_stat

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END