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

export namespace RygelServer {
    // Workaround
    /** @ignore */
    interface IconInfo extends RygelCore.IconInfo {}

    /**
     * RygelServer-2.6
     */

    export namespace LogicalOperator {
        export const $gtype: GObject.GType<LogicalOperator>;
    }

    /**
     * @gir-type Enum
     */
    enum LogicalOperator {
        AND,
        OR,
    }

    export namespace ObjectEventType {
        export const $gtype: GObject.GType<ObjectEventType>;
    }

    /**
     * @gir-type Enum
     */
    enum ObjectEventType {
        ADDED,
        MODIFIED,
        DELETED,
    }

    export namespace SerializerType {
        export const $gtype: GObject.GType<SerializerType>;
    }

    /**
     * @gir-type Enum
     */
    enum SerializerType {
        GENERIC_DIDL,
        DIDL_S,
        M3UEXT,
    }

    /**
     * @gir-type Struct
     */
    class WritableContainerError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static NOT_IMPLEMENTED: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Struct
     */
    class MediaEngineError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static NOT_FOUND: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Struct
     */
    class HTTPSeekRequestError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static INVALID_RANGE: number;
        static BAD_REQUEST: number;
        static OUT_OF_RANGE: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Struct
     */
    class DataSourceError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static GENERAL: number;
        static SEEK_FAILED: number;
        static PLAYSPEED_FAILED: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Struct
     */
    class HTTPRequestError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static UNACCEPTABLE: number;
        static BAD_REQUEST: number;
        static NOT_FOUND: number;
        static INTERNAL_SERVER_ERROR: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Struct
     */
    class PlaySpeedError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static INVALID_SPEED_FORMAT: number;
        static SPEED_NOT_PRESENT: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    namespace AudioItem {
        // Signal signatures
        interface SignalSignatures extends MediaFileItem.SignalSignatures {
            'notify::duration': (pspec: GObject.ParamSpec) => void;
            'notify::bitrate': (pspec: GObject.ParamSpec) => void;
            'notify::sample-freq': (pspec: GObject.ParamSpec) => void;
            'notify::bits-per-sample': (pspec: GObject.ParamSpec) => void;
            'notify::channels': (pspec: GObject.ParamSpec) => void;
            'notify::album': (pspec: GObject.ParamSpec) => void;
            'notify::mime-type': (pspec: GObject.ParamSpec) => void;
            'notify::dlna-profile': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::place-holder': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::ref-id': (pspec: GObject.ParamSpec) => void;
            'notify::upnp-class': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
            'notify::creator': (pspec: GObject.ParamSpec) => void;
            'notify::modified': (pspec: GObject.ParamSpec) => void;
            'notify::object-update-id': (pspec: GObject.ParamSpec) => void;
            'notify::artist': (pspec: GObject.ParamSpec) => void;
            'notify::genre': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::parent-ref': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::ocm-flags': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends MediaFileItem.ConstructorProps {
            duration: number;
            bitrate: number;
            sample_freq: number;
            sampleFreq: number;
            bits_per_sample: number;
            bitsPerSample: number;
            channels: number;
            album: string;
        }
    }

    /**
     * @gir-type Class
     */
    class AudioItem extends MediaFileItem {
        static $gtype: GObject.GType<AudioItem>;

        // Properties

        get duration(): number;
        set duration(val: number);
        get bitrate(): number;
        set bitrate(val: number);
        get sample_freq(): number;
        set sample_freq(val: number);
        get sampleFreq(): number;
        set sampleFreq(val: number);
        get bits_per_sample(): number;
        set bits_per_sample(val: number);
        get bitsPerSample(): number;
        set bitsPerSample(val: number);
        get channels(): number;
        set channels(val: number);
        get album(): string;
        set album(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AudioItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AudioItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, parent: MediaContainer, title: string, upnp_class: string): AudioItem;

        // Signals

        /** @signal */
        connect<K extends keyof AudioItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AudioItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AudioItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AudioItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AudioItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AudioItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_duration(): number;
        /**
         * @param value
         */
        set_duration(value: number): void;
        get_bitrate(): number;
        /**
         * @param value
         */
        set_bitrate(value: number): void;
        get_sample_freq(): number;
        /**
         * @param value
         */
        set_sample_freq(value: number): void;
        get_bits_per_sample(): number;
        /**
         * @param value
         */
        set_bits_per_sample(value: number): void;
        get_channels(): number;
        /**
         * @param value
         */
        set_channels(value: number): void;
        get_album(): string;
        /**
         * @param value
         */
        set_album(value: string): void;
    }

    namespace ImageItem {
        // Signal signatures
        interface SignalSignatures extends MediaFileItem.SignalSignatures {
            'notify::mime-type': (pspec: GObject.ParamSpec) => void;
            'notify::dlna-profile': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::place-holder': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::ref-id': (pspec: GObject.ParamSpec) => void;
            'notify::upnp-class': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
            'notify::creator': (pspec: GObject.ParamSpec) => void;
            'notify::modified': (pspec: GObject.ParamSpec) => void;
            'notify::object-update-id': (pspec: GObject.ParamSpec) => void;
            'notify::artist': (pspec: GObject.ParamSpec) => void;
            'notify::genre': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::parent-ref': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::ocm-flags': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::color-depth': (pspec: GObject.ParamSpec) => void;
            'notify::thumbnails': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends MediaFileItem.ConstructorProps, VisualItem.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ImageItem extends MediaFileItem implements VisualItem {
        static $gtype: GObject.GType<ImageItem>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ImageItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ImageItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, parent: MediaContainer, title: string, upnp_class: string): ImageItem;

        // Signals

        /** @signal */
        connect<K extends keyof ImageItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ImageItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ImageItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ImageItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ImageItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ImageItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /** @category Inherited from RygelServer.VisualItem */
        get width(): number;
        set width(val: number);
        /** @category Inherited from RygelServer.VisualItem */
        get height(): number;
        set height(val: number);
        /** @category Inherited from RygelServer.VisualItem */
        get color_depth(): number;
        set color_depth(val: number);
        /** @category Inherited from RygelServer.VisualItem */
        get colorDepth(): number;
        set colorDepth(val: number);
        /** @category Inherited from RygelServer.VisualItem */
        get thumbnails(): Gee.ArrayList;
        set thumbnails(val: Gee.ArrayList);
        /** @category Inherited from RygelServer.MediaFileItem */
        get mime_type(): string;
        set mime_type(val: string);
        /** @category Inherited from RygelServer.MediaFileItem */
        get mimeType(): string;
        set mimeType(val: string);
        /** @category Inherited from RygelServer.MediaFileItem */
        get dlna_profile(): string;
        set dlna_profile(val: string);
        /** @category Inherited from RygelServer.MediaFileItem */
        get dlnaProfile(): string;
        set dlnaProfile(val: string);
        /** @category Inherited from RygelServer.MediaFileItem */
        get size(): number;
        set size(val: number);
        /** @category Inherited from RygelServer.MediaFileItem */
        get place_holder(): boolean;
        set place_holder(val: boolean);
        /** @category Inherited from RygelServer.MediaFileItem */
        get placeHolder(): boolean;
        set placeHolder(val: boolean);
        get_width(): number;
        /**
         * @param value
         */
        set_width(value: number): void;
        get_height(): number;
        /**
         * @param value
         */
        set_height(value: number): void;
        get_color_depth(): number;
        /**
         * @param value
         */
        set_color_depth(value: number): void;
        get_thumbnails(): Gee.ArrayList;
        /**
         * @param value
         */
        set_thumbnails(value: Gee.ArrayList): void;
        /**
         * @virtual
         */
        vfunc_get_width(): number;
        /**
         * @param value
         * @virtual
         */
        vfunc_set_width(value: number): void;
        /**
         * @virtual
         */
        vfunc_get_height(): number;
        /**
         * @param value
         * @virtual
         */
        vfunc_set_height(value: number): void;
        /**
         * @virtual
         */
        vfunc_get_color_depth(): number;
        /**
         * @param value
         * @virtual
         */
        vfunc_set_color_depth(value: number): void;
        /**
         * @virtual
         */
        vfunc_get_thumbnails(): Gee.ArrayList;
        /**
         * @param value
         * @virtual
         */
        vfunc_set_thumbnails(value: Gee.ArrayList): void;
        get_primary_resource(): MediaResource;
        get_extension(): string;
        /**
         * @param mime_type
         */
        ext_from_mime_type(mime_type: string): string;
        add_engine_resources(): globalThis.Promise<void>;
        /**
         * @param _callback_
         */
        add_engine_resources(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _callback_
         */
        add_engine_resources(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        add_engine_resources_finish(_res_: Gio.AsyncResult): void;
        /**
         * @param server
         */
        add_additional_resources(server: HTTPServer): void;
        get_mime_type(): string;
        /**
         * @param value
         */
        set_mime_type(value: string): void;
        get_dlna_profile(): string;
        /**
         * @param value
         */
        set_dlna_profile(value: string): void;
        get_size(): number;
        /**
         * @param value
         */
        set_size(value: number): void;
        get_place_holder(): boolean;
        /**
         * @param value
         */
        set_place_holder(value: boolean): void;
        /**
         * @virtual
         */
        vfunc_get_primary_resource(): MediaResource;
        /**
         * @virtual
         */
        vfunc_get_extension(): string;
        /**
         * @param _callback_
         * @virtual
         */
        vfunc_add_engine_resources(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _res_
         * @virtual
         */
        vfunc_add_engine_resources_finish(_res_: Gio.AsyncResult): void;
        /**
         * @param server
         * @virtual
         */
        vfunc_add_additional_resources(server: HTTPServer): void;
    }

    namespace LogicalExpression {
        // Signal signatures
        interface SignalSignatures extends SearchExpression.SignalSignatures {}
    }

    /**
     * @gir-type Class
     */
    class LogicalExpression extends SearchExpression {
        static $gtype: GObject.GType<LogicalExpression>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](): LogicalExpression;

        // Signals

        /** @signal */
        connect<K extends keyof LogicalExpression.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LogicalExpression.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LogicalExpression.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LogicalExpression.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof LogicalExpression.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LogicalExpression.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace MediaArtStore {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MediaArtStore extends GObject.Object {
        static $gtype: GObject.GType<MediaArtStore>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediaArtStore.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MediaArtStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MediaArtStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaArtStore.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MediaArtStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaArtStore.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MediaArtStore.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MediaArtStore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): MediaArtStore | null;

        // Methods

        /**
         * @param item
         */
        lookup_media_art(item: MusicItem): Thumbnail | null;
        /**
         * @param item
         * @param file
         * @param data
         * @param mime
         */
        add(item: MusicItem, file: Gio.File, data: Uint8Array | string, mime: string): void;
        /**
         * @param item
         * @param file
         */
        search_media_art_for_file(item: MusicItem, file: Gio.File): void;
    }

    namespace MediaObjects {
        // Signal signatures
        interface SignalSignatures extends Gee.ArrayList.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gee.ArrayList.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MediaObjects extends Gee.ArrayList {
        static $gtype: GObject.GType<MediaObjects>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediaObjects.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MediaObjects.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MediaObjects;

        // Signals

        /** @signal */
        connect<K extends keyof MediaObjects.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaObjects.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MediaObjects.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaObjects.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MediaObjects.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MediaObjects.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param sort_criteria
         */
        sort_by_criteria(sort_criteria: string): void;
    }

    namespace MusicItem {
        // Signal signatures
        interface SignalSignatures extends AudioItem.SignalSignatures {
            'notify::track-number': (pspec: GObject.ParamSpec) => void;
            'notify::album-art': (pspec: GObject.ParamSpec) => void;
            'notify::duration': (pspec: GObject.ParamSpec) => void;
            'notify::bitrate': (pspec: GObject.ParamSpec) => void;
            'notify::sample-freq': (pspec: GObject.ParamSpec) => void;
            'notify::bits-per-sample': (pspec: GObject.ParamSpec) => void;
            'notify::channels': (pspec: GObject.ParamSpec) => void;
            'notify::album': (pspec: GObject.ParamSpec) => void;
            'notify::mime-type': (pspec: GObject.ParamSpec) => void;
            'notify::dlna-profile': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::place-holder': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::ref-id': (pspec: GObject.ParamSpec) => void;
            'notify::upnp-class': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
            'notify::creator': (pspec: GObject.ParamSpec) => void;
            'notify::modified': (pspec: GObject.ParamSpec) => void;
            'notify::object-update-id': (pspec: GObject.ParamSpec) => void;
            'notify::artist': (pspec: GObject.ParamSpec) => void;
            'notify::genre': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::parent-ref': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::ocm-flags': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AudioItem.ConstructorProps {
            track_number: number;
            trackNumber: number;
            album_art: Thumbnail;
            albumArt: Thumbnail;
        }
    }

    /**
     * @gir-type Class
     */
    class MusicItem extends AudioItem {
        static $gtype: GObject.GType<MusicItem>;

        // Properties

        get track_number(): number;
        set track_number(val: number);
        get trackNumber(): number;
        set trackNumber(val: number);
        get album_art(): Thumbnail;
        set album_art(val: Thumbnail);
        get albumArt(): Thumbnail;
        set albumArt(val: Thumbnail);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MusicItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MusicItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, parent: MediaContainer, title: string, upnp_class: string): MusicItem;

        // Signals

        /** @signal */
        connect<K extends keyof MusicItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MusicItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MusicItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MusicItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MusicItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MusicItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        lookup_album_art(): void;
        get_track_number(): number;
        /**
         * @param value
         */
        set_track_number(value: number): void;
        get_album_art(): Thumbnail;
        /**
         * @param value
         */
        set_album_art(value: Thumbnail): void;
    }

    namespace PhotoItem {
        // Signal signatures
        interface SignalSignatures extends ImageItem.SignalSignatures {
            'notify::mime-type': (pspec: GObject.ParamSpec) => void;
            'notify::dlna-profile': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::place-holder': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::ref-id': (pspec: GObject.ParamSpec) => void;
            'notify::upnp-class': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
            'notify::creator': (pspec: GObject.ParamSpec) => void;
            'notify::modified': (pspec: GObject.ParamSpec) => void;
            'notify::object-update-id': (pspec: GObject.ParamSpec) => void;
            'notify::artist': (pspec: GObject.ParamSpec) => void;
            'notify::genre': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::parent-ref': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::ocm-flags': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends ImageItem.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class PhotoItem extends ImageItem {
        static $gtype: GObject.GType<PhotoItem>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PhotoItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PhotoItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, parent: MediaContainer, title: string, upnp_class: string): PhotoItem;

        // Signals

        /** @signal */
        connect<K extends keyof PhotoItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PhotoItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PhotoItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PhotoItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PhotoItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PhotoItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace RelationalExpression {
        // Signal signatures
        interface SignalSignatures extends SearchExpression.SignalSignatures {}
    }

    /**
     * @gir-type Class
     */
    class RelationalExpression extends SearchExpression {
        static $gtype: GObject.GType<RelationalExpression>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](): RelationalExpression;

        // Signals

        /** @signal */
        connect<K extends keyof RelationalExpression.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RelationalExpression.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RelationalExpression.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RelationalExpression.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RelationalExpression.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RelationalExpression.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param str
         */
        compare_string(str?: string | null): boolean;
        /**
         * @param integer
         */
        compare_int(integer: number): boolean;
        /**
         * @param integer
         */
        compare_uint(integer: number): boolean;
    }

    namespace SimpleContainer {
        // Signal signatures
        interface SignalSignatures extends MediaContainer.SignalSignatures {
            'notify::child-count': (pspec: GObject.ParamSpec) => void;
            'notify::empty-child-count': (pspec: GObject.ParamSpec) => void;
            'notify::all-child-count': (pspec: GObject.ParamSpec) => void;
            'notify::create-mode-enabled': (pspec: GObject.ParamSpec) => void;
            'notify::sort-criteria': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::ref-id': (pspec: GObject.ParamSpec) => void;
            'notify::upnp-class': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
            'notify::creator': (pspec: GObject.ParamSpec) => void;
            'notify::modified': (pspec: GObject.ParamSpec) => void;
            'notify::object-update-id': (pspec: GObject.ParamSpec) => void;
            'notify::artist': (pspec: GObject.ParamSpec) => void;
            'notify::genre': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::parent-ref': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::ocm-flags': (pspec: GObject.ParamSpec) => void;
            'notify::search-classes': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends MediaContainer.ConstructorProps, SearchableContainer.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class SimpleContainer extends MediaContainer implements SearchableContainer {
        static $gtype: GObject.GType<SimpleContainer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SimpleContainer.SignalSignatures;

        // Fields

        children: MediaObjects;

        // Constructors

        constructor(properties?: Partial<SimpleContainer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, parent: MediaContainer | null, title: string): SimpleContainer;

        static root(title: string): SimpleContainer;

        // Signals

        /** @signal */
        connect<K extends keyof SimpleContainer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SimpleContainer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SimpleContainer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SimpleContainer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SimpleContainer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SimpleContainer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param child
         */
        add_child_item(child: MediaItem): void;
        get_all_children(): MediaObjects;
        /**
         * @param child
         */
        add_child_container(child: MediaContainer): void;
        /**
         * @param child
         */
        remove_child(child: MediaObject): void;
        clear(): void;
        /**
         * @param child_id
         */
        is_child_id_unique(child_id: string): boolean;
        /** @category Inherited from RygelServer.SearchableContainer */
        get search_classes(): Gee.ArrayList;
        set search_classes(val: Gee.ArrayList);
        /** @category Inherited from RygelServer.SearchableContainer */
        get searchClasses(): Gee.ArrayList;
        set searchClasses(val: Gee.ArrayList);
        /** @category Inherited from RygelServer.MediaContainer */
        get child_count(): number;
        set child_count(val: number);
        /** @category Inherited from RygelServer.MediaContainer */
        get childCount(): number;
        set childCount(val: number);
        /** @category Inherited from RygelServer.MediaContainer */
        get empty_child_count(): number;
        set empty_child_count(val: number);
        /** @category Inherited from RygelServer.MediaContainer */
        get emptyChildCount(): number;
        set emptyChildCount(val: number);
        /** @category Inherited from RygelServer.MediaContainer */
        get all_child_count(): number;
        /** @category Inherited from RygelServer.MediaContainer */
        get allChildCount(): number;
        /** @category Inherited from RygelServer.MediaContainer */
        get create_mode_enabled(): boolean;
        set create_mode_enabled(val: boolean);
        /** @category Inherited from RygelServer.MediaContainer */
        get createModeEnabled(): boolean;
        set createModeEnabled(val: boolean);
        /** @category Inherited from RygelServer.MediaContainer */
        get sort_criteria(): string;
        set sort_criteria(val: string);
        /** @category Inherited from RygelServer.MediaContainer */
        get sortCriteria(): string;
        set sortCriteria(val: string);
        /**
         * @param expression
         * @param offset
         * @param max_count
         * @param sort_criteria
         * @param cancellable
         */
        search(
            expression: SearchExpression | null,
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[MediaObjects | null, number]>;
        /**
         * @param expression
         * @param offset
         * @param max_count
         * @param sort_criteria
         * @param cancellable
         * @param _callback_
         */
        search(
            expression: SearchExpression | null,
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param expression
         * @param offset
         * @param max_count
         * @param sort_criteria
         * @param cancellable
         * @param _callback_
         */
        search(
            expression: SearchExpression | null,
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[MediaObjects | null, number]> | void;
        /**
         * @param _res_
         */
        search_finish(_res_: Gio.AsyncResult): [MediaObjects | null, number];
        /**
         * @param expression
         * @param offset
         * @param max_count
         * @param sort_criteria
         * @param cancellable
         */
        simple_search(
            expression: SearchExpression | null,
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[MediaObjects | null, number]>;
        /**
         * @param expression
         * @param offset
         * @param max_count
         * @param sort_criteria
         * @param cancellable
         * @param _callback_
         */
        simple_search(
            expression: SearchExpression | null,
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param expression
         * @param offset
         * @param max_count
         * @param sort_criteria
         * @param cancellable
         * @param _callback_
         */
        simple_search(
            expression: SearchExpression | null,
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[MediaObjects | null, number]> | void;
        /**
         * @param _res_
         */
        simple_search_finish(_res_: Gio.AsyncResult): [MediaObjects | null, number];
        /**
         * @param id
         * @param cancellable
         */
        find_object(id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<MediaObject | null>;
        /**
         * @param id
         * @param cancellable
         * @param _callback_
         */
        find_object(
            id: string,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param id
         * @param cancellable
         * @param _callback_
         */
        find_object(
            id: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<MediaObject | null> | void;
        /**
         * @param _res_
         */
        find_object_finish(_res_: Gio.AsyncResult): MediaObject | null;
        get_search_classes(): Gee.ArrayList;
        /**
         * @param value
         */
        set_search_classes(value: Gee.ArrayList): void;
        /**
         * @param expression
         * @param offset
         * @param max_count
         * @param sort_criteria
         * @param cancellable
         * @param _callback_
         * @virtual
         */
        vfunc_search(
            expression: SearchExpression | null,
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param _res_
         * @virtual
         */
        vfunc_search_finish(_res_: Gio.AsyncResult): [MediaObjects | null, number];
        /**
         * @virtual
         */
        vfunc_get_search_classes(): Gee.ArrayList;
        /**
         * @param value
         * @virtual
         */
        vfunc_set_search_classes(value: Gee.ArrayList): void;
        /**
         * @param offset
         * @param max_count
         * @param sort_criteria
         * @param cancellable
         */
        get_children(
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<MediaObjects | null>;
        /**
         * @param offset
         * @param max_count
         * @param sort_criteria
         * @param cancellable
         * @param _callback_
         */
        get_children(
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param offset
         * @param max_count
         * @param sort_criteria
         * @param cancellable
         * @param _callback_
         */
        get_children(
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<MediaObjects | null> | void;
        /**
         * @param _res_
         */
        get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null;
        /**
         * @param object
         * @param event_type
         * @param sub_tree_update
         */
        updated(object: MediaObject | null, event_type: ObjectEventType | null, sub_tree_update: boolean): void;
        get_child_count(): number;
        /**
         * @param value
         */
        set_child_count(value: number): void;
        get_empty_child_count(): number;
        /**
         * @param value
         */
        set_empty_child_count(value: number): void;
        get_all_child_count(): number;
        get_create_mode_enabled(): boolean;
        /**
         * @param value
         */
        set_create_mode_enabled(value: boolean): void;
        get_sort_criteria(): string;
        /**
         * @param value
         */
        set_sort_criteria(value: string): void;
        /**
         * @param offset
         * @param max_count
         * @param sort_criteria
         * @param cancellable
         * @param _callback_
         * @virtual
         */
        vfunc_get_children(
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param _res_
         * @virtual
         */
        vfunc_get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null;
        /**
         * @param id
         * @param cancellable
         * @param _callback_
         * @virtual
         */
        vfunc_find_object(
            id: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param _res_
         * @virtual
         */
        vfunc_find_object_finish(_res_: Gio.AsyncResult): MediaObject | null;
    }

    namespace Subtitle {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }

    /**
     * @gir-type Class
     */
    class Subtitle {
        static $gtype: GObject.GType<Subtitle>;

        // Fields

        ref_count: number;
        uri: string;
        mime_type: string;
        caption_type: string;
        file_extension: string;
        size: number;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](mime_type: string, caption_type: string, file_extension: string): Subtitle;

        // Signals

        /** @signal */
        connect<K extends keyof Subtitle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Subtitle.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Subtitle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Subtitle.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Subtitle.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Subtitle.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param protocol
         * @param index
         * @virtual
         */
        vfunc_get_resource(protocol: string, index: number): MediaResource;

        // Methods

        /**
         * @param protocol
         * @param index
         */
        get_resource(protocol: string, index: number): MediaResource;
    }

    namespace Thumbnail {
        // Signal signatures
        interface SignalSignatures extends RygelCore.IconInfo.SignalSignatures {}
    }

    /**
     * @gir-type Class
     */
    class Thumbnail extends RygelCore.IconInfo {
        static $gtype: GObject.GType<Thumbnail>;

        // Fields

        dlna_profile: string;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](mime_type: string, dlna_profile: string, file_extension: string): Thumbnail;
        // Conflicted with RygelCore.IconInfo.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof Thumbnail.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Thumbnail.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Thumbnail.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Thumbnail.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Thumbnail.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Thumbnail.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param protocol
         * @param index
         * @virtual
         */
        vfunc_get_resource(protocol: string, index: number): MediaResource;

        // Methods

        /**
         * @param protocol
         * @param index
         */
        get_resource(protocol: string, index: number): MediaResource;
    }

    namespace VideoItem {
        // Signal signatures
        interface SignalSignatures extends AudioItem.SignalSignatures {
            'notify::author': (pspec: GObject.ParamSpec) => void;
            'notify::subtitles': (pspec: GObject.ParamSpec) => void;
            'notify::duration': (pspec: GObject.ParamSpec) => void;
            'notify::bitrate': (pspec: GObject.ParamSpec) => void;
            'notify::sample-freq': (pspec: GObject.ParamSpec) => void;
            'notify::bits-per-sample': (pspec: GObject.ParamSpec) => void;
            'notify::channels': (pspec: GObject.ParamSpec) => void;
            'notify::album': (pspec: GObject.ParamSpec) => void;
            'notify::mime-type': (pspec: GObject.ParamSpec) => void;
            'notify::dlna-profile': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::place-holder': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::ref-id': (pspec: GObject.ParamSpec) => void;
            'notify::upnp-class': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
            'notify::creator': (pspec: GObject.ParamSpec) => void;
            'notify::modified': (pspec: GObject.ParamSpec) => void;
            'notify::object-update-id': (pspec: GObject.ParamSpec) => void;
            'notify::artist': (pspec: GObject.ParamSpec) => void;
            'notify::genre': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::parent-ref': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::ocm-flags': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::color-depth': (pspec: GObject.ParamSpec) => void;
            'notify::thumbnails': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AudioItem.ConstructorProps, VisualItem.ConstructorProps {
            author: string;
            subtitles: Gee.ArrayList;
        }
    }

    /**
     * @gir-type Class
     */
    class VideoItem extends AudioItem implements VisualItem {
        static $gtype: GObject.GType<VideoItem>;

        // Properties

        get author(): string;
        set author(val: string);
        get subtitles(): Gee.ArrayList;
        set subtitles(val: Gee.ArrayList);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VideoItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VideoItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, parent: MediaContainer, title: string, upnp_class: string): VideoItem;

        // Signals

        /** @signal */
        connect<K extends keyof VideoItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VideoItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VideoItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VideoItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VideoItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VideoItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param http_server
         * @virtual
         */
        vfunc_add_subtitle_resources(http_server: HTTPServer): void;

        // Methods

        /**
         * @param http_server
         */
        add_subtitle_resources(http_server: HTTPServer): void;
        get_author(): string;
        /**
         * @param value
         */
        set_author(value: string): void;
        get_subtitles(): Gee.ArrayList;
        /**
         * @param value
         */
        set_subtitles(value: Gee.ArrayList): void;
        /** @category Inherited from RygelServer.VisualItem */
        get width(): number;
        set width(val: number);
        /** @category Inherited from RygelServer.VisualItem */
        get height(): number;
        set height(val: number);
        /** @category Inherited from RygelServer.VisualItem */
        get color_depth(): number;
        set color_depth(val: number);
        /** @category Inherited from RygelServer.VisualItem */
        get colorDepth(): number;
        set colorDepth(val: number);
        /** @category Inherited from RygelServer.VisualItem */
        get thumbnails(): Gee.ArrayList;
        set thumbnails(val: Gee.ArrayList);
        /** @category Inherited from RygelServer.MediaFileItem */
        get mime_type(): string;
        set mime_type(val: string);
        /** @category Inherited from RygelServer.MediaFileItem */
        get mimeType(): string;
        set mimeType(val: string);
        /** @category Inherited from RygelServer.MediaFileItem */
        get dlna_profile(): string;
        set dlna_profile(val: string);
        /** @category Inherited from RygelServer.MediaFileItem */
        get dlnaProfile(): string;
        set dlnaProfile(val: string);
        /** @category Inherited from RygelServer.MediaFileItem */
        get size(): number;
        set size(val: number);
        /** @category Inherited from RygelServer.MediaFileItem */
        get place_holder(): boolean;
        set place_holder(val: boolean);
        /** @category Inherited from RygelServer.MediaFileItem */
        get placeHolder(): boolean;
        set placeHolder(val: boolean);
        get_width(): number;
        /**
         * @param value
         */
        set_width(value: number): void;
        get_height(): number;
        /**
         * @param value
         */
        set_height(value: number): void;
        get_color_depth(): number;
        /**
         * @param value
         */
        set_color_depth(value: number): void;
        get_thumbnails(): Gee.ArrayList;
        /**
         * @param value
         */
        set_thumbnails(value: Gee.ArrayList): void;
        /**
         * @virtual
         */
        vfunc_get_width(): number;
        /**
         * @param value
         * @virtual
         */
        vfunc_set_width(value: number): void;
        /**
         * @virtual
         */
        vfunc_get_height(): number;
        /**
         * @param value
         * @virtual
         */
        vfunc_set_height(value: number): void;
        /**
         * @virtual
         */
        vfunc_get_color_depth(): number;
        /**
         * @param value
         * @virtual
         */
        vfunc_set_color_depth(value: number): void;
        /**
         * @virtual
         */
        vfunc_get_thumbnails(): Gee.ArrayList;
        /**
         * @param value
         * @virtual
         */
        vfunc_set_thumbnails(value: Gee.ArrayList): void;
        get_primary_resource(): MediaResource;
        get_extension(): string;
        /**
         * @param mime_type
         */
        ext_from_mime_type(mime_type: string): string;
        add_engine_resources(): globalThis.Promise<void>;
        /**
         * @param _callback_
         */
        add_engine_resources(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _callback_
         */
        add_engine_resources(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        add_engine_resources_finish(_res_: Gio.AsyncResult): void;
        /**
         * @param server
         */
        add_additional_resources(server: HTTPServer): void;
        get_mime_type(): string;
        /**
         * @param value
         */
        set_mime_type(value: string): void;
        get_dlna_profile(): string;
        /**
         * @param value
         */
        set_dlna_profile(value: string): void;
        get_size(): number;
        /**
         * @param value
         */
        set_size(value: number): void;
        get_place_holder(): boolean;
        /**
         * @param value
         */
        set_place_holder(value: boolean): void;
        /**
         * @virtual
         */
        vfunc_get_primary_resource(): MediaResource;
        /**
         * @virtual
         */
        vfunc_get_extension(): string;
        /**
         * @param _callback_
         * @virtual
         */
        vfunc_add_engine_resources(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _res_
         * @virtual
         */
        vfunc_add_engine_resources_finish(_res_: Gio.AsyncResult): void;
        /**
         * @param server
         * @virtual
         */
        vfunc_add_additional_resources(server: HTTPServer): void;
    }

    namespace MediaContainer {
        // Signal signatures
        interface SignalSignatures extends MediaObject.SignalSignatures {
            /**
             * @signal
             */
            'container-updated': (
                arg0: MediaContainer,
                arg1: MediaObject,
                arg2: ObjectEventType,
                arg3: boolean,
            ) => void;
            /**
             * @signal
             */
            'sub-tree-updates-finished': (arg0: MediaObject) => void;
            'notify::child-count': (pspec: GObject.ParamSpec) => void;
            'notify::empty-child-count': (pspec: GObject.ParamSpec) => void;
            'notify::all-child-count': (pspec: GObject.ParamSpec) => void;
            'notify::create-mode-enabled': (pspec: GObject.ParamSpec) => void;
            'notify::sort-criteria': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::ref-id': (pspec: GObject.ParamSpec) => void;
            'notify::upnp-class': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
            'notify::creator': (pspec: GObject.ParamSpec) => void;
            'notify::modified': (pspec: GObject.ParamSpec) => void;
            'notify::object-update-id': (pspec: GObject.ParamSpec) => void;
            'notify::artist': (pspec: GObject.ParamSpec) => void;
            'notify::genre': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::parent-ref': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::ocm-flags': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends MediaObject.ConstructorProps {
            child_count: number;
            childCount: number;
            empty_child_count: number;
            emptyChildCount: number;
            all_child_count: number;
            allChildCount: number;
            create_mode_enabled: boolean;
            createModeEnabled: boolean;
            sort_criteria: string;
            sortCriteria: string;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class MediaContainer extends MediaObject {
        static $gtype: GObject.GType<MediaContainer>;

        // Properties

        get child_count(): number;
        set child_count(val: number);
        get childCount(): number;
        set childCount(val: number);
        get empty_child_count(): number;
        set empty_child_count(val: number);
        get emptyChildCount(): number;
        set emptyChildCount(val: number);
        get all_child_count(): number;
        get allChildCount(): number;
        get create_mode_enabled(): boolean;
        set create_mode_enabled(val: boolean);
        get createModeEnabled(): boolean;
        set createModeEnabled(val: boolean);
        get sort_criteria(): string;
        set sort_criteria(val: string);
        get sortCriteria(): string;
        set sortCriteria(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediaContainer.SignalSignatures;

        // Fields

        update_id: number;
        storage_used: number;
        total_deleted_child_count: number;

        // Constructors

        constructor(properties?: Partial<MediaContainer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MediaContainer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaContainer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MediaContainer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaContainer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MediaContainer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MediaContainer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param a
         * @param b
         */
        static equal_func(a: MediaContainer, b: MediaContainer): boolean;

        // Virtual methods

        /**
         * @param offset
         * @param max_count
         * @param sort_criteria
         * @param cancellable
         * @param _callback_
         * @virtual
         */
        vfunc_get_children(
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param _res_
         * @virtual
         */
        vfunc_get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null;
        /**
         * @param id
         * @param cancellable
         * @param _callback_
         * @virtual
         */
        vfunc_find_object(
            id: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param _res_
         * @virtual
         */
        vfunc_find_object_finish(_res_: Gio.AsyncResult): MediaObject | null;

        // Methods

        /**
         * @param offset
         * @param max_count
         * @param sort_criteria
         * @param cancellable
         */
        get_children(
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<MediaObjects | null>;
        /**
         * @param offset
         * @param max_count
         * @param sort_criteria
         * @param cancellable
         * @param _callback_
         */
        get_children(
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param offset
         * @param max_count
         * @param sort_criteria
         * @param cancellable
         * @param _callback_
         */
        get_children(
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<MediaObjects | null> | void;
        /**
         * @param _res_
         */
        get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null;
        /**
         * @param id
         * @param cancellable
         */
        find_object(id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<MediaObject | null>;
        /**
         * @param id
         * @param cancellable
         * @param _callback_
         */
        find_object(
            id: string,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param id
         * @param cancellable
         * @param _callback_
         */
        find_object(
            id: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<MediaObject | null> | void;
        /**
         * @param _res_
         */
        find_object_finish(_res_: Gio.AsyncResult): MediaObject | null;
        /**
         * @param object
         * @param event_type
         * @param sub_tree_update
         */
        updated(object: MediaObject | null, event_type: ObjectEventType | null, sub_tree_update: boolean): void;
        get_child_count(): number;
        /**
         * @param value
         */
        set_child_count(value: number): void;
        get_empty_child_count(): number;
        /**
         * @param value
         */
        set_empty_child_count(value: number): void;
        get_all_child_count(): number;
        get_create_mode_enabled(): boolean;
        /**
         * @param value
         */
        set_create_mode_enabled(value: boolean): void;
        get_sort_criteria(): string;
        /**
         * @param value
         */
        set_sort_criteria(value: string): void;
    }

    namespace MediaItem {
        // Signal signatures
        interface SignalSignatures extends MediaObject.SignalSignatures {
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::ref-id': (pspec: GObject.ParamSpec) => void;
            'notify::upnp-class': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
            'notify::creator': (pspec: GObject.ParamSpec) => void;
            'notify::modified': (pspec: GObject.ParamSpec) => void;
            'notify::object-update-id': (pspec: GObject.ParamSpec) => void;
            'notify::artist': (pspec: GObject.ParamSpec) => void;
            'notify::genre': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::parent-ref': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::ocm-flags': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends MediaObject.ConstructorProps {
            description: string;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class MediaItem extends MediaObject {
        static $gtype: GObject.GType<MediaItem>;

        // Properties

        get description(): string;
        set description(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediaItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MediaItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MediaItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MediaItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MediaItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MediaItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_description(): string;
        /**
         * @param value
         */
        set_description(value: string): void;
    }

    namespace MediaFileItem {
        // Signal signatures
        interface SignalSignatures extends MediaItem.SignalSignatures {
            'notify::mime-type': (pspec: GObject.ParamSpec) => void;
            'notify::dlna-profile': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::place-holder': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::ref-id': (pspec: GObject.ParamSpec) => void;
            'notify::upnp-class': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
            'notify::creator': (pspec: GObject.ParamSpec) => void;
            'notify::modified': (pspec: GObject.ParamSpec) => void;
            'notify::object-update-id': (pspec: GObject.ParamSpec) => void;
            'notify::artist': (pspec: GObject.ParamSpec) => void;
            'notify::genre': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::parent-ref': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::ocm-flags': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends MediaItem.ConstructorProps {
            mime_type: string;
            mimeType: string;
            dlna_profile: string;
            dlnaProfile: string;
            size: number;
            place_holder: boolean;
            placeHolder: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class MediaFileItem extends MediaItem {
        static $gtype: GObject.GType<MediaFileItem>;

        // Properties

        get mime_type(): string;
        set mime_type(val: string);
        get mimeType(): string;
        set mimeType(val: string);
        get dlna_profile(): string;
        set dlna_profile(val: string);
        get dlnaProfile(): string;
        set dlnaProfile(val: string);
        get size(): number;
        set size(val: number);
        get place_holder(): boolean;
        set place_holder(val: boolean);
        get placeHolder(): boolean;
        set placeHolder(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediaFileItem.SignalSignatures;

        // Fields

        rygel_media_file_item_mime_to_ext: Gee.HashMap;

        // Constructors

        constructor(properties?: Partial<MediaFileItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MediaFileItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaFileItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MediaFileItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaFileItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MediaFileItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MediaFileItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_get_primary_resource(): MediaResource;
        /**
         * @virtual
         */
        vfunc_get_extension(): string;
        /**
         * @param _callback_
         * @virtual
         */
        vfunc_add_engine_resources(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _res_
         * @virtual
         */
        vfunc_add_engine_resources_finish(_res_: Gio.AsyncResult): void;
        /**
         * @param server
         * @virtual
         */
        vfunc_add_additional_resources(server: HTTPServer): void;

        // Methods

        get_primary_resource(): MediaResource;
        get_extension(): string;
        /**
         * @param mime_type
         */
        ext_from_mime_type(mime_type: string): string;
        add_engine_resources(): globalThis.Promise<void>;
        /**
         * @param _callback_
         */
        add_engine_resources(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _callback_
         */
        add_engine_resources(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        add_engine_resources_finish(_res_: Gio.AsyncResult): void;
        /**
         * @param server
         */
        add_additional_resources(server: HTTPServer): void;
        get_mime_type(): string;
        /**
         * @param value
         */
        set_mime_type(value: string): void;
        get_dlna_profile(): string;
        /**
         * @param value
         */
        set_dlna_profile(value: string): void;
        get_size(): number;
        /**
         * @param value
         */
        set_size(value: number): void;
        get_place_holder(): boolean;
        /**
         * @param value
         */
        set_place_holder(value: boolean): void;
    }

    namespace MediaObject {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::ref-id': (pspec: GObject.ParamSpec) => void;
            'notify::upnp-class': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
            'notify::creator': (pspec: GObject.ParamSpec) => void;
            'notify::modified': (pspec: GObject.ParamSpec) => void;
            'notify::object-update-id': (pspec: GObject.ParamSpec) => void;
            'notify::artist': (pspec: GObject.ParamSpec) => void;
            'notify::genre': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::parent-ref': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::ocm-flags': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: string;
            ref_id: string;
            refId: string;
            upnp_class: string;
            upnpClass: string;
            date: string;
            creator: string;
            modified: number;
            object_update_id: number;
            objectUpdateId: number;
            artist: string;
            genre: string;
            parent: MediaContainer;
            parent_ref: MediaContainer;
            parentRef: MediaContainer;
            title: string;
            ocm_flags: GUPnPAV.OCMFlags;
            ocmFlags: GUPnPAV.OCMFlags;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class MediaObject extends GObject.Object {
        static $gtype: GObject.GType<MediaObject>;

        // Properties

        get id(): string;
        set id(val: string);
        get ref_id(): string;
        set ref_id(val: string);
        get refId(): string;
        set refId(val: string);
        get upnp_class(): string;
        set upnp_class(val: string);
        get upnpClass(): string;
        set upnpClass(val: string);
        get date(): string;
        set date(val: string);
        get creator(): string;
        set creator(val: string);
        get modified(): number;
        set modified(val: number);
        get object_update_id(): number;
        set object_update_id(val: number);
        get objectUpdateId(): number;
        set objectUpdateId(val: number);
        get artist(): string;
        set artist(val: string);
        get genre(): string;
        set genre(val: string);
        get parent(): MediaContainer;
        set parent(val: MediaContainer);
        get parent_ref(): MediaContainer;
        set parent_ref(val: MediaContainer);
        get parentRef(): MediaContainer;
        set parentRef(val: MediaContainer);
        get title(): string;
        set title(val: string);
        get ocm_flags(): GUPnPAV.OCMFlags;
        get ocmFlags(): GUPnPAV.OCMFlags;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediaObject.SignalSignatures;

        // Fields

        parent_ptr: MediaContainer;

        // Constructors

        constructor(properties?: Partial<MediaObject.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MediaObject.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaObject.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MediaObject.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaObject.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MediaObject.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MediaObject.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param replacement_pairs
         * @param source_string
         */
        static apply_replacements(
            replacement_pairs: { [key: string]: any } | GLib.HashTable<string, string>,
            source_string?: string | null,
        ): string | null;

        // Virtual methods

        /**
         * @param uri
         * @virtual
         */
        vfunc_add_uri(uri: string): void;
        /**
         * @param serializer
         * @param http_server
         * @virtual
         */
        vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null;
        /**
         * @param request
         * @param resource
         * @virtual
         */
        vfunc_create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null;
        /**
         * @param didl_object
         * @virtual
         */
        vfunc_apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void;
        /**
         * @param media_object
         * @param property
         * @virtual
         */
        vfunc_compare_by_property(media_object: MediaObject, property: string): number;
        /**
         * @virtual
         */
        vfunc_get_ocm_flags(): GUPnPAV.OCMFlags;

        // Methods

        get_uris(): Gee.List;
        get_primary_uri(): string | null;
        /**
         * @param uri
         */
        add_uri(uri: string): void;
        /**
         * @param cancellable
         */
        get_writable(cancellable?: Gio.Cancellable | null): globalThis.Promise<Gio.File | null>;
        /**
         * @param cancellable
         * @param _callback_
         */
        get_writable(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param cancellable
         * @param _callback_
         */
        get_writable(
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Gio.File | null> | void;
        /**
         * @param _res_
         */
        get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null;
        /**
         * @param cancellable
         */
        get_writables(cancellable?: Gio.Cancellable | null): globalThis.Promise<Gee.ArrayList>;
        /**
         * @param cancellable
         * @param _callback_
         */
        get_writables(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param cancellable
         * @param _callback_
         */
        get_writables(
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Gee.ArrayList> | void;
        /**
         * @param _res_
         */
        get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList;
        get_resource_list(): Gee.List;
        /**
         * @param resource_name
         */
        get_resource_by_name(resource_name: string): MediaResource | null;
        /**
         * @param serializer
         * @param http_server
         */
        serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null;
        /**
         * @param didl_object
         * @param http_server
         */
        serialize_resource_list(didl_object: GUPnPAV.DIDLLiteObject, http_server: HTTPServer): void;
        /**
         * @param request
         * @param resource
         */
        create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null;
        /**
         * @param didl_object
         */
        apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void;
        /**
         * @param media_object
         * @param property
         */
        compare_by_property(media_object: MediaObject, property: string): number;
        /**
         * @param prop1
         * @param prop2
         */
        compare_string_props(prop1: string, prop2: string): number;
        /**
         * @param prop1
         * @param prop2
         */
        compare_int_props(prop1: number, prop2: number): number;
        get_id(): string;
        /**
         * @param value
         */
        set_id(value: string): void;
        get_ref_id(): string;
        /**
         * @param value
         */
        set_ref_id(value: string): void;
        get_upnp_class(): string;
        /**
         * @param value
         */
        set_upnp_class(value: string): void;
        get_date(): string;
        /**
         * @param value
         */
        set_date(value: string): void;
        get_creator(): string;
        /**
         * @param value
         */
        set_creator(value: string): void;
        get_modified(): number;
        /**
         * @param value
         */
        set_modified(value: number): void;
        get_object_update_id(): number;
        /**
         * @param value
         */
        set_object_update_id(value: number): void;
        get_artist(): string;
        /**
         * @param value
         */
        set_artist(value: string): void;
        get_genre(): string;
        /**
         * @param value
         */
        set_genre(value: string): void;
        get_parent(): MediaContainer;
        /**
         * @param value
         */
        set_parent(value: MediaContainer): void;
        get_parent_ref(): MediaContainer;
        /**
         * @param value
         */
        set_parent_ref(value: MediaContainer): void;
        get_title(): string;
        /**
         * @param value
         */
        set_title(value: string): void;
        get_ocm_flags(): GUPnPAV.OCMFlags;
    }

    namespace MediaResource {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::uri': (pspec: GObject.ParamSpec) => void;
            'notify::import-uri': (pspec: GObject.ParamSpec) => void;
            'notify::extension': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::cleartext-size': (pspec: GObject.ParamSpec) => void;
            'notify::duration': (pspec: GObject.ParamSpec) => void;
            'notify::bitrate': (pspec: GObject.ParamSpec) => void;
            'notify::bits-per-sample': (pspec: GObject.ParamSpec) => void;
            'notify::color-depth': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::audio-channels': (pspec: GObject.ParamSpec) => void;
            'notify::sample-freq': (pspec: GObject.ParamSpec) => void;
            'notify::protocol': (pspec: GObject.ParamSpec) => void;
            'notify::mime-type': (pspec: GObject.ParamSpec) => void;
            'notify::dlna-profile': (pspec: GObject.ParamSpec) => void;
            'notify::network': (pspec: GObject.ParamSpec) => void;
            'notify::dlna-conversion': (pspec: GObject.ParamSpec) => void;
            'notify::dlna-flags': (pspec: GObject.ParamSpec) => void;
            'notify::dlna-operation': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            uri: string;
            import_uri: string;
            importUri: string;
            extension: string;
            size: number;
            cleartext_size: number;
            cleartextSize: number;
            duration: number;
            bitrate: number;
            bits_per_sample: number;
            bitsPerSample: number;
            color_depth: number;
            colorDepth: number;
            width: number;
            height: number;
            audio_channels: number;
            audioChannels: number;
            sample_freq: number;
            sampleFreq: number;
            protocol: string;
            mime_type: string;
            mimeType: string;
            dlna_profile: string;
            dlnaProfile: string;
            network: string;
            dlna_conversion: GUPnPAV.DLNAConversion;
            dlnaConversion: GUPnPAV.DLNAConversion;
            dlna_flags: GUPnPAV.DLNAFlags;
            dlnaFlags: GUPnPAV.DLNAFlags;
            dlna_operation: GUPnPAV.DLNAOperation;
            dlnaOperation: GUPnPAV.DLNAOperation;
        }
    }

    /**
     * @gir-type Class
     */
    class MediaResource extends GObject.Object {
        static $gtype: GObject.GType<MediaResource>;

        // Properties

        get uri(): string;
        set uri(val: string);
        get import_uri(): string;
        set import_uri(val: string);
        get importUri(): string;
        set importUri(val: string);
        get extension(): string;
        set extension(val: string);
        get size(): number;
        set size(val: number);
        get cleartext_size(): number;
        set cleartext_size(val: number);
        get cleartextSize(): number;
        set cleartextSize(val: number);
        get duration(): number;
        set duration(val: number);
        get bitrate(): number;
        set bitrate(val: number);
        get bits_per_sample(): number;
        set bits_per_sample(val: number);
        get bitsPerSample(): number;
        set bitsPerSample(val: number);
        get color_depth(): number;
        set color_depth(val: number);
        get colorDepth(): number;
        set colorDepth(val: number);
        get width(): number;
        set width(val: number);
        get height(): number;
        set height(val: number);
        get audio_channels(): number;
        set audio_channels(val: number);
        get audioChannels(): number;
        set audioChannels(val: number);
        get sample_freq(): number;
        set sample_freq(val: number);
        get sampleFreq(): number;
        set sampleFreq(val: number);
        get protocol(): string;
        set protocol(val: string);
        get mime_type(): string;
        set mime_type(val: string);
        get mimeType(): string;
        set mimeType(val: string);
        get dlna_profile(): string;
        set dlna_profile(val: string);
        get dlnaProfile(): string;
        set dlnaProfile(val: string);
        get network(): string;
        set network(val: string);
        get dlna_conversion(): GUPnPAV.DLNAConversion;
        set dlna_conversion(val: GUPnPAV.DLNAConversion);
        get dlnaConversion(): GUPnPAV.DLNAConversion;
        set dlnaConversion(val: GUPnPAV.DLNAConversion);
        get dlna_flags(): GUPnPAV.DLNAFlags;
        set dlna_flags(val: GUPnPAV.DLNAFlags);
        get dlnaFlags(): GUPnPAV.DLNAFlags;
        set dlnaFlags(val: GUPnPAV.DLNAFlags);
        get dlna_operation(): GUPnPAV.DLNAOperation;
        set dlna_operation(val: GUPnPAV.DLNAOperation);
        get dlnaOperation(): GUPnPAV.DLNAOperation;
        set dlnaOperation(val: GUPnPAV.DLNAOperation);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediaResource.SignalSignatures;

        // Fields

        play_speeds: string[];
        play_speeds_length1: number;

        // Constructors

        constructor(properties?: Partial<MediaResource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): MediaResource;

        static from_resource(name: string, that: MediaResource): MediaResource;

        static from_didl_lite_resource(name: string, didl_resource: GUPnPAV.DIDLLiteResource): MediaResource;

        // Signals

        /** @signal */
        connect<K extends keyof MediaResource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaResource.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MediaResource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaResource.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MediaResource.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MediaResource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        dup(): MediaResource;
        get_name(): string;
        /**
         * @param didl_resource
         * @param replacements
         */
        serialize(
            didl_resource: GUPnPAV.DIDLLiteResource,
            replacements?: GLib.HashTable<string, string> | null,
        ): GUPnPAV.DIDLLiteResource;
        /**
         * @param pi
         */
        set_protocol_info(pi: GUPnPAV.ProtocolInfo): void;
        /**
         * @param replacements
         */
        get_protocol_info(replacements?: GLib.HashTable<string, string> | null): GUPnPAV.ProtocolInfo;
        supports_arbitrary_byte_seek(): boolean;
        supports_arbitrary_time_seek(): boolean;
        supports_limited_byte_seek(): boolean;
        supports_limited_time_seek(): boolean;
        supports_limited_cleartext_byte_seek(): boolean;
        supports_full_cleartext_byte_seek(): boolean;
        is_link_protection_enabled(): boolean;
        is_dlna_content(): boolean;
        get_default_transfer_mode(): string;
        /**
         * @param transfer_mode
         */
        supports_transfer_mode(transfer_mode: string): boolean;
        is_streamable(): boolean;
        is_cleartext_range_support_enabled(): boolean;
        supports_playspeed(): boolean;
        /**
         * @param flags
         */
        is_dlna_protocol_flag_set(flags: number): boolean;
        /**
         * @param flags
         */
        is_dlna_operation_mode_set(flags: number): boolean;
        to_string(): string;
        get_uri(): string;
        /**
         * @param value
         */
        set_uri(value: string): void;
        get_import_uri(): string;
        /**
         * @param value
         */
        set_import_uri(value: string): void;
        get_extension(): string;
        /**
         * @param value
         */
        set_extension(value: string): void;
        get_size(): number;
        /**
         * @param value
         */
        set_size(value: number): void;
        get_cleartext_size(): number;
        /**
         * @param value
         */
        set_cleartext_size(value: number): void;
        get_duration(): number;
        /**
         * @param value
         */
        set_duration(value: number): void;
        get_bitrate(): number;
        /**
         * @param value
         */
        set_bitrate(value: number): void;
        get_bits_per_sample(): number;
        /**
         * @param value
         */
        set_bits_per_sample(value: number): void;
        get_color_depth(): number;
        /**
         * @param value
         */
        set_color_depth(value: number): void;
        get_width(): number;
        /**
         * @param value
         */
        set_width(value: number): void;
        get_height(): number;
        /**
         * @param value
         */
        set_height(value: number): void;
        get_audio_channels(): number;
        /**
         * @param value
         */
        set_audio_channels(value: number): void;
        get_sample_freq(): number;
        /**
         * @param value
         */
        set_sample_freq(value: number): void;
        get_protocol(): string;
        /**
         * @param value
         */
        set_protocol(value: string): void;
        get_mime_type(): string;
        /**
         * @param value
         */
        set_mime_type(value: string): void;
        get_dlna_profile(): string;
        /**
         * @param value
         */
        set_dlna_profile(value: string): void;
        get_network(): string;
        /**
         * @param value
         */
        set_network(value: string): void;
        get_dlna_conversion(): GUPnPAV.DLNAConversion;
        /**
         * @param value
         */
        set_dlna_conversion(value: GUPnPAV.DLNAConversion | null): void;
        get_dlna_flags(): GUPnPAV.DLNAFlags;
        /**
         * @param value
         */
        set_dlna_flags(value: GUPnPAV.DLNAFlags | null): void;
        get_dlna_operation(): GUPnPAV.DLNAOperation;
        /**
         * @param value
         */
        set_dlna_operation(value: GUPnPAV.DLNAOperation | null): void;
    }

    namespace MediaServerPlugin {
        // Signal signatures
        interface SignalSignatures extends RygelCore.Plugin.SignalSignatures {
            'notify::root-container': (pspec: GObject.ParamSpec) => void;
            'notify::search-caps': (pspec: GObject.ParamSpec) => void;
            'notify::upload-profiles': (pspec: GObject.ParamSpec) => void;
            'notify::supported-profiles': (pspec: GObject.ParamSpec) => void;
            'notify::capabilities': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::desc-path': (pspec: GObject.ParamSpec) => void;
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::resource-infos': (pspec: GObject.ParamSpec) => void;
            'notify::icon-infos': (pspec: GObject.ParamSpec) => void;
            'notify::default-icons': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends RygelCore.Plugin.ConstructorProps {
            root_container: MediaContainer;
            rootContainer: MediaContainer;
            search_caps: string;
            searchCaps: string;
            upload_profiles: RygelCore.DLNAProfile[];
            uploadProfiles: RygelCore.DLNAProfile[];
            supported_profiles: RygelCore.DLNAProfile[];
            supportedProfiles: RygelCore.DLNAProfile[];
        }
    }

    /**
     * @gir-type Class
     */
    abstract class MediaServerPlugin extends RygelCore.Plugin {
        static $gtype: GObject.GType<MediaServerPlugin>;

        // Properties

        get root_container(): MediaContainer;
        get rootContainer(): MediaContainer;
        get search_caps(): string;
        get searchCaps(): string;
        get upload_profiles(): RygelCore.DLNAProfile[];
        set upload_profiles(val: RygelCore.DLNAProfile[]);
        get uploadProfiles(): RygelCore.DLNAProfile[];
        set uploadProfiles(val: RygelCore.DLNAProfile[]);
        get supported_profiles(): RygelCore.DLNAProfile[];
        set supported_profiles(val: RygelCore.DLNAProfile[]);
        get supportedProfiles(): RygelCore.DLNAProfile[];
        set supportedProfiles(val: RygelCore.DLNAProfile[]);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediaServerPlugin.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MediaServerPlugin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MediaServerPlugin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaServerPlugin.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MediaServerPlugin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaServerPlugin.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MediaServerPlugin.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MediaServerPlugin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_get_search_caps(): string;

        // Methods

        get_root_container(): MediaContainer;
        get_search_caps(): string;
        get_upload_profiles(): RygelCore.DLNAProfile[];
        /**
         * @param value
         */
        set_upload_profiles(value: RygelCore.DLNAProfile[]): void;
        get_supported_profiles(): RygelCore.DLNAProfile[];
        /**
         * @param value
         */
        set_supported_profiles(value: RygelCore.DLNAProfile[]): void;
    }

    namespace SearchExpression {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }

    /**
     * @gir-type Class
     */
    abstract class SearchExpression {
        static $gtype: GObject.GType<SearchExpression>;

        // Fields

        ref_count: number;
        op: any | null;
        operand1: any | null;
        operand2: any | null;

        // Constructors

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof SearchExpression.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SearchExpression.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SearchExpression.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SearchExpression.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SearchExpression.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SearchExpression.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param media_object
         * @virtual
         */
        vfunc_satisfied_by(media_object: MediaObject): boolean;
        /**
         * @virtual
         */
        vfunc_to_string(): string;

        // Methods

        /**
         * @param media_object
         */
        satisfied_by(media_object: MediaObject): boolean;
        to_string(): string;
    }

    namespace MediaServer {
        // Signal signatures
        interface SignalSignatures extends RygelCore.MediaDevice.SignalSignatures {
            'notify::root-container': (pspec: GObject.ParamSpec) => void;
            'notify::plugin': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::capabilities': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends RygelCore.MediaDevice.ConstructorProps {
            root_container: MediaContainer;
            rootContainer: MediaContainer;
        }
    }

    /**
     * @gir-type Class
     */
    class MediaServer extends RygelCore.MediaDevice {
        static $gtype: GObject.GType<MediaServer>;

        // Properties

        get root_container(): MediaContainer;
        get rootContainer(): MediaContainer;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediaServer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MediaServer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            title: string,
            root_container: MediaContainer,
            capabilities: RygelCore.PluginCapabilities,
        ): MediaServer;

        // Signals

        /** @signal */
        connect<K extends keyof MediaServer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaServer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MediaServer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaServer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MediaServer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MediaServer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace MediaEngine {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            'resource-changed': (arg0: string) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class MediaEngine extends GObject.Object {
        static $gtype: GObject.GType<MediaEngine>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediaEngine.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MediaEngine.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MediaEngine.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaEngine.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MediaEngine.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaEngine.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MediaEngine.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MediaEngine.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static init(): void;
        static get_default(): MediaEngine;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_get_dlna_profiles(): RygelCore.DLNAProfile[];
        /**
         * @param item
         * @param _callback_
         * @virtual
         */
        vfunc_get_resources_for_item(item: MediaObject, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _res_
         * @virtual
         */
        vfunc_get_resources_for_item_finish(_res_: Gio.AsyncResult): Gee.List | null;
        /**
         * @param item
         * @param resource
         * @param replacements
         * @virtual
         */
        vfunc_create_data_source_for_resource(
            item: MediaObject,
            resource: MediaResource,
            replacements: { [key: string]: any } | GLib.HashTable<string, string>,
        ): DataSource | null;
        /**
         * @param uri
         * @virtual
         */
        vfunc_create_data_source_for_uri(uri: string): DataSource | null;
        /**
         * @virtual
         */
        vfunc_get_internal_protocol_schemes(): string[];

        // Methods

        get_dlna_profiles(): RygelCore.DLNAProfile[];
        /**
         * @param item
         */
        get_resources_for_item(item: MediaObject): globalThis.Promise<Gee.List | null>;
        /**
         * @param item
         * @param _callback_
         */
        get_resources_for_item(item: MediaObject, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param item
         * @param _callback_
         */
        get_resources_for_item(
            item: MediaObject,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Gee.List | null> | void;
        /**
         * @param _res_
         */
        get_resources_for_item_finish(_res_: Gio.AsyncResult): Gee.List | null;
        /**
         * @param item
         * @param resource
         * @param replacements
         */
        create_data_source_for_resource(
            item: MediaObject,
            resource: MediaResource,
            replacements: { [key: string]: any } | GLib.HashTable<string, string>,
        ): DataSource | null;
        /**
         * @param uri
         */
        create_data_source_for_uri(uri: string): DataSource | null;
        get_internal_protocol_schemes(): string[];
    }

    namespace HTTPSeekRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class HTTPSeekRequest extends GObject.Object {
        static $gtype: GObject.GType<HTTPSeekRequest>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HTTPSeekRequest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HTTPSeekRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof HTTPSeekRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HTTPSeekRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HTTPSeekRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HTTPSeekRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HTTPSeekRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HTTPSeekRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace PlaylistItem {
        // Signal signatures
        interface SignalSignatures extends MediaFileItem.SignalSignatures {
            'notify::mime-type': (pspec: GObject.ParamSpec) => void;
            'notify::dlna-profile': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::place-holder': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::ref-id': (pspec: GObject.ParamSpec) => void;
            'notify::upnp-class': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
            'notify::creator': (pspec: GObject.ParamSpec) => void;
            'notify::modified': (pspec: GObject.ParamSpec) => void;
            'notify::object-update-id': (pspec: GObject.ParamSpec) => void;
            'notify::artist': (pspec: GObject.ParamSpec) => void;
            'notify::genre': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::parent-ref': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::ocm-flags': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends MediaFileItem.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class PlaylistItem extends MediaFileItem {
        static $gtype: GObject.GType<PlaylistItem>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PlaylistItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PlaylistItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, parent: MediaContainer, title: string, upnp_class: string): PlaylistItem;

        // Signals

        /** @signal */
        connect<K extends keyof PlaylistItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlaylistItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PlaylistItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlaylistItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PlaylistItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PlaylistItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ContentDirectory {
        // Signal signatures
        interface SignalSignatures extends GUPnP.Service.SignalSignatures {
            'notify::root-device': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::document': (pspec: GObject.ParamSpec) => void;
            'notify::element': (pspec: GObject.ParamSpec) => void;
            'notify::location': (pspec: GObject.ParamSpec) => void;
            'notify::service-type': (pspec: GObject.ParamSpec) => void;
            'notify::udn': (pspec: GObject.ParamSpec) => void;
            'notify::url-base': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GUPnP.Service.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ContentDirectory extends GUPnP.Service {
        static $gtype: GObject.GType<ContentDirectory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ContentDirectory.SignalSignatures;

        // Fields

        feature_list: string;
        http_server: HTTPServer;
        root_container: MediaContainer;
        cancellable: Gio.Cancellable;
        system_update_id: number;

        // Constructors

        constructor(properties?: Partial<ContentDirectory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ContentDirectory;

        // Signals

        /** @signal */
        connect<K extends keyof ContentDirectory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContentDirectory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ContentDirectory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContentDirectory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ContentDirectory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ContentDirectory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace HTTPByteSeekRequest {
        // Signal signatures
        interface SignalSignatures extends HTTPSeekRequest.SignalSignatures {
            'notify::start-byte': (pspec: GObject.ParamSpec) => void;
            'notify::end-byte': (pspec: GObject.ParamSpec) => void;
            'notify::range-length': (pspec: GObject.ParamSpec) => void;
            'notify::total-size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends HTTPSeekRequest.ConstructorProps {
            start_byte: number;
            startByte: number;
            end_byte: number;
            endByte: number;
            range_length: number;
            rangeLength: number;
            total_size: number;
            totalSize: number;
        }
    }

    /**
     * @gir-type Class
     */
    class HTTPByteSeekRequest extends HTTPSeekRequest {
        static $gtype: GObject.GType<HTTPByteSeekRequest>;

        // Properties

        get start_byte(): number;
        set start_byte(val: number);
        get startByte(): number;
        set startByte(val: number);
        get end_byte(): number;
        set end_byte(val: number);
        get endByte(): number;
        set endByte(val: number);
        get range_length(): number;
        set range_length(val: number);
        get rangeLength(): number;
        set rangeLength(val: number);
        get total_size(): number;
        set total_size(val: number);
        get totalSize(): number;
        set totalSize(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HTTPByteSeekRequest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HTTPByteSeekRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](msg: Soup.Message, handler: HTTPGetHandler): HTTPByteSeekRequest;

        // Signals

        /** @signal */
        connect<K extends keyof HTTPByteSeekRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HTTPByteSeekRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HTTPByteSeekRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HTTPByteSeekRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HTTPByteSeekRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HTTPByteSeekRequest.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param message
         * @param handler
         */
        static supported(message: Soup.Message, handler: HTTPGetHandler): boolean;
        /**
         * @param msg
         */
        static requested(msg: Soup.Message): boolean;

        // Methods

        get_start_byte(): number;
        /**
         * @param value
         */
        set_start_byte(value: number): void;
        get_end_byte(): number;
        /**
         * @param value
         */
        set_end_byte(value: number): void;
        get_range_length(): number;
        get_total_size(): number;
        /**
         * @param value
         */
        set_total_size(value: number): void;
    }

    namespace HTTPByteSeekResponse {
        // Signal signatures
        interface SignalSignatures extends HTTPResponseElement.SignalSignatures {
            'notify::start-byte': (pspec: GObject.ParamSpec) => void;
            'notify::end-byte': (pspec: GObject.ParamSpec) => void;
            'notify::range-length': (pspec: GObject.ParamSpec) => void;
            'notify::total-size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends HTTPResponseElement.ConstructorProps {
            start_byte: number;
            startByte: number;
            end_byte: number;
            endByte: number;
            range_length: number;
            rangeLength: number;
            total_size: number;
            totalSize: number;
        }
    }

    /**
     * @gir-type Class
     */
    class HTTPByteSeekResponse extends HTTPResponseElement {
        static $gtype: GObject.GType<HTTPByteSeekResponse>;

        // Properties

        get start_byte(): number;
        set start_byte(val: number);
        get startByte(): number;
        set startByte(val: number);
        get end_byte(): number;
        set end_byte(val: number);
        get endByte(): number;
        set endByte(val: number);
        get range_length(): number;
        set range_length(val: number);
        get rangeLength(): number;
        set rangeLength(val: number);
        get total_size(): number;
        set total_size(val: number);
        get totalSize(): number;
        set totalSize(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HTTPByteSeekResponse.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HTTPByteSeekResponse.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](start_byte: number, end_byte: number, total_size: number): HTTPByteSeekResponse;

        static from_request(request: HTTPByteSeekRequest): HTTPByteSeekResponse;

        // Signals

        /** @signal */
        connect<K extends keyof HTTPByteSeekResponse.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HTTPByteSeekResponse.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HTTPByteSeekResponse.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HTTPByteSeekResponse.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HTTPByteSeekResponse.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HTTPByteSeekResponse.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_start_byte(): number;
        /**
         * @param value
         */
        set_start_byte(value: number): void;
        get_end_byte(): number;
        /**
         * @param value
         */
        set_end_byte(value: number): void;
        get_range_length(): number;
        get_total_size(): number;
        /**
         * @param value
         */
        set_total_size(value: number): void;
    }

    namespace HTTPGetHandler {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::cancellable': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            cancellable: Gio.Cancellable;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class HTTPGetHandler extends GObject.Object {
        static $gtype: GObject.GType<HTTPGetHandler>;

        // Properties

        get cancellable(): Gio.Cancellable;
        set cancellable(val: Gio.Cancellable);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HTTPGetHandler.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HTTPGetHandler.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof HTTPGetHandler.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HTTPGetHandler.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HTTPGetHandler.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HTTPGetHandler.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HTTPGetHandler.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HTTPGetHandler.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param request
         * @virtual
         */
        vfunc_add_response_headers(request: HTTPGet): void;
        /**
         * @virtual
         */
        vfunc_get_default_transfer_mode(): string;
        /**
         * @param mode
         * @virtual
         */
        vfunc_supports_transfer_mode(mode: string): boolean;
        /**
         * @virtual
         */
        vfunc_get_resource_size(): number;
        /**
         * @virtual
         */
        vfunc_get_resource_duration(): number;
        /**
         * @virtual
         */
        vfunc_supports_byte_seek(): boolean;
        /**
         * @virtual
         */
        vfunc_supports_time_seek(): boolean;
        /**
         * @virtual
         */
        vfunc_supports_playspeed(): boolean;
        /**
         * @param request
         * @virtual
         */
        vfunc_render_body(request: HTTPGet): HTTPResponse;

        // Methods

        /**
         * @param request
         */
        add_response_headers(request: HTTPGet): void;
        get_default_transfer_mode(): string;
        /**
         * @param mode
         */
        supports_transfer_mode(mode: string): boolean;
        get_resource_size(): number;
        get_resource_duration(): number;
        supports_byte_seek(): boolean;
        supports_time_seek(): boolean;
        supports_playspeed(): boolean;
        /**
         * @param request
         */
        render_body(request: HTTPGet): HTTPResponse;
        get_cancellable(): Gio.Cancellable;
        /**
         * @param value
         */
        set_cancellable(value: Gio.Cancellable): void;
    }

    namespace HTTPGet {
        // Signal signatures
        interface SignalSignatures extends HTTPRequest.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends HTTPRequest.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class HTTPGet extends HTTPRequest {
        static $gtype: GObject.GType<HTTPGet>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HTTPGet.SignalSignatures;

        // Fields

        seek: HTTPSeekRequest;
        speed_request: PlaySpeedRequest;
        handler: HTTPGetHandler;

        // Constructors

        constructor(properties?: Partial<HTTPGet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](http_server: HTTPServer, server: Soup.Server, msg: Soup.Message): HTTPGet;

        // Signals

        /** @signal */
        connect<K extends keyof HTTPGet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HTTPGet.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HTTPGet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HTTPGet.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HTTPGet.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HTTPGet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace HTTPItemURI {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::item-id': (pspec: GObject.ParamSpec) => void;
            'notify::thumbnail-index': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle-index': (pspec: GObject.ParamSpec) => void;
            'notify::resource-name': (pspec: GObject.ParamSpec) => void;
            'notify::http-server': (pspec: GObject.ParamSpec) => void;
            'notify::extension': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            item_id: string;
            itemId: string;
            thumbnail_index: number;
            thumbnailIndex: number;
            subtitle_index: number;
            subtitleIndex: number;
            resource_name: string;
            resourceName: string;
            http_server: HTTPServer;
            httpServer: HTTPServer;
            extension: string;
        }
    }

    /**
     * @gir-type Class
     */
    class HTTPItemURI extends GObject.Object {
        static $gtype: GObject.GType<HTTPItemURI>;

        // Properties

        get item_id(): string;
        set item_id(val: string);
        get itemId(): string;
        set itemId(val: string);
        get thumbnail_index(): number;
        set thumbnail_index(val: number);
        get thumbnailIndex(): number;
        set thumbnailIndex(val: number);
        get subtitle_index(): number;
        set subtitle_index(val: number);
        get subtitleIndex(): number;
        set subtitleIndex(val: number);
        get resource_name(): string;
        set resource_name(val: string);
        get resourceName(): string;
        set resourceName(val: string);
        get http_server(): HTTPServer;
        set http_server(val: HTTPServer);
        get httpServer(): HTTPServer;
        set httpServer(val: HTTPServer);
        get extension(): string;
        set extension(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HTTPItemURI.SignalSignatures;

        // Fields

        rygel_http_item_uri_mime_to_ext: Gee.HashMap;

        // Constructors

        constructor(properties?: Partial<HTTPItemURI.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            object: MediaObject,
            http_server: HTTPServer,
            thumbnail_index: number,
            subtitle_index: number,
            resource_name?: string | null,
        ): HTTPItemURI;

        static from_string(uri: string, http_server: HTTPServer): HTTPItemURI;

        // Signals

        /** @signal */
        connect<K extends keyof HTTPItemURI.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HTTPItemURI.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HTTPItemURI.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HTTPItemURI.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HTTPItemURI.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HTTPItemURI.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        to_string(): string;
        get_item_id(): string;
        /**
         * @param value
         */
        set_item_id(value: string): void;
        get_thumbnail_index(): number;
        /**
         * @param value
         */
        set_thumbnail_index(value: number): void;
        get_subtitle_index(): number;
        /**
         * @param value
         */
        set_subtitle_index(value: number): void;
        get_resource_name(): string | null;
        /**
         * @param value
         */
        set_resource_name(value?: string | null): void;
        get_http_server(): HTTPServer;
        /**
         * @param value
         */
        set_http_server(value: HTTPServer): void;
        get_extension(): string;
        /**
         * @param value
         */
        set_extension(value: string): void;
    }

    namespace HTTPRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::cancellable': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, RygelCore.StateMachine.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class HTTPRequest extends GObject.Object implements RygelCore.StateMachine {
        static $gtype: GObject.GType<HTTPRequest>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HTTPRequest.SignalSignatures;

        // Fields

        http_server: HTTPServer;
        server: Soup.Server;
        msg: Soup.Message;
        uri: HTTPItemURI;
        object: MediaObject;
        hack: never;

        // Constructors

        constructor(properties?: Partial<HTTPRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof HTTPRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HTTPRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HTTPRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HTTPRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HTTPRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HTTPRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param _callback_
         * @virtual
         */
        vfunc_handle(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _res_
         * @virtual
         */
        vfunc_handle_finish(_res_: Gio.AsyncResult): void;
        /**
         * @param _callback_
         * @virtual
         */
        vfunc_find_item(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _res_
         * @virtual
         */
        vfunc_find_item_finish(_res_: Gio.AsyncResult): void;

        // Methods

        handle(): globalThis.Promise<void>;
        /**
         * @param _callback_
         */
        handle(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _callback_
         */
        handle(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        handle_finish(_res_: Gio.AsyncResult): void;
        find_item(): globalThis.Promise<void>;
        /**
         * @param _callback_
         */
        find_item(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _callback_
         */
        find_item(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        find_item_finish(_res_: Gio.AsyncResult): void;
        /**
         * @param _error_
         */
        handle_error(_error_: GLib.Error): void;
        /**
         * @param status
         * @param reason
         */
        end(status: number, reason?: string | null): void;
        /** @category Inherited from RygelCore.StateMachine */
        get cancellable(): Gio.Cancellable;
        set cancellable(val: Gio.Cancellable);
        run(): globalThis.Promise<void>;
        /**
         * @param _callback_
         */
        run(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _callback_
         */
        run(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        run_finish(_res_: Gio.AsyncResult): void;
        get_cancellable(): Gio.Cancellable;
        /**
         * @param value
         */
        set_cancellable(value: Gio.Cancellable): void;
        /**
         * @param _callback_
         * @virtual
         */
        vfunc_run(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _res_
         * @virtual
         */
        vfunc_run_finish(_res_: Gio.AsyncResult): void;
        /**
         * @virtual
         */
        vfunc_get_cancellable(): Gio.Cancellable;
        /**
         * @param value
         * @virtual
         */
        vfunc_set_cancellable(value: Gio.Cancellable): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace HTTPResponse {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::server': (pspec: GObject.ParamSpec) => void;
            'notify::priority': (pspec: GObject.ParamSpec) => void;
            'notify::cancellable': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, RygelCore.StateMachine.ConstructorProps {
            server: Soup.Server;
            priority: number;
        }
    }

    /**
     * @gir-type Class
     */
    class HTTPResponse extends GObject.Object implements RygelCore.StateMachine {
        static $gtype: GObject.GType<HTTPResponse>;

        // Properties

        get server(): Soup.Server;
        set server(val: Soup.Server);
        get priority(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HTTPResponse.SignalSignatures;

        // Fields

        msg: Soup.Message;
        seek: HTTPSeekRequest;
        speed: PlaySpeedRequest;

        // Constructors

        constructor(properties?: Partial<HTTPResponse.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](request: HTTPGet, request_handler: HTTPGetHandler, src: DataSource): HTTPResponse;

        // Signals

        /** @signal */
        connect<K extends keyof HTTPResponse.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HTTPResponse.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HTTPResponse.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HTTPResponse.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HTTPResponse.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HTTPResponse.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param aborted
         * @param status
         * @virtual
         */
        vfunc_end(aborted: boolean, status: number): void;

        // Methods

        preroll(): Gee.List | null;
        /**
         * @param aborted
         * @param status
         */
        end(aborted: boolean, status: number): void;
        get_server(): Soup.Server;
        get_priority(): number;
        /** @category Inherited from RygelCore.StateMachine */
        get cancellable(): Gio.Cancellable;
        set cancellable(val: Gio.Cancellable);
        run(): globalThis.Promise<void>;
        /**
         * @param _callback_
         */
        run(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _callback_
         */
        run(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        run_finish(_res_: Gio.AsyncResult): void;
        get_cancellable(): Gio.Cancellable;
        /**
         * @param value
         */
        set_cancellable(value: Gio.Cancellable): void;
        /**
         * @param _callback_
         * @virtual
         */
        vfunc_run(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _res_
         * @virtual
         */
        vfunc_run_finish(_res_: Gio.AsyncResult): void;
        /**
         * @virtual
         */
        vfunc_get_cancellable(): Gio.Cancellable;
        /**
         * @param value
         * @virtual
         */
        vfunc_set_cancellable(value: Gio.Cancellable): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace HTTPResponseElement {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class HTTPResponseElement extends GObject.Object {
        static $gtype: GObject.GType<HTTPResponseElement>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HTTPResponseElement.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HTTPResponseElement.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof HTTPResponseElement.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HTTPResponseElement.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HTTPResponseElement.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HTTPResponseElement.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HTTPResponseElement.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HTTPResponseElement.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param request
         * @virtual
         */
        vfunc_add_response_headers(request: HTTPRequest): void;
        /**
         * @virtual
         */
        vfunc_to_string(): string;

        // Methods

        /**
         * @param request
         */
        add_response_headers(request: HTTPRequest): void;
        to_string(): string;
    }

    namespace HTTPServer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::path-root': (pspec: GObject.ParamSpec) => void;
            'notify::server-name': (pspec: GObject.ParamSpec) => void;
            'notify::cancellable': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, RygelCore.StateMachine.ConstructorProps {
            path_root: string;
            pathRoot: string;
            server_name: string;
            serverName: string;
        }
    }

    /**
     * @gir-type Class
     */
    class HTTPServer extends GObject.Object implements RygelCore.StateMachine {
        static $gtype: GObject.GType<HTTPServer>;

        // Properties

        get path_root(): string;
        set path_root(val: string);
        get pathRoot(): string;
        set pathRoot(val: string);
        get server_name(): string;
        set server_name(val: string);
        get serverName(): string;
        set serverName(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HTTPServer.SignalSignatures;

        // Fields

        root_container: MediaContainer;
        context: GUPnP.Context;

        // Constructors

        constructor(properties?: Partial<HTTPServer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](content_dir: ContentDirectory, name: string): HTTPServer;

        // Signals

        /** @signal */
        connect<K extends keyof HTTPServer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HTTPServer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HTTPServer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HTTPServer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HTTPServer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HTTPServer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_get_protocol(): string;
        /**
         * @virtual
         */
        vfunc_get_protocol_info(): Gee.ArrayList;

        // Methods

        /**
         * @param res
         */
        set_resource_delivery_options(res: MediaResource): void;
        /**
         * @param uri
         */
        need_proxy(uri: string): boolean;
        get_protocol(): string;
        get_protocol_info(): Gee.ArrayList;
        get_replacements(): GLib.HashTable<string, string>;
        is_local(): boolean;
        get_path_root(): string;
        get_server_name(): string;
        /**
         * @param value
         */
        set_server_name(value: string): void;
        /** @category Inherited from RygelCore.StateMachine */
        get cancellable(): Gio.Cancellable;
        set cancellable(val: Gio.Cancellable);
        run(): globalThis.Promise<void>;
        /**
         * @param _callback_
         */
        run(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _callback_
         */
        run(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        run_finish(_res_: Gio.AsyncResult): void;
        get_cancellable(): Gio.Cancellable;
        /**
         * @param value
         */
        set_cancellable(value: Gio.Cancellable): void;
        /**
         * @param _callback_
         * @virtual
         */
        vfunc_run(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _res_
         * @virtual
         */
        vfunc_run_finish(_res_: Gio.AsyncResult): void;
        /**
         * @virtual
         */
        vfunc_get_cancellable(): Gio.Cancellable;
        /**
         * @param value
         * @virtual
         */
        vfunc_set_cancellable(value: Gio.Cancellable): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace HTTPTimeSeekRequest {
        // Signal signatures
        interface SignalSignatures extends HTTPSeekRequest.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends HTTPSeekRequest.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class HTTPTimeSeekRequest extends HTTPSeekRequest {
        static $gtype: GObject.GType<HTTPTimeSeekRequest>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HTTPTimeSeekRequest.SignalSignatures;

        // Fields

        start_time: number;
        end_time: number;
        range_duration: number;
        total_duration: number;

        // Constructors

        constructor(properties?: Partial<HTTPTimeSeekRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof HTTPTimeSeekRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HTTPTimeSeekRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HTTPTimeSeekRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HTTPTimeSeekRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HTTPTimeSeekRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HTTPTimeSeekRequest.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param message
         * @param handler
         */
        static supported(message: Soup.Message, handler: HTTPGetHandler): boolean;
        /**
         * @param message
         */
        static requested(message: Soup.Message): boolean;

        // Methods

        to_string(): string;
    }

    namespace HTTPTimeSeekResponse {
        // Signal signatures
        interface SignalSignatures extends HTTPResponseElement.SignalSignatures {
            'notify::start-time': (pspec: GObject.ParamSpec) => void;
            'notify::end-time': (pspec: GObject.ParamSpec) => void;
            'notify::range-duration': (pspec: GObject.ParamSpec) => void;
            'notify::total-duration': (pspec: GObject.ParamSpec) => void;
            'notify::start-byte': (pspec: GObject.ParamSpec) => void;
            'notify::end-byte': (pspec: GObject.ParamSpec) => void;
            'notify::response-length': (pspec: GObject.ParamSpec) => void;
            'notify::total-size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends HTTPResponseElement.ConstructorProps {
            start_time: number;
            startTime: number;
            end_time: number;
            endTime: number;
            range_duration: number;
            rangeDuration: number;
            total_duration: number;
            totalDuration: number;
            start_byte: number;
            startByte: number;
            end_byte: number;
            endByte: number;
            response_length: number;
            responseLength: number;
            total_size: number;
            totalSize: number;
        }
    }

    /**
     * @gir-type Class
     */
    class HTTPTimeSeekResponse extends HTTPResponseElement {
        static $gtype: GObject.GType<HTTPTimeSeekResponse>;

        // Properties

        get start_time(): number;
        set start_time(val: number);
        get startTime(): number;
        set startTime(val: number);
        get end_time(): number;
        set end_time(val: number);
        get endTime(): number;
        set endTime(val: number);
        get range_duration(): number;
        set range_duration(val: number);
        get rangeDuration(): number;
        set rangeDuration(val: number);
        get total_duration(): number;
        set total_duration(val: number);
        get totalDuration(): number;
        set totalDuration(val: number);
        get start_byte(): number;
        set start_byte(val: number);
        get startByte(): number;
        set startByte(val: number);
        get end_byte(): number;
        set end_byte(val: number);
        get endByte(): number;
        set endByte(val: number);
        get response_length(): number;
        set response_length(val: number);
        get responseLength(): number;
        set responseLength(val: number);
        get total_size(): number;
        set total_size(val: number);
        get totalSize(): number;
        set totalSize(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HTTPTimeSeekResponse.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HTTPTimeSeekResponse.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            start_time: number,
            end_time: number,
            total_duration: number,
            start_byte: number,
            end_byte: number,
            total_size: number,
        ): HTTPTimeSeekResponse;

        static time_only(start_time: number, end_time: number, total_duration: number): HTTPTimeSeekResponse;

        static with_length(
            start_time: number,
            end_time: number,
            total_duration: number,
            start_byte: number,
            end_byte: number,
            total_size: number,
            response_length: number,
        ): HTTPTimeSeekResponse;

        static from_request(time_seek_request: HTTPTimeSeekRequest, total_duration: number): HTTPTimeSeekResponse;

        // Signals

        /** @signal */
        connect<K extends keyof HTTPTimeSeekResponse.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HTTPTimeSeekResponse.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HTTPTimeSeekResponse.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HTTPTimeSeekResponse.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HTTPTimeSeekResponse.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HTTPTimeSeekResponse.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_start_time(): number;
        get_end_time(): number;
        get_range_duration(): number;
        get_total_duration(): number;
        get_start_byte(): number;
        get_end_byte(): number;
        get_response_length(): number;
        get_total_size(): number;
    }

    namespace Serializer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::serializer-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            serializer_type: SerializerType;
            serializerType: SerializerType;
        }
    }

    /**
     * @gir-type Class
     */
    class Serializer extends GObject.Object {
        static $gtype: GObject.GType<Serializer>;

        // Properties

        get serializer_type(): SerializerType;
        get serializerType(): SerializerType;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Serializer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Serializer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type: SerializerType): Serializer;

        // Signals

        /** @signal */
        connect<K extends keyof Serializer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Serializer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Serializer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Serializer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Serializer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Serializer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        add_item(): GUPnPAV.DIDLLiteItem | null;
        add_container(): GUPnPAV.DIDLLiteContainer | null;
        /**
         * @param filter_string
         */
        filter(filter_string: string): void;
        get_string(): string;
    }

    namespace PlaySpeed {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }

    /**
     * @gir-type Class
     */
    class PlaySpeed {
        static $gtype: GObject.GType<PlaySpeed>;

        // Fields

        ref_count: number;
        numerator: number;
        denominator: number;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](numerator: number, denominator: number): PlaySpeed;

        static from_string(speed: string): PlaySpeed;

        // Signals

        /** @signal */
        connect<K extends keyof PlaySpeed.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlaySpeed.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PlaySpeed.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlaySpeed.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PlaySpeed.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PlaySpeed.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param that
         */
        equals(that: PlaySpeed): boolean;
        is_positive(): boolean;
        is_normal_rate(): boolean;
        to_string(): string;
        to_float(): number;
        to_double(): number;
    }

    namespace PlaySpeedRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::speed': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            speed: PlaySpeed;
        }
    }

    /**
     * @gir-type Class
     */
    class PlaySpeedRequest extends GObject.Object {
        static $gtype: GObject.GType<PlaySpeedRequest>;

        // Properties

        get speed(): PlaySpeed;
        set speed(val: PlaySpeed);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PlaySpeedRequest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PlaySpeedRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](numerator: number, denominator: number): PlaySpeedRequest;

        static from_string(speed: string): PlaySpeedRequest;

        // Signals

        /** @signal */
        connect<K extends keyof PlaySpeedRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlaySpeedRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PlaySpeedRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlaySpeedRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PlaySpeedRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PlaySpeedRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param request
         */
        static supported(request: HTTPGet): boolean;

        // Methods

        /**
         * @param that
         */
        equals(that: PlaySpeedRequest): boolean;
        get_speed(): PlaySpeed;
    }

    namespace PlaySpeedResponse {
        // Signal signatures
        interface SignalSignatures extends HTTPResponseElement.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends HTTPResponseElement.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class PlaySpeedResponse extends HTTPResponseElement {
        static $gtype: GObject.GType<PlaySpeedResponse>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PlaySpeedResponse.SignalSignatures;

        // Fields

        framerate: number;

        // Constructors

        constructor(properties?: Partial<PlaySpeedResponse.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](numerator: number, denominator: number, framerate: number): PlaySpeedResponse;

        static from_speed(speed: PlaySpeed, framerate: number): PlaySpeedResponse;

        static from_string(speed: string, framerate: number): PlaySpeedResponse;

        // Signals

        /** @signal */
        connect<K extends keyof PlaySpeedResponse.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlaySpeedResponse.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PlaySpeedResponse.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlaySpeedResponse.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PlaySpeedResponse.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PlaySpeedResponse.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param that
         */
        equals(that: PlaySpeedRequest): boolean;
    }

    namespace DTCPCleartextRequest {
        // Signal signatures
        interface SignalSignatures extends HTTPSeekRequest.SignalSignatures {
            'notify::start-byte': (pspec: GObject.ParamSpec) => void;
            'notify::end-byte': (pspec: GObject.ParamSpec) => void;
            'notify::range-length': (pspec: GObject.ParamSpec) => void;
            'notify::total-size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends HTTPSeekRequest.ConstructorProps {
            start_byte: number;
            startByte: number;
            end_byte: number;
            endByte: number;
            range_length: number;
            rangeLength: number;
            total_size: number;
            totalSize: number;
        }
    }

    /**
     * @gir-type Class
     */
    class DTCPCleartextRequest extends HTTPSeekRequest {
        static $gtype: GObject.GType<DTCPCleartextRequest>;

        // Properties

        get start_byte(): number;
        set start_byte(val: number);
        get startByte(): number;
        set startByte(val: number);
        get end_byte(): number;
        set end_byte(val: number);
        get endByte(): number;
        set endByte(val: number);
        get range_length(): number;
        set range_length(val: number);
        get rangeLength(): number;
        set rangeLength(val: number);
        get total_size(): number;
        set total_size(val: number);
        get totalSize(): number;
        set totalSize(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DTCPCleartextRequest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DTCPCleartextRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](message: Soup.Message, handler: HTTPGetHandler): DTCPCleartextRequest;

        // Signals

        /** @signal */
        connect<K extends keyof DTCPCleartextRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DTCPCleartextRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DTCPCleartextRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DTCPCleartextRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DTCPCleartextRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DTCPCleartextRequest.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param message
         * @param handler
         */
        static supported(message: Soup.Message, handler: HTTPGetHandler): boolean;
        /**
         * @param message
         */
        static requested(message: Soup.Message): boolean;

        // Methods

        get_start_byte(): number;
        get_end_byte(): number;
        get_range_length(): number;
        get_total_size(): number;
    }

    namespace DTCPCleartextResponse {
        // Signal signatures
        interface SignalSignatures extends HTTPResponseElement.SignalSignatures {
            'notify::start-byte': (pspec: GObject.ParamSpec) => void;
            'notify::end-byte': (pspec: GObject.ParamSpec) => void;
            'notify::range-length': (pspec: GObject.ParamSpec) => void;
            'notify::total-size': (pspec: GObject.ParamSpec) => void;
            'notify::encrypted-length': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends HTTPResponseElement.ConstructorProps {
            start_byte: number;
            startByte: number;
            end_byte: number;
            endByte: number;
            range_length: number;
            rangeLength: number;
            total_size: number;
            totalSize: number;
            encrypted_length: number;
            encryptedLength: number;
        }
    }

    /**
     * @gir-type Class
     */
    class DTCPCleartextResponse extends HTTPResponseElement {
        static $gtype: GObject.GType<DTCPCleartextResponse>;

        // Properties

        get start_byte(): number;
        set start_byte(val: number);
        get startByte(): number;
        set startByte(val: number);
        get end_byte(): number;
        set end_byte(val: number);
        get endByte(): number;
        set endByte(val: number);
        get range_length(): number;
        set range_length(val: number);
        get rangeLength(): number;
        set rangeLength(val: number);
        get total_size(): number;
        set total_size(val: number);
        get totalSize(): number;
        set totalSize(val: number);
        get encrypted_length(): number;
        set encrypted_length(val: number);
        get encryptedLength(): number;
        set encryptedLength(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DTCPCleartextResponse.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DTCPCleartextResponse.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            start_byte: number,
            end_byte: number,
            total_size: number,
            encrypted_length: number,
        ): DTCPCleartextResponse;

        static from_request(request: DTCPCleartextRequest, encrypted_length: number): DTCPCleartextResponse;

        // Signals

        /** @signal */
        connect<K extends keyof DTCPCleartextResponse.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DTCPCleartextResponse.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DTCPCleartextResponse.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DTCPCleartextResponse.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DTCPCleartextResponse.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DTCPCleartextResponse.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_start_byte(): number;
        get_end_byte(): number;
        get_range_length(): number;
        get_total_size(): number;
        get_encrypted_length(): number;
        /**
         * @param value
         */
        set_encrypted_length(value: number): void;
    }

    namespace DLNAAvailableSeekRangeRequest {
        // Signal signatures
        interface SignalSignatures extends HTTPSeekRequest.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends HTTPSeekRequest.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DLNAAvailableSeekRangeRequest extends HTTPSeekRequest {
        static $gtype: GObject.GType<DLNAAvailableSeekRangeRequest>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DLNAAvailableSeekRangeRequest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DLNAAvailableSeekRangeRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DLNAAvailableSeekRangeRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DLNAAvailableSeekRangeRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DLNAAvailableSeekRangeRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DLNAAvailableSeekRangeRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DLNAAvailableSeekRangeRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DLNAAvailableSeekRangeRequest.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param message
         * @param handler
         */
        static supported(message: Soup.Message, handler: HTTPGetHandler): boolean;
        /**
         * @param message
         */
        static requested(message: Soup.Message): boolean;
    }

    namespace DLNAAvailableSeekRangeResponse {
        // Signal signatures
        interface SignalSignatures extends HTTPResponseElement.SignalSignatures {
            'notify::mode': (pspec: GObject.ParamSpec) => void;
            'notify::start-time': (pspec: GObject.ParamSpec) => void;
            'notify::end-time': (pspec: GObject.ParamSpec) => void;
            'notify::start-byte': (pspec: GObject.ParamSpec) => void;
            'notify::end-byte': (pspec: GObject.ParamSpec) => void;
            'notify::range-length': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends HTTPResponseElement.ConstructorProps {
            mode: number;
            start_time: number;
            startTime: number;
            end_time: number;
            endTime: number;
            start_byte: number;
            startByte: number;
            end_byte: number;
            endByte: number;
            range_length: number;
            rangeLength: number;
        }
    }

    /**
     * @gir-type Class
     */
    class DLNAAvailableSeekRangeResponse extends HTTPResponseElement {
        static $gtype: GObject.GType<DLNAAvailableSeekRangeResponse>;

        // Properties

        get mode(): number;
        set mode(val: number);
        get start_time(): number;
        set start_time(val: number);
        get startTime(): number;
        set startTime(val: number);
        get end_time(): number;
        set end_time(val: number);
        get endTime(): number;
        set endTime(val: number);
        get start_byte(): number;
        set start_byte(val: number);
        get startByte(): number;
        set startByte(val: number);
        get end_byte(): number;
        set end_byte(val: number);
        get endByte(): number;
        set endByte(val: number);
        get range_length(): number;
        set range_length(val: number);
        get rangeLength(): number;
        set rangeLength(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DLNAAvailableSeekRangeResponse.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DLNAAvailableSeekRangeResponse.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            mode: number,
            start_time: number,
            end_time: number,
            start_byte: number,
            end_byte: number,
        ): DLNAAvailableSeekRangeResponse;

        static time_only(mode: number, start_time: number, end_time: number): DLNAAvailableSeekRangeResponse;

        // Signals

        /** @signal */
        connect<K extends keyof DLNAAvailableSeekRangeResponse.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DLNAAvailableSeekRangeResponse.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DLNAAvailableSeekRangeResponse.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DLNAAvailableSeekRangeResponse.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DLNAAvailableSeekRangeResponse.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DLNAAvailableSeekRangeResponse.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_mode(): number;
        get_start_time(): number;
        get_end_time(): number;
        get_start_byte(): number;
        get_end_byte(): number;
        get_range_length(): number;
    }

    /**
     * @gir-type Alias
     */
    type AudioItemClass = typeof AudioItem;
    /**
     * @gir-type Struct
     */
    abstract class AudioItemPrivate {
        static $gtype: GObject.GType<AudioItemPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ImageItemClass = typeof ImageItem;
    /**
     * @gir-type Struct
     */
    abstract class ImageItemPrivate {
        static $gtype: GObject.GType<ImageItemPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type LogicalExpressionClass = typeof LogicalExpression;
    /**
     * @gir-type Struct
     */
    abstract class LogicalExpressionPrivate {
        static $gtype: GObject.GType<LogicalExpressionPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MediaArtStoreClass = typeof MediaArtStore;
    /**
     * @gir-type Struct
     */
    abstract class MediaArtStorePrivate {
        static $gtype: GObject.GType<MediaArtStorePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MediaObjectsClass = typeof MediaObjects;
    /**
     * @gir-type Struct
     */
    abstract class MediaObjectsPrivate {
        static $gtype: GObject.GType<MediaObjectsPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MusicItemClass = typeof MusicItem;
    /**
     * @gir-type Struct
     */
    abstract class MusicItemPrivate {
        static $gtype: GObject.GType<MusicItemPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PhotoItemClass = typeof PhotoItem;
    /**
     * @gir-type Struct
     */
    abstract class PhotoItemPrivate {
        static $gtype: GObject.GType<PhotoItemPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type RelationalExpressionClass = typeof RelationalExpression;
    /**
     * @gir-type Struct
     */
    abstract class RelationalExpressionPrivate {
        static $gtype: GObject.GType<RelationalExpressionPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SimpleContainerClass = typeof SimpleContainer;
    /**
     * @gir-type Struct
     */
    abstract class SimpleContainerPrivate {
        static $gtype: GObject.GType<SimpleContainerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SubtitleClass = typeof Subtitle;
    /**
     * @gir-type Struct
     */
    abstract class SubtitlePrivate {
        static $gtype: GObject.GType<SubtitlePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ThumbnailClass = typeof Thumbnail;
    /**
     * @gir-type Struct
     */
    abstract class ThumbnailPrivate {
        static $gtype: GObject.GType<ThumbnailPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type VideoItemClass = typeof VideoItem;
    /**
     * @gir-type Struct
     */
    abstract class VideoItemPrivate {
        static $gtype: GObject.GType<VideoItemPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MediaContainerClass = typeof MediaContainer;
    /**
     * @gir-type Struct
     */
    abstract class MediaContainerPrivate {
        static $gtype: GObject.GType<MediaContainerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MediaItemClass = typeof MediaItem;
    /**
     * @gir-type Struct
     */
    abstract class MediaItemPrivate {
        static $gtype: GObject.GType<MediaItemPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MediaFileItemClass = typeof MediaFileItem;
    /**
     * @gir-type Struct
     */
    abstract class MediaFileItemPrivate {
        static $gtype: GObject.GType<MediaFileItemPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MediaObjectClass = typeof MediaObject;
    /**
     * @gir-type Struct
     */
    abstract class MediaObjectPrivate {
        static $gtype: GObject.GType<MediaObjectPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MediaResourceClass = typeof MediaResource;
    /**
     * @gir-type Struct
     */
    abstract class MediaResourcePrivate {
        static $gtype: GObject.GType<MediaResourcePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MediaServerPluginClass = typeof MediaServerPlugin;
    /**
     * @gir-type Struct
     */
    abstract class MediaServerPluginPrivate {
        static $gtype: GObject.GType<MediaServerPluginPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SearchExpressionClass = typeof SearchExpression;
    /**
     * @gir-type Struct
     */
    abstract class SearchExpressionPrivate {
        static $gtype: GObject.GType<SearchExpressionPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MediaServerClass = typeof MediaServer;
    /**
     * @gir-type Struct
     */
    abstract class MediaServerPrivate {
        static $gtype: GObject.GType<MediaServerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MediaEngineClass = typeof MediaEngine;
    /**
     * @gir-type Struct
     */
    abstract class MediaEnginePrivate {
        static $gtype: GObject.GType<MediaEnginePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type HTTPSeekRequestClass = typeof HTTPSeekRequest;
    /**
     * @gir-type Struct
     */
    abstract class HTTPSeekRequestPrivate {
        static $gtype: GObject.GType<HTTPSeekRequestPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PlaylistItemClass = typeof PlaylistItem;
    /**
     * @gir-type Struct
     */
    abstract class PlaylistItemPrivate {
        static $gtype: GObject.GType<PlaylistItemPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ContentDirectoryClass = typeof ContentDirectory;
    /**
     * @gir-type Struct
     */
    abstract class ContentDirectoryPrivate {
        static $gtype: GObject.GType<ContentDirectoryPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type HTTPByteSeekRequestClass = typeof HTTPByteSeekRequest;
    /**
     * @gir-type Struct
     */
    abstract class HTTPByteSeekRequestPrivate {
        static $gtype: GObject.GType<HTTPByteSeekRequestPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type HTTPByteSeekResponseClass = typeof HTTPByteSeekResponse;
    /**
     * @gir-type Struct
     */
    abstract class HTTPByteSeekResponsePrivate {
        static $gtype: GObject.GType<HTTPByteSeekResponsePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type HTTPGetHandlerClass = typeof HTTPGetHandler;
    /**
     * @gir-type Struct
     */
    abstract class HTTPGetHandlerPrivate {
        static $gtype: GObject.GType<HTTPGetHandlerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type HTTPGetClass = typeof HTTPGet;
    /**
     * @gir-type Struct
     */
    abstract class HTTPGetPrivate {
        static $gtype: GObject.GType<HTTPGetPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type HTTPItemURIClass = typeof HTTPItemURI;
    /**
     * @gir-type Struct
     */
    abstract class HTTPItemURIPrivate {
        static $gtype: GObject.GType<HTTPItemURIPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type HTTPRequestClass = typeof HTTPRequest;
    /**
     * @gir-type Struct
     */
    abstract class HTTPRequestPrivate {
        static $gtype: GObject.GType<HTTPRequestPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type HTTPResponseClass = typeof HTTPResponse;
    /**
     * @gir-type Struct
     */
    abstract class HTTPResponsePrivate {
        static $gtype: GObject.GType<HTTPResponsePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type HTTPResponseElementClass = typeof HTTPResponseElement;
    /**
     * @gir-type Struct
     */
    abstract class HTTPResponseElementPrivate {
        static $gtype: GObject.GType<HTTPResponseElementPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type HTTPServerClass = typeof HTTPServer;
    /**
     * @gir-type Struct
     */
    abstract class HTTPServerPrivate {
        static $gtype: GObject.GType<HTTPServerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type HTTPTimeSeekRequestClass = typeof HTTPTimeSeekRequest;
    /**
     * @gir-type Struct
     */
    abstract class HTTPTimeSeekRequestPrivate {
        static $gtype: GObject.GType<HTTPTimeSeekRequestPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type HTTPTimeSeekResponseClass = typeof HTTPTimeSeekResponse;
    /**
     * @gir-type Struct
     */
    abstract class HTTPTimeSeekResponsePrivate {
        static $gtype: GObject.GType<HTTPTimeSeekResponsePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SerializerClass = typeof Serializer;
    /**
     * @gir-type Struct
     */
    abstract class SerializerPrivate {
        static $gtype: GObject.GType<SerializerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PlaySpeedClass = typeof PlaySpeed;
    /**
     * @gir-type Struct
     */
    abstract class PlaySpeedPrivate {
        static $gtype: GObject.GType<PlaySpeedPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PlaySpeedRequestClass = typeof PlaySpeedRequest;
    /**
     * @gir-type Struct
     */
    abstract class PlaySpeedRequestPrivate {
        static $gtype: GObject.GType<PlaySpeedRequestPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PlaySpeedResponseClass = typeof PlaySpeedResponse;
    /**
     * @gir-type Struct
     */
    abstract class PlaySpeedResponsePrivate {
        static $gtype: GObject.GType<PlaySpeedResponsePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DTCPCleartextRequestClass = typeof DTCPCleartextRequest;
    /**
     * @gir-type Struct
     */
    abstract class DTCPCleartextRequestPrivate {
        static $gtype: GObject.GType<DTCPCleartextRequestPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DTCPCleartextResponseClass = typeof DTCPCleartextResponse;
    /**
     * @gir-type Struct
     */
    abstract class DTCPCleartextResponsePrivate {
        static $gtype: GObject.GType<DTCPCleartextResponsePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DLNAAvailableSeekRangeRequestClass = typeof DLNAAvailableSeekRangeRequest;
    /**
     * @gir-type Struct
     */
    abstract class DLNAAvailableSeekRangeRequestPrivate {
        static $gtype: GObject.GType<DLNAAvailableSeekRangeRequestPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DLNAAvailableSeekRangeResponseClass = typeof DLNAAvailableSeekRangeResponse;
    /**
     * @gir-type Struct
     */
    abstract class DLNAAvailableSeekRangeResponsePrivate {
        static $gtype: GObject.GType<DLNAAvailableSeekRangeResponsePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SearchableContainerIface = typeof SearchableContainer;
    /**
     * @gir-type Alias
     */
    type TrackableContainerIface = typeof TrackableContainer;
    /**
     * @gir-type Alias
     */
    type TrackableItemIface = typeof TrackableItem;
    /**
     * @gir-type Alias
     */
    type VisualItemIface = typeof VisualItem;
    /**
     * @gir-type Alias
     */
    type WritableContainerIface = typeof WritableContainer;
    /**
     * @gir-type Alias
     */
    type DataSourceIface = typeof DataSource;
    /**
     * @gir-type Alias
     */
    type UpdatableObjectIface = typeof UpdatableObject;
    namespace SearchableContainer {
        /**
         * Interface for implementing SearchableContainer.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @param expression
             * @param offset
             * @param max_count
             * @param sort_criteria
             * @param cancellable
             * @param _callback_
             * @virtual
             */
            vfunc_search(
                expression: SearchExpression | null,
                offset: number,
                max_count: number,
                sort_criteria: string,
                cancellable?: Gio.Cancellable | null,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * @param _res_
             * @virtual
             */
            vfunc_search_finish(_res_: Gio.AsyncResult): [MediaObjects | null, number];
            /**
             * @virtual
             */
            vfunc_get_search_classes(): Gee.ArrayList;
            /**
             * @param value
             * @virtual
             */
            vfunc_set_search_classes(value: Gee.ArrayList): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends MediaContainer.ConstructorProps {
            search_classes: Gee.ArrayList;
            searchClasses: Gee.ArrayList;
        }
    }

    export interface SearchableContainerNamespace {
        $gtype: GObject.GType<SearchableContainer>;
        prototype: SearchableContainer;
    }
    /**
     * @gir-type Interface
     */
    interface SearchableContainer extends MediaContainer, SearchableContainer.Interface {
        // Properties

        get search_classes(): Gee.ArrayList;
        set search_classes(val: Gee.ArrayList);
        get searchClasses(): Gee.ArrayList;
        set searchClasses(val: Gee.ArrayList);

        // Methods

        /**
         * @param expression
         * @param offset
         * @param max_count
         * @param sort_criteria
         * @param cancellable
         */
        search(
            expression: SearchExpression | null,
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[MediaObjects | null, number]>;
        /**
         * @param expression
         * @param offset
         * @param max_count
         * @param sort_criteria
         * @param cancellable
         * @param _callback_
         */
        search(
            expression: SearchExpression | null,
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param expression
         * @param offset
         * @param max_count
         * @param sort_criteria
         * @param cancellable
         * @param _callback_
         */
        search(
            expression: SearchExpression | null,
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[MediaObjects | null, number]> | void;
        /**
         * @param _res_
         */
        search_finish(_res_: Gio.AsyncResult): [MediaObjects | null, number];
        /**
         * @param expression
         * @param offset
         * @param max_count
         * @param sort_criteria
         * @param cancellable
         */
        simple_search(
            expression: SearchExpression | null,
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[MediaObjects | null, number]>;
        /**
         * @param expression
         * @param offset
         * @param max_count
         * @param sort_criteria
         * @param cancellable
         * @param _callback_
         */
        simple_search(
            expression: SearchExpression | null,
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param expression
         * @param offset
         * @param max_count
         * @param sort_criteria
         * @param cancellable
         * @param _callback_
         */
        simple_search(
            expression: SearchExpression | null,
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[MediaObjects | null, number]> | void;
        /**
         * @param _res_
         */
        simple_search_finish(_res_: Gio.AsyncResult): [MediaObjects | null, number];
        /**
         * @param id
         * @param cancellable
         */
        find_object(id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<MediaObject | null>;
        /**
         * @param id
         * @param cancellable
         * @param _callback_
         */
        find_object(
            id: string,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param id
         * @param cancellable
         * @param _callback_
         */
        find_object(
            id: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<MediaObject | null> | void;
        /**
         * @param _res_
         */
        find_object_finish(_res_: Gio.AsyncResult): MediaObject | null;
        get_search_classes(): Gee.ArrayList;
        /**
         * @param value
         */
        set_search_classes(value: Gee.ArrayList): void;
    }

    export const SearchableContainer: SearchableContainerNamespace & {
        new (): SearchableContainer; // This allows `obj instanceof SearchableContainer`
    };

    namespace TrackableContainer {
        /**
         * Interface for implementing TrackableContainer.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @param object
             * @param _callback_
             * @virtual
             */
            vfunc_add_child(object: MediaObject, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * @param _res_
             * @virtual
             */
            vfunc_add_child_finish(_res_: Gio.AsyncResult): void;
            /**
             * @param object
             * @param _callback_
             * @virtual
             */
            vfunc_remove_child(object: MediaObject, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * @param _res_
             * @virtual
             */
            vfunc_remove_child_finish(_res_: Gio.AsyncResult): void;
            /**
             * @virtual
             */
            vfunc_get_service_reset_token(): string;
            /**
             * @param token
             * @virtual
             */
            vfunc_set_service_reset_token(token: string): void;
            /**
             * @virtual
             */
            vfunc_get_system_update_id(): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends MediaContainer.ConstructorProps {}
    }

    export interface TrackableContainerNamespace {
        $gtype: GObject.GType<TrackableContainer>;
        prototype: TrackableContainer;
    }
    /**
     * @gir-type Interface
     */
    interface TrackableContainer extends MediaContainer, TrackableContainer.Interface {
        // Methods

        clear(): globalThis.Promise<void>;
        /**
         * @param _callback_
         */
        clear(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _callback_
         */
        clear(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        clear_finish(_res_: Gio.AsyncResult): void;
        /**
         * @param object
         */
        add_child(object: MediaObject): globalThis.Promise<void>;
        /**
         * @param object
         * @param _callback_
         */
        add_child(object: MediaObject, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param object
         * @param _callback_
         */
        add_child(
            object: MediaObject,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        add_child_finish(_res_: Gio.AsyncResult): void;
        /**
         * @param object
         */
        add_child_tracked(object: MediaObject): globalThis.Promise<void>;
        /**
         * @param object
         * @param _callback_
         */
        add_child_tracked(object: MediaObject, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param object
         * @param _callback_
         */
        add_child_tracked(
            object: MediaObject,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        add_child_tracked_finish(_res_: Gio.AsyncResult): void;
        /**
         * @param object
         */
        remove_child(object: MediaObject): globalThis.Promise<void>;
        /**
         * @param object
         * @param _callback_
         */
        remove_child(object: MediaObject, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param object
         * @param _callback_
         */
        remove_child(
            object: MediaObject,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        remove_child_finish(_res_: Gio.AsyncResult): void;
        /**
         * @param object
         */
        remove_child_tracked(object: MediaObject): globalThis.Promise<void>;
        /**
         * @param object
         * @param _callback_
         */
        remove_child_tracked(object: MediaObject, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param object
         * @param _callback_
         */
        remove_child_tracked(
            object: MediaObject,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        remove_child_tracked_finish(_res_: Gio.AsyncResult): void;
        get_service_reset_token(): string;
        /**
         * @param token
         */
        set_service_reset_token(token: string): void;
        get_system_update_id(): number;
    }

    export const TrackableContainer: TrackableContainerNamespace & {
        new (): TrackableContainer; // This allows `obj instanceof TrackableContainer`
    };

    namespace TrackableItem {
        // Constructor properties interface

        interface ConstructorProps extends MediaItem.ConstructorProps {}
    }

    export interface TrackableItemNamespace {
        $gtype: GObject.GType<TrackableItem>;
        prototype: TrackableItem;
    }
    /**
     * @gir-type Interface
     */
    interface TrackableItem extends MediaItem {
        // Methods

        changed(): void;
    }

    export const TrackableItem: TrackableItemNamespace & {
        new (): TrackableItem; // This allows `obj instanceof TrackableItem`
    };

    namespace VisualItem {
        /**
         * Interface for implementing VisualItem.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @virtual
             */
            vfunc_get_width(): number;
            /**
             * @param value
             * @virtual
             */
            vfunc_set_width(value: number): void;
            /**
             * @virtual
             */
            vfunc_get_height(): number;
            /**
             * @param value
             * @virtual
             */
            vfunc_set_height(value: number): void;
            /**
             * @virtual
             */
            vfunc_get_color_depth(): number;
            /**
             * @param value
             * @virtual
             */
            vfunc_set_color_depth(value: number): void;
            /**
             * @virtual
             */
            vfunc_get_thumbnails(): Gee.ArrayList;
            /**
             * @param value
             * @virtual
             */
            vfunc_set_thumbnails(value: Gee.ArrayList): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends MediaFileItem.ConstructorProps {
            width: number;
            height: number;
            color_depth: number;
            colorDepth: number;
            thumbnails: Gee.ArrayList;
        }
    }

    export interface VisualItemNamespace {
        $gtype: GObject.GType<VisualItem>;
        prototype: VisualItem;
    }
    /**
     * @gir-type Interface
     */
    interface VisualItem extends MediaFileItem, VisualItem.Interface {
        // Properties

        get width(): number;
        set width(val: number);
        get height(): number;
        set height(val: number);
        get color_depth(): number;
        set color_depth(val: number);
        get colorDepth(): number;
        set colorDepth(val: number);
        get thumbnails(): Gee.ArrayList;
        set thumbnails(val: Gee.ArrayList);

        // Methods

        get_width(): number;
        /**
         * @param value
         */
        set_width(value: number): void;
        get_height(): number;
        /**
         * @param value
         */
        set_height(value: number): void;
        get_color_depth(): number;
        /**
         * @param value
         */
        set_color_depth(value: number): void;
        get_thumbnails(): Gee.ArrayList;
        /**
         * @param value
         */
        set_thumbnails(value: Gee.ArrayList): void;
    }

    export const VisualItem: VisualItemNamespace & {
        new (): VisualItem; // This allows `obj instanceof VisualItem`
    };

    namespace WritableContainer {
        /**
         * Interface for implementing WritableContainer.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @param item
             * @param cancellable
             * @param _callback_
             * @virtual
             */
            vfunc_add_item(
                item: MediaFileItem,
                cancellable?: Gio.Cancellable | null,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * @param _res_
             * @virtual
             */
            vfunc_add_item_finish(_res_: Gio.AsyncResult): void;
            /**
             * @param container
             * @param cancellable
             * @param _callback_
             * @virtual
             */
            vfunc_add_container(
                container: MediaContainer,
                cancellable?: Gio.Cancellable | null,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * @param _res_
             * @virtual
             */
            vfunc_add_container_finish(_res_: Gio.AsyncResult): void;
            /**
             * @param object
             * @param cancellable
             * @param _callback_
             * @virtual
             */
            vfunc_add_reference(
                object: MediaObject,
                cancellable?: Gio.Cancellable | null,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * @param _res_
             * @virtual
             */
            vfunc_add_reference_finish(_res_: Gio.AsyncResult): string;
            /**
             * @param id
             * @param cancellable
             * @param _callback_
             * @virtual
             */
            vfunc_remove_item(
                id: string,
                cancellable?: Gio.Cancellable | null,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * @param _res_
             * @virtual
             */
            vfunc_remove_item_finish(_res_: Gio.AsyncResult): void;
            /**
             * @param id
             * @param cancellable
             * @param _callback_
             * @virtual
             */
            vfunc_remove_container(
                id: string,
                cancellable?: Gio.Cancellable | null,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * @param _res_
             * @virtual
             */
            vfunc_remove_container_finish(_res_: Gio.AsyncResult): void;
            /**
             * @virtual
             */
            vfunc_get_create_classes(): Gee.ArrayList;
            /**
             * @param value
             * @virtual
             */
            vfunc_set_create_classes(value: Gee.ArrayList): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends MediaContainer.ConstructorProps {
            create_classes: Gee.ArrayList;
            createClasses: Gee.ArrayList;
        }
    }

    export interface WritableContainerNamespace {
        $gtype: GObject.GType<WritableContainer>;
        prototype: WritableContainer;
    }
    /**
     * @gir-type Interface
     */
    interface WritableContainer extends MediaContainer, WritableContainer.Interface {
        // Properties

        get create_classes(): Gee.ArrayList;
        set create_classes(val: Gee.ArrayList);
        get createClasses(): Gee.ArrayList;
        set createClasses(val: Gee.ArrayList);

        // Methods

        /**
         * @param upnp_class
         */
        can_create(upnp_class: string): boolean;
        /**
         * @param item
         * @param cancellable
         */
        add_item(item: MediaFileItem, cancellable?: Gio.Cancellable | null): globalThis.Promise<void>;
        /**
         * @param item
         * @param cancellable
         * @param _callback_
         */
        add_item(
            item: MediaFileItem,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param item
         * @param cancellable
         * @param _callback_
         */
        add_item(
            item: MediaFileItem,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        add_item_finish(_res_: Gio.AsyncResult): void;
        /**
         * @param container
         * @param cancellable
         */
        add_container(container: MediaContainer, cancellable?: Gio.Cancellable | null): globalThis.Promise<void>;
        /**
         * @param container
         * @param cancellable
         * @param _callback_
         */
        add_container(
            container: MediaContainer,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param container
         * @param cancellable
         * @param _callback_
         */
        add_container(
            container: MediaContainer,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        add_container_finish(_res_: Gio.AsyncResult): void;
        /**
         * @param object
         * @param cancellable
         */
        add_reference(object: MediaObject, cancellable?: Gio.Cancellable | null): globalThis.Promise<string>;
        /**
         * @param object
         * @param cancellable
         * @param _callback_
         */
        add_reference(
            object: MediaObject,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param object
         * @param cancellable
         * @param _callback_
         */
        add_reference(
            object: MediaObject,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * @param _res_
         */
        add_reference_finish(_res_: Gio.AsyncResult): string;
        /**
         * @param id
         * @param cancellable
         */
        remove_item(id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<void>;
        /**
         * @param id
         * @param cancellable
         * @param _callback_
         */
        remove_item(
            id: string,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param id
         * @param cancellable
         * @param _callback_
         */
        remove_item(
            id: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        remove_item_finish(_res_: Gio.AsyncResult): void;
        /**
         * @param id
         * @param cancellable
         */
        remove_container(id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<void>;
        /**
         * @param id
         * @param cancellable
         * @param _callback_
         */
        remove_container(
            id: string,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param id
         * @param cancellable
         * @param _callback_
         */
        remove_container(
            id: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        remove_container_finish(_res_: Gio.AsyncResult): void;
        get_create_classes(): Gee.ArrayList;
        /**
         * @param value
         */
        set_create_classes(value: Gee.ArrayList): void;
    }

    export const WritableContainer: WritableContainerNamespace & {
        new (): WritableContainer; // This allows `obj instanceof WritableContainer`
    };

    namespace DataSource {
        /**
         * Interface for implementing DataSource.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @param seek
             * @param playspeed
             * @virtual
             */
            vfunc_preroll(seek?: HTTPSeekRequest | null, playspeed?: PlaySpeedRequest | null): Gee.List | null;
            /**
             * @virtual
             */
            vfunc_start(): void;
            /**
             * @virtual
             */
            vfunc_freeze(): void;
            /**
             * @virtual
             */
            vfunc_thaw(): void;
            /**
             * @virtual
             */
            vfunc_stop(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DataSourceNamespace {
        $gtype: GObject.GType<DataSource>;
        prototype: DataSource;
    }
    /**
     * @gir-type Interface
     */
    interface DataSource extends GObject.Object, DataSource.Interface {
        // Methods

        /**
         * @param seek
         * @param playspeed
         */
        preroll(seek?: HTTPSeekRequest | null, playspeed?: PlaySpeedRequest | null): Gee.List | null;
        start(): void;
        freeze(): void;
        thaw(): void;
        stop(): void;
    }

    export const DataSource: DataSourceNamespace & {
        new (): DataSource; // This allows `obj instanceof DataSource`
    };

    namespace UpdatableObject {
        /**
         * Interface for implementing UpdatableObject.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @param _callback_
             * @virtual
             */
            vfunc_commit(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * @param _res_
             * @virtual
             */
            vfunc_commit_finish(_res_: Gio.AsyncResult): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends MediaObject.ConstructorProps {}
    }

    export interface UpdatableObjectNamespace {
        $gtype: GObject.GType<UpdatableObject>;
        prototype: UpdatableObject;
    }
    /**
     * @gir-type Interface
     */
    interface UpdatableObject extends MediaObject, UpdatableObject.Interface {
        // Methods

        commit(): globalThis.Promise<void>;
        /**
         * @param _callback_
         */
        commit(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _callback_
         */
        commit(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        commit_finish(_res_: Gio.AsyncResult): void;
    }

    export const UpdatableObject: UpdatableObjectNamespace & {
        new (): UpdatableObject; // This allows `obj instanceof UpdatableObject`
    };

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

export default RygelServer;

// END
