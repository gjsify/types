// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * RygelRenderer-2.6
 */

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

    playbackState?: string | null
    playbackSpeed?: string | null
    uri?: string | null
    volume?: number | null
    metadata?: string | null
    mimeType?: string | null
    contentFeatures?: string | null
    userAgent?: string | null
}

interface MediaPlayer extends GObject.Object {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaPlayer

    playbackState: string
    readonly allowedPlaybackSpeeds: string[]
    playbackSpeed: string
    uri: string
    volume: number
    readonly duration: number
    readonly size: number
    metadata: string
    mimeType: string
    readonly canSeek: boolean
    readonly canSeekBytes: boolean
    contentFeatures: string
    readonly position: number
    readonly bytePosition: number
    userAgent: string

    // Owm methods of RygelRenderer-2.6.RygelRenderer.MediaPlayer

    seek(time: number): boolean
    seekBytes(bytes: number): boolean
    getProtocols(): string[]
    getMimeTypes(): string[]
    playSpeedToDouble(speed: string): number
    getPlaybackState(): string
    setPlaybackState(value: string): void
    getAllowedPlaybackSpeeds(): string[]
    getPlaybackSpeed(): string
    setPlaybackSpeed(value: string): void
    getUri(): string | null
    setUri(value: string | null): void
    getVolume(): number
    setVolume(value: number): void
    getDuration(): number
    getSize(): number
    getMetadata(): string | null
    setMetadata(value: string | null): void
    getMimeType(): string | null
    setMimeType(value: string | null): void
    getCanSeek(): boolean
    getCanSeekBytes(): boolean
    getContentFeatures(): string | null
    setContentFeatures(value: string | null): void
    getDurationAsStr(): string
    getPosition(): number
    getBytePosition(): number
    getPositionAsStr(): string
    getUserAgent(): string | null
    setUserAgent(value: string | null): void
    getProtocolInfo(): string

    // Class property signals of RygelRenderer-2.6.RygelRenderer.MediaPlayer

    connect(sigName: "notify::playback-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::playback-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::playback-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::playback-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::playback-state", ...args: any[]): void
    connect(sigName: "notify::allowed-playback-speeds", callback: (...args: any[]) => void): number
    on(sigName: "notify::allowed-playback-speeds", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allowed-playback-speeds", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allowed-playback-speeds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allowed-playback-speeds", ...args: any[]): void
    connect(sigName: "notify::playback-speed", callback: (...args: any[]) => void): number
    on(sigName: "notify::playback-speed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::playback-speed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::playback-speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::playback-speed", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::volume", callback: (...args: any[]) => void): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::volume", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::metadata", callback: (...args: any[]) => void): number
    on(sigName: "notify::metadata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::metadata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::metadata", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::can-seek", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-seek", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-seek", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-seek", ...args: any[]): void
    connect(sigName: "notify::can-seek-bytes", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-seek-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-seek-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-seek-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-seek-bytes", ...args: any[]): void
    connect(sigName: "notify::content-features", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-features", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-features", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-features", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::byte-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::byte-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::byte-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::byte-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::byte-position", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    playbackState?: string | null
    nTracks?: number | null
    track?: number | null
    uri?: string | null
    metadata?: string | null
    trackUri?: string | null
    trackMetadata?: string | null
    nextUri?: string | null
    nextMetadata?: string | null
    playMode?: string | null
}

interface PlayerController extends GObject.Object {

    // Own properties of RygelRenderer-2.6.RygelRenderer.PlayerController

    playbackState: string
    nTracks: number
    track: number
    uri: string
    metadata: string
    trackUri: string
    trackMetadata: string
    nextUri: string
    nextMetadata: string
    readonly currentTransportActions: string
    playMode: string
    readonly canPause: boolean

    // Owm methods of RygelRenderer-2.6.RygelRenderer.PlayerController

    next(): boolean
    previous(): boolean
    setSinglePlayUri(uri: string, metadata: string, mime: string | null, features: string | null): void
    setPlaylistUri(uri: string, metadata: string, collection: GUPnPAV.MediaCollection): void
    setNextSinglePlayUri(uri: string, metadata: string, mime: string | null, features: string | null): void
    setNextPlaylistUri(uri: string, metadata: string, collection: GUPnPAV.MediaCollection): void
    isPlayModeValid(playMode: string): boolean
    unescape(input: string): string
    getPlaybackState(): string
    setPlaybackState(value: string): void
    getNTracks(): number
    setNTracks(value: number): void
    getTrack(): number
    setTrack(value: number): void
    getUri(): string
    setUri(value: string): void
    getMetadata(): string
    setMetadata(value: string): void
    getTrackUri(): string
    setTrackUri(value: string): void
    getTrackMetadata(): string
    setTrackMetadata(value: string): void
    getNextUri(): string
    setNextUri(value: string): void
    getNextMetadata(): string
    setNextMetadata(value: string): void
    getCurrentTransportActions(): string
    getPlayMode(): string
    setPlayMode(value: string): void
    getCanPause(): boolean

    // Class property signals of RygelRenderer-2.6.RygelRenderer.PlayerController

    connect(sigName: "notify::playback-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::playback-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::playback-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::playback-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::playback-state", ...args: any[]): void
    connect(sigName: "notify::n-tracks", callback: (...args: any[]) => void): number
    on(sigName: "notify::n-tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::n-tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::n-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::n-tracks", ...args: any[]): void
    connect(sigName: "notify::track", callback: (...args: any[]) => void): number
    on(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::metadata", callback: (...args: any[]) => void): number
    on(sigName: "notify::metadata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::metadata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::metadata", ...args: any[]): void
    connect(sigName: "notify::track-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-uri", ...args: any[]): void
    connect(sigName: "notify::track-metadata", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-metadata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-metadata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-metadata", ...args: any[]): void
    connect(sigName: "notify::next-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::next-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::next-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::next-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::next-uri", ...args: any[]): void
    connect(sigName: "notify::next-metadata", callback: (...args: any[]) => void): number
    on(sigName: "notify::next-metadata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::next-metadata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::next-metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::next-metadata", ...args: any[]): void
    connect(sigName: "notify::current-transport-actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-transport-actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-transport-actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-transport-actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-transport-actions", ...args: any[]): void
    connect(sigName: "notify::play-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::play-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::play-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::play-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::play-mode", ...args: any[]): void
    connect(sigName: "notify::can-pause", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-pause", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-pause", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-pause", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-pause", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    supportedProfiles?: RygelCore.DLNAProfile[] | null
}

interface MediaRendererPlugin {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaRendererPlugin

    supportedProfiles: RygelCore.DLNAProfile[]

    // Owm methods of RygelRenderer-2.6.RygelRenderer.MediaRendererPlugin

    getPlayer(): MediaPlayer | null
    getController(): PlayerController
    getProtocolInfo(): string
    getSupportedProfiles(): RygelCore.DLNAProfile[]
    setSupportedProfiles(value: RygelCore.DLNAProfile[]): void

    // Class property signals of RygelRenderer-2.6.RygelRenderer.MediaRendererPlugin

    connect(sigName: "notify::supported-profiles", callback: (...args: any[]) => void): number
    on(sigName: "notify::supported-profiles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::supported-profiles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::supported-profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::supported-profiles", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::desc-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::desc-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::desc-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::desc-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::desc-path", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::resource-infos", callback: (...args: any[]) => void): number
    on(sigName: "notify::resource-infos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resource-infos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resource-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resource-infos", ...args: any[]): void
    connect(sigName: "notify::icon-infos", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-infos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-infos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-infos", ...args: any[]): void
    connect(sigName: "notify::default-icons", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-icons", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-icons", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-icons", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    static new(descPath: string, name: string, title: string | null, description: string | null, capabilities: RygelCore.PluginCapabilities): RygelCore.Plugin
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

    connect(sigName: "notify::player", callback: (...args: any[]) => void): number
    on(sigName: "notify::player", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::player", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::player", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::player", ...args: any[]): void
    connect(sigName: "notify::plugin", callback: (...args: any[]) => void): number
    on(sigName: "notify::plugin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::plugin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::plugin", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    getPlayer: (self: MediaRendererPlugin) => MediaPlayer | null
    getController: (self: MediaRendererPlugin) => PlayerController
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
    seekBytes: (self: MediaPlayer, bytes: number) => boolean
    getProtocols: () => [ /* returnType */ string[], /* resultLength1 */ number ]
    getMimeTypes: () => [ /* returnType */ string[], /* resultLength1 */ number ]
    getPlaybackState: (self: MediaPlayer) => string
    setPlaybackState: (self: MediaPlayer, value: string) => void
    getAllowedPlaybackSpeeds: () => [ /* returnType */ string[], /* resultLength1 */ number ]
    getPlaybackSpeed: (self: MediaPlayer) => string
    setPlaybackSpeed: (self: MediaPlayer, value: string) => void
    getUri: (self: MediaPlayer) => string | null
    setUri: (self: MediaPlayer, value: string | null) => void
    getVolume: (self: MediaPlayer) => number
    setVolume: (self: MediaPlayer, value: number) => void
    getDuration: (self: MediaPlayer) => number
    getSize: (self: MediaPlayer) => number
    getMetadata: (self: MediaPlayer) => string | null
    setMetadata: (self: MediaPlayer, value: string | null) => void
    getMimeType: (self: MediaPlayer) => string | null
    setMimeType: (self: MediaPlayer, value: string | null) => void
    getCanSeek: (self: MediaPlayer) => boolean
    getCanSeekBytes: (self: MediaPlayer) => boolean
    getContentFeatures: (self: MediaPlayer) => string | null
    setContentFeatures: (self: MediaPlayer, value: string | null) => void
    getPosition: (self: MediaPlayer) => number
    getBytePosition: (self: MediaPlayer) => number
    getUserAgent: (self: MediaPlayer) => string | null
    setUserAgent: (self: MediaPlayer, value: string | null) => void
}

abstract class MediaPlayerIface {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaPlayerIface

    static name: string
}

interface PlayerControllerIface {

    // Own fields of RygelRenderer-2.6.RygelRenderer.PlayerControllerIface

    next: (self: PlayerController) => boolean
    previous: (self: PlayerController) => boolean
    setSinglePlayUri: (self: PlayerController, uri: string, metadata: string, mime: string | null, features: string | null) => void
    setPlaylistUri: (self: PlayerController, uri: string, metadata: string, collection: GUPnPAV.MediaCollection) => void
    setNextSinglePlayUri: (self: PlayerController, uri: string, metadata: string, mime: string | null, features: string | null) => void
    setNextPlaylistUri: (self: PlayerController, uri: string, metadata: string, collection: GUPnPAV.MediaCollection) => void
    isPlayModeValid: (self: PlayerController, playMode: string) => boolean
    getPlaybackState: (self: PlayerController) => string
    setPlaybackState: (self: PlayerController, value: string) => void
    getNTracks: (self: PlayerController) => number
    setNTracks: (self: PlayerController, value: number) => void
    getTrack: (self: PlayerController) => number
    setTrack: (self: PlayerController, value: number) => void
    getUri: (self: PlayerController) => string
    setUri: (self: PlayerController, value: string) => void
    getMetadata: (self: PlayerController) => string
    setMetadata: (self: PlayerController, value: string) => void
    getTrackUri: (self: PlayerController) => string
    setTrackUri: (self: PlayerController, value: string) => void
    getTrackMetadata: (self: PlayerController) => string
    setTrackMetadata: (self: PlayerController, value: string) => void
    getNextUri: (self: PlayerController) => string
    setNextUri: (self: PlayerController, value: string) => void
    getNextMetadata: (self: PlayerController) => string
    setNextMetadata: (self: PlayerController, value: string) => void
    getCurrentTransportActions: (self: PlayerController) => string
    getPlayMode: (self: PlayerController) => string
    setPlayMode: (self: PlayerController, value: string) => void
    getCanPause: (self: PlayerController) => boolean
}

abstract class PlayerControllerIface {

    // Own properties of RygelRenderer-2.6.RygelRenderer.PlayerControllerIface

    static name: string
}

}
export default RygelRenderer;