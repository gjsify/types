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
import type GstPbutils from '@girs/gstpbutils-1.0';
import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GstAudio from '@girs/gstaudio-1.0';

export namespace GstTranscoder {
    /**
     * GstTranscoder-1.0
     */

    class TranscoderError extends GLib.Error {
        static $gtype: GObject.GType<TranscoderError>;

        // Static fields

        /**
         * generic error.
         */
        static FAILED: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

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

    /**
     * Types of messages that will be posted on the transcoder API bus.
     *
     * See also #gst_transcoder_get_message_bus()
     */
    export namespace TranscoderMessage {
        export const $gtype: GObject.GType<TranscoderMessage>;
    }

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

    /**
     * High level representation of the transcoder pipeline state.
     */
    export namespace TranscoderState {
        export const $gtype: GObject.GType<TranscoderState>;
    }

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
    function transcoder_error_get_name(error: TranscoderError | null): string;
    function transcoder_error_quark(): GLib.Quark;
    /**
     * Returns (transfer none): The message name
     * @param message a #GstTranscoderMessage
     */
    function transcoder_message_get_name(message: TranscoderMessage | null): string;
    /**
     * Parse the given duration `msg` and extract the corresponding #GstClockTime
     * @param msg A #GstMessage
     */
    function transcoder_message_parse_duration(msg: Gst.Message): Gst.ClockTime;
    /**
     * Parse the given error `msg` and extract the corresponding #GError
     * @param msg A #GstMessage
     */
    function transcoder_message_parse_error(msg: Gst.Message): [GLib.Error | null, Gst.Structure];
    /**
     * Parse the given position `msg` and extract the corresponding #GstClockTime
     * @param msg A #GstMessage
     */
    function transcoder_message_parse_position(msg: Gst.Message): Gst.ClockTime;
    /**
     * Parse the given state `msg` and extract the corresponding #GstTranscoderState
     * @param msg A #GstMessage
     */
    function transcoder_message_parse_state(msg: Gst.Message): TranscoderState;
    /**
     * Parse the given error `msg` and extract the corresponding #GError warning
     * @param msg A #GstMessage
     */
    function transcoder_message_parse_warning(msg: Gst.Message): [GLib.Error | null, Gst.Structure];
    /**
     * Gets a string representing the given state.
     * @param state a #GstTranscoderState
     * @returns a string with the name of the state.
     */
    function transcoder_state_get_name(state: TranscoderState | null): string;
    namespace Transcoder {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::avoid-reencoding': (pspec: GObject.ParamSpec) => void;
            'notify::dest-uri': (pspec: GObject.ParamSpec) => void;
            'notify::duration': (pspec: GObject.ParamSpec) => void;
            'notify::pipeline': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::position-update-interval': (pspec: GObject.ParamSpec) => void;
            'notify::profile': (pspec: GObject.ParamSpec) => void;
            'notify::src-uri': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            avoid_reencoding: boolean;
            avoidReencoding: boolean;
            dest_uri: string;
            destUri: string;
            duration: number;
            pipeline: Gst.Element;
            position: number;
            position_update_interval: number;
            positionUpdateInterval: number;
            profile: GstPbutils.EncodingProfile;
            src_uri: string;
            srcUri: string;
        }
    }

    class Transcoder extends Gst.Object {
        static $gtype: GObject.GType<Transcoder>;

        // Properties

        /**
         * See #encodebin:avoid-reencoding
         */
        get avoid_reencoding(): boolean;
        set avoid_reencoding(val: boolean);
        /**
         * See #encodebin:avoid-reencoding
         */
        get avoidReencoding(): boolean;
        set avoidReencoding(val: boolean);
        get dest_uri(): string;
        get destUri(): string;
        get duration(): number;
        get pipeline(): Gst.Element;
        get position(): number;
        get position_update_interval(): number;
        set position_update_interval(val: number);
        get positionUpdateInterval(): number;
        set positionUpdateInterval(val: number);
        get profile(): GstPbutils.EncodingProfile;
        get src_uri(): string;
        get srcUri(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Transcoder.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Transcoder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](source_uri: string, dest_uri: string, encoding_profile: string): Transcoder;

        static new_full(source_uri: string, dest_uri: string, profile: GstPbutils.EncodingProfile): Transcoder;

        // Signals

        connect<K extends keyof Transcoder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Transcoder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Transcoder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Transcoder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Transcoder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Transcoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static is_transcoder_message(msg: Gst.Message): boolean;

        // Methods

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

    namespace TranscoderSignalAdapter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            done: () => void;
            'duration-changed': (arg0: number) => void;
            error: (arg0: GLib.Error, arg1: Gst.Structure) => void;
            'position-updated': (arg0: number) => void;
            'state-changed': (arg0: TranscoderState) => void;
            warning: (arg0: GLib.Error, arg1: Gst.Structure) => void;
            'notify::transcoder': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            transcoder: Transcoder;
        }
    }

    /**
     * Transforms #GstTranscoder bus messages to signals from the adapter object.
     */
    class TranscoderSignalAdapter extends GObject.Object {
        static $gtype: GObject.GType<TranscoderSignalAdapter>;

        // Properties

        /**
         * The #GstTranscoder tracked by the adapter.
         */
        get transcoder(): Transcoder;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TranscoderSignalAdapter.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TranscoderSignalAdapter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof TranscoderSignalAdapter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TranscoderSignalAdapter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TranscoderSignalAdapter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TranscoderSignalAdapter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TranscoderSignalAdapter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TranscoderSignalAdapter.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_transcoder(): Transcoder | null;
    }

    type TranscoderClass = typeof Transcoder;
    type TranscoderSignalAdapterClass = typeof TranscoderSignalAdapter;
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
