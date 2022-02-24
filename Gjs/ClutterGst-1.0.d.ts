/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ClutterGst-1.0
 */

import type * as Gjs from './Gjs';
import type GstVideo from './GstVideo-0.10';
import type libxml2 from './libxml2-2.0';
import type GstBase from './GstBase-0.10';
import type Gst from './Gst-0.10';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstInterfaces from './GstInterfaces-0.10';
// WARN: Dependency not found: 'GstAudio-0.10'
import type Clutter from './Clutter-1.0';
import type cairo from './cairo-1.0';
import type Json from './Json-1.0';
import type Gio from './Gio-2.0';
import type GL from './GL-1.0';
import type CoglPango from './CoglPango-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type Cogl from './Cogl-1.0';
import type Atk from './Atk-1.0';

export namespace ClutterGst {

/**
 * Different buffering policies clutter-gst supports
 */
enum BufferingMode {
    /**
     * In-memory buffering
     */
    STREAM,
    /**
     * On-disk buffering
     */
    DOWNLOAD,
}
/**
 * Flags that can be given to clutter_gst_video_texture_set_seek_flags().
 */
enum SeekFlags {
    /**
     * Fast seeks (key frame boundaries, default)
     */
    NONE,
    /**
     * Accurate seeks (potentially slower)
     */
    ACCURATE,
}
/**
 * ClutterGst major version (e.g. "1", if %CLUTTER_GST_VERSION is "1.2.3")
 */
const MAJOR_VERSION: number
/**
 * ClutterGst micro version (e.g. "3", if %CLUTTER_GST_VERSION is "1.2.3")
 */
const MICRO_VERSION: number
/**
 * ClutterGst minor version (e.g. "2", if %CLUTTER_GST_VERSION is "1.2.3")
 */
const MINOR_VERSION: number
/**
 * ClutterGst full version, encoded as an hexadecimal value.
 */
const VERSION_HEX: number
/**
 * ClutterGst full version, encoded as a string.
 */
const VERSION_S: string
function init(argv?: string[] | null): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
function init_with_args(argv: string[] | null, parameter_string: string, entries: GLib.OptionEntry, translation_domain: string): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
function player_class_init(object_class: GObject.ObjectClass): void
class Player {
    /* Properties of ClutterGst-1.0.ClutterGst.Player */
    /**
     * Index of the current audio stream.
     */
    audio_stream: number
    /**
     * List of audio streams available on the current media.
     */
    readonly audio_streams: object
    /**
     * Whether the #ClutterGstPlayer is in idle mode.
     */
    readonly idle: boolean
    /**
     * Whether or not the stream is being seeked.
     */
    readonly in_seek: boolean
    /**
     * Flags to use when seeking.
     */
    seek_flags: SeekFlags
    subtitle_track: number
    readonly subtitle_tracks: object
    /**
     * The User Agent used by #ClutterGstPlayer with network protocols.
     */
    user_agent: string
    /* Properties of Clutter-1.0.Clutter.Media */
    /**
     * The volume of the audio, as a normalized value between
     * 0.0 and 1.0.
     */
    audio_volume: number
    /**
     * The fill level of the buffer for the current stream,
     * as a value between 0.0 and 1.0.
     */
    readonly buffer_fill: number
    /**
     * Whether the current stream is seekable.
     */
    readonly can_seek: boolean
    /**
     * The duration of the current stream, in seconds
     */
    readonly duration: number
    /**
     * Whether the #ClutterMedia actor is playing.
     */
    playing: boolean
    /**
     * The current progress of the playback, as a normalized
     * value between 0.0 and 1.0.
     */
    progress: number
    /**
     * The font used to display subtitles. The font description has to
     * follow the same grammar as the one recognized by
     * pango_font_description_from_string().
     */
    subtitle_font_name: string
    /**
     * The location of a subtitle file, expressed as a valid URI.
     */
    subtitle_uri: string
    /**
     * The location of a media file, expressed as a valid URI.
     */
    uri: string
    /* Methods of ClutterGst-1.0.ClutterGst.Player */
    /**
     * Frees the resources created by clutter_gst_player_init(). After
     * clutter_gst_player_deinit() has been called, no other player method can be
     * called on the instance.
     */
    deinit(): void
    /**
     * Get the current audio stream. The number returned in the index of the
     * audio stream playing in the list returned by
     * clutter_gst_player_get_audio_streams().
     */
    get_audio_stream(): number
    /**
     * Get the list of audio streams of the current media.
     */
    get_audio_streams(): string[]
    get_buffering_mode(): BufferingMode
    /**
     * Get the idle state of the pipeline.
     */
    get_idle(): boolean
    /**
     * Whether the player is seeking.
     */
    get_in_seek(): boolean
    /**
     * Retrieves the #GstPipeline used by the `player,` for direct use with
     * GStreamer API.
     */
    get_pipeline(): Gst.Element
    /**
     * Get the current value of the seek-flags property.
     */
    get_seek_flags(): SeekFlags
    /**
     * Get the current subtitles track. The number returned is the index of the
     * subtiles track in the list returned by
     * clutter_gst_player_get_subtitle_tracks().
     */
    get_subtitle_track(): number
    /**
     * Get the list of subtitles tracks of the current media.
     */
    get_subtitle_tracks(): string[]
    /**
     * Retrieves the user agent used when streaming.
     */
    get_user_agent(): string
    init(): boolean
    /**
     * Set the audio stream to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_player_get_audio_streams().
     */
    set_audio_stream(index_: number): void
    set_buffering_mode(mode: BufferingMode): void
    /**
     * Seeking can be done with several trade-offs. Clutter-gst defaults
     * to %CLUTTER_GST_SEEK_FLAG_NONE.
     */
    set_seek_flags(flags: SeekFlags): void
    /**
     * Set the subtitles track to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_player_get_subtitle_tracks().
     * 
     * If `index_` is -1, the subtitles are turned off.
     */
    set_subtitle_track(index_: number): void
    /**
     * Sets the user agent to use when streaming.
     * 
     * When streaming content, you might want to set a custom user agent, eg. to
     * promote your software, make it appear in statistics or because the server
     * requires a special user agent you want to impersonate.
     */
    set_user_agent(user_agent: string): void
    /* Methods of Clutter-1.0.Clutter.Media */
    /**
     * Retrieves the playback volume of `media`.
     */
    get_audio_volume(): number
    /**
     * Retrieves the amount of the stream that is buffered.
     */
    get_buffer_fill(): number
    /**
     * Retrieves whether `media` is seekable or not.
     */
    get_can_seek(): boolean
    /**
     * Retrieves the duration of the media stream that `media` represents.
     */
    get_duration(): number
    /**
     * Retrieves the playing status of `media`.
     */
    get_playing(): boolean
    /**
     * Retrieves the playback progress of `media`.
     */
    get_progress(): number
    /**
     * Retrieves the font name currently used.
     */
    get_subtitle_font_name(): string
    /**
     * Retrieves the URI of the subtitle file in use.
     */
    get_subtitle_uri(): string
    /**
     * Retrieves the URI from `media`.
     */
    get_uri(): string
    /**
     * Sets the playback volume of `media` to `volume`.
     */
    set_audio_volume(volume: number): void
    /**
     * Sets the source of `media` using a file path.
     */
    set_filename(filename: string): void
    /**
     * Starts or stops playing of `media`.
     *  
     * The implementation might be asynchronous, so the way to know whether
     * the actual playing state of the `media` is to use the #GObject::notify
     * signal on the #ClutterMedia:playing property and then retrieve the
     * current state with clutter_media_get_playing(). ClutterGstVideoTexture
     * in clutter-gst is an example of such an asynchronous implementation.
     */
    set_playing(playing: boolean): void
    /**
     * Sets the playback progress of `media`. The `progress` is
     * a normalized value between 0.0 (begin) and 1.0 (end).
     */
    set_progress(progress: number): void
    /**
     * Sets the font used by the subtitle renderer. The `font_name` string must be
     * either %NULL, which means that the default font name of the underlying
     * implementation will be used; or must follow the grammar recognized by
     * pango_font_description_from_string() like:
     * 
     * |[
     *   clutter_media_set_subtitle_font_name (media, "Sans 24pt");
     * ```
     * 
     */
    set_subtitle_font_name(font_name: string): void
    /**
     * Sets the location of a subtitle file to display while playing `media`.
     */
    set_subtitle_uri(uri: string): void
    /**
     * Sets the URI of `media` to `uri`.
     */
    set_uri(uri: string): void
    /* Virtual methods of ClutterGst-1.0.ClutterGst.Player */
    vfunc_download_buffering(start: number, stop: number): void
    /**
     * Get the current audio stream. The number returned in the index of the
     * audio stream playing in the list returned by
     * clutter_gst_player_get_audio_streams().
     */
    vfunc_get_audio_stream(): number
    /**
     * Get the list of audio streams of the current media.
     */
    vfunc_get_audio_streams(): string[]
    vfunc_get_buffering_mode(): BufferingMode
    /**
     * Get the idle state of the pipeline.
     */
    vfunc_get_idle(): boolean
    /**
     * Whether the player is seeking.
     */
    vfunc_get_in_seek(): boolean
    /**
     * Retrieves the #GstPipeline used by the `player,` for direct use with
     * GStreamer API.
     */
    vfunc_get_pipeline(): Gst.Element
    /**
     * Get the current value of the seek-flags property.
     */
    vfunc_get_seek_flags(): SeekFlags
    /**
     * Get the current subtitles track. The number returned is the index of the
     * subtiles track in the list returned by
     * clutter_gst_player_get_subtitle_tracks().
     */
    vfunc_get_subtitle_track(): number
    /**
     * Get the list of subtitles tracks of the current media.
     */
    vfunc_get_subtitle_tracks(): string[]
    /**
     * Retrieves the user agent used when streaming.
     */
    vfunc_get_user_agent(): string
    /**
     * Set the audio stream to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_player_get_audio_streams().
     */
    vfunc_set_audio_stream(index_: number): void
    vfunc_set_buffering_mode(mode: BufferingMode): void
    /**
     * Seeking can be done with several trade-offs. Clutter-gst defaults
     * to %CLUTTER_GST_SEEK_FLAG_NONE.
     */
    vfunc_set_seek_flags(flags: SeekFlags): void
    /**
     * Set the subtitles track to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_player_get_subtitle_tracks().
     * 
     * If `index_` is -1, the subtitles are turned off.
     */
    vfunc_set_subtitle_track(index_: number): void
    /**
     * Sets the user agent to use when streaming.
     * 
     * When streaming content, you might want to set a custom user agent, eg. to
     * promote your software, make it appear in statistics or because the server
     * requires a special user agent you want to impersonate.
     */
    vfunc_set_user_agent(user_agent: string): void
    /* Virtual methods of Clutter-1.0.Clutter.Media */
    vfunc_eos(): void
    vfunc_error(error: GLib.Error): void
    /* Signals of ClutterGst-1.0.ClutterGst.Player */
    /**
     * The ::download-buffering signal is emitted each time their an
     * update about the buffering of the current media.
     */
    connect(sigName: "download-buffering", callback: (($obj: Player, start: number, stop: number) => void)): number
    connect_after(sigName: "download-buffering", callback: (($obj: Player, start: number, stop: number) => void)): number
    emit(sigName: "download-buffering", start: number, stop: number): void
    /* Signals of Clutter-1.0.Clutter.Media */
    /**
     * The ::eos signal is emitted each time the media stream ends.
     */
    connect(sigName: "eos", callback: (($obj: Player) => void)): number
    connect_after(sigName: "eos", callback: (($obj: Player) => void)): number
    emit(sigName: "eos"): void
    /**
     * The ::error signal is emitted each time an error occurred.
     */
    connect(sigName: "error", callback: (($obj: Player, error: GLib.Error) => void)): number
    connect_after(sigName: "error", callback: (($obj: Player, error: GLib.Error) => void)): number
    emit(sigName: "error", error: GLib.Error): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Adds the #ClutterGstPlayer properties to a class and surchages the
     * set/get_property of #GObjectClass. You should call this
     * function at the end of the class_init method of the class
     * implementing #ClutterGstPlayer.
     */
    static class_init(object_class: GObject.ObjectClass): void
}
class VideoSink {
    /* Properties of ClutterGst-1.0.ClutterGst.VideoSink */
    /**
     * This is the texture the video is decoded into. It can be any
     * #ClutterTexture, however Cluter-Gst has a handy subclass,
     * #ClutterGstVideoTexture, that implements the #ClutterMedia
     * interface.
     */
    texture: Clutter.Texture
    /**
     * Clutter-Gst installs a #GSource to signal that a new frame is ready to
     * the Clutter thread. This property allows to tweak the priority of the
     * source (Lower value is higher priority).
     * 
     * Since 1.0
     */
    update_priority: number
    /* Methods of GstInterfaces-0.10.GstInterfaces.Navigation */
    /**
     * Sends the indicated command to the navigation interface.
     */
    send_command(command: GstInterfaces.NavigationCommand): void
    send_event(structure: Gst.Structure): void
    send_key_event(event: string, key: string): void
    /**
     * Sends a mouse event to the navigation interface. Mouse event coordinates
     * are sent relative to the display space of the related output area. This is
     * usually the size in pixels of the window associated with the element
     * implementing the #GstNavigation interface.
     */
    send_mouse_event(event: string, button: number, x: number, y: number): void
    /* Virtual methods of ClutterGst-1.0.ClutterGst.VideoSink */
    vfunc_supported(iface_type: GObject.Type): boolean
    vfunc_send_event(structure: Gst.Structure): void
    static name: string
    static new(texture: Clutter.Texture): VideoSink
    constructor(texture: Clutter.Texture)
    /* Static methods and pseudo-constructors */
    static new(texture: Clutter.Texture): VideoSink
}
interface VideoTexture_ConstructProps extends Clutter.Texture_ConstructProps {
    /* Constructor properties of ClutterGst-1.0.ClutterGst.VideoTexture */
    pixel_aspect_ratio?: any
    /* Constructor properties of Clutter-1.0.Clutter.Media */
    /**
     * The volume of the audio, as a normalized value between
     * 0.0 and 1.0.
     */
    audio_volume?: number
    /**
     * Whether the #ClutterMedia actor is playing.
     */
    playing?: boolean
    /**
     * The current progress of the playback, as a normalized
     * value between 0.0 and 1.0.
     */
    progress?: number
    /**
     * The font used to display subtitles. The font description has to
     * follow the same grammar as the one recognized by
     * pango_font_description_from_string().
     */
    subtitle_font_name?: string
    /**
     * The location of a subtitle file, expressed as a valid URI.
     */
    subtitle_uri?: string
    /**
     * The location of a media file, expressed as a valid URI.
     */
    uri?: string
    /* Constructor properties of ClutterGst-1.0.ClutterGst.Player */
    /**
     * Index of the current audio stream.
     */
    audio_stream?: number
    /**
     * Flags to use when seeking.
     */
    seek_flags?: SeekFlags
    subtitle_track?: number
    /**
     * The User Agent used by #ClutterGstPlayer with network protocols.
     */
    user_agent?: string
}
class VideoTexture {
    /* Properties of ClutterGst-1.0.ClutterGst.VideoTexture */
    pixel_aspect_ratio: any
    /* Properties of Clutter-1.0.Clutter.Texture */
    /**
     * The path of the file containing the image data to be displayed by
     * the texture.
     * 
     * This property is unset when using the clutter_texture_set_from_*_data()
     * family of functions.
     */
    filename: string
    filter_quality: Clutter.TextureQuality
    keep_aspect_ratio: boolean
    /**
     * Tries to load a texture from a filename by using a local thread to perform
     * the read operations. The initially created texture has dimensions 0x0 when
     * the true size becomes available the #ClutterTexture::size-change signal is
     * emitted and when the image has completed loading the
     * #ClutterTexture::load-finished signal is emitted.
     * 
     * Threading is only enabled if g_thread_init() has been called prior to
     * clutter_init(), otherwise #ClutterTexture will use the main loop to load
     * the image.
     * 
     * The upload of the texture data on the GL pipeline is not asynchronous, as
     * it must be performed from within the same thread that called
     * clutter_main().
     */
    load_async: boolean
    /**
     * Like #ClutterTexture:load-async but loads the width and height
     * synchronously causing some blocking.
     */
    load_data_async: boolean
    pick_with_alpha: boolean
    readonly pixel_format: Cogl.PixelFormat
    repeat_x: boolean
    repeat_y: boolean
    sync_size: boolean
    readonly tile_waste: number
    /* Properties of Clutter-1.0.Clutter.Actor */
    /**
     * Adds a #ClutterAction to the actor
     */
    actions: Clutter.Action
    /**
     * The allocation for the actor, in pixels
     * 
     * This is property is read-only, but you might monitor it to know when an
     * actor moves or resizes
     */
    readonly allocation: Clutter.ActorBox
    /**
     * The anchor point expressed as a #ClutterGravity
     * 
     * It is highly recommended not to use #ClutterActor:anchor-x,
     * #ClutterActor:anchor-y, and #ClutterActor:anchor-gravity in newly
     * written code; the anchor point adds an additional translation that
     * will affect the actor's relative position with regards to its
     * parent, as well as the position of its children. This change needs
     * to always be taken into account when positioning the actor. It is
     * recommended to use the #ClutterActor:pivot-point property instead,
     * as it will affect only the transformations.
     */
    anchor_gravity: Clutter.Gravity
    /**
     * The X coordinate of an actor's anchor point, relative to
     * the actor coordinate space, in pixels.
     * 
     * It is highly recommended not to use #ClutterActor:anchor-x,
     * #ClutterActor:anchor-y, and #ClutterActor:anchor-gravity in newly
     * written code; the anchor point adds an additional translation that
     * will affect the actor's relative position with regards to its
     * parent, as well as the position of its children. This change needs
     * to always be taken into account when positioning the actor. It is
     * recommended to use the #ClutterActor:pivot-point property instead,
     * as it will affect only the transformations.
     */
    anchor_x: number
    /**
     * The Y coordinate of an actor's anchor point, relative to
     * the actor coordinate space, in pixels
     * 
     * It is highly recommended not to use #ClutterActor:anchor-x,
     * #ClutterActor:anchor-y, and #ClutterActor:anchor-gravity in newly
     * written code; the anchor point adds an additional translation that
     * will affect the actor's relative position with regards to its
     * parent, as well as the position of its children. This change needs
     * to always be taken into account when positioning the actor. It is
     * recommended to use the #ClutterActor:pivot-point property instead,
     * as it will affect only the transformations.
     */
    anchor_y: number
    /**
     * Paints a solid fill of the actor's allocation using the specified
     * color.
     * 
     * The #ClutterActor:background-color property is animatable.
     */
    background_color: Clutter.Color
    /**
     * Whether the #ClutterActor:background-color property has been set.
     */
    readonly background_color_set: boolean
    /**
     * Applies a transformation matrix on each child of an actor.
     * 
     * Setting this property with a #ClutterMatrix will set the
     * #ClutterActor:child-transform-set property to %TRUE as a side effect;
     * setting this property with %NULL will set the
     * #ClutterActor:child-transform-set property to %FALSE.
     * 
     * The #ClutterActor:child-transform property is animatable.
     */
    child_transform: Clutter.Matrix
    /**
     * Whether the #ClutterActor:child-transform property is set.
     */
    readonly child_transform_set: boolean
    /**
     * The visible region of the actor, in actor-relative coordinates
     */
    clip: Clutter.Geometry
    /**
     * The visible region of the actor, in actor-relative coordinates,
     * expressed as a #ClutterRect.
     * 
     * Setting this property to %NULL will unset the existing clip.
     * 
     * Setting this property will change the #ClutterActor:has-clip
     * property as a side effect.
     */
    clip_rect: Clutter.Rect
    /**
     * Whether the clip region should track the allocated area
     * of the actor.
     * 
     * This property is ignored if a clip area has been explicitly
     * set using clutter_actor_set_clip().
     */
    clip_to_allocation: boolean
    /**
     * Adds a #ClutterConstraint to the actor
     */
    constraints: Clutter.Constraint
    /**
     * The #ClutterContent implementation that controls the content
     * of the actor.
     */
    content: Clutter.Content
    /**
     * The bounding box for the #ClutterContent used by the actor.
     * 
     * The value of this property is controlled by the #ClutterActor:allocation
     * and #ClutterActor:content-gravity properties of #ClutterActor.
     * 
     * The bounding box for the content is guaranteed to never exceed the
     * allocation's of the actor.
     */
    readonly content_box: Clutter.ActorBox
    /**
     * The alignment that should be honoured by the #ClutterContent
     * set with the #ClutterActor:content property.
     * 
     * Changing the value of this property will change the bounding box of
     * the content; you can use the #ClutterActor:content-box property to
     * get the position and size of the content within the actor's
     * allocation.
     * 
     * This property is meaningful only for #ClutterContent implementations
     * that have a preferred size, and if the preferred size is smaller than
     * the actor's allocation.
     * 
     * The #ClutterActor:content-gravity property is animatable.
     */
    content_gravity: Clutter.ContentGravity
    /**
     * The repeat policy for the actor's #ClutterActor:content.
     */
    content_repeat: Clutter.ContentRepeat
    /**
     * The position of the actor on the Z axis.
     * 
     * The #ClutterActor:depth property is relative to the parent's
     * modelview matrix.
     * 
     * Setting this property will call #ClutterContainerIface.sort_depth_order()
     * which is usually a no-op, and it's most likely not what you want.
     * 
     * The #ClutterActor:depth property is animatable.
     */
    depth: number
    /**
     * Adds #ClutterEffect to the list of effects be applied on a #ClutterActor
     */
    effect: Clutter.Effect
    /**
     * The actor's first child.
     */
    readonly first_child: Clutter.Actor
    /**
     * This flag controls whether the #ClutterActor:fixed-x and
     * #ClutterActor:fixed-y properties are used
     */
    fixed_position_set: boolean
    /**
     * The fixed X position of the actor in pixels.
     * 
     * Writing this property sets #ClutterActor:fixed-position-set
     * property as well, as a side effect
     */
    fixed_x: number
    /**
     * The fixed Y position of the actor in pixels.
     * 
     * Writing this property sets the #ClutterActor:fixed-position-set
     * property as well, as a side effect
     */
    fixed_y: number
    /**
     * Whether the actor has the #ClutterActor:clip property set or not
     */
    readonly has_clip: boolean
    /**
     * Whether the actor contains the pointer of a #ClutterInputDevice
     * or not.
     */
    readonly has_pointer: boolean
    /**
     * Height of the actor (in pixels).  If written, forces the minimum and
     * natural size request of the actor to the given height. If read, returns
     * the allocated height if available, otherwise the height request.
     * 
     * The #ClutterActor:height property is animatable.
     */
    height: number
    /**
     * The actor's last child.
     */
    readonly last_child: Clutter.Actor
    /**
     * A delegate object for controlling the layout of the children of
     * an actor.
     */
    layout_manager: Clutter.LayoutManager
    magnification_filter: Clutter.ScalingFilter
    /**
     * Whether the actor is mapped (will be painted when the stage
     * to which it belongs is mapped)
     */
    readonly mapped: boolean
    /**
     * The margin (in pixels) from the bottom of the actor.
     * 
     * This property adds a margin to the actor's preferred size; the margin
     * will be automatically taken into account when allocating the actor.
     * 
     * The #ClutterActor:margin-bottom property is animatable.
     */
    margin_bottom: number
    /**
     * The margin (in pixels) from the left of the actor.
     * 
     * This property adds a margin to the actor's preferred size; the margin
     * will be automatically taken into account when allocating the actor.
     * 
     * The #ClutterActor:margin-left property is animatable.
     */
    margin_left: number
    /**
     * The margin (in pixels) from the right of the actor.
     * 
     * This property adds a margin to the actor's preferred size; the margin
     * will be automatically taken into account when allocating the actor.
     * 
     * The #ClutterActor:margin-right property is animatable.
     */
    margin_right: number
    /**
     * The margin (in pixels) from the top of the actor.
     * 
     * This property adds a margin to the actor's preferred size; the margin
     * will be automatically taken into account when allocating the actor.
     * 
     * The #ClutterActor:margin-top property is animatable.
     */
    margin_top: number
    /**
     * A forced minimum height request for the actor, in pixels
     * 
     * Writing this property sets the #ClutterActor:min-height-set property
     * as well, as a side effect. This property overrides the usual height
     * request of the actor.
     */
    min_height: number
    /**
     * This flag controls whether the #ClutterActor:min-height property
     * is used
     */
    min_height_set: boolean
    /**
     * A forced minimum width request for the actor, in pixels
     * 
     * Writing this property sets the #ClutterActor:min-width-set property
     * as well, as a side effect.
     * 
     * This property overrides the usual width request of the actor.
     */
    min_width: number
    /**
     * This flag controls whether the #ClutterActor:min-width property
     * is used
     */
    min_width_set: boolean
    minification_filter: Clutter.ScalingFilter
    /**
     * The name of the actor
     */
    name: string
    /**
     * A forced natural height request for the actor, in pixels
     * 
     * Writing this property sets the #ClutterActor:natural-height-set
     * property as well, as a side effect. This property overrides the
     * usual height request of the actor
     */
    natural_height: number
    /**
     * This flag controls whether the #ClutterActor:natural-height property
     * is used
     */
    natural_height_set: boolean
    /**
     * A forced natural width request for the actor, in pixels
     * 
     * Writing this property sets the #ClutterActor:natural-width-set
     * property as well, as a side effect. This property overrides the
     * usual width request of the actor
     */
    natural_width: number
    /**
     * This flag controls whether the #ClutterActor:natural-width property
     * is used
     */
    natural_width_set: boolean
    /**
     * Determines the conditions in which the actor will be redirected
     * to an offscreen framebuffer while being painted. For example this
     * can be used to cache an actor in a framebuffer or for improved
     * handling of transparent actors. See
     * clutter_actor_set_offscreen_redirect() for details.
     */
    offscreen_redirect: Clutter.OffscreenRedirect
    /**
     * Opacity of an actor, between 0 (fully transparent) and
     * 255 (fully opaque)
     * 
     * The #ClutterActor:opacity property is animatable.
     */
    opacity: number
    /**
     * The point around which the scaling and rotation transformations occur.
     * 
     * The pivot point is expressed in normalized coordinates space, with (0, 0)
     * being the top left corner of the actor and (1, 1) the bottom right corner
     * of the actor.
     * 
     * The default pivot point is located at (0, 0).
     * 
     * The #ClutterActor:pivot-point property is animatable.
     */
    pivot_point: Clutter.Point
    /**
     * The Z component of the #ClutterActor:pivot-point, expressed as a value
     * along the Z axis.
     * 
     * The #ClutterActor:pivot-point-z property is animatable.
     */
    pivot_point_z: number
    /**
     * The position of the origin of the actor.
     * 
     * This property is a shorthand for setting and getting the
     * #ClutterActor:x and #ClutterActor:y properties at the same
     * time.
     * 
     * The #ClutterActor:position property is animatable.
     */
    position: Clutter.Point
    /**
     * Whether the actor is reactive to events or not
     * 
     * Only reactive actors will emit event-related signals
     */
    reactive: boolean
    /**
     * Whether the actor has been realized
     */
    readonly realized: boolean
    /**
     * Request mode for the #ClutterActor. The request mode determines the
     * type of geometry management used by the actor, either height for width
     * (the default) or width for height.
     * 
     * For actors implementing height for width, the parent container should get
     * the preferred width first, and then the preferred height for that width.
     * 
     * For actors implementing width for height, the parent container should get
     * the preferred height first, and then the preferred width for that height.
     * 
     * For instance:
     * 
     * 
     * ```c
     *   ClutterRequestMode mode;
     *   gfloat natural_width, min_width;
     *   gfloat natural_height, min_height;
     * 
     *   mode = clutter_actor_get_request_mode (child);
     *   if (mode == CLUTTER_REQUEST_HEIGHT_FOR_WIDTH)
     *     {
     *       clutter_actor_get_preferred_width (child, -1,
     *                                          &min_width,
     *                                          &natural_width);
     *       clutter_actor_get_preferred_height (child, natural_width,
     *                                           &min_height,
     *                                           &natural_height);
     *     }
     *   else if (mode == CLUTTER_REQUEST_WIDTH_FOR_HEIGHT)
     *     {
     *       clutter_actor_get_preferred_height (child, -1,
     *                                           &min_height,
     *                                           &natural_height);
     *       clutter_actor_get_preferred_width (child, natural_height,
     *                                          &min_width,
     *                                          &natural_width);
     *     }
     *   else if (mode == CLUTTER_REQUEST_CONTENT_SIZE)
     *     {
     *       ClutterContent *content = clutter_actor_get_content (child);
     * 
     *       min_width, min_height = 0;
     *       natural_width = natural_height = 0;
     * 
     *       if (content != NULL)
     *         clutter_content_get_preferred_size (content, &natural_width, &natural_height);
     *     }
     * ```
     * 
     * 
     * will retrieve the minimum and natural width and height depending on the
     * preferred request mode of the #ClutterActor "child".
     * 
     * The clutter_actor_get_preferred_size() function will implement this
     * check for you.
     */
    request_mode: Clutter.RequestMode
    /**
     * The rotation angle on the X axis.
     * 
     * The #ClutterActor:rotation-angle-x property is animatable.
     */
    rotation_angle_x: number
    /**
     * The rotation angle on the Y axis
     * 
     * The #ClutterActor:rotation-angle-y property is animatable.
     */
    rotation_angle_y: number
    /**
     * The rotation angle on the Z axis
     * 
     * The #ClutterActor:rotation-angle-z property is animatable.
     */
    rotation_angle_z: number
    /**
     * The rotation center on the X axis.
     */
    rotation_center_x: Clutter.Vertex
    /**
     * The rotation center on the Y axis.
     */
    rotation_center_y: Clutter.Vertex
    /**
     * The rotation center on the Z axis.
     */
    rotation_center_z: Clutter.Vertex
    /**
     * The rotation center on the Z axis expressed as a #ClutterGravity.
     */
    rotation_center_z_gravity: Clutter.Gravity
    /**
     * The horizontal center point for scaling
     */
    scale_center_x: number
    /**
     * The vertical center point for scaling
     */
    scale_center_y: number
    /**
     * The center point for scaling expressed as a #ClutterGravity
     */
    scale_gravity: Clutter.Gravity
    /**
     * The horizontal scale of the actor.
     * 
     * The #ClutterActor:scale-x property is animatable.
     */
    scale_x: number
    /**
     * The vertical scale of the actor.
     * 
     * The #ClutterActor:scale-y property is animatable.
     */
    scale_y: number
    /**
     * The scale factor of the actor along the Z axis.
     * 
     * The #ClutterActor:scale-y property is animatable.
     */
    scale_z: number
    /**
     * If %TRUE, the actor is automatically shown when parented.
     * 
     * Calling clutter_actor_hide() on an actor which has not been
     * parented will set this property to %FALSE as a side effect.
     */
    show_on_set_parent: boolean
    /**
     * The size of the actor.
     * 
     * This property is a shorthand for setting and getting the
     * #ClutterActor:width and #ClutterActor:height at the same time.
     * 
     * The #ClutterActor:size property is animatable.
     */
    size: Clutter.Size
    /**
     * The direction of the text inside a #ClutterActor.
     */
    text_direction: Clutter.TextDirection
    /**
     * Overrides the transformations of a #ClutterActor with a custom
     * matrix.
     * 
     * The matrix specified by the #ClutterActor:transform property is
     * applied to the actor and its children relative to the actor's
     * #ClutterActor:allocation and #ClutterActor:pivot-point.
     * 
     * Application code should rarely need to use this function directly.
     * 
     * Setting this property with a #ClutterMatrix will set the
     * #ClutterActor:transform-set property to %TRUE as a side effect;
     * setting this property with %NULL will set the
     * #ClutterActor:transform-set property to %FALSE.
     * 
     * The #ClutterActor:transform property is animatable.
     */
    transform: Clutter.Matrix
    /**
     * Whether the #ClutterActor:transform property is set.
     */
    readonly transform_set: boolean
    /**
     * An additional translation applied along the X axis, relative
     * to the actor's #ClutterActor:pivot-point.
     * 
     * The #ClutterActor:translation-x property is animatable.
     */
    translation_x: number
    /**
     * An additional translation applied along the Y axis, relative
     * to the actor's #ClutterActor:pivot-point.
     * 
     * The #ClutterActor:translation-y property is animatable.
     */
    translation_y: number
    /**
     * An additional translation applied along the Z axis, relative
     * to the actor's #ClutterActor:pivot-point.
     * 
     * The #ClutterActor:translation-z property is animatable.
     */
    translation_z: number
    /**
     * Whether the actor is set to be visible or not
     * 
     * See also #ClutterActor:mapped
     */
    visible: boolean
    /**
     * Width of the actor (in pixels). If written, forces the minimum and
     * natural size request of the actor to the given width. If read, returns
     * the allocated width if available, otherwise the width request.
     * 
     * The #ClutterActor:width property is animatable.
     */
    width: number
    /**
     * X coordinate of the actor in pixels. If written, forces a fixed
     * position for the actor. If read, returns the fixed position if any,
     * otherwise the allocation if available, otherwise 0.
     * 
     * The #ClutterActor:x property is animatable.
     */
    x: number
    /**
     * The alignment of an actor on the X axis, if the actor has been given
     * extra space for its allocation. See also the #ClutterActor:x-expand
     * property.
     */
    x_align: Clutter.ActorAlign
    /**
     * Whether a layout manager should assign more space to the actor on
     * the X axis.
     */
    x_expand: boolean
    /**
     * Y coordinate of the actor in pixels. If written, forces a fixed
     * position for the actor.  If read, returns the fixed position if
     * any, otherwise the allocation if available, otherwise 0.
     * 
     * The #ClutterActor:y property is animatable.
     */
    y: number
    /**
     * The alignment of an actor on the Y axis, if the actor has been given
     * extra space for its allocation.
     */
    y_align: Clutter.ActorAlign
    /**
     * Whether a layout manager should assign more space to the actor on
     * the Y axis.
     */
    y_expand: boolean
    /**
     * The actor's position on the Z axis, relative to the parent's
     * transformations.
     * 
     * Positive values will bring the actor's position nearer to the user,
     * whereas negative values will bring the actor's position farther from
     * the user.
     * 
     * The #ClutterActor:z-position does not affect the paint or allocation
     * order.
     * 
     * The #ClutterActor:z-position property is animatable.
     */
    z_position: number
    /* Properties of Clutter-1.0.Clutter.Media */
    /**
     * The volume of the audio, as a normalized value between
     * 0.0 and 1.0.
     */
    audio_volume: number
    /**
     * The fill level of the buffer for the current stream,
     * as a value between 0.0 and 1.0.
     */
    readonly buffer_fill: number
    /**
     * Whether the current stream is seekable.
     */
    readonly can_seek: boolean
    /**
     * The duration of the current stream, in seconds
     */
    readonly duration: number
    /**
     * Whether the #ClutterMedia actor is playing.
     */
    playing: boolean
    /**
     * The current progress of the playback, as a normalized
     * value between 0.0 and 1.0.
     */
    progress: number
    /**
     * The font used to display subtitles. The font description has to
     * follow the same grammar as the one recognized by
     * pango_font_description_from_string().
     */
    subtitle_font_name: string
    /**
     * The location of a subtitle file, expressed as a valid URI.
     */
    subtitle_uri: string
    /**
     * The location of a media file, expressed as a valid URI.
     */
    uri: string
    /* Properties of ClutterGst-1.0.ClutterGst.Player */
    /**
     * Index of the current audio stream.
     */
    audio_stream: number
    /**
     * List of audio streams available on the current media.
     */
    readonly audio_streams: object
    /**
     * Whether the #ClutterGstPlayer is in idle mode.
     */
    readonly idle: boolean
    /**
     * Whether or not the stream is being seeked.
     */
    readonly in_seek: boolean
    /**
     * Flags to use when seeking.
     */
    seek_flags: SeekFlags
    subtitle_track: number
    readonly subtitle_tracks: object
    /**
     * The User Agent used by #ClutterGstPlayer with network protocols.
     */
    user_agent: string
    /* Fields of Clutter-1.0.Clutter.Actor */
    /**
     * #ClutterActorFlags
     */
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ClutterGst-1.0.ClutterGst.VideoTexture */
    /**
     * Get the current audio stream. The number returned in the index of the
     * audio stream playing in the list returned by
     * clutter_gst_video_texture_get_audio_streams().
     */
    get_audio_stream(): number
    /**
     * Get the list of audio streams of the current media.
     */
    get_audio_streams(): Gst.TagList[]
    get_buffering_mode(): BufferingMode
    /**
     * Retrieves the material used to draw when no media is being played.
     */
    get_idle_material(): Cogl.Handle
    /**
     * Retrieves the #GstPipeline used by the `texture,` for direct use with
     * GStreamer API.
     */
    get_pipeline(): Gst.Element
    /**
     * Get the current value of the seek-flags property.
     */
    get_seek_flags(): SeekFlags
    /**
     * Get the current subtitles track. The number returned is the index of the
     * subitles track in the list returned by
     * clutter_gst_video_texture_get_subtitle_tracks().
     */
    get_subtitle_track(): number
    /**
     * Get the list of subtitles tracks of the current media.
     */
    get_subtitle_tracks(): Gst.TagList[]
    /**
     * Retrieves the user agent used when streaming.
     */
    get_user_agent(): string
    /**
     * Set the audio stream to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_video_texture_get_audio_streams().
     */
    set_audio_stream(index_: number): void
    set_buffering_mode(mode: BufferingMode): void
    set_idle_material(material: Cogl.Handle): void
    /**
     * Seeking can be done with several trade-offs. Clutter-gst defaults
     * to %CLUTTER_GST_SEEK_FLAG_NONE.
     */
    set_seek_flags(flags: SeekFlags): void
    /**
     * Set the subtitles track to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_video_texture_get_subtitle_tracks().
     * 
     * If `index_` is -1, the subtitles are turned off.
     */
    set_subtitle_track(index_: number): void
    /**
     * Sets the user agent to use when streaming.
     * 
     * When streaming content, you might want to set a custom user agent, eg. to
     * promote your software, make it appear in statistics or because the server
     * requires a special user agent you want to impersonate.
     */
    set_user_agent(user_agent: string): void
    /* Methods of Clutter-1.0.Clutter.Texture */
    /**
     * Gets the size in pixels of the untransformed underlying image
     */
    get_base_size(): [ /* width */ number, /* height */ number ]
    /**
     * Returns a handle to the underlying COGL material used for drawing
     * the actor.
     */
    get_cogl_material(): Cogl.Handle
    /**
     * Retrieves the handle to the underlying COGL texture used for drawing
     * the actor. No extra reference is taken so if you need to keep the
     * handle then you should call cogl_handle_ref() on it.
     * 
     * The texture handle returned is the first layer of the material
     * handle used by the #ClutterTexture. If you need to access the other
     * layers you should use clutter_texture_get_cogl_material() instead
     * and use the #CoglMaterial API.
     */
    get_cogl_texture(): Cogl.Handle
    /**
     * Gets the filter quality used when scaling a texture.
     */
    get_filter_quality(): Clutter.TextureQuality
    /**
     * Retrieves the value set using clutter_texture_set_keep_aspect_ratio()
     */
    get_keep_aspect_ratio(): boolean
    /**
     * Retrieves the value set using clutter_texture_set_load_async()
     */
    get_load_async(): boolean
    /**
     * Retrieves the value set by clutter_texture_set_load_data_async()
     */
    get_load_data_async(): boolean
    /**
     * Gets the maximum waste that will be used when creating a texture or
     * -1 if slicing is disabled.
     */
    get_max_tile_waste(): number
    /**
     * Retrieves the value set by clutter_texture_set_load_data_async()
     */
    get_pick_with_alpha(): boolean
    /**
     * Retrieves the pixel format used by `texture`. This is
     * equivalent to:
     * 
     * |[
     *   handle = clutter_texture_get_pixel_format (texture);
     * 
     *   if (handle != COGL_INVALID_HANDLE)
     *     format = cogl_texture_get_format (handle);
     * ```
     * 
     */
    get_pixel_format(): Cogl.PixelFormat
    /**
     * Retrieves the horizontal and vertical repeat values set
     * using clutter_texture_set_repeat()
     */
    get_repeat(): [ /* repeat_x */ boolean, /* repeat_y */ boolean ]
    /**
     * Retrieves the value set with clutter_texture_set_sync_size()
     */
    get_sync_size(): boolean
    /**
     * Updates a sub-region of the pixel data in a #ClutterTexture.
     */
    set_area_from_rgb_data(data: Uint8Array, has_alpha: boolean, x: number, y: number, width: number, height: number, rowstride: number, bpp: number, flags: Clutter.TextureFlags): boolean
    /**
     * Replaces the underlying Cogl material drawn by this actor with
     * `cogl_material`. A reference to the material is taken so if the
     * handle is no longer needed it should be deref'd with
     * cogl_handle_unref. Texture data is attached to the material so
     * calling this function also replaces the Cogl
     * texture. #ClutterTexture requires that the material have a texture
     * layer so you should set one on the material before calling this
     * function.
     */
    set_cogl_material(cogl_material: Cogl.Handle): void
    /**
     * Replaces the underlying COGL texture drawn by this actor with
     * `cogl_tex`. A reference to the texture is taken so if the handle is
     * no longer needed it should be deref'd with cogl_handle_unref.
     */
    set_cogl_texture(cogl_tex: Cogl.Handle): void
    /**
     * Sets the filter quality when scaling a texture. The quality is an
     * enumeration currently the following values are supported:
     * %CLUTTER_TEXTURE_QUALITY_LOW which is fast but only uses nearest neighbour
     * interpolation. %CLUTTER_TEXTURE_QUALITY_MEDIUM which is computationally a
     * bit more expensive (bilinear interpolation), and
     * %CLUTTER_TEXTURE_QUALITY_HIGH which uses extra texture memory resources to
     * improve scaled down rendering as well (by using mipmaps). The default value
     * is %CLUTTER_TEXTURE_QUALITY_MEDIUM.
     */
    set_filter_quality(filter_quality: Clutter.TextureQuality): void
    /**
     * Sets the #ClutterTexture image data from an image file. In case of
     * failure, %FALSE is returned and `error` is set.
     * 
     * If #ClutterTexture:load-async is set to %TRUE, this function
     * will return as soon as possible, and the actual image loading
     * from disk will be performed asynchronously. #ClutterTexture::size-change
     * will be emitten when the size of the texture is available and
     * #ClutterTexture::load-finished will be emitted when the image has been
     * loaded or if an error occurred.
     */
    set_from_file(filename: string): boolean
    /**
     * Sets #ClutterTexture image data.
     */
    set_from_rgb_data(data: Uint8Array, has_alpha: boolean, width: number, height: number, rowstride: number, bpp: number, flags: Clutter.TextureFlags): boolean
    /**
     * Sets a #ClutterTexture from YUV image data. If an error occurred,
     * %FALSE is returned and `error` is set.
     * 
     * The YUV support depends on the driver; the format supported by the
     * few drivers exposing this capability are not really useful.
     * 
     * The proper way to convert image data in any YUV colorspace to any
     * RGB colorspace is to use a fragment shader associated with the
     * #ClutterTexture material.
     */
    set_from_yuv_data(data: Uint8Array, width: number, height: number, flags: Clutter.TextureFlags): boolean
    /**
     * Sets whether `texture` should have a preferred size maintaining
     * the aspect ratio of the underlying image
     */
    set_keep_aspect_ratio(keep_aspect: boolean): void
    /**
     * Sets whether `texture` should use a worker thread to load the data
     * from disk asynchronously. Setting `load_async` to %TRUE will make
     * clutter_texture_set_from_file() return immediately.
     * 
     * See the #ClutterTexture:load-async property documentation, and
     * clutter_texture_set_load_data_async().
     */
    set_load_async(load_async: boolean): void
    /**
     * Sets whether `texture` should use a worker thread to load the data
     * from disk asynchronously. Setting `load_async` to %TRUE will make
     * clutter_texture_set_from_file() block until the #ClutterTexture has
     * determined the width and height of the image data.
     * 
     * See the #ClutterTexture:load-async property documentation, and
     * clutter_texture_set_load_async().
     */
    set_load_data_async(load_async: boolean): void
    /**
     * Sets whether `texture` should have it's shape defined by the alpha
     * channel when picking.
     * 
     * Be aware that this is a bit more costly than the default picking
     * due to the texture lookup, extra test against the alpha value and
     * the fact that it will also interrupt the batching of geometry done
     * internally.
     * 
     * Also there is currently no control over the threshold used to
     * determine what value of alpha is considered pickable, and so only
     * fully opaque parts of the texture will react to picking.
     */
    set_pick_with_alpha(pick_with_alpha: boolean): void
    /**
     * Sets whether the `texture` should repeat horizontally or
     * vertically when the actor size is bigger than the image size
     */
    set_repeat(repeat_x: boolean, repeat_y: boolean): void
    /**
     * Sets whether `texture` should have the same preferred size as the
     * underlying image data.
     */
    set_sync_size(sync_size: boolean): void
    /* Methods of Clutter-1.0.Clutter.Actor */
    /**
     * Adds `action` to the list of actions applied to `self`
     * 
     * A #ClutterAction can only belong to one actor at a time
     * 
     * The #ClutterActor will hold a reference on `action` until either
     * clutter_actor_remove_action() or clutter_actor_clear_actions()
     * is called
     */
    add_action(action: Clutter.Action): void
    /**
     * A convenience function for setting the name of a #ClutterAction
     * while adding it to the list of actions applied to `self`
     * 
     * This function is the logical equivalent of:
     * 
     * 
     * ```c
     *   clutter_actor_meta_set_name (CLUTTER_ACTOR_META (action), name);
     *   clutter_actor_add_action (self, action);
     * ```
     * 
     */
    add_action_with_name(name: string, action: Clutter.Action): void
    /**
     * Adds `child` to the children of `self`.
     * 
     * This function will acquire a reference on `child` that will only
     * be released when calling clutter_actor_remove_child().
     * 
     * This function will take into consideration the #ClutterActor:depth
     * of `child,` and will keep the list of children sorted.
     * 
     * This function will emit the #ClutterContainer::actor-added signal
     * on `self`.
     */
    add_child(child: Clutter.Actor): void
    /**
     * Adds `constraint` to the list of #ClutterConstraint<!-- -->s applied
     * to `self`
     * 
     * The #ClutterActor will hold a reference on the `constraint` until
     * either clutter_actor_remove_constraint() or
     * clutter_actor_clear_constraints() is called.
     */
    add_constraint(constraint: Clutter.Constraint): void
    /**
     * A convenience function for setting the name of a #ClutterConstraint
     * while adding it to the list of constraints applied to `self`
     * 
     * This function is the logical equivalent of:
     * 
     * 
     * ```c
     *   clutter_actor_meta_set_name (CLUTTER_ACTOR_META (constraint), name);
     *   clutter_actor_add_constraint (self, constraint);
     * ```
     * 
     */
    add_constraint_with_name(name: string, constraint: Clutter.Constraint): void
    /**
     * Adds `effect` to the list of #ClutterEffect<!-- -->s applied to `self`
     * 
     * The #ClutterActor will hold a reference on the `effect` until either
     * clutter_actor_remove_effect() or clutter_actor_clear_effects() is
     * called.
     * 
     * Note that as #ClutterEffect is initially unowned,
     * clutter_actor_add_effect() will sink any floating reference on `effect`.
     */
    add_effect(effect: Clutter.Effect): void
    /**
     * A convenience function for setting the name of a #ClutterEffect
     * while adding it to the list of effects applied to `self`.
     * 
     * Note that as #ClutterEffect is initially unowned,
     * clutter_actor_add_effect_with_name() will sink any floating
     * reference on `effect`.
     * 
     * This function is the logical equivalent of:
     * 
     * 
     * ```c
     *   clutter_actor_meta_set_name (CLUTTER_ACTOR_META (effect), name);
     *   clutter_actor_add_effect (self, effect);
     * ```
     * 
     */
    add_effect_with_name(name: string, effect: Clutter.Effect): void
    /**
     * Adds a `transition` to the #ClutterActor's list of animations.
     * 
     * The `name` string is a per-actor unique identifier of the `transition:` only
     * one #ClutterTransition can be associated to the specified `name`.
     * 
     * The `transition` will be started once added.
     * 
     * This function will take a reference on the `transition`.
     * 
     * This function is usually called implicitly when modifying an animatable
     * property.
     */
    add_transition(name: string, transition: Clutter.Transition): void
    /**
     * Assigns the size of a #ClutterActor from the given `box`.
     * 
     * This function should only be called on the children of an actor when
     * overriding the #ClutterActorClass.allocate() virtual function.
     * 
     * This function will adjust the stored allocation to take into account
     * the alignment flags set in the #ClutterActor:x-align and
     * #ClutterActor:y-align properties, as well as the margin values set in
     * the #ClutterActor:margin-top, #ClutterActor:margin-right,
     * #ClutterActor:margin-bottom, and #ClutterActor:margin-left properties.
     * 
     * This function will respect the easing state of the #ClutterActor and
     * interpolate between the current allocation and the new one if the
     * easing state duration is a positive value.
     * 
     * Actors can know from their allocation box whether they have moved
     * with respect to their parent actor. The `flags` parameter describes
     * additional information about the allocation, for instance whether
     * the parent has moved with respect to the stage, for example because
     * a grandparent's origin has moved.
     */
    allocate(box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    /**
     * Allocates `self` by taking into consideration the available allocation
     * area; an alignment factor on either axis; and whether the actor should
     * fill the allocation on either axis.
     * 
     * The `box` should contain the available allocation width and height;
     * if the x1 and y1 members of #ClutterActorBox are not set to 0, the
     * allocation will be offset by their value.
     * 
     * This function takes into consideration the geometry request specified by
     * the #ClutterActor:request-mode property, and the text direction.
     * 
     * This function is useful for fluid layout managers using legacy alignment
     * flags. Newly written layout managers should use the #ClutterActor:x-align
     * and #ClutterActor:y-align properties, instead, and just call
     * clutter_actor_allocate() inside their #ClutterActorClass.allocate()
     * implementation.
     */
    allocate_align_fill(box: Clutter.ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean, flags: Clutter.AllocationFlags): void
    /**
     * Allocates `self` taking into account the #ClutterActor's
     * preferred size, but limiting it to the maximum available width
     * and height provided.
     * 
     * This function will do the right thing when dealing with the
     * actor's request mode.
     * 
     * The implementation of this function is equivalent to:
     * 
     * 
     * ```c
     *   if (request_mode == CLUTTER_REQUEST_HEIGHT_FOR_WIDTH)
     *     {
     *       clutter_actor_get_preferred_width (self, available_height,
     *                                          &min_width,
     *                                          &natural_width);
     *       width = CLAMP (natural_width, min_width, available_width);
     * 
     *       clutter_actor_get_preferred_height (self, width,
     *                                           &min_height,
     *                                           &natural_height);
     *       height = CLAMP (natural_height, min_height, available_height);
     *     }
     *   else if (request_mode == CLUTTER_REQUEST_WIDTH_FOR_HEIGHT)
     *     {
     *       clutter_actor_get_preferred_height (self, available_width,
     *                                           &min_height,
     *                                           &natural_height);
     *       height = CLAMP (natural_height, min_height, available_height);
     * 
     *       clutter_actor_get_preferred_width (self, height,
     *                                          &min_width,
     *                                          &natural_width);
     *       width = CLAMP (natural_width, min_width, available_width);
     *     }
     *   else if (request_mode == CLUTTER_REQUEST_CONTENT_SIZE)
     *     {
     *       clutter_content_get_preferred_size (content, &natural_width, &natural_height);
     * 
     *       width = CLAMP (natural_width, 0, available_width);
     *       height = CLAMP (natural_height, 0, available_height);
     *     }
     * 
     *   box.x1 = x; box.y1 = y;
     *   box.x2 = box.x1 + available_width;
     *   box.y2 = box.y1 + available_height;
     *   clutter_actor_allocate (self, &box, flags);
     * ```
     * 
     * 
     * This function can be used by fluid layout managers to allocate
     * an actor's preferred size without making it bigger than the area
     * available for the container.
     */
    allocate_available_size(x: number, y: number, available_width: number, available_height: number, flags: Clutter.AllocationFlags): void
    /**
     * Allocates the natural size of `self`.
     * 
     * This function is a utility call for #ClutterActor implementations
     * that allocates the actor's preferred natural size. It can be used
     * by fixed layout managers (like #ClutterGroup or so called
     * 'composite actors') inside the ClutterActor::allocate
     * implementation to give each child exactly how much space it
     * requires, regardless of the size of the parent.
     * 
     * This function is not meant to be used by applications. It is also
     * not meant to be used outside the implementation of the
     * #ClutterActorClass.allocate virtual function.
     */
    allocate_preferred_size(flags: Clutter.AllocationFlags): void
    /**
     * Animates the given list of properties of `actor` between the current
     * value for each property and a new final value. The animation has a
     * definite behaviour given by the passed `alpha`.
     * 
     * See clutter_actor_animate() for further details.
     * 
     * This function is useful if you want to use an existing #ClutterAlpha
     * to animate `actor`.
     * 
     * This is the vector-based variant of clutter_actor_animate_with_alpha(),
     * useful for language bindings.
     * 
     * Unlike clutter_actor_animate_with_alpha(), this function will
     * not allow you to specify "signal::" names and callbacks.
     */
    animate_with_alphav(alpha: Clutter.Alpha, properties: string[], values: any[]): Clutter.Animation
    /**
     * Animates the given list of properties of `actor` between the current
     * value for each property and a new final value. The animation has a
     * definite duration given by `timeline` and a speed given by the `mode`.
     * 
     * See clutter_actor_animate() for further details.
     * 
     * This function is useful if you want to use an existing timeline
     * to animate `actor`.
     * 
     * This is the vector-based variant of clutter_actor_animate_with_timeline(),
     * useful for language bindings.
     * 
     * Unlike clutter_actor_animate_with_timeline(), this function
     * will not allow you to specify "signal::" names and callbacks.
     */
    animate_with_timelinev(mode: number, timeline: Clutter.Timeline, properties: string[], values: any[]): Clutter.Animation
    /**
     * Animates the given list of properties of `actor` between the current
     * value for each property and a new final value. The animation has a
     * definite duration and a speed given by the `mode`.
     * 
     * This is the vector-based variant of clutter_actor_animate(), useful
     * for language bindings.
     * 
     * Unlike clutter_actor_animate(), this function will not
     * allow you to specify "signal::" names and callbacks.
     */
    animatev(mode: number, duration: number, properties: string[], values: any[]): Clutter.Animation
    /**
     * Transforms `point` in coordinates relative to the actor into
     * ancestor-relative coordinates using the relevant transform
     * stack (i.e. scale, rotation, etc).
     * 
     * If `ancestor` is %NULL the ancestor will be the #ClutterStage. In
     * this case, the coordinates returned will be the coordinates on
     * the stage before the projection is applied. This is different from
     * the behaviour of clutter_actor_apply_transform_to_point().
     */
    apply_relative_transform_to_point(ancestor: Clutter.Actor | null, point: Clutter.Vertex): /* vertex */ Clutter.Vertex
    /**
     * Transforms `point` in coordinates relative to the actor
     * into screen-relative coordinates with the current actor
     * transformation (i.e. scale, rotation, etc)
     */
    apply_transform_to_point(point: Clutter.Vertex): /* vertex */ Clutter.Vertex
    /**
     * Binds a #GListModel to a #ClutterActor.
     * 
     * If the #ClutterActor was already bound to a #GListModel, the previous
     * binding is destroyed.
     * 
     * The existing children of #ClutterActor are destroyed when setting a
     * model, and new children are created and added, representing the contents
     * of the `model`. The #ClutterActor is updated whenever the `model` changes.
     * If `model` is %NULL, the #ClutterActor is left empty.
     * 
     * When a #ClutterActor is bound to a model, adding and removing children
     * directly is undefined behaviour.
     */
    bind_model(model: Gio.ListModel | null, create_child_func: Clutter.ActorCreateChildFunc): void
    /**
     * Clears the list of actions applied to `self`
     */
    clear_actions(): void
    /**
     * Clears the list of constraints applied to `self`
     */
    clear_constraints(): void
    /**
     * Clears the list of effects applied to `self`
     */
    clear_effects(): void
    /**
     * Determines if `descendant` is contained inside `self` (either as an
     * immediate child, or as a deeper descendant). If `self` and
     * `descendant` point to the same actor then it will also return %TRUE.
     */
    contains(descendant: Clutter.Actor): boolean
    /**
     * Run the next stage of the paint sequence. This function should only
     * be called within the implementation of the ‘run’ virtual of a
     * #ClutterEffect. It will cause the run method of the next effect to
     * be applied, or it will paint the actual actor if the current effect
     * is the last effect in the chain.
     */
    continue_paint(): void
    /**
     * Creates a #PangoContext for the given actor. The #PangoContext
     * is already configured using the appropriate font map, resolution
     * and font options.
     * 
     * See also clutter_actor_get_pango_context().
     */
    create_pango_context(): Pango.Context
    /**
     * Creates a new #PangoLayout from the same #PangoContext used
     * by the #ClutterActor. The #PangoLayout is already configured
     * with the font map, resolution and font options, and the
     * given `text`.
     * 
     * If you want to keep around a #PangoLayout created by this
     * function you will have to connect to the #ClutterBackend::font-changed
     * and #ClutterBackend::resolution-changed signals, and call
     * pango_layout_context_changed() in response to them.
     */
    create_pango_layout(text?: string | null): Pango.Layout
    /**
     * Destroys an actor.  When an actor is destroyed, it will break any
     * references it holds to other objects.  If the actor is inside a
     * container, the actor will be removed.
     * 
     * When you destroy a container, its children will be destroyed as well.
     * 
     * Note: you cannot destroy the #ClutterStage returned by
     * clutter_stage_get_default().
     */
    destroy(): void
    /**
     * Destroys all children of `self`.
     * 
     * This function releases the reference added by inserting a child
     * actor in the list of children of `self,` and ensures that the
     * #ClutterActor::destroy signal is emitted on each child of the
     * actor.
     * 
     * By default, #ClutterActor will emit the #ClutterActor::destroy signal
     * when its reference count drops to 0; the default handler of the
     * #ClutterActor::destroy signal will destroy all the children of an
     * actor. This function ensures that all children are destroyed, instead
     * of just removed from `self,` unlike clutter_actor_remove_all_children()
     * which will merely release the reference and remove each child.
     * 
     * Unless you acquired an additional reference on each child of `self`
     * prior to calling clutter_actor_remove_all_children() and want to reuse
     * the actors, you should use clutter_actor_destroy_all_children() in
     * order to make sure that children are destroyed and signal handlers
     * are disconnected even in cases where circular references prevent this
     * from automatically happening through reference counting alone.
     */
    destroy_all_children(): void
    /**
     * Detaches the #ClutterAnimation used by `actor,` if clutter_actor_animate()
     * has been called on `actor`.
     * 
     * Once the animation has been detached, it loses a reference. If it was
     * the only reference then the #ClutterAnimation becomes invalid.
     * 
     * The #ClutterAnimation::completed signal will not be emitted.
     */
    detach_animation(): void
    /**
     * This function is used to emit an event on the main stage.
     * You should rarely need to use this function, except for
     * synthetising events.
     */
    event(event: Clutter.Event, capture: boolean): boolean
    /**
     * Calculates the transformed screen coordinates of the four corners of
     * the actor; the returned vertices relate to the #ClutterActorBox
     * coordinates  as follows:
     * 
     *  - v[0] contains (x1, y1)
     *  - v[1] contains (x2, y1)
     *  - v[2] contains (x1, y2)
     *  - v[3] contains (x2, y2)
     */
    get_abs_allocation_vertices(): /* verts */ Clutter.Vertex[]
    /**
     * Returns the accessible object that describes the actor to an
     * assistive technology.
     * 
     * If no class-specific #AtkObject implementation is available for the
     * actor instance in question, it will inherit an #AtkObject
     * implementation from the first ancestor class for which such an
     * implementation is defined.
     * 
     * The documentation of the <ulink
     * url="http://developer.gnome.org/doc/API/2.0/atk/index.html">ATK</ulink>
     * library contains more information about accessible objects and
     * their uses.
     */
    get_accessible(): Atk.Object
    /**
     * Retrieves the #ClutterAction with the given name in the list
     * of actions applied to `self`
     */
    get_action(name: string): Clutter.Action
    /**
     * Retrieves the list of actions applied to `self`
     */
    get_actions(): Clutter.Action[]
    /**
     * Gets the layout box an actor has been assigned. The allocation can
     * only be assumed valid inside a paint() method; anywhere else, it
     * may be out-of-date.
     * 
     * An allocation does not incorporate the actor's scale or anchor point;
     * those transformations do not affect layout, only rendering.
     * 
     * Do not call any of the clutter_actor_get_allocation_*() family
     * of functions inside the implementation of the get_preferred_width()
     * or get_preferred_height() virtual functions.
     */
    get_allocation_box(): /* box */ Clutter.ActorBox
    /**
     * Gets the layout box an actor has been assigned.  The allocation can
     * only be assumed valid inside a paint() method; anywhere else, it
     * may be out-of-date.
     * 
     * An allocation does not incorporate the actor's scale or anchor point;
     * those transformations do not affect layout, only rendering.
     * 
     * The returned rectangle is in pixels.
     */
    get_allocation_geometry(): /* geom */ Clutter.Geometry
    /**
     * Calculates the transformed coordinates of the four corners of the
     * actor in the plane of `ancestor`. The returned vertices relate to
     * the #ClutterActorBox coordinates as follows:
     * 
     *  - `verts[`0] contains (x1, y1)
     *  - `verts[`1] contains (x2, y1)
     *  - `verts[`2] contains (x1, y2)
     *  - `verts[`3] contains (x2, y2)
     * 
     * If `ancestor` is %NULL the ancestor will be the #ClutterStage. In
     * this case, the coordinates returned will be the coordinates on
     * the stage before the projection is applied. This is different from
     * the behaviour of clutter_actor_get_abs_allocation_vertices().
     */
    get_allocation_vertices(ancestor?: Clutter.Actor | null): /* verts */ Clutter.Vertex[]
    /**
     * Gets the current anchor point of the `actor` in pixels.
     */
    get_anchor_point(): [ /* anchor_x */ number, /* anchor_y */ number ]
    /**
     * Retrieves the anchor position expressed as a #ClutterGravity. If
     * the anchor point was specified using pixels or units this will
     * return %CLUTTER_GRAVITY_NONE.
     */
    get_anchor_point_gravity(): Clutter.Gravity
    /**
     * Retrieves the #ClutterAnimation used by `actor,` if clutter_actor_animate()
     * has been called on `actor`.
     */
    get_animation(): Clutter.Animation
    /**
     * Retrieves the color set using clutter_actor_set_background_color().
     */
    get_background_color(): /* color */ Clutter.Color
    /**
     * Retrieves the actor at the given `index_` inside the list of
     * children of `self`.
     */
    get_child_at_index(index_: number): Clutter.Actor
    /**
     * Retrieves the child transformation matrix set using
     * clutter_actor_set_child_transform(); if none is currently set,
     * the `transform` matrix will be initialized to the identity matrix.
     */
    get_child_transform(): /* transform */ Clutter.Matrix
    /**
     * Retrieves the list of children of `self`.
     */
    get_children(): Clutter.Actor[]
    /**
     * Gets the clip area for `self,` if any is set.
     */
    get_clip(): [ /* xoff */ number | null, /* yoff */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Retrieves the value set using clutter_actor_set_clip_to_allocation()
     */
    get_clip_to_allocation(): boolean
    /**
     * Retrieves the #ClutterConstraint with the given name in the list
     * of constraints applied to `self`
     */
    get_constraint(name: string): Clutter.Constraint
    /**
     * Retrieves the list of constraints applied to `self`
     */
    get_constraints(): Clutter.Constraint[]
    /**
     * Retrieves the contents of `self`.
     */
    get_content(): Clutter.Content
    /**
     * Retrieves the bounding box for the #ClutterContent of `self`.
     * 
     * The bounding box is relative to the actor's allocation.
     * 
     * If no #ClutterContent is set for `self,` or if `self` has not been
     * allocated yet, then the result is undefined.
     * 
     * The content box is guaranteed to be, at most, as big as the allocation
     * of the #ClutterActor.
     * 
     * If the #ClutterContent used by the actor has a preferred size, then
     * it is possible to modify the content box by using the
     * #ClutterActor:content-gravity property.
     */
    get_content_box(): /* box */ Clutter.ActorBox
    /**
     * Retrieves the content gravity as set using
     * clutter_actor_set_content_gravity().
     */
    get_content_gravity(): Clutter.ContentGravity
    /**
     * Retrieves the repeat policy for a #ClutterActor set by
     * clutter_actor_set_content_repeat().
     */
    get_content_repeat(): Clutter.ContentRepeat
    /**
     * Retrieves the values set using clutter_actor_set_content_scaling_filters().
     */
    get_content_scaling_filters(): [ /* min_filter */ Clutter.ScalingFilter | null, /* mag_filter */ Clutter.ScalingFilter | null ]
    /**
     * Retrieves the default paint volume for `self`.
     * 
     * This function provides the same #ClutterPaintVolume that would be
     * computed by the default implementation inside #ClutterActor of the
     * #ClutterActorClass.get_paint_volume() virtual function.
     * 
     * This function should only be used by #ClutterActor subclasses that
     * cannot chain up to the parent implementation when computing their
     * paint volume.
     */
    get_default_paint_volume(): Clutter.PaintVolume
    /**
     * Retrieves the depth of `self`.
     */
    get_depth(): number
    /**
     * Retrieves the delay that should be applied when tweening animatable
     * properties.
     */
    get_easing_delay(): number
    /**
     * Retrieves the duration of the tweening for animatable
     * properties of `self` for the current easing state.
     */
    get_easing_duration(): number
    /**
     * Retrieves the easing mode for the tweening of animatable properties
     * of `self` for the current easing state.
     */
    get_easing_mode(): Clutter.AnimationMode
    /**
     * Retrieves the #ClutterEffect with the given name in the list
     * of effects applied to `self`
     */
    get_effect(name: string): Clutter.Effect
    /**
     * Retrieves the #ClutterEffect<!-- -->s applied on `self,` if any
     */
    get_effects(): Clutter.Effect[]
    /**
     * Retrieves the first child of `self`.
     * 
     * The returned pointer is only valid until the scene graph changes; it
     * is not safe to modify the list of children of `self` while iterating
     * it.
     */
    get_first_child(): Clutter.Actor
    /**
     * Checks whether an actor has a fixed position set (and will thus be
     * unaffected by any layout manager).
     */
    get_fixed_position_set(): boolean
    /**
     * Retrieves the flags set on `self`
     */
    get_flags(): Clutter.ActorFlags
    /**
     * Gets the size and position of an actor relative to its parent
     * actor. This is the same as calling clutter_actor_get_position() and
     * clutter_actor_get_size(). It tries to "do what you mean" and get the
     * requested size and position if the actor's allocation is invalid.
     */
    get_geometry(): /* geometry */ Clutter.Geometry
    /**
     * Retrieves the unique id for `self`.
     */
    get_gid(): number
    /**
     * Retrieves the height of a #ClutterActor.
     * 
     * If the actor has a valid allocation, this function will return the
     * height of the allocated area given to the actor.
     * 
     * If the actor does not have a valid allocation, this function will
     * return the actor's natural height, that is the preferred height of
     * the actor.
     * 
     * If you care whether you get the preferred height or the height that
     * has been assigned to the actor, you should probably call a different
     * function like clutter_actor_get_allocation_box() to retrieve the
     * allocated size or clutter_actor_get_preferred_height() to retrieve the
     * preferred height.
     * 
     * If an actor has a fixed height, for instance a height that has been
     * assigned using clutter_actor_set_height(), the height returned will
     * be the same value.
     */
    get_height(): number
    /**
     * Retrieves the last child of `self`.
     * 
     * The returned pointer is only valid until the scene graph changes; it
     * is not safe to modify the list of children of `self` while iterating
     * it.
     */
    get_last_child(): Clutter.Actor
    /**
     * Retrieves the #ClutterLayoutManager used by `self`.
     */
    get_layout_manager(): Clutter.LayoutManager
    /**
     * Retrieves all the components of the margin of a #ClutterActor.
     */
    get_margin(): /* margin */ Clutter.Margin
    /**
     * Retrieves the bottom margin of a #ClutterActor.
     */
    get_margin_bottom(): number
    /**
     * Retrieves the left margin of a #ClutterActor.
     */
    get_margin_left(): number
    /**
     * Retrieves the right margin of a #ClutterActor.
     */
    get_margin_right(): number
    /**
     * Retrieves the top margin of a #ClutterActor.
     */
    get_margin_top(): number
    /**
     * Retrieves the number of children of `self`.
     */
    get_n_children(): number
    /**
     * Retrieves the name of `self`.
     */
    get_name(): string
    /**
     * Retrieves the sibling of `self` that comes after it in the list
     * of children of `self'`s parent.
     * 
     * The returned pointer is only valid until the scene graph changes; it
     * is not safe to modify the list of children of `self` while iterating
     * it.
     */
    get_next_sibling(): Clutter.Actor
    /**
     * Retrieves whether to redirect the actor to an offscreen buffer, as
     * set by clutter_actor_set_offscreen_redirect().
     */
    get_offscreen_redirect(): Clutter.OffscreenRedirect
    /**
     * Retrieves the opacity value of an actor, as set by
     * clutter_actor_set_opacity().
     * 
     * For retrieving the absolute opacity of the actor inside a paint
     * virtual function, see clutter_actor_get_paint_opacity().
     */
    get_opacity(): number
    /**
     * Retrieves the paint volume of the passed #ClutterActor, and
     * transforms it into a 2D bounding box in stage coordinates.
     * 
     * This function is useful to determine the on screen area occupied by
     * the actor. The box is only an approximation and may often be
     * considerably larger due to the optimizations used to calculate the
     * box. The box is never smaller though, so it can reliably be used
     * for culling.
     * 
     * There are times when a 2D paint box can't be determined, e.g.
     * because the actor isn't yet parented under a stage or because
     * the actor is unable to determine a paint volume.
     */
    get_paint_box(): [ /* returnType */ boolean, /* box */ Clutter.ActorBox ]
    /**
     * Retrieves the absolute opacity of the actor, as it appears on the stage.
     * 
     * This function traverses the hierarchy chain and composites the opacity of
     * the actor with that of its parents.
     * 
     * This function is intended for subclasses to use in the paint virtual
     * function, to paint themselves with the correct opacity.
     */
    get_paint_opacity(): number
    /**
     * Retrieves the 'paint' visibility of an actor recursively checking for non
     * visible parents.
     * 
     * This is by definition the same as %CLUTTER_ACTOR_IS_MAPPED.
     */
    get_paint_visibility(): boolean
    /**
     * Retrieves the paint volume of the passed #ClutterActor, or %NULL
     * when a paint volume can't be determined.
     * 
     * The paint volume is defined as the 3D space occupied by an actor
     * when being painted.
     * 
     * This function will call the #ClutterActorClass.get_paint_volume()
     * virtual function of the #ClutterActor class. Sub-classes of #ClutterActor
     * should not usually care about overriding the default implementation,
     * unless they are, for instance: painting outside their allocation, or
     * actors with a depth factor (not in terms of #ClutterActor:depth but real
     * 3D depth).
     * 
     * Note: 2D actors overriding #ClutterActorClass.get_paint_volume()
     * should ensure that their volume has a depth of 0. (This will be true
     * as long as you don't call clutter_paint_volume_set_depth().)
     */
    get_paint_volume(): Clutter.PaintVolume
    /**
     * Retrieves the #PangoContext for `self`. The actor's #PangoContext
     * is already configured using the appropriate font map, resolution
     * and font options.
     * 
     * Unlike clutter_actor_create_pango_context(), this context is owend
     * by the #ClutterActor and it will be updated each time the options
     * stored by the #ClutterBackend change.
     * 
     * You can use the returned #PangoContext to create a #PangoLayout
     * and render text using cogl_pango_render_layout() to reuse the
     * glyphs cache also used by Clutter.
     */
    get_pango_context(): Pango.Context
    /**
     * Retrieves the parent of `self`.
     */
    get_parent(): Clutter.Actor
    /**
     * Retrieves the coordinates of the #ClutterActor:pivot-point.
     */
    get_pivot_point(): [ /* pivot_x */ number | null, /* pivot_y */ number | null ]
    /**
     * Retrieves the Z component of the #ClutterActor:pivot-point.
     */
    get_pivot_point_z(): number
    /**
     * This function tries to "do what you mean" and tell you where the
     * actor is, prior to any transformations. Retrieves the fixed
     * position of an actor in pixels, if one has been set; otherwise, if
     * the allocation is valid, returns the actor's allocated position;
     * otherwise, returns 0,0.
     * 
     * The returned position is in pixels.
     */
    get_position(): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Computes the requested minimum and natural heights for an actor,
     * or if they are already computed, returns the cached values.
     * 
     * An actor may not get its request - depending on the layout
     * manager that's in effect.
     * 
     * A request should not incorporate the actor's scale or anchor point;
     * those transformations do not affect layout, only rendering.
     */
    get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    /**
     * Computes the preferred minimum and natural size of an actor, taking into
     * account the actor's geometry management (either height-for-width
     * or width-for-height).
     * 
     * The width and height used to compute the preferred height and preferred
     * width are the actor's natural ones.
     * 
     * If you need to control the height for the preferred width, or the width for
     * the preferred height, you should use clutter_actor_get_preferred_width()
     * and clutter_actor_get_preferred_height(), and check the actor's preferred
     * geometry management using the #ClutterActor:request-mode property.
     */
    get_preferred_size(): [ /* min_width_p */ number | null, /* min_height_p */ number | null, /* natural_width_p */ number | null, /* natural_height_p */ number | null ]
    /**
     * Computes the requested minimum and natural widths for an actor,
     * optionally depending on the specified height, or if they are
     * already computed, returns the cached values.
     * 
     * An actor may not get its request - depending on the layout
     * manager that's in effect.
     * 
     * A request should not incorporate the actor's scale or anchor point;
     * those transformations do not affect layout, only rendering.
     */
    get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    /**
     * Retrieves the sibling of `self` that comes before it in the list
     * of children of `self'`s parent.
     * 
     * The returned pointer is only valid until the scene graph changes; it
     * is not safe to modify the list of children of `self` while iterating
     * it.
     */
    get_previous_sibling(): Clutter.Actor
    /**
     * Checks whether `actor` is marked as reactive.
     */
    get_reactive(): boolean
    /**
     * Retrieves the geometry request mode of `self`
     */
    get_request_mode(): Clutter.RequestMode
    /**
     * Retrieves the angle and center of rotation on the given axis,
     * set using clutter_actor_set_rotation().
     */
    get_rotation(axis: Clutter.RotateAxis): [ /* returnType */ number, /* x */ number, /* y */ number, /* z */ number ]
    /**
     * Retrieves the angle of rotation set by clutter_actor_set_rotation_angle().
     */
    get_rotation_angle(axis: Clutter.RotateAxis): number
    /**
     * Retrieves an actors scale factors.
     */
    get_scale(): [ /* scale_x */ number | null, /* scale_y */ number | null ]
    /**
     * Retrieves the scale center coordinate in pixels relative to the top
     * left corner of the actor. If the scale center was specified using a
     * #ClutterGravity this will calculate the pixel offset using the
     * current size of the actor.
     */
    get_scale_center(): [ /* center_x */ number | null, /* center_y */ number | null ]
    /**
     * Retrieves the scale center as a compass direction. If the scale
     * center was specified in pixels or units this will return
     * %CLUTTER_GRAVITY_NONE.
     */
    get_scale_gravity(): Clutter.Gravity
    /**
     * Retrieves the scaling factor along the Z axis, as set using
     * clutter_actor_set_scale_z().
     */
    get_scale_z(): number
    /**
     * Queries the currently set #ClutterShader on `self`.
     */
    get_shader(): Clutter.Shader
    /**
     * This function tries to "do what you mean" and return
     * the size an actor will have. If the actor has a valid
     * allocation, the allocation will be returned; otherwise,
     * the actors natural size request will be returned.
     * 
     * If you care whether you get the request vs. the allocation, you
     * should probably call a different function like
     * clutter_actor_get_allocation_box() or
     * clutter_actor_get_preferred_width().
     */
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Retrieves the #ClutterStage where `actor` is contained.
     */
    get_stage(): Clutter.Stage
    /**
     * Retrieves the value set using clutter_actor_set_text_direction()
     * 
     * If no text direction has been previously set, the default text
     * direction, as returned by clutter_get_default_text_direction(), will
     * be returned instead
     */
    get_text_direction(): Clutter.TextDirection
    /**
     * Retrieves the current transformation matrix of a #ClutterActor.
     */
    get_transform(): /* transform */ Clutter.Matrix
    /**
     * Retrieves the transformations applied to `self` relative to its
     * parent.
     */
    get_transformation_matrix(): /* matrix */ Clutter.Matrix
    /**
     * Retrieves the 3D paint volume of an actor like
     * clutter_actor_get_paint_volume() does (Please refer to the
     * documentation of clutter_actor_get_paint_volume() for more
     * details.) and it additionally transforms the paint volume into the
     * coordinate space of `relative_to_ancestor`. (Or the stage if %NULL
     * is passed for `relative_to_ancestor)`
     * 
     * This can be used by containers that base their paint volume on
     * the volume of their children. Such containers can query the
     * transformed paint volume of all of its children and union them
     * together using clutter_paint_volume_union().
     */
    get_transformed_paint_volume(relative_to_ancestor: Clutter.Actor): Clutter.PaintVolume
    /**
     * Gets the absolute position of an actor, in pixels relative to the stage.
     */
    get_transformed_position(): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the absolute size of an actor in pixels, taking into account the
     * scaling factors.
     * 
     * If the actor has a valid allocation, the allocated size will be used.
     * If the actor has not a valid allocation then the preferred size will
     * be transformed and returned.
     * 
     * If you want the transformed allocation, see
     * clutter_actor_get_abs_allocation_vertices() instead.
     * 
     * When the actor (or one of its ancestors) is rotated around the
     * X or Y axis, it no longer appears as on the stage as a rectangle, but
     * as a generic quadrangle; in that case this function returns the size
     * of the smallest rectangle that encapsulates the entire quad. Please
     * note that in this case no assumptions can be made about the relative
     * position of this envelope to the absolute position of the actor, as
     * returned by clutter_actor_get_transformed_position(); if you need this
     * information, you need to use clutter_actor_get_abs_allocation_vertices()
     * to get the coords of the actual quadrangle.
     */
    get_transformed_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Retrieves the #ClutterTransition of a #ClutterActor by using the
     * transition `name`.
     * 
     * Transitions created for animatable properties use the name of the
     * property itself, for instance the code below:
     * 
     * 
     * ```c
     *   clutter_actor_set_easing_duration (actor, 1000);
     *   clutter_actor_set_rotation (actor, CLUTTER_Y_AXIS, 360.0, x, y, z);
     * 
     *   transition = clutter_actor_get_transition (actor, "rotation-angle-y");
     *   g_signal_connect (transition, "stopped",
     *                     G_CALLBACK (on_transition_stopped),
     *                     actor);
     * ```
     * 
     * 
     * will call the `on_transition_stopped` callback when the transition
     * is finished.
     * 
     * If you just want to get notifications of the completion of a transition,
     * you should use the #ClutterActor::transition-stopped signal, using the
     * transition name as the signal detail.
     */
    get_transition(name: string): Clutter.Transition
    /**
     * Retrieves the translation set using clutter_actor_set_translation().
     */
    get_translation(): [ /* translate_x */ number | null, /* translate_y */ number | null, /* translate_z */ number | null ]
    /**
     * Retrieves the width of a #ClutterActor.
     * 
     * If the actor has a valid allocation, this function will return the
     * width of the allocated area given to the actor.
     * 
     * If the actor does not have a valid allocation, this function will
     * return the actor's natural width, that is the preferred width of
     * the actor.
     * 
     * If you care whether you get the preferred width or the width that
     * has been assigned to the actor, you should probably call a different
     * function like clutter_actor_get_allocation_box() to retrieve the
     * allocated size or clutter_actor_get_preferred_width() to retrieve the
     * preferred width.
     * 
     * If an actor has a fixed width, for instance a width that has been
     * assigned using clutter_actor_set_width(), the width returned will
     * be the same value.
     */
    get_width(): number
    /**
     * Retrieves the X coordinate of a #ClutterActor.
     * 
     * This function tries to "do what you mean", by returning the
     * correct value depending on the actor's state.
     * 
     * If the actor has a valid allocation, this function will return
     * the X coordinate of the origin of the allocation box.
     * 
     * If the actor has any fixed coordinate set using clutter_actor_set_x(),
     * clutter_actor_set_position() or clutter_actor_set_geometry(), this
     * function will return that coordinate.
     * 
     * If both the allocation and a fixed position are missing, this function
     * will return 0.
     */
    get_x(): number
    /**
     * Retrieves the horizontal alignment policy set using
     * clutter_actor_set_x_align().
     */
    get_x_align(): Clutter.ActorAlign
    /**
     * Retrieves the value set with clutter_actor_set_x_expand().
     * 
     * See also: clutter_actor_needs_expand()
     */
    get_x_expand(): boolean
    /**
     * Retrieves the Y coordinate of a #ClutterActor.
     * 
     * This function tries to "do what you mean", by returning the
     * correct value depending on the actor's state.
     * 
     * If the actor has a valid allocation, this function will return
     * the Y coordinate of the origin of the allocation box.
     * 
     * If the actor has any fixed coordinate set using clutter_actor_set_y(),
     * clutter_actor_set_position() or clutter_actor_set_geometry(), this
     * function will return that coordinate.
     * 
     * If both the allocation and a fixed position are missing, this function
     * will return 0.
     */
    get_y(): number
    /**
     * Retrieves the vertical alignment policy set using
     * clutter_actor_set_y_align().
     */
    get_y_align(): Clutter.ActorAlign
    /**
     * Retrieves the value set with clutter_actor_set_y_expand().
     * 
     * See also: clutter_actor_needs_expand()
     */
    get_y_expand(): boolean
    /**
     * Retrieves the actor's position on the Z axis.
     */
    get_z_position(): number
    /**
     * Retrieves the center for the rotation around the Z axis as a
     * compass direction. If the center was specified in pixels or units
     * this will return %CLUTTER_GRAVITY_NONE.
     */
    get_z_rotation_gravity(): Clutter.Gravity
    /**
     * Sets the key focus of the #ClutterStage including `self`
     * to this #ClutterActor.
     */
    grab_key_focus(): void
    /**
     * Returns whether the actor has any actions applied.
     */
    has_actions(): boolean
    /**
     * Checks if the actor has an up-to-date allocation assigned to
     * it. This means that the actor should have an allocation: it's
     * visible and has a parent. It also means that there is no
     * outstanding relayout request in progress for the actor or its
     * children (There might be other outstanding layout requests in
     * progress that will cause the actor to get a new allocation
     * when the stage is laid out, however).
     * 
     * If this function returns %FALSE, then the actor will normally
     * be allocated before it is next drawn on the screen.
     */
    has_allocation(): boolean
    /**
     * Returns whether the actor has any constraints applied.
     */
    has_constraints(): boolean
    /**
     * Returns whether the actor has any effects applied.
     */
    has_effects(): boolean
    /**
     * Checks whether `self` is the #ClutterActor that has key focus
     */
    has_key_focus(): boolean
    /**
     * Asks the actor's implementation whether it may contain overlapping
     * primitives.
     * 
     * For example; Clutter may use this to determine whether the painting
     * should be redirected to an offscreen buffer to correctly implement
     * the opacity property.
     * 
     * Custom actors can override the default response by implementing the
     * #ClutterActorClass.has_overlaps() virtual function. See
     * clutter_actor_set_offscreen_redirect() for more information.
     */
    has_overlaps(): boolean
    /**
     * Flags an actor to be hidden. A hidden actor will not be
     * rendered on the stage.
     * 
     * Actors are visible by default.
     * 
     * If this function is called on an actor without a parent, the
     * #ClutterActor:show-on-set-parent property will be set to %FALSE
     * as a side-effect.
     */
    hide(): void
    /**
     * Calls clutter_actor_hide() on all child actors (if any).
     */
    hide_all(): void
    /**
     * Inserts `child` into the list of children of `self,` above another
     * child of `self` or, if `sibling` is %NULL, above all the children
     * of `self`.
     * 
     * This function will acquire a reference on `child` that will only
     * be released when calling clutter_actor_remove_child().
     * 
     * This function will not take into consideration the #ClutterActor:depth
     * of `child`.
     * 
     * This function will emit the #ClutterContainer::actor-added signal
     * on `self`.
     */
    insert_child_above(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    /**
     * Inserts `child` into the list of children of `self,` using the
     * given `index_`. If `index_` is greater than the number of children
     * in `self,` or is less than 0, then the new child is added at the end.
     * 
     * This function will acquire a reference on `child` that will only
     * be released when calling clutter_actor_remove_child().
     * 
     * This function will not take into consideration the #ClutterActor:depth
     * of `child`.
     * 
     * This function will emit the #ClutterContainer::actor-added signal
     * on `self`.
     */
    insert_child_at_index(child: Clutter.Actor, index_: number): void
    /**
     * Inserts `child` into the list of children of `self,` below another
     * child of `self` or, if `sibling` is %NULL, below all the children
     * of `self`.
     * 
     * This function will acquire a reference on `child` that will only
     * be released when calling clutter_actor_remove_child().
     * 
     * This function will not take into consideration the #ClutterActor:depth
     * of `child`.
     * 
     * This function will emit the #ClutterContainer::actor-added signal
     * on `self`.
     */
    insert_child_below(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    /**
     * Checks whether `self` is being currently painted by a #ClutterClone
     * 
     * This function is useful only inside the ::paint virtual function
     * implementations or within handlers for the #ClutterActor::paint
     * signal
     * 
     * This function should not be used by applications
     */
    is_in_clone_paint(): boolean
    /**
     * Checks whether a #ClutterActor has been set as mapped.
     * 
     * See also %CLUTTER_ACTOR_IS_MAPPED and #ClutterActor:mapped
     */
    is_mapped(): boolean
    /**
     * Checks whether a #ClutterActor is realized.
     * 
     * See also %CLUTTER_ACTOR_IS_REALIZED and #ClutterActor:realized.
     */
    is_realized(): boolean
    /**
     * Checks whether any rotation is applied to the actor.
     */
    is_rotated(): boolean
    /**
     * Checks whether the actor is scaled in either dimension.
     */
    is_scaled(): boolean
    /**
     * Checks whether an actor is marked as visible.
     * 
     * See also %CLUTTER_ACTOR_IS_VISIBLE and #ClutterActor:visible.
     */
    is_visible(): boolean
    /**
     * Puts `self` below `above`.
     * 
     * Both actors must have the same parent, and the parent must implement
     * the #ClutterContainer interface.
     * 
     * This function calls clutter_container_lower_child() internally.
     */
    lower(above?: Clutter.Actor | null): void
    /**
     * Lowers `self` to the bottom.
     * 
     * This function calls clutter_actor_lower() internally.
     */
    lower_bottom(): void
    /**
     * Sets the %CLUTTER_ACTOR_MAPPED flag on the actor and possibly maps
     * and realizes its children if they are visible. Does nothing if the
     * actor is not visible.
     * 
     * Calling this function is strongly disencouraged: the default
     * implementation of #ClutterActorClass.map() will map all the children
     * of an actor when mapping its parent.
     * 
     * When overriding map, it is mandatory to chain up to the parent
     * implementation.
     */
    map(): void
    /**
     * Sets an anchor point for the actor, and adjusts the actor postion so that
     * the relative position of the actor toward its parent remains the same.
     */
    move_anchor_point(anchor_x: number, anchor_y: number): void
    /**
     * Sets an anchor point on the actor based on the given gravity, adjusting the
     * actor postion so that its relative position within its parent remains
     * unchanged.
     * 
     * Since version 1.0 the anchor point will be stored as a gravity so
     * that if the actor changes size then the anchor point will move. For
     * example, if you set the anchor point to %CLUTTER_GRAVITY_SOUTH_EAST
     * and later double the size of the actor, the anchor point will move
     * to the bottom right.
     */
    move_anchor_point_from_gravity(gravity: Clutter.Gravity): void
    /**
     * Moves an actor by the specified distance relative to its current
     * position in pixels.
     * 
     * This function modifies the fixed position of an actor and thus removes
     * it from any layout management. Another way to move an actor is with an
     * anchor point, see clutter_actor_set_anchor_point(), or with an additional
     * translation, using clutter_actor_set_translation().
     */
    move_by(dx: number, dy: number): void
    /**
     * Checks whether an actor, or any of its children, is set to expand
     * horizontally or vertically.
     * 
     * This function should only be called by layout managers that can
     * assign extra space to their children.
     * 
     * If you want to know whether the actor was explicitly set to expand,
     * use clutter_actor_get_x_expand() or clutter_actor_get_y_expand().
     */
    needs_expand(orientation: Clutter.Orientation): boolean
    /**
     * Renders the actor to display.
     * 
     * This function should not be called directly by applications.
     * Call clutter_actor_queue_redraw() to queue paints, instead.
     * 
     * This function is context-aware, and will either cause a
     * regular paint or a pick paint.
     * 
     * This function will emit the #ClutterActor::paint signal or
     * the #ClutterActor::pick signal, depending on the context.
     * 
     * This function does not paint the actor if the actor is set to 0,
     * unless it is performing a pick paint.
     */
    paint(): void
    /**
     * Disables the effects of clutter_actor_push_internal().
     */
    pop_internal(): void
    /**
     * Should be used by actors implementing the #ClutterContainer and with
     * internal children added through clutter_actor_set_parent(), for instance:
     * 
     * 
     * ```c
     *   static void
     *   my_actor_init (MyActor *self)
     *   {
     *     self->priv = my_actor_get_instance_private (self);
     * 
     *     clutter_actor_push_internal (CLUTTER_ACTOR (self));
     * 
     *     // calling clutter_actor_set_parent() now will result in
     *     // the internal flag being set on a child of MyActor
     * 
     *     // internal child - a background texture
     *     self->priv->background_tex = clutter_texture_new ();
     *     clutter_actor_set_parent (self->priv->background_tex,
     *                               CLUTTER_ACTOR (self));
     * 
     *     // internal child - a label
     *     self->priv->label = clutter_text_new ();
     *     clutter_actor_set_parent (self->priv->label,
     *                               CLUTTER_ACTOR (self));
     * 
     *     clutter_actor_pop_internal (CLUTTER_ACTOR (self));
     * 
     *     // calling clutter_actor_set_parent() now will not result in
     *     // the internal flag being set on a child of MyActor
     *   }
     * ```
     * 
     * 
     * This function will be used by Clutter to toggle an "internal child"
     * flag whenever clutter_actor_set_parent() is called; internal children
     * are handled differently by Clutter, specifically when destroying their
     * parent.
     * 
     * Call clutter_actor_pop_internal() when you finished adding internal
     * children.
     * 
     * Nested calls to clutter_actor_push_internal() are allowed, but each
     * one must by followed by a clutter_actor_pop_internal() call.
     */
    push_internal(): void
    /**
     * Queues up a redraw of an actor and any children. The redraw occurs
     * once the main loop becomes idle (after the current batch of events
     * has been processed, roughly).
     * 
     * Applications rarely need to call this, as redraws are handled
     * automatically by modification functions.
     * 
     * This function will not do anything if `self` is not visible, or
     * if the actor is inside an invisible part of the scenegraph.
     * 
     * Also be aware that painting is a NOP for actors with an opacity of
     * 0
     * 
     * When you are implementing a custom actor you must queue a redraw
     * whenever some private state changes that will affect painting or
     * picking of your actor.
     */
    queue_redraw(): void
    /**
     * Queues a redraw on `self` limited to a specific, actor-relative
     * rectangular area.
     * 
     * If `clip` is %NULL this function is equivalent to
     * clutter_actor_queue_redraw().
     */
    queue_redraw_with_clip(clip?: cairo.RectangleInt | null): void
    /**
     * Indicates that the actor's size request or other layout-affecting
     * properties may have changed. This function is used inside #ClutterActor
     * subclass implementations, not by applications directly.
     * 
     * Queueing a new layout automatically queues a redraw as well.
     */
    queue_relayout(): void
    /**
     * Puts `self` above `below`.
     * 
     * Both actors must have the same parent, and the parent must implement
     * the #ClutterContainer interface
     * 
     * This function calls clutter_container_raise_child() internally.
     */
    raise(below?: Clutter.Actor | null): void
    /**
     * Raises `self` to the top.
     * 
     * This function calls clutter_actor_raise() internally.
     */
    raise_top(): void
    /**
     * Realization informs the actor that it is attached to a stage. It
     * can use this to allocate resources if it wanted to delay allocation
     * until it would be rendered. However it is perfectly acceptable for
     * an actor to create resources before being realized because Clutter
     * only ever has a single rendering context so that actor is free to
     * be moved from one stage to another.
     * 
     * This function does nothing if the actor is already realized.
     * 
     * Because a realized actor must have realized parent actors, calling
     * clutter_actor_realize() will also realize all parents of the actor.
     * 
     * This function does not realize child actors, except in the special
     * case that realizing the stage, when the stage is visible, will
     * suddenly map (and thus realize) the children of the stage.
     */
    realize(): void
    /**
     * Removes `action` from the list of actions applied to `self`
     * 
     * The reference held by `self` on the #ClutterAction will be released
     */
    remove_action(action: Clutter.Action): void
    /**
     * Removes the #ClutterAction with the given name from the list
     * of actions applied to `self`
     */
    remove_action_by_name(name: string): void
    /**
     * Removes all children of `self`.
     * 
     * This function releases the reference added by inserting a child actor
     * in the list of children of `self`.
     * 
     * If the reference count of a child drops to zero, the child will be
     * destroyed. If you want to ensure the destruction of all the children
     * of `self,` use clutter_actor_destroy_all_children().
     */
    remove_all_children(): void
    /**
     * Removes all transitions associated to `self`.
     */
    remove_all_transitions(): void
    /**
     * Removes `child` from the children of `self`.
     * 
     * This function will release the reference added by
     * clutter_actor_add_child(), so if you want to keep using `child`
     * you will have to acquire a referenced on it before calling this
     * function.
     * 
     * This function will emit the #ClutterContainer::actor-removed
     * signal on `self`.
     */
    remove_child(child: Clutter.Actor): void
    /**
     * Removes clip area from `self`.
     */
    remove_clip(): void
    /**
     * Removes `constraint` from the list of constraints applied to `self`
     * 
     * The reference held by `self` on the #ClutterConstraint will be released
     */
    remove_constraint(constraint: Clutter.Constraint): void
    /**
     * Removes the #ClutterConstraint with the given name from the list
     * of constraints applied to `self`
     */
    remove_constraint_by_name(name: string): void
    /**
     * Removes `effect` from the list of effects applied to `self`
     * 
     * The reference held by `self` on the #ClutterEffect will be released
     */
    remove_effect(effect: Clutter.Effect): void
    /**
     * Removes the #ClutterEffect with the given name from the list
     * of effects applied to `self`
     */
    remove_effect_by_name(name: string): void
    /**
     * Removes the transition stored inside a #ClutterActor using `name`
     * identifier.
     * 
     * If the transition is currently in progress, it will be stopped.
     * 
     * This function releases the reference acquired when the transition
     * was added to the #ClutterActor.
     */
    remove_transition(name: string): void
    /**
     * Resets the parent actor of `self`.
     * 
     * This function is logically equivalent to calling clutter_actor_unparent()
     * and clutter_actor_set_parent(), but more efficiently implemented, as it
     * ensures the child is not finalized when unparented, and emits the
     * #ClutterActor::parent-set signal only once.
     * 
     * In reality, calling this function is less useful than it sounds, as some
     * application code may rely on changes in the intermediate state between
     * removal and addition of the actor from its old parent to the `new_parent`.
     * Thus, it is strongly encouraged to avoid using this function in application
     * code.
     */
    reparent(new_parent: Clutter.Actor): void
    /**
     * Replaces `old_child` with `new_child` in the list of children of `self`.
     */
    replace_child(old_child: Clutter.Actor, new_child: Clutter.Actor): void
    /**
     * Restores the easing state as it was prior to a call to
     * clutter_actor_save_easing_state().
     */
    restore_easing_state(): void
    /**
     * Saves the current easing state for animatable properties, and creates
     * a new state with the default values for easing mode and duration.
     * 
     * New transitions created after calling this function will inherit the
     * duration, easing mode, and delay of the new easing state; this also
     * applies to transitions modified in flight.
     */
    save_easing_state(): void
    /**
     * Stores the allocation of `self` as defined by `box`.
     * 
     * This function can only be called from within the implementation of
     * the #ClutterActorClass.allocate() virtual function.
     * 
     * The allocation should have been adjusted to take into account constraints,
     * alignment, and margin properties. If you are implementing a #ClutterActor
     * subclass that provides its own layout management policy for its children
     * instead of using a #ClutterLayoutManager delegate, you should not call
     * this function on the children of `self;` instead, you should call
     * clutter_actor_allocate(), which will adjust the allocation box for
     * you.
     * 
     * This function should only be used by subclasses of #ClutterActor
     * that wish to store their allocation but cannot chain up to the
     * parent's implementation; the default implementation of the
     * #ClutterActorClass.allocate() virtual function will call this
     * function.
     * 
     * It is important to note that, while chaining up was the recommended
     * behaviour for #ClutterActor subclasses prior to the introduction of
     * this function, it is recommended to call clutter_actor_set_allocation()
     * instead.
     * 
     * If the #ClutterActor is using a #ClutterLayoutManager delegate object
     * to handle the allocation of its children, this function will call
     * the clutter_layout_manager_allocate() function only if the
     * %CLUTTER_DELEGATE_LAYOUT flag is set on `flags,` otherwise it is
     * expected that the subclass will call clutter_layout_manager_allocate()
     * by itself. For instance, the following code:
     * 
     * 
     * ```c
     * static void
     * my_actor_allocate (ClutterActor *actor,
     *                    const ClutterActorBox *allocation,
     *                    ClutterAllocationFlags flags)
     * {
     *   ClutterActorBox new_alloc;
     *   ClutterAllocationFlags new_flags;
     * 
     *   adjust_allocation (allocation, &new_alloc);
     * 
     *   new_flags = flags | CLUTTER_DELEGATE_LAYOUT;
     * 
     *   // this will use the layout manager set on the actor
     *   clutter_actor_set_allocation (actor, &new_alloc, new_flags);
     * }
     * ```
     * 
     * 
     * is equivalent to this:
     * 
     * 
     * ```c
     * static void
     * my_actor_allocate (ClutterActor *actor,
     *                    const ClutterActorBox *allocation,
     *                    ClutterAllocationFlags flags)
     * {
     *   ClutterLayoutManager *layout;
     *   ClutterActorBox new_alloc;
     * 
     *   adjust_allocation (allocation, &new_alloc);
     * 
     *   clutter_actor_set_allocation (actor, &new_alloc, flags);
     * 
     *   layout = clutter_actor_get_layout_manager (actor);
     *   clutter_layout_manager_allocate (layout,
     *                                    CLUTTER_CONTAINER (actor),
     *                                    &new_alloc,
     *                                    flags);
     * }
     * ```
     * 
     */
    set_allocation(box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    /**
     * Sets an anchor point for `self`. The anchor point is a point in the
     * coordinate space of an actor to which the actor position within its
     * parent is relative; the default is (0, 0), i.e. the top-left corner
     * of the actor.
     */
    set_anchor_point(anchor_x: number, anchor_y: number): void
    /**
     * Sets an anchor point on the actor, based on the given gravity (this is a
     * convenience function wrapping clutter_actor_set_anchor_point()).
     * 
     * Since version 1.0 the anchor point will be stored as a gravity so
     * that if the actor changes size then the anchor point will move. For
     * example, if you set the anchor point to %CLUTTER_GRAVITY_SOUTH_EAST
     * and later double the size of the actor, the anchor point will move
     * to the bottom right.
     */
    set_anchor_point_from_gravity(gravity: Clutter.Gravity): void
    /**
     * Sets the background color of a #ClutterActor.
     * 
     * The background color will be used to cover the whole allocation of the
     * actor. The default background color of an actor is transparent.
     * 
     * To check whether an actor has a background color, you can use the
     * #ClutterActor:background-color-set actor property.
     * 
     * The #ClutterActor:background-color property is animatable.
     */
    set_background_color(color?: Clutter.Color | null): void
    /**
     * Sets `child` to be above `sibling` in the list of children of `self`.
     * 
     * If `sibling` is %NULL, `child` will be the new last child of `self`.
     * 
     * This function is logically equivalent to removing `child` and using
     * clutter_actor_insert_child_above(), but it will not emit signals
     * or change state on `child`.
     */
    set_child_above_sibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    /**
     * Changes the index of `child` in the list of children of `self`.
     * 
     * This function is logically equivalent to removing `child` and
     * calling clutter_actor_insert_child_at_index(), but it will not
     * emit signals or change state on `child`.
     */
    set_child_at_index(child: Clutter.Actor, index_: number): void
    /**
     * Sets `child` to be below `sibling` in the list of children of `self`.
     * 
     * If `sibling` is %NULL, `child` will be the new first child of `self`.
     * 
     * This function is logically equivalent to removing `self` and using
     * clutter_actor_insert_child_below(), but it will not emit signals
     * or change state on `child`.
     */
    set_child_below_sibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    /**
     * Sets the transformation matrix to be applied to all the children
     * of `self` prior to their own transformations. The default child
     * transformation is the identity matrix.
     * 
     * If `transform` is %NULL, the child transform will be unset.
     * 
     * The #ClutterActor:child-transform property is animatable.
     */
    set_child_transform(transform?: Clutter.Matrix | null): void
    /**
     * Sets clip area for `self`. The clip area is always computed from the
     * upper left corner of the actor, even if the anchor point is set
     * otherwise.
     */
    set_clip(xoff: number, yoff: number, width: number, height: number): void
    /**
     * Sets whether `self` should be clipped to the same size as its
     * allocation
     */
    set_clip_to_allocation(clip_set: boolean): void
    /**
     * Sets the contents of a #ClutterActor.
     */
    set_content(content?: Clutter.Content | null): void
    /**
     * Sets the gravity of the #ClutterContent used by `self`.
     * 
     * See the description of the #ClutterActor:content-gravity property for
     * more information.
     * 
     * The #ClutterActor:content-gravity property is animatable.
     */
    set_content_gravity(gravity: Clutter.ContentGravity): void
    /**
     * Sets the policy for repeating the #ClutterActor:content of a
     * #ClutterActor. The behaviour is deferred to the #ClutterContent
     * implementation.
     */
    set_content_repeat(repeat: Clutter.ContentRepeat): void
    /**
     * Sets the minification and magnification filter to be applied when
     * scaling the #ClutterActor:content of a #ClutterActor.
     * 
     * The #ClutterActor:minification-filter will be used when reducing
     * the size of the content; the #ClutterActor:magnification-filter
     * will be used when increasing the size of the content.
     */
    set_content_scaling_filters(min_filter: Clutter.ScalingFilter, mag_filter: Clutter.ScalingFilter): void
    /**
     * Sets the Z coordinate of `self` to `depth`.
     * 
     * The unit used by `depth` is dependant on the perspective setup. See
     * also clutter_stage_set_perspective().
     */
    set_depth(depth: number): void
    /**
     * Sets the delay that should be applied before tweening animatable
     * properties.
     */
    set_easing_delay(msecs: number): void
    /**
     * Sets the duration of the tweening for animatable properties
     * of `self` for the current easing state.
     */
    set_easing_duration(msecs: number): void
    /**
     * Sets the easing mode for the tweening of animatable properties
     * of `self`.
     */
    set_easing_mode(mode: Clutter.AnimationMode): void
    /**
     * Sets whether an actor has a fixed position set (and will thus be
     * unaffected by any layout manager).
     */
    set_fixed_position_set(is_set: boolean): void
    /**
     * Sets `flags` on `self`
     * 
     * This function will emit notifications for the changed properties
     */
    set_flags(flags: Clutter.ActorFlags): void
    /**
     * Sets the actor's fixed position and forces its minimum and natural
     * size, in pixels. This means the untransformed actor will have the
     * given geometry. This is the same as calling clutter_actor_set_position()
     * and clutter_actor_set_size().
     */
    set_geometry(geometry: Clutter.Geometry): void
    /**
     * Forces a height on an actor, causing the actor's preferred width
     * and height (if any) to be ignored.
     * 
     * If `height` is -1 the actor will use its preferred height instead of
     * overriding it, i.e. you can "unset" the height with -1.
     * 
     * This function sets both the minimum and natural size of the actor.
     */
    set_height(height: number): void
    /**
     * Sets the #ClutterLayoutManager delegate object that will be used to
     * lay out the children of `self`.
     * 
     * The #ClutterActor will take a reference on the passed `manager` which
     * will be released either when the layout manager is removed, or when
     * the actor is destroyed.
     */
    set_layout_manager(manager?: Clutter.LayoutManager | null): void
    /**
     * Sets all the components of the margin of a #ClutterActor.
     */
    set_margin(margin: Clutter.Margin): void
    /**
     * Sets the margin from the bottom of a #ClutterActor.
     * 
     * The #ClutterActor:margin-bottom property is animatable.
     */
    set_margin_bottom(margin: number): void
    /**
     * Sets the margin from the left of a #ClutterActor.
     * 
     * The #ClutterActor:margin-left property is animatable.
     */
    set_margin_left(margin: number): void
    /**
     * Sets the margin from the right of a #ClutterActor.
     * 
     * The #ClutterActor:margin-right property is animatable.
     */
    set_margin_right(margin: number): void
    /**
     * Sets the margin from the top of a #ClutterActor.
     * 
     * The #ClutterActor:margin-top property is animatable.
     */
    set_margin_top(margin: number): void
    /**
     * Sets the given name to `self`. The name can be used to identify
     * a #ClutterActor.
     */
    set_name(name: string): void
    /**
     * Defines the circumstances where the actor should be redirected into
     * an offscreen image. The offscreen image is used to flatten the
     * actor into a single image while painting for two main reasons.
     * Firstly, when the actor is painted a second time without any of its
     * contents changing it can simply repaint the cached image without
     * descending further down the actor hierarchy. Secondly, it will make
     * the opacity look correct even if there are overlapping primitives
     * in the actor.
     * 
     * Caching the actor could in some cases be a performance win and in
     * some cases be a performance lose so it is important to determine
     * which value is right for an actor before modifying this value. For
     * example, there is never any reason to flatten an actor that is just
     * a single texture (such as a #ClutterTexture) because it is
     * effectively already cached in an image so the offscreen would be
     * redundant. Also if the actor contains primitives that are far apart
     * with a large transparent area in the middle (such as a large
     * CluterGroup with a small actor in the top left and a small actor in
     * the bottom right) then the cached image will contain the entire
     * image of the large area and the paint will waste time blending all
     * of the transparent pixels in the middle.
     * 
     * The default method of implementing opacity on a container simply
     * forwards on the opacity to all of the children. If the children are
     * overlapping then it will appear as if they are two separate glassy
     * objects and there will be a break in the color where they
     * overlap. By redirecting to an offscreen buffer it will be as if the
     * two opaque objects are combined into one and then made transparent
     * which is usually what is expected.
     * 
     * The image below demonstrates the difference between redirecting and
     * not. The image shows two Clutter groups, each containing a red and
     * a green rectangle which overlap. The opacity on the group is set to
     * 128 (which is 50%). When the offscreen redirect is not used, the
     * red rectangle can be seen through the blue rectangle as if the two
     * rectangles were separately transparent. When the redirect is used
     * the group as a whole is transparent instead so the red rectangle is
     * not visible where they overlap.
     * 
     * <figure id="offscreen-redirect">
     *   <title>Sample of using an offscreen redirect for transparency</title>
     *   <graphic fileref="offscreen-redirect.png" format="PNG"/>
     * </figure>
     * 
     * The default value for this property is 0, so we effectively will
     * never redirect an actor offscreen by default. This means that there
     * are times that transparent actors may look glassy as described
     * above. The reason this is the default is because there is a
     * performance trade off between quality and performance here. In many
     * cases the default form of glassy opacity looks good enough, but if
     * it's not you will need to set the
     * %CLUTTER_OFFSCREEN_REDIRECT_AUTOMATIC_FOR_OPACITY flag to enable
     * redirection for opacity.
     * 
     * Custom actors that don't contain any overlapping primitives are
     * recommended to override the has_overlaps() virtual to return %FALSE
     * for maximum efficiency.
     */
    set_offscreen_redirect(redirect: Clutter.OffscreenRedirect): void
    /**
     * Sets the actor's opacity, with zero being completely transparent and
     * 255 (0xff) being fully opaque.
     * 
     * The #ClutterActor:opacity property is animatable.
     */
    set_opacity(opacity: number): void
    /**
     * Sets the parent of `self` to `parent`.
     * 
     * This function will result in `parent` acquiring a reference on `self,`
     * eventually by sinking its floating reference first. The reference
     * will be released by clutter_actor_unparent().
     * 
     * This function should only be called by legacy #ClutterActor<!-- -->s
     * implementing the #ClutterContainer interface.
     */
    set_parent(parent: Clutter.Actor): void
    /**
     * Sets the position of the #ClutterActor:pivot-point around which the
     * scaling and rotation transformations occur.
     * 
     * The pivot point's coordinates are in normalized space, with the (0, 0)
     * point being the top left corner of the actor, and the (1, 1) point being
     * the bottom right corner.
     */
    set_pivot_point(pivot_x: number, pivot_y: number): void
    /**
     * Sets the component on the Z axis of the #ClutterActor:pivot-point around
     * which the scaling and rotation transformations occur.
     * 
     * The `pivot_z` value is expressed as a distance along the Z axis.
     */
    set_pivot_point_z(pivot_z: number): void
    /**
     * Sets the actor's fixed position in pixels relative to any parent
     * actor.
     * 
     * If a layout manager is in use, this position will override the
     * layout manager and force a fixed position.
     */
    set_position(x: number, y: number): void
    /**
     * Sets `actor` as reactive. Reactive actors will receive events.
     */
    set_reactive(reactive: boolean): void
    /**
     * Sets the geometry request mode of `self`.
     * 
     * The `mode` determines the order for invoking
     * clutter_actor_get_preferred_width() and
     * clutter_actor_get_preferred_height()
     */
    set_request_mode(mode: Clutter.RequestMode): void
    /**
     * Sets the rotation angle of `self` around the given axis.
     * 
     * The rotation center coordinates used depend on the value of `axis:`
     * 
     *  - %CLUTTER_X_AXIS requires `y` and `z`
     *  - %CLUTTER_Y_AXIS requires `x` and `z`
     *  - %CLUTTER_Z_AXIS requires `x` and `y`
     * 
     * The rotation coordinates are relative to the anchor point of the
     * actor, set using clutter_actor_set_anchor_point(). If no anchor
     * point is set, the upper left corner is assumed as the origin.
     */
    set_rotation(axis: Clutter.RotateAxis, angle: number, x: number, y: number, z: number): void
    /**
     * Sets the `angle` of rotation of a #ClutterActor on the given `axis`.
     * 
     * This function is a convenience for setting the rotation properties
     * #ClutterActor:rotation-angle-x, #ClutterActor:rotation-angle-y,
     * and #ClutterActor:rotation-angle-z.
     * 
     * The center of rotation is established by the #ClutterActor:pivot-point
     * property.
     */
    set_rotation_angle(axis: Clutter.RotateAxis, angle: number): void
    /**
     * Scales an actor with the given factors.
     * 
     * The scale transformation is relative the the #ClutterActor:pivot-point.
     * 
     * The #ClutterActor:scale-x and #ClutterActor:scale-y properties are
     * animatable.
     */
    set_scale(scale_x: number, scale_y: number): void
    /**
     * Scales an actor with the given factors around the given center
     * point. The center point is specified in pixels relative to the
     * anchor point (usually the top left corner of the actor).
     * 
     * The #ClutterActor:scale-x and #ClutterActor:scale-y properties
     * are animatable.
     */
    set_scale_full(scale_x: number, scale_y: number, center_x: number, center_y: number): void
    /**
     * Scales an actor with the given factors around the given
     * center point. The center point is specified as one of the compass
     * directions in #ClutterGravity. For example, setting it to north
     * will cause the top of the actor to remain unchanged and the rest of
     * the actor to expand left, right and downwards.
     * 
     * The #ClutterActor:scale-x and #ClutterActor:scale-y properties are
     * animatable.
     */
    set_scale_with_gravity(scale_x: number, scale_y: number, gravity: Clutter.Gravity): void
    /**
     * Scales an actor on the Z axis by the given `scale_z` factor.
     * 
     * The scale transformation is relative the the #ClutterActor:pivot-point.
     * 
     * The #ClutterActor:scale-z property is animatable.
     */
    set_scale_z(scale_z: number): void
    /**
     * Sets the #ClutterShader to be used when rendering `self`.
     * 
     * If `shader` is %NULL this function will unset any currently set shader
     * for the actor.
     * 
     * Any #ClutterEffect applied to `self` will take the precedence
     * over the #ClutterShader set using this function.
     */
    set_shader(shader?: Clutter.Shader | null): boolean
    /**
     * Sets the value for a named parameter of the shader applied
     * to `actor`.
     */
    set_shader_param(param: string, value: any): void
    /**
     * Sets the value for a named float parameter of the shader applied
     * to `actor`.
     */
    set_shader_param_float(param: string, value: number): void
    /**
     * Sets the value for a named int parameter of the shader applied to
     * `actor`.
     */
    set_shader_param_int(param: string, value: number): void
    /**
     * Sets the actor's size request in pixels. This overrides any
     * "normal" size request the actor would have. For example
     * a text actor might normally request the size of the text;
     * this function would force a specific size instead.
     * 
     * If `width` and/or `height` are -1 the actor will use its
     * "normal" size request instead of overriding it, i.e.
     * you can "unset" the size with -1.
     * 
     * This function sets or unsets both the minimum and natural size.
     */
    set_size(width: number, height: number): void
    /**
     * Sets the #ClutterTextDirection for an actor
     * 
     * The passed text direction must not be %CLUTTER_TEXT_DIRECTION_DEFAULT
     * 
     * If `self` implements #ClutterContainer then this function will recurse
     * inside all the children of `self` (including the internal ones).
     * 
     * Composite actors not implementing #ClutterContainer, or actors requiring
     * special handling when the text direction changes, should connect to
     * the #GObject::notify signal for the #ClutterActor:text-direction property
     */
    set_text_direction(text_dir: Clutter.TextDirection): void
    /**
     * Overrides the transformations of a #ClutterActor with a custom
     * matrix, which will be applied relative to the origin of the
     * actor's allocation and to the actor's pivot point.
     * 
     * The #ClutterActor:transform property is animatable.
     */
    set_transform(transform?: Clutter.Matrix | null): void
    /**
     * Sets an additional translation transformation on a #ClutterActor,
     * relative to the #ClutterActor:pivot-point.
     */
    set_translation(translate_x: number, translate_y: number, translate_z: number): void
    /**
     * Forces a width on an actor, causing the actor's preferred width
     * and height (if any) to be ignored.
     * 
     * If `width` is -1 the actor will use its preferred width request
     * instead of overriding it, i.e. you can "unset" the width with -1.
     * 
     * This function sets both the minimum and natural size of the actor.
     */
    set_width(width: number): void
    /**
     * Sets the actor's X coordinate, relative to its parent, in pixels.
     * 
     * Overrides any layout manager and forces a fixed position for
     * the actor.
     * 
     * The #ClutterActor:x property is animatable.
     */
    set_x(x: number): void
    /**
     * Sets the horizontal alignment policy of a #ClutterActor, in case the
     * actor received extra horizontal space.
     * 
     * See also the #ClutterActor:x-align property.
     */
    set_x_align(x_align: Clutter.ActorAlign): void
    /**
     * Sets whether a #ClutterActor should expand horizontally; this means
     * that layout manager should allocate extra space for the actor, if
     * possible.
     * 
     * Setting an actor to expand will also make all its parent expand, so
     * that it's possible to build an actor tree and only set this flag on
     * its leaves and not on every single actor.
     */
    set_x_expand(expand: boolean): void
    /**
     * Sets the actor's Y coordinate, relative to its parent, in pixels.#
     * 
     * Overrides any layout manager and forces a fixed position for
     * the actor.
     * 
     * The #ClutterActor:y property is animatable.
     */
    set_y(y: number): void
    /**
     * Sets the vertical alignment policy of a #ClutterActor, in case the
     * actor received extra vertical space.
     * 
     * See also the #ClutterActor:y-align property.
     */
    set_y_align(y_align: Clutter.ActorAlign): void
    /**
     * Sets whether a #ClutterActor should expand horizontally; this means
     * that layout manager should allocate extra space for the actor, if
     * possible.
     * 
     * Setting an actor to expand will also make all its parent expand, so
     * that it's possible to build an actor tree and only set this flag on
     * its leaves and not on every single actor.
     */
    set_y_expand(expand: boolean): void
    /**
     * Sets the actor's position on the Z axis.
     * 
     * See #ClutterActor:z-position.
     */
    set_z_position(z_position: number): void
    /**
     * Sets the rotation angle of `self` around the Z axis using the center
     * point specified as a compass point. For example to rotate such that
     * the center of the actor remains static you can use
     * %CLUTTER_GRAVITY_CENTER. If the actor changes size the center point
     * will move accordingly.
     */
    set_z_rotation_from_gravity(angle: number, gravity: Clutter.Gravity): void
    /**
     * Should be called inside the implementation of the
     * #ClutterActor::pick virtual function in order to check whether
     * the actor should paint itself in pick mode or not.
     * 
     * This function should never be called directly by applications.
     */
    should_pick_paint(): boolean
    /**
     * Flags an actor to be displayed. An actor that isn't shown will not
     * be rendered on the stage.
     * 
     * Actors are visible by default.
     * 
     * If this function is called on an actor without a parent, the
     * #ClutterActor:show-on-set-parent will be set to %TRUE as a side
     * effect.
     */
    show(): void
    /**
     * Calls clutter_actor_show() on all children of an actor (if any).
     */
    show_all(): void
    /**
     * This function translates screen coordinates (`x,` `y)` to
     * coordinates relative to the actor. For example, it can be used to translate
     * screen events from global screen coordinates into actor-local coordinates.
     * 
     * The conversion can fail, notably if the transform stack results in the
     * actor being projected on the screen as a mere line.
     * 
     * The conversion should not be expected to be pixel-perfect due to the
     * nature of the operation. In general the error grows when the skewing
     * of the actor rectangle on screen increases.
     * 
     * This function can be computationally intensive.
     * 
     * This function only works when the allocation is up-to-date, i.e. inside of
     * the #ClutterActorClass.paint() implementation
     */
    transform_stage_point(x: number, y: number): [ /* returnType */ boolean, /* x_out */ number, /* y_out */ number ]
    /**
     * Unsets the %CLUTTER_ACTOR_MAPPED flag on the actor and possibly
     * unmaps its children if they were mapped.
     * 
     * Calling this function is not encouraged: the default #ClutterActor
     * implementation of #ClutterActorClass.unmap() will also unmap any
     * eventual children by default when their parent is unmapped.
     * 
     * When overriding #ClutterActorClass.unmap(), it is mandatory to
     * chain up to the parent implementation.
     * 
     * It is important to note that the implementation of the
     * #ClutterActorClass.unmap() virtual function may be called after
     * the #ClutterActorClass.destroy() or the #GObjectClass.dispose()
     * implementation, but it is guaranteed to be called before the
     * #GObjectClass.finalize() implementation.
     */
    unmap(): void
    /**
     * Removes the parent of `self`.
     * 
     * This will cause the parent of `self` to release the reference
     * acquired when calling clutter_actor_set_parent(), so if you
     * want to keep `self` you will have to acquire a reference of
     * your own, through g_object_ref().
     * 
     * This function should only be called by legacy #ClutterActor<!-- -->s
     * implementing the #ClutterContainer interface.
     */
    unparent(): void
    /**
     * Unrealization informs the actor that it may be being destroyed or
     * moved to another stage. The actor may want to destroy any
     * underlying graphics resources at this point. However it is
     * perfectly acceptable for it to retain the resources until the actor
     * is destroyed because Clutter only ever uses a single rendering
     * context and all of the graphics resources are valid on any stage.
     * 
     * Because mapped actors must be realized, actors may not be
     * unrealized if they are mapped. This function hides the actor to be
     * sure it isn't mapped, an application-visible side effect that you
     * may not be expecting.
     * 
     * This function should not be called by application code.
     * 
     * This function should not really be in the public API, because
     * there isn't a good reason to call it. ClutterActor will already
     * unrealize things for you when it's important to do so.
     * 
     * If you were using clutter_actor_unrealize() in a dispose
     * implementation, then don't, just chain up to ClutterActor's
     * dispose.
     * 
     * If you were using clutter_actor_unrealize() to implement
     * unrealizing children of your container, then don't, ClutterActor
     * will already take care of that.
     */
    unrealize(): void
    /**
     * Unsets `flags` on `self`
     * 
     * This function will emit notifications for the changed properties
     */
    unset_flags(flags: Clutter.ActorFlags): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
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
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Methods of Clutter-1.0.Clutter.Animatable */
    /**
     * Calls the animate_property() virtual function for `animatable`.
     * 
     * The `initial_value` and `final_value` #GValue<!-- -->s must contain
     * the same type; `value` must have been initialized to the same
     * type of `initial_value` and `final_value`.
     * 
     * All implementation of the #ClutterAnimatable interface must
     * implement this function.
     */
    animate_property(animation: Clutter.Animation, property_name: string, initial_value: any, final_value: any, progress: number, value: any): boolean
    /**
     * Finds the #GParamSpec for `property_name`
     */
    find_property(property_name: string): GObject.ParamSpec
    /**
     * Retrieves the current state of `property_name` and sets `value` with it
     */
    get_initial_state(property_name: string, value: any): void
    /**
     * Asks a #ClutterAnimatable implementation to interpolate a
     * a named property between the initial and final values of
     * a #ClutterInterval, using `progress` as the interpolation
     * value, and store the result inside `value`.
     * 
     * This function should be used for every property animation
     * involving #ClutterAnimatable<!-- -->s.
     * 
     * This function replaces clutter_animatable_animate_property().
     */
    interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    /**
     * Sets the current state of `property_name` to `value`
     */
    set_final_state(property_name: string, value: any): void
    /* Methods of Clutter-1.0.Clutter.Container */
    /**
     * Adds a #ClutterActor to `container`. This function will emit the
     * "actor-added" signal. The actor should be parented to
     * `container`. You cannot add a #ClutterActor to more than one
     * #ClutterContainer.
     * 
     * This function will call #ClutterContainerIface.add(), which is a
     * deprecated virtual function. The default implementation will
     * call clutter_actor_add_child().
     */
    add_actor(actor: Clutter.Actor): void
    /**
     * Gets a container specific property of a child of `container,` In general,
     * a copy is made of the property contents and the caller is responsible for
     * freeing the memory by calling g_value_unset().
     * 
     * Note that clutter_container_child_set_property() is really intended for
     * language bindings, clutter_container_child_set() is much more convenient
     * for C programming.
     */
    child_get_property(child: Clutter.Actor, property: string, value: any): void
    /**
     * Calls the #ClutterContainerIface.child_notify() virtual function
     * of #ClutterContainer. The default implementation will emit the
     * #ClutterContainer::child-notify signal.
     */
    child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    /**
     * Sets a container-specific property on a child of `container`.
     */
    child_set_property(child: Clutter.Actor, property: string, value: any): void
    /**
     * Creates the #ClutterChildMeta wrapping `actor` inside the
     * `container,` if the #ClutterContainerIface::child_meta_type
     * class member is not set to %G_TYPE_INVALID.
     * 
     * This function is only useful when adding a #ClutterActor to
     * a #ClutterContainer implementation outside of the
     * #ClutterContainer::add() virtual function implementation.
     * 
     * Applications should not call this function.
     */
    create_child_meta(actor: Clutter.Actor): void
    /**
     * Destroys the #ClutterChildMeta wrapping `actor` inside the
     * `container,` if any.
     * 
     * This function is only useful when removing a #ClutterActor to
     * a #ClutterContainer implementation outside of the
     * #ClutterContainer::add() virtual function implementation.
     * 
     * Applications should not call this function.
     */
    destroy_child_meta(actor: Clutter.Actor): void
    /**
     * Finds a child actor of a container by its name. Search recurses
     * into any child container.
     */
    find_child_by_name(child_name: string): Clutter.Actor
    /**
     * Calls `callback` for each child of `container` that was added
     * by the application (with clutter_container_add_actor()). Does
     * not iterate over "internal" children that are part of the
     * container's own implementation, if any.
     * 
     * This function calls the #ClutterContainerIface.foreach()
     * virtual function, which has been deprecated.
     */
    foreach(callback: Clutter.Callback): void
    /**
     * Calls `callback` for each child of `container,` including "internal"
     * children built in to the container itself that were never added
     * by the application.
     * 
     * This function calls the #ClutterContainerIface.foreach_with_internals()
     * virtual function, which has been deprecated.
     */
    foreach_with_internals(callback: Clutter.Callback): void
    /**
     * Retrieves the #ClutterChildMeta which contains the data about the
     * `container` specific state for `actor`.
     */
    get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta
    /**
     * Lowers `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.lower() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_below_sibling().
     */
    lower_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    /**
     * Raises `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.raise() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_above_sibling().
     */
    raise_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    /**
     * Removes `actor` from `container`. The actor should be unparented, so
     * if you want to keep it around you must hold a reference to it
     * yourself, using g_object_ref(). When the actor has been removed,
     * the "actor-removed" signal is emitted by `container`.
     * 
     * This function will call #ClutterContainerIface.remove(), which is a
     * deprecated virtual function. The default implementation will call
     * clutter_actor_remove_child().
     */
    remove_actor(actor: Clutter.Actor): void
    /**
     * Sorts a container's children using their depth. This function should not
     * be normally used by applications.
     */
    sort_depth_order(): void
    /* Methods of Clutter-1.0.Clutter.Media */
    /**
     * Retrieves the playback volume of `media`.
     */
    get_audio_volume(): number
    /**
     * Retrieves the amount of the stream that is buffered.
     */
    get_buffer_fill(): number
    /**
     * Retrieves whether `media` is seekable or not.
     */
    get_can_seek(): boolean
    /**
     * Retrieves the duration of the media stream that `media` represents.
     */
    get_duration(): number
    /**
     * Retrieves the playing status of `media`.
     */
    get_playing(): boolean
    /**
     * Retrieves the playback progress of `media`.
     */
    get_progress(): number
    /**
     * Retrieves the font name currently used.
     */
    get_subtitle_font_name(): string
    /**
     * Retrieves the URI of the subtitle file in use.
     */
    get_subtitle_uri(): string
    /**
     * Retrieves the URI from `media`.
     */
    get_uri(): string
    /**
     * Sets the playback volume of `media` to `volume`.
     */
    set_audio_volume(volume: number): void
    /**
     * Sets the source of `media` using a file path.
     */
    set_filename(filename: string): void
    /**
     * Starts or stops playing of `media`.
     *  
     * The implementation might be asynchronous, so the way to know whether
     * the actual playing state of the `media` is to use the #GObject::notify
     * signal on the #ClutterMedia:playing property and then retrieve the
     * current state with clutter_media_get_playing(). ClutterGstVideoTexture
     * in clutter-gst is an example of such an asynchronous implementation.
     */
    set_playing(playing: boolean): void
    /**
     * Sets the playback progress of `media`. The `progress` is
     * a normalized value between 0.0 (begin) and 1.0 (end).
     */
    set_progress(progress: number): void
    /**
     * Sets the font used by the subtitle renderer. The `font_name` string must be
     * either %NULL, which means that the default font name of the underlying
     * implementation will be used; or must follow the grammar recognized by
     * pango_font_description_from_string() like:
     * 
     * |[
     *   clutter_media_set_subtitle_font_name (media, "Sans 24pt");
     * ```
     * 
     */
    set_subtitle_font_name(font_name: string): void
    /**
     * Sets the location of a subtitle file to display while playing `media`.
     */
    set_subtitle_uri(uri: string): void
    /**
     * Sets the URI of `media` to `uri`.
     */
    set_uri(uri: string): void
    /* Methods of Clutter-1.0.Clutter.Scriptable */
    /**
     * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
     */
    get_id(): string
    /**
     * Parses the passed JSON node. The implementation must set the type
     * of the passed #GValue pointer using g_value_init().
     */
    parse_custom_node(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    /**
     * Overrides the common properties setting. The underlying virtual
     * function should be used when implementing custom properties.
     */
    set_custom_property(script: Clutter.Script, name: string, value: any): void
    /**
     * Sets `id_` as the unique Clutter script it for this instance of
     * #ClutterScriptableIface.
     * 
     * This name can be used by user interface designer applications to
     * define a unique name for an object constructable using the UI
     * definition language parsed by #ClutterScript.
     */
    set_id(id_: string): void
    /* Methods of ClutterGst-1.0.ClutterGst.Player */
    /**
     * Frees the resources created by clutter_gst_player_init(). After
     * clutter_gst_player_deinit() has been called, no other player method can be
     * called on the instance.
     */
    deinit(): void
    /**
     * Get the list of audio streams of the current media.
     */
    get_audio_streams(): string[]
    /**
     * Get the idle state of the pipeline.
     */
    get_idle(): boolean
    /**
     * Whether the player is seeking.
     */
    get_in_seek(): boolean
    /**
     * Get the list of subtitles tracks of the current media.
     */
    get_subtitle_tracks(): string[]
    init(): boolean
    /**
     * Set the audio stream to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_player_get_audio_streams().
     */
    set_audio_stream(index_: number): void
    set_buffering_mode(mode: BufferingMode): void
    /**
     * Seeking can be done with several trade-offs. Clutter-gst defaults
     * to %CLUTTER_GST_SEEK_FLAG_NONE.
     */
    set_seek_flags(flags: SeekFlags): void
    /**
     * Set the subtitles track to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_player_get_subtitle_tracks().
     * 
     * If `index_` is -1, the subtitles are turned off.
     */
    set_subtitle_track(index_: number): void
    /**
     * Sets the user agent to use when streaming.
     * 
     * When streaming content, you might want to set a custom user agent, eg. to
     * promote your software, make it appear in statistics or because the server
     * requires a special user agent you want to impersonate.
     */
    set_user_agent(user_agent: string): void
    /* Virtual methods of ClutterGst-1.0.ClutterGst.VideoTexture */
    /**
     * Calls the animate_property() virtual function for `animatable`.
     * 
     * The `initial_value` and `final_value` #GValue<!-- -->s must contain
     * the same type; `value` must have been initialized to the same
     * type of `initial_value` and `final_value`.
     * 
     * All implementation of the #ClutterAnimatable interface must
     * implement this function.
     */
    vfunc_animate_property(animation: Clutter.Animation, property_name: string, initial_value: any, final_value: any, progress: number, value: any): boolean
    /**
     * Finds the #GParamSpec for `property_name`
     */
    vfunc_find_property(property_name: string): GObject.ParamSpec
    /**
     * Retrieves the current state of `property_name` and sets `value` with it
     */
    vfunc_get_initial_state(property_name: string, value: any): void
    /**
     * Asks a #ClutterAnimatable implementation to interpolate a
     * a named property between the initial and final values of
     * a #ClutterInterval, using `progress` as the interpolation
     * value, and store the result inside `value`.
     * 
     * This function should be used for every property animation
     * involving #ClutterAnimatable<!-- -->s.
     * 
     * This function replaces clutter_animatable_animate_property().
     */
    vfunc_interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    /**
     * Sets the current state of `property_name` to `value`
     */
    vfunc_set_final_state(property_name: string, value: any): void
    vfunc_actor_added(actor: Clutter.Actor): void
    vfunc_actor_removed(actor: Clutter.Actor): void
    /**
     * Adds a #ClutterActor to `container`. This function will emit the
     * "actor-added" signal. The actor should be parented to
     * `container`. You cannot add a #ClutterActor to more than one
     * #ClutterContainer.
     * 
     * This function will call #ClutterContainerIface.add(), which is a
     * deprecated virtual function. The default implementation will
     * call clutter_actor_add_child().
     */
    vfunc_add(actor: Clutter.Actor): void
    /**
     * Calls the #ClutterContainerIface.child_notify() virtual function
     * of #ClutterContainer. The default implementation will emit the
     * #ClutterContainer::child-notify signal.
     */
    vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    /**
     * Creates the #ClutterChildMeta wrapping `actor` inside the
     * `container,` if the #ClutterContainerIface::child_meta_type
     * class member is not set to %G_TYPE_INVALID.
     * 
     * This function is only useful when adding a #ClutterActor to
     * a #ClutterContainer implementation outside of the
     * #ClutterContainer::add() virtual function implementation.
     * 
     * Applications should not call this function.
     */
    vfunc_create_child_meta(actor: Clutter.Actor): void
    /**
     * Destroys the #ClutterChildMeta wrapping `actor` inside the
     * `container,` if any.
     * 
     * This function is only useful when removing a #ClutterActor to
     * a #ClutterContainer implementation outside of the
     * #ClutterContainer::add() virtual function implementation.
     * 
     * Applications should not call this function.
     */
    vfunc_destroy_child_meta(actor: Clutter.Actor): void
    /**
     * Calls `callback` for each child of `container` that was added
     * by the application (with clutter_container_add_actor()). Does
     * not iterate over "internal" children that are part of the
     * container's own implementation, if any.
     * 
     * This function calls the #ClutterContainerIface.foreach()
     * virtual function, which has been deprecated.
     */
    vfunc_foreach(callback: Clutter.Callback): void
    /**
     * Calls `callback` for each child of `container,` including "internal"
     * children built in to the container itself that were never added
     * by the application.
     * 
     * This function calls the #ClutterContainerIface.foreach_with_internals()
     * virtual function, which has been deprecated.
     */
    vfunc_foreach_with_internals(callback: Clutter.Callback): void
    /**
     * Retrieves the #ClutterChildMeta which contains the data about the
     * `container` specific state for `actor`.
     */
    vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta
    /**
     * Lowers `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.lower() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_below_sibling().
     */
    vfunc_lower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    /**
     * Raises `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.raise() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_above_sibling().
     */
    vfunc_raise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    /**
     * Removes `actor` from `container`. The actor should be unparented, so
     * if you want to keep it around you must hold a reference to it
     * yourself, using g_object_ref(). When the actor has been removed,
     * the "actor-removed" signal is emitted by `container`.
     * 
     * This function will call #ClutterContainerIface.remove(), which is a
     * deprecated virtual function. The default implementation will call
     * clutter_actor_remove_child().
     */
    vfunc_remove(actor: Clutter.Actor): void
    /**
     * Sorts a container's children using their depth. This function should not
     * be normally used by applications.
     */
    vfunc_sort_depth_order(): void
    vfunc_eos(): void
    vfunc_error(error: GLib.Error): void
    /**
     * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
     */
    vfunc_get_id(): string
    /**
     * Parses the passed JSON node. The implementation must set the type
     * of the passed #GValue pointer using g_value_init().
     */
    vfunc_parse_custom_node(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    /**
     * Overrides the common properties setting. The underlying virtual
     * function should be used when implementing custom properties.
     */
    vfunc_set_custom_property(script: Clutter.Script, name: string, value: any): void
    /**
     * Sets `id_` as the unique Clutter script it for this instance of
     * #ClutterScriptableIface.
     * 
     * This name can be used by user interface designer applications to
     * define a unique name for an object constructable using the UI
     * definition language parsed by #ClutterScript.
     */
    vfunc_set_id(id_: string): void
    vfunc_download_buffering(start: number, stop: number): void
    /**
     * Get the current audio stream. The number returned in the index of the
     * audio stream playing in the list returned by
     * clutter_gst_player_get_audio_streams().
     */
    vfunc_get_audio_stream(): number
    /**
     * Get the list of audio streams of the current media.
     */
    vfunc_get_audio_streams(): string[]
    vfunc_get_buffering_mode(): BufferingMode
    /**
     * Get the idle state of the pipeline.
     */
    vfunc_get_idle(): boolean
    /**
     * Whether the player is seeking.
     */
    vfunc_get_in_seek(): boolean
    /**
     * Retrieves the #GstPipeline used by the `player,` for direct use with
     * GStreamer API.
     */
    vfunc_get_pipeline(): Gst.Element
    /**
     * Get the current value of the seek-flags property.
     */
    vfunc_get_seek_flags(): SeekFlags
    /**
     * Get the current subtitles track. The number returned is the index of the
     * subtiles track in the list returned by
     * clutter_gst_player_get_subtitle_tracks().
     */
    vfunc_get_subtitle_track(): number
    /**
     * Get the list of subtitles tracks of the current media.
     */
    vfunc_get_subtitle_tracks(): string[]
    /**
     * Retrieves the user agent used when streaming.
     */
    vfunc_get_user_agent(): string
    /**
     * Set the audio stream to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_player_get_audio_streams().
     */
    vfunc_set_audio_stream(index_: number): void
    vfunc_set_buffering_mode(mode: BufferingMode): void
    /**
     * Seeking can be done with several trade-offs. Clutter-gst defaults
     * to %CLUTTER_GST_SEEK_FLAG_NONE.
     */
    vfunc_set_seek_flags(flags: SeekFlags): void
    /**
     * Set the subtitles track to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_player_get_subtitle_tracks().
     * 
     * If `index_` is -1, the subtitles are turned off.
     */
    vfunc_set_subtitle_track(index_: number): void
    /**
     * Sets the user agent to use when streaming.
     * 
     * When streaming content, you might want to set a custom user agent, eg. to
     * promote your software, make it appear in statistics or because the server
     * requires a special user agent you want to impersonate.
     */
    vfunc_set_user_agent(user_agent: string): void
    /* Virtual methods of Clutter-1.0.Clutter.Texture */
    vfunc_load_finished(error: GLib.Error): void
    vfunc_pixbuf_change(): void
    vfunc_size_change(width: number, height: number): void
    /* Virtual methods of Clutter-1.0.Clutter.Actor */
    /**
     * Assigns the size of a #ClutterActor from the given `box`.
     * 
     * This function should only be called on the children of an actor when
     * overriding the #ClutterActorClass.allocate() virtual function.
     * 
     * This function will adjust the stored allocation to take into account
     * the alignment flags set in the #ClutterActor:x-align and
     * #ClutterActor:y-align properties, as well as the margin values set in
     * the #ClutterActor:margin-top, #ClutterActor:margin-right,
     * #ClutterActor:margin-bottom, and #ClutterActor:margin-left properties.
     * 
     * This function will respect the easing state of the #ClutterActor and
     * interpolate between the current allocation and the new one if the
     * easing state duration is a positive value.
     * 
     * Actors can know from their allocation box whether they have moved
     * with respect to their parent actor. The `flags` parameter describes
     * additional information about the allocation, for instance whether
     * the parent has moved with respect to the stage, for example because
     * a grandparent's origin has moved.
     */
    vfunc_allocate(box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    vfunc_apply_transform(matrix: Clutter.Matrix): void
    vfunc_button_press_event(event: Clutter.ButtonEvent): boolean
    vfunc_button_release_event(event: Clutter.ButtonEvent): boolean
    vfunc_captured_event(event: Clutter.Event): boolean
    /**
     * Destroys an actor.  When an actor is destroyed, it will break any
     * references it holds to other objects.  If the actor is inside a
     * container, the actor will be removed.
     * 
     * When you destroy a container, its children will be destroyed as well.
     * 
     * Note: you cannot destroy the #ClutterStage returned by
     * clutter_stage_get_default().
     */
    vfunc_destroy(): void
    vfunc_enter_event(event: Clutter.CrossingEvent): boolean
    vfunc_event(event: Clutter.Event): boolean
    /**
     * Returns the accessible object that describes the actor to an
     * assistive technology.
     * 
     * If no class-specific #AtkObject implementation is available for the
     * actor instance in question, it will inherit an #AtkObject
     * implementation from the first ancestor class for which such an
     * implementation is defined.
     * 
     * The documentation of the <ulink
     * url="http://developer.gnome.org/doc/API/2.0/atk/index.html">ATK</ulink>
     * library contains more information about accessible objects and
     * their uses.
     */
    vfunc_get_accessible(): Atk.Object
    vfunc_get_paint_volume(volume: Clutter.PaintVolume): boolean
    /**
     * Computes the requested minimum and natural heights for an actor,
     * or if they are already computed, returns the cached values.
     * 
     * An actor may not get its request - depending on the layout
     * manager that's in effect.
     * 
     * A request should not incorporate the actor's scale or anchor point;
     * those transformations do not affect layout, only rendering.
     */
    vfunc_get_preferred_height(for_width: number): [ /* min_height_p */ number | null, /* natural_height_p */ number | null ]
    /**
     * Computes the requested minimum and natural widths for an actor,
     * optionally depending on the specified height, or if they are
     * already computed, returns the cached values.
     * 
     * An actor may not get its request - depending on the layout
     * manager that's in effect.
     * 
     * A request should not incorporate the actor's scale or anchor point;
     * those transformations do not affect layout, only rendering.
     */
    vfunc_get_preferred_width(for_height: number): [ /* min_width_p */ number | null, /* natural_width_p */ number | null ]
    /**
     * Asks the actor's implementation whether it may contain overlapping
     * primitives.
     * 
     * For example; Clutter may use this to determine whether the painting
     * should be redirected to an offscreen buffer to correctly implement
     * the opacity property.
     * 
     * Custom actors can override the default response by implementing the
     * #ClutterActorClass.has_overlaps() virtual function. See
     * clutter_actor_set_offscreen_redirect() for more information.
     */
    vfunc_has_overlaps(): boolean
    /**
     * Flags an actor to be hidden. A hidden actor will not be
     * rendered on the stage.
     * 
     * Actors are visible by default.
     * 
     * If this function is called on an actor without a parent, the
     * #ClutterActor:show-on-set-parent property will be set to %FALSE
     * as a side-effect.
     */
    vfunc_hide(): void
    /**
     * Calls clutter_actor_hide() on all child actors (if any).
     */
    vfunc_hide_all(): void
    vfunc_key_focus_in(): void
    vfunc_key_focus_out(): void
    vfunc_key_press_event(event: Clutter.KeyEvent): boolean
    vfunc_key_release_event(event: Clutter.KeyEvent): boolean
    vfunc_leave_event(event: Clutter.CrossingEvent): boolean
    /**
     * Sets the %CLUTTER_ACTOR_MAPPED flag on the actor and possibly maps
     * and realizes its children if they are visible. Does nothing if the
     * actor is not visible.
     * 
     * Calling this function is strongly disencouraged: the default
     * implementation of #ClutterActorClass.map() will map all the children
     * of an actor when mapping its parent.
     * 
     * When overriding map, it is mandatory to chain up to the parent
     * implementation.
     */
    vfunc_map(): void
    vfunc_motion_event(event: Clutter.MotionEvent): boolean
    /**
     * Renders the actor to display.
     * 
     * This function should not be called directly by applications.
     * Call clutter_actor_queue_redraw() to queue paints, instead.
     * 
     * This function is context-aware, and will either cause a
     * regular paint or a pick paint.
     * 
     * This function will emit the #ClutterActor::paint signal or
     * the #ClutterActor::pick signal, depending on the context.
     * 
     * This function does not paint the actor if the actor is set to 0,
     * unless it is performing a pick paint.
     */
    vfunc_paint(): void
    vfunc_paint_node(root: Clutter.PaintNode): void
    vfunc_parent_set(old_parent: Clutter.Actor): void
    vfunc_pick(color: Clutter.Color): void
    vfunc_queue_redraw(leaf_that_queued: Clutter.Actor): void
    /**
     * Indicates that the actor's size request or other layout-affecting
     * properties may have changed. This function is used inside #ClutterActor
     * subclass implementations, not by applications directly.
     * 
     * Queueing a new layout automatically queues a redraw as well.
     */
    vfunc_queue_relayout(): void
    /**
     * Realization informs the actor that it is attached to a stage. It
     * can use this to allocate resources if it wanted to delay allocation
     * until it would be rendered. However it is perfectly acceptable for
     * an actor to create resources before being realized because Clutter
     * only ever has a single rendering context so that actor is free to
     * be moved from one stage to another.
     * 
     * This function does nothing if the actor is already realized.
     * 
     * Because a realized actor must have realized parent actors, calling
     * clutter_actor_realize() will also realize all parents of the actor.
     * 
     * This function does not realize child actors, except in the special
     * case that realizing the stage, when the stage is visible, will
     * suddenly map (and thus realize) the children of the stage.
     */
    vfunc_realize(): void
    vfunc_scroll_event(event: Clutter.ScrollEvent): boolean
    /**
     * Flags an actor to be displayed. An actor that isn't shown will not
     * be rendered on the stage.
     * 
     * Actors are visible by default.
     * 
     * If this function is called on an actor without a parent, the
     * #ClutterActor:show-on-set-parent will be set to %TRUE as a side
     * effect.
     */
    vfunc_show(): void
    /**
     * Calls clutter_actor_show() on all children of an actor (if any).
     */
    vfunc_show_all(): void
    vfunc_touch_event(event: Clutter.TouchEvent): boolean
    /**
     * Unsets the %CLUTTER_ACTOR_MAPPED flag on the actor and possibly
     * unmaps its children if they were mapped.
     * 
     * Calling this function is not encouraged: the default #ClutterActor
     * implementation of #ClutterActorClass.unmap() will also unmap any
     * eventual children by default when their parent is unmapped.
     * 
     * When overriding #ClutterActorClass.unmap(), it is mandatory to
     * chain up to the parent implementation.
     * 
     * It is important to note that the implementation of the
     * #ClutterActorClass.unmap() virtual function may be called after
     * the #ClutterActorClass.destroy() or the #GObjectClass.dispose()
     * implementation, but it is guaranteed to be called before the
     * #GObjectClass.finalize() implementation.
     */
    vfunc_unmap(): void
    /**
     * Unrealization informs the actor that it may be being destroyed or
     * moved to another stage. The actor may want to destroy any
     * underlying graphics resources at this point. However it is
     * perfectly acceptable for it to retain the resources until the actor
     * is destroyed because Clutter only ever uses a single rendering
     * context and all of the graphics resources are valid on any stage.
     * 
     * Because mapped actors must be realized, actors may not be
     * unrealized if they are mapped. This function hides the actor to be
     * sure it isn't mapped, an application-visible side effect that you
     * may not be expecting.
     * 
     * This function should not be called by application code.
     * 
     * This function should not really be in the public API, because
     * there isn't a good reason to call it. ClutterActor will already
     * unrealize things for you when it's important to do so.
     * 
     * If you were using clutter_actor_unrealize() in a dispose
     * implementation, then don't, just chain up to ClutterActor's
     * dispose.
     * 
     * If you were using clutter_actor_unrealize() to implement
     * unrealizing children of your container, then don't, ClutterActor
     * will already take care of that.
     */
    vfunc_unrealize(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Clutter-1.0.Clutter.Texture */
    /**
     * The ::load-finished signal is emitted when a texture load has
     * completed. If there was an error during loading, `error` will
     * be set, otherwise it will be %NULL
     */
    connect(sigName: "load-finished", callback: (($obj: VideoTexture, error: GLib.Error) => void)): number
    connect_after(sigName: "load-finished", callback: (($obj: VideoTexture, error: GLib.Error) => void)): number
    emit(sigName: "load-finished", error: GLib.Error): void
    /**
     * The ::pixbuf-change signal is emitted each time the pixbuf
     * used by `texture` changes.
     */
    connect(sigName: "pixbuf-change", callback: (($obj: VideoTexture) => void)): number
    connect_after(sigName: "pixbuf-change", callback: (($obj: VideoTexture) => void)): number
    emit(sigName: "pixbuf-change"): void
    /**
     * The ::size-change signal is emitted each time the size of the
     * pixbuf used by `texture` changes.  The new size is given as
     * argument to the callback.
     */
    connect(sigName: "size-change", callback: (($obj: VideoTexture, width: number, height: number) => void)): number
    connect_after(sigName: "size-change", callback: (($obj: VideoTexture, width: number, height: number) => void)): number
    emit(sigName: "size-change", width: number, height: number): void
    /* Signals of Clutter-1.0.Clutter.Actor */
    /**
     * The ::allocation-changed signal is emitted when the
     * #ClutterActor:allocation property changes. Usually, application
     * code should just use the notifications for the :allocation property
     * but if you want to track the allocation flags as well, for instance
     * to know whether the absolute origin of `actor` changed, then you might
     * want use this signal instead.
     */
    connect(sigName: "allocation-changed", callback: (($obj: VideoTexture, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    connect_after(sigName: "allocation-changed", callback: (($obj: VideoTexture, box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    /**
     * The ::button-press-event signal is emitted each time a mouse button
     * is pressed on `actor`.
     */
    connect(sigName: "button-press-event", callback: (($obj: VideoTexture, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: VideoTexture, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    /**
     * The ::button-release-event signal is emitted each time a mouse button
     * is released on `actor`.
     */
    connect(sigName: "button-release-event", callback: (($obj: VideoTexture, event: Clutter.ButtonEvent) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: VideoTexture, event: Clutter.ButtonEvent) => boolean)): number
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    /**
     * The ::captured-event signal is emitted when an event is captured
     * by Clutter. This signal will be emitted starting from the top-level
     * container (the #ClutterStage) to the actor which received the event
     * going down the hierarchy. This signal can be used to intercept every
     * event before the specialized events (like
     * ClutterActor::button-press-event or ::key-released-event) are
     * emitted.
     */
    connect(sigName: "captured-event", callback: (($obj: VideoTexture, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "captured-event", callback: (($obj: VideoTexture, event: Clutter.Event) => boolean)): number
    emit(sigName: "captured-event", event: Clutter.Event): void
    /**
     * The ::destroy signal notifies that all references held on the
     * actor which emitted it should be released.
     * 
     * The ::destroy signal should be used by all holders of a reference
     * on `actor`.
     * 
     * This signal might result in the finalization of the #ClutterActor
     * if all references are released.
     * 
     * Composite actors and actors implementing the #ClutterContainer
     * interface should override the default implementation of the
     * class handler of this signal and call clutter_actor_destroy() on
     * their children. When overriding the default class handler, it is
     * required to chain up to the parent's implementation.
     */
    connect(sigName: "destroy", callback: (($obj: VideoTexture) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: VideoTexture) => void)): number
    emit(sigName: "destroy"): void
    /**
     * The ::enter-event signal is emitted when the pointer enters the `actor`
     */
    connect(sigName: "enter-event", callback: (($obj: VideoTexture, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "enter-event", callback: (($obj: VideoTexture, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    /**
     * The ::event signal is emitted each time an event is received
     * by the `actor`. This signal will be emitted on every actor,
     * following the hierarchy chain, until it reaches the top-level
     * container (the #ClutterStage).
     */
    connect(sigName: "event", callback: (($obj: VideoTexture, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: VideoTexture, event: Clutter.Event) => boolean)): number
    emit(sigName: "event", event: Clutter.Event): void
    /**
     * The ::hide signal is emitted when an actor is no longer rendered
     * on the stage.
     */
    connect(sigName: "hide", callback: (($obj: VideoTexture) => void)): number
    connect_after(sigName: "hide", callback: (($obj: VideoTexture) => void)): number
    emit(sigName: "hide"): void
    /**
     * The ::key-focus-in signal is emitted when `actor` receives key focus.
     */
    connect(sigName: "key-focus-in", callback: (($obj: VideoTexture) => void)): number
    connect_after(sigName: "key-focus-in", callback: (($obj: VideoTexture) => void)): number
    emit(sigName: "key-focus-in"): void
    /**
     * The ::key-focus-out signal is emitted when `actor` loses key focus.
     */
    connect(sigName: "key-focus-out", callback: (($obj: VideoTexture) => void)): number
    connect_after(sigName: "key-focus-out", callback: (($obj: VideoTexture) => void)): number
    emit(sigName: "key-focus-out"): void
    /**
     * The ::key-press-event signal is emitted each time a keyboard button
     * is pressed while `actor` has key focus (see clutter_stage_set_key_focus()).
     */
    connect(sigName: "key-press-event", callback: (($obj: VideoTexture, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: VideoTexture, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    /**
     * The ::key-release-event signal is emitted each time a keyboard button
     * is released while `actor` has key focus (see
     * clutter_stage_set_key_focus()).
     */
    connect(sigName: "key-release-event", callback: (($obj: VideoTexture, event: Clutter.KeyEvent) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: VideoTexture, event: Clutter.KeyEvent) => boolean)): number
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    /**
     * The ::leave-event signal is emitted when the pointer leaves the `actor`.
     */
    connect(sigName: "leave-event", callback: (($obj: VideoTexture, event: Clutter.CrossingEvent) => boolean)): number
    connect_after(sigName: "leave-event", callback: (($obj: VideoTexture, event: Clutter.CrossingEvent) => boolean)): number
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    /**
     * The ::motion-event signal is emitted each time the mouse pointer is
     * moved over `actor`.
     */
    connect(sigName: "motion-event", callback: (($obj: VideoTexture, event: Clutter.MotionEvent) => boolean)): number
    connect_after(sigName: "motion-event", callback: (($obj: VideoTexture, event: Clutter.MotionEvent) => boolean)): number
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    /**
     * The ::paint signal is emitted each time an actor is being painted.
     * 
     * Subclasses of #ClutterActor should override the #ClutterActorClass.paint
     * virtual function paint themselves in that function.
     * 
     * It is strongly discouraged to connect a signal handler to
     * the #ClutterActor::paint signal; if you want to change the paint
     * sequence of an existing #ClutterActor instance, either create a new
     * #ClutterActor class and override the #ClutterActorClass.paint virtual
     * function, or use a #ClutterEffect. The #ClutterActor::paint signal
     * will be removed in a future version of Clutter.
     */
    connect(sigName: "paint", callback: (($obj: VideoTexture) => void)): number
    connect_after(sigName: "paint", callback: (($obj: VideoTexture) => void)): number
    emit(sigName: "paint"): void
    /**
     * This signal is emitted when the parent of the actor changes.
     */
    connect(sigName: "parent-set", callback: (($obj: VideoTexture, old_parent?: Clutter.Actor | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: VideoTexture, old_parent?: Clutter.Actor | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Clutter.Actor | null): void
    /**
     * The ::pick signal is emitted each time an actor is being painted
     * in "pick mode". The pick mode is used to identify the actor during
     * the event handling phase, or by clutter_stage_get_actor_at_pos().
     * The actor should paint its shape using the passed `pick_color`.
     * 
     * Subclasses of #ClutterActor should override the class signal handler
     * and paint themselves in that function.
     * 
     * It is possible to connect a handler to the ::pick signal in order
     * to set up some custom aspect of a paint in pick mode.
     */
    connect(sigName: "pick", callback: (($obj: VideoTexture, color: Clutter.Color) => void)): number
    connect_after(sigName: "pick", callback: (($obj: VideoTexture, color: Clutter.Color) => void)): number
    emit(sigName: "pick", color: Clutter.Color): void
    /**
     * The ::queue_redraw signal is emitted when clutter_actor_queue_redraw()
     * is called on `origin`.
     * 
     * The default implementation for #ClutterActor chains up to the
     * parent actor and queues a redraw on the parent, thus "bubbling"
     * the redraw queue up through the actor graph. The default
     * implementation for #ClutterStage queues a clutter_stage_ensure_redraw()
     * in a main loop idle handler.
     * 
     * Note that the `origin` actor may be the stage, or a container; it
     * does not have to be a leaf node in the actor graph.
     * 
     * Toolkits embedding a #ClutterStage which require a redraw and
     * relayout cycle can stop the emission of this signal using the
     * GSignal API, redraw the UI and then call clutter_stage_ensure_redraw()
     * themselves, like:
     * 
     * 
     * ```c
     *   static void
     *   on_redraw_complete (gpointer data)
     *   {
     *     ClutterStage *stage = data;
     * 
     *     // execute the Clutter drawing pipeline
     *     clutter_stage_ensure_redraw (stage);
     *   }
     * 
     *   static void
     *   on_stage_queue_redraw (ClutterStage *stage)
     *   {
     *     // this prevents the default handler to run
     *     g_signal_stop_emission_by_name (stage, "queue-redraw");
     * 
     *     // queue a redraw with the host toolkit and call
     *     // a function when the redraw has been completed
     *     queue_a_redraw (G_CALLBACK (on_redraw_complete), stage);
     *   }
     * ```
     * 
     * 
     * Note: This signal is emitted before the Clutter paint
     * pipeline is executed. If you want to know when the pipeline has
     * been completed you should use clutter_threads_add_repaint_func()
     * or clutter_threads_add_repaint_func_full().
     */
    connect(sigName: "queue-redraw", callback: (($obj: VideoTexture, origin: Clutter.Actor) => void)): number
    connect_after(sigName: "queue-redraw", callback: (($obj: VideoTexture, origin: Clutter.Actor) => void)): number
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    /**
     * The ::queue_layout signal is emitted when clutter_actor_queue_relayout()
     * is called on an actor.
     * 
     * The default implementation for #ClutterActor chains up to the
     * parent actor and queues a relayout on the parent, thus "bubbling"
     * the relayout queue up through the actor graph.
     * 
     * The main purpose of this signal is to allow relayout to be propagated
     * properly in the presence of #ClutterClone actors. Applications will
     * not normally need to connect to this signal.
     */
    connect(sigName: "queue-relayout", callback: (($obj: VideoTexture) => void)): number
    connect_after(sigName: "queue-relayout", callback: (($obj: VideoTexture) => void)): number
    emit(sigName: "queue-relayout"): void
    /**
     * The ::realize signal is emitted each time an actor is being
     * realized.
     */
    connect(sigName: "realize", callback: (($obj: VideoTexture) => void)): number
    connect_after(sigName: "realize", callback: (($obj: VideoTexture) => void)): number
    emit(sigName: "realize"): void
    /**
     * The ::scroll-event signal is emitted each time the mouse is
     * scrolled on `actor`
     */
    connect(sigName: "scroll-event", callback: (($obj: VideoTexture, event: Clutter.ScrollEvent) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: VideoTexture, event: Clutter.ScrollEvent) => boolean)): number
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    /**
     * The ::show signal is emitted when an actor is visible and
     * rendered on the stage.
     */
    connect(sigName: "show", callback: (($obj: VideoTexture) => void)): number
    connect_after(sigName: "show", callback: (($obj: VideoTexture) => void)): number
    emit(sigName: "show"): void
    /**
     * The ::touch-event signal is emitted each time a touch
     * begin/end/update/cancel event.
     */
    connect(sigName: "touch-event", callback: (($obj: VideoTexture, event: Clutter.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: VideoTexture, event: Clutter.Event) => boolean)): number
    emit(sigName: "touch-event", event: Clutter.Event): void
    /**
     * The ::transition-stopped signal is emitted once a transition
     * is stopped; a transition is stopped once it reached its total
     * duration (including eventual repeats), it has been stopped
     * using clutter_timeline_stop(), or it has been removed from the
     * transitions applied on `actor,` using clutter_actor_remove_transition().
     */
    connect(sigName: "transition-stopped", callback: (($obj: VideoTexture, name: string, is_finished: boolean) => void)): number
    connect_after(sigName: "transition-stopped", callback: (($obj: VideoTexture, name: string, is_finished: boolean) => void)): number
    emit(sigName: "transition-stopped", name: string, is_finished: boolean): void
    /**
     * The ::transitions-completed signal is emitted once all transitions
     * involving `actor` are complete.
     */
    connect(sigName: "transitions-completed", callback: (($obj: VideoTexture) => void)): number
    connect_after(sigName: "transitions-completed", callback: (($obj: VideoTexture) => void)): number
    emit(sigName: "transitions-completed"): void
    /**
     * The ::unrealize signal is emitted each time an actor is being
     * unrealized.
     */
    connect(sigName: "unrealize", callback: (($obj: VideoTexture) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: VideoTexture) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter-1.0.Clutter.Container */
    /**
     * The ::actor-added signal is emitted each time an actor
     * has been added to `container`.
     */
    connect(sigName: "actor-added", callback: (($obj: VideoTexture, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-added", callback: (($obj: VideoTexture, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    /**
     * The ::actor-removed signal is emitted each time an actor
     * is removed from `container`.
     */
    connect(sigName: "actor-removed", callback: (($obj: VideoTexture, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "actor-removed", callback: (($obj: VideoTexture, actor: Clutter.Actor) => void)): number
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    /**
     * The ::child-notify signal is emitted each time a property is
     * being set through the clutter_container_child_set() and
     * clutter_container_child_set_property() calls.
     */
    connect(sigName: "child-notify", callback: (($obj: VideoTexture, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: VideoTexture, actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    /* Signals of Clutter-1.0.Clutter.Media */
    /**
     * The ::eos signal is emitted each time the media stream ends.
     */
    connect(sigName: "eos", callback: (($obj: VideoTexture) => void)): number
    connect_after(sigName: "eos", callback: (($obj: VideoTexture) => void)): number
    emit(sigName: "eos"): void
    /**
     * The ::error signal is emitted each time an error occurred.
     */
    connect(sigName: "error", callback: (($obj: VideoTexture, error: GLib.Error) => void)): number
    connect_after(sigName: "error", callback: (($obj: VideoTexture, error: GLib.Error) => void)): number
    emit(sigName: "error", error: GLib.Error): void
    /* Signals of ClutterGst-1.0.ClutterGst.Player */
    /**
     * The ::download-buffering signal is emitted each time their an
     * update about the buffering of the current media.
     */
    connect(sigName: "download-buffering", callback: (($obj: VideoTexture, start: number, stop: number) => void)): number
    connect_after(sigName: "download-buffering", callback: (($obj: VideoTexture, start: number, stop: number) => void)): number
    emit(sigName: "download-buffering", start: number, stop: number): void
    connect(sigName: "notify::pixel-aspect-ratio", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixel-aspect-ratio", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filename", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter-quality", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-quality", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keep-aspect-ratio", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keep-aspect-ratio", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::load-async", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::load-async", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::load-data-async", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::load-data-async", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pick-with-alpha", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pick-with-alpha", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixel-format", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixel-format", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::repeat-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::repeat-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sync-size", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-size", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tile-waste", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-waste", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actions", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allocation", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-gravity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::anchor-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::background-color-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-transform-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-rect", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::constraints", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-box", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-gravity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-repeat", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::effect", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-position-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fixed-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-clip", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-pointer", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnification-filter", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-height-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-width-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minification-filter", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-height-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::natural-width-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pivot-point-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reactive", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realized", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-mode", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-center-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-gravity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text-direction", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transform-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::translation-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-align", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x-expand", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-align", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y-expand", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::z-position", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::audio-volume", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-volume", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer-fill", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-fill", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-seek", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::playing", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playing", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle-font-name", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-font-name", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle-uri", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-uri", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::audio-stream", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-stream", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::audio-streams", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-streams", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::idle", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-seek", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-seek", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seek-flags", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seek-flags", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle-track", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-track", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle-tracks", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-tracks", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoTexture_ConstructProps)
    _init (config?: VideoTexture_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VideoTexture
    /**
     * Looks up the #GParamSpec for a child property of `klass`.
     */
    static class_find_child_property(klass: GObject.ObjectClass, property_name: string): GObject.ParamSpec
    /**
     * Returns an array of #GParamSpec for all child properties.
     */
    static class_list_child_properties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    /**
     * Adds the #ClutterGstPlayer properties to a class and surchages the
     * set/get_property of #GObjectClass. You should call this
     * function at the end of the class_init method of the class
     * implementing #ClutterGstPlayer.
     */
    static class_init(object_class: GObject.ObjectClass): void
    static $gtype: GObject.Type
}
abstract class PlayerIface {
    /* Fields of ClutterGst-1.0.ClutterGst.PlayerIface */
    readonly get_pipeline: (player: Player) => Gst.Element
    readonly get_user_agent: (player: Player) => string
    readonly set_user_agent: (player: Player, user_agent: string) => void
    readonly get_seek_flags: (player: Player) => SeekFlags
    readonly set_seek_flags: (player: Player, flags: SeekFlags) => void
    readonly get_buffering_mode: (player: Player) => BufferingMode
    readonly set_buffering_mode: (player: Player, mode: BufferingMode) => void
    readonly get_audio_streams: (player: Player) => string[]
    readonly get_audio_stream: (player: Player) => number
    readonly set_audio_stream: (player: Player, index_: number) => void
    readonly get_subtitle_tracks: (player: Player) => string[]
    readonly get_subtitle_track: (player: Player) => number
    readonly set_subtitle_track: (player: Player, index_: number) => void
    readonly get_idle: (player: Player) => boolean
    readonly get_in_seek: (player: Player) => boolean
    readonly download_buffering: (player: Player, start: number, stop: number) => void
    static name: string
}
class PlayerIfacePrivate {
    static name: string
}
abstract class VideoSinkClass {
    static name: string
}
class VideoSinkPrivate {
    static name: string
}
abstract class VideoTextureClass {
    static name: string
}
class VideoTexturePrivate {
    static name: string
}
}
export default ClutterGst;