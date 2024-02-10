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

export namespace GstAudio {
    /**
     * Different possible reasons for discontinuities. This enum is useful for the custom
     * slave method.
     */
    enum AudioBaseSinkDiscontReason {
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
    enum AudioBaseSinkSlaveMethod {
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
    enum AudioBaseSrcSlaveMethod {
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
    enum AudioCdSrcMode {
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
    enum AudioChannelPosition {
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
    enum AudioDitherMethod {
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
    enum AudioFormat {
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
    enum AudioLayout {
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
    enum AudioNoiseShapingMethod {
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
    enum AudioResamplerFilterInterpolation {
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
    enum AudioResamplerFilterMode {
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
    enum AudioResamplerMethod {
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
    enum AudioRingBufferFormatType {
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
    enum AudioRingBufferState {
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
    enum StreamVolumeFormat {
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
     * Maximum range of allowed channels, for use in template caps strings.
     */
    const AUDIO_CHANNELS_RANGE: string;
    /**
     * #GstAudioDitherMethod, The dither method to use when
     * changing bit depth.
     * Default is #GST_AUDIO_DITHER_NONE.
     */
    const AUDIO_CONVERTER_OPT_DITHER_METHOD: string;
    /**
     * Threshold for the output bit depth at/below which to apply dithering.
     *
     * Default is 20 bit.
     */
    const AUDIO_CONVERTER_OPT_DITHER_THRESHOLD: string;
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
     * g_value_init (&amp;v2, GST_TYPE_ARRAY);
     * g_value_init (&amp;v3, G_TYPE_DOUBLE);
     * g_value_set_double (&amp;v3, 1);
     * gst_value_array_append_value (&amp;v2, &amp;v3);
     * g_value_unset (&amp;v3);
     * [ Repeat for as many double as your input channels - unset and reinit v3 ]
     * g_value_init (&amp;v, GST_TYPE_ARRAY);
     * gst_value_array_append_value (&amp;v, &amp;v2);
     * g_value_unset (&amp;v2);
     * [ Repeat for as many v2's as your output channels - unset and reinit v2]
     * g_object_set_property (G_OBJECT (audiomixmatrix), "matrix", &amp;v);
     * g_value_unset (&amp;v);
     * ```
     *
     */
    const AUDIO_CONVERTER_OPT_MIX_MATRIX: string;
    /**
     * #GstAudioNoiseShapingMethod, The noise shaping method to use
     * to mask noise from quantization errors.
     * Default is #GST_AUDIO_NOISE_SHAPING_NONE.
     */
    const AUDIO_CONVERTER_OPT_NOISE_SHAPING_METHOD: string;
    /**
     * #G_TYPE_UINT, The quantization amount. Components will be
     * quantized to multiples of this value.
     * Default is 1
     */
    const AUDIO_CONVERTER_OPT_QUANTIZATION: string;
    /**
     * #GstAudioResamplerMethod, The resampler method to use when
     * changing sample rates.
     * Default is #GST_AUDIO_RESAMPLER_METHOD_BLACKMAN_NUTTALL.
     */
    const AUDIO_CONVERTER_OPT_RESAMPLER_METHOD: string;
    /**
     * Default maximum number of errors tolerated before signaling error.
     */
    const AUDIO_DECODER_MAX_ERRORS: number;
    /**
     * The name of the templates for the sink pad.
     */
    const AUDIO_DECODER_SINK_NAME: string;
    /**
     * The name of the templates for the source pad.
     */
    const AUDIO_DECODER_SRC_NAME: string;
    /**
     * Standard number of channels used in consumer audio.
     */
    const AUDIO_DEF_CHANNELS: number;
    /**
     * Standard format used in consumer audio.
     */
    const AUDIO_DEF_FORMAT: string;
    /**
     * Standard sampling rate used in consumer audio.
     */
    const AUDIO_DEF_RATE: number;
    /**
     * the name of the templates for the sink pad
     */
    const AUDIO_ENCODER_SINK_NAME: string;
    /**
     * the name of the templates for the source pad
     */
    const AUDIO_ENCODER_SRC_NAME: string;
    /**
     * List of all audio formats, for use in template caps strings.
     *
     * Formats are sorted by decreasing "quality", using these criteria by priority:
     *   - depth
     *   - width
     *   - Float &gt; Signed &gt; Unsigned
     *   - native endianness preferred
     */
    const AUDIO_FORMATS_ALL: string;
    /**
     * Maximum range of allowed sample rates, for use in template caps strings.
     */
    const AUDIO_RATE_RANGE: string;
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
    const AUDIO_RESAMPLER_OPT_CUBIC_B: string;
    /**
     * G_TYPE_DOUBLE, C parameter of the cubic filter.
     * Values between 0.0 and 2.0 are accepted. 0.0 is the default.
     *
     * See #GST_AUDIO_RESAMPLER_OPT_CUBIC_B for some more common values
     */
    const AUDIO_RESAMPLER_OPT_CUBIC_C: string;
    /**
     * G_TYPE_DOUBLE, Cutoff parameter for the filter. 0.940 is the default.
     */
    const AUDIO_RESAMPLER_OPT_CUTOFF: string;
    /**
     * GST_TYPE_AUDIO_RESAMPLER_INTERPOLATION: how the filter coefficients should be
     *    interpolated.
     * GST_AUDIO_RESAMPLER_FILTER_INTERPOLATION_CUBIC is default.
     */
    const AUDIO_RESAMPLER_OPT_FILTER_INTERPOLATION: string;
    /**
     * GST_TYPE_AUDIO_RESAMPLER_FILTER_MODE: how the filter tables should be
     * constructed.
     * GST_AUDIO_RESAMPLER_FILTER_MODE_AUTO is the default.
     */
    const AUDIO_RESAMPLER_OPT_FILTER_MODE: string;
    /**
     * G_TYPE_UINT: the amount of memory to use for full filter tables before
     * switching to interpolated filter tables.
     * 1048576 is the default.
     */
    const AUDIO_RESAMPLER_OPT_FILTER_MODE_THRESHOLD: string;
    /**
     * G_TYPE_UINT, oversampling to use when interpolating filters
     * 8 is the default.
     */
    const AUDIO_RESAMPLER_OPT_FILTER_OVERSAMPLE: string;
    /**
     * G_TYPE_DOUBLE: The maximum allowed phase error when switching sample
     * rates.
     * 0.1 is the default.
     */
    const AUDIO_RESAMPLER_OPT_MAX_PHASE_ERROR: string;
    /**
     * G_TYPE_INT: the number of taps to use for the filter.
     * 0 is the default and selects the taps automatically.
     */
    const AUDIO_RESAMPLER_OPT_N_TAPS: string;
    /**
     * G_TYPE_DOUBLE, stopband attenuation in decibels. The attenuation
     * after the stopband for the kaiser window. 85 dB is the default.
     */
    const AUDIO_RESAMPLER_OPT_STOP_ATTENUATION: string;
    /**
     * G_TYPE_DOUBLE, transition bandwidth. The width of the
     * transition band for the kaiser window. 0.087 is the default.
     */
    const AUDIO_RESAMPLER_OPT_TRANSITION_BANDWIDTH: string;
    const AUDIO_RESAMPLER_QUALITY_DEFAULT: number;
    const AUDIO_RESAMPLER_QUALITY_MAX: number;
    const AUDIO_RESAMPLER_QUALITY_MIN: number;
    /**
     * This metadata stays relevant as long as channels are unchanged.
     */
    const META_TAG_AUDIO_CHANNELS_STR: string;
    /**
     * This metadata stays relevant as long as sample rate is unchanged.
     */
    const META_TAG_AUDIO_RATE_STR: string;
    /**
     * This metadata is relevant for audio streams.
     */
    const META_TAG_AUDIO_STR: string;
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
    function audio_buffer_clip(buffer: Gst.Buffer, segment: Gst.Segment, rate: number, bpf: number): Gst.Buffer | null;
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
    function audio_buffer_map(info: AudioInfo, gstbuffer: Gst.Buffer, flags: Gst.MapFlags): boolean;
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
    function audio_buffer_reorder_channels(
        buffer: Gst.Buffer,
        format: AudioFormat,
        from: AudioChannelPosition[],
        to: AudioChannelPosition[],
    ): boolean;
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
    function audio_buffer_truncate(buffer: Gst.Buffer, bpf: number, trim: number, samples: number): Gst.Buffer;
    /**
     * Get the fallback channel-mask for the given number of channels.
     *
     * This function returns a reasonable fallback channel-mask and should be
     * called as a last resort when the specific channel map is unknown.
     * @param channels the number of channels
     * @returns a fallback channel-mask for @channels or 0 when there is no mask and mono.
     */
    function audio_channel_get_fallback_mask(channels: number): number;
    /**
     * Convert the `channels` present in `channel_mask` to a `position` array
     * (which should have at least `channels` entries ensured by caller).
     * If `channel_mask` is set to 0, it is considered as 'not present' for purpose
     * of conversion.
     * A partially valid `channel_mask` with less bits set than the number
     * of channels is considered valid.
     * @param channel_mask The input channel_mask
     * @param position The   %GstAudioChannelPosition&lt;!-- --&gt;s
     * @returns %TRUE if channel and channel mask are valid and could be converted
     */
    function audio_channel_positions_from_mask(channel_mask: number, position: AudioChannelPosition[]): boolean;
    /**
     * Convert the `position` array of `channels` channels to a bitmask.
     *
     * If `force_order` is %TRUE it additionally checks if the channels are
     * in the order required by GStreamer.
     * @param position The %GstAudioChannelPositions
     * @param force_order Only consider the GStreamer channel order.
     * @returns %TRUE if the channel positions are valid and could be converted.
     */
    function audio_channel_positions_to_mask(position: AudioChannelPosition[], force_order: boolean): boolean;
    /**
     * Converts `position` to a human-readable string representation for
     * debugging purposes.
     * @param position The %GstAudioChannelPositions   to convert.
     * @returns a newly allocated string representing @position
     */
    function audio_channel_positions_to_string(position: AudioChannelPosition[]): string;
    /**
     * Reorders the channel positions in `position` from any order to
     * the GStreamer channel order.
     * @param position The channel positions to   reorder to.
     * @returns %TRUE if the channel positions are valid and reordering was successful.
     */
    function audio_channel_positions_to_valid_order(position: AudioChannelPosition[]): boolean;
    /**
     * Checks if `position` contains valid channel positions for
     * `channels` channels. If `force_order` is %TRUE it additionally
     * checks if the channels are in the order required by GStreamer.
     * @param position The %GstAudioChannelPositions   to check.
     * @param force_order Only consider the GStreamer channel order.
     * @returns %TRUE if the channel positions are valid.
     */
    function audio_check_valid_channel_positions(position: AudioChannelPosition[], force_order: boolean): boolean;
    function audio_clipping_meta_api_get_type(): GObject.GType;
    function audio_clipping_meta_get_info(): Gst.MetaInfo;
    function audio_downmix_meta_api_get_type(): GObject.GType;
    function audio_downmix_meta_get_info(): Gst.MetaInfo;
    /**
     * Construct a #GstAudioFormat with given parameters.
     * @param sign signed or unsigned format
     * @param endianness G_LITTLE_ENDIAN or G_BIG_ENDIAN
     * @param width amount of bits used per sample
     * @param depth amount of used bits in @width
     * @returns a #GstAudioFormat or GST_AUDIO_FORMAT_UNKNOWN when no audio format exists with the given parameters.
     */
    function audio_format_build_integer(sign: boolean, endianness: number, width: number, depth: number): AudioFormat;
    /**
     * Fill `length` bytes in `dest` with silence samples for `info`.
     * @param info a #GstAudioFormatInfo
     * @param dest a destination   to fill
     */
    function audio_format_fill_silence(info: AudioFormatInfo, dest: Uint8Array): void;
    /**
     * Convert the `format` string to its #GstAudioFormat.
     * @param format a format string
     * @returns the #GstAudioFormat for @format or GST_AUDIO_FORMAT_UNKNOWN when the string is not a known format.
     */
    function audio_format_from_string(format: string): AudioFormat;
    /**
     * Get the #GstAudioFormatInfo for `format`
     * @param format a #GstAudioFormat
     * @returns The #GstAudioFormatInfo for @format.
     */
    function audio_format_get_info(format: AudioFormat): AudioFormatInfo;
    function audio_format_info_get_type(): GObject.GType;
    function audio_format_to_string(format: AudioFormat): string;
    /**
     * Return all the raw audio formats supported by GStreamer.
     * @returns an array of #GstAudioFormat
     */
    function audio_formats_raw(): AudioFormat[];
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
    function audio_get_channel_reorder_map(
        from: AudioChannelPosition[],
        to: AudioChannelPosition[],
        reorder_map: number[],
    ): boolean;
    /**
     * Calculated the size of the buffer expected by gst_audio_iec61937_payload() for
     * payloading type from `spec`.
     * @param spec the ringbufer spec
     * @returns the size or 0 if the given @type is not supported or cannot be payloaded.
     */
    function audio_iec61937_frame_size(spec: AudioRingBufferSpec): number;
    /**
     * Payloads `src` in the form specified by IEC 61937 for the type from `spec` and
     * stores the result in `dst`. `src` must contain exactly one frame of data and
     * the frame is not checked for errors.
     * @param src a buffer containing the data to payload
     * @param dst the destination buffer to store the       payloaded contents in. Should not overlap with @src
     * @param spec the ringbufer spec for @src
     * @param endianness the expected byte order of the payloaded data
     * @returns transfer-full: %TRUE if the payloading was successful, %FALSE otherwise.
     */
    function audio_iec61937_payload(
        src: Uint8Array,
        dst: Uint8Array,
        spec: AudioRingBufferSpec,
        endianness: number,
    ): boolean;
    /**
     * Parse `caps` and update `info`.
     * @param caps a #GstCaps
     * @returns TRUE if @caps could be parsed
     */
    function audio_info_from_caps(caps: Gst.Caps): boolean;
    /**
     * Initialize `info` with default values.
     */
    function audio_info_init(): void;
    /**
     * Return the #GType associated with #GstAudioLevelMeta.
     * @returns a #GType
     */
    function audio_level_meta_api_get_type(): GObject.GType;
    /**
     * Return the #GstMetaInfo associated with #GstAudioLevelMeta.
     * @returns a #GstMetaInfo
     */
    function audio_level_meta_get_info(): Gst.MetaInfo;
    /**
     * Return a generic raw audio caps for formats defined in `formats`.
     * If `formats` is %NULL returns a caps for all the supported raw audio formats,
     * see gst_audio_formats_raw().
     * @param formats an array of raw #GstAudioFormat, or %NULL
     * @param layout the layout of audio samples
     * @returns an audio @GstCaps
     */
    function audio_make_raw_caps(formats: AudioFormat[] | null, layout: AudioLayout): Gst.Caps;
    function audio_meta_api_get_type(): GObject.GType;
    function audio_meta_get_info(): Gst.MetaInfo;
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
    function audio_reorder_channels(
        data: Uint8Array,
        format: AudioFormat,
        from: AudioChannelPosition[],
        to: AudioChannelPosition[],
    ): boolean;
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
    function audio_resampler_new(
        method: AudioResamplerMethod,
        flags: AudioResamplerFlags,
        format: AudioFormat,
        channels: number,
        in_rate: number,
        out_rate: number,
        options: Gst.Structure,
    ): AudioResampler;
    /**
     * Set the parameters for resampling from `in_rate` to `out_rate` using `method`
     * for `quality` in `options`.
     * @param method a #GstAudioResamplerMethod
     * @param quality the quality
     * @param in_rate the input rate
     * @param out_rate the output rate
     * @param options a #GstStructure
     */
    function audio_resampler_options_set_quality(
        method: AudioResamplerMethod,
        quality: number,
        in_rate: number,
        out_rate: number,
        options: Gst.Structure,
    ): void;
    /**
     * Attaches #GstAudioClippingMeta metadata to `buffer` with the given parameters.
     * @param buffer a #GstBuffer
     * @param format GstFormat of @start and @stop, GST_FORMAT_DEFAULT is samples
     * @param start Amount of audio to clip from start of buffer
     * @param end Amount of  to clip from end of buffer
     * @returns the #GstAudioClippingMeta on @buffer.
     */
    function buffer_add_audio_clipping_meta(
        buffer: Gst.Buffer,
        format: Gst.Format,
        start: number,
        end: number,
    ): AudioClippingMeta;
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
    function buffer_add_audio_downmix_meta(
        buffer: Gst.Buffer,
        from_position: AudioChannelPosition[],
        to_position: AudioChannelPosition[],
        matrix: number,
    ): AudioDownmixMeta;
    /**
     * Attaches audio level information to `buffer`. (RFC 6464)
     * @param buffer a #GstBuffer
     * @param level the -dBov from 0-127 (127 is silence).
     * @param voice_activity whether the buffer contains voice activity.
     * @returns the #GstAudioLevelMeta on @buffer.
     */
    function buffer_add_audio_level_meta(
        buffer: Gst.Buffer,
        level: number,
        voice_activity: boolean,
    ): AudioLevelMeta | null;
    /**
     * Allocates and attaches a #GstAudioMeta on `buffer,` which must be writable
     * for that purpose. The fields of the #GstAudioMeta are directly populated
     * from the arguments of this function.
     *
     * When `info-&`gt;layout is %GST_AUDIO_LAYOUT_NON_INTERLEAVED and `offsets` is
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
     * @param offsets the offsets (in bytes) where each channel plane starts   in the buffer or %NULL to calculate it (see below); must be %NULL also   when @info-&gt;layout is %GST_AUDIO_LAYOUT_INTERLEAVED
     * @returns the #GstAudioMeta that was attached on the @buffer
     */
    function buffer_add_audio_meta(
        buffer: Gst.Buffer,
        info: AudioInfo,
        samples: number,
        offsets?: number | null,
    ): AudioMeta;
    /**
     * Find the #GstAudioDownmixMeta on `buffer` for the given destination
     * channel positions.
     * @param buffer a #GstBuffer
     * @param to_position the channel positions of   the destination
     * @returns the #GstAudioDownmixMeta on @buffer.
     */
    function buffer_get_audio_downmix_meta_for_channels(
        buffer: Gst.Buffer,
        to_position: AudioChannelPosition[],
    ): AudioDownmixMeta;
    /**
     * Find the #GstAudioLevelMeta on `buffer`.
     * @param buffer a #GstBuffer
     * @returns the #GstAudioLevelMeta or %NULL when there is no such metadata on @buffer.
     */
    function buffer_get_audio_level_meta(buffer: Gst.Buffer): AudioLevelMeta | null;
    function stream_volume_convert_volume(from: StreamVolumeFormat, to: StreamVolumeFormat, val: number): number;
    interface AudioBaseSinkCustomSlavingCallback {
        (
            sink: AudioBaseSink,
            etime: Gst.ClockTime,
            itime: Gst.ClockTime,
            requested_skew: Gst.ClockTimeDiff,
            discont_reason: AudioBaseSinkDiscontReason,
        ): void;
    }
    interface AudioClockGetTimeFunc {
        (clock: Gst.Clock): Gst.ClockTime;
    }
    interface AudioFormatPack {
        (info: AudioFormatInfo, flags: AudioPackFlags, src: Uint8Array, data: Uint8Array, length: number): void;
    }
    interface AudioFormatUnpack {
        (info: AudioFormatInfo, flags: AudioPackFlags, dest: Uint8Array, data: Uint8Array, length: number): void;
    }
    interface AudioRingBufferCallback {
        (rbuf: AudioRingBuffer, data: Uint8Array): void;
    }
    /**
     * Flags passed to gst_audio_channel_mixer_new()
     */
    enum AudioChannelMixerFlags {
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
     */
    enum AudioConverterFlags {
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
     */
    enum AudioFlags {
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
     */
    enum AudioFormatFlags {
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
     */
    enum AudioPackFlags {
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
     */
    enum AudioQuantizeFlags {
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
     */
    enum AudioResamplerFlags {
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
    module AudioAggregator {
        // Constructor properties interface
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
     */
    abstract class AudioAggregator extends GstBase.Aggregator {
        // Own properties of GstAudio-1.0.AudioAggregator

        alignment_threshold: number;
        alignmentThreshold: number;
        discont_wait: number;
        discontWait: number;
        /**
         * Causes the element to aggregate on a timeout even when no live source is
         * connected to its sinks. See #GstAggregator:min-upstream-latency for a
         * companion property: in the vast majority of cases where you plan to plug in
         * live sources with a non-zero latency, you should set it to a non-zero value.
         */
        force_live: boolean;
        /**
         * Causes the element to aggregate on a timeout even when no live source is
         * connected to its sinks. See #GstAggregator:min-upstream-latency for a
         * companion property: in the vast majority of cases where you plan to plug in
         * live sources with a non-zero latency, you should set it to a non-zero value.
         */
        forceLive: boolean;
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
        ignore_inactive_pads: boolean;
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
        ignoreInactivePads: boolean;
        output_buffer_duration: number;
        outputBufferDuration: number;
        /**
         * Output block size in nanoseconds, expressed as a fraction.
         */
        output_buffer_duration_fraction: Gst.Fraction;
        /**
         * Output block size in nanoseconds, expressed as a fraction.
         */
        outputBufferDurationFraction: Gst.Fraction;

        // Owm methods of GstAudio-1.0.AudioAggregator

        set_sink_caps(pad: AudioAggregatorPad, caps: Gst.Caps): void;
    }

    module AudioAggregatorConvertPad {
        // Constructor properties interface
    }

    /**
     * An implementation of GstPad that can be used with #GstAudioAggregator.
     *
     * See #GstAudioAggregator for more details.
     */
    class AudioAggregatorConvertPad extends AudioAggregatorPad {
        // Own properties of GstAudio-1.0.AudioAggregatorConvertPad

        converter_config: Gst.Structure;
        converterConfig: Gst.Structure;
    }

    module AudioAggregatorPad {
        // Constructor properties interface
    }

    /**
     * The default implementation of GstPad used with #GstAudioAggregator
     */
    class AudioAggregatorPad extends GstBase.AggregatorPad {
        // Own properties of GstAudio-1.0.AudioAggregatorPad

        /**
         * Emit QoS messages when dropping buffers.
         */
        qos_messages: boolean;
        /**
         * Emit QoS messages when dropping buffers.
         */
        qosMessages: boolean;
    }

    module AudioBaseSink {
        // Constructor properties interface
    }

    /**
     * This is the base class for audio sinks. Subclasses need to implement the
     * ::create_ringbuffer vmethod. This base class will then take care of
     * writing samples to the ringbuffer, synchronisation, clipping and flushing.
     */
    class AudioBaseSink extends GstBase.BaseSink {
        // Own properties of GstAudio-1.0.AudioBaseSink

        alignment_threshold: number;
        alignmentThreshold: number;
        buffer_time: number;
        bufferTime: number;
        can_activate_pull: boolean;
        canActivatePull: boolean;
        /**
         * A window of time in nanoseconds to wait before creating a discontinuity as
         * a result of breaching the drift-tolerance.
         */
        discont_wait: number;
        /**
         * A window of time in nanoseconds to wait before creating a discontinuity as
         * a result of breaching the drift-tolerance.
         */
        discontWait: number;
        /**
         * Controls the amount of time in microseconds that clocks are allowed
         * to drift before resynchronisation happens.
         */
        drift_tolerance: number;
        /**
         * Controls the amount of time in microseconds that clocks are allowed
         * to drift before resynchronisation happens.
         */
        driftTolerance: number;
        latency_time: number;
        latencyTime: number;
        provide_clock: boolean;
        provideClock: boolean;
        slave_method: AudioBaseSinkSlaveMethod;
        slaveMethod: AudioBaseSinkSlaveMethod;

        // Own fields of GstAudio-1.0.AudioBaseSink

        element: GstBase.BaseSink;
        ringbuffer: AudioRingBuffer;
        next_sample: number;
        provided_clock: Gst.Clock;
        eos_rendering: boolean;

        // Owm methods of GstAudio-1.0.AudioBaseSink

        /**
         * Create and return the #GstAudioRingBuffer for `sink`. This function will
         * call the ::create_ringbuffer vmethod and will set `sink` as the parent of
         * the returned buffer (see gst_object_set_parent()).
         * @returns The new ringbuffer of @sink.
         */
        create_ringbuffer(): AudioRingBuffer | null;
        /**
         * Get the current alignment threshold, in nanoseconds, used by `sink`.
         * @returns The current alignment threshold used by @sink.
         */
        get_alignment_threshold(): Gst.ClockTime;
        /**
         * Get the current discont wait, in nanoseconds, used by `sink`.
         * @returns The current discont wait used by @sink.
         */
        get_discont_wait(): Gst.ClockTime;
        /**
         * Get the current drift tolerance, in microseconds, used by `sink`.
         * @returns The current drift tolerance used by @sink.
         */
        get_drift_tolerance(): number;
        /**
         * Queries whether `sink` will provide a clock or not. See also
         * gst_audio_base_sink_set_provide_clock.
         * @returns %TRUE if @sink will provide a clock.
         */
        get_provide_clock(): boolean;
        /**
         * Get the current slave method used by `sink`.
         * @returns The current slave method used by @sink.
         */
        get_slave_method(): AudioBaseSinkSlaveMethod;
        /**
         * Informs this base class that the audio output device has failed for
         * some reason, causing a discontinuity (for example, because the device
         * recovered from the error, but lost all contents of its ring buffer).
         * This function is typically called by derived classes, and is useful
         * for the custom slave method.
         */
        report_device_failure(): void;
        /**
         * Controls the sink's alignment threshold.
         * @param alignment_threshold the new alignment threshold in nanoseconds
         */
        set_alignment_threshold(alignment_threshold: Gst.ClockTime): void;
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
        set_custom_slaving_callback(callback: AudioBaseSinkCustomSlavingCallback): void;
        /**
         * Controls how long the sink will wait before creating a discontinuity.
         * @param discont_wait the new discont wait in nanoseconds
         */
        set_discont_wait(discont_wait: Gst.ClockTime): void;
        /**
         * Controls the sink's drift tolerance.
         * @param drift_tolerance the new drift tolerance in microseconds
         */
        set_drift_tolerance(drift_tolerance: number): void;
        /**
         * Controls whether `sink` will provide a clock or not. If `provide` is %TRUE,
         * gst_element_provide_clock() will return a clock that reflects the datarate
         * of `sink`. If `provide` is %FALSE, gst_element_provide_clock() will return
         * NULL.
         * @param provide new state
         */
        set_provide_clock(provide: boolean): void;
        /**
         * Controls how clock slaving will be performed in `sink`.
         * @param method the new slave method
         */
        set_slave_method(method: AudioBaseSinkSlaveMethod): void;
    }

    module AudioBaseSrc {
        // Constructor properties interface
    }

    /**
     * This is the base class for audio sources. Subclasses need to implement the
     * ::create_ringbuffer vmethod. This base class will then take care of
     * reading samples from the ringbuffer, synchronisation and flushing.
     */
    class AudioBaseSrc extends GstBase.PushSrc {
        // Own properties of GstAudio-1.0.AudioBaseSrc

        /**
         * Actual configured size of audio buffer in microseconds.
         */
        readonly actual_buffer_time: number;
        /**
         * Actual configured size of audio buffer in microseconds.
         */
        readonly actualBufferTime: number;
        /**
         * Actual configured audio latency in microseconds.
         */
        readonly actual_latency_time: number;
        /**
         * Actual configured audio latency in microseconds.
         */
        readonly actualLatencyTime: number;
        buffer_time: number;
        bufferTime: number;
        latency_time: number;
        latencyTime: number;
        provide_clock: boolean;
        provideClock: boolean;
        slave_method: AudioBaseSrcSlaveMethod;
        slaveMethod: AudioBaseSrcSlaveMethod;

        // Own fields of GstAudio-1.0.AudioBaseSrc

        element: GstBase.PushSrc;
        ringbuffer: AudioRingBuffer;
        next_sample: number;
        clock: Gst.Clock;

        // Owm methods of GstAudio-1.0.AudioBaseSrc

        /**
         * Create and return the #GstAudioRingBuffer for `src`. This function will call
         * the ::create_ringbuffer vmethod and will set `src` as the parent of the
         * returned buffer (see gst_object_set_parent()).
         * @returns The new ringbuffer of @src.
         */
        create_ringbuffer(): AudioRingBuffer | null;
        /**
         * Queries whether `src` will provide a clock or not. See also
         * gst_audio_base_src_set_provide_clock.
         * @returns %TRUE if @src will provide a clock.
         */
        get_provide_clock(): boolean;
        /**
         * Get the current slave method used by `src`.
         * @returns The current slave method used by @src.
         */
        get_slave_method(): AudioBaseSrcSlaveMethod;
        /**
         * Controls whether `src` will provide a clock or not. If `provide` is %TRUE,
         * gst_element_provide_clock() will return a clock that reflects the datarate
         * of `src`. If `provide` is %FALSE, gst_element_provide_clock() will return NULL.
         * @param provide new state
         */
        set_provide_clock(provide: boolean): void;
        /**
         * Controls how clock slaving will be performed in `src`.
         * @param method the new slave method
         */
        set_slave_method(method: AudioBaseSrcSlaveMethod): void;
    }

    module AudioCdSrc {
        // Constructor properties interface
    }

    /**
     * Provides a base class for CD digital audio (CDDA) sources, which handles
     * things like seeking, querying, discid calculation, tags, and buffer
     * timestamping.
     *
     * ## Using GstAudioCdSrc-based elements in applications
     *
     * GstAudioCdSrc registers two #GstFormat&lt;!-- --&gt;s of its own, namely
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
     */
    class AudioCdSrc extends GstBase.PushSrc {
        // Own properties of GstAudio-1.0.AudioCdSrc

        device: string;
        mode: AudioCdSrcMode;
        track: number;

        // Own fields of GstAudio-1.0.AudioCdSrc

        pushsrc: GstBase.PushSrc;

        // Owm methods of GstAudio-1.0.AudioCdSrc

        /**
         * CDDA sources use this function from their start vfunc to announce the
         * available data and audio tracks to the base source class. The caller
         * should allocate `track` on the stack, the base source will do a shallow
         * copy of the structure (and take ownership of the taglist if there is one).
         * @param track address of #GstAudioCdSrcTrack to add
         * @returns FALSE on error, otherwise TRUE.
         */
        add_track(track: AudioCdSrcTrack): boolean;
    }

    module AudioClock {
        // Constructor properties interface
    }

    /**
     * #GstAudioClock makes it easy for elements to implement a #GstClock, they
     * simply need to provide a function that returns the current clock time.
     *
     * This object is internally used to implement the clock in #GstAudioBaseSink.
     */
    class AudioClock extends Gst.SystemClock {
        // Own fields of GstAudio-1.0.AudioClock

        clock: Gst.SystemClock;
        func: AudioClockGetTimeFunc;
        user_data: any;
        destroy_notify: GLib.DestroyNotify;

        // Constructors of GstAudio-1.0.AudioClock

        static ['new'](name: string, func: AudioClockGetTimeFunc): AudioClock;

        // Owm methods of GstAudio-1.0.AudioClock

        /**
         * Adjust `time` with the internal offset of the audio clock.
         * @param time a #GstClockTime
         * @returns @time adjusted with the internal offset.
         */
        adjust(time: Gst.ClockTime): Gst.ClockTime;
        /**
         * Report the time as returned by the #GstAudioClockGetTimeFunc without applying
         * any offsets.
         * @returns the time as reported by the time function of the audio clock
         */
        get_time(): Gst.ClockTime;
        /**
         * Invalidate the clock function. Call this function when the provided
         * #GstAudioClockGetTimeFunc cannot be called anymore, for example, when the
         * user_data becomes invalid.
         *
         * After calling this function, `clock` will return the last returned time for
         * the rest of its lifetime.
         */
        invalidate(): void;
        /**
         * Inform `clock` that future calls to #GstAudioClockGetTimeFunc will return values
         * starting from `time`. The clock will update an internal offset to make sure that
         * future calls to internal_time will return an increasing result as required by
         * the #GstClock object.
         * @param time a #GstClockTime
         */
        reset(time: Gst.ClockTime): void;
    }

    module AudioDecoder {
        // Constructor properties interface
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
     */
    abstract class AudioDecoder extends Gst.Element {
        // Own properties of GstAudio-1.0.AudioDecoder

        /**
         * Maximum number of tolerated consecutive decode errors. See
         * gst_audio_decoder_set_max_errors() for more details.
         */
        max_errors: number;
        /**
         * Maximum number of tolerated consecutive decode errors. See
         * gst_audio_decoder_set_max_errors() for more details.
         */
        maxErrors: number;
        min_latency: number;
        minLatency: number;
        plc: boolean;
        tolerance: number;

        // Own fields of GstAudio-1.0.AudioDecoder

        element: Gst.Element;
        sinkpad: Gst.Pad;
        srcpad: Gst.Pad;

        // Owm methods of GstAudio-1.0.AudioDecoder

        /**
         * Helper function that allocates a buffer to hold an audio frame
         * for `dec'`s current output format.
         * @param size size of the buffer
         * @returns allocated buffer
         */
        allocate_output_buffer(size: number): Gst.Buffer;
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
        finish_frame(buf: Gst.Buffer | null, frames: number): Gst.FlowReturn;
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
        finish_subframe(buf?: Gst.Buffer | null): Gst.FlowReturn;
        /**
         * Lets #GstAudioDecoder sub-classes to know the memory `allocator`
         * used by the base class and its `params`.
         *
         * Unref the `allocator` after use it.
         */
        get_allocator(): void;
        get_audio_info(): AudioInfo;
        get_delay(): number;
        /**
         * Queries decoder drain handling.
         * @returns TRUE if drainable handling is enabled. MT safe.
         */
        get_drainable(): boolean;
        get_estimate_rate(): number;
        /**
         * Sets the variables pointed to by `min` and `max` to the currently configured
         * latency.
         */
        get_latency(): void;
        get_max_errors(): number;
        /**
         * Queries decoder's latency aggregation.
         * @returns aggregation latency. MT safe.
         */
        get_min_latency(): Gst.ClockTime;
        /**
         * Queries decoder required format handling.
         * @returns TRUE if required format handling is enabled. MT safe.
         */
        get_needs_format(): boolean;
        /**
         * Return current parsing (sync and eos) state.
         */
        get_parse_state(): void;
        /**
         * Queries decoder packet loss concealment handling.
         * @returns TRUE if packet loss concealment is enabled. MT safe.
         */
        get_plc(): boolean;
        get_plc_aware(): number;
        /**
         * Queries current audio jitter tolerance threshold.
         * @returns decoder audio jitter tolerance threshold. MT safe.
         */
        get_tolerance(): Gst.ClockTime;
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
        merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void;
        /**
         * Negotiate with downstream elements to currently configured #GstAudioInfo.
         * Unmark GST_PAD_FLAG_NEED_RECONFIGURE in any case. But mark it again if
         * negotiate fails.
         * @returns %TRUE if the negotiation succeeded, else %FALSE.
         */
        negotiate(): boolean;
        /**
         * Returns caps that express `caps` (or sink template caps if `caps` == NULL)
         * restricted to rate/channels/... combinations supported by downstream
         * elements.
         * @param caps initial caps
         * @param filter filter caps
         * @returns a #GstCaps owned by caller
         */
        proxy_getcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps;
        /**
         * Sets a caps in allocation query which are different from the set
         * pad's caps. Use this function before calling
         * gst_audio_decoder_negotiate(). Setting to %NULL the allocation
         * query will use the caps from the pad.
         * @param allocation_caps a #GstCaps or %NULL
         */
        set_allocation_caps(allocation_caps?: Gst.Caps | null): void;
        /**
         * Configures decoder drain handling.  If drainable, subclass might
         * be handed a NULL buffer to have it return any leftover decoded data.
         * Otherwise, it is not considered so capable and will only ever be passed
         * real data.
         *
         * MT safe.
         * @param enabled new state
         */
        set_drainable(enabled: boolean): void;
        /**
         * Allows baseclass to perform byte to time estimated conversion.
         * @param enabled whether to enable byte to time conversion
         */
        set_estimate_rate(enabled: boolean): void;
        /**
         * Sets decoder latency. If the provided values changed from
         * previously provided ones, this will also post a LATENCY message on the bus
         * so the pipeline can reconfigure its global latency.
         * @param min minimum latency
         * @param max maximum latency
         */
        set_latency(min: Gst.ClockTime, max: Gst.ClockTime): void;
        /**
         * Sets numbers of tolerated decoder errors, where a tolerated one is then only
         * warned about, but more than tolerated will lead to fatal error. You can set
         * -1 for never returning fatal errors. Default is set to
         * GST_AUDIO_DECODER_MAX_ERRORS.
         * @param num max tolerated errors
         */
        set_max_errors(num: number): void;
        /**
         * Sets decoder minimum aggregation latency.
         *
         * MT safe.
         * @param num new minimum latency
         */
        set_min_latency(num: Gst.ClockTime): void;
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
        set_needs_format(enabled: boolean): void;
        /**
         * Configure output caps on the srcpad of `dec`. Similar to
         * gst_audio_decoder_set_output_format(), but allows subclasses to specify
         * output caps that can't be expressed via #GstAudioInfo e.g. caps that have
         * caps features.
         * @param caps (fixed) #GstCaps
         * @returns %TRUE on success.
         */
        set_output_caps(caps: Gst.Caps): boolean;
        /**
         * Configure output info on the srcpad of `dec`.
         * @param info #GstAudioInfo
         * @returns %TRUE on success.
         */
        set_output_format(info: AudioInfo): boolean;
        /**
         * Enable or disable decoder packet loss concealment, provided subclass
         * and codec are capable and allow handling plc.
         *
         * MT safe.
         * @param enabled new state
         */
        set_plc(enabled: boolean): void;
        /**
         * Indicates whether or not subclass handles packet loss concealment (plc).
         * @param plc new plc state
         */
        set_plc_aware(plc: boolean): void;
        /**
         * Configures decoder audio jitter tolerance threshold.
         *
         * MT safe.
         * @param tolerance new tolerance
         */
        set_tolerance(tolerance: Gst.ClockTime): void;
        /**
         * Lets #GstAudioDecoder sub-classes decide if they want the sink pad
         * to use the default pad query handler to reply to accept-caps queries.
         *
         * By setting this to true it is possible to further customize the default
         * handler with %GST_PAD_SET_ACCEPT_INTERSECT and
         * %GST_PAD_SET_ACCEPT_TEMPLATE
         * @param use if the default pad accept-caps query handling should be used
         */
        set_use_default_pad_acceptcaps(use: boolean): void;
    }

    module AudioEncoder {
        // Constructor properties interface
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
     */
    abstract class AudioEncoder extends Gst.Element {
        // Own properties of GstAudio-1.0.AudioEncoder

        hard_resync: boolean;
        hardResync: boolean;
        readonly mark_granule: boolean;
        readonly markGranule: boolean;
        perfect_timestamp: boolean;
        perfectTimestamp: boolean;
        tolerance: number;

        // Own fields of GstAudio-1.0.AudioEncoder

        element: Gst.Element;
        sinkpad: Gst.Pad;
        srcpad: Gst.Pad;

        // Owm methods of GstAudio-1.0.AudioEncoder

        /**
         * Helper function that allocates a buffer to hold an encoded audio frame
         * for `enc'`s current output format.
         * @param size size of the buffer
         * @returns allocated buffer
         */
        allocate_output_buffer(size: number): Gst.Buffer;
        /**
         * Collects encoded data and pushes encoded data downstream.
         * Source pad caps must be set when this is called.
         *
         * If `samples` &lt; 0, then best estimate is all samples provided to encoder
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
        finish_frame(buffer: Gst.Buffer | null, samples: number): Gst.FlowReturn;
        /**
         * Lets #GstAudioEncoder sub-classes to know the memory `allocator`
         * used by the base class and its `params`.
         *
         * Unref the `allocator` after use it.
         */
        get_allocator(): void;
        get_audio_info(): AudioInfo;
        /**
         * Queries encoder drain handling.
         * @returns TRUE if drainable handling is enabled. MT safe.
         */
        get_drainable(): boolean;
        get_frame_max(): number;
        get_frame_samples_max(): number;
        get_frame_samples_min(): number;
        /**
         * Queries encoder hard minimum handling.
         * @returns TRUE if hard minimum handling is enabled. MT safe.
         */
        get_hard_min(): boolean;
        get_hard_resync(): boolean;
        /**
         * Sets the variables pointed to by `min` and `max` to the currently configured
         * latency.
         */
        get_latency(): void;
        get_lookahead(): number;
        /**
         * Queries if the encoder will handle granule marking.
         * @returns TRUE if granule marking is enabled. MT safe.
         */
        get_mark_granule(): boolean;
        /**
         * Queries encoder perfect timestamp behaviour.
         * @returns TRUE if perfect timestamp setting enabled. MT safe.
         */
        get_perfect_timestamp(): boolean;
        /**
         * Queries current audio jitter tolerance threshold.
         * @returns encoder audio jitter tolerance threshold. MT safe.
         */
        get_tolerance(): Gst.ClockTime;
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
        merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void;
        /**
         * Negotiate with downstream elements to currently configured #GstCaps.
         * Unmark GST_PAD_FLAG_NEED_RECONFIGURE in any case. But mark it again if
         * negotiate fails.
         * @returns %TRUE if the negotiation succeeded, else %FALSE.
         */
        negotiate(): boolean;
        /**
         * Returns caps that express `caps` (or sink template caps if `caps` == NULL)
         * restricted to channel/rate combinations supported by downstream elements
         * (e.g. muxers).
         * @param caps initial caps
         * @param filter filter caps
         * @returns a #GstCaps owned by caller
         */
        proxy_getcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps;
        /**
         * Sets a caps in allocation query which are different from the set
         * pad's caps. Use this function before calling
         * gst_audio_encoder_negotiate(). Setting to %NULL the allocation
         * query will use the caps from the pad.
         * @param allocation_caps a #GstCaps or %NULL
         */
        set_allocation_caps(allocation_caps?: Gst.Caps | null): void;
        /**
         * Configures encoder drain handling.  If drainable, subclass might
         * be handed a NULL buffer to have it return any leftover encoded data.
         * Otherwise, it is not considered so capable and will only ever be passed
         * real data.
         *
         * MT safe.
         * @param enabled new state
         */
        set_drainable(enabled: boolean): void;
        /**
         * Sets max number of frames accepted at once (assumed minimally 1).
         * Requires `frame_samples_min` and `frame_samples_max` to be the equal.
         *
         * Note: This value will be reset to 0 every time before
         * #GstAudioEncoderClass.set_format() is called.
         * @param num number of frames
         */
        set_frame_max(num: number): void;
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
        set_frame_samples_max(num: number): void;
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
        set_frame_samples_min(num: number): void;
        /**
         * Configures encoder hard minimum handling.  If enabled, subclass
         * will never be handed less samples than it configured, which otherwise
         * might occur near end-of-data handling.  Instead, the leftover samples
         * will simply be discarded.
         *
         * MT safe.
         * @param enabled new state
         */
        set_hard_min(enabled: boolean): void;
        set_hard_resync(enabled: boolean): void;
        /**
         * Set the codec headers to be sent downstream whenever requested.
         * @param headers a list of   #GstBuffer containing the codec header
         */
        set_headers(headers: Gst.Buffer[]): void;
        /**
         * Sets encoder latency. If the provided values changed from
         * previously provided ones, this will also post a LATENCY message on the bus
         * so the pipeline can reconfigure its global latency.
         * @param min minimum latency
         * @param max maximum latency
         */
        set_latency(min: Gst.ClockTime, max: Gst.ClockTime): void;
        /**
         * Sets encoder lookahead (in units of input rate samples)
         *
         * Note: This value will be reset to 0 every time before
         * #GstAudioEncoderClass.set_format() is called.
         * @param num lookahead
         */
        set_lookahead(num: number): void;
        /**
         * Enable or disable encoder granule handling.
         *
         * MT safe.
         * @param enabled new state
         */
        set_mark_granule(enabled: boolean): void;
        /**
         * Configure output caps on the srcpad of `enc`.
         * @param caps #GstCaps
         * @returns %TRUE on success.
         */
        set_output_format(caps: Gst.Caps): boolean;
        /**
         * Enable or disable encoder perfect output timestamp preference.
         *
         * MT safe.
         * @param enabled new state
         */
        set_perfect_timestamp(enabled: boolean): void;
        /**
         * Configures encoder audio jitter tolerance threshold.
         *
         * MT safe.
         * @param tolerance new tolerance
         */
        set_tolerance(tolerance: Gst.ClockTime): void;
    }

    module AudioFilter {
        // Constructor properties interface
    }

    /**
     * #GstAudioFilter is a #GstBaseTransform&lt;!-- --&gt;-derived base class for simple audio
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
     */
    abstract class AudioFilter extends GstBase.BaseTransform {
        // Own fields of GstAudio-1.0.AudioFilter

        basetransform: GstBase.BaseTransform;

        // Owm methods of GstAudio-1.0.AudioFilter

        static add_pad_templates(allowed_caps: Gst.Caps): void;
    }

    module AudioRingBuffer {
        // Constructor properties interface
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
     */
    abstract class AudioRingBuffer extends Gst.Object {
        // Own fields of GstAudio-1.0.AudioRingBuffer

        object: Gst.Object;
        open: boolean;
        acquired: boolean;
        memory: number;
        size: number;
        samples_per_seg: number;
        empty_seg: number;
        state: number;
        segdone: number;
        segbase: number;
        waiting: number;

        // Owm methods of GstAudio-1.0.AudioRingBuffer

        /**
         * Print debug info about the buffer sized in `spec` to the debug log.
         * @param spec the spec to debug
         */
        static debug_spec_buff(spec: AudioRingBufferSpec): void;
        /**
         * Print debug info about the parsed caps in `spec` to the debug log.
         * @param spec the spec to debug
         */
        static debug_spec_caps(spec: AudioRingBufferSpec): void;
        /**
         * Parse `caps` into `spec`.
         * @param spec a spec
         * @param caps a #GstCaps
         */
        static parse_caps(spec: AudioRingBufferSpec, caps: Gst.Caps): boolean;

        // Owm methods of GstAudio-1.0.AudioRingBuffer

        /**
         * Allocate the resources for the ringbuffer. This function fills
         * in the data pointer of the ring buffer with a valid #GstBuffer
         * to which samples can be written.
         * @param spec the specs of the buffer
         * @returns TRUE if the device could be acquired, FALSE on error. MT safe.
         */
        acquire(spec: AudioRingBufferSpec): boolean;
        /**
         * Activate `buf` to start or stop pulling data.
         *
         * MT safe.
         * @param active the new mode
         * @returns TRUE if the device could be activated in the requested mode, FALSE on error.
         */
        activate(active: boolean): boolean;
        /**
         * Subclasses should call this function to notify the fact that
         * `advance` segments are now processed by the device.
         *
         * MT safe.
         * @param advance the number of segments written
         */
        advance(advance: number): void;
        /**
         * Clear the given segment of the buffer with silence samples.
         * This function is used by subclasses.
         *
         * MT safe.
         * @param segment the segment to clear
         */
        clear(segment: number): void;
        /**
         * Clear all samples from the ringbuffer.
         *
         * MT safe.
         */
        clear_all(): void;
        /**
         * Close the audio device associated with the ring buffer. The ring buffer
         * should already have been released via gst_audio_ring_buffer_release().
         * @returns TRUE if the device could be closed, FALSE on error. MT safe.
         */
        close_device(): boolean;
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
        commit(sample: number, data: Uint8Array, out_samples: number, accum: number): number;
        /**
         * Convert `src_val` in `src_fmt` to the equivalent value in `dest_fmt`. The result
         * will be put in `dest_val`.
         * @param src_fmt the source format
         * @param src_val the source value
         * @param dest_fmt the destination format
         * @returns TRUE if the conversion succeeded.
         */
        convert(src_fmt: Gst.Format, src_val: number, dest_fmt: Gst.Format): boolean;
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
        delay(): number;
        /**
         * Checks the status of the device associated with the ring buffer.
         * @returns TRUE if the device was open, FALSE if it was closed. MT safe.
         */
        device_is_open(): boolean;
        /**
         * Check if the ringbuffer is acquired and ready to use.
         * @returns TRUE if the ringbuffer is acquired, FALSE on error. MT safe.
         */
        is_acquired(): boolean;
        /**
         * Check if `buf` is activated.
         *
         * MT safe.
         * @returns TRUE if the device is active.
         */
        is_active(): boolean;
        /**
         * Check if `buf` is flushing.
         *
         * MT safe.
         * @returns TRUE if the device is flushing.
         */
        is_flushing(): boolean;
        /**
         * Tell the ringbuffer that it is allowed to start playback when
         * the ringbuffer is filled with samples.
         *
         * MT safe.
         * @param allowed the new value
         */
        may_start(allowed: boolean): void;
        /**
         * Open the audio device associated with the ring buffer. Does not perform any
         * setup on the device. You must open the device before acquiring the ring
         * buffer.
         * @returns TRUE if the device could be opened, FALSE on error. MT safe.
         */
        open_device(): boolean;
        /**
         * Pause processing samples from the ringbuffer.
         * @returns TRUE if the device could be paused, FALSE on error. MT safe.
         */
        pause(): boolean;
        /**
         * Returns a pointer to memory where the data from segment `segment`
         * can be found. This function is mostly used by subclasses.
         * @returns FALSE if the buffer is not started. MT safe.
         */
        prepare_read(): boolean;
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
        read(sample: number, data: Uint8Array): number;
        /**
         * Free the resources of the ringbuffer.
         * @returns TRUE if the device could be released, FALSE on error. MT safe.
         */
        release(): boolean;
        /**
         * Get the number of samples that were processed by the ringbuffer
         * since it was last started. This does not include the number of samples not
         * yet processed (see gst_audio_ring_buffer_delay()).
         * @returns The number of samples processed by the ringbuffer. MT safe.
         */
        samples_done(): number;
        /**
         * Sets the given callback function on the buffer. This function
         * will be called every time a segment has been written to a device.
         *
         * MT safe.
         * @param cb the callback to set
         */
        set_callback(cb?: AudioRingBufferCallback | null): void;
        /**
         * Tell the ringbuffer about the device's channel positions. This must
         * be called in when the ringbuffer is acquired.
         * @param position the device channel positions
         */
        set_channel_positions(position: AudioChannelPosition[]): void;
        /**
         * Set the ringbuffer to flushing mode or normal mode.
         *
         * MT safe.
         * @param flushing the new mode
         */
        set_flushing(flushing: boolean): void;
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
        set_sample(sample: number): void;
        set_timestamp(readseg: number, timestamp: Gst.ClockTime): void;
        /**
         * Start processing samples from the ringbuffer.
         * @returns TRUE if the device could be started, FALSE on error. MT safe.
         */
        start(): boolean;
        /**
         * Stop processing samples from the ringbuffer.
         * @returns TRUE if the device could be stopped, FALSE on error. MT safe.
         */
        stop(): boolean;
    }

    module AudioSink {
        // Constructor properties interface
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
     */
    class AudioSink extends AudioBaseSink {
        // Own fields of GstAudio-1.0.AudioSink

        element: AudioBaseSink;
    }

    module AudioSrc {
        // Constructor properties interface
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
     */
    class AudioSrc extends AudioBaseSrc {
        // Own fields of GstAudio-1.0.AudioSrc

        element: AudioBaseSrc;
    }

    class AudioAggregatorClass {}

    class AudioAggregatorConvertPadClass {}

    class AudioAggregatorConvertPadPrivate {}

    class AudioAggregatorPadClass {}

    class AudioAggregatorPadPrivate {}

    class AudioAggregatorPrivate {}

    /**
     * #GstAudioBaseSink class. Override the vmethod to implement
     * functionality.
     */
    class AudioBaseSinkClass {}

    class AudioBaseSinkPrivate {}

    /**
     * #GstAudioBaseSrc class. Override the vmethod to implement
     * functionality.
     */
    class AudioBaseSrcClass {}

    class AudioBaseSrcPrivate {}

    /**
     * A structure containing the result of an audio buffer map operation,
     * which is executed with gst_audio_buffer_map(). For non-interleaved (planar)
     * buffers, the beginning of each channel in the buffer has its own pointer in
     * the `planes` array. For interleaved buffers, the `planes` array only contains
     * one item, which is the pointer to the beginning of the buffer, and `n_planes`
     * equals 1.
     *
     * The different channels in `planes` are always in the GStreamer channel order.
     */
    class AudioBuffer {
        // Own fields of GstAudio-1.0.AudioBuffer

        n_samples: number;
        n_planes: number;
        planes: any;

        // Owm methods of GstAudio-1.0.AudioBuffer

        /**
         * Clip the buffer to the given %GstSegment.
         *
         * After calling this function the caller does not own a reference to
         * `buffer` anymore.
         * @param buffer The buffer to clip.
         * @param segment Segment in %GST_FORMAT_TIME or %GST_FORMAT_DEFAULT to which           the buffer should be clipped.
         * @param rate sample rate.
         * @param bpf size of one audio frame in bytes. This is the size of one sample * number of channels.
         */
        static clip(buffer: Gst.Buffer, segment: Gst.Segment, rate: number, bpf: number): Gst.Buffer | null;
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
         */
        static map(info: AudioInfo, gstbuffer: Gst.Buffer, flags: Gst.MapFlags): boolean;
        /**
         * Reorders `buffer` from the channel positions `from` to the channel
         * positions `to`. `from` and `to` must contain the same number of
         * positions and the same positions, only in a different order.
         * `buffer` must be writable.
         * @param buffer The buffer to reorder.
         * @param format The %GstAudioFormat of the buffer.
         * @param from The channel positions in the buffer.
         * @param to The channel positions to convert to.
         */
        static reorder_channels(
            buffer: Gst.Buffer,
            format: AudioFormat,
            from: AudioChannelPosition[],
            to: AudioChannelPosition[],
        ): boolean;
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
         */
        static truncate(buffer: Gst.Buffer, bpf: number, trim: number, samples: number): Gst.Buffer;

        // Owm methods of GstAudio-1.0.AudioBuffer

        /**
         * Unmaps an audio buffer that was previously mapped with
         * gst_audio_buffer_map().
         */
        unmap(): void;
    }

    /**
     * Audio CD source base class.
     */
    class AudioCdSrcClass {}

    class AudioCdSrcPrivate {}

    /**
     * CD track abstraction to communicate TOC entries to the base class.
     *
     * This structure is only for use by sub-classed in connection with
     * gst_audio_cd_src_add_track().
     *
     * Applications will be informed of the available tracks via a TOC message
     * on the pipeline's #GstBus instead.
     */
    class AudioCdSrcTrack {
        // Own fields of GstAudio-1.0.AudioCdSrcTrack

        is_audio: boolean;
        num: number;
        start: number;
        end: number;
    }

    class AudioChannelMixer {
        // Owm methods of GstAudio-1.0.AudioChannelMixer

        /**
         * Free memory allocated by `mix`.
         */
        free(): void;
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
        is_passthrough(): boolean;
        /**
         * In case the samples are interleaved, `in` and `out` must point to an
         * array with a single element pointing to a block of interleaved samples.
         *
         * If non-interleaved samples are used, `in` and `out` must point to an
         * array with pointers to memory blocks, one for each channel.
         *
         * Perform channel mixing on `in_data` and write the result to `out_data`.
         * `in_data` and `out_data` need to be in `format` and `layout`.
         * @param _in input samples
         * @param out output samples
         * @param samples number of samples
         */
        samples(_in: any | null, out: any | null, samples: number): void;
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
     */
    class AudioClippingMeta {
        // Own fields of GstAudio-1.0.AudioClippingMeta

        format: Gst.Format;
        start: number;
        end: number;

        // Owm methods of GstAudio-1.0.AudioClippingMeta

        static get_info(): Gst.MetaInfo;
    }

    class AudioClockClass {}

    /**
     * This object is used to convert audio samples from one format to another.
     * The object can perform conversion of:
     *
     *  * audio format with optional dithering and noise shaping
     *
     *  * audio samplerate
     *
     *  * audio channels and channel layout
     */
    class AudioConverter {
        // Constructors of GstAudio-1.0.AudioConverter

        constructor(flags: AudioConverterFlags, in_info: AudioInfo, out_info: AudioInfo, config?: Gst.Structure | null);

        static ['new'](
            flags: AudioConverterFlags,
            in_info: AudioInfo,
            out_info: AudioInfo,
            config?: Gst.Structure | null,
        ): AudioConverter;

        // Owm methods of GstAudio-1.0.AudioConverter

        /**
         * Convenience wrapper around gst_audio_converter_samples(), which will
         * perform allocation of the output buffer based on the result from
         * gst_audio_converter_get_out_frames().
         * @param flags extra #GstAudioConverterFlags
         * @param _in input data
         * @returns %TRUE is the conversion could be performed.
         */
        convert(flags: AudioConverterFlags, _in: Uint8Array): boolean;
        /**
         * Free a previously allocated `convert` instance.
         */
        free(): void;
        /**
         * Get the current configuration of `convert`.
         * @returns a #GstStructure that remains valid for as long as @convert is valid   or until gst_audio_converter_update_config() is called.
         */
        get_config(): Gst.Structure;
        /**
         * Calculate how many input frames are currently needed by `convert` to produce
         * `out_frames` of output frames.
         * @param out_frames number of output frames
         * @returns the number of input frames
         */
        get_in_frames(out_frames: number): number;
        /**
         * Get the maximum number of input frames that the converter would
         * need before producing output.
         * @returns the latency of @convert as expressed in the number of frames.
         */
        get_max_latency(): number;
        /**
         * Calculate how many output frames can be produced when `in_frames` input
         * frames are given to `convert`.
         * @param in_frames number of input frames
         * @returns the number of output frames
         */
        get_out_frames(in_frames: number): number;
        /**
         * Returns whether the audio converter will operate in passthrough mode.
         * The return value would be typically input to gst_base_transform_set_passthrough()
         * @returns %TRUE when no conversion will actually occur.
         */
        is_passthrough(): boolean;
        /**
         * Reset `convert` to the state it was when it was first created, clearing
         * any history it might currently have.
         */
        reset(): void;
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
         * @param _in input frames
         * @param in_frames number of input frames
         * @param out output frames
         * @param out_frames number of output frames
         * @returns %TRUE is the conversion could be performed.
         */
        samples(
            flags: AudioConverterFlags,
            _in: any | null,
            in_frames: number,
            out: any | null,
            out_frames: number,
        ): boolean;
        /**
         * Returns whether the audio converter can perform the conversion in-place.
         * The return value would be typically input to gst_base_transform_set_in_place()
         * @returns %TRUE when the conversion can be done in place.
         */
        supports_inplace(): boolean;
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
        update_config(in_rate: number, out_rate: number, config?: Gst.Structure | null): boolean;
    }

    /**
     * Subclasses can override any of the available virtual methods or not, as
     * needed. At minimum `handle_frame` (and likely `set_format)` needs to be
     * overridden.
     */
    class AudioDecoderClass {}

    class AudioDecoderPrivate {}

    /**
     * Extra buffer metadata describing audio downmixing matrix. This metadata is
     * attached to audio buffers and contains a matrix to downmix the buffer number
     * of channels to `channels`.
     *
     * `matrix` is an two-dimensional array of `to_channels` times `from_channels`
     * coefficients, i.e. the i-th output channels is constructed by multiplicating
     * the input channels with the coefficients in `matrix[`i] and taking the sum
     * of the results.
     */
    class AudioDownmixMeta {
        // Own fields of GstAudio-1.0.AudioDownmixMeta

        from_position: AudioChannelPosition;
        to_position: AudioChannelPosition;
        from_channels: number;
        to_channels: number;
        matrix: number;

        // Owm methods of GstAudio-1.0.AudioDownmixMeta

        static get_info(): Gst.MetaInfo;
    }

    /**
     * Subclasses can override any of the available virtual methods or not, as
     * needed. At minimum `set_format` and `handle_frame` needs to be overridden.
     */
    class AudioEncoderClass {}

    class AudioEncoderPrivate {}

    /**
     * In addition to the `setup` virtual function, you should also override the
     * GstBaseTransform::transform and/or GstBaseTransform::transform_ip virtual
     * function.
     */
    class AudioFilterClass {
        // Owm methods of GstAudio-1.0.AudioFilterClass

        /**
         * Convenience function to add pad templates to this element class, with
         * `allowed_caps` as the caps that can be handled.
         *
         * This function is usually used from within a GObject class_init function.
         * @param allowed_caps what formats the filter can handle, as #GstCaps
         */
        add_pad_templates(allowed_caps: Gst.Caps): void;
    }

    /**
     * Information for an audio format.
     */
    class AudioFormatInfo {
        // Own fields of GstAudio-1.0.AudioFormatInfo

        format: AudioFormat;
        name: string;
        description: string;
        flags: AudioFormatFlags;
        endianness: number;
        width: number;
        depth: number;
        silence: Uint8Array;
        unpack_format: AudioFormat;
        unpack_func: AudioFormatUnpack;
        pack_func: AudioFormatPack;

        // Owm methods of GstAudio-1.0.AudioFormatInfo

        /**
         * Fill `length` bytes in `dest` with silence samples for `info`.
         * @param dest a destination   to fill
         */
        fill_silence(dest: Uint8Array): void;
    }

    /**
     * Information describing audio properties. This information can be filled
     * in from GstCaps with gst_audio_info_from_caps().
     *
     * Use the provided macros to access the info in this structure.
     */
    class AudioInfo {
        // Own fields of GstAudio-1.0.AudioInfo

        flags: AudioFlags;
        layout: AudioLayout;
        rate: number;
        channels: number;
        bpf: number;
        position: AudioChannelPosition[];

        // Constructors of GstAudio-1.0.AudioInfo

        constructor(
            properties?: Partial<{
                flags: AudioFlags;
                layout: AudioLayout;
                rate: number;
                channels: number;
                bpf: number;
                position: AudioChannelPosition[];
            }>,
        );

        static ['new'](): AudioInfo;

        static new_from_caps(caps: Gst.Caps): AudioInfo;

        // Owm methods of GstAudio-1.0.AudioInfo

        /**
         * Parse `caps` and update `info`.
         * @param caps a #GstCaps
         */
        static from_caps(caps: Gst.Caps): boolean;
        /**
         * Initialize `info` with default values.
         */
        static init(): void;

        // Owm methods of GstAudio-1.0.AudioInfo

        /**
         * Converts among various #GstFormat types.  This function handles
         * GST_FORMAT_BYTES, GST_FORMAT_TIME, and GST_FORMAT_DEFAULT.  For
         * raw audio, GST_FORMAT_DEFAULT corresponds to audio frames.  This
         * function can be used to handle pad queries of the type GST_QUERY_CONVERT.
         * @param src_fmt #GstFormat of the @src_val
         * @param src_val value to convert
         * @param dest_fmt #GstFormat of the @dest_val
         * @returns TRUE if the conversion was successful.
         */
        convert(src_fmt: Gst.Format, src_val: number, dest_fmt: Gst.Format): boolean;
        /**
         * Copy a GstAudioInfo structure.
         * @returns a new #GstAudioInfo. free with gst_audio_info_free.
         */
        copy(): AudioInfo;
        /**
         * Free a GstAudioInfo structure previously allocated with gst_audio_info_new()
         * or gst_audio_info_copy().
         */
        free(): void;
        /**
         * Compares two #GstAudioInfo and returns whether they are equal or not
         * @param other a #GstAudioInfo
         * @returns %TRUE if @info and @other are equal, else %FALSE.
         */
        is_equal(other: AudioInfo): boolean;
        /**
         * Set the default info for the audio info of `format` and `rate` and `channels`.
         *
         * Note: This initializes `info` first, no values are preserved.
         * @param format the format
         * @param rate the samplerate
         * @param channels the number of channels
         * @param position the channel positions
         */
        set_format(format: AudioFormat, rate: number, channels: number, position?: AudioChannelPosition[] | null): void;
        /**
         * Convert the values of `info` into a #GstCaps.
         * @returns the new #GstCaps containing the          info of @info.
         */
        to_caps(): Gst.Caps;
    }

    /**
     * Meta containing Audio Level Indication: https://tools.ietf.org/html/rfc6464
     */
    class AudioLevelMeta {
        // Own fields of GstAudio-1.0.AudioLevelMeta

        level: number;
        voice_activity: boolean;

        // Owm methods of GstAudio-1.0.AudioLevelMeta

        /**
         * Return the #GstMetaInfo associated with #GstAudioLevelMeta.
         */
        static get_info(): Gst.MetaInfo;
    }

    /**
     * #GstAudioDownmixMeta defines an audio downmix matrix to be send along with
     * audio buffers. These functions in this module help to create and attach the
     * meta as well as extracting it.
     */
    class AudioMeta {
        // Own fields of GstAudio-1.0.AudioMeta

        samples: number;
        offsets: number;

        // Owm methods of GstAudio-1.0.AudioMeta

        static get_info(): Gst.MetaInfo;
    }

    class AudioQuantize {
        // Owm methods of GstAudio-1.0.AudioQuantize

        /**
         * Free a #GstAudioQuantize.
         */
        free(): void;
        /**
         * Reset `quant` to the state is was when created, clearing any
         * history it might have.
         */
        reset(): void;
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
         * @param _in input samples
         * @param out output samples
         * @param samples number of samples
         */
        samples(_in: any | null, out: any | null, samples: number): void;
    }

    /**
     * #GstAudioResampler is a structure which holds the information
     * required to perform various kinds of resampling filtering.
     */
    class AudioResampler {
        // Owm methods of GstAudio-1.0.AudioResampler

        /**
         * Make a new resampler.
         * @param method a #GstAudioResamplerMethod
         * @param flags #GstAudioResamplerFlags
         * @param format the #GstAudioFormat
         * @param channels the number of channels
         * @param in_rate input rate
         * @param out_rate output rate
         * @param options extra options
         */
        static new(
            method: AudioResamplerMethod,
            flags: AudioResamplerFlags,
            format: AudioFormat,
            channels: number,
            in_rate: number,
            out_rate: number,
            options: Gst.Structure,
        ): AudioResampler;
        /**
         * Set the parameters for resampling from `in_rate` to `out_rate` using `method`
         * for `quality` in `options`.
         * @param method a #GstAudioResamplerMethod
         * @param quality the quality
         * @param in_rate the input rate
         * @param out_rate the output rate
         * @param options a #GstStructure
         */
        static options_set_quality(
            method: AudioResamplerMethod,
            quality: number,
            in_rate: number,
            out_rate: number,
            options: Gst.Structure,
        ): void;

        // Owm methods of GstAudio-1.0.AudioResampler

        /**
         * Free a previously allocated #GstAudioResampler `resampler`.
         */
        free(): void;
        /**
         * Get the number of input frames that would currently be needed
         * to produce `out_frames` from `resampler`.
         * @param out_frames number of input frames
         * @returns The number of input frames needed for producing @out_frames of data from @resampler.
         */
        get_in_frames(out_frames: number): number;
        /**
         * Get the maximum number of input samples that the resampler would
         * need before producing output.
         * @returns the latency of @resampler as expressed in the number of frames.
         */
        get_max_latency(): number;
        /**
         * Get the number of output frames that would be currently available when
         * `in_frames` are given to `resampler`.
         * @param in_frames number of input frames
         * @returns The number of frames that would be available after giving @in_frames as input to @resampler.
         */
        get_out_frames(in_frames: number): number;
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
         * @param _in input samples
         * @param in_frames number of input frames
         * @param out output samples
         * @param out_frames number of output frames
         */
        resample(_in: any | null, in_frames: number, out: any | null, out_frames: number): void;
        /**
         * Reset `resampler` to the state it was when it was first created, discarding
         * all sample history.
         */
        reset(): void;
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
        update(in_rate: number, out_rate: number, options: Gst.Structure): boolean;
    }

    /**
     * The vmethods that subclasses can override to implement the ringbuffer.
     */
    class AudioRingBufferClass {}

    /**
     * The structure containing the format specification of the ringbuffer.
     */
    class AudioRingBufferSpec {
        // Own fields of GstAudio-1.0.AudioRingBufferSpec

        type: AudioRingBufferFormatType;
        latency_time: number;
        buffer_time: number;
        segsize: number;
        segtotal: number;
        seglatency: number;
    }

    class AudioSinkClass {}

    class AudioSinkClassExtension {}

    /**
     * #GstAudioSrc class. Override the vmethod to implement
     * functionality.
     */
    class AudioSrcClass {}

    /**
     * #GstAudioStreamAlign provides a helper object that helps tracking audio
     * stream alignment and discontinuities, and detects discontinuities if
     * possible.
     *
     * See gst_audio_stream_align_new() for a description of its parameters and
     * gst_audio_stream_align_process() for the details of the processing.
     */
    class AudioStreamAlign {
        // Constructors of GstAudio-1.0.AudioStreamAlign

        constructor(rate: number, alignment_threshold: Gst.ClockTime, discont_wait: Gst.ClockTime);

        static ['new'](rate: number, alignment_threshold: Gst.ClockTime, discont_wait: Gst.ClockTime): AudioStreamAlign;

        // Owm methods of GstAudio-1.0.AudioStreamAlign

        /**
         * Copy a GstAudioStreamAlign structure.
         * @returns a new #GstAudioStreamAlign. free with gst_audio_stream_align_free.
         */
        copy(): AudioStreamAlign;
        /**
         * Free a GstAudioStreamAlign structure previously allocated with gst_audio_stream_align_new()
         * or gst_audio_stream_align_copy().
         */
        free(): void;
        /**
         * Gets the currently configured alignment threshold.
         * @returns The currently configured alignment threshold
         */
        get_alignment_threshold(): Gst.ClockTime;
        /**
         * Gets the currently configured discont wait.
         * @returns The currently configured discont wait
         */
        get_discont_wait(): Gst.ClockTime;
        /**
         * Gets the currently configured sample rate.
         * @returns The currently configured sample rate
         */
        get_rate(): number;
        /**
         * Returns the number of samples that were processed since the last
         * discontinuity was detected.
         * @returns The number of samples processed since the last discontinuity.
         */
        get_samples_since_discont(): number;
        /**
         * Timestamp that was passed when a discontinuity was detected, i.e. the first
         * timestamp after the discontinuity.
         * @returns The last timestamp at when a discontinuity was detected
         */
        get_timestamp_at_discont(): Gst.ClockTime;
        /**
         * Marks the next buffer as discontinuous and resets timestamp tracking.
         */
        mark_discont(): void;
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
        process(discont: boolean, timestamp: Gst.ClockTime, n_samples: number): boolean;
        /**
         * Sets `alignment_treshold` as new alignment threshold for the following processing.
         * @param alignment_threshold a new alignment threshold
         */
        set_alignment_threshold(alignment_threshold: Gst.ClockTime): void;
        /**
         * Sets `alignment_treshold` as new discont wait for the following processing.
         * @param discont_wait a new discont wait
         */
        set_discont_wait(discont_wait: Gst.ClockTime): void;
        /**
         * Sets `rate` as new sample rate for the following processing. If the sample
         * rate differs this implicitly marks the next data as discontinuous.
         * @param rate a new sample rate
         */
        set_rate(rate: number): void;
    }

    class StreamVolumeInterface {}

    interface StreamVolume {
        // Own properties of GstAudio-1.0.StreamVolume

        mute: boolean;
        volume: number;

        // Owm methods of GstAudio-1.0.StreamVolume

        get_mute(): boolean;
        get_volume(format: StreamVolumeFormat): number;
        set_mute(mute: boolean): void;
        set_volume(format: StreamVolumeFormat, val: number): void;
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

export default GstAudio;
// END
