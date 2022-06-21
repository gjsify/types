// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * RygelRenderer-2.6
 */

import type * as Gjs from './Gjs';
import type RygelCore from './RygelCore-2.6';
import type GLib from './GLib-2.0';
import type Gee from './Gee-0.8';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GUPnP from './GUPnP-1.2';
import type libxml2 from './libxml2-2.0';
import type Soup from './Soup-2.4';
import type GSSDP from './GSSDP-1.2';
import type GUPnPAV from './GUPnPAV-1.0';

export namespace RygelRenderer {

interface MediaPlayer_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of RygelRenderer-2.6.RygelRenderer.MediaPlayer

    playback_state?: string | null
    playback_speed?: string | null
    uri?: string | null
    volume?: number | null
    metadata?: string | null
    mime_type?: string | null
    content_features?: string | null
    user_agent?: string | null
}

interface MediaPlayer extends GObject.Object {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaPlayer

    playback_state: string
    readonly allowed_playback_speeds: string[]
    playback_speed: string
    uri: string
    volume: number
    readonly duration: number
    readonly size: number
    metadata: string
    mime_type: string
    readonly can_seek: boolean
    readonly can_seek_bytes: boolean
    content_features: string
    readonly position: number
    readonly byte_position: number
    user_agent: string

    // Owm methods of RygelRenderer-2.6.RygelRenderer.MediaPlayer

    seek(time: number): boolean
    seek_bytes(bytes: number): boolean
    get_protocols(): string[]
    get_mime_types(): string[]
    play_speed_to_double(speed: string): number
    get_playback_state(): string
    set_playback_state(value: string): void
    get_allowed_playback_speeds(): string[]
    get_playback_speed(): string
    set_playback_speed(value: string): void
    get_uri(): string | null
    set_uri(value: string | null): void
    get_volume(): number
    set_volume(value: number): void
    get_duration(): number
    get_size(): number
    get_metadata(): string | null
    set_metadata(value: string | null): void
    get_mime_type(): string | null
    set_mime_type(value: string | null): void
    get_can_seek(): boolean
    get_can_seek_bytes(): boolean
    get_content_features(): string | null
    set_content_features(value: string | null): void
    get_duration_as_str(): string
    get_position(): number
    get_byte_position(): number
    get_position_as_str(): string
    get_user_agent(): string | null
    set_user_agent(value: string | null): void
    get_protocol_info(): string

    // Own virtual methods of RygelRenderer-2.6.RygelRenderer.MediaPlayer

    vfunc_seek(time: number): boolean
    vfunc_seek_bytes(bytes: number): boolean
    vfunc_get_protocols(): string[]
    vfunc_get_mime_types(): string[]
    vfunc_get_playback_state(): string
    vfunc_set_playback_state(value: string): void
    vfunc_get_allowed_playback_speeds(): string[]
    vfunc_get_playback_speed(): string
    vfunc_set_playback_speed(value: string): void
    vfunc_get_uri(): string | null
    vfunc_set_uri(value: string | null): void
    vfunc_get_volume(): number
    vfunc_set_volume(value: number): void
    vfunc_get_duration(): number
    vfunc_get_size(): number
    vfunc_get_metadata(): string | null
    vfunc_set_metadata(value: string | null): void
    vfunc_get_mime_type(): string | null
    vfunc_set_mime_type(value: string | null): void
    vfunc_get_can_seek(): boolean
    vfunc_get_can_seek_bytes(): boolean
    vfunc_get_content_features(): string | null
    vfunc_set_content_features(value: string | null): void
    vfunc_get_position(): number
    vfunc_get_byte_position(): number
    vfunc_get_user_agent(): string | null
    vfunc_set_user_agent(value: string | null): void

    // Class property signals of RygelRenderer-2.6.RygelRenderer.MediaPlayer

    connect(sigName: "notify::playback-state", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-state", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::playback-state", ...args: any[]): void
    connect(sigName: "notify::allowed-playback-speeds", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-playback-speeds", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allowed-playback-speeds", ...args: any[]): void
    connect(sigName: "notify::playback-speed", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-speed", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::playback-speed", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::volume", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::volume", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::metadata", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::metadata", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::can-seek", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-seek", ...args: any[]): void
    connect(sigName: "notify::can-seek-bytes", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek-bytes", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-seek-bytes", ...args: any[]): void
    connect(sigName: "notify::content-features", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-features", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-features", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::byte-position", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-position", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::byte-position", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: MediaPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MediaPlayer {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaPlayer

    static name: string
    static $gtype: GObject.GType<MediaPlayer>

    // Constructors of RygelRenderer-2.6.RygelRenderer.MediaPlayer

    constructor(config?: MediaPlayer_ConstructProps) 
    _init(config?: MediaPlayer_ConstructProps): void
}

interface PlayerController_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of RygelRenderer-2.6.RygelRenderer.PlayerController

    playback_state?: string | null
    n_tracks?: number | null
    track?: number | null
    uri?: string | null
    metadata?: string | null
    track_uri?: string | null
    track_metadata?: string | null
    next_uri?: string | null
    next_metadata?: string | null
    play_mode?: string | null
}

interface PlayerController extends GObject.Object {

    // Own properties of RygelRenderer-2.6.RygelRenderer.PlayerController

    playback_state: string
    n_tracks: number
    track: number
    uri: string
    metadata: string
    track_uri: string
    track_metadata: string
    next_uri: string
    next_metadata: string
    readonly current_transport_actions: string
    play_mode: string
    readonly can_pause: boolean

    // Owm methods of RygelRenderer-2.6.RygelRenderer.PlayerController

    next(): boolean
    previous(): boolean
    set_single_play_uri(uri: string, metadata: string, mime: string | null, features: string | null): void
    set_playlist_uri(uri: string, metadata: string, collection: GUPnPAV.MediaCollection): void
    set_next_single_play_uri(uri: string, metadata: string, mime: string | null, features: string | null): void
    set_next_playlist_uri(uri: string, metadata: string, collection: GUPnPAV.MediaCollection): void
    is_play_mode_valid(play_mode: string): boolean
    unescape(input: string): string
    get_playback_state(): string
    set_playback_state(value: string): void
    get_n_tracks(): number
    set_n_tracks(value: number): void
    get_track(): number
    set_track(value: number): void
    get_uri(): string
    set_uri(value: string): void
    get_metadata(): string
    set_metadata(value: string): void
    get_track_uri(): string
    set_track_uri(value: string): void
    get_track_metadata(): string
    set_track_metadata(value: string): void
    get_next_uri(): string
    set_next_uri(value: string): void
    get_next_metadata(): string
    set_next_metadata(value: string): void
    get_current_transport_actions(): string
    get_play_mode(): string
    set_play_mode(value: string): void
    get_can_pause(): boolean

    // Own virtual methods of RygelRenderer-2.6.RygelRenderer.PlayerController

    vfunc_next(): boolean
    vfunc_previous(): boolean
    vfunc_set_single_play_uri(uri: string, metadata: string, mime: string | null, features: string | null): void
    vfunc_set_playlist_uri(uri: string, metadata: string, collection: GUPnPAV.MediaCollection): void
    vfunc_set_next_single_play_uri(uri: string, metadata: string, mime: string | null, features: string | null): void
    vfunc_set_next_playlist_uri(uri: string, metadata: string, collection: GUPnPAV.MediaCollection): void
    vfunc_is_play_mode_valid(play_mode: string): boolean
    vfunc_get_playback_state(): string
    vfunc_set_playback_state(value: string): void
    vfunc_get_n_tracks(): number
    vfunc_set_n_tracks(value: number): void
    vfunc_get_track(): number
    vfunc_set_track(value: number): void
    vfunc_get_uri(): string
    vfunc_set_uri(value: string): void
    vfunc_get_metadata(): string
    vfunc_set_metadata(value: string): void
    vfunc_get_track_uri(): string
    vfunc_set_track_uri(value: string): void
    vfunc_get_track_metadata(): string
    vfunc_set_track_metadata(value: string): void
    vfunc_get_next_uri(): string
    vfunc_set_next_uri(value: string): void
    vfunc_get_next_metadata(): string
    vfunc_set_next_metadata(value: string): void
    vfunc_get_current_transport_actions(): string
    vfunc_get_play_mode(): string
    vfunc_set_play_mode(value: string): void
    vfunc_get_can_pause(): boolean

    // Class property signals of RygelRenderer-2.6.RygelRenderer.PlayerController

    connect(sigName: "notify::playback-state", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-state", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::playback-state", ...args: any[]): void
    connect(sigName: "notify::n-tracks", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-tracks", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-tracks", ...args: any[]): void
    connect(sigName: "notify::track", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::track", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::metadata", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::metadata", ...args: any[]): void
    connect(sigName: "notify::track-uri", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-uri", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::track-uri", ...args: any[]): void
    connect(sigName: "notify::track-metadata", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-metadata", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::track-metadata", ...args: any[]): void
    connect(sigName: "notify::next-uri", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-uri", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-uri", ...args: any[]): void
    connect(sigName: "notify::next-metadata", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-metadata", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-metadata", ...args: any[]): void
    connect(sigName: "notify::current-transport-actions", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-transport-actions", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-transport-actions", ...args: any[]): void
    connect(sigName: "notify::play-mode", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::play-mode", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::play-mode", ...args: any[]): void
    connect(sigName: "notify::can-pause", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-pause", callback: (($obj: PlayerController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-pause", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PlayerController {

    // Own properties of RygelRenderer-2.6.RygelRenderer.PlayerController

    static name: string
    static $gtype: GObject.GType<PlayerController>

    // Constructors of RygelRenderer-2.6.RygelRenderer.PlayerController

    constructor(config?: PlayerController_ConstructProps) 
    _init(config?: PlayerController_ConstructProps): void
}

interface MediaRendererPlugin_ConstructProps extends RygelCore.Plugin_ConstructProps {

    // Own constructor properties of RygelRenderer-2.6.RygelRenderer.MediaRendererPlugin

    supported_profiles?: RygelCore.DLNAProfile[] | null
}

interface MediaRendererPlugin {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaRendererPlugin

    supported_profiles: RygelCore.DLNAProfile[]

    // Owm methods of RygelRenderer-2.6.RygelRenderer.MediaRendererPlugin

    get_player(): MediaPlayer | null
    get_controller(): PlayerController
    get_protocol_info(): string
    get_supported_profiles(): RygelCore.DLNAProfile[]
    set_supported_profiles(value: RygelCore.DLNAProfile[]): void

    // Own virtual methods of RygelRenderer-2.6.RygelRenderer.MediaRendererPlugin

    vfunc_get_player(): MediaPlayer | null
    vfunc_get_controller(): PlayerController

    // Class property signals of RygelRenderer-2.6.RygelRenderer.MediaRendererPlugin

    connect(sigName: "notify::supported-profiles", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-profiles", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::supported-profiles", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::desc-path", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desc-path", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::desc-path", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::resource-infos", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-infos", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource-infos", ...args: any[]): void
    connect(sigName: "notify::icon-infos", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-infos", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-infos", ...args: any[]): void
    connect(sigName: "notify::default-icons", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-icons", callback: (($obj: MediaRendererPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-icons", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MediaRendererPlugin extends RygelCore.Plugin {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaRendererPlugin

    static name: string
    static $gtype: GObject.GType<MediaRendererPlugin>

    // Constructors of RygelRenderer-2.6.RygelRenderer.MediaRendererPlugin

    constructor(config?: MediaRendererPlugin_ConstructProps) 
    constructor(name: string, title: string | null, description: string | null, capabilities: RygelCore.PluginCapabilities) 
    static new(name: string, title: string | null, description: string | null, capabilities: RygelCore.PluginCapabilities): MediaRendererPlugin

    // Overloads of new

    static new(desc_path: string, name: string, title: string | null, description: string | null, capabilities: RygelCore.PluginCapabilities): RygelCore.Plugin
    /**
     * Create a new #GUPnPResourceFactory object.
     * @constructor 
     */
    static new(): GUPnP.ResourceFactory
    _init(config?: MediaRendererPlugin_ConstructProps): void
}

interface MediaRenderer_ConstructProps extends RygelCore.MediaDevice_ConstructProps {

    // Own constructor properties of RygelRenderer-2.6.RygelRenderer.MediaRenderer

    player?: MediaPlayer | null
}

interface MediaRenderer {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaRenderer

    readonly player: MediaPlayer

    // Class property signals of RygelRenderer-2.6.RygelRenderer.MediaRenderer

    connect(sigName: "notify::player", callback: (($obj: MediaRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::player", callback: (($obj: MediaRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::player", ...args: any[]): void
    connect(sigName: "notify::plugin", callback: (($obj: MediaRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: MediaRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::plugin", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: MediaRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MediaRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (($obj: MediaRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: MediaRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MediaRenderer extends RygelCore.MediaDevice {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaRenderer

    static name: string
    static $gtype: GObject.GType<MediaRenderer>

    // Constructors of RygelRenderer-2.6.RygelRenderer.MediaRenderer

    constructor(config?: MediaRenderer_ConstructProps) 
    constructor(title: string, player: MediaPlayer, capabilities: RygelCore.PluginCapabilities) 
    static new(title: string, player: MediaPlayer, capabilities: RygelCore.PluginCapabilities): MediaRenderer
    _init(config?: MediaRenderer_ConstructProps): void
}

interface MediaRendererPluginClass {

    // Own fields of RygelRenderer-2.6.RygelRenderer.MediaRendererPluginClass

    get_player: (self: MediaRendererPlugin) => MediaPlayer | null
    get_controller: (self: MediaRendererPlugin) => PlayerController
}

abstract class MediaRendererPluginClass {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaRendererPluginClass

    static name: string
}

interface MediaRendererPluginPrivate {
}

class MediaRendererPluginPrivate {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaRendererPluginPrivate

    static name: string
}

interface MediaRendererClass {
}

abstract class MediaRendererClass {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaRendererClass

    static name: string
}

interface MediaRendererPrivate {
}

class MediaRendererPrivate {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaRendererPrivate

    static name: string
}

interface MediaPlayerIface {

    // Own fields of RygelRenderer-2.6.RygelRenderer.MediaPlayerIface

    seek: (self: MediaPlayer, time: number) => boolean
    seek_bytes: (self: MediaPlayer, bytes: number) => boolean
    get_protocols: () => [ /* returnType */ string[], /* result_length1 */ number ]
    get_mime_types: () => [ /* returnType */ string[], /* result_length1 */ number ]
    get_playback_state: (self: MediaPlayer) => string
    set_playback_state: (self: MediaPlayer, value: string) => void
    get_allowed_playback_speeds: () => [ /* returnType */ string[], /* result_length1 */ number ]
    get_playback_speed: (self: MediaPlayer) => string
    set_playback_speed: (self: MediaPlayer, value: string) => void
    get_uri: (self: MediaPlayer) => string | null
    set_uri: (self: MediaPlayer, value: string | null) => void
    get_volume: (self: MediaPlayer) => number
    set_volume: (self: MediaPlayer, value: number) => void
    get_duration: (self: MediaPlayer) => number
    get_size: (self: MediaPlayer) => number
    get_metadata: (self: MediaPlayer) => string | null
    set_metadata: (self: MediaPlayer, value: string | null) => void
    get_mime_type: (self: MediaPlayer) => string | null
    set_mime_type: (self: MediaPlayer, value: string | null) => void
    get_can_seek: (self: MediaPlayer) => boolean
    get_can_seek_bytes: (self: MediaPlayer) => boolean
    get_content_features: (self: MediaPlayer) => string | null
    set_content_features: (self: MediaPlayer, value: string | null) => void
    get_position: (self: MediaPlayer) => number
    get_byte_position: (self: MediaPlayer) => number
    get_user_agent: (self: MediaPlayer) => string | null
    set_user_agent: (self: MediaPlayer, value: string | null) => void
}

abstract class MediaPlayerIface {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaPlayerIface

    static name: string
}

interface PlayerControllerIface {

    // Own fields of RygelRenderer-2.6.RygelRenderer.PlayerControllerIface

    next: (self: PlayerController) => boolean
    previous: (self: PlayerController) => boolean
    set_single_play_uri: (self: PlayerController, uri: string, metadata: string, mime: string | null, features: string | null) => void
    set_playlist_uri: (self: PlayerController, uri: string, metadata: string, collection: GUPnPAV.MediaCollection) => void
    set_next_single_play_uri: (self: PlayerController, uri: string, metadata: string, mime: string | null, features: string | null) => void
    set_next_playlist_uri: (self: PlayerController, uri: string, metadata: string, collection: GUPnPAV.MediaCollection) => void
    is_play_mode_valid: (self: PlayerController, play_mode: string) => boolean
    get_playback_state: (self: PlayerController) => string
    set_playback_state: (self: PlayerController, value: string) => void
    get_n_tracks: (self: PlayerController) => number
    set_n_tracks: (self: PlayerController, value: number) => void
    get_track: (self: PlayerController) => number
    set_track: (self: PlayerController, value: number) => void
    get_uri: (self: PlayerController) => string
    set_uri: (self: PlayerController, value: string) => void
    get_metadata: (self: PlayerController) => string
    set_metadata: (self: PlayerController, value: string) => void
    get_track_uri: (self: PlayerController) => string
    set_track_uri: (self: PlayerController, value: string) => void
    get_track_metadata: (self: PlayerController) => string
    set_track_metadata: (self: PlayerController, value: string) => void
    get_next_uri: (self: PlayerController) => string
    set_next_uri: (self: PlayerController, value: string) => void
    get_next_metadata: (self: PlayerController) => string
    set_next_metadata: (self: PlayerController, value: string) => void
    get_current_transport_actions: (self: PlayerController) => string
    get_play_mode: (self: PlayerController) => string
    set_play_mode: (self: PlayerController, value: string) => void
    get_can_pause: (self: PlayerController) => boolean
}

abstract class PlayerControllerIface {

    // Own properties of RygelRenderer-2.6.RygelRenderer.PlayerControllerIface

    static name: string
}

}
export default RygelRenderer;