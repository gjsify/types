/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gstapp-1.0-ambient.d.ts';
import './gstapp-1.0-import.d.ts';
/**
 * GstApp-1.0
 */

import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

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
    module AppSink {
        // Signal callback interfaces

        interface Eos {
            (): void;
        }

        interface NewPreroll {
            (): Gst.FlowReturn;
        }

        interface NewSample {
            (): Gst.FlowReturn;
        }

        interface NewSerializedEvent {
            (): boolean;
        }

        interface ProposeAllocation {
            (query: Gst.Query): boolean;
        }

        interface PullPreroll {
            (): Gst.Sample | null;
        }

        interface PullSample {
            (): Gst.Sample | null;
        }

        interface TryPullObject {
            (timeout: number): Gst.MiniObject | null;
        }

        interface TryPullPreroll {
            (timeout: number): Gst.Sample | null;
        }

        interface TryPullSample {
            (timeout: number): Gst.Sample | null;
        }

        // Constructor properties interface
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
     */
    class AppSink extends GstBase.BaseSink {
        // Own properties of GstApp-1.0.AppSink

        buffer_list: boolean;
        bufferList: boolean;
        caps: Gst.Caps;
        drop: boolean;
        emit_signals: boolean;
        emitSignals: boolean;
        readonly eos: boolean;
        max_buffers: number;
        maxBuffers: number;
        wait_on_eos: boolean;
        waitOnEos: boolean;

        // Own fields of GstApp-1.0.AppSink

        basesink: GstBase.BaseSink;

        // Owm methods of GstApp-1.0.AppSink

        /**
         * Check if `appsink` supports buffer lists.
         * @returns %TRUE if @appsink supports buffer lists.
         */
        get_buffer_list_support(): boolean;
        /**
         * Get the configured caps on `appsink`.
         * @returns the #GstCaps accepted by the sink. gst_caps_unref() after usage.
         */
        get_caps(): Gst.Caps | null;
        /**
         * Check if `appsink` will drop old buffers when the maximum amount of queued
         * buffers is reached.
         * @returns %TRUE if @appsink is dropping old buffers when the queue is filled.
         */
        get_drop(): boolean;
        /**
         * Check if appsink will emit the "new-preroll" and "new-sample" signals.
         * @returns %TRUE if @appsink is emitting the "new-preroll" and "new-sample" signals.
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
         * @returns %TRUE if @appsink will wait for all buffers to be consumed when an EOS is received.
         */
        get_wait_on_eos(): boolean;
        /**
         * Check if `appsink` is EOS, which is when no more samples can be pulled because
         * an EOS event was received.
         *
         * This function also returns %TRUE when the appsink is not in the PAUSED or
         * PLAYING state.
         * @returns %TRUE if no more samples can be pulled and the appsink is EOS.
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
         * when calling gst_app_sink_pull_sample().
         *
         * If an EOS event was received before any buffers, this function returns
         * %NULL. Use gst_app_sink_is_eos () to check for the EOS condition.
         *
         * This function blocks until a preroll sample or EOS is received or the appsink
         * element is set to the READY/NULL state.
         * @returns a #GstSample or NULL when the appsink is stopped or EOS.          Call gst_sample_unref() after usage.
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
         * %NULL. Use gst_app_sink_is_eos () to check for the EOS condition.
         * @returns a #GstSample or NULL when the appsink is stopped or EOS.          Call gst_sample_unref() after usage.
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
         * this function returns %NULL. Use gst_app_sink_is_eos () to check for the EOS
         * condition.
         * @param timeout the maximum amount of time to wait for a sample
         * @returns a #GstSample or NULL when the appsink is stopped or EOS or the timeout expires.          Call gst_sample_unref() after usage.
         */
        try_pull_sample(timeout: Gst.ClockTime): Gst.Sample | null;
    }

    module AppSrc {
        // Signal callback interfaces

        interface EndOfStream {
            (): Gst.FlowReturn;
        }

        interface EnoughData {
            (): void;
        }

        interface NeedData {
            (length: number): void;
        }

        interface PushBuffer {
            (buffer: Gst.Buffer): Gst.FlowReturn;
        }

        interface PushBufferList {
            (buffer_list: Gst.BufferList): Gst.FlowReturn;
        }

        interface PushSample {
            (sample: Gst.Sample): Gst.FlowReturn;
        }

        interface SeekData {
            (offset: number): boolean;
        }

        // Constructor properties interface
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
     */
    class AppSrc extends GstBase.BaseSrc {
        // Own properties of GstApp-1.0.AppSrc

        /**
         * When max-bytes are queued and after the enough-data signal has been emitted,
         * block any further push-buffer calls until the amount of queued bytes drops
         * below the max-bytes limit.
         */
        block: boolean;
        /**
         * The GstCaps that will negotiated downstream and will be put
         * on outgoing buffers.
         */
        caps: Gst.Caps;
        /**
         * The number of currently queued buffers inside appsrc.
         */
        readonly current_level_buffers: number;
        /**
         * The number of currently queued buffers inside appsrc.
         */
        readonly currentLevelBuffers: number;
        /**
         * The number of currently queued bytes inside appsrc.
         */
        readonly current_level_bytes: number;
        /**
         * The number of currently queued bytes inside appsrc.
         */
        readonly currentLevelBytes: number;
        /**
         * The amount of currently queued time inside appsrc.
         */
        readonly current_level_time: number;
        /**
         * The amount of currently queued time inside appsrc.
         */
        readonly currentLevelTime: number;
        /**
         * The total duration in nanoseconds of the data stream. If the total duration is known, it
         * is recommended to configure it with this property.
         */
        duration: number;
        /**
         * Make appsrc emit the "need-data", "enough-data" and "seek-data" signals.
         * This option is by default enabled for backwards compatibility reasons but
         * can disabled when needed because signal emission is expensive.
         */
        emit_signals: boolean;
        /**
         * Make appsrc emit the "need-data", "enough-data" and "seek-data" signals.
         * This option is by default enabled for backwards compatibility reasons but
         * can disabled when needed because signal emission is expensive.
         */
        emitSignals: boolean;
        /**
         * The format to use for segment events. When the source is producing
         * timestamped buffers this property should be set to GST_FORMAT_TIME.
         */
        format: Gst.Format;
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
        handle_segment_change: boolean;
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
        handleSegmentChange: boolean;
        /**
         * Instruct the source to behave like a live source. This includes that it
         * will only push out buffers in the PLAYING state.
         */
        is_live: boolean;
        /**
         * Instruct the source to behave like a live source. This includes that it
         * will only push out buffers in the PLAYING state.
         */
        isLive: boolean;
        /**
         * When set to any other value than GST_APP_LEAKY_TYPE_NONE then the appsrc
         * will drop any buffers that are pushed into it once its internal queue is
         * full. The selected type defines whether to drop the oldest or new
         * buffers.
         */
        leaky_type: AppLeakyType;
        /**
         * When set to any other value than GST_APP_LEAKY_TYPE_NONE then the appsrc
         * will drop any buffers that are pushed into it once its internal queue is
         * full. The selected type defines whether to drop the oldest or new
         * buffers.
         */
        leakyType: AppLeakyType;
        /**
         * The maximum amount of buffers that can be queued internally.
         * After the maximum amount of buffers are queued, appsrc will emit the
         * "enough-data" signal.
         */
        max_buffers: number;
        /**
         * The maximum amount of buffers that can be queued internally.
         * After the maximum amount of buffers are queued, appsrc will emit the
         * "enough-data" signal.
         */
        maxBuffers: number;
        /**
         * The maximum amount of bytes that can be queued internally.
         * After the maximum amount of bytes are queued, appsrc will emit the
         * "enough-data" signal.
         */
        max_bytes: number;
        /**
         * The maximum amount of bytes that can be queued internally.
         * After the maximum amount of bytes are queued, appsrc will emit the
         * "enough-data" signal.
         */
        maxBytes: number;
        max_latency: number;
        maxLatency: number;
        /**
         * The maximum amount of time that can be queued internally.
         * After the maximum amount of time are queued, appsrc will emit the
         * "enough-data" signal.
         */
        max_time: number;
        /**
         * The maximum amount of time that can be queued internally.
         * After the maximum amount of time are queued, appsrc will emit the
         * "enough-data" signal.
         */
        maxTime: number;
        /**
         * The minimum latency of the source. A value of -1 will use the default
         * latency calculations of #GstBaseSrc.
         */
        min_latency: number;
        /**
         * The minimum latency of the source. A value of -1 will use the default
         * latency calculations of #GstBaseSrc.
         */
        minLatency: number;
        /**
         * Make appsrc emit the "need-data" signal when the amount of bytes in the
         * queue drops below this percentage of max-bytes.
         */
        min_percent: number;
        /**
         * Make appsrc emit the "need-data" signal when the amount of bytes in the
         * queue drops below this percentage of max-bytes.
         */
        minPercent: number;
        /**
         * The total size in bytes of the data stream. If the total size is known, it
         * is recommended to configure it with this property.
         */
        size: number;
        /**
         * The type of stream that this source is producing.  For seekable streams the
         * application should connect to the seek-data signal.
         */
        stream_type: AppStreamType;
        /**
         * The type of stream that this source is producing.  For seekable streams the
         * application should connect to the seek-data signal.
         */
        streamType: AppStreamType;

        // Own fields of GstApp-1.0.AppSrc

        basesrc: GstBase.BaseSrc;

        // Owm methods of GstApp-1.0.AppSrc

        /**
         * Indicates to the appsrc element that the last buffer queued in the
         * element is the last buffer of the stream.
         * @returns #GST_FLOW_OK when the EOS was successfully queued. #GST_FLOW_FLUSHING when @appsrc is not PAUSED or PLAYING.
         */
        end_of_stream(): Gst.FlowReturn;
        /**
         * Get the configured caps on `appsrc`.
         * @returns the #GstCaps produced by the source. gst_caps_unref() after usage.
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
         * @returns the duration of the stream previously set with gst_app_src_set_duration();
         */
        get_duration(): Gst.ClockTime;
        /**
         * Check if appsrc will emit the "new-preroll" and "new-buffer" signals.
         * @returns %TRUE if @appsrc is emitting the "new-preroll" and "new-buffer" signals.
         */
        get_emit_signals(): boolean;
        /**
         * Retrieve the min and max latencies in `min` and `max` respectively.
         */
        get_latency(): void;
        /**
         * Returns the currently set #GstAppLeakyType. See gst_app_src_set_leaky_type()
         * for more details.
         * @returns The currently set #GstAppLeakyType.
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
         * @returns the size of the stream previously set with gst_app_src_set_size();
         */
        get_size(): number;
        /**
         * Get the stream type. Control the stream type of `appsrc`
         * with gst_app_src_set_stream_type().
         * @returns the stream type.
         */
        get_stream_type(): AppStreamType;
        /**
         * Adds a buffer to the queue of buffers that the appsrc element will
         * push to its source pad.  This function takes ownership of the buffer.
         *
         * When the block property is TRUE, this function can block until free
         * space becomes available in the queue.
         * @param buffer a #GstBuffer to push
         * @returns #GST_FLOW_OK when the buffer was successfully queued. #GST_FLOW_FLUSHING when @appsrc is not PAUSED or PLAYING. #GST_FLOW_EOS when EOS occurred.
         */
        push_buffer(buffer: Gst.Buffer): Gst.FlowReturn;
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
         * @param sample a #GstSample from which buffer and caps may be extracted
         * @returns #GST_FLOW_OK when the buffer was successfully queued. #GST_FLOW_FLUSHING when @appsrc is not PAUSED or PLAYING. #GST_FLOW_EOS when EOS occurred.
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
         * @param leaky the #GstAppLeakyType
         */
        set_leaky_type(leaky: AppLeakyType): void;
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
        set_stream_type(type: AppStreamType): void;
    }

    class AppSinkClass {}

    class AppSinkPrivate {}

    class AppSrcClass {}

    class AppSrcPrivate {}

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
