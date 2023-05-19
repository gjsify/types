
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gstaudio-1.0-ambient.d.ts';
import './gstaudio-1.0-import.d.ts';
/**
 * GstAudio-1.0
 */

import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

/**
 * Different possible reasons for discontinuities. This enum is useful for the custom
 * slave method.
 */
export enum AudioBaseSinkDiscontReason {
    /**
     * No discontinuity occurred
     */
    NO_DISCONT,
    /**
     * New caps are set, causing renegotiotion
     */
    NEW_CAPS,
    /**
     * Samples have been flushed
     */
    FLUSH,
    /**
     * Sink was synchronized to the estimated latency (occurs during initialization)
     */
    SYNC_LATENCY,
    /**
     * Aligning buffers failed because the timestamps are too discontinuous
     */
    ALIGNMENT,
    /**
     * Audio output device experienced and recovered from an error but introduced latency in the process (see also gst_audio_base_sink_report_device_failure())
     */
    DEVICE_FAILURE,
}
/**
 * Different possible clock slaving algorithms used when the internal audio
 * clock is not selected as the pipeline master clock.
 */
export enum AudioBaseSinkSlaveMethod {
    /**
     * Resample to match the master clock
     */
    RESAMPLE,
    /**
     * Adjust playout pointer when master clock
     * drifts too much.
     */
    SKEW,
    /**
     * No adjustment is done.
     */
    NONE,
    /**
     * Use custom clock slaving algorithm (Since: 1.6)
     */
    CUSTOM,
}
/**
 * Different possible clock slaving algorithms when the internal audio clock was
 * not selected as the pipeline clock.
 */
export enum AudioBaseSrcSlaveMethod {
    /**
     * Resample to match the master clock.
     */
    RESAMPLE,
    /**
     * Retimestamp output buffers with master
     * clock time.
     */
    RE_TIMESTAMP,
    /**
     * Adjust capture pointer when master clock
     * drifts too much.
     */
    SKEW,
    /**
     * No adjustment is done.
     */
    NONE,
}
/**
 * Mode in which the CD audio source operates. Influences timestamping,
 * EOS handling and seeking.
 */
export enum AudioCdSrcMode {
    /**
     * each single track is a stream
     */
    NORMAL,
    /**
     * the entire disc is a single stream
     */
    CONTINUOUS,
}
/**
 * Audio channel positions.
 * 
 * These are the channels defined in SMPTE 2036-2-2008
 * Table 1 for 22.2 audio systems with the Surround and Wide channels from
 * DTS Coherent Acoustics (v.1.3.1) and 10.2 and 7.1 layouts. In the caps the
 * actual channel layout is expressed with a channel count and a channel mask,
 * which describes the existing channels. The positions in the bit mask correspond
 * to the enum values.
 * For negotiation it is allowed to have more bits set in the channel mask than
 * the number of channels to specify the allowed channel positions but this is
 * not allowed in negotiated caps. It is not allowed in any situation other
 * than the one mentioned below to have less bits set in the channel mask than
 * the number of channels.
 * 
 * `GST_AUDIO_CHANNEL_POSITION_MONO` can only be used with a single mono channel that
 * has no direction information and would be mixed into all directional channels.
 * This is expressed in caps by having a single channel and no channel mask.
 * 
 * `GST_AUDIO_CHANNEL_POSITION_NONE` can only be used if all channels have this position.
 * This is expressed in caps by having a channel mask with no bits set.
 * 
 * As another special case it is allowed to have two channels without a channel mask.
 * This implicitly means that this is a stereo stream with a front left and front right
 * channel.
 */
export enum AudioChannelPosition {
    /**
     * used for position-less channels, e.g.
     *     from a sound card that records 1024 channels; mutually exclusive with
     *     any other channel position
     */
    NONE,
    /**
     * Mono without direction;
     *     can only be used with 1 channel
     */
    MONO,
    /**
     * invalid position
     */
    INVALID,
    /**
     * Front left
     */
    FRONT_LEFT,
    /**
     * Front right
     */
    FRONT_RIGHT,
    /**
     * Front center
     */
    FRONT_CENTER,
    /**
     * Low-frequency effects 1 (subwoofer)
     */
    LFE1,
    /**
     * Rear left
     */
    REAR_LEFT,
    /**
     * Rear right
     */
    REAR_RIGHT,
    /**
     * Front left of center
     */
    FRONT_LEFT_OF_CENTER,
    /**
     * Front right of center
     */
    FRONT_RIGHT_OF_CENTER,
    /**
     * Rear center
     */
    REAR_CENTER,
    /**
     * Low-frequency effects 2 (subwoofer)
     */
    LFE2,
    /**
     * Side left
     */
    SIDE_LEFT,
    /**
     * Side right
     */
    SIDE_RIGHT,
    /**
     * Top front left
     */
    TOP_FRONT_LEFT,
    /**
     * Top front right
     */
    TOP_FRONT_RIGHT,
    /**
     * Top front center
     */
    TOP_FRONT_CENTER,
    /**
     * Top center
     */
    TOP_CENTER,
    /**
     * Top rear left
     */
    TOP_REAR_LEFT,
    /**
     * Top rear right
     */
    TOP_REAR_RIGHT,
    /**
     * Top side right
     */
    TOP_SIDE_LEFT,
    /**
     * Top rear right
     */
    TOP_SIDE_RIGHT,
    /**
     * Top rear center
     */
    TOP_REAR_CENTER,
    /**
     * Bottom front center
     */
    BOTTOM_FRONT_CENTER,
    /**
     * Bottom front left
     */
    BOTTOM_FRONT_LEFT,
    /**
     * Bottom front right
     */
    BOTTOM_FRONT_RIGHT,
    /**
     * Wide left (between front left and side left)
     */
    WIDE_LEFT,
    /**
     * Wide right (between front right and side right)
     */
    WIDE_RIGHT,
    /**
     * Surround left (between rear left and side left)
     */
    SURROUND_LEFT,
    /**
     * Surround right (between rear right and side right)
     */
    SURROUND_RIGHT,
}
/**
 * Set of available dithering methods.
 */
export enum AudioDitherMethod {
    /**
     * No dithering
     */
    NONE,
    /**
     * Rectangular dithering
     */
    RPDF,
    /**
     * Triangular dithering (default)
     */
    TPDF,
    /**
     * High frequency triangular dithering
     */
    TPDF_HF,
}
/**
 * Enum value describing the most common audio formats.
 */
export enum AudioFormat {
    /**
     * unknown or unset audio format
     */
    UNKNOWN,
    /**
     * encoded audio format
     */
    ENCODED,
    /**
     * 8 bits in 8 bits, signed
     */
    S8,
    /**
     * 8 bits in 8 bits, unsigned
     */
    U8,
    /**
     * 16 bits in 16 bits, signed, little endian
     */
    S16LE,
    /**
     * 16 bits in 16 bits, signed, big endian
     */
    S16BE,
    /**
     * 16 bits in 16 bits, unsigned, little endian
     */
    U16LE,
    /**
     * 16 bits in 16 bits, unsigned, big endian
     */
    U16BE,
    /**
     * 24 bits in 32 bits, signed, little endian
     */
    S24_32LE,
    /**
     * 24 bits in 32 bits, signed, big endian
     */
    S24_32BE,
    /**
     * 24 bits in 32 bits, unsigned, little endian
     */
    U24_32LE,
    /**
     * 24 bits in 32 bits, unsigned, big endian
     */
    U24_32BE,
    /**
     * 32 bits in 32 bits, signed, little endian
     */
    S32LE,
    /**
     * 32 bits in 32 bits, signed, big endian
     */
    S32BE,
    /**
     * 32 bits in 32 bits, unsigned, little endian
     */
    U32LE,
    /**
     * 32 bits in 32 bits, unsigned, big endian
     */
    U32BE,
    /**
     * 24 bits in 24 bits, signed, little endian
     */
    S24LE,
    /**
     * 24 bits in 24 bits, signed, big endian
     */
    S24BE,
    /**
     * 24 bits in 24 bits, unsigned, little endian
     */
    U24LE,
    /**
     * 24 bits in 24 bits, unsigned, big endian
     */
    U24BE,
    /**
     * 20 bits in 24 bits, signed, little endian
     */
    S20LE,
    /**
     * 20 bits in 24 bits, signed, big endian
     */
    S20BE,
    /**
     * 20 bits in 24 bits, unsigned, little endian
     */
    U20LE,
    /**
     * 20 bits in 24 bits, unsigned, big endian
     */
    U20BE,
    /**
     * 18 bits in 24 bits, signed, little endian
     */
    S18LE,
    /**
     * 18 bits in 24 bits, signed, big endian
     */
    S18BE,
    /**
     * 18 bits in 24 bits, unsigned, little endian
     */
    U18LE,
    /**
     * 18 bits in 24 bits, unsigned, big endian
     */
    U18BE,
    /**
     * 32-bit floating point samples, little endian
     */
    F32LE,
    /**
     * 32-bit floating point samples, big endian
     */
    F32BE,
    /**
     * 64-bit floating point samples, little endian
     */
    F64LE,
    /**
     * 64-bit floating point samples, big endian
     */
    F64BE,
    /**
     * 16 bits in 16 bits, signed, native endianness
     */
    S16,
    /**
     * 16 bits in 16 bits, unsigned, native endianness
     */
    U16,
    /**
     * 24 bits in 32 bits, signed, native endianness
     */
    S24_32,
    /**
     * 24 bits in 32 bits, unsigned, native endianness
     */
    U24_32,
    /**
     * 32 bits in 32 bits, signed, native endianness
     */
    S32,
    /**
     * 32 bits in 32 bits, unsigned, native endianness
     */
    U32,
    /**
     * 24 bits in 24 bits, signed, native endianness
     */
    S24,
    /**
     * 24 bits in 24 bits, unsigned, native endianness
     */
    U24,
    /**
     * 20 bits in 24 bits, signed, native endianness
     */
    S20,
    /**
     * 20 bits in 24 bits, unsigned, native endianness
     */
    U20,
    /**
     * 18 bits in 24 bits, signed, native endianness
     */
    S18,
    /**
     * 18 bits in 24 bits, unsigned, native endianness
     */
    U18,
    /**
     * 32-bit floating point samples, native endianness
     */
    F32,
    /**
     * 64-bit floating point samples, native endianness
     */
    F64,
}
/**
 * Layout of the audio samples for the different channels.
 */
export enum AudioLayout {
    /**
     * interleaved audio
     */
    INTERLEAVED,
    /**
     * non-interleaved audio
     */
    NON_INTERLEAVED,
}
/**
 * Set of available noise shaping methods
 */
export enum AudioNoiseShapingMethod {
    /**
     * No noise shaping (default)
     */
    NONE,
    /**
     * Error feedback
     */
    ERROR_FEEDBACK,
    /**
     * Simple 2-pole noise shaping
     */
    SIMPLE,
    /**
     * Medium 5-pole noise shaping
     */
    MEDIUM,
    /**
     * High 8-pole noise shaping
     */
    HIGH,
}
/**
 * The different filter interpolation methods.
 */
export enum AudioResamplerFilterInterpolation {
    /**
     * no interpolation
     */
    NONE,
    /**
     * linear interpolation of the
     *   filter coefficients.
     */
    LINEAR,
    /**
     * cubic interpolation of the
     *   filter coefficients.
     */
    CUBIC,
}
/**
 * Select for the filter tables should be set up.
 */
export enum AudioResamplerFilterMode {
    /**
     * Use interpolated filter tables. This
     *     uses less memory but more CPU and is slightly less accurate but it allows for more
     *     efficient variable rate resampling with gst_audio_resampler_update().
     */
    INTERPOLATED,
    /**
     * Use full filter table. This uses more memory
     *     but less CPU.
     */
    FULL,
    /**
     * Automatically choose between interpolated
     *     and full filter tables.
     */
    AUTO,
}
/**
 * Different subsampling and upsampling methods
 */
export enum AudioResamplerMethod {
    /**
     * Duplicates the samples when
     *    upsampling and drops when downsampling
     */
    NEAREST,
    /**
     * Uses linear interpolation to reconstruct
     *    missing samples and averaging to downsample
     */
    LINEAR,
    /**
     * Uses cubic interpolation
     */
    CUBIC,
    /**
     * Uses Blackman-Nuttall windowed sinc interpolation
     */
    BLACKMAN_NUTTALL,
    /**
     * Uses Kaiser windowed sinc interpolation
     */
    KAISER,
}
/**
 * The format of the samples in the ringbuffer.
 */
export enum AudioRingBufferFormatType {
    /**
     * samples in linear or float
     */
    RAW,
    /**
     * samples in mulaw
     */
    MU_LAW,
    /**
     * samples in alaw
     */
    A_LAW,
    /**
     * samples in ima adpcm
     */
    IMA_ADPCM,
    /**
     * samples in mpeg audio (but not AAC) format
     */
    MPEG,
    /**
     * samples in gsm format
     */
    GSM,
    /**
     * samples in IEC958 frames (e.g. AC3)
     */
    IEC958,
    /**
     * samples in AC3 format
     */
    AC3,
    /**
     * samples in EAC3 format
     */
    EAC3,
    /**
     * samples in DTS format
     */
    DTS,
    /**
     * samples in MPEG-2 AAC ADTS format
     */
    MPEG2_AAC,
    /**
     * samples in MPEG-4 AAC ADTS format
     */
    MPEG4_AAC,
    /**
     * samples in MPEG-2 AAC raw format (Since: 1.12)
     */
    MPEG2_AAC_RAW,
    /**
     * samples in MPEG-4 AAC raw format (Since: 1.12)
     */
    MPEG4_AAC_RAW,
    /**
     * samples in FLAC format (Since: 1.12)
     */
    FLAC,
}
/**
 * The state of the ringbuffer.
 */
export enum AudioRingBufferState {
    /**
     * The ringbuffer is stopped
     */
    STOPPED,
    /**
     * The ringbuffer is paused
     */
    PAUSED,
    /**
     * The ringbuffer is started
     */
    STARTED,
    /**
     * The ringbuffer has encountered an
     *     error after it has been started, e.g. because the device was
     *     disconnected (Since: 1.2)
     */
    ERROR,
}
/**
 * Different representations of a stream volume. gst_stream_volume_convert_volume()
 * allows to convert between the different representations.
 * 
 * Formulas to convert from a linear to a cubic or dB volume are
 * cbrt(val) and 20 * log10 (val).
 */
export enum StreamVolumeFormat {
    /**
     * Linear scale factor, 1.0 = 100%
     */
    LINEAR,
    /**
     * Cubic volume scale
     */
    CUBIC,
    /**
     * Logarithmic volume scale (dB, amplitude not power)
     */
    DB,
}
/**
 * Flags passed to gst_audio_channel_mixer_new()
 * @bitfield 
 */
export enum AudioChannelMixerFlags {
    /**
     * no flag
     */
    NONE,
    /**
     * input channels are not interleaved
     */
    NON_INTERLEAVED_IN,
    /**
     * output channels are not interleaved
     */
    NON_INTERLEAVED_OUT,
    /**
     * input channels are explicitly unpositioned
     */
    UNPOSITIONED_IN,
    /**
     * output channels are explicitly unpositioned
     */
    UNPOSITIONED_OUT,
}
/**
 * Extra flags passed to gst_audio_converter_new() and gst_audio_converter_samples().
 * @bitfield 
 */
export enum AudioConverterFlags {
    /**
     * no flag
     */
    NONE,
    /**
     * the input sample arrays are writable and can be
     *    used as temporary storage during conversion.
     */
    IN_WRITABLE,
    /**
     * allow arbitrary rate updates with
     *    gst_audio_converter_update_config().
     */
    VARIABLE_RATE,
}
/**
 * Extra audio flags
 * @bitfield 
 */
export enum AudioFlags {
    /**
     * no valid flag
     */
    NONE,
    /**
     * the position array explicitly
     *     contains unpositioned channels.
     */
    UNPOSITIONED,
}
/**
 * The different audio flags that a format info can have.
 * @bitfield 
 */
export enum AudioFormatFlags {
    /**
     * integer samples
     */
    INTEGER,
    /**
     * float samples
     */
    FLOAT,
    /**
     * signed samples
     */
    SIGNED,
    /**
     * complex layout
     */
    COMPLEX,
    /**
     * the format can be used in
     * #GstAudioFormatUnpack and #GstAudioFormatPack functions
     */
    UNPACK,
}
/**
 * The different flags that can be used when packing and unpacking.
 * @bitfield 
 */
export enum AudioPackFlags {
    /**
     * No flag
     */
    NONE,
    /**
     * When the source has a smaller depth
     *   than the target format, set the least significant bits of the target
     *   to 0. This is likely slightly faster but less accurate. When this flag
     *   is not specified, the most significant bits of the source are duplicated
     *   in the least significant bits of the destination.
     */
    TRUNCATE_RANGE,
}
/**
 * Extra flags that can be passed to gst_audio_quantize_new()
 * @bitfield 
 */
export enum AudioQuantizeFlags {
    /**
     * no flags
     */
    NONE,
    /**
     * samples are non-interleaved
     */
    NON_INTERLEAVED,
}
/**
 * Different resampler flags.
 * @bitfield 
 */
export enum AudioResamplerFlags {
    /**
     * no flags
     */
    NONE,
    /**
     * input samples are non-interleaved.
     *    an array of blocks of samples, one for each channel, should be passed to the
     *    resample function.
     */
    NON_INTERLEAVED_IN,
    /**
     * output samples are non-interleaved.
     *    an array of blocks of samples, one for each channel, should be passed to the
     *    resample function.
     */
    NON_INTERLEAVED_OUT,
    /**
     * optimize for dynamic updates of the sample
     *    rates with gst_audio_resampler_update(). This will select an interpolating filter
     *    when #GST_AUDIO_RESAMPLER_FILTER_MODE_AUTO is configured.
     */
    VARIABLE_RATE,
}
/**
 * Maximum range of allowed channels, for use in template caps strings.
 */
export const AUDIO_CHANNELS_RANGE: string | null
/**
 * #GstAudioDitherMethod, The dither method to use when
 * changing bit depth.
 * Default is #GST_AUDIO_DITHER_NONE.
 */
export const AUDIO_CONVERTER_OPT_DITHER_METHOD: string | null
/**
 * Threshold for the output bit depth at/below which to apply dithering.
 * 
 * Default is 20 bit.
 */
export const AUDIO_CONVERTER_OPT_DITHER_THRESHOLD: string | null
/**
 * #GST_TYPE_LIST, The channel mapping matrix.
 * 
 * The matrix coefficients must be between -1 and 1: the number of rows is equal
 * to the number of output channels and the number of columns is equal to the
 * number of input channels.
 * 
 * ## Example matrix generation code
 * To generate the matrix using code:
 * 
 * 
 * ```
 * GValue v = G_VALUE_INIT;
 * GValue v2 = G_VALUE_INIT;
 * GValue v3 = G_VALUE_INIT;
 * 
 * g_value_init (&v2, GST_TYPE_ARRAY);
 * g_value_init (&v3, G_TYPE_DOUBLE);
 * g_value_set_double (&v3, 1);
 * gst_value_array_append_value (&v2, &v3);
 * g_value_unset (&v3);
 * [ Repeat for as many double as your input channels - unset and reinit v3 ]
 * g_value_init (&v, GST_TYPE_ARRAY);
 * gst_value_array_append_value (&v, &v2);
 * g_value_unset (&v2);
 * [ Repeat for as many v2's as your output channels - unset and reinit v2]
 * g_object_set_property (G_OBJECT (audiomixmatrix), "matrix", &v);
 * g_value_unset (&v);
 * ```
 * 
 */
export const AUDIO_CONVERTER_OPT_MIX_MATRIX: string | null
/**
 * #GstAudioNoiseShapingMethod, The noise shaping method to use
 * to mask noise from quantization errors.
 * Default is #GST_AUDIO_NOISE_SHAPING_NONE.
 */
export const AUDIO_CONVERTER_OPT_NOISE_SHAPING_METHOD: string | null
/**
 * #G_TYPE_UINT, The quantization amount. Components will be
 * quantized to multiples of this value.
 * Default is 1
 */
export const AUDIO_CONVERTER_OPT_QUANTIZATION: string | null
/**
 * #GstAudioResamplerMethod, The resampler method to use when
 * changing sample rates.
 * Default is #GST_AUDIO_RESAMPLER_METHOD_BLACKMAN_NUTTALL.
 */
export const AUDIO_CONVERTER_OPT_RESAMPLER_METHOD: string | null
/**
 * Default maximum number of errors tolerated before signaling error.
 */
export const AUDIO_DECODER_MAX_ERRORS: number
/**
 * The name of the templates for the sink pad.
 */
export const AUDIO_DECODER_SINK_NAME: string | null
/**
 * The name of the templates for the source pad.
 */
export const AUDIO_DECODER_SRC_NAME: string | null
/**
 * Standard number of channels used in consumer audio.
 */
export const AUDIO_DEF_CHANNELS: number
/**
 * Standard format used in consumer audio.
 */
export const AUDIO_DEF_FORMAT: string | null
/**
 * Standard sampling rate used in consumer audio.
 */
export const AUDIO_DEF_RATE: number
/**
 * the name of the templates for the sink pad
 */
export const AUDIO_ENCODER_SINK_NAME: string | null
/**
 * the name of the templates for the source pad
 */
export const AUDIO_ENCODER_SRC_NAME: string | null
/**
 * List of all audio formats, for use in template caps strings.
 * 
 * Formats are sorted by decreasing "quality", using these criteria by priority:
 *   - depth
 *   - width
 *   - Float > Signed > Unsigned
 *   - native endianness preferred
 */
export const AUDIO_FORMATS_ALL: string | null
/**
 * Maximum range of allowed sample rates, for use in template caps strings.
 */
export const AUDIO_RATE_RANGE: string | null
/**
 * G_TYPE_DOUBLE, B parameter of the cubic filter.
 * Values between 0.0 and 2.0 are accepted. 1.0 is the default.
 * 
 * Below are some values of popular filters:
 *                    B       C
 * Hermite           0.0     0.0
 * Spline            1.0     0.0
 * Catmull-Rom       0.0     1/2
 */
export const AUDIO_RESAMPLER_OPT_CUBIC_B: string | null
/**
 * G_TYPE_DOUBLE, C parameter of the cubic filter.
 * Values between 0.0 and 2.0 are accepted. 0.0 is the default.
 * 
 * See #GST_AUDIO_RESAMPLER_OPT_CUBIC_B for some more common values
 */
export const AUDIO_RESAMPLER_OPT_CUBIC_C: string | null
/**
 * G_TYPE_DOUBLE, Cutoff parameter for the filter. 0.940 is the default.
 */
export const AUDIO_RESAMPLER_OPT_CUTOFF: string | null
/**
 * GST_TYPE_AUDIO_RESAMPLER_INTERPOLATION: how the filter coefficients should be
 *    interpolated.
 * GST_AUDIO_RESAMPLER_FILTER_INTERPOLATION_CUBIC is default.
 */
export const AUDIO_RESAMPLER_OPT_FILTER_INTERPOLATION: string | null
/**
 * GST_TYPE_AUDIO_RESAMPLER_FILTER_MODE: how the filter tables should be
 * constructed.
 * GST_AUDIO_RESAMPLER_FILTER_MODE_AUTO is the default.
 */
export const AUDIO_RESAMPLER_OPT_FILTER_MODE: string | null
/**
 * G_TYPE_UINT: the amount of memory to use for full filter tables before
 * switching to interpolated filter tables.
 * 1048576 is the default.
 */
export const AUDIO_RESAMPLER_OPT_FILTER_MODE_THRESHOLD: string | null
/**
 * G_TYPE_UINT, oversampling to use when interpolating filters
 * 8 is the default.
 */
export const AUDIO_RESAMPLER_OPT_FILTER_OVERSAMPLE: string | null
/**
 * G_TYPE_DOUBLE: The maximum allowed phase error when switching sample
 * rates.
 * 0.1 is the default.
 */
export const AUDIO_RESAMPLER_OPT_MAX_PHASE_ERROR: string | null
/**
 * G_TYPE_INT: the number of taps to use for the filter.
 * 0 is the default and selects the taps automatically.
 */
export const AUDIO_RESAMPLER_OPT_N_TAPS: string | null
/**
 * G_TYPE_DOUBLE, stopband attenuation in decibels. The attenuation
 * after the stopband for the kaiser window. 85 dB is the default.
 */
export const AUDIO_RESAMPLER_OPT_STOP_ATTENUATION: string | null
/**
 * G_TYPE_DOUBLE, transition bandwidth. The width of the
 * transition band for the kaiser window. 0.087 is the default.
 */
export const AUDIO_RESAMPLER_OPT_TRANSITION_BANDWIDTH: string | null
export const AUDIO_RESAMPLER_QUALITY_DEFAULT: number
export const AUDIO_RESAMPLER_QUALITY_MAX: number
export const AUDIO_RESAMPLER_QUALITY_MIN: number
/**
 * This metadata stays relevant as long as channels are unchanged.
 */
export const META_TAG_AUDIO_CHANNELS_STR: string | null
/**
 * This metadata stays relevant as long as sample rate is unchanged.
 */
export const META_TAG_AUDIO_RATE_STR: string | null
/**
 * This metadata is relevant for audio streams.
 */
export const META_TAG_AUDIO_STR: string | null
/**
 * Clip the buffer to the given %GstSegment.
 * 
 * After calling this function the caller does not own a reference to
 * `buffer` anymore.
 * @param buffer The buffer to clip.
 * @param segment Segment in %GST_FORMAT_TIME or %GST_FORMAT_DEFAULT to which           the buffer should be clipped.
 * @param rate sample rate.
 * @param bpf size of one audio frame in bytes. This is the size of one sample * number of channels.
 * @returns %NULL if the buffer is completely outside the configured segment, otherwise the clipped buffer is returned. If the buffer has no timestamp, it is assumed to be inside the segment and is not clipped
 */
export function audio_buffer_clip(buffer: Gst.Buffer, segment: Gst.Segment, rate: number, bpf: number): Gst.Buffer | null
/**
 * Maps an audio `gstbuffer` so that it can be read or written and stores the
 * result of the map operation in `buffer`.
 * 
 * This is especially useful when the `gstbuffer` is in non-interleaved (planar)
 * layout, in which case this function will use the information in the
 * `gstbuffer'`s attached #GstAudioMeta in order to map each channel in a
 * separate "plane" in #GstAudioBuffer. If a #GstAudioMeta is not attached
 * on the `gstbuffer,` then it must be in interleaved layout.
 * 
 * If a #GstAudioMeta is attached, then the #GstAudioInfo on the meta is checked
 * against `info`. Normally, they should be equal, but in case they are not,
 * a g_critical will be printed and the #GstAudioInfo from the meta will be
 * used.
 * 
 * In non-interleaved buffers, it is possible to have each channel on a separate
 * #GstMemory. In this case, each memory will be mapped separately to avoid
 * copying their contents in a larger memory area. Do note though that it is
 * not supported to have a single channel spanning over two or more different
 * #GstMemory objects. Although the map operation will likely succeed in this
 * case, it will be highly sub-optimal and it is recommended to merge all the
 * memories in the buffer before calling this function.
 * 
 * Note: The actual #GstBuffer is not ref'ed, but it is required to stay valid
 * as long as it's mapped.
 * @param info the audio properties of the buffer
 * @param gstbuffer the #GstBuffer to be mapped
 * @param flags the access mode for the memory
 * @returns %TRUE if the map operation succeeded or %FALSE on failure
 */
export function audio_buffer_map(info: AudioInfo, gstbuffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* buffer */ AudioBuffer ]
/**
 * Reorders `buffer` from the channel positions `from` to the channel
 * positions `to`. `from` and `to` must contain the same number of
 * positions and the same positions, only in a different order.
 * `buffer` must be writable.
 * @param buffer The buffer to reorder.
 * @param format The %GstAudioFormat of the buffer.
 * @param from The channel positions in the buffer.
 * @param to The channel positions to convert to.
 * @returns %TRUE if the reordering was possible.
 */
export function audio_buffer_reorder_channels(buffer: Gst.Buffer, format: AudioFormat, from: AudioChannelPosition[], to: AudioChannelPosition[]): boolean
/**
 * Truncate the buffer to finally have `samples` number of samples, removing
 * the necessary amount of samples from the end and `trim` number of samples
 * from the beginning.
 * 
 * This function does not know the audio rate, therefore the caller is
 * responsible for re-setting the correct timestamp and duration to the
 * buffer. However, timestamp will be preserved if trim == 0, and duration
 * will also be preserved if there is no trimming to be done. Offset and
 * offset end will be preserved / updated.
 * 
 * After calling this function the caller does not own a reference to
 * `buffer` anymore.
 * @param buffer The buffer to truncate.
 * @param bpf size of one audio frame in bytes. This is the size of one sample * number of channels.
 * @param trim the number of samples to remove from the beginning of the buffer
 * @param samples the final number of samples that should exist in this buffer or -1 to use all the remaining samples if you are only removing samples from the beginning.
 * @returns the truncated buffer
 */
export function audio_buffer_truncate(buffer: Gst.Buffer, bpf: number, trim: number, samples: number): Gst.Buffer
/**
 * Get the fallback channel-mask for the given number of channels.
 * 
 * This function returns a reasonable fallback channel-mask and should be
 * called as a last resort when the specific channel map is unknown.
 * @param channels the number of channels
 * @returns a fallback channel-mask for @channels or 0 when there is no mask and mono.
 */
export function audio_channel_get_fallback_mask(channels: number): number
/**
 * Convert the `channels` present in `channel_mask` to a `position` array
 * (which should have at least `channels` entries ensured by caller).
 * If `channel_mask` is set to 0, it is considered as 'not present' for purpose
 * of conversion.
 * A partially valid `channel_mask` with less bits set than the number
 * of channels is considered valid.
 * @param channel_mask The input channel_mask
 * @param position The   %GstAudioChannelPosition<!-- -->s
 * @returns %TRUE if channel and channel mask are valid and could be converted
 */
export function audio_channel_positions_from_mask(channel_mask: number, position: AudioChannelPosition[]): boolean
/**
 * Convert the `position` array of `channels` channels to a bitmask.
 * 
 * If `force_order` is %TRUE it additionally checks if the channels are
 * in the order required by GStreamer.
 * @param position The %GstAudioChannelPositions
 * @param force_order Only consider the GStreamer channel order.
 * @returns %TRUE if the channel positions are valid and could be converted.
 */
export function audio_channel_positions_to_mask(position: AudioChannelPosition[], force_order: boolean): [ /* returnType */ boolean, /* channel_mask */ number ]
/**
 * Converts `position` to a human-readable string representation for
 * debugging purposes.
 * @param position The %GstAudioChannelPositions   to convert.
 * @returns a newly allocated string representing @position
 */
export function audio_channel_positions_to_string(position: AudioChannelPosition[]): string | null
/**
 * Reorders the channel positions in `position` from any order to
 * the GStreamer channel order.
 * @param position The channel positions to   reorder to.
 * @returns %TRUE if the channel positions are valid and reordering was successful.
 */
export function audio_channel_positions_to_valid_order(position: AudioChannelPosition[]): boolean
/**
 * Checks if `position` contains valid channel positions for
 * `channels` channels. If `force_order` is %TRUE it additionally
 * checks if the channels are in the order required by GStreamer.
 * @param position The %GstAudioChannelPositions   to check.
 * @param force_order Only consider the GStreamer channel order.
 * @returns %TRUE if the channel positions are valid.
 */
export function audio_check_valid_channel_positions(position: AudioChannelPosition[], force_order: boolean): boolean
export function audio_clipping_meta_api_get_type(): GObject.GType
export function audio_clipping_meta_get_info(): Gst.MetaInfo
export function audio_downmix_meta_api_get_type(): GObject.GType
export function audio_downmix_meta_get_info(): Gst.MetaInfo
/**
 * Construct a #GstAudioFormat with given parameters.
 * @param sign signed or unsigned format
 * @param endianness G_LITTLE_ENDIAN or G_BIG_ENDIAN
 * @param width amount of bits used per sample
 * @param depth amount of used bits in `width`
 * @returns a #GstAudioFormat or GST_AUDIO_FORMAT_UNKNOWN when no audio format exists with the given parameters.
 */
export function audio_format_build_integer(sign: boolean, endianness: number, width: number, depth: number): AudioFormat
/**
 * Fill `length` bytes in `dest` with silence samples for `info`.
 * @param info a #GstAudioFormatInfo
 * @param dest a destination   to fill
 */
export function audio_format_fill_silence(info: AudioFormatInfo, dest: Uint8Array): void
/**
 * Convert the `format` string to its #GstAudioFormat.
 * @param format a format string
 * @returns the #GstAudioFormat for @format or GST_AUDIO_FORMAT_UNKNOWN when the string is not a known format.
 */
export function audio_format_from_string(format: string | null): AudioFormat
/**
 * Get the #GstAudioFormatInfo for `format`
 * @param format a #GstAudioFormat
 * @returns The #GstAudioFormatInfo for @format.
 */
export function audio_format_get_info(format: AudioFormat): AudioFormatInfo
export function audio_format_info_get_type(): GObject.GType
export function audio_format_to_string(format: AudioFormat): string | null
/**
 * Return all the raw audio formats supported by GStreamer.
 * @returns an array of #GstAudioFormat
 */
export function audio_formats_raw(): AudioFormat[]
/**
 * Returns a reorder map for `from` to `to` that can be used in
 * custom channel reordering code, e.g. to convert from or to the
 * GStreamer channel order. `from` and `to` must contain the same
 * number of positions and the same positions, only in a
 * different order.
 * 
 * The resulting `reorder_map` can be used for reordering by assigning
 * channel i of the input to channel reorder_map[i] of the output.
 * @param from The channel positions to reorder from.
 * @param to The channel positions to reorder to.
 * @param reorder_map Pointer to the reorder map.
 * @returns %TRUE if the channel positions are valid and reordering is possible.
 */
export function audio_get_channel_reorder_map(from: AudioChannelPosition[], to: AudioChannelPosition[], reorder_map: number[]): boolean
/**
 * Calculated the size of the buffer expected by gst_audio_iec61937_payload() for
 * payloading type from `spec`.
 * @param spec the ringbufer spec
 * @returns the size or 0 if the given @type is not supported or cannot be payloaded.
 */
export function audio_iec61937_frame_size(spec: AudioRingBufferSpec): number
/**
 * Payloads `src` in the form specified by IEC 61937 for the type from `spec` and
 * stores the result in `dst`. `src` must contain exactly one frame of data and
 * the frame is not checked for errors.
 * @param src a buffer containing the data to payload
 * @param dst the destination buffer to store the       payloaded contents in. Should not overlap with `src`
 * @param spec the ringbufer spec for `src`
 * @param endianness the expected byte order of the payloaded data
 * @returns transfer-full: %TRUE if the payloading was successful, %FALSE otherwise.
 */
export function audio_iec61937_payload(src: Uint8Array, dst: Uint8Array, spec: AudioRingBufferSpec, endianness: number): boolean
/**
 * Parse `caps` and update `info`.
 * @param caps a #GstCaps
 * @returns TRUE if @caps could be parsed
 */
export function audio_info_from_caps(caps: Gst.Caps): [ /* returnType */ boolean, /* info */ AudioInfo ]
/**
 * Initialize `info` with default values.
 */
export function audio_info_init(): /* info */ AudioInfo
/**
 * Return the #GType associated with #GstAudioLevelMeta.
 * @returns a #GType
 */
export function audio_level_meta_api_get_type(): GObject.GType
/**
 * Return the #GstMetaInfo associated with #GstAudioLevelMeta.
 * @returns a #GstMetaInfo
 */
export function audio_level_meta_get_info(): Gst.MetaInfo
/**
 * Return a generic raw audio caps for formats defined in `formats`.
 * If `formats` is %NULL returns a caps for all the supported raw audio formats,
 * see gst_audio_formats_raw().
 * @param formats an array of raw #GstAudioFormat, or %NULL
 * @param layout the layout of audio samples
 * @returns an audio @GstCaps
 */
export function audio_make_raw_caps(formats: AudioFormat[] | null, layout: AudioLayout): Gst.Caps
export function audio_meta_api_get_type(): GObject.GType
export function audio_meta_get_info(): Gst.MetaInfo
/**
 * Reorders `data` from the channel positions `from` to the channel
 * positions `to`. `from` and `to` must contain the same number of
 * positions and the same positions, only in a different order.
 * 
 * Note: this function assumes the audio data is in interleaved layout
 * @param data The pointer to   the memory.
 * @param format The %GstAudioFormat of the buffer.
 * @param from The channel positions in the buffer.
 * @param to The channel positions to convert to.
 * @returns %TRUE if the reordering was possible.
 */
export function audio_reorder_channels(data: Uint8Array, format: AudioFormat, from: AudioChannelPosition[], to: AudioChannelPosition[]): boolean
/**
 * Make a new resampler.
 * @param method a #GstAudioResamplerMethod
 * @param flags #GstAudioResamplerFlags
 * @param format the #GstAudioFormat
 * @param channels the number of channels
 * @param in_rate input rate
 * @param out_rate output rate
 * @param options extra options
 * @returns The new #GstAudioResampler.
 */
export function audio_resampler_new(method: AudioResamplerMethod, flags: AudioResamplerFlags, format: AudioFormat, channels: number, in_rate: number, out_rate: number, options: Gst.Structure): AudioResampler
/**
 * Set the parameters for resampling from `in_rate` to `out_rate` using `method`
 * for `quality` in `options`.
 * @param method a #GstAudioResamplerMethod
 * @param quality the quality
 * @param in_rate the input rate
 * @param out_rate the output rate
 * @param options a #GstStructure
 */
export function audio_resampler_options_set_quality(method: AudioResamplerMethod, quality: number, in_rate: number, out_rate: number, options: Gst.Structure): void
/**
 * Attaches #GstAudioClippingMeta metadata to `buffer` with the given parameters.
 * @param buffer a #GstBuffer
 * @param format GstFormat of `start` and `stop,` GST_FORMAT_DEFAULT is samples
 * @param start Amount of audio to clip from start of buffer
 * @param end Amount of  to clip from end of buffer
 * @returns the #GstAudioClippingMeta on @buffer.
 */
export function buffer_add_audio_clipping_meta(buffer: Gst.Buffer, format: Gst.Format, start: number, end: number): AudioClippingMeta
/**
 * Attaches #GstAudioDownmixMeta metadata to `buffer` with the given parameters.
 * 
 * `matrix` is an two-dimensional array of `to_channels` times `from_channels`
 * coefficients, i.e. the i-th output channels is constructed by multiplicating
 * the input channels with the coefficients in `matrix[`i] and taking the sum
 * of the results.
 * @param buffer a #GstBuffer
 * @param from_position the channel positions   of the source
 * @param to_position the channel positions of   the destination
 * @param matrix The matrix coefficients.
 * @returns the #GstAudioDownmixMeta on @buffer.
 */
export function buffer_add_audio_downmix_meta(buffer: Gst.Buffer, from_position: AudioChannelPosition[], to_position: AudioChannelPosition[], matrix: number): AudioDownmixMeta
/**
 * Attaches audio level information to `buffer`. (RFC 6464)
 * @param buffer a #GstBuffer
 * @param level the -dBov from 0-127 (127 is silence).
 * @param voice_activity whether the buffer contains voice activity.
 * @returns the #GstAudioLevelMeta on @buffer.
 */
export function buffer_add_audio_level_meta(buffer: Gst.Buffer, level: number, voice_activity: boolean): AudioLevelMeta | null
/**
 * Allocates and attaches a #GstAudioMeta on `buffer,` which must be writable
 * for that purpose. The fields of the #GstAudioMeta are directly populated
 * from the arguments of this function.
 * 
 * When `info->`layout is %GST_AUDIO_LAYOUT_NON_INTERLEAVED and `offsets` is
 * %NULL, the offsets are calculated with a formula that assumes the planes are
 * tightly packed and in sequence:
 * offsets[channel] = channel * `samples` * sample_stride
 * 
 * It is not allowed for channels to overlap in memory,
 * i.e. for each i in [0, channels), the range
 * [`offsets[`i], `offsets[`i] + `samples` * sample_stride) must not overlap
 * with any other such range. This function will assert if the parameters
 * specified cause this restriction to be violated.
 * 
 * It is, obviously, also not allowed to specify parameters that would cause
 * out-of-bounds memory access on `buffer`. This is also checked, which means
 * that you must add enough memory on the `buffer` before adding this meta.
 * @param buffer a #GstBuffer
 * @param info the audio properties of the buffer
 * @param samples the number of valid samples in the buffer
 * @param offsets the offsets (in bytes) where each channel plane starts   in the buffer or %NULL to calculate it (see below); must be %NULL also   when `info->`layout is %GST_AUDIO_LAYOUT_INTERLEAVED
 * @returns the #GstAudioMeta that was attached on the @buffer
 */
export function buffer_add_audio_meta(buffer: Gst.Buffer, info: AudioInfo, samples: number, offsets: number | null): AudioMeta
/**
 * Find the #GstAudioDownmixMeta on `buffer` for the given destination
 * channel positions.
 * @param buffer a #GstBuffer
 * @param to_position the channel positions of   the destination
 * @returns the #GstAudioDownmixMeta on @buffer.
 */
export function buffer_get_audio_downmix_meta_for_channels(buffer: Gst.Buffer, to_position: AudioChannelPosition[]): AudioDownmixMeta
/**
 * Find the #GstAudioLevelMeta on `buffer`.
 * @param buffer a #GstBuffer
 * @returns the #GstAudioLevelMeta or %NULL when there is no such metadata on @buffer.
 */
export function buffer_get_audio_level_meta(buffer: Gst.Buffer): AudioLevelMeta | null
export function stream_volume_convert_volume(from: StreamVolumeFormat, to: StreamVolumeFormat, val: number): number
/**
 * This function is set with gst_audio_base_sink_set_custom_slaving_callback()
 * and is called during playback. It receives the current time of external and
 * internal clocks, which the callback can then use to apply any custom
 * slaving/synchronization schemes.
 * 
 * The external clock is the sink's element clock, the internal one is the
 * internal audio clock. The internal audio clock's calibration is applied to
 * the timestamps before they are passed to the callback. The difference between
 * etime and itime is the skew; how much internal and external clock lie apart
 * from each other. A skew of 0 means both clocks are perfectly in sync.
 * itime > etime means the external clock is going slower, while itime < etime
 * means it is going faster than the internal clock. etime and itime are always
 * valid timestamps, except for when a discontinuity happens.
 * 
 * requested_skew is an output value the callback can write to. It informs the
 * sink of whether or not it should move the playout pointer, and if so, by how
 * much. This pointer is only NULL if a discontinuity occurs; otherwise, it is
 * safe to write to *requested_skew. The default skew is 0.
 * 
 * The sink may experience discontinuities. If one happens, discont is TRUE,
 * itime, etime are set to GST_CLOCK_TIME_NONE, and requested_skew is NULL.
 * This makes it possible to reset custom clock slaving algorithms when a
 * discontinuity happens.
 * @callback 
 * @param sink a #GstAudioBaseSink
 * @param etime external clock time
 * @param itime internal clock time
 * @param requested_skew skew amount requested by the callback
 * @param discont_reason reason for discontinuity (if any)
 */
export interface AudioBaseSinkCustomSlavingCallback {
    (sink: AudioBaseSink, etime: Gst.ClockTime, itime: Gst.ClockTime, requested_skew: Gst.ClockTimeDiff, discont_reason: AudioBaseSinkDiscontReason): void
}
/**
 * This function will be called whenever the current clock time needs to be
 * calculated. If this function returns #GST_CLOCK_TIME_NONE, the last reported
 * time will be returned by the clock.
 * @callback 
 * @param clock the #GstAudioClock
 * @returns the current time or #GST_CLOCK_TIME_NONE if the previous time should be used.
 */
export interface AudioClockGetTimeFunc {
    (clock: Gst.Clock): Gst.ClockTime
}
/**
 * Packs `length` samples from `src` to the data array in format `info`.
 * The samples from source have each channel interleaved
 * and will be packed into `data`.
 * @callback 
 * @param info a #GstAudioFormatInfo
 * @param flags #GstAudioPackFlags
 * @param src a source array
 * @param data pointer to the destination   data
 * @param length the amount of samples to pack.
 */
export interface AudioFormatPack {
    (info: AudioFormatInfo, flags: AudioPackFlags, src: Uint8Array, data: Uint8Array, length: number): void
}
/**
 * Unpacks `length` samples from the given data of format `info`.
 * The samples will be unpacked into `dest` which each channel
 * interleaved. `dest` should at least be big enough to hold `length` *
 * channels * size(unpack_format) bytes.
 * @callback 
 * @param info a #GstAudioFormatInfo
 * @param flags #GstAudioPackFlags
 * @param dest a destination array
 * @param data pointer to the audio data
 * @param length the amount of samples to unpack.
 */
export interface AudioFormatUnpack {
    (info: AudioFormatInfo, flags: AudioPackFlags, dest: Uint8Array, data: Uint8Array, length: number): void
}
/**
 * This function is set with gst_audio_ring_buffer_set_callback() and is
 * called to fill the memory at `data` with `len` bytes of samples.
 * @callback 
 * @param rbuf a #GstAudioRingBuffer
 * @param data target to fill
 */
export interface AudioRingBufferCallback {
    (rbuf: AudioRingBuffer, data: Uint8Array): void
}
export module StreamVolume {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GstAudio-1.0.GstAudio.StreamVolume

        mute?: boolean | null
        volume?: number | null
    }

}

export interface StreamVolume {

    // Own properties of GstAudio-1.0.GstAudio.StreamVolume

    mute: boolean
    volume: number

    // Owm methods of GstAudio-1.0.GstAudio.StreamVolume

    get_mute(): boolean
    get_volume(format: StreamVolumeFormat): number
    set_mute(mute: boolean): void
    set_volume(format: StreamVolumeFormat, val: number): void

    // Class property signals of GstAudio-1.0.GstAudio.StreamVolume

    connect(sigName: "notify::mute", callback: (($obj: StreamVolume, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mute", callback: (($obj: StreamVolume, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mute", ...args: any[]): void
    connect(sigName: "notify::volume", callback: (($obj: StreamVolume, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: StreamVolume, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::volume", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This interface is implemented by elements that provide a stream volume. Examples for
 * such elements are #volume and #playbin.
 * 
 * Applications can use this interface to get or set the current stream volume. For this
 * the "volume" #GObject property can be used or the helper functions gst_stream_volume_set_volume()
 * and gst_stream_volume_get_volume(). This volume is always a linear factor, i.e. 0.0 is muted
 * 1.0 is 100%. For showing the volume in a GUI it might make sense to convert it to
 * a different format by using gst_stream_volume_convert_volume(). Volume sliders should usually
 * use a cubic volume.
 * 
 * Separate from the volume the stream can also be muted by the "mute" #GObject property or
 * gst_stream_volume_set_mute() and gst_stream_volume_get_mute().
 * 
 * Elements that provide some kind of stream volume should implement the "volume" and
 * "mute" #GObject properties and handle setting and getting of them properly.
 * The volume property is defined to be a linear volume factor.
 * @interface 
 */
export class StreamVolume extends GObject.Object {

    // Own properties of GstAudio-1.0.GstAudio.StreamVolume

    static name: string
    static $gtype: GObject.GType<StreamVolume>

    // Constructors of GstAudio-1.0.GstAudio.StreamVolume

    constructor(config?: StreamVolume.ConstructorProperties) 
    _init(config?: StreamVolume.ConstructorProperties): void
    static convert_volume(from: StreamVolumeFormat, to: StreamVolumeFormat, val: number): number
}

export module AudioAggregator {

    // Constructor properties interface

    export interface ConstructorProperties extends GstBase.Aggregator.ConstructorProperties {

        // Own constructor properties of GstAudio-1.0.GstAudio.AudioAggregator

        alignment_threshold?: number | null
        discont_wait?: number | null
        /**
         * Causes the element to aggregate on a timeout even when no live source is
         * connected to its sinks. See #GstAggregator:min-upstream-latency for a
         * companion property: in the vast majority of cases where you plan to plug in
         * live sources with a non-zero latency, you should set it to a non-zero value.
         */
        force_live?: boolean | null
        /**
         * Don't wait for inactive pads when live. An inactive pad
         * is a pad that hasn't yet received a buffer, but that has
         * been waited on at least once.
         * 
         * The purpose of this property is to avoid aggregating on
         * timeout when new pads are requested in advance of receiving
         * data flow, for example the user may decide to connect it later,
         * but wants to configure it already.
         */
        ignore_inactive_pads?: boolean | null
        output_buffer_duration?: number | null
        /**
         * Output block size in nanoseconds, expressed as a fraction.
         */
        output_buffer_duration_fraction?: Gst.Fraction | null
    }

}

export interface AudioAggregator {

    // Own properties of GstAudio-1.0.GstAudio.AudioAggregator

    alignment_threshold: number
    discont_wait: number
    /**
     * Causes the element to aggregate on a timeout even when no live source is
     * connected to its sinks. See #GstAggregator:min-upstream-latency for a
     * companion property: in the vast majority of cases where you plan to plug in
     * live sources with a non-zero latency, you should set it to a non-zero value.
     */
    readonly force_live: boolean
    /**
     * Don't wait for inactive pads when live. An inactive pad
     * is a pad that hasn't yet received a buffer, but that has
     * been waited on at least once.
     * 
     * The purpose of this property is to avoid aggregating on
     * timeout when new pads are requested in advance of receiving
     * data flow, for example the user may decide to connect it later,
     * but wants to configure it already.
     */
    ignore_inactive_pads: boolean
    output_buffer_duration: number
    /**
     * Output block size in nanoseconds, expressed as a fraction.
     */
    output_buffer_duration_fraction: Gst.Fraction

    // Conflicting properties

    start_time: any
    object: any

    // Own fields of GstAudio-1.0.GstAudio.AudioAggregator

    parent: GstBase.Aggregator & Gst.Element & Gst.Object & Gst.Object
    /**
     * The caps set by the subclass
     * @field 
     */
    current_caps: Gst.Caps

    // Owm methods of GstAudio-1.0.GstAudio.AudioAggregator

    set_sink_caps(pad: AudioAggregatorPad, caps: Gst.Caps): void

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

    // Own virtual methods of GstAudio-1.0.GstAudio.AudioAggregator

    vfunc_aggregate_one_buffer(pad: AudioAggregatorPad, inbuf: Gst.Buffer, in_offset: number, outbuf: Gst.Buffer, out_offset: number, num_frames: number): boolean
    vfunc_create_output_buffer(num_frames: number): Gst.Buffer

    // Class property signals of GstAudio-1.0.GstAudio.AudioAggregator

    connect(sigName: "notify::alignment-threshold", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-threshold", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alignment-threshold", ...args: any[]): void
    connect(sigName: "notify::discont-wait", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discont-wait", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::discont-wait", ...args: any[]): void
    connect(sigName: "notify::force-live", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force-live", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::force-live", ...args: any[]): void
    connect(sigName: "notify::ignore-inactive-pads", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-inactive-pads", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ignore-inactive-pads", ...args: any[]): void
    connect(sigName: "notify::output-buffer-duration", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-buffer-duration", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::output-buffer-duration", ...args: any[]): void
    connect(sigName: "notify::output-buffer-duration-fraction", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-buffer-duration-fraction", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::output-buffer-duration-fraction", ...args: any[]): void
    connect(sigName: "notify::emit-signals", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::emit-signals", ...args: any[]): void
    connect(sigName: "notify::latency", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::latency", ...args: any[]): void
    connect(sigName: "notify::min-upstream-latency", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-upstream-latency", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-upstream-latency", ...args: any[]): void
    connect(sigName: "notify::start-time", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-time", ...args: any[]): void
    connect(sigName: "notify::start-time-selection", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time-selection", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-time-selection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Subclasses must use (a subclass of) #GstAudioAggregatorPad for both
 * their source and sink pads,
 * gst_element_class_add_static_pad_template_with_gtype() is a convenient
 * helper.
 * 
 * #GstAudioAggregator can perform conversion on the data arriving
 * on its sink pads, based on the format expected downstream: in order
 * to enable that behaviour, the GType of the sink pads must either be
 * a (subclass of) #GstAudioAggregatorConvertPad to use the default
 * #GstAudioConverter implementation, or a subclass of #GstAudioAggregatorPad
 * implementing #GstAudioAggregatorPadClass.convert_buffer.
 * 
 * To allow for the output caps to change, the mechanism is the same as
 * above, with the GType of the source pad.
 * 
 * See #GstAudioMixer for an example.
 * 
 * When conversion is enabled, #GstAudioAggregator will accept
 * any type of raw audio caps and perform conversion
 * on the data arriving on its sink pads, with whatever downstream
 * expects as the target format.
 * 
 * In case downstream caps are not fully fixated, it will use
 * the first configured sink pad to finish fixating its source pad
 * caps.
 * 
 * A notable exception for now is the sample rate, sink pads must
 * have the same sample rate as either the downstream requirement,
 * or the first configured pad, or a combination of both (when
 * downstream specifies a range or a set of acceptable rates).
 * 
 * The #GstAggregator::samples-selected signal is provided with some
 * additional information about the output buffer:
 * - "offset"  G_TYPE_UINT64   Offset in samples since segment start
 *   for the position that is next to be filled in the output buffer.
 * - "frames"  G_TYPE_UINT   Number of frames per output buffer.
 * 
 * In addition the gst_aggregator_peek_next_sample() function returns
 * additional information in the info #GstStructure of the returned sample:
 * - "output-offset"  G_TYPE_UINT64   Sample offset in output segment relative to
 *   the output segment's start where the current position of this input
 *   buffer would be placed
 * - "position"  G_TYPE_UINT   current position in the input buffer in samples
 * - "size"  G_TYPE_UINT   size of the input buffer in samples
 * @class 
 */
export class AudioAggregator extends GstBase.Aggregator {

    // Own properties of GstAudio-1.0.GstAudio.AudioAggregator

    static name: string
    static $gtype: GObject.GType<AudioAggregator>

    // Constructors of GstAudio-1.0.GstAudio.AudioAggregator

    constructor(config?: AudioAggregator.ConstructorProperties) 
    _init(config?: AudioAggregator.ConstructorProperties): void
}

export module AudioAggregatorConvertPad {

    // Constructor properties interface

    export interface ConstructorProperties extends AudioAggregatorPad.ConstructorProperties {

        // Own constructor properties of GstAudio-1.0.GstAudio.AudioAggregatorConvertPad

        converter_config?: Gst.Structure | null
    }

}

export interface AudioAggregatorConvertPad {

    // Own properties of GstAudio-1.0.GstAudio.AudioAggregatorConvertPad

    converter_config: Gst.Structure

    // Conflicting properties

    parent: GstBase.AggregatorPad & Gst.Pad & Gst.Object
    object: any

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

    // Class property signals of GstAudio-1.0.GstAudio.AudioAggregatorConvertPad

    connect(sigName: "notify::converter-config", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::converter-config", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::converter-config", ...args: any[]): void
    connect(sigName: "notify::qos-messages", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos-messages", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos-messages", ...args: any[]): void
    connect(sigName: "notify::emit-signals", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::emit-signals", ...args: any[]): void
    connect(sigName: "notify::caps", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps", ...args: any[]): void
    connect(sigName: "notify::offset", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offset", ...args: any[]): void
    connect(sigName: "notify::template", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::template", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An implementation of GstPad that can be used with #GstAudioAggregator.
 * 
 * See #GstAudioAggregator for more details.
 * @class 
 */
export class AudioAggregatorConvertPad extends AudioAggregatorPad {

    // Own properties of GstAudio-1.0.GstAudio.AudioAggregatorConvertPad

    static name: string
    static $gtype: GObject.GType<AudioAggregatorConvertPad>

    // Constructors of GstAudio-1.0.GstAudio.AudioAggregatorConvertPad

    constructor(config?: AudioAggregatorConvertPad.ConstructorProperties) 
    _init(config?: AudioAggregatorConvertPad.ConstructorProperties): void
}

export module AudioAggregatorPad {

    // Constructor properties interface

    export interface ConstructorProperties extends GstBase.AggregatorPad.ConstructorProperties {

        // Own constructor properties of GstAudio-1.0.GstAudio.AudioAggregatorPad

        /**
         * Emit QoS messages when dropping buffers.
         */
        qos_messages?: boolean | null
    }

}

export interface AudioAggregatorPad {

    // Own properties of GstAudio-1.0.GstAudio.AudioAggregatorPad

    /**
     * Emit QoS messages when dropping buffers.
     */
    qos_messages: boolean

    // Conflicting properties

    object: any

    // Own fields of GstAudio-1.0.GstAudio.AudioAggregatorPad

    parent: GstBase.AggregatorPad & Gst.Pad & Gst.Object & Gst.Object
    /**
     * The audio info for this pad set from the incoming caps
     * @field 
     */
    info: AudioInfo

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

    // Own virtual methods of GstAudio-1.0.GstAudio.AudioAggregatorPad

    vfunc_convert_buffer(in_info: AudioInfo, out_info: AudioInfo, buffer: Gst.Buffer): Gst.Buffer
    vfunc_update_conversion_info(): void

    // Class property signals of GstAudio-1.0.GstAudio.AudioAggregatorPad

    connect(sigName: "notify::qos-messages", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos-messages", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos-messages", ...args: any[]): void
    connect(sigName: "notify::emit-signals", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::emit-signals", ...args: any[]): void
    connect(sigName: "notify::caps", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps", ...args: any[]): void
    connect(sigName: "notify::offset", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offset", ...args: any[]): void
    connect(sigName: "notify::template", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::template", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The default implementation of GstPad used with #GstAudioAggregator
 * @class 
 */
export class AudioAggregatorPad extends GstBase.AggregatorPad {

    // Own properties of GstAudio-1.0.GstAudio.AudioAggregatorPad

    static name: string
    static $gtype: GObject.GType<AudioAggregatorPad>

    // Constructors of GstAudio-1.0.GstAudio.AudioAggregatorPad

    constructor(config?: AudioAggregatorPad.ConstructorProperties) 
    _init(config?: AudioAggregatorPad.ConstructorProperties): void
}

export module AudioBaseSink {

    // Constructor properties interface

    export interface ConstructorProperties extends GstBase.BaseSink.ConstructorProperties {

        // Own constructor properties of GstAudio-1.0.GstAudio.AudioBaseSink

        alignment_threshold?: number | null
        buffer_time?: number | null
        can_activate_pull?: boolean | null
        /**
         * A window of time in nanoseconds to wait before creating a discontinuity as
         * a result of breaching the drift-tolerance.
         */
        discont_wait?: number | null
        /**
         * Controls the amount of time in microseconds that clocks are allowed
         * to drift before resynchronisation happens.
         */
        drift_tolerance?: number | null
        latency_time?: number | null
        provide_clock?: boolean | null
        slave_method?: AudioBaseSinkSlaveMethod | null
    }

}

export interface AudioBaseSink {

    // Own properties of GstAudio-1.0.GstAudio.AudioBaseSink

    alignment_threshold: number
    can_activate_pull: boolean
    /**
     * A window of time in nanoseconds to wait before creating a discontinuity as
     * a result of breaching the drift-tolerance.
     */
    discont_wait: number
    /**
     * Controls the amount of time in microseconds that clocks are allowed
     * to drift before resynchronisation happens.
     */
    drift_tolerance: number
    // Has conflict: provide_clock: boolean
    slave_method: AudioBaseSinkSlaveMethod

    // Conflicting properties

    object: any

    // Own fields of GstAudio-1.0.GstAudio.AudioBaseSink

    element: any
    ringbuffer: AudioRingBuffer
    buffer_time: number
    latency_time: number
    next_sample: number
    provided_clock: Gst.Clock
    eos_rendering: boolean

    // Owm methods of GstAudio-1.0.GstAudio.AudioBaseSink

    /**
     * Create and return the #GstAudioRingBuffer for `sink`. This function will
     * call the ::create_ringbuffer vmethod and will set `sink` as the parent of
     * the returned buffer (see gst_object_set_parent()).
     * @returns The new ringbuffer of @sink.
     */
    create_ringbuffer(): AudioRingBuffer | null
    /**
     * Get the current alignment threshold, in nanoseconds, used by `sink`.
     * @returns The current alignment threshold used by @sink.
     */
    get_alignment_threshold(): Gst.ClockTime
    /**
     * Get the current discont wait, in nanoseconds, used by `sink`.
     * @returns The current discont wait used by @sink.
     */
    get_discont_wait(): Gst.ClockTime
    /**
     * Get the current drift tolerance, in microseconds, used by `sink`.
     * @returns The current drift tolerance used by @sink.
     */
    get_drift_tolerance(): number
    /**
     * Queries whether `sink` will provide a clock or not. See also
     * gst_audio_base_sink_set_provide_clock.
     * @returns %TRUE if @sink will provide a clock.
     */
    get_provide_clock(): boolean
    /**
     * Get the current slave method used by `sink`.
     * @returns The current slave method used by @sink.
     */
    get_slave_method(): AudioBaseSinkSlaveMethod
    /**
     * Informs this base class that the audio output device has failed for
     * some reason, causing a discontinuity (for example, because the device
     * recovered from the error, but lost all contents of its ring buffer).
     * This function is typically called by derived classes, and is useful
     * for the custom slave method.
     */
    report_device_failure(): void
    /**
     * Controls the sink's alignment threshold.
     * @param alignment_threshold the new alignment threshold in nanoseconds
     */
    set_alignment_threshold(alignment_threshold: Gst.ClockTime): void
    /**
     * Sets the custom slaving callback. This callback will
     * be invoked if the slave-method property is set to
     * GST_AUDIO_BASE_SINK_SLAVE_CUSTOM and the audio sink
     * receives and plays samples.
     * 
     * Setting the callback to NULL causes the sink to
     * behave as if the GST_AUDIO_BASE_SINK_SLAVE_NONE
     * method were used.
     * @param callback a #GstAudioBaseSinkCustomSlavingCallback
     */
    set_custom_slaving_callback(callback: AudioBaseSinkCustomSlavingCallback): void
    /**
     * Controls how long the sink will wait before creating a discontinuity.
     * @param discont_wait the new discont wait in nanoseconds
     */
    set_discont_wait(discont_wait: Gst.ClockTime): void
    /**
     * Controls the sink's drift tolerance.
     * @param drift_tolerance the new drift tolerance in microseconds
     */
    set_drift_tolerance(drift_tolerance: number): void
    /**
     * Controls whether `sink` will provide a clock or not. If `provide` is %TRUE,
     * gst_element_provide_clock() will return a clock that reflects the datarate
     * of `sink`. If `provide` is %FALSE, gst_element_provide_clock() will return
     * NULL.
     * @param provide new state
     */
    set_provide_clock(provide: boolean): void
    /**
     * Controls how clock slaving will be performed in `sink`.
     * @param method the new slave method
     */
    set_slave_method(method: AudioBaseSinkSlaveMethod): void

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

    // Own virtual methods of GstAudio-1.0.GstAudio.AudioBaseSink

    /**
     * Create and return the #GstAudioRingBuffer for `sink`. This function will
     * call the ::create_ringbuffer vmethod and will set `sink` as the parent of
     * the returned buffer (see gst_object_set_parent()).
     * @virtual 
     * @returns The new ringbuffer of @sink.
     */
    vfunc_create_ringbuffer(): AudioRingBuffer | null
    vfunc_payload(buffer: Gst.Buffer): Gst.Buffer

    // Class property signals of GstAudio-1.0.GstAudio.AudioBaseSink

    connect(sigName: "notify::alignment-threshold", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-threshold", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alignment-threshold", ...args: any[]): void
    connect(sigName: "notify::can-activate-pull", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-activate-pull", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-activate-pull", ...args: any[]): void
    connect(sigName: "notify::discont-wait", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discont-wait", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::discont-wait", ...args: any[]): void
    connect(sigName: "notify::drift-tolerance", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drift-tolerance", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::drift-tolerance", ...args: any[]): void
    connect(sigName: "notify::provide-clock", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provide-clock", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provide-clock", ...args: any[]): void
    connect(sigName: "notify::slave-method", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slave-method", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::slave-method", ...args: any[]): void
    connect(sigName: "notify::async", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::async", ...args: any[]): void
    connect(sigName: "notify::blocksize", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::blocksize", ...args: any[]): void
    connect(sigName: "notify::enable-last-sample", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-sample", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-last-sample", ...args: any[]): void
    connect(sigName: "notify::last-sample", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-sample", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-sample", ...args: any[]): void
    connect(sigName: "notify::max-bitrate", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-bitrate", ...args: any[]): void
    connect(sigName: "notify::max-lateness", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-lateness", ...args: any[]): void
    connect(sigName: "notify::processing-deadline", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-deadline", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::processing-deadline", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: "notify::render-delay", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::render-delay", ...args: any[]): void
    connect(sigName: "notify::stats", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stats", ...args: any[]): void
    connect(sigName: "notify::sync", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sync", ...args: any[]): void
    connect(sigName: "notify::throttle-time", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle-time", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::throttle-time", ...args: any[]): void
    connect(sigName: "notify::ts-offset", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ts-offset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is the base class for audio sinks. Subclasses need to implement the
 * ::create_ringbuffer vmethod. This base class will then take care of
 * writing samples to the ringbuffer, synchronisation, clipping and flushing.
 * @class 
 */
export class AudioBaseSink extends GstBase.BaseSink {

    // Own properties of GstAudio-1.0.GstAudio.AudioBaseSink

    static name: string
    static $gtype: GObject.GType<AudioBaseSink>

    // Constructors of GstAudio-1.0.GstAudio.AudioBaseSink

    constructor(config?: AudioBaseSink.ConstructorProperties) 
    _init(config?: AudioBaseSink.ConstructorProperties): void
}

export module AudioBaseSrc {

    // Constructor properties interface

    export interface ConstructorProperties extends GstBase.PushSrc.ConstructorProperties {

        // Own constructor properties of GstAudio-1.0.GstAudio.AudioBaseSrc

        buffer_time?: number | null
        latency_time?: number | null
        provide_clock?: boolean | null
        slave_method?: AudioBaseSrcSlaveMethod | null
    }

}

export interface AudioBaseSrc {

    // Own properties of GstAudio-1.0.GstAudio.AudioBaseSrc

    /**
     * Actual configured size of audio buffer in microseconds.
     */
    readonly actual_buffer_time: number
    /**
     * Actual configured audio latency in microseconds.
     */
    readonly actual_latency_time: number
    // Has conflict: provide_clock: boolean
    slave_method: AudioBaseSrcSlaveMethod

    // Conflicting properties

    parent: GstBase.BaseSrc & Gst.Object & Gst.Object
    object: any

    // Own fields of GstAudio-1.0.GstAudio.AudioBaseSrc

    element: any
    ringbuffer: AudioRingBuffer
    buffer_time: Gst.ClockTime
    latency_time: Gst.ClockTime
    next_sample: number
    clock: Gst.Clock

    // Owm methods of GstAudio-1.0.GstAudio.AudioBaseSrc

    /**
     * Create and return the #GstAudioRingBuffer for `src`. This function will call
     * the ::create_ringbuffer vmethod and will set `src` as the parent of the
     * returned buffer (see gst_object_set_parent()).
     * @returns The new ringbuffer of @src.
     */
    create_ringbuffer(): AudioRingBuffer | null
    /**
     * Queries whether `src` will provide a clock or not. See also
     * gst_audio_base_src_set_provide_clock.
     * @returns %TRUE if @src will provide a clock.
     */
    get_provide_clock(): boolean
    /**
     * Get the current slave method used by `src`.
     * @returns The current slave method used by @src.
     */
    get_slave_method(): AudioBaseSrcSlaveMethod
    /**
     * Controls whether `src` will provide a clock or not. If `provide` is %TRUE,
     * gst_element_provide_clock() will return a clock that reflects the datarate
     * of `src`. If `provide` is %FALSE, gst_element_provide_clock() will return NULL.
     * @param provide new state
     */
    set_provide_clock(provide: boolean): void
    /**
     * Controls how clock slaving will be performed in `src`.
     * @param method the new slave method
     */
    set_slave_method(method: AudioBaseSrcSlaveMethod): void

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
    /**
     * Allocate memory for a buffer.
     * @virtual 
     */
    vfunc_alloc(): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]

    // Overloads of vfunc_alloc

    /**
     * Ask the subclass to allocate an output buffer with `offset` and `size,` the default
     * implementation will use the negotiated allocator.
     * @virtual 
     * @param offset 
     * @param size 
     */
    vfunc_alloc(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]
    /**
     * Ask the subclass to allocate an output buffer with `offset` and `size,` the default
     * implementation will use the negotiated allocator.
     * @virtual 
     * @param offset 
     * @param size 
     */
    vfunc_alloc(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]
    /**
     * Ask the subclass to create a buffer, the default implementation will call alloc if
     * no allocated `buf` is provided and then call fill.
     * @virtual 
     * @param buf 
     */
    vfunc_create(buf: Gst.Buffer | null): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]

    // Overloads of vfunc_create

    /**
     * Ask the subclass to create a buffer with `offset` and `size,` the default
     * implementation will call alloc if no allocated `buf` is provided and then call fill.
     * @virtual 
     * @param offset 
     * @param size 
     * @param buf 
     */
    vfunc_create(offset: number, size: number, buf: Gst.Buffer | null): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]
    /**
     * Ask the subclass to create a buffer with `offset` and `size,` the default
     * implementation will call alloc if no allocated `buf` is provided and then call fill.
     * @virtual 
     * @param offset 
     * @param size 
     * @param buf 
     */
    vfunc_create(offset: number, size: number, buf: Gst.Buffer | null): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]
    vfunc_fill(buf: Gst.Buffer): Gst.FlowReturn

    // Overloads of vfunc_fill

    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn

    // Own virtual methods of GstAudio-1.0.GstAudio.AudioBaseSrc

    /**
     * Create and return the #GstAudioRingBuffer for `src`. This function will call
     * the ::create_ringbuffer vmethod and will set `src` as the parent of the
     * returned buffer (see gst_object_set_parent()).
     * @virtual 
     * @returns The new ringbuffer of @src.
     */
    vfunc_create_ringbuffer(): AudioRingBuffer | null

    // Class property signals of GstAudio-1.0.GstAudio.AudioBaseSrc

    connect(sigName: "notify::actual-buffer-time", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actual-buffer-time", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actual-buffer-time", ...args: any[]): void
    connect(sigName: "notify::actual-latency-time", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actual-latency-time", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actual-latency-time", ...args: any[]): void
    connect(sigName: "notify::provide-clock", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provide-clock", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provide-clock", ...args: any[]): void
    connect(sigName: "notify::slave-method", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slave-method", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::slave-method", ...args: any[]): void
    connect(sigName: "notify::do-timestamp", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::do-timestamp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is the base class for audio sources. Subclasses need to implement the
 * ::create_ringbuffer vmethod. This base class will then take care of
 * reading samples from the ringbuffer, synchronisation and flushing.
 * @class 
 */
export class AudioBaseSrc extends GstBase.PushSrc {

    // Own properties of GstAudio-1.0.GstAudio.AudioBaseSrc

    static name: string
    static $gtype: GObject.GType<AudioBaseSrc>

    // Constructors of GstAudio-1.0.GstAudio.AudioBaseSrc

    constructor(config?: AudioBaseSrc.ConstructorProperties) 
    _init(config?: AudioBaseSrc.ConstructorProperties): void
}

export module AudioCdSrc {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.URIHandler.ConstructorProperties, GstBase.PushSrc.ConstructorProperties {

        // Own constructor properties of GstAudio-1.0.GstAudio.AudioCdSrc

        device?: string | null
        mode?: AudioCdSrcMode | null
        track?: number | null
    }

}

export interface AudioCdSrc extends Gst.URIHandler {

    // Own properties of GstAudio-1.0.GstAudio.AudioCdSrc

    device: string | null
    mode: AudioCdSrcMode
    track: number

    // Conflicting properties

    parent: GstBase.BaseSrc & Gst.Object & Gst.Object
    object: any

    // Own fields of GstAudio-1.0.GstAudio.AudioCdSrc

    pushsrc: GstBase.PushSrc
    tags: Gst.TagList

    // Owm methods of GstAudio-1.0.GstAudio.AudioCdSrc

    /**
     * CDDA sources use this function from their start vfunc to announce the
     * available data and audio tracks to the base source class. The caller
     * should allocate `track` on the stack, the base source will do a shallow
     * copy of the structure (and take ownership of the taglist if there is one).
     * @param track address of #GstAudioCdSrcTrack to add
     * @returns FALSE on error, otherwise TRUE.
     */
    add_track(track: AudioCdSrcTrack): boolean

    // Conflicting methods

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
     * Allocate memory for a buffer.
     * @virtual 
     */
    vfunc_alloc(): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]

    // Overloads of vfunc_alloc

    /**
     * Ask the subclass to allocate an output buffer with `offset` and `size,` the default
     * implementation will use the negotiated allocator.
     * @virtual 
     * @param offset 
     * @param size 
     */
    vfunc_alloc(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]
    /**
     * Ask the subclass to allocate an output buffer with `offset` and `size,` the default
     * implementation will use the negotiated allocator.
     * @virtual 
     * @param offset 
     * @param size 
     */
    vfunc_alloc(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]
    /**
     * Ask the subclass to create a buffer, the default implementation will call alloc if
     * no allocated `buf` is provided and then call fill.
     * @virtual 
     * @param buf 
     */
    vfunc_create(buf: Gst.Buffer | null): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]

    // Overloads of vfunc_create

    /**
     * Ask the subclass to create a buffer with `offset` and `size,` the default
     * implementation will call alloc if no allocated `buf` is provided and then call fill.
     * @virtual 
     * @param offset 
     * @param size 
     * @param buf 
     */
    vfunc_create(offset: number, size: number, buf: Gst.Buffer | null): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]
    /**
     * Ask the subclass to create a buffer with `offset` and `size,` the default
     * implementation will call alloc if no allocated `buf` is provided and then call fill.
     * @virtual 
     * @param offset 
     * @param size 
     * @param buf 
     */
    vfunc_create(offset: number, size: number, buf: Gst.Buffer | null): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]
    vfunc_fill(buf: Gst.Buffer): Gst.FlowReturn

    // Overloads of vfunc_fill

    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn

    // Own virtual methods of GstAudio-1.0.GstAudio.AudioCdSrc

    vfunc_close(): void
    vfunc_open(device: string | null): boolean
    vfunc_read_sector(sector: number): Gst.Buffer

    // Class property signals of GstAudio-1.0.GstAudio.AudioCdSrc

    connect(sigName: "notify::device", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::track", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::track", ...args: any[]): void
    connect(sigName: "notify::do-timestamp", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::do-timestamp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Provides a base class for CD digital audio (CDDA) sources, which handles
 * things like seeking, querying, discid calculation, tags, and buffer
 * timestamping.
 * 
 * ## Using GstAudioCdSrc-based elements in applications
 * 
 * GstAudioCdSrc registers two #GstFormat<!-- -->s of its own, namely
 * the "track" format and the "sector" format. Applications will usually
 * only find the "track" format interesting. You can retrieve that #GstFormat
 * for use in seek events or queries with gst_format_get_by_nick("track").
 * 
 * In order to query the number of tracks, for example, an application would
 * set the CDDA source element to READY or PAUSED state and then query the
 * the number of tracks via gst_element_query_duration() using the track
 * format acquired above. Applications can query the currently playing track
 * in the same way.
 * 
 * Alternatively, applications may retrieve the currently playing track and
 * the total number of tracks from the taglist that will posted on the bus
 * whenever the CD is opened or the currently playing track changes. The
 * taglist will contain GST_TAG_TRACK_NUMBER and GST_TAG_TRACK_COUNT tags.
 * 
 * Applications playing back CD audio using playbin and cdda://n URIs should
 * issue a seek command in track format to change between tracks, rather than
 * setting a new cdda://n+1 URI on playbin (as setting a new URI on playbin
 * involves closing and re-opening the CD device, which is much much slower).
 * 
 * ## Tags and meta-information
 * 
 * CDDA sources will automatically emit a number of tags, details about which
 * can be found in the libgsttag documentation. Those tags are:
 * #GST_TAG_CDDA_CDDB_DISCID, #GST_TAG_CDDA_CDDB_DISCID_FULL,
 * #GST_TAG_CDDA_MUSICBRAINZ_DISCID, #GST_TAG_CDDA_MUSICBRAINZ_DISCID_FULL,
 * among others.
 * 
 * ## Tracks and Table of Contents (TOC)
 * 
 * Applications will be informed of the available tracks via a TOC message
 * on the pipeline's #GstBus. The #GstToc will contain a #GstTocEntry for
 * each track, with information about each track. The duration for each
 * track can be retrieved via the #GST_TAG_DURATION tag from each entry's
 * tag list, or calculated via gst_toc_entry_get_start_stop_times().
 * The track entries in the TOC will be sorted by track number.
 * @class 
 */
export class AudioCdSrc extends GstBase.PushSrc {

    // Own properties of GstAudio-1.0.GstAudio.AudioCdSrc

    static name: string
    static $gtype: GObject.GType<AudioCdSrc>

    // Constructors of GstAudio-1.0.GstAudio.AudioCdSrc

    constructor(config?: AudioCdSrc.ConstructorProperties) 
    _init(config?: AudioCdSrc.ConstructorProperties): void
}

export module AudioClock {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.SystemClock.ConstructorProperties {
    }

}

export interface AudioClock {

    // Conflicting properties

    object: any

    // Own fields of GstAudio-1.0.GstAudio.AudioClock

    clock: any
    func: AudioClockGetTimeFunc
    user_data: any
    destroy_notify: GLib.DestroyNotify

    // Owm methods of GstAudio-1.0.GstAudio.AudioClock

    /**
     * Adjust `time` with the internal offset of the audio clock.
     * @param time a #GstClockTime
     * @returns @time adjusted with the internal offset.
     */
    adjust(time: Gst.ClockTime): Gst.ClockTime
    /**
     * Report the time as returned by the #GstAudioClockGetTimeFunc without applying
     * any offsets.
     * @returns the time as reported by the time function of the audio clock
     */
    get_time(): Gst.ClockTime
    /**
     * Invalidate the clock function. Call this function when the provided
     * #GstAudioClockGetTimeFunc cannot be called anymore, for example, when the
     * user_data becomes invalid.
     * 
     * After calling this function, `clock` will return the last returned time for
     * the rest of its lifetime.
     */
    invalidate(): void
    /**
     * Inform `clock` that future calls to #GstAudioClockGetTimeFunc will return values
     * starting from `time`. The clock will update an internal offset to make sure that
     * future calls to internal_time will return an increasing result as required by
     * the #GstClock object.
     * @param time a #GstClockTime
     */
    reset(time: Gst.ClockTime): void

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

    // Class property signals of GstAudio-1.0.GstAudio.AudioClock

    connect(sigName: "notify::clock-type", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clock-type", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: "notify::window-size", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-size", ...args: any[]): void
    connect(sigName: "notify::window-threshold", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstAudioClock makes it easy for elements to implement a #GstClock, they
 * simply need to provide a function that returns the current clock time.
 * 
 * This object is internally used to implement the clock in #GstAudioBaseSink.
 * @class 
 */
export class AudioClock extends Gst.SystemClock {

    // Own properties of GstAudio-1.0.GstAudio.AudioClock

    static name: string
    static $gtype: GObject.GType<AudioClock>

    // Constructors of GstAudio-1.0.GstAudio.AudioClock

    constructor(config?: AudioClock.ConstructorProperties) 
    /**
     * Create a new #GstAudioClock instance. Whenever the clock time should be
     * calculated it will call `func` with `user_data`. When `func` returns
     * #GST_CLOCK_TIME_NONE, the clock will return the last reported time.
     * @constructor 
     * @param name the name of the clock
     * @param func a function
     * @returns a new #GstAudioClock casted to a #GstClock.
     */
    constructor(name: string | null, func: AudioClockGetTimeFunc) 
    /**
     * Create a new #GstAudioClock instance. Whenever the clock time should be
     * calculated it will call `func` with `user_data`. When `func` returns
     * #GST_CLOCK_TIME_NONE, the clock will return the last reported time.
     * @constructor 
     * @param name the name of the clock
     * @param func a function
     * @returns a new #GstAudioClock casted to a #GstClock.
     */
    static new(name: string | null, func: AudioClockGetTimeFunc): AudioClock
    _init(config?: AudioClock.ConstructorProperties): void
}

export module AudioDecoder {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {

        // Own constructor properties of GstAudio-1.0.GstAudio.AudioDecoder

        /**
         * Maximum number of tolerated consecutive decode errors. See
         * gst_audio_decoder_set_max_errors() for more details.
         */
        max_errors?: number | null
        min_latency?: number | null
        plc?: boolean | null
        tolerance?: number | null
    }

}

export interface AudioDecoder {

    // Own properties of GstAudio-1.0.GstAudio.AudioDecoder

    /**
     * Maximum number of tolerated consecutive decode errors. See
     * gst_audio_decoder_set_max_errors() for more details.
     */
    max_errors: number
    min_latency: number
    plc: boolean
    tolerance: number

    // Conflicting properties

    object: any

    // Own fields of GstAudio-1.0.GstAudio.AudioDecoder

    element: Gst.Element
    sinkpad: Gst.Pad
    srcpad: Gst.Pad
    stream_lock: GLib.RecMutex
    input_segment: Gst.Segment
    output_segment: Gst.Segment

    // Owm methods of GstAudio-1.0.GstAudio.AudioDecoder

    /**
     * Helper function that allocates a buffer to hold an audio frame
     * for `dec'`s current output format.
     * @param size size of the buffer
     * @returns allocated buffer
     */
    allocate_output_buffer(size: number): Gst.Buffer
    /**
     * Collects decoded data and pushes it downstream.
     * 
     * `buf` may be NULL in which case the indicated number of frames
     * are discarded and considered to have produced no output
     * (e.g. lead-in or setup frames).
     * Otherwise, source pad caps must be set when it is called with valid
     * data in `buf`.
     * 
     * Note that a frame received in #GstAudioDecoderClass.handle_frame() may be
     * invalidated by a call to this function.
     * @param buf decoded data
     * @param frames number of decoded frames represented by decoded data
     * @returns a #GstFlowReturn that should be escalated to caller (of caller)
     */
    finish_frame(buf: Gst.Buffer | null, frames: number): Gst.FlowReturn
    /**
     * Collects decoded data and pushes it downstream. This function may be called
     * multiple times for a given input frame.
     * 
     * `buf` may be NULL in which case it is assumed that the current input frame is
     * finished. This is equivalent to calling gst_audio_decoder_finish_subframe()
     * with a NULL buffer and frames=1 after having pushed out all decoded audio
     * subframes using this function.
     * 
     * When called with valid data in `buf` the source pad caps must have been set
     * already.
     * 
     * Note that a frame received in #GstAudioDecoderClass.handle_frame() may be
     * invalidated by a call to this function.
     * @param buf decoded data
     * @returns a #GstFlowReturn that should be escalated to caller (of caller)
     */
    finish_subframe(buf: Gst.Buffer | null): Gst.FlowReturn
    /**
     * Lets #GstAudioDecoder sub-classes to know the memory `allocator`
     * used by the base class and its `params`.
     * 
     * Unref the `allocator` after use it.
     */
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams ]
    get_audio_info(): AudioInfo
    get_delay(): number
    /**
     * Queries decoder drain handling.
     * @returns TRUE if drainable handling is enabled. MT safe.
     */
    get_drainable(): boolean
    get_estimate_rate(): number
    /**
     * Sets the variables pointed to by `min` and `max` to the currently configured
     * latency.
     */
    get_latency(): [ /* min */ Gst.ClockTime, /* max */ Gst.ClockTime ]
    get_max_errors(): number
    /**
     * Queries decoder's latency aggregation.
     * @returns aggregation latency. MT safe.
     */
    get_min_latency(): Gst.ClockTime
    /**
     * Queries decoder required format handling.
     * @returns TRUE if required format handling is enabled. MT safe.
     */
    get_needs_format(): boolean
    /**
     * Return current parsing (sync and eos) state.
     */
    get_parse_state(): [ /* sync */ boolean, /* eos */ boolean ]
    /**
     * Queries decoder packet loss concealment handling.
     * @returns TRUE if packet loss concealment is enabled. MT safe.
     */
    get_plc(): boolean
    get_plc_aware(): number
    /**
     * Queries current audio jitter tolerance threshold.
     * @returns decoder audio jitter tolerance threshold. MT safe.
     */
    get_tolerance(): Gst.ClockTime
    /**
     * Sets the audio decoder tags and how they should be merged with any
     * upstream stream tags. This will override any tags previously-set
     * with gst_audio_decoder_merge_tags().
     * 
     * Note that this is provided for convenience, and the subclass is
     * not required to use this and can still do tag handling on its own.
     * @param tags a #GstTagList to merge, or NULL
     * @param mode the #GstTagMergeMode to use, usually #GST_TAG_MERGE_REPLACE
     */
    merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    /**
     * Negotiate with downstream elements to currently configured #GstAudioInfo.
     * Unmark GST_PAD_FLAG_NEED_RECONFIGURE in any case. But mark it again if
     * negotiate fails.
     * @returns %TRUE if the negotiation succeeded, else %FALSE.
     */
    negotiate(): boolean
    /**
     * Returns caps that express `caps` (or sink template caps if `caps` == NULL)
     * restricted to rate/channels/... combinations supported by downstream
     * elements.
     * @param caps initial caps
     * @param filter filter caps
     * @returns a #GstCaps owned by caller
     */
    proxy_getcaps(caps: Gst.Caps | null, filter: Gst.Caps | null): Gst.Caps
    /**
     * Sets a caps in allocation query which are different from the set
     * pad's caps. Use this function before calling
     * gst_audio_decoder_negotiate(). Setting to %NULL the allocation
     * query will use the caps from the pad.
     * @param allocation_caps a #GstCaps or %NULL
     */
    set_allocation_caps(allocation_caps: Gst.Caps | null): void
    /**
     * Configures decoder drain handling.  If drainable, subclass might
     * be handed a NULL buffer to have it return any leftover decoded data.
     * Otherwise, it is not considered so capable and will only ever be passed
     * real data.
     * 
     * MT safe.
     * @param enabled new state
     */
    set_drainable(enabled: boolean): void
    /**
     * Allows baseclass to perform byte to time estimated conversion.
     * @param enabled whether to enable byte to time conversion
     */
    set_estimate_rate(enabled: boolean): void
    /**
     * Sets decoder latency. If the provided values changed from
     * previously provided ones, this will also post a LATENCY message on the bus
     * so the pipeline can reconfigure its global latency.
     * @param min minimum latency
     * @param max maximum latency
     */
    set_latency(min: Gst.ClockTime, max: Gst.ClockTime): void
    /**
     * Sets numbers of tolerated decoder errors, where a tolerated one is then only
     * warned about, but more than tolerated will lead to fatal error. You can set
     * -1 for never returning fatal errors. Default is set to
     * GST_AUDIO_DECODER_MAX_ERRORS.
     * @param num max tolerated errors
     */
    set_max_errors(num: number): void
    /**
     * Sets decoder minimum aggregation latency.
     * 
     * MT safe.
     * @param num new minimum latency
     */
    set_min_latency(num: Gst.ClockTime): void
    /**
     * Configures decoder format needs.  If enabled, subclass needs to be
     * negotiated with format caps before it can process any data.  It will then
     * never be handed any data before it has been configured.
     * Otherwise, it might be handed data without having been configured and
     * is then expected being able to do so either by default
     * or based on the input data.
     * 
     * MT safe.
     * @param enabled new state
     */
    set_needs_format(enabled: boolean): void
    /**
     * Configure output caps on the srcpad of `dec`. Similar to
     * gst_audio_decoder_set_output_format(), but allows subclasses to specify
     * output caps that can't be expressed via #GstAudioInfo e.g. caps that have
     * caps features.
     * @param caps (fixed) #GstCaps
     * @returns %TRUE on success.
     */
    set_output_caps(caps: Gst.Caps): boolean
    /**
     * Configure output info on the srcpad of `dec`.
     * @param info #GstAudioInfo
     * @returns %TRUE on success.
     */
    set_output_format(info: AudioInfo): boolean
    /**
     * Enable or disable decoder packet loss concealment, provided subclass
     * and codec are capable and allow handling plc.
     * 
     * MT safe.
     * @param enabled new state
     */
    set_plc(enabled: boolean): void
    /**
     * Indicates whether or not subclass handles packet loss concealment (plc).
     * @param plc new plc state
     */
    set_plc_aware(plc: boolean): void
    /**
     * Configures decoder audio jitter tolerance threshold.
     * 
     * MT safe.
     * @param tolerance new tolerance
     */
    set_tolerance(tolerance: Gst.ClockTime): void
    /**
     * Lets #GstAudioDecoder sub-classes decide if they want the sink pad
     * to use the default pad query handler to reply to accept-caps queries.
     * 
     * By setting this to true it is possible to further customize the default
     * handler with %GST_PAD_SET_ACCEPT_INTERSECT and
     * %GST_PAD_SET_ACCEPT_TEMPLATE
     * @param use if the default pad accept-caps query handling should be used
     */
    set_use_default_pad_acceptcaps(use: boolean): void

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

    // Own virtual methods of GstAudio-1.0.GstAudio.AudioDecoder

    vfunc_close(): boolean
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_flush(hard: boolean): void
    vfunc_getcaps(filter: Gst.Caps): Gst.Caps
    vfunc_handle_frame(buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * Negotiate with downstream elements to currently configured #GstAudioInfo.
     * Unmark GST_PAD_FLAG_NEED_RECONFIGURE in any case. But mark it again if
     * negotiate fails.
     * @virtual 
     * @returns %TRUE if the negotiation succeeded, else %FALSE.
     */
    vfunc_negotiate(): boolean
    vfunc_open(): boolean
    vfunc_parse(adapter: GstBase.Adapter): [ /* returnType */ Gst.FlowReturn, /* offset */ number, /* length */ number ]
    vfunc_pre_push(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_propose_allocation(query: Gst.Query): boolean
    vfunc_set_format(caps: Gst.Caps): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_sink_query(query: Gst.Query): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_src_query(query: Gst.Query): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_transform_meta(outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer): boolean

    // Class property signals of GstAudio-1.0.GstAudio.AudioDecoder

    connect(sigName: "notify::max-errors", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-errors", ...args: any[]): void
    connect(sigName: "notify::min-latency", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-latency", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-latency", ...args: any[]): void
    connect(sigName: "notify::plc", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plc", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::plc", ...args: any[]): void
    connect(sigName: "notify::tolerance", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tolerance", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tolerance", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This base class is for audio decoders turning encoded data into
 * raw audio samples.
 * 
 * GstAudioDecoder and subclass should cooperate as follows.
 * 
 * ## Configuration
 * 
 *   * Initially, GstAudioDecoder calls `start` when the decoder element
 *     is activated, which allows subclass to perform any global setup.
 *     Base class (context) parameters can already be set according to subclass
 *     capabilities (or possibly upon receive more information in subsequent
 *     `set_format)`.
 *   * GstAudioDecoder calls `set_format` to inform subclass of the format
 *     of input audio data that it is about to receive.
 *     While unlikely, it might be called more than once, if changing input
 *     parameters require reconfiguration.
 *   * GstAudioDecoder calls `stop` at end of all processing.
 * 
 * As of configuration stage, and throughout processing, GstAudioDecoder
 * provides various (context) parameters, e.g. describing the format of
 * output audio data (valid when output caps have been set) or current parsing state.
 * Conversely, subclass can and should configure context to inform
 * base class of its expectation w.r.t. buffer handling.
 * 
 * ## Data processing
 *     * Base class gathers input data, and optionally allows subclass
 *       to parse this into subsequently manageable (as defined by subclass)
 *       chunks.  Such chunks are subsequently referred to as 'frames',
 *       though they may or may not correspond to 1 (or more) audio format frame.
 *     * Input frame is provided to subclass' `handle_frame`.
 *     * If codec processing results in decoded data, subclass should call
 *       `gst_audio_decoder_finish_frame` to have decoded data pushed
 *       downstream.
 *     * Just prior to actually pushing a buffer downstream,
 *       it is passed to `pre_push`.  Subclass should either use this callback
 *       to arrange for additional downstream pushing or otherwise ensure such
 *       custom pushing occurs after at least a method call has finished since
 *       setting src pad caps.
 *     * During the parsing process GstAudioDecoderClass will handle both
 *       srcpad and sinkpad events. Sink events will be passed to subclass
 *       if `event` callback has been provided.
 * 
 * ## Shutdown phase
 * 
 *   * GstAudioDecoder class calls `stop` to inform the subclass that data
 *     parsing will be stopped.
 * 
 * Subclass is responsible for providing pad template caps for
 * source and sink pads. The pads need to be named "sink" and "src". It also
 * needs to set the fixed caps on srcpad, when the format is ensured.  This
 * is typically when base class calls subclass' `set_format` function, though
 * it might be delayed until calling `gst_audio_decoder_finish_frame`.
 * 
 * In summary, above process should have subclass concentrating on
 * codec data processing while leaving other matters to base class,
 * such as most notably timestamp handling.  While it may exert more control
 * in this area (see e.g. `pre_push)`, it is very much not recommended.
 * 
 * In particular, base class will try to arrange for perfect output timestamps
 * as much as possible while tracking upstream timestamps.
 * To this end, if deviation between the next ideal expected perfect timestamp
 * and upstream exceeds #GstAudioDecoder:tolerance, then resync to upstream
 * occurs (which would happen always if the tolerance mechanism is disabled).
 * 
 * In non-live pipelines, baseclass can also (configurably) arrange for
 * output buffer aggregation which may help to redue large(r) numbers of
 * small(er) buffers being pushed and processed downstream. Note that this
 * feature is only available if the buffer layout is interleaved. For planar
 * buffers, the decoder implementation is fully responsible for the output
 * buffer size.
 * 
 * On the other hand, it should be noted that baseclass only provides limited
 * seeking support (upon explicit subclass request), as full-fledged support
 * should rather be left to upstream demuxer, parser or alike.  This simple
 * approach caters for seeking and duration reporting using estimated input
 * bitrates.
 * 
 * Things that subclass need to take care of:
 * 
 *   * Provide pad templates
 *   * Set source pad caps when appropriate
 *   * Set user-configurable properties to sane defaults for format and
 *      implementing codec at hand, and convey some subclass capabilities and
 *      expectations in context.
 * 
 *   * Accept data in `handle_frame` and provide encoded results to
 *      `gst_audio_decoder_finish_frame`.  If it is prepared to perform
 *      PLC, it should also accept NULL data in `handle_frame` and provide for
 *      data for indicated duration.
 * @class 
 */
export class AudioDecoder extends Gst.Element {

    // Own properties of GstAudio-1.0.GstAudio.AudioDecoder

    static name: string
    static $gtype: GObject.GType<AudioDecoder>

    // Constructors of GstAudio-1.0.GstAudio.AudioDecoder

    constructor(config?: AudioDecoder.ConstructorProperties) 
    _init(config?: AudioDecoder.ConstructorProperties): void
}

export module AudioEncoder {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Preset.ConstructorProperties, Gst.Element.ConstructorProperties {

        // Own constructor properties of GstAudio-1.0.GstAudio.AudioEncoder

        hard_resync?: boolean | null
        perfect_timestamp?: boolean | null
        tolerance?: number | null
    }

}

export interface AudioEncoder extends Gst.Preset {

    // Own properties of GstAudio-1.0.GstAudio.AudioEncoder

    hard_resync: boolean
    readonly mark_granule: boolean
    perfect_timestamp: boolean
    tolerance: number

    // Conflicting properties

    object: any

    // Own fields of GstAudio-1.0.GstAudio.AudioEncoder

    element: Gst.Element
    sinkpad: Gst.Pad
    srcpad: Gst.Pad
    stream_lock: GLib.RecMutex
    input_segment: Gst.Segment
    output_segment: Gst.Segment

    // Owm methods of GstAudio-1.0.GstAudio.AudioEncoder

    /**
     * Helper function that allocates a buffer to hold an encoded audio frame
     * for `enc'`s current output format.
     * @param size size of the buffer
     * @returns allocated buffer
     */
    allocate_output_buffer(size: number): Gst.Buffer
    /**
     * Collects encoded data and pushes encoded data downstream.
     * Source pad caps must be set when this is called.
     * 
     * If `samples` < 0, then best estimate is all samples provided to encoder
     * (subclass) so far.  `buf` may be NULL, in which case next number of `samples`
     * are considered discarded, e.g. as a result of discontinuous transmission,
     * and a discontinuity is marked.
     * 
     * Note that samples received in #GstAudioEncoderClass.handle_frame()
     * may be invalidated by a call to this function.
     * @param buffer encoded data
     * @param samples number of samples (per channel) represented by encoded data
     * @returns a #GstFlowReturn that should be escalated to caller (of caller)
     */
    finish_frame(buffer: Gst.Buffer | null, samples: number): Gst.FlowReturn
    /**
     * Lets #GstAudioEncoder sub-classes to know the memory `allocator`
     * used by the base class and its `params`.
     * 
     * Unref the `allocator` after use it.
     */
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams ]
    get_audio_info(): AudioInfo
    /**
     * Queries encoder drain handling.
     * @returns TRUE if drainable handling is enabled. MT safe.
     */
    get_drainable(): boolean
    get_frame_max(): number
    get_frame_samples_max(): number
    get_frame_samples_min(): number
    /**
     * Queries encoder hard minimum handling.
     * @returns TRUE if hard minimum handling is enabled. MT safe.
     */
    get_hard_min(): boolean
    get_hard_resync(): boolean
    /**
     * Sets the variables pointed to by `min` and `max` to the currently configured
     * latency.
     */
    get_latency(): [ /* min */ Gst.ClockTime, /* max */ Gst.ClockTime ]
    get_lookahead(): number
    /**
     * Queries if the encoder will handle granule marking.
     * @returns TRUE if granule marking is enabled. MT safe.
     */
    get_mark_granule(): boolean
    /**
     * Queries encoder perfect timestamp behaviour.
     * @returns TRUE if perfect timestamp setting enabled. MT safe.
     */
    get_perfect_timestamp(): boolean
    /**
     * Queries current audio jitter tolerance threshold.
     * @returns encoder audio jitter tolerance threshold. MT safe.
     */
    get_tolerance(): Gst.ClockTime
    /**
     * Sets the audio encoder tags and how they should be merged with any
     * upstream stream tags. This will override any tags previously-set
     * with gst_audio_encoder_merge_tags().
     * 
     * Note that this is provided for convenience, and the subclass is
     * not required to use this and can still do tag handling on its own.
     * 
     * MT safe.
     * @param tags a #GstTagList to merge, or NULL to unset     previously-set tags
     * @param mode the #GstTagMergeMode to use, usually #GST_TAG_MERGE_REPLACE
     */
    merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    /**
     * Negotiate with downstream elements to currently configured #GstCaps.
     * Unmark GST_PAD_FLAG_NEED_RECONFIGURE in any case. But mark it again if
     * negotiate fails.
     * @returns %TRUE if the negotiation succeeded, else %FALSE.
     */
    negotiate(): boolean
    /**
     * Returns caps that express `caps` (or sink template caps if `caps` == NULL)
     * restricted to channel/rate combinations supported by downstream elements
     * (e.g. muxers).
     * @param caps initial caps
     * @param filter filter caps
     * @returns a #GstCaps owned by caller
     */
    proxy_getcaps(caps: Gst.Caps | null, filter: Gst.Caps | null): Gst.Caps
    /**
     * Sets a caps in allocation query which are different from the set
     * pad's caps. Use this function before calling
     * gst_audio_encoder_negotiate(). Setting to %NULL the allocation
     * query will use the caps from the pad.
     * @param allocation_caps a #GstCaps or %NULL
     */
    set_allocation_caps(allocation_caps: Gst.Caps | null): void
    /**
     * Configures encoder drain handling.  If drainable, subclass might
     * be handed a NULL buffer to have it return any leftover encoded data.
     * Otherwise, it is not considered so capable and will only ever be passed
     * real data.
     * 
     * MT safe.
     * @param enabled new state
     */
    set_drainable(enabled: boolean): void
    /**
     * Sets max number of frames accepted at once (assumed minimally 1).
     * Requires `frame_samples_min` and `frame_samples_max` to be the equal.
     * 
     * Note: This value will be reset to 0 every time before
     * #GstAudioEncoderClass.set_format() is called.
     * @param num number of frames
     */
    set_frame_max(num: number): void
    /**
     * Sets number of samples (per channel) subclass needs to be handed,
     * at most or will be handed all available if 0.
     * 
     * If an exact number of samples is required, gst_audio_encoder_set_frame_samples_min()
     * must be called with the same number.
     * 
     * Note: This value will be reset to 0 every time before
     * #GstAudioEncoderClass.set_format() is called.
     * @param num number of samples per frame
     */
    set_frame_samples_max(num: number): void
    /**
     * Sets number of samples (per channel) subclass needs to be handed,
     * at least or will be handed all available if 0.
     * 
     * If an exact number of samples is required, gst_audio_encoder_set_frame_samples_max()
     * must be called with the same number.
     * 
     * Note: This value will be reset to 0 every time before
     * #GstAudioEncoderClass.set_format() is called.
     * @param num number of samples per frame
     */
    set_frame_samples_min(num: number): void
    /**
     * Configures encoder hard minimum handling.  If enabled, subclass
     * will never be handed less samples than it configured, which otherwise
     * might occur near end-of-data handling.  Instead, the leftover samples
     * will simply be discarded.
     * 
     * MT safe.
     * @param enabled new state
     */
    set_hard_min(enabled: boolean): void
    set_hard_resync(enabled: boolean): void
    /**
     * Set the codec headers to be sent downstream whenever requested.
     * @param headers a list of   #GstBuffer containing the codec header
     */
    set_headers(headers: Gst.Buffer[]): void
    /**
     * Sets encoder latency. If the provided values changed from
     * previously provided ones, this will also post a LATENCY message on the bus
     * so the pipeline can reconfigure its global latency.
     * @param min minimum latency
     * @param max maximum latency
     */
    set_latency(min: Gst.ClockTime, max: Gst.ClockTime): void
    /**
     * Sets encoder lookahead (in units of input rate samples)
     * 
     * Note: This value will be reset to 0 every time before
     * #GstAudioEncoderClass.set_format() is called.
     * @param num lookahead
     */
    set_lookahead(num: number): void
    /**
     * Enable or disable encoder granule handling.
     * 
     * MT safe.
     * @param enabled new state
     */
    set_mark_granule(enabled: boolean): void
    /**
     * Configure output caps on the srcpad of `enc`.
     * @param caps #GstCaps
     * @returns %TRUE on success.
     */
    set_output_format(caps: Gst.Caps): boolean
    /**
     * Enable or disable encoder perfect output timestamp preference.
     * 
     * MT safe.
     * @param enabled new state
     */
    set_perfect_timestamp(enabled: boolean): void
    /**
     * Configures encoder audio jitter tolerance threshold.
     * 
     * MT safe.
     * @param tolerance new tolerance
     */
    set_tolerance(tolerance: Gst.ClockTime): void

    // Conflicting methods

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

    // Own virtual methods of GstAudio-1.0.GstAudio.AudioEncoder

    vfunc_close(): boolean
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_flush(): void
    vfunc_getcaps(filter: Gst.Caps): Gst.Caps
    vfunc_handle_frame(buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * Negotiate with downstream elements to currently configured #GstCaps.
     * Unmark GST_PAD_FLAG_NEED_RECONFIGURE in any case. But mark it again if
     * negotiate fails.
     * @virtual 
     * @returns %TRUE if the negotiation succeeded, else %FALSE.
     */
    vfunc_negotiate(): boolean
    vfunc_open(): boolean
    vfunc_pre_push(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_propose_allocation(query: Gst.Query): boolean
    vfunc_set_format(info: AudioInfo): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_sink_query(query: Gst.Query): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_src_query(query: Gst.Query): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_transform_meta(outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer): boolean

    // Class property signals of GstAudio-1.0.GstAudio.AudioEncoder

    connect(sigName: "notify::hard-resync", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hard-resync", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hard-resync", ...args: any[]): void
    connect(sigName: "notify::mark-granule", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-granule", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mark-granule", ...args: any[]): void
    connect(sigName: "notify::perfect-timestamp", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::perfect-timestamp", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::perfect-timestamp", ...args: any[]): void
    connect(sigName: "notify::tolerance", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tolerance", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tolerance", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This base class is for audio encoders turning raw audio samples into
 * encoded audio data.
 * 
 * GstAudioEncoder and subclass should cooperate as follows.
 * 
 * ## Configuration
 * 
 *   * Initially, GstAudioEncoder calls `start` when the encoder element
 *     is activated, which allows subclass to perform any global setup.
 * 
 *   * GstAudioEncoder calls `set_format` to inform subclass of the format
 *     of input audio data that it is about to receive.  Subclass should
 *     setup for encoding and configure various base class parameters
 *     appropriately, notably those directing desired input data handling.
 *     While unlikely, it might be called more than once, if changing input
 *     parameters require reconfiguration.
 * 
 *   * GstAudioEncoder calls `stop` at end of all processing.
 * 
 * As of configuration stage, and throughout processing, GstAudioEncoder
 * maintains various parameters that provide required context,
 * e.g. describing the format of input audio data.
 * Conversely, subclass can and should configure these context parameters
 * to inform base class of its expectation w.r.t. buffer handling.
 * 
 * ## Data processing
 * 
 *     * Base class gathers input sample data (as directed by the context's
 *       frame_samples and frame_max) and provides this to subclass' `handle_frame`.
 *     * If codec processing results in encoded data, subclass should call
 *       gst_audio_encoder_finish_frame() to have encoded data pushed
 *       downstream. Alternatively, it might also call
 *       gst_audio_encoder_finish_frame() (with a NULL buffer and some number of
 *       dropped samples) to indicate dropped (non-encoded) samples.
 *     * Just prior to actually pushing a buffer downstream,
 *       it is passed to `pre_push`.
 *     * During the parsing process GstAudioEncoderClass will handle both
 *       srcpad and sinkpad events. Sink events will be passed to subclass
 *       if `event` callback has been provided.
 * 
 * ## Shutdown phase
 * 
 *   * GstAudioEncoder class calls `stop` to inform the subclass that data
 *     parsing will be stopped.
 * 
 * Subclass is responsible for providing pad template caps for
 * source and sink pads. The pads need to be named "sink" and "src". It also
 * needs to set the fixed caps on srcpad, when the format is ensured.  This
 * is typically when base class calls subclass' `set_format` function, though
 * it might be delayed until calling `gst_audio_encoder_finish_frame`.
 * 
 * In summary, above process should have subclass concentrating on
 * codec data processing while leaving other matters to base class,
 * such as most notably timestamp handling.  While it may exert more control
 * in this area (see e.g. `pre_push)`, it is very much not recommended.
 * 
 * In particular, base class will either favor tracking upstream timestamps
 * (at the possible expense of jitter) or aim to arrange for a perfect stream of
 * output timestamps, depending on #GstAudioEncoder:perfect-timestamp.
 * However, in the latter case, the input may not be so perfect or ideal, which
 * is handled as follows.  An input timestamp is compared with the expected
 * timestamp as dictated by input sample stream and if the deviation is less
 * than #GstAudioEncoder:tolerance, the deviation is discarded.
 * Otherwise, it is considered a discontuinity and subsequent output timestamp
 * is resynced to the new position after performing configured discontinuity
 * processing.  In the non-perfect-timestamp case, an upstream variation
 * exceeding tolerance only leads to marking DISCONT on subsequent outgoing
 * (while timestamps are adjusted to upstream regardless of variation).
 * While DISCONT is also marked in the perfect-timestamp case, this one
 * optionally (see #GstAudioEncoder:hard-resync)
 * performs some additional steps, such as clipping of (early) input samples
 * or draining all currently remaining input data, depending on the direction
 * of the discontuinity.
 * 
 * If perfect timestamps are arranged, it is also possible to request baseclass
 * (usually set by subclass) to provide additional buffer metadata (in OFFSET
 * and OFFSET_END) fields according to granule defined semantics currently
 * needed by oggmux.  Specifically, OFFSET is set to granulepos (= sample count
 * including buffer) and OFFSET_END to corresponding timestamp (as determined
 * by same sample count and sample rate).
 * 
 * Things that subclass need to take care of:
 * 
 *   * Provide pad templates
 *   * Set source pad caps when appropriate
 *   * Inform base class of buffer processing needs using context's
 *      frame_samples and frame_bytes.
 *   * Set user-configurable properties to sane defaults for format and
 *      implementing codec at hand, e.g. those controlling timestamp behaviour
 *      and discontinuity processing.
 *   * Accept data in `handle_frame` and provide encoded results to
 *      gst_audio_encoder_finish_frame().
 * @class 
 */
export class AudioEncoder extends Gst.Element {

    // Own properties of GstAudio-1.0.GstAudio.AudioEncoder

    static name: string
    static $gtype: GObject.GType<AudioEncoder>

    // Constructors of GstAudio-1.0.GstAudio.AudioEncoder

    constructor(config?: AudioEncoder.ConstructorProperties) 
    _init(config?: AudioEncoder.ConstructorProperties): void
}

export module AudioFilter {

    // Constructor properties interface

    export interface ConstructorProperties extends GstBase.BaseTransform.ConstructorProperties {
    }

}

export interface AudioFilter {

    // Conflicting properties

    object: any

    // Own fields of GstAudio-1.0.GstAudio.AudioFilter

    basetransform: GstBase.BaseTransform
    info: AudioInfo

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
    vfunc_query(direction: Gst.PadDirection, query: Gst.Query): boolean

    // Overloads of vfunc_query

    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @virtual 
     * @param query the #GstQuery.
     * @returns %TRUE if the query could be performed. MT safe.
     */
    vfunc_query(query: Gst.Query): boolean
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @virtual 
     * @param query the #GstQuery.
     * @returns %TRUE if the query could be performed. MT safe.
     */
    vfunc_query(query: Gst.Query): boolean

    // Own virtual methods of GstAudio-1.0.GstAudio.AudioFilter

    vfunc_setup(info: AudioInfo): boolean

    // Class property signals of GstAudio-1.0.GstAudio.AudioFilter

    connect(sigName: "notify::qos", callback: (($obj: AudioFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: AudioFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstAudioFilter is a #GstBaseTransform<!-- -->-derived base class for simple audio
 * filters, ie. those that output the same format that they get as input.
 * 
 * #GstAudioFilter will parse the input format for you (with error checking)
 * before calling your setup function. Also, elements deriving from
 * #GstAudioFilter may use gst_audio_filter_class_add_pad_templates() from
 * their class_init function to easily configure the set of caps/formats that
 * the element is able to handle.
 * 
 * Derived classes should override the #GstAudioFilterClass.setup() and
 * #GstBaseTransformClass.transform_ip() and/or
 * #GstBaseTransformClass.transform()
 * virtual functions in their class_init function.
 * @class 
 */
export class AudioFilter extends GstBase.BaseTransform {

    // Own properties of GstAudio-1.0.GstAudio.AudioFilter

    static name: string
    static $gtype: GObject.GType<AudioFilter>

    // Constructors of GstAudio-1.0.GstAudio.AudioFilter

    constructor(config?: AudioFilter.ConstructorProperties) 
    _init(config?: AudioFilter.ConstructorProperties): void
    /**
     * Convenience function to add pad templates to this element class, with
     * `allowed_caps` as the caps that can be handled.
     * 
     * This function is usually used from within a GObject class_init function.
     * @param allowed_caps what formats the filter can handle, as #GstCaps
     */
    static add_pad_templates(klass: AudioFilter | Function | GObject.GType, allowed_caps: Gst.Caps): void
}

export module AudioRingBuffer {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
    }

}

export interface AudioRingBuffer {

    // Own fields of GstAudio-1.0.GstAudio.AudioRingBuffer

    object: any
    /**
     * used to signal start/stop/pause/resume actions
     * @field 
     */
    cond: GLib.Cond
    /**
     * boolean indicating that the ringbuffer is open
     * @field 
     */
    open: boolean
    /**
     * boolean indicating that the ringbuffer is acquired
     * @field 
     */
    acquired: boolean
    /**
     * data in the ringbuffer
     * @field 
     */
    memory: number
    /**
     * size of data in the ringbuffer
     * @field 
     */
    size: number
    /**
     * format and layout of the ringbuffer data
     * @field 
     */
    spec: AudioRingBufferSpec
    /**
     * number of samples in one segment
     * @field 
     */
    samples_per_seg: number
    /**
     * pointer to memory holding one segment of silence samples
     * @field 
     */
    empty_seg: number
    /**
     * state of the buffer
     * @field 
     */
    state: number
    /**
     * readpointer in the ringbuffer
     * @field 
     */
    segdone: number
    /**
     * segment corresponding to segment 0 (unused)
     * @field 
     */
    segbase: number
    /**
     * is a reader or writer waiting for a free segment
     * @field 
     */
    waiting: number

    // Owm methods of GstAudio-1.0.GstAudio.AudioRingBuffer

    /**
     * Allocate the resources for the ringbuffer. This function fills
     * in the data pointer of the ring buffer with a valid #GstBuffer
     * to which samples can be written.
     * @param spec the specs of the buffer
     * @returns TRUE if the device could be acquired, FALSE on error. MT safe.
     */
    acquire(spec: AudioRingBufferSpec): boolean
    /**
     * Activate `buf` to start or stop pulling data.
     * 
     * MT safe.
     * @param active the new mode
     * @returns TRUE if the device could be activated in the requested mode, FALSE on error.
     */
    activate(active: boolean): boolean
    /**
     * Subclasses should call this function to notify the fact that
     * `advance` segments are now processed by the device.
     * 
     * MT safe.
     * @param advance the number of segments written
     */
    advance(advance: number): void
    /**
     * Clear the given segment of the buffer with silence samples.
     * This function is used by subclasses.
     * 
     * MT safe.
     * @param segment the segment to clear
     */
    clear(segment: number): void
    /**
     * Clear all samples from the ringbuffer.
     * 
     * MT safe.
     */
    clear_all(): void
    /**
     * Close the audio device associated with the ring buffer. The ring buffer
     * should already have been released via gst_audio_ring_buffer_release().
     * @returns TRUE if the device could be closed, FALSE on error. MT safe.
     */
    close_device(): boolean
    /**
     * Commit `in_samples` samples pointed to by `data` to the ringbuffer `buf`.
     * 
     * `in_samples` and `out_samples` define the rate conversion to perform on the
     * samples in `data`. For negative rates, `out_samples` must be negative and
     * `in_samples` positive.
     * 
     * When `out_samples` is positive, the first sample will be written at position `sample`
     * in the ringbuffer. When `out_samples` is negative, the last sample will be written to
     * `sample` in reverse order.
     * 
     * `out_samples` does not need to be a multiple of the segment size of the ringbuffer
     * although it is recommended for optimal performance.
     * 
     * `accum` will hold a temporary accumulator used in rate conversion and should be
     * set to 0 when this function is first called. In case the commit operation is
     * interrupted, one can resume the processing by passing the previously returned
     * `accum` value back to this function.
     * 
     * MT safe.
     * @param sample the sample position of the data
     * @param data the data to commit
     * @param out_samples the number of samples to write to the ringbuffer
     * @param accum accumulator for rate conversion.
     * @returns The number of samples written to the ringbuffer or -1 on error. The number of samples written can be less than @out_samples when @buf was interrupted with a flush or stop.
     */
    commit(sample: number, data: Uint8Array, out_samples: number, accum: number): [ /* returnType */ number, /* sample */ number, /* accum */ number ]
    /**
     * Convert `src_val` in `src_fmt` to the equivalent value in `dest_fmt`. The result
     * will be put in `dest_val`.
     * @param src_fmt the source format
     * @param src_val the source value
     * @param dest_fmt the destination format
     * @returns TRUE if the conversion succeeded.
     */
    convert(src_fmt: Gst.Format, src_val: number, dest_fmt: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    /**
     * Get the number of samples queued in the audio device. This is
     * usually less than the segment size but can be bigger when the
     * implementation uses another internal buffer between the audio
     * device.
     * 
     * For playback ringbuffers this is the amount of samples transferred from the
     * ringbuffer to the device but still not played.
     * 
     * For capture ringbuffers this is the amount of samples in the device that are
     * not yet transferred to the ringbuffer.
     * @returns The number of samples queued in the audio device. MT safe.
     */
    delay(): number
    /**
     * Checks the status of the device associated with the ring buffer.
     * @returns TRUE if the device was open, FALSE if it was closed. MT safe.
     */
    device_is_open(): boolean
    /**
     * Check if the ringbuffer is acquired and ready to use.
     * @returns TRUE if the ringbuffer is acquired, FALSE on error. MT safe.
     */
    is_acquired(): boolean
    /**
     * Check if `buf` is activated.
     * 
     * MT safe.
     * @returns TRUE if the device is active.
     */
    is_active(): boolean
    /**
     * Check if `buf` is flushing.
     * 
     * MT safe.
     * @returns TRUE if the device is flushing.
     */
    is_flushing(): boolean
    /**
     * Tell the ringbuffer that it is allowed to start playback when
     * the ringbuffer is filled with samples.
     * 
     * MT safe.
     * @param allowed the new value
     */
    may_start(allowed: boolean): void
    /**
     * Open the audio device associated with the ring buffer. Does not perform any
     * setup on the device. You must open the device before acquiring the ring
     * buffer.
     * @returns TRUE if the device could be opened, FALSE on error. MT safe.
     */
    open_device(): boolean
    /**
     * Pause processing samples from the ringbuffer.
     * @returns TRUE if the device could be paused, FALSE on error. MT safe.
     */
    pause(): boolean
    /**
     * Returns a pointer to memory where the data from segment `segment`
     * can be found. This function is mostly used by subclasses.
     * @returns FALSE if the buffer is not started. MT safe.
     */
    prepare_read(): [ /* returnType */ boolean, /* segment */ number, /* readptr */ Uint8Array ]
    /**
     * Read `len` samples from the ringbuffer into the memory pointed
     * to by `data`.
     * The first sample should be read from position `sample` in
     * the ringbuffer.
     * 
     * `len` should not be a multiple of the segment size of the ringbuffer
     * although it is recommended.
     * 
     * `timestamp` will return the timestamp associated with the data returned.
     * @param sample the sample position of the data
     * @param data where the data should be read
     * @returns The number of samples read from the ringbuffer or -1 on error. MT safe.
     */
    read(sample: number, data: Uint8Array): [ /* returnType */ number, /* timestamp */ Gst.ClockTime ]
    /**
     * Free the resources of the ringbuffer.
     * @returns TRUE if the device could be released, FALSE on error. MT safe.
     */
    release(): boolean
    /**
     * Get the number of samples that were processed by the ringbuffer
     * since it was last started. This does not include the number of samples not
     * yet processed (see gst_audio_ring_buffer_delay()).
     * @returns The number of samples processed by the ringbuffer. MT safe.
     */
    samples_done(): number
    /**
     * Sets the given callback function on the buffer. This function
     * will be called every time a segment has been written to a device.
     * 
     * MT safe.
     * @param cb the callback to set
     */
    set_callback(cb: AudioRingBufferCallback | null): void
    /**
     * Tell the ringbuffer about the device's channel positions. This must
     * be called in when the ringbuffer is acquired.
     * @param position the device channel positions
     */
    set_channel_positions(position: AudioChannelPosition[]): void
    /**
     * Set the ringbuffer to flushing mode or normal mode.
     * 
     * MT safe.
     * @param flushing the new mode
     */
    set_flushing(flushing: boolean): void
    /**
     * Make sure that the next sample written to the device is
     * accounted for as being the `sample` sample written to the
     * device. This value will be used in reporting the current
     * sample position of the ringbuffer.
     * 
     * This function will also clear the buffer with silence.
     * 
     * MT safe.
     * @param sample the sample number to set
     */
    set_sample(sample: number): void
    set_timestamp(readseg: number, timestamp: Gst.ClockTime): void
    /**
     * Start processing samples from the ringbuffer.
     * @returns TRUE if the device could be started, FALSE on error. MT safe.
     */
    start(): boolean
    /**
     * Stop processing samples from the ringbuffer.
     * @returns TRUE if the device could be stopped, FALSE on error. MT safe.
     */
    stop(): boolean

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

    // Own virtual methods of GstAudio-1.0.GstAudio.AudioRingBuffer

    /**
     * Allocate the resources for the ringbuffer. This function fills
     * in the data pointer of the ring buffer with a valid #GstBuffer
     * to which samples can be written.
     * @virtual 
     * @param spec the specs of the buffer
     * @returns TRUE if the device could be acquired, FALSE on error. MT safe.
     */
    vfunc_acquire(spec: AudioRingBufferSpec): boolean
    /**
     * Activate `buf` to start or stop pulling data.
     * 
     * MT safe.
     * @virtual 
     * @param active the new mode
     * @returns TRUE if the device could be activated in the requested mode, FALSE on error.
     */
    vfunc_activate(active: boolean): boolean
    /**
     * Clear all samples from the ringbuffer.
     * 
     * MT safe.
     * @virtual 
     */
    vfunc_clear_all(): void
    /**
     * Close the audio device associated with the ring buffer. The ring buffer
     * should already have been released via gst_audio_ring_buffer_release().
     * @virtual 
     * @returns TRUE if the device could be closed, FALSE on error. MT safe.
     */
    vfunc_close_device(): boolean
    /**
     * Commit `in_samples` samples pointed to by `data` to the ringbuffer `buf`.
     * 
     * `in_samples` and `out_samples` define the rate conversion to perform on the
     * samples in `data`. For negative rates, `out_samples` must be negative and
     * `in_samples` positive.
     * 
     * When `out_samples` is positive, the first sample will be written at position `sample`
     * in the ringbuffer. When `out_samples` is negative, the last sample will be written to
     * `sample` in reverse order.
     * 
     * `out_samples` does not need to be a multiple of the segment size of the ringbuffer
     * although it is recommended for optimal performance.
     * 
     * `accum` will hold a temporary accumulator used in rate conversion and should be
     * set to 0 when this function is first called. In case the commit operation is
     * interrupted, one can resume the processing by passing the previously returned
     * `accum` value back to this function.
     * 
     * MT safe.
     * @virtual 
     * @param sample the sample position of the data
     * @param data the data to commit
     * @param out_samples the number of samples to write to the ringbuffer
     * @param accum accumulator for rate conversion.
     * @returns The number of samples written to the ringbuffer or -1 on error. The number of samples written can be less than @out_samples when @buf was interrupted with a flush or stop.
     */
    vfunc_commit(sample: number, data: Uint8Array, out_samples: number, accum: number): [ /* returnType */ number, /* sample */ number, /* accum */ number ]
    /**
     * Get the number of samples queued in the audio device. This is
     * usually less than the segment size but can be bigger when the
     * implementation uses another internal buffer between the audio
     * device.
     * 
     * For playback ringbuffers this is the amount of samples transferred from the
     * ringbuffer to the device but still not played.
     * 
     * For capture ringbuffers this is the amount of samples in the device that are
     * not yet transferred to the ringbuffer.
     * @virtual 
     * @returns The number of samples queued in the audio device. MT safe.
     */
    vfunc_delay(): number
    /**
     * Open the audio device associated with the ring buffer. Does not perform any
     * setup on the device. You must open the device before acquiring the ring
     * buffer.
     * @virtual 
     * @returns TRUE if the device could be opened, FALSE on error. MT safe.
     */
    vfunc_open_device(): boolean
    /**
     * Pause processing samples from the ringbuffer.
     * @virtual 
     * @returns TRUE if the device could be paused, FALSE on error. MT safe.
     */
    vfunc_pause(): boolean
    /**
     * Free the resources of the ringbuffer.
     * @virtual 
     * @returns TRUE if the device could be released, FALSE on error. MT safe.
     */
    vfunc_release(): boolean
    vfunc_resume(): boolean
    /**
     * Start processing samples from the ringbuffer.
     * @virtual 
     * @returns TRUE if the device could be started, FALSE on error. MT safe.
     */
    vfunc_start(): boolean
    /**
     * Stop processing samples from the ringbuffer.
     * @virtual 
     * @returns TRUE if the device could be stopped, FALSE on error. MT safe.
     */
    vfunc_stop(): boolean

    // Class property signals of GstAudio-1.0.GstAudio.AudioRingBuffer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This object is the base class for audio ringbuffers used by the base
 * audio source and sink classes.
 * 
 * The ringbuffer abstracts a circular buffer of data. One reader and
 * one writer can operate on the data from different threads in a lockfree
 * manner. The base class is sufficiently flexible to be used as an
 * abstraction for DMA based ringbuffers as well as a pure software
 * implementations.
 * @class 
 */
export class AudioRingBuffer extends Gst.Object {

    // Own properties of GstAudio-1.0.GstAudio.AudioRingBuffer

    static name: string
    static $gtype: GObject.GType<AudioRingBuffer>

    // Constructors of GstAudio-1.0.GstAudio.AudioRingBuffer

    constructor(config?: AudioRingBuffer.ConstructorProperties) 
    _init(config?: AudioRingBuffer.ConstructorProperties): void
    /**
     * Print debug info about the buffer sized in `spec` to the debug log.
     * @param spec the spec to debug
     */
    static debug_spec_buff(spec: AudioRingBufferSpec): void
    /**
     * Print debug info about the parsed caps in `spec` to the debug log.
     * @param spec the spec to debug
     */
    static debug_spec_caps(spec: AudioRingBufferSpec): void
    /**
     * Parse `caps` into `spec`.
     * @param spec a spec
     * @param caps a #GstCaps
     * @returns TRUE if the caps could be parsed.
     */
    static parse_caps(spec: AudioRingBufferSpec, caps: Gst.Caps): boolean
}

export module AudioSink {

    // Constructor properties interface

    export interface ConstructorProperties extends AudioBaseSink.ConstructorProperties {
    }

}

export interface AudioSink {

    // Conflicting properties

    object: any

    // Own fields of GstAudio-1.0.GstAudio.AudioSink

    element: any

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

    // Own virtual methods of GstAudio-1.0.GstAudio.AudioSink

    vfunc_close(): boolean
    vfunc_delay(): number
    vfunc_open(): boolean
    vfunc_pause(): void
    vfunc_prepare(spec: AudioRingBufferSpec): boolean

    // Overloads of vfunc_prepare

    vfunc_prepare(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_reset(): void
    vfunc_resume(): void
    vfunc_stop(): void

    // Overloads of vfunc_stop

    vfunc_stop(): boolean
    vfunc_unprepare(): boolean
    /**
     * Write samples to the device.
     * @virtual 
     * @param data the sample data
     */
    vfunc_write(data: Uint8Array): number

    // Class property signals of GstAudio-1.0.GstAudio.AudioSink

    connect(sigName: "notify::alignment-threshold", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-threshold", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alignment-threshold", ...args: any[]): void
    connect(sigName: "notify::can-activate-pull", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-activate-pull", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-activate-pull", ...args: any[]): void
    connect(sigName: "notify::discont-wait", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discont-wait", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::discont-wait", ...args: any[]): void
    connect(sigName: "notify::drift-tolerance", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drift-tolerance", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::drift-tolerance", ...args: any[]): void
    connect(sigName: "notify::provide-clock", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provide-clock", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provide-clock", ...args: any[]): void
    connect(sigName: "notify::slave-method", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slave-method", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::slave-method", ...args: any[]): void
    connect(sigName: "notify::async", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::async", ...args: any[]): void
    connect(sigName: "notify::blocksize", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::blocksize", ...args: any[]): void
    connect(sigName: "notify::enable-last-sample", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-sample", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-last-sample", ...args: any[]): void
    connect(sigName: "notify::last-sample", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-sample", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-sample", ...args: any[]): void
    connect(sigName: "notify::max-bitrate", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-bitrate", ...args: any[]): void
    connect(sigName: "notify::max-lateness", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-lateness", ...args: any[]): void
    connect(sigName: "notify::processing-deadline", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-deadline", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::processing-deadline", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: "notify::render-delay", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::render-delay", ...args: any[]): void
    connect(sigName: "notify::stats", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stats", ...args: any[]): void
    connect(sigName: "notify::sync", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sync", ...args: any[]): void
    connect(sigName: "notify::throttle-time", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle-time", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::throttle-time", ...args: any[]): void
    connect(sigName: "notify::ts-offset", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ts-offset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is the most simple base class for audio sinks that only requires
 * subclasses to implement a set of simple functions:
 * 
 * * `open()` :Open the device.
 * 
 * * `prepare()` :Configure the device with the specified format.
 * 
 * * `write()` :Write samples to the device.
 * 
 * * `reset()` :Unblock writes and flush the device.
 * 
 * * `delay()` :Get the number of samples written but not yet played
 * by the device.
 * 
 * * `unprepare()` :Undo operations done by prepare.
 * 
 * * `close()` :Close the device.
 * 
 * All scheduling of samples and timestamps is done in this base class
 * together with #GstAudioBaseSink using a default implementation of a
 * #GstAudioRingBuffer that uses threads.
 * @class 
 */
export class AudioSink extends AudioBaseSink {

    // Own properties of GstAudio-1.0.GstAudio.AudioSink

    static name: string
    static $gtype: GObject.GType<AudioSink>

    // Constructors of GstAudio-1.0.GstAudio.AudioSink

    constructor(config?: AudioSink.ConstructorProperties) 
    _init(config?: AudioSink.ConstructorProperties): void
}

export module AudioSrc {

    // Constructor properties interface

    export interface ConstructorProperties extends AudioBaseSrc.ConstructorProperties {
    }

}

export interface AudioSrc {

    // Conflicting properties

    parent: GstBase.BaseSrc & Gst.Object & Gst.Object
    object: any

    // Own fields of GstAudio-1.0.GstAudio.AudioSrc

    element: any

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
    /**
     * Allocate memory for a buffer.
     * @virtual 
     */
    vfunc_alloc(): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]

    // Overloads of vfunc_alloc

    /**
     * Ask the subclass to allocate an output buffer with `offset` and `size,` the default
     * implementation will use the negotiated allocator.
     * @virtual 
     * @param offset 
     * @param size 
     */
    vfunc_alloc(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]
    /**
     * Ask the subclass to allocate an output buffer with `offset` and `size,` the default
     * implementation will use the negotiated allocator.
     * @virtual 
     * @param offset 
     * @param size 
     */
    vfunc_alloc(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]
    /**
     * Ask the subclass to create a buffer, the default implementation will call alloc if
     * no allocated `buf` is provided and then call fill.
     * @virtual 
     * @param buf 
     */
    vfunc_create(buf: Gst.Buffer | null): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]

    // Overloads of vfunc_create

    /**
     * Ask the subclass to create a buffer with `offset` and `size,` the default
     * implementation will call alloc if no allocated `buf` is provided and then call fill.
     * @virtual 
     * @param offset 
     * @param size 
     * @param buf 
     */
    vfunc_create(offset: number, size: number, buf: Gst.Buffer | null): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]
    /**
     * Ask the subclass to create a buffer with `offset` and `size,` the default
     * implementation will call alloc if no allocated `buf` is provided and then call fill.
     * @virtual 
     * @param offset 
     * @param size 
     * @param buf 
     */
    vfunc_create(offset: number, size: number, buf: Gst.Buffer | null): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]
    vfunc_fill(buf: Gst.Buffer): Gst.FlowReturn

    // Overloads of vfunc_fill

    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn

    // Own virtual methods of GstAudio-1.0.GstAudio.AudioSrc

    vfunc_close(): boolean
    vfunc_delay(): number
    vfunc_open(): boolean
    vfunc_prepare(spec: AudioRingBufferSpec): boolean
    /**
     * Read samples from the device.
     * @virtual 
     * @param data the sample data
     */
    vfunc_read(data: Uint8Array): [ /* returnType */ number, /* timestamp */ Gst.ClockTime ]
    vfunc_reset(): void
    vfunc_unprepare(): boolean

    // Class property signals of GstAudio-1.0.GstAudio.AudioSrc

    connect(sigName: "notify::actual-buffer-time", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actual-buffer-time", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actual-buffer-time", ...args: any[]): void
    connect(sigName: "notify::actual-latency-time", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actual-latency-time", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actual-latency-time", ...args: any[]): void
    connect(sigName: "notify::provide-clock", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provide-clock", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provide-clock", ...args: any[]): void
    connect(sigName: "notify::slave-method", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slave-method", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::slave-method", ...args: any[]): void
    connect(sigName: "notify::do-timestamp", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::do-timestamp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is the most simple base class for audio sources that only requires
 * subclasses to implement a set of simple functions:
 * 
 * * `open()` :Open the device.
 * * `prepare()` :Configure the device with the specified format.
 * * `read()` :Read samples from the device.
 * * `reset()` :Unblock reads and flush the device.
 * * `delay()` :Get the number of samples in the device but not yet read.
 * * `unprepare()` :Undo operations done by prepare.
 * * `close()` :Close the device.
 * 
 * All scheduling of samples and timestamps is done in this base class
 * together with #GstAudioBaseSrc using a default implementation of a
 * #GstAudioRingBuffer that uses threads.
 * @class 
 */
export class AudioSrc extends AudioBaseSrc {

    // Own properties of GstAudio-1.0.GstAudio.AudioSrc

    static name: string
    static $gtype: GObject.GType<AudioSrc>

    // Constructors of GstAudio-1.0.GstAudio.AudioSrc

    constructor(config?: AudioSrc.ConstructorProperties) 
    _init(config?: AudioSrc.ConstructorProperties): void
}

export interface AudioAggregatorClass {

    // Own fields of GstAudio-1.0.GstAudio.AudioAggregatorClass

    parent_class: GstBase.AggregatorClass
    create_output_buffer: (aagg: AudioAggregator, num_frames: number) => Gst.Buffer
    aggregate_one_buffer: (aagg: AudioAggregator, pad: AudioAggregatorPad, inbuf: Gst.Buffer, in_offset: number, outbuf: Gst.Buffer, out_offset: number, num_frames: number) => boolean
}

export abstract class AudioAggregatorClass {

    // Own properties of GstAudio-1.0.GstAudio.AudioAggregatorClass

    static name: string
}

export interface AudioAggregatorConvertPadClass {

    // Own fields of GstAudio-1.0.GstAudio.AudioAggregatorConvertPadClass

    parent_class: AudioAggregatorPadClass
}

export abstract class AudioAggregatorConvertPadClass {

    // Own properties of GstAudio-1.0.GstAudio.AudioAggregatorConvertPadClass

    static name: string
}

export interface AudioAggregatorConvertPadPrivate {
}

export class AudioAggregatorConvertPadPrivate {

    // Own properties of GstAudio-1.0.GstAudio.AudioAggregatorConvertPadPrivate

    static name: string
}

export interface AudioAggregatorPadClass {

    // Own fields of GstAudio-1.0.GstAudio.AudioAggregatorPadClass

    parent_class: GstBase.AggregatorPadClass
    convert_buffer: (pad: AudioAggregatorPad, in_info: AudioInfo, out_info: AudioInfo, buffer: Gst.Buffer) => Gst.Buffer
    update_conversion_info: (pad: AudioAggregatorPad) => void
}

export abstract class AudioAggregatorPadClass {

    // Own properties of GstAudio-1.0.GstAudio.AudioAggregatorPadClass

    static name: string
}

export interface AudioAggregatorPadPrivate {
}

export class AudioAggregatorPadPrivate {

    // Own properties of GstAudio-1.0.GstAudio.AudioAggregatorPadPrivate

    static name: string
}

export interface AudioAggregatorPrivate {
}

export class AudioAggregatorPrivate {

    // Own properties of GstAudio-1.0.GstAudio.AudioAggregatorPrivate

    static name: string
}

export interface AudioBaseSinkClass {

    // Own fields of GstAudio-1.0.GstAudio.AudioBaseSinkClass

    /**
     * the parent class.
     * @field 
     */
    parent_class: GstBase.BaseSinkClass
    create_ringbuffer: (sink: AudioBaseSink) => AudioRingBuffer | null
    payload: (sink: AudioBaseSink, buffer: Gst.Buffer) => Gst.Buffer
}

/**
 * #GstAudioBaseSink class. Override the vmethod to implement
 * functionality.
 * @record 
 */
export abstract class AudioBaseSinkClass {

    // Own properties of GstAudio-1.0.GstAudio.AudioBaseSinkClass

    static name: string
}

export interface AudioBaseSinkPrivate {
}

export class AudioBaseSinkPrivate {

    // Own properties of GstAudio-1.0.GstAudio.AudioBaseSinkPrivate

    static name: string
}

export interface AudioBaseSrcClass {

    // Own fields of GstAudio-1.0.GstAudio.AudioBaseSrcClass

    /**
     * the parent class.
     * @field 
     */
    parent_class: GstBase.PushSrcClass
    create_ringbuffer: (src: AudioBaseSrc) => AudioRingBuffer | null
}

/**
 * #GstAudioBaseSrc class. Override the vmethod to implement
 * functionality.
 * @record 
 */
export abstract class AudioBaseSrcClass {

    // Own properties of GstAudio-1.0.GstAudio.AudioBaseSrcClass

    static name: string
}

export interface AudioBaseSrcPrivate {
}

export class AudioBaseSrcPrivate {

    // Own properties of GstAudio-1.0.GstAudio.AudioBaseSrcPrivate

    static name: string
}

export interface AudioBuffer {

    // Own fields of GstAudio-1.0.GstAudio.AudioBuffer

    /**
     * a #GstAudioInfo describing the audio properties of this buffer
     * @field 
     */
    info: AudioInfo
    /**
     * the size of the buffer in samples
     * @field 
     */
    n_samples: number
    /**
     * the number of planes available
     * @field 
     */
    n_planes: number
    /**
     * an array of `n_planes` pointers pointing to the start of each
     *   plane in the mapped buffer
     * @field 
     */
    planes: any
    /**
     * the mapped buffer
     * @field 
     */
    buffer: Gst.Buffer

    // Owm methods of GstAudio-1.0.GstAudio.AudioBuffer

    /**
     * Unmaps an audio buffer that was previously mapped with
     * gst_audio_buffer_map().
     */
    unmap(): void
}

/**
 * A structure containing the result of an audio buffer map operation,
 * which is executed with gst_audio_buffer_map(). For non-interleaved (planar)
 * buffers, the beginning of each channel in the buffer has its own pointer in
 * the `planes` array. For interleaved buffers, the `planes` array only contains
 * one item, which is the pointer to the beginning of the buffer, and `n_planes`
 * equals 1.
 * 
 * The different channels in `planes` are always in the GStreamer channel order.
 * @record 
 */
export class AudioBuffer {

    // Own properties of GstAudio-1.0.GstAudio.AudioBuffer

    static name: string

    // Constructors of GstAudio-1.0.GstAudio.AudioBuffer

    /**
     * Clip the buffer to the given %GstSegment.
     * 
     * After calling this function the caller does not own a reference to
     * `buffer` anymore.
     * @param buffer The buffer to clip.
     * @param segment Segment in %GST_FORMAT_TIME or %GST_FORMAT_DEFAULT to which           the buffer should be clipped.
     * @param rate sample rate.
     * @param bpf size of one audio frame in bytes. This is the size of one sample * number of channels.
     * @returns %NULL if the buffer is completely outside the configured segment, otherwise the clipped buffer is returned. If the buffer has no timestamp, it is assumed to be inside the segment and is not clipped
     */
    static clip(buffer: Gst.Buffer, segment: Gst.Segment, rate: number, bpf: number): Gst.Buffer | null
    /**
     * Maps an audio `gstbuffer` so that it can be read or written and stores the
     * result of the map operation in `buffer`.
     * 
     * This is especially useful when the `gstbuffer` is in non-interleaved (planar)
     * layout, in which case this function will use the information in the
     * `gstbuffer'`s attached #GstAudioMeta in order to map each channel in a
     * separate "plane" in #GstAudioBuffer. If a #GstAudioMeta is not attached
     * on the `gstbuffer,` then it must be in interleaved layout.
     * 
     * If a #GstAudioMeta is attached, then the #GstAudioInfo on the meta is checked
     * against `info`. Normally, they should be equal, but in case they are not,
     * a g_critical will be printed and the #GstAudioInfo from the meta will be
     * used.
     * 
     * In non-interleaved buffers, it is possible to have each channel on a separate
     * #GstMemory. In this case, each memory will be mapped separately to avoid
     * copying their contents in a larger memory area. Do note though that it is
     * not supported to have a single channel spanning over two or more different
     * #GstMemory objects. Although the map operation will likely succeed in this
     * case, it will be highly sub-optimal and it is recommended to merge all the
     * memories in the buffer before calling this function.
     * 
     * Note: The actual #GstBuffer is not ref'ed, but it is required to stay valid
     * as long as it's mapped.
     * @param info the audio properties of the buffer
     * @param gstbuffer the #GstBuffer to be mapped
     * @param flags the access mode for the memory
     * @returns %TRUE if the map operation succeeded or %FALSE on failure
     */
    static map(info: AudioInfo, gstbuffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* buffer */ AudioBuffer ]
    /**
     * Reorders `buffer` from the channel positions `from` to the channel
     * positions `to`. `from` and `to` must contain the same number of
     * positions and the same positions, only in a different order.
     * `buffer` must be writable.
     * @param buffer The buffer to reorder.
     * @param format The %GstAudioFormat of the buffer.
     * @param from The channel positions in the buffer.
     * @param to The channel positions to convert to.
     * @returns %TRUE if the reordering was possible.
     */
    static reorder_channels(buffer: Gst.Buffer, format: AudioFormat, from: AudioChannelPosition[], to: AudioChannelPosition[]): boolean
    /**
     * Truncate the buffer to finally have `samples` number of samples, removing
     * the necessary amount of samples from the end and `trim` number of samples
     * from the beginning.
     * 
     * This function does not know the audio rate, therefore the caller is
     * responsible for re-setting the correct timestamp and duration to the
     * buffer. However, timestamp will be preserved if trim == 0, and duration
     * will also be preserved if there is no trimming to be done. Offset and
     * offset end will be preserved / updated.
     * 
     * After calling this function the caller does not own a reference to
     * `buffer` anymore.
     * @param buffer The buffer to truncate.
     * @param bpf size of one audio frame in bytes. This is the size of one sample * number of channels.
     * @param trim the number of samples to remove from the beginning of the buffer
     * @param samples the final number of samples that should exist in this buffer or -1 to use all the remaining samples if you are only removing samples from the beginning.
     * @returns the truncated buffer
     */
    static truncate(buffer: Gst.Buffer, bpf: number, trim: number, samples: number): Gst.Buffer
}

export interface AudioCdSrcClass {

    // Own fields of GstAudio-1.0.GstAudio.AudioCdSrcClass

    /**
     * the parent class
     * @field 
     */
    pushsrc_class: GstBase.PushSrcClass
    open: (src: AudioCdSrc, device: string | null) => boolean
    close: (src: AudioCdSrc) => void
    read_sector: (src: AudioCdSrc, sector: number) => Gst.Buffer
}

/**
 * Audio CD source base class.
 * @record 
 */
export abstract class AudioCdSrcClass {

    // Own properties of GstAudio-1.0.GstAudio.AudioCdSrcClass

    static name: string
}

export interface AudioCdSrcPrivate {
}

export class AudioCdSrcPrivate {

    // Own properties of GstAudio-1.0.GstAudio.AudioCdSrcPrivate

    static name: string
}

export interface AudioCdSrcTrack {

    // Own fields of GstAudio-1.0.GstAudio.AudioCdSrcTrack

    /**
     * Whether this is an audio track
     * @field 
     */
    is_audio: boolean
    /**
     * Track number in TOC (usually starts from 1, but not always)
     * @field 
     */
    num: number
    /**
     * The first sector of this track (LBA)
     * @field 
     */
    start: number
    /**
     * The last sector of this track (LBA)
     * @field 
     */
    end: number
    /**
     * Track-specific tags (e.g. from cd-text information), or NULL
     * @field 
     */
    tags: Gst.TagList
}

/**
 * CD track abstraction to communicate TOC entries to the base class.
 * 
 * This structure is only for use by sub-classed in connection with
 * gst_audio_cd_src_add_track().
 * 
 * Applications will be informed of the available tracks via a TOC message
 * on the pipeline's #GstBus instead.
 * @record 
 */
export class AudioCdSrcTrack {

    // Own properties of GstAudio-1.0.GstAudio.AudioCdSrcTrack

    static name: string
}

export interface AudioChannelMixer {

    // Owm methods of GstAudio-1.0.GstAudio.AudioChannelMixer

    /**
     * Free memory allocated by `mix`.
     */
    free(): void
    /**
     * Check if `mix` is in passthrough.
     * 
     * Only N x N mix identity matrices are considered passthrough,
     * this is determined by comparing the contents of the matrix
     * with 0.0 and 1.0.
     * 
     * As this is floating point comparisons, if the values have been
     * generated, they should be rounded up or down by explicit
     * assignment of 0.0 or 1.0 to values within a user-defined
     * epsilon, this code doesn't make assumptions as to what may
     * constitute an appropriate epsilon.
     * @returns %TRUE is @mix is passthrough.
     */
    is_passthrough(): boolean
    /**
     * In case the samples are interleaved, `in` and `out` must point to an
     * array with a single element pointing to a block of interleaved samples.
     * 
     * If non-interleaved samples are used, `in` and `out` must point to an
     * array with pointers to memory blocks, one for each channel.
     * 
     * Perform channel mixing on `in_data` and write the result to `out_data`.
     * `in_data` and `out_data` need to be in `format` and `layout`.
     * @param in_ input samples
     * @param out output samples
     * @param samples number of samples
     */
    samples(in_: any | null, out: any | null, samples: number): void
}

export class AudioChannelMixer {

    // Own properties of GstAudio-1.0.GstAudio.AudioChannelMixer

    static name: string
}

export interface AudioClippingMeta {

    // Own fields of GstAudio-1.0.GstAudio.AudioClippingMeta

    /**
     * parent #GstMeta
     * @field 
     */
    meta: Gst.Meta
    /**
     * GstFormat of `start` and `stop,` GST_FORMAT_DEFAULT is samples
     * @field 
     */
    format: Gst.Format
    /**
     * Amount of audio to clip from start of buffer
     * @field 
     */
    start: number
    /**
     * Amount of  to clip from end of buffer
     * @field 
     */
    end: number
}

/**
 * Extra buffer metadata describing how much audio has to be clipped from
 * the start or end of a buffer. This is used for compressed formats, where
 * the first frame usually has some additional samples due to encoder and
 * decoder delays, and the last frame usually has some additional samples to
 * be able to fill the complete last frame.
 * 
 * This is used to ensure that decoded data in the end has the same amount of
 * samples, and multiply decoded streams can be gaplessly concatenated.
 * 
 * Note: If clipping of the start is done by adjusting the segment, this meta
 * has to be dropped from buffers as otherwise clipping could happen twice.
 * @record 
 */
export class AudioClippingMeta {

    // Own properties of GstAudio-1.0.GstAudio.AudioClippingMeta

    static name: string

    // Constructors of GstAudio-1.0.GstAudio.AudioClippingMeta

    static get_info(): Gst.MetaInfo
}

export interface AudioClockClass {

    // Own fields of GstAudio-1.0.GstAudio.AudioClockClass

    parent_class: Gst.SystemClockClass
}

export abstract class AudioClockClass {

    // Own properties of GstAudio-1.0.GstAudio.AudioClockClass

    static name: string
}

export interface AudioConverter {

    // Owm methods of GstAudio-1.0.GstAudio.AudioConverter

    /**
     * Convenience wrapper around gst_audio_converter_samples(), which will
     * perform allocation of the output buffer based on the result from
     * gst_audio_converter_get_out_frames().
     * @param flags extra #GstAudioConverterFlags
     * @param in_ input data
     * @returns %TRUE is the conversion could be performed.
     */
    convert(flags: AudioConverterFlags, in_: Uint8Array): [ /* returnType */ boolean, /* out */ Uint8Array ]
    /**
     * Free a previously allocated `convert` instance.
     */
    free(): void
    /**
     * Get the current configuration of `convert`.
     * @returns    a #GstStructure that remains valid for as long as @convert is valid   or until gst_audio_converter_update_config() is called.
     */
    get_config(): [ /* returnType */ Gst.Structure, /* in_rate */ number, /* out_rate */ number ]
    /**
     * Calculate how many input frames are currently needed by `convert` to produce
     * `out_frames` of output frames.
     * @param out_frames number of output frames
     * @returns the number of input frames
     */
    get_in_frames(out_frames: number): number
    /**
     * Get the maximum number of input frames that the converter would
     * need before producing output.
     * @returns the latency of @convert as expressed in the number of frames.
     */
    get_max_latency(): number
    /**
     * Calculate how many output frames can be produced when `in_frames` input
     * frames are given to `convert`.
     * @param in_frames number of input frames
     * @returns the number of output frames
     */
    get_out_frames(in_frames: number): number
    /**
     * Returns whether the audio converter will operate in passthrough mode.
     * The return value would be typically input to gst_base_transform_set_passthrough()
     * @returns %TRUE when no conversion will actually occur.
     */
    is_passthrough(): boolean
    /**
     * Reset `convert` to the state it was when it was first created, clearing
     * any history it might currently have.
     */
    reset(): void
    /**
     * Perform the conversion with `in_frames` in `in` to `out_frames` in `out`
     * using `convert`.
     * 
     * In case the samples are interleaved, `in` and `out` must point to an
     * array with a single element pointing to a block of interleaved samples.
     * 
     * If non-interleaved samples are used, `in` and `out` must point to an
     * array with pointers to memory blocks, one for each channel.
     * 
     * `in` may be %NULL, in which case `in_frames` of silence samples are processed
     * by the converter.
     * 
     * This function always produces `out_frames` of output and consumes `in_frames` of
     * input. Use gst_audio_converter_get_out_frames() and
     * gst_audio_converter_get_in_frames() to make sure `in_frames` and `out_frames`
     * are matching and `in` and `out` point to enough memory.
     * @param flags extra #GstAudioConverterFlags
     * @param in_ input frames
     * @param in_frames number of input frames
     * @param out output frames
     * @param out_frames number of output frames
     * @returns %TRUE is the conversion could be performed.
     */
    samples(flags: AudioConverterFlags, in_: any | null, in_frames: number, out: any | null, out_frames: number): boolean
    /**
     * Returns whether the audio converter can perform the conversion in-place.
     * The return value would be typically input to gst_base_transform_set_in_place()
     * @returns %TRUE when the conversion can be done in place.
     */
    supports_inplace(): boolean
    /**
     * Set `in_rate,` `out_rate` and `config` as extra configuration for `convert`.
     * 
     * `in_rate` and `out_rate` specify the new sample rates of input and output
     * formats. A value of 0 leaves the sample rate unchanged.
     * 
     * `config` can be %NULL, in which case, the current configuration is not
     * changed.
     * 
     * If the parameters in `config` can not be set exactly, this function returns
     * %FALSE and will try to update as much state as possible. The new state can
     * then be retrieved and refined with gst_audio_converter_get_config().
     * 
     * Look at the `GST_AUDIO_CONVERTER_OPT_*` fields to check valid configuration
     * option and values.
     * @param in_rate input rate
     * @param out_rate output rate
     * @param config a #GstStructure or %NULL
     * @returns %TRUE when the new parameters could be set
     */
    update_config(in_rate: number, out_rate: number, config: Gst.Structure | null): boolean
}

/**
 * This object is used to convert audio samples from one format to another.
 * The object can perform conversion of:
 * 
 *  * audio format with optional dithering and noise shaping
 * 
 *  * audio samplerate
 * 
 *  * audio channels and channel layout
 * @record 
 */
export class AudioConverter {

    // Own properties of GstAudio-1.0.GstAudio.AudioConverter

    static name: string

    // Constructors of GstAudio-1.0.GstAudio.AudioConverter

    /**
     * Create a new #GstAudioConverter that is able to convert between `in` and `out`
     * audio formats.
     * 
     * `config` contains extra configuration options, see `GST_AUDIO_CONVERTER_OPT_*`
     * parameters for details about the options and values.
     * @constructor 
     * @param flags extra #GstAudioConverterFlags
     * @param in_info a source #GstAudioInfo
     * @param out_info a destination #GstAudioInfo
     * @param config a #GstStructure with configuration options
     * @returns a #GstAudioConverter or %NULL if conversion is not possible.
     */
    constructor(flags: AudioConverterFlags, in_info: AudioInfo, out_info: AudioInfo, config: Gst.Structure | null) 
    /**
     * Create a new #GstAudioConverter that is able to convert between `in` and `out`
     * audio formats.
     * 
     * `config` contains extra configuration options, see `GST_AUDIO_CONVERTER_OPT_*`
     * parameters for details about the options and values.
     * @constructor 
     * @param flags extra #GstAudioConverterFlags
     * @param in_info a source #GstAudioInfo
     * @param out_info a destination #GstAudioInfo
     * @param config a #GstStructure with configuration options
     * @returns a #GstAudioConverter or %NULL if conversion is not possible.
     */
    static new(flags: AudioConverterFlags, in_info: AudioInfo, out_info: AudioInfo, config: Gst.Structure | null): AudioConverter
}

export interface AudioDecoderClass {

    // Own fields of GstAudio-1.0.GstAudio.AudioDecoderClass

    /**
     * The parent class structure
     * @field 
     */
    element_class: Gst.ElementClass
    start: (dec: AudioDecoder) => boolean
    stop: (dec: AudioDecoder) => boolean
    set_format: (dec: AudioDecoder, caps: Gst.Caps) => boolean
    parse: (dec: AudioDecoder, adapter: GstBase.Adapter) => [ /* returnType */ Gst.FlowReturn, /* offset */ number, /* length */ number ]
    handle_frame: (dec: AudioDecoder, buffer: Gst.Buffer) => Gst.FlowReturn
    flush: (dec: AudioDecoder, hard: boolean) => void
    pre_push: (dec: AudioDecoder, buffer: Gst.Buffer) => Gst.FlowReturn
    sink_event: (dec: AudioDecoder, event: Gst.Event) => boolean
    src_event: (dec: AudioDecoder, event: Gst.Event) => boolean
    open: (dec: AudioDecoder) => boolean
    close: (dec: AudioDecoder) => boolean
    negotiate: (dec: AudioDecoder) => boolean
    decide_allocation: (dec: AudioDecoder, query: Gst.Query) => boolean
    propose_allocation: (dec: AudioDecoder, query: Gst.Query) => boolean
    sink_query: (dec: AudioDecoder, query: Gst.Query) => boolean
    src_query: (dec: AudioDecoder, query: Gst.Query) => boolean
    getcaps: (dec: AudioDecoder, filter: Gst.Caps) => Gst.Caps
    transform_meta: (enc: AudioDecoder, outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer) => boolean
}

/**
 * Subclasses can override any of the available virtual methods or not, as
 * needed. At minimum `handle_frame` (and likely `set_format)` needs to be
 * overridden.
 * @record 
 */
export abstract class AudioDecoderClass {

    // Own properties of GstAudio-1.0.GstAudio.AudioDecoderClass

    static name: string
}

export interface AudioDecoderPrivate {
}

export class AudioDecoderPrivate {

    // Own properties of GstAudio-1.0.GstAudio.AudioDecoderPrivate

    static name: string
}

export interface AudioDownmixMeta {

    // Own fields of GstAudio-1.0.GstAudio.AudioDownmixMeta

    /**
     * parent #GstMeta
     * @field 
     */
    meta: Gst.Meta
    /**
     * the channel positions of the source
     * @field 
     */
    from_position: AudioChannelPosition
    /**
     * the channel positions of the destination
     * @field 
     */
    to_position: AudioChannelPosition
    /**
     * the number of channels of the source
     * @field 
     */
    from_channels: number
    /**
     * the number of channels of the destination
     * @field 
     */
    to_channels: number
    /**
     * the matrix coefficients.
     * @field 
     */
    matrix: number
}

/**
 * Extra buffer metadata describing audio downmixing matrix. This metadata is
 * attached to audio buffers and contains a matrix to downmix the buffer number
 * of channels to `channels`.
 * 
 * `matrix` is an two-dimensional array of `to_channels` times `from_channels`
 * coefficients, i.e. the i-th output channels is constructed by multiplicating
 * the input channels with the coefficients in `matrix[`i] and taking the sum
 * of the results.
 * @record 
 */
export class AudioDownmixMeta {

    // Own properties of GstAudio-1.0.GstAudio.AudioDownmixMeta

    static name: string

    // Constructors of GstAudio-1.0.GstAudio.AudioDownmixMeta

    static get_info(): Gst.MetaInfo
}

export interface AudioEncoderClass {

    // Own fields of GstAudio-1.0.GstAudio.AudioEncoderClass

    /**
     * The parent class structure
     * @field 
     */
    element_class: Gst.ElementClass
    start: (enc: AudioEncoder) => boolean
    stop: (enc: AudioEncoder) => boolean
    set_format: (enc: AudioEncoder, info: AudioInfo) => boolean
    handle_frame: (enc: AudioEncoder, buffer: Gst.Buffer) => Gst.FlowReturn
    flush: (enc: AudioEncoder) => void
    pre_push: (enc: AudioEncoder, buffer: Gst.Buffer) => Gst.FlowReturn
    sink_event: (enc: AudioEncoder, event: Gst.Event) => boolean
    src_event: (enc: AudioEncoder, event: Gst.Event) => boolean
    getcaps: (enc: AudioEncoder, filter: Gst.Caps) => Gst.Caps
    open: (enc: AudioEncoder) => boolean
    close: (enc: AudioEncoder) => boolean
    negotiate: (enc: AudioEncoder) => boolean
    decide_allocation: (enc: AudioEncoder, query: Gst.Query) => boolean
    propose_allocation: (enc: AudioEncoder, query: Gst.Query) => boolean
    transform_meta: (enc: AudioEncoder, outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer) => boolean
    sink_query: (encoder: AudioEncoder, query: Gst.Query) => boolean
    src_query: (encoder: AudioEncoder, query: Gst.Query) => boolean
}

/**
 * Subclasses can override any of the available virtual methods or not, as
 * needed. At minimum `set_format` and `handle_frame` needs to be overridden.
 * @record 
 */
export abstract class AudioEncoderClass {

    // Own properties of GstAudio-1.0.GstAudio.AudioEncoderClass

    static name: string
}

export interface AudioEncoderPrivate {
}

export class AudioEncoderPrivate {

    // Own properties of GstAudio-1.0.GstAudio.AudioEncoderPrivate

    static name: string
}

export interface AudioFilterClass {

    // Own fields of GstAudio-1.0.GstAudio.AudioFilterClass

    /**
     * parent class
     * @field 
     */
    basetransformclass: GstBase.BaseTransformClass
    setup: (filter: AudioFilter, info: AudioInfo) => boolean
}

/**
 * In addition to the `setup` virtual function, you should also override the
 * GstBaseTransform::transform and/or GstBaseTransform::transform_ip virtual
 * function.
 * @record 
 */
export abstract class AudioFilterClass {

    // Own properties of GstAudio-1.0.GstAudio.AudioFilterClass

    static name: string

    // Owm static methods of GstAudio-1.0.GstAudio.AudioFilterClass

    /**
     * Convenience function to add pad templates to this element class, with
     * `allowed_caps` as the caps that can be handled.
     * 
     * This function is usually used from within a GObject class_init function.
     * @param allowed_caps what formats the filter can handle, as #GstCaps
     */
    static add_pad_templates(klass: AudioFilter | Function | GObject.GType, allowed_caps: Gst.Caps): void
}

export interface AudioFormatInfo {

    // Own fields of GstAudio-1.0.GstAudio.AudioFormatInfo

    /**
     * #GstAudioFormat
     * @field 
     */
    format: AudioFormat
    /**
     * string representation of the format
     * @field 
     */
    name: string | null
    /**
     * user readable description of the format
     * @field 
     */
    description: string | null
    /**
     * #GstAudioFormatFlags
     * @field 
     */
    flags: AudioFormatFlags
    /**
     * the endianness
     * @field 
     */
    endianness: number
    /**
     * amount of bits used for one sample
     * @field 
     */
    width: number
    /**
     * amount of valid bits in `width`
     * @field 
     */
    depth: number
    /**
     * `width/`8 bytes with 1 silent sample
     * @field 
     */
    silence: Uint8Array
    /**
     * the format of the unpacked samples
     * @field 
     */
    unpack_format: AudioFormat
    /**
     * function to unpack samples
     * @field 
     */
    unpack_func: AudioFormatUnpack
    /**
     * function to pack samples
     * @field 
     */
    pack_func: AudioFormatPack

    // Owm methods of GstAudio-1.0.GstAudio.AudioFormatInfo

    /**
     * Fill `length` bytes in `dest` with silence samples for `info`.
     * @param dest a destination   to fill
     */
    fill_silence(dest: Uint8Array): void
}

/**
 * Information for an audio format.
 * @record 
 */
export class AudioFormatInfo {

    // Own properties of GstAudio-1.0.GstAudio.AudioFormatInfo

    static name: string
}

export interface AudioInfo {

    // Own fields of GstAudio-1.0.GstAudio.AudioInfo

    /**
     * the format info of the audio
     * @field 
     */
    finfo: AudioFormatInfo
    /**
     * additional audio flags
     * @field 
     */
    flags: AudioFlags
    /**
     * audio layout
     * @field 
     */
    layout: AudioLayout
    /**
     * the audio sample rate
     * @field 
     */
    rate: number
    /**
     * the number of channels
     * @field 
     */
    channels: number
    /**
     * the number of bytes for one frame, this is the size of one
     *         sample * `channels`
     * @field 
     */
    bpf: number
    /**
     * the positions for each channel
     * @field 
     */
    position: AudioChannelPosition[]

    // Owm methods of GstAudio-1.0.GstAudio.AudioInfo

    /**
     * Converts among various #GstFormat types.  This function handles
     * GST_FORMAT_BYTES, GST_FORMAT_TIME, and GST_FORMAT_DEFAULT.  For
     * raw audio, GST_FORMAT_DEFAULT corresponds to audio frames.  This
     * function can be used to handle pad queries of the type GST_QUERY_CONVERT.
     * @param src_fmt #GstFormat of the `src_val`
     * @param src_val value to convert
     * @param dest_fmt #GstFormat of the `dest_val`
     * @returns TRUE if the conversion was successful.
     */
    convert(src_fmt: Gst.Format, src_val: number, dest_fmt: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    /**
     * Copy a GstAudioInfo structure.
     * @returns a new #GstAudioInfo. free with gst_audio_info_free.
     */
    copy(): AudioInfo
    /**
     * Free a GstAudioInfo structure previously allocated with gst_audio_info_new()
     * or gst_audio_info_copy().
     */
    free(): void
    /**
     * Compares two #GstAudioInfo and returns whether they are equal or not
     * @param other a #GstAudioInfo
     * @returns %TRUE if @info and @other are equal, else %FALSE.
     */
    is_equal(other: AudioInfo): boolean
    /**
     * Set the default info for the audio info of `format` and `rate` and `channels`.
     * 
     * Note: This initializes `info` first, no values are preserved.
     * @param format the format
     * @param rate the samplerate
     * @param channels the number of channels
     * @param position the channel positions
     */
    set_format(format: AudioFormat, rate: number, channels: number, position: AudioChannelPosition[] | null): void
    /**
     * Convert the values of `info` into a #GstCaps.
     * @returns the new #GstCaps containing the          info of @info.
     */
    to_caps(): Gst.Caps
}

/**
 * Information describing audio properties. This information can be filled
 * in from GstCaps with gst_audio_info_from_caps().
 * 
 * Use the provided macros to access the info in this structure.
 * @record 
 */
export class AudioInfo {

    // Own properties of GstAudio-1.0.GstAudio.AudioInfo

    static name: string

    // Constructors of GstAudio-1.0.GstAudio.AudioInfo

    /**
     * Allocate a new #GstAudioInfo that is also initialized with
     * gst_audio_info_init().
     * @constructor 
     * @returns a new #GstAudioInfo. free with gst_audio_info_free().
     */
    constructor() 
    /**
     * Allocate a new #GstAudioInfo that is also initialized with
     * gst_audio_info_init().
     * @constructor 
     * @returns a new #GstAudioInfo. free with gst_audio_info_free().
     */
    static new(): AudioInfo
    /**
     * Parse `caps` to generate a #GstAudioInfo.
     * @constructor 
     * @param caps a #GstCaps
     * @returns A #GstAudioInfo, or %NULL if @caps couldn't be parsed
     */
    static new_from_caps(caps: Gst.Caps): AudioInfo
    /**
     * Parse `caps` and update `info`.
     * @param caps a #GstCaps
     * @returns TRUE if @caps could be parsed
     */
    static from_caps(caps: Gst.Caps): [ /* returnType */ boolean, /* info */ AudioInfo ]
    /**
     * Initialize `info` with default values.
     */
    static init(): /* info */ AudioInfo
}

export interface AudioLevelMeta {

    // Own fields of GstAudio-1.0.GstAudio.AudioLevelMeta

    /**
     * parent #GstMeta
     * @field 
     */
    meta: Gst.Meta
    /**
     * the -dBov from 0-127 (127 is silence).
     * @field 
     */
    level: number
    /**
     * whether the buffer contains voice activity
     * @field 
     */
    voice_activity: boolean
}

/**
 * Meta containing Audio Level Indication: https://tools.ietf.org/html/rfc6464
 * @record 
 */
export class AudioLevelMeta {

    // Own properties of GstAudio-1.0.GstAudio.AudioLevelMeta

    static name: string

    // Constructors of GstAudio-1.0.GstAudio.AudioLevelMeta

    /**
     * Return the #GstMetaInfo associated with #GstAudioLevelMeta.
     * @returns a #GstMetaInfo
     */
    static get_info(): Gst.MetaInfo
}

export interface AudioMeta {

    // Own fields of GstAudio-1.0.GstAudio.AudioMeta

    /**
     * parent #GstMeta
     * @field 
     */
    meta: Gst.Meta
    /**
     * the audio properties of the buffer
     * @field 
     */
    info: AudioInfo
    /**
     * the number of valid samples in the buffer
     * @field 
     */
    samples: number
    /**
     * the offsets (in bytes) where each channel plane starts in the
     *   buffer or %NULL if the buffer has interleaved layout; if not %NULL, this
     *   is guaranteed to be an array of `info`.channels elements
     * @field 
     */
    offsets: number
}

/**
 * #GstAudioDownmixMeta defines an audio downmix matrix to be send along with
 * audio buffers. These functions in this module help to create and attach the
 * meta as well as extracting it.
 * @record 
 */
export class AudioMeta {

    // Own properties of GstAudio-1.0.GstAudio.AudioMeta

    static name: string

    // Constructors of GstAudio-1.0.GstAudio.AudioMeta

    static get_info(): Gst.MetaInfo
}

export interface AudioQuantize {

    // Owm methods of GstAudio-1.0.GstAudio.AudioQuantize

    /**
     * Free a #GstAudioQuantize.
     */
    free(): void
    /**
     * Reset `quant` to the state is was when created, clearing any
     * history it might have.
     */
    reset(): void
    /**
     * Perform quantization on `samples` in `in` and write the result to `out`.
     * 
     * In case the samples are interleaved, `in` and `out` must point to an
     * array with a single element pointing to a block of interleaved samples.
     * 
     * If non-interleaved samples are used, `in` and `out` must point to an
     * array with pointers to memory blocks, one for each channel.
     * 
     * `in` and `out` may point to the same memory location, in which case samples will be
     * modified in-place.
     * @param in_ input samples
     * @param out output samples
     * @param samples number of samples
     */
    samples(in_: any | null, out: any | null, samples: number): void
}

export class AudioQuantize {

    // Own properties of GstAudio-1.0.GstAudio.AudioQuantize

    static name: string
}

export interface AudioResampler {

    // Owm methods of GstAudio-1.0.GstAudio.AudioResampler

    /**
     * Free a previously allocated #GstAudioResampler `resampler`.
     */
    free(): void
    /**
     * Get the number of input frames that would currently be needed
     * to produce `out_frames` from `resampler`.
     * @param out_frames number of input frames
     * @returns The number of input frames needed for producing @out_frames of data from @resampler.
     */
    get_in_frames(out_frames: number): number
    /**
     * Get the maximum number of input samples that the resampler would
     * need before producing output.
     * @returns the latency of @resampler as expressed in the number of frames.
     */
    get_max_latency(): number
    /**
     * Get the number of output frames that would be currently available when
     * `in_frames` are given to `resampler`.
     * @param in_frames number of input frames
     * @returns The number of frames that would be available after giving @in_frames as input to @resampler.
     */
    get_out_frames(in_frames: number): number
    /**
     * Perform resampling on `in_frames` frames in `in` and write `out_frames` to `out`.
     * 
     * In case the samples are interleaved, `in` and `out` must point to an
     * array with a single element pointing to a block of interleaved samples.
     * 
     * If non-interleaved samples are used, `in` and `out` must point to an
     * array with pointers to memory blocks, one for each channel.
     * 
     * `in` may be %NULL, in which case `in_frames` of silence samples are pushed
     * into the resampler.
     * 
     * This function always produces `out_frames` of output and consumes `in_frames` of
     * input. Use gst_audio_resampler_get_out_frames() and
     * gst_audio_resampler_get_in_frames() to make sure `in_frames` and `out_frames`
     * are matching and `in` and `out` point to enough memory.
     * @param in_ input samples
     * @param in_frames number of input frames
     * @param out output samples
     * @param out_frames number of output frames
     */
    resample(in_: any | null, in_frames: number, out: any | null, out_frames: number): void
    /**
     * Reset `resampler` to the state it was when it was first created, discarding
     * all sample history.
     */
    reset(): void
    /**
     * Update the resampler parameters for `resampler`. This function should
     * not be called concurrently with any other function on `resampler`.
     * 
     * When `in_rate` or `out_rate` is 0, its value is unchanged.
     * 
     * When `options` is %NULL, the previously configured options are reused.
     * @param in_rate new input rate
     * @param out_rate new output rate
     * @param options new options or %NULL
     * @returns %TRUE if the new parameters could be set
     */
    update(in_rate: number, out_rate: number, options: Gst.Structure): boolean
}

/**
 * #GstAudioResampler is a structure which holds the information
 * required to perform various kinds of resampling filtering.
 * @record 
 */
export class AudioResampler {

    // Own properties of GstAudio-1.0.GstAudio.AudioResampler

    static name: string

    // Constructors of GstAudio-1.0.GstAudio.AudioResampler

    /**
     * Make a new resampler.
     * @param method a #GstAudioResamplerMethod
     * @param flags #GstAudioResamplerFlags
     * @param format the #GstAudioFormat
     * @param channels the number of channels
     * @param in_rate input rate
     * @param out_rate output rate
     * @param options extra options
     * @returns The new #GstAudioResampler.
     */
    static new(method: AudioResamplerMethod, flags: AudioResamplerFlags, format: AudioFormat, channels: number, in_rate: number, out_rate: number, options: Gst.Structure): AudioResampler
    /**
     * Set the parameters for resampling from `in_rate` to `out_rate` using `method`
     * for `quality` in `options`.
     * @param method a #GstAudioResamplerMethod
     * @param quality the quality
     * @param in_rate the input rate
     * @param out_rate the output rate
     * @param options a #GstStructure
     */
    static options_set_quality(method: AudioResamplerMethod, quality: number, in_rate: number, out_rate: number, options: Gst.Structure): void
}

export interface AudioRingBufferClass {

    // Own fields of GstAudio-1.0.GstAudio.AudioRingBufferClass

    /**
     * parent class
     * @field 
     */
    parent_class: Gst.ObjectClass
    open_device: (buf: AudioRingBuffer) => boolean
    acquire: (buf: AudioRingBuffer, spec: AudioRingBufferSpec) => boolean
    release: (buf: AudioRingBuffer) => boolean
    close_device: (buf: AudioRingBuffer) => boolean
    start: (buf: AudioRingBuffer) => boolean
    pause: (buf: AudioRingBuffer) => boolean
    resume: (buf: AudioRingBuffer) => boolean
    stop: (buf: AudioRingBuffer) => boolean
    delay: (buf: AudioRingBuffer) => number
    activate: (buf: AudioRingBuffer, active: boolean) => boolean
    commit: (buf: AudioRingBuffer, sample: number, data: Uint8Array, out_samples: number, accum: number) => [ /* returnType */ number, /* sample */ number, /* accum */ number ]
    clear_all: (buf: AudioRingBuffer) => void
}

/**
 * The vmethods that subclasses can override to implement the ringbuffer.
 * @record 
 */
export abstract class AudioRingBufferClass {

    // Own properties of GstAudio-1.0.GstAudio.AudioRingBufferClass

    static name: string
}

export interface AudioRingBufferSpec {

    // Own fields of GstAudio-1.0.GstAudio.AudioRingBufferSpec

    /**
     * The caps that generated the Spec.
     * @field 
     */
    caps: Gst.Caps
    /**
     * the sample type
     * @field 
     */
    type: AudioRingBufferFormatType
    /**
     * the #GstAudioInfo
     * @field 
     */
    info: AudioInfo
    /**
     * the latency in microseconds
     * @field 
     */
    latency_time: number
    /**
     * the total buffer size in microseconds
     * @field 
     */
    buffer_time: number
    /**
     * the size of one segment in bytes
     * @field 
     */
    segsize: number
    /**
     * the total number of segments
     * @field 
     */
    segtotal: number
    /**
     * number of segments queued in the lower level device,
     *  defaults to segtotal
     * @field 
     */
    seglatency: number
}

/**
 * The structure containing the format specification of the ringbuffer.
 * @record 
 */
export class AudioRingBufferSpec {

    // Own properties of GstAudio-1.0.GstAudio.AudioRingBufferSpec

    static name: string
}

export interface AudioSinkClass {

    // Own fields of GstAudio-1.0.GstAudio.AudioSinkClass

    /**
     * the parent class structure.
     * @field 
     */
    parent_class: AudioBaseSinkClass
    open: (sink: AudioSink) => boolean
    prepare: (sink: AudioSink, spec: AudioRingBufferSpec) => boolean
    unprepare: (sink: AudioSink) => boolean
    close: (sink: AudioSink) => boolean
    write: (sink: AudioSink, data: Uint8Array) => number
    delay: (sink: AudioSink) => number
    reset: (sink: AudioSink) => void
    pause: (sink: AudioSink) => void
    resume: (sink: AudioSink) => void
    stop: (sink: AudioSink) => void
    /**
     * class extension structure. Since: 1.18
     * @field 
     */
    extension: AudioSinkClassExtension
}

export abstract class AudioSinkClass {

    // Own properties of GstAudio-1.0.GstAudio.AudioSinkClass

    static name: string
}

export interface AudioSinkClassExtension {

    // Own fields of GstAudio-1.0.GstAudio.AudioSinkClassExtension

    clear_all: (sink: AudioSink) => void
}

export class AudioSinkClassExtension {

    // Own properties of GstAudio-1.0.GstAudio.AudioSinkClassExtension

    static name: string
}

export interface AudioSrcClass {

    // Own fields of GstAudio-1.0.GstAudio.AudioSrcClass

    /**
     * the parent class.
     * @field 
     */
    parent_class: AudioBaseSrcClass
    open: (src: AudioSrc) => boolean
    prepare: (src: AudioSrc, spec: AudioRingBufferSpec) => boolean
    unprepare: (src: AudioSrc) => boolean
    close: (src: AudioSrc) => boolean
    read: (src: AudioSrc, data: Uint8Array) => [ /* returnType */ number, /* timestamp */ Gst.ClockTime ]
    delay: (src: AudioSrc) => number
    reset: (src: AudioSrc) => void
}

/**
 * #GstAudioSrc class. Override the vmethod to implement
 * functionality.
 * @record 
 */
export abstract class AudioSrcClass {

    // Own properties of GstAudio-1.0.GstAudio.AudioSrcClass

    static name: string
}

export interface AudioStreamAlign {

    // Owm methods of GstAudio-1.0.GstAudio.AudioStreamAlign

    /**
     * Copy a GstAudioStreamAlign structure.
     * @returns a new #GstAudioStreamAlign. free with gst_audio_stream_align_free.
     */
    copy(): AudioStreamAlign
    /**
     * Free a GstAudioStreamAlign structure previously allocated with gst_audio_stream_align_new()
     * or gst_audio_stream_align_copy().
     */
    free(): void
    /**
     * Gets the currently configured alignment threshold.
     * @returns The currently configured alignment threshold
     */
    get_alignment_threshold(): Gst.ClockTime
    /**
     * Gets the currently configured discont wait.
     * @returns The currently configured discont wait
     */
    get_discont_wait(): Gst.ClockTime
    /**
     * Gets the currently configured sample rate.
     * @returns The currently configured sample rate
     */
    get_rate(): number
    /**
     * Returns the number of samples that were processed since the last
     * discontinuity was detected.
     * @returns The number of samples processed since the last discontinuity.
     */
    get_samples_since_discont(): number
    /**
     * Timestamp that was passed when a discontinuity was detected, i.e. the first
     * timestamp after the discontinuity.
     * @returns The last timestamp at when a discontinuity was detected
     */
    get_timestamp_at_discont(): Gst.ClockTime
    /**
     * Marks the next buffer as discontinuous and resets timestamp tracking.
     */
    mark_discont(): void
    /**
     * Processes data with `timestamp` and `n_samples,` and returns the output
     * timestamp, duration and sample position together with a boolean to signal
     * whether a discontinuity was detected or not. All non-discontinuous data
     * will have perfect timestamps and durations.
     * 
     * A discontinuity is detected once the difference between the actual
     * timestamp and the timestamp calculated from the sample count since the last
     * discontinuity differs by more than the alignment threshold for a duration
     * longer than discont wait.
     * 
     * Note: In reverse playback, every buffer is considered discontinuous in the
     * context of buffer flags because the last sample of the previous buffer is
     * discontinuous with the first sample of the current one. However for this
     * function they are only considered discontinuous in reverse playback if the
     * first sample of the previous buffer is discontinuous with the last sample
     * of the current one.
     * @param discont if this data is considered to be discontinuous
     * @param timestamp a #GstClockTime of the start of the data
     * @param n_samples number of samples to process
     * @returns %TRUE if a discontinuity was detected, %FALSE otherwise.
     */
    process(discont: boolean, timestamp: Gst.ClockTime, n_samples: number): [ /* returnType */ boolean, /* out_timestamp */ Gst.ClockTime, /* out_duration */ Gst.ClockTime, /* out_sample_position */ number ]
    /**
     * Sets `alignment_treshold` as new alignment threshold for the following processing.
     * @param alignment_threshold a new alignment threshold
     */
    set_alignment_threshold(alignment_threshold: Gst.ClockTime): void
    /**
     * Sets `alignment_treshold` as new discont wait for the following processing.
     * @param discont_wait a new discont wait
     */
    set_discont_wait(discont_wait: Gst.ClockTime): void
    /**
     * Sets `rate` as new sample rate for the following processing. If the sample
     * rate differs this implicitly marks the next data as discontinuous.
     * @param rate a new sample rate
     */
    set_rate(rate: number): void
}

/**
 * #GstAudioStreamAlign provides a helper object that helps tracking audio
 * stream alignment and discontinuities, and detects discontinuities if
 * possible.
 * 
 * See gst_audio_stream_align_new() for a description of its parameters and
 * gst_audio_stream_align_process() for the details of the processing.
 * @record 
 */
export class AudioStreamAlign {

    // Own properties of GstAudio-1.0.GstAudio.AudioStreamAlign

    static name: string

    // Constructors of GstAudio-1.0.GstAudio.AudioStreamAlign

    /**
     * Allocate a new #GstAudioStreamAlign with the given configuration. All
     * processing happens according to sample rate `rate,` until
     * gst_audio_stream_align_set_rate() is called with a new `rate`.
     * A negative rate can be used for reverse playback.
     * 
     * `alignment_threshold` gives the tolerance in nanoseconds after which a
     * timestamp difference is considered a discontinuity. Once detected,
     * `discont_wait` nanoseconds have to pass without going below the threshold
     * again until the output buffer is marked as a discontinuity. These can later
     * be re-configured with gst_audio_stream_align_set_alignment_threshold() and
     * gst_audio_stream_align_set_discont_wait().
     * @constructor 
     * @param rate a sample rate
     * @param alignment_threshold a alignment threshold in nanoseconds
     * @param discont_wait discont wait in nanoseconds
     * @returns a new #GstAudioStreamAlign. free with gst_audio_stream_align_free().
     */
    constructor(rate: number, alignment_threshold: Gst.ClockTime, discont_wait: Gst.ClockTime) 
    /**
     * Allocate a new #GstAudioStreamAlign with the given configuration. All
     * processing happens according to sample rate `rate,` until
     * gst_audio_stream_align_set_rate() is called with a new `rate`.
     * A negative rate can be used for reverse playback.
     * 
     * `alignment_threshold` gives the tolerance in nanoseconds after which a
     * timestamp difference is considered a discontinuity. Once detected,
     * `discont_wait` nanoseconds have to pass without going below the threshold
     * again until the output buffer is marked as a discontinuity. These can later
     * be re-configured with gst_audio_stream_align_set_alignment_threshold() and
     * gst_audio_stream_align_set_discont_wait().
     * @constructor 
     * @param rate a sample rate
     * @param alignment_threshold a alignment threshold in nanoseconds
     * @param discont_wait discont wait in nanoseconds
     * @returns a new #GstAudioStreamAlign. free with gst_audio_stream_align_free().
     */
    static new(rate: number, alignment_threshold: Gst.ClockTime, discont_wait: Gst.ClockTime): AudioStreamAlign
}

export interface StreamVolumeInterface {

    // Own fields of GstAudio-1.0.GstAudio.StreamVolumeInterface

    iface: GObject.TypeInterface
}

export abstract class StreamVolumeInterface {

    // Own properties of GstAudio-1.0.GstAudio.StreamVolumeInterface

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