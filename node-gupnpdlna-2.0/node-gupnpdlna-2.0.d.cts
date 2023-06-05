
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gupnpdlna-2.0-import.d.ts';
    
/**
 * GUPnPDLNA-2.0
 */

import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

/**
 * Flags describing a state of GUPnP DLNA Value.
 */
export enum ValueState {
    /**
     * Value is set.
     */
    SET,
    /**
     * Value is unset.
     */
    UNSET,
    /**
     * Value is unsupported.
     */
    UNSUPPORTED,
}
export module AudioInformation {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface AudioInformation {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.AudioInformation

    __gtype__: number

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.AudioInformation

    parentInstance: GObject.Object

    // Class property signals of GUPnPDLNA-2.0.GUPnPDLNA.AudioInformation

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
    disconnect(id: number): void
}

export class AudioInformation extends GObject.Object {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.AudioInformation

    static name: string

    // Constructors of GUPnPDLNA-2.0.GUPnPDLNA.AudioInformation

    constructor(config?: AudioInformation.ConstructorProperties) 
    _init(config?: AudioInformation.ConstructorProperties): void
}

export module ContainerInformation {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ContainerInformation {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.ContainerInformation

    __gtype__: number

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.ContainerInformation

    parentInstance: GObject.Object

    // Class property signals of GUPnPDLNA-2.0.GUPnPDLNA.ContainerInformation

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
    disconnect(id: number): void
}

export class ContainerInformation extends GObject.Object {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.ContainerInformation

    static name: string

    // Constructors of GUPnPDLNA-2.0.GUPnPDLNA.ContainerInformation

    constructor(config?: ContainerInformation.ConstructorProperties) 
    _init(config?: ContainerInformation.ConstructorProperties): void
}

export module ImageInformation {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ImageInformation {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.ImageInformation

    __gtype__: number

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.ImageInformation

    parentInstance: GObject.Object

    // Class property signals of GUPnPDLNA-2.0.GUPnPDLNA.ImageInformation

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
    disconnect(id: number): void
}

export class ImageInformation extends GObject.Object {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.ImageInformation

    static name: string

    // Constructors of GUPnPDLNA-2.0.GUPnPDLNA.ImageInformation

    constructor(config?: ImageInformation.ConstructorProperties) 
    _init(config?: ImageInformation.ConstructorProperties): void
}

export module Information {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnPDLNA-2.0.GUPnPDLNA.Information

        /**
         * URI of file which metadata this object stores.
         */
        uri?: string | null
    }

}

export interface Information {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.Information

    /**
     * Audio information of a file.
     */
    readonly audioInformation: AudioInformation
    /**
     * Container information of a file.
     */
    readonly containerInformation: ContainerInformation
    /**
     * Image information of a file.
     */
    readonly imageInformation: ImageInformation
    /**
     * URI of file which metadata this object stores.
     */
    readonly uri: string | null
    /**
     * Video information of a file.
     */
    readonly videoInformation: VideoInformation
    __gtype__: number

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.Information

    parentInstance: GObject.Object

    // Owm methods of GUPnPDLNA-2.0.GUPnPDLNA.Information

    // Has conflict: getAudioInformation(): AudioInformation
    // Has conflict: getContainerInformation(): ContainerInformation
    // Has conflict: getImageInformation(): ImageInformation
    // Has conflict: getProfileName(): string | null
    getUri(): string | null
    // Has conflict: getVideoInformation(): VideoInformation

    // Own virtual methods of GUPnPDLNA-2.0.GUPnPDLNA.Information

    /**
     * Get an audio information of media file if applicable (e.g. for
     * video and audio files).
     * @virtual 
     * @returns A #GUPnPDLNAAudioInformation object or %NULL.
     */
    getAudioInformation(): AudioInformation
    /**
     * Get an container information of media file if applicable (e.g. for
     * video and audio files).
     * @virtual 
     * @returns A #GUPnPDLNAContainerInformation object or %NULL.
     */
    getContainerInformation(): ContainerInformation
    /**
     * Get an container information of media file if applicable (e.g. for
     * image files).
     * @virtual 
     * @returns A #GUPnPDLNAImageInformation object or %NULL.
     */
    getImageInformation(): ImageInformation
    getProfileName(): string | null
    /**
     * Get an container information of media file if applicable (e.g. for
     * video files).
     * @virtual 
     * @returns A #GUPnPDLNAVideoInformation object or %NULL.
     */
    getVideoInformation(): VideoInformation

    // Class property signals of GUPnPDLNA-2.0.GUPnPDLNA.Information

    connect(sigName: "notify::audio-information", callback: (...args: any[]) => void): number
    on(sigName: "notify::audio-information", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::audio-information", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::audio-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::audio-information", ...args: any[]): void
    connect(sigName: "notify::container-information", callback: (...args: any[]) => void): number
    on(sigName: "notify::container-information", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::container-information", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::container-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::container-information", ...args: any[]): void
    connect(sigName: "notify::image-information", callback: (...args: any[]) => void): number
    on(sigName: "notify::image-information", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::image-information", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::image-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::image-information", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::video-information", callback: (...args: any[]) => void): number
    on(sigName: "notify::video-information", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::video-information", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::video-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::video-information", ...args: any[]): void
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
    disconnect(id: number): void
}

export class Information extends GObject.Object {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.Information

    static name: string

    // Constructors of GUPnPDLNA-2.0.GUPnPDLNA.Information

    constructor(config?: Information.ConstructorProperties) 
    _init(config?: Information.ConstructorProperties): void
}

export module MetadataExtractor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `done`
     */
    export interface DoneSignalCallback {
        (info: Information, error: GLib.Error | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MetadataExtractor {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.MetadataExtractor

    __gtype__: number

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.MetadataExtractor

    parentInstance: GObject.Object

    // Owm methods of GUPnPDLNA-2.0.GUPnPDLNA.MetadataExtractor

    /**
     * Emits ::done signal. This function is intended to be used by
     * subclasses of #GUPnPDLNAMetadataExtractor. It is required to always
     * pass a meaningful `info,` even in case of error. That way a receiver
     * of this signal can know which URI discovery failed by using
     * gupnp_dlna_information_get_uri().
     * @param info A #GUPnPDLNAInformation about discovered URI.
     * @param error A #GError.
     */
    emitDone(info: Information, error: GLib.Error | null): void
    // Has conflict: extractAsync(uri: string | null, timeoutInMs: number): boolean
    // Has conflict: extractSync(uri: string | null, timeoutInMs: number): Information

    // Own virtual methods of GUPnPDLNA-2.0.GUPnPDLNA.MetadataExtractor

    /**
     * Queues `uri` for metadata discovery. When discovery is completed,
     * the ::done signal is emitted on `extractor`.
     * @virtual 
     * @param uri URI to gather metadata for
     * @param timeoutInMs Timeout in miliseconds.
     * @returns %TRUE if @uri was successfully queued, %FALSE otherwise.
     */
    extractAsync(uri: string | null, timeoutInMs: number): boolean
    /**
     * Discovers synchronously metadata of given `uri`.
     * @virtual 
     * @param uri URI to gather metadata for
     * @param timeoutInMs Timeout in miliseconds.
     * @returns A #GUPnPDLNAInformation object if discovery succeeded, otherwise %NULL.
     */
    extractSync(uri: string | null, timeoutInMs: number): Information

    // Own signals of GUPnPDLNA-2.0.GUPnPDLNA.MetadataExtractor

    connect(sigName: "done", callback: MetadataExtractor.DoneSignalCallback): number
    on(sigName: "done", callback: MetadataExtractor.DoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "done", callback: MetadataExtractor.DoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "done", callback: MetadataExtractor.DoneSignalCallback): NodeJS.EventEmitter
    emit(sigName: "done", error: GLib.Error | null, ...args: any[]): void

    // Class property signals of GUPnPDLNA-2.0.GUPnPDLNA.MetadataExtractor

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
    disconnect(id: number): void
}

export class MetadataExtractor extends GObject.Object {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.MetadataExtractor

    static name: string

    // Constructors of GUPnPDLNA-2.0.GUPnPDLNA.MetadataExtractor

    constructor(config?: MetadataExtractor.ConstructorProperties) 
    _init(config?: MetadataExtractor.ConstructorProperties): void
}

export module Profile {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnPDLNA-2.0.GUPnPDLNA.Profile

        audioRestrictions?: any | null
        containerRestrictions?: any | null
        /**
         * Whether the DLNA profile is not a part of DLNA specification.
         */
        extended?: boolean | null
        imageRestrictions?: any | null
        /**
         * MIME type of the DLNA profile.
         */
        mime?: string | null
        /**
         * Name of the DLNA profile.
         */
        name?: string | null
        videoRestrictions?: any | null
    }

}

export interface Profile {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.Profile

    readonly audioRestrictions: any
    readonly containerRestrictions: any
    /**
     * Whether the DLNA profile is not a part of DLNA specification.
     */
    readonly extended: boolean
    readonly imageRestrictions: any
    /**
     * MIME type of the DLNA profile.
     */
    readonly mime: string | null
    /**
     * Name of the DLNA profile.
     */
    readonly name: string | null
    readonly videoRestrictions: any
    __gtype__: number

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.Profile

    parentInstance: GObject.Object

    // Owm methods of GUPnPDLNA-2.0.GUPnPDLNA.Profile

    /**
     * Gets a list of audio restrictions.
     * @returns Audio restrictions. Do not modify.
     */
    getAudioRestrictions(): Restriction[]
    /**
     * Gets a list of container restrictions.
     * @returns  Container restrictions. Do not modify.
     */
    getContainerRestrictions(): Restriction[]
    getExtended(): boolean
    /**
     * Gets a list of image restrictions.
     * @returns Image restrictions. Do not modify.
     */
    getImageRestrictions(): Restriction[]
    getMime(): string | null
    getName(): string | null
    /**
     * Gets a list of video restrictions.
     * @returns Video restrictions. Do not modify.
     */
    getVideoRestrictions(): Restriction[]

    // Class property signals of GUPnPDLNA-2.0.GUPnPDLNA.Profile

    connect(sigName: "notify::audio-restrictions", callback: (...args: any[]) => void): number
    on(sigName: "notify::audio-restrictions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::audio-restrictions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::audio-restrictions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::audio-restrictions", ...args: any[]): void
    connect(sigName: "notify::container-restrictions", callback: (...args: any[]) => void): number
    on(sigName: "notify::container-restrictions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::container-restrictions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::container-restrictions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::container-restrictions", ...args: any[]): void
    connect(sigName: "notify::extended", callback: (...args: any[]) => void): number
    on(sigName: "notify::extended", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extended", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extended", ...args: any[]): void
    connect(sigName: "notify::image-restrictions", callback: (...args: any[]) => void): number
    on(sigName: "notify::image-restrictions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::image-restrictions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::image-restrictions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::image-restrictions", ...args: any[]): void
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
    connect(sigName: "notify::video-restrictions", callback: (...args: any[]) => void): number
    on(sigName: "notify::video-restrictions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::video-restrictions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::video-restrictions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::video-restrictions", ...args: any[]): void
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
    disconnect(id: number): void
}

/**
 * The top-level object used for the in-memory representation of the
 * DLNA Profiles.
 * @class 
 */
export class Profile extends GObject.Object {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.Profile

    static name: string

    // Constructors of GUPnPDLNA-2.0.GUPnPDLNA.Profile

    constructor(config?: Profile.ConstructorProperties) 
    _init(config?: Profile.ConstructorProperties): void
}

export module ProfileGuesser {

    // Signal callback interfaces

    /**
     * Signal callback interface for `done`
     */
    export interface DoneSignalCallback {
        (info: Information, dlna: Profile | null, error: GLib.Error | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser

        /**
         * Whether profile matching should be done also against DLNA
         * profiles not being a part of DLNA specification.
         */
        extendedMode?: boolean | null
        /**
         * Whether profile matching should not be strictly compliant
         * with the DLNA specification.
         */
        relaxedMode?: boolean | null
    }

}

export interface ProfileGuesser {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser

    /**
     * Whether profile matching should be done also against DLNA
     * profiles not being a part of DLNA specification.
     */
    readonly extendedMode: boolean
    /**
     * Whether profile matching should not be strictly compliant
     * with the DLNA specification.
     */
    readonly relaxedMode: boolean
    __gtype__: number

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser

    parentInstance: GObject.Object

    // Owm methods of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser

    getExtendedMode(): boolean
    /**
     * Lookups for #GUPnPDLNAProfile with given `name`.
     * @param name The name of the DLNA profile to be retrieved.
     * @returns A #GUPnPDLNAProfile object on success, %NULL otherwise.
     */
    getProfile(name: string | null): Profile
    getRelaxedMode(): boolean
    /**
     * Asynchronously guesses DLNA profile for given `uri`. When guessing
     * is done, ::done signal is emitted on `guesser`.
     * @param uri URI of media.
     * @param timeoutInMs Timeout of guessing in miliseconds.
     * @returns %TRUE if @uri was successfully queued, %FALSE otherwise.
     */
    guessProfileAsync(uri: string | null, timeoutInMs: number): boolean
    /**
     * Guesses the profile which fits to passed `info`.
     * @param info The #GUPnPDLNAInformation object.
     * @returns A #GUPnPDLNAProfile object on success, %NULL otherwise.
     */
    guessProfileFromInfo(info: Information): Profile
    /**
     * Synchronously guesses DLNA profile for given `uri`.
     * @param uri URI of media.
     * @param timeoutInMs Timeout of guessing in miliseconds.
     * @returns DLNA profile if any had matched, %NULL otherwise.
     */
    guessProfileSync(uri: string | null, timeoutInMs: number): [ /* returnType */ Profile, /* dlnaInfo */ Information ]
    /**
     * Gets a list of the all DLNA profiles supported by `guesser`.
     * @returns A #GList of #GUPnPDLNAProfile on success, %NULL otherwise.
     */
    listProfiles(): Profile[]

    // Own signals of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser

    connect(sigName: "done", callback: ProfileGuesser.DoneSignalCallback): number
    on(sigName: "done", callback: ProfileGuesser.DoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "done", callback: ProfileGuesser.DoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "done", callback: ProfileGuesser.DoneSignalCallback): NodeJS.EventEmitter
    emit(sigName: "done", dlna: Profile | null, error: GLib.Error | null, ...args: any[]): void

    // Class property signals of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ProfileGuesser extends GObject.Object {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser

    static name: string

    // Constructors of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser

    constructor(config?: ProfileGuesser.ConstructorProperties) 
    /**
     * Creates a new guesser that will use specific DLNA profiles for
     * matching - i.e. which profiles will be used depends on
     * `relaxed_mode` and `extended_mode`.
     * @constructor 
     * @param relaxedMode %TRUE to enable relaxed mode support. %FALSE otherwise.
     * @param extendedMode %TRUE to enable extended mode support. %FALSE otherwise.
     * @returns A new #GUPnPDLNAProfileGuesser object.
     */
    constructor(relaxedMode: boolean, extendedMode: boolean) 
    /**
     * Creates a new guesser that will use specific DLNA profiles for
     * matching - i.e. which profiles will be used depends on
     * `relaxed_mode` and `extended_mode`.
     * @constructor 
     * @param relaxedMode %TRUE to enable relaxed mode support. %FALSE otherwise.
     * @param extendedMode %TRUE to enable extended mode support. %FALSE otherwise.
     * @returns A new #GUPnPDLNAProfileGuesser object.
     */
    static new(relaxedMode: boolean, extendedMode: boolean): ProfileGuesser
    _init(config?: ProfileGuesser.ConstructorProperties): void
    /**
     * Cleans up the DLNA profiles. Provided to remove Valgrind noise. Not
     * thread-safe. Do not call it if there is even a slightest chance
     * that profile guessing will be performed during process
     * lifetime. The profiles are not reloaded after cleanup.
     */
    static cleanup(): void
}

export module VideoInformation {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface VideoInformation {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.VideoInformation

    __gtype__: number

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.VideoInformation

    parentInstance: GObject.Object

    // Class property signals of GUPnPDLNA-2.0.GUPnPDLNA.VideoInformation

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
    disconnect(id: number): void
}

export class VideoInformation extends GObject.Object {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.VideoInformation

    static name: string

    // Constructors of GUPnPDLNA-2.0.GUPnPDLNA.VideoInformation

    constructor(config?: VideoInformation.ConstructorProperties) 
    _init(config?: VideoInformation.ConstructorProperties): void
}

export interface AudioInformationClass {

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.AudioInformationClass

    /**
     * Parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
    /**
     * Padding. Ignore it.
     * @field 
     */
    reserved: any[]
}

export abstract class AudioInformationClass {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.AudioInformationClass

    static name: string
}

export interface BoolValue {

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.BoolValue

    /**
     * The boolean value.
     * @field 
     */
    value: boolean
    /**
     * The state of #GUPnPDLNABoolValue.
     * @field 
     */
    state: ValueState
}

/**
 * GUPnP DLNA Value representing a boolean value of some metadata attribute.
 * @record 
 */
export class BoolValue {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.BoolValue

    static name: string
}

export interface ContainerInformationClass {

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.ContainerInformationClass

    /**
     * Parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
    /**
     * Padding. Ignore it.
     * @field 
     */
    reserved: any[]
}

export abstract class ContainerInformationClass {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.ContainerInformationClass

    static name: string
}

export interface Fraction {

    // Owm methods of GUPnPDLNA-2.0.GUPnPDLNA.Fraction

    copy(): Fraction
    /**
     * Frees `fraction`.
     */
    free(): void
    getDenominator(): number
    getNumerator(): number
}

export class Fraction {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.Fraction

    static name: string
}

export interface FractionRange {

    // Owm methods of GUPnPDLNA-2.0.GUPnPDLNA.FractionRange

    copy(): FractionRange
    /**
     * Frees `range`.
     */
    free(): void
    getMax(): Fraction
    getMin(): Fraction
}

export class FractionRange {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.FractionRange

    static name: string
}

export interface FractionValue {

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.FractionValue

    /**
     * The numerator of fraction.
     * @field 
     */
    numerator: number
    /**
     * The denominator of fraction.
     * @field 
     */
    denominator: number
    /**
     * The state of #GUPnPDLNAFractionValue.
     * @field 
     */
    state: ValueState
}

/**
 * GUPnP DLNA Value representing a fraction value of some metadata attribute.
 * @record 
 */
export class FractionValue {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.FractionValue

    static name: string
}

export interface ImageInformationClass {

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.ImageInformationClass

    /**
     * Parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
    /**
     * Padding. Ignore it.
     * @field 
     */
    reserved: any[]
}

export abstract class ImageInformationClass {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.ImageInformationClass

    static name: string
}

export interface InformationClass {

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.InformationClass

    /**
     * Parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
    getAudioInformation: (info: Information) => AudioInformation
    getContainerInformation: (info: Information) => ContainerInformation
    getImageInformation: (info: Information) => ImageInformation
    getVideoInformation: (info: Information) => VideoInformation
    getProfileName: (info: Information) => string | null
    /**
     * Padding. Ignore it.
     * @field 
     */
    reserved: any[]
}

export abstract class InformationClass {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.InformationClass

    static name: string
}

export interface IntRange {

    // Owm methods of GUPnPDLNA-2.0.GUPnPDLNA.IntRange

    copy(): IntRange
    /**
     * Frees `range`.
     */
    free(): void
    getMax(): number
    getMin(): number
}

export class IntRange {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.IntRange

    static name: string
}

export interface IntValue {

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.IntValue

    /**
     * The integer value.
     * @field 
     */
    value: number
    /**
     * The state of #GUPnPDLNAIntValue.
     * @field 
     */
    state: ValueState
}

/**
 * GUPnP DLNA Value representing an integer value of some metadata attribute.
 * @record 
 */
export class IntValue {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.IntValue

    static name: string
}

export interface MetadataExtractorClass {

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.MetadataExtractorClass

    /**
     * Parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
    extractAsync: (extractor: MetadataExtractor, uri: string | null, timeoutInMs: number) => boolean
    extractSync: (extractor: MetadataExtractor, uri: string | null, timeoutInMs: number) => Information
    /**
     * Padding. Ignore it.
     * @field 
     */
    reserved: any[]
}

export abstract class MetadataExtractorClass {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.MetadataExtractorClass

    static name: string
}

export interface ProfileClass {

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.ProfileClass

    /**
     * A #GObjectClass - parent of this class.
     * @field 
     */
    parentClass: GObject.ObjectClass
}

export abstract class ProfileClass {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.ProfileClass

    static name: string
}

export interface ProfileGuesserClass {

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesserClass

    /**
     * A #GObjectClass - parent of this class.
     * @field 
     */
    parentClass: GObject.ObjectClass
}

export abstract class ProfileGuesserClass {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesserClass

    static name: string
}

export interface Restriction {

    // Owm methods of GUPnPDLNA-2.0.GUPnPDLNA.Restriction

    copy(): Restriction
    /**
     * Frees `restriction`.
     */
    free(): void
    /**
     * Gets `restriction'`s entries. It is a string to #GUPnPDLNAValueList
     * mapping.
     * @returns  Entries. Do not modify.
     */
    getEntries(): GLib.HashTable
    /**
     * Gets `restriction'`s MIME type.
     * @returns MIME type. Do not modify.
     */
    getMime(): string | null
    isEmpty(): boolean
    /**
     * Creates a string representation of `restriction`.
     * @returns A string representation of @restriction. Free with g_free() when not needed.
     */
    toString(): string | null
}

export class Restriction {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.Restriction

    static name: string
}

export interface StringValue {

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.StringValue

    /**
     * The string value.
     * @field 
     */
    value: string | null
    /**
     * The state of #GUPnPDLNAStringValue.
     * @field 
     */
    state: ValueState
}

/**
 * GUPnP DLNA Value representing a string value of some metadata
 * attribute.
 * @record 
 */
export class StringValue {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.StringValue

    static name: string
}

export interface ValueList {

    // Owm methods of GUPnPDLNA-2.0.GUPnPDLNA.ValueList

    copy(): ValueList
    /**
     * Frees the value list.
     */
    free(): void
    /**
     * Gets a list of #GValues. #GValues can be of types #G_TYPE_BOOLEAN,
     * #G_TYPE_INT, #G_TYPE_STRING, #GUPNP_TYPE_DLNA_FRACTION,
     * #GUPNP_TYPE_DLNA_FRACTION_RANGE or #GUPNP_TYPE_DLNA_INT_RANGE.
     * @returns A list. Free it with g_list_free_full() with g_free().
     */
    getGValues(): any[]
    isEmpty(): boolean
    /**
     * Creates a string representation of `list`.
     * @returns A string representation of @list. Free with g_free() when not needed.
     */
    toString(): string | null
}

export class ValueList {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.ValueList

    static name: string
}

export interface VideoInformationClass {

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.VideoInformationClass

    /**
     * Parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
    /**
     * Padding. Ignore it.
     * @field 
     */
    reserved: any[]
}

export abstract class VideoInformationClass {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.VideoInformationClass

    static name: string
}

// END