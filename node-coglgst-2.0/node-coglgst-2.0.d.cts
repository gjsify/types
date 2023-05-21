
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-coglgst-2.0-import.d.ts';
    
/**
 * CoglGst-2.0
 */

import type GstBase from '@girs/node-gstbase-1.0';
import type Gst from '@girs/node-gst-1.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GModule from '@girs/node-gmodule-2.0';
import type Cogl from '@girs/node-cogl-2.0';
import type GL from '@girs/node-gl-1.0';

export module VideoSink {

    // Signal callback interfaces

    /**
     * Signal callback interface for `new-frame`
     */
    export interface NewFrameSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `pipeline-ready`
     */
    export interface PipelineReadySignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GstBase.BaseSink.ConstructorProperties {

        // Own constructor properties of CoglGst-2.0.CoglGst.VideoSink

        updatePriority?: number | null
    }

}

export interface VideoSink {

    // Own properties of CoglGst-2.0.CoglGst.VideoSink

    updatePriority: number
    __gtype__: number

    // Conflicting properties

    object: any

    // Owm methods of CoglGst-2.0.CoglGst.VideoSink

    /**
     * Updates the given pipeline with the textures for the current frame.
     * This can be used if the application wants to customize the
     * rendering using its own pipeline. Typically this would be called in
     * response to the #CoglGstVideoSink::new-frame signal which is
     * emitted whenever the new textures are available. The application
     * would then make a copy of its template pipeline and call this to
     * set the textures.
     * @param pln A #CoglPipeline
     */
    attachFrame(pln: Cogl.Pipeline): void
    /**
     * Calculates a suitable `output` rectangle that can fit inside the
     * `available` space while maintaining the aspect ratio of the current
     * video.
     * 
     * Applications would typically use this api for "letterboxing" by
     * using this api to position a video inside a fixed screen space and
     * filling the remaining space with black borders.
     * @param available The space available for video output
     * @param output The return location for the calculated output position
     */
    fitSize(available: Rectangle, output: Rectangle): /* output */ Rectangle
    /**
     * Returns a width-for-height aspect ratio that lets you calculate a
     * suitable width for displaying your video based on a given height by
     * multiplying your chosen height by the returned aspect ratio.
     * 
     * This aspect ratio is calculated based on the underlying size of the
     * video buffers and the current pixel-aspect-ratio.
     * @returns a width-for-height aspect ratio
     */
    getAspect(): number
    /**
     * This can be used when doing specialised rendering of the video by
     * customizing the pipeline. #CoglGstVideoSink may use up to three
     * private layers on the pipeline in order to attach the textures of
     * the video frame. This function will return the index of the next
     * available unused layer after the sink's internal layers. This can
     * be used by the application to add additional layers, for example to
     * blend in another color in the fragment processing.
     * @returns the index of the next available layer after the   sink's internal layers.
     */
    getFreeLayer(): number
    /**
     * Calculates a suitable output height for a specific output `width`
     * that will maintain the video's aspect ratio.
     * @param width A specific output `width`
     * @returns An output height for the given output @width.
     */
    getHeightForWidth(width: number): number
    /**
     * Considering the real resolution of the video as well as the aspect
     * ratio of pixel data that may need to be stretched when being displayed;
     * this function calculates what the natural size of the underlying
     * video source is, and returns its height.
     * 
     * The natural size has the correct aspect ratio for displaying the
     * video and is the minimum size where downscaling is not required.
     * 
     * <note>This natural size is calculated assuming that the video will
     * be displayed on square pixels.</note>
     * @returns The video's natural height
     */
    getNaturalHeight(): number
    /**
     * Considering the real resolution of the video as well as the aspect
     * ratio of pixel data that may need to be stretched when being displayed;
     * this function calculates what the natural size of the underlying
     * video source is.
     * 
     * The natural size has the correct aspect ratio for displaying the
     * video and is the minimum size where downscaling is not required.
     * 
     * <note>This natural size is calculated assuming that the video will
     * be displayed on square pixels.</note>
     */
    getNaturalSize(): [ /* width */ number, /* height */ number ]
    /**
     * Considering the real resolution of the video as well as the aspect
     * ratio of pixel data that may need to be stretched when being displayed;
     * this function calculates what the natural size of the underlying
     * video source is, and returns its width.
     * 
     * The natural size has the correct aspect ratio for displaying the
     * video and is the minimum size where downscaling is not required.
     * 
     * <note>This natural size is calculated assuming that the video will
     * be displayed on square pixels.</note>
     * @returns The video's natural width
     */
    getNaturalWidth(): number
    /**
     * Returns a pipeline suitable for rendering the current frame of the
     * given video sink. The pipeline will already have the textures for
     * the frame attached. For simple rendering, an application will
     * typically call this function immediately before it paints the
     * video. It can then just paint a rectangle using the returned
     * pipeline.
     * 
     * An application is free to make a copy of this
     * pipeline and modify it for custom rendering.
     * 
     * Note: it is considered an error to call this function before the
     * #CoglGstVideoSink::pipeline-ready signal is emitted.
     * @returns the pipeline for rendering the   current frame
     */
    getPipeline(): Cogl.Pipeline
    /**
     * Calculates a suitable output width for a specific output `height`
     * that will maintain the video's aspect ratio.
     * @param height A specific output `height`
     * @returns An output width for the given output @height.
     */
    getWidthForHeight(height: number): number
    /**
     * Returns whether the pipeline is ready and so
     * cogl_gst_video_sink_get_pipeline() and
     * cogl_gst_video_sink_setup_pipeline() can be called without causing error.
     * 
     * Note: Normally an application will wait until the
     * #CoglGstVideoSink::pipeline-ready signal is emitted instead of
     * polling the ready status with this api, but sometimes when a sink
     * is passed between components that didn't have an opportunity to
     * connect a signal handler this can be useful.
     * @returns %TRUE if the sink is ready, else %FALSE
     */
    isReady(): Cogl.Bool
    /**
     * Sets the #CoglContext that the video sink should use for creating
     * any resources. This function would normally only be used if the
     * sink was constructed via gst_element_factory_make() instead of
     * cogl_gst_video_sink_new().
     * @param ctx The #CoglContext for the sink to use
     */
    setContext(ctx: Cogl.Context): void

    // Overloads of setContext

    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     * @virtual 
     * @param context the #GstContext to set.
     */
    setContext(context: Gst.Context): void
    /**
     * By default the pipeline generated by
     * cogl_gst_video_sink_setup_pipeline() and
     * cogl_gst_video_sink_get_pipeline() will have a layer with a shader
     * snippet that automatically samples the video. If the application
     * wants to sample the video in a completely custom way using its own
     * shader snippet it can set `default_sample` to %FALSE to avoid this
     * default snippet being added. In that case the application's snippet
     * can call cogl_gst_sample_video0 to sample the texture itself.
     * @param defaultSample Whether to add the default sampling
     */
    setDefaultSample(defaultSample: Cogl.Bool): void
    /**
     * Sets the index of the first layer that the sink will use for its
     * rendering. This is useful if the application wants to have custom
     * layers that appear before the layers added by the sink. In that
     * case by default the sink's layers will be modulated with the result
     * of the application's layers that come before `first_layer`.
     * 
     * Note that if this function is called then the name of the function
     * to call in the shader snippets to sample the video will also
     * change. For example, if `first_layer` is three then the function
     * will be cogl_gst_sample_video3.
     * @param firstLayer The new first layer
     */
    setFirstLayer(firstLayer: number): void
    /**
     * Configures the given pipeline so that will be able to render the
     * video for the `sink`. This should only be used if the application
     * wants to perform some custom rendering using its own pipeline.
     * Typically an application will call this in response to the
     * #CoglGstVideoSink::pipeline-ready signal.
     * 
     * Note: it is considered an error to call this function before the
     * #CoglGstVideoSink::pipeline-ready signal is emitted.
     * @param pipeline A #CoglPipeline
     */
    setupPipeline(pipeline: Cogl.Pipeline): void

    // Conflicting methods

    query(query: Gst.Query): boolean

    // Overloads of query

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
    query(query: Gst.Query): boolean
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
    query(query: Gst.Query): boolean
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

    // Own virtual methods of CoglGst-2.0.CoglGst.VideoSink

    newFrame(): void
    pipelineReady(): void

    // Own signals of CoglGst-2.0.CoglGst.VideoSink

    connect(sigName: "new-frame", callback: VideoSink.NewFrameSignalCallback): number
    on(sigName: "new-frame", callback: VideoSink.NewFrameSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-frame", callback: VideoSink.NewFrameSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-frame", callback: VideoSink.NewFrameSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-frame", ...args: any[]): void
    connect(sigName: "pipeline-ready", callback: VideoSink.PipelineReadySignalCallback): number
    on(sigName: "pipeline-ready", callback: VideoSink.PipelineReadySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pipeline-ready", callback: VideoSink.PipelineReadySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pipeline-ready", callback: VideoSink.PipelineReadySignalCallback): NodeJS.EventEmitter
    emit(sigName: "pipeline-ready", ...args: any[]): void

    // Class property signals of CoglGst-2.0.CoglGst.VideoSink

    connect(sigName: "notify::update-priority", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-priority", ...args: any[]): void
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
 * The #CoglGstVideoSink structure contains only private data and
 * should be accessed using the provided API.
 * @class 
 */
export class VideoSink extends GstBase.BaseSink {

    // Own properties of CoglGst-2.0.CoglGst.VideoSink

    static name: string

    // Constructors of CoglGst-2.0.CoglGst.VideoSink

    constructor(config?: VideoSink.ConstructorProperties) 
    /**
     * Creates a new #CoglGstVideoSink which will create resources for use
     * with the given context.
     * @constructor 
     * @param ctx The #CoglContext
     * @returns a new #CoglGstVideoSink
     */
    constructor(ctx: Cogl.Context) 
    /**
     * Creates a new #CoglGstVideoSink which will create resources for use
     * with the given context.
     * @constructor 
     * @param ctx The #CoglContext
     * @returns a new #CoglGstVideoSink
     */
    static new(ctx: Cogl.Context): VideoSink
    _init(config?: VideoSink.ConstructorProperties): void
}

export interface Rectangle {

    // Own fields of CoglGst-2.0.CoglGst.Rectangle

    /**
     * The X coordinate of the top left of the rectangle
     * @field 
     */
    x: number
    /**
     * The Y coordinate of the top left of the rectangle
     * @field 
     */
    y: number
    /**
     * The width of the rectangle
     * @field 
     */
    width: number
    /**
     * The height of the rectangle
     * @field 
     */
    height: number
}

/**
 * Describes a rectangle that can be used for video output.
 * @record 
 */
export class Rectangle {

    // Own properties of CoglGst-2.0.CoglGst.Rectangle

    static name: string
}

export interface VideoSinkClass {

    // Own fields of CoglGst-2.0.CoglGst.VideoSinkClass

    newFrame: (sink: VideoSink) => void
    pipelineReady: (sink: VideoSink) => void
}

export abstract class VideoSinkClass {

    // Own properties of CoglGst-2.0.CoglGst.VideoSinkClass

    static name: string
}

export interface VideoSinkPrivate {
}

export class VideoSinkPrivate {

    // Own properties of CoglGst-2.0.CoglGst.VideoSinkPrivate

    static name: string
}

// END