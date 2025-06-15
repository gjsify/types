/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace GUPnPDLNA {
    /**
     * GUPnPDLNA-2.0
     */

    /**
     * Flags describing a state of GUPnP DLNA Value.
     */

    /**
     * Flags describing a state of GUPnP DLNA Value.
     */
    export namespace ValueState {
        export const $gtype: GObject.GType<ValueState>;
    }

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
    namespace AudioInformation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class AudioInformation extends GObject.Object {
        static $gtype: GObject.GType<AudioInformation>;

        // Constructors

        constructor(properties?: Partial<AudioInformation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof AudioInformation.SignalSignatures>(
            signal: K,
            callback: AudioInformation.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AudioInformation.SignalSignatures>(
            signal: K,
            callback: AudioInformation.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AudioInformation.SignalSignatures>(
            signal: K,
            ...args: AudioInformation.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ContainerInformation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class ContainerInformation extends GObject.Object {
        static $gtype: GObject.GType<ContainerInformation>;

        // Constructors

        constructor(properties?: Partial<ContainerInformation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ContainerInformation.SignalSignatures>(
            signal: K,
            callback: ContainerInformation.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ContainerInformation.SignalSignatures>(
            signal: K,
            callback: ContainerInformation.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ContainerInformation.SignalSignatures>(
            signal: K,
            ...args: ContainerInformation.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ImageInformation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class ImageInformation extends GObject.Object {
        static $gtype: GObject.GType<ImageInformation>;

        // Constructors

        constructor(properties?: Partial<ImageInformation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ImageInformation.SignalSignatures>(
            signal: K,
            callback: ImageInformation.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ImageInformation.SignalSignatures>(
            signal: K,
            callback: ImageInformation.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ImageInformation.SignalSignatures>(
            signal: K,
            ...args: ImageInformation.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Information {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::audio-information': GObject.Object.Notify;
            'notify::container-information': GObject.Object.Notify;
            'notify::image-information': GObject.Object.Notify;
            'notify::uri': GObject.Object.Notify;
            'notify::video-information': GObject.Object.Notify;
        }

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
        static $gtype: GObject.GType<Information>;

        // Properties

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

        // Constructors

        constructor(properties?: Partial<Information.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Information.SignalSignatures>(
            signal: K,
            callback: Information.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Information.SignalSignatures>(
            signal: K,
            callback: Information.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Information.SignalSignatures>(
            signal: K,
            ...args: Information.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

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

        // Methods

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

    namespace MetadataExtractor {
        // Signal callback interfaces

        interface Done {
            (_source: MetadataExtractor, info: Information, error?: GLib.Error | null): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            done: Done;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class MetadataExtractor extends GObject.Object {
        static $gtype: GObject.GType<MetadataExtractor>;

        // Constructors

        constructor(properties?: Partial<MetadataExtractor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof MetadataExtractor.SignalSignatures>(
            signal: K,
            callback: MetadataExtractor.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MetadataExtractor.SignalSignatures>(
            signal: K,
            callback: MetadataExtractor.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MetadataExtractor.SignalSignatures>(
            signal: K,
            ...args: MetadataExtractor.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

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

        // Methods

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

    namespace Profile {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::audio-restrictions': GObject.Object.Notify;
            'notify::container-restrictions': GObject.Object.Notify;
            'notify::extended': GObject.Object.Notify;
            'notify::image-restrictions': GObject.Object.Notify;
            'notify::mime': GObject.Object.Notify;
            'notify::name': GObject.Object.Notify;
            'notify::video-restrictions': GObject.Object.Notify;
        }

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
        static $gtype: GObject.GType<Profile>;

        // Properties

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

        // Constructors

        constructor(properties?: Partial<Profile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Profile.SignalSignatures>(signal: K, callback: Profile.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Profile.SignalSignatures>(
            signal: K,
            callback: Profile.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Profile.SignalSignatures>(
            signal: K,
            ...args: Profile.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace ProfileGuesser {
        // Signal callback interfaces

        interface Done {
            (_source: ProfileGuesser, info: Information, dlna?: Profile | null, error?: GLib.Error | null): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            done: Done;
            'notify::extended-mode': GObject.Object.Notify;
            'notify::relaxed-mode': GObject.Object.Notify;
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
        static $gtype: GObject.GType<ProfileGuesser>;

        // Properties

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

        // Constructors

        constructor(properties?: Partial<ProfileGuesser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](relaxed_mode: boolean, extended_mode: boolean): ProfileGuesser;

        // Signals

        connect<K extends keyof ProfileGuesser.SignalSignatures>(
            signal: K,
            callback: ProfileGuesser.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ProfileGuesser.SignalSignatures>(
            signal: K,
            callback: ProfileGuesser.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ProfileGuesser.SignalSignatures>(
            signal: K,
            ...args: ProfileGuesser.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Cleans up the DLNA profiles. Provided to remove Valgrind noise. Not
         * thread-safe. Do not call it if there is even a slightest chance
         * that profile guessing will be performed during process
         * lifetime. The profiles are not reloaded after cleanup.
         */
        static cleanup(): void;

        // Methods

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

    namespace VideoInformation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class VideoInformation extends GObject.Object {
        static $gtype: GObject.GType<VideoInformation>;

        // Constructors

        constructor(properties?: Partial<VideoInformation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof VideoInformation.SignalSignatures>(
            signal: K,
            callback: VideoInformation.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VideoInformation.SignalSignatures>(
            signal: K,
            callback: VideoInformation.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VideoInformation.SignalSignatures>(
            signal: K,
            ...args: VideoInformation.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    type AudioInformationClass = typeof AudioInformation;
    /**
     * GUPnP DLNA Value representing a boolean value of some metadata attribute.
     */
    class BoolValue {
        static $gtype: GObject.GType<BoolValue>;

        // Fields

        value: boolean;
        state: ValueState;

        // Constructors

        _init(...args: any[]): void;
    }

    type ContainerInformationClass = typeof ContainerInformation;
    abstract class Fraction {
        static $gtype: GObject.GType<Fraction>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        copy(): Fraction;
        /**
         * Frees `fraction`.
         */
        free(): void;
        get_denominator(): number;
        get_numerator(): number;
    }

    abstract class FractionRange {
        static $gtype: GObject.GType<FractionRange>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

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
        static $gtype: GObject.GType<FractionValue>;

        // Fields

        numerator: number;
        denominator: number;
        state: ValueState;

        // Constructors

        _init(...args: any[]): void;
    }

    type ImageInformationClass = typeof ImageInformation;
    type InformationClass = typeof Information;
    abstract class IntRange {
        static $gtype: GObject.GType<IntRange>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

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
        static $gtype: GObject.GType<IntValue>;

        // Fields

        value: number;
        state: ValueState;

        // Constructors

        _init(...args: any[]): void;
    }

    type MetadataExtractorClass = typeof MetadataExtractor;
    type ProfileClass = typeof Profile;
    type ProfileGuesserClass = typeof ProfileGuesser;
    abstract class Restriction {
        static $gtype: GObject.GType<Restriction>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

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
        static $gtype: GObject.GType<StringValue>;

        // Fields

        value: string;
        state: ValueState;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class ValueList {
        static $gtype: GObject.GType<ValueList>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

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
        get_g_values(): unknown[];
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
