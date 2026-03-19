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
     * @gir-type Enum
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

    namespace AudioInformation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class AudioInformation extends GObject.Object {
        static $gtype: GObject.GType<AudioInformation>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AudioInformation.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AudioInformation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof AudioInformation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AudioInformation.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AudioInformation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AudioInformation.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AudioInformation.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AudioInformation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ContainerInformation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class ContainerInformation extends GObject.Object {
        static $gtype: GObject.GType<ContainerInformation>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ContainerInformation.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ContainerInformation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ContainerInformation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContainerInformation.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ContainerInformation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContainerInformation.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ContainerInformation.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ContainerInformation.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ImageInformation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class ImageInformation extends GObject.Object {
        static $gtype: GObject.GType<ImageInformation>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ImageInformation.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ImageInformation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ImageInformation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ImageInformation.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ImageInformation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ImageInformation.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ImageInformation.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ImageInformation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Information {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::audio-information': (pspec: GObject.ParamSpec) => void;
            'notify::container-information': (pspec: GObject.ParamSpec) => void;
            'notify::image-information': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
            'notify::video-information': (pspec: GObject.ParamSpec) => void;
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

    /**
     * @gir-type Class
     */
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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Information.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Information.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Information.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Information.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Information.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Information.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Information.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Information.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Get an audio information of media file if applicable (e.g. for
         * video and audio files).
         * @virtual
         */
        vfunc_get_audio_information(): AudioInformation;
        /**
         * Get an container information of media file if applicable (e.g. for
         * video and audio files).
         * @virtual
         */
        vfunc_get_container_information(): ContainerInformation;
        /**
         * Get an container information of media file if applicable (e.g. for
         * image files).
         * @virtual
         */
        vfunc_get_image_information(): ImageInformation;
        /**
         * @virtual
         */
        vfunc_get_profile_name(): string;
        /**
         * Get an container information of media file if applicable (e.g. for
         * video files).
         * @virtual
         */
        vfunc_get_video_information(): VideoInformation;

        // Methods

        /**
         * Get an audio information of media file if applicable (e.g. for
         * video and audio files).
         * @returns A {@link GUPnPDLNA.AudioInformation} object or `null`.
         */
        get_audio_information(): AudioInformation;
        /**
         * Get an container information of media file if applicable (e.g. for
         * video and audio files).
         * @returns A {@link GUPnPDLNA.ContainerInformation} object or `null`.
         */
        get_container_information(): ContainerInformation;
        /**
         * Get an container information of media file if applicable (e.g. for
         * image files).
         * @returns A {@link GUPnPDLNA.ImageInformation} object or `null`.
         */
        get_image_information(): ImageInformation;
        /**
         * @returns The name of a DLNA profile or `null`.
         */
        get_profile_name(): string;
        /**
         * @returns An URI of a file.
         */
        get_uri(): string;
        /**
         * Get an container information of media file if applicable (e.g. for
         * video files).
         * @returns A {@link GUPnPDLNA.VideoInformation} object or `null`.
         */
        get_video_information(): VideoInformation;
    }

    namespace MetadataExtractor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Will be emitted when all information on a URI could be
             * discovered.
             * @signal
             */
            done: (arg0: Information, arg1: GLib.Error | null) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class MetadataExtractor extends GObject.Object {
        static $gtype: GObject.GType<MetadataExtractor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MetadataExtractor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MetadataExtractor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MetadataExtractor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MetadataExtractor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MetadataExtractor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MetadataExtractor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MetadataExtractor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MetadataExtractor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Queues `uri` for metadata discovery. When discovery is completed,
         * the ::done signal is emitted on `extractor`.
         * @param uri URI to gather metadata for
         * @param timeout_in_ms Timeout in miliseconds.
         * @virtual
         */
        vfunc_extract_async(uri: string, timeout_in_ms: number): boolean;
        /**
         * Discovers synchronously metadata of given `uri`.
         * @param uri URI to gather metadata for
         * @param timeout_in_ms Timeout in miliseconds.
         * @virtual
         */
        vfunc_extract_sync(uri: string, timeout_in_ms: number): Information;

        // Methods

        /**
         * Emits ::done signal. This function is intended to be used by
         * subclasses of {@link GUPnPDLNA.MetadataExtractor}. It is required to always
         * pass a meaningful `info`, even in case of error. That way a receiver
         * of this signal can know which URI discovery failed by using
         * `gupnp_dlna_information_get_uri()`.
         * @param info A {@link GUPnPDLNA.Information} about discovered URI.
         * @param error A {@link GLib.Error}.
         */
        emit_done(info: Information, error?: GLib.Error | null): void;
        /**
         * Queues `uri` for metadata discovery. When discovery is completed,
         * the ::done signal is emitted on `extractor`.
         * @param uri URI to gather metadata for
         * @param timeout_in_ms Timeout in miliseconds.
         * @returns `true` if `uri` was successfully queued, `false` otherwise.
         */
        extract_async(uri: string, timeout_in_ms: number): boolean;
        /**
         * Discovers synchronously metadata of given `uri`.
         * @param uri URI to gather metadata for
         * @param timeout_in_ms Timeout in miliseconds.
         * @returns A {@link GUPnPDLNA.Information} object if discovery succeeded, otherwise `null`.
         */
        extract_sync(uri: string, timeout_in_ms: number): Information;
    }

    namespace Profile {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::audio-restrictions': (pspec: GObject.ParamSpec) => void;
            'notify::container-restrictions': (pspec: GObject.ParamSpec) => void;
            'notify::extended': (pspec: GObject.ParamSpec) => void;
            'notify::image-restrictions': (pspec: GObject.ParamSpec) => void;
            'notify::mime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::video-restrictions': (pspec: GObject.ParamSpec) => void;
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
     * @gir-type Class
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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Profile.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Profile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Profile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Profile.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Profile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Profile.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Profile.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Profile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
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
        /**
         * @returns `true` if `profile` is extended one and `false` otherwise.
         */
        get_extended(): boolean;
        /**
         * Gets a list of image restrictions.
         * @returns Image restrictions. Do not modify.
         */
        get_image_restrictions(): Restriction[];
        /**
         * @returns The DLNA MIME type of the DLNA profile represented by `profile`.
         */
        get_mime(): string;
        /**
         * @returns The name of the DLNA profile represented by `profile`.
         */
        get_name(): string;
        /**
         * Gets a list of video restrictions.
         * @returns Video restrictions. Do not modify.
         */
        get_video_restrictions(): Restriction[];
    }

    namespace ProfileGuesser {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Will be emitted when guessing DLNA profile for a URI has finished.
             * @signal
             */
            done: (arg0: Information, arg1: Profile | null, arg2: GLib.Error | null) => void;
            'notify::extended-mode': (pspec: GObject.ParamSpec) => void;
            'notify::relaxed-mode': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            extended_mode: boolean;
            extendedMode: boolean;
            relaxed_mode: boolean;
            relaxedMode: boolean;
        }
    }

    /**
     * @gir-type Class
     */
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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ProfileGuesser.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ProfileGuesser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](relaxed_mode: boolean, extended_mode: boolean): ProfileGuesser;

        // Signals

        /** @signal */
        connect<K extends keyof ProfileGuesser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ProfileGuesser.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ProfileGuesser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ProfileGuesser.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ProfileGuesser.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ProfileGuesser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
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

        /**
         * @returns `true` if `guesser` is in extended mode, `false` otherwise.
         */
        get_extended_mode(): boolean;
        /**
         * Lookups for {@link GUPnPDLNA.Profile} with given `name`.
         * @param name The name of the DLNA profile to be retrieved.
         * @returns A {@link GUPnPDLNA.Profile} object on success, `null` otherwise.
         */
        get_profile(name: string): Profile;
        /**
         * @returns `true` if `guesser` is in relaxed mode, `false` otherwise.
         */
        get_relaxed_mode(): boolean;
        /**
         * Asynchronously guesses DLNA profile for given `uri`. When guessing
         * is done, ::done signal is emitted on `guesser`.
         * @param uri URI of media.
         * @param timeout_in_ms Timeout of guessing in miliseconds.
         * @returns `true` if `uri` was successfully queued, `false` otherwise.
         */
        guess_profile_async(uri: string, timeout_in_ms: number): boolean;
        /**
         * Guesses the profile which fits to passed `info`.
         * @param info The {@link GUPnPDLNA.Information} object.
         * @returns A {@link GUPnPDLNA.Profile} object on success, `null` otherwise.
         */
        guess_profile_from_info(info: Information): Profile;
        /**
         * Synchronously guesses DLNA profile for given `uri`.
         * @param uri URI of media.
         * @param timeout_in_ms Timeout of guessing in miliseconds.
         * @returns DLNA profile if any had matched, `null` otherwise.
         */
        guess_profile_sync(uri: string, timeout_in_ms: number): [Profile, Information | null];
        /**
         * Gets a list of the all DLNA profiles supported by `guesser`.
         * @returns A {@link GLib.List} of {@link GUPnPDLNA.Profile} on success, `null` otherwise.
         */
        list_profiles(): Profile[];
    }

    namespace VideoInformation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class VideoInformation extends GObject.Object {
        static $gtype: GObject.GType<VideoInformation>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VideoInformation.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VideoInformation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof VideoInformation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VideoInformation.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VideoInformation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VideoInformation.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VideoInformation.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VideoInformation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    /**
     * @gir-type Alias
     */
    type AudioInformationClass = typeof AudioInformation;
    /**
     * GUPnP DLNA Value representing a boolean value of some metadata attribute.
     * @gir-type Struct
     */
    class BoolValue {
        static $gtype: GObject.GType<BoolValue>;

        // Fields

        value: boolean;
        state: ValueState;
    }

    /**
     * @gir-type Alias
     */
    type ContainerInformationClass = typeof ContainerInformation;
    /**
     * @gir-type Struct
     */
    abstract class Fraction {
        static $gtype: GObject.GType<Fraction>;

        // Methods

        /**
         * @returns A copy of `fraction`.
         */
        copy(): Fraction;
        /**
         * Frees `fraction`.
         */
        free(): void;
        /**
         * @returns `fraction`'s denominator.
         */
        get_denominator(): number;
        /**
         * @returns `fraction`'s numerator.
         */
        get_numerator(): number;
    }

    /**
     * @gir-type Struct
     */
    abstract class FractionRange {
        static $gtype: GObject.GType<FractionRange>;

        // Methods

        /**
         * @returns A copy of `range`.
         */
        copy(): FractionRange;
        /**
         * Frees `range`.
         */
        free(): void;
        /**
         * @returns Maximum value of `range`.
         */
        get_max(): Fraction;
        /**
         * @returns Minimum value of `range`.
         */
        get_min(): Fraction;
    }

    /**
     * GUPnP DLNA Value representing a fraction value of some metadata attribute.
     * @gir-type Struct
     */
    class FractionValue {
        static $gtype: GObject.GType<FractionValue>;

        // Fields

        numerator: number;
        denominator: number;
        state: ValueState;
    }

    /**
     * @gir-type Alias
     */
    type ImageInformationClass = typeof ImageInformation;
    /**
     * @gir-type Alias
     */
    type InformationClass = typeof Information;
    /**
     * @gir-type Struct
     */
    abstract class IntRange {
        static $gtype: GObject.GType<IntRange>;

        // Methods

        /**
         * @returns A copy of `range`.
         */
        copy(): IntRange;
        /**
         * Frees `range`.
         */
        free(): void;
        /**
         * @returns Maximum value of `range`.
         */
        get_max(): number;
        /**
         * @returns Minimum value of `range`.
         */
        get_min(): number;
    }

    /**
     * GUPnP DLNA Value representing an integer value of some metadata attribute.
     * @gir-type Struct
     */
    class IntValue {
        static $gtype: GObject.GType<IntValue>;

        // Fields

        value: number;
        state: ValueState;
    }

    /**
     * @gir-type Alias
     */
    type MetadataExtractorClass = typeof MetadataExtractor;
    /**
     * @gir-type Alias
     */
    type ProfileClass = typeof Profile;
    /**
     * @gir-type Alias
     */
    type ProfileGuesserClass = typeof ProfileGuesser;
    /**
     * @gir-type Struct
     */
    abstract class Restriction {
        static $gtype: GObject.GType<Restriction>;

        // Methods

        /**
         * @returns A copy of `restriction`.
         */
        copy(): Restriction;
        /**
         * Frees `restriction`.
         */
        free(): void;
        /**
         * Gets `restriction`'s entries. It is a string to {@link GUPnPDLNA.ValueList}
         * mapping.
         * @returns Entries. Do not modify.
         */
        get_entries(): GLib.HashTable<string, ValueList>;
        /**
         * Gets `restriction`'s MIME type.
         * @returns MIME type. Do not modify.
         */
        get_mime(): string;
        /**
         * @returns `true` if `restriction` is empty and has no MIME type, otherwise `false`.
         */
        is_empty(): boolean;
        /**
         * Creates a string representation of `restriction`.
         * @returns A string representation of `restriction`. Free with `g_free()` when not needed.
         */
        to_string(): string;
    }

    /**
     * GUPnP DLNA Value representing a string value of some metadata
     * attribute.
     * @gir-type Struct
     */
    class StringValue {
        static $gtype: GObject.GType<StringValue>;

        // Fields

        value: string;
        state: ValueState;
    }

    /**
     * @gir-type Struct
     */
    abstract class ValueList {
        static $gtype: GObject.GType<ValueList>;

        // Methods

        /**
         * @returns A copy of `list`.
         */
        copy(): ValueList;
        /**
         * Frees the value list.
         */
        free(): void;
        /**
         * Gets a list of `GValues`. `GValues` can be of types #G_TYPE_BOOLEAN,
         * #G_TYPE_INT, #G_TYPE_STRING, #GUPNP_TYPE_DLNA_FRACTION,
         * #GUPNP_TYPE_DLNA_FRACTION_RANGE or #GUPNP_TYPE_DLNA_INT_RANGE.
         * @returns A list. Free it with `g_list_free_full()` with `g_free()`.
         */
        get_g_values(): unknown[];
        /**
         * @returns `true` if `list` is empty, otherwise `false`.
         */
        is_empty(): boolean;
        /**
         * Creates a string representation of `list`.
         * @returns A string representation of `list`. Free with `g_free()` when not needed.
         */
        to_string(): string;
    }

    /**
     * @gir-type Alias
     */
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
