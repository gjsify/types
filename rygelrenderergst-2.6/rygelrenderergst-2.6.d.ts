
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
import type RygelRenderer from '@girs/rygelrenderer-2.6';
import type RygelCore from '@girs/rygelcore-2.6';
import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GUPnP from '@girs/gupnp-1.2';
import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-2.4';
import type GSSDP from '@girs/gssdp-1.2';
import type GUPnPAV from '@girs/gupnpav-1.0';
import type Gst from '@girs/gst-1.0';

export namespace RygelRendererGst {

    /**
     * RygelRendererGst-2.6
     */


    /**
     * @gir-type Struct
     */
    class PlaybinPlayerError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static NO_ELEMENT: number;

        // Constructors
        constructor(options: { message: string, code: number });
    }


    namespace PlaybinPlayer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::playbin": (pspec: GObject.ParamSpec) => void;
            "notify::supported-profiles": (pspec: GObject.ParamSpec) => void;
            "notify::playback-state": (pspec: GObject.ParamSpec) => void;
            "notify::allowed-playback-speeds": (pspec: GObject.ParamSpec) => void;
            "notify::playback-speed": (pspec: GObject.ParamSpec) => void;
            "notify::uri": (pspec: GObject.ParamSpec) => void;
            "notify::volume": (pspec: GObject.ParamSpec) => void;
            "notify::duration": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::metadata": (pspec: GObject.ParamSpec) => void;
            "notify::mime-type": (pspec: GObject.ParamSpec) => void;
            "notify::can-seek": (pspec: GObject.ParamSpec) => void;
            "notify::can-seek-bytes": (pspec: GObject.ParamSpec) => void;
            "notify::content-features": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::byte-position": (pspec: GObject.ParamSpec) => void;
            "notify::user-agent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, RygelRenderer.MediaPlayer.ConstructorProps {
            playbin: Gst.Element;
            supported_profiles: RygelCore.DLNAProfile[];
            supportedProfiles: RygelCore.DLNAProfile[];
        }
    }

    /**
     * @gir-type Class
     */
    class PlaybinPlayer extends GObject.Object implements RygelRenderer.MediaPlayer {
        static $gtype: GObject.GType<PlaybinPlayer>;

        // Properties
        get playbin(): Gst.Element;
        set playbin(val: Gst.Element);

        /**
         * @read-only
         */
        get supported_profiles(): RygelCore.DLNAProfile[];

        /**
         * @read-only
         */
        get supportedProfiles(): RygelCore.DLNAProfile[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PlaybinPlayer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PlaybinPlayer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof PlaybinPlayer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlaybinPlayer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PlaybinPlayer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlaybinPlayer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PlaybinPlayer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlaybinPlayer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        static instance(): PlaybinPlayer;

        // Methods
        get_playbin(): Gst.Element;

        get_supported_profiles(): RygelCore.DLNAProfile[];

        /** @category Inherited from RygelRenderer.MediaPlayer */
        get playback_state(): string;
        set playback_state(val: string);

        /** @category Inherited from RygelRenderer.MediaPlayer */
        get playbackState(): string;
        set playbackState(val: string);

        /**
         * @read-only
          * @category Inherited from RygelRenderer.MediaPlayer
         */
        get allowed_playback_speeds(): string[];

        /**
         * @read-only
          * @category Inherited from RygelRenderer.MediaPlayer
         */
        get allowedPlaybackSpeeds(): string[];

        /** @category Inherited from RygelRenderer.MediaPlayer */
        get playback_speed(): string;
        set playback_speed(val: string);

        /** @category Inherited from RygelRenderer.MediaPlayer */
        get playbackSpeed(): string;
        set playbackSpeed(val: string);

        /** @category Inherited from RygelRenderer.MediaPlayer */
        get uri(): (string | null);
        set uri(val: (string | null));

        /** @category Inherited from RygelRenderer.MediaPlayer */
        get volume(): number;
        set volume(val: number);

        /**
         * @read-only
          * @category Inherited from RygelRenderer.MediaPlayer
         */
        get duration(): number;

        /**
         * @read-only
          * @category Inherited from RygelRenderer.MediaPlayer
         */
        get size(): number;

        /** @category Inherited from RygelRenderer.MediaPlayer */
        get metadata(): (string | null);
        set metadata(val: (string | null));

        /** @category Inherited from RygelRenderer.MediaPlayer */
        get mime_type(): (string | null);
        set mime_type(val: (string | null));

        /** @category Inherited from RygelRenderer.MediaPlayer */
        get mimeType(): string;
        set mimeType(val: string);

        /**
         * @read-only
          * @category Inherited from RygelRenderer.MediaPlayer
         */
        get can_seek(): boolean;

        /**
         * @read-only
          * @category Inherited from RygelRenderer.MediaPlayer
         */
        get canSeek(): boolean;

        /**
         * @read-only
          * @category Inherited from RygelRenderer.MediaPlayer
         */
        get can_seek_bytes(): boolean;

        /**
         * @read-only
          * @category Inherited from RygelRenderer.MediaPlayer
         */
        get canSeekBytes(): boolean;

        /** @category Inherited from RygelRenderer.MediaPlayer */
        get content_features(): (string | null);
        set content_features(val: (string | null));

        /** @category Inherited from RygelRenderer.MediaPlayer */
        get contentFeatures(): string;
        set contentFeatures(val: string);

        /**
         * @read-only
          * @category Inherited from RygelRenderer.MediaPlayer
         */
        get position(): number;

        /**
         * @read-only
          * @category Inherited from RygelRenderer.MediaPlayer
         */
        get byte_position(): number;

        /**
         * @read-only
          * @category Inherited from RygelRenderer.MediaPlayer
         */
        get bytePosition(): number;

        /** @category Inherited from RygelRenderer.MediaPlayer */
        get user_agent(): (string | null);
        set user_agent(val: (string | null));

        /** @category Inherited from RygelRenderer.MediaPlayer */
        get userAgent(): string;
        set userAgent(val: string);

        /**
         * @param time 
         */
        seek(time: (bigint | number)): boolean;

        /**
         * @param bytes 
         */
        seek_bytes(bytes: (bigint | number)): boolean;

        get_protocols(): string[];

        get_mime_types(): string[];

        /**
         * @param speed 
         */
        play_speed_to_double(speed: string): number;

        get_playback_state(): string;

        /**
         * @param value 
         */
        set_playback_state(value: string): void;

        get_allowed_playback_speeds(): string[];

        get_playback_speed(): string;

        /**
         * @param value 
         */
        set_playback_speed(value: string): void;

        get_uri(): (string | null);

        /**
         * @param value 
         */
        set_uri(value: (string | null)): void;

        get_volume(): number;

        /**
         * @param value 
         */
        set_volume(value: number): void;

        get_duration(): number;

        get_size(): number;

        get_metadata(): (string | null);

        /**
         * @param value 
         */
        set_metadata(value: (string | null)): void;

        get_mime_type(): (string | null);

        /**
         * @param value 
         */
        set_mime_type(value: (string | null)): void;

        get_can_seek(): boolean;

        get_can_seek_bytes(): boolean;

        get_content_features(): (string | null);

        /**
         * @param value 
         */
        set_content_features(value: (string | null)): void;

        get_duration_as_str(): string;

        get_position(): number;

        get_byte_position(): number;

        get_position_as_str(): string;

        get_user_agent(): (string | null);

        /**
         * @param value 
         */
        set_user_agent(value: (string | null)): void;

        get_protocol_info(): string;

        /**
         * @param time 
         * @virtual
         */
        vfunc_seek(time: number): boolean;

        /**
         * @param bytes 
         * @virtual
         */
        vfunc_seek_bytes(bytes: number): boolean;

        /**
         * @virtual
         */
        vfunc_get_protocols(): string[];

        /**
         * @virtual
         */
        vfunc_get_mime_types(): string[];

        /**
         * @virtual
         */
        vfunc_get_playback_state(): string;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_playback_state(value: string): void;

        /**
         * @virtual
         */
        vfunc_get_allowed_playback_speeds(): string[];

        /**
         * @virtual
         */
        vfunc_get_playback_speed(): string;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_playback_speed(value: string): void;

        /**
         * @virtual
         */
        vfunc_get_uri(): (string | null);

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_uri(value: (string | null)): void;

        /**
         * @virtual
         */
        vfunc_get_volume(): number;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_volume(value: number): void;

        /**
         * @virtual
         */
        vfunc_get_duration(): (bigint | number);

        /**
         * @virtual
         */
        vfunc_get_size(): (bigint | number);

        /**
         * @virtual
         */
        vfunc_get_metadata(): (string | null);

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_metadata(value: (string | null)): void;

        /**
         * @virtual
         */
        vfunc_get_mime_type(): (string | null);

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_mime_type(value: (string | null)): void;

        /**
         * @virtual
         */
        vfunc_get_can_seek(): boolean;

        /**
         * @virtual
         */
        vfunc_get_can_seek_bytes(): boolean;

        /**
         * @virtual
         */
        vfunc_get_content_features(): (string | null);

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_content_features(value: (string | null)): void;

        /**
         * @virtual
         */
        vfunc_get_position(): (bigint | number);

        /**
         * @virtual
         */
        vfunc_get_byte_position(): (bigint | number);

        /**
         * @virtual
         */
        vfunc_get_user_agent(): (string | null);

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_user_agent(value: (string | null)): void;
    }


    namespace PlaybinRenderer {
        // Signal signatures
        interface SignalSignatures extends RygelRenderer.MediaRenderer.SignalSignatures {
            "notify::player": (pspec: GObject.ParamSpec) => void;
            "notify::plugin": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::capabilities": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends RygelRenderer.MediaRenderer.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class PlaybinRenderer extends RygelRenderer.MediaRenderer {
        static $gtype: GObject.GType<PlaybinRenderer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PlaybinRenderer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PlaybinRenderer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](title: string): PlaybinRenderer;

        // Signals
        /** @signal */
        connect<K extends keyof PlaybinRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlaybinRenderer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PlaybinRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlaybinRenderer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PlaybinRenderer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlaybinRenderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_playbin(): (Gst.Element | null);
    }


    /**
     * @gir-type Alias
     */
    type PlaybinPlayerClass = typeof PlaybinPlayer;

    /**
     * @gir-type Struct
     */
    abstract class PlaybinPlayerPrivate {
        static $gtype: GObject.GType<PlaybinPlayerPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type PlaybinRendererClass = typeof PlaybinRenderer;

    /**
     * @gir-type Struct
     */
    abstract class PlaybinRendererPrivate {
        static $gtype: GObject.GType<PlaybinRendererPrivate>;
    }


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

export default RygelRendererGst;

// END
