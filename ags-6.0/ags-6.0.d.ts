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
import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-3.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Ags {
    /**
     * Ags-6.0
     */

    /**
     * Endianess.
     */

    /**
     * Endianess.
     */
    export namespace ByteOrder {
        export const $gtype: GObject.GType<ByteOrder>;
    }

    enum ByteOrder {
        /**
         * little endian
         */
        BYTE_ORDER_LE,
        /**
         * big endian
         */
        BYTE_ORDER_BE,
    }
    /**
     * Enum values to indicated failures to used with #GError-struct.
     */

    /**
     * Enum values to indicated failures to used with #GError-struct.
     */
    export namespace FileError {
        export const $gtype: GObject.GType<FileError>;
    }

    enum FileError {
        /**
         * the parser failed
         */
        FILE_ERROR_PARSER_FAILURE,
    }
    class RegexUtilError extends GLib.Error {
        static $gtype: GObject.GType<RegexUtilError>;

        // Static fields

        static BAD_BACK_REFERENCE: number;
        static BAD_PATTERN: number;
        static BAD_REPETITION: number;
        static UNMATCHED_BRACE_INTERVAL_OPERATORS: number;
        static UNMATCHED_BRACKET_LIST_OPERATORS: number;
        static INVALID_COLLATING_ELEMENT: number;
        static UNKNOWN_CHARACTER_CLASS_NAME: number;
        static NON_SPECIFIC_ERROR: number;
        static TRAILING_BACKSLASH: number;
        static UNMATCHED_PARENTHESIS_GROUP_OPERATORS: number;
        static INVALID_RANGE_OPERATOR: number;
        static PATTERN_BUFFER_LARGER_THAN_64KB: number;
        static OUT_OF_MEMORY: number;
        static INVALID_BACK_REFERENCE: number;
        static UNSPECIFIED: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    /**
     * Seek type.
     */

    /**
     * Seek type.
     */
    export namespace SeekType {
        export const $gtype: GObject.GType<SeekType>;
    }

    enum SeekType {
        /**
         * seek from current position
         */
        SEEK_CUR,
        /**
         * seek by setting absolute position
         */
        SEEK_SET,
        /**
         * seek from end
         */
        SEEK_END,
    }

    export namespace SolverPolynomialError {
        export const $gtype: GObject.GType<SolverPolynomialError>;
    }

    enum SolverPolynomialError {
        SYMBOL_MISMATCH,
        EXPONENT_MISMATCH,
        DIVISION_BY_ZERO,
        EXPONENT_NOT_CONSTANT,
    }
    /**
     * #AgsSoundcardFormat specifies the audio data representation to be used.
     */

    /**
     * #AgsSoundcardFormat specifies the audio data representation to be used.
     */
    export namespace SoundcardFormat {
        export const $gtype: GObject.GType<SoundcardFormat>;
    }

    enum SoundcardFormat {
        /**
         * signed 8 bit raw pcm data
         */
        SOUNDCARD_SIGNED_8_BIT,
        /**
         * signed 16 bit raw pcm data
         */
        SOUNDCARD_SIGNED_16_BIT,
        /**
         * signed 24 bit raw pcm data
         */
        SOUNDCARD_SIGNED_24_BIT,
        /**
         * signed 32 bit raw pcm data
         */
        SOUNDCARD_SIGNED_32_BIT,
        /**
         * signed 64 bit raw pcm data
         */
        SOUNDCARD_SIGNED_64_BIT,
        /**
         * float raw pcm data
         */
        SOUNDCARD_FLOAT,
        /**
         * double raw pcm data
         */
        SOUNDCARD_DOUBLE,
        /**
         * complex audio data
         */
        SOUNDCARD_COMPLEX,
    }
    const AUTHENTICATION_MANAGER_DEFAULT_SESSION_TIMEOUT: number;
    const BUILD_ID: string;
    const COMPLEX_M_E: number;
    const COMPLEX_M_PI: number;
    const CONFIG_DEFAULT_BUILD_ID: string;
    const CONFIG_DEFAULT_VERSION: string;
    const CONFIG_GENERIC: string;
    const CONFIG_OSC_SERVER: string;
    const CONFIG_OSC_SERVER_0: string;
    const CONFIG_RECALL: string;
    const CONFIG_SEQUENCER: string;
    const CONFIG_SEQUENCER_0: string;
    const CONFIG_SERVER: string;
    const CONFIG_SOUNDCARD: string;
    const CONFIG_SOUNDCARD_0: string;
    const CONFIG_THREAD: string;
    const CONTROLLER_BASE_PATH: string;
    const DEFAULT_BUNDLE_ID: string;
    const DEFAULT_CONFIG: string;
    const DEFAULT_DIRECTORY: string;
    const FILE_CHARSET_CONVERTER_MAX_CONTENT_LENGTH: number;
    const FILE_CHARSET_CONVERTER_MAX_STRING_LENGTH: number;
    const FILE_CHECKSUM_LENGTH: number;
    const FILE_DEFAULT_APP_ENCODING: string;
    const FILE_DEFAULT_AUDIO_ENCODING: string;
    const FILE_DEFAULT_AUDIO_FORMAT: string;
    const FILE_DEFAULT_DTD: string;
    const FILE_DEFAULT_ENCODING: string;
    const FILE_ID_REF_RESOLVE_DATA: string;
    const FILE_ID_REF_SERIALIZE_DATA: string;
    const FILE_LINK_DEFAULT_BUILD_ID: string;
    const FILE_LINK_DEFAULT_VERSION: string;
    const FILE_UTIL_64BIT_MAX_STRING_LENGTH: number;
    const FILE_UTIL_DOUBLE_MAX_STRING_LENGTH: number;
    const NSEC_PER_SEC: number;
    const PRIORITY_DEFAULT_BUILD_ID: string;
    const PRIORITY_DEFAULT_VERSION: string;
    const PRIORITY_KEY_AUDIO: string;
    const PRIORITY_KEY_AUDIO_MAIN_LOOP: string;
    const PRIORITY_KEY_GUI_MAIN_LOOP: string;
    const PRIORITY_KEY_LIBAGS: string;
    const PRIORITY_KEY_OSC_SERVER_MAIN_LOOP: string;
    const PRIORITY_KEY_SERVER_MAIN_LOOP: string;
    const PRIORITY_RT_THREAD: string;
    const SEQUENCER_DEFAULT_BPM: number;
    const SEQUENCER_DEFAULT_BUFFER_SIZE: number;
    const SEQUENCER_DEFAULT_DELAY: number;
    const SEQUENCER_DEFAULT_DELAY_FACTOR: number;
    const SEQUENCER_DEFAULT_DEVICE: string;
    const SEQUENCER_DEFAULT_LATENCY: number;
    const SEQUENCER_DEFAULT_PERIOD: number;
    const SEQUENCER_DEFAULT_SAMPLERATE: number;
    const SEQUENCER_DEFAULT_SCALE: number;
    const SEQUENCER_DEFAULT_TACT: number;
    const SEQUENCER_DEFAULT_TACTRATE: number;
    const SEQUENCER_DEFAULT_TACT_JIFFIE: number;
    const SEQUENCER_MAX_MIDI_CHANNELS: number;
    const SEQUENCER_MAX_MIDI_KEYS: number;
    const SERVER_BUILD_ID: string;
    const SERVER_DEFAULT_AUTH_MODULE: string;
    const SERVER_DEFAULT_BACKLOG: number;
    const SERVER_DEFAULT_DOMAIN: string;
    const SERVER_DEFAULT_INET4_ADDRESS: string;
    const SERVER_DEFAULT_INET6_ADDRESS: string;
    const SERVER_DEFAULT_SERVER_PORT: number;
    const SERVER_VERSION: string;
    const SOUNDCARD_DEFAULT_BPM: number;
    const SOUNDCARD_DEFAULT_BUFFER_SIZE: number;
    const SOUNDCARD_DEFAULT_CACHE_BUFFER_SIZE: number;
    const SOUNDCARD_DEFAULT_DELAY: number;
    const SOUNDCARD_DEFAULT_DELAY_FACTOR: number;
    const SOUNDCARD_DEFAULT_DSP_CHANNELS: number;
    const SOUNDCARD_DEFAULT_LOOP_LEFT: number;
    const SOUNDCARD_DEFAULT_LOOP_RIGHT: number;
    const SOUNDCARD_DEFAULT_OVERCLOCK: number;
    const SOUNDCARD_DEFAULT_PCM_CHANNELS: number;
    const SOUNDCARD_DEFAULT_PERIOD: number;
    const SOUNDCARD_DEFAULT_SAMPLERATE: number;
    const SOUNDCARD_DEFAULT_SCALE: number;
    const SOUNDCARD_DEFAULT_SUB_BLOCK_COUNT: number;
    const SOUNDCARD_DEFAULT_TACT: number;
    const SOUNDCARD_DEFAULT_TACTRATE: number;
    const SOUNDCARD_DEFAULT_TACT_JIFFIE: number;
    const SOUNDCARD_DEFAULT_USE_CACHE: boolean;
    const SOUNDCARD_MAX_BUFFER_SIZE: number;
    const SOUNDCARD_MAX_DSP_CHANNELS: number;
    const SOUNDCARD_MAX_PCM_CHANNELS: number;
    const SOUNDCARD_MAX_SAMPLERATE: number;
    const SOUNDCARD_MIN_BUFFER_SIZE: number;
    const SOUNDCARD_MIN_DSP_CHANNELS: number;
    const SOUNDCARD_MIN_PCM_CHANNELS: number;
    const SOUNDCARD_MIN_SAMPLERATE: number;
    const SUBSCRIPT_0: string;
    const SUBSCRIPT_1: string;
    const SUBSCRIPT_2: string;
    const SUBSCRIPT_3: string;
    const SUBSCRIPT_4: string;
    const SUBSCRIPT_5: string;
    const SUBSCRIPT_6: string;
    const SUBSCRIPT_7: string;
    const SUBSCRIPT_8: string;
    const SUBSCRIPT_9: string;
    const SYMBOLIC_COMPLEX_UNIT: string;
    const SYMBOLIC_EULER: string;
    const SYMBOLIC_INFINIT: string;
    const SYMBOLIC_PI: string;
    const THREAD_BUILD_ID: string;
    const THREAD_DEFAULT_ATTACK: number;
    const THREAD_DEFAULT_JIFFIE: number;
    const THREAD_DEFAULT_MAX_PRECISION: number;
    const THREAD_DEFAULT_VERSION: string;
    const THREAD_HERTZ_JIFFIE: number;
    const THREAD_MAX_PRECISION: number;
    const THREAD_POOL_DEFAULT_MAX_THREADS: number;
    const THREAD_POOL_DEFAULT_MAX_UNUSED_THREADS: number;
    const THREAD_TOLERANCE: number;
    const THREAD_YIELD_JIFFIE: number;
    const TIME_ZERO: string;
    const TURTLE_BOOLEAN_LITERAL_FALSE: string;
    const TURTLE_BOOLEAN_LITERAL_TRUE: string;
    const TURTLE_DEFAULT_ENCODING: string;
    const TURTLE_DEFAULT_VERSION: string;
    const USEC_PER_SEC: number;
    const UUID_DEFAULT_LENGTH: number;
    const UUID_STRING_DEFAULT_LENGTH: number;
    const VERSION: string;
    /**
     * Read a #AgsComplex quantity of `cbuffer`.
     * @param cbuffer the character buffer
     * @param byte_order reverse order
     * @returns the #AgsComplex value
     */
    function buffer_util_char_buffer_read_complex(cbuffer: number, byte_order: number): Complex;
    /**
     * Read a gdouble quantity of `cbuffer`.
     * @param cbuffer the character buffer
     * @param byte_order reverse order
     * @returns the gdouble value
     */
    function buffer_util_char_buffer_read_double(cbuffer: number, byte_order: number): number;
    /**
     * Read a gfloat quantity of `cbuffer`.
     * @param cbuffer the character buffer
     * @param byte_order reverse order
     * @returns the gfloat value
     */
    function buffer_util_char_buffer_read_float(cbuffer: number, byte_order: number): number;
    /**
     * Read a gint16 quantity of `cbuffer`.
     * @param cbuffer the character buffer
     * @param byte_order reverse order
     * @returns the gint16 value
     */
    function buffer_util_char_buffer_read_s16(cbuffer: number, byte_order: number): number;
    /**
     * Read a gint32 24 bit quantity of `cbuffer`.
     * @param cbuffer the character buffer
     * @param byte_order reverse order
     * @returns the gint32 value
     */
    function buffer_util_char_buffer_read_s24(cbuffer: number, byte_order: number): number;
    /**
     * Read a gint32 32 bit quantity of `cbuffer`.
     * @param cbuffer the character buffer
     * @param byte_order reverse order
     * @returns the gint32 value
     */
    function buffer_util_char_buffer_read_s32(cbuffer: number, byte_order: number): number;
    /**
     * Read a gint64 64 bit quantity of `cbuffer`.
     * @param cbuffer the character buffer
     * @param byte_order reverse order
     * @returns the gint64 value
     */
    function buffer_util_char_buffer_read_s64(cbuffer: number, byte_order: number): number;
    /**
     * Read a gint8 quantity of `cbuffer`.
     * @param cbuffer the character buffer
     * @param byte_order reverse order, ignored here
     * @returns the gint8 value
     */
    function buffer_util_char_buffer_read_s8(cbuffer: number, byte_order: number): number;
    /**
     * Swap bytes in view of Little/Big-Endian.
     * @param cbuffer the buffer to swap
     * @param word_size the word size
     * @param buffer_size the buffer size
     */
    function buffer_util_char_buffer_swap_bytes(cbuffer: number, word_size: number, buffer_size: number): void;
    /**
     * Unpack `cbuffer` to a #AgsComplex buffer
     * @param cbuffer the guchar buffer
     * @param buffer_size the buffer size
     * @returns the #AgsComplex buffer
     */
    function buffer_util_char_buffer_to_complex(cbuffer: number, buffer_size: number): Complex;
    /**
     * Unpack `cbuffer` to a gdouble buffer
     * @param cbuffer the guchar buffer
     * @param buffer_size the buffer size
     * @returns the gdouble buffer
     */
    function buffer_util_char_buffer_to_double(cbuffer: number, buffer_size: number): number;
    /**
     * Unpack `cbuffer` to a gfloat buffer
     * @param cbuffer the guchar buffer
     * @param buffer_size the buffer size
     * @returns the gfloat buffer
     */
    function buffer_util_char_buffer_to_float(cbuffer: number, buffer_size: number): number;
    /**
     * Unpack `cbuffer` to a gint16 buffer
     * @param cbuffer the guchar buffer
     * @param buffer_size the buffer size
     * @returns the gint16 buffer
     */
    function buffer_util_char_buffer_to_s16(cbuffer: number, buffer_size: number): number;
    /**
     * Unpack `cbuffer` to a gint32 buffer
     * @param cbuffer the guchar buffer
     * @param buffer_size the buffer size
     * @returns the gint32 buffer
     */
    function buffer_util_char_buffer_to_s24(cbuffer: number, buffer_size: number): number;
    /**
     * Unpack `cbuffer` to a gint32 buffer
     * @param cbuffer the guchar buffer
     * @param buffer_size the buffer size
     * @returns the gint32 buffer
     */
    function buffer_util_char_buffer_to_s32(cbuffer: number, buffer_size: number): number;
    /**
     * Unpack `cbuffer` to a gint64 buffer
     * @param cbuffer the guchar buffer
     * @param buffer_size the buffer size
     * @returns the gint64 buffer
     */
    function buffer_util_char_buffer_to_s64(cbuffer: number, buffer_size: number): number;
    /**
     * Unpack `cbuffer` to a gint8 buffer
     * @param cbuffer the guchar buffer
     * @param buffer_size the buffer size
     * @returns the gint8 buffer
     */
    function buffer_util_char_buffer_to_s8(cbuffer: number, buffer_size: number): number;
    /**
     * Write a #AgsComplex quantity to `cbuffer`.
     * @param cbuffer the character buffer
     * @param value the #AgsComplex value
     * @param byte_order reverse order
     */
    function buffer_util_char_buffer_write_complex(cbuffer: number, value: Complex, byte_order: number): void;
    /**
     * Write a gdouble quantity to `cbuffer`.
     * @param cbuffer the character buffer
     * @param value the gdouble value
     * @param byte_order reverse order
     */
    function buffer_util_char_buffer_write_double(cbuffer: number, value: number, byte_order: number): void;
    /**
     * Write a gfloat quantity to `cbuffer`.
     * @param cbuffer the character buffer
     * @param value the gfloat value
     * @param byte_order reverse order
     */
    function buffer_util_char_buffer_write_float(cbuffer: number, value: number, byte_order: number): void;
    /**
     * Write a gint16 quantity to `cbuffer`.
     * @param cbuffer the character buffer
     * @param value the gint16 value
     * @param byte_order reverse order
     */
    function buffer_util_char_buffer_write_s16(cbuffer: number, value: number, byte_order: number): void;
    /**
     * Write a gint32 quantity to `cbuffer`.
     * @param cbuffer the character buffer
     * @param value the gint32 value
     * @param byte_order reverse order
     */
    function buffer_util_char_buffer_write_s24(cbuffer: number, value: number, byte_order: number): void;
    /**
     * Write a gint32 quantity to `cbuffer`.
     * @param cbuffer the character buffer
     * @param value the gint32 value
     * @param byte_order reverse order
     */
    function buffer_util_char_buffer_write_s32(cbuffer: number, value: number, byte_order: number): void;
    /**
     * Write a gint64 quantity to `cbuffer`.
     * @param cbuffer the character buffer
     * @param value the gint64 value
     * @param byte_order reverse order
     */
    function buffer_util_char_buffer_write_s64(cbuffer: number, value: number, byte_order: number): void;
    /**
     * Write a gint8 quantity to `cbuffer`.
     * @param cbuffer the character buffer
     * @param value the gint8 value
     * @param byte_order reverse order
     */
    function buffer_util_char_buffer_write_s8(cbuffer: number, value: number, byte_order: number): void;
    /**
     * Pack `buffer` into an guchar buffer.
     * @param buffer the #AgsComplex buffer
     * @param buffer_length the buffer length
     * @returns the guchar buffer
     */
    function buffer_util_complex_to_char_buffer(buffer: Complex, buffer_length: number): number;
    /**
     * Pack `buffer` into an guchar buffer.
     * @param buffer the gdouble buffer
     * @param buffer_length the buffer length
     * @returns the guchar buffer
     */
    function buffer_util_double_to_char_buffer(buffer: number, buffer_length: number): number;
    /**
     * Pack `buffer` into an guchar buffer.
     * @param buffer the gfloat buffer
     * @param buffer_length the buffer length
     * @returns the guchar buffer
     */
    function buffer_util_float_to_char_buffer(buffer: number, buffer_length: number): number;
    /**
     * Pack `buffer` into an guchar buffer.
     * @param buffer the gint16 buffer
     * @param buffer_length the buffer length
     * @returns the guchar buffer
     */
    function buffer_util_s16_to_char_buffer(buffer: number, buffer_length: number): number;
    /**
     * Pack `buffer` into an guchar buffer.
     * @param buffer the gint32 buffer
     * @param buffer_length the buffer length
     * @returns the guchar buffer
     */
    function buffer_util_s24_to_char_buffer(buffer: number, buffer_length: number): number;
    /**
     * Pack `buffer` into an guchar buffer.
     * @param buffer the gint32 buffer
     * @param buffer_length the buffer length
     * @returns the guchar buffer
     */
    function buffer_util_s32_to_char_buffer(buffer: number, buffer_length: number): number;
    /**
     * Pack `buffer` into an guchar buffer.
     * @param buffer the gint64 buffer
     * @param buffer_length the buffer length
     * @returns the guchar buffer
     */
    function buffer_util_s64_to_char_buffer(buffer: number, buffer_length: number): number;
    /**
     * Pack `buffer` into an guchar buffer.
     * @param buffer the gint8 buffer
     * @param buffer_length the buffer length
     * @returns the guchar buffer
     */
    function buffer_util_s8_to_char_buffer(buffer: number, buffer_length: number): number;
    function cclosure_marshal_BOOLEAN__OBJECT_OBJECT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_BOOLEAN__POINTER_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_BOOLEAN__UINT_POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_BOOLEAN__VOID(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_DOUBLE__DOUBLE_BOOLEAN(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_INT64__OBJECT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_INT__VOID(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_OBJECT__OBJECT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_OBJECT__OBJECT_OBJECT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_OBJECT__OBJECT_POINTER_POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_OBJECT__OBJECT_POINTER_POINTER_POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_OBJECT__STRING_STRING_STRING(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_OBJECT__UINT_POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_OBJECT__VOID(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__INT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__INT_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__OBJECT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__OBJECT_OBJECT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__OBJECT_POINTER_INT64(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__OBJECT_POINTER_OBJECT_POINTER_STRING_STRING_STRING(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__OBJECT_POINTER_OBJECT_STRING_STRING_STRING(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__OBJECT_POINTER_POINTER_OBJECT_STRING_STRING_STRING(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__OBJECT_POINTER_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__OBJECT_STRING_STRING_STRING_POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__OBJECT_STRING_STRING_STRING_STRING_POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__OBJECT_STRING_STRING_STRING_STRING_UINT_POINTER_POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__OBJECT_STRING_STRING_STRING_UINT_POINTER_POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__POINTER_POINTER_POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__POINTER_POINTER_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__POINTER_STRING_STRING(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__POINTER_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__POINTER_UINT_POINTER_POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__STRING_STRING(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__STRING_STRING_STRING(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__STRING_STRING_STRING_STRING(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__UINT_POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__UINT_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_POINTER__VOID(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_STRING__POINTER_STRING_STRING_STRING_STRING_UINT_POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_STRING__STRING_STRING(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_UINT__INT_UINT_POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_UINT__VOID(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__BOOLEAN_POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__DOUBLE_DOUBLE(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__INT64_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__INT_POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__INT_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__INT_UINT_POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__OBJECT_OBJECT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__OBJECT_OBJECT_OBJECT_INT_BOOLEAN(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__OBJECT_OBJECT_OBJECT_OBJECT_OBJECT_OBJECT_OBJECT_OBJECT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__OBJECT_OBJECT_OBJECT_OBJECT_OBJECT_OBJECT_UINT_INT_BOOLEAN(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__OBJECT_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__OBJECT_UINT_UINT_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__POINTER_INT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__POINTER_INT_INT_BOOLEAN(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__POINTER_INT_POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__POINTER_OBJECT_OBJECT_STRING_STRING_STRING_UINT_UINT_UINT_UINT_INT_UINT_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__POINTER_POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__POINTER_POINTER_POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__POINTER_POINTER_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__POINTER_STRING_STRING_STRING_INT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__POINTER_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__POINTER_UINT_BOOLEAN(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__POINTER_UINT_POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__POINTER_UINT_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__STRING_POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__STRING_STRING_STRING(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__STRING_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__STRING_UINT_DOUBLE(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__STRING_UINT_POINTER(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__STRING_UINT_STRING_DOUBLE(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__UINT64(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__UINT_BOOLEAN(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__UINT_DOUBLE(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__UINT_DOUBLE_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__UINT_INT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__UINT_POINTER_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__UINT_STRING_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__UINT_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__UINT_UINT_BOOLEAN(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__UINT_UINT_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__UINT_UINT_UINT_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__UINT_UINT_UINT_UINT_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__UINT_UINT_UINT_UINT_UINT_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function cclosure_marshal_VOID__UINT_UINT_UINT_UINT_UINT_UINT_UINT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * Allocate #AgsComplex-struct
     * @returns a new #AgsComplex-struct
     */
    function complex_alloc(): Complex;
    /**
     * Allocated #AgsControllerResource-struct.
     * @param group_id the group id
     * @param user_id the user id
     * @param access_mode the access mode
     * @returns the newly allocated #AgsControllerResource-struct
     */
    function controller_resource_alloc(group_id: string, user_id: string, access_mode: number): any | null;
    /**
     * Free `controller_resource`.
     * @param controller_resource the #AgsControllerResource-struct
     */
    function controller_resource_free(controller_resource?: any | null): void;
    /**
     * Increase ref-count of `controller_resource`.
     * @param controller_resource the #AgsControllerResource-struct
     */
    function controller_resource_ref(controller_resource?: any | null): void;
    /**
     * Decrease ref-count of `controller_resource` and free it if ref-count drops to 0.
     * @param controller_resource the #AgsControllerResource-struct
     */
    function controller_resource_unref(controller_resource?: any | null): void;
    /**
     * Allocated a destroy entry.
     * @param ptr a pointer
     * @param destroy_func the @ptr's destroy function
     * @returns the allocated #AgsDestroyEntry
     */
    function destroy_entry_alloc(ptr: any | null, destroy_func: DestroyFunc): any | null;
    /**
     * Run dispose and unref `gobject`.
     * @param gobject the #GObject to destroy
     */
    function destroy_util_dispose_and_unref(gobject: GObject.Object): void;
    /**
     * Check host is Big Endian.
     * @returns %TRUE if BE, otherwise %FALSE
     */
    function endian_host_is_be(): boolean;
    /**
     * Check host is Little Endian.
     * @returns %TRUE if LE, otherwise %FALSE
     */
    function endian_host_is_le(): boolean;
    /**
     * Swaps the floating point numbers endianness.
     * @param x the float to swap
     * @returns the byte-swapped float
     */
    function endian_swap_float(x: number): number;
    /**
     * Allocate #AgsFileUtil-struct
     * @param app_encoding the application encoding
     * @param encoding the file encoding
     * @returns a new #AgsFileUtil-struct
     */
    function file_util_alloc(app_encoding: string, encoding: string): FileUtil;
    /**
     * Get global value for `key`.
     * @param key the key as string
     * @returns the #GValue-struct if @key found, otherwise %NULL
     */
    function globals_get(key: string): unknown;
    /**
     * Get globals hash table.
     * @returns the #GHashTable containig globals
     */
    function globals_get_hash_table(): GLib.HashTable<string, GObject.Value>;
    /**
     * Set global key/value.
     * @param key the key as string
     * @param value the #GValue-struct
     */
    function globals_set(key: string, value: GObject.Value | any): void;
    /**
     * Creates a new string containing an UUID.
     * @returns the UUID as string
     */
    function id_generator_create_uuid(): string;
    /**
     * Find `gtype` within `list`.
     * @param list the #GList-struct
     * @param gtype the #GType to find
     * @returns the next matching #GList-struct
     */
    function list_util_find_type(list: GObject.Object[], gtype: GObject.GType): GObject.Object[];
    /**
     * Alloc #AgsLoginInfo-struct.
     * @returns the newly allocated #AgsLoginInfo-struct
     */
    function login_info_alloc(): any | null;
    /**
     * Free `login_info`.
     * @param login_info the #AgsLoginInfo-struct
     */
    function login_info_free(login_info?: any | null): void;
    /**
     * Increase ref-count of `login_info`.
     * @param login_info the #AgsLoginInfo-struct
     */
    function login_info_ref(login_info?: any | null): void;
    /**
     * Decrease ref-count of `login_info` and free it if ref-count drops to 0.
     * @param login_info the #AgsLoginInfo-struct
     */
    function login_info_unref(login_info?: any | null): void;
    /**
     * Compute `value` from `coefficient`.
     * @param coefficient the coefficient string
     * @returns %TRUE on success, otherwise %FALSE
     */
    function math_util_coefficient_to_complex(coefficient: string): [boolean, Complex];
    /**
     * Find exponent parenthesis.
     * @param str the string
     */
    function math_util_find_exponent_parenthesis(str: string): [number, number, number, number];
    /**
     * Find next function.
     * @param str the string
     * @returns the string offset matching function, otherwise %NULL
     */
    function math_util_find_function(str: string): string;
    /**
     * Find function parenthesis.
     * @param str the string
     */
    function math_util_find_function_parenthesis(str: string): [number, number, number, number];
    /**
     * Find all parenthesis.
     * @param str the string
     */
    function math_util_find_parenthesis_all(str: string): [number, number, number, number];
    /**
     * Find next symbol.
     * @param str the string
     * @returns the string offset matching symbol, otherwise %NULL
     */
    function math_util_find_symbol(str: string): string;
    /**
     * Find term parenthesis.
     * @param str the string
     */
    function math_util_find_term_parenthesis(str: string): [number, number, number, number];
    /**
     * Test if `term` is a term.
     * @param term the term
     * @returns %TRUE on success, otherwise %FALSE
     */
    function math_util_is_term(term: string): boolean;
    /**
     * Match coefficient including optional sign.
     * @param offset the string pointer
     * @param end_ptr the end of @offset
     * @returns %TRUE on success, otherwise %FALSE
     */
    function math_util_match_coefficient(offset: string, end_ptr: string): [boolean, string, string];
    /**
     * Match exponent with or without parenthesis.
     * @param offset the string pointer
     * @param end_ptr the end of @offset
     * @returns %TRUE on success, otherwise %FALSE
     */
    function math_util_match_exponent(offset: string, end_ptr: string): [boolean, string, string];
    /**
     * Match function.
     * @param offset the string pointer
     * @param end_ptr the end of @offset
     * @returns %TRUE on success, otherwise %FALSE
     */
    function math_util_match_function(offset: string, end_ptr: string): [boolean, string, string];
    /**
     * Match operator.
     * @param offset the string pointer
     * @param end_ptr the end of @offset
     * @returns %TRUE on success, otherwise %FALSE
     */
    function math_util_match_operator(offset: string, end_ptr: string): [boolean, string, string];
    /**
     * Match sign.
     * @param offset the string pointer
     * @param end_ptr the end of @offset
     * @returns %TRUE on success, otherwise %FALSE
     */
    function math_util_match_sign(offset: string, end_ptr: string): [boolean, string, string];
    /**
     * Match symbol including optional sign.
     * @param offset the string pointer
     * @param end_ptr the end of @offset
     * @returns %TRUE on success, otherwise %FALSE
     */
    function math_util_match_symbol(offset: string, end_ptr: string): [boolean, string, string];
    function math_util_multiply_coefficient_all(coefficient: string, value_count: number): Complex;
    /**
     * Split `polynomial` into coefficient, powers of symbols and summand.
     * @param polynomial the polynomial
     */
    function math_util_split_polynomial(polynomial: string): [string, string];
    /**
     * Split `sum` into summands.
     * @param sum the sum
     */
    function math_util_split_sum(sum: string): string;
    /**
     * Read of file.
     * @param file the #GObject
     * @param node the node
     * @param plugin the #AgsPlugin
     */
    function plugin_read(file: GObject.Object, node: libxml2.Node, plugin: Plugin): void;
    /**
     * Write to file.
     * @param file the #GObject
     * @param parent the parent node
     * @param plugin the #AgsPlugin
     * @returns the new node you created
     */
    function plugin_write(file: GObject.Object, parent: libxml2.Node, plugin: Plugin): libxml2.Node;
    /**
     * Allocate #AgsRegexUtil-struct
     * @param app_encoding the application encoding
     * @param encoding the input encoding
     * @param is_unichar is gunichar
     * @param is_unichar2 is gunichar2
     * @returns a new #AgsRegexUtil-struct
     */
    function regex_util_alloc(
        app_encoding: string,
        encoding: string,
        is_unichar: boolean,
        is_unichar2: boolean,
    ): RegexUtil;
    function regex_util_error_quark(): GLib.Quark;
    /**
     * Allocate #AgsSolverPath-struct
     * @param nth_column the nth-column
     * @param nth_row_a nth-row a
     * @param nth_row_b nth-row b
     * @returns a new #AgsSolverPath-struct
     */
    function solver_path_alloc(nth_column: number, nth_row_a: number, nth_row_b: number): SolverPath;
    /**
     * Get buffer size.
     * @param config the #AgsConfig
     * @returns the buffer size
     */
    function soundcard_helper_config_get_buffer_size(config: Config): number;
    /**
     * Get cache buffer size.
     * @param config the #AgsConfig
     * @returns the cache buffer size
     */
    function soundcard_helper_config_get_cache_buffer_size(config: Config): number;
    /**
     * Get dsp channels count.
     * @param config the #AgsConfig
     * @returns the count of dsp channels
     */
    function soundcard_helper_config_get_dsp_channels(config: Config): number;
    /**
     * Get format as #AgsSoundcardFormat-enum.
     * @param config the #AgsConfig
     * @returns the format
     */
    function soundcard_helper_config_get_format(config: Config): number;
    /**
     * Get pcm channels count.
     * @param config the #AgsConfig
     * @returns the count of pcm channels
     */
    function soundcard_helper_config_get_pcm_channels(config: Config): number;
    /**
     * Get samplerate.
     * @param config the #AgsConfig
     * @returns the samplerate
     */
    function soundcard_helper_config_get_samplerate(config: Config): number;
    /**
     * Get use cache.
     * @param config the #AgsConfig
     * @returns if use cache %TRUE, otherwise %FALSE
     */
    function soundcard_helper_config_get_use_cache(config: Config): boolean;
    /**
     * Escape all occurence of single quotes.
     * @param str the string to escape
     * @returns the newly allocated string
     */
    function string_util_escape_single_quote(str: string): string;
    /**
     * String from mcoded7 encoding.
     * @param mcoded7_str the string to decode
     * @returns the newly allocated string
     */
    function string_util_from_mcoded7(mcoded7_str: string): string;
    /**
     * String to mcoded7 encoding.
     * @param str the string to encode
     * @returns the newly allocated string
     */
    function string_util_to_mcoded7(str: string): string;
    /**
     * Check occurence of `str` within `str_array`
     * @param str_array the string vector
     * @param str the string to match
     * @returns %TRUE if found, else %FALSE
     */
    function strv_contains(str_array: string[], str: string): boolean;
    /**
     * Check `strv1` and `strv2` to be equal. The arrays don't have to be
     * sorted.
     * @param strv1 the string vector
     * @param strv2 an other string vector
     * @returns %TRUE on success, otherwise %FALSE
     */
    function strv_equal(strv1: string, strv2: string): boolean;
    /**
     * Check by comparing `str` against `str_array` items.
     * @param str_array the string vector
     * @param str the string to match
     * @returns the first matching position or -1, if not found
     */
    function strv_index(str_array: string[], str: string): number;
    /**
     * Count the number of non-%NULL entries in the array.
     * @param str_array the string vector
     * @returns the length of the vector
     */
    function strv_length(str_array: string[]): number;
    /**
     * Calculates uptime from `offset` by applying factors `bpm,` `delay` and `delay_factor`
     * giving you the result as string.
     * @param offset the offset in tics
     * @param bpm the beats per minute
     * @param delay the buffer time as delay
     * @param delay_factor tact segmentation
     * @returns the string containing the time, a minus sign is prepend if factors   are invalid
     */
    function time_get_uptime_from_offset(offset: number, bpm: number, delay: number, delay_factor: number): string;
    /**
     * Nanosleep.
     * @param req the requisition to sleep
     */
    function time_nanosleep(req?: any | null): void;
    /**
     * Check `start_time` plus `timeout_delay` against current time.
     * @param start_time the start time #timespec-struct
     * @param timeout_delay the delay #timespec-struct
     * @returns %TRUE if timeout expired, otherwise %FALSE
     */
    function time_timeout_expired(start_time?: any | null, timeout_delay?: any | null): boolean;
    /**
     * Allocate #AgsUUID.
     * @returns a new #AgsUUID
     */
    function uuid_alloc(): UUID;
    /**
     * Retrieve #AgsUUID by parsing `str`.
     * @param str the UUID as string
     * @returns the new #AgsUUID on success, otherwise %NULL
     */
    function uuid_from_string(str: string): UUID;
    /**
     * Do loop and invoke ags_worker_thread_do_poll() unless flag
     * AGS_WORKER_THREAD_RUNNING was unset.
     * @param ptr the #AgsWorkerThread
     */
    function woker_thread_do_poll_loop(ptr?: any | null): any | null;
    interface DestroyFunc {
        (ptr?: any | null): void;
    }
    interface FileResolve {
        (): void;
    }
    interface ReturnableThreadCallback {
        (returnable_thread: ReturnableThread, data?: any | null): void;
    }
    /**
     * Enum values to control the behavior or indicate internal state of #AgsApplicationContext by
     * enable/disable as flags.
     */

    /**
     * Enum values to control the behavior or indicate internal state of #AgsApplicationContext by
     * enable/disable as flags.
     */
    export namespace ApplicationContextFlags {
        export const $gtype: GObject.GType<ApplicationContextFlags>;
    }

    enum ApplicationContextFlags {
        /**
         * indicates the types have been registered
         */
        APPLICATION_CONTEXT_TYPES_REGISTERED,
    }
    /**
     * Enum values to specify particular state.
     */

    /**
     * Enum values to specify particular state.
     */
    export namespace ConnectableFlags {
        export const $gtype: GObject.GType<ConnectableFlags>;
    }

    enum ConnectableFlags {
        /**
         * added to registry
         */
        ADDED_TO_REGISTRY,
        /**
         * connected
         */
        CONNECTED,
    }
    /**
     * Enum values to control the behavior or indicate internal state of #AgsFile by
     * enable/disable as flags.
     */

    /**
     * Enum values to control the behavior or indicate internal state of #AgsFile by
     * enable/disable as flags.
     */
    export namespace FileFlags {
        export const $gtype: GObject.GType<FileFlags>;
    }

    enum FileFlags {
        /**
         * opened file for reading
         */
        FILE_READ,
        /**
         * read audio signal
         */
        FILE_READ_AUDIO_SIGNAL,
        /**
         * read embedded audio data
         */
        FILE_READ_EMBEDDED_AUDIO,
        /**
         * opened file for writing
         */
        FILE_WRITE,
        /**
         * write audio signal
         */
        FILE_WRITE_AUDIO_SIGNAL,
        /**
         * write embedded audio data
         */
        FILE_WRITE_EMBEDDED_AUDIO,
    }
    /**
     * AGS_REGEX_UTIL_POSIX_EXTENDED_SYNTAX: extended regular expression syntax
     * AGS_REGEX_UTIL_CASE_INSENSITIVE: do not differentiate case
     * AGS_REGEX_UTIL_NO_POSITION_REPORT_OF_MATCHES: the match_count and match_ptr parameters of ags_regex_util_execute() are ignored
     * AGS_REGEX_UTIL_NO_NEWLINE_MATCH: do not match newlines as using match-any-character
     * Enum values to control the behavior of ags_regex_util_compile() and related by
     * enable/disable as flags.
     */

    /**
     * AGS_REGEX_UTIL_POSIX_EXTENDED_SYNTAX: extended regular expression syntax
     * AGS_REGEX_UTIL_CASE_INSENSITIVE: do not differentiate case
     * AGS_REGEX_UTIL_NO_POSITION_REPORT_OF_MATCHES: the match_count and match_ptr parameters of ags_regex_util_execute() are ignored
     * AGS_REGEX_UTIL_NO_NEWLINE_MATCH: do not match newlines as using match-any-character
     * Enum values to control the behavior of ags_regex_util_compile() and related by
     * enable/disable as flags.
     */
    export namespace RegexUtilCompileFlags {
        export const $gtype: GObject.GType<RegexUtilCompileFlags>;
    }

    enum RegexUtilCompileFlags {
        REGEX_UTIL_POSIX_EXTENDED_SYNTAX,
        REGEX_UTIL_CASE_INSENSITIVE,
        REGEX_UTIL_NO_POSITION_REPORT_OF_MATCHES,
        REGEX_UTIL_NO_NEWLINE_MATCH,
    }
    /**
     * AGS_REGEX_UTIL_NOT_BEGINNING_OF_LINE: match-beginning-of-line operator always fails, the beginning of of string should not be interpreted as beginning of line
     * AGS_REGEX_UTIL_NOT_END_OF_LINE: match-end-of-line operator always fails
     * AGS_REGEX_UTIL_START_END: use match_ptr[0].start_match_offset and match_ptr[0].end_match_offset as string length, allows the use of NUL bytes
     * Enum values to control the behavior of ags_regex_util_execute() and such by
     * enable/disable as flags.
     */

    /**
     * AGS_REGEX_UTIL_NOT_BEGINNING_OF_LINE: match-beginning-of-line operator always fails, the beginning of of string should not be interpreted as beginning of line
     * AGS_REGEX_UTIL_NOT_END_OF_LINE: match-end-of-line operator always fails
     * AGS_REGEX_UTIL_START_END: use match_ptr[0].start_match_offset and match_ptr[0].end_match_offset as string length, allows the use of NUL bytes
     * Enum values to control the behavior of ags_regex_util_execute() and such by
     * enable/disable as flags.
     */
    export namespace RegexUtilExecuteFlags {
        export const $gtype: GObject.GType<RegexUtilExecuteFlags>;
    }

    enum RegexUtilExecuteFlags {
        REGEX_UTIL_NOT_BEGINNING_OF_LINE,
        REGEX_UTIL_END_OF_LINE,
        REGEX_UTIL_START_END,
    }
    /**
     * Enum values to control the behavior or indicate internal state of #AgsReturnableThread by
     * enable/disable as flags.
     */

    /**
     * Enum values to control the behavior or indicate internal state of #AgsReturnableThread by
     * enable/disable as flags.
     */
    export namespace ReturnableThreadFlags {
        export const $gtype: GObject.GType<ReturnableThreadFlags>;
    }

    enum ReturnableThreadFlags {
        /**
         * the thread is in use
         */
        RETURNABLE_THREAD_IN_USE,
        /**
         * not used
         */
        RETURNABLE_THREAD_RESET,
        /**
         * call #AgsThread::run() only one time
         */
        RETURNABLE_THREAD_RUN_ONCE,
    }
    /**
     * The #AgsSecurityContextMode specifies basic account permissions.
     */

    /**
     * The #AgsSecurityContextMode specifies basic account permissions.
     */
    export namespace SecurityContextMode {
        export const $gtype: GObject.GType<SecurityContextMode>;
    }

    enum SecurityContextMode {
        /**
         * allowed to read using RPC
         */
        SECURITY_CONTEXT_RPC_READ,
        /**
         * allowed to write using RPC
         */
        SECURITY_CONTEXT_RPC_WRITE,
        /**
         * allowed to execute using RPC
         */
        SECURITY_CONTEXT_RPC_EXECUTE,
        /**
         * allowed to read account information
         */
        SECURITY_CONTEXT_ACCOUNT_READ,
        /**
         * allowed to write account information
         */
        SECURITY_CONTEXT_ACCOUNT_WRITE,
    }
    /**
     * Enum values to control the behavior or indicate internal state of #AgsServer by
     * enable/disable as flags.
     */

    /**
     * Enum values to control the behavior or indicate internal state of #AgsServer by
     * enable/disable as flags.
     */
    export namespace ServerFlags {
        export const $gtype: GObject.GType<ServerFlags>;
    }

    enum ServerFlags {
        /**
         * the server was started
         */
        SERVER_STARTED,
        /**
         * the server is up and running
         */
        SERVER_RUNNING,
        /**
         * the server is closing connections and terminating
         */
        SERVER_TERMINATING,
        /**
         * use IPv4
         */
        SERVER_INET4,
        /**
         * use IPv6
         */
        SERVER_INET6,
        /**
         * listen on any address
         */
        SERVER_ANY_ADDRESS,
        /**
         * start the server
         */
        SERVER_AUTO_START,
    }
    /**
     * Enum values to tell about capability.
     */

    /**
     * Enum values to tell about capability.
     */
    export namespace SoundcardCapability {
        export const $gtype: GObject.GType<SoundcardCapability>;
    }

    enum SoundcardCapability {
        /**
         * capability playback
         */
        SOUNDCARD_CAPABILITY_PLAYBACK,
        /**
         * capability capture
         */
        SOUNDCARD_CAPABILITY_CAPTURE,
        /**
         * capability duplex
         */
        SOUNDCARD_CAPABILITY_DUPLEX,
    }
    /**
     * Enum values to control the behavior or indicate internal state of #AgsTaskCompletion by
     * enable/disable as flags.
     */

    /**
     * Enum values to control the behavior or indicate internal state of #AgsTaskCompletion by
     * enable/disable as flags.
     */
    export namespace TaskCompletionFlags {
        export const $gtype: GObject.GType<TaskCompletionFlags>;
    }

    enum TaskCompletionFlags {
        /**
         * the assigned task has been queued
         */
        TASK_COMPLETION_QUEUED,
        /**
         * the assigned task is busy
         */
        TASK_COMPLETION_BUSY,
        /**
         * the assigned task is ready
         */
        TASK_COMPLETION_READY,
        /**
         * the assigned task has been completed
         */
        TASK_COMPLETION_COMPLETED,
    }
    /**
     * Enum values to control the behavior or indicate internal state of #AgsTask by
     * enable/disable as flags.
     */

    /**
     * Enum values to control the behavior or indicate internal state of #AgsTask by
     * enable/disable as flags.
     */
    export namespace TaskFlags {
        export const $gtype: GObject.GType<TaskFlags>;
    }

    enum TaskFlags {
        /**
         * the task is locked
         */
        LOCKED,
        /**
         * call task repeatedly
         */
        CYCLIC,
    }
    /**
     * Enum values to control the behavior or indicate internal state of #AgsThreadApplicationContext by
     * enable/disable as sync_flags.
     */

    /**
     * Enum values to control the behavior or indicate internal state of #AgsThreadApplicationContext by
     * enable/disable as sync_flags.
     */
    export namespace ThreadApplicationContextFlags {
        export const $gtype: GObject.GType<ThreadApplicationContextFlags>;
    }

    enum ThreadApplicationContextFlags {
        /**
         * run all threads in one single loop
         */
        THREAD_APPLICATION_CONTEXT_SINGLE_THREAD,
    }
    /**
     * Enum values to control the behavior or indicate internal state of #AgsThread by
     * enable/disable as flags.
     */

    /**
     * Enum values to control the behavior or indicate internal state of #AgsThread by
     * enable/disable as flags.
     */
    export namespace ThreadFlags {
        export const $gtype: GObject.GType<ThreadFlags>;
    }

    enum ThreadFlags {
        /**
         * call g_object_unref() before g_thread_exit()
         */
        THREAD_UNREF_ON_EXIT,
        /**
         * do sync immediately
         */
        THREAD_IMMEDIATE_SYNC,
        /**
         * intermediate pre sync to parent thread
         */
        THREAD_INTERMEDIATE_PRE_SYNC,
        /**
         * intermediate post sync to parent thread
         */
        THREAD_INTERMEDIATE_POST_SYNC,
        /**
         * sync frequency as starting thread
         */
        THREAD_START_SYNCED_FREQ,
        /**
         * mark thread synced
         */
        THREAD_MARK_SYNCED,
        /**
         * time accounting causes to track time
         */
        THREAD_TIME_ACCOUNTING,
    }
    /**
     * Enum values to control the behavior or indicate internal state of #AgsThreadPool by
     * enable/disable as sync_flags.
     */

    /**
     * Enum values to control the behavior or indicate internal state of #AgsThreadPool by
     * enable/disable as sync_flags.
     */
    export namespace ThreadPoolFlags {
        export const $gtype: GObject.GType<ThreadPoolFlags>;
    }

    enum ThreadPoolFlags {
        /**
         * the thread pool is running
         */
        THREAD_POOL_RUNNING,
        /**
         * realtime setup has been performed
         */
        THREAD_POOL_RT_SETUP,
    }
    /**
     * Enum values to control the behavior or indicate internal state of #AgsThread by
     * enable/disable as status flags.
     */

    /**
     * Enum values to control the behavior or indicate internal state of #AgsThread by
     * enable/disable as status flags.
     */
    export namespace ThreadStatusFlags {
        export const $gtype: GObject.GType<ThreadStatusFlags>;
    }

    enum ThreadStatusFlags {
        /**
         * realtime setup was performed
         */
        THREAD_STATUS_RT_SETUP,
        /**
         * initial sync indicates the thread wasn't synced before
         */
        THREAD_STATUS_INITIAL_SYNC,
        /**
         * the first call to #AgsThread:run()
         */
        THREAD_STATUS_INITIAL_RUN,
        /**
         * the thread is not synced
         */
        THREAD_STATUS_IS_CHAOS_TREE,
        /**
         * the thread start is waiting
         */
        THREAD_STATUS_START_WAIT,
        /**
         * the thread start is done
         */
        THREAD_STATUS_START_DONE,
        /**
         * the thread is ready
         */
        THREAD_STATUS_READY,
        /**
         * the thread is waiting
         */
        THREAD_STATUS_WAITING,
        /**
         * the thread is running
         */
        THREAD_STATUS_RUNNING,
        /**
         * the thread is locked
         */
        THREAD_STATUS_LOCKED,
        /**
         * the thread is busy
         */
        THREAD_STATUS_BUSY,
        /**
         * the thread joined the tic based system, it is synced
         */
        THREAD_STATUS_SYNCED,
        /**
         * the frequency was synced
         */
        THREAD_STATUS_SYNCED_FREQ,
    }
    /**
     * Enum values to control the behavior or indicate internal state of #AgsThread by
     * enable/disable as sync tic flags.
     */

    /**
     * Enum values to control the behavior or indicate internal state of #AgsThread by
     * enable/disable as sync tic flags.
     */
    export namespace ThreadSyncTicFlags {
        export const $gtype: GObject.GType<ThreadSyncTicFlags>;
    }

    enum ThreadSyncTicFlags {
        /**
         * wait tree to be synced
         */
        THREAD_SYNC_TIC_WAIT_0,
        /**
         * done tree to be synced
         */
        THREAD_SYNC_TIC_DONE_0,
        /**
         * wait tree to be synced
         */
        THREAD_SYNC_TIC_WAIT_1,
        /**
         * done tree to be synced
         */
        THREAD_SYNC_TIC_DONE_1,
        /**
         * wait tree to be synced
         */
        THREAD_SYNC_TIC_WAIT_2,
        /**
         * done tree to be synced
         */
        THREAD_SYNC_TIC_DONE_2,
        /**
         * wait tree to be synced
         */
        THREAD_SYNC_TIC_WAIT_3,
        /**
         * done tree to be synced
         */
        THREAD_SYNC_TIC_DONE_3,
        /**
         * wait tree to be synced
         */
        THREAD_SYNC_TIC_WAIT_4,
        /**
         * done tree to be synced
         */
        THREAD_SYNC_TIC_DONE_4,
        /**
         * wait tree to be synced
         */
        THREAD_SYNC_TIC_WAIT_5,
        /**
         * done tree to be synced
         */
        THREAD_SYNC_TIC_DONE_5,
        /**
         * wait tree to be synced
         */
        THREAD_SYNC_TIC_WAIT_6,
        /**
         * done tree to be synced
         */
        THREAD_SYNC_TIC_DONE_6,
        /**
         * wait tree to be synced
         */
        THREAD_SYNC_TIC_WAIT_7,
        /**
         * done tree to be synced
         */
        THREAD_SYNC_TIC_DONE_7,
        /**
         * wait tree to be synced
         */
        THREAD_SYNC_TIC_WAIT_8,
        /**
         * done tree to be synced
         */
        THREAD_SYNC_TIC_DONE_8,
    }
    /**
     * Enum values to control the behavior or indicate internal state of #AgsTimestamp by
     * enable/disable as sync_flags.
     */

    /**
     * Enum values to control the behavior or indicate internal state of #AgsTimestamp by
     * enable/disable as sync_flags.
     */
    export namespace TimestampFlags {
        export const $gtype: GObject.GType<TimestampFlags>;
    }

    enum TimestampFlags {
        /**
         * unix timestamp is used
         */
        TIMESTAMP_UNIX,
        /**
         * internal offset is used
         */
        TIMESTAMP_OFFSET,
        /**
         * the timestamp is outdated
         */
        TIMESTAMP_OUTDATED,
    }
    /**
     * Enum values to control the behavior or indicate internal state of #AgsTurtle by
     * enable/disable as sync_flags.
     */

    /**
     * Enum values to control the behavior or indicate internal state of #AgsTurtle by
     * enable/disable as sync_flags.
     */
    export namespace TurtleFlags {
        export const $gtype: GObject.GType<TurtleFlags>;
    }

    enum TurtleFlags {
        /**
         * make all tags and attributes lower case
         */
        TURTLE_TOLOWER,
    }
    /**
     * Enum values to control the behavior or indicate internal state of #AgsWorkerThread by
     * enable/disable as status flags.
     */

    /**
     * Enum values to control the behavior or indicate internal state of #AgsWorkerThread by
     * enable/disable as status flags.
     */
    export namespace WorkerThreadStatusFlags {
        export const $gtype: GObject.GType<WorkerThreadStatusFlags>;
    }

    enum WorkerThreadStatusFlags {
        /**
         * the worker is running
         */
        WORKER_THREAD_STATUS_RUNNING,
        /**
         * sync wait
         */
        WORKER_THREAD_STATUS_RUN_WAIT,
        /**
         * sync done
         */
        WORKER_THREAD_STATUS_RUN_DONE,
        /**
         * do sync
         */
        WORKER_THREAD_STATUS_RUN_SYNC,
    }
    namespace ApplicationContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'load-config': () => void;
            prepare: () => void;
            quit: () => void;
            'register-types': () => void;
            setup: () => void;
            'notify::config': (pspec: GObject.ParamSpec) => void;
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::main-loop': (pspec: GObject.ParamSpec) => void;
            'notify::task-launcher': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Connectable.ConstructorProps {
            config: GObject.Object;
            file: GObject.Object;
            main_loop: GObject.Object;
            mainLoop: GObject.Object;
            task_launcher: GObject.Object;
            taskLauncher: GObject.Object;
        }
    }

    class ApplicationContext extends GObject.Object implements Connectable {
        static $gtype: GObject.GType<ApplicationContext>;

        // Properties

        /**
         * The assigned config.
         */
        get config(): GObject.Object;
        set config(val: GObject.Object);
        /**
         * The assigned file.
         */
        get file(): GObject.Object;
        set file(val: GObject.Object);
        /**
         * The assigned main-loop.
         */
        get main_loop(): GObject.Object;
        set main_loop(val: GObject.Object);
        /**
         * The assigned main-loop.
         */
        get mainLoop(): GObject.Object;
        set mainLoop(val: GObject.Object);
        /**
         * The assigned task launcher.
         */
        get task_launcher(): GObject.Object;
        set task_launcher(val: GObject.Object);
        /**
         * The assigned task launcher.
         */
        get taskLauncher(): GObject.Object;
        set taskLauncher(val: GObject.Object);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ApplicationContext.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        flags: number;
        connectable_flags: number;
        uuid: UUID;
        version: string;
        build_id: string;
        argc: number;
        argv: string;

        // This field conflicts with a function in a parent class or interface.
        is_ready: number | any;
        log: GObject.Object;
        domain: string;
        history: GObject.Object;

        // Constructors

        constructor(properties?: Partial<ApplicationContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](main_loop?: GObject.Object | null, config?: Config | null): ApplicationContext;

        // Signals

        connect_after<K extends keyof ApplicationContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ApplicationContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ApplicationContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ApplicationContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Get your application context instance.
         */
        static get_instance(): ApplicationContext;

        // Virtual methods

        /**
         * Signal to load and parse configuration.
         */
        vfunc_load_config(): void;
        /**
         * Prepare `application_context`.
         */
        vfunc_prepare(): void;
        /**
         * Calls exit()
         */
        vfunc_quit(): void;
        /**
         * Notification to register your types.
         */
        vfunc_register_types(): void;
        /**
         * Setup `application_context`.
         */
        vfunc_setup(): void;

        // Methods

        /**
         * Signal to load and parse configuration.
         */
        load_config(): void;
        /**
         * Prepare `application_context`.
         */
        prepare(): void;
        /**
         * Calls exit()
         */
        quit(): void;
        /**
         * Notification to register your types.
         */
        register_types(): void;
        /**
         * Enable a feature of #AgsApplicationContext.
         * @param flags see enum AgsApplicationContextFlags
         */
        set_flags(flags: ApplicationContextFlags | null): void;
        /**
         * Setup `application_context`.
         */
        setup(): void;
        /**
         * Test `flags` to be set on `application_context`.
         * @param flags the flags
         * @returns %TRUE if flags are set, else %FALSE
         */
        test_flags(flags: ApplicationContextFlags | null): boolean;
        /**
         * Disable a feature of AgsApplicationContext.
         * @param flags see enum AgsApplicationContextFlags
         */
        unset_flags(flags: ApplicationContextFlags | null): void;

        // Inherited methods
        /**
         * Add connectable to registry.
         */
        add_to_registry(): void;
        /**
         * Connect the connectable.
         */
        connect(): void;
        connect(...args: never[]): any;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        connect_connection(connection: GObject.Object): void;
        /**
         * Disconnect the connectable.
         */
        disconnect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        disconnect_connection(connection: GObject.Object): void;
        /**
         * Get UUID of `connectable`.
         * @returns the assigned #AgsUUID
         */
        get_uuid(): UUID;
        /**
         * Check the connectable to have resources.
         * @returns %TRUE if @connectable can be added to registry, otherwise %FALSE.
         */
        has_resource(): boolean;
        /**
         * Check if the `connectable` was connected.
         * @returns %TRUE if is connected, otherwise %FALSE.
         */
        is_connected(): boolean;
        /**
         * List resources as an XML element and return it.
         * @returns the #xmlNode-struct
         */
        list_resource(): libxml2.Node;
        /**
         * Remove connectable from registry.
         */
        remove_from_registry(): void;
        /**
         * Compose an XML element and return it.
         * @returns the #xmlNode-struct
         */
        xml_compose(): libxml2.Node;
        /**
         * Parse `node` as XML element and apply it.
         * @param node the #xmlNode-struct
         */
        xml_parse(node: libxml2.Node): void;
        /**
         * Add connectable to registry.
         */
        vfunc_add_to_registry(): void;
        /**
         * Connect the connectable.
         */
        vfunc_connect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        vfunc_connect_connection(connection: GObject.Object): void;
        /**
         * Disconnect the connectable.
         */
        vfunc_disconnect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        vfunc_disconnect_connection(connection: GObject.Object): void;
        /**
         * Get UUID of `connectable`.
         */
        vfunc_get_uuid(): UUID;
        /**
         * Check the connectable to have resources.
         */
        vfunc_has_resource(): boolean;
        /**
         * Check if the `connectable` was connected.
         */
        vfunc_is_connected(): boolean;
        /**
         * Connect the connectable.
         */
        vfunc_is_ready(): boolean;
        /**
         * List resources as an XML element and return it.
         */
        vfunc_list_resource(): libxml2.Node;
        /**
         * Remove connectable from registry.
         */
        vfunc_remove_from_registry(): void;
        /**
         * Compose an XML element and return it.
         */
        vfunc_xml_compose(): libxml2.Node;
        /**
         * Parse `node` as XML element and apply it.
         * @param node the #xmlNode-struct
         */
        vfunc_xml_parse(node: libxml2.Node): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace AuthSecurityContext {
        // Signal signatures
        interface SignalSignatures extends SecurityContext.SignalSignatures {
            'notify::certs': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends SecurityContext.ConstructorProps {}
    }

    class AuthSecurityContext extends SecurityContext {
        static $gtype: GObject.GType<AuthSecurityContext>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AuthSecurityContext.SignalSignatures;

        // Fields

        security_context: SecurityContext;

        // Constructors

        constructor(properties?: Partial<AuthSecurityContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): AuthSecurityContext;

        // Signals

        connect<K extends keyof AuthSecurityContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AuthSecurityContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AuthSecurityContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AuthSecurityContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AuthSecurityContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AuthSecurityContext.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Get instance.
         */
        static get_instance(): AuthSecurityContext;
    }

    namespace AuthenticationManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class AuthenticationManager extends GObject.Object {
        static $gtype: GObject.GType<AuthenticationManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AuthenticationManager.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        authentication: any[];
        session_timeout: number;

        // Constructors

        constructor(properties?: Partial<AuthenticationManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): AuthenticationManager;

        // Signals

        connect<K extends keyof AuthenticationManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AuthenticationManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AuthenticationManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AuthenticationManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AuthenticationManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AuthenticationManager.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Get instance.
         */
        static get_instance(): AuthenticationManager;

        // Methods

        /**
         * Add `authentication` to `authentication_manager`.
         * @param authentication the #GObject implementing #AgsAuthentication
         */
        add_authentication(authentication: GObject.Object): void;
        /**
         * Get authentication.
         * @returns the #GList-struct containing #GObject implementing #AgsAuthentication
         */
        get_authentication(): GObject.Object[];
        /**
         * Get digest of `login`.
         * @param authentication_module the authentication module
         * @param realm the realm
         * @param login the login
         * @param security_token the security token
         * @returns the digest as string, or %NULL if not available
         */
        get_digest(authentication_module: string, realm: string, login: string, security_token: string): string;
        /**
         * Get session timeout.
         * @returns the session timeout
         */
        get_session_timeout(): number;
        /**
         * Insert `login` as key and `login_info` as its value.
         * @param login the login
         * @param login_info the #AgsLoginInfo-struct
         */
        insert_login(login: string, login_info: LoginInfo): void;
        /**
         * Check if session is active.
         * @param security_context the security context
         * @param user_uuid the user's UUID
         * @param security_token the security token
         * @returns %TRUE if active, otherwise %FALSE
         */
        is_session_active(security_context: GObject.Object, user_uuid: string, security_token: string): boolean;
        /**
         * Login.
         * @param authentication_module the authentication module
         * @param login the login
         * @param password the password
         * @returns %TRUE if login was successful, otherwise %FALSE
         */
        login(authentication_module: string, login: string, password: string): [boolean, string, string];
        /**
         * Logout.
         * @param security_context the #AgsSecurityContext
         * @param login the login
         * @param security_token the security token
         * @returns %TRUE if logout was successful, otherwise %FALSE
         */
        logout(security_context: GObject.Object, login: string, security_token: string): boolean;
        /**
         * Lookup `login`.
         * @param login the login
         * @returns the user #AgsLoginInfo-struct or %NULL
         */
        lookup_login(login: string): any | null;
        /**
         * Remove `authentication` from `authentication_manager`.
         * @param authentication the #GObject implementing #AgsAuthentication
         */
        remove_authentication(authentication: GObject.Object): void;
        /**
         * Remove `login`.
         * @param login the login
         */
        remove_login(login: string): void;
    }

    namespace BusinessGroupManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class BusinessGroupManager extends GObject.Object {
        static $gtype: GObject.GType<BusinessGroupManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BusinessGroupManager.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        business_group: any[];

        // Constructors

        constructor(properties?: Partial<BusinessGroupManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BusinessGroupManager;

        // Signals

        connect<K extends keyof BusinessGroupManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BusinessGroupManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BusinessGroupManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BusinessGroupManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BusinessGroupManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BusinessGroupManager.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Get instance.
         */
        static get_instance(): BusinessGroupManager;

        // Methods

        /**
         * Add `business_group` to `business_group_manager`.
         * @param business_group the #GObject implementing #AgsBusinessGroup
         */
        add_business_group(business_group: GObject.Object): void;
        /**
         * Get business_group.
         * @returns the #GList-struct containing #GObject implementing #AgsBusinessGroup
         */
        get_business_group(): GObject.Object[];
        /**
         * Remove `business_group` from `business_group_manager`.
         * @param business_group the #GObject implementing #AgsBusinessGroup
         */
        remove_business_group(business_group: GObject.Object): void;
    }

    namespace CertificateManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class CertificateManager extends GObject.Object {
        static $gtype: GObject.GType<CertificateManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CertificateManager.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        certificate: any[];

        // Constructors

        constructor(properties?: Partial<CertificateManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CertificateManager;

        // Signals

        connect<K extends keyof CertificateManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CertificateManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CertificateManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CertificateManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CertificateManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CertificateManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Get instance.
         */
        static get_instance(): CertificateManager;

        // Methods

        /**
         * Add `certificate` to `certificate_manager`.
         * @param certificate the #GObject implementing #AgsCertificate
         */
        add_certificate(certificate: GObject.Object): void;
        /**
         * Get certificate.
         * @returns the #GList-struct containing #GObject implementing #AgsCertificate
         */
        get_certificate(): GObject.Object[];
        /**
         * Get public and private key file.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the user's UUID
         * @param security_token the security token
         * @param domain the domain to find
         * @param key_type the key type to find
         */
        get_key_file(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            domain: string,
            key_type: string,
        ): [string, string];
        /**
         * Remove `certificate` from `certificate_manager`.
         * @param certificate the #GObject implementing #AgsCertificate
         */
        remove_certificate(certificate: GObject.Object): void;
    }

    namespace Config {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'get-value': (arg0: string, arg1: string) => string;
            'load-defaults': () => void;
            'set-value': (arg0: string, arg1: string, arg2: string) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Config extends GObject.Object {
        static $gtype: GObject.GType<Config>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Config.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        flags: number;
        version: string;
        build_id: string;

        // Constructors

        constructor(properties?: Partial<Config.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Config;

        // Signals

        connect<K extends keyof Config.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Config.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Config.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Config.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Config.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Config.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Get config instance.
         */
        static get_instance(): Config;

        // Virtual methods

        /**
         * Retrieve config by `group` and `key`.
         * @param group the config group identifier
         * @param key the key of the property
         */
        vfunc_get_value(group: string, key: string): string;
        /**
         * Load configuration from default values.
         */
        vfunc_load_defaults(): void;
        /**
         * Set config by `group` and `key,` applying `value`.
         * @param group the config group identifier
         * @param key the key of the property
         * @param value the value to set
         */
        vfunc_set_value(group: string, key: string, value: string): void;

        // Methods

        /**
         * Clears configuration.
         */
        clear(): void;
        /**
         * Retrieve config by `group` and `key`.
         * @param group the config group identifier
         * @param key the key of the property
         * @returns the property's value
         */
        get_value(group: string, key: string): string;
        /**
         * Load configuration from default values.
         */
        load_defaults(): void;
        /**
         * Read configuration in memory.
         * @param buffer the data buffer
         * @param buffer_length the size of the buffer
         */
        load_from_data(buffer: string, buffer_length: number): void;
        /**
         * Load configuration from `filename`.
         * @param filename the configuration file
         */
        load_from_file(filename: string): void;
        /**
         * Save configuration.
         */
        save(): void;
        /**
         * Set config by `group` and `key,` applying `value`.
         * @param group the config group identifier
         * @param key the key of the property
         * @param value the value to set
         */
        set_value(group: string, key: string, value: string): void;
        /**
         * Save configuration.
         * @param buffer the data buffer
         * @param buffer_length the size of the buffer
         */
        to_data(buffer: string, buffer_length: number): void;
    }

    namespace Controller {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::context-path': (pspec: GObject.ParamSpec) => void;
            'notify::server': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context_path: string;
            contextPath: string;
            server: Server;
        }
    }

    class Controller extends GObject.Object {
        static $gtype: GObject.GType<Controller>;

        // Properties

        /**
         * The context path provided.
         */
        get context_path(): string;
        set context_path(val: string);
        /**
         * The context path provided.
         */
        get contextPath(): string;
        set contextPath(val: string);
        /**
         * The assigned #AgsServer
         */
        get server(): Server;
        set server(val: Server);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Controller.SignalSignatures;

        // Fields

        gobject: GObject.Object;

        // Constructors

        constructor(properties?: Partial<Controller.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Controller;

        // Signals

        connect<K extends keyof Controller.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Controller.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Controller.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Controller.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Controller.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Controller.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Query `security_context` for `login`.
         * @param security_context the #AgsSecurityContext
         * @param login the login to query
         */
        vfunc_query_security_context(security_context: GObject.Object, login: string): boolean;

        // Methods

        /**
         * Add `controller_resource` with key `resource_name` to hash table.
         * @param resource_name the resource name as string
         * @param controller_resource the #AgsControllerResource-struct
         */
        add_resource(resource_name: string, controller_resource?: any | null): void;
        /**
         * Lookup key `resource_name` in hash table.
         * @param resource_name the resource name as string
         * @returns the matching #AgsControllerResource-struct
         */
        lookup_resource(resource_name: string): any | null;
        /**
         * Query `security_context` for `login`.
         * @param security_context the #AgsSecurityContext
         * @param login the login to query
         * @returns %TRUE if allowed to proceed, otherwise %FALSE
         */
        query_security_context(security_context: GObject.Object, login: string): boolean;
        /**
         * Remove key `resource_name` from hash table.
         * @param resource_name the resource name as string
         */
        remove_resource(resource_name: string): void;
    }

    namespace Conversion {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            convert: (arg0: number, arg1: boolean) => number;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            description: string;
            name: string;
        }
    }

    class Conversion extends GObject.Object {
        static $gtype: GObject.GType<Conversion>;

        // Properties

        /**
         * The description of the conversion.
         */
        get description(): string;
        set description(val: string);
        /**
         * The name of the conversion.
         */
        get name(): string;
        set name(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Conversion.SignalSignatures;

        // Fields

        gobject: GObject.Object;

        // Constructors

        constructor(properties?: Partial<Conversion.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Conversion;

        // Signals

        connect<K extends keyof Conversion.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Conversion.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Conversion.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Conversion.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Conversion.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Conversion.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Convert a value if `reverse` is %FALSE then use the target format
         * otherwise if %TRUE convert back to original format.
         * @param x the value to convert
         * @param reverse the direction to convert
         */
        vfunc_convert(x: number, reverse: boolean): number;

        // Methods

        /**
         * Convert a value if `reverse` is %FALSE then use the target format
         * otherwise if %TRUE convert back to original format.
         * @param x the value to convert
         * @param reverse the direction to convert
         * @returns the converted value as gdouble
         */
        convert(x: number, reverse: boolean): number;
    }

    namespace DestroyWorker {
        // Signal signatures
        interface SignalSignatures extends WorkerThread.SignalSignatures {
            'notify::delay': (pspec: GObject.ParamSpec) => void;
            'notify::frequency': (pspec: GObject.ParamSpec) => void;
            'notify::max-precision': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends WorkerThread.ConstructorProps, Connectable.ConstructorProps {}
    }

    class DestroyWorker extends WorkerThread implements Connectable {
        static $gtype: GObject.GType<DestroyWorker>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DestroyWorker.SignalSignatures;

        // Fields

        worker_thread: WorkerThread;
        destroy_interval: any;
        destroy_list: any[];

        // Constructors

        constructor(properties?: Partial<DestroyWorker.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DestroyWorker;

        // Signals

        connect_after<K extends keyof DestroyWorker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DestroyWorker.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DestroyWorker.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DestroyWorker.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Add `ptr` for destruction using `destroy_func`.
         * @param destroy_worker the #AgsDestroyWorker
         * @param ptr the gpointer to destroy
         * @param destroy_func the AgsDestroyFunc
         */
        static add(destroy_worker: any | null, ptr: any | null, destroy_func: DestroyFunc): void;
        /**
         * Get your destroy worker instance.
         */
        static get_instance(): DestroyWorker;

        // Inherited methods
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        // Conflicted with Ags.Connectable.disconnect
        disconnect(...args: never[]): any;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace File {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            open: (arg0: any | null) => void;
            'open-from-data': (arg0: string, arg1: number, arg2: any | null) => void;
            read: () => void;
            'read-resolve': () => void;
            'read-start': () => void;
            'rw-open': (arg0: boolean, arg1: any | null) => void;
            write: () => void;
            'write-concurrent': () => void;
            'write-resolve': () => void;
            'notify::audio-encoding': (pspec: GObject.ParamSpec) => void;
            'notify::audio-format': (pspec: GObject.ParamSpec) => void;
            'notify::encoding': (pspec: GObject.ParamSpec) => void;
            'notify::filename': (pspec: GObject.ParamSpec) => void;
            'notify::xml-doc': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            audio_encoding: string;
            audioEncoding: string;
            audio_format: string;
            audioFormat: string;
            encoding: string;
            filename: string;
            xml_doc: any;
            xmlDoc: any;
        }
    }

    class File extends GObject.Object {
        static $gtype: GObject.GType<File>;

        // Properties

        /**
         * The encoding to use for embedding audio data.
         */
        get audio_encoding(): string;
        set audio_encoding(val: string);
        /**
         * The encoding to use for embedding audio data.
         */
        get audioEncoding(): string;
        set audioEncoding(val: string);
        /**
         * The format of embedded audio data.
         */
        get audio_format(): string;
        set audio_format(val: string);
        /**
         * The format of embedded audio data.
         */
        get audioFormat(): string;
        set audioFormat(val: string);
        /**
         * The charset encoding to use.
         */
        get encoding(): string;
        set encoding(val: string);
        /**
         * The assigned filename to open and read from.
         */
        get filename(): string;
        set filename(val: string);
        /**
         * The assigned xml-doc.
         */
        get xml_doc(): any;
        set xml_doc(val: any);
        /**
         * The assigned xml-doc.
         */
        get xmlDoc(): any;
        set xmlDoc(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: File.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        flags: number;
        app_encoding: string;
        out: any;
        dtd: string;
        read_charset_converter: Gio.CharsetConverter;
        write_charset_converter: Gio.CharsetConverter;
        id_refs: any[];
        lookup: any[];
        launch: any[];
        clipboard: GObject.Object;
        property: any[];
        script: any[];
        cluster: GObject.Object;
        client: GObject.Object;
        server: GObject.Object;
        history: GObject.Object;
        embedded_audio: any[];
        file_link: any[];

        // Constructors

        constructor(properties?: Partial<File.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): File;

        // Signals

        connect<K extends keyof File.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, File.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof File.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, File.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof File.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<File.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Compute MD5 sums of a buffer.
         * @param content the string buffer
         * @param content_length the length of the string
         */
        static str2md5(content: string, content_length: number): string;

        // Virtual methods

        /**
         * Opens the file specified by :filename property.
         */
        vfunc_open(): void;
        /**
         * Opens the file provided by `data`.
         * @param data a buffer containing the XML document
         * @param length the buffer length
         */
        vfunc_open_from_data(data: string, length: number): void;
        /**
         * Read XML document from disk.
         */
        vfunc_read(): void;
        vfunc_read_resolve(): void;
        /**
         * Update or start the application.
         */
        vfunc_read_start(): void;
        /**
         * Opens the file specified by :filename property in read-write mode.
         * @param create if %TRUE create the file as needed
         */
        vfunc_rw_open(create: boolean): void;
        /**
         * Write the XML document to disk.
         */
        vfunc_write(): void;
        vfunc_write_concurrent(): void;
        /**
         * Resolve references to XPath expressions.
         */
        vfunc_write_resolve(): void;

        // Methods

        /**
         * Adds `id_ref` to `file`.
         * @param id_ref a reference
         */
        add_id_ref(id_ref: GObject.Object): void;
        /**
         * Add `file_launch` for later invoking.
         * @param file_launch a #AgsFileLaunch
         */
        add_launch(file_launch: GObject.Object): void;
        /**
         * Add `file_lookup` for later invoking.
         * @param file_lookup a #AgsFileLookup
         */
        add_lookup(file_lookup: GObject.Object): void;
        /**
         * Closes `file`.
         */
        close(): void;
        /**
         * Find a reference by its XML node.
         * @param node a XML node
         * @returns the matching #GObject
         */
        find_id_ref_by_node<T = GObject.Object>(node: libxml2.Node): T;
        /**
         * Find a reference matching `ref`.
         * @param ref a %gpointer
         * @returns the matching #GObject
         */
        find_id_ref_by_reference<T = GObject.Object>(ref?: any | null): T;
        /**
         * Lookup a reference by `xpath`.
         * @param xpath a XPath expression
         * @returns the matching #GObject
         */
        find_id_ref_by_xpath<T = GObject.Object>(xpath: string): T;
        /**
         * Get audio encoding of `file`.
         * @returns the audio encoding
         */
        get_audio_encoding(): string;
        /**
         * Get audio format of `file`.
         * @returns the audio format
         */
        get_audio_format(): string;
        /**
         * Get encoding of `file`.
         * @returns the encoding
         */
        get_encoding(): string;
        /**
         * Get filename of `file`.
         * @returns the filename
         */
        get_filename(): string;
        /**
         * Get xml doc of `file`.
         * @returns the #xmlDoc-struct
         */
        get_xml_doc(): libxml2.Doc;
        /**
         * Opens the file specified by :filename property.
         */
        open(): void;
        /**
         * Opens the file specified by `filename` property.
         * @param filename a path
         */
        open_filename(filename: string): void;
        /**
         * Opens the file provided by `data`.
         * @param data a buffer containing the XML document
         * @param length the buffer length
         */
        open_from_data(data: string, length: number): void;
        /**
         * Read XML document from disk.
         */
        read(): void;
        read_application_context(node: libxml2.Node, application_context: GObject.Object): void;
        read_config(node: libxml2.Node, ags_config: GObject.Object): void;
        read_resolve(): void;
        /**
         * Update or start the application.
         */
        read_start(): void;
        /**
         * Opens the file specified by :filename property in read-write mode.
         * @param create if %TRUE create the file as needed
         */
        rw_open(create: boolean): void;
        /**
         * Set `audio_encoding` of `file`.
         * @param audio_encoding the audio encoding
         */
        set_audio_encoding(audio_encoding: string): void;
        /**
         * Set `audio_format` of `file`.
         * @param audio_format the audio format
         */
        set_audio_format(audio_format: string): void;
        /**
         * Set `encoding` of `file`.
         * @param encoding the encoding
         */
        set_encoding(encoding: string): void;
        /**
         * Set `filename` of `file`.
         * @param filename the filename
         */
        set_filename(filename: string): void;
        /**
         * Set `xml_doc` of `file`.
         * @param xml_doc the #xmlDoc-struct
         */
        set_xml_doc(xml_doc: libxml2.Doc): void;
        /**
         * Write the XML document to disk.
         */
        write(): void;
        write_application_context(parent: libxml2.Node, application_context: GObject.Object): void;
        write_concurrent(): void;
        write_config(parent: libxml2.Node, ags_config: GObject.Object): void;
        /**
         * Resolve references to XPath expressions.
         */
        write_resolve(): void;
        /**
         * Set root element `root_node` of `doc`.
         * @param parent the parent #xmlNode-struct
         * @param child the child #xmlNode-struct
         */
        xml_add_child(parent: libxml2.Node, child: libxml2.Node): void;
        /**
         * Get content of `node`.
         * @param node the #xmlNode-struct
         * @returns the content of #xmlNode-struct
         */
        xml_get_content(node: libxml2.Node): string;
        /**
         * Get node name of `node`.
         * @param node the #xmlNode-struct
         * @returns the node name of #xmlNode-struct
         */
        xml_get_node_name(node: libxml2.Node): string;
        /**
         * Get property of `node`.
         * @param node the #xmlNode-struct
         * @param prop_name property name
         * @returns the property of #xmlNode-struct
         */
        xml_get_prop(node: libxml2.Node, prop_name: string): string;
        /**
         * Get root element of `doc`.
         * @param doc the #xmlDoc-struct
         * @returns the root element of #xmlDoc-struct
         */
        xml_get_root_element(doc: libxml2.Doc): libxml2.Node;
        /**
         * Set content of `node`.
         * @param node the #xmlNode-struct
         * @param content the content
         * @param is_cdata if content is CDATA
         */
        xml_set_content(node: libxml2.Node, content: string, is_cdata: boolean): void;
        /**
         * Set property of `node`.
         * @param node the #xmlNode-struct
         * @param prop_name property name
         * @param prop_value property value
         */
        xml_set_prop(node: libxml2.Node, prop_name: string, prop_value: string): void;
        /**
         * Set root element `root_node` of `doc`.
         * @param doc the #xmlDoc-struct
         * @param root_node the #xmlNode-struct as root node
         */
        xml_set_root_element(doc: libxml2.Doc, root_node: libxml2.Node): void;
    }

    namespace FileIdRef {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            resolved: () => void;
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::reference': (pspec: GObject.ParamSpec) => void;
            'notify::xpath': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            file: GObject.Object;
            node: any;
            reference: any;
            xpath: string;
        }
    }

    class FileIdRef extends GObject.Object {
        static $gtype: GObject.GType<FileIdRef>;

        // Properties

        /**
         * The #AgsFile this #AgsFileIdRef belongs to.
         */
        get file(): GObject.Object;
        set file(val: GObject.Object);
        /**
         * The assigned xmlNode being referred by this #AgsFileIdRef.
         */
        get node(): any;
        set node(val: any);
        /**
         * The object referred by this #AgsFileIdRef.
         */
        get reference(): any;
        set reference(val: any);
        /**
         * The XPath short-cut that can be used with this #AgsFileIdRef.
         */
        get xpath(): string;
        set xpath(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileIdRef.SignalSignatures;

        // Fields

        gobject: GObject.Object;

        // This field conflicts with a function in a parent class or interface.
        ref: any | any;

        // Constructors

        constructor(properties?: Partial<FileIdRef.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FileIdRef;

        // Signals

        connect<K extends keyof FileIdRef.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileIdRef.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileIdRef.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileIdRef.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileIdRef.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileIdRef.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Notify about resolved reference.
         */
        vfunc_resolved(): void;

        // Methods

        /**
         * Notify about resolved reference.
         */
        resolved(): void;
    }

    namespace FileLaunch {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            start: () => void;
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::reference': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            file: GObject.Object;
            node: any;
            reference: any;
        }
    }

    class FileLaunch extends GObject.Object {
        static $gtype: GObject.GType<FileLaunch>;

        // Properties

        /**
         * The #AgsFile this #AgsFileLaunch belongs to.
         */
        get file(): GObject.Object;
        set file(val: GObject.Object);
        /**
         * The assigned xmlNode being referred by this #AgsFileLaunch.
         */
        get node(): any;
        set node(val: any);
        /**
         * The object referred by this #AgsFileLaunch.
         */
        get reference(): any;
        set reference(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileLaunch.SignalSignatures;

        // Fields

        gobject: GObject.Object;

        // Constructors

        constructor(properties?: Partial<FileLaunch.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FileLaunch;

        // Signals

        connect<K extends keyof FileLaunch.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileLaunch.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileLaunch.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileLaunch.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileLaunch.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileLaunch.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Start #AgsFileLaunch to fulfill a task.
         */
        vfunc_start(): void;

        // Methods

        /**
         * Start #AgsFileLaunch to fulfill a task.
         */
        start(): void;
    }

    namespace FileLink {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::data': (pspec: GObject.ParamSpec) => void;
            'notify::filename': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Plugin.ConstructorProps {
            data: string;
            filename: string;
        }
    }

    class FileLink extends GObject.Object implements Plugin {
        static $gtype: GObject.GType<FileLink>;

        // Properties

        /**
         * The data this #AgsFileLink contains.
         */
        get data(): string;
        set data(val: string);
        /**
         * The filename this #AgsFileLink refers.
         */
        get filename(): string;
        set filename(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileLink.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        version: string;
        build_id: string;
        name: string;
        xml_type: string;

        // Constructors

        constructor(properties?: Partial<FileLink.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FileLink;

        // Signals

        connect<K extends keyof FileLink.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileLink.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileLink.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileLink.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileLink.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileLink.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get data of `file_link`.
         * @returns the data
         */
        get_data(): string;
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        /**
         * Get filename of `file_link`.
         * @returns the filename
         */
        get_filename(): string;
        /**
         * Set `data` of `file_link`.
         * @param data the data
         */
        set_data(data: string): void;
        /**
         * Set `filename` of `file_link`.
         * @param filename the filename
         */
        set_filename(filename: string): void;

        // Inherited methods
        /**
         * Retrieve the build id of the plugin.
         * @returns the plugins build id
         */
        get_build_id(): string;
        /**
         * Retrieve the name of the plugin.
         * @returns the plugins name
         */
        get_name(): string;
        /**
         * Retrieve the ports of the plugin.
         * @returns the plugins ports
         */
        get_ports(): GObject.Object[];
        /**
         * Retrieve the version of the plugin.
         * @returns the plugins version
         */
        get_version(): string;
        /**
         * Retrieve the xml type of the plugin.
         * @returns the plugins xml type
         */
        get_xml_type(): string;
        /**
         * Set the build id of the plugin.
         * @param build_id the build id of plugin
         */
        set_build_id(build_id: string): void;
        /**
         * Set the name of the plugin.
         * @param name the name of plugin
         */
        set_name(name: string): void;
        /**
         * Set the build id of the plugin.
         * @param ports the build id of plugin
         */
        set_ports(ports: GObject.Object[]): void;
        /**
         * Set the version of the plugin.
         * @param version the version of plugin
         */
        set_version(version: string): void;
        /**
         * Set the build id of the plugin.
         * @param xml_type the build id of plugin
         */
        set_xml_type(xml_type: string): void;
        /**
         * Retrieve the build id of the plugin.
         */
        vfunc_get_build_id(): string;
        /**
         * Retrieve the name of the plugin.
         */
        vfunc_get_name(): string;
        /**
         * Retrieve the ports of the plugin.
         */
        vfunc_get_ports(): GObject.Object[];
        /**
         * Retrieve the version of the plugin.
         */
        vfunc_get_version(): string;
        /**
         * Retrieve the xml type of the plugin.
         */
        vfunc_get_xml_type(): string;
        /**
         * Set the build id of the plugin.
         * @param build_id the build id of plugin
         */
        vfunc_set_build_id(build_id: string): void;
        /**
         * Set the name of the plugin.
         * @param name the name of plugin
         */
        vfunc_set_name(name: string): void;
        /**
         * Set the build id of the plugin.
         * @param ports the build id of plugin
         */
        vfunc_set_ports(ports: GObject.Object[]): void;
        /**
         * Set the version of the plugin.
         * @param version the version of plugin
         */
        vfunc_set_version(version: string): void;
        /**
         * Set the build id of the plugin.
         * @param xml_type the build id of plugin
         */
        vfunc_set_xml_type(xml_type: string): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace FileLookup {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            resolve: () => void;
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::reference': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            file: GObject.Object;
            node: any;
            reference: any;
        }
    }

    class FileLookup extends GObject.Object {
        static $gtype: GObject.GType<FileLookup>;

        // Properties

        get file(): GObject.Object;
        set file(val: GObject.Object);
        get node(): any;
        set node(val: any);
        get reference(): any;
        set reference(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileLookup.SignalSignatures;

        // Fields

        gobject: GObject.Object;

        // This field conflicts with a function in a parent class or interface.
        ref: any | any;

        // Constructors

        constructor(properties?: Partial<FileLookup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FileLookup;

        // Signals

        connect<K extends keyof FileLookup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileLookup.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileLookup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileLookup.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileLookup.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileLookup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Find #AgsFileLookup by #xmlNode
         * @param file_lookup the #GList-struct containing #AgsFileLookup
         * @param node a #xmlNode
         */
        static find_by_node(file_lookup: FileLookup[], node: libxml2.Node): FileLookup[];
        /**
         * Find #AgsFileLookup by `ref`
         * @param file_lookup the #GList-struct containing #AgsFileLookup
         * @param ref a #gpointer
         */
        static find_by_reference(file_lookup: FileLookup[], ref?: any | null): FileLookup[];

        // Virtual methods

        /**
         * The ::resolve signal.
         */
        vfunc_resolve(): void;

        // Methods

        /**
         * The ::resolve signal.
         */
        resolve(): void;
    }

    namespace FrontController {
        // Signal signatures
        interface SignalSignatures extends Controller.SignalSignatures {
            'do-request': (
                arg0: GObject.Object,
                arg1: any | null,
                arg2: GObject.Object,
                arg3: string,
                arg4: string,
                arg5: string,
            ) => any | null;
            'notify::context-path': (pspec: GObject.ParamSpec) => void;
            'notify::server': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Controller.ConstructorProps {}
    }

    class FrontController extends Controller {
        static $gtype: GObject.GType<FrontController>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FrontController.SignalSignatures;

        // Fields

        controller: Controller;

        // Constructors

        constructor(properties?: Partial<FrontController.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FrontController;

        // Signals

        connect<K extends keyof FrontController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FrontController.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FrontController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FrontController.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FrontController.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FrontController.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Do a XML-RPC request for the given `path` with `query`.
         * @param msg the #SoupServerMessage
         * @param query the #GHashTable
         * @param security_context the #AgsSecurityContext
         * @param path the context path to access
         * @param login the login
         * @param security_token the security token
         */
        vfunc_do_request(
            msg: Soup.ServerMessage,
            query: { [key: string]: any } | GLib.HashTable<any, any>,
            security_context: GObject.Object,
            path: string,
            login: string,
            security_token: string,
        ): any | null;

        // Methods

        /**
         * Do a XML-RPC request for the given `path` with `query`.
         * @param msg the #SoupServerMessage
         * @param query the #GHashTable
         * @param security_context the #AgsSecurityContext
         * @param path the context path to access
         * @param login the login
         * @param security_token the security token
         * @returns the response on success, otherwise %NULL.
         */
        do_request(
            msg: Soup.ServerMessage,
            query: { [key: string]: any } | GLib.HashTable<any, any>,
            security_context: GObject.Object,
            path: string,
            login: string,
            security_token: string,
        ): any | null;
    }

    namespace Function {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::normalized-function': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-table': (pspec: GObject.ParamSpec) => void;
            'notify::source-function': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            normalized_function: string;
            normalizedFunction: string;
            pivot_table: any;
            pivotTable: any;
            source_function: string;
            sourceFunction: string;
        }
    }

    class Function extends GObject.Object {
        static $gtype: GObject.GType<Function>;

        // Properties

        /**
         * The normalized function.
         */
        get normalized_function(): string;
        set normalized_function(val: string);
        /**
         * The normalized function.
         */
        get normalizedFunction(): string;
        set normalizedFunction(val: string);
        /**
         * The pivot table.
         */
        get pivot_table(): any;
        set pivot_table(val: any);
        /**
         * The pivot table.
         */
        get pivotTable(): any;
        set pivotTable(val: any);
        /**
         * The source function.
         */
        get source_function(): string;
        set source_function(val: string);
        /**
         * The source function.
         */
        get sourceFunction(): string;
        set sourceFunction(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Function.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        flags: number;
        is_pushing: boolean;
        equation: string;
        transformed_equation: string;
        symbol: string;
        solver_matrix: any[];
        pivot_table_count: number;
        row_count: number;
        column_count: number;
        solver_level: number;
        solver_vector: Complex;

        // Constructors

        constructor(properties?: Partial<Function.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](source_function: string): Function;

        // Signals

        connect<K extends keyof Function.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Function.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Function.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Function.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Function.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Function.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add `solver_matrix` to `function`.
         * @param solver_matrix the #AgsSolverMatrix
         */
        add_matrix(solver_matrix: SolverMatrix): void;
        /**
         * Remove `solver_matrix` from `function`.
         * @param solver_matrix the #AgsSolverMatrix
         */
        remove_matrix(solver_matrix: SolverMatrix): void;
    }

    namespace GenericMainLoop {
        // Signal signatures
        interface SignalSignatures extends Thread.SignalSignatures {
            'notify::delay': (pspec: GObject.ParamSpec) => void;
            'notify::frequency': (pspec: GObject.ParamSpec) => void;
            'notify::max-precision': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Thread.ConstructorProps,
                Connectable.ConstructorProps,
                MainLoop.ConstructorProps {}
    }

    class GenericMainLoop extends Thread implements Connectable, MainLoop {
        static $gtype: GObject.GType<GenericMainLoop>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GenericMainLoop.SignalSignatures;

        // Fields

        thread: Thread;

        // This field conflicts with a function in a parent class or interface.
        is_syncing: boolean | any;

        // This field conflicts with a function in a parent class or interface.
        is_critical_region: boolean | any;
        critical_region_ref: number;

        // Constructors

        constructor(properties?: Partial<GenericMainLoop.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GenericMainLoop;

        // Signals

        connect_after<K extends keyof GenericMainLoop.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GenericMainLoop.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GenericMainLoop.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GenericMainLoop.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
        /**
         * Add connectable to registry.
         */
        add_to_registry(): void;
        /**
         * Connect the connectable.
         */
        connect(): void;
        connect(...args: never[]): any;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        connect_connection(connection: GObject.Object): void;
        /**
         * Disconnect the connectable.
         */
        disconnect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        disconnect_connection(connection: GObject.Object): void;
        /**
         * Get UUID of `connectable`.
         * @returns the assigned #AgsUUID
         */
        get_uuid(): UUID;
        /**
         * Check the connectable to have resources.
         * @returns %TRUE if @connectable can be added to registry, otherwise %FALSE.
         */
        has_resource(): boolean;
        /**
         * Check if the `connectable` was connected.
         * @returns %TRUE if is connected, otherwise %FALSE.
         */
        is_connected(): boolean;
        /**
         * Connect the connectable.
         * @returns %TRUE if is added to registry, otherwise %FALSE.
         */
        is_ready(): boolean;
        /**
         * List resources as an XML element and return it.
         * @returns the #xmlNode-struct
         */
        list_resource(): libxml2.Node;
        /**
         * Remove connectable from registry.
         */
        remove_from_registry(): void;
        /**
         * Compose an XML element and return it.
         * @returns the #xmlNode-struct
         */
        xml_compose(): libxml2.Node;
        /**
         * Parse `node` as XML element and apply it.
         * @param node the #xmlNode-struct
         */
        xml_parse(node: libxml2.Node): void;
        /**
         * Add connectable to registry.
         */
        vfunc_add_to_registry(): void;
        /**
         * Connect the connectable.
         */
        vfunc_connect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        vfunc_connect_connection(connection: GObject.Object): void;
        /**
         * Disconnect the connectable.
         */
        vfunc_disconnect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        vfunc_disconnect_connection(connection: GObject.Object): void;
        /**
         * Get UUID of `connectable`.
         */
        vfunc_get_uuid(): UUID;
        /**
         * Check the connectable to have resources.
         */
        vfunc_has_resource(): boolean;
        /**
         * Check if the `connectable` was connected.
         */
        vfunc_is_connected(): boolean;
        /**
         * Connect the connectable.
         */
        vfunc_is_ready(): boolean;
        /**
         * List resources as an XML element and return it.
         */
        vfunc_list_resource(): libxml2.Node;
        /**
         * Remove connectable from registry.
         */
        vfunc_remove_from_registry(): void;
        /**
         * Compose an XML element and return it.
         */
        vfunc_xml_compose(): libxml2.Node;
        /**
         * Parse `node` as XML element and apply it.
         * @param node the #xmlNode-struct
         */
        vfunc_xml_parse(node: libxml2.Node): void;
        /**
         * Change frequency.
         * @param frequency the new frequency
         */
        change_frequency(frequency: number): void;
        /**
         * Decrement thread needs access to main loop's critical region field.
         */
        dec_queued_critical_region(): void;
        /**
         * Retrieve the tree mutex.
         * @returns the mutex
         */
        get_tree_lock(): GLib.RecMutex;
        /**
         * Increment thread needs access to main loop's critical region field.
         */
        inc_queued_critical_region(): void;
        /**
         * Set main loop is in critical region.
         * @param is_critical_region set %TRUE if critical region
         */
        set_critical_region(is_critical_region: boolean): void;
        /**
         * Set thread tree is syncing.
         * @param is_syncing set %TRUE if syncing
         */
        set_syncing(is_syncing: boolean): void;
        /**
         * Test main loop may enter critical region.
         * @returns 0 if main loop may enter critical region, otherwise not
         */
        test_queued_critical_region(): number;
        /**
         * Change frequency.
         * @param frequency the new frequency
         */
        vfunc_change_frequency(frequency: number): void;
        /**
         * Decrement thread needs access to main loop's critical region field.
         */
        vfunc_dec_queued_critical_region(): void;
        /**
         * Retrieve the tree mutex.
         */
        vfunc_get_tree_lock(): GLib.RecMutex;
        /**
         * Increment thread needs access to main loop's critical region field.
         */
        vfunc_inc_queued_critical_region(): void;
        /**
         * Check if main loop is in critical region.
         */
        vfunc_is_critical_region(): boolean;
        /**
         * Check if thread tree is syncing.
         */
        vfunc_is_syncing(): boolean;
        /**
         * Set main loop is in critical region.
         * @param is_critical_region set %TRUE if critical region
         */
        vfunc_set_critical_region(is_critical_region: boolean): void;
        /**
         * Set thread tree is syncing.
         * @param is_syncing set %TRUE if syncing
         */
        vfunc_set_syncing(is_syncing: boolean): void;
        /**
         * Test main loop may enter critical region.
         */
        vfunc_test_queued_critical_region(): number;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Log {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Log extends GObject.Object {
        static $gtype: GObject.GType<Log>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Log.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        flags: number;
        messages: any[];

        // Constructors

        constructor(properties?: Partial<Log.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Log;

        // Signals

        connect<K extends keyof Log.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Log.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Log.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Log.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Log.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Log.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Get your logging instance.
         */
        static get_instance(): Log;

        // Methods

        /**
         * Add a message to `log`.
         * @param str the message
         */
        add_message(str: string): void;
        /**
         * Get log messages as #GList-struct containing strings.
         * @returns the #GList-struct containing log messages
         */
        get_messages(): string[];
    }

    namespace MessageDelivery {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class MessageDelivery extends GObject.Object {
        static $gtype: GObject.GType<MessageDelivery>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MessageDelivery.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        message_queue: any[];

        // Constructors

        constructor(properties?: Partial<MessageDelivery.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MessageDelivery;

        // Signals

        connect<K extends keyof MessageDelivery.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessageDelivery.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MessageDelivery.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessageDelivery.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MessageDelivery.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MessageDelivery.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Get the #AgsMessageDelivery instance.
         */
        static get_instance(): MessageDelivery;

        // Methods

        /**
         * Add `message` to an #AgsMessageQueue specified by `sender_namespace`.
         * @param sender_namespace the sender namespace as string
         * @param message_envelope the #AgsMessageEnvelope
         */
        add_message_envelope(sender_namespace: string, message_envelope: GObject.Object): void;
        /**
         * Add `message_queue` to `message_delivery`.
         * @param message_queue the #AgsMessageQueue
         */
        add_message_queue(message_queue: GObject.Object): void;
        /**
         * Find `recipient` for `recipient_namespace` matching #AgsMessageQueue. If `recipient_namespace` equals %NULL match
         * all available message queues.
         * @param recipient_namespace the recipient namespace as string, maybe %NULL
         * @param recipient the recipient as #GObject
         * @returns all matching #AgsMessageEnvelope as #GList-struct
         */
        find_recipient(recipient_namespace: string, recipient: GObject.Object): MessageEnvelope[];
        /**
         * Find recipient namespace of #AgsMessageQueue in `message_delivery`.
         * @param recipient_namespace the recipient namespace as string to find
         * @returns the matching #GList-struct containing #AgsMessageQueue or %NULL
         */
        find_recipient_namespace(recipient_namespace: string): MessageQueue[];
        /**
         * Find `sender` for `recipient_namespace` matching #AgsMessageQueue. If `recipient_namespace` equals %NULL match
         * all available message queues.
         * @param recipient_namespace the recipient namespace as string, maybe %NULL
         * @param sender the sender as #GObject
         * @returns all matching #AgsMessageEnvelope as #GList-struct
         */
        find_sender(recipient_namespace: string, sender: GObject.Object): MessageEnvelope[];
        /**
         * Find sender namespace of #AgsMessageQueue in `message_delivery`.
         * @param sender_namespace the sender namespace as string to find
         * @returns the matching #GList-struct containing #AgsMessageQueue or %NULL
         */
        find_sender_namespace(sender_namespace: string): MessageQueue[];
        /**
         * Get message queue of `message_delivery`.
         * @returns the #GList-struct containing #AgsMessageQueue
         */
        get_message_queue(): MessageQueue[];
        /**
         * Query `xpath` for `recipient_namespace` matching #AgsMessageQueue. If `recipient_namespace` equals %NULL match
         * all available message queues.
         * @param recipient_namespace the recipient namespace as string, maybe %NULL
         * @param xpath the xpath to query
         * @returns all matching #AgsMessageEnvelope as #GList-struct
         */
        query_message(recipient_namespace: string, xpath: string): MessageEnvelope[];
        /**
         * Remove `message` from an #AgsMessageQueue specified by `sender_namespace`.
         * @param sender_namespace the sender namespace as string
         * @param message_envelope the #AgsMessageEnvelope
         */
        remove_message_envelope(sender_namespace: string, message_envelope: GObject.Object): void;
        /**
         * Remove `message_queue` to `message_delivery`.
         * @param message_queue the #AgsMessageQueue
         */
        remove_message_queue(message_queue: GObject.Object): void;
        /**
         * Set `message_queue` of `message_delivery`.
         * @param message_queue the #GList-struct containing #AgsMessageQueue
         */
        set_message_queue(message_queue: MessageQueue[]): void;
    }

    namespace MessageEnvelope {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::recipient': (pspec: GObject.ParamSpec) => void;
            'notify::sender': (pspec: GObject.ParamSpec) => void;
            'notify::xml-doc': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            recipient: GObject.Object;
            sender: GObject.Object;
            xml_doc: any;
            xmlDoc: any;
        }
    }

    class MessageEnvelope extends GObject.Object {
        static $gtype: GObject.GType<MessageEnvelope>;

        // Properties

        /**
         * The assigned recipient.
         */
        get recipient(): GObject.Object;
        set recipient(val: GObject.Object);
        /**
         * The assigned sender.
         */
        get sender(): GObject.Object;
        set sender(val: GObject.Object);
        /**
         * The assigned xml-doc.
         */
        get xml_doc(): any;
        set xml_doc(val: any);
        /**
         * The assigned xml-doc.
         */
        get xmlDoc(): any;
        set xmlDoc(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MessageEnvelope.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        n_params: number;
        parameter_name: string;
        free_func: GLib.DestroyNotify;

        // Constructors

        constructor(properties?: Partial<MessageEnvelope.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](sender: GObject.Object, recipient: GObject.Object, doc: libxml2.Doc): MessageEnvelope;

        static new_with_params(
            sender: GObject.Object,
            recipient: GObject.Object,
            doc: libxml2.Doc,
            n_params: number,
            parameter_name: string,
            value: GObject.Value | any,
        ): MessageEnvelope;

        // Signals

        connect<K extends keyof MessageEnvelope.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessageEnvelope.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MessageEnvelope.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessageEnvelope.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MessageEnvelope.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MessageEnvelope.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get xmlDoc.
         * @returns the doc
         */
        get_doc(): libxml2.Doc;
        /**
         * Get parameters.
         * @param n_params return location of parameter count
         * @param parameter_name return location %NULL terminated string vector containing parameter name
         * @param value return location of #GValue-struct array containing values
         */
        get_parameter(n_params: number, parameter_name: string, value: GObject.Value | any): void;
        /**
         * Get recipient.
         * @returns the recipient
         */
        get_recipient<T = GObject.Object>(): T;
        /**
         * Get sender.
         * @returns the sender
         */
        get_sender<T = GObject.Object>(): T;
    }

    namespace MessageQueue {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::recipient-namespace': (pspec: GObject.ParamSpec) => void;
            'notify::sender-namespace': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            recipient_namespace: string;
            recipientNamespace: string;
            sender_namespace: string;
            senderNamespace: string;
        }
    }

    class MessageQueue extends GObject.Object {
        static $gtype: GObject.GType<MessageQueue>;

        // Properties

        /**
         * The assigned namespace of recipient.
         */
        get recipient_namespace(): string;
        set recipient_namespace(val: string);
        /**
         * The assigned namespace of recipient.
         */
        get recipientNamespace(): string;
        set recipientNamespace(val: string);
        /**
         * The assigned namespace of sender.
         */
        get sender_namespace(): string;
        set sender_namespace(val: string);
        /**
         * The assigned namespace of sender.
         */
        get senderNamespace(): string;
        set senderNamespace(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MessageQueue.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        message_envelope: any[];

        // Constructors

        constructor(properties?: Partial<MessageQueue.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](sender_namespace: string): MessageQueue;

        // Signals

        connect<K extends keyof MessageQueue.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessageQueue.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MessageQueue.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessageQueue.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MessageQueue.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MessageQueue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add `message` to `message_queue`.
         * @param message_envelope the #AgsMessageEnvelope
         */
        add_message_envelope(message_envelope: GObject.Object): void;
        /**
         * Find `recipient` in `message_queue'`s messages.
         * @param recipient the recipient as #GObject
         * @returns all matching #AgsMessageEnvelope as #GList-struct
         */
        find_recipient(recipient: GObject.Object): MessageEnvelope[];
        /**
         * Find `sender` in `message_queue'`s messages.
         * @param sender the sender as #GObject
         * @returns all matching #AgsMessageEnvelope as #GList-struct
         */
        find_sender(sender: GObject.Object): MessageEnvelope[];
        /**
         * Get message envelope of `message_queue`.
         * @returns the #GList-struct containing #AgsMessageEnvelope
         */
        get_message_envelope(): MessageEnvelope[];
        /**
         * Get recipient namespace of `message_queue`.
         * @returns the recipient namespace
         */
        get_recipient_namespace(): string;
        /**
         * Get sender namespace of `message_queue`.
         * @returns the sender namespace
         */
        get_sender_namespace(): string;
        /**
         * Query `xpath` in `message_queue'`s messages.
         * @param xpath the XPath as string
         * @returns all matching #AgsMessageEnvelope as #GList-struct
         */
        query_message(xpath: string): MessageEnvelope[];
        /**
         * Remove `message` from `message_queue`.
         * @param message_envelope the #AgsMessageEnvelope
         */
        remove_message_envelope(message_envelope: GObject.Object): void;
        /**
         * Set `message_envelope` of `message_queue`.
         * @param message_envelope the #GList-struct containing #AgsMessageEnvelope
         */
        set_message_envelope(message_envelope: MessageEnvelope[]): void;
        /**
         * Set `recipient_namespace` of `message_queue`.
         * @param recipient_namespace the recipient namespace
         */
        set_recipient_namespace(recipient_namespace: string): void;
        /**
         * Set `sender_namespace` of `message_queue`.
         * @param sender_namespace the sender namespace
         */
        set_sender_namespace(sender_namespace: string): void;
    }

    namespace PasswordStoreManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class PasswordStoreManager extends GObject.Object {
        static $gtype: GObject.GType<PasswordStoreManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PasswordStoreManager.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        salt: string;
        password_store: any[];

        // Constructors

        constructor(properties?: Partial<PasswordStoreManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PasswordStoreManager;

        // Signals

        connect<K extends keyof PasswordStoreManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PasswordStoreManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PasswordStoreManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PasswordStoreManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PasswordStoreManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PasswordStoreManager.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Get instance.
         */
        static get_instance(): PasswordStoreManager;

        // Methods

        /**
         * Add `password_store` to `password_store_manager`.
         * @param password_store the #GObject implementing #AgsPasswordStore
         */
        add_password_store(password_store: GObject.Object): void;
        /**
         * Check `password` to be valid for `user_uuid`.
         * @param user_uuid the user uuid
         * @param password the password
         * @returns %TRUE if password matches, otherwise %FALSE
         */
        check_password(user_uuid: string, password: string): boolean;
        /**
         * Get password_store.
         * @returns the #GList-struct containing #GObject implementing #AgsPasswordStore
         */
        get_password_store(): GObject.Object[];
        /**
         * Remove `password_store` from `password_store_manager`.
         * @param password_store the #GObject implementing #AgsPasswordStore
         */
        remove_password_store(password_store: GObject.Object): void;
    }

    namespace Priority {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'get-value': (arg0: string, arg1: string) => string;
            'load-defaults': () => void;
            'set-value': (arg0: string, arg1: string, arg2: string) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Priority extends GObject.Object {
        static $gtype: GObject.GType<Priority>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Priority.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        flags: number;
        version: string;
        build_id: string;

        // Constructors

        constructor(properties?: Partial<Priority.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Priority;

        // Signals

        connect<K extends keyof Priority.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Priority.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Priority.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Priority.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Priority.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Priority.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Get priority instance.
         */
        static get_instance(): Priority;

        // Virtual methods

        /**
         * Retrieve priority by `group` and `key`.
         * @param group the priority group identifier
         * @param key the key of the property
         */
        vfunc_get_value(group: string, key: string): string;
        /**
         * Load priorities from default values.
         */
        vfunc_load_defaults(): void;
        /**
         * Set priority by `group` and `key,` applying `value`.
         * @param group the priority group identifier
         * @param key the key of the property
         * @param value the value to set
         */
        vfunc_set_value(group: string, key: string, value: string): void;

        // Methods

        /**
         * Retrieve priority by `group` and `key`.
         * @param group the priority group identifier
         * @param key the key of the property
         * @returns the property's value
         */
        get_value(group: string, key: string): string;
        /**
         * Load priorities from default values.
         */
        load_defaults(): void;
        /**
         * Load priorities from `filename`.
         * @param filename the priorityuration file
         */
        load_from_file(filename: string): void;
        /**
         * Set priority by `group` and `key,` applying `value`.
         * @param group the priority group identifier
         * @param key the key of the property
         * @param value the value to set
         */
        set_value(group: string, key: string, value: string): void;
    }

    namespace Registry {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::server': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            server: Server;
        }
    }

    class Registry extends GObject.Object {
        static $gtype: GObject.GType<Registry>;

        // Properties

        /**
         * The assigned #AgsServer
         */
        get server(): Server;
        set server(val: Server);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Registry.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        flags: number;
        counter: number;
        entry: any[];

        // Constructors

        constructor(properties?: Partial<Registry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Registry;

        // Signals

        connect<K extends keyof Registry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Registry.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Registry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Registry.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Registry.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Registry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add `registry_entry` to `registry`.
         * @param registry_entry the #AgsRegistryEntry-struct to add
         */
        add_entry(registry_entry: RegistryEntry): void;
    }

    namespace ReturnableThread {
        // Signal signatures
        interface SignalSignatures extends Thread.SignalSignatures {
            'safe-run': () => void;
            'notify::thread-pool': (pspec: GObject.ParamSpec) => void;
            'notify::delay': (pspec: GObject.ParamSpec) => void;
            'notify::frequency': (pspec: GObject.ParamSpec) => void;
            'notify::max-precision': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Thread.ConstructorProps, Connectable.ConstructorProps {
            thread_pool: GObject.Object;
            threadPool: GObject.Object;
        }
    }

    class ReturnableThread extends Thread implements Connectable {
        static $gtype: GObject.GType<ReturnableThread>;

        // Properties

        /**
         * The assigned #AgsThreadPool providing default settings.
         */
        get thread_pool(): GObject.Object;
        set thread_pool(val: GObject.Object);
        /**
         * The assigned #AgsThreadPool providing default settings.
         */
        get threadPool(): GObject.Object;
        set threadPool(val: GObject.Object);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ReturnableThread.SignalSignatures;

        // Fields

        thread: Thread;
        flags: number;
        safe_data: any;
        handler: number;

        // Constructors

        constructor(properties?: Partial<ReturnableThread.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](thread_pool: GObject.Object): ReturnableThread;
        // Conflicted with Ags.Thread.new

        static ['new'](...args: never[]): any;

        // Signals

        connect_after<K extends keyof ReturnableThread.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ReturnableThread.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ReturnableThread.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ReturnableThread.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_safe_run(): void;

        // Methods

        /**
         * Connects `callback` to `thread`.
         * @param callback the callback
         */
        connect_safe_run(callback: ReturnableThreadCallback): void;
        /**
         * Disconnects callback of `thread`.
         */
        disconnect_safe_run(): void;
        safe_run(): void;
        /**
         * Set flags.
         * @param flags the flags
         */
        set_flags(flags: ReturnableThreadFlags | null): void;
        // Conflicted with Ags.Thread.set_flags
        set_flags(...args: never[]): any;
        /**
         * Test `flags` to be set on `returnable_thread`.
         * @param flags the flags
         * @returns %TRUE if flags are set, else %FALSE
         */
        test_flags(flags: ReturnableThreadFlags | null): boolean;
        // Conflicted with Ags.Thread.test_flags
        test_flags(...args: never[]): any;
        /**
         * Unset flags.
         * @param flags the flags
         */
        unset_flags(flags: ReturnableThreadFlags | null): void;
        // Conflicted with Ags.Thread.unset_flags
        unset_flags(...args: never[]): any;

        // Inherited methods
        /**
         * Add connectable to registry.
         */
        add_to_registry(): void;
        /**
         * Connect the connectable.
         */
        connect(): void;
        connect(...args: never[]): any;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        connect_connection(connection: GObject.Object): void;
        /**
         * Disconnect the connectable.
         */
        disconnect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        disconnect_connection(connection: GObject.Object): void;
        /**
         * Get UUID of `connectable`.
         * @returns the assigned #AgsUUID
         */
        get_uuid(): UUID;
        /**
         * Check the connectable to have resources.
         * @returns %TRUE if @connectable can be added to registry, otherwise %FALSE.
         */
        has_resource(): boolean;
        /**
         * Check if the `connectable` was connected.
         * @returns %TRUE if is connected, otherwise %FALSE.
         */
        is_connected(): boolean;
        /**
         * Connect the connectable.
         * @returns %TRUE if is added to registry, otherwise %FALSE.
         */
        is_ready(): boolean;
        /**
         * List resources as an XML element and return it.
         * @returns the #xmlNode-struct
         */
        list_resource(): libxml2.Node;
        /**
         * Remove connectable from registry.
         */
        remove_from_registry(): void;
        /**
         * Compose an XML element and return it.
         * @returns the #xmlNode-struct
         */
        xml_compose(): libxml2.Node;
        /**
         * Parse `node` as XML element and apply it.
         * @param node the #xmlNode-struct
         */
        xml_parse(node: libxml2.Node): void;
        /**
         * Add connectable to registry.
         */
        vfunc_add_to_registry(): void;
        /**
         * Connect the connectable.
         */
        vfunc_connect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        vfunc_connect_connection(connection: GObject.Object): void;
        /**
         * Disconnect the connectable.
         */
        vfunc_disconnect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        vfunc_disconnect_connection(connection: GObject.Object): void;
        /**
         * Get UUID of `connectable`.
         */
        vfunc_get_uuid(): UUID;
        /**
         * Check the connectable to have resources.
         */
        vfunc_has_resource(): boolean;
        /**
         * Check if the `connectable` was connected.
         */
        vfunc_is_connected(): boolean;
        /**
         * Connect the connectable.
         */
        vfunc_is_ready(): boolean;
        /**
         * List resources as an XML element and return it.
         */
        vfunc_list_resource(): libxml2.Node;
        /**
         * Remove connectable from registry.
         */
        vfunc_remove_from_registry(): void;
        /**
         * Compose an XML element and return it.
         */
        vfunc_xml_compose(): libxml2.Node;
        /**
         * Parse `node` as XML element and apply it.
         * @param node the #xmlNode-struct
         */
        vfunc_xml_parse(node: libxml2.Node): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace SecurityContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::certs': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            certs: string;
        }
    }

    class SecurityContext extends GObject.Object {
        static $gtype: GObject.GType<SecurityContext>;

        // Properties

        /**
         * The assigned certificates as string.
         */
        get certs(): string;
        set certs(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SecurityContext.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        server_context_umask: number;
        business_group: string;
        server_context: string;

        // Constructors

        constructor(properties?: Partial<SecurityContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SecurityContext;

        // Signals

        connect<K extends keyof SecurityContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SecurityContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SecurityContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SecurityContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SecurityContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SecurityContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add `server_context` to `security_context`.
         * @param server_context the server context
         */
        add_server_context(server_context: string): void;
        /**
         * Get business group of `security_context`.
         * @returns the string vector containing business group or %NULL
         */
        get_business_group(): string[];
        /**
         * Get business group of `security_context`.
         * @returns the string vector containing business group or %NULL
         */
        get_server_context(): string[];
        /**
         * Parse `business_group` and apply to `security_context`.
         * @param xml_doc the xmlDoc containing groups
         * @param user_uuid the user's UUID
         */
        parse_business_group(xml_doc: libxml2.Doc, user_uuid: string): void;
        /**
         * Remove `server_context` from `security_context`.
         * @param server_context the server context
         * @returns %TRUE on success, otherwise %FALSE
         */
        remove_server_context(server_context: string): boolean;
    }

    namespace Server {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            listen: () => boolean | void;
            start: () => void;
            stop: () => void;
            'notify::controller': (pspec: GObject.ParamSpec) => void;
            'notify::domain': (pspec: GObject.ParamSpec) => void;
            'notify::front-controller': (pspec: GObject.ParamSpec) => void;
            'notify::ip4': (pspec: GObject.ParamSpec) => void;
            'notify::ip6': (pspec: GObject.ParamSpec) => void;
            'notify::path': (pspec: GObject.ParamSpec) => void;
            'notify::realm': (pspec: GObject.ParamSpec) => void;
            'notify::server-port': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            controller: Controller[];
            domain: string;
            front_controller: FrontController;
            frontController: FrontController;
            ip4: string;
            ip6: string;
            path: string;
            realm: string;
            server_port: number;
            serverPort: number;
        }
    }

    class Server extends GObject.Object {
        static $gtype: GObject.GType<Server>;

        // Properties

        /**
         * The assigned #AgsController providing default settings.
         */
        get controller(): Controller[];
        set controller(val: Controller[]);
        /**
         * The domain to use.
         */
        get domain(): string;
        set domain(val: string);
        /**
         * The assigned #AgsFrontController.
         */
        get front_controller(): FrontController;
        set front_controller(val: FrontController);
        /**
         * The assigned #AgsFrontController.
         */
        get frontController(): FrontController;
        set frontController(val: FrontController);
        /**
         * The IPv4 address as string of the server.
         */
        get ip4(): string;
        set ip4(val: string);
        /**
         * The IPv6 address as string of the server.
         */
        get ip6(): string;
        set ip6(val: string);
        /**
         * The path to use.
         */
        get path(): string;
        set path(val: string);
        /**
         * The realm to use.
         */
        get realm(): string;
        set realm(val: string);
        /**
         * The server port to use.
         */
        get server_port(): number;
        set server_port(val: number);
        /**
         * The server port to use.
         */
        get serverPort(): number;
        set serverPort(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Server.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        flags: number;
        uuid: UUID;
        server_info: ServerInfo;
        ip4_fd: number;
        ip6_fd: number;
        ip4_socket: Gio.Socket;
        ip6_socket: Gio.Socket;
        ip4_address: Gio.SocketAddress;
        ip6_address: Gio.SocketAddress;
        soup_server: Soup.Server;
        auth_module: string;
        auth_domain: Soup.AuthDomain;

        // Constructors

        constructor(properties?: Partial<Server.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Server;

        // Signals

        connect<K extends keyof Server.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Server.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Server.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Server.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Server.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Server.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Listen as  server.
         */
        vfunc_listen(): boolean;
        /**
         * Start the XMLRPC-C abyss server.
         */
        vfunc_start(): void;
        /**
         * Stop the XMLRPC-C abyss server.
         */
        vfunc_stop(): void;

        // Methods

        /**
         * Add `controller` to `server`.
         * @param controller the #AgsController
         */
        add_controller(controller: GObject.Object): void;
        /**
         * Listen as  server.
         * @returns %TRUE as a new connection was initiated, otherwise %FALSE
         */
        listen(): boolean;
        /**
         * Remove `controller` from `server`.
         * @param controller the #AgsController
         */
        remove_controller(controller: GObject.Object): void;
        /**
         * Enable a feature of `server`.
         * @param flags see #AgsServerFlags-enum
         */
        set_flags(flags: ServerFlags | null): void;
        /**
         * Start the XMLRPC-C abyss server.
         */
        start(): void;
        /**
         * Stop the XMLRPC-C abyss server.
         */
        stop(): void;
        /**
         * Test `flags` to be set on `server`.
         * @param flags the flags
         * @returns %TRUE if flags are set, else %FALSE
         */
        test_flags(flags: ServerFlags | null): boolean;
        /**
         * Disable a feature of `server`.
         * @param flags see #AgsServerFlags-enum
         */
        unset_flags(flags: ServerFlags | null): void;
    }

    namespace ServerApplicationContext {
        // Signal signatures
        interface SignalSignatures extends ApplicationContext.SignalSignatures {
            'notify::config': (pspec: GObject.ParamSpec) => void;
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::main-loop': (pspec: GObject.ParamSpec) => void;
            'notify::task-launcher': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends ApplicationContext.ConstructorProps,
                ConcurrencyProvider.ConstructorProps,
                Connectable.ConstructorProps,
                ServiceProvider.ConstructorProps {}
    }

    class ServerApplicationContext
        extends ApplicationContext
        implements ConcurrencyProvider, Connectable, ServiceProvider
    {
        static $gtype: GObject.GType<ServerApplicationContext>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServerApplicationContext.SignalSignatures;

        // Fields

        application_context: ApplicationContext;
        flags: number;
        thread_pool: ThreadPool;
        worker: any[];

        // This field conflicts with a function in a parent class or interface.
        is_operating: boolean | any;
        server_status: ServerStatus;
        registry: Registry;
        server: any[];

        // Constructors

        constructor(properties?: Partial<ServerApplicationContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ServerApplicationContext;

        // Signals

        connect_after<K extends keyof ServerApplicationContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServerApplicationContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ServerApplicationContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ServerApplicationContext.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
        /**
         * Get main loop of application context.
         * @returns the #AgsThread implementing #AgsMainLoop
         */
        get_main_loop(): Thread;
        /**
         * Get task launcher of application context.
         * @returns the #AgsTaskLauncher
         */
        get_task_launcher(): TaskLauncher;
        /**
         * Get thread pool of application context.
         * @returns the #AgsThreadPool
         */
        get_thread_pool(): ThreadPool;
        /**
         * Get workers of application context.
         * @returns the #GList-struct containing workers
         */
        get_worker(): WorkerThread[];
        /**
         * Set main loop of application context.
         * @param main_loop the #AgsThread implementing #AgsMainLoop
         */
        set_main_loop(main_loop: Thread): void;
        /**
         * Set task launcher of application context.
         * @param task_launcher the #AgsTaskLauncher
         */
        set_task_launcher(task_launcher: TaskLauncher): void;
        /**
         * Set thread pool of application context.
         * @param thread_pool the #AgsThreadPool
         */
        set_thread_pool(thread_pool: ThreadPool): void;
        /**
         * Set workers of application context.
         * @param worker the #GList-struct containing workers
         */
        set_worker(worker: WorkerThread[]): void;
        /**
         * Get main loop of application context.
         */
        vfunc_get_main_loop(): Thread;
        /**
         * Get task launcher of application context.
         */
        vfunc_get_task_launcher(): TaskLauncher;
        /**
         * Get thread pool of application context.
         */
        vfunc_get_thread_pool(): ThreadPool;
        /**
         * Get workers of application context.
         */
        vfunc_get_worker(): WorkerThread[];
        /**
         * Set main loop of application context.
         * @param main_loop the #AgsThread implementing #AgsMainLoop
         */
        vfunc_set_main_loop(main_loop: Thread): void;
        /**
         * Set task launcher of application context.
         * @param task_launcher the #AgsTaskLauncher
         */
        vfunc_set_task_launcher(task_launcher: TaskLauncher): void;
        /**
         * Set thread pool of application context.
         * @param thread_pool the #AgsThreadPool
         */
        vfunc_set_thread_pool(thread_pool: ThreadPool): void;
        /**
         * Set workers of application context.
         * @param worker the #GList-struct containing workers
         */
        vfunc_set_worker(worker: WorkerThread[]): void;
        /**
         * Add connectable to registry.
         */
        add_to_registry(): void;
        /**
         * Connect the connectable.
         */
        connect(): void;
        connect(...args: never[]): any;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        connect_connection(connection: GObject.Object): void;
        /**
         * Disconnect the connectable.
         */
        disconnect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        disconnect_connection(connection: GObject.Object): void;
        /**
         * Get UUID of `connectable`.
         * @returns the assigned #AgsUUID
         */
        get_uuid(): UUID;
        /**
         * Check the connectable to have resources.
         * @returns %TRUE if @connectable can be added to registry, otherwise %FALSE.
         */
        has_resource(): boolean;
        /**
         * Check if the `connectable` was connected.
         * @returns %TRUE if is connected, otherwise %FALSE.
         */
        is_connected(): boolean;
        /**
         * List resources as an XML element and return it.
         * @returns the #xmlNode-struct
         */
        list_resource(): libxml2.Node;
        /**
         * Remove connectable from registry.
         */
        remove_from_registry(): void;
        /**
         * Compose an XML element and return it.
         * @returns the #xmlNode-struct
         */
        xml_compose(): libxml2.Node;
        /**
         * Parse `node` as XML element and apply it.
         * @param node the #xmlNode-struct
         */
        xml_parse(node: libxml2.Node): void;
        /**
         * Add connectable to registry.
         */
        vfunc_add_to_registry(): void;
        /**
         * Connect the connectable.
         */
        vfunc_connect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        vfunc_connect_connection(connection: GObject.Object): void;
        /**
         * Disconnect the connectable.
         */
        vfunc_disconnect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        vfunc_disconnect_connection(connection: GObject.Object): void;
        /**
         * Get UUID of `connectable`.
         */
        vfunc_get_uuid(): UUID;
        /**
         * Check the connectable to have resources.
         */
        vfunc_has_resource(): boolean;
        /**
         * Check if the `connectable` was connected.
         */
        vfunc_is_connected(): boolean;
        /**
         * Connect the connectable.
         */
        vfunc_is_ready(): boolean;
        /**
         * List resources as an XML element and return it.
         */
        vfunc_list_resource(): libxml2.Node;
        /**
         * Remove connectable from registry.
         */
        vfunc_remove_from_registry(): void;
        /**
         * Compose an XML element and return it.
         */
        vfunc_xml_compose(): libxml2.Node;
        /**
         * Parse `node` as XML element and apply it.
         * @param node the #xmlNode-struct
         */
        vfunc_xml_parse(node: libxml2.Node): void;
        /**
         * Get server.
         * @returns the #GList-struct containing #AgsServer
         */
        get_server(): Server[];
        /**
         * Set registry.
         * @param registry the #AgsRegistry
         */
        set_registry(registry: Registry): void;
        /**
         * Set server.
         * @param server the #GList-struct containing #AgsServer
         */
        set_server(server: Server[]): void;
        /**
         * Get server.
         */
        vfunc_get_server(): Server[];
        /**
         * Check if is operating.
         */
        vfunc_is_operating(): boolean;
        /**
         * Set registry.
         * @param registry the #AgsRegistry
         */
        vfunc_set_registry(registry: Registry): void;
        /**
         * Set server.
         * @param server the #GList-struct containing #AgsServer
         */
        vfunc_set_server(server: Server[]): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace ServerStatus {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Connectable.ConstructorProps {}
    }

    class ServerStatus extends GObject.Object implements Connectable {
        static $gtype: GObject.GType<ServerStatus>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServerStatus.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        flags: number;
        authentication_module: string;
        maximum_connections: number;
        connection_count: number;

        // Constructors

        constructor(properties?: Partial<ServerStatus.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ServerStatus;

        // Signals

        connect_after<K extends keyof ServerStatus.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServerStatus.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ServerStatus.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ServerStatus.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
        /**
         * Add connectable to registry.
         */
        add_to_registry(): void;
        /**
         * Connect the connectable.
         */
        connect(): void;
        connect(...args: never[]): any;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        connect_connection(connection: GObject.Object): void;
        /**
         * Disconnect the connectable.
         */
        disconnect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        disconnect_connection(connection: GObject.Object): void;
        /**
         * Get UUID of `connectable`.
         * @returns the assigned #AgsUUID
         */
        get_uuid(): UUID;
        /**
         * Check the connectable to have resources.
         * @returns %TRUE if @connectable can be added to registry, otherwise %FALSE.
         */
        has_resource(): boolean;
        /**
         * Check if the `connectable` was connected.
         * @returns %TRUE if is connected, otherwise %FALSE.
         */
        is_connected(): boolean;
        /**
         * Connect the connectable.
         * @returns %TRUE if is added to registry, otherwise %FALSE.
         */
        is_ready(): boolean;
        /**
         * List resources as an XML element and return it.
         * @returns the #xmlNode-struct
         */
        list_resource(): libxml2.Node;
        /**
         * Remove connectable from registry.
         */
        remove_from_registry(): void;
        /**
         * Compose an XML element and return it.
         * @returns the #xmlNode-struct
         */
        xml_compose(): libxml2.Node;
        /**
         * Parse `node` as XML element and apply it.
         * @param node the #xmlNode-struct
         */
        xml_parse(node: libxml2.Node): void;
        /**
         * Add connectable to registry.
         */
        vfunc_add_to_registry(): void;
        /**
         * Connect the connectable.
         */
        vfunc_connect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        vfunc_connect_connection(connection: GObject.Object): void;
        /**
         * Disconnect the connectable.
         */
        vfunc_disconnect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        vfunc_disconnect_connection(connection: GObject.Object): void;
        /**
         * Get UUID of `connectable`.
         */
        vfunc_get_uuid(): UUID;
        /**
         * Check the connectable to have resources.
         */
        vfunc_has_resource(): boolean;
        /**
         * Check if the `connectable` was connected.
         */
        vfunc_is_connected(): boolean;
        /**
         * Connect the connectable.
         */
        vfunc_is_ready(): boolean;
        /**
         * List resources as an XML element and return it.
         */
        vfunc_list_resource(): libxml2.Node;
        /**
         * Remove connectable from registry.
         */
        vfunc_remove_from_registry(): void;
        /**
         * Compose an XML element and return it.
         */
        vfunc_xml_compose(): libxml2.Node;
        /**
         * Parse `node` as XML element and apply it.
         * @param node the #xmlNode-struct
         */
        vfunc_xml_parse(node: libxml2.Node): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace SolverMatrix {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::column-count': (pspec: GObject.ParamSpec) => void;
            'notify::row-count': (pspec: GObject.ParamSpec) => void;
            'notify::solver-path': (pspec: GObject.ParamSpec) => void;
            'notify::source-function': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            column_count: number;
            columnCount: number;
            row_count: number;
            rowCount: number;
            solver_path: any;
            solverPath: any;
            source_function: string;
            sourceFunction: string;
        }
    }

    class SolverMatrix extends GObject.Object {
        static $gtype: GObject.GType<SolverMatrix>;

        // Properties

        /**
         * The column count of the term table.
         */
        get column_count(): number;
        /**
         * The column count of the term table.
         */
        get columnCount(): number;
        /**
         * The row count of the term table.
         */
        get row_count(): number;
        /**
         * The row count of the term table.
         */
        get rowCount(): number;
        /**
         * The assigned solver path.
         */
        get solver_path(): any;
        set solver_path(val: any);
        /**
         * The assigned solver path.
         */
        get solverPath(): any;
        set solverPath(val: any);
        /**
         * The assigned source-function.
         */
        get source_function(): string;
        set source_function(val: string);
        /**
         * The assigned source-function.
         */
        get sourceFunction(): string;
        set sourceFunction(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SolverMatrix.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        flags: number;
        function_history: string;
        term_table: SolverVector;

        // Constructors

        constructor(properties?: Partial<SolverMatrix.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SolverMatrix;

        // Signals

        connect<K extends keyof SolverMatrix.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SolverMatrix.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SolverMatrix.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SolverMatrix.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SolverMatrix.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SolverMatrix.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Eliminate one column of `solver_matrix`.
         * @param nth_column the nth column
         * @param nth_row_a the nth row as a
         * @param nth_row_b the nth row as b
         */
        eliminate(nth_column: number, nth_row_a: number, nth_row_b: number): void;
        get_column_count(): number;
        /**
         * Get row count of `solver_matrix`.
         * @returns the row count
         */
        get_row_count(): number;
        /**
         * Get column count of `solver_matrix`.
         * @returns the column count
         */
        get_source_function(): string;
        /**
         * Insert `solver_vector` to `solver_matrix`.
         * @param solver_vector the #AgsSolverVector
         * @param position the position
         */
        insert_vector(solver_vector: SolverVector, position: number): void;
        /**
         * Parse `source_function` and apply to `solver_matrix`.
         * @param source_function the normalized source function
         */
        parse(source_function: string): void;
        /**
         * Remove `solver_vector` from `solver_matrix`.
         * @param solver_vector the #AgsSolverVector
         */
        remove_vector(solver_vector: SolverVector): void;
        /**
         * Set `source_function` of `solver_matrix`.
         * @param source_function the source function
         */
        set_source_function(source_function: string): void;
        /**
         * Default solve.
         */
        solve_default(): void;
        /**
         * To string of `solver_matrix`.
         * @returns the new string representation
         */
        to_string(): string;
    }

    namespace SolverPolynomial {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::coefficient': (pspec: GObject.ParamSpec) => void;
            'notify::coefficient-value': (pspec: GObject.ParamSpec) => void;
            'notify::exponent': (pspec: GObject.ParamSpec) => void;
            'notify::exponent-value': (pspec: GObject.ParamSpec) => void;
            'notify::polynomial': (pspec: GObject.ParamSpec) => void;
            'notify::symbol': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            coefficient: string;
            coefficient_value: Complex;
            coefficientValue: Complex;
            exponent: any;
            exponent_value: any;
            exponentValue: any;
            polynomial: string;
            symbol: any;
        }
    }

    class SolverPolynomial extends GObject.Object {
        static $gtype: GObject.GType<SolverPolynomial>;

        // Properties

        /**
         * The assigned coefficient.
         */
        get coefficient(): string;
        set coefficient(val: string);
        /**
         * Coefficient value.
         */
        get coefficient_value(): Complex;
        set coefficient_value(val: Complex);
        /**
         * Coefficient value.
         */
        get coefficientValue(): Complex;
        set coefficientValue(val: Complex);
        /**
         * The assigned exponent.
         */
        get exponent(): any;
        /**
         * Exponent value.
         */
        get exponent_value(): any;
        /**
         * Exponent value.
         */
        get exponentValue(): any;
        /**
         * The assigned polynomial.
         */
        get polynomial(): string;
        set polynomial(val: string);
        /**
         * The assigned symbol.
         */
        get symbol(): any;
        set symbol(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SolverPolynomial.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        flags: number;

        // Constructors

        constructor(properties?: Partial<SolverPolynomial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SolverPolynomial;

        // Signals

        connect<K extends keyof SolverPolynomial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SolverPolynomial.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SolverPolynomial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SolverPolynomial.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SolverPolynomial.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SolverPolynomial.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static error_quark(): GLib.Quark;

        // Methods

        /**
         * Perform addition of `polynomial_a` and `polynomial_b`. Both summands need to have the very same
         * symbol and exponent, otherwise %NULL returned and error is appropriately set.
         * @param polynomial_b the second summand
         * @returns the newly instantiated #AgsSolverPolynomial or %NULL
         */
        add(polynomial_b: SolverPolynomial): SolverPolynomial;
        /**
         * Perform division of `polynomial_a` and `polynomial_b`.
         * @param polynomial_b the divisor
         * @returns the newly instantiated #AgsSolverPolynomial or %NULL
         */
        divide(polynomial_b: SolverPolynomial): SolverPolynomial;
        /**
         * Perform raising power of `polynomial_a` and `polynomial_b`.
         * @param polynomial_b the index of root
         * @returns the newly instantiated #AgsSolverPolynomial or %NULL
         */
        extract_root(polynomial_b: SolverPolynomial): SolverPolynomial;
        /**
         * Get coefficient of `solver_polynomial`.
         * @returns the coefficient
         */
        get_coefficient(): string;
        /**
         * Get coefficient value of `solver_polynomial`.
         * @returns the coefficient value
         */
        get_coefficient_value(): Complex;
        /**
         * Get exponent of `solver_polynomial`.
         * @returns the exponent
         */
        get_exponent(): string[];
        /**
         * Get polynomial of `solver_polynomial`.
         * @returns the polynomial
         */
        get_polynomial(): string;
        /**
         * Get symbol of `solver_polynomial`.
         * @returns the symbol
         */
        get_symbol(): string[];
        /**
         * Perform multiplication of `polynomial_a` and `polynomial_b`.
         * @param polynomial_b the second factor
         * @returns the newly instantiated #AgsSolverPolynomial or %NULL
         */
        multiply(polynomial_b: SolverPolynomial): SolverPolynomial;
        /**
         * Parse `polynomial` and apply to `solver_polynomial`.
         * @param polynomial the polynomial as string
         */
        parse(polynomial: string): void;
        /**
         * Perform raising power of `polynomial_a` and `polynomial_b`.
         * @param polynomial_b the exponent
         * @returns the newly instantiated #AgsSolverPolynomial or %NULL
         */
        raise_power(polynomial_b: SolverPolynomial): SolverPolynomial;
        /**
         * Set `coefficient` of `solver_polynomial`.
         * @param coefficient the coefficient
         */
        set_coefficient(coefficient: string): void;
        /**
         * Set `coefficient_value` of `solver_polynomial`.
         * @param coefficient_value the coefficient value
         */
        set_coefficient_value(coefficient_value: Complex): void;
        /**
         * Set `polynomial` of `solver_polynomial`.
         * @param polynomial the polynomial
         */
        set_polynomial(polynomial: string): void;
        /**
         * Perform subtraction of `polynomial_a` and `polynomial_b`. Both minuend and subtrahend need to have the very same
         * symbol and exponent, otherwise %NULL returned and error is appropriately set.
         * @param polynomial_b the subtrahend
         * @returns the newly instantiated #AgsSolverPolynomial or %NULL
         */
        subtract(polynomial_b: SolverPolynomial): SolverPolynomial;
        /**
         * Update string representation of `solver_polynomial`.
         */
        update(): void;
    }

    namespace SolverVector {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::polynomial-count': (pspec: GObject.ParamSpec) => void;
            'notify::source-polynomial': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            polynomial_count: number;
            polynomialCount: number;
            source_polynomial: string;
            sourcePolynomial: string;
        }
    }

    class SolverVector extends GObject.Object {
        static $gtype: GObject.GType<SolverVector>;

        // Properties

        /**
         * The polynomial count of the term table.
         */
        get polynomial_count(): number;
        /**
         * The polynomial count of the term table.
         */
        get polynomialCount(): number;
        /**
         * The assigned source-polynomial.
         */
        get source_polynomial(): string;
        set source_polynomial(val: string);
        /**
         * The assigned source-polynomial.
         */
        get sourcePolynomial(): string;
        set sourcePolynomial(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SolverVector.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        flags: number;
        polynomial_history: string;
        polynomial_column: SolverPolynomial;

        // Constructors

        constructor(properties?: Partial<SolverVector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SolverVector;

        // Signals

        connect<K extends keyof SolverVector.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SolverVector.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SolverVector.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SolverVector.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SolverVector.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SolverVector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get polynomial count of `solver_vector`.
         * @returns the polynomial count
         */
        get_polynomial_count(): number;
        /**
         * Get source polynomial of `solver_vector`.
         * @returns the source polynomial
         */
        get_source_polynomial(): string;
        /**
         * Insert `solver_polynomial` to `solver_vector`.
         * @param solver_polynomial the #AgsSolverPolynomial
         * @param position the position
         */
        insert_polynomial(solver_polynomial: SolverPolynomial, position: number): void;
        /**
         * Remove `solver_polynomial` from `solver_vector`.
         * @param solver_polynomial the #AgsSolverPolynomial
         */
        remove_polynomial(solver_polynomial: SolverPolynomial): void;
        /**
         * Set `source_polynomial` of `solver_vector`.
         * @param source_polynomial the source polynomial
         */
        set_source_polynomial(source_polynomial: string): void;
    }

    namespace Task {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            failure: (arg0: any | null) => void;
            launch: () => void;
            'notify::task-launcher': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            task_launcher: TaskLauncher;
            taskLauncher: TaskLauncher;
        }
    }

    class Task extends GObject.Object {
        static $gtype: GObject.GType<Task>;

        // Properties

        /**
         * The assigned #AgsTaskLauncher
         */
        get task_launcher(): TaskLauncher;
        set task_launcher(val: TaskLauncher);
        /**
         * The assigned #AgsTaskLauncher
         */
        get taskLauncher(): TaskLauncher;
        set taskLauncher(val: TaskLauncher);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Task.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        flags: number;
        task_name: string;

        // Constructors

        constructor(properties?: Partial<Task.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Task;

        // Signals

        connect<K extends keyof Task.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Task.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Task.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Task.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Task.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Task.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Signals failure of task.
         * @param error is %NULL on success
         */
        vfunc_failure(error: GLib.Error): void;
        /**
         * Intercept task.
         */
        vfunc_launch(): void;

        // Methods

        /**
         * Signals failure of task.
         * @param error is %NULL on success
         */
        failure(error: GLib.Error): void;
        /**
         * Intercept task.
         */
        launch(): void;
        /**
         * Enable a feature of #AgsTask.
         * @param flags see enum AgsTaskFlags
         */
        set_flags(flags: TaskFlags | null): void;
        /**
         * Test `flags` to be set on `task`.
         * @param flags the flags
         * @returns %TRUE if flags are set, else %FALSE
         */
        test_flags(flags: TaskFlags | null): boolean;
        /**
         * Disable a feature of AgsTask.
         * @param flags see enum AgsTaskFlags
         */
        unset_flags(flags: TaskFlags | null): void;
    }

    namespace TaskCompletion {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            complete: () => void;
            'notify::task': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Connectable.ConstructorProps {
            task: GObject.Object;
        }
    }

    class TaskCompletion extends GObject.Object implements Connectable {
        static $gtype: GObject.GType<TaskCompletion>;

        // Properties

        /**
         * The assigned task.
         */
        get task(): GObject.Object;
        set task(val: GObject.Object);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TaskCompletion.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        flags: number;
        connectable_flags: number;
        uuid: UUID;
        data: any;

        // Constructors

        constructor(properties?: Partial<TaskCompletion.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](task: GObject.Object, data?: any | null): TaskCompletion;

        // Signals

        connect_after<K extends keyof TaskCompletion.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TaskCompletion.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TaskCompletion.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TaskCompletion.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Emit ::complete signal
         */
        vfunc_complete(): void;

        // Methods

        /**
         * Emit ::complete signal
         */
        complete(): void;
        /**
         * Enable a feature of #AgsTaskCompletion.
         * @param flags see enum AgsTaskCompletionFlags
         */
        set_flags(flags: TaskCompletionFlags | null): void;
        /**
         * Test `flags` to be set on `task_completion`.
         * @param flags the flags
         * @returns %TRUE if flags are set, else %FALSE
         */
        test_flags(flags: TaskCompletionFlags | null): boolean;
        /**
         * Disable a feature of AgsTaskCompletion.
         * @param flags see enum AgsTaskCompletionFlags
         */
        unset_flags(flags: TaskCompletionFlags | null): void;

        // Inherited methods
        /**
         * Add connectable to registry.
         */
        add_to_registry(): void;
        /**
         * Connect the connectable.
         */
        connect(): void;
        connect(...args: never[]): any;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        connect_connection(connection: GObject.Object): void;
        /**
         * Disconnect the connectable.
         */
        disconnect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        disconnect_connection(connection: GObject.Object): void;
        /**
         * Get UUID of `connectable`.
         * @returns the assigned #AgsUUID
         */
        get_uuid(): UUID;
        /**
         * Check the connectable to have resources.
         * @returns %TRUE if @connectable can be added to registry, otherwise %FALSE.
         */
        has_resource(): boolean;
        /**
         * Check if the `connectable` was connected.
         * @returns %TRUE if is connected, otherwise %FALSE.
         */
        is_connected(): boolean;
        /**
         * Connect the connectable.
         * @returns %TRUE if is added to registry, otherwise %FALSE.
         */
        is_ready(): boolean;
        /**
         * List resources as an XML element and return it.
         * @returns the #xmlNode-struct
         */
        list_resource(): libxml2.Node;
        /**
         * Remove connectable from registry.
         */
        remove_from_registry(): void;
        /**
         * Compose an XML element and return it.
         * @returns the #xmlNode-struct
         */
        xml_compose(): libxml2.Node;
        /**
         * Parse `node` as XML element and apply it.
         * @param node the #xmlNode-struct
         */
        xml_parse(node: libxml2.Node): void;
        /**
         * Add connectable to registry.
         */
        vfunc_add_to_registry(): void;
        /**
         * Connect the connectable.
         */
        vfunc_connect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        vfunc_connect_connection(connection: GObject.Object): void;
        /**
         * Disconnect the connectable.
         */
        vfunc_disconnect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        vfunc_disconnect_connection(connection: GObject.Object): void;
        /**
         * Get UUID of `connectable`.
         */
        vfunc_get_uuid(): UUID;
        /**
         * Check the connectable to have resources.
         */
        vfunc_has_resource(): boolean;
        /**
         * Check if the `connectable` was connected.
         */
        vfunc_is_connected(): boolean;
        /**
         * Connect the connectable.
         */
        vfunc_is_ready(): boolean;
        /**
         * List resources as an XML element and return it.
         */
        vfunc_list_resource(): libxml2.Node;
        /**
         * Remove connectable from registry.
         */
        vfunc_remove_from_registry(): void;
        /**
         * Compose an XML element and return it.
         */
        vfunc_xml_compose(): libxml2.Node;
        /**
         * Parse `node` as XML element and apply it.
         * @param node the #xmlNode-struct
         */
        vfunc_xml_parse(node: libxml2.Node): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace TaskLauncher {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            run: () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Connectable.ConstructorProps {}
    }

    class TaskLauncher extends GObject.Object implements Connectable {
        static $gtype: GObject.GType<TaskLauncher>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TaskLauncher.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        flags: number;
        connectable_flags: number;
        uuid: UUID;
        is_running: boolean;
        wait_count: number;

        // Constructors

        constructor(properties?: Partial<TaskLauncher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TaskLauncher;

        // Signals

        connect_after<K extends keyof TaskLauncher.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TaskLauncher.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TaskLauncher.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TaskLauncher.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Run tasks.
         */
        vfunc_run(): void;

        // Methods

        /**
         * Add `cyclic_task` to `task_launcher`.
         * @param cyclic_task the cyclic #AgsTask
         */
        add_cyclic_task(cyclic_task: Task): void;
        /**
         * Add `task` to `task_launcher`.
         * @param task the #AgsTask
         */
        add_task(task: Task): void;
        /**
         * Add all `list` to `task_launcher`.
         * @param list the #GList-struct containing #AgsTask
         */
        add_task_all(list: Task[]): void;
        /**
         * Attach `task_launcher` to `main_context`.
         * @param main_context the #GMainContext-struct
         */
        attach(main_context: GLib.MainContext): void;
        /**
         * Remove `cyclic_task` from `task_launcher`.
         * @param cyclic_task the cyclic #AgsTask
         */
        remove_cyclic_task(cyclic_task: Task): void;
        /**
         * Run tasks.
         */
        run(): void;
        /**
         * Sync run tasks.
         */
        sync_run(): void;

        // Inherited methods
        /**
         * Add connectable to registry.
         */
        add_to_registry(): void;
        /**
         * Connect the connectable.
         */
        connect(): void;
        connect(...args: never[]): any;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        connect_connection(connection: GObject.Object): void;
        /**
         * Disconnect the connectable.
         */
        disconnect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        disconnect_connection(connection: GObject.Object): void;
        /**
         * Get UUID of `connectable`.
         * @returns the assigned #AgsUUID
         */
        get_uuid(): UUID;
        /**
         * Check the connectable to have resources.
         * @returns %TRUE if @connectable can be added to registry, otherwise %FALSE.
         */
        has_resource(): boolean;
        /**
         * Check if the `connectable` was connected.
         * @returns %TRUE if is connected, otherwise %FALSE.
         */
        is_connected(): boolean;
        /**
         * Connect the connectable.
         * @returns %TRUE if is added to registry, otherwise %FALSE.
         */
        is_ready(): boolean;
        /**
         * List resources as an XML element and return it.
         * @returns the #xmlNode-struct
         */
        list_resource(): libxml2.Node;
        /**
         * Remove connectable from registry.
         */
        remove_from_registry(): void;
        /**
         * Compose an XML element and return it.
         * @returns the #xmlNode-struct
         */
        xml_compose(): libxml2.Node;
        /**
         * Parse `node` as XML element and apply it.
         * @param node the #xmlNode-struct
         */
        xml_parse(node: libxml2.Node): void;
        /**
         * Add connectable to registry.
         */
        vfunc_add_to_registry(): void;
        /**
         * Connect the connectable.
         */
        vfunc_connect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        vfunc_connect_connection(connection: GObject.Object): void;
        /**
         * Disconnect the connectable.
         */
        vfunc_disconnect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        vfunc_disconnect_connection(connection: GObject.Object): void;
        /**
         * Get UUID of `connectable`.
         */
        vfunc_get_uuid(): UUID;
        /**
         * Check the connectable to have resources.
         */
        vfunc_has_resource(): boolean;
        /**
         * Check if the `connectable` was connected.
         */
        vfunc_is_connected(): boolean;
        /**
         * Connect the connectable.
         */
        vfunc_is_ready(): boolean;
        /**
         * List resources as an XML element and return it.
         */
        vfunc_list_resource(): libxml2.Node;
        /**
         * Remove connectable from registry.
         */
        vfunc_remove_from_registry(): void;
        /**
         * Compose an XML element and return it.
         */
        vfunc_xml_compose(): libxml2.Node;
        /**
         * Parse `node` as XML element and apply it.
         * @param node the #xmlNode-struct
         */
        vfunc_xml_parse(node: libxml2.Node): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Thread {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            clock: () => number;
            run: () => void;
            start: () => void;
            stop: () => void;
            'notify::delay': (pspec: GObject.ParamSpec) => void;
            'notify::frequency': (pspec: GObject.ParamSpec) => void;
            'notify::max-precision': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Connectable.ConstructorProps {
            delay: number;
            frequency: number;
            max_precision: number;
            maxPrecision: number;
        }
    }

    class Thread extends GObject.Object implements Connectable {
        static $gtype: GObject.GType<Thread>;

        // Properties

        /**
         * The delay until next tic.
         */
        get delay(): number;
        set delay(val: number);
        /**
         * The frequency to run at in Hz.
         */
        get frequency(): number;
        set frequency(val: number);
        /**
         * The max-frequency to run at in Hz.
         */
        get max_precision(): number;
        set max_precision(val: number);
        /**
         * The max-frequency to run at in Hz.
         */
        get maxPrecision(): number;
        set maxPrecision(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Thread.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        my_flags: number;
        connectable_flags: number;
        status_flags: number;
        sync_tic_flags: number;
        uuid: UUID;
        current_sync_tic: number;
        tic_delay: number;
        last_run_start: number;
        last_run_end: number;
        start_queue: any[];

        // Constructors

        constructor(properties?: Partial<Thread.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Thread;

        // Signals

        connect_after<K extends keyof Thread.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Thread.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Thread.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Thread.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Get global config value use sync counter.
         */
        static global_get_use_sync_counter(): boolean;
        /**
         * Thread self.
         */
        static self(): Thread;

        // Virtual methods

        /**
         * Clock the thread.
         */
        vfunc_clock(): number;
        /**
         * Only for internal use of ags_thread_loop but you may want to set the your very own
         * class function namely your thread's routine.
         */
        vfunc_run(): void;
        /**
         * Start the thread.
         */
        vfunc_start(): void;
        /**
         * Stop the threads loop by unsetting AGS_THREAD_STATUS_RUNNING flag.
         */
        vfunc_stop(): void;

        // Methods

        /**
         * Add child to thread.
         * @param child the child to remove
         */
        add_child(child: Thread): void;
        /**
         * Add child to thread.
         * @param child the child to remove
         * @param no_start don't start thread
         * @param no_wait don't wait until started
         */
        add_child_extended(child: Thread, no_start: boolean, no_wait: boolean): void;
        /**
         * Add `child` to `thread'`s start queue.
         * @param child the child #AgsThread to start
         */
        add_start_queue(child: Thread): void;
        /**
         * Add `child` to `thread'`s start queue.
         * @param child the children as #GList-struct containing #AgsThread to start
         */
        add_start_queue_all(child: Thread[]): void;
        /**
         * Get children thread.
         * @returns the children #AgsThread
         */
        children(): Thread;
        /**
         * Clear status flags.
         */
        clear_status_flags(): void;
        /**
         * Clear sync-tic flags.
         */
        clear_sync_tic_flags(): void;
        /**
         * Clock the thread.
         * @returns the cycles to be performed
         */
        clock(): number;
        /**
         * Find `gtype` as descendant of `thread`. If its a descendant thread,
         * the ref-count is increased.
         * @param gtype the #GType-struct
         * @returns the matching #AgsThread
         */
        find_type(gtype: GObject.GType): Thread;
        /**
         * Retrieve first sibling.
         * @returns the very first #AgsThread within same tree level
         */
        first(): Thread;
        /**
         * Get current sync-tic.
         * @returns the current sync-tic
         */
        get_current_sync_tic(): number;
        /**
         * Get delay.
         * @returns the delay
         */
        get_delay(): number;
        /**
         * Get frequency.
         * @returns the frequency
         */
        get_frequency(): number;
        /**
         * Get max-precision.
         * @returns the max-precision
         */
        get_max_precision(): number;
        /**
         * Retrieve toplevel thread.
         * @returns the toplevevel #AgsThread
         */
        get_toplevel(): Thread;
        is_current_ready(current_sync_tic: number): boolean;
        is_tree_ready_recursive(current_sync_tic: number): boolean;
        /**
         * Retrieve last sibling.
         * @returns the very last @AgsThread within same tree level
         */
        last(): Thread;
        /**
         * Locks the threads own mutex and sets the appropriate flag.
         */
        lock(): void;
        /**
         * Get next thread.
         * @returns the next #AgsThread
         */
        next(): Thread;
        /**
         * Get parent thread.
         * @returns the parent #AgsThread
         */
        parent(): Thread;
        prepare_current_sync(current_sync_tic: number): void;
        prepare_tree_sync_recursive(current_sync_tic: number): void;
        /**
         * Get prev thread.
         * @returns the prev #AgsThread
         */
        prev(): Thread;
        /**
         * Remove child of thread.
         * @param child the child to remove
         */
        remove_child(child: Thread): void;
        /**
         * Only for internal use of ags_thread_loop but you may want to set the your very own
         * class function namely your thread's routine.
         */
        run(): void;
        set_current_sync(current_sync_tic: number): void;
        /**
         * Set current sync-tic.
         * @param current_sync_tic the current sync-tic
         */
        set_current_sync_tic(current_sync_tic: number): void;
        /**
         * Set delay.
         * @param delay the delay
         */
        set_delay(delay: number): void;
        /**
         * Set flags.
         * @param flags the flags
         */
        set_flags(flags: ThreadFlags | null): void;
        /**
         * Set frequency.
         * @param frequency the frequency
         */
        set_frequency(frequency: number): void;
        /**
         * Set max-precision.
         * @param max_precision the max-precision
         */
        set_max_precision(max_precision: number): void;
        /**
         * Set status flags.
         * @param status_flags the status flags
         */
        set_status_flags(status_flags: ThreadStatusFlags | null): void;
        /**
         * Set sync-tic flags.
         * @param sync_tic_flags the sync-tic flags
         */
        set_sync_tic_flags(sync_tic_flags: ThreadSyncTicFlags | null): void;
        set_tree_sync_recursive(current_sync_tic: number): void;
        /**
         * Start the thread.
         */
        start(): void;
        /**
         * Stop the threads loop by unsetting AGS_THREAD_STATUS_RUNNING flag.
         */
        stop(): void;
        /**
         * Test `flags` to be set on `thread`.
         * @param flags the flags
         * @returns %TRUE if flags are set, else %FALSE
         */
        test_flags(flags: ThreadFlags | null): boolean;
        /**
         * Test `status_flags` to be set on `thread`.
         * @param status_flags the status flags
         * @returns %TRUE if status flags are set, else %FALSE
         */
        test_status_flags(status_flags: ThreadStatusFlags | null): boolean;
        /**
         * Test `sync_tic_flags` to be set on `thread`.
         * @param sync_tic_flags the sync-tic flags
         * @returns %TRUE if sync-tic flags are set, else %FALSE
         */
        test_sync_tic_flags(sync_tic_flags: ThreadSyncTicFlags | null): boolean;
        /**
         * Locks the threads own mutex if available and sets the
         * appropriate flag and returning %TRUE. Otherwise return %FALSE
         * without lock.
         * @returns %TRUE on success, otherwise %FALSE
         */
        trylock(): boolean;
        /**
         * Unlocks the threads own mutex and unsets the appropriate flag.
         */
        unlock(): void;
        /**
         * Unset flags.
         * @param flags the flags
         */
        unset_flags(flags: ThreadFlags | null): void;
        /**
         * Unset status flags.
         * @param status_flags the status flags
         */
        unset_status_flags(status_flags: ThreadStatusFlags | null): void;
        /**
         * Unset sync-tic flags.
         * @param sync_tic_flags the sync-tic flags
         */
        unset_sync_tic_flags(sync_tic_flags: ThreadSyncTicFlags | null): void;

        // Inherited methods
        /**
         * Add connectable to registry.
         */
        add_to_registry(): void;
        /**
         * Connect the connectable.
         */
        connect(): void;
        connect(...args: never[]): any;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        connect_connection(connection: GObject.Object): void;
        /**
         * Disconnect the connectable.
         */
        disconnect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        disconnect_connection(connection: GObject.Object): void;
        /**
         * Get UUID of `connectable`.
         * @returns the assigned #AgsUUID
         */
        get_uuid(): UUID;
        /**
         * Check the connectable to have resources.
         * @returns %TRUE if @connectable can be added to registry, otherwise %FALSE.
         */
        has_resource(): boolean;
        /**
         * Check if the `connectable` was connected.
         * @returns %TRUE if is connected, otherwise %FALSE.
         */
        is_connected(): boolean;
        /**
         * Connect the connectable.
         * @returns %TRUE if is added to registry, otherwise %FALSE.
         */
        is_ready(): boolean;
        /**
         * List resources as an XML element and return it.
         * @returns the #xmlNode-struct
         */
        list_resource(): libxml2.Node;
        /**
         * Remove connectable from registry.
         */
        remove_from_registry(): void;
        /**
         * Compose an XML element and return it.
         * @returns the #xmlNode-struct
         */
        xml_compose(): libxml2.Node;
        /**
         * Parse `node` as XML element and apply it.
         * @param node the #xmlNode-struct
         */
        xml_parse(node: libxml2.Node): void;
        /**
         * Add connectable to registry.
         */
        vfunc_add_to_registry(): void;
        /**
         * Connect the connectable.
         */
        vfunc_connect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        vfunc_connect_connection(connection: GObject.Object): void;
        /**
         * Disconnect the connectable.
         */
        vfunc_disconnect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        vfunc_disconnect_connection(connection: GObject.Object): void;
        /**
         * Get UUID of `connectable`.
         */
        vfunc_get_uuid(): UUID;
        /**
         * Check the connectable to have resources.
         */
        vfunc_has_resource(): boolean;
        /**
         * Check if the `connectable` was connected.
         */
        vfunc_is_connected(): boolean;
        /**
         * Connect the connectable.
         */
        vfunc_is_ready(): boolean;
        /**
         * List resources as an XML element and return it.
         */
        vfunc_list_resource(): libxml2.Node;
        /**
         * Remove connectable from registry.
         */
        vfunc_remove_from_registry(): void;
        /**
         * Compose an XML element and return it.
         */
        vfunc_xml_compose(): libxml2.Node;
        /**
         * Parse `node` as XML element and apply it.
         * @param node the #xmlNode-struct
         */
        vfunc_xml_parse(node: libxml2.Node): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace ThreadApplicationContext {
        // Signal signatures
        interface SignalSignatures extends ApplicationContext.SignalSignatures {
            'notify::thread-pool': (pspec: GObject.ParamSpec) => void;
            'notify::config': (pspec: GObject.ParamSpec) => void;
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::main-loop': (pspec: GObject.ParamSpec) => void;
            'notify::task-launcher': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends ApplicationContext.ConstructorProps,
                ConcurrencyProvider.ConstructorProps,
                Connectable.ConstructorProps {
            thread_pool: ThreadPool;
            threadPool: ThreadPool;
        }
    }

    class ThreadApplicationContext extends ApplicationContext implements ConcurrencyProvider, Connectable {
        static $gtype: GObject.GType<ThreadApplicationContext>;

        // Properties

        /**
         * The assigned thread pool.
         */
        get thread_pool(): ThreadPool;
        set thread_pool(val: ThreadPool);
        /**
         * The assigned thread pool.
         */
        get threadPool(): ThreadPool;
        set threadPool(val: ThreadPool);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ThreadApplicationContext.SignalSignatures;

        // Fields

        application_context: ApplicationContext;
        flags: number;
        version: string;
        build_id: string;
        worker: any[];

        // Constructors

        constructor(properties?: Partial<ThreadApplicationContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ThreadApplicationContext;

        // Signals

        connect_after<K extends keyof ThreadApplicationContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ThreadApplicationContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ThreadApplicationContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ThreadApplicationContext.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static register_types(application_context: ApplicationContext): void;

        // Inherited methods
        /**
         * Get main loop of application context.
         * @returns the #AgsThread implementing #AgsMainLoop
         */
        get_main_loop(): Thread;
        /**
         * Get task launcher of application context.
         * @returns the #AgsTaskLauncher
         */
        get_task_launcher(): TaskLauncher;
        /**
         * Get thread pool of application context.
         * @returns the #AgsThreadPool
         */
        get_thread_pool(): ThreadPool;
        /**
         * Get workers of application context.
         * @returns the #GList-struct containing workers
         */
        get_worker(): WorkerThread[];
        /**
         * Set main loop of application context.
         * @param main_loop the #AgsThread implementing #AgsMainLoop
         */
        set_main_loop(main_loop: Thread): void;
        /**
         * Set task launcher of application context.
         * @param task_launcher the #AgsTaskLauncher
         */
        set_task_launcher(task_launcher: TaskLauncher): void;
        /**
         * Set thread pool of application context.
         * @param thread_pool the #AgsThreadPool
         */
        set_thread_pool(thread_pool: ThreadPool): void;
        /**
         * Set workers of application context.
         * @param worker the #GList-struct containing workers
         */
        set_worker(worker: WorkerThread[]): void;
        /**
         * Get main loop of application context.
         */
        vfunc_get_main_loop(): Thread;
        /**
         * Get task launcher of application context.
         */
        vfunc_get_task_launcher(): TaskLauncher;
        /**
         * Get thread pool of application context.
         */
        vfunc_get_thread_pool(): ThreadPool;
        /**
         * Get workers of application context.
         */
        vfunc_get_worker(): WorkerThread[];
        /**
         * Set main loop of application context.
         * @param main_loop the #AgsThread implementing #AgsMainLoop
         */
        vfunc_set_main_loop(main_loop: Thread): void;
        /**
         * Set task launcher of application context.
         * @param task_launcher the #AgsTaskLauncher
         */
        vfunc_set_task_launcher(task_launcher: TaskLauncher): void;
        /**
         * Set thread pool of application context.
         * @param thread_pool the #AgsThreadPool
         */
        vfunc_set_thread_pool(thread_pool: ThreadPool): void;
        /**
         * Set workers of application context.
         * @param worker the #GList-struct containing workers
         */
        vfunc_set_worker(worker: WorkerThread[]): void;
        /**
         * Add connectable to registry.
         */
        add_to_registry(): void;
        /**
         * Connect the connectable.
         */
        connect(): void;
        connect(...args: never[]): any;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        connect_connection(connection: GObject.Object): void;
        /**
         * Disconnect the connectable.
         */
        disconnect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        disconnect_connection(connection: GObject.Object): void;
        /**
         * Get UUID of `connectable`.
         * @returns the assigned #AgsUUID
         */
        get_uuid(): UUID;
        /**
         * Check the connectable to have resources.
         * @returns %TRUE if @connectable can be added to registry, otherwise %FALSE.
         */
        has_resource(): boolean;
        /**
         * Check if the `connectable` was connected.
         * @returns %TRUE if is connected, otherwise %FALSE.
         */
        is_connected(): boolean;
        /**
         * List resources as an XML element and return it.
         * @returns the #xmlNode-struct
         */
        list_resource(): libxml2.Node;
        /**
         * Remove connectable from registry.
         */
        remove_from_registry(): void;
        /**
         * Compose an XML element and return it.
         * @returns the #xmlNode-struct
         */
        xml_compose(): libxml2.Node;
        /**
         * Parse `node` as XML element and apply it.
         * @param node the #xmlNode-struct
         */
        xml_parse(node: libxml2.Node): void;
        /**
         * Add connectable to registry.
         */
        vfunc_add_to_registry(): void;
        /**
         * Connect the connectable.
         */
        vfunc_connect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        vfunc_connect_connection(connection: GObject.Object): void;
        /**
         * Disconnect the connectable.
         */
        vfunc_disconnect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        vfunc_disconnect_connection(connection: GObject.Object): void;
        /**
         * Get UUID of `connectable`.
         */
        vfunc_get_uuid(): UUID;
        /**
         * Check the connectable to have resources.
         */
        vfunc_has_resource(): boolean;
        /**
         * Check if the `connectable` was connected.
         */
        vfunc_is_connected(): boolean;
        /**
         * Connect the connectable.
         */
        vfunc_is_ready(): boolean;
        /**
         * List resources as an XML element and return it.
         */
        vfunc_list_resource(): libxml2.Node;
        /**
         * Remove connectable from registry.
         */
        vfunc_remove_from_registry(): void;
        /**
         * Compose an XML element and return it.
         */
        vfunc_xml_compose(): libxml2.Node;
        /**
         * Parse `node` as XML element and apply it.
         * @param node the #xmlNode-struct
         */
        vfunc_xml_parse(node: libxml2.Node): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace ThreadPool {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            start: () => void;
            'notify::max-threads': (pspec: GObject.ParamSpec) => void;
            'notify::max-unused-threads': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            max_threads: number;
            maxThreads: number;
            max_unused_threads: number;
            maxUnusedThreads: number;
        }
    }

    class ThreadPool extends GObject.Object {
        static $gtype: GObject.GType<ThreadPool>;

        // Properties

        /**
         * The maximum amount of threads available.
         */
        get max_threads(): number;
        set max_threads(val: number);
        /**
         * The maximum amount of threads available.
         */
        get maxThreads(): number;
        set maxThreads(val: number);
        /**
         * The maximum amount of unused threads available.
         */
        get max_unused_threads(): number;
        set max_unused_threads(val: number);
        /**
         * The maximum amount of unused threads available.
         */
        get maxUnusedThreads(): number;
        set maxUnusedThreads(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ThreadPool.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        flags: number;
        queued: number;
        create_threads: boolean;
        idle: boolean;
        returnable_thread: any[];

        // Constructors

        constructor(properties?: Partial<ThreadPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](parent: Thread): ThreadPool;

        // Signals

        connect<K extends keyof ThreadPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ThreadPool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ThreadPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ThreadPool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ThreadPool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ThreadPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Start the thread pool.
         */
        vfunc_start(): void;

        // Methods

        /**
         * Pull a previously instantiated #AgsReturnableThread. Note this
         * function may block until a new thread is available.
         * @returns a new #AgsThread
         */
        pull(): Thread;
        /**
         * Start the thread pool.
         */
        start(): void;
    }

    namespace Timestamp {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Timestamp extends GObject.Object {
        static $gtype: GObject.GType<Timestamp>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Timestamp.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        flags: number;
        delay: number;
        attack: number;

        // Constructors

        constructor(properties?: Partial<Timestamp.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Timestamp;

        // Signals

        connect<K extends keyof Timestamp.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Timestamp.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Timestamp.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Timestamp.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Timestamp.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Timestamp.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get AGS offset.
         * @returns the AGS offset as unsigned 64 bit integer
         */
        get_ags_offset(): number;
        /**
         * Get unix time.
         * @returns the unix time as time_t value
         */
        get_unix_time(): number;
        /**
         * Set AGS offset as unsigned 64 bit integer.
         * @param ags_offset the AGS offset
         */
        set_ags_offset(ags_offset: number): void;
        /**
         * Set `flags` of `timestamp`.
         * @param flags the flags
         */
        set_flags(flags: TimestampFlags | null): void;
        /**
         * Set unix time.
         * @param unix_time the unix time value
         */
        set_unix_time(unix_time: number): void;
        /**
         * Test `flags` to be set.
         * @param flags the flags
         * @returns if @flags set returning %TRUE otherwise %FALSE
         */
        test_flags(flags: TimestampFlags | null): boolean;
        /**
         * Unset `flags` of `timestamp`.
         * @param flags the flags
         */
        unset_flags(flags: TimestampFlags | null): void;
    }

    namespace Turtle {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::filename': (pspec: GObject.ParamSpec) => void;
            'notify::xml-doc': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            filename: string;
            xml_doc: any;
            xmlDoc: any;
        }
    }

    class Turtle extends GObject.Object {
        static $gtype: GObject.GType<Turtle>;

        // Properties

        /**
         * The assigned filename.
         */
        get filename(): string;
        set filename(val: string);
        /**
         * The assigned xml-doc.
         */
        get xml_doc(): any;
        set xml_doc(val: any);
        /**
         * The assigned xml-doc.
         */
        get xmlDoc(): any;
        set xmlDoc(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Turtle.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        flags: number;

        // Constructors

        constructor(properties?: Partial<Turtle.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](filename?: string | null): Turtle;

        // Signals

        connect<K extends keyof Turtle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Turtle.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Turtle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Turtle.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Turtle.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Turtle.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Match anon.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_anon(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match blank node label.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_blank_node_label(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match boolean.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_boolean(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match decimal.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_decimal(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match double.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_double(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match echar.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_echar(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match exponent.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_exponent(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match hex.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_hex(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match integer.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_integer(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match iriref.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_iriref(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match langtag.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_langtag(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match percent.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_percent(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match plx.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_plx(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match pn chars.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_pn_chars(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match pn chars base.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_pn_chars_base(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match pn chars u.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_pn_chars_u(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match uchar.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_pn_local(offset: string, end_ptr: string): [boolean, string, string];
        static match_pn_local_esc(offset: string, end_ptr: string, start_offset: string, end_offset: string): boolean;
        /**
         * Match pn prefix.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_pn_prefix(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match pname-ln.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_pname_ln(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match match pname-ns.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_pname_ns(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match string.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_string(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match string literal long quote.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_string_literal_long_quote(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match string literal long single quote.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_string_literal_long_single_quote(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match string literal quote.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_string_literal_quote(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match string literal single quote.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_string_literal_single_quote(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match uchar.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_uchar(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match ws.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_ws(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Read anon value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_anon(offset: string, end_ptr: string): string;
        /**
         * Read blank node label value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_blank_node_label(offset: string, end_ptr: string): string;
        /**
         * Read boolean value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_boolean(offset: string, end_ptr: string): string;
        /**
         * Read decimal value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_decimal(offset: string, end_ptr: string): string;
        /**
         * Read double value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_double(offset: string, end_ptr: string): string;
        /**
         * Read echar value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_echar(offset: string, end_ptr: string): string;
        /**
         * Read exponent value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_exponent(offset: string, end_ptr: string): string;
        /**
         * Read hex value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_hex(offset: string, end_ptr: string): string;
        /**
         * Read integer value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_integer(offset: string, end_ptr: string): string;
        /**
         * Read iriref value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_iriref(offset: string, end_ptr: string): string;
        /**
         * Read langtag value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_langtag(offset: string, end_ptr: string): string;
        /**
         * Read percent value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_percent(offset: string, end_ptr: string): string;
        /**
         * Read plx value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_plx(offset: string, end_ptr: string): string;
        /**
         * Read prefixed-name chars value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_pn_chars(offset: string, end_ptr: string): string;
        /**
         * Read prefixed-name chars base value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_pn_chars_base(offset: string, end_ptr: string): string;
        /**
         * Read prefixed-name chars underscore value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_pn_chars_u(offset: string, end_ptr: string): string;
        /**
         * Read prefixed-name local value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_pn_local(offset: string, end_ptr: string): string;
        /**
         * Read prefixed name local escapes.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_pn_local_esc(offset: string, end_ptr: string): string;
        /**
         * Read prefixe-name prefix value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_pn_prefix(offset: string, end_ptr: string): string;
        /**
         * Read prefixed-name localized name value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_pname_ln(offset: string, end_ptr: string): string;
        /**
         * Read prefixed-name namespace value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_pname_ns(offset: string, end_ptr: string): string;
        /**
         * Read string value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_string(offset: string, end_ptr: string): string;
        /**
         * Read string literal long quote value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_string_literal_long_quote(offset: string, end_ptr: string): string;
        /**
         * Read string literal long single quote value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_string_literal_long_single_quote(offset: string, end_ptr: string): string;
        /**
         * Read string literal quote value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_string_literal_quote(offset: string, end_ptr: string): string;
        /**
         * Read string literal single quote value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_string_literal_single_quote(offset: string, end_ptr: string): string;
        /**
         * Read uchar value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_uchar(offset: string, end_ptr: string): string;
        /**
         * Read ws value.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static read_ws(offset: string, end_ptr: string): string;

        // Methods

        /**
         * Lookup XPath expression withing `turtle`.
         * @param xpath a XPath expression as string
         * @returns a #GList-struct containing xmlNode
         */
        find_xpath(xpath: string): libxml2.Node[];
        /**
         * Lookup XPath expression from `context_node` withing `turtle`.
         * @param xpath a XPath expression as string
         * @param context_node a #xmlNode-struct
         * @returns a #GList-struct containing xmlNode
         */
        find_xpath_with_context_node(xpath: string, context_node: libxml2.Node): libxml2.Node[];
        /**
         * Loads a RDF triple file into an XML Document.
         * @returns a #xmlDoc pointer
         */
        load(): libxml2.Doc;
        string_convert(str: string): string;
    }

    namespace TurtleManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class TurtleManager extends GObject.Object {
        static $gtype: GObject.GType<TurtleManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TurtleManager.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        turtle: any[];

        // Constructors

        constructor(properties?: Partial<TurtleManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TurtleManager;

        // Signals

        connect<K extends keyof TurtleManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TurtleManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TurtleManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TurtleManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TurtleManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TurtleManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Get instance of #AgsTurtleManager.
         */
        static get_instance(): TurtleManager;

        // Methods

        /**
         * Adds `turtle` to `turtle_manager`.
         * @param turtle the #AgsTurtle
         */
        add(turtle: GObject.Object): void;
        /**
         * Find `filename` in `turtle_manager`.
         * @param filename the filename as string
         * @returns the matching #AgsTurtle, or %NULL
         */
        find<T = GObject.Object>(filename: string): T;
    }

    namespace WorkerThread {
        // Signal signatures
        interface SignalSignatures extends Thread.SignalSignatures {
            'do-poll': () => void;
            'notify::delay': (pspec: GObject.ParamSpec) => void;
            'notify::frequency': (pspec: GObject.ParamSpec) => void;
            'notify::max-precision': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Thread.ConstructorProps, Connectable.ConstructorProps {}
    }

    class WorkerThread extends Thread implements Connectable {
        static $gtype: GObject.GType<WorkerThread>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WorkerThread.SignalSignatures;

        // Fields

        thread: Thread;
        status_flags: number;

        // Constructors

        constructor(properties?: Partial<WorkerThread.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): WorkerThread;

        // Signals

        connect_after<K extends keyof WorkerThread.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkerThread.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WorkerThread.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WorkerThread.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Do poll your work. It is called of the worker thread.
         */
        vfunc_do_poll(): void;

        // Methods

        /**
         * Do poll your work. It is called of the worker thread.
         */
        do_poll(): void;
        /**
         * Set status flags.
         * @param status_flags status flags
         */
        set_status_flags(status_flags: WorkerThreadStatusFlags | null): void;
        // Conflicted with Ags.Thread.set_status_flags
        set_status_flags(...args: never[]): any;
        /**
         * Test `status_flags` of `worker_thread`.
         * @param status_flags status flags
         * @returns %TRUE if status flags set, otherwise %FALSE
         */
        test_status_flags(status_flags: WorkerThreadStatusFlags | null): boolean;
        // Conflicted with Ags.Thread.test_status_flags
        test_status_flags(...args: never[]): any;
        /**
         * Unset status flags.
         * @param status_flags status flags
         */
        unset_status_flags(status_flags: WorkerThreadStatusFlags | null): void;
        // Conflicted with Ags.Thread.unset_status_flags
        unset_status_flags(...args: never[]): any;

        // Inherited methods
        /**
         * Add connectable to registry.
         */
        add_to_registry(): void;
        /**
         * Connect the connectable.
         */
        connect(): void;
        connect(...args: never[]): any;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        connect_connection(connection: GObject.Object): void;
        /**
         * Disconnect the connectable.
         */
        disconnect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        disconnect_connection(connection: GObject.Object): void;
        /**
         * Get UUID of `connectable`.
         * @returns the assigned #AgsUUID
         */
        get_uuid(): UUID;
        /**
         * Check the connectable to have resources.
         * @returns %TRUE if @connectable can be added to registry, otherwise %FALSE.
         */
        has_resource(): boolean;
        /**
         * Check if the `connectable` was connected.
         * @returns %TRUE if is connected, otherwise %FALSE.
         */
        is_connected(): boolean;
        /**
         * Connect the connectable.
         * @returns %TRUE if is added to registry, otherwise %FALSE.
         */
        is_ready(): boolean;
        /**
         * List resources as an XML element and return it.
         * @returns the #xmlNode-struct
         */
        list_resource(): libxml2.Node;
        /**
         * Remove connectable from registry.
         */
        remove_from_registry(): void;
        /**
         * Compose an XML element and return it.
         * @returns the #xmlNode-struct
         */
        xml_compose(): libxml2.Node;
        /**
         * Parse `node` as XML element and apply it.
         * @param node the #xmlNode-struct
         */
        xml_parse(node: libxml2.Node): void;
        /**
         * Add connectable to registry.
         */
        vfunc_add_to_registry(): void;
        /**
         * Connect the connectable.
         */
        vfunc_connect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        vfunc_connect_connection(connection: GObject.Object): void;
        /**
         * Disconnect the connectable.
         */
        vfunc_disconnect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        vfunc_disconnect_connection(connection: GObject.Object): void;
        /**
         * Get UUID of `connectable`.
         */
        vfunc_get_uuid(): UUID;
        /**
         * Check the connectable to have resources.
         */
        vfunc_has_resource(): boolean;
        /**
         * Check if the `connectable` was connected.
         */
        vfunc_is_connected(): boolean;
        /**
         * Connect the connectable.
         */
        vfunc_is_ready(): boolean;
        /**
         * List resources as an XML element and return it.
         */
        vfunc_list_resource(): libxml2.Node;
        /**
         * Remove connectable from registry.
         */
        vfunc_remove_from_registry(): void;
        /**
         * Compose an XML element and return it.
         */
        vfunc_xml_compose(): libxml2.Node;
        /**
         * Parse `node` as XML element and apply it.
         * @param node the #xmlNode-struct
         */
        vfunc_xml_parse(node: libxml2.Node): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace XmlAuthentication {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Authentication.ConstructorProps {}
    }

    class XmlAuthentication extends GObject.Object implements Authentication {
        static $gtype: GObject.GType<XmlAuthentication>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: XmlAuthentication.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        filename: string;
        encoding: string;
        dtd: string;

        // Constructors

        constructor(properties?: Partial<XmlAuthentication.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): XmlAuthentication;

        // Signals

        connect<K extends keyof XmlAuthentication.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, XmlAuthentication.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof XmlAuthentication.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, XmlAuthentication.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof XmlAuthentication.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<XmlAuthentication.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Find ags-srv-auth xmlNode containing `user_uuid`.
         * @param user_uuid the user UUID
         * @returns the matching xmlNode or %NULL
         */
        find_user_uuid(user_uuid: string): libxml2.Node;
        /**
         * Open `filename`.
         * @param filename the filename
         */
        open_filename(filename: string): void;

        // Inherited methods
        /**
         * Generate token.
         * @returns the generated token
         */
        generate_token(): string;
        /**
         * Available authentication modules.
         * @returns a %NULL terminated array of strings of available authentication modules
         */
        get_authentication_module(): string[];
        /**
         * Get digest of `login`.
         * @param realm the realm
         * @param login the login
         * @param security_token the security token
         * @returns the encrypted password
         */
        get_digest(realm: string, login: string, security_token: string): string;
        /**
         * Check session.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the user's UUID
         * @param security_token the security token
         * @returns %TRUE if session active, otherwise %FALSE
         */
        is_session_active(security_context: GObject.Object, user_uuid: string, security_token: string): boolean;
        /**
         * Login.
         * @param login the login
         * @param password the password
         * @returns %TRUE on success, otherwise %FALSE
         */
        login(login: string, password: string): [boolean, string, string];
        /**
         * Logout.
         * @param security_context the #AgsSecurityContext
         * @param login the login
         * @param security_token the security token
         * @returns %TRUE on success, otherwise %FALSE
         */
        logout(security_context: GObject.Object, login: string, security_token: string): boolean;
        /**
         * Generate token.
         */
        vfunc_generate_token(): string;
        /**
         * Available authentication modules.
         */
        vfunc_get_authentication_module(): string[];
        /**
         * Get digest of `login`.
         * @param realm the realm
         * @param login the login
         * @param security_token the security token
         */
        vfunc_get_digest(realm: string, login: string, security_token: string): string;
        /**
         * Check session.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the user's UUID
         * @param security_token the security token
         */
        vfunc_is_session_active(security_context: GObject.Object, user_uuid: string, security_token: string): boolean;
        /**
         * Login.
         * @param login the login
         * @param password the password
         */
        vfunc_login(login: string, password: string): [boolean, string, string];
        /**
         * Logout.
         * @param security_context the #AgsSecurityContext
         * @param login the login
         * @param security_token the security token
         */
        vfunc_logout(security_context: GObject.Object, login: string, security_token: string): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace XmlBusinessGroup {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, BusinessGroup.ConstructorProps {}
    }

    class XmlBusinessGroup extends GObject.Object implements BusinessGroup {
        static $gtype: GObject.GType<XmlBusinessGroup>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: XmlBusinessGroup.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        filename: string;
        encoding: string;
        dtd: string;

        // Constructors

        constructor(properties?: Partial<XmlBusinessGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): XmlBusinessGroup;

        // Signals

        connect<K extends keyof XmlBusinessGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, XmlBusinessGroup.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof XmlBusinessGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, XmlBusinessGroup.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof XmlBusinessGroup.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<XmlBusinessGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Open `filename`.
         * @param filename the filename
         */
        open_filename(filename: string): void;

        // Inherited methods
        /**
         * Get business group name.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the user's UUID
         * @param security_token the security token
         * @param group_uuid the group's UUID
         * @returns the business group's name as string
         */
        get_group_name(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            group_uuid: string,
        ): string;
        /**
         * Get group UUID as string vector.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @returns the group UUIDs as %NULL terminated string array
         */
        get_group_uuid(security_context: GObject.Object, user_uuid: string, security_token: string): string[];
        /**
         * Get business group name as %NULL terminated string array.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the user's UUID
         * @param security_token the security token
         * @param group_uuid the business group's UUID
         * @returns the business group's user names as string vector
         */
        get_user(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            group_uuid: string,
        ): string[];
        /**
         * Set business group name.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the user's UUID
         * @param security_token the security token
         * @param group_uuid the group's UUID
         * @param group_name the business group's name to set
         */
        set_group_name(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            group_uuid: string,
            group_name: string,
        ): void;
        /**
         * Set business group of user names as %NULL terminated string array.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the user's UUID
         * @param security_token the security token
         * @param group_uuid the business group's UUID
         * @param user the string array containing user names
         */
        set_user(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            group_uuid: string,
            user: string[],
        ): void;
        /**
         * Get business group name.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the user's UUID
         * @param security_token the security token
         * @param group_uuid the group's UUID
         */
        vfunc_get_group_name(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            group_uuid: string,
        ): string;
        /**
         * Get group UUID as string vector.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         */
        vfunc_get_group_uuid(security_context: GObject.Object, user_uuid: string, security_token: string): string[];
        /**
         * Get business group name as %NULL terminated string array.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the user's UUID
         * @param security_token the security token
         * @param group_uuid the business group's UUID
         */
        vfunc_get_user(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            group_uuid: string,
        ): string[];
        /**
         * Set business group name.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the user's UUID
         * @param security_token the security token
         * @param group_uuid the group's UUID
         * @param group_name the business group's name to set
         */
        vfunc_set_group_name(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            group_uuid: string,
            group_name: string,
        ): void;
        /**
         * Set business group of user names as %NULL terminated string array.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the user's UUID
         * @param security_token the security token
         * @param group_uuid the business group's UUID
         * @param user the string array containing user names
         */
        vfunc_set_user(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            group_uuid: string,
            user: string[],
        ): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace XmlCertificate {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Certificate.ConstructorProps {}
    }

    class XmlCertificate extends GObject.Object implements Certificate {
        static $gtype: GObject.GType<XmlCertificate>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: XmlCertificate.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        filename: string;
        encoding: string;
        dtd: string;

        // Constructors

        constructor(properties?: Partial<XmlCertificate.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): XmlCertificate;

        // Signals

        connect<K extends keyof XmlCertificate.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, XmlCertificate.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof XmlCertificate.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, XmlCertificate.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof XmlCertificate.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<XmlCertificate.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Open `filename`.
         * @param filename the filename
         */
        open_filename(filename: string): void;

        // Inherited methods
        /**
         * Get cert UUID as string vector.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @returns the cert UUIDs as %NULL terminated string array
         */
        get_cert_uuid(security_context: GObject.Object, user_uuid: string, security_token: string): string[];
        /**
         * Get domain.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param cert_uuid the cert's UUID
         * @returns the domain
         */
        get_domain(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            cert_uuid: string,
        ): string;
        /**
         * Get key type.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param cert_uuid the cert's UUID
         * @returns the key type
         */
        get_key_type(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            cert_uuid: string,
        ): string;
        /**
         * Get private key file.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param cert_uuid the cert's UUID
         * @returns the private key file
         */
        get_private_key_file(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            cert_uuid: string,
        ): string;
        /**
         * Get public key file.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param cert_uuid the cert's UUID
         * @returns the public key file
         */
        get_public_key_file(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            cert_uuid: string,
        ): string;
        /**
         * Set domain.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param cert_uuid the cert's UUID
         * @param domain the domain
         */
        set_domain(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            cert_uuid: string,
            domain: string,
        ): void;
        /**
         * Set key type.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param cert_uuid the cert's UUID
         * @param key_type the key type
         */
        set_key_type(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            cert_uuid: string,
            key_type: string,
        ): void;
        /**
         * Set private key file.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param cert_uuid the cert's UUID
         * @param private_key_file the private key file
         */
        set_private_key_file(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            cert_uuid: string,
            private_key_file: string,
        ): void;
        /**
         * Set public key file.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param cert_uuid the cert's UUID
         * @param public_key_file the public key file
         */
        set_public_key_file(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            cert_uuid: string,
            public_key_file: string,
        ): void;
        /**
         * Get cert UUID as string vector.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         */
        vfunc_get_cert_uuid(security_context: GObject.Object, user_uuid: string, security_token: string): string[];
        /**
         * Get domain.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param cert_uuid the cert's UUID
         */
        vfunc_get_domain(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            cert_uuid: string,
        ): string;
        /**
         * Get key type.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param cert_uuid the cert's UUID
         */
        vfunc_get_key_type(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            cert_uuid: string,
        ): string;
        /**
         * Get private key file.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param cert_uuid the cert's UUID
         */
        vfunc_get_private_key_file(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            cert_uuid: string,
        ): string;
        /**
         * Get public key file.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param cert_uuid the cert's UUID
         */
        vfunc_get_public_key_file(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            cert_uuid: string,
        ): string;
        /**
         * Set domain.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param cert_uuid the cert's UUID
         * @param domain the domain
         */
        vfunc_set_domain(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            cert_uuid: string,
            domain: string,
        ): void;
        /**
         * Set key type.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param cert_uuid the cert's UUID
         * @param key_type the key type
         */
        vfunc_set_key_type(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            cert_uuid: string,
            key_type: string,
        ): void;
        /**
         * Set private key file.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param cert_uuid the cert's UUID
         * @param private_key_file the private key file
         */
        vfunc_set_private_key_file(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            cert_uuid: string,
            private_key_file: string,
        ): void;
        /**
         * Set public key file.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param cert_uuid the cert's UUID
         * @param public_key_file the public key file
         */
        vfunc_set_public_key_file(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            cert_uuid: string,
            public_key_file: string,
        ): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace XmlPasswordStore {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, PasswordStore.ConstructorProps {}
    }

    class XmlPasswordStore extends GObject.Object implements PasswordStore {
        static $gtype: GObject.GType<XmlPasswordStore>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: XmlPasswordStore.SignalSignatures;

        // Fields

        gobject: GObject.Object;
        filename: string;
        encoding: string;
        dtd: string;

        // Constructors

        constructor(properties?: Partial<XmlPasswordStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): XmlPasswordStore;

        // Signals

        connect<K extends keyof XmlPasswordStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, XmlPasswordStore.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof XmlPasswordStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, XmlPasswordStore.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof XmlPasswordStore.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<XmlPasswordStore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Find ags-srv-user xmlNode containing `login`.
         * @param login the login
         * @returns the matching xmlNode or %NULL
         */
        find_login(login: string): libxml2.Node;
        /**
         * Open `filename`.
         * @param filename the filename
         */
        open_filename(filename: string): void;

        // Inherited methods
        /**
         * Encrypt password.
         * @param password the password
         * @param salt your salt
         * @returns the encrypted bytes
         */
        encrypt_password(password: string, salt: string): string;
        /**
         * Get login name.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @returns the login name
         */
        get_login_name(security_context: GObject.Object, user_uuid: string, security_token: string): string;
        /**
         * Get password.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the user UUID
         * @param security_token the security token
         * @returns the password
         */
        get_password(security_context: GObject.Object, user_uuid: string, security_token: string): string;
        /**
         * Set login name.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param login_name the login name
         */
        set_login_name(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            login_name: string,
        ): void;
        /**
         * Set password.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the user UUID
         * @param security_token the security token
         * @param password the password
         */
        set_password(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            password: string,
        ): void;
        /**
         * Encrypt password.
         * @param password the password
         * @param salt your salt
         */
        vfunc_encrypt_password(password: string, salt: string): string;
        /**
         * Get login name.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         */
        vfunc_get_login_name(security_context: GObject.Object, user_uuid: string, security_token: string): string;
        /**
         * Get password.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the user UUID
         * @param security_token the security token
         */
        vfunc_get_password(security_context: GObject.Object, user_uuid: string, security_token: string): string;
        /**
         * Set login name.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param login_name the login name
         */
        vfunc_set_login_name(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            login_name: string,
        ): void;
        /**
         * Set password.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the user UUID
         * @param security_token the security token
         * @param password the password
         */
        vfunc_set_password(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            password: string,
        ): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    type ApplicableInterface = typeof Applicable;
    type ApplicationContextClass = typeof ApplicationContext;
    type AuthSecurityContextClass = typeof AuthSecurityContext;
    type AuthenticationInterface = typeof Authentication;
    type AuthenticationManagerClass = typeof AuthenticationManager;
    abstract class BufferUtil {
        static $gtype: GObject.GType<BufferUtil>;

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        /**
         * Read a #AgsComplex quantity of `cbuffer`.
         * @param cbuffer the character buffer
         * @param byte_order reverse order
         */
        static char_buffer_read_complex(cbuffer: number, byte_order: number): Complex;
        /**
         * Read a gdouble quantity of `cbuffer`.
         * @param cbuffer the character buffer
         * @param byte_order reverse order
         */
        static char_buffer_read_double(cbuffer: number, byte_order: number): number;
        /**
         * Read a gfloat quantity of `cbuffer`.
         * @param cbuffer the character buffer
         * @param byte_order reverse order
         */
        static char_buffer_read_float(cbuffer: number, byte_order: number): number;
        /**
         * Read a gint16 quantity of `cbuffer`.
         * @param cbuffer the character buffer
         * @param byte_order reverse order
         */
        static char_buffer_read_s16(cbuffer: number, byte_order: number): number;
        /**
         * Read a gint32 24 bit quantity of `cbuffer`.
         * @param cbuffer the character buffer
         * @param byte_order reverse order
         */
        static char_buffer_read_s24(cbuffer: number, byte_order: number): number;
        /**
         * Read a gint32 32 bit quantity of `cbuffer`.
         * @param cbuffer the character buffer
         * @param byte_order reverse order
         */
        static char_buffer_read_s32(cbuffer: number, byte_order: number): number;
        /**
         * Read a gint64 64 bit quantity of `cbuffer`.
         * @param cbuffer the character buffer
         * @param byte_order reverse order
         */
        static char_buffer_read_s64(cbuffer: number, byte_order: number): number;
        /**
         * Read a gint8 quantity of `cbuffer`.
         * @param cbuffer the character buffer
         * @param byte_order reverse order, ignored here
         */
        static char_buffer_read_s8(cbuffer: number, byte_order: number): number;
        /**
         * Swap bytes in view of Little/Big-Endian.
         * @param cbuffer the buffer to swap
         * @param word_size the word size
         * @param buffer_size the buffer size
         */
        static char_buffer_swap_bytes(cbuffer: number, word_size: number, buffer_size: number): void;
        /**
         * Unpack `cbuffer` to a #AgsComplex buffer
         * @param cbuffer the guchar buffer
         * @param buffer_size the buffer size
         */
        static char_buffer_to_complex(cbuffer: number, buffer_size: number): Complex;
        /**
         * Unpack `cbuffer` to a gdouble buffer
         * @param cbuffer the guchar buffer
         * @param buffer_size the buffer size
         */
        static char_buffer_to_double(cbuffer: number, buffer_size: number): number;
        /**
         * Unpack `cbuffer` to a gfloat buffer
         * @param cbuffer the guchar buffer
         * @param buffer_size the buffer size
         */
        static char_buffer_to_float(cbuffer: number, buffer_size: number): number;
        /**
         * Unpack `cbuffer` to a gint16 buffer
         * @param cbuffer the guchar buffer
         * @param buffer_size the buffer size
         */
        static char_buffer_to_s16(cbuffer: number, buffer_size: number): number;
        /**
         * Unpack `cbuffer` to a gint32 buffer
         * @param cbuffer the guchar buffer
         * @param buffer_size the buffer size
         */
        static char_buffer_to_s24(cbuffer: number, buffer_size: number): number;
        /**
         * Unpack `cbuffer` to a gint32 buffer
         * @param cbuffer the guchar buffer
         * @param buffer_size the buffer size
         */
        static char_buffer_to_s32(cbuffer: number, buffer_size: number): number;
        /**
         * Unpack `cbuffer` to a gint64 buffer
         * @param cbuffer the guchar buffer
         * @param buffer_size the buffer size
         */
        static char_buffer_to_s64(cbuffer: number, buffer_size: number): number;
        /**
         * Unpack `cbuffer` to a gint8 buffer
         * @param cbuffer the guchar buffer
         * @param buffer_size the buffer size
         */
        static char_buffer_to_s8(cbuffer: number, buffer_size: number): number;
        /**
         * Write a #AgsComplex quantity to `cbuffer`.
         * @param cbuffer the character buffer
         * @param value the #AgsComplex value
         * @param byte_order reverse order
         */
        static char_buffer_write_complex(cbuffer: number, value: Complex, byte_order: number): void;
        /**
         * Write a gdouble quantity to `cbuffer`.
         * @param cbuffer the character buffer
         * @param value the gdouble value
         * @param byte_order reverse order
         */
        static char_buffer_write_double(cbuffer: number, value: number, byte_order: number): void;
        /**
         * Write a gfloat quantity to `cbuffer`.
         * @param cbuffer the character buffer
         * @param value the gfloat value
         * @param byte_order reverse order
         */
        static char_buffer_write_float(cbuffer: number, value: number, byte_order: number): void;
        /**
         * Write a gint16 quantity to `cbuffer`.
         * @param cbuffer the character buffer
         * @param value the gint16 value
         * @param byte_order reverse order
         */
        static char_buffer_write_s16(cbuffer: number, value: number, byte_order: number): void;
        /**
         * Write a gint32 quantity to `cbuffer`.
         * @param cbuffer the character buffer
         * @param value the gint32 value
         * @param byte_order reverse order
         */
        static char_buffer_write_s24(cbuffer: number, value: number, byte_order: number): void;
        /**
         * Write a gint32 quantity to `cbuffer`.
         * @param cbuffer the character buffer
         * @param value the gint32 value
         * @param byte_order reverse order
         */
        static char_buffer_write_s32(cbuffer: number, value: number, byte_order: number): void;
        /**
         * Write a gint64 quantity to `cbuffer`.
         * @param cbuffer the character buffer
         * @param value the gint64 value
         * @param byte_order reverse order
         */
        static char_buffer_write_s64(cbuffer: number, value: number, byte_order: number): void;
        /**
         * Write a gint8 quantity to `cbuffer`.
         * @param cbuffer the character buffer
         * @param value the gint8 value
         * @param byte_order reverse order
         */
        static char_buffer_write_s8(cbuffer: number, value: number, byte_order: number): void;
        /**
         * Pack `buffer` into an guchar buffer.
         * @param buffer the #AgsComplex buffer
         * @param buffer_length the buffer length
         */
        static complex_to_char_buffer(buffer: Complex, buffer_length: number): number;
        /**
         * Pack `buffer` into an guchar buffer.
         * @param buffer the gdouble buffer
         * @param buffer_length the buffer length
         */
        static double_to_char_buffer(buffer: number, buffer_length: number): number;
        /**
         * Pack `buffer` into an guchar buffer.
         * @param buffer the gfloat buffer
         * @param buffer_length the buffer length
         */
        static float_to_char_buffer(buffer: number, buffer_length: number): number;
        /**
         * Pack `buffer` into an guchar buffer.
         * @param buffer the gint16 buffer
         * @param buffer_length the buffer length
         */
        static s16_to_char_buffer(buffer: number, buffer_length: number): number;
        /**
         * Pack `buffer` into an guchar buffer.
         * @param buffer the gint32 buffer
         * @param buffer_length the buffer length
         */
        static s24_to_char_buffer(buffer: number, buffer_length: number): number;
        /**
         * Pack `buffer` into an guchar buffer.
         * @param buffer the gint32 buffer
         * @param buffer_length the buffer length
         */
        static s32_to_char_buffer(buffer: number, buffer_length: number): number;
        /**
         * Pack `buffer` into an guchar buffer.
         * @param buffer the gint64 buffer
         * @param buffer_length the buffer length
         */
        static s64_to_char_buffer(buffer: number, buffer_length: number): number;
        /**
         * Pack `buffer` into an guchar buffer.
         * @param buffer the gint8 buffer
         * @param buffer_length the buffer length
         */
        static s8_to_char_buffer(buffer: number, buffer_length: number): number;
    }

    type BusinessGroupInterface = typeof BusinessGroup;
    type BusinessGroupManagerClass = typeof BusinessGroupManager;
    type CertificateInterface = typeof Certificate;
    type CertificateManagerClass = typeof CertificateManager;
    class Complex {
        static $gtype: GObject.GType<Complex>;

        // Fields

        real: number;
        imag: number;

        // Constructors

        constructor(
            properties?: Partial<{
                real: number;
                imag: number;
            }>,
        );
        _init(...args: any[]): void;

        // Static methods

        /**
         * Allocate #AgsComplex-struct
         */
        static alloc(): Complex;

        // Methods

        /**
         * Create a copy of `ptr`.
         * @returns a pointer of the new #AgsComplex-struct
         */
        copy(): any | null;
        /**
         * Free the memory of `ptr`.
         */
        free(): void;
        /**
         * Get complex number.
         */
        get_term(): [number, number];
        /**
         * Set complex number.
         * @param real the real part
         * @param imag the imaginary part
         */
        set_term(real: number, imag: number): void;
    }

    type ConcurrencyProviderInterface = typeof ConcurrencyProvider;
    type ConfigClass = typeof Config;
    type ConnectableInterface = typeof Connectable;
    type ControllerClass = typeof Controller;
    /**
     * Specifing attributes of resources.
     */
    class ControllerResource {
        static $gtype: GObject.GType<ControllerResource>;

        // Fields

        ref_count: number;
        group_id: string;
        user_id: string;
        access_mode: number;

        // Constructors

        constructor(
            properties?: Partial<{
                ref_count: number;
                group_id: string;
                user_id: string;
                access_mode: number;
            }>,
        );
        _init(...args: any[]): void;

        // Static methods

        /**
         * Allocated #AgsControllerResource-struct.
         * @param group_id the group id
         * @param user_id the user id
         * @param access_mode the access mode
         */
        static alloc(group_id: string, user_id: string, access_mode: number): any | null;
        /**
         * Free `controller_resource`.
         * @param controller_resource the #AgsControllerResource-struct
         */
        static free(controller_resource?: any | null): void;
        /**
         * Increase ref-count of `controller_resource`.
         * @param controller_resource the #AgsControllerResource-struct
         */
        static ref(controller_resource?: any | null): void;
        /**
         * Decrease ref-count of `controller_resource` and free it if ref-count drops to 0.
         * @param controller_resource the #AgsControllerResource-struct
         */
        static unref(controller_resource?: any | null): void;
    }

    type ConversionClass = typeof Conversion;
    type CountableInterface = typeof Countable;
    type CursorInterface = typeof Cursor;
    /**
     * The struct to specify an entry to destroy.
     */
    class DestroyEntry {
        static $gtype: GObject.GType<DestroyEntry>;

        // Fields

        ptr: any;

        // Constructors

        constructor(
            properties?: Partial<{
                ptr: any;
            }>,
        );
        _init(...args: any[]): void;

        // Static methods

        /**
         * Allocated a destroy entry.
         * @param ptr a pointer
         * @param destroy_func the @ptr's destroy function
         */
        static alloc(ptr: any | null, destroy_func: DestroyFunc): any | null;
    }

    abstract class DestroyUtil {
        static $gtype: GObject.GType<DestroyUtil>;

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        /**
         * Run dispose and unref `gobject`.
         * @param gobject the #GObject to destroy
         */
        static dispose_and_unref(gobject: GObject.Object): void;
    }

    type DestroyWorkerClass = typeof DestroyWorker;
    type FileClass = typeof File;
    type FileIdRefClass = typeof FileIdRef;
    type FileLaunchClass = typeof FileLaunch;
    type FileLinkClass = typeof FileLink;
    type FileLookupClass = typeof FileLookup;
    class FileUtil {
        static $gtype: GObject.GType<FileUtil>;

        // Fields

        file_version: string;
        app_encoding: string;
        encoding: string;

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        /**
         * Allocate #AgsFileUtil-struct
         * @param app_encoding the application encoding
         * @param encoding the file encoding
         */
        static alloc(app_encoding: string, encoding: string): FileUtil;

        // Methods

        /**
         * Create a copy of `ptr`.
         * @returns a pointer of the new #AgsFileUtil-struct
         */
        copy(): any | null;
        /**
         * Free the memory of `ptr`.
         */
        free(): void;
        /**
         * Get application encoding of `file_util`.
         * @returns the application encoding
         */
        get_app_encoding(): string;
        /**
         * Get complex floating point number from string.
         * @param str the string
         * @returns the complex floating point number
         */
        get_complex(str: string): Complex;
        /**
         * Get double precision size floating point number from string.
         * @param str the string
         * @returns the double precision size floating point number
         */
        get_double(str: string): number;
        /**
         * Get encoding of `file_util`.
         * @returns the encoding
         */
        get_encoding(): string;
        /**
         * set file version of `file_util`.
         */
        get_file_version(): string;
        /**
         * Get arbitary size floating point number from string.
         * @param str the string
         * @returns the arbitary size floating point number
         */
        get_float(str: string): number;
        /**
         * Get integer from string.
         * @param str the string to convert
         * @returns the converted integer
         */
        get_int(str: string): number;
        /**
         * Get long long integer from string.
         * @param str the string to convert
         * @returns the converted long long integer
         */
        get_int64(str: string): number;
        /**
         * Get string from `str`.
         * @param str the string
         * @param max_length the maximum length of string
         * @returns the newly allocated string
         */
        get_string(str: string, max_length: number): string;
        /**
         * Get unsigned integer from string.
         * @param str the string to convert
         * @returns the converted unsigned integer
         */
        get_uint(str: string): number;
        /**
         * Get unsigned long long integer.
         * @param str the string to convert
         * @returns the converted unsigned long long integer
         */
        get_uint64(str: string): number;
        /**
         * Put complex floating point number to string.
         * @param value the value
         * @returns the newly allocated string
         */
        put_complex(value: Complex): string;
        /**
         * Put double precision size floating point number to string.
         * @param value the value
         * @returns the newly allocated string
         */
        put_double(value: number): string;
        /**
         * Put arbitary size floating point number to string.
         * @param value the value
         * @returns the newly allocated string
         */
        put_float(value: number): string;
        /**
         * Put integer to string.
         * @param value the value
         * @returns the newly allocated string
         */
        put_int(value: number): string;
        /**
         * Put long long integer to string.
         * @param value the value
         * @returns the newly allocated string
         */
        put_int64(value: number): string;
        /**
         * Put `str` to string.
         * @param str the string
         * @param length the length of string
         * @returns the newly allocated string
         */
        put_string(str: string, length: number): string;
        /**
         * Put unsigned integer to string.
         * @param value the value
         * @returns the newly allocated string
         */
        put_uint(value: number): string;
        /**
         * Put unsigned long long integer to string.
         * @param value the value
         * @returns the newly allocated string
         */
        put_uint64(value: number): string;
        set_file_version(file_version: string): void;
    }

    type FrontControllerClass = typeof FrontController;
    type FunctionClass = typeof Function;
    type GenericMainLoopClass = typeof GenericMainLoop;
    abstract class ListUtil {
        static $gtype: GObject.GType<ListUtil>;

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        /**
         * Find `gtype` within `list`.
         * @param list the #GList-struct
         * @param gtype the #GType to find
         */
        static find_type(list: GObject.Object[], gtype: GObject.GType): GObject.Object[];
    }

    type LogClass = typeof Log;
    class LoginInfo {
        static $gtype: GObject.GType<LoginInfo>;

        // Fields

        ref_count: number;
        active_session_count: number;
        user_uuid: string;
        security_context: SecurityContext;

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        /**
         * Alloc #AgsLoginInfo-struct.
         */
        static alloc(): any | null;
        /**
         * Free `login_info`.
         * @param login_info the #AgsLoginInfo-struct
         */
        static free(login_info?: any | null): void;
        /**
         * Increase ref-count of `login_info`.
         * @param login_info the #AgsLoginInfo-struct
         */
        static ref(login_info?: any | null): void;
        /**
         * Decrease ref-count of `login_info` and free it if ref-count drops to 0.
         * @param login_info the #AgsLoginInfo-struct
         */
        static unref(login_info?: any | null): void;
    }

    type MainLoopInterface = typeof MainLoop;
    abstract class MathUtil {
        static $gtype: GObject.GType<MathUtil>;

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        /**
         * Compute `value` from `coefficient`.
         * @param coefficient the coefficient string
         */
        static coefficient_to_complex(coefficient: string): [boolean, Complex];
        /**
         * Find exponent parenthesis.
         * @param str the string
         */
        static find_exponent_parenthesis(str: string): [number, number, number, number];
        /**
         * Find next function.
         * @param str the string
         */
        static find_function(str: string): string;
        /**
         * Find function parenthesis.
         * @param str the string
         */
        static find_function_parenthesis(str: string): [number, number, number, number];
        /**
         * Find all parenthesis.
         * @param str the string
         */
        static find_parenthesis_all(str: string): [number, number, number, number];
        /**
         * Find next symbol.
         * @param str the string
         */
        static find_symbol(str: string): string;
        /**
         * Find term parenthesis.
         * @param str the string
         */
        static find_term_parenthesis(str: string): [number, number, number, number];
        /**
         * Test if `term` is a term.
         * @param term the term
         */
        static is_term(term: string): boolean;
        /**
         * Match coefficient including optional sign.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_coefficient(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match exponent with or without parenthesis.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_exponent(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match function.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_function(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match operator.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_operator(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match sign.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_sign(offset: string, end_ptr: string): [boolean, string, string];
        /**
         * Match symbol including optional sign.
         * @param offset the string pointer
         * @param end_ptr the end of @offset
         */
        static match_symbol(offset: string, end_ptr: string): [boolean, string, string];
        static multiply_coefficient_all(coefficient: string, value_count: number): Complex;
        /**
         * Split `polynomial` into coefficient, powers of symbols and summand.
         * @param polynomial the polynomial
         */
        static split_polynomial(polynomial: string): [string, string];
        /**
         * Split `sum` into summands.
         * @param sum the sum
         */
        static split_sum(sum: string): string;
    }

    type MessageDeliveryClass = typeof MessageDelivery;
    type MessageEnvelopeClass = typeof MessageEnvelope;
    type MessageQueueClass = typeof MessageQueue;
    type MutableInterface = typeof Mutable;
    type PasswordStoreInterface = typeof PasswordStore;
    type PasswordStoreManagerClass = typeof PasswordStoreManager;
    type PluginControllerInterface = typeof PluginController;
    type PluginInterface = typeof Plugin;
    type PortletInterface = typeof Portlet;
    type PriorityClass = typeof Priority;
    class RegexMatch {
        static $gtype: GObject.GType<RegexMatch>;

        // Constructors

        constructor(
            properties?: Partial<{
                start_match_offset: unknown;
                end_match_offset: unknown;
            }>,
        );
        _init(...args: any[]): void;
    }

    class RegexUtil {
        static $gtype: GObject.GType<RegexUtil>;

        // Fields

        app_encoding: string;
        encoding: string;
        is_unichar: boolean;
        is_unichar2: boolean;
        regex_str: string;
        compile_flags: number;

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        /**
         * Allocate #AgsRegexUtil-struct
         * @param app_encoding the application encoding
         * @param encoding the input encoding
         * @param is_unichar is gunichar
         * @param is_unichar2 is gunichar2
         */
        static alloc(app_encoding: string, encoding: string, is_unichar: boolean, is_unichar2: boolean): RegexUtil;
        static error_quark(): GLib.Quark;

        // Methods

        /**
         * Compile `regex_str` by respecting `compile_flags`.
         * @param regex_str the regular expression
         * @param compile_flags the compile flags
         * @returns %TRUE on success, otherwise %FALSE
         */
        compile(regex_str: string, compile_flags: number): boolean;
        /**
         * Create a copy of `ptr`.
         * @returns a pointer of the new #AgsRegexUtil-struct
         */
        copy(): any | null;
        /**
         * Execute `regex_util` and fill `match`.
         * @param str the input string
         * @param match_count the match count
         * @param match the regex match
         * @param execute_flags the execute flags
         * @returns %TRUE on success, otherwise %FALSE
         */
        execute(str: string, match_count: number, match: RegexMatch, execute_flags: number): boolean;
        /**
         * Execute `regex_util` and fill `match`.
         * @param str the input string
         * @param match_count the match count
         * @param match the regex match
         * @param execute_flags the execute flags
         * @returns %TRUE on success, otherwise %FALSE
         */
        execute_unichar(str: string, match_count: number, match: RegexMatch, execute_flags: number): boolean;
        /**
         * Execute `regex_util` and fill `match`.
         * @param str the input string
         * @param match_count the match count
         * @param match the regex match
         * @param execute_flags the execute flags
         * @returns %TRUE on success, otherwise %FALSE
         */
        execute_unichar2(str: number, match_count: number, match: RegexMatch, execute_flags: number): boolean;
        /**
         * Free the memory of `ptr`.
         */
        free(): void;
        /**
         * Get application encoding of `regex_util`.
         * @returns the application encoding
         */
        get_app_encoding(): string;
        /**
         * Get encoding of `regex_util`.
         * @returns the encoding
         */
        get_encoding(): string;
        /**
         * Free `match`.
         * @param match the regex match
         */
        match_free(match: RegexMatch): void;
        /**
         * Get offset of `match`.
         * @param match the regex match
         * @param nth_match the match position
         */
        match_get_offset(match: RegexMatch, nth_match: number): [number, number];
    }

    type RegistryClass = typeof Registry;
    /**
     * #AgsRegistryEntry is an entry that you might want to lookup remotely.
     */
    class RegistryEntry {
        static $gtype: GObject.GType<RegistryEntry>;

        // Fields

        id: UUID;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Free `registry_entry`
         */
        free(): void;
    }

    type ReturnableThreadClass = typeof ReturnableThread;
    type SecurityContextClass = typeof SecurityContext;
    type SeekableInterface = typeof Seekable;
    type SequencerInterface = typeof Sequencer;
    type ServerApplicationContextClass = typeof ServerApplicationContext;
    type ServerClass = typeof Server;
    /**
     * #AgsServerInfo does identify the server and provides some basic information about it.
     */
    class ServerInfo {
        static $gtype: GObject.GType<ServerInfo>;

        // Fields

        uuid: string;
        server_name: string;

        // Constructors

        constructor(
            properties?: Partial<{
                uuid: string;
                server_name: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    type ServerStatusClass = typeof ServerStatus;
    type ServiceProviderInterface = typeof ServiceProvider;
    type SolverMatrixClass = typeof SolverMatrix;
    class SolverPath {
        static $gtype: GObject.GType<SolverPath>;

        // Fields

        nth_column: number;
        nth_row_a: number;
        nth_row_b: number;

        // Constructors

        constructor(
            properties?: Partial<{
                nth_column: number;
                nth_row_a: number;
                nth_row_b: number;
            }>,
        );
        _init(...args: any[]): void;

        // Static methods

        /**
         * Allocate #AgsSolverPath-struct
         * @param nth_column the nth-column
         * @param nth_row_a nth-row a
         * @param nth_row_b nth-row b
         */
        static alloc(nth_column: number, nth_row_a: number, nth_row_b: number): SolverPath;

        // Methods

        /**
         * Create a copy of `ptr`.
         * @returns a pointer of the new #AgsSolverPath-struct
         */
        copy(): any | null;
        /**
         * Free the memory of `ptr`.
         */
        free(): void;
        /**
         * Get nth-column of `solver_path`.
         * @returns nth-column as unsigned integer
         */
        get_nth_column(): number;
        /**
         * Get nth-row a of `solver_path`.
         * @returns nth-row a as unsigned integer
         */
        get_nth_row_a(): number;
        /**
         * Get nth-row b of solver path.
         * @returns nth-row b as unsigned integer
         */
        get_nth_row_b(): number;
        /**
         * Set nth-column of `solver_path`.
         * @param nth_column the nth-column to set
         */
        set_nth_column(nth_column: number): void;
        /**
         * Set nth-row a of `solver_path`.
         * @param nth_row_a the nth-row a to set
         */
        set_nth_row_a(nth_row_a: number): void;
        /**
         * Set nth-row b of `solver_path`.
         * @param nth_row_b the nth-row b to set
         */
        set_nth_row_b(nth_row_b: number): void;
    }

    type SolverPolynomialClass = typeof SolverPolynomial;
    type SolverVectorClass = typeof SolverVector;
    type SoundServerInterface = typeof SoundServer;
    type SoundcardInterface = typeof Soundcard;
    abstract class StringUtil {
        static $gtype: GObject.GType<StringUtil>;

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        /**
         * Escape all occurence of single quotes.
         * @param str the string to escape
         */
        static escape_single_quote(str: string): string;
        /**
         * String from mcoded7 encoding.
         * @param mcoded7_str the string to decode
         */
        static from_mcoded7(mcoded7_str: string): string;
        /**
         * String to mcoded7 encoding.
         * @param str the string to encode
         */
        static to_mcoded7(str: string): string;
    }

    type TactableInterface = typeof Tactable;
    type TaskClass = typeof Task;
    type TaskCompletionClass = typeof TaskCompletion;
    type TaskLauncherClass = typeof TaskLauncher;
    type ThreadApplicationContextClass = typeof ThreadApplicationContext;
    type ThreadClass = typeof Thread;
    type ThreadPoolClass = typeof ThreadPool;
    type TimestampClass = typeof Timestamp;
    type TurtleClass = typeof Turtle;
    type TurtleManagerClass = typeof TurtleManager;
    class UUID {
        static $gtype: GObject.GType<UUID>;

        // Fields

        data: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                data: Uint8Array;
            }>,
        );
        _init(...args: any[]): void;

        // Static methods

        /**
         * Allocate #AgsUUID.
         */
        static alloc(): UUID;
        /**
         * Retrieve #AgsUUID by parsing `str`.
         * @param str the UUID as string
         */
        static from_string(str: string): UUID;

        // Methods

        /**
         * Compare `a` with `b`.
         * @param b another #AgsUUID
         * @returns 0 on success, otherwise a value less or greater than 0
         */
        compare(b: UUID): number;
        /**
         * Create a copy of `ptr`.
         * @returns a pointer of the new #AgsUUID
         */
        copy(): any | null;
        /**
         * Free the memory of `ptr`.
         */
        free(): void;
        /**
         * Generate random UUID.
         */
        generate(): void;
        /**
         * Get string representation of `ptr`.
         * @returns the UUID as string if @ptr not %NULL, else %NULL
         */
        to_string(): string;
    }

    type WorkerThreadClass = typeof WorkerThread;
    type XmlAuthenticationClass = typeof XmlAuthentication;
    type XmlBusinessGroupClass = typeof XmlBusinessGroup;
    type XmlCertificateClass = typeof XmlCertificate;
    type XmlPasswordStoreClass = typeof XmlPasswordStore;
    namespace Applicable {
        /**
         * Interface for implementing Applicable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Apply all changes done so far.
             */
            vfunc_apply(): void;
            /**
             * Reset all changes within the user interface.
             */
            vfunc_reset(): void;
            /**
             * Update behaviour.
             * @param update if %TRUE do ::reset after ::apply
             */
            vfunc_set_update(update: boolean): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ApplicableNamespace {
        $gtype: GObject.GType<Applicable>;
        prototype: Applicable;
    }
    interface Applicable extends GObject.Object, Applicable.Interface {
        // Methods

        /**
         * Apply all changes done so far.
         */
        apply(): void;
        /**
         * Reset all changes within the user interface.
         */
        reset(): void;
        /**
         * Update behaviour.
         * @param update if %TRUE do ::reset after ::apply
         */
        set_update(update: boolean): void;
    }

    export const Applicable: ApplicableNamespace & {
        new (): Applicable; // This allows `obj instanceof Applicable`
    };

    namespace Authentication {
        /**
         * Interface for implementing Authentication.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Generate token.
             */
            vfunc_generate_token(): string;
            /**
             * Available authentication modules.
             */
            vfunc_get_authentication_module(): string[];
            /**
             * Get digest of `login`.
             * @param realm the realm
             * @param login the login
             * @param security_token the security token
             */
            vfunc_get_digest(realm: string, login: string, security_token: string): string;
            /**
             * Check session.
             * @param security_context the #AgsSecurityContext
             * @param user_uuid the user's UUID
             * @param security_token the security token
             */
            vfunc_is_session_active(
                security_context: GObject.Object,
                user_uuid: string,
                security_token: string,
            ): boolean;
            /**
             * Login.
             * @param login the login
             * @param password the password
             */
            vfunc_login(login: string, password: string): [boolean, string, string];
            /**
             * Logout.
             * @param security_context the #AgsSecurityContext
             * @param login the login
             * @param security_token the security token
             */
            vfunc_logout(security_context: GObject.Object, login: string, security_token: string): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface AuthenticationNamespace {
        $gtype: GObject.GType<Authentication>;
        prototype: Authentication;
    }
    interface Authentication extends GObject.Object, Authentication.Interface {
        // Methods

        /**
         * Generate token.
         * @returns the generated token
         */
        generate_token(): string;
        /**
         * Available authentication modules.
         * @returns a %NULL terminated array of strings of available authentication modules
         */
        get_authentication_module(): string[];
        /**
         * Get digest of `login`.
         * @param realm the realm
         * @param login the login
         * @param security_token the security token
         * @returns the encrypted password
         */
        get_digest(realm: string, login: string, security_token: string): string;
        /**
         * Check session.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the user's UUID
         * @param security_token the security token
         * @returns %TRUE if session active, otherwise %FALSE
         */
        is_session_active(security_context: GObject.Object, user_uuid: string, security_token: string): boolean;
        /**
         * Login.
         * @param login the login
         * @param password the password
         * @returns %TRUE on success, otherwise %FALSE
         */
        login(login: string, password: string): [boolean, string, string];
        /**
         * Logout.
         * @param security_context the #AgsSecurityContext
         * @param login the login
         * @param security_token the security token
         * @returns %TRUE on success, otherwise %FALSE
         */
        logout(security_context: GObject.Object, login: string, security_token: string): boolean;
    }

    export const Authentication: AuthenticationNamespace & {
        new (): Authentication; // This allows `obj instanceof Authentication`
    };

    namespace BusinessGroup {
        /**
         * Interface for implementing BusinessGroup.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Get business group name.
             * @param security_context the #AgsSecurityContext
             * @param user_uuid the user's UUID
             * @param security_token the security token
             * @param group_uuid the group's UUID
             */
            vfunc_get_group_name(
                security_context: GObject.Object,
                user_uuid: string,
                security_token: string,
                group_uuid: string,
            ): string;
            /**
             * Get group UUID as string vector.
             * @param security_context the #AgsSecurityContext
             * @param user_uuid the users unique identifier
             * @param security_token the security token
             */
            vfunc_get_group_uuid(security_context: GObject.Object, user_uuid: string, security_token: string): string[];
            /**
             * Get business group name as %NULL terminated string array.
             * @param security_context the #AgsSecurityContext
             * @param user_uuid the user's UUID
             * @param security_token the security token
             * @param group_uuid the business group's UUID
             */
            vfunc_get_user(
                security_context: GObject.Object,
                user_uuid: string,
                security_token: string,
                group_uuid: string,
            ): string[];
            /**
             * Set business group name.
             * @param security_context the #AgsSecurityContext
             * @param user_uuid the user's UUID
             * @param security_token the security token
             * @param group_uuid the group's UUID
             * @param group_name the business group's name to set
             */
            vfunc_set_group_name(
                security_context: GObject.Object,
                user_uuid: string,
                security_token: string,
                group_uuid: string,
                group_name: string,
            ): void;
            /**
             * Set business group of user names as %NULL terminated string array.
             * @param security_context the #AgsSecurityContext
             * @param user_uuid the user's UUID
             * @param security_token the security token
             * @param group_uuid the business group's UUID
             * @param user the string array containing user names
             */
            vfunc_set_user(
                security_context: GObject.Object,
                user_uuid: string,
                security_token: string,
                group_uuid: string,
                user: string[],
            ): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface BusinessGroupNamespace {
        $gtype: GObject.GType<BusinessGroup>;
        prototype: BusinessGroup;
    }
    interface BusinessGroup extends GObject.Object, BusinessGroup.Interface {
        // Methods

        /**
         * Get business group name.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the user's UUID
         * @param security_token the security token
         * @param group_uuid the group's UUID
         * @returns the business group's name as string
         */
        get_group_name(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            group_uuid: string,
        ): string;
        /**
         * Get group UUID as string vector.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @returns the group UUIDs as %NULL terminated string array
         */
        get_group_uuid(security_context: GObject.Object, user_uuid: string, security_token: string): string[];
        /**
         * Get business group name as %NULL terminated string array.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the user's UUID
         * @param security_token the security token
         * @param group_uuid the business group's UUID
         * @returns the business group's user names as string vector
         */
        get_user(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            group_uuid: string,
        ): string[];
        /**
         * Set business group name.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the user's UUID
         * @param security_token the security token
         * @param group_uuid the group's UUID
         * @param group_name the business group's name to set
         */
        set_group_name(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            group_uuid: string,
            group_name: string,
        ): void;
        /**
         * Set business group of user names as %NULL terminated string array.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the user's UUID
         * @param security_token the security token
         * @param group_uuid the business group's UUID
         * @param user the string array containing user names
         */
        set_user(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            group_uuid: string,
            user: string[],
        ): void;
    }

    export const BusinessGroup: BusinessGroupNamespace & {
        new (): BusinessGroup; // This allows `obj instanceof BusinessGroup`
    };

    namespace Certificate {
        /**
         * Interface for implementing Certificate.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Get cert UUID as string vector.
             * @param security_context the #AgsSecurityContext
             * @param user_uuid the users unique identifier
             * @param security_token the security token
             */
            vfunc_get_cert_uuid(security_context: GObject.Object, user_uuid: string, security_token: string): string[];
            /**
             * Get domain.
             * @param security_context the #AgsSecurityContext
             * @param user_uuid the users unique identifier
             * @param security_token the security token
             * @param cert_uuid the cert's UUID
             */
            vfunc_get_domain(
                security_context: GObject.Object,
                user_uuid: string,
                security_token: string,
                cert_uuid: string,
            ): string;
            /**
             * Get key type.
             * @param security_context the #AgsSecurityContext
             * @param user_uuid the users unique identifier
             * @param security_token the security token
             * @param cert_uuid the cert's UUID
             */
            vfunc_get_key_type(
                security_context: GObject.Object,
                user_uuid: string,
                security_token: string,
                cert_uuid: string,
            ): string;
            /**
             * Get private key file.
             * @param security_context the #AgsSecurityContext
             * @param user_uuid the users unique identifier
             * @param security_token the security token
             * @param cert_uuid the cert's UUID
             */
            vfunc_get_private_key_file(
                security_context: GObject.Object,
                user_uuid: string,
                security_token: string,
                cert_uuid: string,
            ): string;
            /**
             * Get public key file.
             * @param security_context the #AgsSecurityContext
             * @param user_uuid the users unique identifier
             * @param security_token the security token
             * @param cert_uuid the cert's UUID
             */
            vfunc_get_public_key_file(
                security_context: GObject.Object,
                user_uuid: string,
                security_token: string,
                cert_uuid: string,
            ): string;
            /**
             * Set domain.
             * @param security_context the #AgsSecurityContext
             * @param user_uuid the users unique identifier
             * @param security_token the security token
             * @param cert_uuid the cert's UUID
             * @param domain the domain
             */
            vfunc_set_domain(
                security_context: GObject.Object,
                user_uuid: string,
                security_token: string,
                cert_uuid: string,
                domain: string,
            ): void;
            /**
             * Set key type.
             * @param security_context the #AgsSecurityContext
             * @param user_uuid the users unique identifier
             * @param security_token the security token
             * @param cert_uuid the cert's UUID
             * @param key_type the key type
             */
            vfunc_set_key_type(
                security_context: GObject.Object,
                user_uuid: string,
                security_token: string,
                cert_uuid: string,
                key_type: string,
            ): void;
            /**
             * Set private key file.
             * @param security_context the #AgsSecurityContext
             * @param user_uuid the users unique identifier
             * @param security_token the security token
             * @param cert_uuid the cert's UUID
             * @param private_key_file the private key file
             */
            vfunc_set_private_key_file(
                security_context: GObject.Object,
                user_uuid: string,
                security_token: string,
                cert_uuid: string,
                private_key_file: string,
            ): void;
            /**
             * Set public key file.
             * @param security_context the #AgsSecurityContext
             * @param user_uuid the users unique identifier
             * @param security_token the security token
             * @param cert_uuid the cert's UUID
             * @param public_key_file the public key file
             */
            vfunc_set_public_key_file(
                security_context: GObject.Object,
                user_uuid: string,
                security_token: string,
                cert_uuid: string,
                public_key_file: string,
            ): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface CertificateNamespace {
        $gtype: GObject.GType<Certificate>;
        prototype: Certificate;
    }
    interface Certificate extends GObject.Object, Certificate.Interface {
        // Methods

        /**
         * Get cert UUID as string vector.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @returns the cert UUIDs as %NULL terminated string array
         */
        get_cert_uuid(security_context: GObject.Object, user_uuid: string, security_token: string): string[];
        /**
         * Get domain.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param cert_uuid the cert's UUID
         * @returns the domain
         */
        get_domain(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            cert_uuid: string,
        ): string;
        /**
         * Get key type.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param cert_uuid the cert's UUID
         * @returns the key type
         */
        get_key_type(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            cert_uuid: string,
        ): string;
        /**
         * Get private key file.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param cert_uuid the cert's UUID
         * @returns the private key file
         */
        get_private_key_file(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            cert_uuid: string,
        ): string;
        /**
         * Get public key file.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param cert_uuid the cert's UUID
         * @returns the public key file
         */
        get_public_key_file(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            cert_uuid: string,
        ): string;
        /**
         * Set domain.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param cert_uuid the cert's UUID
         * @param domain the domain
         */
        set_domain(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            cert_uuid: string,
            domain: string,
        ): void;
        /**
         * Set key type.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param cert_uuid the cert's UUID
         * @param key_type the key type
         */
        set_key_type(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            cert_uuid: string,
            key_type: string,
        ): void;
        /**
         * Set private key file.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param cert_uuid the cert's UUID
         * @param private_key_file the private key file
         */
        set_private_key_file(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            cert_uuid: string,
            private_key_file: string,
        ): void;
        /**
         * Set public key file.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param cert_uuid the cert's UUID
         * @param public_key_file the public key file
         */
        set_public_key_file(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            cert_uuid: string,
            public_key_file: string,
        ): void;
    }

    export const Certificate: CertificateNamespace & {
        new (): Certificate; // This allows `obj instanceof Certificate`
    };

    namespace ConcurrencyProvider {
        /**
         * Interface for implementing ConcurrencyProvider.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Get main loop of application context.
             */
            vfunc_get_main_loop(): Thread;
            /**
             * Get task launcher of application context.
             */
            vfunc_get_task_launcher(): TaskLauncher;
            /**
             * Get thread pool of application context.
             */
            vfunc_get_thread_pool(): ThreadPool;
            /**
             * Get workers of application context.
             */
            vfunc_get_worker(): WorkerThread[];
            /**
             * Set main loop of application context.
             * @param main_loop the #AgsThread implementing #AgsMainLoop
             */
            vfunc_set_main_loop(main_loop: Thread): void;
            /**
             * Set task launcher of application context.
             * @param task_launcher the #AgsTaskLauncher
             */
            vfunc_set_task_launcher(task_launcher: TaskLauncher): void;
            /**
             * Set thread pool of application context.
             * @param thread_pool the #AgsThreadPool
             */
            vfunc_set_thread_pool(thread_pool: ThreadPool): void;
            /**
             * Set workers of application context.
             * @param worker the #GList-struct containing workers
             */
            vfunc_set_worker(worker: WorkerThread[]): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ConcurrencyProviderNamespace {
        $gtype: GObject.GType<ConcurrencyProvider>;
        prototype: ConcurrencyProvider;
    }
    interface ConcurrencyProvider extends GObject.Object, ConcurrencyProvider.Interface {
        // Methods

        /**
         * Get main loop of application context.
         * @returns the #AgsThread implementing #AgsMainLoop
         */
        get_main_loop(): Thread;
        /**
         * Get task launcher of application context.
         * @returns the #AgsTaskLauncher
         */
        get_task_launcher(): TaskLauncher;
        /**
         * Get thread pool of application context.
         * @returns the #AgsThreadPool
         */
        get_thread_pool(): ThreadPool;
        /**
         * Get workers of application context.
         * @returns the #GList-struct containing workers
         */
        get_worker(): WorkerThread[];
        /**
         * Set main loop of application context.
         * @param main_loop the #AgsThread implementing #AgsMainLoop
         */
        set_main_loop(main_loop: Thread): void;
        /**
         * Set task launcher of application context.
         * @param task_launcher the #AgsTaskLauncher
         */
        set_task_launcher(task_launcher: TaskLauncher): void;
        /**
         * Set thread pool of application context.
         * @param thread_pool the #AgsThreadPool
         */
        set_thread_pool(thread_pool: ThreadPool): void;
        /**
         * Set workers of application context.
         * @param worker the #GList-struct containing workers
         */
        set_worker(worker: WorkerThread[]): void;
    }

    export const ConcurrencyProvider: ConcurrencyProviderNamespace & {
        new (): ConcurrencyProvider; // This allows `obj instanceof ConcurrencyProvider`
    };

    namespace Connectable {
        /**
         * Interface for implementing Connectable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Add connectable to registry.
             */
            vfunc_add_to_registry(): void;
            /**
             * Connect the connectable.
             */
            vfunc_connect(): void;
            /**
             * Disconnect the connectable.
             * @param connection the connection
             */
            vfunc_connect_connection(connection: GObject.Object): void;
            /**
             * Disconnect the connectable.
             */
            vfunc_disconnect(): void;
            /**
             * Disconnect the connectable.
             * @param connection the connection
             */
            vfunc_disconnect_connection(connection: GObject.Object): void;
            /**
             * Get UUID of `connectable`.
             */
            vfunc_get_uuid(): UUID;
            /**
             * Check the connectable to have resources.
             */
            vfunc_has_resource(): boolean;
            /**
             * Check if the `connectable` was connected.
             */
            vfunc_is_connected(): boolean;
            /**
             * Connect the connectable.
             */
            vfunc_is_ready(): boolean;
            /**
             * List resources as an XML element and return it.
             */
            vfunc_list_resource(): libxml2.Node;
            /**
             * Remove connectable from registry.
             */
            vfunc_remove_from_registry(): void;
            /**
             * Compose an XML element and return it.
             */
            vfunc_xml_compose(): libxml2.Node;
            /**
             * Parse `node` as XML element and apply it.
             * @param node the #xmlNode-struct
             */
            vfunc_xml_parse(node: libxml2.Node): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ConnectableNamespace {
        $gtype: GObject.GType<Connectable>;
        prototype: Connectable;
    }
    interface Connectable extends GObject.Object, Connectable.Interface {
        // Methods

        /**
         * Add connectable to registry.
         */
        add_to_registry(): void;
        /**
         * Connect the connectable.
         */
        connect(): void;
        connect(...args: never[]): any;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        connect_connection(connection: GObject.Object): void;
        /**
         * Disconnect the connectable.
         */
        disconnect(): void;
        /**
         * Disconnect the connectable.
         * @param connection the connection
         */
        disconnect_connection(connection: GObject.Object): void;
        /**
         * Get UUID of `connectable`.
         * @returns the assigned #AgsUUID
         */
        get_uuid(): UUID;
        /**
         * Check the connectable to have resources.
         * @returns %TRUE if @connectable can be added to registry, otherwise %FALSE.
         */
        has_resource(): boolean;
        /**
         * Check if the `connectable` was connected.
         * @returns %TRUE if is connected, otherwise %FALSE.
         */
        is_connected(): boolean;
        /**
         * Connect the connectable.
         * @returns %TRUE if is added to registry, otherwise %FALSE.
         */
        is_ready(): boolean;
        /**
         * List resources as an XML element and return it.
         * @returns the #xmlNode-struct
         */
        list_resource(): libxml2.Node;
        /**
         * Remove connectable from registry.
         */
        remove_from_registry(): void;
        /**
         * Compose an XML element and return it.
         * @returns the #xmlNode-struct
         */
        xml_compose(): libxml2.Node;
        /**
         * Parse `node` as XML element and apply it.
         * @param node the #xmlNode-struct
         */
        xml_parse(node: libxml2.Node): void;
    }

    export const Connectable: ConnectableNamespace & {
        new (): Connectable; // This allows `obj instanceof Connectable`
    };

    namespace Countable {
        /**
         * Interface for implementing Countable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Retrieve current position of MIDI.
             */
            vfunc_get_midi_counter(): number;
            /**
             * Retrieve current position of notation.
             */
            vfunc_get_notation_counter(): number;
            /**
             * Retrieve current position of sequencer.
             */
            vfunc_get_sequencer_counter(): number;
            /**
             * Retrieve current position of wave.
             */
            vfunc_get_wave_counter(): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface CountableNamespace {
        $gtype: GObject.GType<Countable>;
        prototype: Countable;
    }
    interface Countable extends GObject.Object, Countable.Interface {
        // Methods

        /**
         * Retrieve current position of MIDI.
         * @returns the current position
         */
        get_midi_counter(): number;
        /**
         * Retrieve current position of notation.
         * @returns the current position
         */
        get_notation_counter(): number;
        /**
         * Retrieve current position of sequencer.
         * @returns the current position
         */
        get_sequencer_counter(): number;
        /**
         * Retrieve current position of wave.
         * @returns the current position
         */
        get_wave_counter(): number;
    }

    export const Countable: CountableNamespace & {
        new (): Countable; // This allows `obj instanceof Countable`
    };

    namespace Cursor {
        /**
         * Interface for implementing Cursor.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Get BPM.
             */
            vfunc_get_bpm(): number;
            /**
             * Get current.
             */
            vfunc_get_current(): GObject.Object[];
            /**
             * Get current as copy.
             */
            vfunc_get_current_copy(): GObject.Object[];
            /**
             * Get the default offset.
             */
            vfunc_get_default_offset(): number;
            /**
             * Get delay.
             */
            vfunc_get_delay(): number;
            /**
             * Get delay counter.
             */
            vfunc_get_delay_counter(): number;
            /**
             * Get duration.
             */
            vfunc_get_duration(): number;
            /**
             * Get next.
             */
            vfunc_get_next(): GObject.Object[];
            /**
             * Get offset.
             */
            vfunc_get_offset(): number;
            /**
             * Get prev.
             */
            vfunc_get_prev(): GObject.Object[];
            /**
             * Get offset counter rate.
             */
            vfunc_get_rate(): number;
            /**
             * Get the tact.
             */
            vfunc_get_tact(): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface CursorNamespace {
        $gtype: GObject.GType<Cursor>;
        prototype: Cursor;
    }
    interface Cursor extends GObject.Object, Cursor.Interface {
        // Methods

        /**
         * Get BPM.
         * @returns the BPM
         */
        get_bpm(): number;
        /**
         * Get current.
         * @returns the #GList-struct pointing to current
         */
        get_current(): GObject.Object[];
        /**
         * Get current as copy.
         * @returns the #GList-struct of current as copy
         */
        get_current_copy(): GObject.Object[];
        /**
         * Get the default offset.
         * @returns the default offset
         */
        get_default_offset(): number;
        /**
         * Get delay.
         * @returns the delay
         */
        get_delay(): number;
        /**
         * Get delay counter.
         * @returns the delay counter
         */
        get_delay_counter(): number;
        /**
         * Get duration.
         * @returns the duration
         */
        get_duration(): number;
        /**
         * Get next.
         * @returns the #GList-struct pointing to next
         */
        get_next(): GObject.Object[];
        /**
         * Get offset.
         * @returns the offset
         */
        get_offset(): number;
        /**
         * Get prev.
         * @returns the #GList-struct pointing to previous
         */
        get_prev(): GObject.Object[];
        /**
         * Get offset counter rate.
         */
        get_rate(): number;
        /**
         * Get the tact.
         * @returns the tact
         */
        get_tact(): number;
    }

    export const Cursor: CursorNamespace & {
        new (): Cursor; // This allows `obj instanceof Cursor`
    };

    namespace MainLoop {
        /**
         * Interface for implementing MainLoop.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Change frequency.
             * @param frequency the new frequency
             */
            vfunc_change_frequency(frequency: number): void;
            /**
             * Decrement thread needs access to main loop's critical region field.
             */
            vfunc_dec_queued_critical_region(): void;
            /**
             * Retrieve the tree mutex.
             */
            vfunc_get_tree_lock(): GLib.RecMutex;
            /**
             * Increment thread needs access to main loop's critical region field.
             */
            vfunc_inc_queued_critical_region(): void;
            /**
             * Check if main loop is in critical region.
             */
            vfunc_is_critical_region(): boolean;
            /**
             * Check if thread tree is syncing.
             */
            vfunc_is_syncing(): boolean;
            /**
             * Set main loop is in critical region.
             * @param is_critical_region set %TRUE if critical region
             */
            vfunc_set_critical_region(is_critical_region: boolean): void;
            /**
             * Set thread tree is syncing.
             * @param is_syncing set %TRUE if syncing
             */
            vfunc_set_syncing(is_syncing: boolean): void;
            /**
             * Test main loop may enter critical region.
             */
            vfunc_test_queued_critical_region(): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface MainLoopNamespace {
        $gtype: GObject.GType<MainLoop>;
        prototype: MainLoop;
    }
    interface MainLoop extends GObject.Object, MainLoop.Interface {
        // Methods

        /**
         * Change frequency.
         * @param frequency the new frequency
         */
        change_frequency(frequency: number): void;
        /**
         * Decrement thread needs access to main loop's critical region field.
         */
        dec_queued_critical_region(): void;
        /**
         * Retrieve the tree mutex.
         * @returns the mutex
         */
        get_tree_lock(): GLib.RecMutex;
        /**
         * Increment thread needs access to main loop's critical region field.
         */
        inc_queued_critical_region(): void;
        /**
         * Check if main loop is in critical region.
         * @returns %TRUE if sync in progress, otherwise %FALSE
         */
        is_critical_region(): boolean;
        /**
         * Check if thread tree is syncing.
         * @returns %TRUE if sync in progress, otherwise %FALSE
         */
        is_syncing(): boolean;
        /**
         * Set main loop is in critical region.
         * @param is_critical_region set %TRUE if critical region
         */
        set_critical_region(is_critical_region: boolean): void;
        /**
         * Set thread tree is syncing.
         * @param is_syncing set %TRUE if syncing
         */
        set_syncing(is_syncing: boolean): void;
        /**
         * Test main loop may enter critical region.
         * @returns 0 if main loop may enter critical region, otherwise not
         */
        test_queued_critical_region(): number;
    }

    export const MainLoop: MainLoopNamespace & {
        new (): MainLoop; // This allows `obj instanceof MainLoop`
    };

    namespace Mutable {
        /**
         * Interface for implementing Mutable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Mute a class instance.
             * @param muted if %TRUE then muted, else playing
             */
            vfunc_set_muted(muted: boolean): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface MutableNamespace {
        $gtype: GObject.GType<Mutable>;
        prototype: Mutable;
    }
    interface Mutable extends GObject.Object, Mutable.Interface {
        // Methods

        /**
         * Mute a class instance.
         * @param muted if %TRUE then muted, else playing
         */
        set_muted(muted: boolean): void;
    }

    export const Mutable: MutableNamespace & {
        new (): Mutable; // This allows `obj instanceof Mutable`
    };

    namespace PasswordStore {
        /**
         * Interface for implementing PasswordStore.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Encrypt password.
             * @param password the password
             * @param salt your salt
             */
            vfunc_encrypt_password(password: string, salt: string): string;
            /**
             * Get login name.
             * @param security_context the #AgsSecurityContext
             * @param user_uuid the users unique identifier
             * @param security_token the security token
             */
            vfunc_get_login_name(security_context: GObject.Object, user_uuid: string, security_token: string): string;
            /**
             * Get password.
             * @param security_context the #AgsSecurityContext
             * @param user_uuid the user UUID
             * @param security_token the security token
             */
            vfunc_get_password(security_context: GObject.Object, user_uuid: string, security_token: string): string;
            /**
             * Set login name.
             * @param security_context the #AgsSecurityContext
             * @param user_uuid the users unique identifier
             * @param security_token the security token
             * @param login_name the login name
             */
            vfunc_set_login_name(
                security_context: GObject.Object,
                user_uuid: string,
                security_token: string,
                login_name: string,
            ): void;
            /**
             * Set password.
             * @param security_context the #AgsSecurityContext
             * @param user_uuid the user UUID
             * @param security_token the security token
             * @param password the password
             */
            vfunc_set_password(
                security_context: GObject.Object,
                user_uuid: string,
                security_token: string,
                password: string,
            ): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PasswordStoreNamespace {
        $gtype: GObject.GType<PasswordStore>;
        prototype: PasswordStore;
    }
    interface PasswordStore extends GObject.Object, PasswordStore.Interface {
        // Methods

        /**
         * Encrypt password.
         * @param password the password
         * @param salt your salt
         * @returns the encrypted bytes
         */
        encrypt_password(password: string, salt: string): string;
        /**
         * Get login name.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @returns the login name
         */
        get_login_name(security_context: GObject.Object, user_uuid: string, security_token: string): string;
        /**
         * Get password.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the user UUID
         * @param security_token the security token
         * @returns the password
         */
        get_password(security_context: GObject.Object, user_uuid: string, security_token: string): string;
        /**
         * Set login name.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the users unique identifier
         * @param security_token the security token
         * @param login_name the login name
         */
        set_login_name(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            login_name: string,
        ): void;
        /**
         * Set password.
         * @param security_context the #AgsSecurityContext
         * @param user_uuid the user UUID
         * @param security_token the security token
         * @param password the password
         */
        set_password(
            security_context: GObject.Object,
            user_uuid: string,
            security_token: string,
            password: string,
        ): void;
    }

    export const PasswordStore: PasswordStoreNamespace & {
        new (): PasswordStore; // This allows `obj instanceof PasswordStore`
    };

    namespace Plugin {
        /**
         * Interface for implementing Plugin.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Retrieve the build id of the plugin.
             */
            vfunc_get_build_id(): string;
            /**
             * Retrieve the name of the plugin.
             */
            vfunc_get_name(): string;
            /**
             * Retrieve the ports of the plugin.
             */
            vfunc_get_ports(): GObject.Object[];
            /**
             * Retrieve the version of the plugin.
             */
            vfunc_get_version(): string;
            /**
             * Retrieve the xml type of the plugin.
             */
            vfunc_get_xml_type(): string;
            /**
             * Set the build id of the plugin.
             * @param build_id the build id of plugin
             */
            vfunc_set_build_id(build_id: string): void;
            /**
             * Set the name of the plugin.
             * @param name the name of plugin
             */
            vfunc_set_name(name: string): void;
            /**
             * Set the build id of the plugin.
             * @param ports the build id of plugin
             */
            vfunc_set_ports(ports: GObject.Object[]): void;
            /**
             * Set the version of the plugin.
             * @param version the version of plugin
             */
            vfunc_set_version(version: string): void;
            /**
             * Set the build id of the plugin.
             * @param xml_type the build id of plugin
             */
            vfunc_set_xml_type(xml_type: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PluginNamespace {
        $gtype: GObject.GType<Plugin>;
        prototype: Plugin;

        /**
         * Read of file.
         * @param file the #GObject
         * @param node the node
         * @param plugin the #AgsPlugin
         */
        read(file: GObject.Object, node: libxml2.Node, plugin: Plugin): void;
        /**
         * Write to file.
         * @param file the #GObject
         * @param parent the parent node
         * @param plugin the #AgsPlugin
         */
        write(file: GObject.Object, parent: libxml2.Node, plugin: Plugin): libxml2.Node;
    }
    interface Plugin extends GObject.Object, Plugin.Interface {
        // Methods

        /**
         * Retrieve the build id of the plugin.
         * @returns the plugins build id
         */
        get_build_id(): string;
        /**
         * Retrieve the name of the plugin.
         * @returns the plugins name
         */
        get_name(): string;
        /**
         * Retrieve the ports of the plugin.
         * @returns the plugins ports
         */
        get_ports(): GObject.Object[];
        /**
         * Retrieve the version of the plugin.
         * @returns the plugins version
         */
        get_version(): string;
        /**
         * Retrieve the xml type of the plugin.
         * @returns the plugins xml type
         */
        get_xml_type(): string;
        /**
         * Set the build id of the plugin.
         * @param build_id the build id of plugin
         */
        set_build_id(build_id: string): void;
        /**
         * Set the name of the plugin.
         * @param name the name of plugin
         */
        set_name(name: string): void;
        /**
         * Set the build id of the plugin.
         * @param ports the build id of plugin
         */
        set_ports(ports: GObject.Object[]): void;
        /**
         * Set the version of the plugin.
         * @param version the version of plugin
         */
        set_version(version: string): void;
        /**
         * Set the build id of the plugin.
         * @param xml_type the build id of plugin
         */
        set_xml_type(xml_type: string): void;
    }

    export const Plugin: PluginNamespace & {
        new (): Plugin; // This allows `obj instanceof Plugin`
    };

    namespace PluginController {
        /**
         * Interface for implementing PluginController.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Do request.
             * @param msg the #SoupServerMessage
             * @param query the #GHashTable
             * @param security_context the #AgsSecurityContext
             * @param path the context path to access
             * @param login the login
             * @param security_token the security token
             */
            vfunc_do_request(
                msg: Soup.ServerMessage,
                query: { [key: string]: any } | GLib.HashTable<any, any>,
                security_context: GObject.Object,
                path: string,
                login: string,
                security_token: string,
            ): any | null;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PluginControllerNamespace {
        $gtype: GObject.GType<PluginController>;
        prototype: PluginController;
    }
    interface PluginController extends GObject.Object, PluginController.Interface {
        // Methods

        /**
         * Do request.
         * @param msg the #SoupServerMessage
         * @param query the #GHashTable
         * @param security_context the #AgsSecurityContext
         * @param path the context path to access
         * @param login the login
         * @param security_token the security token
         * @returns the #GList-struct containing #AgsResponse
         */
        do_request(
            msg: Soup.ServerMessage,
            query: { [key: string]: any } | GLib.HashTable<any, any>,
            security_context: GObject.Object,
            path: string,
            login: string,
            security_token: string,
        ): any | null;
    }

    export const PluginController: PluginControllerNamespace & {
        new (): PluginController; // This allows `obj instanceof PluginController`
    };

    namespace Portlet {
        /**
         * Interface for implementing Portlet.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Get port.
             */
            vfunc_get_port<T = GObject.Object>(): T;
            /**
             * Retrieve thread-safe properties.
             */
            vfunc_list_safe_properties(): string[];
            /**
             * Get property thread safe.
             * @param property_name propertie's name
             * @param value the #GValue
             */
            vfunc_safe_get_property(property_name: string, value: GObject.Value | any): void;
            /**
             * Set property thread safe.
             * @param property_name propertie's name
             * @param value the #GValue
             */
            vfunc_safe_set_property(property_name: string, value: GObject.Value | any): void;
            /**
             * Set port.
             * @param port the #GObject
             */
            vfunc_set_port(port: GObject.Object): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PortletNamespace {
        $gtype: GObject.GType<Portlet>;
        prototype: Portlet;
    }
    interface Portlet extends GObject.Object, Portlet.Interface {
        // Methods

        /**
         * Get port.
         * @returns the #GObject
         */
        get_port<T = GObject.Object>(): T;
        /**
         * Retrieve thread-safe properties.
         * @returns a #GList containing properties
         */
        list_safe_properties(): string[];
        /**
         * Get property thread safe.
         * @param property_name propertie's name
         * @param value the #GValue
         */
        safe_get_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Set property thread safe.
         * @param property_name propertie's name
         * @param value the #GValue
         */
        safe_set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Set port.
         * @param port the #GObject
         */
        set_port(port: GObject.Object): void;
    }

    export const Portlet: PortletNamespace & {
        new (): Portlet; // This allows `obj instanceof Portlet`
    };

    namespace Seekable {
        /**
         * Interface for implementing Seekable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Seek.
             * @param offset the offset
             * @param whence the direction, see #AgsSeekType-enum
             */
            vfunc_seek(offset: number, whence: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface SeekableNamespace {
        $gtype: GObject.GType<Seekable>;
        prototype: Seekable;
    }
    interface Seekable extends GObject.Object, Seekable.Interface {
        // Methods

        /**
         * Seek.
         * @param offset the offset
         * @param whence the direction, see #AgsSeekType-enum
         */
        seek(offset: number, whence: number): void;
    }

    export const Seekable: SeekableNamespace & {
        new (): Seekable; // This allows `obj instanceof Seekable`
    };

    namespace Sequencer {
        /**
         * Interface for implementing Sequencer.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Get current playback bpm.
             */
            vfunc_get_bpm(): number;
            /**
             * Get current playback buffer.
             * @param buffer_length the buffer's length
             */
            vfunc_get_buffer(buffer_length: number): any | null;
            /**
             * Get current playback delay factor.
             */
            vfunc_get_delay_factor(): number;
            /**
             * Get device.
             */
            vfunc_get_device(): string;
            /**
             * Get future playback buffer.
             * @param buffer_length the buffer's length
             */
            vfunc_get_next_buffer(buffer_length: number): any | null;
            /**
             * Get current playback note offset.
             */
            vfunc_get_note_offset(): number;
            /**
             * Get start playback note offset.
             */
            vfunc_get_start_note_offset(): number;
            /**
             * Get playing.
             */
            vfunc_is_playing(): boolean;
            /**
             * Get recording.
             */
            vfunc_is_recording(): boolean;
            /**
             * Get starting.
             */
            vfunc_is_starting(): boolean;
            /**
             * Retrieve `card_id` and `card_name` as a list of strings.
             */
            vfunc_list_cards(): [string[], string[]];
            /**
             * Lock `buffer`.
             * @param buffer the buffer to lock
             */
            vfunc_lock_buffer(buffer?: any | null): void;
            /**
             * Callback when counter expires minor note offset.
             * @param note_offset the note offset
             */
            vfunc_offset_changed(note_offset: number): void;
            /**
             * Plays the current buffer of sequencer.
             */
            vfunc_play(): void;
            /**
             * Initializes the sequencer for playback.
             */
            vfunc_play_init(): void;
            /**
             * Records the current buffer of sequencer.
             */
            vfunc_record(): void;
            /**
             * Initializes the sequencer for recording.
             */
            vfunc_record_init(): void;
            /**
             * Set current playback bpm.
             * @param bpm the bpm to set
             */
            vfunc_set_bpm(bpm: number): void;
            /**
             * Set current playback delay factor.
             * @param delay_factor the delay factor to set
             */
            vfunc_set_delay_factor(delay_factor: number): void;
            /**
             * Set device.
             * @param card_id the device to set
             */
            vfunc_set_device(card_id: string): void;
            /**
             * Set current playback note offset.
             * @param note_offset the note offset to set
             */
            vfunc_set_note_offset(note_offset: number): void;
            /**
             * Set start playback note offset.
             * @param start_note_offset the start note offset to set
             */
            vfunc_set_start_note_offset(start_note_offset: number): void;
            /**
             * Stops the sequencer from playing to it.
             */
            vfunc_stop(): void;
            /**
             * Every call to play may generate a tic.
             */
            vfunc_tic(): void;
            /**
             * Unlock `buffer`.
             * @param buffer the buffer to unlock
             */
            vfunc_unlock_buffer(buffer?: any | null): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface SequencerNamespace {
        $gtype: GObject.GType<Sequencer>;
        prototype: Sequencer;
    }
    interface Sequencer extends GObject.Object, Sequencer.Interface {
        // Methods

        /**
         * Get current playback bpm.
         * @returns bpm
         */
        get_bpm(): number;
        /**
         * Get current playback buffer.
         * @param buffer_length the buffer's length
         * @returns current playback buffer
         */
        get_buffer(buffer_length: number): any | null;
        /**
         * Get current playback delay factor.
         * @returns delay factor
         */
        get_delay_factor(): number;
        /**
         * Get device.
         * @returns the device's identifier
         */
        get_device(): string;
        /**
         * Get future playback buffer.
         * @param buffer_length the buffer's length
         * @returns next playback buffer
         */
        get_next_buffer(buffer_length: number): any | null;
        /**
         * Get current playback note offset.
         * @returns offset
         */
        get_note_offset(): number;
        /**
         * Get start playback note offset.
         * @returns the start note offset
         */
        get_start_note_offset(): number;
        /**
         * Get playing.
         * @returns %TRUE if playing, else %FALSE
         */
        is_playing(): boolean;
        /**
         * Get recording.
         * @returns %TRUE if recording, else %FALSE
         */
        is_recording(): boolean;
        /**
         * Get starting.
         * @returns %TRUE if starting, else %FALSE
         */
        is_starting(): boolean;
        /**
         * Retrieve `card_id` and `card_name` as a list of strings.
         */
        list_cards(): [string[], string[]];
        /**
         * Lock `buffer`.
         * @param buffer the buffer to lock
         */
        lock_buffer(buffer?: any | null): void;
        /**
         * Callback when counter expires minor note offset.
         * @param note_offset the note offset
         */
        offset_changed(note_offset: number): void;
        /**
         * Plays the current buffer of sequencer.
         */
        play(): void;
        /**
         * Initializes the sequencer for playback.
         */
        play_init(): void;
        /**
         * Records the current buffer of sequencer.
         */
        record(): void;
        /**
         * Initializes the sequencer for recording.
         */
        record_init(): void;
        /**
         * Set current playback bpm.
         * @param bpm the bpm to set
         */
        set_bpm(bpm: number): void;
        /**
         * Set current playback delay factor.
         * @param delay_factor the delay factor to set
         */
        set_delay_factor(delay_factor: number): void;
        /**
         * Set device.
         * @param card_id the device to set
         */
        set_device(card_id: string): void;
        /**
         * Set current playback note offset.
         * @param note_offset the note offset to set
         */
        set_note_offset(note_offset: number): void;
        /**
         * Set start playback note offset.
         * @param start_note_offset the start note offset to set
         */
        set_start_note_offset(start_note_offset: number): void;
        /**
         * Stops the sequencer from playing to it.
         */
        stop(): void;
        /**
         * Every call to play may generate a tic.
         */
        tic(): void;
        /**
         * Unlock `buffer`.
         * @param buffer the buffer to unlock
         */
        unlock_buffer(buffer?: any | null): void;
    }

    export const Sequencer: SequencerNamespace & {
        new (): Sequencer; // This allows `obj instanceof Sequencer`
    };

    namespace ServiceProvider {
        /**
         * Interface for implementing ServiceProvider.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Get server.
             */
            vfunc_get_server(): Server[];
            /**
             * Check if is operating.
             */
            vfunc_is_operating(): boolean;
            /**
             * Set registry.
             * @param registry the #AgsRegistry
             */
            vfunc_set_registry(registry: Registry): void;
            /**
             * Set server.
             * @param server the #GList-struct containing #AgsServer
             */
            vfunc_set_server(server: Server[]): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ServiceProviderNamespace {
        $gtype: GObject.GType<ServiceProvider>;
        prototype: ServiceProvider;
    }
    interface ServiceProvider extends GObject.Object, ServiceProvider.Interface {
        // Methods

        /**
         * Get server.
         * @returns the #GList-struct containing #AgsServer
         */
        get_server(): Server[];
        /**
         * Check if is operating.
         * @returns %TRUE if operating, otherwise %FALSE
         */
        is_operating(): boolean;
        /**
         * Set registry.
         * @param registry the #AgsRegistry
         */
        set_registry(registry: Registry): void;
        /**
         * Set server.
         * @param server the #GList-struct containing #AgsServer
         */
        set_server(server: Server[]): void;
    }

    export const ServiceProvider: ServiceProviderNamespace & {
        new (): ServiceProvider; // This allows `obj instanceof ServiceProvider`
    };

    namespace SoundServer {
        /**
         * Interface for implementing SoundServer.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Gets the ports of `sound_server`.
             * @param port_count the number of ports returned
             */
            vfunc_get_ports(port_count: number): number;
            /**
             * Gets the sequencer of `sound_server` associated with `client_uuid`.
             * @param client_uuid the client uuid
             */
            vfunc_get_sequencer(client_uuid: string): GObject.Object[];
            /**
             * Gets the soundcard of `sound_server` associated with `client_uuid`.
             * @param client_uuid the client uuid
             */
            vfunc_get_soundcard(client_uuid: string): GObject.Object[];
            /**
             * Gets the URL of `sound_server`.
             */
            vfunc_get_url(): string;
            /**
             * Fetches `sequencer` of `sound_server`.
             * @param is_output if %TRUE the used as sink, else as source
             */
            vfunc_register_sequencer<T = GObject.Object>(is_output: boolean): T;
            /**
             * Fetches `soundcard` of `sound_server`.
             * @param is_output if %TRUE the used as sink, else as source
             */
            vfunc_register_soundcard<T = GObject.Object>(is_output: boolean): T;
            vfunc_set_ports(ports: number, port_count: number): void;
            /**
             * Sets the sequencer at `client_uuid`.
             * @param client_uuid the location to fetch from
             * @param sequencer the sequencer to set
             */
            vfunc_set_sequencer(client_uuid: string, sequencer: GObject.Object[]): void;
            /**
             * Sets the soundcard at `client_uuid`.
             * @param client_uuid the location to fetch from
             * @param soundcard the soundcard to set
             */
            vfunc_set_soundcard(client_uuid: string, soundcard: GObject.Object[]): void;
            /**
             * Sets the url of `sound_server`.
             * @param url the url to set
             */
            vfunc_set_url(url: string): void;
            /**
             * Releases `sequencer` in `sound_server`.
             * @param sequencer the #AgsSequencer
             */
            vfunc_unregister_sequencer(sequencer: GObject.Object): void;
            /**
             * Releases `soundcard` in `sound_server`.
             * @param soundcard the #AgsSoundcard
             */
            vfunc_unregister_soundcard(soundcard: GObject.Object): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface SoundServerNamespace {
        $gtype: GObject.GType<SoundServer>;
        prototype: SoundServer;
    }
    interface SoundServer extends GObject.Object, SoundServer.Interface {
        // Methods

        /**
         * Gets the ports of `sound_server`.
         * @param port_count the number of ports returned
         * @returns the port as string %NULL-terminated array
         */
        get_ports(port_count: number): number;
        /**
         * Gets the sequencer of `sound_server` associated with `client_uuid`.
         * @param client_uuid the client uuid
         * @returns the sequencer as #GList-struct
         */
        get_sequencer(client_uuid: string): GObject.Object[];
        /**
         * Gets the soundcard of `sound_server` associated with `client_uuid`.
         * @param client_uuid the client uuid
         * @returns the soundcard as #GList-struct
         */
        get_soundcard(client_uuid: string): GObject.Object[];
        /**
         * Gets the URL of `sound_server`.
         * @returns the URL as string
         */
        get_url(): string;
        /**
         * Fetches `sequencer` of `sound_server`.
         * @param is_output if %TRUE the used as sink, else as source
         * @returns a new #AgsSequencer
         */
        register_sequencer<T = GObject.Object>(is_output: boolean): T;
        /**
         * Fetches `soundcard` of `sound_server`.
         * @param is_output if %TRUE the used as sink, else as source
         * @returns a new #AgsSoundcard
         */
        register_soundcard<T = GObject.Object>(is_output: boolean): T;
        set_ports(port: number, port_count: number): void;
        /**
         * Sets the sequencer at `client_uuid`.
         * @param client_uuid the location to fetch from
         * @param sequencer the sequencer to set
         */
        set_sequencer(client_uuid: string, sequencer: GObject.Object[]): void;
        /**
         * Sets the soundcard at `client_uuid`.
         * @param client_uuid the location to fetch from
         * @param soundcard the soundcard to set
         */
        set_soundcard(client_uuid: string, soundcard: GObject.Object[]): void;
        /**
         * Sets the url of `sound_server`.
         * @param url the url to set
         */
        set_url(url: string): void;
        /**
         * Releases `sequencer` in `sound_server`.
         * @param sequencer the #AgsSequencer
         */
        unregister_sequencer(sequencer: GObject.Object): void;
        /**
         * Releases `soundcard` in `sound_server`.
         * @param soundcard the #AgsSoundcard
         */
        unregister_soundcard(soundcard: GObject.Object): void;
    }

    export const SoundServer: SoundServerNamespace & {
        new (): SoundServer; // This allows `obj instanceof SoundServer`
    };

    namespace Soundcard {
        /**
         * Interface for implementing Soundcard.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Get current playback delay.
             */
            vfunc_get_absolute_delay(): number;
            /**
             * Get current playback attack.
             */
            vfunc_get_attack(): number;
            /**
             * Get current playback bpm.
             */
            vfunc_get_bpm(): number;
            /**
             * Get current playback buffer.
             */
            vfunc_get_buffer(): any | null;
            /**
             * Retrieve #AgsSoundcardCapability-enum information.
             */
            vfunc_get_capability(): SoundcardCapability;
            /**
             * Get current playback delay.
             */
            vfunc_get_delay(): number;
            /**
             * Get current playback note offset.
             */
            vfunc_get_delay_counter(): number;
            /**
             * Get current playback delay factor.
             */
            vfunc_get_delay_factor(): number;
            /**
             * Get device.
             */
            vfunc_get_device(): string;
            /**
             * Get loop parameters of `soundcard`.
             */
            vfunc_get_loop(): [number, number, boolean];
            /**
             * Get current playback loop offset.
             */
            vfunc_get_loop_offset(): number;
            /**
             * Get future playback buffer.
             */
            vfunc_get_next_buffer(): any | null;
            /**
             * Get current playback note 256th attack.
             * @param note_256th_attack_lower the return location of attack lower range
             * @param note_256th_attack_upper the return location of attack upper range
             */
            vfunc_get_note_256th_attack(note_256th_attack_lower: number, note_256th_attack_upper: number): void;
            /**
             * Get current playback note 256th attack position within 16 times %AGS_SOUNDCARD_DEFAULT_PERIOD.
             * @param note_256th_attack_position the note 256th attack position
             */
            vfunc_get_note_256th_attack_at_position(note_256th_attack_position: number): number;
            /**
             * Get note 256th attack of current 16th pulse.
             */
            vfunc_get_note_256th_attack_of_16th_pulse(): number;
            /**
             * Get note 256th attack position of current 16th pulse.
             */
            vfunc_get_note_256th_attack_of_16th_pulse_position(): number;
            /**
             * Get current playback note 256th attack position within 16 times %AGS_SOUNDCARD_DEFAULT_PERIOD.
             * @param note_256th_attack_position_lower the return location of attack position lower range
             * @param note_256th_attack_position_upper the return location of attack position upper range
             */
            vfunc_get_note_256th_attack_position(
                note_256th_attack_position_lower: number,
                note_256th_attack_position_upper: number,
            ): void;
            /**
             * Get current playback note 256th offset.
             * @param note_256th_offset_lower the return location of offset lower range
             * @param note_256th_offset_upper the return location of offset upper range
             */
            vfunc_get_note_256th_offset(note_256th_offset_lower: number, note_256th_offset_upper: number): void;
            /**
             * Get current playback note offset.
             */
            vfunc_get_note_offset(): number;
            /**
             * Get current playback note offset.
             */
            vfunc_get_note_offset_absolute(): number;
            /**
             * Get presets.
             */
            vfunc_get_presets(): [number, number, number, SoundcardFormat];
            /**
             * Get future playback buffer.
             */
            vfunc_get_prev_buffer(): any | null;
            /**
             * Get start playback note offset.
             */
            vfunc_get_start_note_offset(): number;
            /**
             * Get sub block count.
             */
            vfunc_get_sub_block_count(): number;
            /**
             * Get playback time as string.
             */
            vfunc_get_uptime(): string;
            /**
             * Get available.
             */
            vfunc_is_available(): boolean;
            /**
             * Get playing.
             */
            vfunc_is_playing(): boolean;
            /**
             * Get recording.
             */
            vfunc_is_recording(): boolean;
            /**
             * Get starting.
             */
            vfunc_is_starting(): boolean;
            /**
             * Retrieve `card_id` and `card_name` as a list of strings.
             */
            vfunc_list_cards(): [string[], string[]];
            /**
             * Lock `buffer`.
             * @param buffer the buffer to lock
             */
            vfunc_lock_buffer(buffer?: any | null): void;
            /**
             * Callback when counter expires minor note offset.
             * @param note_offset the current note offset
             */
            vfunc_offset_changed(note_offset: number): void;
            /**
             * Retrieve detailed information of `card_id` soundcard.
             * @param card_id the selected soundcard by its string identifier
             */
            vfunc_pcm_info(card_id: string): [number, number, number, number, number, number];
            /**
             * Plays the current buffer of soundcard.
             */
            vfunc_play(): void;
            /**
             * Initializes the soundcard for playback.
             */
            vfunc_play_init(): void;
            /**
             * Records the current buffer of soundcard.
             */
            vfunc_record(): void;
            /**
             * Initializes the soundcard for recordback.
             */
            vfunc_record_init(): void;
            /**
             * Set current playback bpm.
             * @param bpm the bpm to set
             */
            vfunc_set_bpm(bpm: number): void;
            /**
             * Set current playback delay factor.
             * @param delay_factor the delay factor to set
             */
            vfunc_set_delay_factor(delay_factor: number): void;
            /**
             * Set device.
             * @param card_id the device to set
             */
            vfunc_set_device(card_id: string): void;
            /**
             * Set loop parameters of `soundcard`.
             * @param loop_left loop position of region
             * @param loop_right loop position of region
             * @param do_loop if %TRUE do loop, else don't loop
             */
            vfunc_set_loop(loop_left: number, loop_right: number, do_loop: boolean): void;
            /**
             * Set current playback note offset.
             * @param note_offset the note offset to set
             */
            vfunc_set_note_offset(note_offset: number): void;
            /**
             * Set current playback note offset.
             * @param note_offset the note offset to set
             */
            vfunc_set_note_offset_absolute(note_offset: number): void;
            /**
             * Set presets.
             * @param channels the audio channels
             * @param rate the samplerate
             * @param buffer_size the buffer size
             * @param format the format
             */
            vfunc_set_presets(channels: number, rate: number, buffer_size: number, format: SoundcardFormat): void;
            /**
             * Set start playback note offset.
             * @param start_note_offset the start note offset to set
             */
            vfunc_set_start_note_offset(start_note_offset: number): void;
            /**
             * Stops the soundcard from playing to it.
             */
            vfunc_stop(): void;
            /**
             * Every call to play may generate a tic.
             */
            vfunc_tic(): void;
            /**
             * Trylock sub block.
             * @param buffer the buffer to lock
             * @param sub_block and its sub block
             */
            vfunc_trylock_sub_block(buffer: any | null, sub_block: number): boolean;
            /**
             * Unlock `buffer`.
             * @param buffer the buffer to unlock
             */
            vfunc_unlock_buffer(buffer?: any | null): void;
            /**
             * Unlock sub block.
             * @param buffer the buffer to lock
             * @param sub_block and its sub block
             */
            vfunc_unlock_sub_block(buffer: any | null, sub_block: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface SoundcardNamespace {
        $gtype: GObject.GType<Soundcard>;
        prototype: Soundcard;

        /**
         * Get buffer size.
         * @param config the #AgsConfig
         */
        helper_config_get_buffer_size(config: Config): number;
        /**
         * Get cache buffer size.
         * @param config the #AgsConfig
         */
        helper_config_get_cache_buffer_size(config: Config): number;
        /**
         * Get dsp channels count.
         * @param config the #AgsConfig
         */
        helper_config_get_dsp_channels(config: Config): number;
        /**
         * Get format as #AgsSoundcardFormat-enum.
         * @param config the #AgsConfig
         */
        helper_config_get_format(config: Config): number;
        /**
         * Get pcm channels count.
         * @param config the #AgsConfig
         */
        helper_config_get_pcm_channels(config: Config): number;
        /**
         * Get samplerate.
         * @param config the #AgsConfig
         */
        helper_config_get_samplerate(config: Config): number;
        /**
         * Get use cache.
         * @param config the #AgsConfig
         */
        helper_config_get_use_cache(config: Config): boolean;
    }
    interface Soundcard extends GObject.Object, Soundcard.Interface {
        // Methods

        /**
         * Get current playback delay.
         * @returns delay
         */
        get_absolute_delay(): number;
        /**
         * Get current playback attack.
         * @returns attack
         */
        get_attack(): number;
        /**
         * Get current playback bpm.
         * @returns bpm
         */
        get_bpm(): number;
        /**
         * Get current playback buffer.
         * @returns current playback buffer
         */
        get_buffer(): any | null;
        /**
         * Retrieve #AgsSoundcardCapability-enum information.
         * @returns the capablities flags
         */
        get_capability(): SoundcardCapability;
        /**
         * Get current playback delay.
         * @returns delay
         */
        get_delay(): number;
        /**
         * Get current playback note offset.
         * @returns offset
         */
        get_delay_counter(): number;
        /**
         * Get current playback delay factor.
         * @returns delay factor
         */
        get_delay_factor(): number;
        /**
         * Get device.
         * @returns the device's identifier
         */
        get_device(): string;
        /**
         * Get loop parameters of `soundcard`.
         */
        get_loop(): [number, number, boolean];
        /**
         * Get current playback loop offset.
         * @returns offset
         */
        get_loop_offset(): number;
        /**
         * Get future playback buffer.
         * @returns next playback buffer
         */
        get_next_buffer(): any | null;
        /**
         * Get current playback note 256th attack.
         * @param note_256th_attack_lower the return location of attack lower range
         * @param note_256th_attack_upper the return location of attack upper range
         */
        get_note_256th_attack(note_256th_attack_lower: number, note_256th_attack_upper: number): void;
        /**
         * Get current playback note 256th attack position within 16 times %AGS_SOUNDCARD_DEFAULT_PERIOD.
         * @param note_256th_attack_position the note 256th attack position
         */
        get_note_256th_attack_at_position(note_256th_attack_position: number): number;
        /**
         * Get note 256th attack of current 16th pulse.
         * @returns the note 256th attack of 16th pulse
         */
        get_note_256th_attack_of_16th_pulse(): number;
        /**
         * Get note 256th attack position of current 16th pulse.
         * @returns the note 256th attack position of 16th pulse
         */
        get_note_256th_attack_of_16th_pulse_position(): number;
        /**
         * Get current playback note 256th attack position within 16 times %AGS_SOUNDCARD_DEFAULT_PERIOD.
         * @param note_256th_attack_position_lower the return location of attack position lower range
         * @param note_256th_attack_position_upper the return location of attack position upper range
         */
        get_note_256th_attack_position(
            note_256th_attack_position_lower: number,
            note_256th_attack_position_upper: number,
        ): void;
        /**
         * Get current playback note 256th offset.
         * @param note_256th_offset_lower the return location of offset lower range
         * @param note_256th_offset_upper the return location of offset upper range
         */
        get_note_256th_offset(note_256th_offset_lower: number, note_256th_offset_upper: number): void;
        /**
         * Get current playback note offset.
         * @returns the current note offset
         */
        get_note_offset(): number;
        /**
         * Get current playback note offset.
         * @returns offset
         */
        get_note_offset_absolute(): number;
        /**
         * Get presets.
         */
        get_presets(): [number, number, number, SoundcardFormat];
        /**
         * Get future playback buffer.
         * @returns prev playback buffer
         */
        get_prev_buffer(): any | null;
        /**
         * Get start playback note offset.
         * @returns the start note offset
         */
        get_start_note_offset(): number;
        /**
         * Get sub block count.
         * @returns the sub block count
         */
        get_sub_block_count(): number;
        /**
         * Get playback time as string.
         * @returns playback time as string
         */
        get_uptime(): string;
        /**
         * Get available.
         * @returns %TRUE if available, else %FALSE
         */
        is_available(): boolean;
        /**
         * Get playing.
         * @returns %TRUE if playing, else %FALSE
         */
        is_playing(): boolean;
        /**
         * Get recording.
         * @returns %TRUE if recording, else %FALSE
         */
        is_recording(): boolean;
        /**
         * Get starting.
         * @returns %TRUE if starting, else %FALSE
         */
        is_starting(): boolean;
        /**
         * Retrieve `card_id` and `card_name` as a list of strings.
         */
        list_cards(): [string[], string[]];
        /**
         * Lock `buffer`.
         * @param buffer the buffer to lock
         */
        lock_buffer(buffer?: any | null): void;
        /**
         * Callback when counter expires minor note offset.
         * @param note_offset the current note offset
         */
        offset_changed(note_offset: number): void;
        /**
         * Retrieve detailed information of `card_id` soundcard.
         * @param card_id the selected soundcard by its string identifier
         */
        pcm_info(card_id: string): [number, number, number, number, number, number];
        /**
         * Plays the current buffer of soundcard.
         */
        play(): void;
        /**
         * Initializes the soundcard for playback.
         */
        play_init(): void;
        /**
         * Records the current buffer of soundcard.
         */
        record(): void;
        /**
         * Initializes the soundcard for recordback.
         */
        record_init(): void;
        /**
         * Set current playback bpm.
         * @param bpm the bpm to set
         */
        set_bpm(bpm: number): void;
        /**
         * Set current playback delay factor.
         * @param delay_factor the delay factor to set
         */
        set_delay_factor(delay_factor: number): void;
        /**
         * Set device.
         * @param card_id the device to set
         */
        set_device(card_id: string): void;
        /**
         * Set loop parameters of `soundcard`.
         * @param loop_left loop position of region
         * @param loop_right loop position of region
         * @param do_loop if %TRUE do loop, else don't loop
         */
        set_loop(loop_left: number, loop_right: number, do_loop: boolean): void;
        /**
         * Set current playback note offset.
         * @param note_offset the note offset to set
         */
        set_note_offset(note_offset: number): void;
        /**
         * Set current playback note offset.
         * @param note_offset the note offset to set
         */
        set_note_offset_absolute(note_offset: number): void;
        /**
         * Set presets.
         * @param channels the audio channels
         * @param rate the samplerate
         * @param buffer_size the buffer size
         * @param format the format
         */
        set_presets(channels: number, rate: number, buffer_size: number, format: SoundcardFormat | null): void;
        /**
         * Set start playback note offset.
         * @param start_note_offset the start note offset to set
         */
        set_start_note_offset(start_note_offset: number): void;
        /**
         * Stops the soundcard from playing to it.
         */
        stop(): void;
        /**
         * Every call to play may generate a tic.
         */
        tic(): void;
        /**
         * Trylock sub block.
         * @param buffer the buffer to lock
         * @param sub_block and its sub block
         * @returns %TRUE on success, otherwise %FALSE
         */
        trylock_sub_block(buffer: any | null, sub_block: number): boolean;
        /**
         * Unlock `buffer`.
         * @param buffer the buffer to unlock
         */
        unlock_buffer(buffer?: any | null): void;
        /**
         * Unlock sub block.
         * @param buffer the buffer to lock
         * @param sub_block and its sub block
         */
        unlock_sub_block(buffer: any | null, sub_block: number): void;
    }

    export const Soundcard: SoundcardNamespace & {
        new (): Soundcard; // This allows `obj instanceof Soundcard`
    };

    namespace Tactable {
        /**
         * Interface for implementing Tactable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Change bpm.
             * @param new_bpm the new bpm
             * @param old_bpm the old bpm
             */
            vfunc_change_bpm(new_bpm: number, old_bpm: number): void;
            /**
             * Change midi duration.
             * @param midi_duration the duration
             */
            vfunc_change_midi_duration(midi_duration: number): void;
            /**
             * Change notation duration.
             * @param notation_duration the duration
             */
            vfunc_change_notation_duration(notation_duration: number): void;
            /**
             * Change sequencer duration.
             * @param sequencer_duration the duration
             */
            vfunc_change_sequencer_duration(sequencer_duration: number): void;
            /**
             * Change tact.
             * @param new_tact the new tact
             * @param old_tact the old tact
             */
            vfunc_change_tact(new_tact: number, old_tact: number): void;
            /**
             * Change wave duration.
             * @param wave_duration the duration
             */
            vfunc_change_wave_duration(wave_duration: number): void;
            /**
             * Get bpm.
             */
            vfunc_get_bpm(): number;
            /**
             * Get midi duration.
             */
            vfunc_get_midi_duration(): number;
            /**
             * Get notation duration.
             */
            vfunc_get_notation_duration(): number;
            /**
             * Get sequencer duration.
             */
            vfunc_get_sequencer_duration(): number;
            /**
             * Get tact.
             */
            vfunc_get_tact(): number;
            /**
             * Get wave duration.
             */
            vfunc_get_wave_duration(): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface TactableNamespace {
        $gtype: GObject.GType<Tactable>;
        prototype: Tactable;
    }
    interface Tactable extends GObject.Object, Tactable.Interface {
        // Methods

        /**
         * Change bpm.
         * @param new_bpm the new bpm
         * @param old_bpm the old bpm
         */
        change_bpm(new_bpm: number, old_bpm: number): void;
        /**
         * Change midi duration.
         * @param midi_duration the duration
         */
        change_midi_duration(midi_duration: number): void;
        /**
         * Change notation duration.
         * @param notation_duration the duration
         */
        change_notation_duration(notation_duration: number): void;
        /**
         * Change sequencer duration.
         * @param sequencer_duration the duration
         */
        change_sequencer_duration(sequencer_duration: number): void;
        /**
         * Change tact.
         * @param new_tact the new tact
         * @param old_tact the old tact
         */
        change_tact(new_tact: number, old_tact: number): void;
        /**
         * Change wave duration.
         * @param wave_duration the duration
         */
        change_wave_duration(wave_duration: number): void;
        /**
         * Get bpm.
         * @returns the bpm
         */
        get_bpm(): number;
        /**
         * Get midi duration.
         * @returns the midi duration
         */
        get_midi_duration(): number;
        /**
         * Get notation duration.
         * @returns the notation duration
         */
        get_notation_duration(): number;
        /**
         * Get sequencer duration.
         * @returns the sequencer duration
         */
        get_sequencer_duration(): number;
        /**
         * Get tact.
         * @returns the tact
         */
        get_tact(): number;
        /**
         * Get wave duration.
         * @returns the wave duration
         */
        get_wave_duration(): number;
    }

    export const Tactable: TactableNamespace & {
        new (): Tactable; // This allows `obj instanceof Tactable`
    };

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

export default Ags;

// END
