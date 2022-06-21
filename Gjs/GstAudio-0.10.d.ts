// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstAudio-0.10
 */

import type * as Gjs from './Gjs';
import type libxml2 from './libxml2-2.0';
import type GstInterfaces from './GstInterfaces-0.10';
import type Gst from './Gst-0.10';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstBase from './GstBase-0.10';

export namespace GstAudio {

enum AudioChannelPosition {
    INVALID,
    FRONT_MONO,
    FRONT_LEFT,
    FRONT_RIGHT,
    REAR_CENTER,
    REAR_LEFT,
    REAR_RIGHT,
    LFE,
    FRONT_CENTER,
    FRONT_LEFT_OF_CENTER,
    FRONT_RIGHT_OF_CENTER,
    SIDE_LEFT,
    SIDE_RIGHT,
    NONE,
    NUM,
}
/**
 * Different possible clock slaving algorithms used when the internal audio
 * clock is not selected as the pipeline master clock.
 */
enum BaseAudioSinkSlaveMethod {
    RESAMPLE,
    SKEW,
    NONE,
}
/**
 * Different possible clock slaving algorithms when the internal audio clock was
 * not selected as the pipeline clock.
 */
enum BaseAudioSrcSlaveMethod {
    RESAMPLE,
    RE_TIMESTAMP,
    SKEW,
    NONE,
}
enum BufferFormat {
    UNKNOWN,
    S8,
    U8,
    S16_LE,
    S16_BE,
    U16_LE,
    U16_BE,
    S24_LE,
    S24_BE,
    U24_LE,
    U24_BE,
    S32_LE,
    S32_BE,
    U32_LE,
    U32_BE,
    S24_3LE,
    S24_3BE,
    U24_3LE,
    U24_3BE,
    S20_3LE,
    S20_3BE,
    U20_3LE,
    U20_3BE,
    S18_3LE,
    S18_3BE,
    U18_3LE,
    U18_3BE,
    FLOAT32_LE,
    FLOAT32_BE,
    FLOAT64_LE,
    FLOAT64_BE,
    MU_LAW,
    A_LAW,
    IMA_ADPCM,
    MPEG,
    GSM,
    IEC958,
    AC3,
    EAC3,
    DTS,
}
/**
 * The format of the samples in the ringbuffer.
 */
enum BufferFormatType {
    LINEAR,
    FLOAT,
    MU_LAW,
    A_LAW,
    IMA_ADPCM,
    MPEG,
    GSM,
    IEC958,
    AC3,
    EAC3,
    DTS,
}
/**
 * The state of a segment in the ringbuffer.
 */
enum RingBufferSegState {
    INVALID,
    EMPTY,
    FILLED,
    PARTIAL,
}
/**
 * The state of the ringbuffer.
 */
enum RingBufferState {
    STOPPED,
    PAUSED,
    STARTED,
}
/**
 * Do not use anymore.
 * @bitfield 
 */
enum AudioFieldFlag {
    RATE,
    CHANNELS,
    ENDIANNESS,
    WIDTH,
    DEPTH,
    SIGNED,
}
const AUDIO_DEF_RATE: number
const AUDIO_FLOAT_PAD_TEMPLATE_CAPS: string
const AUDIO_FLOAT_STANDARD_PAD_TEMPLATE_CAPS: string
const AUDIO_INT_PAD_TEMPLATE_CAPS: string
const AUDIO_INT_STANDARD_PAD_TEMPLATE_CAPS: string
/**
 * This functions checks if the given channel positions are valid. Channel
 * positions are valid if:
 * <itemizedlist>
 * <listitem><para>No channel positions appears twice or all positions are %GST_AUDIO_CHANNEL_POSITION_NONE.
 * </para></listitem>
 * <listitem><para>Either all or none of the channel positions are %GST_AUDIO_CHANNEL_POSITION_NONE.
 * </para></listitem>
 * <listitem><para>%GST_AUDIO_CHANNEL_POSITION_FRONT_MONO and %GST_AUDIO_CHANNEL_POSITION_FRONT_LEFT or %GST_AUDIO_CHANNEL_POSITION_FRONT_RIGHT don't appear together in the given positions.
 * </para></listitem>
 * </itemizedlist>
 * and %FALSE otherwise.
 * @param pos An array of #GstAudioChannelPosition.
 * @param channels The number of elements in `pos`.
 */
function audio_check_channel_positions(pos: AudioChannelPosition, channels: number): boolean
/**
 * Calculate length in nanoseconds of audio buffer `buf` based on capabilities of
 * @param pad the #GstPad to get the caps from
 * @param buf the #GstBuffer
 */
function audio_duration_from_pad_buffer(pad: Gst.Pad, buf: Gst.Buffer): Gst.ClockTime
/**
 * Custom fixate function. Elements that implement some sort of
 * channel conversion algorithm should use this function for
 * fixating on GstAudioChannelPosition properties. It will take
 * care of equal channel positioning (left/right). Caller g_free()s
 * the return value. The input properties may be (and are supposed
 * to be) unfixed.
 * Note that this function is mostly a hack because we currently
 * have no way to add default fixation functions for new GTypes.
 * set of #GstAudioChannelPosition values.
 * @param str a #GstStructure containing a (possibly unfixed) "channel-positions" field.
 */
function audio_fixate_channel_positions(str: Gst.Structure): AudioChannelPosition
/**
 * Calculate byte size of an audio frame.
 * @param pad the #GstPad to get the caps from
 */
function audio_frame_byte_size(pad: Gst.Pad): number
/**
 * Calculate length of buffer in frames.
 * @param pad the #GstPad to get the caps from
 * @param buf the #GstBuffer
 */
function audio_frame_length(pad: Gst.Pad, buf: Gst.Buffer): number
/**
 * Retrieves a number of (fixed!) audio channel positions from
 * the provided #GstStructure and returns it as a newly allocated
 * array. The caller should g_free () this array. The caller
 * should also check that the members in this #GstStructure are
 * indeed "fixed" before calling this function.
 * positions as provided in the given #GstStructure. Returns
 * NULL on error.
 * @param str A #GstStructure to retrieve channel positions from.
 */
function audio_get_channel_positions(str: Gst.Structure): AudioChannelPosition
/**
 * Check if the buffer size is a whole multiple of the frame size.
 * @param pad the #GstPad to get the caps from
 * @param buf the #GstBuffer
 */
function audio_is_buffer_framed(pad: Gst.Pad, buf: Gst.Buffer): boolean
/**
 * Sets a (possibly non-fixed) list of possible audio channel
 * positions (given in pos) on the given caps. Each of the
 * structures of the caps, after this function has been called,
 * will contain a "channel-positions" field with an array.
 * Each value in the array will contain each of the values given
 * in the pos array. Note that the size of the caps might be
 * increased by this, since each structure with a "channel-
 * positions" field needs to have a fixed "channels" field.
 * The input caps is not required to have this.
 * @param caps #GstCaps to set the list of channel positions on.
 * @param pos the array containing one or more possible audio channel positions that we should add in each value of the array in the given structure.
 * @param num_positions the number of values in pos.
 */
function audio_set_caps_channel_positions_list(caps: Gst.Caps, pos: AudioChannelPosition, num_positions: number): void
/**
 * Adds a "channel-positions" field to the given #GstStructure,
 * which will represent the channel positions as given in the
 * provided #GstAudioChannelPosition array.
 * @param str A #GstStructure to set channel positions on.
 * @param pos an array of channel positions. The number of members in this array should be equal to the (fixed!) number of the "channels" field in the given #GstStructure.
 */
function audio_set_channel_positions(str: Gst.Structure, pos: AudioChannelPosition): void
/**
 * Sets a (possibly non-fixed) list of possible audio channel
 * positions (given in pos) on the given structure. The
 * structure, after this function has been called, will contain
 * a "channel-positions" field with an array of the size of
 * the "channels" field value in the given structure (note
 * that this means that the channels field in the provided
 * structure should be fixed!). Each value in the array will
 * contain each of the values given in the pos array.
 * @param str #GstStructure to set the list of channel positions on.
 * @param pos the array containing one or more possible audio channel positions that we should add in each value of the array in the given structure.
 * @param num_positions the number of values in pos.
 */
function audio_set_structure_channel_positions_list(str: Gst.Structure, pos: AudioChannelPosition, num_positions: number): void
/**
 * Do not use anymore.
 * @param structure a #GstStructure
 * @param flag a set of #GstAudioFieldFlag
 */
function audio_structure_set_int(structure: Gst.Structure, flag: AudioFieldFlag): void
/**
 * This function will be called whenever the current clock time needs to be
 * calculated. If this function returns #GST_CLOCK_TIME_NONE, the last reported
 * time will be returned by the clock.
 * be used.
 * @callback 
 * @param clock the #GstAudioClock
 */
interface AudioClockGetTimeFunc {
    (clock: Gst.Clock): Gst.ClockTime
}
/**
 * Function that will be called by gst_audio_default_registry_mixer_filter()
 * so the caller can decide which mixer elements should be kept and returned.
 * When the mixer element is passed to the callback function, it is opened
 * and in READY state. If you decide to keep the element, you need to set it
 * back to NULL state yourself (unless you want to keep it opened of course).
 * @callback 
 * @param mixer a #GstElement implementing the #GstMixer interface
 */
interface AudioMixerFilterFunc {
    (mixer: GstInterfaces.Mixer): boolean
}
/**
 * This function is set with gst_ring_buffer_set_callback() and is
 * called to fill the memory at `data` with `len` bytes of samples.
 * @callback 
 * @param rbuf a #GstRingBuffer
 * @param data target to fill
 * @param len amount to fill
 */
interface RingBufferCallback {
    (rbuf: RingBuffer, data: number, len: number): void
}
interface AudioClock_ConstructProps extends Gst.SystemClock_ConstructProps {
}

interface AudioClock {

    // Conflicting properties

    _gst_reserved: any
    object: any

    // Own fields of GstAudio-0.10.GstAudio.AudioClock

    clock: Gst.SystemClock
    func: AudioClockGetTimeFunc
    user_data: object
    last_time: Gst.ClockTime

    // Owm methods of GstAudio-0.10.GstAudio.AudioClock

    /**
     * Inform `clock` that future calls to #GstAudioClockGetTimeFunc will return values
     * starting from `time`. The clock will update an internal offset to make sure that
     * future calls to internal_time will return an increasing result as required by
     * the #GstClock object.
     * @param time a #GstClockTime
     */
    reset(time: Gst.ClockTime): void

    // Class property signals of GstAudio-0.10.GstAudio.AudioClock

    connect(sigName: "notify::clock-type", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clock-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque #GstAudioClock.
 * @class 
 */
class AudioClock extends Gst.SystemClock {

    // Own properties of GstAudio-0.10.GstAudio.AudioClock

    static name: string
    static $gtype: GObject.GType<AudioClock>

    // Constructors of GstAudio-0.10.GstAudio.AudioClock

    constructor(config?: AudioClock_ConstructProps) 
    /**
     * Create a new #GstAudioClock instance. Whenever the clock time should be
     * calculated it will call `func` with `user_data`. When `func` returns
     * #GST_CLOCK_TIME_NONE, the clock will return the last reported time.
     * @constructor 
     * @param name the name of the clock
     * @param func a function
     */
    static new_full(name: string, func: AudioClockGetTimeFunc): AudioClock
    _init(config?: AudioClock_ConstructProps): void
    /**
     * Adjust `time` with the internal offset of the audio clock.
     * @param clock a #GstAudioClock
     * @param time a #GstClockTime
     */
    static adjust(clock: Gst.Clock, time: Gst.ClockTime): Gst.ClockTime
    /**
     * Report the time as returned by the #GstAudioClockGetTimeFunc without applying
     * any offsets.
     * @param clock a #GstAudioClock
     */
    static get_time(clock: Gst.Clock): Gst.ClockTime
    /**
     * Invalidate the clock function. Call this function when the provided
     * #GstAudioClockGetTimeFunc cannot be called anymore, for example, when the
     * user_data becomes invalid.
     * After calling this function, `clock` will return the last returned time for
     * the rest of its lifetime.
     * @param clock a #GstAudioClock
     */
    static invalidate(clock: Gst.Clock): void
}

interface AudioFilter_ConstructProps extends Gst.BaseTransform_ConstructProps {
}

interface AudioFilter {

    // Conflicting properties

    object: any

    // Own fields of GstAudio-0.10.GstAudio.AudioFilter

    basetransform: any
    format: RingBufferSpec
    _gst_reserved: object[]

    // Own virtual methods of GstAudio-0.10.GstAudio.AudioFilter

    vfunc_setup(format: RingBufferSpec): boolean

    // Class property signals of GstAudio-0.10.GstAudio.AudioFilter

    connect(sigName: "notify::qos", callback: (($obj: AudioFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: AudioFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Base class for audio filters with the same format for input and output.
 * @class 
 */
class AudioFilter extends Gst.BaseTransform {

    // Own properties of GstAudio-0.10.GstAudio.AudioFilter

    static name: string
    static $gtype: GObject.GType<AudioFilter>

    // Constructors of GstAudio-0.10.GstAudio.AudioFilter

    constructor(config?: AudioFilter_ConstructProps) 
    _init(config?: AudioFilter_ConstructProps): void
    /**
     * Convenience function to add pad templates to this element class, with
     * This function is usually used from within a GObject base_init function.
     * @param allowed_caps what formats the filter can handle, as #GstCaps
     */
    static add_pad_templates(allowed_caps: Gst.Caps): void
}

interface AudioSink_ConstructProps extends BaseAudioSink_ConstructProps {
}

interface AudioSink {

    // Conflicting properties

    priv: any
    object: any

    // Own fields of GstAudio-0.10.GstAudio.AudioSink

    element: BaseAudioSink
    thread: GLib.Thread
    _gst_reserved: object[]

    // Own virtual methods of GstAudio-0.10.GstAudio.AudioSink

    vfunc_close(): boolean
    vfunc_delay(): number
    vfunc_open(): boolean
    vfunc_prepare(spec: RingBufferSpec): boolean
    vfunc_reset(): void
    vfunc_unprepare(): boolean
    vfunc_write(data: object, length: number): number

    // Class property signals of GstAudio-0.10.GstAudio.AudioSink

    connect(sigName: "notify::can-activate-pull", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-activate-pull", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-activate-pull", ...args: any[]): void
    connect(sigName: "notify::drift-tolerance", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drift-tolerance", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::drift-tolerance", ...args: any[]): void
    connect(sigName: "notify::slave-method", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slave-method", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::slave-method", ...args: any[]): void
    connect(sigName: "notify::async", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::async", ...args: any[]): void
    connect(sigName: "notify::blocksize", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::blocksize", ...args: any[]): void
    connect(sigName: "notify::enable-last-buffer", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-buffer", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-last-buffer", ...args: any[]): void
    connect(sigName: "notify::last-buffer", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-buffer", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-buffer", ...args: any[]): void
    connect(sigName: "notify::max-lateness", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-lateness", ...args: any[]): void
    connect(sigName: "notify::preroll-queue-len", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preroll-queue-len", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preroll-queue-len", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: "notify::render-delay", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::render-delay", ...args: any[]): void
    connect(sigName: "notify::ts-offset", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ts-offset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque #GstAudioSink.
 * @class 
 */
class AudioSink extends BaseAudioSink {

    // Own properties of GstAudio-0.10.GstAudio.AudioSink

    static name: string
    static $gtype: GObject.GType<AudioSink>

    // Constructors of GstAudio-0.10.GstAudio.AudioSink

    constructor(config?: AudioSink_ConstructProps) 
    _init(config?: AudioSink_ConstructProps): void
}

interface AudioSrc_ConstructProps extends BaseAudioSrc_ConstructProps {
}

interface AudioSrc {

    // Conflicting properties

    priv: any
    parent: any
    object: any

    // Own fields of GstAudio-0.10.GstAudio.AudioSrc

    element: BaseAudioSrc
    thread: GLib.Thread
    _gst_reserved: object[]

    // Conflicting methods

    vfunc_create(...args: any[]): any

    // Own virtual methods of GstAudio-0.10.GstAudio.AudioSrc

    vfunc_close(): boolean
    vfunc_delay(): number
    vfunc_open(): boolean
    vfunc_prepare(spec: RingBufferSpec): boolean
    vfunc_read(data: object, length: number): number
    vfunc_reset(): void
    vfunc_unprepare(): boolean

    // Class property signals of GstAudio-0.10.GstAudio.AudioSrc

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
    connect(sigName: "notify::typefind", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::typefind", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Base class for simple audio sources.
 * @class 
 */
class AudioSrc extends BaseAudioSrc {

    // Own properties of GstAudio-0.10.GstAudio.AudioSrc

    static name: string
    static $gtype: GObject.GType<AudioSrc>

    // Constructors of GstAudio-0.10.GstAudio.AudioSrc

    constructor(config?: AudioSrc_ConstructProps) 
    _init(config?: AudioSrc_ConstructProps): void
}

interface BaseAudioSink_ConstructProps extends Gst.BaseSink_ConstructProps {

    // Own constructor properties of GstAudio-0.10.GstAudio.BaseAudioSink

    buffer_time?: number | null
    can_activate_pull?: boolean | null
    drift_tolerance?: number | null
    latency_time?: number | null
    provide_clock?: boolean | null
    slave_method?: BaseAudioSinkSlaveMethod | null
}

interface BaseAudioSink {

    // Own properties of GstAudio-0.10.GstAudio.BaseAudioSink

    can_activate_pull: boolean
    drift_tolerance: number
    slave_method: BaseAudioSinkSlaveMethod

    // Conflicting properties

    object: any

    // Own fields of GstAudio-0.10.GstAudio.BaseAudioSink

    element: any
    ringbuffer: RingBuffer
    buffer_time: number
    latency_time: number
    next_sample: number
    // TODO fix conflict: provide_clock: boolean
    provided_clock: Gst.Clock
    priv: BaseAudioSinkPrivate
    _gst_reserved: object[]

    // Owm methods of GstAudio-0.10.GstAudio.BaseAudioSink

    get_drift_tolerance(): number
    /**
     * Queries whether `sink` will provide a clock or not. See also
     * gst_base_audio_sink_set_provide_clock.
     */
    get_provide_clock(): boolean
    /**
     * Get the current slave method used by `sink`.
     */
    get_slave_method(): BaseAudioSinkSlaveMethod
    /**
     * Controls the sink's drift tolerance.
     * @param drift_tolerance the new drift tolerance in microseconds
     */
    set_drift_tolerance(drift_tolerance: number): void
    /**
     * Controls whether `sink` will provide a clock or not. If `provide` is %TRUE,
     * gst_element_provide_clock() will return a clock that reflects the datarate
     * of `sink`. If `provide` is %FALSE, gst_element_provide_clock() will return NULL.
     * @param provide new state
     */
    set_provide_clock(provide: boolean): void
    /**
     * Controls how clock slaving will be performed in `sink`.
     * @param method the new slave method
     */
    set_slave_method(method: BaseAudioSinkSlaveMethod): void

    // Class property signals of GstAudio-0.10.GstAudio.BaseAudioSink

    connect(sigName: "notify::can-activate-pull", callback: (($obj: BaseAudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-activate-pull", callback: (($obj: BaseAudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-activate-pull", ...args: any[]): void
    connect(sigName: "notify::drift-tolerance", callback: (($obj: BaseAudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drift-tolerance", callback: (($obj: BaseAudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::drift-tolerance", ...args: any[]): void
    connect(sigName: "notify::slave-method", callback: (($obj: BaseAudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slave-method", callback: (($obj: BaseAudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::slave-method", ...args: any[]): void
    connect(sigName: "notify::async", callback: (($obj: BaseAudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: BaseAudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::async", ...args: any[]): void
    connect(sigName: "notify::blocksize", callback: (($obj: BaseAudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: BaseAudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::blocksize", ...args: any[]): void
    connect(sigName: "notify::enable-last-buffer", callback: (($obj: BaseAudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-buffer", callback: (($obj: BaseAudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-last-buffer", ...args: any[]): void
    connect(sigName: "notify::last-buffer", callback: (($obj: BaseAudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-buffer", callback: (($obj: BaseAudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-buffer", ...args: any[]): void
    connect(sigName: "notify::max-lateness", callback: (($obj: BaseAudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: BaseAudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-lateness", ...args: any[]): void
    connect(sigName: "notify::preroll-queue-len", callback: (($obj: BaseAudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preroll-queue-len", callback: (($obj: BaseAudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preroll-queue-len", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (($obj: BaseAudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: BaseAudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: "notify::render-delay", callback: (($obj: BaseAudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: BaseAudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::render-delay", ...args: any[]): void
    connect(sigName: "notify::ts-offset", callback: (($obj: BaseAudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: BaseAudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ts-offset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque #GstBaseAudioSink.
 * @class 
 */
class BaseAudioSink extends Gst.BaseSink {

    // Own properties of GstAudio-0.10.GstAudio.BaseAudioSink

    static name: string
    static $gtype: GObject.GType<BaseAudioSink>

    // Constructors of GstAudio-0.10.GstAudio.BaseAudioSink

    constructor(config?: BaseAudioSink_ConstructProps) 
    _init(config?: BaseAudioSink_ConstructProps): void
}

interface BaseAudioSrc_ConstructProps extends Gst.PushSrc_ConstructProps {

    // Own constructor properties of GstAudio-0.10.GstAudio.BaseAudioSrc

    buffer_time?: number | null
    latency_time?: number | null
    provide_clock?: boolean | null
    slave_method?: BaseAudioSrcSlaveMethod | null
}

interface BaseAudioSrc {

    // Own properties of GstAudio-0.10.GstAudio.BaseAudioSrc

    /**
     * Actual configured size of audio buffer in microseconds.
     */
    readonly actual_buffer_time: number
    /**
     * Actual configured audio latency in microseconds.
     */
    readonly actual_latency_time: number
    // TODO fix conflict: provide_clock: boolean
    slave_method: BaseAudioSrcSlaveMethod

    // Conflicting properties

    parent: any
    object: any

    // Own fields of GstAudio-0.10.GstAudio.BaseAudioSrc

    element: any
    ringbuffer: RingBuffer
    buffer_time: Gst.ClockTime
    latency_time: Gst.ClockTime
    next_sample: number
    clock: Gst.Clock
    priv: BaseAudioSrcPrivate
    _gst_reserved: object[]

    // Owm methods of GstAudio-0.10.GstAudio.BaseAudioSrc

    /**
     * Queries whether `src` will provide a clock or not. See also
     * gst_base_audio_src_set_provide_clock.
     */
    get_provide_clock(): boolean
    /**
     * Get the current slave method used by `src`.
     */
    get_slave_method(): BaseAudioSrcSlaveMethod
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
    set_slave_method(method: BaseAudioSrcSlaveMethod): void

    // Conflicting methods

    vfunc_create(...args: any[]): any

    // Class property signals of GstAudio-0.10.GstAudio.BaseAudioSrc

    connect(sigName: "notify::actual-buffer-time", callback: (($obj: BaseAudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actual-buffer-time", callback: (($obj: BaseAudioSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actual-buffer-time", ...args: any[]): void
    connect(sigName: "notify::actual-latency-time", callback: (($obj: BaseAudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actual-latency-time", callback: (($obj: BaseAudioSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actual-latency-time", ...args: any[]): void
    connect(sigName: "notify::provide-clock", callback: (($obj: BaseAudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provide-clock", callback: (($obj: BaseAudioSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provide-clock", ...args: any[]): void
    connect(sigName: "notify::slave-method", callback: (($obj: BaseAudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slave-method", callback: (($obj: BaseAudioSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::slave-method", ...args: any[]): void
    connect(sigName: "notify::do-timestamp", callback: (($obj: BaseAudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: BaseAudioSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::do-timestamp", ...args: any[]): void
    connect(sigName: "notify::typefind", callback: (($obj: BaseAudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: BaseAudioSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::typefind", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque #GstBaseAudioSrc.
 * @class 
 */
class BaseAudioSrc extends Gst.PushSrc {

    // Own properties of GstAudio-0.10.GstAudio.BaseAudioSrc

    static name: string
    static $gtype: GObject.GType<BaseAudioSrc>

    // Constructors of GstAudio-0.10.GstAudio.BaseAudioSrc

    constructor(config?: BaseAudioSrc_ConstructProps) 
    _init(config?: BaseAudioSrc_ConstructProps): void
}

interface RingBuffer_ConstructProps extends Gst.Object_ConstructProps {
}

interface RingBuffer {

    // Own fields of GstAudio-0.10.GstAudio.RingBuffer

    object: Gst.Object
    cond: GLib.Cond
    open: boolean
    acquired: boolean
    data: Gst.Buffer
    spec: RingBufferSpec
    segstate: RingBufferSegState
    samples_per_seg: number
    empty_seg: number
    state: number
    segdone: number
    segbase: number
    waiting: number
    callback: RingBufferCallback
    cb_data: object

    // Owm methods of GstAudio-0.10.GstAudio.RingBuffer

    /**
     * Allocate the resources for the ringbuffer. This function fills
     * in the data pointer of the ring buffer with a valid #GstBuffer
     * to which samples can be written.
     * MT safe.
     * @param spec the specs of the buffer
     */
    acquire(spec: RingBufferSpec): boolean
    /**
     * Activate `buf` to start or stop pulling data.
     * MT safe.
     * FALSE on error.
     * @param active the new mode
     */
    activate(active: boolean): boolean
    /**
     * Subclasses should call this function to notify the fact that 
     * MT safe.
     * @param advance the number of segments written
     */
    advance(advance: number): void
    /**
     * Clear the given segment of the buffer with silence samples.
     * This function is used by subclasses.
     * MT safe.
     * @param segment the segment to clear
     */
    clear(segment: number): void
    /**
     * Fill the ringbuffer with silence.
     * MT safe.
     */
    clear_all(): void
    /**
     * Close the audio device associated with the ring buffer. The ring buffer
     * should already have been released via gst_ring_buffer_release().
     * MT safe.
     */
    close_device(): boolean
    /**
     * Same as gst_ring_buffer_commit_full() but with a in_samples and out_samples
     * equal to `len,` ignoring accum.
     * error.
     * MT safe.
     * @param sample the sample position of the data
     * @param data the data to commit
     * @param len the number of samples in the data to commit
     */
    commit(sample: number, data: number, len: number): number
    /**
     * Commit `in_samples` samples pointed to by `data` to the ringbuffer `buf`. 
     * samples in `data`. For negative rates, `out_samples` must be negative and
     * When `out_samples` is positive, the first sample will be written at position `sample`
     * in the ringbuffer. When `out_samples` is negative, the last sample will be written to
     * although it is recommended for optimal performance. 
     * set to 0 when this function is first called. In case the commit operation is
     * interrupted, one can resume the processing by passing the previously returned
     * MT safe.
     * number of samples written can be less than `out_samples` when `buf` was interrupted
     * with a flush or stop.
     * @param sample the sample position of the data
     * @param data the data to commit
     * @param in_samples the number of samples in the data to commit
     * @param out_samples the number of samples to write to the ringbuffer
     * @param accum accumulator for rate conversion.
     */
    commit_full(sample: number, data: number, in_samples: number, out_samples: number, accum: number): number
    /**
     * Convert `src_val` in `src_fmt` to the equivalent value in `dest_fmt`. The result
     * will be put in `dest_val`.
     * @param src_fmt the source format
     * @param src_val the source value
     * @param dest_fmt the destination format
     * @param dest_val a location to store the converted value
     */
    convert(src_fmt: Gst.Format, src_val: number, dest_fmt: Gst.Format, dest_val: number): boolean
    /**
     * Get the number of samples queued in the audio device. This is
     * usually less than the segment size but can be bigger when the
     * implementation uses another internal buffer between the audio
     * device.
     * For playback ringbuffers this is the amount of samples transfered from the
     * ringbuffer to the device but still not played.
     * For capture ringbuffers this is the amount of samples in the device that are
     * not yet transfered to the ringbuffer.
     * MT safe.
     */
    delay(): number
    /**
     * Checks the status of the device associated with the ring buffer.
     * MT safe.
     */
    device_is_open(): boolean
    /**
     * Check if the ringbuffer is acquired and ready to use.
     * MT safe.
     */
    is_acquired(): boolean
    /**
     * Check if `buf` is activated.
     * MT safe.
     */
    is_active(): boolean
    /**
     * Tell the ringbuffer that it is allowed to start playback when
     * the ringbuffer is filled with samples. 
     * MT safe.
     * @param allowed the new value
     */
    may_start(allowed: boolean): void
    /**
     * Open the audio device associated with the ring buffer. Does not perform any
     * setup on the device. You must open the device before acquiring the ring
     * buffer.
     * MT safe.
     */
    open_device(): boolean
    /**
     * Pause processing samples from the ringbuffer.
     * MT safe.
     */
    pause(): boolean
    /**
     * Returns a pointer to memory where the data from segment `segment`
     * can be found. This function is mostly used by subclasses.
     * MT safe.
     * @param segment the segment to read
     * @param readptr the pointer to the memory where samples can be read
     * @param len the number of bytes to read
     */
    prepare_read(segment: number, readptr: number, len: number): boolean
    /**
     * Read `len` samples from the ringbuffer into the memory pointed 
     * to by `data`.
     * The first sample should be read from position `sample` in
     * the ringbuffer.
     * although it is recommended.
     * error.
     * MT safe.
     * @param sample the sample position of the data
     * @param data where the data should be read
     * @param len the number of samples in data to read
     */
    read(sample: number, data: number, len: number): number
    /**
     * Free the resources of the ringbuffer.
     * MT safe.
     */
    release(): boolean
    /**
     * Get the number of samples that were processed by the ringbuffer
     * since it was last started. This does not include the number of samples not
     * yet processed (see gst_ring_buffer_delay()).
     * MT safe.
     */
    samples_done(): number
    /**
     * Set the ringbuffer to flushing mode or normal mode.
     * MT safe.
     * @param flushing the new mode
     */
    set_flushing(flushing: boolean): void
    /**
     * Make sure that the next sample written to the device is
     * accounted for as being the `sample` sample written to the
     * device. This value will be used in reporting the current
     * sample position of the ringbuffer.
     * This function will also clear the buffer with silence.
     * MT safe.
     * @param sample the sample number to set
     */
    set_sample(sample: number): void
    /**
     * Start processing samples from the ringbuffer.
     * MT safe.
     */
    start(): boolean
    /**
     * Stop processing samples from the ringbuffer.
     * MT safe.
     */
    stop(): boolean

    // Own virtual methods of GstAudio-0.10.GstAudio.RingBuffer

    /**
     * Allocate the resources for the ringbuffer. This function fills
     * in the data pointer of the ring buffer with a valid #GstBuffer
     * to which samples can be written.
     * MT safe.
     * @virtual 
     * @param spec the specs of the buffer
     */
    vfunc_acquire(spec: RingBufferSpec): boolean
    /**
     * Activate `buf` to start or stop pulling data.
     * MT safe.
     * FALSE on error.
     * @virtual 
     * @param active the new mode
     */
    vfunc_activate(active: boolean): boolean
    /**
     * Fill the ringbuffer with silence.
     * MT safe.
     * @virtual 
     */
    vfunc_clear_all(): void
    /**
     * Close the audio device associated with the ring buffer. The ring buffer
     * should already have been released via gst_ring_buffer_release().
     * MT safe.
     * @virtual 
     */
    vfunc_close_device(): boolean
    vfunc_commit(sample: number, data: number, in_samples: number, out_samples: number, accum: number): number
    /**
     * Get the number of samples queued in the audio device. This is
     * usually less than the segment size but can be bigger when the
     * implementation uses another internal buffer between the audio
     * device.
     * For playback ringbuffers this is the amount of samples transfered from the
     * ringbuffer to the device but still not played.
     * For capture ringbuffers this is the amount of samples in the device that are
     * not yet transfered to the ringbuffer.
     * MT safe.
     * @virtual 
     */
    vfunc_delay(): number
    /**
     * Open the audio device associated with the ring buffer. Does not perform any
     * setup on the device. You must open the device before acquiring the ring
     * buffer.
     * MT safe.
     * @virtual 
     */
    vfunc_open_device(): boolean
    /**
     * Pause processing samples from the ringbuffer.
     * MT safe.
     * @virtual 
     */
    vfunc_pause(): boolean
    /**
     * Free the resources of the ringbuffer.
     * MT safe.
     * @virtual 
     */
    vfunc_release(): boolean
    vfunc_resume(): boolean
    /**
     * Start processing samples from the ringbuffer.
     * MT safe.
     * @virtual 
     */
    vfunc_start(): boolean
    /**
     * Stop processing samples from the ringbuffer.
     * MT safe.
     * @virtual 
     */
    vfunc_stop(): boolean

    // Class property signals of GstAudio-0.10.GstAudio.RingBuffer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The ringbuffer base class structure.
 * @class 
 */
class RingBuffer extends Gst.Object {

    // Own properties of GstAudio-0.10.GstAudio.RingBuffer

    static name: string
    static $gtype: GObject.GType<RingBuffer>

    // Constructors of GstAudio-0.10.GstAudio.RingBuffer

    constructor(config?: RingBuffer_ConstructProps) 
    _init(config?: RingBuffer_ConstructProps): void
    /**
     * Print debug info about the buffer sized in `spec` to the debug log.
     * @param spec the spec to debug
     */
    static debug_spec_buff(spec: RingBufferSpec): void
    /**
     * Print debug info about the parsed caps in `spec` to the debug log.
     * @param spec the spec to debug
     */
    static debug_spec_caps(spec: RingBufferSpec): void
    /**
     * Parse `caps` into `spec`.
     * @param spec a spec
     * @param caps a #GstCaps
     */
    static parse_caps(spec: RingBufferSpec, caps: Gst.Caps): boolean
}

interface AudioClockClass {

    // Own fields of GstAudio-0.10.GstAudio.AudioClockClass

    parent_class: Gst.SystemClockClass
    _gst_reserved: object[]
}

abstract class AudioClockClass {

    // Own properties of GstAudio-0.10.GstAudio.AudioClockClass

    static name: string
}

interface AudioFilterClass {

    // Own fields of GstAudio-0.10.GstAudio.AudioFilterClass

    basetransformclass: any
    setup: (filter: AudioFilter, format: RingBufferSpec) => boolean
    _gst_reserved: object[]
}

/**
 * In addition to the `setup` virtual function, you should also override the
 * GstBaseTransform::transform and/or GstBaseTransform::transform_ip virtual
 * function.
 * @record 
 */
abstract class AudioFilterClass {

    // Own properties of GstAudio-0.10.GstAudio.AudioFilterClass

    static name: string

    // Owm static methods of GstAudio-0.10.GstAudio.AudioFilterClass

    /**
     * Convenience function to add pad templates to this element class, with
     * This function is usually used from within a GObject base_init function.
     * @param allowed_caps what formats the filter can handle, as #GstCaps
     */
    static add_pad_templates(allowed_caps: Gst.Caps): void
}

interface AudioSinkClass {

    // Own fields of GstAudio-0.10.GstAudio.AudioSinkClass

    parent_class: BaseAudioSinkClass
    open: (sink: AudioSink) => boolean
    prepare: (sink: AudioSink, spec: RingBufferSpec) => boolean
    unprepare: (sink: AudioSink) => boolean
    close: (sink: AudioSink) => boolean
    write: (sink: AudioSink, data: object, length: number) => number
    delay: (sink: AudioSink) => number
    reset: (sink: AudioSink) => void
    _gst_reserved: object[]
}

/**
 * #GstAudioSink class. Override the vmethods to implement functionality.
 * @record 
 */
abstract class AudioSinkClass {

    // Own properties of GstAudio-0.10.GstAudio.AudioSinkClass

    static name: string
}

interface AudioSrcClass {

    // Own fields of GstAudio-0.10.GstAudio.AudioSrcClass

    parent_class: BaseAudioSrcClass
    open: (src: AudioSrc) => boolean
    prepare: (src: AudioSrc, spec: RingBufferSpec) => boolean
    unprepare: (src: AudioSrc) => boolean
    close: (src: AudioSrc) => boolean
    read: (src: AudioSrc, data: object, length: number) => number
    delay: (src: AudioSrc) => number
    reset: (src: AudioSrc) => void
    _gst_reserved: object[]
}

/**
 * #GstAudioSrc class. Override the vmethod to implement
 * functionality.
 * @record 
 */
abstract class AudioSrcClass {

    // Own properties of GstAudio-0.10.GstAudio.AudioSrcClass

    static name: string
}

interface BaseAudioSinkClass {

    // Own fields of GstAudio-0.10.GstAudio.BaseAudioSinkClass

    parent_class: any
    _gst_reserved: object[]
}

/**
 * #GstBaseAudioSink class. Override the vmethod to implement
 * functionality.
 * @record 
 */
abstract class BaseAudioSinkClass {

    // Own properties of GstAudio-0.10.GstAudio.BaseAudioSinkClass

    static name: string
}

interface BaseAudioSinkPrivate {
}

class BaseAudioSinkPrivate {

    // Own properties of GstAudio-0.10.GstAudio.BaseAudioSinkPrivate

    static name: string
}

interface BaseAudioSrcClass {

    // Own fields of GstAudio-0.10.GstAudio.BaseAudioSrcClass

    parent_class: any
    _gst_reserved: object[]
}

/**
 * #GstBaseAudioSrc class. Override the vmethod to implement
 * functionality.
 * @record 
 */
abstract class BaseAudioSrcClass {

    // Own properties of GstAudio-0.10.GstAudio.BaseAudioSrcClass

    static name: string
}

interface BaseAudioSrcPrivate {
}

class BaseAudioSrcPrivate {

    // Own properties of GstAudio-0.10.GstAudio.BaseAudioSrcPrivate

    static name: string
}

interface RingBufferClass {

    // Own fields of GstAudio-0.10.GstAudio.RingBufferClass

    parent_class: Gst.ObjectClass
    open_device: (buf: RingBuffer) => boolean
    acquire: (buf: RingBuffer, spec: RingBufferSpec) => boolean
    release: (buf: RingBuffer) => boolean
    close_device: (buf: RingBuffer) => boolean
    start: (buf: RingBuffer) => boolean
    pause: (buf: RingBuffer) => boolean
    resume: (buf: RingBuffer) => boolean
    stop: (buf: RingBuffer) => boolean
    delay: (buf: RingBuffer) => number
    activate: (buf: RingBuffer, active: boolean) => boolean
    commit: (buf: RingBuffer, sample: number, data: number, in_samples: number, out_samples: number, accum: number) => number
    clear_all: (buf: RingBuffer) => void
    _gst_reserved: object[]
}

/**
 * The vmethods that subclasses can override to implement the ringbuffer.
 * @record 
 */
abstract class RingBufferClass {

    // Own properties of GstAudio-0.10.GstAudio.RingBufferClass

    static name: string
}

interface RingBufferSpec {

    // Own fields of GstAudio-0.10.GstAudio.RingBufferSpec

    caps: Gst.Caps
    type: BufferFormatType
    format: BufferFormat
    sign: boolean
    bigend: boolean
    width: number
    depth: number
    rate: number
    channels: number
    latency_time: number
    buffer_time: number
    segsize: number
    segtotal: number
    bytes_per_sample: number
    silence_sample: Uint8Array
    seglatency: number
    _gst_reserved: Uint8Array
}

/**
 * The structure containing the format specification of the ringbuffer.
 * @record 
 */
class RingBufferSpec {

    // Own properties of GstAudio-0.10.GstAudio.RingBufferSpec

    static name: string
}

}
export default GstAudio;