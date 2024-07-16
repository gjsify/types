/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

/**
 * Clapper-0.0
 */

import type GstTag from '@girs/gsttag-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GstPbutils from '@girs/gstpbutils-1.0';
import type GstVideo from '@girs/gstvideo-1.0';
import type GstAudio from '@girs/gstaudio-1.0';
import type Gio from '@girs/gio-2.0';

export namespace Clapper {
    enum DiscovererDiscoveryMode {
        /**
         * Run discovery for every single media item added to [class`Clapper`.Queue].
         *   This mode is useful when application presents a list of items to select from to the user before playback.
         *   It will scan every single item in queue, so user can have an updated list of items when selecting what to play.
         */
        ALWAYS,
        /**
         * Only run discovery on an item if it is not a currently selected item in [class`Clapper`.Queue].
         *   This mode is optimal when application always plays (or at least goes into paused) after selecting item from queue.
         *   It will skip discovery of such items since they will be discovered by [class`Clapper`.Player] anyway.
         */
        NONCURRENT,
    }
    enum MarkerType {
        /**
         * Unknown marker type.
         */
        UNKNOWN,
        /**
         * A title marker in timeline.
         */
        TITLE,
        /**
         * A chapter marker in timeline.
         */
        CHAPTER,
        /**
         * A track marker in timeline.
         */
        TRACK,
        CUSTOM_1,
        CUSTOM_2,
        CUSTOM_3,
    }
    enum PlayerSeekMethod {
        /**
         * Seek to exact position (slow).
         */
        ACCURATE,
        /**
         * Seek to approximated position.
         */
        NORMAL,
        /**
         * Seek to position of nearest keyframe (fast).
         */
        FAST,
    }
    enum PlayerState {
        /**
         * Player is stopped.
         */
        STOPPED,
        /**
         * Player is buffering.
         */
        BUFFERING,
        /**
         * Player is paused.
         */
        PAUSED,
        /**
         * Player is playing.
         */
        PLAYING,
    }
    enum QueueProgressionMode {
        /**
         * Queue will not change current item after playback finishes.
         */
        NONE,
        /**
         * Queue selects items one after another until the end.
         *   When end of queue is reached, this mode will continue one another item is added to the queue,
         *   playing it if player autoplay property is set, otherwise current player state is kept.
         */
        CONSECUTIVE,
        /**
         * Queue keeps repeating current media item.
         */
        REPEAT_ITEM,
        /**
         * Queue starts from beginning after last media item.
         */
        CAROUSEL,
        /**
         * Queue selects a random media item after current one.
         *   Shuffle mode will avoid reselecting previously shuffled items as long as possible.
         *   After it runs out of unused items, shuffling begins anew.
         */
        SHUFFLE,
    }
    enum StreamType {
        /**
         * Unknown stream type.
         */
        UNKNOWN,
        /**
         * Stream is a #ClapperVideoStream.
         */
        VIDEO,
        /**
         * Stream is a #ClapperAudioStream.
         */
        AUDIO,
        /**
         * Stream is a #ClapperSubtitleStream.
         */
        SUBTITLE,
    }
    /**
     * Check if Clapper was compiled with Discoverer feature.
     */
    const HAVE_DISCOVERER: boolean;
    /**
     * Check if Clapper was compiled with MPRIS feature.
     */
    const HAVE_MPRIS: boolean;
    /**
     * Check if Clapper was compiled with Server feature.
     */
    const HAVE_SERVER: boolean;
    /**
     * Clapper major version component
     */
    const MAJOR_VERSION: number;
    /**
     * The value used to indicate that marker does not have an ending time specified
     */
    const MARKER_NO_END: number;
    /**
     * Clapper micro version component
     */
    const MICRO_VERSION: number;
    /**
     * Clapper minor version component
     */
    const MINOR_VERSION: number;
    /**
     * The value used to refer to an invalid position in a #ClapperQueue
     */
    const QUEUE_INVALID_POSITION: number;
    /**
     * The value used to refer to an invalid position in a #ClapperStreamList
     */
    const STREAM_LIST_INVALID_POSITION: number;
    /**
     * Clapper version, encoded as a string
     */
    const VERSION_S: string;
    /**
     * Initializes the Clapper library. Implementations must always call this
     * before using Clapper API.
     *
     * Because Clapper uses GStreamer internally, this function will also initialize
     * GStreamer before initializing Clapper itself for user convienience, so
     * application does not have to do so anymore.
     *
     * WARNING: This function will terminate your program if it was unable to
     * initialize for some reason. If you want to do some fallback logic,
     * use [func`Clapper`.init_check] instead.
     * @param argv pointer to application's argv
     */
    function init(argv?: string[] | null): string[] | null;
    /**
     * This function does the same thing as [func`Clapper`.init], but instead of
     * terminating on failure it returns %FALSE with `error` set.
     * @param argv pointer to application's argv
     * @returns %TRUE if Clapper could be initialized, %FALSE otherwise.
     */
    function init_check(argv?: string[] | null): [boolean, string[] | null];
    module AudioStream {
        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps {
            bitrate: number;
            channels: number;
            codec: string;
            lang_code: string;
            langCode: string;
            lang_name: string;
            langName: string;
            sample_format: string;
            sampleFormat: string;
            sample_rate: number;
            sampleRate: number;
        }
    }

    /**
     * Represents an audio stream within media.
     */
    class AudioStream extends Stream {
        static $gtype: GObject.GType<AudioStream>;

        // Own properties of Clapper.AudioStream

        /**
         * Stream bitrate.
         */
        get bitrate(): number;
        /**
         * Stream number of audio channels.
         */
        get channels(): number;
        /**
         * Stream codec.
         */
        get codec(): string;
        /**
         * Stream language code in ISO-639 format.
         */
        get lang_code(): string;
        /**
         * Stream language code in ISO-639 format.
         */
        get langCode(): string;
        /**
         * Stream language name.
         */
        get lang_name(): string;
        /**
         * Stream language name.
         */
        get langName(): string;
        /**
         * Stream sample format.
         */
        get sample_format(): string;
        /**
         * Stream sample format.
         */
        get sampleFormat(): string;
        /**
         * Stream sample rate (in Hz).
         */
        get sample_rate(): number;
        /**
         * Stream sample rate (in Hz).
         */
        get sampleRate(): number;

        // Constructors of Clapper.AudioStream

        constructor(properties?: Partial<AudioStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Clapper.AudioStream

        /**
         * Get bitrate of audio `stream`.
         * @returns the bitrate of audio stream.
         */
        get_bitrate(): number;
        /**
         * Get number of audio channels in `stream`.
         * @returns the number of audio channels.
         */
        get_channels(): number;
        /**
         * Get codec used to encode `stream`.
         * @returns the audio codec of stream   or %NULL if undetermined.
         */
        get_codec(): string | null;
        /**
         * Get an ISO-639 language code of the `stream`.
         * @returns the language code of audio stream.
         */
        get_lang_code(): string | null;
        /**
         * Get language name of the `stream`.
         *
         * This function will try to return a translated string into current
         * locale if possible, with a fallback to a name extracted from tags.
         * @returns the language name of audio stream.
         */
        get_lang_name(): string | null;
        /**
         * Get sample format of audio `stream`.
         * @returns the sample format of stream   or %NULL if undetermined.
         */
        get_sample_format(): string | null;
        /**
         * Get sample rate of audio `stream` (in Hz).
         * @returns the sample rate of audio stream.
         */
        get_sample_rate(): number;
    }

    module Discoverer {
        // Constructor properties interface

        interface ConstructorProps extends Feature.ConstructorProps {
            discovery_mode: DiscovererDiscoveryMode;
            discoveryMode: DiscovererDiscoveryMode;
        }
    }

    /**
     * An optional Discoverer feature to be added to the player.
     *
     * #ClapperDiscoverer is a feature that wraps around #GstDiscoverer API
     * to automatically discover items within [class`Clapper`.Queue]. Once media
     * is scanned, all extra information of it will be filled within media item,
     * this includes title, duration, chapters, etc.
     *
     * Please note that media items are also discovered during their playback
     * by the player itself. #ClapperDiscoverer is useful in situations where
     * one wants to present to the user an updated media item before its
     * playback, such as an UI that displays playback queue.
     *
     * Depending on your application, you can select an optimal
     * [enum`Clapper`.DiscovererDiscoveryMode] that best suits your needs.
     *
     * Use [const`Clapper`.HAVE_DISCOVERER] macro to check if Clapper API
     * was compiled with this feature.
     */
    class Discoverer extends Feature {
        static $gtype: GObject.GType<Discoverer>;

        // Own properties of Clapper.Discoverer

        /**
         * Discoverer discovery mode.
         */
        get discovery_mode(): DiscovererDiscoveryMode;
        set discovery_mode(val: DiscovererDiscoveryMode);
        /**
         * Discoverer discovery mode.
         */
        get discoveryMode(): DiscovererDiscoveryMode;
        set discoveryMode(val: DiscovererDiscoveryMode);

        // Constructors of Clapper.Discoverer

        constructor(properties?: Partial<Discoverer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Discoverer;

        // Own methods of Clapper.Discoverer

        /**
         * Get the [enum`Clapper`.DiscovererDiscoveryMode] of `discoverer`.
         * @returns a currently set #ClapperDiscovererDiscoveryMode.
         */
        get_discovery_mode(): DiscovererDiscoveryMode;
        /**
         * Set the [enum`Clapper`.DiscovererDiscoveryMode] of `discoverer`.
         * @param mode a #ClapperDiscovererDiscoveryMode
         */
        set_discovery_mode(mode: DiscovererDiscoveryMode): void;
    }

    module Feature {
        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    /**
     * A base class for creating new features for the player.
     *
     * Feature objects are meant for adding additional functionalities that
     * are supposed to either act on playback/properties changes and/or change
     * them themselves due to some external signal/event.
     *
     * For reacting to playback changes subclass should override this class
     * virtual functions logic, while for controlling playback implementation
     * may call [method`Gst`.Object.get_parent] to acquire a weak reference on
     * a parent [class`Clapper`.Player] object feature was added to.
     */
    class Feature extends Gst.Object {
        static $gtype: GObject.GType<Feature>;

        // Constructors of Clapper.Feature

        constructor(properties?: Partial<Feature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Clapper.Feature

        /**
         * An item in queue got updated. This might be (or not) currently
         * played item. Implementations can get parent player object
         * if they want to check that from its queue.
         * @param item a #ClapperMediaItem that was updated
         */
        vfunc_item_updated(item: MediaItem): void;
        /**
         * Player mute state was changed.
         * @param mute %TRUE if player is muted, %FALSE otherwise
         */
        vfunc_mute_changed(mute: boolean): void;
        /**
         * New media item started playing. All following events (such as position changes)
         * will be related to this `item` from now on.
         * @param item a #ClapperMediaItem that is now playing
         */
        vfunc_played_item_changed(item: MediaItem): void;
        /**
         * Player position was changed.
         * @param position a decimal number with current position in seconds
         */
        vfunc_position_changed(position: number): void;
        /**
         * Prepare feature for operation (optional).
         *
         * This is different from init() as its called from features thread once
         * feature is added to the player, so it can already access it parent using
         * gst_object_get_parent(). If it fails, no other method will be called.
         */
        vfunc_prepare(): boolean;
        /**
         * A property of `feature` changed its value.
         *
         * Useful for reconfiguring `feature,` since unlike "notify" signal
         * this is always called from the thread that feature works on and
         * only after feature was prepared.
         * @param pspec a #GParamSpec
         */
        vfunc_property_changed(pspec: GObject.ParamSpec): void;
        /**
         * All items were removed from queue. Note that in such event
         * `queue_item_removed` will NOT be called for each item for performance reasons.
         * You probably want to implement this function if you also implemented item removal.
         */
        vfunc_queue_cleared(): void;
        /**
         * An item was added to the queue.
         * @param item a #ClapperMediaItem that was added
         * @param index position at which @item was placed in queue
         */
        vfunc_queue_item_added(item: MediaItem, index: number): void;
        /**
         * An item was removed from queue.
         * @param item a #ClapperMediaItem that was removed
         * @param index position from which @item was removed in queue
         */
        vfunc_queue_item_removed(item: MediaItem, index: number): void;
        /**
         * An item changed position within queue.
         * @param before position from which #ClapperMediaItem was removed
         * @param after position at which #ClapperMediaItem was inserted after removal
         */
        vfunc_queue_item_repositioned(before: number, after: number): void;
        /**
         * Progression mode of the queue was changed.
         * @param mode a #ClapperQueueProgressionMode
         */
        vfunc_queue_progression_changed(mode: QueueProgressionMode): void;
        /**
         * Player speed was changed.
         * @param speed the playback speed multiplier
         */
        vfunc_speed_changed(speed: number): void;
        /**
         * Player state was changed.
         * @param state a #ClapperPlayerState
         */
        vfunc_state_changed(state: PlayerState): void;
        /**
         * Revert the changes done in `prepare` (optional).
         */
        vfunc_unprepare(): boolean;
        /**
         * Player volume was changed.
         * @param volume the volume level
         */
        vfunc_volume_changed(volume: number): void;
    }

    module Marker {
        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            end: number;
            marker_type: MarkerType;
            markerType: MarkerType;
            start: number;
            title: string;
        }
    }

    /**
     * Represents a point in timeline.
     *
     * Markers are a convienient way of marking points of interest within a
     * [class`Clapper`.Timeline] of [class`Clapper`.MediaItem]. Use them
     * to indicate certain areas on the timeline.
     *
     * Markers are reference counted immutable objects. Once a marker is created
     * it can only be inserted into a single [class`Clapper`.Timeline] at a time.
     *
     * Please note that markers are independent of [property`Clapper`.MediaItem:duration]
     * and applications should not assume that all markers must have start/end times
     * lower or equal the item duration. This is not the case in e.g. live streams
     * where duration is unknown, but markers are still allowed to mark entries
     * (like EPG titles for example).
     *
     * Remember that [class`Clapper`.Player] will also automatically insert certain
     * markers extracted from media such as video chapters. Clapper will never
     * "touch" the ones created by the application. If you want to differentiate
     * your own markers, applications can define and create markers with one of
     * the custom types from [enum`Clapper`.MarkerType] enum.
     *
     * Example:
     *
     * ```c
     * #define MY_APP_MARKER (CLAPPER_MARKER_TYPE_CUSTOM_1)
     *
     * ClapperMarker *marker = clapper_marker_new (MY_APP_MARKER, title, start, end);
     * ```
     *
     * ```c
     * ClapperMarkerType marker_type = clapper_marker_get_marker_type (marker);
     *
     * if (marker_type == MY_APP_MARKER) {
     *   // Do something with your custom marker
     * }
     * ```
     */
    class Marker extends Gst.Object {
        static $gtype: GObject.GType<Marker>;

        // Own properties of Clapper.Marker

        /**
         * Ending time of marker.
         */
        get end(): number;
        /**
         * Type of stream.
         */
        get marker_type(): MarkerType;
        /**
         * Type of stream.
         */
        get markerType(): MarkerType;
        /**
         * Starting time of marker.
         */
        get start(): number;
        /**
         * Title of marker.
         */
        get title(): string;

        // Constructors of Clapper.Marker

        constructor(properties?: Partial<Marker.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](marker_type: MarkerType, title: string | null, start: number, end: number): Marker;

        // Own methods of Clapper.Marker

        /**
         * Get the end position (in seconds) of `marker`.
         * @returns marker end.
         */
        get_end(): number;
        /**
         * Get the #ClapperMarkerType of `marker`.
         * @returns type of marker.
         */
        get_marker_type(): MarkerType;
        /**
         * Get the start position (in seconds) of `marker`.
         * @returns marker start.
         */
        get_start(): number;
        /**
         * Get the title of `marker`.
         * @returns the marker title.
         */
        get_title(): string | null;
    }

    module MediaItem {
        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            container_format: string;
            containerFormat: string;
            duration: number;
            id: number;
            suburi: string;
            timeline: Timeline;
            title: string;
            uri: string;
        }
    }

    /**
     * Represents a media item.
     *
     * A newly created media item must be added to player [class`Clapper`.Queue]
     * first in order to be played.
     */
    class MediaItem extends Gst.Object {
        static $gtype: GObject.GType<MediaItem>;

        // Own properties of Clapper.MediaItem

        /**
         * Media container format.
         */
        get container_format(): string;
        /**
         * Media container format.
         */
        get containerFormat(): string;
        /**
         * Media duration as a decimal number in seconds.
         */
        get duration(): number;
        /**
         * Media Item ID.
         */
        get id(): number;
        /**
         * Media additional URI.
         */
        get suburi(): string;
        set suburi(val: string);
        /**
         * Media timeline.
         */
        get timeline(): Timeline;
        /**
         * Media title.
         */
        get title(): string;
        /**
         * Media URI.
         */
        get uri(): string;

        // Constructors of Clapper.MediaItem

        constructor(properties?: Partial<MediaItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](uri: string): MediaItem;

        static new_from_file(file: Gio.File): MediaItem;

        // Own methods of Clapper.MediaItem

        /**
         * Get media item container format.
         * @returns media container format.
         */
        get_container_format(): string | null;
        /**
         * Get media item duration as decimal number in seconds.
         * @returns media duration.
         */
        get_duration(): number;
        /**
         * Get the unique ID of #ClapperMediaItem.
         * @returns an ID of #ClapperMediaItem.
         */
        get_id(): number;
        /**
         * Get the additional URI of #ClapperMediaItem.
         * @returns an additional URI of #ClapperMediaItem.
         */
        get_suburi(): string | null;
        /**
         * Get the [class`Clapper`.Timeline] assosiated with `item`.
         * @returns a #ClapperTimeline of item.
         */
        get_timeline(): Timeline;
        /**
         * Get media item title.
         *
         * The title can be either text detected by media discovery once it
         * completes. Otherwise whenever possible this will try to return a title
         * extracted from media URI e.g. basename without extension for local files.
         * @returns media title.
         */
        get_title(): string | null;
        /**
         * Get the URI of #ClapperMediaItem.
         * @returns an URI of #ClapperMediaItem.
         */
        get_uri(): string;
        /**
         * Set the additional URI of #ClapperMediaItem.
         *
         * This is typically used to add an external subtitles URI to the `item`.
         * @param suburi an additional URI
         */
        set_suburi(suburi: string): void;
    }

    module Mpris {
        // Constructor properties interface

        interface ConstructorProps extends Feature.ConstructorProps {
            desktop_entry: string;
            desktopEntry: string;
            fallback_art_url: string;
            fallbackArtUrl: string;
            identity: string;
            own_name: string;
            ownName: string;
            queue_controllable: boolean;
            queueControllable: boolean;
        }
    }

    /**
     * An optional `MPRIS` feature to add to the player.
     *
     * Not every OS supports `MPRIS`. Use [const`Clapper`.HAVE_MPRIS] macro
     * to check if Clapper API was compiled with this feature.
     */
    class Mpris extends Feature {
        static $gtype: GObject.GType<Mpris>;

        // Own properties of Clapper.Mpris

        /**
         * The basename of an installed .desktop file with the ".desktop" extension stripped.
         */
        get desktop_entry(): string;
        /**
         * The basename of an installed .desktop file with the ".desktop" extension stripped.
         */
        get desktopEntry(): string;
        /**
         * Fallback artwork to show when media does not provide one.
         */
        get fallback_art_url(): string;
        set fallback_art_url(val: string);
        /**
         * Fallback artwork to show when media does not provide one.
         */
        get fallbackArtUrl(): string;
        set fallbackArtUrl(val: string);
        /**
         * A friendly name to identify the media player.
         *
         * Example: "My Player"
         */
        get identity(): string;
        /**
         * DBus name to own on connection.
         *
         * Must be written as a reverse DNS format starting with "org.mpris.MediaPlayer2." prefix.
         * Each #ClapperMpris instance running on the same system must have an unique.
         *
         * Example: "org.mpris.MediaPlayer2.MyPlayer1"
         */
        get own_name(): string;
        /**
         * DBus name to own on connection.
         *
         * Must be written as a reverse DNS format starting with "org.mpris.MediaPlayer2." prefix.
         * Each #ClapperMpris instance running on the same system must have an unique.
         *
         * Example: "org.mpris.MediaPlayer2.MyPlayer1"
         */
        get ownName(): string;
        /**
         * Whether remote MPRIS clients can control #ClapperQueue.
         */
        get queue_controllable(): boolean;
        set queue_controllable(val: boolean);
        /**
         * Whether remote MPRIS clients can control #ClapperQueue.
         */
        get queueControllable(): boolean;
        set queueControllable(val: boolean);

        // Constructors of Clapper.Mpris

        constructor(properties?: Partial<Mpris.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](own_name: string, identity: string, desktop_entry?: string | null): Mpris;

        // Own methods of Clapper.Mpris

        /**
         * Get fallback art URL earlier set by user.
         * @returns fallback art URL.
         */
        get_fallback_art_url(): string | null;
        /**
         * Get whether remote `MPRIS` clients can control [class`Clapper`.Queue].
         * @returns %TRUE if control over #ClapperQueue is allowed, %FALSE otherwise.
         */
        get_queue_controllable(): boolean;
        /**
         * Set fallback artwork to show when media does not provide one.
         * @param art_url an art URL
         */
        set_fallback_art_url(art_url?: string | null): void;
        /**
         * Set whether remote MPRIS clients can control #ClapperQueue.
         *
         * This includes ability to open new URIs, adding/removing
         * items from the queue and selecting current item for
         * playback remotely using MPRIS interface.
         *
         * You probably want to keep this disabled if your application
         * is supposed to manage what is played now and not MPRIS client.
         * @param controllable if #ClapperQueue should be controllable
         */
        set_queue_controllable(controllable: boolean): void;
    }

    module Player {
        // Signal callback interfaces

        interface Error {
            (error: GLib.Error, debug_info?: string | null): void;
        }

        interface MissingPlugin {
            (name: string, installer_detail?: string | null): void;
        }

        interface SeekDone {
            (): void;
        }

        interface Warning {
            (error: GLib.Error, debug_info?: string | null): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends ThreadedObject.ConstructorProps {
            audio_enabled: boolean;
            audioEnabled: boolean;
            audio_filter: Gst.Element;
            audioFilter: Gst.Element;
            audio_offset: number;
            audioOffset: number;
            audio_sink: Gst.Element;
            audioSink: Gst.Element;
            audio_streams: StreamList;
            audioStreams: StreamList;
            autoplay: boolean;
            current_audio_decoder: Gst.Element;
            currentAudioDecoder: Gst.Element;
            current_video_decoder: Gst.Element;
            currentVideoDecoder: Gst.Element;
            mute: boolean;
            position: number;
            queue: Queue;
            speed: number;
            state: PlayerState;
            subtitle_font_desc: string;
            subtitleFontDesc: string;
            subtitle_offset: number;
            subtitleOffset: number;
            subtitle_streams: StreamList;
            subtitleStreams: StreamList;
            subtitles_enabled: boolean;
            subtitlesEnabled: boolean;
            video_enabled: boolean;
            videoEnabled: boolean;
            video_filter: Gst.Element;
            videoFilter: Gst.Element;
            video_sink: Gst.Element;
            videoSink: Gst.Element;
            video_streams: StreamList;
            videoStreams: StreamList;
            volume: number;
        }
    }

    /**
     * The media player object used for playback.
     *
     * #ClapperPlayer was written in an easy to use way, so no special GStreamer
     * experience is needed to get started with making various playback applications.
     *
     * Scheduling media for playback is done using a [class`Clapper`.Queue] upon which
     * player operates.
     *
     * Player uses `GStreamer` internally and handles playback on a separate thread, while
     * serializing all events/commands between player and the thread it was created upon
     * (usually main app thread). This makes it very easy to integrate with UI toolkits
     * that operate on a single thread like (but not limited to) GTK.
     *
     * To listen for property changes, you can connect to property "notify" signal.
     */
    class Player extends ThreadedObject {
        static $gtype: GObject.GType<Player>;

        // Own properties of Clapper.Player

        /**
         * Whether audio stream is enabled.
         */
        get audio_enabled(): boolean;
        set audio_enabled(val: boolean);
        /**
         * Whether audio stream is enabled.
         */
        get audioEnabled(): boolean;
        set audioEnabled(val: boolean);
        /**
         * Optional audio filter to use (none by default).
         */
        get audio_filter(): Gst.Element;
        set audio_filter(val: Gst.Element);
        /**
         * Optional audio filter to use (none by default).
         */
        get audioFilter(): Gst.Element;
        set audioFilter(val: Gst.Element);
        /**
         * Audio stream offset relative to video.
         */
        get audio_offset(): number;
        set audio_offset(val: number);
        /**
         * Audio stream offset relative to video.
         */
        get audioOffset(): number;
        set audioOffset(val: number);
        /**
         * Audio sink to use (autoaudiosink by default).
         */
        get audio_sink(): Gst.Element;
        set audio_sink(val: Gst.Element);
        /**
         * Audio sink to use (autoaudiosink by default).
         */
        get audioSink(): Gst.Element;
        set audioSink(val: Gst.Element);
        /**
         * List of currently available audio streams.
         */
        get audio_streams(): StreamList;
        /**
         * List of currently available audio streams.
         */
        get audioStreams(): StreamList;
        /**
         * Always try to start playback after media item changes.
         */
        get autoplay(): boolean;
        set autoplay(val: boolean);
        /**
         * Currently used audio decoder.
         */
        get current_audio_decoder(): Gst.Element;
        /**
         * Currently used audio decoder.
         */
        get currentAudioDecoder(): Gst.Element;
        /**
         * Currently used video decoder.
         */
        get current_video_decoder(): Gst.Element;
        /**
         * Currently used video decoder.
         */
        get currentVideoDecoder(): Gst.Element;
        /**
         * Mute audio without changing volume.
         */
        get mute(): boolean;
        set mute(val: boolean);
        /**
         * Current playback position as a decimal number in seconds.
         */
        get position(): number;
        /**
         * Clapper playback queue.
         */
        get queue(): Queue;
        /**
         * Current playback speed.
         */
        get speed(): number;
        set speed(val: number);
        /**
         * Current playback state.
         */
        get state(): PlayerState;
        /**
         * Subtitle stream font description.
         */
        get subtitle_font_desc(): string;
        set subtitle_font_desc(val: string);
        /**
         * Subtitle stream font description.
         */
        get subtitleFontDesc(): string;
        set subtitleFontDesc(val: string);
        /**
         * Subtitle stream offset relative to video.
         */
        get subtitle_offset(): number;
        set subtitle_offset(val: number);
        /**
         * Subtitle stream offset relative to video.
         */
        get subtitleOffset(): number;
        set subtitleOffset(val: number);
        /**
         * List of currently available subtitle streams.
         */
        get subtitle_streams(): StreamList;
        /**
         * List of currently available subtitle streams.
         */
        get subtitleStreams(): StreamList;
        /**
         * Whether subtitles stream is enabled.
         */
        get subtitles_enabled(): boolean;
        set subtitles_enabled(val: boolean);
        /**
         * Whether subtitles stream is enabled.
         */
        get subtitlesEnabled(): boolean;
        set subtitlesEnabled(val: boolean);
        /**
         * Whether video stream is enabled.
         */
        get video_enabled(): boolean;
        set video_enabled(val: boolean);
        /**
         * Whether video stream is enabled.
         */
        get videoEnabled(): boolean;
        set videoEnabled(val: boolean);
        /**
         * Optional video filter to use (none by default).
         */
        get video_filter(): Gst.Element;
        set video_filter(val: Gst.Element);
        /**
         * Optional video filter to use (none by default).
         */
        get videoFilter(): Gst.Element;
        set videoFilter(val: Gst.Element);
        /**
         * Video sink to use (autovideosink by default).
         */
        get video_sink(): Gst.Element;
        set video_sink(val: Gst.Element);
        /**
         * Video sink to use (autovideosink by default).
         */
        get videoSink(): Gst.Element;
        set videoSink(val: Gst.Element);
        /**
         * List of currently available video streams.
         */
        get video_streams(): StreamList;
        /**
         * List of currently available video streams.
         */
        get videoStreams(): StreamList;
        /**
         * Current volume as a decimal number (1.0 = 100%).
         *
         * Note that #ClapperPlayer uses a CUBIC volume scale, meaning
         * that this property value reflects human hearing level and can
         * be easily bound to volume sliders as-is.
         */
        get volume(): number;
        set volume(val: number);

        // Constructors of Clapper.Player

        constructor(properties?: Partial<Player.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Player;

        // Own signals of Clapper.Player

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'error',
            callback: (_source: this, error: GLib.Error, debug_info: string | null) => void,
        ): number;
        connect_after(
            signal: 'error',
            callback: (_source: this, error: GLib.Error, debug_info: string | null) => void,
        ): number;
        emit(signal: 'error', error: GLib.Error, debug_info?: string | null): void;
        connect(
            signal: 'missing-plugin',
            callback: (_source: this, name: string, installer_detail: string | null) => void,
        ): number;
        connect_after(
            signal: 'missing-plugin',
            callback: (_source: this, name: string, installer_detail: string | null) => void,
        ): number;
        emit(signal: 'missing-plugin', name: string, installer_detail?: string | null): void;
        connect(signal: 'seek-done', callback: (_source: this) => void): number;
        connect_after(signal: 'seek-done', callback: (_source: this) => void): number;
        emit(signal: 'seek-done'): void;
        connect(
            signal: 'warning',
            callback: (_source: this, error: GLib.Error, debug_info: string | null) => void,
        ): number;
        connect_after(
            signal: 'warning',
            callback: (_source: this, error: GLib.Error, debug_info: string | null) => void,
        ): number;
        emit(signal: 'warning', error: GLib.Error, debug_info?: string | null): void;

        // Own methods of Clapper.Player

        /**
         * Add another #ClapperFeature to the player.
         * @param feature a #ClapperFeature
         */
        add_feature(feature: Feature): void;
        /**
         * Get whether audio stream is enabled.
         * @returns %TRUE if enabled, %FALSE otherwise.
         */
        get_audio_enabled(): boolean;
        /**
         * Get #GstElement used as audio filter.
         * @returns #GstElement set as audio filter.
         */
        get_audio_filter(): Gst.Element;
        /**
         * Get the currently set audio stream offset.
         *
         * The returned value is in seconds as a decimal number.
         * @returns the audio stream offset.
         */
        get_audio_offset(): number;
        /**
         * Get #GstElement used as audio sink.
         * @returns #GstElement set as audio sink.
         */
        get_audio_sink(): Gst.Element;
        /**
         * Get a list of audio streams within media item.
         * @returns a #ClapperStreamList of audio #ClapperStream.
         */
        get_audio_streams(): StreamList;
        /**
         * Get the autoplay value.
         * @returns %TRUE if autoplay is enabled, %FALSE otherwise.
         */
        get_autoplay(): boolean;
        /**
         * Get #GstElement currently used as audio decoder.
         * @returns #GstElement currently used as audio decoder.
         */
        get_current_audio_decoder(): Gst.Element;
        /**
         * Get #GstElement currently used as video decoder.
         * @returns #GstElement currently used as video decoder.
         */
        get_current_video_decoder(): Gst.Element;
        /**
         * Get the mute state of the player.
         * @returns %TRUE if player is muted, %FALSE otherwise.
         */
        get_mute(): boolean;
        /**
         * Get the current player playback position.
         *
         * The returned value is in seconds as a decimal number.
         * @returns the position of the player.
         */
        get_position(): number;
        /**
         * Get the #ClapperQueue of the player.
         *
         * The queue belongs to the player and can be accessed for as long
         * as #ClapperPlayer object instance it belongs to is alive.
         * @returns the #ClapperQueue of the player.
         */
        get_queue(): Queue;
        /**
         * Get the speed of the player used for playback.
         * @returns the playback speed multiplier.
         */
        get_speed(): number;
        /**
         * Get the current #ClapperPlayerState.
         * @returns the #ClapperPlayerState of the player.
         */
        get_state(): PlayerState;
        /**
         * Get the currently set font description used for subtitle stream rendering.
         * @returns the subtitle font description.
         */
        get_subtitle_font_desc(): string;
        /**
         * Get the currently set subtitle stream offset.
         *
         * The returned value is in seconds as a decimal number.
         * @returns the subtitle stream offset.
         */
        get_subtitle_offset(): number;
        /**
         * Get a list of subtitle streams within media item.
         * @returns a #ClapperStreamList of subtitle #ClapperStream.
         */
        get_subtitle_streams(): StreamList;
        /**
         * Get whether subtitles are to be shown when available.
         * @returns %TRUE if enabled, %FALSE otherwise.
         */
        get_subtitles_enabled(): boolean;
        /**
         * Get whether video stream is enabled.
         * @returns %TRUE if enabled, %FALSE otherwise.
         */
        get_video_enabled(): boolean;
        /**
         * Get #GstElement used as video filter.
         * @returns #GstElement set as video filter.
         */
        get_video_filter(): Gst.Element;
        /**
         * Get #GstElement used as video sink.
         * @returns #GstElement set as video sink.
         */
        get_video_sink(): Gst.Element;
        /**
         * Get a list of video streams within media item.
         * @returns a #ClapperStreamList of video #ClapperStream.
         */
        get_video_streams(): StreamList;
        /**
         * Get the volume of the player.
         * @returns current volume level.
         */
        get_volume(): number;
        /**
         * Pause the playback of current media item.
         *
         * This function will queue a request for the underlaying #GStreamer
         * pipeline to go into `PAUSED` state, thus can also be used on a not
         * yet started video to go into `PAUSED` state first.
         */
        pause(): void;
        /**
         * Either start or resume the playback of current media item.
         *
         * This function will queue a request for the underlaying #GStreamer
         * pipeline to go into `PLAYING` state.
         */
        play(): void;
        /**
         * Request the player to perform a seek operation.
         *
         * This function will use [enum`Clapper`.PlayerSeekMethod.NORMAL] as a
         * seeking method. If you wish to specify what method to use per seeking
         * request, use [method`Clapper`.Player.seek_custom] instead.
         *
         * Note that seeking requests are per selected media item. Seeking
         * requests will be ignored if player is stopped. You need to at least
         * call [method`Clapper`.Player.pause] before seeking and then your requested
         * seek will be handled if item could be played.
         * @param position a decimal number with position to seek to (in seconds)
         */
        seek(position: number): void;
        /**
         * Request the player to perform a seek operation.
         *
         * Same as [method`Clapper`.Player.seek], but also allows to specify
         * [enum`Clapper`.PlayerSeekMethod] to use for seek.
         * @param position a decimal number with position to seek to (in seconds)
         * @param method a #ClapperPlayerSeekMethod
         */
        seek_custom(position: number, method: PlayerSeekMethod): void;
        /**
         * Set whether enable audio stream.
         * @param enabled whether enabled
         */
        set_audio_enabled(enabled: boolean): void;
        /**
         * Set #GstElement to be used as audio filter.
         * @param element a #GstElement or %NULL for none.
         */
        set_audio_filter(element?: Gst.Element | null): void;
        /**
         * Set synchronisation offset between the audio stream and video.
         *
         * Positive values make the audio ahead of the video and negative
         * values make the audio go behind the video.
         * @param offset a decimal audio offset (in seconds)
         */
        set_audio_offset(offset: number): void;
        /**
         * Set #GstElement to be used as audio sink.
         * @param element a #GstElement or %NULL to use default.
         */
        set_audio_sink(element?: Gst.Element | null): void;
        /**
         * Set the autoplay state of the player.
         *
         * When autoplay is enabled, player will always try to start
         * playback after current media item changes. When disabled
         * current playback state is preserved when changing items.
         * @param enabled %TRUE to enable autoplay, %FALSE otherwise.
         */
        set_autoplay(enabled: boolean): void;
        /**
         * Set the mute state of the player.
         * @param mute %TRUE if player should be muted, %FALSE otherwise.
         */
        set_mute(mute: boolean): void;
        /**
         * Set the speed multiplier of the player.
         * @param speed the playback speed multiplier.
         */
        set_speed(speed: number): void;
        /**
         * Set Pango font description to be used for subtitle stream rendering.
         * @param font_desc Font description
         */
        set_subtitle_font_desc(font_desc: string): void;
        /**
         * Set synchronisation offset between the subtitle stream and video.
         *
         * Positive values make the subtitles ahead of the video and negative
         * values make the subtitles go behind the video.
         * @param offset a decimal subtitle stream offset (in seconds)
         */
        set_subtitle_offset(offset: number): void;
        /**
         * Set whether subtitles should be shown if any.
         * @param enabled whether enabled
         */
        set_subtitles_enabled(enabled: boolean): void;
        /**
         * Set whether enable video stream.
         * @param enabled whether enabled
         */
        set_video_enabled(enabled: boolean): void;
        /**
         * Set #GstElement to be used as video filter.
         * @param element a #GstElement or %NULL for none.
         */
        set_video_filter(element?: Gst.Element | null): void;
        /**
         * Set #GstElement to be used as video sink.
         * @param element a #GstElement or %NULL to use default.
         */
        set_video_sink(element?: Gst.Element | null): void;
        /**
         * Set the volume of the player.
         *
         * The value should be within 0 - 2.0 range, where 1.0 is 100%
         * volume and anything above results with an overamplification.
         * @param volume the volume level.
         */
        set_volume(volume: number): void;
        /**
         * Stop the playback of current media item.
         *
         * This function will queue a request for the underlaying #GStreamer
         * pipeline to go into `READY` state.
         */
        stop(): void;
    }

    module Queue {
        // Constructor properties interface

        interface ConstructorProps<A extends GObject.Object = GObject.Object>
            extends Gst.Object.ConstructorProps,
                Gio.ListModel.ConstructorProps {
            current_index: number;
            currentIndex: number;
            current_item: MediaItem;
            currentItem: MediaItem;
            gapless: boolean;
            instant: boolean;
            n_items: number;
            nItems: number;
            progression_mode: QueueProgressionMode;
            progressionMode: QueueProgressionMode;
        }
    }

    /**
     * A queue of media to be played.
     */
    class Queue<A extends GObject.Object = GObject.Object> extends Gst.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<Queue>;

        // Own properties of Clapper.Queue

        /**
         * Index of currently selected media item for playback.
         */
        get current_index(): number;
        set current_index(val: number);
        /**
         * Index of currently selected media item for playback.
         */
        get currentIndex(): number;
        set currentIndex(val: number);
        /**
         * Currently selected media item for playback.
         */
        get current_item(): MediaItem;
        /**
         * Currently selected media item for playback.
         */
        get currentItem(): MediaItem;
        /**
         * Use gapless progression.
         */
        get gapless(): boolean;
        set gapless(val: boolean);
        /**
         * Use instant media item changes.
         */
        get instant(): boolean;
        set instant(val: boolean);
        /**
         * Number of media items in the queue.
         */
        get n_items(): number;
        /**
         * Number of media items in the queue.
         */
        get nItems(): number;
        /**
         * Queue progression mode.
         */
        get progression_mode(): QueueProgressionMode;
        set progression_mode(val: QueueProgressionMode);
        /**
         * Queue progression mode.
         */
        get progressionMode(): QueueProgressionMode;
        set progressionMode(val: QueueProgressionMode);

        // Constructors of Clapper.Queue

        constructor(properties?: Partial<Queue.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Clapper.Queue

        /**
         * Add another #ClapperMediaItem to the end of queue.
         *
         * If item is already in queue, this function will do nothing,
         * so it is safe to call multiple times if unsure.
         * @param item a #ClapperMediaItem
         */
        add_item(item: MediaItem): void;
        /**
         * Removes all media items from the queue.
         *
         * If queue is empty, this function will do nothing,
         * so it is safe to call multiple times if unsure.
         */
        clear(): void;
        /**
         * Get the index of #ClapperMediaItem within #ClapperQueue.
         * @param item a #ClapperMediaItem to search for
         * @returns %TRUE if @item is one of the elements of queue.
         */
        find_item(item: MediaItem): [boolean, number];
        /**
         * Get index of the currently selected #ClapperMediaItem.
         * @returns Current item index or [const@Clapper.QUEUE_INVALID_POSITION]   when nothing is selected.
         */
        get_current_index(): number;
        /**
         * Get the currently selected #ClapperMediaItem.
         * @returns The current #ClapperMediaItem.
         */
        get_current_item(): MediaItem | null;
        /**
         * Get if #ClapperQueue is set to use gapless progression.
         * @returns %TRUE if enabled, %FALSE otherwise.
         */
        get_gapless(): boolean;
        /**
         * Get if #ClapperQueue is set to use instant media item changes.
         * @returns %TRUE if enabled, %FALSE otherwise.
         */
        get_instant(): boolean;
        /**
         * Get the #ClapperQueueProgressionMode of the #ClapperQueue.
         * @returns a currently set #ClapperQueueProgressionMode.
         */
        get_progression_mode(): QueueProgressionMode;
        /**
         * Insert another #ClapperMediaItem at `index` position to the queue.
         *
         * If item is already in queue, this function will do nothing,
         * so it is safe to call multiple times if unsure.
         * @param item a #ClapperMediaItem
         * @param index the index to place @item in queue, -1 to append
         */
        insert_item(item: MediaItem, index: number): void;
        /**
         * Checks if given #ClapperMediaItem is currently selected.
         * @param item a #ClapperMediaItem to check
         * @returns %TRUE if @item is a current media item, %FALSE otherwise.
         */
        item_is_current(item: MediaItem): boolean;
        /**
         * Removes #ClapperMediaItem at `index` from the queue.
         * @param index an item index
         */
        remove_index(index: number): void;
        /**
         * Removes #ClapperMediaItem from the queue.
         *
         * If item either was never in the queue or was removed from
         * it earlier, this function will do nothing, so it is safe
         * to call multiple times if unsure.
         * @param item a #ClapperMediaItem
         */
        remove_item(item: MediaItem): void;
        /**
         * Change position of one #ClapperMediaItem within the queue.
         *
         * Note that the `index` is the new position you expect item to be
         * after whole reposition operation is finished.
         *
         * If item is not in the queue, this function will do nothing.
         * @param item a #ClapperMediaItem
         * @param index the index to place @item in queue, -1 to place at the end
         */
        reposition_item(item: MediaItem, index: number): void;
        /**
         * Selects #ClapperMediaItem at `index` from `queue` as current one or
         * unselects currently selected index when `index` is [const`Clapper`.QUEUE_INVALID_POSITION].
         * @param index an item index or [const@Clapper.QUEUE_INVALID_POSITION] to unselect
         * @returns %TRUE if item at @index could be selected/unselected,   %FALSE if index was out of queue range.
         */
        select_index(index: number): boolean;
        /**
         * Selects #ClapperMediaItem from `queue` as current one or
         * unselects currently selected item when `item` is %NULL.
         * @param item a #ClapperMediaItem or %NULL to unselect
         * @returns %TRUE if item could be selected/unselected,   %FALSE if it was not in the queue.
         */
        select_item(item?: MediaItem | null): boolean;
        /**
         * Selects next #ClapperMediaItem from `queue` for playback.
         *
         * Note that this will try to select next item in the order
         * of the queue, regardless of [enum`Clapper`.QueueProgressionMode] set.
         * @returns %TRUE if there was another media item in queue, %FALSE otherwise.
         */
        select_next_item(): boolean;
        /**
         * Selects previous #ClapperMediaItem from `queue` for playback.
         *
         * Note that this will try to select previous item in the order
         * of the queue, regardless of [enum`Clapper`.QueueProgressionMode] set.
         * @returns %TRUE if there was previous media item in queue, %FALSE otherwise.
         */
        select_previous_item(): boolean;
        /**
         * Set #ClapperQueue progression to be gapless.
         *
         * Gapless playback will try to re-use as much as possible of underlying
         * GStreamer elements when #ClapperQueue progresses, removing any
         * potential gap in the data.
         *
         * Enabling this option mostly makes sense when used together with
         * [property`Clapper`.Queue:progression-mode] property set to
         * [enum`Clapper`.QueueProgressionMode.CONSECUTIVE].
         *
         * NOTE: This feature within GStreamer is rather new and
         * might still cause playback issues. Disabled by default.
         * @param gapless %TRUE to enable, %FALSE otherwise.
         */
        set_gapless(gapless: boolean): void;
        /**
         * Set #ClapperQueue media item changes to be instant.
         *
         * Instant will try to re-use as much as possible of underlying
         * GStreamer elements when #ClapperMediaItem is selected, allowing
         * media item change requests to be faster.
         *
         * NOTE: This feature within GStreamer is rather new and
         * might still cause playback issues. Disabled by default.
         * @param instant %TRUE to enable, %FALSE otherwise.
         */
        set_instant(instant: boolean): void;
        /**
         * Set the #ClapperQueueProgressionMode of the #ClapperQueue.
         *
         * Changing the mode set will alter next item selection at the
         * end of playback. For possible values and their descriptions,
         * see #ClapperQueueProgressionMode documentation.
         * @param mode a #ClapperQueueProgressionMode
         */
        set_progression_mode(mode: QueueProgressionMode): void;
        /**
         * Removes #ClapperMediaItem at `index` from the queue.
         * @param index an item index
         * @returns The removed #ClapperMediaItem at @index.
         */
        steal_index(index: number): MediaItem | null;

        // Inherited methods
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         * @returns the #GType of the items contained in @list.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         * @returns the number of items in @list.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list,` %NULL is
         * returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of g_list_model_get_item().
         *
         * See also: g_list_model_get_n_items()
         * @param position the position of the item to fetch
         * @returns the object at @position.
         */
        get_item(position: number): A | null;
        /**
         * Emits the #GListModel::items-changed signal on `list`.
         *
         * This function should only be called by classes implementing
         * #GListModel. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as #GListStore), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the #GListModel
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which @list changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list,` %NULL is returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.  See g_list_model_get_n_items().
         *
         * The same #GObject instance may not appear more than once in a #GListModel.
         * @param position the position of the item to fetch
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         */
        vfunc_get_n_items(): number;
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
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
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
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        // Conflicted with Gst.Object.ref
        ref(...args: never[]): any;
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
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
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
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
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
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
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
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Server {
        // Signal callback interfaces

        interface Error {
            (error: GLib.Error): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Feature.ConstructorProps {
            current_port: number;
            currentPort: number;
            enabled: boolean;
            port: number;
            queue_controllable: boolean;
            queueControllable: boolean;
            running: boolean;
        }
    }

    /**
     * An optional Server feature to add to the player.
     *
     * #ClapperServer is a feature that hosts a local server
     * providing an ability to both monitor and control playback
     * through WebSocket messages and HTTP requests.
     *
     * Use [const`Clapper`.HAVE_SERVER] macro to check if Clapper API
     * was compiled with this feature.
     */
    class Server extends Feature {
        static $gtype: GObject.GType<Server>;

        // Own properties of Clapper.Server

        /**
         * Port on which server is currently listening on or 0 if not listening.
         */
        get current_port(): number;
        /**
         * Port on which server is currently listening on or 0 if not listening.
         */
        get currentPort(): number;
        /**
         * Whether server is enabled.
         */
        get enabled(): boolean;
        set enabled(val: boolean);
        /**
         * Port to listen on or 0 for using random unused port.
         */
        get port(): number;
        set port(val: number);
        /**
         * Whether remote server clients can control #ClapperQueue.
         */
        get queue_controllable(): boolean;
        set queue_controllable(val: boolean);
        /**
         * Whether remote server clients can control #ClapperQueue.
         */
        get queueControllable(): boolean;
        set queueControllable(val: boolean);
        /**
         * Whether server is currently running.
         */
        get running(): boolean;

        // Constructors of Clapper.Server

        constructor(properties?: Partial<Server.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Server;

        // Own signals of Clapper.Server

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'error', callback: (_source: this, error: GLib.Error) => void): number;
        connect_after(signal: 'error', callback: (_source: this, error: GLib.Error) => void): number;
        emit(signal: 'error', error: GLib.Error): void;

        // Own methods of Clapper.Server

        /**
         * Get port on which server is currently listening on.
         * @returns Current listening port or 0 if server is not listening.
         */
        get_current_port(): number;
        /**
         * Get whether #ClapperServer is set to be running.
         * @returns %TRUE if enabled, %FALSE otherwise.
         */
        get_enabled(): boolean;
        /**
         * Get requested server listening port.
         *
         * If you want to know the port server is currently listening on,
         * use [method`Clapper`.Server.get_current_port] instead.
         * @returns Requested listening port or 0 when using random port.
         */
        get_port(): number;
        /**
         * Get whether remote `server` clients can control [class`Clapper`.Queue].
         * @returns %TRUE if control over #ClapperQueue is allowed, %FALSE otherwise.
         */
        get_queue_controllable(): boolean;
        /**
         * Get whether #ClapperServer is currently running.
         * @returns %TRUE if running, %FALSE otherwise.
         */
        get_running(): boolean;
        /**
         * Set whether #ClapperServer should be running.
         *
         * Note that server feature will run only after being added to the player.
         * It can be however set to enabled earlier. If server was already added,
         * changing this property allows to start/stop server at any time.
         *
         * To be notified when server is actually running/stopped after being enabled/disabled,
         * you can listen for changes to [property`Clapper`.Server:running] property.
         * @param enabled if #ClapperServer should run
         */
        set_enabled(enabled: boolean): void;
        /**
         * Set server listening port.
         * @param port a port number or 0 for random free port
         */
        set_port(port: number): void;
        /**
         * Set whether remote `server` clients can control [class`Clapper`.Queue].
         *
         * This includes ability to add/remove items from the queue and selecting
         * current item for playback remotely using WebSocket messages.
         *
         * You probably want to keep this disabled if your application
         * is supposed to manage what is played now and not WebSocket client.
         * @param controllable if #ClapperQueue should be controllable
         */
        set_queue_controllable(controllable: boolean): void;
    }

    module Stream {
        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            stream_type: StreamType;
            streamType: StreamType;
            title: string;
        }
    }

    /**
     * Represents a stream within media.
     */
    class Stream extends Gst.Object {
        static $gtype: GObject.GType<Stream>;

        // Own properties of Clapper.Stream

        /**
         * Type of stream.
         */
        get stream_type(): StreamType;
        /**
         * Type of stream.
         */
        get streamType(): StreamType;
        /**
         * Title of stream.
         */
        get title(): string;

        // Constructors of Clapper.Stream

        constructor(properties?: Partial<Stream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Clapper.Stream

        /**
         * This function is called when internal #GstStream gets updated.
         * Meant for internal usage only. Used for subclasses to update
         * their properties accordingly.
         *
         * Note that this vfunc is called from different threads.
         * @param caps an updated #GstCaps if changed
         * @param tags an updated #GstTagList if changed
         */
        vfunc_internal_stream_updated(caps?: Gst.Caps | null, tags?: Gst.TagList | null): void;

        // Own methods of Clapper.Stream

        /**
         * Get the #ClapperStreamType of `stream`.
         * @returns type of stream.
         */
        get_stream_type(): StreamType;
        /**
         * Get the title of `stream,` if any.
         * @returns title of stream.
         */
        get_title(): string | null;
    }

    module StreamList {
        // Constructor properties interface

        interface ConstructorProps<A extends GObject.Object = GObject.Object>
            extends Gst.Object.ConstructorProps,
                Gio.ListModel.ConstructorProps {
            current_index: number;
            currentIndex: number;
            current_stream: Stream;
            currentStream: Stream;
            n_streams: number;
            nStreams: number;
        }
    }

    /**
     * A list of media streams.
     */
    class StreamList<A extends GObject.Object = GObject.Object> extends Gst.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<StreamList>;

        // Own properties of Clapper.StreamList

        /**
         * Index of currently selected stream.
         */
        get current_index(): number;
        set current_index(val: number);
        /**
         * Index of currently selected stream.
         */
        get currentIndex(): number;
        set currentIndex(val: number);
        /**
         * Currently selected stream.
         */
        get current_stream(): Stream;
        /**
         * Currently selected stream.
         */
        get currentStream(): Stream;
        /**
         * Number of streams in the list.
         */
        get n_streams(): number;
        /**
         * Number of streams in the list.
         */
        get nStreams(): number;

        // Constructors of Clapper.StreamList

        constructor(properties?: Partial<StreamList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Clapper.StreamList

        /**
         * Get index of the currently selected #ClapperStream.
         * @returns Current stream index or [const@Clapper.STREAM_LIST_INVALID_POSITION]   when nothing is selected.
         */
        get_current_index(): number;
        /**
         * Get the currently selected #ClapperStream.
         * @returns The current #ClapperStream.
         */
        get_current_stream(): Stream | null;
        /**
         * Get the number of streams in #ClapperStreamList.
         *
         * This behaves the same as [method`Gio`.ListModel.get_n_items], and is here
         * for code uniformity and convenience to avoid type casting by user.
         * @returns The number of streams in #ClapperStreamList.
         */
        get_n_streams(): number;
        /**
         * Get the #ClapperStream at index.
         *
         * This behaves the same as [method`Gio`.ListModel.get_item], and is here
         * for code uniformity and convenience to avoid type casting by user.
         * @param index a stream index
         * @returns The #ClapperStream at @index.
         */
        get_stream(index: number): Stream | null;
        /**
         * Selects #ClapperStream at `index` from `list` as current one.
         * @param index a stream index
         * @returns %TRUE if stream could be selected, %FALSE otherwise.
         */
        select_index(index: number): boolean;
        /**
         * Selects #ClapperStream from `list` to be activated.
         * @param stream a #ClapperStream
         * @returns %TRUE if stream was in the @list, %FALSE otherwise.
         */
        select_stream(stream: Stream): boolean;

        // Inherited methods
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         * @returns the #GType of the items contained in @list.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         * @returns the number of items in @list.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list,` %NULL is
         * returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of g_list_model_get_item().
         *
         * See also: g_list_model_get_n_items()
         * @param position the position of the item to fetch
         * @returns the object at @position.
         */
        get_item(position: number): A | null;
        /**
         * Emits the #GListModel::items-changed signal on `list`.
         *
         * This function should only be called by classes implementing
         * #GListModel. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as #GListStore), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the #GListModel
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which @list changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list,` %NULL is returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.  See g_list_model_get_n_items().
         *
         * The same #GObject instance may not appear more than once in a #GListModel.
         * @param position the position of the item to fetch
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         */
        vfunc_get_n_items(): number;
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
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
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
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        // Conflicted with Gst.Object.ref
        ref(...args: never[]): any;
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
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
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
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
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
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
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
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module SubtitleStream {
        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps {
            lang_code: string;
            langCode: string;
            lang_name: string;
            langName: string;
        }
    }

    /**
     * Represents a subtitle stream within media.
     */
    class SubtitleStream extends Stream {
        static $gtype: GObject.GType<SubtitleStream>;

        // Own properties of Clapper.SubtitleStream

        /**
         * Stream language code in ISO-639 format.
         */
        get lang_code(): string;
        /**
         * Stream language code in ISO-639 format.
         */
        get langCode(): string;
        /**
         * Stream language name.
         */
        get lang_name(): string;
        /**
         * Stream language name.
         */
        get langName(): string;

        // Constructors of Clapper.SubtitleStream

        constructor(properties?: Partial<SubtitleStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Clapper.SubtitleStream

        /**
         * Get an ISO-639 language code of the `stream`.
         * @returns the language code of subtitle stream.
         */
        get_lang_code(): string | null;
        /**
         * Get language name of the `stream`.
         *
         * This function will try to return a translated string into current
         * locale if possible, with a fallback to a name extracted from tags.
         * @returns the language name of subtitle stream.
         */
        get_lang_name(): string | null;
    }

    module ThreadedObject {
        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    /**
     * A base class for creating objects that work within a separate thread.
     */
    class ThreadedObject extends Gst.Object {
        static $gtype: GObject.GType<ThreadedObject>;

        // Constructors of Clapper.ThreadedObject

        constructor(properties?: Partial<ThreadedObject.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Clapper.ThreadedObject

        /**
         * Called right after thread started.
         *
         * Useful for initializing objects that work within this new thread.
         */
        vfunc_thread_start(): void;
        /**
         * Called when thread is going to stop.
         *
         * Useful for cleanup of things created on thread start.
         */
        vfunc_thread_stop(): void;

        // Own methods of Clapper.ThreadedObject

        /**
         * Get the #GMainContext of the thread used by this object.
         *
         * Useful when you want to invoke object thread to do some
         * action in it from a different thread.
         * @returns a #GMainContext of the object used thread.
         */
        get_context(): GLib.MainContext;
    }

    module Timeline {
        // Constructor properties interface

        interface ConstructorProps<A extends GObject.Object = GObject.Object>
            extends Gst.Object.ConstructorProps,
                Gio.ListModel.ConstructorProps {
            n_markers: number;
            nMarkers: number;
        }
    }

    /**
     * A media timeline filled with point markers.
     */
    class Timeline<A extends GObject.Object = GObject.Object> extends Gst.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<Timeline>;

        // Own properties of Clapper.Timeline

        /**
         * Number of markers in the timeline.
         */
        get n_markers(): number;
        /**
         * Number of markers in the timeline.
         */
        get nMarkers(): number;

        // Constructors of Clapper.Timeline

        constructor(properties?: Partial<Timeline.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Clapper.Timeline

        /**
         * Get the #ClapperMarker at index.
         *
         * This behaves the same as [method`Gio`.ListModel.get_item], and is here
         * for code uniformity and convenience to avoid type casting by user.
         * @param index a marker index
         * @returns The #ClapperMarker at @index.
         */
        get_marker(index: number): Marker | null;
        /**
         * Get the number of markers in #ClapperTimeline.
         *
         * This behaves the same as [method`Gio`.ListModel.get_n_items], and is here
         * for code uniformity and convenience to avoid type casting by user.
         * @returns The number of markers in #ClapperTimeline.
         */
        get_n_markers(): number;
        /**
         * Insert the #ClapperMarker into `timeline`.
         * @param marker a #ClapperMarker
         * @returns %TRUE if inserted, %FALSE if marker was already inserted into timeline.
         */
        insert_marker(marker: Marker): boolean;
        /**
         * Removes #ClapperMarker from the timeline.
         *
         * If marker was not in the `timeline,` this function will do nothing,
         * so it is safe to call if unsure.
         * @param marker a #ClapperMarker
         */
        remove_marker(marker: Marker): void;

        // Inherited methods
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         * @returns the #GType of the items contained in @list.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         * @returns the number of items in @list.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list,` %NULL is
         * returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of g_list_model_get_item().
         *
         * See also: g_list_model_get_n_items()
         * @param position the position of the item to fetch
         * @returns the object at @position.
         */
        get_item(position: number): A | null;
        /**
         * Emits the #GListModel::items-changed signal on `list`.
         *
         * This function should only be called by classes implementing
         * #GListModel. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as #GListStore), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the #GListModel
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which @list changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list,` %NULL is returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.  See g_list_model_get_n_items().
         *
         * The same #GObject instance may not appear more than once in a #GListModel.
         * @param position the position of the item to fetch
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         */
        vfunc_get_n_items(): number;
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
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
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
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        // Conflicted with Gst.Object.ref
        ref(...args: never[]): any;
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
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
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
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
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
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
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
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module VideoStream {
        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps {
            bitrate: number;
            codec: string;
            fps: number;
            height: number;
            pixel_format: string;
            pixelFormat: string;
            width: number;
        }
    }

    /**
     * Represents a video stream within media.
     */
    class VideoStream extends Stream {
        static $gtype: GObject.GType<VideoStream>;

        // Own properties of Clapper.VideoStream

        /**
         * Stream bitrate.
         */
        get bitrate(): number;
        /**
         * Stream codec.
         */
        get codec(): string;
        /**
         * Stream FPS.
         */
        get fps(): number;
        /**
         * Stream height.
         */
        get height(): number;
        /**
         * Stream pixel format.
         */
        get pixel_format(): string;
        /**
         * Stream pixel format.
         */
        get pixelFormat(): string;
        /**
         * Stream width.
         */
        get width(): number;

        // Constructors of Clapper.VideoStream

        constructor(properties?: Partial<VideoStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Clapper.VideoStream

        /**
         * Get bitrate of video `stream`.
         * @returns the bitrate of video stream.
         */
        get_bitrate(): number;
        /**
         * Get codec used to encode `stream`.
         * @returns the video codec of stream   or %NULL if undetermined.
         */
        get_codec(): string | null;
        /**
         * Get number of frames per second in video `stream`.
         * @returns the FPS of video stream.
         */
        get_fps(): number;
        /**
         * Get height of video `stream`.
         * @returns the height of video stream.
         */
        get_height(): number;
        /**
         * Get pixel format of video `stream`.
         * @returns the pixel format of stream   or %NULL if undetermined.
         */
        get_pixel_format(): string | null;
        /**
         * Get width of video `stream`.
         * @returns the width of video stream.
         */
        get_width(): number;
    }

    type AudioStreamClass = typeof AudioStream;
    type DiscovererClass = typeof Discoverer;
    type FeatureClass = typeof Feature;
    type MarkerClass = typeof Marker;
    type MediaItemClass = typeof MediaItem;
    type MprisClass = typeof Mpris;
    type PlayerClass = typeof Player;
    type QueueClass = typeof Queue;
    type ServerClass = typeof Server;
    type StreamClass = typeof Stream;
    type StreamListClass = typeof StreamList;
    type SubtitleStreamClass = typeof SubtitleStream;
    type ThreadedObjectClass = typeof ThreadedObject;
    type TimelineClass = typeof Timeline;
    type VideoStreamClass = typeof VideoStream;
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

export default Clapper;
// END
