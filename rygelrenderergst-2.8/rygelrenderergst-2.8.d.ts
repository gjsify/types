
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './rygelrenderergst-2.8-ambient.d.ts';
import './rygelrenderergst-2.8-import.d.ts';
/**
 * RygelRendererGst-2.8
 */

import type RygelRenderer from '@girs/rygelrenderer-2.8';
import type RygelCore from '@girs/rygelcore-2.8';
import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GUPnP from '@girs/gupnp-1.6';
import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-3.0';
import type GSSDP from '@girs/gssdp-1.6';
import type GUPnPAV from '@girs/gupnpav-1.0';
import type Gst from '@girs/gst-1.0';
import type GModule from '@girs/gmodule-2.0';

export namespace RygelRendererGst {

enum PlaybinPlayerError {
    NO_ELEMENT,
}
module PlaybinPlayer {

    // Constructor properties interface

    interface ConstructorProperties extends RygelRenderer.MediaPlayer.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelRendererGst-2.8.RygelRendererGst.PlaybinPlayer

        playbin?: Gst.Element | null
    }

}

interface PlaybinPlayer extends RygelRenderer.MediaPlayer {

    // Own properties of RygelRendererGst-2.8.RygelRendererGst.PlaybinPlayer

    playbin: Gst.Element
    readonly supported_profiles: RygelCore.DLNAProfile[]
    readonly supportedProfiles: RygelCore.DLNAProfile[]

    // Owm methods of RygelRendererGst-2.8.RygelRendererGst.PlaybinPlayer

    get_playbin(): Gst.Element
    get_supported_profiles(): RygelCore.DLNAProfile[]

    // Class property signals of RygelRendererGst-2.8.RygelRendererGst.PlaybinPlayer

    connect(sigName: "notify::playbin", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playbin", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::playbin", ...args: any[]): void
    connect(sigName: "notify::supported-profiles", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-profiles", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::supported-profiles", ...args: any[]): void
    connect(sigName: "notify::playback-state", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-state", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::playback-state", ...args: any[]): void
    connect(sigName: "notify::allowed-playback-speeds", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-playback-speeds", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allowed-playback-speeds", ...args: any[]): void
    connect(sigName: "notify::playback-speed", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-speed", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::playback-speed", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::volume", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::volume", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::metadata", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::metadata", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::can-seek", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-seek", ...args: any[]): void
    connect(sigName: "notify::can-seek-bytes", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek-bytes", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-seek-bytes", ...args: any[]): void
    connect(sigName: "notify::content-features", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-features", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-features", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::byte-position", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-position", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::byte-position", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PlaybinPlayer extends GObject.Object {

    // Own properties of RygelRendererGst-2.8.RygelRendererGst.PlaybinPlayer

    static name: string
    static $gtype: GObject.GType<PlaybinPlayer>

    // Constructors of RygelRendererGst-2.8.RygelRendererGst.PlaybinPlayer

    constructor(config?: PlaybinPlayer.ConstructorProperties) 
    _init(config?: PlaybinPlayer.ConstructorProperties): void
    static instance(): PlaybinPlayer
}

module PlaybinRenderer {

    // Constructor properties interface

    interface ConstructorProperties extends RygelRenderer.MediaRenderer.ConstructorProperties {
    }

}

interface PlaybinRenderer {

    // Owm methods of RygelRendererGst-2.8.RygelRendererGst.PlaybinRenderer

    get_playbin(): Gst.Element | null

    // Class property signals of RygelRendererGst-2.8.RygelRendererGst.PlaybinRenderer

    connect(sigName: "notify::player", callback: (($obj: PlaybinRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::player", callback: (($obj: PlaybinRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::player", ...args: any[]): void
    connect(sigName: "notify::plugin", callback: (($obj: PlaybinRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: PlaybinRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::plugin", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: PlaybinRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: PlaybinRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (($obj: PlaybinRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: PlaybinRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PlaybinRenderer extends RygelRenderer.MediaRenderer {

    // Own properties of RygelRendererGst-2.8.RygelRendererGst.PlaybinRenderer

    static name: string
    static $gtype: GObject.GType<PlaybinRenderer>

    // Constructors of RygelRendererGst-2.8.RygelRendererGst.PlaybinRenderer

    constructor(config?: PlaybinRenderer.ConstructorProperties) 
    constructor(title: string) 
    static new(title: string): PlaybinRenderer

    // Overloads of new

    static new(title: string, player: RygelRenderer.MediaPlayer, capabilities: RygelCore.PluginCapabilities): RygelRenderer.MediaRenderer
    _init(config?: PlaybinRenderer.ConstructorProperties): void
}

interface PlaybinPlayerClass {
}

abstract class PlaybinPlayerClass {

    // Own properties of RygelRendererGst-2.8.RygelRendererGst.PlaybinPlayerClass

    static name: string
}

interface PlaybinPlayerPrivate {
}

class PlaybinPlayerPrivate {

    // Own properties of RygelRendererGst-2.8.RygelRendererGst.PlaybinPlayerPrivate

    static name: string
}

interface PlaybinRendererClass {
}

abstract class PlaybinRendererClass {

    // Own properties of RygelRendererGst-2.8.RygelRendererGst.PlaybinRendererClass

    static name: string
}

interface PlaybinRendererPrivate {
}

class PlaybinRendererPrivate {

    // Own properties of RygelRendererGst-2.8.RygelRendererGst.PlaybinRendererPrivate

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default RygelRendererGst;
// END