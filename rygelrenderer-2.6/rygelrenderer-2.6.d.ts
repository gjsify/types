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
import type RygelCore from '@girs/rygelcore-2.6';
import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GUPnP from '@girs/gupnp-1.2';
import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-2.4';
import type GSSDP from '@girs/gssdp-1.2';
import type GUPnPAV from '@girs/gupnpav-1.0';

export namespace RygelRenderer {
    /**
     * RygelRenderer-2.6
     */

    namespace MediaRendererPlugin {
        // Signal signatures
        interface SignalSignatures extends RygelCore.Plugin.SignalSignatures {
            'notify::supported-profiles': (pspec: GObject.ParamSpec) => void;
            'notify::capabilities': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::desc-path': (pspec: GObject.ParamSpec) => void;
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::resource-infos': (pspec: GObject.ParamSpec) => void;
            'notify::icon-infos': (pspec: GObject.ParamSpec) => void;
            'notify::default-icons': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends RygelCore.Plugin.ConstructorProps {
            supported_profiles: RygelCore.DLNAProfile[];
            supportedProfiles: RygelCore.DLNAProfile[];
        }
    }

    class MediaRendererPlugin extends RygelCore.Plugin {
        static $gtype: GObject.GType<MediaRendererPlugin>;

        // Properties

        get supported_profiles(): RygelCore.DLNAProfile[];
        set supported_profiles(val: RygelCore.DLNAProfile[]);
        get supportedProfiles(): RygelCore.DLNAProfile[];
        set supportedProfiles(val: RygelCore.DLNAProfile[]);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediaRendererPlugin.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MediaRendererPlugin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            name: string,
            title: string | null,
            description: string | null,
            capabilities: RygelCore.PluginCapabilities,
        ): MediaRendererPlugin;
        // Conflicted with RygelCore.Plugin.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof MediaRendererPlugin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaRendererPlugin.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MediaRendererPlugin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaRendererPlugin.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MediaRendererPlugin.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MediaRendererPlugin.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_get_player(): MediaPlayer | null;
        vfunc_get_controller(): PlayerController;

        // Methods

        get_player(): MediaPlayer | null;
        get_controller(): PlayerController;
        get_protocol_info(): string;
        get_supported_profiles(): RygelCore.DLNAProfile[];
        set_supported_profiles(value: RygelCore.DLNAProfile[]): void;
    }

    namespace MediaRenderer {
        // Signal signatures
        interface SignalSignatures extends RygelCore.MediaDevice.SignalSignatures {
            'notify::player': (pspec: GObject.ParamSpec) => void;
            'notify::plugin': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::capabilities': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends RygelCore.MediaDevice.ConstructorProps {
            player: MediaPlayer;
        }
    }

    class MediaRenderer extends RygelCore.MediaDevice {
        static $gtype: GObject.GType<MediaRenderer>;

        // Properties

        get player(): MediaPlayer;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediaRenderer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MediaRenderer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](title: string, player: MediaPlayer, capabilities: RygelCore.PluginCapabilities): MediaRenderer;

        // Signals

        connect<K extends keyof MediaRenderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaRenderer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MediaRenderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaRenderer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MediaRenderer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MediaRenderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    type MediaRendererPluginClass = typeof MediaRendererPlugin;
    abstract class MediaRendererPluginPrivate {
        static $gtype: GObject.GType<MediaRendererPluginPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MediaRendererClass = typeof MediaRenderer;
    abstract class MediaRendererPrivate {
        static $gtype: GObject.GType<MediaRendererPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MediaPlayerIface = typeof MediaPlayer;
    type PlayerControllerIface = typeof PlayerController;
    namespace MediaPlayer {
        /**
         * Interface for implementing MediaPlayer.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_seek(time: number): boolean;
            vfunc_seek_bytes(bytes: number): boolean;
            vfunc_get_protocols(): string[];
            vfunc_get_mime_types(): string[];
            vfunc_get_playback_state(): string;
            vfunc_set_playback_state(value: string): void;
            vfunc_get_allowed_playback_speeds(): string[];
            vfunc_get_playback_speed(): string;
            vfunc_set_playback_speed(value: string): void;
            vfunc_get_uri(): string | null;
            vfunc_set_uri(value?: string | null): void;
            vfunc_get_volume(): number;
            vfunc_set_volume(value: number): void;
            vfunc_get_duration(): number;
            vfunc_get_size(): number;
            vfunc_get_metadata(): string | null;
            vfunc_set_metadata(value?: string | null): void;
            vfunc_get_mime_type(): string | null;
            vfunc_set_mime_type(value?: string | null): void;
            vfunc_get_can_seek(): boolean;
            vfunc_get_can_seek_bytes(): boolean;
            vfunc_get_content_features(): string | null;
            vfunc_set_content_features(value?: string | null): void;
            vfunc_get_position(): number;
            vfunc_get_byte_position(): number;
            vfunc_get_user_agent(): string | null;
            vfunc_set_user_agent(value?: string | null): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            playback_state: string;
            playbackState: string;
            allowed_playback_speeds: string[];
            allowedPlaybackSpeeds: string[];
            playback_speed: string;
            playbackSpeed: string;
            uri: string;
            volume: number;
            duration: number;
            size: number;
            metadata: string;
            mime_type: string;
            mimeType: string;
            can_seek: boolean;
            canSeek: boolean;
            can_seek_bytes: boolean;
            canSeekBytes: boolean;
            content_features: string;
            contentFeatures: string;
            position: number;
            byte_position: number;
            bytePosition: number;
            user_agent: string;
            userAgent: string;
        }
    }

    export interface MediaPlayerNamespace {
        $gtype: GObject.GType<MediaPlayer>;
        prototype: MediaPlayer;
    }
    interface MediaPlayer extends GObject.Object, MediaPlayer.Interface {
        // Properties

        get playback_state(): string;
        set playback_state(val: string);
        get playbackState(): string;
        set playbackState(val: string);
        get allowed_playback_speeds(): string[];
        get allowedPlaybackSpeeds(): string[];
        get playback_speed(): string;
        set playback_speed(val: string);
        get playbackSpeed(): string;
        set playbackSpeed(val: string);
        get uri(): string;
        set uri(val: string);
        get volume(): number;
        set volume(val: number);
        get duration(): number;
        get size(): number;
        get metadata(): string;
        set metadata(val: string);
        get mime_type(): string;
        set mime_type(val: string);
        get mimeType(): string;
        set mimeType(val: string);
        get can_seek(): boolean;
        get canSeek(): boolean;
        get can_seek_bytes(): boolean;
        get canSeekBytes(): boolean;
        get content_features(): string;
        set content_features(val: string);
        get contentFeatures(): string;
        set contentFeatures(val: string);
        get position(): number;
        get byte_position(): number;
        get bytePosition(): number;
        get user_agent(): string;
        set user_agent(val: string);
        get userAgent(): string;
        set userAgent(val: string);

        // Methods

        seek(time: number): boolean;
        seek_bytes(bytes: number): boolean;
        get_protocols(): string[];
        get_mime_types(): string[];
        play_speed_to_double(speed: string): number;
        get_playback_state(): string;
        set_playback_state(value: string): void;
        get_allowed_playback_speeds(): string[];
        get_playback_speed(): string;
        set_playback_speed(value: string): void;
        get_uri(): string | null;
        set_uri(value?: string | null): void;
        get_volume(): number;
        set_volume(value: number): void;
        get_duration(): number;
        get_size(): number;
        get_metadata(): string | null;
        set_metadata(value?: string | null): void;
        get_mime_type(): string | null;
        set_mime_type(value?: string | null): void;
        get_can_seek(): boolean;
        get_can_seek_bytes(): boolean;
        get_content_features(): string | null;
        set_content_features(value?: string | null): void;
        get_duration_as_str(): string;
        get_position(): number;
        get_byte_position(): number;
        get_position_as_str(): string;
        get_user_agent(): string | null;
        set_user_agent(value?: string | null): void;
        get_protocol_info(): string;
    }

    export const MediaPlayer: MediaPlayerNamespace & {
        new (): MediaPlayer; // This allows `obj instanceof MediaPlayer`
    };

    namespace PlayerController {
        /**
         * Interface for implementing PlayerController.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_next(): boolean;
            vfunc_previous(): boolean;
            vfunc_set_single_play_uri(
                uri: string,
                metadata: string,
                mime?: string | null,
                features?: string | null,
            ): void;
            vfunc_set_playlist_uri(uri: string, metadata: string, collection: GUPnPAV.MediaCollection): void;
            vfunc_set_next_single_play_uri(
                uri: string,
                metadata: string,
                mime?: string | null,
                features?: string | null,
            ): void;
            vfunc_set_next_playlist_uri(uri: string, metadata: string, collection: GUPnPAV.MediaCollection): void;
            vfunc_is_play_mode_valid(play_mode: string): boolean;
            vfunc_get_playback_state(): string;
            vfunc_set_playback_state(value: string): void;
            vfunc_get_n_tracks(): number;
            vfunc_set_n_tracks(value: number): void;
            vfunc_get_track(): number;
            vfunc_set_track(value: number): void;
            vfunc_get_uri(): string;
            vfunc_set_uri(value: string): void;
            vfunc_get_metadata(): string;
            vfunc_set_metadata(value: string): void;
            vfunc_get_track_uri(): string;
            vfunc_set_track_uri(value: string): void;
            vfunc_get_track_metadata(): string;
            vfunc_set_track_metadata(value: string): void;
            vfunc_get_next_uri(): string;
            vfunc_set_next_uri(value: string): void;
            vfunc_get_next_metadata(): string;
            vfunc_set_next_metadata(value: string): void;
            vfunc_get_current_transport_actions(): string;
            vfunc_get_play_mode(): string;
            vfunc_set_play_mode(value: string): void;
            vfunc_get_can_pause(): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            playback_state: string;
            playbackState: string;
            n_tracks: number;
            nTracks: number;
            track: number;
            uri: string;
            metadata: string;
            track_uri: string;
            trackUri: string;
            track_metadata: string;
            trackMetadata: string;
            next_uri: string;
            nextUri: string;
            next_metadata: string;
            nextMetadata: string;
            current_transport_actions: string;
            currentTransportActions: string;
            play_mode: string;
            playMode: string;
            can_pause: boolean;
            canPause: boolean;
        }
    }

    export interface PlayerControllerNamespace {
        $gtype: GObject.GType<PlayerController>;
        prototype: PlayerController;
    }
    interface PlayerController extends GObject.Object, PlayerController.Interface {
        // Properties

        get playback_state(): string;
        set playback_state(val: string);
        get playbackState(): string;
        set playbackState(val: string);
        get n_tracks(): number;
        set n_tracks(val: number);
        get nTracks(): number;
        set nTracks(val: number);
        get track(): number;
        set track(val: number);
        get uri(): string;
        set uri(val: string);
        get metadata(): string;
        set metadata(val: string);
        get track_uri(): string;
        set track_uri(val: string);
        get trackUri(): string;
        set trackUri(val: string);
        get track_metadata(): string;
        set track_metadata(val: string);
        get trackMetadata(): string;
        set trackMetadata(val: string);
        get next_uri(): string;
        set next_uri(val: string);
        get nextUri(): string;
        set nextUri(val: string);
        get next_metadata(): string;
        set next_metadata(val: string);
        get nextMetadata(): string;
        set nextMetadata(val: string);
        get current_transport_actions(): string;
        get currentTransportActions(): string;
        get play_mode(): string;
        set play_mode(val: string);
        get playMode(): string;
        set playMode(val: string);
        get can_pause(): boolean;
        get canPause(): boolean;

        // Methods

        next(): boolean;
        previous(): boolean;
        set_single_play_uri(uri: string, metadata: string, mime?: string | null, features?: string | null): void;
        set_playlist_uri(uri: string, metadata: string, collection: GUPnPAV.MediaCollection): void;
        set_next_single_play_uri(uri: string, metadata: string, mime?: string | null, features?: string | null): void;
        set_next_playlist_uri(uri: string, metadata: string, collection: GUPnPAV.MediaCollection): void;
        is_play_mode_valid(play_mode: string): boolean;
        unescape(input: string): string;
        get_playback_state(): string;
        set_playback_state(value: string): void;
        get_n_tracks(): number;
        set_n_tracks(value: number): void;
        get_track(): number;
        set_track(value: number): void;
        get_uri(): string;
        set_uri(value: string): void;
        get_metadata(): string;
        set_metadata(value: string): void;
        get_track_uri(): string;
        set_track_uri(value: string): void;
        get_track_metadata(): string;
        set_track_metadata(value: string): void;
        get_next_uri(): string;
        set_next_uri(value: string): void;
        get_next_metadata(): string;
        set_next_metadata(value: string): void;
        get_current_transport_actions(): string;
        get_play_mode(): string;
        set_play_mode(value: string): void;
        get_can_pause(): boolean;
    }

    export const PlayerController: PlayerControllerNamespace & {
        new (): PlayerController; // This allows `obj instanceof PlayerController`
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

export default RygelRenderer;

// END
