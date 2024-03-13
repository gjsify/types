/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gupnpdlna-2.0-ambient.d.ts';
import './gupnpdlna-2.0-import.d.ts';
/**
 * GUPnPDLNA-2.0
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

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
    module AudioInformation {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class AudioInformation extends GObject.Object {
        // Constructors of GUPnPDLNA.AudioInformation

        constructor(properties?: Partial<AudioInformation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module ContainerInformation {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class ContainerInformation extends GObject.Object {
        // Constructors of GUPnPDLNA.ContainerInformation

        constructor(properties?: Partial<ContainerInformation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module ImageInformation {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class ImageInformation extends GObject.Object {
        // Constructors of GUPnPDLNA.ImageInformation

        constructor(properties?: Partial<ImageInformation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module Information {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            audio_information: AudioInformation;
            audioInformation: AudioInformation;
            container_information: ContainerInformation;
            containerInformation: ContainerInformation;
            image_information: ImageInformation;
            imageInformation: ImageInformation;
            uri: string;
            video_information: VideoInformation;
            videoInformation: VideoInformation;
        }
    }

    abstract class Information extends GObject.Object {
        // Own properties of GUPnPDLNA.Information

        /**
         * Audio information of a file.
         */
        get audio_information(): AudioInformation;
        /**
         * Audio information of a file.
         */
        get audioInformation(): AudioInformation;
        /**
         * Container information of a file.
         */
        get container_information(): ContainerInformation;
        /**
         * Container information of a file.
         */
        get containerInformation(): ContainerInformation;
        /**
         * Image information of a file.
         */
        get image_information(): ImageInformation;
        /**
         * Image information of a file.
         */
        get imageInformation(): ImageInformation;
        /**
         * URI of file which metadata this object stores.
         */
        get uri(): string;
        /**
         * Video information of a file.
         */
        get video_information(): VideoInformation;
        /**
         * Video information of a file.
         */
        get videoInformation(): VideoInformation;

        // Constructors of GUPnPDLNA.Information

        constructor(properties?: Partial<Information.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of GUPnPDLNA.Information

        /**
         * Get an audio information of media file if applicable (e.g. for
         * video and audio files).
         */
        vfunc_get_audio_information(): AudioInformation;
        /**
         * Get an container information of media file if applicable (e.g. for
         * video and audio files).
         */
        vfunc_get_container_information(): ContainerInformation;
        /**
         * Get an container information of media file if applicable (e.g. for
         * image files).
         */
        vfunc_get_image_information(): ImageInformation;
        vfunc_get_profile_name(): string;
        /**
         * Get an container information of media file if applicable (e.g. for
         * video files).
         */
        vfunc_get_video_information(): VideoInformation;

        // Own methods of GUPnPDLNA.Information

        /**
         * Get an audio information of media file if applicable (e.g. for
         * video and audio files).
         * @returns A #GUPnPDLNAAudioInformation object or %NULL.
         */
        get_audio_information(): AudioInformation;
        /**
         * Get an container information of media file if applicable (e.g. for
         * video and audio files).
         * @returns A #GUPnPDLNAContainerInformation object or %NULL.
         */
        get_container_information(): ContainerInformation;
        /**
         * Get an container information of media file if applicable (e.g. for
         * image files).
         * @returns A #GUPnPDLNAImageInformation object or %NULL.
         */
        get_image_information(): ImageInformation;
        get_profile_name(): string;
        get_uri(): string;
        /**
         * Get an container information of media file if applicable (e.g. for
         * video files).
         * @returns A #GUPnPDLNAVideoInformation object or %NULL.
         */
        get_video_information(): VideoInformation;
    }

    module MetadataExtractor {
        // Signal callback interfaces

        interface Done {
            (info: Information, error?: GLib.Error | null): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class MetadataExtractor extends GObject.Object {
        // Constructors of GUPnPDLNA.MetadataExtractor

        constructor(properties?: Partial<MetadataExtractor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of GUPnPDLNA.MetadataExtractor

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'done', callback: (_source: this, info: Information, error: GLib.Error | null) => void): number;
        connect_after(
            signal: 'done',
            callback: (_source: this, info: Information, error: GLib.Error | null) => void,
        ): number;
        emit(signal: 'done', info: Information, error?: GLib.Error | null): void;

        // Own virtual methods of GUPnPDLNA.MetadataExtractor

        /**
         * Queues `uri` for metadata discovery. When discovery is completed,
         * the ::done signal is emitted on `extractor`.
         * @param uri URI to gather metadata for
         * @param timeout_in_ms Timeout in miliseconds.
         */
        vfunc_extract_async(uri: string, timeout_in_ms: number): boolean;
        /**
         * Discovers synchronously metadata of given `uri`.
         * @param uri URI to gather metadata for
         * @param timeout_in_ms Timeout in miliseconds.
         */
        vfunc_extract_sync(uri: string, timeout_in_ms: number): Information;

        // Own methods of GUPnPDLNA.MetadataExtractor

        /**
         * Emits ::done signal. This function is intended to be used by
         * subclasses of #GUPnPDLNAMetadataExtractor. It is required to always
         * pass a meaningful `info,` even in case of error. That way a receiver
         * of this signal can know which URI discovery failed by using
         * gupnp_dlna_information_get_uri().
         * @param info A #GUPnPDLNAInformation about discovered URI.
         * @param error A #GError.
         */
        emit_done(info: Information, error?: GLib.Error | null): void;
        /**
         * Queues `uri` for metadata discovery. When discovery is completed,
         * the ::done signal is emitted on `extractor`.
         * @param uri URI to gather metadata for
         * @param timeout_in_ms Timeout in miliseconds.
         * @returns %TRUE if @uri was successfully queued, %FALSE otherwise.
         */
        extract_async(uri: string, timeout_in_ms: number): boolean;
        /**
         * Discovers synchronously metadata of given `uri`.
         * @param uri URI to gather metadata for
         * @param timeout_in_ms Timeout in miliseconds.
         * @returns A #GUPnPDLNAInformation object if discovery succeeded, otherwise %NULL.
         */
        extract_sync(uri: string, timeout_in_ms: number): Information;
    }

    module Profile {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            audio_restrictions: any;
            audioRestrictions: any;
            container_restrictions: any;
            containerRestrictions: any;
            extended: boolean;
            image_restrictions: any;
            imageRestrictions: any;
            mime: string;
            name: string;
            video_restrictions: any;
            videoRestrictions: any;
        }
    }

    /**
     * The top-level object used for the in-memory representation of the
     * DLNA Profiles.
     */
    class Profile extends GObject.Object {
        // Own properties of GUPnPDLNA.Profile

        get audio_restrictions(): any;
        get audioRestrictions(): any;
        get container_restrictions(): any;
        get containerRestrictions(): any;
        /**
         * Whether the DLNA profile is not a part of DLNA specification.
         */
        get extended(): boolean;
        get image_restrictions(): any;
        get imageRestrictions(): any;
        /**
         * MIME type of the DLNA profile.
         */
        get mime(): string;
        /**
         * Name of the DLNA profile.
         */
        get name(): string;
        get video_restrictions(): any;
        get videoRestrictions(): any;

        // Constructors of GUPnPDLNA.Profile

        constructor(properties?: Partial<Profile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of GUPnPDLNA.Profile

        /**
         * Gets a list of audio restrictions.
         * @returns Audio restrictions. Do not modify.
         */
        get_audio_restrictions(): Restriction[];
        /**
         * Gets a list of container restrictions.
         * @returns Container restrictions. Do not modify.
         */
        get_container_restrictions(): Restriction[];
        get_extended(): boolean;
        /**
         * Gets a list of image restrictions.
         * @returns Image restrictions. Do not modify.
         */
        get_image_restrictions(): Restriction[];
        get_mime(): string;
        get_name(): string;
        /**
         * Gets a list of video restrictions.
         * @returns Video restrictions. Do not modify.
         */
        get_video_restrictions(): Restriction[];
    }

    module ProfileGuesser {
        // Signal callback interfaces

        interface Done {
            (info: Information, dlna?: Profile | null, error?: GLib.Error | null): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            extended_mode: boolean;
            extendedMode: boolean;
            relaxed_mode: boolean;
            relaxedMode: boolean;
        }
    }

    class ProfileGuesser extends GObject.Object {
        // Own properties of GUPnPDLNA.ProfileGuesser

        /**
         * Whether profile matching should be done also against DLNA
         * profiles not being a part of DLNA specification.
         */
        get extended_mode(): boolean;
        /**
         * Whether profile matching should be done also against DLNA
         * profiles not being a part of DLNA specification.
         */
        get extendedMode(): boolean;
        /**
         * Whether profile matching should not be strictly compliant
         * with the DLNA specification.
         */
        get relaxed_mode(): boolean;
        /**
         * Whether profile matching should not be strictly compliant
         * with the DLNA specification.
         */
        get relaxedMode(): boolean;

        // Constructors of GUPnPDLNA.ProfileGuesser

        constructor(properties?: Partial<ProfileGuesser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](relaxed_mode: boolean, extended_mode: boolean): ProfileGuesser;

        // Own signals of GUPnPDLNA.ProfileGuesser

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'done',
            callback: (_source: this, info: Information, dlna: Profile | null, error: GLib.Error | null) => void,
        ): number;
        connect_after(
            signal: 'done',
            callback: (_source: this, info: Information, dlna: Profile | null, error: GLib.Error | null) => void,
        ): number;
        emit(signal: 'done', info: Information, dlna?: Profile | null, error?: GLib.Error | null): void;

        // Own static methods of GUPnPDLNA.ProfileGuesser

        /**
         * Cleans up the DLNA profiles. Provided to remove Valgrind noise. Not
         * thread-safe. Do not call it if there is even a slightest chance
         * that profile guessing will be performed during process
         * lifetime. The profiles are not reloaded after cleanup.
         */
        static cleanup(): void;

        // Own methods of GUPnPDLNA.ProfileGuesser

        get_extended_mode(): boolean;
        /**
         * Lookups for #GUPnPDLNAProfile with given `name`.
         * @param name The name of the DLNA profile to be retrieved.
         * @returns A #GUPnPDLNAProfile object on success, %NULL otherwise.
         */
        get_profile(name: string): Profile;
        get_relaxed_mode(): boolean;
        /**
         * Asynchronously guesses DLNA profile for given `uri`. When guessing
         * is done, ::done signal is emitted on `guesser`.
         * @param uri URI of media.
         * @param timeout_in_ms Timeout of guessing in miliseconds.
         * @returns %TRUE if @uri was successfully queued, %FALSE otherwise.
         */
        guess_profile_async(uri: string, timeout_in_ms: number): boolean;
        /**
         * Guesses the profile which fits to passed `info`.
         * @param info The #GUPnPDLNAInformation object.
         * @returns A #GUPnPDLNAProfile object on success, %NULL otherwise.
         */
        guess_profile_from_info(info: Information): Profile;
        /**
         * Synchronously guesses DLNA profile for given `uri`.
         * @param uri URI of media.
         * @param timeout_in_ms Timeout of guessing in miliseconds.
         * @returns DLNA profile if any had matched, %NULL otherwise.
         */
        guess_profile_sync(uri: string, timeout_in_ms: number): [Profile, Information | null];
        /**
         * Gets a list of the all DLNA profiles supported by `guesser`.
         * @returns A #GList of #GUPnPDLNAProfile on success, %NULL otherwise.
         */
        list_profiles(): Profile[];
    }

    module VideoInformation {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class VideoInformation extends GObject.Object {
        // Constructors of GUPnPDLNA.VideoInformation

        constructor(properties?: Partial<VideoInformation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    type AudioInformationClass = typeof AudioInformation;
    /**
     * GUPnP DLNA Value representing a boolean value of some metadata attribute.
     */
    class BoolValue {
        // Own fields of GUPnPDLNA.BoolValue

        value: boolean;
        state: ValueState;

        // Constructors of GUPnPDLNA.BoolValue

        _init(...args: any[]): void;
    }

    type ContainerInformationClass = typeof ContainerInformation;
    abstract class Fraction {
        // Constructors of GUPnPDLNA.Fraction

        _init(...args: any[]): void;

        // Own methods of GUPnPDLNA.Fraction

        copy(): Fraction;
        /**
         * Frees `fraction`.
         */
        free(): void;
        get_denominator(): number;
        get_numerator(): number;
    }

    abstract class FractionRange {
        // Constructors of GUPnPDLNA.FractionRange

        _init(...args: any[]): void;

        // Own methods of GUPnPDLNA.FractionRange

        copy(): FractionRange;
        /**
         * Frees `range`.
         */
        free(): void;
        get_max(): Fraction;
        get_min(): Fraction;
    }

    /**
     * GUPnP DLNA Value representing a fraction value of some metadata attribute.
     */
    class FractionValue {
        // Own fields of GUPnPDLNA.FractionValue

        numerator: number;
        denominator: number;
        state: ValueState;

        // Constructors of GUPnPDLNA.FractionValue

        _init(...args: any[]): void;
    }

    type ImageInformationClass = typeof ImageInformation;
    type InformationClass = typeof Information;
    abstract class IntRange {
        // Constructors of GUPnPDLNA.IntRange

        _init(...args: any[]): void;

        // Own methods of GUPnPDLNA.IntRange

        copy(): IntRange;
        /**
         * Frees `range`.
         */
        free(): void;
        get_max(): number;
        get_min(): number;
    }

    /**
     * GUPnP DLNA Value representing an integer value of some metadata attribute.
     */
    class IntValue {
        // Own fields of GUPnPDLNA.IntValue

        value: number;
        state: ValueState;

        // Constructors of GUPnPDLNA.IntValue

        _init(...args: any[]): void;
    }

    type MetadataExtractorClass = typeof MetadataExtractor;
    type ProfileClass = typeof Profile;
    type ProfileGuesserClass = typeof ProfileGuesser;
    abstract class Restriction {
        // Constructors of GUPnPDLNA.Restriction

        _init(...args: any[]): void;

        // Own methods of GUPnPDLNA.Restriction

        copy(): Restriction;
        /**
         * Frees `restriction`.
         */
        free(): void;
        /**
         * Gets `restriction'`s entries. It is a string to #GUPnPDLNAValueList
         * mapping.
         * @returns Entries. Do not modify.
         */
        get_entries(): GLib.HashTable<string, ValueList>;
        /**
         * Gets `restriction'`s MIME type.
         * @returns MIME type. Do not modify.
         */
        get_mime(): string;
        is_empty(): boolean;
        /**
         * Creates a string representation of `restriction`.
         * @returns A string representation of @restriction. Free with g_free() when not needed.
         */
        to_string(): string;
    }

    /**
     * GUPnP DLNA Value representing a string value of some metadata
     * attribute.
     */
    class StringValue {
        // Own fields of GUPnPDLNA.StringValue

        value: string;
        state: ValueState;

        // Constructors of GUPnPDLNA.StringValue

        _init(...args: any[]): void;
    }

    abstract class ValueList {
        // Constructors of GUPnPDLNA.ValueList

        _init(...args: any[]): void;

        // Own methods of GUPnPDLNA.ValueList

        copy(): ValueList;
        /**
         * Frees the value list.
         */
        free(): void;
        /**
         * Gets a list of #GValues. #GValues can be of types #G_TYPE_BOOLEAN,
         * #G_TYPE_INT, #G_TYPE_STRING, #GUPNP_TYPE_DLNA_FRACTION,
         * #GUPNP_TYPE_DLNA_FRACTION_RANGE or #GUPNP_TYPE_DLNA_INT_RANGE.
         * @returns A list. Free it with g_list_free_full() with g_free().
         */
        get_g_values(): GObject.Value[];
        is_empty(): boolean;
        /**
         * Creates a string representation of `list`.
         * @returns A string representation of @list. Free with g_free() when not needed.
         */
        to_string(): string;
    }

    type VideoInformationClass = typeof VideoInformation;
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

export default GUPnPDLNA;
// END
