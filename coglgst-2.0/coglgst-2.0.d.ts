/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Cogl from '@girs/cogl-2.0';
import type GL from '@girs/gl-1.0';

export namespace CoglGst {
    /**
     * CoglGst-2.0
     */

    module VideoSink {
        // Signal callback interfaces

        interface NewFrame {
            (): void;
        }

        interface PipelineReady {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GstBase.BaseSink.ConstructorProps {
            update_priority: number;
            updatePriority: number;
        }
    }

    /**
     * The #CoglGstVideoSink structure contains only private data and
     * should be accessed using the provided API.
     */
    class VideoSink extends GstBase.BaseSink {
        static $gtype: GObject.GType<VideoSink>;

        // Properties

        get update_priority(): number;
        set update_priority(val: number);
        get updatePriority(): number;
        set updatePriority(val: number);

        // Constructors

        constructor(properties?: Partial<VideoSink.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](ctx: Cogl.Context): VideoSink;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'new-frame', callback: (_source: this) => void): number;
        connect_after(signal: 'new-frame', callback: (_source: this) => void): number;
        emit(signal: 'new-frame'): void;
        connect(signal: 'pipeline-ready', callback: (_source: this) => void): number;
        connect_after(signal: 'pipeline-ready', callback: (_source: this) => void): number;
        emit(signal: 'pipeline-ready'): void;

        // Virtual methods

        vfunc_new_frame(): void;
        vfunc_pipeline_ready(): void;

        // Methods

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
        attach_frame(pln: Cogl.Pipeline): void;
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
        fit_size(available: Rectangle, output: Rectangle): Rectangle;
        /**
         * Returns a width-for-height aspect ratio that lets you calculate a
         * suitable width for displaying your video based on a given height by
         * multiplying your chosen height by the returned aspect ratio.
         *
         * This aspect ratio is calculated based on the underlying size of the
         * video buffers and the current pixel-aspect-ratio.
         * @returns a width-for-height aspect ratio
         */
        get_aspect(): number;
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
        get_free_layer(): number;
        /**
         * Calculates a suitable output height for a specific output `width`
         * that will maintain the video's aspect ratio.
         * @param width A specific output @width
         * @returns An output height for the given output @width.
         */
        get_height_for_width(width: number): number;
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
        get_natural_height(): number;
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
        get_natural_size(): [number, number];
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
        get_natural_width(): number;
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
        get_pipeline(): Cogl.Pipeline;
        /**
         * Calculates a suitable output width for a specific output `height`
         * that will maintain the video's aspect ratio.
         * @param height A specific output @height
         * @returns An output width for the given output @height.
         */
        get_width_for_height(height: number): number;
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
        is_ready(): Cogl.Bool;
        /**
         * Sets the #CoglContext that the video sink should use for creating
         * any resources. This function would normally only be used if the
         * sink was constructed via gst_element_factory_make() instead of
         * cogl_gst_video_sink_new().
         * @param ctx The #CoglContext for the sink to use
         */
        set_context(ctx: Cogl.Context): void;
        // Conflicted with Gst.Element.set_context
        set_context(...args: never[]): any;
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
        set_default_sample(default_sample: Cogl.Bool): void;
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
        set_first_layer(first_layer: number): void;
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
        setup_pipeline(pipeline: Cogl.Pipeline): void;
    }

    /**
     * Describes a rectangle that can be used for video output.
     */
    class Rectangle {
        static $gtype: GObject.GType<Rectangle>;

        // Fields

        x: number;
        y: number;
        width: number;
        height: number;

        // Constructors

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                width: number;
                height: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type VideoSinkClass = typeof VideoSink;
    abstract class VideoSinkPrivate {
        static $gtype: GObject.GType<VideoSinkPrivate>;

        // Constructors

        _init(...args: any[]): void;
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

export default CoglGst;

// END
