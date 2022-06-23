// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Anthy-9000
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Anthy {

const COMPILED_ENCODING: number
const EUC_JP_ENCODING: number
const NTH_HALFKANA_CANDIDATE: number
const NTH_HIRAGANA_CANDIDATE: number
const NTH_KATAKANA_CANDIDATE: number
const NTH_UNCONVERTED_CANDIDATE: number
const RECONVERT_ALWAYS: number
const RECONVERT_AUTO: number
const RECONVERT_DISABLE: number
const UTF8_ENCODING: number
function commitPrediction(arg0: anthy_context_t, arg1: number): number
function commitSegment(arg0: anthy_context_t, arg1: number, arg2: number): number
function confOverride(arg0: string, arg1: string): void
function contextSetEncoding(ac: anthy_context_t, encoding: number): number
function getPrediction(arg0: anthy_context_t, arg1: number, arg2: string, arg3: number): number
function getPredictionStat(arg0: anthy_context_t, arg1: object): number
function getSegment(arg0: anthy_context_t, arg1: number, arg2: number, arg3: string, arg4: number): number
function getSegmentStat(arg0: anthy_context_t, arg1: number, arg2: object): number
function getStat(arg0: anthy_context_t, arg1: object): number
function getVersionString(): string
function init(): number
function printContext(arg0: anthy_context_t): void
function quit(): void
function releaseContext(arg0: anthy_context_t): void
function resetContext(arg0: anthy_context_t): void
function resizeSegment(arg0: anthy_context_t, arg1: number, arg2: number): void
function setPersonality(arg0: string): number
function setPredictionString(arg0: anthy_context_t, arg1: string): number
function setReconversionMode(ac: anthy_context_t, mode: number): number
function setString(arg0: anthy_context_t, arg1: string): number
interface logger {
    (level: number, arg1: string): void
}
interface GContext_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}

interface GContext {

    // Own fields of Anthy-9000.Anthy.GContext

    parent: GObject.InitiallyUnowned
    priv: GContextPrivate

    // Owm methods of Anthy-9000.Anthy.GContext

    /**
     * Commit a prediction string with `ntg_seg` .
     * @param nthSeg Nth segment
     */
    commitPrediction(nthSeg: number): number
    /**
     * Commit a string with `ntg_seg` and `nth_lookup`.
     * @param nthSeg Nth segment
     * @param nthLookup Nth lookup
     */
    commitSegment(nthSeg: number, nthLookup: number): number
    /**
     * Set a personal dictionary.
     * @param dictName a Dictionary name
     */
    doSetPersonality(dictName: string): number
    /**
     * The number of the candidates
     * @param nthSeg 
     */
    getNrCandidates(nthSeg: number): number
    /**
     * The number of the converted segments in the current prediction string.
     */
    getNrPredictions(): number
    /**
     * The number of the converted segments
     */
    getNrSegments(): number
    /**
     * A newly assigned string with `ntg_seg` .
     * @param nthSeg Nth segment
     */
    getPrediction(nthSeg: number): string
    /**
     * A newly assigned string with `ntg_seg` and `nth_lookup` .
     * @param nthSeg Nth segment
     * @param nthLookup Nth lookup
     */
    getSegment(nthSeg: number, nthLookup: number): string
    /**
     * Initialize the personal dictionaries.
     */
    initPersonality(): void
    /**
     * Resize the nth segment.
     * @param nth nth segment
     * @param resize size
     */
    resizeSegment(nth: number, resize: number): void
    /**
     * Set an encoding.
     * @param encoding An encoding
     */
    setEncoding(encoding: number): number
    /**
     * Set a prediction string.
     * @param string A prediction string
     */
    setPredictionString(string: string): number
    /**
     * Set a conversion string.
     * @param string A conversion string
     */
    setString(string: string): number

    // Class property signals of Anthy-9000.Anthy.GContext

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * An #AnthyGContext is an object that handles conversion strings.
 * @class 
 */
class GContext extends GObject.InitiallyUnowned {

    // Own properties of Anthy-9000.Anthy.GContext

    static name: string
    static $gtype: GObject.GType<GContext>

    // Constructors of Anthy-9000.Anthy.GContext

    constructor(config?: GContext_ConstructProps) 
    /**
     * New an #AnthyGobject.
     * @constructor 
     */
    constructor() 
    /**
     * New an #AnthyGobject.
     * @constructor 
     */
    static new(): GContext
    _init(config?: GContext_ConstructProps): void
}

interface GContextClass {

    // Own fields of Anthy-9000.Anthy.GContextClass

    parent: GObject.InitiallyUnownedClass
}

abstract class GContextClass {

    // Own properties of Anthy-9000.Anthy.GContextClass

    static name: string
}

interface GContextPrivate {
}

class GContextPrivate {

    // Own properties of Anthy-9000.Anthy.GContextPrivate

    static name: string
}

interface anthy_context_t {
}

class anthy_context_t {

    // Own properties of Anthy-9000.Anthy.anthy_context_t

    static name: string
}

interface anthy_conv_stat {

    // Own fields of Anthy-9000.Anthy.anthy_conv_stat

    nrSegment: number
}

class anthy_conv_stat {

    // Own properties of Anthy-9000.Anthy.anthy_conv_stat

    static name: string
}

interface anthy_prediction_stat {

    // Own fields of Anthy-9000.Anthy.anthy_prediction_stat

    nrPrediction: number
}

class anthy_prediction_stat {

    // Own properties of Anthy-9000.Anthy.anthy_prediction_stat

    static name: string
}

interface anthy_segment_stat {

    // Own fields of Anthy-9000.Anthy.anthy_segment_stat

    nrCandidate: number
    segLen: number
}

class anthy_segment_stat {

    // Own properties of Anthy-9000.Anthy.anthy_segment_stat

    static name: string
}

}
export default Anthy;