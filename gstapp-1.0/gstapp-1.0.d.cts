
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * GstApp-1.0
 */

import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

/**
 * Buffer dropping scheme to avoid the element's internal queue to block when
 * full.
 */
export enum AppLeakyType {
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
export enum AppStreamType {
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
export module AppSink {

    // Signal callback interfaces

    /**
     * Signal callback interface for `eos`
     */
    export interface EosSignalCallback {
        ($obj: AppSink): void
    }

    /**
     * Signal callback interface for `new-preroll`
     */
    export interface NewPrerollSignalCallback {
        ($obj: AppSink): Gst.FlowReturn
    }

    /**
     * Signal callback interface for `new-sample`
     */
    export interface NewSampleSignalCallback {
        ($obj: AppSink): Gst.FlowReturn
    }

    /**
     * Signal callback interface for `new-serialized-event`
     */
    export interface NewSerializedEventSignalCallback {
        ($obj: AppSink): boolean
    }

    /**
     * Signal callback interface for `pull-preroll`
     */
    export interface PullPrerollSignalCallback {
        ($obj: AppSink): Gst.Sample | null
    }

    /**
     * Signal callback interface for `pull-sample`
     */
    export interface PullSampleSignalCallback {
        ($obj: AppSink): Gst.Sample | null
    }

    /**
     * Signal callback interface for `try-pull-object`
     */
    export interface TryPullObjectSignalCallback {
        ($obj: AppSink, timeout: number): Gst.MiniObject | null
    }

    /**
     * Signal callback interface for `try-pull-preroll`
     */
    export interface TryPullPrerollSignalCallback {
        ($obj: AppSink, timeout: number): Gst.Sample | null
    }

    /**
     * Signal callback interface for `try-pull-sample`
     */
    export interface TryPullSampleSignalCallback {
        ($obj: AppSink, timeout: number): Gst.Sample | null
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gst.URIHandler.ConstructorProperties, GstBase.BaseSink.ConstructorProperties {

        // Own constructor properties of GstApp-1.0.GstApp.AppSink

        buffer_list?: boolean | null
        caps?: Gst.Caps | null
        drop?: boolean | null
        emit_signals?: boolean | null
        max_buffers?: number | null
        wait_on_eos?: boolean | null
    }

}

export interface AppSink extends Gst.URIHandler {

    // Own properties of GstApp-1.0.GstApp.AppSink

    buffer_list: boolean
    caps: Gst.Caps | null
    drop: boolean
    emit_signals: boolean
    readonly eos: any
    max_buffers: number
    wait_on_eos: boolean

    // Conflicting properties

    object: any

    // Own fields of GstApp-1.0.GstApp.AppSink

    basesink: GstBase.BaseSink

    // Owm methods of GstApp-1.0.GstApp.AppSink

    /**
     * Check if `appsink` supports buffer lists.
     * @returns %TRUE if @appsink supports buffer lists.
     */
    get_buffer_list_support(): boolean
    /**
     * Get the configured caps on `appsink`.
     * @returns the #GstCaps accepted by the sink. gst_caps_unref() after usage.
     */
    get_caps(): Gst.Caps | null
    /**
     * Check if `appsink` will drop old buffers when the maximum amount of queued
     * buffers is reached.
     * @returns %TRUE if @appsink is dropping old buffers when the queue is filled.
     */
    get_drop(): boolean
    /**
     * Check if appsink will emit the "new-preroll" and "new-sample" signals.
     * @returns %TRUE if @appsink is emitting the "new-preroll" and "new-sample" signals.
     */
    get_emit_signals(): boolean
    /**
     * Get the maximum amount of buffers that can be queued in `appsink`.
     * @returns The maximum amount of buffers that can be queued.
     */
    get_max_buffers(): number
    /**
     * Check if `appsink` will wait for all buffers to be consumed when an EOS is
     * received.
     * @returns %TRUE if @appsink will wait for all buffers to be consumed when an EOS is received.
     */
    get_wait_on_eos(): boolean
    /**
     * Check if `appsink` is EOS, which is when no more samples can be pulled because
     * an EOS event was received.
     * 
     * This function also returns %TRUE when the appsink is not in the PAUSED or
     * PLAYING state.
     * @returns %TRUE if no more samples can be pulled and the appsink is EOS.
     */
    is_eos(): boolean
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
     * @returns a #GstSample or NULL when the appsink is stopped or EOS.          Call gst_sample_unref() after usage.
     */
    pull_preroll(): Gst.Sample | null
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
     * @returns a #GstSample or NULL when the appsink is stopped or EOS.          Call gst_sample_unref() after usage.
     */
    pull_sample(): Gst.Sample | null
    /**
     * Instruct `appsink` to enable or disable buffer list support.
     * 
     * For backwards-compatibility reasons applications need to opt in
     * to indicate that they will be able to handle buffer lists.
     * @param enable_lists enable or disable buffer list support
     */
    set_buffer_list_support(enable_lists: boolean): void
    /**
     * Set the capabilities on the appsink element.  This function takes
     * a copy of the caps structure. After calling this method, the sink will only
     * accept caps that match `caps`. If `caps` is non-fixed, or incomplete,
     * you must check the caps on the samples to get the actual used caps.
     * @param caps caps to set
     */
    set_caps(caps: Gst.Caps | null): void
    /**
     * Instruct `appsink` to drop old buffers when the maximum amount of queued
     * buffers is reached.
     * @param drop the new state
     */
    set_drop(drop: boolean): void
    /**
     * Make appsink emit the "new-preroll" and "new-sample" signals. This option is
     * by default disabled because signal emission is expensive and unneeded when
     * the application prefers to operate in pull mode.
     * @param emit the new state
     */
    set_emit_signals(emit: boolean): void
    /**
     * Set the maximum amount of buffers that can be queued in `appsink`. After this
     * amount of buffers are queued in appsink, any more buffers will block upstream
     * elements until a sample is pulled from `appsink`.
     * @param max the maximum number of buffers to queue
     */
    set_max_buffers(max: number): void
    /**
     * Instruct `appsink` to wait for all buffers to be consumed when an EOS is received.
     * @param wait the new state
     */
    set_wait_on_eos(wait: boolean): void
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
     * @returns a #GstSample or NULL when the appsink is stopped or EOS or the timeout expires.          Call gst_sample_unref() after usage.
     */
    try_pull_preroll(timeout: Gst.ClockTime): Gst.Sample | null
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
     * @returns a #GstSample or NULL when the appsink is stopped or EOS or the timeout expires.          Call gst_sample_unref() after usage.
     */
    try_pull_sample(timeout: Gst.ClockTime): Gst.Sample | null

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

    // Own virtual methods of GstApp-1.0.GstApp.AppSink

    vfunc_eos(): void
    vfunc_new_preroll(): Gst.FlowReturn
    vfunc_new_sample(): Gst.FlowReturn
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
     * @virtual 
     * @returns a #GstSample or NULL when the appsink is stopped or EOS.          Call gst_sample_unref() after usage.
     */
    vfunc_pull_preroll(): Gst.Sample | null
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
     * @virtual 
     * @returns a #GstSample or NULL when the appsink is stopped or EOS.          Call gst_sample_unref() after usage.
     */
    vfunc_pull_sample(): Gst.Sample | null
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
     * @virtual 
     * @param timeout the maximum amount of time to wait for the preroll sample
     * @returns a #GstSample or NULL when the appsink is stopped or EOS or the timeout expires.          Call gst_sample_unref() after usage.
     */
    vfunc_try_pull_preroll(timeout: Gst.ClockTime): Gst.Sample | null
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
     * @virtual 
     * @param timeout the maximum amount of time to wait for a sample
     * @returns a #GstSample or NULL when the appsink is stopped or EOS or the timeout expires.          Call gst_sample_unref() after usage.
     */
    vfunc_try_pull_sample(timeout: Gst.ClockTime): Gst.Sample | null

    // Own signals of GstApp-1.0.GstApp.AppSink

    connect(sigName: "eos", callback: AppSink.EosSignalCallback): number
    connect_after(sigName: "eos", callback: AppSink.EosSignalCallback): number
    emit(sigName: "eos", ...args: any[]): void
    connect(sigName: "new-preroll", callback: AppSink.NewPrerollSignalCallback): number
    connect_after(sigName: "new-preroll", callback: AppSink.NewPrerollSignalCallback): number
    emit(sigName: "new-preroll", ...args: any[]): void
    connect(sigName: "new-sample", callback: AppSink.NewSampleSignalCallback): number
    connect_after(sigName: "new-sample", callback: AppSink.NewSampleSignalCallback): number
    emit(sigName: "new-sample", ...args: any[]): void
    connect(sigName: "new-serialized-event", callback: AppSink.NewSerializedEventSignalCallback): number
    connect_after(sigName: "new-serialized-event", callback: AppSink.NewSerializedEventSignalCallback): number
    emit(sigName: "new-serialized-event", ...args: any[]): void
    connect(sigName: "pull-preroll", callback: AppSink.PullPrerollSignalCallback): number
    connect_after(sigName: "pull-preroll", callback: AppSink.PullPrerollSignalCallback): number
    emit(sigName: "pull-preroll", ...args: any[]): void
    connect(sigName: "pull-sample", callback: AppSink.PullSampleSignalCallback): number
    connect_after(sigName: "pull-sample", callback: AppSink.PullSampleSignalCallback): number
    emit(sigName: "pull-sample", ...args: any[]): void
    connect(sigName: "try-pull-object", callback: AppSink.TryPullObjectSignalCallback): number
    connect_after(sigName: "try-pull-object", callback: AppSink.TryPullObjectSignalCallback): number
    emit(sigName: "try-pull-object", timeout: number, ...args: any[]): void
    connect(sigName: "try-pull-preroll", callback: AppSink.TryPullPrerollSignalCallback): number
    connect_after(sigName: "try-pull-preroll", callback: AppSink.TryPullPrerollSignalCallback): number
    emit(sigName: "try-pull-preroll", timeout: number, ...args: any[]): void
    connect(sigName: "try-pull-sample", callback: AppSink.TryPullSampleSignalCallback): number
    connect_after(sigName: "try-pull-sample", callback: AppSink.TryPullSampleSignalCallback): number
    emit(sigName: "try-pull-sample", timeout: number, ...args: any[]): void

    // Class property signals of GstApp-1.0.GstApp.AppSink

    connect(sigName: "notify::buffer-list", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-list", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer-list", ...args: any[]): void
    connect(sigName: "notify::caps", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps", ...args: any[]): void
    connect(sigName: "notify::drop", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drop", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::drop", ...args: any[]): void
    connect(sigName: "notify::emit-signals", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::emit-signals", ...args: any[]): void
    connect(sigName: "notify::eos", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eos", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::eos", ...args: any[]): void
    connect(sigName: "notify::max-buffers", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-buffers", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-buffers", ...args: any[]): void
    connect(sigName: "notify::wait-on-eos", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wait-on-eos", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wait-on-eos", ...args: any[]): void
    connect(sigName: "notify::async", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::async", ...args: any[]): void
    connect(sigName: "notify::blocksize", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::blocksize", ...args: any[]): void
    connect(sigName: "notify::enable-last-sample", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-sample", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-last-sample", ...args: any[]): void
    connect(sigName: "notify::last-sample", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-sample", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-sample", ...args: any[]): void
    connect(sigName: "notify::max-bitrate", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-bitrate", ...args: any[]): void
    connect(sigName: "notify::max-lateness", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-lateness", ...args: any[]): void
    connect(sigName: "notify::processing-deadline", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-deadline", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::processing-deadline", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: "notify::render-delay", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::render-delay", ...args: any[]): void
    connect(sigName: "notify::stats", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stats", ...args: any[]): void
    connect(sigName: "notify::sync", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sync", ...args: any[]): void
    connect(sigName: "notify::throttle-time", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle-time", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::throttle-time", ...args: any[]): void
    connect(sigName: "notify::ts-offset", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: AppSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ts-offset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
export class AppSink extends GstBase.BaseSink {

    // Own properties of GstApp-1.0.GstApp.AppSink

    static name: string
    static $gtype: GObject.GType<AppSink>

    // Constructors of GstApp-1.0.GstApp.AppSink

    constructor(config?: AppSink.ConstructorProperties) 
    _init(config?: AppSink.ConstructorProperties): void
}

export module AppSrc {

    // Signal callback interfaces

    /**
     * Signal callback interface for `end-of-stream`
     */
    export interface EndOfStreamSignalCallback {
        ($obj: AppSrc): Gst.FlowReturn
    }

    /**
     * Signal callback interface for `enough-data`
     */
    export interface EnoughDataSignalCallback {
        ($obj: AppSrc): void
    }

    /**
     * Signal callback interface for `need-data`
     */
    export interface NeedDataSignalCallback {
        ($obj: AppSrc, length: number): void
    }

    /**
     * Signal callback interface for `push-buffer`
     */
    export interface PushBufferSignalCallback {
        ($obj: AppSrc, buffer: Gst.Buffer): Gst.FlowReturn
    }

    /**
     * Signal callback interface for `push-buffer-list`
     */
    export interface PushBufferListSignalCallback {
        ($obj: AppSrc, buffer_list: Gst.BufferList): Gst.FlowReturn
    }

    /**
     * Signal callback interface for `push-sample`
     */
    export interface PushSampleSignalCallback {
        ($obj: AppSrc, sample: Gst.Sample): Gst.FlowReturn
    }

    /**
     * Signal callback interface for `seek-data`
     */
    export interface SeekDataSignalCallback {
        ($obj: AppSrc, offset: number): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gst.URIHandler.ConstructorProperties, GstBase.BaseSrc.ConstructorProperties {

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
        emit_signals?: boolean | null
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
        handle_segment_change?: boolean | null
        /**
         * Instruct the source to behave like a live source. This includes that it
         * will only push out buffers in the PLAYING state.
         */
        is_live?: boolean | null
        /**
         * When set to any other value than GST_APP_LEAKY_TYPE_NONE then the appsrc
         * will drop any buffers that are pushed into it once its internal queue is
         * full. The selected type defines whether to drop the oldest or new
         * buffers.
         */
        leaky_type?: AppLeakyType | null
        /**
         * The maximum amount of buffers that can be queued internally.
         * After the maximum amount of buffers are queued, appsrc will emit the
         * "enough-data" signal.
         */
        max_buffers?: number | null
        /**
         * The maximum amount of bytes that can be queued internally.
         * After the maximum amount of bytes are queued, appsrc will emit the
         * "enough-data" signal.
         */
        max_bytes?: number | null
        max_latency?: number | null
        /**
         * The maximum amount of time that can be queued internally.
         * After the maximum amount of time are queued, appsrc will emit the
         * "enough-data" signal.
         */
        max_time?: number | null
        /**
         * The minimum latency of the source. A value of -1 will use the default
         * latency calculations of #GstBaseSrc.
         */
        min_latency?: number | null
        /**
         * Make appsrc emit the "need-data" signal when the amount of bytes in the
         * queue drops below this percentage of max-bytes.
         */
        min_percent?: number | null
        /**
         * The total size in bytes of the data stream. If the total size is known, it
         * is recommended to configure it with this property.
         */
        size?: number | null
        /**
         * The type of stream that this source is producing.  For seekable streams the
         * application should connect to the seek-data signal.
         */
        stream_type?: AppStreamType | null
    }

}

export interface AppSrc extends Gst.URIHandler {

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
    caps: Gst.Caps | null
    /**
     * The number of currently queued buffers inside appsrc.
     */
    readonly current_level_buffers: number
    /**
     * The number of currently queued bytes inside appsrc.
     */
    readonly current_level_bytes: number
    /**
     * The amount of currently queued time inside appsrc.
     */
    readonly current_level_time: number
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
    emit_signals: boolean
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
    handle_segment_change: boolean
    /**
     * Instruct the source to behave like a live source. This includes that it
     * will only push out buffers in the PLAYING state.
     */
    is_live: boolean
    /**
     * When set to any other value than GST_APP_LEAKY_TYPE_NONE then the appsrc
     * will drop any buffers that are pushed into it once its internal queue is
     * full. The selected type defines whether to drop the oldest or new
     * buffers.
     */
    leaky_type: AppLeakyType
    /**
     * The maximum amount of buffers that can be queued internally.
     * After the maximum amount of buffers are queued, appsrc will emit the
     * "enough-data" signal.
     */
    max_buffers: number
    /**
     * The maximum amount of bytes that can be queued internally.
     * After the maximum amount of bytes are queued, appsrc will emit the
     * "enough-data" signal.
     */
    max_bytes: number
    max_latency: number
    /**
     * The maximum amount of time that can be queued internally.
     * After the maximum amount of time are queued, appsrc will emit the
     * "enough-data" signal.
     */
    max_time: number
    /**
     * The minimum latency of the source. A value of -1 will use the default
     * latency calculations of #GstBaseSrc.
     */
    min_latency: number
    /**
     * Make appsrc emit the "need-data" signal when the amount of bytes in the
     * queue drops below this percentage of max-bytes.
     */
    min_percent: number
    /**
     * The total size in bytes of the data stream. If the total size is known, it
     * is recommended to configure it with this property.
     */
    size: number
    /**
     * The type of stream that this source is producing.  For seekable streams the
     * application should connect to the seek-data signal.
     */
    stream_type: AppStreamType

    // Conflicting properties

    object: any

    // Own fields of GstApp-1.0.GstApp.AppSrc

    basesrc: GstBase.BaseSrc

    // Owm methods of GstApp-1.0.GstApp.AppSrc

    /**
     * Indicates to the appsrc element that the last buffer queued in the
     * element is the last buffer of the stream.
     * @returns #GST_FLOW_OK when the EOS was successfully queued. #GST_FLOW_FLUSHING when @appsrc is not PAUSED or PLAYING.
     */
    end_of_stream(): Gst.FlowReturn
    /**
     * Get the configured caps on `appsrc`.
     * @returns the #GstCaps produced by the source. gst_caps_unref() after usage.
     */
    get_caps(): Gst.Caps | null
    /**
     * Get the number of currently queued buffers inside `appsrc`.
     * @returns The number of currently queued buffers.
     */
    get_current_level_buffers(): number
    /**
     * Get the number of currently queued bytes inside `appsrc`.
     * @returns The number of currently queued bytes.
     */
    get_current_level_bytes(): number
    /**
     * Get the amount of currently queued time inside `appsrc`.
     * @returns The amount of currently queued time.
     */
    get_current_level_time(): Gst.ClockTime
    /**
     * Get the duration of the stream in nanoseconds. A value of GST_CLOCK_TIME_NONE means that the duration is
     * not known.
     * @returns the duration of the stream previously set with gst_app_src_set_duration();
     */
    get_duration(): Gst.ClockTime
    /**
     * Check if appsrc will emit the "new-preroll" and "new-buffer" signals.
     * @returns %TRUE if @appsrc is emitting the "new-preroll" and "new-buffer" signals.
     */
    get_emit_signals(): boolean
    /**
     * Retrieve the min and max latencies in `min` and `max` respectively.
     */
    get_latency(): [ /* min */ number, /* max */ number ]
    /**
     * Returns the currently set #GstAppLeakyType. See gst_app_src_set_leaky_type()
     * for more details.
     * @returns The currently set #GstAppLeakyType.
     */
    get_leaky_type(): AppLeakyType
    /**
     * Get the maximum amount of buffers that can be queued in `appsrc`.
     * @returns The maximum amount of buffers that can be queued.
     */
    get_max_buffers(): number
    /**
     * Get the maximum amount of bytes that can be queued in `appsrc`.
     * @returns The maximum amount of bytes that can be queued.
     */
    get_max_bytes(): number
    /**
     * Get the maximum amount of time that can be queued in `appsrc`.
     * @returns The maximum amount of time that can be queued.
     */
    get_max_time(): Gst.ClockTime
    /**
     * Get the size of the stream in bytes. A value of -1 means that the size is
     * not known.
     * @returns the size of the stream previously set with gst_app_src_set_size();
     */
    get_size(): number
    /**
     * Get the stream type. Control the stream type of `appsrc`
     * with gst_app_src_set_stream_type().
     * @returns the stream type.
     */
    get_stream_type(): AppStreamType
    /**
     * Adds a buffer to the queue of buffers that the appsrc element will
     * push to its source pad.  This function takes ownership of the buffer.
     * 
     * When the block property is TRUE, this function can block until free
     * space becomes available in the queue.
     * @param buffer a #GstBuffer to push
     * @returns #GST_FLOW_OK when the buffer was successfully queued. #GST_FLOW_FLUSHING when @appsrc is not PAUSED or PLAYING. #GST_FLOW_EOS when EOS occurred.
     */
    push_buffer(buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * Adds a buffer list to the queue of buffers and buffer lists that the
     * appsrc element will push to its source pad.  This function takes ownership
     * of `buffer_list`.
     * 
     * When the block property is TRUE, this function can block until free
     * space becomes available in the queue.
     * @param buffer_list a #GstBufferList to push
     * @returns #GST_FLOW_OK when the buffer list was successfully queued. #GST_FLOW_FLUSHING when @appsrc is not PAUSED or PLAYING. #GST_FLOW_EOS when EOS occurred.
     */
    push_buffer_list(buffer_list: Gst.BufferList): Gst.FlowReturn
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
     * @returns #GST_FLOW_OK when the buffer was successfully queued. #GST_FLOW_FLUSHING when @appsrc is not PAUSED or PLAYING. #GST_FLOW_EOS when EOS occurred.
     */
    push_sample(sample: Gst.Sample): Gst.FlowReturn
    /**
     * Set the capabilities on the appsrc element.  This function takes
     * a copy of the caps structure. After calling this method, the source will
     * only produce caps that match `caps`. `caps` must be fixed and the caps on the
     * buffers must match the caps or left NULL.
     * @param caps caps to set
     */
    set_caps(caps: Gst.Caps | null): void

    // Overloads of set_caps

    /**
     * Set new caps on the basesrc source pad.
     * @param caps a #GstCaps
     * @returns %TRUE if the caps could be set
     */
    set_caps(caps: Gst.Caps): boolean
    /**
     * Set the duration of the stream in nanoseconds. A value of GST_CLOCK_TIME_NONE means that the duration is
     * not known.
     * @param duration the duration to set
     */
    set_duration(duration: Gst.ClockTime): void
    /**
     * Make appsrc emit the "new-preroll" and "new-buffer" signals. This option is
     * by default disabled because signal emission is expensive and unneeded when
     * the application prefers to operate in pull mode.
     * @param emit the new state
     */
    set_emit_signals(emit: boolean): void
    /**
     * Configure the `min` and `max` latency in `src`. If `min` is set to -1, the
     * default latency calculations for pseudo-live sources will be used.
     * @param min the min latency
     * @param max the max latency
     */
    set_latency(min: number, max: number): void
    /**
     * When set to any other value than GST_APP_LEAKY_TYPE_NONE then the appsrc
     * will drop any buffers that are pushed into it once its internal queue is
     * full. The selected type defines whether to drop the oldest or new
     * buffers.
     * @param leaky the #GstAppLeakyType
     */
    set_leaky_type(leaky: AppLeakyType): void
    /**
     * Set the maximum amount of buffers that can be queued in `appsrc`.
     * After the maximum amount of buffers are queued, `appsrc` will emit the
     * "enough-data" signal.
     * @param max the maximum number of buffers to queue
     */
    set_max_buffers(max: number): void
    /**
     * Set the maximum amount of bytes that can be queued in `appsrc`.
     * After the maximum amount of bytes are queued, `appsrc` will emit the
     * "enough-data" signal.
     * @param max the maximum number of bytes to queue
     */
    set_max_bytes(max: number): void
    /**
     * Set the maximum amount of time that can be queued in `appsrc`.
     * After the maximum amount of time are queued, `appsrc` will emit the
     * "enough-data" signal.
     * @param max the maximum amonut of time to queue
     */
    set_max_time(max: Gst.ClockTime): void
    /**
     * Set the size of the stream in bytes. A value of -1 means that the size is
     * not known.
     * @param size the size to set
     */
    set_size(size: number): void
    /**
     * Set the stream type on `appsrc`. For seekable streams, the "seek" signal must
     * be connected to.
     * 
     * A stream_type stream
     * @param type the new state
     */
    set_stream_type(type: AppStreamType): void

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

    // Own virtual methods of GstApp-1.0.GstApp.AppSrc

    /**
     * Indicates to the appsrc element that the last buffer queued in the
     * element is the last buffer of the stream.
     * @virtual 
     * @returns #GST_FLOW_OK when the EOS was successfully queued. #GST_FLOW_FLUSHING when @appsrc is not PAUSED or PLAYING.
     */
    vfunc_end_of_stream(): Gst.FlowReturn
    vfunc_enough_data(): void
    vfunc_need_data(length: number): void
    /**
     * Adds a buffer to the queue of buffers that the appsrc element will
     * push to its source pad.  This function takes ownership of the buffer.
     * 
     * When the block property is TRUE, this function can block until free
     * space becomes available in the queue.
     * @virtual 
     * @param buffer a #GstBuffer to push
     * @returns #GST_FLOW_OK when the buffer was successfully queued. #GST_FLOW_FLUSHING when @appsrc is not PAUSED or PLAYING. #GST_FLOW_EOS when EOS occurred.
     */
    vfunc_push_buffer(buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * Adds a buffer list to the queue of buffers and buffer lists that the
     * appsrc element will push to its source pad.  This function takes ownership
     * of `buffer_list`.
     * 
     * When the block property is TRUE, this function can block until free
     * space becomes available in the queue.
     * @virtual 
     * @param buffer_list a #GstBufferList to push
     * @returns #GST_FLOW_OK when the buffer list was successfully queued. #GST_FLOW_FLUSHING when @appsrc is not PAUSED or PLAYING. #GST_FLOW_EOS when EOS occurred.
     */
    vfunc_push_buffer_list(buffer_list: Gst.BufferList): Gst.FlowReturn
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
     * @virtual 
     * @param sample a #GstSample from which buffer and caps may be extracted
     * @returns #GST_FLOW_OK when the buffer was successfully queued. #GST_FLOW_FLUSHING when @appsrc is not PAUSED or PLAYING. #GST_FLOW_EOS when EOS occurred.
     */
    vfunc_push_sample(sample: Gst.Sample): Gst.FlowReturn
    vfunc_seek_data(offset: number): boolean

    // Own signals of GstApp-1.0.GstApp.AppSrc

    connect(sigName: "end-of-stream", callback: AppSrc.EndOfStreamSignalCallback): number
    connect_after(sigName: "end-of-stream", callback: AppSrc.EndOfStreamSignalCallback): number
    emit(sigName: "end-of-stream", ...args: any[]): void
    connect(sigName: "enough-data", callback: AppSrc.EnoughDataSignalCallback): number
    connect_after(sigName: "enough-data", callback: AppSrc.EnoughDataSignalCallback): number
    emit(sigName: "enough-data", ...args: any[]): void
    connect(sigName: "need-data", callback: AppSrc.NeedDataSignalCallback): number
    connect_after(sigName: "need-data", callback: AppSrc.NeedDataSignalCallback): number
    emit(sigName: "need-data", length: number, ...args: any[]): void
    connect(sigName: "push-buffer", callback: AppSrc.PushBufferSignalCallback): number
    connect_after(sigName: "push-buffer", callback: AppSrc.PushBufferSignalCallback): number
    emit(sigName: "push-buffer", buffer: Gst.Buffer, ...args: any[]): void
    connect(sigName: "push-buffer-list", callback: AppSrc.PushBufferListSignalCallback): number
    connect_after(sigName: "push-buffer-list", callback: AppSrc.PushBufferListSignalCallback): number
    emit(sigName: "push-buffer-list", buffer_list: Gst.BufferList, ...args: any[]): void
    connect(sigName: "push-sample", callback: AppSrc.PushSampleSignalCallback): number
    connect_after(sigName: "push-sample", callback: AppSrc.PushSampleSignalCallback): number
    emit(sigName: "push-sample", sample: Gst.Sample, ...args: any[]): void
    connect(sigName: "seek-data", callback: AppSrc.SeekDataSignalCallback): number
    connect_after(sigName: "seek-data", callback: AppSrc.SeekDataSignalCallback): number
    emit(sigName: "seek-data", offset: number, ...args: any[]): void

    // Class property signals of GstApp-1.0.GstApp.AppSrc

    connect(sigName: "notify::block", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::block", ...args: any[]): void
    connect(sigName: "notify::caps", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps", ...args: any[]): void
    connect(sigName: "notify::current-level-buffers", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-buffers", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-level-buffers", ...args: any[]): void
    connect(sigName: "notify::current-level-bytes", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-bytes", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-level-bytes", ...args: any[]): void
    connect(sigName: "notify::current-level-time", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-time", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-level-time", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::emit-signals", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::emit-signals", ...args: any[]): void
    connect(sigName: "notify::format", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::handle-segment-change", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle-segment-change", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handle-segment-change", ...args: any[]): void
    connect(sigName: "notify::is-live", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-live", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-live", ...args: any[]): void
    connect(sigName: "notify::leaky-type", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::leaky-type", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::leaky-type", ...args: any[]): void
    connect(sigName: "notify::max-buffers", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-buffers", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-buffers", ...args: any[]): void
    connect(sigName: "notify::max-bytes", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bytes", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-bytes", ...args: any[]): void
    connect(sigName: "notify::max-latency", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-latency", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-latency", ...args: any[]): void
    connect(sigName: "notify::max-time", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-time", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-time", ...args: any[]): void
    connect(sigName: "notify::min-latency", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-latency", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-latency", ...args: any[]): void
    connect(sigName: "notify::min-percent", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-percent", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-percent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::stream-type", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stream-type", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stream-type", ...args: any[]): void
    connect(sigName: "notify::do-timestamp", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: AppSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::do-timestamp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
export class AppSrc extends GstBase.BaseSrc {

    // Own properties of GstApp-1.0.GstApp.AppSrc

    static name: string
    static $gtype: GObject.GType<AppSrc>

    // Constructors of GstApp-1.0.GstApp.AppSrc

    constructor(config?: AppSrc.ConstructorProperties) 
    _init(config?: AppSrc.ConstructorProperties): void
}

export interface AppSinkCallbacks {

    // Own fields of GstApp-1.0.GstApp.AppSinkCallbacks

    eos: (appsink: AppSink) => void
    new_preroll: (appsink: AppSink) => Gst.FlowReturn
    new_sample: (appsink: AppSink) => Gst.FlowReturn
    new_event: (appsink: AppSink) => boolean
}

/**
 * A set of callbacks that can be installed on the appsink with
 * gst_app_sink_set_callbacks().
 * @record 
 */
export class AppSinkCallbacks {

    // Own properties of GstApp-1.0.GstApp.AppSinkCallbacks

    static name: string
}

export interface AppSinkClass {

    // Own fields of GstApp-1.0.GstApp.AppSinkClass

    basesink_class: GstBase.BaseSinkClass
    eos: (appsink: AppSink) => void
    new_preroll: (appsink: AppSink) => Gst.FlowReturn
    new_sample: (appsink: AppSink) => Gst.FlowReturn
    pull_preroll: (appsink: AppSink) => Gst.Sample | null
    pull_sample: (appsink: AppSink) => Gst.Sample | null
    try_pull_preroll: (appsink: AppSink, timeout: Gst.ClockTime) => Gst.Sample | null
    try_pull_sample: (appsink: AppSink, timeout: Gst.ClockTime) => Gst.Sample | null
    try_pull_object: (appsink: AppSink, timeout: Gst.ClockTime) => Gst.MiniObject | null
}

export abstract class AppSinkClass {

    // Own properties of GstApp-1.0.GstApp.AppSinkClass

    static name: string
}

export interface AppSinkPrivate {
}

export class AppSinkPrivate {

    // Own properties of GstApp-1.0.GstApp.AppSinkPrivate

    static name: string
}

export interface AppSrcCallbacks {

    // Own fields of GstApp-1.0.GstApp.AppSrcCallbacks

    need_data: (src: AppSrc, length: number) => void
    enough_data: (src: AppSrc) => void
    seek_data: (src: AppSrc, offset: number) => boolean
}

/**
 * A set of callbacks that can be installed on the appsrc with
 * gst_app_src_set_callbacks().
 * @record 
 */
export class AppSrcCallbacks {

    // Own properties of GstApp-1.0.GstApp.AppSrcCallbacks

    static name: string
}

export interface AppSrcClass {

    // Own fields of GstApp-1.0.GstApp.AppSrcClass

    basesrc_class: GstBase.BaseSrcClass
    need_data: (appsrc: AppSrc, length: number) => void
    enough_data: (appsrc: AppSrc) => void
    seek_data: (appsrc: AppSrc, offset: number) => boolean
    push_buffer: (appsrc: AppSrc, buffer: Gst.Buffer) => Gst.FlowReturn
    end_of_stream: (appsrc: AppSrc) => Gst.FlowReturn
    push_sample: (appsrc: AppSrc, sample: Gst.Sample) => Gst.FlowReturn
    push_buffer_list: (appsrc: AppSrc, buffer_list: Gst.BufferList) => Gst.FlowReturn
}

export abstract class AppSrcClass {

    // Own properties of GstApp-1.0.GstApp.AppSrcClass

    static name: string
}

export interface AppSrcPrivate {
}

export class AppSrcPrivate {

    // Own properties of GstApp-1.0.GstApp.AppSrcPrivate

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