
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

export namespace SpeechProvider {

    /**
     * SpeechProvider-1.0
     */


    /**
     * @gir-type Enum
     */
    enum ChunkType {
        NONE = 0,
        AUDIO = 1,
        EVENT = 2,
    }


    /**
     * @gir-type Enum
     */
    enum EventType {
        NONE = 0,
        WORD = 1,
        SENTENCE = 2,
        RANGE = 3,
        MARK = 4,
    }


    /**
     * @default 0.01
     */
    const STREAM_PROTOCOL_VERSION: string;

    /**
     * @gir-type Flags
     */
    export namespace VoiceFeature {
        export const $gtype: GObject.GType<VoiceFeature>;
    }

    /**
     * A bitfield of potential voice features that can be advertised to consumers.
     * @gir-type Flags
     */
    enum VoiceFeature {
        /**
         * No features
         */
        NONE = 0,
        /**
         * Provider dispatches event when about to speak word.
         */
        EVENTS_WORD = 1,
        /**
         * Provider dispatches event when about to speak sentence.
         */
        EVENTS_SENTENCE = 2,
        /**
         * Provider dispatches event when about to speak unspecified range.
         */
        EVENTS_RANGE = 4,
        /**
         * Provider dispatches event when SSML mark is reached.
         */
        EVENTS_SSML_MARK = 8,
        SSML_SAY_AS_DATE = 16,
        SSML_SAY_AS_TIME = 32,
        SSML_SAY_AS_TELEPHONE = 64,
        SSML_SAY_AS_CHARACTERS = 128,
        SSML_SAY_AS_CHARACTERS_GLYPHS = 256,
        SSML_SAY_AS_CARDINAL = 512,
        SSML_SAY_AS_ORDINAL = 1024,
        SSML_SAY_AS_CURRENCY = 2048,
        SSML_BREAK = 4096,
        SSML_SUB = 8192,
        SSML_PHONEME = 16384,
        SSML_EMPHASIS = 32768,
        SSML_PROSODY = 65536,
        SSML_SENTENCE_PARAGRAPH = 131072,
        SSML_TOKEN = 262144,
    }


    namespace StreamReader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::fd": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            fd: number;
        }
    }

    /**
     * A provider audio stream reader.
     * @gir-type Class
     * @since 1.0
     */
    class StreamReader extends GObject.Object {
        static $gtype: GObject.GType<StreamReader>;

        // Properties
        /**
         * File descriptor for pipe.
         * @since 1.0
         * @construct-only
         * @default 0
         */
        get fd(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StreamReader.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<StreamReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](fd: number): StreamReader;

        // Signals
        /** @signal */
        connect<K extends keyof StreamReader.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StreamReader.SignalSignatures[K]>): number;

        /** @signal */
        connect_after<K extends keyof StreamReader.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StreamReader.SignalSignatures[K]>): number;

        /** @signal */
        emit<K extends keyof StreamReader.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StreamReader.SignalSignatures[K]>): void;

        // Methods
        /**
         * Close the pipe.
         * @since 1.0
         */
        close(): void;

        /**
         * Retrieves audio data
         * @returns `true` if the call succeeds.
         * @since 1.0
         */
        get_audio(): [boolean, Uint8Array];

        /**
         * Retrieves event data
         * @returns `true` if the call succeeds.
         * @since 1.0
         */
        get_event(): [boolean, EventType, number, number, string];

        /**
         * Retrieves stream header.
         * @returns `true` if header successfully received.
         * @since 1.0
         */
        get_stream_header(): boolean;
    }


    namespace StreamWriter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::fd": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            fd: number;
        }
    }

    /**
     * A provider audio stream writer.
     * @gir-type Class
     * @since 1.0
     */
    class StreamWriter extends GObject.Object {
        static $gtype: GObject.GType<StreamWriter>;

        // Properties
        /**
         * File descriptor for the stream.
         * @since 1.0
         * @construct-only
         * @default 0
         */
        get fd(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StreamWriter.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<StreamWriter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](fd: number): StreamWriter;

        // Signals
        /** @signal */
        connect<K extends keyof StreamWriter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StreamWriter.SignalSignatures[K]>): number;

        /** @signal */
        connect_after<K extends keyof StreamWriter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StreamWriter.SignalSignatures[K]>): number;

        /** @signal */
        emit<K extends keyof StreamWriter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StreamWriter.SignalSignatures[K]>): void;

        // Methods
        /**
         * Close the writer.
         * @since 1.0
         */
        close(): void;

        /**
         * Sends a chunk of audio data.
         * @param chunk audio data
         * @since 1.0
         */
        send_audio(chunk: Uint8Array | string): void;

        /**
         * Sends an event.
         * @param event_type 
         * @param range_start 
         * @param range_end 
         * @param mark_name 
         * @since 1.0
         */
        send_event(event_type: EventType, range_start: number, range_end: number, mark_name: string): void;

        /**
         * Sends the initial stream header.
         * @since 1.0
         */
        send_stream_header(): void;
    }


    /**
     * @gir-type Struct
     */
    class EventData {
        static $gtype: GObject.GType<EventData>;

        // Fields
        event_type: number;

        range_start: number;

        range_end: number;

        mark_name_length: number;

        // Constructors

        constructor(properties?: Partial<{
            event_type: number;
            range_start: number;
            range_end: number;
            mark_name_length: number;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class StreamHeader {
        static $gtype: GObject.GType<StreamHeader>;

        // Fields
        version: number[];

        // Constructors

        constructor(properties?: Partial<{
            version: number[];
        }>);
    }


    /**
     * @gir-type Alias
     */
    type StreamReaderClass = typeof StreamReader;

    /**
     * @gir-type Alias
     */
    type StreamWriterClass = typeof StreamWriter;

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

export default SpeechProvider;

// END
