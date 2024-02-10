/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './rygelrenderer-2.8-ambient.d.ts';
import './rygelrenderer-2.8-import.d.ts';
/**
 * RygelRenderer-2.8
 */

import type RygelCore from '@girs/rygelcore-2.8';
import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GUPnP from '@girs/gupnp-1.6';
import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-3.0';
import type GSSDP from '@girs/gssdp-1.6';
import type GUPnPAV from '@girs/gupnpav-1.0';

export namespace RygelRenderer {
    module MediaRendererPlugin {
        // Constructor properties interface
    }

    class MediaRendererPlugin extends RygelCore.Plugin {
        // Own properties of RygelRenderer-2.8.MediaRendererPlugin

        supported_profiles: RygelCore.DLNAProfile[];
        supportedProfiles: RygelCore.DLNAProfile[];

        // Constructors of RygelRenderer-2.8.MediaRendererPlugin

        static ['new'](
            name: string,
            title: string | null,
            description: string | null,
            capabilities: RygelCore.PluginCapabilities,
        ): MediaRendererPlugin;

        // Owm methods of RygelRenderer-2.8.MediaRendererPlugin

        get_player(): MediaPlayer | null;
        get_controller(): PlayerController;
        get_protocol_info(): string;
        get_supported_profiles(): RygelCore.DLNAProfile[];
        set_supported_profiles(value: RygelCore.DLNAProfile[]): void;
    }

    module MediaRenderer {
        // Constructor properties interface
    }

    class MediaRenderer extends RygelCore.MediaDevice {
        // Own properties of RygelRenderer-2.8.MediaRenderer

        player: MediaPlayer;

        // Constructors of RygelRenderer-2.8.MediaRenderer

        static ['new'](title: string, player: MediaPlayer, capabilities: RygelCore.PluginCapabilities): MediaRenderer;
    }

    class MediaRendererPluginClass {}

    class MediaRendererPluginPrivate {}

    class MediaRendererClass {}

    class MediaRendererPrivate {}

    class MediaPlayerIface {}

    class PlayerControllerIface {}

    interface MediaPlayer {
        // Own properties of RygelRenderer-2.8.MediaPlayer

        playback_state: string;
        playbackState: string;
        readonly allowed_playback_speeds: string[];
        readonly allowedPlaybackSpeeds: string[];
        playback_speed: string;
        playbackSpeed: string;
        uri: string;
        volume: number;
        readonly duration: number;
        readonly size: number;
        metadata: string;
        mime_type: string;
        mimeType: string;
        readonly can_seek: boolean;
        readonly canSeek: boolean;
        readonly can_seek_bytes: boolean;
        readonly canSeekBytes: boolean;
        content_features: string;
        contentFeatures: string;
        readonly position: number;
        readonly byte_position: number;
        readonly bytePosition: number;
        user_agent: string;
        userAgent: string;

        // Owm methods of RygelRenderer-2.8.MediaPlayer

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

        // Own virtual methods of RygelRenderer-2.8.MediaPlayer

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

    interface PlayerController {
        // Own properties of RygelRenderer-2.8.PlayerController

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
        readonly current_transport_actions: string;
        readonly currentTransportActions: string;
        play_mode: string;
        playMode: string;
        readonly can_pause: boolean;
        readonly canPause: boolean;

        // Owm methods of RygelRenderer-2.8.PlayerController

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

        // Own virtual methods of RygelRenderer-2.8.PlayerController

        vfunc_next(): boolean;
        vfunc_previous(): boolean;
        vfunc_set_single_play_uri(uri: string, metadata: string, mime?: string | null, features?: string | null): void;
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
