// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GUPnPDLNA-2.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GUPnPDLNA {

/**
 * Flags describing a state of GUPnP DLNA Value.
 */
enum ValueState {
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
interface AudioInformation_ConstructProps extends GObject.Object_ConstructProps {
}

interface AudioInformation {

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.AudioInformation

    parent_instance: GObject.Object

    // Class property signals of GUPnPDLNA-2.0.GUPnPDLNA.AudioInformation

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AudioInformation extends GObject.Object {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.AudioInformation

    static name: string
    static $gtype: GObject.GType<AudioInformation>

    // Constructors of GUPnPDLNA-2.0.GUPnPDLNA.AudioInformation

    constructor(config?: AudioInformation_ConstructProps) 
    _init(config?: AudioInformation_ConstructProps): void
}

interface ContainerInformation_ConstructProps extends GObject.Object_ConstructProps {
}

interface ContainerInformation {

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.ContainerInformation

    parent_instance: GObject.Object

    // Class property signals of GUPnPDLNA-2.0.GUPnPDLNA.ContainerInformation

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ContainerInformation extends GObject.Object {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.ContainerInformation

    static name: string
    static $gtype: GObject.GType<ContainerInformation>

    // Constructors of GUPnPDLNA-2.0.GUPnPDLNA.ContainerInformation

    constructor(config?: ContainerInformation_ConstructProps) 
    _init(config?: ContainerInformation_ConstructProps): void
}

interface ImageInformation_ConstructProps extends GObject.Object_ConstructProps {
}

interface ImageInformation {

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.ImageInformation

    parent_instance: GObject.Object

    // Class property signals of GUPnPDLNA-2.0.GUPnPDLNA.ImageInformation

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ImageInformation extends GObject.Object {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.ImageInformation

    static name: string
    static $gtype: GObject.GType<ImageInformation>

    // Constructors of GUPnPDLNA-2.0.GUPnPDLNA.ImageInformation

    constructor(config?: ImageInformation_ConstructProps) 
    _init(config?: ImageInformation_ConstructProps): void
}

interface Information_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GUPnPDLNA-2.0.GUPnPDLNA.Information

    /**
     * URI of file which metadata this object stores.
     */
    uri?: string | null
}

interface Information {

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
    readonly uri: string
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
     */
    get_audio_information(): AudioInformation
    /**
     * Get an container information of media file if applicable (e.g. for
     * video and audio files).
     */
    get_container_information(): ContainerInformation
    /**
     * Get an container information of media file if applicable (e.g. for
     * image files).
     */
    get_image_information(): ImageInformation
    get_profile_name(): string
    get_uri(): string
    /**
     * Get an container information of media file if applicable (e.g. for
     * video files).
     */
    get_video_information(): VideoInformation

    // Own virtual methods of GUPnPDLNA-2.0.GUPnPDLNA.Information

    /**
     * Get an audio information of media file if applicable (e.g. for
     * video and audio files).
     * @virtual 
     */
    vfunc_get_audio_information(): AudioInformation
    /**
     * Get an container information of media file if applicable (e.g. for
     * video and audio files).
     * @virtual 
     */
    vfunc_get_container_information(): ContainerInformation
    /**
     * Get an container information of media file if applicable (e.g. for
     * image files).
     * @virtual 
     */
    vfunc_get_image_information(): ImageInformation
    vfunc_get_profile_name(): string
    /**
     * Get an container information of media file if applicable (e.g. for
     * video files).
     * @virtual 
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

class Information extends GObject.Object {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.Information

    static name: string
    static $gtype: GObject.GType<Information>

    // Constructors of GUPnPDLNA-2.0.GUPnPDLNA.Information

    constructor(config?: Information_ConstructProps) 
    _init(config?: Information_ConstructProps): void
}

interface Profile_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GUPnPDLNA-2.0.GUPnPDLNA.Profile

    audio_restrictions?: object | null
    container_restrictions?: object | null
    /**
     * Whether the DLNA profile is not a part of DLNA specification.
     */
    extended?: boolean | null
    image_restrictions?: object | null
    /**
     * MIME type of the DLNA profile.
     */
    mime?: string | null
    /**
     * Name of the DLNA profile.
     */
    name?: string | null
    video_restrictions?: object | null
}

interface Profile {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.Profile

    readonly audio_restrictions: object
    readonly container_restrictions: object
    /**
     * Whether the DLNA profile is not a part of DLNA specification.
     */
    readonly extended: boolean
    readonly image_restrictions: object
    /**
     * MIME type of the DLNA profile.
     */
    readonly mime: string
    /**
     * Name of the DLNA profile.
     */
    readonly name: string
    readonly video_restrictions: object

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.Profile

    parent_instance: GObject.Object

    // Owm methods of GUPnPDLNA-2.0.GUPnPDLNA.Profile

    /**
     * Gets a list of audio restrictions.
     */
    get_audio_restrictions(): Restriction[]
    /**
     * Gets a list of container restrictions.
     */
    get_container_restrictions(): Restriction[]
    get_extended(): boolean
    /**
     * Gets a list of image restrictions.
     */
    get_image_restrictions(): Restriction[]
    get_mime(): string
    get_name(): string
    /**
     * Gets a list of video restrictions.
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
class Profile extends GObject.Object {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.Profile

    static name: string
    static $gtype: GObject.GType<Profile>

    // Constructors of GUPnPDLNA-2.0.GUPnPDLNA.Profile

    constructor(config?: Profile_ConstructProps) 
    _init(config?: Profile_ConstructProps): void
}

interface ProfileGuesser_ConstructProps extends GObject.Object_ConstructProps {

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

/**
 * Signal callback interface for `done`
 */
interface ProfileGuesser_DoneSignalCallback {
    ($obj: ProfileGuesser, info: Information, dlna: Profile | null, error: GLib.Error | null): void
}

interface ProfileGuesser {

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
     */
    get_profile(name: string): Profile
    get_relaxed_mode(): boolean
    /**
     * Asynchronously guesses DLNA profile for given `uri`. When guessing
     * is done, ::done signal is emitted on `guesser`.
     * @param uri URI of media.
     * @param timeout_in_ms Timeout of guessing in miliseconds.
     */
    guess_profile_async(uri: string, timeout_in_ms: number): boolean
    /**
     * Guesses the profile which fits to passed `info`.
     * @param info The #GUPnPDLNAInformation object.
     */
    guess_profile_from_info(info: Information): Profile
    /**
     * Synchronously guesses DLNA profile for given `uri`.
     * @param uri URI of media.
     * @param timeout_in_ms Timeout of guessing in miliseconds.
     */
    guess_profile_sync(uri: string, timeout_in_ms: number): [ /* returnType */ Profile, /* dlna_info */ Information ]
    /**
     * Gets a list of the all DLNA profiles supported by `guesser`.
     */
    list_profiles(): Profile[]

    // Own signals of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser

    connect(sigName: "done", callback: ProfileGuesser_DoneSignalCallback): number
    connect_after(sigName: "done", callback: ProfileGuesser_DoneSignalCallback): number
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

class ProfileGuesser extends GObject.Object {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser

    static name: string
    static $gtype: GObject.GType<ProfileGuesser>

    // Constructors of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser

    constructor(config?: ProfileGuesser_ConstructProps) 
    /**
     * Creates a new guesser that will use specific DLNA profiles for
     * matching - i.e. which profiles will be used depends on
     * `relaxed_mode` and `extended_mode`.
     * @constructor 
     * @param relaxed_mode %TRUE to enable relaxed mode support. %FALSE otherwise.
     * @param extended_mode %TRUE to enable extended mode support. %FALSE otherwise.
     */
    constructor(relaxed_mode: boolean, extended_mode: boolean) 
    /**
     * Creates a new guesser that will use specific DLNA profiles for
     * matching - i.e. which profiles will be used depends on
     * `relaxed_mode` and `extended_mode`.
     * @constructor 
     * @param relaxed_mode %TRUE to enable relaxed mode support. %FALSE otherwise.
     * @param extended_mode %TRUE to enable extended mode support. %FALSE otherwise.
     */
    static new(relaxed_mode: boolean, extended_mode: boolean): ProfileGuesser
    _init(config?: ProfileGuesser_ConstructProps): void
    /**
     * Cleans up the DLNA profiles. Provided to remove Valgrind noise. Not
     * thread-safe. Do not call it if there is even a slightest chance
     * that profile guessing will be performed during process
     * lifetime. The profiles are not reloaded after cleanup.
     */
    static cleanup(): void
}

interface VideoInformation_ConstructProps extends GObject.Object_ConstructProps {
}

interface VideoInformation {

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.VideoInformation

    parent_instance: GObject.Object

    // Class property signals of GUPnPDLNA-2.0.GUPnPDLNA.VideoInformation

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VideoInformation extends GObject.Object {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.VideoInformation

    static name: string
    static $gtype: GObject.GType<VideoInformation>

    // Constructors of GUPnPDLNA-2.0.GUPnPDLNA.VideoInformation

    constructor(config?: VideoInformation_ConstructProps) 
    _init(config?: VideoInformation_ConstructProps): void
}

interface AudioInformationClass {

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
    _reserved: object[]
}

abstract class AudioInformationClass {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.AudioInformationClass

    static name: string
}

interface BoolValue {

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
class BoolValue {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.BoolValue

    static name: string
}

interface ContainerInformationClass {

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
    _reserved: object[]
}

abstract class ContainerInformationClass {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.ContainerInformationClass

    static name: string
}

interface Fraction {

    // Owm methods of GUPnPDLNA-2.0.GUPnPDLNA.Fraction

    copy(): Fraction
    /**
     * Frees `fraction`.
     */
    free(): void
    get_denominator(): number
    get_numerator(): number
}

class Fraction {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.Fraction

    static name: string
}

interface FractionRange {

    // Owm methods of GUPnPDLNA-2.0.GUPnPDLNA.FractionRange

    copy(): FractionRange
    /**
     * Frees `range`.
     */
    free(): void
    get_max(): Fraction
    get_min(): Fraction
}

class FractionRange {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.FractionRange

    static name: string
}

interface FractionValue {

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
class FractionValue {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.FractionValue

    static name: string
}

interface ImageInformationClass {

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
    _reserved: object[]
}

abstract class ImageInformationClass {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.ImageInformationClass

    static name: string
}

interface InformationClass {

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
    get_profile_name: (info: Information) => string
    /**
     * Padding. Ignore it.
     * @field 
     */
    _reserved: object[]
}

abstract class InformationClass {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.InformationClass

    static name: string
}

interface IntRange {

    // Owm methods of GUPnPDLNA-2.0.GUPnPDLNA.IntRange

    copy(): IntRange
    /**
     * Frees `range`.
     */
    free(): void
    get_max(): number
    get_min(): number
}

class IntRange {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.IntRange

    static name: string
}

interface IntValue {

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
class IntValue {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.IntValue

    static name: string
}

interface ProfileClass {

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.ProfileClass

    /**
     * A #GObjectClass - parent of this class.
     * @field 
     */
    parent_class: GObject.ObjectClass
}

abstract class ProfileClass {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.ProfileClass

    static name: string
}

interface ProfileGuesserClass {

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesserClass

    /**
     * A #GObjectClass - parent of this class.
     * @field 
     */
    parent_class: GObject.ObjectClass
}

abstract class ProfileGuesserClass {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesserClass

    static name: string
}

interface Restriction {

    // Owm methods of GUPnPDLNA-2.0.GUPnPDLNA.Restriction

    copy(): Restriction
    /**
     * Frees `restriction`.
     */
    free(): void
    /**
     * Gets `restriction'`s entries. It is a string to #GUPnPDLNAValueList
     * mapping.
     */
    get_entries(): GLib.HashTable
    /**
     * Gets `restriction'`s MIME type.
     */
    get_mime(): string
    is_empty(): boolean
    /**
     * Creates a string representation of `restriction`.
     */
    to_string(): string
}

class Restriction {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.Restriction

    static name: string
}

interface StringValue {

    // Own fields of GUPnPDLNA-2.0.GUPnPDLNA.StringValue

    /**
     * The string value.
     * @field 
     */
    value: string
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
class StringValue {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.StringValue

    static name: string
}

interface ValueList {

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
     */
    get_g_values(): any[]
    is_empty(): boolean
    /**
     * Creates a string representation of `list`.
     */
    to_string(): string
}

class ValueList {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.ValueList

    static name: string
}

interface VideoInformationClass {

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
    _reserved: object[]
}

abstract class VideoInformationClass {

    // Own properties of GUPnPDLNA-2.0.GUPnPDLNA.VideoInformationClass

    static name: string
}

}
export default GUPnPDLNA;