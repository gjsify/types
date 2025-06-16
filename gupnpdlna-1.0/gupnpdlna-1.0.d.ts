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
    /**
     * GUPnPDLNA-1.0
     */

    namespace Discoverer {
        // Signal signatures
        interface SignalSignatures extends GstPbutils.Discoverer.SignalSignatures {
            done: (arg0: Information, arg1: GLib.Error) => void;
            'notify::extended-mode': (pspec: GObject.ParamSpec) => void;
            'notify::relaxed-mode': (pspec: GObject.ParamSpec) => void;
            'notify::timeout': (pspec: GObject.ParamSpec) => void;
            'notify::use-cache': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GstPbutils.Discoverer.ConstructorProps {
            extended_mode: boolean;
            extendedMode: boolean;
            relaxed_mode: boolean;
            relaxedMode: boolean;
        }
    }

    /**
     * The top-level object used to for metadata extraction.
     */
    class Discoverer extends GstPbutils.Discoverer {
        static $gtype: GObject.GType<Discoverer>;

        // Properties

        get extended_mode(): boolean;
        get extendedMode(): boolean;
        get relaxed_mode(): boolean;
        get relaxedMode(): boolean;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: Discoverer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Discoverer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](timeout: Gst.ClockTime, relaxed_mode: boolean, extended_mode: boolean): Discoverer;
        // Conflicted with GstPbutils.Discoverer.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof Discoverer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Discoverer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Discoverer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Discoverer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Discoverer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Discoverer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_done(dlna: Information, err: GLib.Error): void;

        // Methods

        /**
         * Queues `uri` for metadata discovery. When discovery is completed, the
         * "discovered" signal is emitted on `discoverer`.
         * @param uri URI to gather metadata for
         * @returns TRUE if @uri was successfully queued, FALSE otherwise.
         */
        discover_uri(uri: string): boolean;
        // Conflicted with GstPbutils.Discoverer.discover_uri
        discover_uri(...args: never[]): any;
        /**
         * Synchronously gathers metadata for `uri`.
         * @param uri URI to gather metadata for
         * @returns a #GUPnPDLNAInformation with the metadata for @uri on success, NULL otherwise
         */
        discover_uri_sync(uri: string): Information;
        get_extended_mode(): boolean;
        /**
         * Given `name,` this finds the corresponding DLNA profile information (stored
         * as a #GUPnPDLNAProfile).
         * @param name The name of the DLNA profile to be retrieved
         * @returns a #GUPnPDLNAProfile on success, NULL otherwise.
         */
        get_profile(name: string): Profile;
        get_relaxed_mode(): boolean;
        /**
         * Retuns a list of the all the DLNA profiles supported by `self`.
         * @returns a #GList of #GUPnPDLNAProfile on success, NULL otherwise.
         */
        list_profiles(): Profile[];
    }

    namespace Information {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::info': (pspec: GObject.ParamSpec) => void;
            'notify::mime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            info: GstPbutils.DiscovererInfo;
            mime: string;
            name: string;
        }
    }

    class Information extends GObject.Object {
        static $gtype: GObject.GType<Information>;

        // Properties

        get info(): GstPbutils.DiscovererInfo;
        get mime(): string;
        get name(): string;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: Information.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Information.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, mime: string, info: GstPbutils.DiscovererInfo): Information;

        // Signals

        connect<K extends keyof Information.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Information.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Information.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Information.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Information.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Information.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_info(): GstPbutils.DiscovererInfo;
        get_mime(): string;
        get_name(): string;
    }

    namespace Profile {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::encoding-profile': (pspec: GObject.ParamSpec) => void;
            'notify::extended': (pspec: GObject.ParamSpec) => void;
            'notify::mime': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            encoding_profile: GstPbutils.EncodingProfile;
            encodingProfile: GstPbutils.EncodingProfile;
            extended: boolean;
            mime: string;
            name: string;
        }
    }

    /**
     * The top-level object used for the in-memory representation of the DLNA
     * Profiles.
     */
    class Profile extends GObject.Object {
        static $gtype: GObject.GType<Profile>;

        // Properties

        get encoding_profile(): GstPbutils.EncodingProfile;
        get encodingProfile(): GstPbutils.EncodingProfile;
        get extended(): boolean;
        get mime(): string;
        get name(): string;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: Profile.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Profile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Profile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Profile.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Profile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Profile.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Profile.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Profile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_encoding_profile(): GstPbutils.EncodingProfile;
        get_extended(): boolean;
        get_mime(): string;
        get_name(): string;
    }

    type DiscovererClass = typeof Discoverer;
    type InformationClass = typeof Information;
    type ProfileClass = typeof Profile;
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
