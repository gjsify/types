
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * GUPnPDLNA-2.0
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

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

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.AudioInformation

    parent_instance: GObject.Object

    // Class property signals of GUPnPDLNA-2.0.GUPnPDLNA.AudioInformation

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class AudioInformation extends GObject.Object {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.AudioInformation

    static name: string
    static $gtype: GObject.GType<AudioInformation>

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

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.ContainerInformation

    parent_instance: GObject.Object

    // Class property signals of GUPnPDLNA-2.0.GUPnPDLNA.ContainerInformation

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ContainerInformation extends GObject.Object {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.ContainerInformation

    static name: string
    static $gtype: GObject.GType<ContainerInformation>

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

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.ImageInformation

    parent_instance: GObject.Object

    // Class property signals of GUPnPDLNA-2.0.GUPnPDLNA.ImageInformation

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ImageInformation extends GObject.Object {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.ImageInformation

    static name: string
    static $gtype: GObject.GType<ImageInformation>

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
    readonly audio_information: AudioInformation
    /**
     * Container information of a file.
     */
    readonly container_information: ContainerInformation
    /**
     * Image information of a file.
     */
    readonly image_information: ImageInformation
    /**
     * URI of file which metadata this object stores.
     */
    readonly uri: string | null
    /**
     * Video information of a file.
     */
    readonly video_information: VideoInformation

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.Information

    parent_instance: GObject.Object

    // Owm methods of GUPnPDLNA-2.0.GUPnPDLNA.Information

    /**
     * Get an audio information of media file if applicable (e.g. for
     * video and audio files).
     * @returns A #GUPnPDLNAAudioInformation object or %NULL.
     */
    get_audio_information(): AudioInformation
    /**
     * Get an container information of media file if applicable (e.g. for
     * video and audio files).
     * @returns A #GUPnPDLNAContainerInformation object or %NULL.
     */
    get_container_information(): ContainerInformation
    /**
     * Get an container information of media file if applicable (e.g. for
     * image files).
     * @returns A #GUPnPDLNAImageInformation object or %NULL.
     */
    get_image_information(): ImageInformation
    get_profile_name(): string | null
    get_uri(): string | null
    /**
     * Get an container information of media file if applicable (e.g. for
     * video files).
     * @returns A #GUPnPDLNAVideoInformation object or %NULL.
     */
    get_video_information(): VideoInformation

    // Own virtual methods of GUPnPDLNA-2.0.GUPnPDLNA.Information

    /**
     * Get an audio information of media file if applicable (e.g. for
     * video and audio files).
     * @virtual 
     * @returns A #GUPnPDLNAAudioInformation object or %NULL.
     */
    vfunc_get_audio_information(): AudioInformation
    /**
     * Get an container information of media file if applicable (e.g. for
     * video and audio files).
     * @virtual 
     * @returns A #GUPnPDLNAContainerInformation object or %NULL.
     */
    vfunc_get_container_information(): ContainerInformation
    /**
     * Get an container information of media file if applicable (e.g. for
     * image files).
     * @virtual 
     * @returns A #GUPnPDLNAImageInformation object or %NULL.
     */
    vfunc_get_image_information(): ImageInformation
    vfunc_get_profile_name(): string | null
    /**
     * Get an container information of media file if applicable (e.g. for
     * video files).
     * @virtual 
     * @returns A #GUPnPDLNAVideoInformation object or %NULL.
     */
    vfunc_get_video_information(): VideoInformation

    // Class property signals of GUPnPDLNA-2.0.GUPnPDLNA.Information

    connect(sigName: "notify::audio-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::audio-information", ...args: any[]): void
    connect(sigName: "notify::container-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::container-information", ...args: any[]): void
    connect(sigName: "notify::image-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-information", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::video-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::video-information", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Information extends GObject.Object {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.Information

    static name: string
    static $gtype: GObject.GType<Information>

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
        ($obj: MetadataExtractor, info: Information, error: GLib.Error | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MetadataExtractor {

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.MetadataExtractor

    parent_instance: GObject.Object

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
    emit_done(info: Information, error: GLib.Error | null): void
    /**
     * Queues `uri` for metadata discovery. When discovery is completed,
     * the ::done signal is emitted on `extractor`.
     * @param uri URI to gather metadata for
     * @param timeout_in_ms Timeout in miliseconds.
     * @returns %TRUE if @uri was successfully queued, %FALSE otherwise.
     */
    extract_async(uri: string | null, timeout_in_ms: number): boolean
    /**
     * Discovers synchronously metadata of given `uri`.
     * @param uri URI to gather metadata for
     * @param timeout_in_ms Timeout in miliseconds.
     * @returns A #GUPnPDLNAInformation object if discovery succeeded, otherwise %NULL.
     */
    extract_sync(uri: string | null, timeout_in_ms: number): Information

    // Own virtual methods of GUPnPDLNA-2.0.GUPnPDLNA.MetadataExtractor

    /**
     * Queues `uri` for metadata discovery. When discovery is completed,
     * the ::done signal is emitted on `extractor`.
     * @virtual 
     * @param uri URI to gather metadata for
     * @param timeout_in_ms Timeout in miliseconds.
     * @returns %TRUE if @uri was successfully queued, %FALSE otherwise.
     */
    vfunc_extract_async(uri: string | null, timeout_in_ms: number): boolean
    /**
     * Discovers synchronously metadata of given `uri`.
     * @virtual 
     * @param uri URI to gather metadata for
     * @param timeout_in_ms Timeout in miliseconds.
     * @returns A #GUPnPDLNAInformation object if discovery succeeded, otherwise %NULL.
     */
    vfunc_extract_sync(uri: string | null, timeout_in_ms: number): Information

    // Own signals of GUPnPDLNA-2.0.GUPnPDLNA.MetadataExtractor

    connect(sigName: "done", callback: MetadataExtractor.DoneSignalCallback): number
    connect_after(sigName: "done", callback: MetadataExtractor.DoneSignalCallback): number
    emit(sigName: "done", info: Information, error: GLib.Error | null, ...args: any[]): void

    // Class property signals of GUPnPDLNA-2.0.GUPnPDLNA.MetadataExtractor

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MetadataExtractor extends GObject.Object {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.MetadataExtractor

    static name: string
    static $gtype: GObject.GType<MetadataExtractor>

    // Constructors of GUPnPDLNA-2.0.GUPnPDLNA.MetadataExtractor

    constructor(config?: MetadataExtractor.ConstructorProperties) 
    _init(config?: MetadataExtractor.ConstructorProperties): void
}

export module Profile {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnPDLNA-2.0.GUPnPDLNA.Profile

        audio_restrictions?: any | null
        container_restrictions?: any | null
        /**
         * Whether the DLNA profile is not a part of DLNA specification.
         */
        extended?: boolean | null
        image_restrictions?: any | null
        /**
         * MIME type of the DLNA profile.
         */
        mime?: string | null
        /**
         * Name of the DLNA profile.
         */
        name?: string | null
        video_restrictions?: any | null
    }

}

export interface Profile {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.Profile

    readonly audio_restrictions: any
    readonly container_restrictions: any
    /**
     * Whether the DLNA profile is not a part of DLNA specification.
     */
    readonly extended: boolean
    readonly image_restrictions: any
    /**
     * MIME type of the DLNA profile.
     */
    readonly mime: string | null
    /**
     * Name of the DLNA profile.
     */
    readonly name: string | null
    readonly video_restrictions: any

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.Profile

    parent_instance: GObject.Object

    // Owm methods of GUPnPDLNA-2.0.GUPnPDLNA.Profile

    /**
     * Gets a list of audio restrictions.
     * @returns Audio restrictions. Do not modify.
     */
    get_audio_restrictions(): Restriction[]
    /**
     * Gets a list of container restrictions.
     * @returns  Container restrictions. Do not modify.
     */
    get_container_restrictions(): Restriction[]
    get_extended(): boolean
    /**
     * Gets a list of image restrictions.
     * @returns Image restrictions. Do not modify.
     */
    get_image_restrictions(): Restriction[]
    get_mime(): string | null
    get_name(): string | null
    /**
     * Gets a list of video restrictions.
     * @returns Video restrictions. Do not modify.
     */
    get_video_restrictions(): Restriction[]

    // Class property signals of GUPnPDLNA-2.0.GUPnPDLNA.Profile

    connect(sigName: "notify::audio-restrictions", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-restrictions", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::audio-restrictions", ...args: any[]): void
    connect(sigName: "notify::container-restrictions", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container-restrictions", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::container-restrictions", ...args: any[]): void
    connect(sigName: "notify::extended", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extended", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::extended", ...args: any[]): void
    connect(sigName: "notify::image-restrictions", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-restrictions", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-restrictions", ...args: any[]): void
    connect(sigName: "notify::mime", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mime", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::video-restrictions", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-restrictions", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::video-restrictions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<Profile>

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
        ($obj: ProfileGuesser, info: Information, dlna: Profile | null, error: GLib.Error | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser

        /**
         * Whether profile matching should be done also against DLNA
         * profiles not being a part of DLNA specification.
         */
        extended_mode?: boolean | null
        /**
         * Whether profile matching should not be strictly compliant
         * with the DLNA specification.
         */
        relaxed_mode?: boolean | null
    }

}

export interface ProfileGuesser {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser

    /**
     * Whether profile matching should be done also against DLNA
     * profiles not being a part of DLNA specification.
     */
    readonly extended_mode: boolean
    /**
     * Whether profile matching should not be strictly compliant
     * with the DLNA specification.
     */
    readonly relaxed_mode: boolean

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser

    parent_instance: GObject.Object

    // Owm methods of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser

    get_extended_mode(): boolean
    /**
     * Lookups for #GUPnPDLNAProfile with given `name`.
     * @param name The name of the DLNA profile to be retrieved.
     * @returns A #GUPnPDLNAProfile object on success, %NULL otherwise.
     */
    get_profile(name: string | null): Profile
    get_relaxed_mode(): boolean
    /**
     * Asynchronously guesses DLNA profile for given `uri`. When guessing
     * is done, ::done signal is emitted on `guesser`.
     * @param uri URI of media.
     * @param timeout_in_ms Timeout of guessing in miliseconds.
     * @returns %TRUE if @uri was successfully queued, %FALSE otherwise.
     */
    guess_profile_async(uri: string | null, timeout_in_ms: number): boolean
    /**
     * Guesses the profile which fits to passed `info`.
     * @param info The #GUPnPDLNAInformation object.
     * @returns A #GUPnPDLNAProfile object on success, %NULL otherwise.
     */
    guess_profile_from_info(info: Information): Profile
    /**
     * Synchronously guesses DLNA profile for given `uri`.
     * @param uri URI of media.
     * @param timeout_in_ms Timeout of guessing in miliseconds.
     * @returns DLNA profile if any had matched, %NULL otherwise.
     */
    guess_profile_sync(uri: string | null, timeout_in_ms: number): [ /* returnType */ Profile, /* dlna_info */ Information ]
    /**
     * Gets a list of the all DLNA profiles supported by `guesser`.
     * @returns A #GList of #GUPnPDLNAProfile on success, %NULL otherwise.
     */
    list_profiles(): Profile[]

    // Own signals of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser

    connect(sigName: "done", callback: ProfileGuesser.DoneSignalCallback): number
    connect_after(sigName: "done", callback: ProfileGuesser.DoneSignalCallback): number
    emit(sigName: "done", info: Information, dlna: Profile | null, error: GLib.Error | null, ...args: any[]): void

    // Class property signals of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser

    connect(sigName: "notify::extended-mode", callback: (($obj: ProfileGuesser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extended-mode", callback: (($obj: ProfileGuesser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::extended-mode", ...args: any[]): void
    connect(sigName: "notify::relaxed-mode", callback: (($obj: ProfileGuesser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relaxed-mode", callback: (($obj: ProfileGuesser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relaxed-mode", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ProfileGuesser extends GObject.Object {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser

    static name: string
    static $gtype: GObject.GType<ProfileGuesser>

    // Constructors of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser

    constructor(config?: ProfileGuesser.ConstructorProperties) 
    /**
     * Creates a new guesser that will use specific DLNA profiles for
     * matching - i.e. which profiles will be used depends on
     * `relaxed_mode` and `extended_mode`.
     * @constructor 
     * @param relaxed_mode %TRUE to enable relaxed mode support. %FALSE otherwise.
     * @param extended_mode %TRUE to enable extended mode support. %FALSE otherwise.
     * @returns A new #GUPnPDLNAProfileGuesser object.
     */
    constructor(relaxed_mode: boolean, extended_mode: boolean) 
    /**
     * Creates a new guesser that will use specific DLNA profiles for
     * matching - i.e. which profiles will be used depends on
     * `relaxed_mode` and `extended_mode`.
     * @constructor 
     * @param relaxed_mode %TRUE to enable relaxed mode support. %FALSE otherwise.
     * @param extended_mode %TRUE to enable extended mode support. %FALSE otherwise.
     * @returns A new #GUPnPDLNAProfileGuesser object.
     */
    static new(relaxed_mode: boolean, extended_mode: boolean): ProfileGuesser
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

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.VideoInformation

    parent_instance: GObject.Object

    // Class property signals of GUPnPDLNA-2.0.GUPnPDLNA.VideoInformation

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class VideoInformation extends GObject.Object {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.VideoInformation

    static name: string
    static $gtype: GObject.GType<VideoInformation>

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
    parent_class: GObject.ObjectClass
    /**
     * Padding. Ignore it.
     * @field 
     */
    _reserved: any[]
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
    parent_class: GObject.ObjectClass
    /**
     * Padding. Ignore it.
     * @field 
     */
    _reserved: any[]
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
    get_denominator(): number
    get_numerator(): number
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
    get_max(): Fraction
    get_min(): Fraction
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
    parent_class: GObject.ObjectClass
    /**
     * Padding. Ignore it.
     * @field 
     */
    _reserved: any[]
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
    parent_class: GObject.ObjectClass
    get_audio_information: (info: Information) => AudioInformation
    get_container_information: (info: Information) => ContainerInformation
    get_image_information: (info: Information) => ImageInformation
    get_video_information: (info: Information) => VideoInformation
    get_profile_name: (info: Information) => string | null
    /**
     * Padding. Ignore it.
     * @field 
     */
    _reserved: any[]
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
    get_max(): number
    get_min(): number
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
    parent_class: GObject.ObjectClass
    extract_async: (extractor: MetadataExtractor, uri: string | null, timeout_in_ms: number) => boolean
    extract_sync: (extractor: MetadataExtractor, uri: string | null, timeout_in_ms: number) => Information
    /**
     * Padding. Ignore it.
     * @field 
     */
    _reserved: any[]
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
    parent_class: GObject.ObjectClass
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
    parent_class: GObject.ObjectClass
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
    get_entries(): GLib.HashTable
    /**
     * Gets `restriction'`s MIME type.
     * @returns MIME type. Do not modify.
     */
    get_mime(): string | null
    is_empty(): boolean
    /**
     * Creates a string representation of `restriction`.
     * @returns A string representation of @restriction. Free with g_free() when not needed.
     */
    to_string(): string | null
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
    get_g_values(): any[]
    is_empty(): boolean
    /**
     * Creates a string representation of `list`.
     * @returns A string representation of @list. Free with g_free() when not needed.
     */
    to_string(): string | null
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
    parent_class: GObject.ObjectClass
    /**
     * Padding. Ignore it.
     * @field 
     */
    _reserved: any[]
}

export abstract class VideoInformationClass {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.VideoInformationClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END