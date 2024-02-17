
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gsttranscoder-1.0-ambient.d.ts';
import './gsttranscoder-1.0-import.d.ts';
/**
 * GstTranscoder-1.0
 */

import type GstPbutils from '@girs/gstpbutils-1.0';
import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GstAudio from '@girs/gstaudio-1.0';

export enum TranscoderError {
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
export enum TranscoderMessage {
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
export enum TranscoderState {
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
 * @returns a string with the given error.
 */
export function transcoder_error_get_name(error: TranscoderError): string
export function transcoder_error_quark(): GLib.Quark
/**
 * Returns (transfer none): The message name
 * @param message a #GstTranscoderMessage
 */
export function transcoder_message_get_name(message: TranscoderMessage): string
/**
 * Parse the given duration `msg` and extract the corresponding #GstClockTime
 * @param msg A #GstMessage
 */
export function transcoder_message_parse_duration(msg: Gst.Message): /* duration */ Gst.ClockTime
/**
 * Parse the given error `msg` and extract the corresponding #GError
 * @param msg A #GstMessage
 */
export function transcoder_message_parse_error(msg: Gst.Message): [ /* error */ GLib.Error, /* details */ Gst.Structure ]
/**
 * Parse the given position `msg` and extract the corresponding #GstClockTime
 * @param msg A #GstMessage
 */
export function transcoder_message_parse_position(msg: Gst.Message): /* position */ Gst.ClockTime
/**
 * Parse the given state `msg` and extract the corresponding #GstTranscoderState
 * @param msg A #GstMessage
 */
export function transcoder_message_parse_state(msg: Gst.Message): /* state */ TranscoderState
/**
 * Parse the given error `msg` and extract the corresponding #GError warning
 * @param msg A #GstMessage
 */
export function transcoder_message_parse_warning(msg: Gst.Message): [ /* error */ GLib.Error, /* details */ Gst.Structure ]
/**
 * Gets a string representing the given state.
 * @param state a #GstTranscoderState
 * @returns a string with the name of the state.
 */
export function transcoder_state_get_name(state: TranscoderState): string
export module Transcoder {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {

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

}

export interface Transcoder {

    // Own properties of GstTranscoder-1.0.GstTranscoder.Transcoder

    /**
     * See #encodebin:avoid-reencoding
     */
    avoidReencoding: boolean
    readonly destUri: string | null
    readonly duration: number
    readonly pipeline: Gst.Element
    readonly position: number
    positionUpdateInterval: number
    readonly profile: GstPbutils.EncodingProfile
    readonly srcUri: string | null

    // Owm methods of GstTranscoder-1.0.GstTranscoder.Transcoder

    get_avoid_reencoding(): boolean
    /**
     * Gets the URI of the destination of the transcoded stream.
     * @returns a string containing the URI of the destination of the transcoded stream. g_free() after usage.
     */
    get_dest_uri(): string | null
    /**
     * Retrieves the duration of the media stream that self represents.
     * @returns the duration of the transcoding media stream, in nanoseconds.
     */
    get_duration(): Gst.ClockTime
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
     * @returns The transcoder message bus instance
     */
    get_message_bus(): Gst.Bus
    get_pipeline(): Gst.Element
    get_position(): Gst.ClockTime
    get_position_update_interval(): number
    /**
     * Gets the #GstTranscoderSignalAdapter attached to `self` if it is attached to
     * the right #GMainContext. If no #GstTranscoderSignalAdapter has been created
     * yet, it will be created and returned, other calls will return that same
     * adapter until it is destroyed, at which point, a new one can be attached the
     * same way.
     * @param context A #GMainContext on which the main-loop will process                       transcoder bus messages on. Can be NULL (thread-default                       context will be used then).
     * @returns The #GstTranscoderSignalAdapter to connect signal handlers to.
     */
    get_signal_adapter(context: GLib.MainContext | null): TranscoderSignalAdapter | null
    /**
     * Gets the URI of the currently-transcoding stream.
     * @returns a string containing the URI of the source stream. g_free() after usage.
     */
    get_source_uri(): string | null
    /**
     * Gets the #GstTranscoderSignalAdapter attached to `self` to emit signals from
     * its thread of emission.
     * @returns The #GstTranscoderSignalAdapter to connect signal handlers to.
     */
    get_sync_signal_adapter(): TranscoderSignalAdapter
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
    run_async(): void
    set_avoid_reencoding(avoid_reencoding: boolean): void
    /**
     * Sets `cpu_usage` as target percentage CPU usage of the process running the
     * transcoding task. It will modulate the transcoding speed to reach that target
     * usage.
     * @param cpu_usage The percentage of the CPU the process running the transcoder should try to use. It takes into account the number of cores available.
     */
    set_cpu_usage(cpu_usage: number): void
    /**
     * Set interval in milliseconds between two position-updated signals.
     * Pass 0 to stop updating the position.
     * @param interval interval in ms
     */
    set_position_update_interval(interval: number): void

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstTranscoder-1.0.GstTranscoder.Transcoder

    connect(sigName: "notify::avoid-reencoding", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avoid-reencoding", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::avoid-reencoding", ...args: any[]): void
    connect(sigName: "notify::dest-uri", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dest-uri", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dest-uri", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::pipeline", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pipeline", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pipeline", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::position-update-interval", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position-update-interval", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position-update-interval", ...args: any[]): void
    connect(sigName: "notify::profile", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profile", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::profile", ...args: any[]): void
    connect(sigName: "notify::src-uri", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::src-uri", callback: (($obj: Transcoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::src-uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Transcoder extends Gst.Object {

    // Own properties of GstTranscoder-1.0.GstTranscoder.Transcoder

    static name: string
    static $gtype: GObject.GType<Transcoder>

    // Constructors of GstTranscoder-1.0.GstTranscoder.Transcoder

    constructor(config?: Transcoder.ConstructorProperties) 
    constructor(source_uri: string, dest_uri: string, encoding_profile: string) 
    static new(source_uri: string, dest_uri: string, encoding_profile: string): Transcoder
    static new_full(source_uri: string, dest_uri: string, profile: GstPbutils.EncodingProfile): Transcoder
    _init(config?: Transcoder.ConstructorProperties): void
    static is_transcoder_message(msg: Gst.Message): boolean
}

export module TranscoderSignalAdapter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `done`
     */
    export interface DoneSignalCallback {
        ($obj: TranscoderSignalAdapter): void
    }

    /**
     * Signal callback interface for `duration-changed`
     */
    export interface DurationChangedSignalCallback {
        ($obj: TranscoderSignalAdapter, object: number): void
    }

    /**
     * Signal callback interface for `error`
     */
    export interface ErrorSignalCallback {
        ($obj: TranscoderSignalAdapter, object: GLib.Error, p0: Gst.Structure): void
    }

    /**
     * Signal callback interface for `position-updated`
     */
    export interface PositionUpdatedSignalCallback {
        ($obj: TranscoderSignalAdapter, object: number): void
    }

    /**
     * Signal callback interface for `state-changed`
     */
    export interface StateChangedSignalCallback {
        ($obj: TranscoderSignalAdapter, object: TranscoderState): void
    }

    /**
     * Signal callback interface for `warning`
     */
    export interface WarningSignalCallback {
        ($obj: TranscoderSignalAdapter, object: GLib.Error, p0: Gst.Structure): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface TranscoderSignalAdapter {

    // Own properties of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapter

    /**
     * The #GstTranscoder tracked by the adapter.
     */
    readonly transcoder: Transcoder

    // Owm methods of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapter

    get_transcoder(): Transcoder | null

    // Own signals of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapter

    connect(sigName: "done", callback: TranscoderSignalAdapter.DoneSignalCallback): number
    connect_after(sigName: "done", callback: TranscoderSignalAdapter.DoneSignalCallback): number
    emit(sigName: "done", ...args: any[]): void
    connect(sigName: "duration-changed", callback: TranscoderSignalAdapter.DurationChangedSignalCallback): number
    connect_after(sigName: "duration-changed", callback: TranscoderSignalAdapter.DurationChangedSignalCallback): number
    emit(sigName: "duration-changed", object: number, ...args: any[]): void
    connect(sigName: "error", callback: TranscoderSignalAdapter.ErrorSignalCallback): number
    connect_after(sigName: "error", callback: TranscoderSignalAdapter.ErrorSignalCallback): number
    emit(sigName: "error", object: GLib.Error, p0: Gst.Structure, ...args: any[]): void
    connect(sigName: "position-updated", callback: TranscoderSignalAdapter.PositionUpdatedSignalCallback): number
    connect_after(sigName: "position-updated", callback: TranscoderSignalAdapter.PositionUpdatedSignalCallback): number
    emit(sigName: "position-updated", object: number, ...args: any[]): void
    connect(sigName: "state-changed", callback: TranscoderSignalAdapter.StateChangedSignalCallback): number
    connect_after(sigName: "state-changed", callback: TranscoderSignalAdapter.StateChangedSignalCallback): number
    emit(sigName: "state-changed", object: TranscoderState, ...args: any[]): void
    connect(sigName: "warning", callback: TranscoderSignalAdapter.WarningSignalCallback): number
    connect_after(sigName: "warning", callback: TranscoderSignalAdapter.WarningSignalCallback): number
    emit(sigName: "warning", object: GLib.Error, p0: Gst.Structure, ...args: any[]): void

    // Class property signals of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapter

    connect(sigName: "notify::transcoder", callback: (($obj: TranscoderSignalAdapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transcoder", callback: (($obj: TranscoderSignalAdapter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transcoder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Transforms #GstTranscoder bus messages to signals from the adapter object.
 * @class 
 */
export class TranscoderSignalAdapter extends GObject.Object {

    // Own properties of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapter

    static name: string
    static $gtype: GObject.GType<TranscoderSignalAdapter>

    // Constructors of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapter

    constructor(config?: TranscoderSignalAdapter.ConstructorProperties) 
    _init(config?: TranscoderSignalAdapter.ConstructorProperties): void
}

export interface TranscoderClass {

    // Own fields of GstTranscoder-1.0.GstTranscoder.TranscoderClass

    parent_class: Gst.ObjectClass
}

export abstract class TranscoderClass {

    // Own properties of GstTranscoder-1.0.GstTranscoder.TranscoderClass

    static name: string
}

export interface TranscoderSignalAdapterClass {

    // Own fields of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapterClass

    parent_class: GObject.ObjectClass
}

export abstract class TranscoderSignalAdapterClass {

    // Own properties of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapterClass

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