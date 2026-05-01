
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
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstApp {

    /**
     * GstApp-1.0
     */


    /**
     * @gir-type Enum
     */
    export namespace AppLeakyType {
        export const $gtype: GObject.GType<AppLeakyType>;
    }

    /**
     * Buffer dropping scheme to avoid the element's internal queue to block when
     * full.
     * @gir-type Enum
     * @since 1.20
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
     * @gir-type Enum
     */
    export namespace AppStreamType {
        export const $gtype: GObject.GType<AppStreamType>;
    }

    /**
     * The stream type.
     * @gir-type Enum
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


    namespace AppSink {
        // Signal signatures
        interface SignalSignatures extends GstBase.BaseSink.SignalSignatures {
            /**
             * Signal that the end-of-stream has been reached. This signal is emitted from
             * the streaming thread.
             * @signal
             * @run-last
             */
            eos: () => void;
            /**
             * Signal that a new preroll sample is available.
             * 
             * This signal is emitted from the streaming thread and only when the
             * "emit-signals" property is `true`.
             * 
             * The new preroll sample can be retrieved with the "pull-preroll" action
             * signal or `gst_app_sink_pull_preroll()` either from this signal callback
             * or from any other thread.
             * 
             * Note that this signal is only emitted when the "emit-signals" property is
             * set to `true`, which it is not by default for performance reasons.
             * @signal
             * @run-last
             */
            "new-preroll": () => Gst.FlowReturn;
            /**
             * Signal that a new sample is available.
             * 
             * This signal is emitted from the streaming thread and only when the
             * "emit-signals" property is `true`.
             * 
             * The new sample can be retrieved with the "pull-sample" action
             * signal or `gst_app_sink_pull_sample()` either from this signal callback
             * or from any other thread.
             * 
             * Note that this signal is only emitted when the "emit-signals" property is
             * set to `true`, which it is not by default for performance reasons.
             * @signal
             * @run-last
             */
            "new-sample": () => Gst.FlowReturn;
            /**
             * Signal that a new downstream serialized event is available.
             * 
             * This signal is emitted from the streaming thread and only when the
             * "emit-signals" property is `true`.
             * 
             * The new event can be retrieved with the "try-pull-object" action
             * signal or `gst_app_sink_pull_object()` either from this signal callback
             * or from any other thread.
             * 
             * EOS will not be notified using this signal, use {@link GstApp.AppSink.SignalSignatures.eos | GstApp.AppSink::eos} instead.
             * EOS cannot be pulled either, use `gst_app_sink_is_eos()` to check for it.
             * 
             * Note that this signal is only emitted when the "emit-signals" property is
             * set to `true`, which it is not by default for performance reasons.
             * 
             * The callback should return `true` if the event has been handled, which will
             * skip basesink handling of the event, `false` otherwise.
             * @signal
             * @since 1.20
             * @run-last
             */
            "new-serialized-event": () => (boolean | void);
            /**
             * Signal that a new propose_allocation query is available.
             * 
             * This signal is emitted from the streaming thread and only when the
             * "emit-signals" property is `true`.
             * @signal
             * @since 1.24
             * @run-last
             */
            "propose-allocation": (arg0: Gst.Query) => (boolean | void);
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
             * when calling `gst_app_sink_pull_sample()` or the "pull-sample" action signal.
             * 
             * If an EOS event was received before any buffers, this function returns
             * `null`. Use gst_app_sink_is_eos () to check for the EOS condition.
             * 
             * This function blocks until a preroll sample or EOS is received or the appsink
             * element is set to the READY/NULL state.
             * @signal
             * @action
             * @run-last
             */
            "pull-preroll": () => (Gst.Sample | null);
            /**
             * This function blocks until a sample or EOS becomes available or the appsink
             * element is set to the READY/NULL state.
             * 
             * This function will only return samples when the appsink is in the PLAYING
             * state. All rendered samples will be put in a queue so that the application
             * can pull samples at its own rate.
             * 
             * Note that when the application does not pull samples fast enough, the
             * queued samples could consume a lot of memory, especially when dealing with
             * raw video frames. It's possible to control the behaviour of the queue with
             * the "drop" and "max-buffers" properties.
             * 
             * If an EOS event was received before any buffers, this function returns
             * `null`. Use gst_app_sink_is_eos () to check for the EOS condition.
             * @signal
             * @action
             * @run-last
             */
            "pull-sample": () => (Gst.Sample | null);
            /**
             * This function blocks until a sample or an event becomes available or the appsink
             * element is set to the READY/NULL state or the timeout expires.
             * 
             * This function will only return samples when the appsink is in the PLAYING
             * state. All rendered samples and events will be put in a queue so that the application
             * can pull them at its own rate.
             * Events can be pulled when the appsink is in the READY, PAUSED or PLAYING state.
             * 
             * Note that when the application does not pull samples fast enough, the
             * queued samples could consume a lot of memory, especially when dealing with
             * raw video frames. It's possible to control the behaviour of the queue with
             * the "drop" and "max-buffers" properties.
             * 
             * This function will only pull serialized events, excluding
             * the EOS event for which this functions returns
             * `null`. Use `gst_app_sink_is_eos()` to check for the EOS condition.
             * 
             * This signal is a variant of {@link GstApp.AppSink.SignalSignatures.try_pull_sample | GstApp.AppSink::try-pull-sample}: that can be used
             * to handle incoming events as well as samples.
             * 
             * Note that future releases may extend this API to return other object types
             * so make sure that your code is checking for the actual type it is handling.
             * @signal
             * @since 1.20
             * @action
             * @run-last
             */
            "try-pull-object": (arg0: number) => (Gst.MiniObject | null);
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
             * when calling `gst_app_sink_pull_sample()` or the "pull-sample" action signal.
             * 
             * If an EOS event was received before any buffers or the timeout expires,
             * this function returns `null`. Use gst_app_sink_is_eos () to check for the EOS
             * condition.
             * 
             * This function blocks until a preroll sample or EOS is received, the appsink
             * element is set to the READY/NULL state, or the timeout expires.
             * @signal
             * @since 1.10
             * @action
             * @run-last
             */
            "try-pull-preroll": (arg0: number) => (Gst.Sample | null);
            /**
             * This function blocks until a sample or EOS becomes available or the appsink
             * element is set to the READY/NULL state or the timeout expires.
             * 
             * This function will only return samples when the appsink is in the PLAYING
             * state. All rendered samples will be put in a queue so that the application
             * can pull samples at its own rate.
             * 
             * Note that when the application does not pull samples fast enough, the
             * queued samples could consume a lot of memory, especially when dealing with
             * raw video frames. It's possible to control the behaviour of the queue with
             * the "drop" and "max-buffers" properties.
             * 
             * If an EOS event was received before any buffers or the timeout expires,
             * this function returns `null`. Use gst_app_sink_is_eos () to check
             * for the EOS condition.
             * @signal
             * @since 1.10
             * @action
             * @run-last
             */
            "try-pull-sample": (arg0: number) => (Gst.Sample | null);
            "notify::buffer-list": (pspec: GObject.ParamSpec) => void;
            "notify::caps": (pspec: GObject.ParamSpec) => void;
            "notify::drop": (pspec: GObject.ParamSpec) => void;
            "notify::emit-signals": (pspec: GObject.ParamSpec) => void;
            "notify::eos": (pspec: GObject.ParamSpec) => void;
            "notify::max-buffers": (pspec: GObject.ParamSpec) => void;
            "notify::wait-on-eos": (pspec: GObject.ParamSpec) => void;
            "notify::async": (pspec: GObject.ParamSpec) => void;
            "notify::blocksize": (pspec: GObject.ParamSpec) => void;
            "notify::enable-last-sample": (pspec: GObject.ParamSpec) => void;
            "notify::last-sample": (pspec: GObject.ParamSpec) => void;
            "notify::max-bitrate": (pspec: GObject.ParamSpec) => void;
            "notify::max-lateness": (pspec: GObject.ParamSpec) => void;
            "notify::processing-deadline": (pspec: GObject.ParamSpec) => void;
            "notify::qos": (pspec: GObject.ParamSpec) => void;
            "notify::render-delay": (pspec: GObject.ParamSpec) => void;
            "notify::stats": (pspec: GObject.ParamSpec) => void;
            "notify::sync": (pspec: GObject.ParamSpec) => void;
            "notify::throttle-time": (pspec: GObject.ParamSpec) => void;
            "notify::ts-offset": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GstBase.BaseSink.ConstructorProps, Gst.URIHandler.ConstructorProps {
            buffer_list: boolean;
            bufferList: boolean;
            caps: (Gst.Caps | null);
            drop: boolean;
            emit_signals: boolean;
            emitSignals: boolean;
            eos: (boolean | any);
            max_buffers: number;
            maxBuffers: number;
            wait_on_eos: boolean;
            waitOnEos: boolean;
        }
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
     * `gst_app_sink_pull_sample()` and `gst_app_sink_pull_preroll()` methods.
     * These methods block until a sample becomes available in the sink or when the
     * sink is shut down or reaches EOS. There are also timed variants of these
     * methods, `gst_app_sink_try_pull_sample()` and `gst_app_sink_try_pull_preroll()`,
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
     * to `true` will make appsink emit the "new-sample" and "new-preroll" signals
     * when a sample can be pulled without blocking.
     * 
     * The "caps" property on appsink can be used to control the formats that
     * appsink can receive. This property can contain non-fixed caps, the format of
     * the pulled samples can be obtained by getting the sample caps.
     * 
     * If one of the pull-preroll or pull-sample methods return `null`, the appsink
     * is stopped or in the EOS state. You can check for the EOS state with the
     * "eos" property or with the `gst_app_sink_is_eos()` method.
     * 
     * The eos signal can also be used to be informed when the EOS state is reached
     * to avoid polling.
     * @gir-type Class
     */
    class AppSink extends GstBase.BaseSink implements Gst.URIHandler {
        static $gtype: GObject.GType<AppSink>;

        // Properties
        /**
         * @default false
         */
        get buffer_list(): boolean;
        set buffer_list(val: boolean);

        /**
         * @default false
         */
        get bufferList(): boolean;
        set bufferList(val: boolean);

        get caps(): (Gst.Caps | null);
        set caps(val: (Gst.Caps | null));

        /**
         * @default false
         */
        get drop(): boolean;
        set drop(val: boolean);

        /**
         * @default false
         */
        get emit_signals(): boolean;
        set emit_signals(val: boolean);

        /**
         * @default false
         */
        get emitSignals(): boolean;
        set emitSignals(val: boolean);

        /**
         * @read-only
         * @default true
         */
    // This accessor conflicts with a property or field in a parent class or interface.
         eos: boolean | any;

        /**
         * @default 0
         */
        get max_buffers(): number;
        set max_buffers(val: number);

        /**
         * @default 0
         */
        get maxBuffers(): number;
        set maxBuffers(val: number);

        /**
         * @default true
         */
        get wait_on_eos(): boolean;
        set wait_on_eos(val: boolean);

        /**
         * @default true
         */
        get waitOnEos(): boolean;
        set waitOnEos(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AppSink.SignalSignatures;

        // Fields
        basesink: GstBase.BaseSink;

        // Constructors
        constructor(properties?: Partial<AppSink.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof AppSink.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AppSink.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AppSink.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AppSink.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AppSink.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AppSink.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_eos(): void;

        /**
         * @virtual
         */
        vfunc_new_preroll(): Gst.FlowReturn;

        /**
         * @virtual
         */
        vfunc_new_sample(): Gst.FlowReturn;

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
         * when calling `gst_app_sink_pull_sample()`.
         * 
         * If an EOS event was received before any buffers, this function returns
         * `null`. Use gst_app_sink_is_eos () to check for the EOS condition.
         * 
         * This function blocks until a preroll sample or EOS is received or the appsink
         * element is set to the READY/NULL state.
         * @virtual
         */
        vfunc_pull_preroll(): (Gst.Sample | null);

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
         * `null`. Use gst_app_sink_is_eos () to check for the EOS condition.
         * @virtual
         */
        vfunc_pull_sample(): (Gst.Sample | null);

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
         * when calling `gst_app_sink_pull_sample()`.
         * 
         * If an EOS event was received before any buffers or the timeout expires,
         * this function returns `null`. Use gst_app_sink_is_eos () to check for the EOS
         * condition.
         * 
         * This function blocks until a preroll sample or EOS is received, the appsink
         * element is set to the READY/NULL state, or the timeout expires.
         * @param timeout the maximum amount of time to wait for the preroll sample
         * @virtual
         */
        vfunc_try_pull_preroll(timeout: Gst.ClockTime): (Gst.Sample | null);

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
         * this function returns `null`. Use gst_app_sink_is_eos () to check for the EOS
         * condition.
         * @param timeout the maximum amount of time to wait for a sample
         * @virtual
         */
        vfunc_try_pull_sample(timeout: Gst.ClockTime): (Gst.Sample | null);

        // Methods
        /**
         * Check if `appsink` supports buffer lists.
         * @returns `true` if `appsink` supports buffer lists.
         */
        get_buffer_list_support(): boolean;

        /**
         * Get the configured caps on `appsink`.
         * @returns the {@link Gst.Caps} accepted by the sink. `gst_caps_unref()` after usage.
         */
        get_caps(): (Gst.Caps | null);

        /**
         * Check if `appsink` will drop old buffers when the maximum amount of queued
         * buffers is reached.
         * @returns `true` if `appsink` is dropping old buffers when the queue is filled.
         */
        get_drop(): boolean;

        /**
         * Check if appsink will emit the "new-preroll" and "new-sample" signals.
         * @returns `true` if `appsink` is emitting the "new-preroll" and "new-sample" signals.
         */
        get_emit_signals(): boolean;

        /**
         * Get the maximum amount of buffers that can be queued in `appsink`.
         * @returns The maximum amount of buffers that can be queued.
         */
        get_max_buffers(): number;

        /**
         * Check if `appsink` will wait for all buffers to be consumed when an EOS is
         * received.
         * @returns `true` if `appsink` will wait for all buffers to be consumed when an EOS is received.
         */
        get_wait_on_eos(): boolean;

        /**
         * Check if `appsink` is EOS, which is when no more samples can be pulled because
         * an EOS event was received.
         * 
         * This function also returns `true` when the appsink is not in the PAUSED or
         * PLAYING state.
         * @returns `true` if no more samples can be pulled and the appsink is EOS.
         */
        is_eos(): boolean;

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
         * when calling `gst_app_sink_pull_sample()`.
         * 
         * If an EOS event was received before any buffers, this function returns
         * `null`. Use gst_app_sink_is_eos () to check for the EOS condition.
         * 
         * This function blocks until a preroll sample or EOS is received or the appsink
         * element is set to the READY/NULL state.
         * @returns a {@link Gst.Sample} or NULL when the appsink is stopped or EOS.          Call `gst_sample_unref()` after usage.
         */
        pull_preroll(): (Gst.Sample | null);

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
         * `null`. Use gst_app_sink_is_eos () to check for the EOS condition.
         * @returns a {@link Gst.Sample} or NULL when the appsink is stopped or EOS.          Call `gst_sample_unref()` after usage.
         */
        pull_sample(): (Gst.Sample | null);

        /**
         * Instruct `appsink` to enable or disable buffer list support.
         * 
         * For backwards-compatibility reasons applications need to opt in
         * to indicate that they will be able to handle buffer lists.
         * @param enable_lists enable or disable buffer list support
         */
        set_buffer_list_support(enable_lists: boolean): void;

        /**
         * Set the capabilities on the appsink element.  This function takes
         * a copy of the caps structure. After calling this method, the sink will only
         * accept caps that match `caps`. If `caps` is non-fixed, or incomplete,
         * you must check the caps on the samples to get the actual used caps.
         * @param caps caps to set
         */
        set_caps(caps: (Gst.Caps | null)): void;

        /**
         * Instruct `appsink` to drop old buffers when the maximum amount of queued
         * buffers is reached.
         * @param drop the new state
         */
        set_drop(drop: boolean): void;

        /**
         * Make appsink emit the "new-preroll" and "new-sample" signals. This option is
         * by default disabled because signal emission is expensive and unneeded when
         * the application prefers to operate in pull mode.
         * @param emit the new state
         */
        set_emit_signals(emit: boolean): void;

        /**
         * Set the maximum amount of buffers that can be queued in `appsink`. After this
         * amount of buffers are queued in appsink, any more buffers will block upstream
         * elements until a sample is pulled from `appsink`.
         * @param max the maximum number of buffers to queue
         */
        set_max_buffers(max: number): void;

        /**
         * Instruct `appsink` to wait for all buffers to be consumed when an EOS is received.
         * @param wait the new state
         */
        set_wait_on_eos(wait: boolean): void;

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
         * when calling `gst_app_sink_pull_sample()`.
         * 
         * If an EOS event was received before any buffers or the timeout expires,
         * this function returns `null`. Use gst_app_sink_is_eos () to check for the EOS
         * condition.
         * 
         * This function blocks until a preroll sample or EOS is received, the appsink
         * element is set to the READY/NULL state, or the timeout expires.
         * @param timeout the maximum amount of time to wait for the preroll sample
         * @returns a {@link Gst.Sample} or NULL when the appsink is stopped or EOS or the timeout expires.          Call `gst_sample_unref()` after usage.
         */
        try_pull_preroll(timeout: Gst.ClockTime): (Gst.Sample | null);

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
         * this function returns `null`. Use gst_app_sink_is_eos () to check for the EOS
         * condition.
         * @param timeout the maximum amount of time to wait for a sample
         * @returns a {@link Gst.Sample} or NULL when the appsink is stopped or EOS or the timeout expires.          Call `gst_sample_unref()` after usage.
         */
        try_pull_sample(timeout: Gst.ClockTime): (Gst.Sample | null);

        /**
         * Gets the list of protocols supported by `handler`. This list may not be
         * modified.
         * @returns the     supported protocols.  Returns `null` if the `handler` isn't     implemented properly, or the `handler` doesn't support any     protocols.
         */
        get_protocols(): (string[] | null);

        /**
         * Gets the currently handled URI.
         * @returns the URI currently handled by   the `handler`.  Returns `null` if there are no URI currently   handled. The returned string must be freed with `g_free()` when no   longer needed.
         */
        get_uri(): (string | null);

        /**
         * Gets the type of the given URI handler
         * @returns the {@link Gst.URIType} of the URI handler. Returns #GST_URI_UNKNOWN if the `handler` isn't implemented correctly.
         */
        get_uri_type(): Gst.URIType;

        /**
         * Tries to set the URI of the given handler.
         * @param uri URI to set
         * @returns `true` if the URI was set successfully, else `false`.
         */
        set_uri(uri: string): boolean;

        /**
         * Gets the currently handled URI.
         * @virtual
         */
        vfunc_get_uri(): (string | null);

        /**
         * Tries to set the URI of the given handler.
         * @param uri URI to set
         * @virtual
         */
        vfunc_set_uri(uri: string): boolean;

        /**
         * Increases the reference count of `object`.
         * 
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;

        /**
         * @param args 
         */
        // Conflicted with Gst.Object.ref
        ref(...args: never[]): any;

        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         * 
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
    }


    namespace AppSrc {
        // Signal signatures
        interface SignalSignatures extends GstBase.BaseSrc.SignalSignatures {
            /**
             * Notify `appsrc` that no more buffer are available.
             * @signal
             * @action
             * @run-last
             */
            "end-of-stream": () => Gst.FlowReturn;
            /**
             * Signal that the source has enough data. It is recommended that the
             * application stops calling push-buffer until the need-data signal is
             * emitted again to avoid excessive buffer queueing.
             * @signal
             * @run-last
             */
            "enough-data": () => void;
            /**
             * Signal that the source needs more data. In the callback or from another
             * thread you should call push-buffer or end-of-stream.
             * 
             * `length` is just a hint and when it is set to -1, any number of bytes can be
             * pushed into `appsrc`.
             * 
             * You can call push-buffer multiple times until the enough-data signal is
             * fired.
             * @signal
             * @run-last
             */
            "need-data": (arg0: number) => void;
            /**
             * Adds a buffer to the queue of buffers that the appsrc element will
             * push to its source pad.
             * 
             * This function does not take ownership of the buffer, but it takes a
             * reference so the buffer can be unreffed at any time after calling this
             * function.
             * 
             * When the block property is TRUE, this function can block until free space
             * becomes available in the queue.
             * @signal
             * @action
             * @run-last
             */
            "push-buffer": (arg0: Gst.Buffer) => Gst.FlowReturn;
            /**
             * Adds a buffer list to the queue of buffers and buffer lists that the
             * appsrc element will push to its source pad.
             * 
             * This function does not take ownership of the buffer list, but it takes a
             * reference so the buffer list can be unreffed at any time after calling
             * this function.
             * 
             * When the block property is TRUE, this function can block until free space
             * becomes available in the queue.
             * @signal
             * @since 1.14
             * @action
             * @run-last
             */
            "push-buffer-list": (arg0: Gst.BufferList) => Gst.FlowReturn;
            /**
             * Extract a buffer from the provided sample and adds the extracted buffer
             * to the queue of buffers that the appsrc element will
             * push to its source pad. This function set the appsrc caps based on the caps
             * in the sample and reset the caps if they change.
             * Only the caps and the buffer of the provided sample are used and not
             * for example the segment in the sample.
             * 
             * This function does not take ownership of the sample, but it takes a
             * reference so the sample can be unreffed at any time after calling this
             * function.
             * 
             * When the block property is TRUE, this function can block until free space
             * becomes available in the queue.
             * @signal
             * @since 1.6
             * @action
             * @run-last
             */
            "push-sample": (arg0: Gst.Sample) => Gst.FlowReturn;
            /**
             * Seek to the given offset. The next push-buffer should produce buffers from
             * the new `offset`.
             * This callback is only called for seekable stream types.
             * @signal
             * @run-last
             */
            "seek-data": (arg0: number) => (boolean | void);
            "notify::block": (pspec: GObject.ParamSpec) => void;
            "notify::caps": (pspec: GObject.ParamSpec) => void;
            "notify::current-level-buffers": (pspec: GObject.ParamSpec) => void;
            "notify::current-level-bytes": (pspec: GObject.ParamSpec) => void;
            "notify::current-level-time": (pspec: GObject.ParamSpec) => void;
            "notify::duration": (pspec: GObject.ParamSpec) => void;
            "notify::emit-signals": (pspec: GObject.ParamSpec) => void;
            "notify::format": (pspec: GObject.ParamSpec) => void;
            "notify::handle-segment-change": (pspec: GObject.ParamSpec) => void;
            "notify::is-live": (pspec: GObject.ParamSpec) => void;
            "notify::leaky-type": (pspec: GObject.ParamSpec) => void;
            "notify::max-buffers": (pspec: GObject.ParamSpec) => void;
            "notify::max-bytes": (pspec: GObject.ParamSpec) => void;
            "notify::max-latency": (pspec: GObject.ParamSpec) => void;
            "notify::max-time": (pspec: GObject.ParamSpec) => void;
            "notify::min-latency": (pspec: GObject.ParamSpec) => void;
            "notify::min-percent": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::stream-type": (pspec: GObject.ParamSpec) => void;
            "notify::automatic-eos": (pspec: GObject.ParamSpec) => void;
            "notify::blocksize": (pspec: GObject.ParamSpec) => void;
            "notify::do-timestamp": (pspec: GObject.ParamSpec) => void;
            "notify::num-buffers": (pspec: GObject.ParamSpec) => void;
            "notify::typefind": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GstBase.BaseSrc.ConstructorProps, Gst.URIHandler.ConstructorProps {
            block: boolean;
            caps: (Gst.Caps | null);
            current_level_buffers: (bigint | number);
            currentLevelBuffers: (bigint | number);
            current_level_bytes: (bigint | number);
            currentLevelBytes: (bigint | number);
            current_level_time: (bigint | number);
            currentLevelTime: (bigint | number);
            duration: (bigint | number);
            emit_signals: boolean;
            emitSignals: boolean;
            format: Gst.Format;
            handle_segment_change: boolean;
            handleSegmentChange: boolean;
            is_live: (boolean | any);
            isLive: boolean;
            leaky_type: AppLeakyType;
            leakyType: AppLeakyType;
            max_buffers: (bigint | number);
            maxBuffers: (bigint | number);
            max_bytes: (bigint | number);
            maxBytes: (bigint | number);
            max_latency: (bigint | number);
            maxLatency: (bigint | number);
            max_time: (bigint | number);
            maxTime: (bigint | number);
            min_latency: (bigint | number);
            minLatency: (bigint | number);
            min_percent: number;
            minPercent: number;
            size: (bigint | number);
            stream_type: AppStreamType;
            streamType: AppStreamType;
        }
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
     * `gst_app_src_push_buffer()` method or by emitting the push-buffer action signal.
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
     * `gst_app_src_end_of_stream()` or emit the end-of-stream action signal. After
     * this call, no more buffers can be pushed into appsrc until a flushing seek
     * occurs or the state of the appsrc has gone through READY.
     * @gir-type Class
     */
    class AppSrc extends GstBase.BaseSrc implements Gst.URIHandler {
        static $gtype: GObject.GType<AppSrc>;

        // Properties
        /**
         * When max-bytes are queued and after the enough-data signal has been emitted,
         * block any further push-buffer calls until the amount of queued bytes drops
         * below the max-bytes limit.
         * @default false
         */
        get block(): boolean;
        set block(val: boolean);

        /**
         * The GstCaps that will negotiated downstream and will be put
         * on outgoing buffers.
         */
        get caps(): (Gst.Caps | null);
        set caps(val: (Gst.Caps | null));

        /**
         * The number of currently queued buffers inside appsrc.
         * @since 1.20
         * @read-only
         * @default 0
         */
        get current_level_buffers(): number;

        /**
         * The number of currently queued buffers inside appsrc.
         * @since 1.20
         * @read-only
         * @default 0
         */
        get currentLevelBuffers(): number;

        /**
         * The number of currently queued bytes inside appsrc.
         * @since 1.2
         * @read-only
         * @default 0
         */
        get current_level_bytes(): number;

        /**
         * The number of currently queued bytes inside appsrc.
         * @since 1.2
         * @read-only
         * @default 0
         */
        get currentLevelBytes(): number;

        /**
         * The amount of currently queued time inside appsrc.
         * @since 1.20
         * @read-only
         * @default 0
         */
        get current_level_time(): number;

        /**
         * The amount of currently queued time inside appsrc.
         * @since 1.20
         * @read-only
         * @default 0
         */
        get currentLevelTime(): number;

        /**
         * The total duration in nanoseconds of the data stream. If the total duration is known, it
         * is recommended to configure it with this property.
         * @since 1.10
         * @default 18446744073709551615
         */
        get duration(): number;
        set duration(val: (bigint | number));

        /**
         * Make appsrc emit the "need-data", "enough-data" and "seek-data" signals.
         * This option is by default enabled for backwards compatibility reasons but
         * can disabled when needed because signal emission is expensive.
         * @default true
         */
        get emit_signals(): boolean;
        set emit_signals(val: boolean);

        /**
         * Make appsrc emit the "need-data", "enough-data" and "seek-data" signals.
         * This option is by default enabled for backwards compatibility reasons but
         * can disabled when needed because signal emission is expensive.
         * @default true
         */
        get emitSignals(): boolean;
        set emitSignals(val: boolean);

        /**
         * The format to use for segment events. When the source is producing
         * timestamped buffers this property should be set to GST_FORMAT_TIME.
         * @default Gst.Format.BYTES
         */
        get format(): Gst.Format;
        set format(val: Gst.Format);

        /**
         * When enabled, appsrc will check GstSegment in GstSample which was
         * pushed via `gst_app_src_push_sample()` or "push-sample" signal action.
         * If a GstSegment is changed, corresponding segment event will be followed
         * by next data flow.
         * 
         * FIXME: currently only GST_FORMAT_TIME format is supported and therefore
         * GstAppSrc::format should be time. However, possibly {@link GstApp.AppSrc} can support
         * other formats.
         * @since 1.18
         * @default false
         */
        get handle_segment_change(): boolean;
        set handle_segment_change(val: boolean);

        /**
         * When enabled, appsrc will check GstSegment in GstSample which was
         * pushed via `gst_app_src_push_sample()` or "push-sample" signal action.
         * If a GstSegment is changed, corresponding segment event will be followed
         * by next data flow.
         * 
         * FIXME: currently only GST_FORMAT_TIME format is supported and therefore
         * GstAppSrc::format should be time. However, possibly {@link GstApp.AppSrc} can support
         * other formats.
         * @since 1.18
         * @default false
         */
        get handleSegmentChange(): boolean;
        set handleSegmentChange(val: boolean);

        /**
         * Instruct the source to behave like a live source. This includes that it
         * will only push out buffers in the PLAYING state.
         * @default false
         */
    // This accessor conflicts with a field or function name in a parent class or interface.
         is_live: boolean | any;

        /**
         * Instruct the source to behave like a live source. This includes that it
         * will only push out buffers in the PLAYING state.
         * @default false
         */
        get isLive(): boolean;
        set isLive(val: boolean);

        /**
         * When set to any other value than GST_APP_LEAKY_TYPE_NONE then the appsrc
         * will drop any buffers that are pushed into it once its internal queue is
         * full. The selected type defines whether to drop the oldest or new
         * buffers.
         * @since 1.20
         * @default GstApp.AppLeakyType.NONE
         */
        get leaky_type(): AppLeakyType;
        set leaky_type(val: AppLeakyType);

        /**
         * When set to any other value than GST_APP_LEAKY_TYPE_NONE then the appsrc
         * will drop any buffers that are pushed into it once its internal queue is
         * full. The selected type defines whether to drop the oldest or new
         * buffers.
         * @since 1.20
         * @default GstApp.AppLeakyType.NONE
         */
        get leakyType(): AppLeakyType;
        set leakyType(val: AppLeakyType);

        /**
         * The maximum amount of buffers that can be queued internally.
         * After the maximum amount of buffers are queued, appsrc will emit the
         * "enough-data" signal.
         * @since 1.20
         * @default 0
         */
        get max_buffers(): number;
        set max_buffers(val: (bigint | number));

        /**
         * The maximum amount of buffers that can be queued internally.
         * After the maximum amount of buffers are queued, appsrc will emit the
         * "enough-data" signal.
         * @since 1.20
         * @default 0
         */
        get maxBuffers(): number;
        set maxBuffers(val: (bigint | number));

        /**
         * The maximum amount of bytes that can be queued internally.
         * After the maximum amount of bytes are queued, appsrc will emit the
         * "enough-data" signal.
         * @default 200000
         */
        get max_bytes(): number;
        set max_bytes(val: (bigint | number));

        /**
         * The maximum amount of bytes that can be queued internally.
         * After the maximum amount of bytes are queued, appsrc will emit the
         * "enough-data" signal.
         * @default 200000
         */
        get maxBytes(): number;
        set maxBytes(val: (bigint | number));

        /**
         * @default -1
         */
        get max_latency(): number;
        set max_latency(val: (bigint | number));

        /**
         * @default -1
         */
        get maxLatency(): number;
        set maxLatency(val: (bigint | number));

        /**
         * The maximum amount of time that can be queued internally.
         * After the maximum amount of time are queued, appsrc will emit the
         * "enough-data" signal.
         * @since 1.20
         * @default 0
         */
        get max_time(): number;
        set max_time(val: (bigint | number));

        /**
         * The maximum amount of time that can be queued internally.
         * After the maximum amount of time are queued, appsrc will emit the
         * "enough-data" signal.
         * @since 1.20
         * @default 0
         */
        get maxTime(): number;
        set maxTime(val: (bigint | number));

        /**
         * The minimum latency of the source. A value of -1 will use the default
         * latency calculations of {@link GstBase.BaseSrc}.
         * @default -1
         */
        get min_latency(): number;
        set min_latency(val: (bigint | number));

        /**
         * The minimum latency of the source. A value of -1 will use the default
         * latency calculations of {@link GstBase.BaseSrc}.
         * @default -1
         */
        get minLatency(): number;
        set minLatency(val: (bigint | number));

        /**
         * Make appsrc emit the "need-data" signal when the amount of bytes in the
         * queue drops below this percentage of max-bytes.
         * @default 0
         */
        get min_percent(): number;
        set min_percent(val: number);

        /**
         * Make appsrc emit the "need-data" signal when the amount of bytes in the
         * queue drops below this percentage of max-bytes.
         * @default 0
         */
        get minPercent(): number;
        set minPercent(val: number);

        /**
         * The total size in bytes of the data stream. If the total size is known, it
         * is recommended to configure it with this property.
         * @default -1
         */
        get size(): number;
        set size(val: (bigint | number));

        /**
         * The type of stream that this source is producing.  For seekable streams the
         * application should connect to the seek-data signal.
         * @default GstApp.AppStreamType.STREAM
         */
        get stream_type(): AppStreamType;
        set stream_type(val: AppStreamType);

        /**
         * The type of stream that this source is producing.  For seekable streams the
         * application should connect to the seek-data signal.
         * @default GstApp.AppStreamType.STREAM
         */
        get streamType(): AppStreamType;
        set streamType(val: AppStreamType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AppSrc.SignalSignatures;

        // Fields
        basesrc: GstBase.BaseSrc;

        // Constructors
        constructor(properties?: Partial<AppSrc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof AppSrc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AppSrc.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AppSrc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AppSrc.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AppSrc.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AppSrc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Indicates to the appsrc element that the last buffer queued in the
         * element is the last buffer of the stream.
         * @virtual
         */
        vfunc_end_of_stream(): Gst.FlowReturn;

        /**
         * @virtual
         */
        vfunc_enough_data(): void;

        /**
         * @param length 
         * @virtual
         */
        vfunc_need_data(length: number): void;

        /**
         * Adds a buffer to the queue of buffers that the appsrc element will
         * push to its source pad.  This function takes ownership of the buffer.
         * 
         * When the block property is TRUE, this function can block until free
         * space becomes available in the queue.
         * @param buffer a {@link Gst.Buffer} to push
         * @virtual
         */
        vfunc_push_buffer(buffer: Gst.Buffer): Gst.FlowReturn;

        /**
         * Adds a buffer list to the queue of buffers and buffer lists that the
         * appsrc element will push to its source pad.  This function takes ownership
         * of `buffer_list`.
         * 
         * When the block property is TRUE, this function can block until free
         * space becomes available in the queue.
         * @param buffer_list a {@link Gst.BufferList} to push
         * @virtual
         */
        vfunc_push_buffer_list(buffer_list: Gst.BufferList): Gst.FlowReturn;

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
         * @param sample a {@link Gst.Sample} from which buffer and caps may be extracted
         * @virtual
         */
        vfunc_push_sample(sample: Gst.Sample): Gst.FlowReturn;

        /**
         * @param offset 
         * @virtual
         */
        vfunc_seek_data(offset: number): boolean;

        // Methods
        /**
         * Indicates to the appsrc element that the last buffer queued in the
         * element is the last buffer of the stream.
         * @returns #GST_FLOW_OK when the EOS was successfully queued. #GST_FLOW_FLUSHING when `appsrc` is not PAUSED or PLAYING.
         */
        end_of_stream(): Gst.FlowReturn;

        /**
         * Get the configured caps on `appsrc`.
         * @returns the {@link Gst.Caps} produced by the source. `gst_caps_unref()` after usage.
         */
        get_caps(): (Gst.Caps | null);

        /**
         * Get the number of currently queued buffers inside `appsrc`.
         * @returns The number of currently queued buffers.
         */
        get_current_level_buffers(): number;

        /**
         * Get the number of currently queued bytes inside `appsrc`.
         * @returns The number of currently queued bytes.
         */
        get_current_level_bytes(): number;

        /**
         * Get the amount of currently queued time inside `appsrc`.
         * @returns The amount of currently queued time.
         */
        get_current_level_time(): Gst.ClockTime;

        /**
         * Get the duration of the stream in nanoseconds. A value of GST_CLOCK_TIME_NONE means that the duration is
         * not known.
         * @returns the duration of the stream previously set with `gst_app_src_set_duration()`;
         */
        get_duration(): Gst.ClockTime;

        /**
         * Check if appsrc will emit the "new-preroll" and "new-buffer" signals.
         * @returns `true` if `appsrc` is emitting the "new-preroll" and "new-buffer" signals.
         */
        get_emit_signals(): boolean;

        /**
         * Retrieve the min and max latencies in `min` and `max` respectively.
         */
        get_latency(): [number, number];

        /**
         * Returns the currently set {@link GstApp.AppLeakyType}. See `gst_app_src_set_leaky_type()`
         * for more details.
         * @returns The currently set {@link GstApp.AppLeakyType}.
         */
        get_leaky_type(): AppLeakyType;

        /**
         * Get the maximum amount of buffers that can be queued in `appsrc`.
         * @returns The maximum amount of buffers that can be queued.
         */
        get_max_buffers(): number;

        /**
         * Get the maximum amount of bytes that can be queued in `appsrc`.
         * @returns The maximum amount of bytes that can be queued.
         */
        get_max_bytes(): number;

        /**
         * Get the maximum amount of time that can be queued in `appsrc`.
         * @returns The maximum amount of time that can be queued.
         */
        get_max_time(): Gst.ClockTime;

        /**
         * Get the size of the stream in bytes. A value of -1 means that the size is
         * not known.
         * @returns the size of the stream previously set with `gst_app_src_set_size()`;
         */
        get_size(): number;

        /**
         * Get the stream type. Control the stream type of `appsrc`
         * with `gst_app_src_set_stream_type()`.
         * @returns the stream type.
         */
        get_stream_type(): AppStreamType;

        /**
         * Adds a buffer to the queue of buffers that the appsrc element will
         * push to its source pad.  This function takes ownership of the buffer.
         * 
         * When the block property is TRUE, this function can block until free
         * space becomes available in the queue.
         * @param buffer a {@link Gst.Buffer} to push
         * @returns #GST_FLOW_OK when the buffer was successfully queued. #GST_FLOW_FLUSHING when `appsrc` is not PAUSED or PLAYING. #GST_FLOW_EOS when EOS occurred.
         */
        push_buffer(buffer: Gst.Buffer): Gst.FlowReturn;

        /**
         * Adds a buffer list to the queue of buffers and buffer lists that the
         * appsrc element will push to its source pad.  This function takes ownership
         * of `buffer_list`.
         * 
         * When the block property is TRUE, this function can block until free
         * space becomes available in the queue.
         * @param buffer_list a {@link Gst.BufferList} to push
         * @returns #GST_FLOW_OK when the buffer list was successfully queued. #GST_FLOW_FLUSHING when `appsrc` is not PAUSED or PLAYING. #GST_FLOW_EOS when EOS occurred.
         */
        push_buffer_list(buffer_list: Gst.BufferList): Gst.FlowReturn;

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
         * @param sample a {@link Gst.Sample} from which buffer and caps may be extracted
         * @returns #GST_FLOW_OK when the buffer was successfully queued. #GST_FLOW_FLUSHING when `appsrc` is not PAUSED or PLAYING. #GST_FLOW_EOS when EOS occurred.
         */
        push_sample(sample: Gst.Sample): Gst.FlowReturn;

        /**
         * Set the capabilities on the appsrc element.  This function takes
         * a copy of the caps structure. After calling this method, the source will
         * only produce caps that match `caps`. `caps` must be fixed and the caps on the
         * buffers must match the caps or left NULL.
         * @param caps caps to set
         */
        set_caps(caps: (Gst.Caps | null)): void;

        /**
         * @param args 
         */
    // Conflicted with GstBase.BaseSrc.set_caps
        set_caps(...args: never[]): any;

        /**
         * Set the duration of the stream in nanoseconds. A value of GST_CLOCK_TIME_NONE means that the duration is
         * not known.
         * @param duration the duration to set
         */
        set_duration(duration: Gst.ClockTime): void;

        /**
         * Make appsrc emit the "new-preroll" and "new-buffer" signals. This option is
         * by default disabled because signal emission is expensive and unneeded when
         * the application prefers to operate in pull mode.
         * @param emit the new state
         */
        set_emit_signals(emit: boolean): void;

        /**
         * Configure the `min` and `max` latency in `src`. If `min` is set to -1, the
         * default latency calculations for pseudo-live sources will be used.
         * @param min the min latency
         * @param max the max latency
         */
        set_latency(min: (bigint | number), max: (bigint | number)): void;

        /**
         * When set to any other value than GST_APP_LEAKY_TYPE_NONE then the appsrc
         * will drop any buffers that are pushed into it once its internal queue is
         * full. The selected type defines whether to drop the oldest or new
         * buffers.
         * @param leaky the {@link GstApp.AppLeakyType}
         */
        set_leaky_type(leaky: AppLeakyType): void;

        /**
         * Set the maximum amount of buffers that can be queued in `appsrc`.
         * After the maximum amount of buffers are queued, `appsrc` will emit the
         * "enough-data" signal.
         * @param max the maximum number of buffers to queue
         */
        set_max_buffers(max: (bigint | number)): void;

        /**
         * Set the maximum amount of bytes that can be queued in `appsrc`.
         * After the maximum amount of bytes are queued, `appsrc` will emit the
         * "enough-data" signal.
         * @param max the maximum number of bytes to queue
         */
        set_max_bytes(max: (bigint | number)): void;

        /**
         * Set the maximum amount of time that can be queued in `appsrc`.
         * After the maximum amount of time are queued, `appsrc` will emit the
         * "enough-data" signal.
         * @param max the maximum amonut of time to queue
         */
        set_max_time(max: Gst.ClockTime): void;

        /**
         * Set the size of the stream in bytes. A value of -1 means that the size is
         * not known.
         * @param size the size to set
         */
        set_size(size: (bigint | number)): void;

        /**
         * Set the stream type on `appsrc`. For seekable streams, the "seek" signal must
         * be connected to.
         * 
         * A stream_type stream
         * @param type the new state
         */
        set_stream_type(type: AppStreamType): void;

        /**
         * Gets the list of protocols supported by `handler`. This list may not be
         * modified.
         * @returns the     supported protocols.  Returns `null` if the `handler` isn't     implemented properly, or the `handler` doesn't support any     protocols.
         */
        get_protocols(): (string[] | null);

        /**
         * Gets the currently handled URI.
         * @returns the URI currently handled by   the `handler`.  Returns `null` if there are no URI currently   handled. The returned string must be freed with `g_free()` when no   longer needed.
         */
        get_uri(): (string | null);

        /**
         * Gets the type of the given URI handler
         * @returns the {@link Gst.URIType} of the URI handler. Returns #GST_URI_UNKNOWN if the `handler` isn't implemented correctly.
         */
        get_uri_type(): Gst.URIType;

        /**
         * Tries to set the URI of the given handler.
         * @param uri URI to set
         * @returns `true` if the URI was set successfully, else `false`.
         */
        set_uri(uri: string): boolean;

        /**
         * Gets the currently handled URI.
         * @virtual
         */
        vfunc_get_uri(): (string | null);

        /**
         * Tries to set the URI of the given handler.
         * @param uri URI to set
         * @virtual
         */
        vfunc_set_uri(uri: string): boolean;

        /**
         * Increases the reference count of `object`.
         * 
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;

        /**
         * @param args 
         */
        // Conflicted with Gst.Object.ref
        ref(...args: never[]): any;

        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         * 
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
    }


    /**
     * @gir-type Alias
     */
    type AppSinkClass = typeof AppSink;

    /**
     * @gir-type Struct
     */
    abstract class AppSinkPrivate {
        static $gtype: GObject.GType<AppSinkPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type AppSrcClass = typeof AppSrc;

    /**
     * @gir-type Struct
     */
    abstract class AppSrcPrivate {
        static $gtype: GObject.GType<AppSrcPrivate>;
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

export default GstApp;

// END
