
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * GUPnPDLNA-1.0
 */

import type libxml2 from '@girs/libxml2-2.0';
import type GstPbutils from '@girs/gstpbutils-1.0';
import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GstAudio from '@girs/gstaudio-1.0';

export namespace GUPnPDLNA {

module Discoverer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `done`
     */
    interface DoneSignalCallback {
        (dlna: Information, err: GLib.Error): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GstPbutils.Discoverer.ConstructorProperties {

        // Own constructor properties of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer

        extendedMode?: boolean | null
        relaxedMode?: boolean | null
    }

}

interface Discoverer {

    // Own properties of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer

    readonly extendedMode: boolean
    readonly relaxedMode: boolean
    __gtype__: number

    // Own fields of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer

    parent: GstPbutils.Discoverer & GObject.Object

    // Owm methods of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer

    /**
     * Queues `uri` for metadata discovery. When discovery is completed, the
     * "discovered" signal is emitted on `discoverer`.
     * @param uri URI to gather metadata for
     * @returns TRUE if @uri was successfully queued, FALSE otherwise.
     */
    discoverUri(uri: string | null): boolean

    // Overloads of discoverUri

    /**
     * Synchronously discovers the given `uri`.
     * 
     * A copy of `uri` will be made internally, so the caller can safely g_free()
     * afterwards.
     * @param uri The URI to run on.
     * @returns the result of the scanning. Can be %NULL if an error occurred.
     */
    discoverUri(uri: string | null): GstPbutils.DiscovererInfo
    /**
     * Synchronously gathers metadata for `uri`.
     * @param uri URI to gather metadata for
     * @returns a #GUPnPDLNAInformation with the metadata for @uri on success, NULL otherwise
     */
    discoverUriSync(uri: string | null): Information
    getExtendedMode(): boolean
    /**
     * Given `name,` this finds the corresponding DLNA profile information (stored
     * as a #GUPnPDLNAProfile).
     * @param name The name of the DLNA profile to be retrieved
     * @returns a #GUPnPDLNAProfile on success, NULL otherwise.
     */
    getProfile(name: string | null): Profile
    getRelaxedMode(): boolean
    /**
     * Retuns a list of the all the DLNA profiles supported by `self`.
     * @returns a #GList of #GUPnPDLNAProfile on success, NULL otherwise.
     */
    listProfiles(): Profile[]

    // Own virtual methods of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer

    done(dlna: Information, err: GLib.Error): void

    // Own signals of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer

    connect(sigName: "done", callback: Discoverer.DoneSignalCallback): number
    on(sigName: "done", callback: Discoverer.DoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "done", callback: Discoverer.DoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "done", callback: Discoverer.DoneSignalCallback): NodeJS.EventEmitter
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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

    // Constructors of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer

    constructor(config?: Discoverer.ConstructorProperties) 
    /**
     * Creates a new #GUPnPDLNADiscoverer object with the given default timeout
     * value.
     * @constructor 
     * @param timeout default discovery timeout, in nanoseconds
     * @param relaxedMode set to TRUE, to enable relaxed mode support. FALSE otherwise
     * @param extendedMode set to TRUE, to enable extended mode support. FALSE otherwise
     * @returns A new #GUPnPDLNADiscoverer object.
     */
    constructor(timeout: Gst.ClockTime, relaxedMode: boolean, extendedMode: boolean) 
    /**
     * Creates a new #GUPnPDLNADiscoverer object with the given default timeout
     * value.
     * @constructor 
     * @param timeout default discovery timeout, in nanoseconds
     * @param relaxedMode set to TRUE, to enable relaxed mode support. FALSE otherwise
     * @param extendedMode set to TRUE, to enable extended mode support. FALSE otherwise
     * @returns A new #GUPnPDLNADiscoverer object.
     */
    static new(timeout: Gst.ClockTime, relaxedMode: boolean, extendedMode: boolean): Discoverer

    // Overloads of new

    /**
     * Creates a new #GstDiscoverer with the provided timeout.
     * @constructor 
     * @param timeout timeout per file, in nanoseconds. Allowed are values between     one second (#GST_SECOND) and one hour (3600 * #GST_SECOND)
     * @returns The new #GstDiscoverer. If an error occurred when creating the discoverer, @err will be set accordingly and %NULL will be returned. If @err is set, the caller must free it when no longer needed using g_error_free().
     */
    static new(timeout: Gst.ClockTime): GstPbutils.Discoverer
    _init(config?: Discoverer.ConstructorProperties): void
}

module Information {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnPDLNA-1.0.GUPnPDLNA.Information

        info?: GstPbutils.DiscovererInfo | null
        mime?: string | null
        name?: string | null
    }

}

interface Information {

    // Own properties of GUPnPDLNA-1.0.GUPnPDLNA.Information

    readonly info: GstPbutils.DiscovererInfo
    readonly mime: string
    readonly name: string
    __gtype__: number

    // Own fields of GUPnPDLNA-1.0.GUPnPDLNA.Information

    parent: GObject.Object

    // Owm methods of GUPnPDLNA-1.0.GUPnPDLNA.Information

    getInfo(): GstPbutils.DiscovererInfo
    getMime(): string | null
    getName(): string | null

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Information extends GObject.Object {

    // Own properties of GUPnPDLNA-1.0.GUPnPDLNA.Information

    static name: string

    // Constructors of GUPnPDLNA-1.0.GUPnPDLNA.Information

    constructor(config?: Information.ConstructorProperties) 
    /**
     * Creates a new #GUPnPDLNAInformation object with the given properties.
     * @constructor 
     * @param name DLNA media profile name corresponding to the media
     * @param mime DLNA MIME type for the media
     * @param info #GstDiscovererInfo type with additional metadata about the stream
     * @returns A newly created #GUPnPDLNAInformation object.
     */
    constructor(name: string | null, mime: string | null, info: GstPbutils.DiscovererInfo) 
    /**
     * Creates a new #GUPnPDLNAInformation object with the given properties.
     * @constructor 
     * @param name DLNA media profile name corresponding to the media
     * @param mime DLNA MIME type for the media
     * @param info #GstDiscovererInfo type with additional metadata about the stream
     * @returns A newly created #GUPnPDLNAInformation object.
     */
    static new(name: string | null, mime: string | null, info: GstPbutils.DiscovererInfo): Information
    _init(config?: Information.ConstructorProperties): void
}

module Profile {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnPDLNA-1.0.GUPnPDLNA.Profile

        extended?: boolean | null
        mime?: string | null
        name?: string | null
    }

}

interface Profile {

    // Own properties of GUPnPDLNA-1.0.GUPnPDLNA.Profile

    readonly encodingProfile: GstPbutils.EncodingProfile
    readonly extended: boolean
    readonly mime: string
    readonly name: string
    __gtype__: number

    // Own fields of GUPnPDLNA-1.0.GUPnPDLNA.Profile

    parent: GObject.Object

    // Owm methods of GUPnPDLNA-1.0.GUPnPDLNA.Profile

    getEncodingProfile(): GstPbutils.EncodingProfile
    getExtended(): boolean
    getMime(): string | null
    getName(): string | null

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

    // Constructors of GUPnPDLNA-1.0.GUPnPDLNA.Profile

    constructor(config?: Profile.ConstructorProperties) 
    _init(config?: Profile.ConstructorProperties): void
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