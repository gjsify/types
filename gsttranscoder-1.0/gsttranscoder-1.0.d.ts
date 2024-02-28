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

export namespace GstTranscoder {
    class TranscoderError extends GLib.Error {
        // Own fields of GstTranscoder-1.0.TranscoderError

        /**
         * generic error.
         */
        FAILED: number;

        // Constructors of GstTranscoder-1.0.TranscoderError

        constructor(options: { message: string; code: number });

        // Owm methods of GstTranscoder-1.0.TranscoderError

        /**
         * Gets a string representing the given error.
         * @param error a #GstTranscoderError
         */
        static get_name(error: TranscoderError): string;
        static quark(): GLib.Quark;
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
     * @returns a string with the given error.
     */
    function transcoder_error_get_name(error: TranscoderError): string;
    function transcoder_error_quark(): GLib.Quark;
    /**
     * Returns (transfer none): The message name
     * @param message a #GstTranscoderMessage
     */
    function transcoder_message_get_name(message: TranscoderMessage): string;
    /**
     * Parse the given duration `msg` and extract the corresponding #GstClockTime
     * @param msg A #GstMessage
     */
    function transcoder_message_parse_duration(msg: Gst.Message): void;
    /**
     * Parse the given error `msg` and extract the corresponding #GError
     * @param msg A #GstMessage
     */
    function transcoder_message_parse_error(msg: Gst.Message): void;
    /**
     * Parse the given position `msg` and extract the corresponding #GstClockTime
     * @param msg A #GstMessage
     */
    function transcoder_message_parse_position(msg: Gst.Message): void;
    /**
     * Parse the given state `msg` and extract the corresponding #GstTranscoderState
     * @param msg A #GstMessage
     */
    function transcoder_message_parse_state(msg: Gst.Message): void;
    /**
     * Parse the given error `msg` and extract the corresponding #GError warning
     * @param msg A #GstMessage
     */
    function transcoder_message_parse_warning(msg: Gst.Message): void;
    /**
     * Gets a string representing the given state.
     * @param state a #GstTranscoderState
     * @returns a string with the name of the state.
     */
    function transcoder_state_get_name(state: TranscoderState): string;
    module Transcoder {
        // Constructor properties interface
    }

    class Transcoder extends Gst.Object {
        // Own properties of GstTranscoder-1.0.Transcoder

        /**
         * See #encodebin:avoid-reencoding
         */
        avoid_reencoding: boolean;
        /**
         * See #encodebin:avoid-reencoding
         */
        avoidReencoding: boolean;
        dest_uri: string;
        destUri: string;
        readonly duration: number;
        readonly pipeline: Gst.Element;
        readonly position: number;
        position_update_interval: number;
        positionUpdateInterval: number;
        profile: GstPbutils.EncodingProfile;
        src_uri: string;
        srcUri: string;

        // Constructors of GstTranscoder-1.0.Transcoder

        static ['new'](source_uri: string, dest_uri: string, encoding_profile: string): Transcoder;

        static new_full(source_uri: string, dest_uri: string, profile: GstPbutils.EncodingProfile): Transcoder;

        // Owm methods of GstTranscoder-1.0.Transcoder

        static is_transcoder_message(msg: Gst.Message): boolean;

        // Owm methods of GstTranscoder-1.0.Transcoder

        get_avoid_reencoding(): boolean;
        /**
         * Gets the URI of the destination of the transcoded stream.
         * @returns a string containing the URI of the destination of the transcoded stream. g_free() after usage.
         */
        get_dest_uri(): string;
        /**
         * Retrieves the duration of the media stream that self represents.
         * @returns the duration of the transcoding media stream, in nanoseconds.
         */
        get_duration(): Gst.ClockTime;
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
        get_message_bus(): Gst.Bus;
        get_pipeline(): Gst.Element;
        get_position(): Gst.ClockTime;
        get_position_update_interval(): number;
        /**
         * Gets the #GstTranscoderSignalAdapter attached to `self` if it is attached to
         * the right #GMainContext. If no #GstTranscoderSignalAdapter has been created
         * yet, it will be created and returned, other calls will return that same
         * adapter until it is destroyed, at which point, a new one can be attached the
         * same way.
         * @param context A #GMainContext on which the main-loop will process                       transcoder bus messages on. Can be NULL (thread-default                       context will be used then).
         * @returns The #GstTranscoderSignalAdapter to connect signal handlers to.
         */
        get_signal_adapter(context?: GLib.MainContext | null): TranscoderSignalAdapter | null;
        /**
         * Gets the URI of the currently-transcoding stream.
         * @returns a string containing the URI of the source stream. g_free() after usage.
         */
        get_source_uri(): string;
        /**
         * Gets the #GstTranscoderSignalAdapter attached to `self` to emit signals from
         * its thread of emission.
         * @returns The #GstTranscoderSignalAdapter to connect signal handlers to.
         */
        get_sync_signal_adapter(): TranscoderSignalAdapter;
        /**
         * Run the transcoder task synchonously. You can connect
         * to the 'position' signal to get information about the
         * progress of the transcoding.
         */
        run(): boolean;
        /**
         * Run the transcoder task asynchronously. You should connect
         * to the 'done' signal to be notified about when the
         * transcoding is done, and to the 'error' signal to be
         * notified about any error.
         */
        run_async(): void;
        set_avoid_reencoding(avoid_reencoding: boolean): void;
        /**
         * Sets `cpu_usage` as target percentage CPU usage of the process running the
         * transcoding task. It will modulate the transcoding speed to reach that target
         * usage.
         * @param cpu_usage The percentage of the CPU the process running the transcoder should try to use. It takes into account the number of cores available.
         */
        set_cpu_usage(cpu_usage: number): void;
        /**
         * Set interval in milliseconds between two position-updated signals.
         * Pass 0 to stop updating the position.
         * @param interval interval in ms
         */
        set_position_update_interval(interval: number): void;
    }

    module TranscoderSignalAdapter {
        // Signal callback interfaces

        interface Done {
            (): void;
        }

        interface DurationChanged {
            (object: number): void;
        }

        interface Error {
            (object: GLib.Error, p0: Gst.Structure): void;
        }

        interface PositionUpdated {
            (object: number): void;
        }

        interface StateChanged {
            (object: TranscoderState): void;
        }

        interface Warning {
            (object: GLib.Error, p0: Gst.Structure): void;
        }

        // Constructor properties interface
    }

    /**
     * Transforms #GstTranscoder bus messages to signals from the adapter object.
     */
    class TranscoderSignalAdapter extends GObject.Object {
        // Own properties of GstTranscoder-1.0.TranscoderSignalAdapter

        /**
         * The #GstTranscoder tracked by the adapter.
         */
        readonly transcoder: Transcoder;

        // Owm methods of GstTranscoder-1.0.TranscoderSignalAdapter

        get_transcoder(): Transcoder | null;
    }

    class TranscoderClass {}

    class TranscoderSignalAdapterClass {}

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

export default GstTranscoder;
// END
