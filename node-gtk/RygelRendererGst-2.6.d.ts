// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * RygelRendererGst-2.6
 */

import type RygelRenderer from './RygelRenderer-2.6';
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
import type Gst from './Gst-1.0';
import type GModule from './GModule-2.0';

export namespace RygelRendererGst {

enum PlaybinPlayerError {
    NO_ELEMENT,
}
interface PlaybinPlayer_ConstructProps extends RygelRenderer.MediaPlayer_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of RygelRendererGst-2.6.RygelRendererGst.PlaybinPlayer

    playbin?: Gst.Element | null
}

interface PlaybinPlayer extends RygelRenderer.MediaPlayer {

    // Own properties of RygelRendererGst-2.6.RygelRendererGst.PlaybinPlayer

    playbin: Gst.Element
    readonly supportedProfiles: RygelCore.DLNAProfile[]

    // Owm methods of RygelRendererGst-2.6.RygelRendererGst.PlaybinPlayer

    getPlaybin(): Gst.Element
    getSupportedProfiles(): RygelCore.DLNAProfile[]

    // Class property signals of RygelRendererGst-2.6.RygelRendererGst.PlaybinPlayer

    connect(sigName: "notify::playbin", callback: (...args: any[]) => void): number
    on(sigName: "notify::playbin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::playbin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::playbin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::playbin", ...args: any[]): void
    connect(sigName: "notify::supported-profiles", callback: (...args: any[]) => void): number
    on(sigName: "notify::supported-profiles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::supported-profiles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::supported-profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::supported-profiles", ...args: any[]): void
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

class PlaybinPlayer extends GObject.Object {

    // Own properties of RygelRendererGst-2.6.RygelRendererGst.PlaybinPlayer

    static name: string
    static $gtype: GObject.GType<PlaybinPlayer>

    // Constructors of RygelRendererGst-2.6.RygelRendererGst.PlaybinPlayer

    constructor(config?: PlaybinPlayer_ConstructProps) 
    _init(config?: PlaybinPlayer_ConstructProps): void
    static instance(): PlaybinPlayer
}

interface PlaybinRenderer_ConstructProps extends RygelRenderer.MediaRenderer_ConstructProps {
}

interface PlaybinRenderer {

    // Owm methods of RygelRendererGst-2.6.RygelRendererGst.PlaybinRenderer

    getPlaybin(): Gst.Element | null

    // Class property signals of RygelRendererGst-2.6.RygelRendererGst.PlaybinRenderer

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

class PlaybinRenderer extends RygelRenderer.MediaRenderer {

    // Own properties of RygelRendererGst-2.6.RygelRendererGst.PlaybinRenderer

    static name: string
    static $gtype: GObject.GType<PlaybinRenderer>

    // Constructors of RygelRendererGst-2.6.RygelRendererGst.PlaybinRenderer

    constructor(config?: PlaybinRenderer_ConstructProps) 
    constructor(title: string) 
    static new(title: string): PlaybinRenderer

    // Overloads of new

    static new(title: string, player: RygelRenderer.MediaPlayer, capabilities: RygelCore.PluginCapabilities): RygelRenderer.MediaRenderer
    _init(config?: PlaybinRenderer_ConstructProps): void
}

interface PlaybinPlayerClass {
}

abstract class PlaybinPlayerClass {

    // Own properties of RygelRendererGst-2.6.RygelRendererGst.PlaybinPlayerClass

    static name: string
}

interface PlaybinPlayerPrivate {
}

class PlaybinPlayerPrivate {

    // Own properties of RygelRendererGst-2.6.RygelRendererGst.PlaybinPlayerPrivate

    static name: string
}

interface PlaybinRendererClass {
}

abstract class PlaybinRendererClass {

    // Own properties of RygelRendererGst-2.6.RygelRendererGst.PlaybinRendererClass

    static name: string
}

interface PlaybinRendererPrivate {
}

class PlaybinRendererPrivate {

    // Own properties of RygelRendererGst-2.6.RygelRendererGst.PlaybinRendererPrivate

    static name: string
}

}
export default RygelRendererGst;