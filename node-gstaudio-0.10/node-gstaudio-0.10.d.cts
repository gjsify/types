
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gstaudio-0.10-import.d.ts';
    
/**
 * GstAudio-0.10
 */

import type libxml2 from '@girs/node-libxml2-2.0';
import type GstInterfaces from '@girs/node-gstinterfaces-0.10';
import type Gst from '@girs/node-gst-0.10';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GModule from '@girs/node-gmodule-2.0';
import type GstBase from '@girs/node-gstbase-0.10';

export enum AudioChannelPosition {
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
export enum BaseAudioSinkSlaveMethod {
    RESAMPLE,
    SKEW,
    NONE,
}
/**
 * Different possible clock slaving algorithms when the internal audio clock was
 * not selected as the pipeline clock.
 */
export enum BaseAudioSrcSlaveMethod {
    RESAMPLE,
    RE_TIMESTAMP,
    SKEW,
    NONE,
}
export enum BufferFormat {
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
export enum BufferFormatType {
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
export enum RingBufferSegState {
    INVALID,
    EMPTY,
    FILLED,
    PARTIAL,
}
/**
 * The state of the ringbuffer.
 */
export enum RingBufferState {
    STOPPED,
    PAUSED,
    STARTED,
}
/**
 * Do not use anymore.
 * @bitfield 
 */
export enum AudioFieldFlag {
    RATE,
    CHANNELS,
    ENDIANNESS,
    WIDTH,
    DEPTH,
    SIGNED,
}
export const AUDIO_DEF_RATE: number
export const AUDIO_FLOAT_PAD_TEMPLATE_CAPS: string | null
export const AUDIO_FLOAT_STANDARD_PAD_TEMPLATE_CAPS: string | null
export const AUDIO_INT_PAD_TEMPLATE_CAPS: string | null
export const AUDIO_INT_STANDARD_PAD_TEMPLATE_CAPS: string | null
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
 * @returns %TRUE if the given channel positions are valid
 */
export function audioCheckChannelPositions(pos: AudioChannelPosition, channels: number): boolean
/**
 * Calculate length in nanoseconds of audio buffer `buf` based on capabilities of
 * @param pad the #GstPad to get the caps from
 * @param buf the #GstBuffer
 * @returns the length.
 */
export function audioDurationFromPadBuffer(pad: Gst.Pad, buf: Gst.Buffer): Gst.ClockTime
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
 * @returns fixed values that the caller could use as a fixed
 */
export function audioFixateChannelPositions(str: Gst.Structure): AudioChannelPosition
/**
 * Calculate byte size of an audio frame.
 * @param pad the #GstPad to get the caps from
 * @returns the byte size, or 0 if there was an error
 */
export function audioFrameByteSize(pad: Gst.Pad): number
/**
 * Calculate length of buffer in frames.
 * @param pad the #GstPad to get the caps from
 * @param buf the #GstBuffer
 * @returns 0 if there's an error, or the number of frames if everything's ok
 */
export function audioFrameLength(pad: Gst.Pad, buf: Gst.Buffer): number
/**
 * Retrieves a number of (fixed!) audio channel positions from
 * the provided #GstStructure and returns it as a newly allocated
 * array. The caller should g_free () this array. The caller
 * should also check that the members in this #GstStructure are
 * indeed "fixed" before calling this function.
 * positions as provided in the given #GstStructure. Returns
 * NULL on error.
 * @param str A #GstStructure to retrieve channel positions from.
 * @returns a newly allocated array containing the channel
 */
export function audioGetChannelPositions(str: Gst.Structure): AudioChannelPosition
/**
 * Check if the buffer size is a whole multiple of the frame size.
 * @param pad the #GstPad to get the caps from
 * @param buf the #GstBuffer
 * @returns %TRUE if buffer size is multiple.
 */
export function audioIsBufferFramed(pad: Gst.Pad, buf: Gst.Buffer): boolean
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
 * @param numPositions the number of values in pos.
 */
export function audioSetCapsChannelPositionsList(caps: Gst.Caps, pos: AudioChannelPosition, numPositions: number): void
/**
 * Adds a "channel-positions" field to the given #GstStructure,
 * which will represent the channel positions as given in the
 * provided #GstAudioChannelPosition array.
 * @param str A #GstStructure to set channel positions on.
 * @param pos an array of channel positions. The number of members in this array should be equal to the (fixed!) number of the "channels" field in the given #GstStructure.
 */
export function audioSetChannelPositions(str: Gst.Structure, pos: AudioChannelPosition): void
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
 * @param numPositions the number of values in pos.
 */
export function audioSetStructureChannelPositionsList(str: Gst.Structure, pos: AudioChannelPosition, numPositions: number): void
/**
 * Do not use anymore.
 * @param structure a #GstStructure
 * @param flag a set of #GstAudioFieldFlag
 */
export function audioStructureSetInt(structure: Gst.Structure, flag: AudioFieldFlag): void
/**
 * This function will be called whenever the current clock time needs to be
 * calculated. If this function returns #GST_CLOCK_TIME_NONE, the last reported
 * time will be returned by the clock.
 * be used.
 * @callback 
 * @param clock the #GstAudioClock
 * @returns the current time or #GST_CLOCK_TIME_NONE if the previous time should
 */
export interface AudioClockGetTimeFunc {
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
 * @returns TRUE if the element should be kept, FALSE otherwise.
 */
export interface AudioMixerFilterFunc {
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
export interface RingBufferCallback {
    (rbuf: RingBuffer, data: number, len: number): void
}
export module AudioClock {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.SystemClock.ConstructorProperties {
    }

}

export interface AudioClock {

    // Own properties of GstAudio-0.10.GstAudio.AudioClock

    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstAudio-0.10.GstAudio.AudioClock

    clock: any
    func: AudioClockGetTimeFunc
    userData: any
    lastTime: Gst.ClockTime

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

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::clock-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::clock-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clock-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clock-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque #GstAudioClock.
 * @class 
 */
export class AudioClock extends Gst.SystemClock {

    // Own properties of GstAudio-0.10.GstAudio.AudioClock

    static name: string

    // Constructors of GstAudio-0.10.GstAudio.AudioClock

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
    static newFull(name: string | null, func: AudioClockGetTimeFunc): AudioClock
    _init(config?: AudioClock.ConstructorProperties): void
    /**
     * Adjust `time` with the internal offset of the audio clock.
     * @param clock a #GstAudioClock
     * @param time a #GstClockTime
     * @returns @time adjusted with the internal offset.
     */
    static adjust(clock: Gst.Clock, time: Gst.ClockTime): Gst.ClockTime
    /**
     * Report the time as returned by the #GstAudioClockGetTimeFunc without applying
     * any offsets.
     * @param clock a #GstAudioClock
     * @returns the time as reported by the time function of the audio clock
     */
    static getTime(clock: Gst.Clock): Gst.ClockTime
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

export module AudioFilter {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.BaseTransform.ConstructorProperties {
    }

}

export interface AudioFilter {

    // Own properties of GstAudio-0.10.GstAudio.AudioFilter

    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstAudio-0.10.GstAudio.AudioFilter

    basetransform: any
    format: RingBufferSpec
    gstReserved: any

    // Own virtual methods of GstAudio-0.10.GstAudio.AudioFilter

    setup(format: RingBufferSpec): boolean

    // Class property signals of GstAudio-0.10.GstAudio.AudioFilter

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (...args: any[]) => void): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Base class for audio filters with the same format for input and output.
 * @class 
 */
export class AudioFilter extends Gst.BaseTransform {

    // Own properties of GstAudio-0.10.GstAudio.AudioFilter

    static name: string

    // Constructors of GstAudio-0.10.GstAudio.AudioFilter

    constructor(config?: AudioFilter.ConstructorProperties) 
    _init(config?: AudioFilter.ConstructorProperties): void
    /**
     * Convenience function to add pad templates to this element class, with
     * This function is usually used from within a GObject base_init function.
     * @param allowedCaps what formats the filter can handle, as #GstCaps
     */
    static addPadTemplates(allowedCaps: Gst.Caps): void
}

export module AudioSink {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseAudioSink.ConstructorProperties {
    }

}

export interface AudioSink {

    // Own properties of GstAudio-0.10.GstAudio.AudioSink

    __gtype__: number

    // Conflicting properties

    priv: any & Gst.BaseSinkPrivate
    object: any

    // Own fields of GstAudio-0.10.GstAudio.AudioSink

    element: any
    thread: GLib.Thread
    gstReserved: any

    // Own virtual methods of GstAudio-0.10.GstAudio.AudioSink

    close(): boolean
    delay(): number
    open(): boolean
    prepare(spec: RingBufferSpec): boolean
    reset(): void
    unprepare(): boolean
    write(data: any, length: number): number

    // Class property signals of GstAudio-0.10.GstAudio.AudioSink

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::can-activate-pull", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-activate-pull", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-activate-pull", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-activate-pull", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-activate-pull", ...args: any[]): void
    connect(sigName: "notify::drift-tolerance", callback: (...args: any[]) => void): number
    on(sigName: "notify::drift-tolerance", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::drift-tolerance", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::drift-tolerance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::drift-tolerance", ...args: any[]): void
    connect(sigName: "notify::slave-method", callback: (...args: any[]) => void): number
    on(sigName: "notify::slave-method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::slave-method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::slave-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::slave-method", ...args: any[]): void
    connect(sigName: "notify::async", callback: (...args: any[]) => void): number
    on(sigName: "notify::async", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::async", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::async", ...args: any[]): void
    connect(sigName: "notify::blocksize", callback: (...args: any[]) => void): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::blocksize", ...args: any[]): void
    connect(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-last-buffer", ...args: any[]): void
    connect(sigName: "notify::last-buffer", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-buffer", ...args: any[]): void
    connect(sigName: "notify::max-lateness", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-lateness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-lateness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-lateness", ...args: any[]): void
    connect(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void): number
    on(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::preroll-queue-len", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (...args: any[]) => void): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: "notify::render-delay", callback: (...args: any[]) => void): number
    on(sigName: "notify::render-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::render-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::render-delay", ...args: any[]): void
    connect(sigName: "notify::ts-offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::ts-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ts-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ts-offset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque #GstAudioSink.
 * @class 
 */
export class AudioSink extends BaseAudioSink {

    // Own properties of GstAudio-0.10.GstAudio.AudioSink

    static name: string

    // Constructors of GstAudio-0.10.GstAudio.AudioSink

    constructor(config?: AudioSink.ConstructorProperties) 
    _init(config?: AudioSink.ConstructorProperties): void
}

export module AudioSrc {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseAudioSrc.ConstructorProperties {
    }

}

export interface AudioSrc {

    // Own properties of GstAudio-0.10.GstAudio.AudioSrc

    __gtype__: number

    // Conflicting properties

    priv: any & Gst.BaseSrcPrivate
    parent: Gst.BaseSrc & Gst.Object & Gst.Object
    object: any

    // Own fields of GstAudio-0.10.GstAudio.AudioSrc

    element: any
    thread: GLib.Thread
    gstReserved: any

    // Conflicting methods

    query(query: Gst.Query): boolean

    // Overloads of query

    query(query: Gst.Query): boolean
    query(query: Gst.Query): boolean
    create(buf: Gst.Buffer): Gst.FlowReturn

    // Overloads of create

    create(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    create(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn

    // Own virtual methods of GstAudio-0.10.GstAudio.AudioSrc

    close(): boolean
    delay(): number
    open(): boolean
    prepare(spec: RingBufferSpec): boolean
    read(data: any, length: number): number
    reset(): void
    unprepare(): boolean

    // Class property signals of GstAudio-0.10.GstAudio.AudioSrc

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::actual-buffer-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::actual-buffer-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actual-buffer-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actual-buffer-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actual-buffer-time", ...args: any[]): void
    connect(sigName: "notify::actual-latency-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::actual-latency-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actual-latency-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actual-latency-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actual-latency-time", ...args: any[]): void
    connect(sigName: "notify::provide-clock", callback: (...args: any[]) => void): number
    on(sigName: "notify::provide-clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provide-clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provide-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provide-clock", ...args: any[]): void
    connect(sigName: "notify::slave-method", callback: (...args: any[]) => void): number
    on(sigName: "notify::slave-method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::slave-method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::slave-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::slave-method", ...args: any[]): void
    connect(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::do-timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::do-timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::do-timestamp", ...args: any[]): void
    connect(sigName: "notify::typefind", callback: (...args: any[]) => void): number
    on(sigName: "notify::typefind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::typefind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::typefind", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Base class for simple audio sources.
 * @class 
 */
export class AudioSrc extends BaseAudioSrc {

    // Own properties of GstAudio-0.10.GstAudio.AudioSrc

    static name: string

    // Constructors of GstAudio-0.10.GstAudio.AudioSrc

    constructor(config?: AudioSrc.ConstructorProperties) 
    _init(config?: AudioSrc.ConstructorProperties): void
}

export module BaseAudioSink {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.BaseSink.ConstructorProperties {

        // Own constructor properties of GstAudio-0.10.GstAudio.BaseAudioSink

        bufferTime?: number | null
        canActivatePull?: boolean | null
        driftTolerance?: number | null
        latencyTime?: number | null
        provideClock?: boolean | null
        slaveMethod?: BaseAudioSinkSlaveMethod | null
    }

}

export interface BaseAudioSink {

    // Own properties of GstAudio-0.10.GstAudio.BaseAudioSink

    canActivatePull: boolean
    driftTolerance: number
    slaveMethod: BaseAudioSinkSlaveMethod
    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstAudio-0.10.GstAudio.BaseAudioSink

    element: any
    ringbuffer: RingBuffer
    bufferTime: number
    latencyTime: number
    nextSample: number
    // Has conflict: provideClock: boolean
    providedClock: Gst.Clock
    priv: any
    gstReserved: any

    // Owm methods of GstAudio-0.10.GstAudio.BaseAudioSink

    getDriftTolerance(): number
    /**
     * Queries whether `sink` will provide a clock or not. See also
     * gst_base_audio_sink_set_provide_clock.
     * @returns %TRUE if @sink will provide a clock.
     */
    getProvideClock(): boolean
    /**
     * Get the current slave method used by `sink`.
     * @returns The current slave method used by @sink.
     */
    getSlaveMethod(): BaseAudioSinkSlaveMethod
    /**
     * Controls the sink's drift tolerance.
     * @param driftTolerance the new drift tolerance in microseconds
     */
    setDriftTolerance(driftTolerance: number): void
    /**
     * Controls whether `sink` will provide a clock or not. If `provide` is %TRUE,
     * gst_element_provide_clock() will return a clock that reflects the datarate
     * of `sink`. If `provide` is %FALSE, gst_element_provide_clock() will return NULL.
     * @param provide new state
     */
    setProvideClock(provide: boolean): void
    /**
     * Controls how clock slaving will be performed in `sink`.
     * @param method the new slave method
     */
    setSlaveMethod(method: BaseAudioSinkSlaveMethod): void

    // Class property signals of GstAudio-0.10.GstAudio.BaseAudioSink

    connect(sigName: "notify::can-activate-pull", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-activate-pull", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-activate-pull", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-activate-pull", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-activate-pull", ...args: any[]): void
    connect(sigName: "notify::drift-tolerance", callback: (...args: any[]) => void): number
    on(sigName: "notify::drift-tolerance", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::drift-tolerance", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::drift-tolerance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::drift-tolerance", ...args: any[]): void
    connect(sigName: "notify::slave-method", callback: (...args: any[]) => void): number
    on(sigName: "notify::slave-method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::slave-method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::slave-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::slave-method", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::async", callback: (...args: any[]) => void): number
    on(sigName: "notify::async", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::async", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::async", ...args: any[]): void
    connect(sigName: "notify::blocksize", callback: (...args: any[]) => void): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::blocksize", ...args: any[]): void
    connect(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-last-buffer", ...args: any[]): void
    connect(sigName: "notify::last-buffer", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-buffer", ...args: any[]): void
    connect(sigName: "notify::max-lateness", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-lateness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-lateness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-lateness", ...args: any[]): void
    connect(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void): number
    on(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::preroll-queue-len", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (...args: any[]) => void): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: "notify::render-delay", callback: (...args: any[]) => void): number
    on(sigName: "notify::render-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::render-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::render-delay", ...args: any[]): void
    connect(sigName: "notify::ts-offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::ts-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ts-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ts-offset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque #GstBaseAudioSink.
 * @class 
 */
export class BaseAudioSink extends Gst.BaseSink {

    // Own properties of GstAudio-0.10.GstAudio.BaseAudioSink

    static name: string

    // Constructors of GstAudio-0.10.GstAudio.BaseAudioSink

    constructor(config?: BaseAudioSink.ConstructorProperties) 
    _init(config?: BaseAudioSink.ConstructorProperties): void
}

export module BaseAudioSrc {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.PushSrc.ConstructorProperties {

        // Own constructor properties of GstAudio-0.10.GstAudio.BaseAudioSrc

        bufferTime?: number | null
        latencyTime?: number | null
        provideClock?: boolean | null
        slaveMethod?: BaseAudioSrcSlaveMethod | null
    }

}

export interface BaseAudioSrc {

    // Own properties of GstAudio-0.10.GstAudio.BaseAudioSrc

    /**
     * Actual configured size of audio buffer in microseconds.
     */
    readonly actualBufferTime: number
    /**
     * Actual configured audio latency in microseconds.
     */
    readonly actualLatencyTime: number
    // Has conflict: provideClock: boolean
    slaveMethod: BaseAudioSrcSlaveMethod
    __gtype__: number

    // Conflicting properties

    parent: Gst.BaseSrc & Gst.Object & Gst.Object
    object: any

    // Own fields of GstAudio-0.10.GstAudio.BaseAudioSrc

    element: any
    ringbuffer: RingBuffer
    bufferTime: Gst.ClockTime
    latencyTime: Gst.ClockTime
    nextSample: number
    clock: Gst.Clock
    priv: any
    gstReserved: any

    // Owm methods of GstAudio-0.10.GstAudio.BaseAudioSrc

    /**
     * Queries whether `src` will provide a clock or not. See also
     * gst_base_audio_src_set_provide_clock.
     * @returns %TRUE if @src will provide a clock.
     */
    getProvideClock(): boolean
    /**
     * Get the current slave method used by `src`.
     * @returns The current slave method used by @src.
     */
    getSlaveMethod(): BaseAudioSrcSlaveMethod
    /**
     * Controls whether `src` will provide a clock or not. If `provide` is %TRUE, 
     * gst_element_provide_clock() will return a clock that reflects the datarate
     * of `src`. If `provide` is %FALSE, gst_element_provide_clock() will return NULL.
     * @param provide new state
     */
    setProvideClock(provide: boolean): void
    /**
     * Controls how clock slaving will be performed in `src`.
     * @param method the new slave method
     */
    setSlaveMethod(method: BaseAudioSrcSlaveMethod): void

    // Conflicting methods

    query(query: Gst.Query): boolean

    // Overloads of query

    query(query: Gst.Query): boolean
    query(query: Gst.Query): boolean
    create(buf: Gst.Buffer): Gst.FlowReturn

    // Overloads of create

    create(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    create(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn

    // Class property signals of GstAudio-0.10.GstAudio.BaseAudioSrc

    connect(sigName: "notify::actual-buffer-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::actual-buffer-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actual-buffer-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actual-buffer-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actual-buffer-time", ...args: any[]): void
    connect(sigName: "notify::actual-latency-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::actual-latency-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actual-latency-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actual-latency-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actual-latency-time", ...args: any[]): void
    connect(sigName: "notify::provide-clock", callback: (...args: any[]) => void): number
    on(sigName: "notify::provide-clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provide-clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provide-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provide-clock", ...args: any[]): void
    connect(sigName: "notify::slave-method", callback: (...args: any[]) => void): number
    on(sigName: "notify::slave-method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::slave-method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::slave-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::slave-method", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::do-timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::do-timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::do-timestamp", ...args: any[]): void
    connect(sigName: "notify::typefind", callback: (...args: any[]) => void): number
    on(sigName: "notify::typefind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::typefind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::typefind", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque #GstBaseAudioSrc.
 * @class 
 */
export class BaseAudioSrc extends Gst.PushSrc {

    // Own properties of GstAudio-0.10.GstAudio.BaseAudioSrc

    static name: string

    // Constructors of GstAudio-0.10.GstAudio.BaseAudioSrc

    constructor(config?: BaseAudioSrc.ConstructorProperties) 
    _init(config?: BaseAudioSrc.ConstructorProperties): void
}

export module RingBuffer {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
    }

}

export interface RingBuffer {

    // Own properties of GstAudio-0.10.GstAudio.RingBuffer

    __gtype__: number

    // Own fields of GstAudio-0.10.GstAudio.RingBuffer

    object: any
    cond: GLib.Cond
    open: boolean
    acquired: boolean
    data: Gst.Buffer
    spec: RingBufferSpec
    segstate: RingBufferSegState
    samplesPerSeg: number
    emptySeg: number
    state: number
    segdone: number
    segbase: number
    waiting: number
    callback: RingBufferCallback
    cbData: any

    // Owm methods of GstAudio-0.10.GstAudio.RingBuffer

    // Has conflict: acquire(spec: RingBufferSpec): boolean
    // Has conflict: activate(active: boolean): boolean
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
    // Has conflict: clearAll(): void
    // Has conflict: closeDevice(): boolean
    // Has conflict: commit(sample: number, data: number, len: number): number
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
     * @param inSamples the number of samples in the data to commit
     * @param outSamples the number of samples to write to the ringbuffer
     * @param accum accumulator for rate conversion.
     * @returns The number of samples written to the ringbuffer or -1 on error. The
     */
    commitFull(sample: number, data: number, inSamples: number, outSamples: number, accum: number): number
    /**
     * Convert `src_val` in `src_fmt` to the equivalent value in `dest_fmt`. The result
     * will be put in `dest_val`.
     * @param srcFmt the source format
     * @param srcVal the source value
     * @param destFmt the destination format
     * @param destVal a location to store the converted value
     * @returns TRUE if the conversion succeeded.
     */
    convert(srcFmt: Gst.Format, srcVal: number, destFmt: Gst.Format, destVal: number): boolean
    // Has conflict: delay(): number
    /**
     * Checks the status of the device associated with the ring buffer.
     * MT safe.
     * @returns TRUE if the device was open, FALSE if it was closed.
     */
    deviceIsOpen(): boolean
    /**
     * Check if the ringbuffer is acquired and ready to use.
     * MT safe.
     * @returns TRUE if the ringbuffer is acquired, FALSE on error.
     */
    isAcquired(): boolean
    /**
     * Check if `buf` is activated.
     * MT safe.
     * @returns TRUE if the device is active.
     */
    isActive(): boolean
    /**
     * Tell the ringbuffer that it is allowed to start playback when
     * the ringbuffer is filled with samples. 
     * MT safe.
     * @param allowed the new value
     */
    mayStart(allowed: boolean): void
    // Has conflict: openDevice(): boolean
    // Has conflict: pause(): boolean
    /**
     * Returns a pointer to memory where the data from segment `segment`
     * can be found. This function is mostly used by subclasses.
     * MT safe.
     * @param segment the segment to read
     * @param readptr the pointer to the memory where samples can be read
     * @param len the number of bytes to read
     * @returns FALSE if the buffer is not started.
     */
    prepareRead(segment: number, readptr: number, len: number): boolean
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
     * @returns The number of samples read from the ringbuffer or -1 on
     */
    read(sample: number, data: number, len: number): number
    // Has conflict: release(): boolean
    /**
     * Get the number of samples that were processed by the ringbuffer
     * since it was last started. This does not include the number of samples not
     * yet processed (see gst_ring_buffer_delay()).
     * MT safe.
     * @returns The number of samples processed by the ringbuffer.
     */
    samplesDone(): number
    /**
     * Set the ringbuffer to flushing mode or normal mode.
     * MT safe.
     * @param flushing the new mode
     */
    setFlushing(flushing: boolean): void
    /**
     * Make sure that the next sample written to the device is
     * accounted for as being the `sample` sample written to the
     * device. This value will be used in reporting the current
     * sample position of the ringbuffer.
     * This function will also clear the buffer with silence.
     * MT safe.
     * @param sample the sample number to set
     */
    setSample(sample: number): void
    // Has conflict: start(): boolean
    // Has conflict: stop(): boolean

    // Own virtual methods of GstAudio-0.10.GstAudio.RingBuffer

    /**
     * Allocate the resources for the ringbuffer. This function fills
     * in the data pointer of the ring buffer with a valid #GstBuffer
     * to which samples can be written.
     * MT safe.
     * @virtual 
     * @param spec the specs of the buffer
     * @returns TRUE if the device could be acquired, FALSE on error.
     */
    acquire(spec: RingBufferSpec): boolean
    /**
     * Activate `buf` to start or stop pulling data.
     * MT safe.
     * FALSE on error.
     * @virtual 
     * @param active the new mode
     * @returns TRUE if the device could be activated in the requested mode,
     */
    activate(active: boolean): boolean
    /**
     * Fill the ringbuffer with silence.
     * MT safe.
     * @virtual 
     */
    clearAll(): void
    /**
     * Close the audio device associated with the ring buffer. The ring buffer
     * should already have been released via gst_ring_buffer_release().
     * MT safe.
     * @virtual 
     * @returns TRUE if the device could be closed, FALSE on error.
     */
    closeDevice(): boolean
    commit(sample: number, data: number, inSamples: number, outSamples: number, accum: number): number
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
     * @returns The number of samples queued in the audio device.
     */
    delay(): number
    /**
     * Open the audio device associated with the ring buffer. Does not perform any
     * setup on the device. You must open the device before acquiring the ring
     * buffer.
     * MT safe.
     * @virtual 
     * @returns TRUE if the device could be opened, FALSE on error.
     */
    openDevice(): boolean
    /**
     * Pause processing samples from the ringbuffer.
     * MT safe.
     * @virtual 
     * @returns TRUE if the device could be paused, FALSE on error.
     */
    pause(): boolean
    /**
     * Free the resources of the ringbuffer.
     * MT safe.
     * @virtual 
     * @returns TRUE if the device could be released, FALSE on error.
     */
    release(): boolean
    resume(): boolean
    /**
     * Start processing samples from the ringbuffer.
     * MT safe.
     * @virtual 
     * @returns TRUE if the device could be started, FALSE on error.
     */
    start(): boolean
    /**
     * Stop processing samples from the ringbuffer.
     * MT safe.
     * @virtual 
     * @returns TRUE if the device could be stopped, FALSE on error.
     */
    stop(): boolean

    // Class property signals of GstAudio-0.10.GstAudio.RingBuffer

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The ringbuffer base class structure.
 * @class 
 */
export class RingBuffer extends Gst.Object {

    // Own properties of GstAudio-0.10.GstAudio.RingBuffer

    static name: string

    // Constructors of GstAudio-0.10.GstAudio.RingBuffer

    constructor(config?: RingBuffer.ConstructorProperties) 
    _init(config?: RingBuffer.ConstructorProperties): void
    /**
     * Print debug info about the buffer sized in `spec` to the debug log.
     * @param spec the spec to debug
     */
    static debugSpecBuff(spec: RingBufferSpec): void
    /**
     * Print debug info about the parsed caps in `spec` to the debug log.
     * @param spec the spec to debug
     */
    static debugSpecCaps(spec: RingBufferSpec): void
    /**
     * Parse `caps` into `spec`.
     * @param spec a spec
     * @param caps a #GstCaps
     * @returns TRUE if the caps could be parsed.
     */
    static parseCaps(spec: RingBufferSpec, caps: Gst.Caps): boolean
}

export interface AudioClockClass {

    // Own fields of GstAudio-0.10.GstAudio.AudioClockClass

    parentClass: Gst.SystemClockClass
    gstReserved: any[]
}

export abstract class AudioClockClass {

    // Own properties of GstAudio-0.10.GstAudio.AudioClockClass

    static name: string
}

export interface AudioFilterClass {

    // Own fields of GstAudio-0.10.GstAudio.AudioFilterClass

    basetransformclass: any
    setup: (filter: AudioFilter, format: RingBufferSpec) => boolean
    gstReserved: any[]
}

/**
 * In addition to the `setup` virtual function, you should also override the
 * GstBaseTransform::transform and/or GstBaseTransform::transform_ip virtual
 * function.
 * @record 
 */
export abstract class AudioFilterClass {

    // Own properties of GstAudio-0.10.GstAudio.AudioFilterClass

    static name: string

    // Owm static methods of GstAudio-0.10.GstAudio.AudioFilterClass

    /**
     * Convenience function to add pad templates to this element class, with
     * This function is usually used from within a GObject base_init function.
     * @param allowedCaps what formats the filter can handle, as #GstCaps
     */
    static addPadTemplates(allowedCaps: Gst.Caps): void
}

export interface AudioSinkClass {

    // Own fields of GstAudio-0.10.GstAudio.AudioSinkClass

    parentClass: BaseAudioSinkClass
    open: (sink: AudioSink) => boolean
    prepare: (sink: AudioSink, spec: RingBufferSpec) => boolean
    unprepare: (sink: AudioSink) => boolean
    close: (sink: AudioSink) => boolean
    write: (sink: AudioSink, data: any, length: number) => number
    delay: (sink: AudioSink) => number
    reset: (sink: AudioSink) => void
    gstReserved: any[]
}

/**
 * #GstAudioSink class. Override the vmethods to implement functionality.
 * @record 
 */
export abstract class AudioSinkClass {

    // Own properties of GstAudio-0.10.GstAudio.AudioSinkClass

    static name: string
}

export interface AudioSrcClass {

    // Own fields of GstAudio-0.10.GstAudio.AudioSrcClass

    parentClass: BaseAudioSrcClass
    open: (src: AudioSrc) => boolean
    prepare: (src: AudioSrc, spec: RingBufferSpec) => boolean
    unprepare: (src: AudioSrc) => boolean
    close: (src: AudioSrc) => boolean
    read: (src: AudioSrc, data: any, length: number) => number
    delay: (src: AudioSrc) => number
    reset: (src: AudioSrc) => void
    gstReserved: any[]
}

/**
 * #GstAudioSrc class. Override the vmethod to implement
 * functionality.
 * @record 
 */
export abstract class AudioSrcClass {

    // Own properties of GstAudio-0.10.GstAudio.AudioSrcClass

    static name: string
}

export interface BaseAudioSinkClass {

    // Own fields of GstAudio-0.10.GstAudio.BaseAudioSinkClass

    parentClass: any
    gstReserved: any[]
}

/**
 * #GstBaseAudioSink class. Override the vmethod to implement
 * functionality.
 * @record 
 */
export abstract class BaseAudioSinkClass {

    // Own properties of GstAudio-0.10.GstAudio.BaseAudioSinkClass

    static name: string
}

export interface BaseAudioSinkPrivate {
}

export class BaseAudioSinkPrivate {

    // Own properties of GstAudio-0.10.GstAudio.BaseAudioSinkPrivate

    static name: string
}

export interface BaseAudioSrcClass {

    // Own fields of GstAudio-0.10.GstAudio.BaseAudioSrcClass

    parentClass: any
    gstReserved: any[]
}

/**
 * #GstBaseAudioSrc class. Override the vmethod to implement
 * functionality.
 * @record 
 */
export abstract class BaseAudioSrcClass {

    // Own properties of GstAudio-0.10.GstAudio.BaseAudioSrcClass

    static name: string
}

export interface BaseAudioSrcPrivate {
}

export class BaseAudioSrcPrivate {

    // Own properties of GstAudio-0.10.GstAudio.BaseAudioSrcPrivate

    static name: string
}

export interface RingBufferClass {

    // Own fields of GstAudio-0.10.GstAudio.RingBufferClass

    parentClass: Gst.ObjectClass
    openDevice: (buf: RingBuffer) => boolean
    acquire: (buf: RingBuffer, spec: RingBufferSpec) => boolean
    release: (buf: RingBuffer) => boolean
    closeDevice: (buf: RingBuffer) => boolean
    start: (buf: RingBuffer) => boolean
    pause: (buf: RingBuffer) => boolean
    resume: (buf: RingBuffer) => boolean
    stop: (buf: RingBuffer) => boolean
    delay: (buf: RingBuffer) => number
    activate: (buf: RingBuffer, active: boolean) => boolean
    commit: (buf: RingBuffer, sample: number, data: number, inSamples: number, outSamples: number, accum: number) => number
    clearAll: (buf: RingBuffer) => void
    gstReserved: any[]
}

/**
 * The vmethods that subclasses can override to implement the ringbuffer.
 * @record 
 */
export abstract class RingBufferClass {

    // Own properties of GstAudio-0.10.GstAudio.RingBufferClass

    static name: string
}

export interface RingBufferSpec {

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
    latencyTime: number
    bufferTime: number
    segsize: number
    segtotal: number
    bytesPerSample: number
    silenceSample: number[]
    seglatency: number
    gstReserved: number[]
}

/**
 * The structure containing the format specification of the ringbuffer.
 * @record 
 */
export class RingBufferSpec {

    // Own properties of GstAudio-0.10.GstAudio.RingBufferSpec

    static name: string
}

// END