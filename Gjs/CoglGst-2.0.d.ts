// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * CoglGst-2.0
 */

import type * as Gjs from './Gjs';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type Cogl from './Cogl-2.0';
import type GL from './GL-1.0';

export namespace CoglGst {

interface VideoSink_ConstructProps extends GstBase.BaseSink_ConstructProps {

    // Own constructor properties of CoglGst-2.0.CoglGst.VideoSink

    update_priority?: number | null
}

/**
 * Signal callback interface for `new-frame`
 */
interface VideoSink_NewFrameSignalCallback {
    ($obj: VideoSink): void
}

/**
 * Signal callback interface for `pipeline-ready`
 */
interface VideoSink_PipelineReadySignalCallback {
    ($obj: VideoSink): void
}

interface VideoSink {

    // Own properties of CoglGst-2.0.CoglGst.VideoSink

    update_priority: number

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
    attach_frame(pln: Cogl.Pipeline): void
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
    fit_size(available: Rectangle, output: Rectangle): /* output */ Rectangle
    /**
     * Returns a width-for-height aspect ratio that lets you calculate a
     * suitable width for displaying your video based on a given height by
     * multiplying your chosen height by the returned aspect ratio.
     * 
     * This aspect ratio is calculated based on the underlying size of the
     * video buffers and the current pixel-aspect-ratio.
     */
    get_aspect(): number
    /**
     * This can be used when doing specialised rendering of the video by
     * customizing the pipeline. #CoglGstVideoSink may use up to three
     * private layers on the pipeline in order to attach the textures of
     * the video frame. This function will return the index of the next
     * available unused layer after the sink's internal layers. This can
     * be used by the application to add additional layers, for example to
     * blend in another color in the fragment processing.
     */
    get_free_layer(): number
    /**
     * Calculates a suitable output height for a specific output `width`
     * that will maintain the video's aspect ratio.
     * @param width A specific output `width`
     */
    get_height_for_width(width: number): number
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
     */
    get_natural_height(): number
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
    get_natural_size(): [ /* width */ number, /* height */ number ]
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
     */
    get_natural_width(): number
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
     */
    get_pipeline(): Cogl.Pipeline
    /**
     * Calculates a suitable output width for a specific output `height`
     * that will maintain the video's aspect ratio.
     * @param height A specific output `height`
     */
    get_width_for_height(height: number): number
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
     */
    is_ready(): Cogl.Bool
    /**
     * Sets the #CoglContext that the video sink should use for creating
     * any resources. This function would normally only be used if the
     * sink was constructed via gst_element_factory_make() instead of
     * cogl_gst_video_sink_new().
     * @param ctx The #CoglContext for the sink to use
     */
    set_context(ctx: Cogl.Context): void

    // Overloads of set_context

    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     * @param context the #GstContext to set.
     */
    set_context(context: Gst.Context): void
    set_context(...args: any[]): any
    set_context(args_or_context: any[] | Gst.Context): void | any
    /**
     * By default the pipeline generated by
     * cogl_gst_video_sink_setup_pipeline() and
     * cogl_gst_video_sink_get_pipeline() will have a layer with a shader
     * snippet that automatically samples the video. If the application
     * wants to sample the video in a completely custom way using its own
     * shader snippet it can set `default_sample` to %FALSE to avoid this
     * default snippet being added. In that case the application's snippet
     * can call cogl_gst_sample_video0 to sample the texture itself.
     * @param default_sample Whether to add the default sampling
     */
    set_default_sample(default_sample: Cogl.Bool): void
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
     * @param first_layer The new first layer
     */
    set_first_layer(first_layer: number): void
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
    setup_pipeline(pipeline: Cogl.Pipeline): void

    // Conflicting methods

    ref(...args: any[]): any

    // Own virtual methods of CoglGst-2.0.CoglGst.VideoSink

    vfunc_new_frame(): void
    vfunc_pipeline_ready(): void

    // Own signals of CoglGst-2.0.CoglGst.VideoSink

    connect(sigName: "new-frame", callback: VideoSink_NewFrameSignalCallback): number
    connect_after(sigName: "new-frame", callback: VideoSink_NewFrameSignalCallback): number
    emit(sigName: "new-frame", ...args: any[]): void
    connect(sigName: "pipeline-ready", callback: VideoSink_PipelineReadySignalCallback): number
    connect_after(sigName: "pipeline-ready", callback: VideoSink_PipelineReadySignalCallback): number
    emit(sigName: "pipeline-ready", ...args: any[]): void

    // Class property signals of CoglGst-2.0.CoglGst.VideoSink

    connect(sigName: "notify::update-priority", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-priority", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-priority", ...args: any[]): void
    connect(sigName: "notify::async", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::async", ...args: any[]): void
    connect(sigName: "notify::blocksize", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::blocksize", ...args: any[]): void
    connect(sigName: "notify::enable-last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-last-sample", ...args: any[]): void
    connect(sigName: "notify::last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-sample", ...args: any[]): void
    connect(sigName: "notify::max-bitrate", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-bitrate", ...args: any[]): void
    connect(sigName: "notify::max-lateness", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-lateness", ...args: any[]): void
    connect(sigName: "notify::processing-deadline", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-deadline", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::processing-deadline", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: "notify::render-delay", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::render-delay", ...args: any[]): void
    connect(sigName: "notify::stats", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stats", ...args: any[]): void
    connect(sigName: "notify::sync", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sync", ...args: any[]): void
    connect(sigName: "notify::throttle-time", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle-time", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::throttle-time", ...args: any[]): void
    connect(sigName: "notify::ts-offset", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ts-offset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CoglGstVideoSink structure contains only private data and
 * should be accessed using the provided API.
 * @class 
 */
class VideoSink extends GstBase.BaseSink {

    // Own properties of CoglGst-2.0.CoglGst.VideoSink

    static name: string
    static $gtype: GObject.GType<VideoSink>

    // Constructors of CoglGst-2.0.CoglGst.VideoSink

    constructor(config?: VideoSink_ConstructProps) 
    /**
     * Creates a new #CoglGstVideoSink which will create resources for use
     * with the given context.
     * @constructor 
     * @param ctx The #CoglContext
     */
    constructor(ctx: Cogl.Context) 
    /**
     * Creates a new #CoglGstVideoSink which will create resources for use
     * with the given context.
     * @constructor 
     * @param ctx The #CoglContext
     */
    static new(ctx: Cogl.Context): VideoSink
    _init(config?: VideoSink_ConstructProps): void
}

interface Rectangle {

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
class Rectangle {

    // Own properties of CoglGst-2.0.CoglGst.Rectangle

    static name: string
}

interface VideoSinkClass {

    // Own fields of CoglGst-2.0.CoglGst.VideoSinkClass

    new_frame: (sink: VideoSink) => void
    pipeline_ready: (sink: VideoSink) => void
}

abstract class VideoSinkClass {

    // Own properties of CoglGst-2.0.CoglGst.VideoSinkClass

    static name: string
}

interface VideoSinkPrivate {
}

class VideoSinkPrivate {

    // Own properties of CoglGst-2.0.CoglGst.VideoSinkPrivate

    static name: string
}

}
export default CoglGst;