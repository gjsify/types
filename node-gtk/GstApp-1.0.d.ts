// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstApp-1.0
 */

import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstApp {

/**
 * Buffer dropping scheme to avoid the element's internal queue to block when
 * full.
 */
enum AppLeakyType {
    /**
     * Not Leaky
     */
    NONE,
    /**
     * Leaky on upstream (new buffers)
     */
    UPSTREAM,
    /**
     * Leaky on downstream (old buffers)
     */
    DOWNSTREAM,
}
/**
 * The stream type.
 */
enum AppStreamType {
    /**
     * No seeking is supported in the stream, such as a
     * live stream.
     */
    STREAM,
    /**
     * The stream is seekable but seeking might not
     * be very fast, such as data from a webserver.
     */
    SEEKABLE,
    /**
     * The stream is seekable and seeking is fast,
     * such as in a local file.
     */
    RANDOM_ACCESS,
}
interface AppSink_ConstructProps extends Gst.URIHandler_ConstructProps, GstBase.BaseSink_ConstructProps {

    // Own constructor properties of GstApp-1.0.GstApp.AppSink

    bufferList?: boolean | null
    caps?: Gst.Caps | null
    drop?: boolean | null
    emitSignals?: boolean | null
    maxBuffers?: number | null
    waitOnEos?: boolean | null
}

/**
 * Signal callback interface for `eos`
 */
interface AppSink_EosSignalCallback {
    (): void
}

/**
 * Signal callback interface for `new-preroll`
 */
interface AppSink_NewPrerollSignalCallback {
    (): Gst.FlowReturn
}

/**
 * Signal callback interface for `new-sample`
 */
interface AppSink_NewSampleSignalCallback {
    (): Gst.FlowReturn
}

/**
 * Signal callback interface for `new-serialized-event`
 */
interface AppSink_NewSerializedEventSignalCallback {
    (): boolean
}

/**
 * Signal callback interface for `pull-preroll`
 */
interface AppSink_PullPrerollSignalCallback {
    (): Gst.Sample
}

/**
 * Signal callback interface for `pull-sample`
 */
interface AppSink_PullSampleSignalCallback {
    (): Gst.Sample
}

/**
 * Signal callback interface for `try-pull-object`
 */
interface AppSink_TryPullObjectSignalCallback {
    (timeout: number): Gst.MiniObject
}

/**
 * Signal callback interface for `try-pull-preroll`
 */
interface AppSink_TryPullPrerollSignalCallback {
    (timeout: number): Gst.Sample
}

/**
 * Signal callback interface for `try-pull-sample`
 */
interface AppSink_TryPullSampleSignalCallback {
    (timeout: number): Gst.Sample
}

interface AppSink extends Gst.URIHandler {

    // Own properties of GstApp-1.0.GstApp.AppSink

    bufferList: boolean
    caps: Gst.Caps
    drop: boolean
    emitSignals: boolean
    readonly eos: boolean
    maxBuffers: number
    waitOnEos: boolean

    // Conflicting properties

    object: any

    // Own fields of GstApp-1.0.GstApp.AppSink

    basesink: GstBase.BaseSink

    // Owm methods of GstApp-1.0.GstApp.AppSink

    /**
     * Check if `appsink` supports buffer lists.
     */
    getBufferListSupport(): boolean
    /**
     * Get the configured caps on `appsink`.
     */
    getCaps(): Gst.Caps
    /**
     * Check if `appsink` will drop old buffers when the maximum amount of queued
     * buffers is reached.
     */
    getDrop(): boolean
    /**
     * Check if appsink will emit the "new-preroll" and "new-sample" signals.
     */
    getEmitSignals(): boolean
    /**
     * Get the maximum amount of buffers that can be queued in `appsink`.
     */
    getMaxBuffers(): number
    /**
     * Check if `appsink` will wait for all buffers to be consumed when an EOS is
     * received.
     */
    getWaitOnEos(): boolean
    /**
     * Check if `appsink` is EOS, which is when no more samples can be pulled because
     * an EOS event was received.
     * 
     * This function also returns %TRUE when the appsink is not in the PAUSED or
     * PLAYING state.
     */
    isEos(): boolean
    /**
     * Get the last preroll sample in `appsink`. This was the sample that caused the
     * appsink to preroll in the PAUSED state.
     * 
     * This function is typically used when dealing with a pipeline in the PAUSED
     * state. Calling this function after doing a seek will give the sample right
     * after the seek position.
     * 
     * Calling this function will clear the internal reference to the preroll
     * buffer.
     * 
     * Note that the preroll sample will also be returned as the first sample
     * when calling gst_app_sink_pull_sample().
     * 
     * If an EOS event was received before any buffers, this function returns
     * %NULL. Use gst_app_sink_is_eos () to check for the EOS condition.
     * 
     * This function blocks until a preroll sample or EOS is received or the appsink
     * element is set to the READY/NULL state.
     */
    pullPreroll(): Gst.Sample | null
    /**
     * This function blocks until a sample or EOS becomes available or the appsink
     * element is set to the READY/NULL state.
     * 
     * This function will only return samples when the appsink is in the PLAYING
     * state. All rendered buffers will be put in a queue so that the application
     * can pull samples at its own rate. Note that when the application does not
     * pull samples fast enough, the queued buffers could consume a lot of memory,
     * especially when dealing with raw video frames.
     * 
     * If an EOS event was received before any buffers, this function returns
     * %NULL. Use gst_app_sink_is_eos () to check for the EOS condition.
     */
    pullSample(): Gst.Sample | null
    /**
     * Instruct `appsink` to enable or disable buffer list support.
     * 
     * For backwards-compatibility reasons applications need to opt in
     * to indicate that they will be able to handle buffer lists.
     * @param enableLists enable or disable buffer list support
     */
    setBufferListSupport(enableLists: boolean): void
    /**
     * Set the capabilities on the appsink element.  This function takes
     * a copy of the caps structure. After calling this method, the sink will only
     * accept caps that match `caps`. If `caps` is non-fixed, or incomplete,
     * you must check the caps on the samples to get the actual used caps.
     * @param caps caps to set
     */
    setCaps(caps: Gst.Caps | null): void
    /**
     * Instruct `appsink` to drop old buffers when the maximum amount of queued
     * buffers is reached.
     * @param drop the new state
     */
    setDrop(drop: boolean): void
    /**
     * Make appsink emit the "new-preroll" and "new-sample" signals. This option is
     * by default disabled because signal emission is expensive and unneeded when
     * the application prefers to operate in pull mode.
     * @param emit the new state
     */
    setEmitSignals(emit: boolean): void
    /**
     * Set the maximum amount of buffers that can be queued in `appsink`. After this
     * amount of buffers are queued in appsink, any more buffers will block upstream
     * elements until a sample is pulled from `appsink`.
     * @param max the maximum number of buffers to queue
     */
    setMaxBuffers(max: number): void
    /**
     * Instruct `appsink` to wait for all buffers to be consumed when an EOS is received.
     * @param wait the new state
     */
    setWaitOnEos(wait: boolean): void
    /**
     * Get the last preroll sample in `appsink`. This was the sample that caused the
     * appsink to preroll in the PAUSED state.
     * 
     * This function is typically used when dealing with a pipeline in the PAUSED
     * state. Calling this function after doing a seek will give the sample right
     * after the seek position.
     * 
     * Calling this function will clear the internal reference to the preroll
     * buffer.
     * 
     * Note that the preroll sample will also be returned as the first sample
     * when calling gst_app_sink_pull_sample().
     * 
     * If an EOS event was received before any buffers or the timeout expires,
     * this function returns %NULL. Use gst_app_sink_is_eos () to check for the EOS
     * condition.
     * 
     * This function blocks until a preroll sample or EOS is received, the appsink
     * element is set to the READY/NULL state, or the timeout expires.
     * @param timeout the maximum amount of time to wait for the preroll sample
     */
    tryPullPreroll(timeout: Gst.ClockTime): Gst.Sample | null
    /**
     * This function blocks until a sample or EOS becomes available or the appsink
     * element is set to the READY/NULL state or the timeout expires.
     * 
     * This function will only return samples when the appsink is in the PLAYING
     * state. All rendered buffers will be put in a queue so that the application
     * can pull samples at its own rate. Note that when the application does not
     * pull samples fast enough, the queued buffers could consume a lot of memory,
     * especially when dealing with raw video frames.
     * 
     * If an EOS event was received before any buffers or the timeout expires,
     * this function returns %NULL. Use gst_app_sink_is_eos () to check for the EOS
     * condition.
     * @param timeout the maximum amount of time to wait for a sample
     */
    tryPullSample(timeout: Gst.ClockTime): Gst.Sample | null

    // Conflicting methods

    ref(...args: any[]): any

    // Own signals of GstApp-1.0.GstApp.AppSink

    connect(sigName: "eos", callback: AppSink_EosSignalCallback): number
    on(sigName: "eos", callback: AppSink_EosSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "eos", callback: AppSink_EosSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "eos", callback: AppSink_EosSignalCallback): NodeJS.EventEmitter
    emit(sigName: "eos", ...args: any[]): void
    connect(sigName: "new-preroll", callback: AppSink_NewPrerollSignalCallback): number
    on(sigName: "new-preroll", callback: AppSink_NewPrerollSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-preroll", callback: AppSink_NewPrerollSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-preroll", callback: AppSink_NewPrerollSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-preroll", ...args: any[]): void
    connect(sigName: "new-sample", callback: AppSink_NewSampleSignalCallback): number
    on(sigName: "new-sample", callback: AppSink_NewSampleSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-sample", callback: AppSink_NewSampleSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-sample", callback: AppSink_NewSampleSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-sample", ...args: any[]): void
    connect(sigName: "new-serialized-event", callback: AppSink_NewSerializedEventSignalCallback): number
    on(sigName: "new-serialized-event", callback: AppSink_NewSerializedEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-serialized-event", callback: AppSink_NewSerializedEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-serialized-event", callback: AppSink_NewSerializedEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-serialized-event", ...args: any[]): void
    connect(sigName: "pull-preroll", callback: AppSink_PullPrerollSignalCallback): number
    on(sigName: "pull-preroll", callback: AppSink_PullPrerollSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pull-preroll", callback: AppSink_PullPrerollSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pull-preroll", callback: AppSink_PullPrerollSignalCallback): NodeJS.EventEmitter
    emit(sigName: "pull-preroll", ...args: any[]): void
    connect(sigName: "pull-sample", callback: AppSink_PullSampleSignalCallback): number
    on(sigName: "pull-sample", callback: AppSink_PullSampleSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pull-sample", callback: AppSink_PullSampleSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pull-sample", callback: AppSink_PullSampleSignalCallback): NodeJS.EventEmitter
    emit(sigName: "pull-sample", ...args: any[]): void
    connect(sigName: "try-pull-object", callback: AppSink_TryPullObjectSignalCallback): number
    on(sigName: "try-pull-object", callback: AppSink_TryPullObjectSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "try-pull-object", callback: AppSink_TryPullObjectSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "try-pull-object", callback: AppSink_TryPullObjectSignalCallback): NodeJS.EventEmitter
    emit(sigName: "try-pull-object", ...args: any[]): void
    connect(sigName: "try-pull-preroll", callback: AppSink_TryPullPrerollSignalCallback): number
    on(sigName: "try-pull-preroll", callback: AppSink_TryPullPrerollSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "try-pull-preroll", callback: AppSink_TryPullPrerollSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "try-pull-preroll", callback: AppSink_TryPullPrerollSignalCallback): NodeJS.EventEmitter
    emit(sigName: "try-pull-preroll", ...args: any[]): void
    connect(sigName: "try-pull-sample", callback: AppSink_TryPullSampleSignalCallback): number
    on(sigName: "try-pull-sample", callback: AppSink_TryPullSampleSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "try-pull-sample", callback: AppSink_TryPullSampleSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "try-pull-sample", callback: AppSink_TryPullSampleSignalCallback): NodeJS.EventEmitter
    emit(sigName: "try-pull-sample", ...args: any[]): void

    // Class property signals of GstApp-1.0.GstApp.AppSink

    connect(sigName: "notify::buffer-list", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer-list", ...args: any[]): void
    connect(sigName: "notify::caps", callback: (...args: any[]) => void): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::caps", ...args: any[]): void
    connect(sigName: "notify::drop", callback: (...args: any[]) => void): number
    on(sigName: "notify::drop", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::drop", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::drop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::drop", ...args: any[]): void
    connect(sigName: "notify::emit-signals", callback: (...args: any[]) => void): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::emit-signals", ...args: any[]): void
    connect(sigName: "notify::eos", callback: (...args: any[]) => void): number
    on(sigName: "notify::eos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::eos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::eos", ...args: any[]): void
    connect(sigName: "notify::max-buffers", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-buffers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-buffers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-buffers", ...args: any[]): void
    connect(sigName: "notify::wait-on-eos", callback: (...args: any[]) => void): number
    on(sigName: "notify::wait-on-eos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wait-on-eos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wait-on-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wait-on-eos", ...args: any[]): void
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
    connect(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-last-sample", ...args: any[]): void
    connect(sigName: "notify::last-sample", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-sample", ...args: any[]): void
    connect(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-bitrate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-bitrate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-bitrate", ...args: any[]): void
    connect(sigName: "notify::max-lateness", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-lateness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-lateness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-lateness", ...args: any[]): void
    connect(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): number
    on(sigName: "notify::processing-deadline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::processing-deadline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::processing-deadline", ...args: any[]): void
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
    connect(sigName: "notify::stats", callback: (...args: any[]) => void): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stats", ...args: any[]): void
    connect(sigName: "notify::sync", callback: (...args: any[]) => void): number
    on(sigName: "notify::sync", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sync", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sync", ...args: any[]): void
    connect(sigName: "notify::throttle-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::throttle-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::throttle-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::throttle-time", ...args: any[]): void
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
}

/**
 * Appsink is a sink plugin that supports many different methods for making
 * the application get a handle on the GStreamer data in a pipeline. Unlike
 * most GStreamer elements, Appsink provides external API functions.
 * 
 * appsink can be used by linking to the gstappsink.h header file to access the
 * methods or by using the appsink action signals and properties.
 * 
 * The normal way of retrieving samples from appsink is by using the
 * gst_app_sink_pull_sample() and gst_app_sink_pull_preroll() methods.
 * These methods block until a sample becomes available in the sink or when the
 * sink is shut down or reaches EOS. There are also timed variants of these
 * methods, gst_app_sink_try_pull_sample() and gst_app_sink_try_pull_preroll(),
 * which accept a timeout parameter to limit the amount of time to wait.
 * 
 * Appsink will internally use a queue to collect buffers from the streaming
 * thread. If the application is not pulling samples fast enough, this queue
 * will consume a lot of memory over time. The "max-buffers" property can be
 * used to limit the queue size. The "drop" property controls whether the
 * streaming thread blocks or if older buffers are dropped when the maximum
 * queue size is reached. Note that blocking the streaming thread can negatively
 * affect real-time performance and should be avoided.
 * 
 * If a blocking behaviour is not desirable, setting the "emit-signals" property
 * to %TRUE will make appsink emit the "new-sample" and "new-preroll" signals
 * when a sample can be pulled without blocking.
 * 
 * The "caps" property on appsink can be used to control the formats that
 * appsink can receive. This property can contain non-fixed caps, the format of
 * the pulled samples can be obtained by getting the sample caps.
 * 
 * If one of the pull-preroll or pull-sample methods return %NULL, the appsink
 * is stopped or in the EOS state. You can check for the EOS state with the
 * "eos" property or with the gst_app_sink_is_eos() method.
 * 
 * The eos signal can also be used to be informed when the EOS state is reached
 * to avoid polling.
 * @class 
 */
class AppSink extends GstBase.BaseSink {

    // Own properties of GstApp-1.0.GstApp.AppSink

    static name: string
    static $gtype: GObject.GType<AppSink>

    // Constructors of GstApp-1.0.GstApp.AppSink

    constructor(config?: AppSink_ConstructProps) 
    _init(config?: AppSink_ConstructProps): void
}

interface AppSrc_ConstructProps extends Gst.URIHandler_ConstructProps, GstBase.BaseSrc_ConstructProps {

    // Own constructor properties of GstApp-1.0.GstApp.AppSrc

    /**
     * When max-bytes are queued and after the enough-data signal has been emitted,
     * block any further push-buffer calls until the amount of queued bytes drops
     * below the max-bytes limit.
     */
    block?: boolean | null
    /**
     * The GstCaps that will negotiated downstream and will be put
     * on outgoing buffers.
     */
    caps?: Gst.Caps | null
    /**
     * The total duration in nanoseconds of the data stream. If the total duration is known, it
     * is recommended to configure it with this property.
     */
    duration?: number | null
    /**
     * Make appsrc emit the "need-data", "enough-data" and "seek-data" signals.
     * This option is by default enabled for backwards compatibility reasons but
     * can disabled when needed because signal emission is expensive.
     */
    emitSignals?: boolean | null
    /**
     * The format to use for segment events. When the source is producing
     * timestamped buffers this property should be set to GST_FORMAT_TIME.
     */
    format?: Gst.Format | null
    /**
     * When enabled, appsrc will check GstSegment in GstSample which was
     * pushed via gst_app_src_push_sample() or "push-sample" signal action.
     * If a GstSegment is changed, corresponding segment event will be followed
     * by next data flow.
     * 
     * FIXME: currently only GST_FORMAT_TIME format is supported and therefore
     * GstAppSrc::format should be time. However, possibly #GstAppSrc can support
     * other formats.
     */
    handleSegmentChange?: boolean | null
    /**
     * Instruct the source to behave like a live source. This includes that it
     * will only push out buffers in the PLAYING state.
     */
    isLive?: boolean | null
    /**
     * When set to any other value than GST_APP_LEAKY_TYPE_NONE then the appsrc
     * will drop any buffers that are pushed into it once its internal queue is
     * full. The selected type defines whether to drop the oldest or new
     * buffers.
     */
    leakyType?: AppLeakyType | null
    /**
     * The maximum amount of buffers that can be queued internally.
     * After the maximum amount of buffers are queued, appsrc will emit the
     * "enough-data" signal.
     */
    maxBuffers?: number | null
    /**
     * The maximum amount of bytes that can be queued internally.
     * After the maximum amount of bytes are queued, appsrc will emit the
     * "enough-data" signal.
     */
    maxBytes?: number | null
    maxLatency?: number | null
    /**
     * The maximum amount of time that can be queued internally.
     * After the maximum amount of time are queued, appsrc will emit the
     * "enough-data" signal.
     */
    maxTime?: number | null
    /**
     * The minimum latency of the source. A value of -1 will use the default
     * latency calculations of #GstBaseSrc.
     */
    minLatency?: number | null
    /**
     * Make appsrc emit the "need-data" signal when the amount of bytes in the
     * queue drops below this percentage of max-bytes.
     */
    minPercent?: number | null
    /**
     * The total size in bytes of the data stream. If the total size is known, it
     * is recommended to configure it with this property.
     */
    size?: number | null
    /**
     * The type of stream that this source is producing.  For seekable streams the
     * application should connect to the seek-data signal.
     */
    streamType?: AppStreamType | null
}

/**
 * Signal callback interface for `end-of-stream`
 */
interface AppSrc_EndOfStreamSignalCallback {
    (): Gst.FlowReturn
}

/**
 * Signal callback interface for `enough-data`
 */
interface AppSrc_EnoughDataSignalCallback {
    (): void
}

/**
 * Signal callback interface for `need-data`
 */
interface AppSrc_NeedDataSignalCallback {
    (length: number): void
}

/**
 * Signal callback interface for `push-buffer`
 */
interface AppSrc_PushBufferSignalCallback {
    (buffer: Gst.Buffer): Gst.FlowReturn
}

/**
 * Signal callback interface for `push-buffer-list`
 */
interface AppSrc_PushBufferListSignalCallback {
    (bufferList: Gst.BufferList): Gst.FlowReturn
}

/**
 * Signal callback interface for `push-sample`
 */
interface AppSrc_PushSampleSignalCallback {
    (sample: Gst.Sample): Gst.FlowReturn
}

/**
 * Signal callback interface for `seek-data`
 */
interface AppSrc_SeekDataSignalCallback {
    (offset: number): boolean
}

interface AppSrc extends Gst.URIHandler {

    // Own properties of GstApp-1.0.GstApp.AppSrc

    /**
     * When max-bytes are queued and after the enough-data signal has been emitted,
     * block any further push-buffer calls until the amount of queued bytes drops
     * below the max-bytes limit.
     */
    block: boolean
    /**
     * The GstCaps that will negotiated downstream and will be put
     * on outgoing buffers.
     */
    caps: Gst.Caps
    /**
     * The number of currently queued buffers inside appsrc.
     */
    readonly currentLevelBuffers: number
    /**
     * The number of currently queued bytes inside appsrc.
     */
    readonly currentLevelBytes: number
    /**
     * The amount of currently queued time inside appsrc.
     */
    readonly currentLevelTime: number
    /**
     * The total duration in nanoseconds of the data stream. If the total duration is known, it
     * is recommended to configure it with this property.
     */
    duration: number
    /**
     * Make appsrc emit the "need-data", "enough-data" and "seek-data" signals.
     * This option is by default enabled for backwards compatibility reasons but
     * can disabled when needed because signal emission is expensive.
     */
    emitSignals: boolean
    /**
     * The format to use for segment events. When the source is producing
     * timestamped buffers this property should be set to GST_FORMAT_TIME.
     */
    format: Gst.Format
    /**
     * When enabled, appsrc will check GstSegment in GstSample which was
     * pushed via gst_app_src_push_sample() or "push-sample" signal action.
     * If a GstSegment is changed, corresponding segment event will be followed
     * by next data flow.
     * 
     * FIXME: currently only GST_FORMAT_TIME format is supported and therefore
     * GstAppSrc::format should be time. However, possibly #GstAppSrc can support
     * other formats.
     */
    handleSegmentChange: boolean
    /**
     * Instruct the source to behave like a live source. This includes that it
     * will only push out buffers in the PLAYING state.
     */
    isLive: boolean
    /**
     * When set to any other value than GST_APP_LEAKY_TYPE_NONE then the appsrc
     * will drop any buffers that are pushed into it once its internal queue is
     * full. The selected type defines whether to drop the oldest or new
     * buffers.
     */
    leakyType: AppLeakyType
    /**
     * The maximum amount of buffers that can be queued internally.
     * After the maximum amount of buffers are queued, appsrc will emit the
     * "enough-data" signal.
     */
    maxBuffers: number
    /**
     * The maximum amount of bytes that can be queued internally.
     * After the maximum amount of bytes are queued, appsrc will emit the
     * "enough-data" signal.
     */
    maxBytes: number
    maxLatency: number
    /**
     * The maximum amount of time that can be queued internally.
     * After the maximum amount of time are queued, appsrc will emit the
     * "enough-data" signal.
     */
    maxTime: number
    /**
     * The minimum latency of the source. A value of -1 will use the default
     * latency calculations of #GstBaseSrc.
     */
    minLatency: number
    /**
     * Make appsrc emit the "need-data" signal when the amount of bytes in the
     * queue drops below this percentage of max-bytes.
     */
    minPercent: number
    /**
     * The total size in bytes of the data stream. If the total size is known, it
     * is recommended to configure it with this property.
     */
    size: number
    /**
     * The type of stream that this source is producing.  For seekable streams the
     * application should connect to the seek-data signal.
     */
    streamType: AppStreamType

    // Conflicting properties

    object: any

    // Own fields of GstApp-1.0.GstApp.AppSrc

    basesrc: GstBase.BaseSrc

    // Owm methods of GstApp-1.0.GstApp.AppSrc

    /**
     * Indicates to the appsrc element that the last buffer queued in the
     * element is the last buffer of the stream.
     */
    endOfStream(): Gst.FlowReturn
    /**
     * Get the configured caps on `appsrc`.
     */
    getCaps(): Gst.Caps
    /**
     * Get the number of currently queued buffers inside `appsrc`.
     */
    getCurrentLevelBuffers(): number
    /**
     * Get the number of currently queued bytes inside `appsrc`.
     */
    getCurrentLevelBytes(): number
    /**
     * Get the amount of currently queued time inside `appsrc`.
     */
    getCurrentLevelTime(): Gst.ClockTime
    /**
     * Get the duration of the stream in nanoseconds. A value of GST_CLOCK_TIME_NONE means that the duration is
     * not known.
     */
    getDuration(): Gst.ClockTime
    /**
     * Check if appsrc will emit the "new-preroll" and "new-buffer" signals.
     */
    getEmitSignals(): boolean
    /**
     * Retrieve the min and max latencies in `min` and `max` respectively.
     */
    getLatency(): [ /* min */ number, /* max */ number ]
    /**
     * Returns the currently set #GstAppLeakyType. See gst_app_src_set_leaky_type()
     * for more details.
     */
    getLeakyType(): AppLeakyType
    /**
     * Get the maximum amount of buffers that can be queued in `appsrc`.
     */
    getMaxBuffers(): number
    /**
     * Get the maximum amount of bytes that can be queued in `appsrc`.
     */
    getMaxBytes(): number
    /**
     * Get the maximum amount of time that can be queued in `appsrc`.
     */
    getMaxTime(): Gst.ClockTime
    /**
     * Get the size of the stream in bytes. A value of -1 means that the size is
     * not known.
     */
    getSize(): number
    /**
     * Get the stream type. Control the stream type of `appsrc`
     * with gst_app_src_set_stream_type().
     */
    getStreamType(): AppStreamType
    /**
     * Adds a buffer to the queue of buffers that the appsrc element will
     * push to its source pad.  This function takes ownership of the buffer.
     * 
     * When the block property is TRUE, this function can block until free
     * space becomes available in the queue.
     * @param buffer a #GstBuffer to push
     */
    pushBuffer(buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * Adds a buffer list to the queue of buffers and buffer lists that the
     * appsrc element will push to its source pad.  This function takes ownership
     * of `buffer_list`.
     * 
     * When the block property is TRUE, this function can block until free
     * space becomes available in the queue.
     * @param bufferList a #GstBufferList to push
     */
    pushBufferList(bufferList: Gst.BufferList): Gst.FlowReturn
    /**
     * Extract a buffer from the provided sample and adds it to the queue of
     * buffers that the appsrc element will push to its source pad. Any
     * previous caps that were set on appsrc will be replaced by the caps
     * associated with the sample if not equal.
     * 
     * This function does not take ownership of the
     * sample so the sample needs to be unreffed after calling this function.
     * 
     * When the block property is TRUE, this function can block until free
     * space becomes available in the queue.
     * @param sample a #GstSample from which buffer and caps may be extracted
     */
    pushSample(sample: Gst.Sample): Gst.FlowReturn
    /**
     * Set the capabilities on the appsrc element.  This function takes
     * a copy of the caps structure. After calling this method, the source will
     * only produce caps that match `caps`. `caps` must be fixed and the caps on the
     * buffers must match the caps or left NULL.
     * @param caps caps to set
     */
    setCaps(caps: Gst.Caps | null): void

    // Overloads of setCaps

    /**
     * Set new caps on the basesrc source pad.
     * @param caps a #GstCaps
     */
    setCaps(caps: Gst.Caps): boolean
    setCaps(...args: any[]): any
    setCaps(args_or_caps: any[] | Gst.Caps): void | boolean | any
    /**
     * Set the duration of the stream in nanoseconds. A value of GST_CLOCK_TIME_NONE means that the duration is
     * not known.
     * @param duration the duration to set
     */
    setDuration(duration: Gst.ClockTime): void
    /**
     * Make appsrc emit the "new-preroll" and "new-buffer" signals. This option is
     * by default disabled because signal emission is expensive and unneeded when
     * the application prefers to operate in pull mode.
     * @param emit the new state
     */
    setEmitSignals(emit: boolean): void
    /**
     * Configure the `min` and `max` latency in `src`. If `min` is set to -1, the
     * default latency calculations for pseudo-live sources will be used.
     * @param min the min latency
     * @param max the max latency
     */
    setLatency(min: number, max: number): void
    /**
     * When set to any other value than GST_APP_LEAKY_TYPE_NONE then the appsrc
     * will drop any buffers that are pushed into it once its internal queue is
     * full. The selected type defines whether to drop the oldest or new
     * buffers.
     * @param leaky the #GstAppLeakyType
     */
    setLeakyType(leaky: AppLeakyType): void
    /**
     * Set the maximum amount of buffers that can be queued in `appsrc`.
     * After the maximum amount of buffers are queued, `appsrc` will emit the
     * "enough-data" signal.
     * @param max the maximum number of buffers to queue
     */
    setMaxBuffers(max: number): void
    /**
     * Set the maximum amount of bytes that can be queued in `appsrc`.
     * After the maximum amount of bytes are queued, `appsrc` will emit the
     * "enough-data" signal.
     * @param max the maximum number of bytes to queue
     */
    setMaxBytes(max: number): void
    /**
     * Set the maximum amount of time that can be queued in `appsrc`.
     * After the maximum amount of time are queued, `appsrc` will emit the
     * "enough-data" signal.
     * @param max the maximum amonut of time to queue
     */
    setMaxTime(max: Gst.ClockTime): void
    /**
     * Set the size of the stream in bytes. A value of -1 means that the size is
     * not known.
     * @param size the size to set
     */
    setSize(size: number): void
    /**
     * Set the stream type on `appsrc`. For seekable streams, the "seek" signal must
     * be connected to.
     * 
     * A stream_type stream
     * @param type the new state
     */
    setStreamType(type: AppStreamType): void

    // Conflicting methods

    ref(...args: any[]): any

    // Own signals of GstApp-1.0.GstApp.AppSrc

    connect(sigName: "end-of-stream", callback: AppSrc_EndOfStreamSignalCallback): number
    on(sigName: "end-of-stream", callback: AppSrc_EndOfStreamSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "end-of-stream", callback: AppSrc_EndOfStreamSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "end-of-stream", callback: AppSrc_EndOfStreamSignalCallback): NodeJS.EventEmitter
    emit(sigName: "end-of-stream", ...args: any[]): void
    connect(sigName: "enough-data", callback: AppSrc_EnoughDataSignalCallback): number
    on(sigName: "enough-data", callback: AppSrc_EnoughDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enough-data", callback: AppSrc_EnoughDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enough-data", callback: AppSrc_EnoughDataSignalCallback): NodeJS.EventEmitter
    emit(sigName: "enough-data", ...args: any[]): void
    connect(sigName: "need-data", callback: AppSrc_NeedDataSignalCallback): number
    on(sigName: "need-data", callback: AppSrc_NeedDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "need-data", callback: AppSrc_NeedDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "need-data", callback: AppSrc_NeedDataSignalCallback): NodeJS.EventEmitter
    emit(sigName: "need-data", ...args: any[]): void
    connect(sigName: "push-buffer", callback: AppSrc_PushBufferSignalCallback): number
    on(sigName: "push-buffer", callback: AppSrc_PushBufferSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "push-buffer", callback: AppSrc_PushBufferSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "push-buffer", callback: AppSrc_PushBufferSignalCallback): NodeJS.EventEmitter
    emit(sigName: "push-buffer", ...args: any[]): void
    connect(sigName: "push-buffer-list", callback: AppSrc_PushBufferListSignalCallback): number
    on(sigName: "push-buffer-list", callback: AppSrc_PushBufferListSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "push-buffer-list", callback: AppSrc_PushBufferListSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "push-buffer-list", callback: AppSrc_PushBufferListSignalCallback): NodeJS.EventEmitter
    emit(sigName: "push-buffer-list", ...args: any[]): void
    connect(sigName: "push-sample", callback: AppSrc_PushSampleSignalCallback): number
    on(sigName: "push-sample", callback: AppSrc_PushSampleSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "push-sample", callback: AppSrc_PushSampleSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "push-sample", callback: AppSrc_PushSampleSignalCallback): NodeJS.EventEmitter
    emit(sigName: "push-sample", ...args: any[]): void
    connect(sigName: "seek-data", callback: AppSrc_SeekDataSignalCallback): number
    on(sigName: "seek-data", callback: AppSrc_SeekDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "seek-data", callback: AppSrc_SeekDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "seek-data", callback: AppSrc_SeekDataSignalCallback): NodeJS.EventEmitter
    emit(sigName: "seek-data", ...args: any[]): void

    // Class property signals of GstApp-1.0.GstApp.AppSrc

    connect(sigName: "notify::block", callback: (...args: any[]) => void): number
    on(sigName: "notify::block", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::block", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::block", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::block", ...args: any[]): void
    connect(sigName: "notify::caps", callback: (...args: any[]) => void): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::caps", ...args: any[]): void
    connect(sigName: "notify::current-level-buffers", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-level-buffers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-level-buffers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-level-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-level-buffers", ...args: any[]): void
    connect(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-level-bytes", ...args: any[]): void
    connect(sigName: "notify::current-level-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-level-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-level-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-level-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-level-time", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::emit-signals", callback: (...args: any[]) => void): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::emit-signals", ...args: any[]): void
    connect(sigName: "notify::format", callback: (...args: any[]) => void): number
    on(sigName: "notify::format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::handle-segment-change", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle-segment-change", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle-segment-change", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle-segment-change", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle-segment-change", ...args: any[]): void
    connect(sigName: "notify::is-live", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-live", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-live", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-live", ...args: any[]): void
    connect(sigName: "notify::leaky-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::leaky-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::leaky-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::leaky-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::leaky-type", ...args: any[]): void
    connect(sigName: "notify::max-buffers", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-buffers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-buffers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-buffers", ...args: any[]): void
    connect(sigName: "notify::max-bytes", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-bytes", ...args: any[]): void
    connect(sigName: "notify::max-latency", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-latency", ...args: any[]): void
    connect(sigName: "notify::max-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-time", ...args: any[]): void
    connect(sigName: "notify::min-latency", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-latency", ...args: any[]): void
    connect(sigName: "notify::min-percent", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-percent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-percent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-percent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-percent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::stream-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::stream-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stream-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stream-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stream-type", ...args: any[]): void
    connect(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::do-timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::do-timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::do-timestamp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The appsrc element can be used by applications to insert data into a
 * GStreamer pipeline. Unlike most GStreamer elements, appsrc provides
 * external API functions.
 * 
 * appsrc can be used by linking with the libgstapp library to access the
 * methods directly or by using the appsrc action signals.
 * 
 * Before operating appsrc, the caps property must be set to fixed caps
 * describing the format of the data that will be pushed with appsrc. An
 * exception to this is when pushing buffers with unknown caps, in which case no
 * caps should be set. This is typically true of file-like sources that push raw
 * byte buffers. If you don't want to explicitly set the caps, you can use
 * gst_app_src_push_sample. This method gets the caps associated with the
 * sample and sets them on the appsrc replacing any previously set caps (if
 * different from sample's caps).
 * 
 * The main way of handing data to the appsrc element is by calling the
 * gst_app_src_push_buffer() method or by emitting the push-buffer action signal.
 * This will put the buffer onto a queue from which appsrc will read from in its
 * streaming thread. It is important to note that data transport will not happen
 * from the thread that performed the push-buffer call.
 * 
 * The "max-bytes", "max-buffers" and "max-time" properties control how much
 * data can be queued in appsrc before appsrc considers the queue full. A
 * filled internal queue will always signal the "enough-data" signal, which
 * signals the application that it should stop pushing data into appsrc. The
 * "block" property will cause appsrc to block the push-buffer method until
 * free data becomes available again.
 * 
 * When the internal queue is running out of data, the "need-data" signal is
 * emitted, which signals the application that it should start pushing more data
 * into appsrc.
 * 
 * In addition to the "need-data" and "enough-data" signals, appsrc can emit the
 * "seek-data" signal when the "stream-mode" property is set to "seekable" or
 * "random-access". The signal argument will contain the new desired position in
 * the stream expressed in the unit set with the "format" property. After
 * receiving the seek-data signal, the application should push-buffers from the
 * new position.
 * 
 * These signals allow the application to operate the appsrc in two different
 * ways:
 * 
 * The push mode, in which the application repeatedly calls the push-buffer/push-sample
 * method with a new buffer/sample. Optionally, the queue size in the appsrc
 * can be controlled with the enough-data and need-data signals by respectively
 * stopping/starting the push-buffer/push-sample calls. This is a typical
 * mode of operation for the stream-type "stream" and "seekable". Use this
 * mode when implementing various network protocols or hardware devices.
 * 
 * The pull mode, in which the need-data signal triggers the next push-buffer call.
 * This mode is typically used in the "random-access" stream-type. Use this
 * mode for file access or other randomly accessible sources. In this mode, a
 * buffer of exactly the amount of bytes given by the need-data signal should be
 * pushed into appsrc.
 * 
 * In all modes, the size property on appsrc should contain the total stream
 * size in bytes. Setting this property is mandatory in the random-access mode.
 * For the stream and seekable modes, setting this property is optional but
 * recommended.
 * 
 * When the application has finished pushing data into appsrc, it should call
 * gst_app_src_end_of_stream() or emit the end-of-stream action signal. After
 * this call, no more buffers can be pushed into appsrc until a flushing seek
 * occurs or the state of the appsrc has gone through READY.
 * @class 
 */
class AppSrc extends GstBase.BaseSrc {

    // Own properties of GstApp-1.0.GstApp.AppSrc

    static name: string
    static $gtype: GObject.GType<AppSrc>

    // Constructors of GstApp-1.0.GstApp.AppSrc

    constructor(config?: AppSrc_ConstructProps) 
    _init(config?: AppSrc_ConstructProps): void
}

interface AppSinkCallbacks {

    // Own fields of GstApp-1.0.GstApp.AppSinkCallbacks

    eos: (appsink: AppSink) => void
    newPreroll: (appsink: AppSink) => Gst.FlowReturn
    newSample: (appsink: AppSink) => Gst.FlowReturn
    newEvent: (appsink: AppSink) => boolean
}

/**
 * A set of callbacks that can be installed on the appsink with
 * gst_app_sink_set_callbacks().
 * @record 
 */
class AppSinkCallbacks {

    // Own properties of GstApp-1.0.GstApp.AppSinkCallbacks

    static name: string
}

interface AppSinkClass {

    // Own fields of GstApp-1.0.GstApp.AppSinkClass

    basesinkClass: GstBase.BaseSinkClass
    eos: (appsink: AppSink) => void
    newPreroll: (appsink: AppSink) => Gst.FlowReturn
    newSample: (appsink: AppSink) => Gst.FlowReturn
    pullPreroll: (appsink: AppSink) => Gst.Sample | null
    pullSample: (appsink: AppSink) => Gst.Sample | null
    tryPullPreroll: (appsink: AppSink, timeout: Gst.ClockTime) => Gst.Sample | null
    tryPullSample: (appsink: AppSink, timeout: Gst.ClockTime) => Gst.Sample | null
    tryPullObject: (appsink: AppSink, timeout: Gst.ClockTime) => Gst.MiniObject
}

abstract class AppSinkClass {

    // Own properties of GstApp-1.0.GstApp.AppSinkClass

    static name: string
}

interface AppSinkPrivate {
}

class AppSinkPrivate {

    // Own properties of GstApp-1.0.GstApp.AppSinkPrivate

    static name: string
}

interface AppSrcCallbacks {

    // Own fields of GstApp-1.0.GstApp.AppSrcCallbacks

    needData: (src: AppSrc, length: number) => void
    enoughData: (src: AppSrc) => void
    seekData: (src: AppSrc, offset: number) => boolean
}

/**
 * A set of callbacks that can be installed on the appsrc with
 * gst_app_src_set_callbacks().
 * @record 
 */
class AppSrcCallbacks {

    // Own properties of GstApp-1.0.GstApp.AppSrcCallbacks

    static name: string
}

interface AppSrcClass {

    // Own fields of GstApp-1.0.GstApp.AppSrcClass

    basesrcClass: GstBase.BaseSrcClass
    needData: (appsrc: AppSrc, length: number) => void
    enoughData: (appsrc: AppSrc) => void
    seekData: (appsrc: AppSrc, offset: number) => boolean
    pushBuffer: (appsrc: AppSrc, buffer: Gst.Buffer) => Gst.FlowReturn
    endOfStream: (appsrc: AppSrc) => Gst.FlowReturn
    pushSample: (appsrc: AppSrc, sample: Gst.Sample) => Gst.FlowReturn
    pushBufferList: (appsrc: AppSrc, bufferList: Gst.BufferList) => Gst.FlowReturn
}

abstract class AppSrcClass {

    // Own properties of GstApp-1.0.GstApp.AppSrcClass

    static name: string
}

interface AppSrcPrivate {
}

class AppSrcPrivate {

    // Own properties of GstApp-1.0.GstApp.AppSrcPrivate

    static name: string
}

}
export default GstApp;