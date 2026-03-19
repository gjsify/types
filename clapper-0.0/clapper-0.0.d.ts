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
    /**
     * Clapper-0.0
     */

    export namespace DiscovererDiscoveryMode {
        export const $gtype: GObject.GType<DiscovererDiscoveryMode>;
    }

    /**
     * @gir-type Enum
     * @deprecated since 0.10: Use Media Scanner from `clapper-enhancers` repo instead.
     */
    enum DiscovererDiscoveryMode {
        /**
         * Run discovery for every single media item added to {@link Clapper.Queue}.
         *   This mode is useful when application presents a list of items to select from to the user before playback.
         *   It will scan every single item in queue, so user can have an updated list of items when selecting what to play.
         */
        ALWAYS,
        /**
         * Only run discovery on an item if it is not a currently selected item in {@link Clapper.Queue}.
         *   This mode is optimal when application always plays (or at least goes into paused) after selecting item from queue.
         *   It will skip discovery of such items since they will be discovered by {@link Clapper.Player} anyway.
         */
        NONCURRENT,
    }

    export namespace MarkerType {
        export const $gtype: GObject.GType<MarkerType>;
    }

    /**
     * @gir-type Enum
     */
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

    export namespace PlayerMessageDestination {
        export const $gtype: GObject.GType<PlayerMessageDestination>;
    }

    /**
     * @gir-type Enum
     * @since 0.10
     */
    enum PlayerMessageDestination {
        /**
         * Messaging from application or reactable enhancers to the player itself.
         */
        PLAYER,
        /**
         * Messaging from application to the reactable enhancers.
         */
        REACTABLES,
        /**
         * Messaging from reactable enhancers to the application.
         */
        APPLICATION,
    }

    export namespace PlayerSeekMethod {
        export const $gtype: GObject.GType<PlayerSeekMethod>;
    }

    /**
     * @gir-type Enum
     */
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

    export namespace PlayerState {
        export const $gtype: GObject.GType<PlayerState>;
    }

    /**
     * @gir-type Enum
     */
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

    export namespace QueueProgressionMode {
        export const $gtype: GObject.GType<QueueProgressionMode>;
    }

    /**
     * @gir-type Enum
     */
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

    export namespace StreamType {
        export const $gtype: GObject.GType<StreamType>;
    }

    /**
     * @gir-type Enum
     */
    enum StreamType {
        /**
         * Unknown stream type.
         */
        UNKNOWN,
        /**
         * Stream is a {@link Clapper.VideoStream}.
         */
        VIDEO,
        /**
         * Stream is a {@link Clapper.AudioStream}.
         */
        AUDIO,
        /**
         * Stream is a {@link Clapper.SubtitleStream}.
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
     * The value used to refer to an invalid position in a {@link Clapper.Queue}
     */
    const QUEUE_INVALID_POSITION: number;
    /**
     * The value used to refer to an invalid position in a {@link Clapper.StreamList}
     */
    const STREAM_LIST_INVALID_POSITION: number;
    /**
     * Clapper version, encoded as a string
     */
    const VERSION_S: string;
    /**
     * Check if Clapper was compiled with Enhancers Loader functionality.
     *
     * Alternatively, apps before compiling can also check whether `pkgconfig`
     * variable named `functionalities` contains `enhancers-loader` string.
     * @since 0.8
     */
    const WITH_ENHANCERS_LOADER: boolean;
    /**
     * Check if an enhancer of `type` is available for given `scheme` and `host`.
     *
     * A check that compares requested capabilites of all available Clapper enhancers,
     * thus it is fast but does not guarantee that the found one will succeed. Please note
     * that this function will always return `false` if Clapper was built without enhancers
     * loader functionality. To check that, use {@link Clapper.WITH_ENHANCERS_LOADER}.
     *
     * This function can be used to quickly determine early if Clapper will at least try to
     * handle URI and with one of its enhancers and which one.
     *
     * Example:
     *
     * ```c
     * gboolean supported = clapper_enhancer_check (CLAPPER_TYPE_EXTRACTABLE, "https", "example.com", NULL);
     * ```
     *
     * For self hosted services a custom URI `scheme` without `host` can be used. Enhancers should announce
     * support for such schemes by defining them in their plugin info files.
     *
     * ```c
     * gboolean supported = clapper_enhancer_check (CLAPPER_TYPE_EXTRACTABLE, "example", NULL, NULL);
     * ```
     * @param iface_type an interface {@link GObject.GType}
     * @param scheme an URI scheme
     * @param host an URI host
     * @returns whether a plausible enhancer was found.
     * @since 0.8
     * @deprecated since 0.10: Use list of enhancer proxies from {@link Clapper.get_global_enhancer_proxies} or   {@link Clapper.Player.enhancer_proxies} and check if any proxy matches your search criteria.
     */
    function enhancer_check(iface_type: GObject.GType, scheme: string, host: string | null): [boolean, string];
    /**
     * Get a list of available enhancers in the form of {@link Clapper.EnhancerProxy} objects.
     *
     * This returns a global list of enhancer proxy objects. You can use it to inspect
     * available enhancers without creating a new player instance.
     *
     * Remember to initialize Clapper library before using this function.
     *
     * Only enhancer properties with {@link Clapper.EnhancerParamFlags.GLOBAL} flag can be
     * set on proxies in this list. These are meant to be set ONLY by users, not applications
     * as they carry over to all player instances (possibly including other apps). Applications
     * should instead be changing properties with {@link Clapper.EnhancerParamFlags.LOCAL} flag
     * set from individual proxy lists from {@link Clapper.Player.enhancer_proxies} which
     * will affect only that single player instance given list belongs to.
     * @returns a global {@link Clapper.EnhancerProxyList} of enhancer proxies.
     * @since 0.10
     */
    function get_global_enhancer_proxies(): EnhancerProxyList;
    /**
     * Clapper runtime major version component
     *
     * This returns the Clapper library version your code is
     * running against unlike {@link Clapper.MAJOR_VERSION}
     * which represents compile time version.
     * @returns the major version number of the Clapper library
     * @since 0.10
     */
    function get_major_version(): number;
    /**
     * Clapper runtime micro version component
     *
     * This returns the Clapper library version your code is
     * running against unlike {@link Clapper.MICRO_VERSION}
     * which represents compile time version.
     * @returns the micro version number of the Clapper library
     * @since 0.10
     */
    function get_micro_version(): number;
    /**
     * Clapper runtime minor version component
     *
     * This returns the Clapper library version your code is
     * running against unlike {@link Clapper.MINOR_VERSION}
     * which represents compile time version.
     * @returns the minor version number of the Clapper library
     * @since 0.10
     */
    function get_minor_version(): number;
    /**
     * Clapper runtime version as string
     *
     * This returns the Clapper library version your code is
     * running against unlike {@link Clapper.VERSION_S}
     * which represents compile time version.
     * @returns the version of the Clapper library as string
     * @since 0.10
     */
    function get_version_s(): string;
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
     * use {@link Clapper.init_check} instead.
     * @param argv pointer to application's argv
     */
    function init(argv?: string[] | null): string[] | null;
    /**
     * This function does the same thing as {@link Clapper.init}, but instead of
     * terminating on failure it returns `false`.
     * @param argv pointer to application's argv
     * @returns `true` if Clapper could be initialized, `false` otherwise.
     */
    function init_check(argv?: string[] | null): [boolean, string[] | null];
    export namespace EnhancerParamFlags {
        export const $gtype: GObject.GType<EnhancerParamFlags>;
    }

    /**
     * Additional {@link GObject.ParamFlags} to be set in enhancer plugins implementations.
     * @gir-type Flags
     * @since 0.10
     */
    enum EnhancerParamFlags {
        /**
         * Use this flag for enhancer properties that should have global access scope.
         *   Such are meant for application `USER` to configure.
         */
        GLOBAL,
        /**
         * Use this flag for enhancer properties that should have local access scope.
         *   Such are meant for `APPLICATION` to configure.
         */
        LOCAL,
        /**
         * Use this flag for enhancer properties that store string with a file path.
         *   Applications can use this as a hint to show file selection instead of a text entry.
         */
        FILEPATH,
        /**
         * Use this flag for enhancer properties that store string with a directory path.
         *   Applications can use this as a hint to show directory selection instead of a text entry.
         */
        DIRPATH,
    }

    export namespace ReactableItemUpdatedFlags {
        export const $gtype: GObject.GType<ReactableItemUpdatedFlags>;
    }

    /**
     * Flags informing which properties were updated within {@link Clapper.MediaItem}.
     * @gir-type Flags
     * @since 0.10
     */
    enum ReactableItemUpdatedFlags {
        /**
         * Media item title was updated.
         */
        TITLE,
        /**
         * Media item duration was updated.
         */
        DURATION,
        /**
         * Media item timeline was updated.
         */
        TIMELINE,
        /**
         * Media item tags were updated.
         */
        TAGS,
        /**
         * Media item redirect URI was updated.
         */
        REDIRECT_URI,
        /**
         * Media item cache location was updated.
         */
        CACHE_LOCATION,
    }

    namespace AudioStream {
        // Signal signatures
        interface SignalSignatures extends Stream.SignalSignatures {
            'notify::bitrate': (pspec: GObject.ParamSpec) => void;
            'notify::channels': (pspec: GObject.ParamSpec) => void;
            'notify::codec': (pspec: GObject.ParamSpec) => void;
            'notify::lang-code': (pspec: GObject.ParamSpec) => void;
            'notify::lang-name': (pspec: GObject.ParamSpec) => void;
            'notify::sample-format': (pspec: GObject.ParamSpec) => void;
            'notify::sample-rate': (pspec: GObject.ParamSpec) => void;
            'notify::stream-type': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

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
     * @gir-type Class
     */
    class AudioStream extends Stream {
        static $gtype: GObject.GType<AudioStream>;

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AudioStream.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AudioStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof AudioStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AudioStream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AudioStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AudioStream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AudioStream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AudioStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
         * @returns the audio codec of stream   or `null` if undetermined.
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
         * @returns the sample format of stream   or `null` if undetermined.
         */
        get_sample_format(): string | null;
        /**
         * Get sample rate of audio `stream` (in Hz).
         * @returns the sample rate of audio stream.
         */
        get_sample_rate(): number;
    }

    namespace Discoverer {
        // Signal signatures
        interface SignalSignatures extends Feature.SignalSignatures {
            'notify::discovery-mode': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Feature.ConstructorProps {
            discovery_mode: DiscovererDiscoveryMode;
            discoveryMode: DiscovererDiscoveryMode;
        }
    }

    /**
     * An optional Discoverer feature to be added to the player.
     *
     * {@link Clapper.Discoverer} is a feature that wraps around {@link GstPbutils.Discoverer} API
     * to automatically discover items within {@link Clapper.Queue}. Once media
     * is scanned, all extra information of it will be filled within media item,
     * this includes title, duration, chapters, etc.
     *
     * Please note that media items are also discovered during their playback
     * by the player itself. {@link Clapper.Discoverer} is useful in situations where
     * one wants to present to the user an updated media item before its
     * playback, such as an UI that displays playback queue.
     *
     * Depending on your application, you can select an optimal
     * {@link Clapper.DiscovererDiscoveryMode} that best suits your needs.
     *
     * Use {@link Clapper.HAVE_DISCOVERER} macro to check if Clapper API
     * was compiled with this feature.
     * @gir-type Class
     * @deprecated since 0.10: Use Media Scanner from `clapper-enhancers` repo instead.
     */
    class Discoverer extends Feature {
        static $gtype: GObject.GType<Discoverer>;

        // Properties

        /**
         * Discoverer discovery mode.
         * @deprecated since 0.10: Use Media Scanner from `clapper-enhancers` repo instead.
         */
        get discovery_mode(): DiscovererDiscoveryMode;
        set discovery_mode(val: DiscovererDiscoveryMode);
        /**
         * Discoverer discovery mode.
         * @deprecated since 0.10: Use Media Scanner from `clapper-enhancers` repo instead.
         */
        get discoveryMode(): DiscovererDiscoveryMode;
        set discoveryMode(val: DiscovererDiscoveryMode);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Discoverer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Discoverer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Discoverer;

        // Signals

        /** @signal */
        connect<K extends keyof Discoverer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Discoverer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Discoverer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Discoverer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Discoverer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Discoverer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the {@link Clapper.DiscovererDiscoveryMode} of `discoverer`.
         * @returns a currently set {@link Clapper.DiscovererDiscoveryMode}.
         */
        get_discovery_mode(): DiscovererDiscoveryMode;
        /**
         * Set the {@link Clapper.DiscovererDiscoveryMode} of `discoverer`.
         * @param mode a {@link Clapper.DiscovererDiscoveryMode}
         */
        set_discovery_mode(mode: DiscovererDiscoveryMode | null): void;
    }

    namespace EnhancerProxy {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::friendly-name': (pspec: GObject.ParamSpec) => void;
            'notify::module-dir': (pspec: GObject.ParamSpec) => void;
            'notify::module-name': (pspec: GObject.ParamSpec) => void;
            'notify::target-creation-allowed': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            description: string;
            friendly_name: string;
            friendlyName: string;
            module_dir: string;
            moduleDir: string;
            module_name: string;
            moduleName: string;
            target_creation_allowed: boolean;
            targetCreationAllowed: boolean;
            version: string;
        }
    }

    /**
     * An intermediary between player and enhancer plugin.
     *
     * Applications can use this to inspect enhancer information,
     * its properties and configure them.
     *
     * Clapper player manages all enhancers internally, including creating when
     * needed and destroying them later. Instead, it provides access to so called
     * enhancer proxy objects which allow to browse available enhancer properties
     * and store their config either globally or locally for each player instance.
     *
     * Use {@link Clapper.get_global_enhancer_proxies} or {@link Clapper.Player.enhancer_proxies}
     * property to access a {@link Clapper.EnhancerProxyList} of available enhancer proxies. While both
     * lists include the same amount of proxies, the difference is which properties can be configured
     * in which list. Only the latter allows tweaking of local (per player instance) properties using
     * {@link Clapper.EnhancerProxy.set_locally} function.
     * @gir-type Class
     * @since 0.10
     */
    class EnhancerProxy extends Gst.Object {
        static $gtype: GObject.GType<EnhancerProxy>;

        // Properties

        /**
         * Description from enhancer plugin info file.
         * @since 0.10
         */
        get description(): string;
        /**
         * Name from enhancer plugin info file.
         * @since 0.10
         */
        get friendly_name(): string;
        /**
         * Name from enhancer plugin info file.
         * @since 0.10
         */
        get friendlyName(): string;
        /**
         * Module directory.
         * @since 0.10
         */
        get module_dir(): string;
        /**
         * Module directory.
         * @since 0.10
         */
        get moduleDir(): string;
        /**
         * Module name from enhancer plugin info file.
         * @since 0.10
         */
        get module_name(): string;
        /**
         * Module name from enhancer plugin info file.
         * @since 0.10
         */
        get moduleName(): string;
        /**
         * Whether to allow instances of proxy target to be created.
         *
         * This effectively means whether the given enhancer can be used.
         *
         * By default all enhancers that work on-demand ({@link Clapper.Extractable}, {@link Clapper.Playlistable})
         * are allowed while enhancers implementing {@link Clapper.Reactable} are not.
         *
         * Value of this property from a `GLOBAL` {@link Clapper.EnhancerProxyList} will carry
         * over to all newly created {@link Clapper.Player} objects, while altering this on
         * `LOCAL` proxy list will only influence given player instance that list belongs to.
         *
         * Changing this property will not remove already created enhancer instances, thus
         * it is usually best practice to allow/disallow creation of given enhancer plugin
         * right after {@link Clapper.Player} is created (before it or its queue are used).
         * @since 0.10
         */
        get target_creation_allowed(): boolean;
        set target_creation_allowed(val: boolean);
        /**
         * Whether to allow instances of proxy target to be created.
         *
         * This effectively means whether the given enhancer can be used.
         *
         * By default all enhancers that work on-demand ({@link Clapper.Extractable}, {@link Clapper.Playlistable})
         * are allowed while enhancers implementing {@link Clapper.Reactable} are not.
         *
         * Value of this property from a `GLOBAL` {@link Clapper.EnhancerProxyList} will carry
         * over to all newly created {@link Clapper.Player} objects, while altering this on
         * `LOCAL` proxy list will only influence given player instance that list belongs to.
         *
         * Changing this property will not remove already created enhancer instances, thus
         * it is usually best practice to allow/disallow creation of given enhancer plugin
         * right after {@link Clapper.Player} is created (before it or its queue are used).
         * @since 0.10
         */
        get targetCreationAllowed(): boolean;
        set targetCreationAllowed(val: boolean);
        /**
         * Version from enhancer plugin info file.
         * @since 0.10
         */
        get version(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EnhancerProxy.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<EnhancerProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof EnhancerProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EnhancerProxy.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof EnhancerProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EnhancerProxy.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof EnhancerProxy.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<EnhancerProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * A convenience function to check whether `proxy` plugin file
         * has an extra data field with `key` that among separated list
         * of values includes `value` (works on single value lists too).
         *
         * For example, when extra data in the plugin is `X-Schemes=https;http`,
         * calling this function with "X-Schemes" as key and "http" as value will
         * return `true`.
         *
         * It is also safe to call this function when there is no such `key`
         * in plugin info file. Use {@link Clapper.EnhancerProxy.get_extra_data}
         * if you need to know whether key exists.
         * @param key name of the data to lookup
         * @param value string to check for
         * @returns whether list named with `key` existed and contained `value`.
         */
        extra_data_lists_value(key: string, value: string): boolean;
        /**
         * Get description from enhancer plugin info file.
         * @returns description of the proxied enhancer.
         */
        get_description(): string | null;
        /**
         * Get extra data from enhancer plugin info file specified by `key`.
         *
         * Extra data in the plugin info file is prefixed with `X-`.
         * For example `X-Schemes=https`.
         * @param key name of the data to lookup
         * @returns extra data value of the proxied enhancer.
         */
        get_extra_data(key: string): string | null;
        /**
         * Get a name from enhancer plugin info file.
         * Can be used for showing in UI and such.
         *
         * Name field in plugin info file is mandatory,
         * so this function never returns `null`.
         * @returns name of the proxied enhancer.
         */
        get_friendly_name(): string;
        /**
         * Get a path to the directory from which enhancer is loaded.
         * @returns installation directory of the proxied enhancer.
         */
        get_module_dir(): string;
        /**
         * Get name of the module from enhancer plugin info file.
         * This value is used to uniquely identify a particular plugin.
         *
         * Module name in plugin info file is mandatory,
         * so this function never returns `null`.
         * @returns name of the proxied enhancer.
         */
        get_module_name(): string;
        /**
         * Get {@link Gio.Settings} of an enhancer.
         *
         * Implementations can use this together with {@link Clapper.EnhancerProxy.get_target_properties}
         * in order to allow user to configure global enhancer properties.
         *
         * Settings include only keys from properties with {@link Clapper.EnhancerParamFlags.GLOBAL}
         * flag and are meant ONLY for user to set. To configure application local enhancer properties,
         * use {@link Clapper.EnhancerProxy.set_locally} instead.
         *
         * This function returns a new instance of {@link Gio.Settings}, so settings can be accessed
         * from different threads if needed.
         * @returns A new {@link Gio.Settings} instance for an enhancer.
         */
        get_settings(): Gio.Settings | null;
        /**
         * Get whether it is allowed to create instances of enhancer that this proxy targets.
         * @returns whether target creation is allowed.
         */
        get_target_creation_allowed(): boolean;
        /**
         * Get an array of interfaces that target enhancer implements.
         *
         * The returned array includes only Clapper specific interfaces
         * for writing enhancers. Applications should not care about any
         * other interface types that given enhancer is using internally.
         * @returns an array of {@link GObject.GType} interfaces.
         */
        get_target_interfaces(): GObject.GType[] | null;
        /**
         * Get an array of properties in target enhancer.
         *
         * Implementations can use this in order to find out what properties, type of
         * their values (including valid ranges) are allowed to set for a given enhancer.
         *
         * Use {@link Clapper.EnhancerParamFlags} against flags of given {@link GObject.ParamSpec}
         * to find out whether they are local, global or neither of them (internal).
         *
         * The returned array includes only Clapper enhancer specific properties (global and local).
         * Applications can not access any other properties that given enhancer is using internally.
         * @returns an array of {@link GObject.ParamSpec} objects.
         */
        get_target_properties(): GObject.ParamSpec[] | null;
        /**
         * Get version string from enhancer plugin info file.
         * @returns version string of the proxied enhancer.
         */
        get_version(): string | null;
        /**
         * Same as {@link Clapper.EnhancerProxy.set_locally}, but to configure uses
         * {@link GLib.HashTable} with string keys and {@link GObject.Value} as their values.
         * @param table a {@link GLib.HashTable} with property names and values
         */
        set_locally(table: { [key: string]: any } | GLib.HashTable<string, GObject.Value>): void;
        /**
         * Set whether to allow instances of proxy target to be created.
         *
         * See {@link Clapper.EnhancerProxy.target_creation_allowed} for
         * detailed descripton what this does.
         * @param allowed whether allowed
         */
        set_target_creation_allowed(allowed: boolean): void;
        /**
         * A convenience function to check if target enhancer implements given interface.
         *
         * This works only with Clapper specific interfaces as `iface_type`
         * for writing enhancers. Applications should not care about any
         * other interface types that given enhancer is using internally.
         * @param iface_type an interface {@link GObject.GType}
         * @returns whether target implements given interface.
         */
        target_has_interface(iface_type: GObject.GType): boolean;
    }

    namespace EnhancerProxyList {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::n-proxies': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps<A extends GObject.Object = GObject.Object>
            extends Gst.Object.ConstructorProps, Gio.ListModel.ConstructorProps {
            n_proxies: number;
            nProxies: number;
        }
    }

    /**
     * A list of enhancer proxies.
     * @gir-type Class
     * @since 0.10
     */
    class EnhancerProxyList<A extends GObject.Object = GObject.Object> extends Gst.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<EnhancerProxyList>;

        // Properties

        /**
         * Number of proxies in the list.
         * @since 0.10
         */
        get n_proxies(): number;
        /**
         * Number of proxies in the list.
         * @since 0.10
         */
        get nProxies(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EnhancerProxyList.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<EnhancerProxyList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof EnhancerProxyList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EnhancerProxyList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof EnhancerProxyList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EnhancerProxyList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof EnhancerProxyList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<EnhancerProxyList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the number of proxies in {@link Clapper.EnhancerProxyList}.
         *
         * This behaves the same as {@link Gio.ListModel.get_n_items}, and is here
         * for code uniformity and convenience to avoid type casting by user.
         * @returns The number of proxies in {@link Clapper.EnhancerProxyList}.
         */
        get_n_proxies(): number;
        /**
         * Get the {@link Clapper.EnhancerProxy} at index.
         *
         * This behaves the same as {@link Gio.ListModel.get_item}, and is here
         * for code uniformity and convenience to avoid type casting by user.
         * @param index an enhancer proxy index
         * @returns The {@link Clapper.EnhancerProxy} at `index`.
         */
        get_proxy(index: number): EnhancerProxy | null;
        /**
         * Get the {@link Clapper.EnhancerProxy} by module name as defined in its plugin file.
         *
         * A convenience function to find a {@link Clapper.EnhancerProxy} by its unique
         * module name in the list.
         * @param module_name an enhancer module name
         * @returns The {@link Clapper.EnhancerProxy} with requested module name.
         */
        get_proxy_by_module(module_name: string): EnhancerProxy | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @returns the {@link GObject.GType} of the items contained in `list`.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @returns the number of items in `list`.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list`, `null` is
         * returned.
         *
         * `null` is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of `g_list_model_get_item()`.
         *
         * See also: `g_list_model_get_n_items()`
         * @param position the position of the item to fetch
         * @returns the object at `position`.
         */
        get_item(position: number): A | null;
        /**
         * Emits the {@link Gio.ListModel.SignalSignatures.items_changed | Gio.ListModel::items-changed} signal on `list`.
         *
         * This function should only be called by classes implementing
         * {@link Gio.ListModel}. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as {@link Gio.ListStore}), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the {@link Gio.ListModel}
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list`, `null` is returned.
         *
         * `null` is never returned for an index that is smaller than the length
         * of the list.  See `g_list_model_get_n_items()`.
         *
         * The same {@link GObject.Object} instance may not appear more than once in a {@link Gio.ListModel}.
         * @param position the position of the item to fetch
         * @virtual
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @virtual
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @virtual
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

    namespace Feature {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

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
     * may call {@link Gst.Object.get_parent} to acquire a weak reference on
     * a parent {@link Clapper.Player} object feature was added to.
     * @gir-type Class
     * @deprecated since 0.10: Use {@link Clapper.Reactable} instead.
     */
    class Feature extends Gst.Object {
        static $gtype: GObject.GType<Feature>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Feature.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Feature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Feature.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Feature.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Feature.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Feature.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Feature.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Feature.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * An item in queue got updated. This might be (or not) currently
         * played item. Implementations can get parent player object
         * if they want to check that from its queue.
         * @param item a {@link Clapper.MediaItem} that was updated
         * @virtual
         */
        vfunc_item_updated(item: MediaItem): void;
        /**
         * Player mute state was changed.
         * @param mute `true` if player is muted, `false` otherwise
         * @virtual
         */
        vfunc_mute_changed(mute: boolean): void;
        /**
         * New media item started playing. All following events (such as position changes)
         * will be related to this `item` from now on.
         * @param item a {@link Clapper.MediaItem} that is now playing
         * @virtual
         */
        vfunc_played_item_changed(item: MediaItem): void;
        /**
         * Player position was changed.
         * @param position a decimal number with current position in seconds
         * @virtual
         */
        vfunc_position_changed(position: number): void;
        /**
         * Prepare feature for operation (optional).
         *
         * This is different from `init()` as its called from features thread once
         * feature is added to the player, so it can already access it parent using
         * `gst_object_get_parent()`. If it fails, no other method will be called.
         * @virtual
         */
        vfunc_prepare(): boolean;
        /**
         * A property of `feature` changed its value.
         *
         * Useful for reconfiguring `feature`, since unlike "notify" signal
         * this is always called from the thread that feature works on and
         * only after feature was prepared.
         * @param pspec a {@link GObject.ParamSpec}
         * @virtual
         */
        vfunc_property_changed(pspec: GObject.ParamSpec): void;
        /**
         * All items were removed from queue. Note that in such event
         * `queue_item_removed` will NOT be called for each item for performance reasons.
         * You probably want to implement this function if you also implemented item removal.
         * @virtual
         */
        vfunc_queue_cleared(): void;
        /**
         * An item was added to the queue.
         * @param item a {@link Clapper.MediaItem} that was added
         * @param index position at which `item` was placed in queue
         * @virtual
         */
        vfunc_queue_item_added(item: MediaItem, index: number): void;
        /**
         * An item was removed from queue.
         * @param item a {@link Clapper.MediaItem} that was removed
         * @param index position from which `item` was removed in queue
         * @virtual
         */
        vfunc_queue_item_removed(item: MediaItem, index: number): void;
        /**
         * An item changed position within queue.
         * @param before position from which {@link Clapper.MediaItem} was removed
         * @param after position at which {@link Clapper.MediaItem} was inserted after removal
         * @virtual
         */
        vfunc_queue_item_repositioned(before: number, after: number): void;
        /**
         * Progression mode of the queue was changed.
         * @param mode a {@link Clapper.QueueProgressionMode}
         * @virtual
         */
        vfunc_queue_progression_changed(mode: QueueProgressionMode): void;
        /**
         * Player speed was changed.
         * @param speed the playback speed multiplier
         * @virtual
         */
        vfunc_speed_changed(speed: number): void;
        /**
         * Player state was changed.
         * @param state a {@link Clapper.PlayerState}
         * @virtual
         */
        vfunc_state_changed(state: PlayerState): void;
        /**
         * Revert the changes done in `prepare` (optional).
         * @virtual
         */
        vfunc_unprepare(): boolean;
        /**
         * Player volume was changed.
         * @param volume the volume level
         * @virtual
         */
        vfunc_volume_changed(volume: number): void;
    }

    namespace Harvest {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    /**
     * An object storing data from enhancers that implement {@link Clapper.Extractable} interface.
     * @gir-type Class
     * @since 0.8
     */
    class Harvest extends Gst.Object {
        static $gtype: GObject.GType<Harvest>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Harvest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Harvest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Harvest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Harvest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Harvest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Harvest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Harvest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Harvest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Fill harvest with extracted data. It can be anything that GStreamer
         * can parse and play such as single URI or a streaming manifest.
         *
         * Calling again this function will replace previously filled content.
         *
         * Commonly used media types are:
         *
         *   * `application/dash+xml` - DASH manifest
         *
         *   * `application/x-hls` - HLS manifest
         *
         *   * `text/x-uri` - direct media URI
         *
         *   * `text/uri-list` - playlist of URIs
         *
         *   * `application/clapper-playlist` - custom playlist format
         * @param media_type media mime type
         * @param data data to fill `harvest`
         * @returns `true` when filled successfully, `false` if taken data was empty.
         */
        fill(media_type: string, data: Uint8Array | string): boolean;
        /**
         * A convenience method to fill `harvest` with data from {@link GLib.Bytes}.
         *
         * For more info, see {@link Clapper.Harvest.fill} documentation.
         * @param media_type media mime type
         * @param bytes a {@link GLib.Bytes} to fill `harvest`
         * @returns `true` when filled successfully, `false` if taken data was empty.
         */
        fill_with_bytes(media_type: string, bytes: GLib.Bytes | Uint8Array): boolean;
        /**
         * A convenience method to fill `harvest` using a `null` terminated string.
         *
         * For more info, see {@link Clapper.Harvest.fill} documentation.
         * @param media_type media mime type
         * @param text data to fill `harvest` as `null` terminated string
         * @returns `true` when filled successfully, `false` if taken data was empty.
         */
        fill_with_text(media_type: string, text: string): boolean;
        /**
         * Set another header in the request headers list using {@link GObject.Value}.
         *
         * Setting again the same key will update its value to the new one.
         * @param key a header name
         * @param value a string {@link GObject.Value} of header
         */
        headers_set(key: string, value: GObject.Value | any): void;
        /**
         * Set date in UTC time until harvested content is expected
         * to stay alive.
         *
         * This is used for harvest caching, so next time user requests to
         * play the same URI, recently harvested data can be reused without
         * the need to run {@link Clapper.Extractable.extract} again.
         * @param date_utc a {@link GLib.DateTime} in UTC time
         */
        set_expiration_date_utc(date_utc: GLib.DateTime): void;
        /**
         * Set amount of seconds for how long harvested content is
         * expected to stay alive.
         *
         * Alternative function to {@link Clapper.Harvest.set_expiration_date_utc},
         * but takes time as number in seconds from now.
         *
         * It is safe to pass zero or negative number to this function in
         * case when calculating time manually and it already expired.
         * @param seconds time in seconds until expiration
         */
        set_expiration_seconds(seconds: number): void;
        /**
         * Append another tag into the tag list using {@link GObject.Value}.
         * @param tag a name of tag to set
         * @param value a {@link GObject.Value} of tag
         */
        tags_add(tag: string, value: GObject.Value | any): void;
        /**
         * Append a chapter or track name into table of contents.
         * @param type a {@link Gst.TocEntryType}
         * @param title an entry title
         * @param start entry start time in seconds
         * @param end entry end time in seconds or -1 if none
         */
        toc_add(type: Gst.TocEntryType | null, title: string, start: number, end: number): void;
    }

    namespace Marker {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::end': (pspec: GObject.ParamSpec) => void;
            'notify::marker-type': (pspec: GObject.ParamSpec) => void;
            'notify::start': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

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
     * {@link Clapper.Timeline} of {@link Clapper.MediaItem}. Use them
     * to indicate certain areas on the timeline.
     *
     * Markers are reference counted immutable objects. Once a marker is created
     * it can only be inserted into a single {@link Clapper.Timeline} at a time.
     *
     * Please note that markers are independent of {@link Clapper.MediaItem.duration}
     * and applications should not assume that all markers must have start/end times
     * lower or equal the item duration. This is not the case in e.g. live streams
     * where duration is unknown, but markers are still allowed to mark entries
     * (like EPG titles for example).
     *
     * Remember that {@link Clapper.Player} will also automatically insert certain
     * markers extracted from media such as video chapters. Clapper will never
     * "touch" the ones created by the application. If you want to differentiate
     * your own markers, applications can define and create markers with one of
     * the custom types from {@link Clapper.MarkerType} enum.
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
     * @gir-type Class
     */
    class Marker extends Gst.Object {
        static $gtype: GObject.GType<Marker>;

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Marker.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Marker.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](marker_type: MarkerType, title: string | null, start: number, end: number): Marker;

        // Signals

        /** @signal */
        connect<K extends keyof Marker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Marker.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Marker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Marker.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Marker.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Marker.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the end position (in seconds) of `marker`.
         * @returns marker end.
         */
        get_end(): number;
        /**
         * Get the {@link Clapper.MarkerType} of `marker`.
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

    namespace MediaItem {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::cache-location': (pspec: GObject.ParamSpec) => void;
            'notify::container-format': (pspec: GObject.ParamSpec) => void;
            'notify::duration': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::redirect-uri': (pspec: GObject.ParamSpec) => void;
            'notify::suburi': (pspec: GObject.ParamSpec) => void;
            'notify::tags': (pspec: GObject.ParamSpec) => void;
            'notify::timeline': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            cache_location: string;
            cacheLocation: string;
            container_format: string;
            containerFormat: string;
            duration: number;
            id: number;
            redirect_uri: string;
            redirectUri: string;
            suburi: string;
            tags: Gst.TagList;
            timeline: Timeline;
            title: string;
            uri: string;
        }
    }

    /**
     * Represents a media item.
     *
     * A newly created media item must be added to player {@link Clapper.Queue}
     * first in order to be played.
     * @gir-type Class
     */
    class MediaItem extends Gst.Object {
        static $gtype: GObject.GType<MediaItem>;

        // Properties

        /**
         * Media downloaded cache file location.
         *
         * This can be either set for newly created media items or
         * it will be updated after download is completed if
         * {@link Clapper.Player.download_enabled} is set.
         *
         * NOTE: This property was added in 0.8 as write at construct only.
         * It can also be read only since Clapper 0.10.
         * @since 0.8
         */
        get cache_location(): string;
        /**
         * Media downloaded cache file location.
         *
         * This can be either set for newly created media items or
         * it will be updated after download is completed if
         * {@link Clapper.Player.download_enabled} is set.
         *
         * NOTE: This property was added in 0.8 as write at construct only.
         * It can also be read only since Clapper 0.10.
         * @since 0.8
         */
        get cacheLocation(): string;
        /**
         * Media container format.
         * @deprecated since 0.10: Get `container-format` from {@link Clapper.MediaItem.tags} instead.
         */
        get container_format(): string;
        /**
         * Media container format.
         * @deprecated since 0.10: Get `container-format` from {@link Clapper.MediaItem.tags} instead.
         */
        get containerFormat(): string;
        /**
         * Media duration as a decimal number in seconds.
         *
         * This might be a different value compared to `duration` from
         * {@link Clapper.MediaItem.tags}, as this value is updated
         * during decoding instead of being a fixed value from metadata.
         */
        get duration(): number;
        /**
         * Media Item ID.
         */
        get id(): number;
        /**
         * Media permanent redirect URI.
         *
         * Changes when player determines a new redirect for given media item.
         * This will also happen when item URI leads to a playlist. Once playlist
         * is parsed, item is merged with the first item on that playlist and the
         * remaining items are appended to the playback queue after that item position.
         *
         * Once redirect URI in item is present, player will use that URI instead
         * of the default one. Cache location takes precedence over both URIs through.
         * @since 0.10
         */
        get redirect_uri(): string;
        /**
         * Media permanent redirect URI.
         *
         * Changes when player determines a new redirect for given media item.
         * This will also happen when item URI leads to a playlist. Once playlist
         * is parsed, item is merged with the first item on that playlist and the
         * remaining items are appended to the playback queue after that item position.
         *
         * Once redirect URI in item is present, player will use that URI instead
         * of the default one. Cache location takes precedence over both URIs through.
         * @since 0.10
         */
        get redirectUri(): string;
        /**
         * Media additional URI.
         */
        get suburi(): string;
        set suburi(val: string);
        /**
         * A readable list of tags stored in media item.
         * @since 0.10
         */
        get tags(): Gst.TagList;
        /**
         * Media timeline.
         */
        get timeline(): Timeline;
        /**
         * Media title.
         *
         * This might be a different string compared to `title` from
         * {@link Clapper.MediaItem.tags}, as this gives parsed
         * title from file name/URI as fallback when no `title` tag.
         */
        get title(): string;
        /**
         * Media URI.
         */
        get uri(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediaItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MediaItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](uri: string): MediaItem;

        static new_cached(uri: string, location?: string | null): MediaItem;

        static new_from_file(file: Gio.File): MediaItem;

        // Signals

        /** @signal */
        connect<K extends keyof MediaItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MediaItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MediaItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MediaItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get downloaded cache file location of {@link Clapper.MediaItem}.
         * @returns a cache file location of {@link Clapper.MediaItem}.
         */
        get_cache_location(): string | null;
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
         * Get the unique ID of {@link Clapper.MediaItem}.
         * @returns an ID of {@link Clapper.MediaItem}.
         */
        get_id(): number;
        /**
         * Get permanent redirect URI of {@link Clapper.MediaItem}.
         * @returns a redirected URI of {@link Clapper.MediaItem}.
         */
        get_redirect_uri(): string | null;
        /**
         * Get the additional URI of {@link Clapper.MediaItem}.
         * @returns an additional URI of {@link Clapper.MediaItem}.
         */
        get_suburi(): string | null;
        /**
         * Get readable list of tags stored in media item.
         * @returns a {@link Gst.TagList}.
         */
        get_tags(): Gst.TagList;
        /**
         * Get the {@link Clapper.Timeline} associated with `item`.
         * @returns a {@link Clapper.Timeline} of item.
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
         * Get the URI of {@link Clapper.MediaItem}.
         * @returns an URI of {@link Clapper.MediaItem}.
         */
        get_uri(): string;
        /**
         * Populate non-existing tags in `item` tag list.
         *
         * Passed `tags` must use {@link Gst.TagScope.GLOBAL} scope.
         *
         * Note that tags are automatically determined during media playback
         * and those take precedence. This function can be useful if an app can
         * determine some tags that are not in media metadata or for filling
         * item with some initial/cached tags to display in UI before playback.
         *
         * When a tag already exists in the tag list (was populated) this
         * function will not overwrite it. If you really need to permanently
         * override some tags in media, you can use `taginject` element as
         * player video/audio filter instead.
         * @param tags a {@link Gst.TagList} of GLOBAL scope
         * @returns whether at least one tag got updated.
         */
        populate_tags(tags: Gst.TagList): boolean;
        /**
         * Set the additional URI of {@link Clapper.MediaItem}.
         *
         * This is typically used to add an external subtitles URI to the `item`.
         * @param suburi an additional URI
         */
        set_suburi(suburi: string): void;
    }

    namespace Mpris {
        // Signal signatures
        interface SignalSignatures extends Feature.SignalSignatures {
            'notify::desktop-entry': (pspec: GObject.ParamSpec) => void;
            'notify::fallback-art-url': (pspec: GObject.ParamSpec) => void;
            'notify::identity': (pspec: GObject.ParamSpec) => void;
            'notify::own-name': (pspec: GObject.ParamSpec) => void;
            'notify::queue-controllable': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

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
     * Not every OS supports `MPRIS`. Use {@link Clapper.HAVE_MPRIS} macro
     * to check if Clapper API was compiled with this feature.
     * @gir-type Class
     * @deprecated since 0.10: Use MPRIS from `clapper-enhancers` repo instead.
     */
    class Mpris extends Feature {
        static $gtype: GObject.GType<Mpris>;

        // Properties

        /**
         * The basename of an installed .desktop file with the ".desktop" extension stripped.
         * @deprecated since 0.10: Use MPRIS from `clapper-enhancers` repo instead.
         */
        get desktop_entry(): string;
        /**
         * The basename of an installed .desktop file with the ".desktop" extension stripped.
         * @deprecated since 0.10: Use MPRIS from `clapper-enhancers` repo instead.
         */
        get desktopEntry(): string;
        /**
         * Fallback artwork to show when media does not provide one.
         * @deprecated since 0.10: Use MPRIS from `clapper-enhancers` repo instead.
         */
        get fallback_art_url(): string;
        set fallback_art_url(val: string);
        /**
         * Fallback artwork to show when media does not provide one.
         * @deprecated since 0.10: Use MPRIS from `clapper-enhancers` repo instead.
         */
        get fallbackArtUrl(): string;
        set fallbackArtUrl(val: string);
        /**
         * A friendly name to identify the media player.
         *
         * Example: "My Player"
         * @deprecated since 0.10: Use MPRIS from `clapper-enhancers` repo instead.
         */
        get identity(): string;
        /**
         * DBus name to own on connection.
         *
         * Must be written as a reverse DNS format starting with "org.mpris.MediaPlayer2." prefix.
         * Each {@link Clapper.Mpris} instance running on the same system must have an unique name.
         *
         * Example: "org.mpris.MediaPlayer2.MyPlayer.instance123"
         * @deprecated since 0.10: Use MPRIS from `clapper-enhancers` repo instead.
         */
        get own_name(): string;
        /**
         * DBus name to own on connection.
         *
         * Must be written as a reverse DNS format starting with "org.mpris.MediaPlayer2." prefix.
         * Each {@link Clapper.Mpris} instance running on the same system must have an unique name.
         *
         * Example: "org.mpris.MediaPlayer2.MyPlayer.instance123"
         * @deprecated since 0.10: Use MPRIS from `clapper-enhancers` repo instead.
         */
        get ownName(): string;
        /**
         * Whether remote MPRIS clients can control {@link Clapper.Queue}.
         * @deprecated since 0.10: Use MPRIS from `clapper-enhancers` repo instead.
         */
        get queue_controllable(): boolean;
        set queue_controllable(val: boolean);
        /**
         * Whether remote MPRIS clients can control {@link Clapper.Queue}.
         * @deprecated since 0.10: Use MPRIS from `clapper-enhancers` repo instead.
         */
        get queueControllable(): boolean;
        set queueControllable(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Mpris.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Mpris.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](own_name: string, identity: string, desktop_entry?: string | null): Mpris;

        // Signals

        /** @signal */
        connect<K extends keyof Mpris.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Mpris.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Mpris.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Mpris.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Mpris.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Mpris.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get fallback art URL earlier set by user.
         * @returns fallback art URL.
         */
        get_fallback_art_url(): string | null;
        /**
         * Get whether remote `MPRIS` clients can control {@link Clapper.Queue}.
         * @returns `true` if control over {@link Clapper.Queue} is allowed, `false` otherwise.
         */
        get_queue_controllable(): boolean;
        /**
         * Set fallback artwork to show when media does not provide one.
         * @param art_url an art URL
         */
        set_fallback_art_url(art_url?: string | null): void;
        /**
         * Set whether remote MPRIS clients can control {@link Clapper.Queue}.
         *
         * This includes ability to open new URIs, adding/removing
         * items from the queue and selecting current item for
         * playback remotely using MPRIS interface.
         *
         * You probably want to keep this disabled if your application
         * is supposed to manage what is played now and not MPRIS client.
         * @param controllable if {@link Clapper.Queue} should be controllable
         */
        set_queue_controllable(controllable: boolean): void;
    }

    namespace Player {
        // Signal signatures
        interface SignalSignatures extends ThreadedObject.SignalSignatures {
            /**
             * Media was fully downloaded to local cache directory. This signal will
             * be only emitted when progressive download buffering is enabled by
             * setting {@link Clapper.Player.download_enabled} property to `true`.
             *
             * Download cache file location can also be read directly from `item`
             * through its {@link Clapper.MediaItem.cache_location} property.
             * @signal
             * @since 0.8
             */
            'download-complete': (arg0: MediaItem, arg1: string) => void;
            /**
             * These are normal error messages. Upon emitting this signal,
             * playback will stop due to the error.
             * @signal
             */
            error: (arg0: GLib.Error, arg1: string | null) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            message: (arg0: Gst.Message) => void;
            /**
             * A `GStreamer` plugin or one of its features needed for playback is missing.
             *
             * The `description` and `installer_detail` can be used to present the user more info
             * about what is missing and prompt him to install it with an external installer.
             * @signal
             */
            'missing-plugin': (arg0: string, arg1: string | null) => void;
            /**
             * A seeking operation has finished. Player is now at playback position after seek.
             * @signal
             */
            'seek-done': () => void;
            /**
             * These are some usually more minor error messages that should
             * be treated like warnings. Should not generally prevent/stop playback.
             * @signal
             */
            warning: (arg0: GLib.Error, arg1: string | null) => void;
            'notify::adaptive-bandwidth': (pspec: GObject.ParamSpec) => void;
            'notify::adaptive-max-bitrate': (pspec: GObject.ParamSpec) => void;
            'notify::adaptive-min-bitrate': (pspec: GObject.ParamSpec) => void;
            'notify::adaptive-start-bitrate': (pspec: GObject.ParamSpec) => void;
            'notify::audio-enabled': (pspec: GObject.ParamSpec) => void;
            'notify::audio-filter': (pspec: GObject.ParamSpec) => void;
            'notify::audio-offset': (pspec: GObject.ParamSpec) => void;
            'notify::audio-sink': (pspec: GObject.ParamSpec) => void;
            'notify::audio-streams': (pspec: GObject.ParamSpec) => void;
            'notify::autoplay': (pspec: GObject.ParamSpec) => void;
            'notify::current-audio-decoder': (pspec: GObject.ParamSpec) => void;
            'notify::current-video-decoder': (pspec: GObject.ParamSpec) => void;
            'notify::download-dir': (pspec: GObject.ParamSpec) => void;
            'notify::download-enabled': (pspec: GObject.ParamSpec) => void;
            'notify::enhancer-proxies': (pspec: GObject.ParamSpec) => void;
            'notify::mute': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::queue': (pspec: GObject.ParamSpec) => void;
            'notify::speed': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle-font-desc': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle-offset': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle-streams': (pspec: GObject.ParamSpec) => void;
            'notify::subtitles-enabled': (pspec: GObject.ParamSpec) => void;
            'notify::video-enabled': (pspec: GObject.ParamSpec) => void;
            'notify::video-filter': (pspec: GObject.ParamSpec) => void;
            'notify::video-sink': (pspec: GObject.ParamSpec) => void;
            'notify::video-streams': (pspec: GObject.ParamSpec) => void;
            'notify::volume': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::adaptive-bandwidth': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::adaptive-max-bitrate': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::adaptive-min-bitrate': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::adaptive-start-bitrate': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::audio-enabled': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::audio-filter': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::audio-offset': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::audio-sink': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::audio-streams': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::autoplay': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::current-audio-decoder': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::current-video-decoder': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::download-dir': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::download-enabled': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::enhancer-proxies': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::mute': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::position': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::queue': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::speed': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::state': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::subtitle-font-desc': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::subtitle-offset': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::subtitle-streams': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::subtitles-enabled': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::video-enabled': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::video-filter': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::video-sink': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::video-streams': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::volume': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::name': (arg0: Gst.Message) => void;
            /**
             * Allows for applications to receive element messages posted
             * on the underlaying pipeline bus.
             *
             * This is a detailed signal. Connect to it via `message::name`
             * to only receive messages with a certain `name`.
             *
             * Player will only forward messages to the main app thread (from which
             * this signal is emitted) that have a matching signal handler, thus
             * it is more efficient to listen only for specific messages instead
             * of connecting to simply `message` with no details (without message name).
             * @signal
             * @since 0.10
             */
            'message::parent': (arg0: Gst.Message) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends ThreadedObject.ConstructorProps {
            adaptive_bandwidth: number;
            adaptiveBandwidth: number;
            adaptive_max_bitrate: number;
            adaptiveMaxBitrate: number;
            adaptive_min_bitrate: number;
            adaptiveMinBitrate: number;
            adaptive_start_bitrate: number;
            adaptiveStartBitrate: number;
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
            download_dir: string;
            downloadDir: string;
            download_enabled: boolean;
            downloadEnabled: boolean;
            enhancer_proxies: EnhancerProxyList;
            enhancerProxies: EnhancerProxyList;
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
     * {@link Clapper.Player} was written in an easy to use way, so no special GStreamer
     * experience is needed to get started with making various playback applications.
     *
     * Scheduling media for playback is done using a {@link Clapper.Queue} upon which
     * player operates.
     *
     * Player uses `GStreamer` internally and handles playback on a separate thread, while
     * serializing all events/commands between player and the thread it was created upon
     * (usually main app thread). This makes it very easy to integrate with UI toolkits
     * that operate on a single thread like (but not limited to) GTK.
     *
     * To listen for property changes, you can connect to property "notify" signal.
     * @gir-type Class
     */
    class Player extends ThreadedObject {
        static $gtype: GObject.GType<Player>;

        // Properties

        /**
         * Last fragment download bandwidth (bits/s) during adaptive streaming.
         *
         * This property only changes when adaptive streaming and later stays
         * at the last value until streaming some adaptive content again.
         *
         * Apps can use this to determine and set an optimal value for
         * {@link Clapper.Player.adaptive_start_bitrate}.
         * @since 0.8
         */
        get adaptive_bandwidth(): number;
        /**
         * Last fragment download bandwidth (bits/s) during adaptive streaming.
         *
         * This property only changes when adaptive streaming and later stays
         * at the last value until streaming some adaptive content again.
         *
         * Apps can use this to determine and set an optimal value for
         * {@link Clapper.Player.adaptive_start_bitrate}.
         * @since 0.8
         */
        get adaptiveBandwidth(): number;
        /**
         * A maximal allowed bitrate (bits/s) during adaptive streaming
         * such as DASH or HLS (`0` for unlimited).
         *
         * Setting this will prevent streaming from entering qualities with
         * higher bandwidth than the one set. When set together with
         * {@link Clapper.Player.adaptive_min_bitrate} it can be used to
         * enforce some specific quality.
         * @since 0.8
         */
        get adaptive_max_bitrate(): number;
        set adaptive_max_bitrate(val: number);
        /**
         * A maximal allowed bitrate (bits/s) during adaptive streaming
         * such as DASH or HLS (`0` for unlimited).
         *
         * Setting this will prevent streaming from entering qualities with
         * higher bandwidth than the one set. When set together with
         * {@link Clapper.Player.adaptive_min_bitrate} it can be used to
         * enforce some specific quality.
         * @since 0.8
         */
        get adaptiveMaxBitrate(): number;
        set adaptiveMaxBitrate(val: number);
        /**
         * A minimal allowed bitrate (bits/s) during adaptive streaming
         * such as DASH or HLS.
         *
         * Setting this will prevent streaming from entering lower qualities
         * (even when connection speed cannot keep up). When set together with
         * {@link Clapper.Player.adaptive_max_bitrate} it can be used to
         * enforce some specific quality.
         * @since 0.8
         */
        get adaptive_min_bitrate(): number;
        set adaptive_min_bitrate(val: number);
        /**
         * A minimal allowed bitrate (bits/s) during adaptive streaming
         * such as DASH or HLS.
         *
         * Setting this will prevent streaming from entering lower qualities
         * (even when connection speed cannot keep up). When set together with
         * {@link Clapper.Player.adaptive_max_bitrate} it can be used to
         * enforce some specific quality.
         * @since 0.8
         */
        get adaptiveMinBitrate(): number;
        set adaptiveMinBitrate(val: number);
        /**
         * An initial bitrate (bits/s) to select during
         * starting adaptive streaming such as DASH or HLS.
         *
         * If value is lower than the lowest available bitrate in streaming
         * manifest, then lowest possible bitrate will be selected.
         * @since 0.8
         */
        get adaptive_start_bitrate(): number;
        set adaptive_start_bitrate(val: number);
        /**
         * An initial bitrate (bits/s) to select during
         * starting adaptive streaming such as DASH or HLS.
         *
         * If value is lower than the lowest available bitrate in streaming
         * manifest, then lowest possible bitrate will be selected.
         * @since 0.8
         */
        get adaptiveStartBitrate(): number;
        set adaptiveStartBitrate(val: number);
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
         * A directory that `player` will use to download network content
         * when {@link Clapper.Player.download_enabled} is set to `true`.
         *
         * If directory at `path` does not exist, it will be automatically created.
         * @since 0.8
         */
        get download_dir(): string;
        set download_dir(val: string);
        /**
         * A directory that `player` will use to download network content
         * when {@link Clapper.Player.download_enabled} is set to `true`.
         *
         * If directory at `path` does not exist, it will be automatically created.
         * @since 0.8
         */
        get downloadDir(): string;
        set downloadDir(val: string);
        /**
         * Whether progressive download buffering is enabled.
         *
         * If progressive download is enabled and {@link Clapper.Player.download_dir}
         * is set, streamed network content will be cached to the disk space instead
         * of memory whenever possible. This allows for faster seeking through
         * currently played media.
         *
         * Not every type of content is download applicable. Mainly applies to
         * web content that does not use adaptive streaming.
         *
         * Once data that media item URI points to is fully downloaded, player
         * will emit `Clapper.Player::download-complete` signal with a
         * location of downloaded file.
         *
         * Playing again the exact same {@link Clapper.MediaItem} object that was
         * previously fully downloaded will cause player to automatically use that
         * cached file if it still exists, avoiding any further network requests.
         *
         * Please note that player will not delete nor manage downloaded content.
         * It is up to application to cleanup data in created cache directory
         * (e.g. before app exits), in order to remove any downloads that app
         * is not going to use next time it is run and incomplete ones.
         * @since 0.8
         */
        get download_enabled(): boolean;
        set download_enabled(val: boolean);
        /**
         * Whether progressive download buffering is enabled.
         *
         * If progressive download is enabled and {@link Clapper.Player.download_dir}
         * is set, streamed network content will be cached to the disk space instead
         * of memory whenever possible. This allows for faster seeking through
         * currently played media.
         *
         * Not every type of content is download applicable. Mainly applies to
         * web content that does not use adaptive streaming.
         *
         * Once data that media item URI points to is fully downloaded, player
         * will emit `Clapper.Player::download-complete` signal with a
         * location of downloaded file.
         *
         * Playing again the exact same {@link Clapper.MediaItem} object that was
         * previously fully downloaded will cause player to automatically use that
         * cached file if it still exists, avoiding any further network requests.
         *
         * Please note that player will not delete nor manage downloaded content.
         * It is up to application to cleanup data in created cache directory
         * (e.g. before app exits), in order to remove any downloads that app
         * is not going to use next time it is run and incomplete ones.
         * @since 0.8
         */
        get downloadEnabled(): boolean;
        set downloadEnabled(val: boolean);
        /**
         * List of available enhancers in the form of {@link Clapper.EnhancerProxy} objects.
         *
         * Use these to inspect available enhancers on the system and configure
         * their properties on a per player instance basis.
         * @since 0.10
         */
        get enhancer_proxies(): EnhancerProxyList;
        /**
         * List of available enhancers in the form of {@link Clapper.EnhancerProxy} objects.
         *
         * Use these to inspect available enhancers on the system and configure
         * their properties on a per player instance basis.
         * @since 0.10
         */
        get enhancerProxies(): EnhancerProxyList;
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
         * Note that {@link Clapper.Player} uses a CUBIC volume scale, meaning
         * that this property value reflects human hearing level and can
         * be easily bound to volume sliders as-is.
         */
        get volume(): number;
        set volume(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Player.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Player.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Player;

        // Signals

        /** @signal */
        connect<K extends keyof Player.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Player.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Player.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Player.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Player.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Player.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add another {@link Clapper.Feature} to the player.
         * @param feature a {@link Clapper.Feature}
         */
        add_feature(feature: Feature): void;
        /**
         * Request the player to perform a frame step operation.
         *
         * Note that this will pause playback automatically.
         */
        advance_frame(): void;
        /**
         * Get last fragment download bandwidth (bits/s) during
         * adaptive streaming.
         * @returns the adaptive bandwidth.
         */
        get_adaptive_bandwidth(): number;
        /**
         * Get currently set maximal bitrate (bits/s) for adaptive streaming.
         * @returns the maximal bitrate value.
         */
        get_adaptive_max_bitrate(): number;
        /**
         * Get currently set minimal bitrate (bits/s) for adaptive streaming.
         * @returns the minimal bitrate value.
         */
        get_adaptive_min_bitrate(): number;
        /**
         * Get currently set initial bitrate (bits/s) for adaptive streaming.
         * @returns the start bitrate value.
         */
        get_adaptive_start_bitrate(): number;
        /**
         * Get whether audio stream is enabled.
         * @returns `true` if enabled, `false` otherwise.
         */
        get_audio_enabled(): boolean;
        /**
         * Get {@link Gst.Element} used as audio filter.
         * @returns {@link Gst.Element} set as audio filter.
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
         * Get {@link Gst.Element} used as audio sink.
         * @returns {@link Gst.Element} set as audio sink.
         */
        get_audio_sink(): Gst.Element;
        /**
         * Get a list of audio streams within media item.
         * @returns a {@link Clapper.StreamList} of audio {@link Clapper.Stream}.
         */
        get_audio_streams(): StreamList;
        /**
         * Get the autoplay value.
         * @returns `true` if autoplay is enabled, `false` otherwise.
         */
        get_autoplay(): boolean;
        /**
         * Get {@link Gst.Element} currently used as audio decoder.
         * @returns {@link Gst.Element} currently used as audio decoder.
         */
        get_current_audio_decoder(): Gst.Element;
        /**
         * Get {@link Gst.Element} currently used as video decoder.
         * @returns {@link Gst.Element} currently used as video decoder.
         */
        get_current_video_decoder(): Gst.Element;
        /**
         * Get path to a directory set for media downloads.
         * @returns the path of a directory   set for media downloads or `null` if no directory was set yet.
         */
        get_download_dir(): string | null;
        /**
         * Get whether progressive download buffering is enabled.
         * @returns `true` if enabled, `false` otherwise.
         */
        get_download_enabled(): boolean;
        /**
         * Get a list of available enhancers in the form of {@link Clapper.EnhancerProxy} objects.
         * @returns a {@link Clapper.EnhancerProxyList} of enhancer proxies.
         */
        get_enhancer_proxies(): EnhancerProxyList;
        /**
         * Get the mute state of the player.
         * @returns `true` if player is muted, `false` otherwise.
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
         * Get the {@link Clapper.Queue} of the player.
         *
         * The queue belongs to the player and can be accessed for as long
         * as {@link Clapper.Player} object instance it belongs to is alive.
         * @returns the {@link Clapper.Queue} of the player.
         */
        get_queue(): Queue;
        /**
         * Get the speed of the player used for playback.
         * @returns the playback speed multiplier.
         */
        get_speed(): number;
        /**
         * Get the current {@link Clapper.PlayerState}.
         * @returns the {@link Clapper.PlayerState} of the player.
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
         * @returns a {@link Clapper.StreamList} of subtitle {@link Clapper.Stream}.
         */
        get_subtitle_streams(): StreamList;
        /**
         * Get whether subtitles are to be shown when available.
         * @returns `true` if enabled, `false` otherwise.
         */
        get_subtitles_enabled(): boolean;
        /**
         * Get whether video stream is enabled.
         * @returns `true` if enabled, `false` otherwise.
         */
        get_video_enabled(): boolean;
        /**
         * Get {@link Gst.Element} used as video filter.
         * @returns {@link Gst.Element} set as video filter.
         */
        get_video_filter(): Gst.Element;
        /**
         * Get {@link Gst.Element} used as video sink.
         * @returns {@link Gst.Element} set as video sink.
         */
        get_video_sink(): Gst.Element;
        /**
         * Get a list of video streams within media item.
         * @returns a {@link Clapper.StreamList} of video {@link Clapper.Stream}.
         */
        get_video_streams(): StreamList;
        /**
         * Get the volume of the player.
         * @returns current volume level.
         */
        get_volume(): number;
        /**
         * Make current `GStreamer` pipeline graph in `graphviz` dot format.
         *
         * Applications can use tools like `graphviz` to display returned
         * data or just save it to a file as-is for the user to do it manually.
         * @param details a {@link Gst.DebugGraphDetails} level
         * @returns current pipeline description in dot format.
         */
        make_pipeline_graph(details: Gst.DebugGraphDetails | null): string;
        /**
         * Pause the playback of current media item.
         *
         * This function will queue a request for the underlaying `GStreamer`
         * pipeline to go into `PAUSED` state, thus can also be used on a not
         * yet started video to go into `PAUSED` state first.
         */
        pause(): void;
        /**
         * Either start or resume the playback of current media item.
         *
         * This function will queue a request for the underlaying `GStreamer`
         * pipeline to go into `PLAYING` state.
         */
        play(): void;
        /**
         * Allows sending custom messages to the desired `destination`.
         *
         * This functionality can be used for communication with enhancers implementing
         * {@link Clapper.Reactable} interface. Useful for applications to send custom messages
         * to enhacers that can react to them and/or for enhancers development to send events
         * from them to the applications. It can also be used for sending specific messages
         * from application or enhancers to the player itself.
         *
         * Messages send to the application can be received by connecting a
         * `Clapper.Player::message` signal handler. Inspection of message source
         * object can be done to determine who send given message.
         * @param msg a {@link Gst.Message}
         * @param destination a {@link Clapper.PlayerMessageDestination}
         */
        post_message(msg: Gst.Message, destination: PlayerMessageDestination | null): void;
        /**
         * Request the player to perform a seek operation.
         *
         * This function will use {@link Clapper.PlayerSeekMethod.NORMAL} as a
         * seeking method. If you wish to specify what method to use per seeking
         * request, use {@link Clapper.Player.seek_custom} instead.
         *
         * Note that seeking requests are per selected media item. Seeking
         * requests will be ignored if player is stopped. You need to at least
         * call {@link Clapper.Player.pause} before seeking and then your requested
         * seek will be handled if item could be played.
         * @param position a decimal number with position to seek to (in seconds)
         */
        seek(position: number): void;
        /**
         * Request the player to perform a seek operation.
         *
         * Same as {@link Clapper.Player.seek}, but also allows to specify
         * {@link Clapper.PlayerSeekMethod} to use for seek.
         * @param position a decimal number with position to seek to (in seconds)
         * @param method a {@link Clapper.PlayerSeekMethod}
         */
        seek_custom(position: number, method: PlayerSeekMethod | null): void;
        /**
         * Set maximal bitrate to select for adaptive streaming
         * such as DASH or HLS.
         * @param bitrate a bitrate to set (bits/s)
         */
        set_adaptive_max_bitrate(bitrate: number): void;
        /**
         * Set minimal bitrate to select for adaptive streaming
         * such as DASH or HLS.
         * @param bitrate a bitrate to set (bits/s)
         */
        set_adaptive_min_bitrate(bitrate: number): void;
        /**
         * Set initial bitrate to select when starting adaptive
         * streaming such as DASH or HLS.
         * @param bitrate a bitrate to set (bits/s)
         */
        set_adaptive_start_bitrate(bitrate: number): void;
        /**
         * Set whether enable audio stream.
         * @param enabled whether enabled
         */
        set_audio_enabled(enabled: boolean): void;
        /**
         * Set {@link Gst.Element} to be used as audio filter.
         * @param element a {@link Gst.Element} or `null` for none.
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
         * Set {@link Gst.Element} to be used as audio sink.
         * @param element a {@link Gst.Element} or `null` to use default.
         */
        set_audio_sink(element?: Gst.Element | null): void;
        /**
         * Set the autoplay state of the player.
         *
         * When autoplay is enabled, player will always try to start
         * playback after current media item changes. When disabled
         * current playback state is preserved when changing items.
         * @param enabled `true` to enable autoplay, `false` otherwise.
         */
        set_autoplay(enabled: boolean): void;
        /**
         * Set a directory that `player` will use to store downloads.
         *
         * See {@link Clapper.Player.download_enabled} description for more
         * info how this works.
         * @param path the path of a directory to use for media downloads
         */
        set_download_dir(path: string): void;
        /**
         * Set whether player should attempt progressive download buffering.
         *
         * For this to actually work a {@link Clapper.Player.download_dir}
         * must also be set.
         * @param enabled whether enabled
         */
        set_download_enabled(enabled: boolean): void;
        /**
         * Set the mute state of the player.
         * @param mute `true` if player should be muted, `false` otherwise.
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
         * Set {@link Gst.Element} to be used as video filter.
         * @param element a {@link Gst.Element} or `null` for none.
         */
        set_video_filter(element?: Gst.Element | null): void;
        /**
         * Set {@link Gst.Element} to be used as video sink.
         * @param element a {@link Gst.Element} or `null` to use default.
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
         * This function will queue a request for the underlaying `GStreamer`
         * pipeline to go into `READY` state.
         */
        stop(): void;
    }

    namespace Queue {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::current-index': (pspec: GObject.ParamSpec) => void;
            'notify::current-item': (pspec: GObject.ParamSpec) => void;
            'notify::gapless': (pspec: GObject.ParamSpec) => void;
            'notify::instant': (pspec: GObject.ParamSpec) => void;
            'notify::n-items': (pspec: GObject.ParamSpec) => void;
            'notify::progression-mode': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps<A extends GObject.Object = GObject.Object>
            extends Gst.Object.ConstructorProps, Gio.ListModel.ConstructorProps {
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
     * @gir-type Class
     */
    class Queue<A extends GObject.Object = GObject.Object> extends Gst.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<Queue>;

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Queue.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Queue.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Queue.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Queue.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Queue.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Queue.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Queue.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Queue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add another {@link Clapper.MediaItem} to the end of queue.
         *
         * If item is already in queue, this function will do nothing,
         * so it is safe to call multiple times if unsure.
         * @param item a {@link Clapper.MediaItem}
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
         * Get the index of {@link Clapper.MediaItem} within {@link Clapper.Queue}.
         * @param item a {@link Clapper.MediaItem} to search for
         * @returns `true` if `item` is one of the elements of queue.
         */
        find_item(item: MediaItem): [boolean, number];
        /**
         * Get index of the currently selected {@link Clapper.MediaItem}.
         * @returns Current item index or {@link Clapper.QUEUE_INVALID_POSITION}   when nothing is selected.
         */
        get_current_index(): number;
        /**
         * Get the currently selected {@link Clapper.MediaItem}.
         * @returns The current {@link Clapper.MediaItem}.
         */
        get_current_item(): MediaItem | null;
        /**
         * Get if {@link Clapper.Queue} is set to use gapless progression.
         * @returns `true` if enabled, `false` otherwise.
         */
        get_gapless(): boolean;
        /**
         * Get if {@link Clapper.Queue} is set to use instant media item changes.
         * @returns `true` if enabled, `false` otherwise.
         */
        get_instant(): boolean;
        /**
         * Get the {@link Clapper.QueueProgressionMode} of the {@link Clapper.Queue}.
         * @returns a currently set {@link Clapper.QueueProgressionMode}.
         */
        get_progression_mode(): QueueProgressionMode;
        /**
         * Insert another {@link Clapper.MediaItem} at `index` position to the queue.
         *
         * If item is already in queue, this function will do nothing,
         * so it is safe to call multiple times if unsure.
         * @param item a {@link Clapper.MediaItem}
         * @param index the index to place `item` in queue, -1 to append
         */
        insert_item(item: MediaItem, index: number): void;
        /**
         * Insert another {@link Clapper.MediaItem} after some other item position.
         *
         * If `after_item` is `null`, item will be prepended. When set but
         * not found however, item will be appended at the end of queue.
         *
         * If item is already in queue, this function will do nothing,
         * so it is safe to call multiple times if unsure.
         * @param item a {@link Clapper.MediaItem}
         * @param after_item a {@link Clapper.MediaItem} after which to   insert `item` or `null` to prepend
         */
        insert_item_after(item: MediaItem, after_item?: MediaItem | null): void;
        /**
         * Checks if given {@link Clapper.MediaItem} is currently selected.
         * @param item a {@link Clapper.MediaItem} to check
         * @returns `true` if `item` is a current media item, `false` otherwise.
         */
        item_is_current(item: MediaItem): boolean;
        /**
         * Removes {@link Clapper.MediaItem} at `index` from the queue.
         * @param index an item index
         */
        remove_index(index: number): void;
        /**
         * Removes {@link Clapper.MediaItem} from the queue.
         *
         * If item either was never in the queue or was removed from
         * it earlier, this function will do nothing, so it is safe
         * to call multiple times if unsure.
         * @param item a {@link Clapper.MediaItem}
         */
        remove_item(item: MediaItem): void;
        /**
         * Change position of one {@link Clapper.MediaItem} within the queue.
         *
         * Note that the `index` is the new position you expect item to be
         * after whole reposition operation is finished.
         *
         * If item is not in the queue, this function will do nothing.
         * @param item a {@link Clapper.MediaItem}
         * @param index the index to place `item` in queue, -1 to place at the end
         */
        reposition_item(item: MediaItem, index: number): void;
        /**
         * Selects {@link Clapper.MediaItem} at `index` from `queue` as current one or
         * unselects currently selected index when `index` is {@link Clapper.QUEUE_INVALID_POSITION}.
         * @param index an item index or {@link Clapper.QUEUE_INVALID_POSITION} to unselect
         * @returns `true` if item at `index` could be selected/unselected,   `false` if index was out of queue range.
         */
        select_index(index: number): boolean;
        /**
         * Selects {@link Clapper.MediaItem} from `queue` as current one or
         * unselects currently selected item when `item` is `null`.
         * @param item a {@link Clapper.MediaItem} or `null` to unselect
         * @returns `true` if item could be selected/unselected,   `false` if it was not in the queue.
         */
        select_item(item?: MediaItem | null): boolean;
        /**
         * Selects next {@link Clapper.MediaItem} from `queue` for playback.
         *
         * Note that this will try to select next item in the order
         * of the queue, regardless of {@link Clapper.QueueProgressionMode} set.
         * @returns `true` if there was another media item in queue, `false` otherwise.
         */
        select_next_item(): boolean;
        /**
         * Selects previous {@link Clapper.MediaItem} from `queue` for playback.
         *
         * Note that this will try to select previous item in the order
         * of the queue, regardless of {@link Clapper.QueueProgressionMode} set.
         * @returns `true` if there was previous media item in queue, `false` otherwise.
         */
        select_previous_item(): boolean;
        /**
         * Set {@link Clapper.Queue} progression to be gapless.
         *
         * Gapless playback will try to re-use as much as possible of underlying
         * GStreamer elements when {@link Clapper.Queue} progresses, removing any
         * potential gap in the data.
         *
         * Enabling this option mostly makes sense when used together with
         * {@link Clapper.Queue.progression_mode} property set to
         * {@link Clapper.QueueProgressionMode.CONSECUTIVE}.
         *
         * NOTE: This feature within GStreamer is rather new and
         * might still cause playback issues. Disabled by default.
         * @param gapless `true` to enable, `false` otherwise.
         */
        set_gapless(gapless: boolean): void;
        /**
         * Set {@link Clapper.Queue} media item changes to be instant.
         *
         * Instant will try to re-use as much as possible of underlying
         * GStreamer elements when {@link Clapper.MediaItem} is selected, allowing
         * media item change requests to be faster.
         *
         * NOTE: This feature within GStreamer is rather new and
         * might still cause playback issues. Disabled by default.
         * @param instant `true` to enable, `false` otherwise.
         */
        set_instant(instant: boolean): void;
        /**
         * Set the {@link Clapper.QueueProgressionMode} of the {@link Clapper.Queue}.
         *
         * Changing the mode set will alter next item selection at the
         * end of playback. For possible values and their descriptions,
         * see {@link Clapper.QueueProgressionMode} documentation.
         * @param mode a {@link Clapper.QueueProgressionMode}
         */
        set_progression_mode(mode: QueueProgressionMode | null): void;
        /**
         * Removes {@link Clapper.MediaItem} at `index` from the queue.
         * @param index an item index
         * @returns The removed {@link Clapper.MediaItem} at `index`.
         */
        steal_index(index: number): MediaItem | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @returns the {@link GObject.GType} of the items contained in `list`.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @returns the number of items in `list`.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list`, `null` is
         * returned.
         *
         * `null` is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of `g_list_model_get_item()`.
         *
         * See also: `g_list_model_get_n_items()`
         * @param position the position of the item to fetch
         * @returns the object at `position`.
         */
        get_item(position: number): A | null;
        /**
         * Emits the {@link Gio.ListModel.SignalSignatures.items_changed | Gio.ListModel::items-changed} signal on `list`.
         *
         * This function should only be called by classes implementing
         * {@link Gio.ListModel}. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as {@link Gio.ListStore}), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the {@link Gio.ListModel}
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list`, `null` is returned.
         *
         * `null` is never returned for an index that is smaller than the length
         * of the list.  See `g_list_model_get_n_items()`.
         *
         * The same {@link GObject.Object} instance may not appear more than once in a {@link Gio.ListModel}.
         * @param position the position of the item to fetch
         * @virtual
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @virtual
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @virtual
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

    namespace Stream {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::stream-type': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            stream_type: StreamType;
            streamType: StreamType;
            title: string;
        }
    }

    /**
     * Represents a stream within media.
     * @gir-type Class
     */
    class Stream extends Gst.Object {
        static $gtype: GObject.GType<Stream>;

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Stream.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Stream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Stream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Stream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Stream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Stream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Stream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Stream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * This function is called when internal {@link Gst.Stream} gets updated.
         * Meant for internal usage only. Used for subclasses to update
         * their properties accordingly.
         *
         * Note that this vfunc is called from different threads.
         * @param caps an updated {@link Gst.Caps} if changed
         * @param tags an updated {@link Gst.TagList} if changed
         * @virtual
         */
        vfunc_internal_stream_updated(caps?: Gst.Caps | null, tags?: Gst.TagList | null): void;

        // Methods

        /**
         * Get the {@link Clapper.StreamType} of `stream`.
         * @returns type of stream.
         */
        get_stream_type(): StreamType;
        /**
         * Get the title of `stream`, if any.
         * @returns title of stream.
         */
        get_title(): string | null;
    }

    namespace StreamList {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::current-index': (pspec: GObject.ParamSpec) => void;
            'notify::current-stream': (pspec: GObject.ParamSpec) => void;
            'notify::n-streams': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps<A extends GObject.Object = GObject.Object>
            extends Gst.Object.ConstructorProps, Gio.ListModel.ConstructorProps {
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
     * @gir-type Class
     */
    class StreamList<A extends GObject.Object = GObject.Object> extends Gst.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<StreamList>;

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StreamList.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StreamList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof StreamList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StreamList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StreamList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get index of the currently selected {@link Clapper.Stream}.
         * @returns Current stream index or {@link Clapper.STREAM_LIST_INVALID_POSITION}   when nothing is selected.
         */
        get_current_index(): number;
        /**
         * Get the currently selected {@link Clapper.Stream}.
         * @returns The current {@link Clapper.Stream}.
         */
        get_current_stream(): Stream | null;
        /**
         * Get the number of streams in {@link Clapper.StreamList}.
         *
         * This behaves the same as {@link Gio.ListModel.get_n_items}, and is here
         * for code uniformity and convenience to avoid type casting by user.
         * @returns The number of streams in {@link Clapper.StreamList}.
         */
        get_n_streams(): number;
        /**
         * Get the {@link Clapper.Stream} at index.
         *
         * This behaves the same as {@link Gio.ListModel.get_item}, and is here
         * for code uniformity and convenience to avoid type casting by user.
         * @param index a stream index
         * @returns The {@link Clapper.Stream} at `index`.
         */
        get_stream(index: number): Stream | null;
        /**
         * Selects {@link Clapper.Stream} at `index` from `list` as current one.
         * @param index a stream index
         * @returns `true` if stream could be selected, `false` otherwise.
         */
        select_index(index: number): boolean;
        /**
         * Selects {@link Clapper.Stream} from `list` to be activated.
         * @param stream a {@link Clapper.Stream}
         * @returns `true` if stream was in the `list`, `false` otherwise.
         */
        select_stream(stream: Stream): boolean;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @returns the {@link GObject.GType} of the items contained in `list`.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @returns the number of items in `list`.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list`, `null` is
         * returned.
         *
         * `null` is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of `g_list_model_get_item()`.
         *
         * See also: `g_list_model_get_n_items()`
         * @param position the position of the item to fetch
         * @returns the object at `position`.
         */
        get_item(position: number): A | null;
        /**
         * Emits the {@link Gio.ListModel.SignalSignatures.items_changed | Gio.ListModel::items-changed} signal on `list`.
         *
         * This function should only be called by classes implementing
         * {@link Gio.ListModel}. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as {@link Gio.ListStore}), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the {@link Gio.ListModel}
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list`, `null` is returned.
         *
         * `null` is never returned for an index that is smaller than the length
         * of the list.  See `g_list_model_get_n_items()`.
         *
         * The same {@link GObject.Object} instance may not appear more than once in a {@link Gio.ListModel}.
         * @param position the position of the item to fetch
         * @virtual
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @virtual
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @virtual
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

    namespace SubtitleStream {
        // Signal signatures
        interface SignalSignatures extends Stream.SignalSignatures {
            'notify::lang-code': (pspec: GObject.ParamSpec) => void;
            'notify::lang-name': (pspec: GObject.ParamSpec) => void;
            'notify::stream-type': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

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
     * @gir-type Class
     */
    class SubtitleStream extends Stream {
        static $gtype: GObject.GType<SubtitleStream>;

        // Properties

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
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SubtitleStream.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SubtitleStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof SubtitleStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SubtitleStream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SubtitleStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SubtitleStream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SubtitleStream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SubtitleStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace ThreadedObject {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    /**
     * A base class for creating objects that work within a separate thread.
     * @gir-type Class
     */
    class ThreadedObject extends Gst.Object {
        static $gtype: GObject.GType<ThreadedObject>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ThreadedObject.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ThreadedObject.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ThreadedObject.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ThreadedObject.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ThreadedObject.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ThreadedObject.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ThreadedObject.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ThreadedObject.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Called right after thread started.
         *
         * Useful for initializing objects that work within this new thread.
         * @virtual
         */
        vfunc_thread_start(): void;
        /**
         * Called when thread is going to stop.
         *
         * Useful for cleanup of things created on thread start.
         * @virtual
         */
        vfunc_thread_stop(): void;

        // Methods

        /**
         * Get the {@link GLib.MainContext} of the thread used by this object.
         *
         * Useful when you want to invoke object thread to do some
         * action in it from a different thread.
         * @returns a {@link GLib.MainContext} of the object used thread.
         */
        get_context(): GLib.MainContext;
    }

    namespace Timeline {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::n-markers': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps<A extends GObject.Object = GObject.Object>
            extends Gst.Object.ConstructorProps, Gio.ListModel.ConstructorProps {
            n_markers: number;
            nMarkers: number;
        }
    }

    /**
     * A media timeline filled with point markers.
     * @gir-type Class
     */
    class Timeline<A extends GObject.Object = GObject.Object> extends Gst.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<Timeline>;

        // Properties

        /**
         * Number of markers in the timeline.
         */
        get n_markers(): number;
        /**
         * Number of markers in the timeline.
         */
        get nMarkers(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Timeline.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Timeline.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Timeline.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Timeline.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Timeline.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Timeline.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Timeline.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Timeline.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the {@link Clapper.Marker} at index.
         *
         * This behaves the same as {@link Gio.ListModel.get_item}, and is here
         * for code uniformity and convenience to avoid type casting by user.
         * @param index a marker index
         * @returns The {@link Clapper.Marker} at `index`.
         */
        get_marker(index: number): Marker | null;
        /**
         * Get the number of markers in {@link Clapper.Timeline}.
         *
         * This behaves the same as {@link Gio.ListModel.get_n_items}, and is here
         * for code uniformity and convenience to avoid type casting by user.
         * @returns The number of markers in {@link Clapper.Timeline}.
         */
        get_n_markers(): number;
        /**
         * Insert the {@link Clapper.Marker} into `timeline`.
         * @param marker a {@link Clapper.Marker}
         */
        insert_marker(marker: Marker): void;
        /**
         * Removes {@link Clapper.Marker} from the timeline if present.
         * @param marker a {@link Clapper.Marker}
         */
        remove_marker(marker: Marker): void;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @returns the {@link GObject.GType} of the items contained in `list`.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @returns the number of items in `list`.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list`, `null` is
         * returned.
         *
         * `null` is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of `g_list_model_get_item()`.
         *
         * See also: `g_list_model_get_n_items()`
         * @param position the position of the item to fetch
         * @returns the object at `position`.
         */
        get_item(position: number): A | null;
        /**
         * Emits the {@link Gio.ListModel.SignalSignatures.items_changed | Gio.ListModel::items-changed} signal on `list`.
         *
         * This function should only be called by classes implementing
         * {@link Gio.ListModel}. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as {@link Gio.ListStore}), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the {@link Gio.ListModel}
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list`, `null` is returned.
         *
         * `null` is never returned for an index that is smaller than the length
         * of the list.  See `g_list_model_get_n_items()`.
         *
         * The same {@link GObject.Object} instance may not appear more than once in a {@link Gio.ListModel}.
         * @param position the position of the item to fetch
         * @virtual
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @virtual
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @virtual
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

    namespace VideoStream {
        // Signal signatures
        interface SignalSignatures extends Stream.SignalSignatures {
            'notify::bitrate': (pspec: GObject.ParamSpec) => void;
            'notify::codec': (pspec: GObject.ParamSpec) => void;
            'notify::fps': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::pixel-format': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::stream-type': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

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
     * @gir-type Class
     */
    class VideoStream extends Stream {
        static $gtype: GObject.GType<VideoStream>;

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VideoStream.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VideoStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof VideoStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VideoStream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VideoStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VideoStream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VideoStream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VideoStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get bitrate of video `stream`.
         * @returns the bitrate of video stream.
         */
        get_bitrate(): number;
        /**
         * Get codec used to encode `stream`.
         * @returns the video codec of stream   or `null` if undetermined.
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
         * @returns the pixel format of stream   or `null` if undetermined.
         */
        get_pixel_format(): string | null;
        /**
         * Get width of video `stream`.
         * @returns the width of video stream.
         */
        get_width(): number;
    }

    /**
     * @gir-type Alias
     */
    type AudioStreamClass = typeof AudioStream;
    /**
     * @gir-type Alias
     */
    type DiscovererClass = typeof Discoverer;
    /**
     * @gir-type Alias
     */
    type EnhancerProxyClass = typeof EnhancerProxy;
    /**
     * @gir-type Alias
     */
    type EnhancerProxyListClass = typeof EnhancerProxyList;
    /**
     * @gir-type Alias
     */
    type ExtractableInterface = typeof Extractable;
    /**
     * @gir-type Alias
     */
    type FeatureClass = typeof Feature;
    /**
     * @gir-type Alias
     */
    type HarvestClass = typeof Harvest;
    /**
     * @gir-type Alias
     */
    type MarkerClass = typeof Marker;
    /**
     * @gir-type Alias
     */
    type MediaItemClass = typeof MediaItem;
    /**
     * @gir-type Alias
     */
    type MprisClass = typeof Mpris;
    /**
     * @gir-type Alias
     */
    type PlayerClass = typeof Player;
    /**
     * @gir-type Alias
     */
    type PlaylistableInterface = typeof Playlistable;
    /**
     * @gir-type Alias
     */
    type QueueClass = typeof Queue;
    /**
     * @gir-type Alias
     */
    type ReactableInterface = typeof Reactable;
    /**
     * @gir-type Alias
     */
    type StreamClass = typeof Stream;
    /**
     * @gir-type Alias
     */
    type StreamListClass = typeof StreamList;
    /**
     * @gir-type Alias
     */
    type SubtitleStreamClass = typeof SubtitleStream;
    /**
     * @gir-type Alias
     */
    type ThreadedObjectClass = typeof ThreadedObject;
    /**
     * @gir-type Alias
     */
    type TimelineClass = typeof Timeline;
    /**
     * @gir-type Alias
     */
    type VideoStreamClass = typeof VideoStream;
    namespace Extractable {
        /**
         * Interface for implementing Extractable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Extract data and fill harvest.
             * @param uri a {@link GLib.Uri}
             * @param harvest a {@link Clapper.Harvest} to be filled
             * @param cancellable a {@link Gio.Cancellable} object
             * @virtual
             */
            vfunc_extract(uri: GLib.Uri, harvest: Harvest, cancellable: Gio.Cancellable): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ExtractableNamespace {
        $gtype: GObject.GType<Extractable>;
        prototype: Extractable;
    }
    /**
     * An interface for creating enhancers that resolve given URI into something playable.
     * @gir-type Interface
     * @since 0.8
     */
    interface Extractable extends GObject.Object, Extractable.Interface {}

    export const Extractable: ExtractableNamespace & {
        new (): Extractable; // This allows `obj instanceof Extractable`
    };

    namespace Playlistable {
        /**
         * Interface for implementing Playlistable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Parse `bytes` and fill `playlist` with {@link Clapper.MediaItem} objects.
             *
             * If implementation returns `false`, whole `playlist` content will be discarded.
             * @param uri a source {@link GLib.Uri}
             * @param bytes a {@link GLib.Bytes}
             * @param playlist a {@link Gio.ListStore} for media items
             * @param cancellable a {@link Gio.Cancellable} object
             * @virtual
             */
            vfunc_parse(
                uri: GLib.Uri,
                bytes: GLib.Bytes | Uint8Array,
                playlist: Gio.ListStore,
                cancellable: Gio.Cancellable,
            ): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PlaylistableNamespace {
        $gtype: GObject.GType<Playlistable>;
        prototype: Playlistable;
    }
    /**
     * An interface for creating enhancers that parse data into individual media items.
     * @gir-type Interface
     * @since 0.10
     */
    interface Playlistable extends GObject.Object, Playlistable.Interface {}

    export const Playlistable: PlaylistableNamespace & {
        new (): Playlistable; // This allows `obj instanceof Playlistable`
    };

    namespace Reactable {
        /**
         * Interface for implementing Reactable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * An item in queue got updated.
             *
             * This might be (or not) currently played item.
             * Implementations can compare it against the last item from
             * {@link Clapper.Reactable.played_item_changed} if they
             * need to know that.
             * @param item a {@link Clapper.MediaItem} that was updated
             * @param flags flags informing which properties were updated
             * @virtual
             */
            vfunc_item_updated(item: MediaItem, flags: ReactableItemUpdatedFlags): void;
            /**
             * Custom message from user was received on reactables bus.
             * @param msg a {@link Gst.Message}
             * @virtual
             */
            vfunc_message_received(msg: Gst.Message): void;
            /**
             * Player mute state changed.
             * @param mute `true` if player is muted, `false` otherwise
             * @virtual
             */
            vfunc_mute_changed(mute: boolean): void;
            /**
             * New media item started playing. All following events (such as position changes)
             * will be related to this `item` from now on.
             * @param item a {@link Clapper.MediaItem} that is now playing
             * @virtual
             */
            vfunc_played_item_changed(item: MediaItem): void;
            /**
             * Player position changed.
             * @param position a decimal number with current position in seconds
             * @virtual
             */
            vfunc_position_changed(position: number): void;
            /**
             * All items were removed from queue.
             *
             * Note that in such event {@link Clapper.Reactable.queue_item_removed}
             * will NOT be called for each item for performance reasons. You probably
             * want to implement this function if you also implemented item removal.
             * @virtual
             */
            vfunc_queue_cleared(): void;
            /**
             * An item was added to the queue.
             * @param item a {@link Clapper.MediaItem} that was added
             * @param index position at which `item` was placed in queue
             * @virtual
             */
            vfunc_queue_item_added(item: MediaItem, index: number): void;
            /**
             * An item was removed from queue.
             *
             * Implementations that are interested in queue items removal
             * should also implement {@link Clapper.Reactable.queue_cleared}.
             * @param item a {@link Clapper.MediaItem} that was removed
             * @param index position from which `item` was removed in queue
             * @virtual
             */
            vfunc_queue_item_removed(item: MediaItem, index: number): void;
            /**
             * An item changed position within queue.
             * @param before position from which {@link Clapper.MediaItem} was removed
             * @param after position at which {@link Clapper.MediaItem} was inserted after removal
             * @virtual
             */
            vfunc_queue_item_repositioned(before: number, after: number): void;
            /**
             * Progression mode of the queue was changed.
             * @param mode a {@link Clapper.QueueProgressionMode}
             * @virtual
             */
            vfunc_queue_progression_changed(mode: QueueProgressionMode): void;
            /**
             * Player speed changed.
             * @param speed the playback speed multiplier
             * @virtual
             */
            vfunc_speed_changed(speed: number): void;
            /**
             * Player state changed.
             * @param state a {@link Clapper.PlayerState}
             * @virtual
             */
            vfunc_state_changed(state: PlayerState): void;
            /**
             * Player volume changed.
             * @param volume the volume level
             * @virtual
             */
            vfunc_volume_changed(volume: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    export interface ReactableNamespace {
        $gtype: GObject.GType<Reactable>;
        prototype: Reactable;
    }
    /**
     * An interface for creating enhancers that react to the
     * playback and/or events that should influence it.
     * @gir-type Interface
     * @since 0.10
     */
    interface Reactable extends Gst.Object, Reactable.Interface {
        // Methods

        /**
         * Get the {@link Clapper.Player} that this reactable is reacting to.
         *
         * This is meant to be used in implementations where reaction goes the
         * other way around (from enhancer plugin to the player). For example
         * some external event needs to influence parent player object like
         * changing its state, seeking, etc.
         *
         * Note that enhancers are working in a non-main application thread, thus
         * if you need to do operations on a {@link Clapper.Queue} such as adding/removing
         * items, you need to switch thread first. Otherwise this will not be thread safe
         * for applications that use single threaded toolkits such as `GTK`. You can do this
         * manually or use provided reactable convenience functions.
         *
         * Due to the threaded nature, you should also avoid comparisons to the current
         * properties values in the player or its queue. While these are thread safe, there
         * is no guarantee that values/objects between threads are still the same in both
         * (or still exist). For example, instead of using {@link Clapper.Queue.current_item},
         * monitor it with implemented {@link Clapper.Reactable.played_item_changed} instead,
         * as these functions are all serialized into your implementation thread.
         * @returns A reference to the parent {@link Clapper.Player}.
         */
        get_player(): Player | null;
        /**
         * A convenience function that within application main thread synchronously appends
         * an `item` to the playback queue of the player that `reactable` belongs to.
         *
         * Reactable enhancers should only modify the queue from the application
         * main thread, switching thread either themselves or using this convenience
         * function that does so.
         *
         * Note that this function will do no operation if called when there is no player
         * set yet (e.g. inside enhancer construction) or if enhancer outlived the parent
         * instance somehow. Both cases are considered to be implementation bug.
         * @param item a {@link Clapper.MediaItem}
         */
        queue_append_sync(item: MediaItem): void;
        /**
         * A convenience function that within application main thread synchronously clears
         * the playback queue of the player that `reactable` belongs to.
         *
         * Reactable enhancers should only modify the queue from the application
         * main thread, switching thread either themselves or using this convenience
         * function that does so.
         *
         * Note that this function will do no operation if called when there is no player
         * set yet (e.g. inside enhancer construction) or if enhancer outlived the parent
         * instance somehow. Both cases are considered to be implementation bug.
         */
        queue_clear_sync(): void;
        /**
         * A convenience function that within application main thread synchronously inserts
         * an `item` to the playback queue position after `after_item` of the player that
         * `reactable` belongs to.
         *
         * This function uses `after_item` instead of position index in order to ensure
         * desired position does not change during thread switching.
         *
         * Reactable enhancers should only modify the queue from the application
         * main thread, switching thread either themselves or using this convenience
         * function that does so.
         *
         * Note that this function will do no operation if called when there is no player
         * set yet (e.g. inside enhancer construction) or if enhancer outlived the parent
         * instance somehow. Both cases are considered to be implementation bug.
         * @param item a {@link Clapper.MediaItem}
         * @param after_item a {@link Clapper.MediaItem} after which to insert or `null` to prepend
         */
        queue_insert_sync(item: MediaItem, after_item: MediaItem): void;
        /**
         * A convenience function that within application main thread synchronously removes
         * an `item` from the playback queue of the player that `reactable` belongs to.
         *
         * Reactable enhancers should only modify the queue from the application
         * main thread, switching thread either themselves or using this convenience
         * function that does so.
         *
         * Note that this function will do no operation if called when there is no player
         * set yet (e.g. inside enhancer construction) or if enhancer outlived the parent
         * instance somehow. Both cases are considered to be implementation bug.
         * @param item a {@link Clapper.MediaItem}
         */
        queue_remove_sync(item: MediaItem): void;
        /**
         * A convenience function that within application main thread synchronously
         * inserts `marker` into `timeline`.
         *
         * Reactable enhancers should only modify timeline of an item that is already
         * in queue from the application main thread, switching thread either themselves
         * or using this convenience function that does so.
         * @param timeline a {@link Clapper.Timeline}
         * @param marker a {@link Clapper.Marker}
         */
        timeline_insert_sync(timeline: Timeline, marker: Marker): void;
        /**
         * A convenience function that within application main thread synchronously
         * removes `marker` from `timeline`.
         *
         * Reactable enhancers should only modify timeline of an item that is already
         * in queue from the application main thread, switching thread either themselves
         * or using this convenience function that does so.
         * @param timeline a {@link Clapper.Timeline}
         * @param marker a {@link Clapper.Marker}
         */
        timeline_remove_sync(timeline: Timeline, marker: Marker): void;
    }

    export const Reactable: ReactableNamespace & {
        new (): Reactable; // This allows `obj instanceof Reactable`
    };

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
