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
            'new-preroll': () => Gst.FlowReturn;
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
            'new-sample': () => Gst.FlowReturn;
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
            'new-serialized-event': () => boolean | void;
            /**
             * Signal that a new propose_allocation query is available.
             *
             * This signal is emitted from the streaming thread and only when the
             * "emit-signals" property is `true`.
             * @signal
             * @since 1.24
             * @run-last
             */
            'propose-allocation': (arg0: Gst.Query) => boolean | void;
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
            'pull-preroll': () => Gst.Sample | null;
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
            'pull-sample': () => Gst.Sample | null;
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
            'try-pull-object': (arg0: number) => Gst.MiniObject | null;
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
            'try-pull-preroll': (arg0: number) => Gst.Sample | null;
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
            'try-pull-sample': (arg0: number) => Gst.Sample | null;
            'notify::buffer-list': (pspec: GObject.ParamSpec) => void;
            'notify::caps': (pspec: GObject.ParamSpec) => void;
            'notify::drop': (pspec: GObject.ParamSpec) => void;
            'notify::emit-signals': (pspec: GObject.ParamSpec) => void;
            'notify::eos': (pspec: GObject.ParamSpec) => void;
            'notify::max-buffers': (pspec: GObject.ParamSpec) => void;
            'notify::wait-on-eos': (pspec: GObject.ParamSpec) => void;
            'notify::async': (pspec: GObject.ParamSpec) => void;
            'notify::blocksize': (pspec: GObject.ParamSpec) => void;
            'notify::enable-last-sample': (pspec: GObject.ParamSpec) => void;
            'notify::last-sample': (pspec: GObject.ParamSpec) => void;
            'notify::max-bitrate': (pspec: GObject.ParamSpec) => void;
            'notify::max-lateness': (pspec: GObject.ParamSpec) => void;
            'notify::processing-deadline': (pspec: GObject.ParamSpec) => void;
            'notify::qos': (pspec: GObject.ParamSpec) => void;
            'notify::render-delay': (pspec: GObject.ParamSpec) => void;
            'notify::stats': (pspec: GObject.ParamSpec) => void;
            'notify::sync': (pspec: GObject.ParamSpec) => void;
            'notify::throttle-time': (pspec: GObject.ParamSpec) => void;
            'notify::ts-offset': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GstBase.BaseSink.ConstructorProps, Gst.URIHandler.ConstructorProps {
            buffer_list: boolean;
            bufferList: boolean;
            caps: Gst.Caps;
            drop: boolean;
            emit_signals: boolean;
            emitSignals: boolean;
            eos: boolean | any;
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

        get buffer_list(): boolean;
        set buffer_list(val: boolean);
        get bufferList(): boolean;
        set bufferList(val: boolean);
        get caps(): Gst.Caps;
        set caps(val: Gst.Caps);
        get drop(): boolean;
        set drop(val: boolean);
        get emit_signals(): boolean;
        set emit_signals(val: boolean);
        get emitSignals(): boolean;
        set emitSignals(val: boolean);
        /**
         * @read-only
         */
        // This accessor conflicts with a property or field in a parent class or interface.
        eos: boolean | any;
        get max_buffers(): number;
        set max_buffers(val: number);
        get maxBuffers(): number;
        set maxBuffers(val: number);
        get wait_on_eos(): boolean;
        set wait_on_eos(val: boolean);
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
        connect<K extends keyof AppSink.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AppSink.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AppSink.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AppSink.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AppSink.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AppSink.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
        vfunc_pull_preroll(): Gst.Sample | null;
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
        vfunc_pull_sample(): Gst.Sample | null;
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
        vfunc_try_pull_preroll(timeout: Gst.ClockTime): Gst.Sample | null;
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
        vfunc_try_pull_sample(timeout: Gst.ClockTime): Gst.Sample | null;

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
        get_caps(): Gst.Caps | null;
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
        pull_preroll(): Gst.Sample | null;
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
        pull_sample(): Gst.Sample | null;
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
        set_caps(caps?: Gst.Caps | null): void;
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
        try_pull_preroll(timeout: Gst.ClockTime): Gst.Sample | null;
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
        try_pull_sample(timeout: Gst.ClockTime): Gst.Sample | null;
        /**
         * Gets the list of protocols supported by `handler`. This list may not be
         * modified.
         * @returns the     supported protocols.  Returns `null` if the `handler` isn't     implemented properly, or the `handler` doesn't support any     protocols.
         */
        get_protocols(): string[] | null;
        /**
         * Gets the currently handled URI.
         * @returns the URI currently handled by   the `handler`.  Returns `null` if there are no URI currently   handled. The returned string must be freed with `g_free()` when no   longer needed.
         */
        get_uri(): string | null;
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
        vfunc_get_uri(): string | null;
        /**
         * Tries to set the URI of the given handler.
         * @param uri URI to set
         * @virtual
         */
        vfunc_set_uri(uri: string): boolean;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
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
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
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
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    namespace AppSrc {
        // Signal signatures
        interface SignalSignatures extends GstBase.BaseSrc.SignalSignatures {
            /**
             * Notify `appsrc` that no more buffer are available.
             * @signal
             * @action
             * @run-last
             */
            'end-of-stream': () => Gst.FlowReturn;
            /**
             * Signal that the source has enough data. It is recommended that the
             * application stops calling push-buffer until the need-data signal is
             * emitted again to avoid excessive buffer queueing.
             * @signal
             * @run-last
             */
            'enough-data': () => void;
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
            'need-data': (arg0: number) => void;
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
            'push-buffer': (arg0: Gst.Buffer) => Gst.FlowReturn;
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
            'push-buffer-list': (arg0: Gst.BufferList) => Gst.FlowReturn;
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
            'push-sample': (arg0: Gst.Sample) => Gst.FlowReturn;
            /**
             * Seek to the given offset. The next push-buffer should produce buffers from
             * the new `offset`.
             * This callback is only called for seekable stream types.
             * @signal
             * @run-last
             */
            'seek-data': (arg0: number) => boolean | void;
            'notify::block': (pspec: GObject.ParamSpec) => void;
            'notify::caps': (pspec: GObject.ParamSpec) => void;
            'notify::current-level-buffers': (pspec: GObject.ParamSpec) => void;
            'notify::current-level-bytes': (pspec: GObject.ParamSpec) => void;
            'notify::current-level-time': (pspec: GObject.ParamSpec) => void;
            'notify::duration': (pspec: GObject.ParamSpec) => void;
            'notify::emit-signals': (pspec: GObject.ParamSpec) => void;
            'notify::format': (pspec: GObject.ParamSpec) => void;
            'notify::handle-segment-change': (pspec: GObject.ParamSpec) => void;
            'notify::is-live': (pspec: GObject.ParamSpec) => void;
            'notify::leaky-type': (pspec: GObject.ParamSpec) => void;
            'notify::max-buffers': (pspec: GObject.ParamSpec) => void;
            'notify::max-bytes': (pspec: GObject.ParamSpec) => void;
            'notify::max-latency': (pspec: GObject.ParamSpec) => void;
            'notify::max-time': (pspec: GObject.ParamSpec) => void;
            'notify::min-latency': (pspec: GObject.ParamSpec) => void;
            'notify::min-percent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::stream-type': (pspec: GObject.ParamSpec) => void;
            'notify::automatic-eos': (pspec: GObject.ParamSpec) => void;
            'notify::blocksize': (pspec: GObject.ParamSpec) => void;
            'notify::do-timestamp': (pspec: GObject.ParamSpec) => void;
            'notify::num-buffers': (pspec: GObject.ParamSpec) => void;
            'notify::typefind': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GstBase.BaseSrc.ConstructorProps, Gst.URIHandler.ConstructorProps {
            block: boolean;
            caps: Gst.Caps;
            current_level_buffers: number;
            currentLevelBuffers: number;
            current_level_bytes: number;
            currentLevelBytes: number;
            current_level_time: number;
            currentLevelTime: number;
            duration: number;
            emit_signals: boolean;
            emitSignals: boolean;
            format: Gst.Format;
            handle_segment_change: boolean;
            handleSegmentChange: boolean;
            is_live: boolean | any;
            isLive: boolean;
            leaky_type: AppLeakyType;
            leakyType: AppLeakyType;
            max_buffers: number;
            maxBuffers: number;
            max_bytes: number;
            maxBytes: number;
            max_latency: number;
            maxLatency: number;
            max_time: number;
            maxTime: number;
            min_latency: number;
            minLatency: number;
            min_percent: number;
            minPercent: number;
            size: number;
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
         */
        get block(): boolean;
        set block(val: boolean);
        /**
         * The GstCaps that will negotiated downstream and will be put
         * on outgoing buffers.
         */
        get caps(): Gst.Caps;
        set caps(val: Gst.Caps);
        /**
         * The number of currently queued buffers inside appsrc.
         * @since 1.20
         * @read-only
         */
        get current_level_buffers(): number;
        /**
         * The number of currently queued buffers inside appsrc.
         * @since 1.20
         * @read-only
         */
        get currentLevelBuffers(): number;
        /**
         * The number of currently queued bytes inside appsrc.
         * @since 1.2
         * @read-only
         */
        get current_level_bytes(): number;
        /**
         * The number of currently queued bytes inside appsrc.
         * @since 1.2
         * @read-only
         */
        get currentLevelBytes(): number;
        /**
         * The amount of currently queued time inside appsrc.
         * @since 1.20
         * @read-only
         */
        get current_level_time(): number;
        /**
         * The amount of currently queued time inside appsrc.
         * @since 1.20
         * @read-only
         */
        get currentLevelTime(): number;
        /**
         * The total duration in nanoseconds of the data stream. If the total duration is known, it
         * is recommended to configure it with this property.
         * @since 1.10
         */
        get duration(): number;
        set duration(val: number);
        /**
         * Make appsrc emit the "need-data", "enough-data" and "seek-data" signals.
         * This option is by default enabled for backwards compatibility reasons but
         * can disabled when needed because signal emission is expensive.
         */
        get emit_signals(): boolean;
        set emit_signals(val: boolean);
        /**
         * Make appsrc emit the "need-data", "enough-data" and "seek-data" signals.
         * This option is by default enabled for backwards compatibility reasons but
         * can disabled when needed because signal emission is expensive.
         */
        get emitSignals(): boolean;
        set emitSignals(val: boolean);
        /**
         * The format to use for segment events. When the source is producing
         * timestamped buffers this property should be set to GST_FORMAT_TIME.
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
         */
        get handleSegmentChange(): boolean;
        set handleSegmentChange(val: boolean);
        /**
         * Instruct the source to behave like a live source. This includes that it
         * will only push out buffers in the PLAYING state.
         */
        // This accessor conflicts with a field or function name in a parent class or interface.
        is_live: boolean | any;
        /**
         * Instruct the source to behave like a live source. This includes that it
         * will only push out buffers in the PLAYING state.
         */
        get isLive(): boolean;
        set isLive(val: boolean);
        /**
         * When set to any other value than GST_APP_LEAKY_TYPE_NONE then the appsrc
         * will drop any buffers that are pushed into it once its internal queue is
         * full. The selected type defines whether to drop the oldest or new
         * buffers.
         * @since 1.20
         */
        get leaky_type(): AppLeakyType;
        set leaky_type(val: AppLeakyType);
        /**
         * When set to any other value than GST_APP_LEAKY_TYPE_NONE then the appsrc
         * will drop any buffers that are pushed into it once its internal queue is
         * full. The selected type defines whether to drop the oldest or new
         * buffers.
         * @since 1.20
         */
        get leakyType(): AppLeakyType;
        set leakyType(val: AppLeakyType);
        /**
         * The maximum amount of buffers that can be queued internally.
         * After the maximum amount of buffers are queued, appsrc will emit the
         * "enough-data" signal.
         * @since 1.20
         */
        get max_buffers(): number;
        set max_buffers(val: number);
        /**
         * The maximum amount of buffers that can be queued internally.
         * After the maximum amount of buffers are queued, appsrc will emit the
         * "enough-data" signal.
         * @since 1.20
         */
        get maxBuffers(): number;
        set maxBuffers(val: number);
        /**
         * The maximum amount of bytes that can be queued internally.
         * After the maximum amount of bytes are queued, appsrc will emit the
         * "enough-data" signal.
         */
        get max_bytes(): number;
        set max_bytes(val: number);
        /**
         * The maximum amount of bytes that can be queued internally.
         * After the maximum amount of bytes are queued, appsrc will emit the
         * "enough-data" signal.
         */
        get maxBytes(): number;
        set maxBytes(val: number);
        get max_latency(): number;
        set max_latency(val: number);
        get maxLatency(): number;
        set maxLatency(val: number);
        /**
         * The maximum amount of time that can be queued internally.
         * After the maximum amount of time are queued, appsrc will emit the
         * "enough-data" signal.
         * @since 1.20
         */
        get max_time(): number;
        set max_time(val: number);
        /**
         * The maximum amount of time that can be queued internally.
         * After the maximum amount of time are queued, appsrc will emit the
         * "enough-data" signal.
         * @since 1.20
         */
        get maxTime(): number;
        set maxTime(val: number);
        /**
         * The minimum latency of the source. A value of -1 will use the default
         * latency calculations of {@link GstBase.BaseSrc}.
         */
        get min_latency(): number;
        set min_latency(val: number);
        /**
         * The minimum latency of the source. A value of -1 will use the default
         * latency calculations of {@link GstBase.BaseSrc}.
         */
        get minLatency(): number;
        set minLatency(val: number);
        /**
         * Make appsrc emit the "need-data" signal when the amount of bytes in the
         * queue drops below this percentage of max-bytes.
         */
        get min_percent(): number;
        set min_percent(val: number);
        /**
         * Make appsrc emit the "need-data" signal when the amount of bytes in the
         * queue drops below this percentage of max-bytes.
         */
        get minPercent(): number;
        set minPercent(val: number);
        /**
         * The total size in bytes of the data stream. If the total size is known, it
         * is recommended to configure it with this property.
         */
        get size(): number;
        set size(val: number);
        /**
         * The type of stream that this source is producing.  For seekable streams the
         * application should connect to the seek-data signal.
         */
        get stream_type(): AppStreamType;
        set stream_type(val: AppStreamType);
        /**
         * The type of stream that this source is producing.  For seekable streams the
         * application should connect to the seek-data signal.
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
        connect<K extends keyof AppSrc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AppSrc.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AppSrc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AppSrc.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AppSrc.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AppSrc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
        get_caps(): Gst.Caps | null;
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
        set_caps(caps?: Gst.Caps | null): void;
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
        set_latency(min: number, max: number): void;
        /**
         * When set to any other value than GST_APP_LEAKY_TYPE_NONE then the appsrc
         * will drop any buffers that are pushed into it once its internal queue is
         * full. The selected type defines whether to drop the oldest or new
         * buffers.
         * @param leaky the {@link GstApp.AppLeakyType}
         */
        set_leaky_type(leaky: AppLeakyType | null): void;
        /**
         * Set the maximum amount of buffers that can be queued in `appsrc`.
         * After the maximum amount of buffers are queued, `appsrc` will emit the
         * "enough-data" signal.
         * @param max the maximum number of buffers to queue
         */
        set_max_buffers(max: number): void;
        /**
         * Set the maximum amount of bytes that can be queued in `appsrc`.
         * After the maximum amount of bytes are queued, `appsrc` will emit the
         * "enough-data" signal.
         * @param max the maximum number of bytes to queue
         */
        set_max_bytes(max: number): void;
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
        set_size(size: number): void;
        /**
         * Set the stream type on `appsrc`. For seekable streams, the "seek" signal must
         * be connected to.
         *
         * A stream_type stream
         * @param type the new state
         */
        set_stream_type(type: AppStreamType | null): void;
        /**
         * Gets the list of protocols supported by `handler`. This list may not be
         * modified.
         * @returns the     supported protocols.  Returns `null` if the `handler` isn't     implemented properly, or the `handler` doesn't support any     protocols.
         */
        get_protocols(): string[] | null;
        /**
         * Gets the currently handled URI.
         * @returns the URI currently handled by   the `handler`.  Returns `null` if there are no URI currently   handled. The returned string must be freed with `g_free()` when no   longer needed.
         */
        get_uri(): string | null;
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
        vfunc_get_uri(): string | null;
        /**
         * Tries to set the URI of the given handler.
         * @param uri URI to set
         * @virtual
         */
        vfunc_set_uri(uri: string): boolean;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
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
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
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
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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
