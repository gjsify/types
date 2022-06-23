// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstTranscoder-1.0
 */

import type GstPbutils from './GstPbutils-1.0';
import type GstVideo from './GstVideo-1.0';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstAudio from './GstAudio-1.0';

export namespace GstTranscoder {

enum TranscoderError {
    /**
     * generic error.
     */
    FAILED,
}
/**
 * Types of messages that will be posted on the transcoder API bus.
 * 
 * See also #gst_transcoder_get_message_bus()
 */
enum TranscoderMessage {
    /**
     * Sink position changed
     */
    POSITION_UPDATED,
    /**
     * Duration of stream changed
     */
    DURATION_CHANGED,
    /**
     * Pipeline state changed
     */
    STATE_CHANGED,
    /**
     * Transcoding is done
     */
    DONE,
    /**
     * Message contains an error
     */
    ERROR,
    /**
     * Message contains an error
     */
    WARNING,
}
/**
 * High level representation of the transcoder pipeline state.
 */
enum TranscoderState {
    /**
     * the transcoder is stopped.
     */
    STOPPED,
    /**
     * the transcoder is paused.
     */
    PAUSED,
    /**
     * the transcoder is currently transcoding a
     * stream.
     */
    PLAYING,
}
/**
 * Gets a string representing the given error.
 * @param error a #GstTranscoderError
 */
function transcoderErrorGetName(error: TranscoderError): string
function transcoderErrorQuark(): GLib.Quark
/**
 * Returns (transfer none): The message name
 * @param message a #GstTranscoderMessage
 */
function transcoderMessageGetName(message: TranscoderMessage): string
/**
 * Parse the given duration `msg` and extract the corresponding #GstClockTime
 * @param msg A #GstMessage
 */
function transcoderMessageParseDuration(msg: Gst.Message): /* duration */ Gst.ClockTime
/**
 * Parse the given error `msg` and extract the corresponding #GError
 * @param msg A #GstMessage
 */
function transcoderMessageParseError(msg: Gst.Message): [ /* error */ GLib.Error, /* details */ Gst.Structure ]
/**
 * Parse the given position `msg` and extract the corresponding #GstClockTime
 * @param msg A #GstMessage
 */
function transcoderMessageParsePosition(msg: Gst.Message): /* position */ Gst.ClockTime
/**
 * Parse the given state `msg` and extract the corresponding #GstTranscoderState
 * @param msg A #GstMessage
 */
function transcoderMessageParseState(msg: Gst.Message): /* state */ TranscoderState
/**
 * Parse the given error `msg` and extract the corresponding #GError warning
 * @param msg A #GstMessage
 */
function transcoderMessageParseWarning(msg: Gst.Message): [ /* error */ GLib.Error, /* details */ Gst.Structure ]
/**
 * Gets a string representing the given state.
 * @param state a #GstTranscoderState
 */
function transcoderStateGetName(state: TranscoderState): string
interface Transcoder_ConstructProps extends Gst.Object_ConstructProps {

    // Own constructor properties of GstTranscoder-1.0.GstTranscoder.Transcoder

    /**
     * See #encodebin:avoid-reencoding
     */
    avoidReencoding?: boolean | null
    destUri?: string | null
    positionUpdateInterval?: number | null
    profile?: GstPbutils.EncodingProfile | null
    srcUri?: string | null
}

interface Transcoder {

    // Own properties of GstTranscoder-1.0.GstTranscoder.Transcoder

    /**
     * See #encodebin:avoid-reencoding
     */
    avoidReencoding: boolean
    readonly destUri: string
    readonly duration: number
    readonly pipeline: Gst.Element
    readonly position: number
    positionUpdateInterval: number
    readonly profile: GstPbutils.EncodingProfile
    readonly srcUri: string

    // Owm methods of GstTranscoder-1.0.GstTranscoder.Transcoder

    getAvoidReencoding(): boolean
    /**
     * Gets the URI of the destination of the transcoded stream.
     */
    getDestUri(): string
    /**
     * Retrieves the duration of the media stream that self represents.
     */
    getDuration(): Gst.ClockTime
    /**
     * GstTranscoder API exposes a #GstBus instance which purpose is to provide data
     * structures representing transcoder-internal events in form of #GstMessage-s of
     * type GST_MESSAGE_APPLICATION.
     * 
     * Each message carries a "transcoder-message" field of type #GstTranscoderMessage.
     * Further fields of the message data are specific to each possible value of
     * that enumeration.
     * 
     * Applications can consume the messages asynchronously within their own
     * event-loop / UI-thread etc. Note that in case the application does not
     * consume the messages, the bus will accumulate these internally and eventually
     * fill memory. To avoid that, the bus has to be set "flushing".
     */
    getMessageBus(): Gst.Bus
    getPipeline(): Gst.Element
    getPosition(): Gst.ClockTime
    getPositionUpdateInterval(): number
    /**
     * Gets the #GstTranscoderSignalAdapter attached to `self` if it is attached to
     * the right #GMainContext. If no #GstTranscoderSignalAdapter has been created
     * yet, it will be created and returned, other calls will return that same
     * adapter until it is destroyed, at which point, a new one can be attached the
     * same way.
     * @param context A #GMainContext on which the main-loop will process                       transcoder bus messages on. Can be NULL (thread-default                       context will be used then).
     */
    getSignalAdapter(context: GLib.MainContext | null): TranscoderSignalAdapter | null
    /**
     * Gets the URI of the currently-transcoding stream.
     */
    getSourceUri(): string
    /**
     * Gets the #GstTranscoderSignalAdapter attached to `self` to emit signals from
     * its thread of emission.
     */
    getSyncSignalAdapter(): TranscoderSignalAdapter
    /**
     * Run the transcoder task synchonously. You can connect
     * to the 'position' signal to get information about the
     * progress of the transcoding.
     */
    run(): boolean
    /**
     * Run the transcoder task asynchronously. You should connect
     * to the 'done' signal to be notified about when the
     * transcoding is done, and to the 'error' signal to be
     * notified about any error.
     */
    runAsync(): void
    setAvoidReencoding(avoidReencoding: boolean): void
    /**
     * Sets `cpu_usage` as target percentage CPU usage of the process running the
     * transcoding task. It will modulate the transcoding speed to reach that target
     * usage.
     * @param cpuUsage The percentage of the CPU the process running the transcoder should try to use. It takes into account the number of cores available.
     */
    setCpuUsage(cpuUsage: number): void
    /**
     * Set interval in milliseconds between two position-updated signals.
     * Pass 0 to stop updating the position.
     * @param interval interval in ms
     */
    setPositionUpdateInterval(interval: number): void

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstTranscoder-1.0.GstTranscoder.Transcoder

    connect(sigName: "notify::avoid-reencoding", callback: (...args: any[]) => void): number
    on(sigName: "notify::avoid-reencoding", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::avoid-reencoding", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::avoid-reencoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::avoid-reencoding", ...args: any[]): void
    connect(sigName: "notify::dest-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::dest-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dest-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dest-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dest-uri", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::pipeline", callback: (...args: any[]) => void): number
    on(sigName: "notify::pipeline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pipeline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pipeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pipeline", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::position-update-interval", callback: (...args: any[]) => void): number
    on(sigName: "notify::position-update-interval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position-update-interval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position-update-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position-update-interval", ...args: any[]): void
    connect(sigName: "notify::profile", callback: (...args: any[]) => void): number
    on(sigName: "notify::profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::profile", ...args: any[]): void
    connect(sigName: "notify::src-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::src-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::src-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::src-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::src-uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Transcoder extends Gst.Object {

    // Own properties of GstTranscoder-1.0.GstTranscoder.Transcoder

    static name: string
    static $gtype: GObject.GType<Transcoder>

    // Constructors of GstTranscoder-1.0.GstTranscoder.Transcoder

    constructor(config?: Transcoder_ConstructProps) 
    constructor(sourceUri: string, destUri: string, encodingProfile: string) 
    static new(sourceUri: string, destUri: string, encodingProfile: string): Transcoder
    static newFull(sourceUri: string, destUri: string, profile: GstPbutils.EncodingProfile): Transcoder
    _init(config?: Transcoder_ConstructProps): void
    static isTranscoderMessage(msg: Gst.Message): boolean
}

interface TranscoderSignalAdapter_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `done`
 */
interface TranscoderSignalAdapter_DoneSignalCallback {
    (): void
}

/**
 * Signal callback interface for `duration-changed`
 */
interface TranscoderSignalAdapter_DurationChangedSignalCallback {
    (object: number): void
}

/**
 * Signal callback interface for `error`
 */
interface TranscoderSignalAdapter_ErrorSignalCallback {
    (object: GLib.Error, p0: Gst.Structure): void
}

/**
 * Signal callback interface for `position-updated`
 */
interface TranscoderSignalAdapter_PositionUpdatedSignalCallback {
    (object: number): void
}

/**
 * Signal callback interface for `state-changed`
 */
interface TranscoderSignalAdapter_StateChangedSignalCallback {
    (object: TranscoderState): void
}

/**
 * Signal callback interface for `warning`
 */
interface TranscoderSignalAdapter_WarningSignalCallback {
    (object: GLib.Error, p0: Gst.Structure): void
}

interface TranscoderSignalAdapter {

    // Own properties of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapter

    /**
     * The #GstTranscoder tracked by the adapter.
     */
    readonly transcoder: Transcoder

    // Owm methods of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapter

    getTranscoder(): Transcoder | null

    // Own signals of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapter

    connect(sigName: "done", callback: TranscoderSignalAdapter_DoneSignalCallback): number
    on(sigName: "done", callback: TranscoderSignalAdapter_DoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "done", callback: TranscoderSignalAdapter_DoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "done", callback: TranscoderSignalAdapter_DoneSignalCallback): NodeJS.EventEmitter
    emit(sigName: "done", ...args: any[]): void
    connect(sigName: "duration-changed", callback: TranscoderSignalAdapter_DurationChangedSignalCallback): number
    on(sigName: "duration-changed", callback: TranscoderSignalAdapter_DurationChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "duration-changed", callback: TranscoderSignalAdapter_DurationChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "duration-changed", callback: TranscoderSignalAdapter_DurationChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "duration-changed", ...args: any[]): void
    connect(sigName: "error", callback: TranscoderSignalAdapter_ErrorSignalCallback): number
    on(sigName: "error", callback: TranscoderSignalAdapter_ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: TranscoderSignalAdapter_ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: TranscoderSignalAdapter_ErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "error", p0: Gst.Structure, ...args: any[]): void
    connect(sigName: "position-updated", callback: TranscoderSignalAdapter_PositionUpdatedSignalCallback): number
    on(sigName: "position-updated", callback: TranscoderSignalAdapter_PositionUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "position-updated", callback: TranscoderSignalAdapter_PositionUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "position-updated", callback: TranscoderSignalAdapter_PositionUpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "position-updated", ...args: any[]): void
    connect(sigName: "state-changed", callback: TranscoderSignalAdapter_StateChangedSignalCallback): number
    on(sigName: "state-changed", callback: TranscoderSignalAdapter_StateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: TranscoderSignalAdapter_StateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: TranscoderSignalAdapter_StateChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "state-changed", ...args: any[]): void
    connect(sigName: "warning", callback: TranscoderSignalAdapter_WarningSignalCallback): number
    on(sigName: "warning", callback: TranscoderSignalAdapter_WarningSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "warning", callback: TranscoderSignalAdapter_WarningSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "warning", callback: TranscoderSignalAdapter_WarningSignalCallback): NodeJS.EventEmitter
    emit(sigName: "warning", p0: Gst.Structure, ...args: any[]): void

    // Class property signals of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapter

    connect(sigName: "notify::transcoder", callback: (...args: any[]) => void): number
    on(sigName: "notify::transcoder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transcoder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transcoder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transcoder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Transforms #GstTranscoder bus messages to signals from the adapter object.
 * @class 
 */
class TranscoderSignalAdapter extends GObject.Object {

    // Own properties of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapter

    static name: string
    static $gtype: GObject.GType<TranscoderSignalAdapter>

    // Constructors of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapter

    constructor(config?: TranscoderSignalAdapter_ConstructProps) 
    _init(config?: TranscoderSignalAdapter_ConstructProps): void
}

interface TranscoderClass {

    // Own fields of GstTranscoder-1.0.GstTranscoder.TranscoderClass

    parentClass: Gst.ObjectClass
}

abstract class TranscoderClass {

    // Own properties of GstTranscoder-1.0.GstTranscoder.TranscoderClass

    static name: string
}

interface TranscoderSignalAdapterClass {

    // Own fields of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapterClass

    parentClass: GObject.ObjectClass
}

abstract class TranscoderSignalAdapterClass {

    // Own properties of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapterClass

    static name: string
}

}
export default GstTranscoder;