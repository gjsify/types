// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GUPnPDLNA-1.0
 */

import type libxml2 from './libxml2-2.0';
import type GstPbutils from './GstPbutils-1.0';
import type GstVideo from './GstVideo-1.0';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstAudio from './GstAudio-1.0';

export namespace GUPnPDLNA {

interface Discoverer_ConstructProps extends GstPbutils.Discoverer_ConstructProps {

    // Own constructor properties of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer

    extendedMode?: boolean | null
    relaxedMode?: boolean | null
}

/**
 * Signal callback interface for `done`
 */
interface Discoverer_DoneSignalCallback {
    (dlna: Information, err: GLib.Error): void
}

interface Discoverer {

    // Own properties of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer

    readonly extendedMode: boolean
    readonly relaxedMode: boolean

    // Own fields of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer

    parent: GstPbutils.Discoverer

    // Owm methods of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer

    /**
     * Queues `uri` for metadata discovery. When discovery is completed, the
     * "discovered" signal is emitted on `discoverer`.
     * @param uri URI to gather metadata for
     */
    discoverUri(uri: string): boolean

    // Overloads of discoverUri

    /**
     * Synchronously discovers the given `uri`.
     * 
     * A copy of `uri` will be made internally, so the caller can safely g_free()
     * afterwards.
     * @param uri The URI to run on.
     */
    discoverUri(uri: string): GstPbutils.DiscovererInfo
    discoverUri(...args: any[]): any
    discoverUri(args_or_uri: any[] | string): boolean | GstPbutils.DiscovererInfo | any
    /**
     * Synchronously gathers metadata for `uri`.
     * @param uri URI to gather metadata for
     */
    discoverUriSync(uri: string): Information
    getExtendedMode(): boolean
    /**
     * Given `name,` this finds the corresponding DLNA profile information (stored
     * as a #GUPnPDLNAProfile).
     * @param name The name of the DLNA profile to be retrieved
     */
    getProfile(name: string): Profile
    getRelaxedMode(): boolean
    /**
     * Retuns a list of the all the DLNA profiles supported by `self`.
     */
    listProfiles(): Profile[]

    // Own signals of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer

    connect(sigName: "done", callback: Discoverer_DoneSignalCallback): number
    on(sigName: "done", callback: Discoverer_DoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "done", callback: Discoverer_DoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "done", callback: Discoverer_DoneSignalCallback): NodeJS.EventEmitter
    emit(sigName: "done", err: GLib.Error, ...args: any[]): void

    // Class property signals of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer

    connect(sigName: "notify::extended-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::extended-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extended-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extended-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extended-mode", ...args: any[]): void
    connect(sigName: "notify::relaxed-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::relaxed-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::relaxed-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::relaxed-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::relaxed-mode", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: "notify::use-cache", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-cache", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The top-level object used to for metadata extraction.
 * @class 
 */
class Discoverer extends GstPbutils.Discoverer {

    // Own properties of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer

    static name: string
    static $gtype: GObject.GType<Discoverer>

    // Constructors of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer

    constructor(config?: Discoverer_ConstructProps) 
    /**
     * Creates a new #GUPnPDLNADiscoverer object with the given default timeout
     * value.
     * @constructor 
     * @param timeout default discovery timeout, in nanoseconds
     * @param relaxedMode set to TRUE, to enable relaxed mode support. FALSE otherwise
     * @param extendedMode set to TRUE, to enable extended mode support. FALSE otherwise
     */
    constructor(timeout: Gst.ClockTime, relaxedMode: boolean, extendedMode: boolean) 
    /**
     * Creates a new #GUPnPDLNADiscoverer object with the given default timeout
     * value.
     * @constructor 
     * @param timeout default discovery timeout, in nanoseconds
     * @param relaxedMode set to TRUE, to enable relaxed mode support. FALSE otherwise
     * @param extendedMode set to TRUE, to enable extended mode support. FALSE otherwise
     */
    static new(timeout: Gst.ClockTime, relaxedMode: boolean, extendedMode: boolean): Discoverer

    // Overloads of new

    /**
     * Creates a new #GstDiscoverer with the provided timeout.
     * @constructor 
     * @param timeout timeout per file, in nanoseconds. Allowed are values between     one second (#GST_SECOND) and one hour (3600 * #GST_SECOND)
     */
    static new(timeout: Gst.ClockTime): GstPbutils.Discoverer
    _init(config?: Discoverer_ConstructProps): void
}

interface Information_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GUPnPDLNA-1.0.GUPnPDLNA.Information

    info?: GstPbutils.DiscovererInfo | null
    mime?: string | null
    name?: string | null
}

interface Information {

    // Own properties of GUPnPDLNA-1.0.GUPnPDLNA.Information

    readonly info: GstPbutils.DiscovererInfo
    readonly mime: string
    readonly name: string

    // Own fields of GUPnPDLNA-1.0.GUPnPDLNA.Information

    parent: GObject.Object

    // Owm methods of GUPnPDLNA-1.0.GUPnPDLNA.Information

    getInfo(): GstPbutils.DiscovererInfo
    getMime(): string
    getName(): string

    // Class property signals of GUPnPDLNA-1.0.GUPnPDLNA.Information

    connect(sigName: "notify::info", callback: (...args: any[]) => void): number
    on(sigName: "notify::info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::info", ...args: any[]): void
    connect(sigName: "notify::mime", callback: (...args: any[]) => void): number
    on(sigName: "notify::mime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mime", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Information extends GObject.Object {

    // Own properties of GUPnPDLNA-1.0.GUPnPDLNA.Information

    static name: string
    static $gtype: GObject.GType<Information>

    // Constructors of GUPnPDLNA-1.0.GUPnPDLNA.Information

    constructor(config?: Information_ConstructProps) 
    /**
     * Creates a new #GUPnPDLNAInformation object with the given properties.
     * @constructor 
     * @param name DLNA media profile name corresponding to the media
     * @param mime DLNA MIME type for the media
     * @param info #GstDiscovererInfo type with additional metadata about the stream
     */
    constructor(name: string, mime: string, info: GstPbutils.DiscovererInfo) 
    /**
     * Creates a new #GUPnPDLNAInformation object with the given properties.
     * @constructor 
     * @param name DLNA media profile name corresponding to the media
     * @param mime DLNA MIME type for the media
     * @param info #GstDiscovererInfo type with additional metadata about the stream
     */
    static new(name: string, mime: string, info: GstPbutils.DiscovererInfo): Information
    _init(config?: Information_ConstructProps): void
}

interface Profile_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GUPnPDLNA-1.0.GUPnPDLNA.Profile

    extended?: boolean | null
    mime?: string | null
    name?: string | null
}

interface Profile {

    // Own properties of GUPnPDLNA-1.0.GUPnPDLNA.Profile

    readonly encodingProfile: GstPbutils.EncodingProfile
    readonly extended: boolean
    readonly mime: string
    readonly name: string

    // Own fields of GUPnPDLNA-1.0.GUPnPDLNA.Profile

    parent: GObject.Object

    // Owm methods of GUPnPDLNA-1.0.GUPnPDLNA.Profile

    getEncodingProfile(): GstPbutils.EncodingProfile
    getExtended(): boolean
    getMime(): string
    getName(): string

    // Class property signals of GUPnPDLNA-1.0.GUPnPDLNA.Profile

    connect(sigName: "notify::encoding-profile", callback: (...args: any[]) => void): number
    on(sigName: "notify::encoding-profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::encoding-profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::encoding-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::encoding-profile", ...args: any[]): void
    connect(sigName: "notify::extended", callback: (...args: any[]) => void): number
    on(sigName: "notify::extended", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extended", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extended", ...args: any[]): void
    connect(sigName: "notify::mime", callback: (...args: any[]) => void): number
    on(sigName: "notify::mime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mime", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The top-level object used for the in-memory representation of the DLNA
 * Profiles.
 * @class 
 */
class Profile extends GObject.Object {

    // Own properties of GUPnPDLNA-1.0.GUPnPDLNA.Profile

    static name: string
    static $gtype: GObject.GType<Profile>

    // Constructors of GUPnPDLNA-1.0.GUPnPDLNA.Profile

    constructor(config?: Profile_ConstructProps) 
    _init(config?: Profile_ConstructProps): void
}

interface DiscovererClass {

    // Own fields of GUPnPDLNA-1.0.GUPnPDLNA.DiscovererClass

    parentClass: GstPbutils.DiscovererClass
    done: (discoverer: Discoverer, dlna: Information, err: GLib.Error) => void
}

abstract class DiscovererClass {

    // Own properties of GUPnPDLNA-1.0.GUPnPDLNA.DiscovererClass

    static name: string
}

interface InformationClass {

    // Own fields of GUPnPDLNA-1.0.GUPnPDLNA.InformationClass

    parentClass: GObject.ObjectClass
}

abstract class InformationClass {

    // Own properties of GUPnPDLNA-1.0.GUPnPDLNA.InformationClass

    static name: string
}

interface ProfileClass {

    // Own fields of GUPnPDLNA-1.0.GUPnPDLNA.ProfileClass

    parentClass: GObject.ObjectClass
}

abstract class ProfileClass {

    // Own properties of GUPnPDLNA-1.0.GUPnPDLNA.ProfileClass

    static name: string
}

}
export default GUPnPDLNA;